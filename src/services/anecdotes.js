/*
 * @Author: Harry Tang - harry@powerkernel.com
 * @Date: 2019-12-18 01:28:46
 * @Last Modified by: Harry Tang - harry@powerkernel.com
 * @Last Modified time: 2019-12-18 01:51:30
 */
/*
 * @Author: Harry Tang - harry@powerkernel.com
 * @Date: 2019-12-18 00:00:38
 * @Last Modified by: Harry Tang - harry@powerkernel.com
 * @Last Modified time: 2019-12-18 00:14:12
 */
import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async content => {
  const object = { content, votes: 0 };
  const response = await axios.post(baseUrl, object);
  return response.data;
};

const update = async (id, object) => {
  const response = await axios.put(`${baseUrl}/${id}`, object);
  return response.data;
};

export default { getAll, createNew, update };
