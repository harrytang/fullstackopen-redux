/*
 * @Author: Harry Tang - harry@powerkernel.com
 * @Date: 2019-12-17 20:56:26
 * @Last Modified by: Harry Tang - harry@powerkernel.com
 * @Last Modified time: 2019-12-18 02:03:31
 */

export const hide = () => {
  return {
    type: "HIDE",
    data: { content: "" }
  };
};

// export const set = content => {
//   return {
//     type: "SET",
//     data: { content }
//   };
// };

export const set = (content, timeout) => {
  return async dispatch => {    
    dispatch({
      type: "SET",
      data: {content}
    });
    setTimeout(() => {
      dispatch({
        type: "HIDE",
      });
    }, timeout*1000);
  };
};

const reducer = (state = "", action) => {
  switch (action.type) {
    case "SET":
      return action.data.content;
    case "HIDE":
      return "";
    default:
      return state;
  }
};

export default reducer;
