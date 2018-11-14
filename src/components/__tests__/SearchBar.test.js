import React from 'react';
import { render, fireEvent, wait } from 'react-testing-library';

import SearchBar from '../SearchBar';

// XXX: Please note that cleanup after each test is handled inside jest.setup.js

test('Call onChange handler when input value change', () => {
  const handleOnChange = jest.fn();
  const { getByPlaceholderText } = render(
    <SearchBar onChange={handleOnChange} />
  );

  const input = getByPlaceholderText('Search for a movie...');
  fireEvent.change(input, { target: { value: 'Matrix' } });
  wait(() => {
    expect(handleOnChange).toHaveBeenCalledTimes(1);
    expect(input).toHaveTextContent('Matrix');
  });
});

test('onChange handler is not called until the debouncing phase is finished', () => {
  const handleOnChange = jest.fn();
  const { getByPlaceholderText } = render(
    <SearchBar onChange={handleOnChange} debounceTime={1000} />
  );

  const input = getByPlaceholderText('Search for a movie...');
  fireEvent.change(input, { target: { value: 'Matrix' } });
  expect(handleOnChange).not.toHaveBeenCalledTimes(1);
  expect(input).not.toHaveTextContent('Matrix');
});

test('onChange handler is called with the second event if a change happens during the debouncing', () => {
  const handleOnChange = jest.fn();
  const { getByPlaceholderText } = render(
    <SearchBar onChange={handleOnChange} debounceTime={100} />
  );

  const input = getByPlaceholderText('Search for a movie...');
  fireEvent.change(input, { target: { value: 'Matrix' } });
  fireEvent.change(input, { target: { value: 'Harry Potter' } });
  wait(() => {
    expect(handleOnChange).toHaveBeenCalledTimes(1);
    expect(input).toHaveTextContent('Harry Potter');
  });
});

test('onChange handler is called twice if a change happens after the debouncing phase', () => {
  const handleOnChange = jest.fn();
  const { getByPlaceholderText } = render(
    <SearchBar onChange={handleOnChange} debounceTime={100} />
  );

  const input = getByPlaceholderText('Search for a movie...');
  fireEvent.change(input, { target: { value: 'Matrix' } });
  wait(() => {
    expect(handleOnChange).toHaveBeenCalledTimes(1);
    expect(input).toHaveTextContent('Matrix');

    fireEvent.change(input, { target: { value: 'Harry Potter' } });

    wait(() => {
      expect(handleOnChange).toHaveBeenCalledTimes(1);
      expect(input).toHaveTextContent('Harry Potter');
    });
  });
});

test('onChange handler is called immediately if debouncingTime is 0', () => {
  const handleOnChange = jest.fn();
  const { getByPlaceholderText } = render(
    <SearchBar onChange={handleOnChange} debounceTime={0} />
  );

  const input = getByPlaceholderText('Search for a movie...');
  fireEvent.change(input, { target: { value: 'Matrix' } });
  wait(
    () => {
      expect(handleOnChange).toHaveBeenCalledTimes(1);
      expect(input).toHaveTextContent('Matrix');
    },
    {
      timeout: 0
    }
  );
});
