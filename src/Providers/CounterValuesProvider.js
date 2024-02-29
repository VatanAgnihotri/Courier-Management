import { createContext, useContext, useEffect, useState } from "react";

const CounterContext = createContext(undefined);

export function CounterContextProvider(props) {
  const [counterValues, setCounterValues] = useState({});
  const { counterData } = props;

  useEffect(() => {
    setCounterValues(counterData);
  }, [setCounterValues, counterData]);

  return (
    <CounterContext.Provider value={{ counterValues }}>
      {props.children}
    </CounterContext.Provider>
  );
}

export const useCounterContext = () => useContext(CounterContext);
