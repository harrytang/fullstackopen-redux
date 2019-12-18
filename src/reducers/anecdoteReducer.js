/*
 * @Author: Harry Tang - harry@powerkernel.com
 * @Date: 2019-12-18 01:31:06
 * @Last Modified by: Harry Tang - harry@powerkernel.com
 * @Last Modified time: 2019-12-18 01:57:10
 */

import anecdoteService from "./../services/anecdotes";

// export const voteOf = id => {
//   return {
//     type: "VOTE",
//     data: { id }
//   };
// };

// export const add = content => {
//   return {
//     type: "ADD",
//     data: { content }
//   };
// };

const reducer = (state = [], action) => {
  switch (action.type) {
    case "VOTE":
      const toVote = state.find(item => item.id === action.data.id);
      const voted = {
        ...toVote,
        votes: toVote.votes + 1
      };
      return state
        .map(item => (item.id === action.data.id ? voted : item))
        .sort((a, b) => b.votes - a.votes);
    case "ADD":
      const item = action.data;
      return state.concat(item).sort((a, b) => b.votes - a.votes);
    case "INIT_NOTES":
      return action.data;
    default:
      return state.sort((a, b) => b.votes - a.votes);
  }
};

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: "INIT_NOTES",
      data: anecdotes.sort((a, b) => b.votes - a.votes)
    });
  };
};

export const add = content => {
  return async dispatch => {
    const anecdote = await anecdoteService.createNew(content);
    dispatch({
      type: "ADD",
      data: anecdote
    });
  };
};

export const voteOf = (id, anecdote) => {
  return async dispatch => {
    const obj = await anecdoteService.update(id, {
      ...anecdote,
      votes: anecdote.votes + 1
    });
    dispatch({
      type: "VOTE",
      data: obj
    });
  };
};

export default reducer;
