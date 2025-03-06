import fetchPosts from "../api/fetchPosts";

const resource = fetchPosts(
  "https://jsonplaceholder.typicode.com/posts?_limit=5"
); //fetchPosts return wrapPromise function
// wrapPromise function take a promise from fetchPosts function

export default function PostSelector({ onSelectPost }) {
  //   throw new Promise(() => {  // if we throw a promise it wont execute next line/lines and fallback will show loading component

  //     console.log("hello world");
  //   });

  const posts = resource.read(); // first time call it will get suspendor and 2nd time call it will get data

  return (
    <div>
      <select onChange={onSelectPost}>
        <option value="">Select Post</option>
        {posts.map((post) => (
          <option key={post.id} value={post.id}>
            {post.title}
          </option>
        ))}
      </select>
    </div>
  );
}
