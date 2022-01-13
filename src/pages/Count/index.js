import NavBar from "../../components/NavBar";
import Compteur from "../../components/Compteur";

const Count = () => {
  return (
    <div className="counter">
      <NavBar></NavBar>
      <Compteur initialCount={0}></Compteur>
    </div>
  );
};

export default Count;
