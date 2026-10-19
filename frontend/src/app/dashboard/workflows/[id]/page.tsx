
import WorkflowDetails from "@/components/workflows/workflow-details";

type WorkflowDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function WorkflowDetailsPage({
  params,
}: WorkflowDetailsPageProps) {
  const { id } = await params;

  return <WorkflowDetails id={id} />;
}
