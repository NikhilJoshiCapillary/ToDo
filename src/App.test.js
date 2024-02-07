import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import App from './App';
import Todos from './Todos';
import Navbar from './Navbar';
import Home from './Home';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import globalReducer, { initial_state } from './Reducers/globalReducer';
import { CREATE_TASK, REMOVE_TASK } from './Actions/constant';
import About from './About';

function initialProps(){
  render(<Provider store={store}><Todos/></Provider>);
}

test.todo("add all the test")

// looking for hotfix

