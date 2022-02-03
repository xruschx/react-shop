import './App.css';
import Header from "./Component/Header";
import Home from "./Component/Home";

function App() {
    return (
        <div>
            <Header text='Header Learn React' description='Header test description'/>
            <Home/>
        </div>
    );
}

export default App;
