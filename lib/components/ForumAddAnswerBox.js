class ForumAddAnswerBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this._addAnswer = this._addAnswer.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  _addAnswer() {
    this.props.onAddAnswer(this.state.value);
  }

  _onChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return React.createElement("div", {
      className: "row"
    }, React.createElement("textarea", {
      id: "addAnswer",
      className: "col-md-6 col-xs-8",
      onChange: this._onChange
    }), React.createElement("input", {
      type: "button",
      className: "btn btn-primary",
      value: "Add",
      onClick: this._addAnswer
    }));
  }

}