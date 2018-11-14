# /THE_MOVIE_DB/ movie browser

Simple React app to browse TMDB. Created to test some libraries (react-testing-library, styled-components) and some integrations (heroku, serve).

## Demo

Demo [here](https://the-movie-db-browser.herokuapp.com/).

## Setup

1.  `cp variables.env.sample variables.env`
2.  Fill `API_KEY` with a valid http://themoviedb.org API_KEY
3.  Run `npm install`
4.  Run `npm run dev`
5.  Open `http://localhost:3000`
6.  Enjoy

## Test

Run `npm run test` to run tests.

## Todo/Improvements

- Try React Suspense and React Hooks.
- Improve architecture. Better separation of logic and UI.
- Handle pagination. At this moment this app renders max 20 results. This is because the API returns pages with max 20 items per page and I'm using only the first page at this moment.
- Better handling of images. (different resolutions ecc..).
- Possibility to query other stuff than Movies. (Actor, genres ecc..).
- Better CSS.
- Better tests.
