import './App.css';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter, Route } from 'react-router-dom';
// import Intro from './page/Intro';

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <header className="App-header">
                <div className="nav-country">
                    <button type="button" className="btn-change-country usa">
                    </button>
                </div>
            </header>
            <div className="App-title-block">
                <img className="App-logo" src="./assets/mcdonalds_logo.svg" alt="" />
                <h2 className="App-title">
                    Where will you be
                    <br />
                    eating today?
                </h2>
            </div>
            {/* <BrowserRouter>
            
            </BrowserRouter> */}
        </div>
    );
}

export default App;
