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
  select: function (option) {
    console.log('selected ' + option);
  },
  render: function () {
    return (
      React.DOM.div({className: "block"}, 
        "hi there", 
        Toggles({onSelect: this.select})
      )
    );
  }
});

var Toggles = React.createClass({displayName: 'Toggles',
  getInitialState: function () {
    return {chosen:'left'};
  },
  left: function () {
    this.setState({chosen:'left'});
    this.props.onSelect('left');
  },
  right: function () {
    this.setState({chosen:'right'});
    this.props.onSelect('right');
  },
  render: function () {
    return (
      React.DOM.div(null, 
        React.DOM.a({className: 
          this.state.chosen === 'left' ? 'active' : null, 
          onClick: this.left}, "LEFT"), " |",  
        React.DOM.a({className: 
          this.state.chosen === 'right' ? 'active':null, 
          onClick: this.right}, " RIGHT")
      )
    );
  }
});

React.renderComponent(
  Block(null),
  document.getElementById('content')
);