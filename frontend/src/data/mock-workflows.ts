
import type { Workflow } from "@/types/workflow";

export const mockWorkflows: Workflow[] = [
  {
    id: "wf-001",
    name: "AI Lead Qualification",
    description:
      "Analyze incoming leads and classify their priority using AI.",
    status: "active",
    trigger: "Webhook",
    totalExecutions: 125,
    createdAt: "2026-10-10",
  },
  {
    id: "wf-002",
    name: "Email Notification",
    description:
      "Send an email notification whenever a new order arrives.",
    status: "active",
    trigger: "Webhook",
    totalExecutions: 82,
    createdAt: "2026-10-12",
  },
  {
    id: "wf-003",
    name: "Daily Sales Summary",
    description:
      "Generate an automated daily sales report.",
    status: "inactive",
    trigger: "Schedule",
    totalExecutions: 45,
    createdAt: "2026-10-13",
  },
  {
    id: "wf-004",
    name: "Customer Feedback Analyzer",
    description:
      "Classify customer reviews into positive and negative feedback.",
    status: "active",
    trigger: "Manual",
    totalExecutions: 68,
    createdAt: "2026-10-15",
  },
  {
    id: "wf-005",
    name: "CRM Data Synchronization",
    description:
      "Synchronize customer records with a CRM system.",
    status: "inactive",
    trigger: "Schedule",
    totalExecutions: 30,
    createdAt: "2026-10-16",
  },
];
