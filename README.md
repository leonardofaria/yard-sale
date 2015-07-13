# Yard Sale

A simple website deployed on [Heroku](http://heroku.com) to sell my stuff. It uses Pure CSS, Gulp and Angular to show products.

## Installation

1. Clone this repo.
2. cd into the directory and run `npm install`
3. Run `gulp` and it will pull in all dependencies and compile
4. cd public && python -m SimpleHTTPServer to run a local version

## Deploy on Heroku

1. `gem install heroku`
2. `heroku login`
2. `heroku create --stack=cedar mynewapp`
3. `git push heroku master`
