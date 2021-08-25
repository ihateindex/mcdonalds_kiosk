import './App.css';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter, Route } from 'react-router-dom';
import Intro from './page/Intro';
import Main from './page/Main';

function App() {
    return (
        <div className="App">
            {/* //* common CSS  */}
            <GlobalStyle />
            {/* <header className="App-header">
            </header> */}
            <BrowserRouter>
                <Route path="/" exact={true} component={Intro} />
                <Route path="/page/Main" component={Main} />
            </BrowserRouter>
        </div>
    );
}

export default App;
