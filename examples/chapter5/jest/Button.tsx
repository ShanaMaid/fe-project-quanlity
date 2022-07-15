import * as React from 'react';

export default function Button(props) {
  return (
    <button className="button">
      {props.children}
    </button>
  );
}
