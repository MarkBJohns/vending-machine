// import './App.css';
// import { BrowserRouter, Route, Link } from "react-router-dom"
// import VendingMachine from './VendingMachine';
// import Snack from './Snack';

// function App() {
//   return (
//     <div className="App">
//       <h1>Vending Machine</h1>
//         <VendingMachine />
//       {/* <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Snack name={null} image="" />} />
//           <Route path="/chips" element={<Snack name="Chips" image="https://imgs.search.brave.com/3AKrRPAv5sN8c_uGSpZ-UW-K8TGmo1v7cKqOZT5BGYw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/Lzcxc1BzOVo2WUxM/LmpwZw" />} />
//           <Route path="/oreos" element={<Snack name="Oreos" image="https://imgs.search.brave.com/bHPmQqedIeJ7bRZCQcfJ92SKnaE8MF2S3_tfvp2Yrng/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTF1QmlGenJqRkwu/anBn" />} />
//           <Route path="/cheeze-its" element={<Snack name="Cheese Itz" image="https://imgs.search.brave.com/Kp8RSgtcutcgWvBOOvCnbQuX1TasDUKw0Pj3MEGETdI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFMU0RrU2s1QUwu/anBn" />} />
//         </Routes>
//       </BrowserRouter> */}
//     </div>
//   );
// }

// export default App;
// import './App.css';
// import { BrowserRouter, Route, Switch } from "react-router-dom"
// import VendingMachine from './VendingMachine';
// import Snack from './Snack';

// function App() {
//   const snackList = [
//     { name: "Chips", image: "https://imgs.search.brave.com/3AKrRPAv5sN8c_uGSpZ-UW-K8TGmo1v7cKqOZT5BGYw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/Lzcxc1BzOVo2WUxM/LmpwZw" },
//     { name: "Oreos", image: "https://imgs.search.brave.com/bHPmQqedIeJ7bRZCQcfJ92SKnaE8MF2S3_tfvp2Yrng/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTF1QmlGenJqRkwu/anBn" },
//     { name: "Cheez Its", image: "https://imgs.search.brave.com/Kp8RSgtcutcgWvBOOvCnbQuX1TasDUKw0Pj3MEGETdI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFMU0RrU2s1QUwu/anBn" }
//   ];

//   return (
//     <div className="App">
//       <h1>Vending Machine</h1>
//       <BrowserRouter>
//         <Switch>
//           <Route exact path="/">
//             <VendingMachine snackList={snackList} />
//           </Route>
//           {snackList.map((snack, i) => {
//             return (
//               <Route key={i} path={`/snack/${snack.name.toLowerCase().replace(' ', '-')}`}>
//                 <Snack name={snack.name} image={snack.image} />
//               </Route>
//             )
//           })}
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

//  CREATE DYNAMIC ROUTES THAT CHANGE THE STATE

// import React from "react";
// import { BrowserRouter, Route, Switch, useParams } from "react-router-dom"
// import VendingMachine from './VendingMachine';
// import Snack from './Snack';

// function App() {
//     const snackList = [
//       { name: "Chips", image: "https://imgs.search.brave.com/3AKrRPAv5sN8c_uGSpZ-UW-K8TGmo1v7cKqOZT5BGYw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/Lzcxc1BzOVo2WUxM/LmpwZw" },
//       { name: "Oreos", image: "https://imgs.search.brave.com/bHPmQqedIeJ7bRZCQcfJ92SKnaE8MF2S3_tfvp2Yrng/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTF1QmlGenJqRkwu/anBn" },
//       { name: "Cheez Its", image: "https://imgs.search.brave.com/Kp8RSgtcutcgWvBOOvCnbQuX1TasDUKw0Pj3MEGETdI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFMU0RrU2s1QUwu/anBn" }
//     ]; 

//   const SnackRoute = () => {
//     const { snackName } = useParams();
//     const snack = snackList.find(s => s.name.toLowerCase().replace(' ', '-') === snackName);
//     return snack ? <Snack name={snack.name} image={snack.image} /> : null;
//   }

//   return (
//     <div className="App">
//       <h1>Vending Machine</h1>
//       <BrowserRouter>
//         <Switch>
//           <Route exact path="/">
//             <VendingMachine snackList={snackList} />
//           </Route>
//           <Route path="/snack/:snackName">
//             <SnackRoute />
//           </Route>
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React from "react";
import VendingMachine from "./VendingMachine";
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <h1>Vending Machine</h1>
      <VendingMachine />
    </div>
  )
}

export default App;