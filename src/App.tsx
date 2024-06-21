import { Router, Route } from "@solidjs/router";
import Home from "./pages/home/Home";
import Background from "./pages/backgound/Background";
import Header from "./components/header/Header";

function App() {
  return (
    <div class="wrapper">
      <Header />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/background" component={Background} />
      </Router>
    </div>
  );
}

export default App;
