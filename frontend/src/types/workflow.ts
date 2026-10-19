
export type WorkflowStatus = "active" | "inactive";

export interface Workflow {
  id: string;
  name: string;
  description: string;
  status: WorkflowStatus;
  trigger: string;
  totalExecutions: number;
  createdAt: string;
}

export type WorkflowFilter = "all" | WorkflowStatus;
