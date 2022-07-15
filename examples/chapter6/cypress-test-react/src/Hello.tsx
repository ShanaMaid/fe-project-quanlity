import * as React from 'react';

export const Hello = (props: {
  name?: string,
}) => {
  const { name = 'world' } = props;
  return (
    <div id="hello">
      Hello, {name}
    </div>
  );
};