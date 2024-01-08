import { requireAuth } from "../utils/requireAuth";

export async function myCourseLoader({ request }) {
  const pathname = new URL(request.url).pathname;
  await requireAuth({ redirectTo: pathname });
  return null;
}
function MyCourses() {
  return <div>MyCourses</div>;
}
export default MyCourses;
