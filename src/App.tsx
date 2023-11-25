import { useState } from 'react';
import './App.css';
import PasswordInput from './components/PasswordInput';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyCEkdBlI0gg3Y97BvB5pyBgLP1vOZv3-4M",
	authDomain: "embarcados-a2b02.firebaseapp.com",
	databaseURL: "https://embarcados-a2b02-default-rtdb.firebaseio.com",
	projectId: "embarcados-a2b02",
	storageBucket: "embarcados-a2b02.appspot.com",
	messagingSenderId: "286452433490",
	appId: "1:286452433490:web:1ebae8cb80f60b680cd58b",
	measurementId: "G-M7STFK8BWW"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function App() {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleButtonClick = (action) => {
    try {
      // Definir o número com base na ação
      const numero = action === 'open' ? 1 : 0;

      // Enviar dados para o Firebase em tempo real
      set(ref(db, "/portao/"), numero);

		setPassword('');

    } catch (error) {
      console.error("Erro ao enviar dados para o Firebase:", error);
    }
  };


  return (
    <>
      <div>
        <div>
          <h1>Projeto LockIN</h1>
			<span>Melhorando sempre a sua portaria remota!</span>
        </div>
        <div className="card">
          <div>
            <PasswordInput password={password} setPassword={setPassword} />
          </div>
          <button
            className="button"
            disabled={password.length < 1}
            onClick={() => handleButtonClick('open')}
          >
            Abra a porta
          </button>
          <button onClick={() => handleButtonClick('close')}>
            Fechar Porta
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
