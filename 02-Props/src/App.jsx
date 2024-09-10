import './App.css'
import PropTypes from 'prop-types';

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Student grade="5" score="99" />
    </>
  );
}

function Student({ grade, score }) {
  return (
    <>
      <h2>Hello</h2>
      <p>Grade: {grade}</p>
      <p>Score: {score}</p>
    </>
  );
}

// Define propTypes for the Student component
Student.propTypes = {
  grade: PropTypes.string.isRequired,  // Ensure grade is a required string
  score: PropTypes.string.isRequired   // Ensure score is a required string
};

export default App;
 