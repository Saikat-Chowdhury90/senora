
import './App.css';
import {React , lazy} from 'react';

const Main = lazy(() => import('./sections/Main/Main'));
const Body = lazy(() => import('./sections/Body/Body'));
const Last = lazy(() => import('./sections/Last/Last'));
const Posts = lazy(() => import('./sections/Posts/Posts'));
const Skill = lazy(() => import('./sections/Skill/Skill'));
const Works = lazy(() => import('./sections/Works/Works'));


function App() {
  return (
    <div className="App">
     <Main />
     <Body/>
     <Works/>
     <Skill />
     <Posts />
     <Last/>
    </div>
  );
}

export default App;
