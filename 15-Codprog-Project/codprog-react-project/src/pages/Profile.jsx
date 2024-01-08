import { requireAuth } from "../utils/requireAuth";
export async function profileLoader({ request }) {
  const pathname = new URL(request.url).pathname;
  await requireAuth({ redirectTo: pathname });
  return null;
}
function Profile() {
  return <div>Profile</div>;
}
export default Profile;
