// import React from "react";

// const List = () => {
//   let arr = [10, 20, 30, 40, 50];

//   const res = arr.map((e, i) => {
//     return (
//       <React.Fragment key={i}>
//         <p>{e}</p>
//       </React.Fragment>
//     );
//   });

//   return (
//     <React.Fragment>
//       <h1>List Rendering</h1>
//       <h2>(arr)</h2>
//       <div>{res}</div>
//     </React.Fragment>
//   );
// };

// export default List;

// import React, { useRef } from "react";

// const App = () => {
//   const inputRef = useRef();

//   const handleFocus = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <input ref={inputRef} />
//       <button onClick={handleFocus}>Focus Input</button>
//     </div>
//   );
// };

// export default App;
// import React,{useRef} from 'react'

// const App = () => {
//   const inputRef=useRef();
//   function handleFocus(){
//     inputRef.current.focus();
    
//   };
// function show(){
//   alert(inputRef.current.value);
// }
    

//   return (
//     <div>
//       <input ref={inputRef}></input>
//       <button onClick={handleFocus}>Button Focus</button>
//       <button onClick= {show}>show</button>
//     </div>
//   );
// };

// export default App;

//   import React, {createContext, useContext} from 'react'
//   const UserContext = createContext();
// const App = () => { 

//  function GrandChild() {
//   const username = useContext(UserContext);

//   return <h1>{username}</h1>;
// }
//   return (
//     <div><UserContext.Provider value="Hello my name is manik">
//   <GrandChild />
// </UserContext.Provider></div>
//   )
// }

// export default App