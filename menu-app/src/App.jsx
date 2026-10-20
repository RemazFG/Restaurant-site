import { useState } from "react";
import Counter from "./componets/counter";
import Greeting from "./componets/greeting";
import Footer from "./componets/Footer";





function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("0");
  return (
        <div>
          <input name="name" id="name"
            placeholder="first name"
            onChange={(e) => setName(e.currentTarget.value)} 
          />
          <input name="age" id="age"
            placeholder="enter your age"
            onChange={(e) => setAge(e.currentTarget.value)} 
          />
            <h1>This is our menu</h1>
            <h2>Feel free to order anything</h2>
            <Counter />
            <Greeting name={name} age={age} />
            <button onClick={() => setName("")}>Logout</button>
            <Footer />
        </div>
  );
}

export default App ;
