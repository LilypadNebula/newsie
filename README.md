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

## Potential improvements
- This is a pretty simple application so there isn't a lot of need for it, but I like having tests to prove out functionality and intent, something like Cypress could be good for a few e2e tests
- Since newsapi offers pagination of results, adding some paging to the app would be a good improvement, since it just grabs the first twenty or so right now, adding in UI to view more than one page could be a good feature
- Maybe adding some things like 'save to my to read list' or something could also be nice, like pick some popular ones like Pocket and have a button that could add it to the user's list for them
- I like the ui, for some better UX in case it lasts a bit long to search there could also be a loading screen while a search is running, maybe with a spinner so the user sees something