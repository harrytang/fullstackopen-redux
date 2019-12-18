/*
 * @Author: Harry Tang - harry@powerkernel.com
 * @Date: 2019-12-17 20:27:29
 * @Last Modified by: Harry Tang - harry@powerkernel.com
 * @Last Modified time: 2019-12-18 02:01:38
 */
import React from "react";
import { connect } from "react-redux";
import { set, hide } from "./../reducers/notificationReducer";
import { voteOf } from "./../reducers/anecdoteReducer";

const AnecdoteList = props => {
  return (
    <div>
      <h2>Anecdotes</h2>
      {props.anecdotesToShow.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button
              onClick={() => {
                props.voteOf(anecdote.id, anecdote);
                props.set(`You just voted for '${anecdote.content}'`, 5);
              }}
            >
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const anecdotesToShow = ({ anecdotes, filter }) => {
  if (filter === "") {
    return anecdotes;
  } else {
    return anecdotes.filter(n => n.content.match(new RegExp(filter, "i")));
  }
};

const mapStateToProps = state => {
  return {
    anecdotesToShow: anecdotesToShow(state),
    filter: state.filter
  };
};

const mapDispatchToProps = {
  voteOf,
  set,
  hide
};

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);
