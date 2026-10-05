// import React , {createContext, useContext} from 'react';
//     const UserContext= createContext();
// const Context = () => {
//   console.log("app rendered");
//     function GrandChild(){
//         const username= useContext(UserContext);
//         return <h1>{username}</h1>
//     }
//   return (
// //     <div>
// //        <UserContext.Provider value= "Manik">
// //         <GrandChild/>
// //        </UserContext.Provider>
// //     </div>
// //   )
// // }

// // export default Context;
// import React , {createContext, useContext,useState} from 'react';
// const usercontext = createContext();
// function GrandChild(){
//   const username = useContext(UserContext);
//   return <h1>username</h1>;
// }
// function changeName(){
//   setname("Aman");
// }

// const Context = () => {
//   const [name,setName]= useState("Manik")
//   return (
//     <div><UserContext.Provider value= {name}>
//       <GrandChild/>
//       </UserContext.Provider>
//       <button onClick={changeName}></button></div>
//   )
// }

// export default Context

import React , {createContext, useContext,useState} from 'react';
 const UserContext = createContext();
 function Navbar(){
  const username = useContext(UserContext);
  return <h1>Navbar:{username}</h1>
 }
function Profile(){
const username = useContext(UserContext);
  return <h1>Profile:{username}</h1>

}

const Context = () => {
   const [name, setName]= useState("Manik");
function changeName(){
  setName("Rahul");
}
  return (
    <div><UserContext.Provider value={name}>
      <Navbar/>
      <Profile/>
    <button onClick={changeName}>Change name</button>
      </UserContext.Provider>
      </div>
  )
}

export default Context