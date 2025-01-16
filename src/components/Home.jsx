import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams("");
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if(pasteId) {
      const paste = allPastes.find((p) => p.id === pasteId)
      setTitle(paste.title);
      setValue(paste.content);
    }
    
  }, [pasteId])
  

  function createPaste(){
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt:new Date().toISOString(),
    }

 
    

    if(pasteId){
      //update
      dispatch(updateToPastes(paste));
    }
    else{
      //create
      dispatch(addToPastes(paste));
    }
    //after createtion or updation
    setTitle('');
    setValue(' ');
    setSearchParams({});
  }

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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={createPaste} className="p-2 rounded-2xl mt-2">
          {pasteId ? "Update Paste" : "Create My Paste"}
        </button>
      </div>
      <div className="mt-4">
        <textarea
          className="rounded-2xl mt-4,
         min-w-[500px] p-4"
          value={value}
          placeholder="enter content"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default Home;
