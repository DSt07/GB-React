import './App.css';

function App(props) {
  const newWish = 'Успехов'

  return (
    <div className="App">
      <header className="App-header">
        Моё первое творение в React App
        <h1>Ну что, помчали!!!</h1>
        <h3>Пожелайте мне - "{props.name}!"</h3>
        <Something nName = {newWish} name = {props.name}/>
      </header>
    </div>
  );
}

export default App;

const Something = (props) => {
  return(
    <div>
      <h4>Но лучше - {props.nName} и {props.name}!</h4>
    </div>
  )
}