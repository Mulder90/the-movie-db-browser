import React from 'react';
import { render } from 'react-testing-library';

import App from './App';

test('Renders provided API_KEY', () => {
  const { container } = render(<App apiKey="SUPER_SECRET_API_KEY" />);
  expect(container).toHaveTextContent('SUPER_SECRET_API_KEY');
});
