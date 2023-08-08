import { useState } from 'react';
import './App.css';
import useFetch from './useFetch';
import ContextContainer from './ContextContainer';
import HOCHeader from './HOCHeader';



function App() {
  //const [data, loading] = useFetch("Omkar");
  const header = () => <div>I am Header</div>;
  const HeaderCustom = HOCHeader(header)

  return (
    <ContextContainer>
      <HeaderCustom />
      <div className="App">
        {useFetch()}
      </div>
    </ContextContainer>
  );
}

export default App;