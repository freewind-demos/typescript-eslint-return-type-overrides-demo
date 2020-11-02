/* global console */
import React from 'react';

type Props = {
  onChange: () => string
}

const MyComponent: React.FC<Props> = (props) => {
  // good: no "return type" lint error
  // allowTypedFunctionExpressions: true
  [1, 2, 3].filter(it => it > 1)

  return <button onClick={
    // !!! has "return type" lint error
    // have to enable: 'allowExpressions: true' ?
    () => console.log('clicked')
  }>Button</button>
}

