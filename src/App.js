//insert in app hook useState and filter
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import MiApi from "./components/MiApi";

function App() {
  const [info, setInfo] = useState([]);
  const [filtroCharacter, setFiltroCharacter] = useState("");

  return (
    <div>
      <Navbar id="ok" fixed="top" variant="dark">
        <div className="container">
          <Navbar.Brand href="#home">Marvel Vs Capcom</Navbar.Brand>
          <Nav id="navsup" className="me-auto">
            <input
              type="text"
              placeholder="Búsqueda"
              className="search"
              onChange={(e) => setFiltroCharacter(e.target.value)}
            ></input>

            <Button
              onClick={() => {
                const sortedList = [...info].sort((a, b) =>
                  a.name > b.name ? 1 : a.name < b.name ? -1 : 0
                );
                setInfo(sortedList);
              }}
            >
              Ascendente
            </Button>

            <Button
              onClick={() => {
                const sortedList = [...info].sort((a, b) =>
                  a.name > b.name ? -1 : a.name < b.name ? 1 : 0
                );
                setInfo(sortedList);
              }}
            >
              Descendente
            </Button>
          </Nav>
        </div>
      </Navbar>

     <MiApi
     info={info}
     setInfo={setInfo}
     filtroCharacter={filtroCharacter}
     />
    </div>
  );
}

export default App;