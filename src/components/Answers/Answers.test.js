import React from 'react';
import ReactDOM from 'react-dom';
import Answers from './Answers';
import Context from "../../Context";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Answers />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
