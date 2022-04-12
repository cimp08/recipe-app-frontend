# Recipe APP -Frontend

---

For the backend [Github](https://github.com/cimp08/recipe-app-backend), including the deploy.

## Deployment

The site is deployed on Netlify: [recipesite-app.netlify.app](https://recipesite-app.netlify.app)

## Getting started

Clone repo and run:

- npm install
- ng serve
- Appkey in environment.prod.ts needs a value to work. Get yours from spoonacular.

## API

I'm using [Spoonacular's API](https://spoonacular.com/food-api/).

## Requirements

- [x] Be able to get a list of recipe suggestions
- [x] Be able to filter the suggestions of recipes by dish type and allergens/preferences:
  - [x] Starter, main course or dessert (minimum, more dish types may be implemented)
  - [x] Allergens/dietary preferences (eg gluten, nuts, vegetarian, etc.), at least three additional filters must be included in addition to starter, main course and dessert
- [x] Be able to click on a recipe to see its information (with its own route)
- [x] Be able to save recipes in a list (the recipes need to be available as long as the user is on the website, but not saved in eg local storage)
- [x] Be able to view saved recipes (with its own route)
- [x] Be able to delete saved recipes from the list
- [x] Frontend must be implemented in the Angular framework (version 11)
- [x] Use an external API to retrieve recipe information which is displayed in the application
- [x] Must work on a mobile device, ie the above goals must also be possible to perform on a mobile device
