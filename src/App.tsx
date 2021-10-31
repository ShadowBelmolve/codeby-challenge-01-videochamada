import { useState } from 'react';
import './App.css';
import AvatarDisplay from './components/avatar-display';
import DefaultAvatar from './components/avatars';
import AvatarSelector from './components/avatar-selector';
import LoadingScreen from './components/loading-screen';

function App() {
  const [selectedAvatar, setSelectedAvatar] = useState(DefaultAvatar);
  const [selectedAvatarIdx, setSelectedAvatarIdx] = useState(0);
  const [showAvatarSelector, setShowAvatarSelector] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [name, setName] = useState("");
  let element: JSX.Element;
  if (showAvatarSelector) {
    element = (
      <AvatarSelector
        idx={selectedAvatarIdx}
        onSelect={async (avatar, idx) => {
          await loadIt();
          setSelectedAvatar(avatar);
          setSelectedAvatarIdx(idx);
          setShowAvatarSelector(false);
        }}
      />
    );
  } else {
    element = <form
      onSubmit={(e) => {
        e.preventDefault();
        loadIt(99999999);
      }}
    >
      <h3 className='h3 main-headline'>Escolha um nome e um ícone</h3>
      <div className="p mt-6 h-64 relative">
        <AvatarDisplay selectedAvatar={selectedAvatar} onEdit={() => setShowAvatarSelector(true)} />
      </div>
      <p className="p">
        <input type="text" className="input h5" value={name} onChange={(e) => setName(e.target.value)} />
      </p>
      <p className="p">
        <button type="submit" className="button-primary h5 bold">
          ENTRAR
        </button>
      </p>
    </form>;
  }

  return (
    <div className="main-container relative">
      {element}
      {showLoading && <LoadingScreen />}
    </div>
  );

  function loadIt(time = 3000) {
    setShowLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        setShowLoading(false);
        resolve(true);
      }, time);
    });
  }
}

export default App;
