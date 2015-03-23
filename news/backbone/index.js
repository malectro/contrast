function tpl(selector) {
  return _.template($(selector).html(), {variable: 't'});
}

var Model = {};
Model.Item = Backbone.Model.extend({
  defaults: {
    title: '',
    url: '',
  }
});

var Collection = {};
Collection.Item = Backbone.Collection.extend({
  model: Model.Item,
  localStorage: new Backbone.LocalStorage("News")
});

var items = new Collection.Item();
items.fetch();


var App = Backbone.View.extend({
  template: tpl('#tpl-news'),

  initialize: function () {
    this.creator = new Create();
    this.list = new List();
  },

  render: function () {
    this.creator.$el.detach();
    this.list.$el.detach();

    this.$el.html(this.template());
    this.creator.setElement(this.$('#create')).render();;
    this.list.setElement(this.$('#list')).render();

    return this;
  }
});

var Create = Backbone.View.extend({
  template: tpl('#tpl-create'),

  events: {
    'submit': function (event) {
      event.preventDefault();

      var form = this.el;

      if (!form.url.value) {
        this.state.set('urlClass', 'error');
      } else {

        items.create({
          url: form.url.value,
          title: form.title.value || form.url.value,
        });

        this.state.set({urlClass: ''}, {silent: true});
        this.render();
      }
    }
  },

  initialize: function () {
    this.state = new Backbone.Model({
      urlClass: ''
    });

    this.listenTo(this.state, 'change', this.render);
  },

  render: function () {
    this.$el.html(this.template(this.state.toJSON()));
    return this;
  }
});

var List = Backbone.View.extend({
  template: tpl('#tpl-list'),

  initialize: function () {
    this.listenTo(items, 'change add remove reset', this.render);
  },

  render: function () {
    this.$el.html(this.template({items: items.toJSON()}));
    return this;
  }
});


$(function () {
  var app = new App({el: $('main')}).render();
});
