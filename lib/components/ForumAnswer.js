class ForumAnswer extends React.Component {
  constructor(props) {
    super(props);
    this._markCorrect = this._markCorrect.bind(this);
  }

  render() {
    const answer = this.props.answer;
    let markAnswer;

    if (!answer.correct) {
      markAnswer = React.createElement("div", {
        className: "float-right"
      }, React.createElement("small", null, React.createElement("a", {
        href: "#",
        onClick: this._markCorrect
      }, "Mark as correct")));
    }

    let classNames = "card-body";

    if (answer.correct) {
      classNames += " bg-success";
    }

    return React.createElement("div", {
      className: "m-1"
    }, React.createElement("div", {
      className: "card"
    }, React.createElement("div", {
      className: classNames
    }, answer.body, markAnswer)));
  }

  _markCorrect() {
    this.props.onMarkCorrect(this.props.id);
  }

}

ForumAnswer.propTypes = {
  answer: PropTypes.object.isRequired,
  onMarkCorrect: PropTypes.func.isRequired
};