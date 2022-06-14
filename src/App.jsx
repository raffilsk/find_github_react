import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import GlobalSyle from './styles/global';

function App() {
  return(
    <>
      <BrowserRouter>
        <Router />        
      </BrowserRouter>
      <GlobalSyle />
    </>

  );
}

export default App;
