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
import Contact from './Contact';
function initialProps(){
  render(<Provider store={store}><Todos/></Provider>);
}


describe("All about home page", ()=>{
  test(("check for all ui-elements"), ()=>{
    initialProps();
    const getInputBar = screen.getByTestId("input-bar")
    const addingBtn = screen.getByTestId("add-btn")
    expect(getInputBar).toBeInTheDocument()
    expect(addingBtn).toBeInTheDocument()
  })

  test(("check for all ui-elements-2"), ()=>{
    initialProps();
    const getInputBar = screen.getByTestId("input-bar")
    const addingBtn = screen.getByTestId("add-btn")
    expect(getInputBar).toBeInTheDocument()
    expect(addingBtn).toBeInTheDocument()
  })



  test("testing addition of a task", ()=>{
    initialProps();
    const inputBar = screen.getByTestId("input-bar");
    const addingBtn = screen.getByTestId("add-btn");
    fireEvent.change(inputBar, {target:{
      value:"Go to Park"
    }})
    fireEvent.click(addingBtn);
    expect(screen.getByText("Go to Park")).toBeInTheDocument();
    const removeBtn = screen.getByTestId("remove-btn");
    fireEvent.click(removeBtn)
  })


  test("testing removal of a task", ()=>{
    initialProps();
    const inputBar = screen.getByTestId("input-bar");
    const addingBtn = screen.getByTestId("add-btn");
    fireEvent.change(inputBar, {target:{
      value:"Go to Park"
    }})
    fireEvent.click(addingBtn);
    const text = screen.queryByText("Go to Park");
    const removeBtn = screen.getByTestId("remove-btn");
    fireEvent.click(removeBtn);
    expect(text).not.toBeInTheDocument()
  })  

})


describe("Testing navbar", ()=>{
  test("check for navbar ui-elements", () => {
    render(
      
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
  
    );
    const homeButton = screen.getByTestId("home-btn");
    const aboutButton = screen.getByTestId("about-btn");
    const contactButton = screen.getByTestId("contact-btn");
    const getHeading = screen.getByText("Zen-Task Management App")
    expect(homeButton).toBeInTheDocument();
    expect(aboutButton).toBeInTheDocument();
    expect(contactButton).toBeInTheDocument();
    expect(getHeading).toBeInTheDocument();
  });


  test("Testing add-task reducer", ()=>{
    const initial_state = {
      array: [],
    };
    const action = {type:"CREATE_TASK", payload:"Go to the mall"}
    const new_state = globalReducer(initial_state, action).array
    expect(new_state).toHaveLength(1);
  })

  test("Testing remove-task reducers", ()=>{
    const initial_state = {
      array: ["Go to the mall"]
    };
    const action = {type:"REMOVE_TASK", payload:0}
    const new_state = globalReducer(initial_state, action).array
    expect(new_state).toHaveLength(0);
  })


  test("Testing random-type reducers", ()=>{
    const initial_state = {
      array: []
    };
    const action = {type:"RANDOM"}
    const new_state = globalReducer(initial_state, action).array
    expect(new_state).toHaveLength(0);
  })



})




describe("Looking for the edit button", ()=>{
  

  test("updation of task", ()=>{
    initialProps()
    const inputBar = screen.getByTestId("input-bar");
    const addingBtn = screen.getByTestId("add-btn");
    fireEvent.change(inputBar, {target:{
      value:"Go to Park"
    }})
    fireEvent.click(addingBtn);
    const editButton = screen.getByRole("button", { name: "Edit Task" });
    fireEvent.click(editButton)
    const editInputBar = screen.getByPlaceholderText("Enter updated task");
    fireEvent.change(editInputBar, {
      target:{
        value:"Go to the mall"
      }      
    })

    const updatedTaskSubmitBtn = screen.getByRole("button", { name: "Submit" });
    fireEvent.click(updatedTaskSubmitBtn)
    expect(screen.queryByText("Go to Park")).toBeNull();
    expect(screen.getByText("Go to the mall")).toBeInTheDocument();
    
    
  })

  test("testing the about page", ()=>{
    render(
      <BrowserRouter>
      <About/>
      </BrowserRouter>
    )
    const statement = screen.getByText("This is About Page, Mate!")
    expect(statement).toBeInTheDocument();

  })


  test("Testing the home page", ()=>{
    render(
      <Provider store={store}>
      <BrowserRouter>
      <Home/>
      </BrowserRouter>
      </Provider>
    )
    
    const homeBtn = screen.getByTestId("home-btn")
    const aboutBtn = screen.getByTestId("about-btn")
    const contactBtn = screen.getByTestId("contact-btn")
    expect(homeBtn).toBeInTheDocument();
  })


  test("MSW Testing", async()=>{
    render(
      <Provider store={store}>
      <BrowserRouter>
       <Contact/>
      </BrowserRouter>
      </Provider>
    )
      const users = await screen.findAllByRole('listitem')
      expect(users).toHaveLength(3)
    
  })

  

})




