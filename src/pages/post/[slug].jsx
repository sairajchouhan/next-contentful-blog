import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const EachPost = ({ post }) => {
  if (!post)
    return <p className="text-8xl text-gray-600 text-center">Loading...</p>;
  const { image, title, body, createdAt } = post.fields;
  return (
    <div className="w-5/6 mx-auto">
      <div className="rounded-sm shadow-2xl my-4">
        <div>
          <img src={image.fields.file.url} alt="" />
        </div>
        <div className="px-8 pb-6">
          <div className="my-2">
            <p className="text-4xl text-gray-800 font-semibold my-4">{title}</p>
          </div>
          <div>{documentToReactComponents(body)}</div>
        </div>
      </div>
    </div>
  );
};

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const { items } = await client.getEntries({ content_type: 'post' });

  const paths = items.map((item) => ({
    params: { slug: item.fields.slug },
  }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'post',
    'fields.slug': params.slug,
  });

  if (!items || items.length <= 0) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      post: items[0],
      revalidate: 1,
    },
  };
};

export default EachPost;
