import { useRoutes } from 'hookrouter';
import BackButton from "./components/BackButton";
import routes from './routes';

import './App.css';

const App = () => {
  const match = useRoutes(routes);
  // console.log('match:', match);
  return match ? (
    <>
      {match.type.name !== 'MainPage' && <BackButton/>}
      {match}
    </>
  ) : ( <>404 Page not found</>);
}

export default App;
