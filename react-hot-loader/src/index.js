import * as ReactDOMClient from 'react-dom/client';
import App from './app';

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

const root = ReactDOMClient.createRoot(rootElement)
root.render(<App />);