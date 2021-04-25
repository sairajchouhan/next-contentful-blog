const Post = () => {
  return (
    <div className="rounded-sm shadow-xl ">
      <div>
        <img src="/4.jpg" alt="" class="" />
      </div>
      <div className="px-4 py-3">
        <div className="my-2">
          <p className="text-3xl text-gray-800 font-semibold">
            Title of the post
          </p>
          <p className="truncate text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            laudantium velit error beatae voluptatum repellat asperiores
            provident rerum quod non repudiandae, dicta voluptatem. Eaque labore
            suscipit
          </p>
        </div>
        <button className="block  px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md mt-3 cursor-pointer">
          Read More...
        </button>
      </div>
    </div>
  );
};

export default Post;
