var appContainer = document.getElementById('app');

const appTitle = document.createElement('h1');
appTitle.innerText = 'Hello World!';

const startApp = () => {
  const root = document.createElement('div');
  root.id = 'root';
  appContainer.appendChild(root);
  root.appendChild(appTitle);
}

startApp()

// this function will reload the entire app if something changes
if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => {
    appContainer.removeChild(document.getElementById('root'));
  });
}