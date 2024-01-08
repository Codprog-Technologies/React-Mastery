export async function getUser() {
  if ("user" in localStorage) {
    const user = JSON.parse(localStorage.getItem("user"));
    if (
      "user_id" in user &&
      "access_token" in user &&
      "refresh_token" in user
    ) {
      return user;
    }
  }
  return null;
}
