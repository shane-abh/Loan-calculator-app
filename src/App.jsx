import { createContext, useState, useContext } from "react";

import Header from "./Header";
import LoanForm from "./LoanForm";
import Results from "./Results/Results";
import Trial from "./Trial";

export const ThemeContext = createContext(null);

function App() {
  const [count, setCount] = useState(0);

  const [formData, setFormData] = useState(null);


  const [mode, setMode] = useState(false);
  const toggleMode = () => {
    setMode((prevMode) => !prevMode);
  };

  console.log(mode)

  return (
    <div>
      <ThemeContext.Provider value={ {mode, toggleMode}}>
        <Header  />
        {/* <Trial/> */}

        <LoanForm loanInfo={setFormData} />
        {formData != null ? <Results data={formData} /> : ""}
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
