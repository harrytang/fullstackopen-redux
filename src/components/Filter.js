/*
 * @Author: Harry Tang - harry@powerkernel.com
 * @Date: 2019-12-17 21:19:58
 * @Last Modified by: Harry Tang - harry@powerkernel.com
 * @Last Modified time: 2019-12-17 23:54:31
 */

import React from "react";
import { connect } from "react-redux";
import { query } from "./../reducers/filterReducer";

const Filter = props => {
  const handleChange = event => {
    // input-field value is in variable event.target.value
    props.query(event.target.value);
  };
  const style = {
    marginBottom: 10
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

export default connect(null, { query })(Filter);
