import {useState, useRef} from "react";
import Build from "../Champion/Build.jsx";
import Counter from "../Champion/Counter.jsx";
import Guide from "../Champion/Guide.jsx";

import aatrox from "../../champion-img/Aatrox.png";
import top from "../../role-img/top.png";
import jungle from "../../role-img/jg.png";

import conqueror from "../../rune-png/8010.png";
import r1 from "../../rune-png/8008-modified.png";

export function Aatrox() {  

  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch(clickedItem) {
    case 0: 
      displayItem = "";
      break;
    case 1:
      displayItem = <Build />;
      break;
    case 2:
      displayItem = <Guide />;
      break;
    case 3:
      displayItem = <Counter />;
      break;
  }

  return (
    <div className="flex flex-col gap-25">

      <div className="flex justify-around">
        <div className="flex gap-8 w-3/10 min-w-[400px]">
          <img src={aatrox} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={top} alt="" className="w-10" />
              <img src={jungle} alt="" className="w-10" />
            </div>
          </div>
        </div>
        <div className="flex flex-col my-auto flex-wrap flex-end">
          <div className="w-38 flex justify-between border border-[rgba(230,234,242,0.15)] rounded md:px-2 md:py-1 lg:px-2 lg:py-1 text-sm">
            <span className="text-[#7F8AA3]">Win rate:</span>
            <span className="font-bold">50%</span>
          </div>
          <div className="w-38 flex justify-between border border-[rgba(230,234,242,0.15)] rounded md:px-2 md:py-1 lg:px-2 lg:py-1 text-sm">
            <span className="text-[#7F8AA3]">Pick rate:</span>
            <span className="font-bold">50%</span>
          </div>
          <div className="w-38 flex justify-between border border-[rgba(230,234,242,0.15)] rounded md:px-2 md:py-1 lg:px-2 lg:py-1 text-sm">
            <span className="text-[#7F8AA3]">Ban rate:</span>
            <span className="font-bold">50%</span>
          </div>
          <div className="w-38 flex justify-between border border-[rgba(230,234,242,0.15)] rounded md:px-2 md:py-1 lg:px-2 lg:py-1 text-sm">
            <span className="text-[#7F8AA3]">Matches:</span>
            <span className="font-bold">1000000</span>
          </div>
        </div>
      </div>

      <nav>
        <ul className="flex md:mx-[15%] gap-20 text-lg text-[#7F8AA3] border-b border-[rgba(230,234,242,0.10)] pb-5">
          <li className={`hover:text-white ${(clickedItem == 1) && "text-white"}`} value="build" key="build" onClick={() => setClickedItem(1)}>Build</li>
          <li className={`hover:text-white ${(clickedItem == 2) && "text-white"}`} value="guide" key="guide" onClick={() => setClickedItem(2)}>Guide</li>
          <li className={`hover:text-white ${(clickedItem == 3) && "text-white"}`} value="counter" key="counter" onClick={() => setClickedItem(3)}>Counter</li>
        </ul> 
      </nav>
      
      <div className="md:mx-[15%]">
        {displayItem}
        <img src={conqueror} />
        <img src={r1} />
      </div>

    </div>
  );
}

export function Ahri() {
  return <div>Champ</div>;
}

export function Akali() {
  return <div>Champ</div>;
}

export function Akshan() {
  return <div>Champ</div>;
}

export function Alistar() {
  return <div>Champ</div>;
}

export function Ambessa() {
  return <div>Champ</div>;
}

export function Amumu() {
  return <div>Champ</div>;
}

export function Anivia() {
  return <div>Champ</div>;
}

export function Annie() {
  return <div>Champ</div>;
}

export function Aphelios() {
  return <div>Champ</div>;
}

export function Ashe() {
  return <div>Champ</div>;
}

export function Aurora() {
  return <div>Champ</div>;
}

export function AurelionSol() {
  return <div>Champ</div>;
}

export function Azir() {
  return <div>Champ</div>;
}

export function Bard() {
  return <div>Champ</div>;
}

export function BelVeth() {
  return <div>Champ</div>;
}

export function Blitzcrank() {
  return <div>Champ</div>;
}

export function Brand() {
  return <div>Champ</div>;
}

export function Braum() {
  return <div>Champ</div>;
}

export function Briar() {
  return <div>Champ</div>;
}

export function Caitlyn() {
  return <div>Champ</div>;
}

export function Camille() {
  return <div>Champ</div>;
}

export function Cassiopeia() {
  return <div>Champ</div>;
}

export function Chogath() {
  return <div>Champ</div>;
}

export function Corki() {
  return <div>Champ</div>;
}

export function Darius() {
  return <div>Champ</div>;
}

export function Diana() {
  return <div>Champ</div>;
}

export function Draven() {
  return <div>Champ</div>;
}

export function DrMundo() {
  return <div>Champ</div>;
}

export function Ekko() {
  return <div>Champ</div>;
}

export function Elise() {
  return <div>Champ</div>;
}

export function Evelynn() {
  return <div>Champ</div>;
}

export function Ezreal() {
  return <div>Champ</div>;
}

export function Fiddlesticks() {
  return <div>Champ</div>;
}

export function Fiora() {
  return <div>Champ</div>;
}

export function Fizz() {
  return <div>Champ</div>;
}

export function Galio() {
  return <div>Champ</div>;
}

export function Gangplank() {
  return <div>Champ</div>;
}

export function Garen() {
  return <div>Champ</div>;
}

export function Gnar() {
  return <div>Champ</div>;
}

export function Gragas() {
  return <div>Champ</div>;
}

export function Graves() {
  return <div>Champ</div>;
}

export function Gwen() {
  return <div>Champ</div>;
}

export function Hecarim() {
  return <div>Champ</div>;
}

export function Heimerdinger() {
  return <div>Champ</div>;
}

export function Hwei() {
  return <div>Champ</div>;
}

export function Illaoi() {
  return <div>Champ</div>;
}

export function Irelia() {
  return <div>Champ</div>;
}

export function Ivern() {
  return <div>Champ</div>;
}

export function Janna() {
  return <div>Champ</div>;
}

export function JarvanIV() {
  return <div>Champ</div>;
}

export function Jax() {
  return <div>Champ</div>;
}

export function Jayce() {
  return <div>Champ</div>;
}

export function Jhin() {
  return <div>Champ</div>;
}

export function Jinx() {
  return <div>Champ</div>;
}

export function KSante() {
  return <div>Champ</div>;
}

export function KaiSa() {
  return <div>Champ</div>;
}

export function Kalista() {
  return <div>Champ</div>;
}

export function Karma() {
  return <div>Champ</div>;
}

export function Karthus() {
  return <div>Champ</div>;
}

export function Kassadin() {
  return <div>Champ</div>;
}

export function Katarina() {
  return <div>Champ</div>;
}

export function Kayle() {
  return <div>Champ</div>;
}

export function Kayn() {
  return <div>Champ</div>;
}

export function Kennen() {
  return <div>Champ</div>;
}

export function KhaZix() {
  return <div>Champ</div>;
}

export function Kindred() {
  return <div>Champ</div>;
}

export function Kled() {
  return <div>Champ</div>;
}

export function KogMaw() {
  return <div>Champ</div>;
}

export function LeBlanc() {
  return <div>Champ</div>;
}

export function LeeSin() {
  return <div>Champ</div>;
}

export function Leona() {
  return <div>Champ</div>;
}

export function Lillia() {
  return <div>Champ</div>;
}

export function Lissandra() {
  return <div>Champ</div>;
}

export function Lucian() {
  return <div>Champ</div>;
}

export function Lulu() {
  return <div>Champ</div>;
}

export function Lux() {
  return <div>Champ</div>;
}

export function Malphite() {
  return <div>Champ</div>;
}

export function Malzahar() {
  return <div>Champ</div>;
}

export function Maokai() {
  return <div>Champ</div>;
}

export function MasterYi() {
  return <div>Champ</div>;
}

export function Mel() {
  return <div>Champ</div>;
}

export function Milio() {
  return <div>Champ</div>;
}

export function MissFortune() {
  return <div>Champ</div>;
}

export function Mordekaiser() {
  return <div>Champ</div>;
}

export function Morgana() {
  return <div>Champ</div>;
}

export function Naafiri() {
  return <div>Champ</div>;
}

export function Nami() {
  return <div>Champ</div>;
}

export function Nasus() {
  return <div>Champ</div>;
}

export function Nautilus() {
  return <div>Champ</div>;
}

export function Neeko() {
  return <div>Champ</div>;
}

export function Nidalee() {
  return <div>Champ</div>;
}

export function Nilah() {
  return <div>Champ</div>;
}

export function Nocturne() {
  return <div>Champ</div>;
}

export function NunuWillump() {
  return <div>Champ</div>;
}

export function Olaf() {
  return <div>Champ</div>;
}

export function Orianna() {
  return <div>Champ</div>;
}

export function Ornn() {
  return <div>Champ</div>;
}

export function Pantheon() {
  return <div>Champ</div>;
}

export function Poppy() {
  return <div>Champ</div>;
}

export function Pyke() {
  return <div>Champ</div>;
}

export function Qiyana() {
  return <div>Champ</div>;
}

export function Quinn() {
  return <div>Champ</div>;
}

export function Rakan() {
  return <div>Champ</div>;
}

export function Rammus() {
  return <div>Champ</div>;
}

export function RekSai() {
  return <div>Champ</div>;
}

export function Rell() {
  return <div>Champ</div>;
}

export function RenataGlasc() {
  return <div>Champ</div>;
}

export function Renekton() {
  return <div>Champ</div>;
}

export function Rengar() {
  return <div>Champ</div>;
}

export function Riven() {
  return <div>Champ</div>;
}

export function Rumble() {
  return <div>Champ</div>;
}

export function Ryze() {
  return <div>Champ</div>;
}

export function Samira() {
  return <div>Champ</div>;
}

export function Sejuani() {
  return <div>Champ</div>;
}

export function Senna() {
  return <div>Champ</div>;
}

export function Seraphine() {
  return <div>Champ</div>;
}

export function Sett() {
  return <div>Champ</div>;
}

export function Shaco() {
  return <div>Champ</div>;
}

export function Shen() {
  return <div>Champ</div>;
}

export function Shyvana() {
  return <div>Champ</div>;
}

export function Singed() {
  return <div>Champ</div>;
}

export function Sion() {
  return <div>Champ</div>;
}

export function Sivir() {
  return <div>Champ</div>;
}

export function Skarner() {
  return <div>Champ</div>;
}

export function Smolder() {
  return <div>Champ</div>;
}

export function Sona() {
  return <div>Champ</div>;
}

export function Soraka() {
  return <div>Champ</div>;
}

export function Swain() {
  return <div>Champ</div>;
}

export function Sylas() {
  return <div>Champ</div>;
}

export function Syndra() {
  return <div>Champ</div>;
}

export function TahmKench() {
  return <div>Champ</div>;
}

export function Taliyah() {
  return <div>Champ</div>;
}

export function Talon() {
  return <div>Champ</div>;
}

export function Taric() {
  return <div>Champ</div>;
}

export function Teemo() {
  return <div>Champ</div>;
}

export function Thresh() {
  return <div>Champ</div>;
}

export function Tristana() {
  return <div>Champ</div>;
}

export function Trundle() {
  return <div>Champ</div>;
}

export function Tryndamere() {
  return <div>Champ</div>;
}

export function TwistedFate() {
  return <div>Champ</div>;
}

export function Twitch() {
  return <div>Champ</div>;
}

export function Udyr() {
  return <div>Champ</div>;
}

export function Urgot() {
  return <div>Champ</div>;
}

export function Varus() {
  return <div>Champ</div>;
}

export function Vayne() {
  return <div>Champ</div>;
}

export function Veigar() {
  return <div>Champ</div>;
}

export function VelKoz() {
  return <div>Champ</div>;
}

export function Vex() {
  return <div>Champ</div>;
}

export function Vi() {
  return <div>Champ</div>;
}

export function Viego() {
  return <div>Champ</div>;
}

export function Viktor() {
  return <div>Champ</div>;
}

export function Vladimir() {
  return <div>Champ</div>;
}

export function Volibear() {
  return <div>Champ</div>;
}

export function Warwick() {
  return <div>Champ</div>;
}

export function Wukong() {
  return <div>Champ</div>;
}

export function Xayah() {
  return <div>Champ</div>;
}

export function Xerath() {
  return <div>Champ</div>;
}

export function XinZhao() {
  return <div>Champ</div>;
}

export function Yasuo() {
  return <div>Champ</div>;
}

export function Yone() {
  return <div>Champ</div>;
}

export function Yorick() {
  return <div>Champ</div>;
}

export function Yuumi() {
  return <div>Champ</div>;
}

export function Zac() {
  return <div>Champ</div>;
}

export function Zed() {
  return <div>Champ</div>;
}

export function Zeri() {
  return <div>Champ</div>;
}

export function Ziggs() {
  return <div>Champ</div>;
}

export function Zilean() {
  return <div>Champ</div>;
}

export function Zoe() {
  return <div>Champ</div>;
}

export function Zyra() {
  return <div>Champ</div>;
}
