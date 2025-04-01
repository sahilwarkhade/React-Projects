import React, { useState } from "react";
import { FaFolder } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { AiTwotoneFileAdd } from "react-icons/ai";
import { AiTwotoneFolderAdd } from "react-icons/ai";
import { PiTrashDuotone } from "react-icons/pi";

const RenderList = ({ data: element, handleFileAdd, handleFolderAdd,handleDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="ml-3 w-full p-1.5 " key={element.id}>
        <div
          className="flex gap-1 cursor-pointer"
          onClick={(e) => {e.stopPropagation();setIsOpen((prev) => !prev)}}
        >
          <span className="flex gap-1">
            {element.isFolder && (isOpen ? <FaAngleDown /> : <FaAngleUp />)}
            <p>{element.isFolder ? <FaFolder /> : <FaFileCode />}</p>
            <p>{element.fileName}</p>
            {element.isFolder && (
              <p className="flex text-2xl">
                <AiTwotoneFileAdd
                  title="New File"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(true);
                    handleFileAdd(element.id);
                  }}
                />
                <AiTwotoneFolderAdd
                  title="New Folder"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(true);
                    handleFolderAdd(element.id);
                  }}
                />
              </p>
            )}
            <PiTrashDuotone
            className="text-2xl"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(element.id);
              }}
            />
          </span>
        </div>
        {element.isFolder &&
          isOpen &&
          element.children.map((element) => (
            <RenderList
              key={element.id}
              data={element}
              handleFileAdd={handleFileAdd}
              handleFolderAdd={handleFolderAdd}
              handleDelete={handleDelete}
            ></RenderList>
          ))}
      </div>
    </div>
  );
};

export default RenderList;
