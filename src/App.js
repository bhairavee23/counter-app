import './App.css';
import NumberInput from './components/numberinput/NumberInput';
import Title from './components/title/Title';

function App() {
  return (
    <div className="App">
      <Title value='Counter' />
      <NumberInput />
    </div>
  );
}

export default App;
