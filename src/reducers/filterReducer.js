/*
 * @Author: Harry Tang - harry@powerkernel.com
 * @Date: 2019-12-17 20:56:26
 * @Last Modified by: Harry Tang - harry@powerkernel.com
 * @Last Modified time: 2019-12-17 21:21:37
 */


export const query = content => {
  return {
    type: "QUERY",
    data: { content }
  };
};

const reducer = (state = "", action) => {
  switch (action.type) {
    case "QUERY":
      return action.data.content;
    default:
      return state;
  }
};

export default reducer;
