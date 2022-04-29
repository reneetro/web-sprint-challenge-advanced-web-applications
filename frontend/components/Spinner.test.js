// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import Spinner from './Spinner';

import React from 'react';

import {render, screen} from '@testing-library/react';


test('renders when spinner is set to "on"',() => {
  render(<Spinner on={true}/>)
  const spinner = screen.getByText(/please wait/i);
})

test('DOES NOT render when spinner is set to "on"',() => {
  render(<Spinner on={false}/>)
  const spinner = screen.queryByText(/please wait/i);
  expect(spinner).toBe(null)
})


