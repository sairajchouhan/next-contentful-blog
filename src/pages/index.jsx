import { createClient } from 'contentful';

import Post from '../components/Post';

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.sys.id} post={post.fields} />
      ))}
    </div>
  );
}

export const getStaticProps = async ({ posts }) => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const res = await client.getEntries({ content_type: 'post' });

  return {
    props: { posts: res.items },
  };
};
