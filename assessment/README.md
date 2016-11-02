# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


Fork this repository and clone it down. (It’s a nearly blank Rails application with a few additional files in it.) Create a working branch for yourself and git to it.

We’ve provided a seed file of data, but you won’t be able to use it until your models are set up properly.

Find the seed file (saved in its conventional place) and set up your models and migrations to reflect the data structure there.
Do not be thrown off by the "pet" attribute -- that's just syntactic sugar to establish the usual sort of association once the correct model is in place.
You should wind up with two resources: Pets and Toys. Each Pet has several Toys.
Write the necessary controller(s) to show individual instances of, and lists of, Pets and Toys. No need to build routes that allow creation, deletion or modification unless you have time later and you want to.

Configure your application so that localhost:3000/pets uses ERB/HAML to display a listing of all pets in the browser, and localhost:3000/pets/1/toys returns a JSON blob of that pet’s toys.

When the user clicks a given pet on the home page, retrieve via Ajax that pet’s list of toys and log it to the console. (Don’t use the public folder to accomplish this setup — this isn’t a decoupled app.)

localhost:3000 and localhost:3000/home should also show the listing of all pets. Make it so.

When the user clicks on a pet on the home page, use the same Ajax call you already were using to fetch (GET IT?) the pet’s toys, but instead of logging the full result, log only the shortest toy description to the console.

Pretty the whole thing up a little if you’ve got time.

Totally optional step you probably won’t get to: Implement some other features if you feel like showing off. Templating the toys with Handlebars? Making toys editable? Whatever! Go nuts! Just make sure you’ve committed all the previous steps, so your adventure is risk-free.

Still reading, want even more optional stretch goals you say? I hear testing is a thing Super Legit Developers do....
