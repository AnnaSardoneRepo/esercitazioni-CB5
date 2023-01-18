/**
 * Javascript api handle
 *
 * PlaceholderJSON with different sets of common resources (resource):
 *
 * /posts	100 posts
 * /comments	500 comments
 * /albums	100 albums
 * /photos	5000 photos
 * /todos	200 todos
 * /users	10 users
 *
 * @link   https://jsonplaceholder.typicode.com
 * @since  16-01-23
 */

const BASE_URL = "https://jsonplaceholder.typicode.com";

const GET = async (resource) => {
  try {
    const res = await fetch(`${BASE_URL}/${resource}`);

    if (res.status >= 400) {
      throw new Error("Problema di connessione");
    }

    const data = await res.json();

    return data;

  } catch (err) {
    return { status: false };
  } finally {
    console.log("ok");
  }
};

const POST = async (resource, body) => {
  const res = await fetch(`${BASE_URL}/${resource}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();

  return data;
};

export { GET, POST };