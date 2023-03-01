import React, { useReducer } from 'react';
import { Layout } from "./Layout";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Download } from './Pages/Download';
import { HowToStart } from './Pages/HowToStart';
import { Ctx } from "./Context";

// utils
import { initialState, reducer } from "./globalState";

// css
import './App.scss';
import { StateInterface } from './globalTypes';

function App(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState())

  return (
    <Ctx.Provider value={state}>
      <section className="App">
        <BrowserRouter>
          <Layout dispatch={dispatch}>
            <Routes>
              <Route path="/" element={
                <Home
                  state={state as StateInterface}
                  dispatch={dispatch}
                  ctx={Ctx}
                />
              }/>
              
              <Route path='/about' element={
                <About 
                  state={state as StateInterface}
                  dispatch={dispatch}
                />
              }/>
              <Route path='/download' element={
                <Download 
                  state={state as StateInterface}
                  dispatch={dispatch}
                />
              }/>
              <Route path='/how_to_start' element={
                <HowToStart 
                  state={state as StateInterface}
                  dispatch={dispatch}
                />
              }/>
            </Routes>
          </Layout>
        </BrowserRouter>
      </section>
    </Ctx.Provider>
  );
}

export default App;
