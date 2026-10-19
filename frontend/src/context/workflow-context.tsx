
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
  addWorkflow: (data: CreateWorkflowValues) => void;
};

const WorkflowContext =
  createContext<WorkflowContextType | undefined>(undefined);

export function WorkflowProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [workflows, setWorkflows] =
    useState<Workflow[]>(mockWorkflows);

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

    setWorkflows((previousWorkflows) => [
      newWorkflow,
      ...previousWorkflows,
    ]);
  };

  return (
    <WorkflowContext.Provider
      value={{ workflows, addWorkflow }}
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
