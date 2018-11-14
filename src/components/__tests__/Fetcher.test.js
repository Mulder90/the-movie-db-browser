import React from 'react';
import { render, wait } from 'react-testing-library';

import Fetcher from '../Fetcher';

beforeEach(() => {
  fetch.resetMocks();
});

test('url is called exactly one time', () => {
  fetch.mockResponse(JSON.stringify({}));
  const childrenFn = jest.fn(() => null);
  render(<Fetcher url="https://google.com">{childrenFn}</Fetcher>);

  expect(fetch.mock.calls.length).toEqual(1);
  expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
});

test('isLoading is set to true while fetching data', () => {
  fetch.mockResponse(JSON.stringify({}));
  const childrenFn = jest.fn(() => null);
  render(<Fetcher url="https://google.com">{childrenFn}</Fetcher>);

  expect(fetch.mock.calls.length).toEqual(1);
  expect(fetch.mock.calls[0][0]).toEqual('https://google.com');

  expect(childrenFn).toHaveBeenLastCalledWith({
    isLoading: true,
    hasError: false,
    response: {}
  });
});

test('hasError is set to true if fetching failed', () => {
  fetch.mockReject();
  const childrenFn = jest.fn(() => null);
  render(<Fetcher url="https://google.com">{childrenFn}</Fetcher>);

  wait(() => {
    expect(childrenFn).toHaveBeenLastCalledWith({
      isLoading: false,
      hasError: true,
      response: {}
    });
  });
});

test('response is set to something if fetching succeed', () => {
  fetch.mockResponse(JSON.stringify({ results: [] }));
  const childrenFn = jest.fn(() => null);
  render(<Fetcher url="https://google.com">{childrenFn}</Fetcher>);

  wait(() => {
    expect(childrenFn).toHaveBeenLastCalledWith({
      isLoading: false,
      hasError: false,
      response: {
        results: []
      }
    });
  });
});
