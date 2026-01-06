import { Link } from "react-router-dom";
import {useState} from "react";
import { championTrait } from "../Champion/ChampionTrait.jsx";

import top from "../../role-img/top.png";
import jungle from "../../role-img/jg.png";
import bot from "../../role-img/bot.png";
import support from "../../role-img/sp.png";
import mid from "../../role-img/mid.png";
import specialist from "../../role-img/Specialist_icon.webp"

import ChampionCard from "../../Components/Champion/ChampionCard.jsx";

const roles = [specialist, top, jungle, mid, bot, support];


function Champion() {

  const [role, setRole] = useState(specialist);
  const [search, setSearch] = useState("");
  const filterRoleChampion = (role === specialist) ? championTrait : championTrait.filter((champion) => champion.lane.includes(role));
  const filterSearchChampion = filterRoleChampion.filter((champ) => champ.name.toLowerCase().trim().indexOf(search.toLowerCase()) === 0);

  function updateRole(role) {
    setRole(role);
    console.log("Role Changed");
}


  return (
    <div>
      <div className="mb-15 flex flex-wrap gap-5"> 
        <input className="w-5/12 sm:w-4/12 max-w-xs bg-[#0D1221] rounded-sm px-5 py-1 min-w-50" placeholder="Search Champion" value={search} onChange={(e) => {setSearch(e.target.value); console.log(search.length)}} />
        <div className="flex">
          {roles.map((r) => (
            <button key={r} className={`w-15 h-9 cursor-pointer flex justify-center items-center border-[rgba(230,234,242,0.16)] border hover:border-white ${
              r === role ? "bg-[#2A2F3A]" : "bg-[#0D1221]" }`}>
              <img src={r} className="w-6" onClick={() => updateRole(r)} />
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-10 flex-wrap box-border">
        {filterSearchChampion.map((champ) => (
          <ChampionCard
            to={champ.to}
            lane1={champ.lane[0]}
            lane2={champ.lane[1]}
            lane3={champ.lane[2]}
            lane4={champ.lane[3]}
            class1={champ.class[0]}
            class2={champ.class[1]}
            class3={champ.class[2]}
            class4={champ.class[3]}
            champimg={champ.img}
            name={champ.name}
            description={champ.description}
            key={champ.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Champion;
