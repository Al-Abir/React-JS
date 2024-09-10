
import './App.css'

function App() {
 

  return (
    <>
    
      <h1>Vite + React</h1>
      <Person></Person>
      
    </>
  )
}
function Person(){
  const age = 25;
  const money = 10;
  return(
    <h3>I Am  {Person.name} with age: {age+money} </h3>
  )
}
export default App ;
