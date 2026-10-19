
import { z } from "zod";

export const createWorkflowSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Workflow name must be at least 3 characters")
    .max(80, "Workflow name cannot exceed 80 characters"),

  description: z
    .string()
    .trim()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description cannot exceed 500 characters"),

  trigger: z.enum(["Webhook", "Schedule", "Manual"]),

  status: z.enum(["active", "inactive"]),
});

export type CreateWorkflowInput = z.input<
  typeof createWorkflowSchema
>;

export type CreateWorkflowValues = z.output<
  typeof createWorkflowSchema
>;
