import logo from "./logo.svg";
import "./App.css";
import HeaderContainer from "./Containers/HeaderContainer";
import CardContainer from "./Containers/CardContainer";
import TableContainer from "./Containers/TableContainer";

function App() {
  return (
    <div>
      <HeaderContainer />
      <CardContainer />
      <TableContainer />
    </div>
  );
}

export default App;
