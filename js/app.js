ReactDOM.render(
  React.createElement(Forum, null),
  document.getElementById('forum')
);

const myEmitter = new EventEmitter();

myEmitter.on('ON_APP_START', () => {
  console.log('Event #1: On app start.')
});

myEmitter.emit('ON_APP_START');

