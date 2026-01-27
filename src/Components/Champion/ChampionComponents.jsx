import { useState, useRef } from "react";
import Build from "../Champion/Build.jsx";
import Counter from "../Champion/Counter.jsx";
import Guide from "../Champion/Guide.jsx";

import aatrox from "../../champion-img/Aatrox.png";
import ahri from "../../champion-img/AhriSquare.webp";
import top from "../../role-img/top.png";
import jungle from "../../role-img/jg.png";
import mid from "../../role-img/mid.png";
import support from "../../role-img/sp.png";
import bot from "../../role-img/bot.png";



import akali from "../../champion-img/AkaliSquare.webp";
import akshan from "../../champion-img/AkshanSquare.webp";
import alistar from "../../champion-img/AlistarSquare.webp";
import ambessa from "../../champion-img/AmbessaSquare.webp";
import amumu from "../../champion-img/AmumuSquare.webp";
import anivia from "../../champion-img/AniviaSquare.webp";
import annie from "../../champion-img/AnnieSquare.webp";
import aphelios from "../../champion-img/ApheliosSquare.webp";
import ashe from "../../champion-img/AsheSquare.webp";
import aurelionSol from "../../champion-img/Aurelion_SolSquare.webp";
import aurora from "../../champion-img/AuroraSquare.webp";
import azir from "../../champion-img/AzirSquare.webp";

import bard from "../../champion-img/BardSquare.webp";
import belveth from "../../champion-img/BelVethSquare.webp";
import blitzcrank from "../../champion-img/BlitzcrankSquare.webp";
import brand from "../../champion-img/BrandSquare.webp";
import braum from "../../champion-img/BraumSquare.webp";
import briar from "../../champion-img/Briar.png";

import caitlyn from "../../champion-img/CaitlynSquare.webp";
import camille from "../../champion-img/CamilleSquare.webp";
import cassiopeia from "../../champion-img/CassiopeiaSquare.webp";
import chogath from "../../champion-img/ChoGathSquare.webp";
import corki from "../../champion-img/CorkiSquare.webp";

import darius from "../../champion-img/DariusSquare.webp";
import diana from "../../champion-img/DianaSquare.webp";
import drMundo from "../../champion-img/Dr._MundoSquare.webp";
import draven from "../../champion-img/DravenSquare.webp";

import ekko from "../../champion-img/EkkoSquare.webp";
import elise from "../../champion-img/EliseSquare.webp";
import evelynn from "../../champion-img/EvelynnSquare.webp";
import ezreal from "../../champion-img/EzrealSquare.webp";

import fiddlesticks from "../../champion-img/FiddlesticksSquare.webp";
import fiora from "../../champion-img/FioraSquare.webp";
import fizz from "../../champion-img/FizzSquare.webp";

import galio from "../../champion-img/GalioSquare.webp";
import gangplank from "../../champion-img/GangplankSquare.webp";
import garen from "../../champion-img/GarenSquare.webp";
import gnar from "../../champion-img/GnarSquare.webp";
import gragas from "../../champion-img/GragasSquare.webp";
import graves from "../../champion-img/GravesSquare.webp";
import gwen from "../../champion-img/GwenSquare.webp";

import hecarim from "../../champion-img/HecarimSquare.webp";
import heimerdinger from "../../champion-img/HeimerdingerSquare_Unreleased.webp";
import hwei from "../../champion-img/Hwei.png";

import illaoi from "../../champion-img/IllaoiSquare.webp";
import irelia from "../../champion-img/IreliaSquare.webp";
import ivern from "../../champion-img/IvernSquare.webp";

import janna from "../../champion-img/JannaSquare.webp";
import jarvanIV from "../../champion-img/Jarvan_IVSquare.webp";
import jax from "../../champion-img/JaxSquare.webp";
import jayce from "../../champion-img/JayceSquare.webp";
import jhin from "../../champion-img/JhinSquare.webp";
import jinx from "../../champion-img/JinxSquare.webp";

import kaisa from "../../champion-img/KaiSaSquare.webp";
import kalista from "../../champion-img/KalistaSquare.webp";
import karma from "../../champion-img/KarmaSquare_Unreleased.webp";
import karthus from "../../champion-img/KarthusSquare.webp";
import kassadin from "../../champion-img/KassadinSquare.webp";
import katarina from "../../champion-img/KatarinaSquare_Unreleased.webp";
import kayle from "../../champion-img/KayleSquare.webp";
import kayn from "../../champion-img/KaynSquare.webp";
import kennen from "../../champion-img/KennenSquare.webp";
import khazix from "../../champion-img/KhaZixSquare.webp";
import kindred from "../../champion-img/KindredSquare.webp";
import kled from "../../champion-img/KledSquare.webp";
import kogmaw from "../../champion-img/KogMawSquare.webp";
import ksante from "../../champion-img/KSanteSquare.webp";

import leblanc from "../../champion-img/LeBlancSquare.webp";
import leesin from "../../champion-img/Lee_SinSquare.webp";
import leona from "../../champion-img/LeonaSquare.webp";
import lillia from "../../champion-img/LilliaSquare.webp";
import lissandra from "../../champion-img/LissandraSquare.webp";
import lucian from "../../champion-img/LucianSquare.webp";
import lulu from "../../champion-img/LuluSquare.webp";
import lux from "../../champion-img/LuxSquare.webp";

import malphite from "../../champion-img/MalphiteSquare.webp";
import malzahar from "../../champion-img/MalzaharSquare.webp";
import maokai from "../../champion-img/MaokaiSquare.webp";
import masteryi from "../../champion-img/Master_YiSquare.webp";
import mel from "../../champion-img/Mel.png";
import milio from "../../champion-img/Milio.png";
import missfortune from "../../champion-img/MissFortuneSquare.webp";
import mordekaiser from "../../champion-img/MordekaiserSquare.webp";
import morgana from "../../champion-img/MorganaSquare.webp";

import naafiri from "../../champion-img/Naafiri.png";
import nami from "../../champion-img/NamiSquare.webp";
import nasus from "../../champion-img/NasusSquare.webp";
import nautilus from "../../champion-img/NautilusSquare.webp";
import neeko from "../../champion-img/NeekoSquare.webp";
import nidalee from "../../champion-img/NidaleeSquare.webp";
import nilah from "../../champion-img/NilahSquare.webp";
import nocturne from "../../champion-img/NocturneSquare.webp";
import nunuWillump from "../../champion-img/Nunu_WillumpSquare.webp";

import olaf from "../../champion-img/OlafSquare.webp";
import orianna from "../../champion-img/OriannaSquare.webp";
import ornn from "../../champion-img/OrnnSquare.webp";

import pantheon from "../../champion-img/PantheonSquare.webp";
import poppy from "../../champion-img/PoppySquare.webp";
import pyke from "../../champion-img/PykeSquare.webp";

import qiyana from "../../champion-img/QiyanaSquare.webp";
import quinn from "../../champion-img/QuinnSquare.webp";

import rakan from "../../champion-img/RakanSquare.webp";
import rammus from "../../champion-img/RammusSquare.webp";
import reksai from "../../champion-img/RekSaiSquare.webp";
import rell from "../../champion-img/Rell.png";
import renataGlasc from "../../champion-img/Renata_GlascSquare.webp";
import renekton from "../../champion-img/RenektonSquare.webp";
import rengar from "../../champion-img/RengarSquare.webp";
import riven from "../../champion-img/RivenSquare.webp";
import rumble from "../../champion-img/RumbleSquare.webp";
import ryze from "../../champion-img/RyzeSquare.webp";

import samira from "../../champion-img/Samira.png";
import sejuani from "../../champion-img/SejuaniSquare.webp";
import senna from "../../champion-img/SennaSquare.webp";
import seraphine from "../../champion-img/Seraphine.png";
import sett from "../../champion-img/SettSquare.webp";
import shaco from "../../champion-img/ShacoSquare.webp";
import shen from "../../champion-img/ShenSquare.webp";
import shyvana from "../../champion-img/ShyvanaSquare.webp";
import singed from "../../champion-img/SingedSquare.webp";
import sion from "../../champion-img/SionSquare.webp";
import sivir from "../../champion-img/SivirSquare.webp";
import skarner from "../../champion-img/SkarnerSquare.webp";
import smolder from "../../champion-img/Smolder.png";
import sona from "../../champion-img/Sona.png";
import soraka from "../../champion-img/SorakaSquare.webp";
import swain from "../../champion-img/SwainSquare.webp";
import sylas from "../../champion-img/SylasSquare.webp";
import syndra from "../../champion-img/SyndraSquare.webp";

import tahmKench from "../../champion-img/Tahm_KenchSquare.webp";
import taliyah from "../../champion-img/TaliyahSquare.webp";
import talon from "../../champion-img/TalonSquare.webp";
import taric from "../../champion-img/TaricSquare.webp";
import teemo from "../../champion-img/TeemoSquare.webp";
import thresh from "../../champion-img/ThreshSquare.webp";
import tristana from "../../champion-img/TristanaSquare.webp";
import trundle from "../../champion-img/TrundleSquare.webp";
import tryndamere from "../../champion-img/TryndamereSquare.webp";
import twistedFate from "../../champion-img/Twisted_FateSquare.webp";
import twitch from "../../champion-img/TwitchSquare.webp";

import udyr from "../../champion-img/UdyrSquare.webp";
import urgot from "../../champion-img/UrgotSquare.webp";

import varus from "../../champion-img/VarusSquare.webp";
import vayne from "../../champion-img/VayneSquare.webp";
import veigar from "../../champion-img/VeigarSquare.webp";
import velkoz from "../../champion-img/VelKozSquare.webp";
import vex from "../../champion-img/VexSquare.webp";
import vi from "../../champion-img/ViSquare.webp";
import viego from "../../champion-img/ViegoSquare.webp";
import viktor from "../../champion-img/ViktorSquare.webp";
import vladimir from "../../champion-img/VladimirSquare.webp";
import volibear from "../../champion-img/VolibearSquare.webp";

import warwick from "../../champion-img/WarwickSquare.webp";
import wukong from "../../champion-img/WukongSquare.webp";

import xayah from "../../champion-img/XayahSquare.webp";
import xerath from "../../champion-img/XerathSquare.webp";
import xinzhao from "../../champion-img/Xin_ZhaoSquare.webp";

import yasuo from "../../champion-img/YasuoSquare_Unreleased.webp";
import yone from "../../champion-img/Yone.png";
import yorick from "../../champion-img/Yorick.png";
import yunara from "../../champion-img/Yunara.png";
import yuumi from "../../champion-img/Yuumi.png";
import zaahen from "../../champion-img/Zaahen.png";

import zac from "../../champion-img/Zac.png";
import zed from "../../champion-img/Zed.png";
import zeri from "../../champion-img/Zeri.png";
import ziggs from "../../champion-img/Ziggs.png";
import zilean from "../../champion-img/Zilean.png";
import zoe from "../../champion-img/Zoe.png";
import zyra from "../../champion-img/Zyra.png";




import {
  PrecisionComponent,
  ResolveComponent,
  DominationComponent,
  SorceryComponent,
} from "./Rune.jsx";

export function Aatrox() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={3}
      lanemain4={4}
      lane2={0}
      lane3={3}
      lane4={2}
      p1={1}
      p2={1}
      p3={3}
      mainRune={"Precision"}
      secondaryRune={"Resolve"}
      />;
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Ahri() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Akali() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={3}
      lanemain3={2}
      lanemain4={3}
      lane2={0}
      lane3={2}
      lane4={1}
      p1={1}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Resolve"}
      />;
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
          <img src={akali} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Ahri</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Akshan() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={3}
      lanemain3={1}
      lanemain4={2}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={1}
      mainRune={"Precision"}
      secondaryRune={"Inspiration"}
      />;
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
          <img src={akshan} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Akshan</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Alistar() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={2}
      lanemain2={2}
      lanemain3={3}
      lanemain4={3}
      lane2={1}
      lane3={0}
      lane4={1}
      p1={3}
      p2={3}
      p3={3}
      mainRune={"Resolve"}
      secondaryRune={"Inspiration"}
      />;
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
          <img src={alistar} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Alistar</h3>
            <div className="flex">
              <img src={support} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Ambessa() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={3}
      lanemain3={2}
      lanemain4={1}
      lane2={2}
      lane3={3}
      lane4={0}
      p1={1}
      p2={1}
      p3={1}
      mainRune={"Resolve"}
      secondaryRune={"Inspiration"}
      />;
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
          <img src={ambessa} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Ambessa</h3>
            <div className="flex">
              <img src={top} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Amumu() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={4}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={1}
      lane3={0}
      lane4={3}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Precision"}
      secondaryRune={"Domination"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Amumu</h3>
            <div className="flex">
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Anivia() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={1}
      lanemain3={2}
      lanemain4={2}
      lane2={3}
      lane3={0}
      lane4={1}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Precision"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Anivia</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Annie() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={1}
      lanemain3={2}
      lanemain4={2}
      lane2={1}
      lane3={2}
      lane4={0}
      p1={1}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={annie} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Annie</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
              <img src={support} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Aphelios() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={3}
      lanemain4={2}
      lane2={3}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={1}
      mainRune={"Precision"}
      secondaryRune={"Inspiration"}
      />;
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
          <img src={aphelios} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={bot} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Ashe() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={2}
      lanemain2={3}
      lanemain3={1}
      lanemain4={2}
      lane2={0}
      lane3={3}
      lane4={2}
      p1={2}
      p2={1}
      p3={1}
      mainRune={"Precision"}
      secondaryRune={"Inspiration"}
      />;
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
          <img src={ashe} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Ashe</h3>
            <div className="flex">
              <img src={bot} alt="" className="w-10" />
              <img src={support} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Aurora() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={aurora} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aurora</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
              <img src={top} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function AurelionSol() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={2}
      lanemain2={2}
      lanemain3={3}
      lanemain4={1}
      lane2={0}
      lane3={3}
      lane4={1}
      p1={1}
      p2={1}
      p3={3}
      mainRune={"Sorcery"}
      secondaryRune={"Resolve"}
      />;
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
          <img src={aurelionSol} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aurelion Sol</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
              <img src={bot} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Azir() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={2}
      lanemain2={3}
      lanemain3={1}
      lanemain4={2}
      lane2={0}
      lane3={3}
      lane4={1}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Precision"}
      secondaryRune={"Resolve"}
      />;
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
          <img src={azir} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Azir</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Bard() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={1}
      lanemain3={3}
      lanemain4={2}
      lane2={0}
      lane3={2}
      lane4={1}
      p1={2}
      p2={1}
      p3={1}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={bard} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Bard</h3>
            <div className="flex">
              <img src={support} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function BelVeth() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={4}
      lanemain2={2}
      lanemain3={1}
      lanemain4={1}
      lane2={2}
      lane3={0}
      lane4={1}
      p1={1}
      p2={1}
      p3={3}
      mainRune={"Precision"}
      secondaryRune={"Inspiration"}
      />;
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
          <img src={belveth} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Bel'Veth</h3>
            <div className="flex">
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Blitzcrank() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={1}
      lanemain3={3}
      lanemain4={1}
      lane2={3}
      lane3={2}
      lane4={0}
      p1={3}
      p2={3}
      p3={3}
      mainRune={"Inspiration"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={blitzcrank} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Blitzcrank</h3>
            <div className="flex">
              <img src={support} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Brand() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={2}
      lanemain2={2}
      lanemain3={1}
      lanemain4={1}
      lane2={0}
      lane3={3}
      lane4={1}
      p1={1}
      p2={1}
      p3={3}
      mainRune={"Sorcery"}
      secondaryRune={"Inspiration"}
      />;
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
          <img src={brand} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Brand</h3>
            <div className="flex">
              <img src={support} alt="" className="w-10" />
              <img src={mid} alt="" className="w-10" />
              <img src={bot} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Braum() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={3}
      lanemain2={2}
      lanemain3={3}
      lanemain4={3}
      lane2={0}
      lane3={3}
      lane4={1}
      p1={2}
      p2={3}
      p3={3}
      mainRune={"Resolve"}
      secondaryRune={"Inspiration"}
      />;
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
          <img src={braum} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Braum</h3>
            <div className="flex">
              <img src={support} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Briar() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={1}
      lanemain4={1}
      lane2={3}
      lane3={0}
      lane4={1}
      p1={1}
      p2={1}
      p3={3}
      mainRune={"Precision"}
      secondaryRune={"Domination"}
      />;
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
          <img src={briar} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Briar</h3>
            <div className="flex">
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Caitlyn() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={2}
      lanemain2={3}
      lanemain3={3}
      lanemain4={1}
      lane2={0}
      lane3={3}
      lane4={3}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Precision"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={caitlyn} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Caitlyn</h3>
            <div className="flex">
              <img src={bot} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Camille() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={3}
      lanemain3={3}
      lanemain4={3}
      lane2={2}
      lane3={3}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Resolve"}
      secondaryRune={"Inspiration"}
      />;
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
          <img src={camille} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Camile</h3>
            <div className="flex">
              <img src={top} alt="" className="w-10" />
              <img src={support} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Cassiopeia() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={4}
      lanemain2={3}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={1}
      p2={1}
      p3={3}
      mainRune={"Precision"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={cassiopeia} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Cassiopeia</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Chogath() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={chogath} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Cho'Gath</h3>
            <div className="flex">
              <img src={top} alt="" className="w-10" />
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Corki() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={4}
      lanemain2={3}
      lanemain3={1}
      lanemain4={2}
      lane2={3}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={1}
      mainRune={"Precision"}
      secondaryRune={"Inspiration"}
      />;
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
          <img src={corki} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Corki</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
              <img src={bot} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Darius() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={4}
      lanemain2={2}
      lanemain3={1}
      lanemain4={3}
      lane2={1}
      lane3={2}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Precision"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={darius} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Darius</h3>
            <div className="flex">
              <img src={top} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Diana() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={4}
      lanemain2={2}
      lanemain3={1}
      lanemain4={1}
      lane2={2}
      lane3={0}
      lane4={1}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Precision"}
      secondaryRune={"Inspiration"}
      />;
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
          <img src={diana} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Diana</h3>
            <div className="flex">
              <img src={jungle} alt="" className="w-10" />
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Draven() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function DrMundo() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={1}
      lanemain3={2}
      lanemain4={1}
      lane2={2}
      lane3={0}
      lane4={2}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Resolve"}
      secondaryRune={"Inspiration"}
      />;
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
          <img src={drMundo} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Dr.Mundo</h3>
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Ekko() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Elise() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Evelynn() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Ezreal() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Fiddlesticks() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Fiora() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Fizz() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Galio() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Gangplank() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Garen() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Gnar() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Gragas() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Graves() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Gwen() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Hecarim() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Heimerdinger() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Hwei() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Illaoi() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Irelia() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Ivern() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Janna() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function JarvanIV() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Jax() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Jayce() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Jhin() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Jinx() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function KSante() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function KaiSa() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Kalista() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Karma() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Karthus() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Kassadin() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Katarina() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Kayle() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Kayn() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Kennen() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function KhaZix() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Kindred() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Kled() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function KogMaw() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function LeBlanc() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function LeeSin() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Leona() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Lillia() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Lissandra() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Lucian() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Lulu() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Lux() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Malphite() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Malzahar() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Maokai() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function MasterYi() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Mel() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Milio() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function MissFortune() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Mordekaiser() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Morgana() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Naafiri() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Nami() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Nasus() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Nautilus() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Neeko() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Nidalee() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Nilah() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Nocturne() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function NunuWillump() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Olaf() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Orianna() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Ornn() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Pantheon() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Poppy() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Pyke() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Qiyana() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Quinn() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Rakan() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Rammus() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function RekSai() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Rell() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function RenataGlasc() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Renekton() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Rengar() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Riven() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Rumble() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Ryze() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Samira() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Sejuani() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Senna() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Seraphine() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Sett() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Shaco() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Shen() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Shyvana() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Singed() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Sion() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Sivir() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Skarner() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Smolder() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Sona() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Soraka() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Swain() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Sylas() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Syndra() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function TahmKench() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Taliyah() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Talon() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Taric() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Teemo() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Thresh() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Tristana() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Trundle() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Tryndamere() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function TwistedFate() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Twitch() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Udyr() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Urgot() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Varus() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Vayne() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Veigar() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function VelKoz() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Vex() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Vi() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Viego() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Viktor() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Vladimir() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Volibear() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Warwick() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Wukong() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Xayah() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Xerath() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function XinZhao() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Yasuo() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Yone() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Yorick() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Yuumi() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Zac() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Zed() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Zeri() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Ziggs() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Zilean() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Zoe() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}

export function Zyra() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={1}
      lanemain2={2}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
      secondaryRune={"Sorcery"}
      />;
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Aatrox</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
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
          <li
            className={`hover:text-white ${clickedItem == 1 && "text-white"}`}
            value="build"
            key="build"
            onClick={() => setClickedItem(1)}
          >
            Build
          </li>
          <li
            className={`hover:text-white ${clickedItem == 2 && "text-white"}`}
            value="guide"
            key="guide"
            onClick={() => setClickedItem(2)}
          >
            Guide
          </li>
          <li
            className={`hover:text-white ${clickedItem == 3 && "text-white"}`}
            value="counter"
            key="counter"
            onClick={() => setClickedItem(3)}
          >
            Counter
          </li>
        </ul>
      </nav>

      <div className="md:mx-[15%]">
        {displayItem}
        
      </div>
    </div>
  );
}
