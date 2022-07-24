import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "reactionList",
  initialState: [
    // {
    //   id: "gh5cGItobveQAEPw5B",
    //   url: "https://media1.giphy.com/media/l4pTb7e732SolscAE/200.gif?cid=5b9dcee58fbbkuwvm28ke83p9rvr2p7d5jfzgyyy4ftsftvw&rid=200.gif&ct=g",
    // },
    // {
    //   id: "HQQMsycrGyeoRL1Jiz",
    //   url: "https://media1.giphy.com/media/l4pTb7e732SolscAE/200.gif?cid=5b9dcee58fbbkuwvm28ke83p9rvr2p7d5jfzgyyy4ftsftvw&rid=200.gif&ct=g",
    // },
  ],
  reducers: {
    // IMMER
    addLike: (state, action) => {
      console.log(state);
      state.push(action.payload);
    }, // action creators
    removeLike: (state, action) => {
      const id = action.payload.id;
      console.log(action.payload.id);

      return state.filter((item) => item.id !== id);
    },
  },
});
