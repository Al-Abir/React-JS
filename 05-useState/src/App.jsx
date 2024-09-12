import './App.css'
import Counter from './Counter';
import Team from './Team';


function App() {

  function handleClick() {
    alert('button clicked');
  }

  const handleClick2 = () => {
    alert('button 2 clicked')
  }

  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>

     
      <Team></Team>

      <Counter></Counter>

      
    </>
  )
}

export default App
