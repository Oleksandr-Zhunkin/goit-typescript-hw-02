import { HiSearch } from "react-icons/hi";

export const SearchBar = ({ onSubmit }) => {
  return (
    <header className="bg-lime-400 p-5 flex justify-center items-center mb-20 rounded-2xl">
      <form
        onSubmit={onSubmit}
        className="flex justify-center items-center gap-5 relative"
      >
        <HiSearch className="absolute top-4 left-2 text-gray-500" />
        <input
          className="p-2 border-b-2 border-gray-500 rounded-lg outline-none w-60 bg-transparent text-black hover:border-black pl-8 relative"
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos..."
        />

        <button
          className="border-2 rounded-xl py-2 px-5 border-gray-500 font-bold hover:border-black hover:bg-lime-600"
          type="submit"
        >
          Search
        </button>
      </form>
    </header>
  );
};
