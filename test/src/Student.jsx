
  export default function Student({ std }) {
    const { name, email } = std;
    return (
      <div className="box">
        <h2>Name: {name}</h2>
        <h2>Email: {email}</h2>
      </div>
    );
  }
  