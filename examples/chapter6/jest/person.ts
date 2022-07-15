import { queryPersonAge, queryPersonName } from './api';

export const queryPersonInfo = async () => {
  const [age, name] = await Promise.all([queryPersonAge(), queryPersonName()]);
  return { age, name };
};