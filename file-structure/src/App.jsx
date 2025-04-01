import { useEffect, useState } from "react";
import Data from "./data";
import RenderList from "./RenderList";
import { AiTwotoneFileAdd } from "react-icons/ai";
import { AiTwotoneFolderAdd } from "react-icons/ai";
import { LuListCollapse } from "react-icons/lu";

const App = () => {
  // const [data, setData] = useState(localStorage.getItem("fileFolderData")!=='undefined' ? JSON.parse(localStorage.getItem("fileFolderData")) : Data);
  const [data, setData] = useState(Data);
  const [collapse, setCollapse] = useState(false);
  // useEffect(()=>{
  //     localStorage.setItem("fileFolderData",JSON.stringify(data));
  // },[])

  function handleFileAdd(parentId) {
    const value = prompt("Enter the file name");

    function handleListUpdate(list) {
      return list.map((element) => {
        if (Number(element.id) === Number(parentId)) {
          const newFile = {
            id: Date.now(),
            fileName: value,
            isFolder: false,
            children: [],
          };
          return {
            ...element,
            children: [...element.children, newFile],
          };
        } else if (element.isFolder) {
          return { ...element, children: handleListUpdate(element.children) };
        }

        return element;
      });
    }
    setData((prev) => handleListUpdate(prev));
    // localStorage.setItem("fileFolderData",JSON.stringify(data));
  }
  function handleFolderAdd(parentId) {
    const value = prompt("Enter the name of new folder");

    function handleNewFolder(list) {
      return list.map((element) => {
        if (Number(element.id) === Number(parentId)) {
          const newFolder = {
            id: Date.now(),
            fileName: value,
            isFolder: true,
            children: [],
          };
          return {
            ...element,
            children: [...element.children, newFolder],
          };
        } else if (element.isFolder)
          return { ...element, children: handleNewFolder(element.children) };
        return element;
      });
    }

    setData((prev) => handleNewFolder(prev));
    // localStorage.setItem("fileFolderData",JSON.stringify(data));
  }

  function handleDelete(elementId) {
    function itemDelete(list) {
      return list
        .filter((element) => element.id !== elementId)
        .map((element) => {
          if (element.isFolder)
            return { ...element, children: itemDelete(element.children) };
          return element;
        });
    }

    setData((prev) => itemDelete(prev));
  }

  return (
    <div className="border-1 m-2 w-96">
      <div className="flex gap-1 border-b-1">
        <h1 className="p-1.5 text-xl font-semibold">File Structure</h1>

        <button
          title="New File"
          onClick={(e) => {
            e.preventDefault();
            const value = prompt("Enter the name");
            setData((prev) => [
              ...prev,
              {
                id: Date.now(),
                fileName: value,
                isFolder: false,
                children: [],
              },
            ]);
          }}
          className="text-2xl"
        >
          {<AiTwotoneFileAdd />}
        </button>

        <button
          title="New Folder"
          onClick={(e) => {
            e.preventDefault();
            const value = prompt("Enter the name");
            setData((prev) => [
              {
                id: Date.now(),
                fileName: value,
                isFolder: true,
                children: [],
              },
              ...prev,
            ]);
          }}
          className="text-2xl"
        >
          {<AiTwotoneFolderAdd />}
        </button>

        <button title="Collapse" onClick={() => setCollapse((prev) => !prev)}>
          <LuListCollapse className="text-2xl cursor-pointer" />
        </button>
      </div>
      {!collapse &&
        data.map((element) => {
          return (
            <RenderList
              key={element.id}
              data={element}
              handleFileAdd={handleFileAdd}
              handleFolderAdd={handleFolderAdd}
              handleDelete={handleDelete}
            ></RenderList>
          );
        })}
    </div>
  );
};

export default App;
