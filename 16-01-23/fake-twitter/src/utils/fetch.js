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
  console.log(resource)
  const res = await fetch(`${BASE_URL}/${resource}`);
  const data = await res.json();
  return data;
};


export { GET };