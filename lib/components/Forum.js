class Forum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allAnswers: ForumStore.getAnswers()
    };
    this._onAddAnswer = this._onAddAnswer.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    ForumStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    ForumStore.removeListener('change', this._onChange);
  }

  _onAddAnswer(answerText) {
    ForumDispatcher.dispatch({
      actionType: 'FORUM_ANSWER_ADDED',
      newAnswer: answerText
    });
  }

  _onChange() {
    this.setState({
      allAnswers: ForumStore.getAnswers()
    });
  }

  render() {
    return React.createElement("div", null, React.createElement(ForumHeader, null), React.createElement("div", {
      className: "container"
    }, React.createElement(ForumQuestion, null), React.createElement("hr", null), React.createElement(ForumAnswers, {
      allAnswers: this.state.allAnswers
    }), React.createElement("hr", null), React.createElement("h4", null, "Add an answer"), React.createElement(ForumAddAnswerBox, {
      onAddAnswer: this._onAddAnswer
    })));
  }

}