import { createFileRoute } from "@tanstack/react-router";

import ChapterPage from "@/pages/chapter";

export const Route = createFileRoute("/lesson/$chapterId/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { chapterId } = Route.useParams();

  return <ChapterPage chapterId={chapterId} />;
}
