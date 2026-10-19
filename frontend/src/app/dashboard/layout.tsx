
import DashboardShell from "@/components/dashboard/dashboard-shell";
import { WorkflowProvider } from "@/context/workflow-context";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WorkflowProvider>
      <DashboardShell>{children}</DashboardShell>
    </WorkflowProvider>
  );
}
