/*
 * @Author: Harry Tang - harry@powerkernel.com
 * @Date: 2019-12-17 21:00:21
 * @Last Modified by: Harry Tang - harry@powerkernel.com
 * @Last Modified time: 2019-12-17 23:49:56
 */
import React from "react";
import { connect } from "react-redux";

const Notification = props => {
  const content = props.notification;

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1
  };
  return content === "" ? null : (
    <div style={style}>{props.notification}</div>
  );
};

const mapStateToProps = state => {
  return {
    notification: state.notification
  };
};

export default connect(mapStateToProps)(Notification);
