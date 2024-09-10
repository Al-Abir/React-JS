import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Actor from './Actor';
import Singer from './Singer';
import BookStore from './BookStore'

function App() {

  const actors = ['Sakib', 'Shoriful Raj', 'Jasim', 'Rubel', 'Salman Shah'];

  const books = [
    {id: 1, name: 'physics', price: 100},
    {id: 2, name: 'Math', price: 120},
    {id: 3, name: 'Chemistry', price: 130},
    {id: 4, name: 'Biology', price: 150},
  ]

  const singers = [
    {id: 1,  name: 'Dr. Mahfuzur', age: 68},
    {id: 2, name: 'Eva Rahman', age: 38},
    {id: 3, name: 'Shuvro Dev', age: 58},
    {id: 4, name: 'Pritom', age: 28},
  ]

  return (
    <>
      <h3>Vite + React</h3>
      <BookStore books={books}></BookStore>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }


      <Actor name={"Bappa Raz"}></Actor>
      {
        actors.map(actor =><Actor name={actor}></Actor>)
      }

      
    </>
  )
}



export default App
