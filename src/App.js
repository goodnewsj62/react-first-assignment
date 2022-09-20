import UserInput from 'components/UserInput';
import UserOutput from 'components/UserOutput';
import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState("routebirds");

  function changeusername(ref) {
    setTimeout(() => { setUsername(ref.current.value) }, 2000);
  }

  return (
    <div className="App">
      <UserOutput text="some text yo" username={username} />
      <UserInput change={changeusername} />
    </div>
  );
}

export default App;
