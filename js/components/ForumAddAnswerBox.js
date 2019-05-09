class ForumAddAnswerBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this._addAnswer = this._addAnswer.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  render() {
    return (
      <div className="row">
        <textarea id="addAnswer"
                  className="col-md-6 col-xs-8"
                  value={this.state.value}
                  onChange={this._onChange}/>
        <input type="button" className="btn btn-primary" value="Add" onClick={this._addAnswer}/>
      </div>
    );
  }

  _addAnswer() {
    this.props.onAddAnswer(this.state.value);
    this.setState({
      value: ''
    });
  }

  _onChange(event) {
    this.setState({
      value: event.target.value
    })
  }
}
