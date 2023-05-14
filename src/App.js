import './App.css';

function App() {
  const Deatils = [
    { name: 'aaaaaa', age: '111' },
    { name: 'bbbbbb', age: '222' },
    { name: 'cccccc', age: '333' },
    { name: 'dddddd', age: '444' },
  ];
  return (
    <div className="App">
      <div>
        {
          Deatils.map(data =><Person name={data.name} age={data.age}></Person> )
        }
      </div>
    </div>
  );
}
function Person(props) {
  
  return (
    <div>
      <h1>Name : {props.name}</h1>
      <h5> Age : {props.age}</h5>
    </div>
  )
}
export default App;
