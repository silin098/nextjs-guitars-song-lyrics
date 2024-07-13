import { CiSearch } from "react-icons/ci";
import { users } from "./data";
import { useState, useEffect } from "react";
export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (searchTerm.trim()) {
      const results = users.filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
          user.username.toLowerCase().includes(searchTerm.trim().toLowerCase())
      );

      setSearchResults(results);
    } else {
      setSearchResults([]);
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  function handleChange(e) {
    setSearchTerm(e.target.value);
    if (e.target.value.trim() === "") {
      setShowSuggestions(false);
    } else {
      setShowSuggestions(true);
    }
  }

  function handleOnClick(result) {
    setSearchTerm(result.name);

    setShowSuggestions(false);
  }

  return (
    <>
      <div className="relative flex justify-center mt-5 items-center">
        <div className="flex items-center max-w-screen-sm w-full px-2 py-1 border border-gray-400 rounded-md shadow relative">
          <CiSearch size="1.3rem" />

          <input
            type="text"
            id="searchInput"
            placeholder="Search song here..."
            className="p-1 m-0 border-0 outline-0 w-full  focus:outline-none text-base relative"
            autoComplete="off"
            value={searchTerm}
            onChange={handleChange}
          />

          {showSuggestions && (
            <div
              className={`absolute top-12 left-0 w-full border border-gray-400 p-2 rounded-sm overflow-y-auto `}
            >
              {searchResults.length > 0 ? (
                searchResults.map((result) => {
                  return (
                    <div
                      onClick={() => handleOnClick(result)}
                      key={result.id}
                      className="flex justify-between text-sm mb-2 p-2 cursor-pointer bg-gray-300 rounded-sm"
                    >
                      <p>{result.name}</p>
                      <p>{result.username}</p>
                    </div>
                  );
                })
              ) : (
                <div className="flex justify-between text-sm mb-2 p-2  bg-gray-300 rounded-sm">
                  <p>No Search Found</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
