import HeaderContainer from "./Containers/HeaderContainer";
import CardContainer from "./Containers/CardContainer";
import TableContainer from "./Containers/TableContainer";

import { CounterContextProvider } from "./Providers/CounterValuesProvider";
import { useState } from "react";

function App() {
  const [counterData, setCounterData] = useState(undefined);

  return (
    <div>
      <CounterContextProvider counterData={counterData}>
        <HeaderContainer />
        <CardContainer />
        <TableContainer setCounterData={setCounterData} />
      </CounterContextProvider>
    </div>
  );
}

export default App;
