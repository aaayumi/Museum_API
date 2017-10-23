import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/Home'
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.getElementById('root');
  ReactDOM.render(<App />, div);
});

function sum (a,b){
    return a + b;
}

it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});

describe('<Home />', () => {
  it('renders three `.foo-bar`s', () => {
    const wrapper = render(<Home />);
    expect(wrapper.find('#dateInput').length).to.equal(1);
  });

});