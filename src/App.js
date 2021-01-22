import './App.css';
import Header from './components/Header'
import CardContainer from './components/CardContainer'
import Form from './components/Form'
import { useState } from 'react';

function App() {
  
  // here I need to know the pokemon name for the form so I need to make it parent level
  const [pokeName, setPokeName] = useState('')
  const [answer, setAnswer] = useState(false)


  return (
    <div className="App">
      <Header/>
      <CardContainer pokeName={pokeName} setPokeName={setPokeName} answer={answer}/>
      <Form pokeName={pokeName} answer={answer} setAnswer={setAnswer}/>
    </div>
  );
}

export default App;
