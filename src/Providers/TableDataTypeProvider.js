import { createContext, useContext, useEffect, useState } from "react";

const TableDataContext = createContext(undefined);

export function TableTypeContextProvider(props) {
  const [tableType, setTableType] = useState("all");
  const { type } = props;

  useEffect(() => {
    setTableType(type);
  }, [setTableType, type]);

  return (
    <TableDataContext.Provider value={{ tableType }}>
      {props.children}
    </TableDataContext.Provider>
  );
}

export const useTableDataContext = () => useContext(TableDataContext);
