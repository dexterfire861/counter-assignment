// import necessary react testing library helpers here
// import the Counter component here
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
//import userEvent from '@testing-library/user-event'
import Counter from '../components/Counter';

beforeEach(() => {

  // Render the Counter component here
  render(<Counter />);

})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText("Counter");
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const countVal = screen.getByTestId('count');
  expect(countVal).toHaveTextContent('0');

});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementButton = screen.getByRole('button', { name: '+' });
  const initialCount = screen.getByTestId('count');

  fireEvent.click(incrementButton);
  expect(initialCount).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrementButton = screen.getByRole('button', { name: '-' });
  const initialCount = screen.getByTestId('count');

  fireEvent.click(decrementButton);
  expect(initialCount).toHaveTextContent('-1');
});
