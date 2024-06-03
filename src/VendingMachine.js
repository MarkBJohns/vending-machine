// import React from "react";
// import { Link, BrowserRouter, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
// import Snack from "./Snack";

// const VendingMachine = () => {
//     const snackList = [
//         { name: "Chips", image: "https://imgs.search.brave.com/3AKrRPAv5sN8c_uGSpZ-UW-K8TGmo1v7cKqOZT5BGYw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/Lzcxc1BzOVo2WUxM/LmpwZw" },
//         { name: "Oreos", image: "https://imgs.search.brave.com/bHPmQqedIeJ7bRZCQcfJ92SKnaE8MF2S3_tfvp2Yrng/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTF1QmlGenJqRkwu/anBn" },
//         { name: "Cheez Its", image: "https://imgs.search.brave.com/Kp8RSgtcutcgWvBOOvCnbQuX1TasDUKw0Pj3MEGETdI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFMU0RrU2s1QUwu/anBn" }
//     ];
    
//     return (
//         <BrowserRouter>
//             <div className="VendingMachine">
//                 <div className="VendingMachine-container">
//                     <img
//                         src="https://imgs.search.brave.com/0cbNGhgbECPL4zhHDrECd7bdwYAtc7Q5xUDa_AOPBBg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFkN0xjbGRGNEwu/anBn"
//                         alt="vending-machine" className="VendingMachine-image"
//                     />
//                     <div className="VendingMachine-select">
//                         <h3>Fancy a snack?</h3>
//                         <ul>
//                             {snackList.map((snack, i) => (
//                                 <li key={i}>
//                                     <Link to={`/snack/${snack.name.toLowerCase().replace(' ', '-')}`}>
//                                         {snack.name}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <Switch>
//                 {snackList.map((snack, i) => {
//                     return (
//                         <Route key={i} exact path={`/snack/${snack.name.toLowerCase().replace(' ', '-')}`}>
//                             <Snack name={snack.name} image={snack.image} />
//                         </Route>
//                     )
//                 })}
//             </Switch>
//         </BrowserRouter>
//     )
// }

// export default VendingMachine;
//------------------------------------------------

// import React from "react";
// import { Link } from "react-router-dom";

// const VendingMachine = ({ snackList }) => {                                                            
//     return (
//         <div className="VendingMachine">
//             <div className="VendingMachine-container">
//             <img
//                 src="https://imgs.search.brave.com/0cbNGhgbECPL4zhHDrECd7bdwYAtc7Q5xUDa_AOPBBg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFkN0xjbGRGNEwu/anBn"
//                 alt="vending-machine" className="VendingMachine-image"
//             />
//                 <div className="VendingMachine-select">
//                     <h3>Fancy a snack?</h3>
//                     <ul>
//                         {snackList.map((snack, i) => (
//                             <li key={i}>
//                                 <Link to={`/snack/${snack.name.toLowerCase().replace(' ', '-')}`}>
//                                     {snack.name}
//                                 </Link>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default VendingMachine;

import React from "react";
import { snackList, urlStyle } from "./snackList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Snack from "./Snack";

const VendingMachine = () => {
    const refreshPage = () => {
        setTimeout(() => {
            window.location.reload();
        }, 100);
    }
    
    return (
        <Router>
            <div className="VendingMachine">
                <img className="VendingMachine-image" alt="vending machine"
                    src="https://imgs.search.brave.com/0cbNGhgbECPL4zhHDrECd7bdwYAtc7Q5xUDa_AOPBBg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFkN0xjbGRGNEwu/anBn"
                />
                <div className="VendingMachine-selection">
                    <h3>Fancy a snack?</h3>
                    <ul>
                        {snackList.map((snack, i) => (
                            <li key={i}>
                                <Link
                                    to={`/${urlStyle(snack.name)}`}
                                    onClick={refreshPage}>
                                    {snack.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Switch>
                            {/* <Route path="/:snackName" render={(props) => (
                                <Snack key={props.match.params.snackName} />
                            )} /> */}
                        <Route path="/:snackName" component={Snack} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default VendingMachine;