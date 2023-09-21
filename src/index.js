import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const root = ReactDOM.createRoot(document.getElementById('root'));

const initialState = [
    {
        text: "react",
        done: false
    },
    {
        text: "js",
        done: false
    },
    {
        text: "html",
        done: false
    }
]

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'DELETE' :
            return state.filter((item, index) => {
                if(action.payload !== index){
                    return true
                }
            })

            default:
                return state
    }
}

const store = createStore(reducer)

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

