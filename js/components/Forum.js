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
    ForumStore.removeListener('change', this._onChange)
  }

  render() {
    return (
      <div>
        <ForumHeader/>

        <div className="container">
          <ForumQuestion/>
          <hr/>
          <ForumAnswers allAnswers={this.state.allAnswers}/>
          <hr/>
          <h4>Add an answer</h4>
          <ForumAddAnswerBox onAddAnswer={this._onAddAnswer}/>
        </div>
      </div>
    );
  }

  _onAddAnswer(answerText) {
    ForumActions.addAnswer(answerText)
  }

  _onChange() {
    this.setState({
      allAnswers: ForumStore.getAnswers()
    });
  }
}
