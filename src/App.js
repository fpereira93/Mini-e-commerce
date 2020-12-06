import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import Header from './components/Header';
import history from './services/history';
import GlobalStyle from './styles/global';
import store from './store/index';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';

const App = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <GlobalStyle />
                <Header />
                <Routes />
                <ToastContainer autoClose={3000} />
            </Router>
        </Provider>
    );
}

export default App;
