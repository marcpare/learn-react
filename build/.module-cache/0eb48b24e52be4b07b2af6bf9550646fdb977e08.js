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
React.renderComponent(
  CommentBox(null),
  document.getElementById('content')
);