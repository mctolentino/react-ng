class ForumAnswers extends React.Component {
  _onMarkCorrect(id) {
    ForumDispatcher.dispatch({
      actionType: 'FORUM_ANSWER_MARKED_CORRECT',
      id: id
    });
  }

  render() {
    const allAnswers = this.props.allAnswers;
    const answers = [];

    for (const key in allAnswers) {
      answers.push(React.createElement(ForumAnswer, {
        key: key,
        id: key,
        answer: allAnswers[key],
        onMarkCorrect: this._onMarkCorrect
      }));
    }

    return React.createElement("div", null, answers);
  }

}