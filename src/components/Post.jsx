import Link from 'next/link';

const Post = ({ post }) => {
  const { title, image, excerpt, slug } = post;

  return (
    <div className="rounded-sm shadow-xl my-4">
      <div>
        <img src={image.fields.file.url} alt="" />
      </div>
      <div className="px-4 py-3">
        <div className="my-2">
          <p className="text-3xl text-gray-800 font-semibold">{title}</p>
          <p className="truncate text-gray-700">{excerpt}</p>
        </div>
        <Link href={`/post/${slug}`}>
          <button className="focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md mt-3 cursor-pointer">
            Read More...
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Post;
