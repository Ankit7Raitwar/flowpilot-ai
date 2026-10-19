
"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import { mockWorkflows } from "@/data/mock-workflows";

import type { Workflow } from "@/types/workflow";
import type { CreateWorkflowValues } from "@/schemas/workflow-schema";

type WorkflowContextType = {
  workflows: Workflow[];

  getWorkflowById: (id: string) => Workflow | undefined;

  addWorkflow: (data: CreateWorkflowValues) => void;

  updateWorkflow: (
    id: string,
    data: CreateWorkflowValues
  ) => boolean;

  deleteWorkflow: (id: string) => boolean;

  toggleWorkflowStatus: (id: string) => void;
};

const WorkflowContext = createContext<
  WorkflowContextType | undefined
>(undefined);

export function WorkflowProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [workflows, setWorkflows] =
    useState<Workflow[]>(mockWorkflows);

  // Find a workflow using its ID
  const getWorkflowById = (id: string) => {
    return workflows.find((workflow) => workflow.id === id);
  };

  // Create a new workflow
  const addWorkflow = (data: CreateWorkflowValues) => {
    const newWorkflow: Workflow = {
      id: crypto.randomUUID(),
      name: data.name,
      description: data.description,
      trigger: data.trigger,
      status: data.status,
      totalExecutions: 0,
      createdAt: new Date().toISOString().slice(0, 10),
    };

    setWorkflows((previous) => [
      newWorkflow,
      ...previous,
    ]);
  };

  // Update an existing workflow
  const updateWorkflow = (
    id: string,
    data: CreateWorkflowValues
  ): boolean => {
    if (!getWorkflowById(id)) {
      return false;
    }

    setWorkflows((previous) =>
      previous.map((workflow) =>
        workflow.id === id
          ? {
              ...workflow,
              ...data,
            }
          : workflow
      )
    );

    return true;
  };

  // Delete a workflow
  const deleteWorkflow = (id: string): boolean => {
    if (!getWorkflowById(id)) {
      return false;
    }

    setWorkflows((previous) =>
      previous.filter((workflow) => workflow.id !== id)
    );

    return true;
  };

  // Change Active <-> Inactive
  const toggleWorkflowStatus = (id: string) => {
    setWorkflows((previous) =>
      previous.map((workflow) =>
        workflow.id === id
          ? {
              ...workflow,
              status:
                workflow.status === "active"
                  ? "inactive"
                  : "active",
            }
          : workflow
      )
    );
  };

  return (
    <WorkflowContext.Provider
      value={{
        workflows,
        getWorkflowById,
        addWorkflow,
        updateWorkflow,
        deleteWorkflow,
        toggleWorkflowStatus,
      }}
    >
      {children}
    </WorkflowContext.Provider>
  );
}

export function useWorkflows() {
  const context = useContext(WorkflowContext);

  if (!context) {
    throw new Error(
      "useWorkflows must be used inside WorkflowProvider"
    );
  }

  return context;
}
