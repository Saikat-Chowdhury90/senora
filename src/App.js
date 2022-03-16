
import './App.css';
import Body from './sections/Body/Body';
import Last from './sections/Last/Last';
import Main from './sections/Main/Main';
import Posts from './sections/Posts/Posts';
import Skill from './sections/Skill/Skill';
import Works from './sections/Works/Works';

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
