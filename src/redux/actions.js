export const addLike = (data) => {
  return {
    type: "reactionList/addLike",
    payload: data,
  };
};

export const removeLike = (data) => {
  return {
    type: "reactionList/removeLike",
    payload: data,
  };
};

// action creators => function
