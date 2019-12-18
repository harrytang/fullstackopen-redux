/*
 * @Author: Harry Tang - harry@powerkernel.com 
 * @Date: 2019-12-17 19:32:37 
 * @Last Modified by: Harry Tang - harry@powerkernel.com
 * @Last Modified time: 2019-12-17 19:37:46
 */

import deepFreeze from "deep-freeze";
import reducer from "./anecdoteReducer";

describe("deep-freeze reducer", () => {
  



  test("vote is incremented", () => {
    const action = {
      type: "VOTE",
      data: {id: 1}
    };

    const state = [{    
        content: "test anecdote",
        id: 1,
        votes: 0
    }];

    deepFreeze(state);
    const newState = reducer(state, action);
    expect(newState).toEqual([{
        content: "test anecdote",
        id: 1,
        votes: 1
    }]);
  });
});