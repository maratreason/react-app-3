import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Signup from "./pages/Signup";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/services" component={Services} />
                    <Route exact path="/signup" component={Signup} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
