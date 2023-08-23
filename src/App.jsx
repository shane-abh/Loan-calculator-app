import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Header from "./Header";
import LoanForm from "./LoanForm";
import Results from "./Results/Results";
import Trial from "./Trial";

function App() {
  const [count, setCount] = useState(0);

  const [formData, setFormData] = useState(null);

  return (
    <div>
      <Header />
      <Trial/>
{/*      
      <LoanForm loanInfo={setFormData}/>
      {formData!=null? <Results data={formData}/> : ""} */}
      
    </div>
  );
}

export default App;
