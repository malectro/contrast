# Contrast
Contrast is a series of demo apps I've made in order to compare client-side JS frameworks.
Each app attempts to use best practices for its given engine but should nevertheless be identical over the hood.

Currently "News" is the only app. It lets you post links with optional titles.


## Installing Frameworks

### React
React is a newer framework created by Facebook that emphasizes client-side simplicity.

To run the app type
```
cd news/react
node app.js
```
and navigate to ```localhost:3000```.

### Backbone
Backbone emphasizing an MVC organization and comes with Routing and Data Modeling
out of the box. Though it's used by a lot of popular sites, it's not nearly as
hot as it once was.

No need to run a server. Just open the ```news/backbone/index.html``` file.

### Angular
Angular is currently the star athlete of the JS world and comes chocked full of features
and paradigms that emphasize reusable and modular code. Unfortunately it
also comes with a ton of obtuse vocabulary.

In the spirit of doing things the "hot" way, I chose to generate the app with Yeoman's gulp-angular generator.
This requires a bit more installation and creates a *lot* more files. To run the server you'll need to do the
following.

```
cd news/angular
npm install -g bower gulp
npm install && bower install
```

Then you'll be able to run the server with
```
gulp serve
```
which should automatically open a new browser tab.


## Final Thoughts
The goal here is to write a blog post, but I'll summarize things in the README.

First off, all three of these frameworks are great in their own way, but if that
sounds a little coppy-outy I'll admit that I plan on using React for my next large
project for a few reasons:

1. Speed.
    Before taking this little project on, I hadn't written any React, but it was
    by far the quickest to use for a bunch of reasons I'll list below.
2. Simplicity.
    React is a bit of an "a la carte" framework in that it doesn't force you to
    use anything for persistence or routing; it just handles view rendering. It
    also avoids introducing vocabular beyond everyday CS words like "class",
    "state", and "render". I found it super easy to learn the ins and outs of it
    within the span of a half hour.
3. Unidirection.
    Okay, so it introduces *some* vocabulary, but after debugging hundreds of
    production Backbone issues, I found React's approach to rendering to be
    very clean.
3. Support.
    This is isn't something React can hold over Angular (or Backbone for that matter),
    but it needs to be said that Facebook and Instagram will be supporting it going
    forward.

