/*
 * @Author: Harry Tang - harry@powerkernel.com
 * @Date: 2019-12-17 20:25:11
 * @Last Modified by: Harry Tang - harry@powerkernel.com
 * @Last Modified time: 2019-12-17 23:53:18
 */

import React from "react";
import { connect } from "react-redux";
import { add } from "./../reducers/anecdoteReducer";
import { set, hide } from "./../reducers/notificationReducer";

const AnecdoteForm = props => {
  const addHandler = event => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    props.add(content);
    props.set(`Anecdote has been added`);
    setTimeout(() => {
      props.hide();
    }, 5000);
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addHandler}>
        <div>
          <input name="anecdote" />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

export default connect(null, {
  add,
  set,
  hide
})(AnecdoteForm);
