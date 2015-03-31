# Contrast
Contrast is a series of demo apps I've made in order to compare client-side JS frameworks.
Each app attempts to use best practices for its given engine but should nevertheless be identical over the hood.

Currently "News" is the only app. It lets you post links with optional titles.


## The Frameworks

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

