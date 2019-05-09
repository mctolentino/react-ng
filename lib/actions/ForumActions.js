const ForumActions = {
  markAsCorrect: function (id) {
    ForumDispatcher.dispatch({
      actionType: 'FORUM_ANSWER_MARKED_CORRECT',
      id: id
    });
  },
  addAnswer: function (answerText) {
    ForumDispatcher.dispatch({
      actionType: 'FORUM_ANSWER_ADDED',
      newAnswer: answerText
    });
  }
};