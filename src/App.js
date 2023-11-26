import logo from "./logo.png";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className ="container">
      <header className="App-header">
        <img src={logo}
        className="App-logo img-fluid" 
        alt="logo"/>
      </header>
      <main>
        <Dictionary defaultKeyword="feather"/>
      </main>
      <footer className="App-footer">
        This project is coded by Yana Yaman and is
        <a href="https://github.com/YanaJS/dicitonary-project/commits/main" target="_blank" rel="noopener noreferrer"> open-sourced on GitHub</a> and <a href="https://shiny-empanada-fb3487.netlify.app/" target="_blank" rel="noopener noreferrer">hosted on Netlify</a>
      </footer>
      </div>
    </div>
  );
}


