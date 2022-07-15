import axios from 'axios';

export const queryPersonAge = async () => {
  const res = await axios.get<number>('/api/v1/person/age');
  return res.data;
};

export const queryPersonName = async () => {
  const res = await axios.get<string>('/api/v1/person/age');
  return res.data;
};

