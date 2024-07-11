type LoadMore = {
  handleMoreClick: () => void;
};

export const LoadMoreBtn = ({ handleMoreClick }: LoadMore) => {
  return (
    <div className="flex justify-center items-center mt-6 p-4">
      <button
        className="border-2 rounded-xl py-2 px-5 border-black font-bold hover:border-gray-500 hover:bg-lime-400"
        type="button"
        onClick={handleMoreClick}
      >
        Load more
      </button>
    </div>
  );
};
