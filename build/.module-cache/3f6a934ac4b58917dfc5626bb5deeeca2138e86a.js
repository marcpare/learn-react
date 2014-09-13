/** @jsx React.DOM */
var CommentBox = React.createClass({displayName: 'CommentBox',
  render: function () {
    return (
      React.DOM.div({className: "commentBox"}, 
        React.DOM.h1(null, "Comments"), 
        CommentList(null), 
        CommentForm(null)
      )
    );
  }
});

var CommentList = React.createClass({displayName: 'CommentList',
  render: function () {
    return (
      React.DOM.div({className: "commentList"}, 
        Comment({author: "Pete"}, "This is one comment"), 
        Comment({author: "Bill"}, "This is *another* comment")
      )
    );
  }
});

var Comment = React.createClass({displayName: 'Comment',
  render: function () {
    return (
      React.DOM.div({className: "comment"}, 
        React.DOM.h2({className: "commentAuthor"}, 
          this.props.author
        ), 
        this.props.children
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