import './App.scss';

import Header from './components/Header';
import Main from './components/Main';

import placeholderVideo from '../src/media/SunRaysinForest.mp4';

function App() {
  return (
    <div className="App">
      <video autoPlay loop muted 
        src={placeholderVideo} type="video/mp4"
        style= {{
          position: "fixed",
          width: "100vw",
          left: "50%",
          top: "50%",
          height: "100vh",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1"
        }}>
      </video>
      <Header />
      <Main />
      <div className="Footer">

      </div>
    </div>
  );
}

export default App;
