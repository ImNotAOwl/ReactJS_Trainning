import { useRef, useState } from "react";
import Button from "../Button";
import useAlert from '../../hooks/useAlert'

import './index.css';

const Compteur = ({initialCount}) => {
    
    const userTexte = useRef();

    const [ count, setCount ] = useState(initialCount);

    const setCompteur = () => {
        setCount(parseInt(userTexte.current.value,10));
    }

    // effectue la mise à jour a chaque rendu de la page
    // useEffect(() => {
    //     document.title = `Le compteur est à ${count}`;
    // });

    useAlert("Composant est détruit");
   
    return (  
        <div className="compteur">


            <div className="init_compteur">
                <input type="number" ref={userTexte}/>
                <Button texte="Set Compteur" onClick={setCompteur}></Button>
            </div>

            <h1>Total : {count}</h1>
            <div className="btn_compteur">
                <Button onClick={() => setCount(initialCount) } texte="Réinitialiser"></Button>
                <Button onClick={() => setCount(prevCount => prevCount - 1)} texte="-"></Button>
                <Button onClick={() => setCount(prevCount => prevCount + 1)} texte="+"></Button>
            </div>
        </div>

    );
}
 
export default Compteur;