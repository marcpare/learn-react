/** @jsx React.DOM */
var CommentBox = React.createClass({
  render: function () {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function () {
    return (
      <div className="commentList">
        <Comment author="Pete">This is one comment</Comment>
        <Comment author="Bill">This is *another* comment</Comment>
      </div>
    );
  }
});

var converter = new Showdown.converter();
var Comment = React.createClass({
  render: function () {
    var rawMarkup =
      converter.makeHtml(this.props.children.toString());
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}}>
        </span>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function () {
    return (
      <div className="commentForm">
        Hello, world! I am a comment form
      </div>
    );
  }
});

var Block = React.createClass({
  getInitialState: function () {
    return {message:'...'};
  },
  select: function (option) {
    this.setState({
      message: {left:'!!!', right:'???'}[option]
    });
    console.log('selected ' + option);
  },
  render: function () {
    return (
      <div className="block">
        hi there {this.state.message}
        <Toggles onSelect={this.select} />
      </div>
    );
  }
});

var Toggles = React.createClass({
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
      <div>
        <a className={
          this.state.chosen === 'left' ? 'active' : null}
          onClick={this.left}>LEFT</a> | 
        <a className={
          this.state.chosen === 'right' ? 'active':null} 
          onClick={this.right}> RIGHT</a>
      </div>
    );
  }
});

React.renderComponent(
  <Block />,
  document.getElementById('content')
);