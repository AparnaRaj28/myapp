import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import {MyFunctionalComponent} from './components/MyFunctionalComponent';

function App() {
  return(
    <div className='App'>
    <div >
      <p>This content is from App.js</p>
    </div>

 <MyComponent name="Aparna"/>
 <MyFunctionalComponent state="kerala"/>
 </div> 
  )
}

export default App;
