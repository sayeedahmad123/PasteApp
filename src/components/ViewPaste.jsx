import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const ViewPaste = () => {
  const {id} = useParams();
  console.log(id)

  const pastes = useSelector((state) => state.paste.pastes);

  // Filter pastes based on search term (by title or content)
  const paste = pastes.filter((paste) => paste._id === id)[0];

  console.log("Paste->",paste);

  return (
    <div>
      <div
        className="flex flex-row-gap-7
      place-content-between"
      >
        <input
          className="p-1 rounded-2xl mt-2 w-[60%] "
          type="text"
          placeholder="enter the title"
          value={paste.title}
          disabled
          onChange={(e) => setTitle(e.target.value)}
        />
     
      </div>
      <div className="mt-4">
        <textarea
          className="rounded-2xl mt-4,
       min-w-[500px] p-4"
          value={paste.content}
          placeholder="enter content"
          disabled
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default ViewPaste;
