import React, {useEffect, useState} from "react";
import { useParams, useHistory } from "react-router-dom";
import { snackList, urlStyle } from "./snackList";

const Snack = () => {
    let { snackName } = useParams();
    const history = useHistory();
    const [snack, setSnack] = useState(null);
    
    useEffect(() => {
        console.log("Snack name changed", snackName);
        const newSnack = snackList.find(s => urlStyle(s.name) === snackName);
        console.log("Found snack", newSnack);
        setSnack(newSnack);
    }, [snackName]);
    
    if (!snack) return null;
    
    const goHome = () => {
        history.push("/");
        window.location.reload();
    }
    
    return (
        <React.Fragment>
            <div className="Snack">
                <h4>{snack.name}</h4>
                <img src={snack.img} alt={snack.name} />
                <button onClick={goHome}>Go Back</button>
            </div>
        </React.Fragment>
    )
}

export default Snack;