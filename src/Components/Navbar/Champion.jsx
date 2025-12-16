import { Link } from "react-router-dom";
import {championTrait} from "../ChampionTrait.jsx"

import ChampionCard from "../../Components/ChampionCard.jsx";

function Champion() {
  return (
    <div className="flex flex-row gap-10 flex-wrap box-border">
      {championTrait.map((champ) => (
        <ChampionCard to={champ.to} lane1={champ.lane[0]} lane2={champ.lane[1]} lane3={champ.lane[2]} lane4={champ.lane[3]} class1={champ.class[0]} class2={champ.class[1]} class3={champ.class[2]} class4={champ.class[3]} champimg={champ.img} name={champ.name} description={champ.description} />
      ))}
    </div>
  );
}

export default Champion;
