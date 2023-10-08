import { useEffect, useState } from "react";
import Button from "../components/reusables/Button";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Item } from "../store/slices/itemsSlice";
import { searchItemWithTitle } from "../utils/firebaseFunctions";
import { debounce } from "../utils/debounce";

const searchFruits = ["Pineapple", "Grapes", "Watermelons", "Banana"];

const SearchPage = () => {
  const [searchedText, setSearchedText] = useState("");
  const [searchedData, setSearchedData] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchItems = async () => {
    const items = await searchItemWithTitle(searchedText);
    setSearchedData(items);
    setLoading(false);
  };

  const debouncedFetch = debounce(fetchItems, 500);

  useEffect(() => {
    if (searchedText === "") return;
    setLoading(true);
    debouncedFetch();
  }, [searchedText]);
  return (
    <div className="w-full ">
      <div className="flex bg-white px-4 py-2">
        <Button
          variant="ghost"
          onClick={() => {
            if (searchedText === "") {
              navigate(-1);
            } else {
              setSearchedText("");
            }
          }}
        >
          <BsArrowLeft size={24} />
        </Button>
        <input
          type="text"
          value={searchedText}
          onChange={(e) => setSearchedText(e.target.value)}
          className="flex-1 text-lg outline-none"
          placeholder="search.."
        />
      </div>
      {searchedText === "" ? (
        <div className="p-5 mt-2">
          <p>Search for fresh fruits</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {searchFruits.map((fruit) => {
              return (
                <span
                  key={fruit}
                  onClick={() => setSearchedText(fruit)}
                  className="py-1 px-2 cursor-pointer border rounded-md border-primary text-primary text-sm"
                >
                  {fruit}
                </span>
              );
            })}
          </div>
        </div>
      ) : loading ? (
        <div className="text-center py-4">loading.....</div>
      ) : searchedData.length === 0 ? (
        <div className="text-center py-4">no results found...</div>
      ) : (
        <div>
          {searchedData.map((item) => {
            return (
              <div
                onClick={() => navigate(`/item/${item.databaseId}`)}
                className="z-10 border-b border-gray-500 py-2 px-6 flex gap-4 items-center cursor-pointer hover:bg-black/10"
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
          })}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
