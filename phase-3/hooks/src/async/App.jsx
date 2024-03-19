// import { useList, } from "./actions"

// import React, { useTransition } from 'react'


// const App = () => {


//   const { data, loading, setNext, next, isPending } = useList()


//   return (
//     <div>
//       App Promises
//       {/* {loading && "please wait..."} */}
//       {isPending ? "yes" : "no"}
//       <br />
//       {JSON.stringify(data)}
//       <br />
//       <button onClick={() => setNext(next + 1)}>next</button>
//     </div>
//   )
// }

// export default App




import axios from 'axios';
import { useState, useTransition } from 'react';

function App() {
  const [isPending, startTransition] = useTransition({
    timeoutMs: 3000 // set the timeout to 3 seconds
  });

  // useFormStatus()

  const [value, setValue] = useState(null)

  function handleClick() {
    startTransition(async () => {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos/1`);
      setValue(data)
    });
  }

  return (
    <div>
      <button onClick={handleClick}>Start transition</button>
      {
        JSON.stringify(value)
      }
      {isPending && <p>Transition is in progress...</p>}
    </div>
  );
}


export default App