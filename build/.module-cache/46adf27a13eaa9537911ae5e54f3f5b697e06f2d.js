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

var converter = new Showdown.converter();
var Comment = React.createClass({displayName: 'Comment',
  render: function () {
    var rawMarkup =
      converter.makeHtml(this.props.children.toString());
    return (
      React.DOM.div({className: "comment"}, 
        React.DOM.h2({className: "commentAuthor"}, 
          this.props.author
        ), 
        React.DOM.span({dangerouslySetInnerHTML: {__html: rawMarkup}}
        )
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

var Block = React.createClass({displayName: 'Block',
  render: function () {
    return (
      React.DOM.div({className: "block"}, 
        "hi there", 
        Toggles(null)
      )
    );
  }
});

var Toggles = React.createClass({displayName: 'Toggles',
  render: function () {
    return (
      React.DOM.div(null, 
        React.DOM.a(null, "LEFT"), " |",  
        React.DOM.a(null, " RIGHT")
      )
    );
  }
});

React.renderComponent(
  Block(null),
  document.getElementById('content')
);