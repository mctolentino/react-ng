class ForumAnswer extends React.Component {

  constructor(props) {
    super(props);
    this._markCorrect = this._markCorrect.bind(this);
  }

  render() {
    const answer = this.props.answer;
    let markAnswer;

    if (!answer.correct) {
      markAnswer = (
        <div className="float-right">
          <small>
            <a href="#" onClick={this._markCorrect}>Mark as correct</a>
          </small>
        </div>
      )
    }

    let classNames = "card-body";

    if (answer.correct) {
      classNames += " bg-success";
    }

    return (
      <div className="m-1">
        <div className="card">
          <div className={classNames}>
            {answer.body}
            {markAnswer}
          </div>
        </div>
      </div>
    );
  }

  _markCorrect() {
    this.props.onMarkCorrect(this.props.id);
  };
}

ForumAnswer.propTypes = {
  answer: PropTypes.object.isRequired,
  onMarkCorrect: PropTypes.func.isRequired
};
