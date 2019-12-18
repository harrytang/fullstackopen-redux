/*
 * @Author: Harry Tang - harry@powerkernel.com
 * @Date: 2019-12-17 19:24:35
 * @Last Modified by: Harry Tang - harry@powerkernel.com
 * @Last Modified time: 2019-12-18 01:41:03
 */
import React, { useEffect } from "react";
import { connect } from "react-redux";

import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Notification from "./components/Notification";
import Filter from "./components/Filter";

import { initializeAnecdotes } from "./reducers/anecdoteReducer";

const App = props => {
  
  useEffect(() => {
    props.initializeAnecdotes();
  }, [props]);

  return (
    <div>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default connect(null, { initializeAnecdotes })(App);
