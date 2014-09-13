/** @jsx React.DOM */
var CommentBox = React.createClass({displayName: 'CommentBox',
  render: function () {
    return (
      React.DOM.div({className: "commentBox"}, 
        "Hello, world! I am a commentbox"
      )
    );
  }
});

var CommentList = React.createClass({displayName: 'CommentList',
  render: function () {
    return (
      React.DOM.div({className: "commentList"}, 
        "Hello, world! I am a commentList"
      )
    );
  }
});

var CommentForm = React.createClass({displayName: 'CommentForm',
  render: function () {
    return (
      React.DOM.div({className: "commentForm"}, 
        "Hello, world! I am a comment form"
      )
    );
  }
});

React.renderComponent(
  CommentBox(null),
  document.getElementById('content')
);