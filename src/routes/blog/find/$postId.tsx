import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/find/$postId")({
  component: RouteComponent,
});

function RouteComponent() {
  const params = Route.useParams();
  const { postId } = params;
  return <div>Hello "/blog/{postId}"!</div>;
}
