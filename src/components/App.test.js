import React from 'react';
import { render } from 'react-testing-library';

import App from './App';

test('Renders Ciao DAZN!', () => {
  const { container } = render(<App />);
  expect(container).toHaveTextContent('Ciao DAZN!');
});
