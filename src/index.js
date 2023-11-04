import React from 'react';
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from 'react-redux';
import store from './redux/store'; // Assurez-vous que c'est le bon chemin vers votre Redux Store
import App from './App'; // Votre composant principal

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
    </React.StrictMode>);

reportWebVitals();
