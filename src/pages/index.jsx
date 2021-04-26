import { createClient } from 'contentful';

import Post from '../components/Post';

export default function Home({ posts }) {
  return (
    <div className="w-3/6 m-auto">
      {posts.map((post) => (
        <Post key={post.sys.id} post={post.fields} />
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const res = await client.getEntries({ content_type: 'post' });
  return {
    props: { posts: res.items },
    revalidate: 10,
  };
};
