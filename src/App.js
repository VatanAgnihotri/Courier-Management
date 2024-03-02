import HeaderContainer from "./Containers/HeaderContainer";
import CardContainer from "./Containers/CardContainer";
import TableContainer from "./Containers/TableContainer";

import { CounterContextProvider } from "./Providers/CounterValuesProvider";
import { useState } from "react";
import { TableTypeContextProvider } from "./Providers/TableDataTypeProvider";

function App() {
  const [counterData, setCounterData] = useState(undefined);
  const [tableType, setTableType] = useState("all");
  return (
    <div>
      <CounterContextProvider counterData={counterData}>
        <HeaderContainer />
        <TableTypeContextProvider type={tableType}>
          <CardContainer setTableType={setTableType} />
          <TableContainer setCounterData={setCounterData} />
        </TableTypeContextProvider>
      </CounterContextProvider>
    </div>
  );
}

export default App;
