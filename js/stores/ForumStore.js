const answersData = {
  "1": {
    body: "Isn't that about time travel?",
    correct: false
  },
  "2": {
    body: "React and Flux are a tool and methodologies for building the front end of web applications.",
    correct: true
  },
  "3": {
    body: "React is a synonym for respond",
    correct: false
  }
};


const ForumStore = new EventEmitter();

ForumStore.getAnswers = function () {
  return answersData;
};

ForumStore.addAnswer = function (newAnswer) {
  answersData[Object.keys(answersData).length + 1] = {
    body: newAnswer,
    correct: false
  };
  this.emitChange();
};

ForumStore.markAsCorrect = function (id) {
  for (const key in answersData) {
    answersData[key].correct = false;
  }
  answersData[id].correct = true;
  this.emitChange();
};

ForumStore.emitChange = function () {
  this.emit('change');
};

ForumStore.addChangeListener = function (listener) {
  this.on('change', listener);
};

ForumDispatcher.register(action => {
  switch (action.actionType) {
    case ForumConstants.FORUM_ANSWER_MARKED_CORRECT:
      console.log(`Mark answer with id ${action.id} as correct.`);
      ForumStore.markAsCorrect(action.id);
      break;
    case ForumConstants.FORUM_ANSWER_ADDED:
      console.log(`Add a new answer ${action.newAnswer}`);
      ForumStore.addAnswer(action.newAnswer);
      break;
  }
});
