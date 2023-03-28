import startApp from './app';

const appContainer = document.getElementById('app');

startApp(appContainer);

if (module.hot) {
  module.hot.accept('./app', () => {
    appContainer.innerHTML = '';
    startApp(appContainer);
  });
}