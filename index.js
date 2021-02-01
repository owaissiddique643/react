import React from 'react';
import ReactDOM from 'react-dom';
import 'style.css'
function Hi() {
  return <div>Hello World! string<strong>narae mastana</strong></div>;
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));