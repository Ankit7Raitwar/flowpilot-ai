
import DashboardShell from "@/components/dashboard/dashboard-shell";
import { WorkflowProvider } from "@/context/workflow-context";
import { Suspense } from 'react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WorkflowProvider>
       <Suspense fallback={<p>Loading search…</p>}>
       
      <DashboardShell>{children}</DashboardShell>
      </Suspense>
    </WorkflowProvider>
  );
}
