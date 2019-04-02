# Rails Planets

# HOMEWORK: RAILS PLANETS!!!

![orbits](https://iwsmt-content-ok2nbdvvyp8jbrhdp.stackpathdns.com/2282013232750iAtC2afkODS6U.gif)

Over the long weekend you'll be making a little baby rails/react app about PLANETS!!!! Gotta get those reps in!!! 💪💪💪

## Resources

- Refer to the [lesson](https://git.generalassemb.ly/wdi-nyc-bananas/rails_api_many2many) 

- Lecture notes on [Active Record](https://git.generalassemb.ly/wdi-nyc-bananas/active_record_intro).

- The [landlord API](https://git.generalassemb.ly/wdi-nyc-bananas/rails-active-record-landlord).

- [These](https://guides.rubyonrails.org/) wonderful things.

- Here's some [planets data](planets.rb) that you can utilize to seed your database.

## Planet Table

- Your planet table should have columns for:
  - `name` (text)
  - `distance_from_sun` (text)
  - `diameter` (text)
  - `orbit_period` (text)

## TODO:

- create a rails and react app:
    - `rails new planet_app -G --database=postgresql --skip-test` to create a new rails app
    - `create-react-app client` to create a new react app INSIDE your rails app.
    - confirm you only have one `.git` folder by typing `ls -la` in each directory.
    - You should be **committing** after each bullet point.
- Be able to show all planets and show one planet.
- Start by making a Rails model and make 1 planet in the db with the rails console.
- Create your planet routes (`resources`).
- Implement index controller action.
- In the react FE create a view for showing all planets.
- Make an API call to get things from the rails server and display it.
- Make a second planet from the console.
- Write a show controller action and associated react components.
- Write a delete controller action.
- Implement delete functionality in React (a delete planet button that calls delete fetch request).
- Write a create action and a create form in react. Wire it up.
- Write an update action and edit form in react. Wire it up.

## Bonus

- Be able to show one random planet.

- Implement a controller function that switches the view depending on what the user clicked on (conditional render).

## Deliverable/Submission

- Fork and clone this repo. Submit by 11pm.

- When you finish read about [unit testing](https://blog.codeship.com/unit-testing-in-ruby/)
