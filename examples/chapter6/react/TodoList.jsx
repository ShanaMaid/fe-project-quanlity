import * as React from 'react';

export const TodoList = (props) => (
  <ul id="to-do-list">
    {props.todos.map(({text, id}) => (
      <li key={id}>{text}</li>
    ))}
  </ul>
);