import { createSlice } from '@reduxjs/toolkit'
import Toast from 'react-hot-toast';

const initialState = {
 pastes:localStorage.getItem("pastes")
 ? JSON.parse(localStorage.getItem("pastes")): []
}

// let storedPastes;
// try {
//   storedPastes = JSON.parse(localStorage.getItem("pastes")) || [];
// } catch (error) {
//   console.error("Error parsing JSON from localStorage:", error);
//   storedPastes = [];
// }

// const initialState = {
//   pastes: storedPastes,
// };


export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;
      //add a check-> paste already exist wala case
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      Toast("Paste created successfully")
     
    },
    updateToPastes: (state , action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item)=>
      item._id === paste._id);

      if(index >= 0){
        state.pastes[index] = pastes;

        localStorage.setItem("pastes", JSON.stringify(state.pastes));

        toast.success("Paste updates");

      }
     
    },
    resetToPastes: (state, action) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
      
    },
    removeFromPastes :(state, action) =>{
      const pastesId = action.payload;
      console.log(pastesId);
      const index = state.pastes.findIndex((item)=>
      item._id === pastesId);

      if (index >= 0){
        state.pastes.splice(index, 1);

        localStorage.setItem("pastes", JSON.stringify(state.pastes));

        Toast.success("Paste deleted");
      }

    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetToPastes,removeFromPastes} = pasteSlice.actions

export default pasteSlice.reducer