import { useEffect, useState } from "react";

const App = () => {
  const [result, setResult] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [suggestionBoxActive, setSuggestionBoxActive] = useState(false);

  // // caching is remaining
  // 1]using sessionStorage
  // 2]using localStorage
  // 3]using simple stateVariable

  const fetchData = async () => {
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${inputVal}`
    );
    const data = await response.json();
    setResult(data.recipes);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 400);

    return () => {
      clearInterval(timer);
    };
  }, [inputVal]);
  return (
    <div className="w-full mx-auto">
      <h1 className="text-center text-2xl font-bold">
        AUTO COMPLETE SEARCH BOX
      </h1>
      <div className="flex flex-col items-center justify-center mt-10">
        <input
          type="text"
          placeholder="Enter Something..."
          onChange={(e) => setInputVal(e.target.value)}
          className={`border-1 w-2xl px-4 py-1.5 ${
            inputVal && suggestionBoxActive ? "rounded-t-md" : "rounded-md"
          } `}
          onBlur={() => setSuggestionBoxActive(false)}
          onFocus={() => setSuggestionBoxActive(true)}
        />

        {inputVal && suggestionBoxActive && (
          <div className="border-1 w-2xl max-h-96 rounded-b-sm overflow-y-scroll">
            {result.map((item) => {
              return (
                <span
                  key={item.id}
                  className="block px-2 py-1.5 hover:bg-gray-300"
                >
                  {item.name}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
