import React from "react";

const Header = ({ word, setWord, fetchWord }) => {
  const handleWordSearch = e => {
    setWord(e.target.value);
  };

  const handleSearch = e => {
    e.preventDefault();
    fetchWord(word);
  };

  return (
    <div className="flex items-center justify-center h-24 w-full border-b-2 px-4">
      <form className="flex items-center justify-center  gap-4" action="">
        <input onChange={e => handleWordSearch(e)} value={word} className="text-black h-8 w-96 rounded-full px-4 py-4" type="text" />
        <button onClick={e => handleSearch(e)} className="h-8 w-8 rounded-full">
          <span className="flex align-middle justify-center material-symbols-outlined transition-all hover:scale-125">search</span>
        </button>
      </form>
      <h1 className="text-5xl font-bold ml-auto w-fit">Wordinary</h1>
    </div>
  );
};

export default Header;
