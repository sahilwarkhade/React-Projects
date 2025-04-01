import { useEffect, useState } from "react";

const MemoryGame = () => {
  const [gridVal, setGridVal] = useState(4);
  const [tiles, setTiles] = useState([]);
  const [flipedTiles, setFlipedTiles] = useState([]);
  const [savedTiles, setSavedTiles] = useState([]);
  const [isDisable, setIsDisable] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [count, setCount] = useState(0);

  const initializeGrid = () => {
    if (gridVal < 2 || gridVal > 10) return;
    const totalTiles = gridVal * gridVal;
    const totalNumbers = Math.floor(totalTiles / 2);
    let grid = [...Array(totalNumbers).fill(1)].map(
      (num, index) => num + index
    );
    grid = [...grid, ...grid].sort(() => Math.random() - 0.5);
    setTiles(grid);
    setFlipedTiles([]);
    setSavedTiles([]);
    setIsWon(false);
    setIsDisable(false);
    setCount(0)
  };

  const handleOnclick = (index) => {
    if (isDisable || isWon) return;

    if (flipedTiles.length === 0) {
      setCount((prev) => prev + 1);
      setFlipedTiles([...flipedTiles, index]);
      return;
    }
    if (flipedTiles.length === 1) {
      setIsDisable(true);
      const lastFlipedTile = flipedTiles[0];
      setFlipedTiles([...flipedTiles, index]);
      if (tiles[lastFlipedTile] === tiles[index]) {
        setSavedTiles([...savedTiles, index, lastFlipedTile]);
        setFlipedTiles([]);
      } else {
        setTimeout(() => {
          setFlipedTiles([]);
        }, 1000);
      }
      setIsDisable(false);
    }
  };

  const handleBtnClick = () => {
    initializeGrid();
  };

  useEffect(() => {
    initializeGrid();
  }, [gridVal]);

  useEffect(() => {
    if (tiles.length > 0 && savedTiles.length == tiles.length) setIsWon(true);
  }, [savedTiles, tiles]);

  const isFliped = (index) =>
    flipedTiles.includes(index) || savedTiles.includes(index);

  const isSaved = (index) => savedTiles.includes(index);
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 font-sans">
      <h1 className="text-xl font-bold">Memory Game</h1>
      {/* Input box */}
      <div className="flex gap-3.5">
      <label htmlFor="grid-val" className="font-semibold">
        Grid:
        <input
          type="number"
          id="grid-val"
          value={gridVal}
          onChange={(e) => setGridVal(e.target.value)}
          min={2}
          max={10}
          className="w-8 h-5 text-center border ml-2 rounded-sm"
        />
      </label>
      <div className="font-semibold flex items-center">Moves: <p className="ml-1.5">{count}</p></div>
      </div>
      {/* Tiles */}
      <div
        className={`grid gap-2`}
        style={{ gridTemplateColumns: `repeat(${gridVal},minmax(65px,1fr))` }}
      >
        {tiles.map((tile, index) => {
          return (
            <div
              key={index}
              className={`cursor-pointer flex justify-center items-center border aspect-square text-xl font-bold rounded-lg animate-flip duration-500 ${
                isFliped(index)
                  ? isSaved(index)
                    ? "bg-green-700"
                    : "bg-blue-600"
                  : "bg-gray-400"
              }`}
              onClick={() => handleOnclick(index)}
            >
              {isFliped(index) ? tile : "?"}
            </div>
          );
        })}
      </div>
      {/* Result */}
      <div className="text-2xl font-bold animate-bounce">
        {isWon && "You Won👏"}
      </div>
      {/* restart / play agian btn */}
      <button
        className="border-2 rounded-lg min-w-18 min-h-10 px-5 bg-green-800 text-white font-bold"
        onClick={handleBtnClick}
      >
        {isWon ? "Play again" : "Restart"}
      </button>
    </div>
  );
};

export default MemoryGame;
