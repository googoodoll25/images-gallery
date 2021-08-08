import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';

import InputBox from './components/InputBox';

function App() {
  const [word, setWord] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(word);
  };

  console.log(word);

  return (
    <div className='App'>
      <Header title='Image Gallery' />

      <InputBox word={word} setWord={setWord} handleSubmit={handleSearch} />
    </div>
  );
}

export default App;
