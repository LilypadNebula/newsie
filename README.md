# Newsie

This is an application to pull from news sites and display the results, giving you a clean interface to view on desktop or mobile.

## Setup

- Clone the project
- Grab an API key from https://newsapi.org/register if you don't have one already
- Create a .env file with:
  ```
  NEWSAPI_KEY=YOURKEYHERE
  ```
* Run `yarn` to download dependencies
* To run in dev mode, use `yarn start`
* To build for production, use `yarn build`
* When adjusting things like dependencies or build settings, you'll need to clear the cache. You can delete the .cache and dist directories, or use `yarn clean`
