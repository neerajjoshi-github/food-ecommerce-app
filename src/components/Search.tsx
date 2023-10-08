import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { Item } from "../store/slices/itemsSlice";
import { useNavigate } from "react-router-dom";
import { searchItemWithTitle } from "../utils/firebaseFunctions";

type SearchProps = {
  className: string;
};
const Search: React.FC<SearchProps> = ({ className }) => {
  const [searchedData, setSearchedData] = useState<Item[]>([]);
  const [searchedText, setSearchedText] = useState("");
  const navigate = useNavigate();

  const fetchItems = async () => {
    const items = await searchItemWithTitle(searchedText);
    setSearchedData(items);
  };

  useEffect(() => {
    fetchItems();
  }, [searchedText]);

  const onMouseDownHandler = (itemId: string) => {
    console.log("HELLO");
    navigate(`/item/${itemId}`);
    setSearchedText("");
  };

  return (
    <div
      className={`${className} mx-4 lg:mx-10 flex-1 bg-[#e3e4e7] flex items-center rounded-lg focus-within:rounded-b-none relative group`}
    >
      <div className="py-1 px-2 text-gray-600">
        <BsSearch size={20} />
      </div>
      <input
        onChange={(e) => setSearchedText(e.target.value)}
        value={searchedText}
        placeholder="search..."
        type="text"
        className="w-full p-2 bg-transparent outline-none peer"
      />

      <div className="group-focus-within:flex hidden absolute top-10 left-0 w-full max-h-80 bg-[#e3e4e7] overflow-auto">
        <div className="flex flex-col  w-full">
          {searchedData.length !== 0 ? (
            searchedData.map((item) => {
              return (
                <div
                  onMouseDown={() => onMouseDownHandler(item.databaseId)}
                  className="z-10 py-2 px-6 flex gap-4 items-center cursor-pointer hover:bg-black/10"
                  key={item.id}
                >
                  <div>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm capitalize">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="w-full py-4 text-center text-sm">
              no results found...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
