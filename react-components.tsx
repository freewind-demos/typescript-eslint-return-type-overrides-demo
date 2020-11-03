/* global console */
import React from 'react';

export const MyComponent: React.FC = (props) => {
  // good: no "return type" lint error
  // allowTypedFunctionExpressions: true
  [1, 2, 3].filter(it => it > 1)

  return <button onClick={
    // !!! has "return type" lint error
    // have to enable: 'allowExpressions: true' ?
    () => 'sss'
  }>Button</button>
}

