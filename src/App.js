import './App.css';

import Char from './components/Char';
import Validation from './components/Validation';
import {useState} from "react";

const App = () => {
  const [input, setInput] = useState('yghg')

  const onChangeHandler = (event) =>{
    
   setInput(event.target.value) 

  }
  const onDelete = (i) =>(e)=>{
    const text =input.split(''); 
    text.splice(i,1);
    const ListUpdated = text.join('');
    setInput(ListUpdated);

  }
  return (
    <div className="App">
      <input type="text" onChange={onChangeHandler}></input>
      <p>{input}</p>
      <Validation inputLength={input.length}/>
      {console.log(input.length)}
      {
        input.split('').map((e,i)=>(<Char key={i} char={e} input={input} onClick={onDelete(i)}/>))
      }
      
      
    </div>
  );
}

export default App;
