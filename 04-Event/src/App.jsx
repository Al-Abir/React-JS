
import './App.css'

function App() {
  function handlebtn(){
    alert("Button is clicked")
  }

  const handleclick = ()=>{
    alert("Button Arrow is clicked")
  }

  const parameter = (n)=> {
    alert(n+5);
  }


  return (
    <>
     
      <h1>React Event</h1>

      <button onClick={handlebtn}>Hello</button>

      <button onClick={handleclick}>Arrow</button>
    {/* <button onClick={parameter(4)}>Result</button>
       aivabe parameter patano react support korena , sorasori parameter function call hoea jai click howar porjonto opekha korena . */}
        

        <button onClick={()=>parameter(5)}>Result</button>
    </>
  )
}

export default App
