var $ = function (selector) {
  return document.body.querySelectorAll(selector);
};

var Data = {
  items: localStorage.news ? JSON.parse(localStorage.news) : {},

  create: function (attrs) {
    attrs.id = this.id();
    this.items[attrs.id] = _.extend({}, attrs);
    App.refresh();
    localStorage.news = JSON.stringify(this.items);
  },

  id: (function () {
    var id = 0;
    return function () {
      return ++id;
    };
  })(),
};

var App = {
  refresh: function () {
    React.render(
      <News items={Data.items} />,
      $('main')[0]
    );
  }
};

var News = React.createClass({
  render: function () {
    return (
      <div id="news">
        <Create />
        <List items={this.props.items} />
      </div>
    );
  }
});

var Create = React.createClass({
  getInitialState: function () {
    return {
      title: '',
      url: '',
      urlClass: '',
    };
  },

  render: function () {
    return (
      <form onSubmit={this.submit}>
        <input type="text" name="url" className={this.state.urlClass} placeholder="Post a link" />
        <input type="text" name="title" placeholder="With an optional title" />
        <input type="submit" value="Post" />
      </form>
    );
  },

  submit: function (event) {
    event.preventDefault();

    // REALLY?
    var form = React.findDOMNode(this);

    if (!form.url.value) {
      this.setState({urlClass: 'error'});
    } else {

      Data.create({
        url: form.url.value,
        title: form.title.value || form.url.value,
      });

      this.setState(this.getInitialState());
    }
  }
});

var List = React.createClass({
  render: function () {
    return (
      <div id="news-list">
        { _.map(this.props.items, function (item) {
          return (<Item {...item} />);
        }) }
      </div>
    );
  }
});

var Item = React.createClass({
  render: function () {
    return (
      <div class="news-item">
        <h3><a class="news-item-link" href={this.props.url}>{this.props.title}</a></h3>
      </div>
    );
  }
});

App.refresh();

