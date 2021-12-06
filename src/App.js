import Button from '@hig/button';
import './App.css';
import Contenedor from './Contenedor';
import MyButton from './MyButton';

function App() {

  function handleClick() {
    console.log('reading...');
  }

  return (
    <div className="App">

      <Contenedor>

        <div>HIG 1.0</div>

        <Button
          size="standard"
          title="JP"
          type="primary"
          link="https://github.com/Autodesk/hig"
          target="_blank"
        />
      </Contenedor>

      <div>Replica of the General Structure</div>

      <MyButton
        title="Dup-K"
        target="_blank"
        onClick={handleClick}
        // the link is optional
        // link="https://github.com/Autodesk/hig"

      />

    </div>
  );
}

export default App;
