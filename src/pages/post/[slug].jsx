import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const EachPost = ({ post }) => {
  const { image, title, body, createdAt } = post.fields;
  return (
    <div>
      <div className="rounded-sm shadow-xl my-4">
        <div>
          <img src={image.fields.file.url} alt="" />
        </div>
        <div className="px-4 py-3">
          <div className="my-2">
            <p className="text-3xl text-gray-800 font-semibold">{title}</p>
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
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'post',
    'fields.slug': params.slug,
  });

  return {
    props: {
      post: items[0],
    },
  };
};

export default EachPost;
