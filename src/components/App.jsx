import Routes from "./Routes";
import Header from "./Header/";
import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Routes />
      </Container>
    </div>
  );
}

export default App;
