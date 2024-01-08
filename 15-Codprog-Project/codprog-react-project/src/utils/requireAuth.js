import { getUser } from "./getUser";
import { redirect } from "react-router-dom";

export async function requireAuth({ redirectTo }) {
  const user = await getUser();
  if (user === null) {
    throw redirect(`/login?redirectTo=${redirectTo}`);
  }
}
