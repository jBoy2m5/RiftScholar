import { useState, useRef } from "react";
import Build from "../Champion/Build.jsx";
import Counter from "../Champion/Counter.jsx";
import Guide from "../Champion/Guide.jsx";

import aatrox from "../../champion-img/Aatrox.png";
import top from "../../role-img/top.png";
import jungle from "../../role-img/jg.png";

import conqueror from "../../rune-png/conqueror.png";
import pressattack from "../../rune-png/pressattack.png";
import abilityhaste from "../../rune-png/abilityhaste.svg";
import absorblife from "../../rune-png/absorblife.webp";
import adaptiveforce from "../../rune-png/adaptiveforce.svg";
import alcacrity from "../../rune-png/alcacrity.png";
import absorblifeblack from "../../rune-png/absorblife-modified.webp";
import alcacrityblack from "../../rune-png/alcacrity-modified.png";
import attackspeed from "../../rune-png/atkspeed.svg";
import bloodline from "../../rune-png/bloodline.webp";
import bloodlineblack from "../../rune-png/bloodline-modified.webp";
import boneplating from "../../rune-png/boneplating.webp";
import boneplatingblack from "../../rune-png/boneplating-modified.webp";
import conditioning from "../../rune-png/conditioning.webp";
import conditioningblack from "../../rune-png/conditioning-modified.webp";
import conquerorblack from "../../rune-png/conqueror-modified.png";
import coupdegrace from "../../rune-png/coupdegrace.webp";
import coupdegraceblack from "../../rune-png/coupdegrace-modified.webp";
import cutdown from "../../rune-png/cutdown.webp";
import cutdownblack from "../../rune-png/cutdown-modified.webp";
import demolish from "../../rune-png/demolish.webp";
import demolishblack from "../../rune-png/demolish-modified.webp";
import fleetfootwork from "../../rune-png/fleetfootwork.png";
import fleetfootworkblack from "../../rune-png/fleetfootwork-modified.png";
import fontoflife from "../../rune-png/fontoflife.webp";
import fontoflifeblack from "../../rune-png/fontoflife-modified.webp";
import haste from "../../rune-png/haste.webp";
import hasteblack from "../../rune-png/haste-modified.webp";
import health from "../../rune-png/health.svg";
import healthscaling from "../../rune-png/healthscaling.svg";
import laststand from "../../rune-png/laststand.webp";
import laststandblack from "../../rune-png/laststand-modified.webp";
import lethaltempo from "../../rune-png/lethaltempo.png";
import lethaltempoblack from "../../rune-png/lethaltempo-modified.png";
import movespeed from "../../rune-png/movespeed.svg";
import overgrowth from "../../rune-png/overgrowth.webp";
import overgrowthblack from "../../rune-png/overgrowth-modified.webp";
import presenceofmind from "../../rune-png/presenceofmind.webp";
import pressattackblack from "../../rune-png/pressattack-modified.png";
import revitalize from "../../rune-png/revitalize.webp";
import revitalizeblack from "../../rune-png/revitalize-modified.webp";
import secondwind from "../../rune-png/secondwind.webp";
import secondwindblack from "../../rune-png/secondwind-modified.webp";
import shieldbash from "../../rune-png/shieldbash.webp";
import shieldbashblack from "../../rune-png/shieldbash-modified.webp";
import tenacity from "../../rune-png/tenacity.svg";
import triumph from "../../rune-png/triumph.webp";
import triumphblack from "../../rune-png/triumph-modified.webp";
import unfliching from "../../rune-png/unfliching.webp";
import unflichingblack from "../../rune-png/unfliching-modified.webp";
import precision from "../../rune-png/precision.svg";
import resolve from "../../rune-png/resolve.svg";
import graspofundying from "../../rune-png/graspofundying.png";
import aftershock from "../../rune-png/aftershock.png";
import guardian from "../../rune-png/guardian.png";
import electrocute from "../../rune-png/electrocute.png";
import darkharvest from "../../rune-png/darkharvest.webp"
import hailofblades from "../../rune-png/hallofblades.png"
import cheapshot from "../../rune-png/cheapshot.webp"
import tasteofblood from "../../rune-png/tasteofblood.webp"
import suddenimpact from "../../rune-png/suddenimpact.webp"
import sixthsense from "../../rune-png/sixthsense.webp"
import grisly from "../../rune-png/grisly.webp"
import deepward from "../../rune-png/deepward.webp"
import treasurehunter from "../../rune-png/treasurehunter.webp"
import relentlesshunter from "../../rune-png/relentlesshunter.webp"
import ultimatehunter from "../../rune-png/ultimatehunter.png"
import domination from "../../rune-png/domination.svg"
import sorcery from "../../rune-png/sorcery.svg"
import summonaery from "../../rune-png/summonaery.png"
import arcanecomet from "../../rune-png/arcanecomet.webp"
import phaserush from "../../rune-png/phaserush.png"
import axiomarcanist from "../../rune-png/axiomarcanist.webp"
import manaflowband from "../../rune-png/52px-Manaflow_Band_rune.png"
import nimbuscloak from "../../rune-png/52px-Nimbus_Cloak_rune.png"
import transcendence from "../../rune-png/52px-Transcendence_rune.png"
import celerity from "../../rune-png/52px-Celerity_rune.png"
import absolutefocus from "../../rune-png/52px-Absolute_Focus_rune.png"
import scorch from "../../rune-png/52px-Scorch_rune.png"
import waterwalking from "../../rune-png/52px-Waterwalking_rune.png"
import gatheringstorm from "../../rune-png/52px-Gathering_Storm_rune.png"
import inspiration from "../../rune-png/Inspiration_icon.webp";
import glacialaugment from "../../rune-png/Glacial_Augment_rune.webp";
import unsealedspellbook from "../../rune-png/Unsealed_Spellbook_rune.webp";
import firststrike from "../../rune-png/First_Strike_rune.webp";
import hextechflashtraption from "../../rune-png/Hextech_Flashtraption_rune.webp";
import magicalfootwear from "../../rune-png/Magical_Footwear_rune.webp";
import cashback from "../../rune-png/Cash_Back_rune.webp";
import tripletonic from "../../rune-png/Triple_Tonic_rune.webp";
import timewarptonic from "../../rune-png/Time_Warp_Tonic_rune.webp";
import biscuitdelivery from "../../rune-png/Biscuit_Delivery_rune.webp";
import cosmicinsight from "../../rune-png/Cosmic_Insight_rune.webp";
import approachvelocity from "../../rune-png/Approach_Velocity_rune.webp";
import jackofalltrades from "../../rune-png/Jack_of_All_Trades_rune.webp";






function Shard(props) {
  return (
    <div className="flex flex-col gap-5 mt-5">
      <div className="flex justify-evenly">
        <img
          src={adaptiveforce}
          className="w-5"
          style={{ filter: props.lane1 !== 1 && "grayscale(100%)" }}
        />
        <img
          src={attackspeed}
          className="w-5"
          style={{ filter: props.lane1 !== 2 && "grayscale(100%)" }}
        />
        <img
          src={abilityhaste}
          className="w-5"
          style={{ filter: props.lane1 !== 3 && "grayscale(100%)" }}
        />
      </div>
      <div className="flex justify-evenly">
        <img
          src={adaptiveforce}
          className="w-5"
          style={{ filter: props.lane2 !== 1 && "grayscale(100%)" }}
        />
        <img
          src={movespeed}
          className="w-5"
          style={{ filter: props.lane2 !== 2 && "grayscale(100%)" }}
        />
        <img
          src={healthscaling}
          className="w-5"
          style={{ filter: props.lane2 !== 3 && "grayscale(100%)" }}
        />
      </div>
      <div className="flex justify-evenly">
        <img
          src={health}
          className="w-5"
          style={{ filter: props.lane3 !== 1 && "grayscale(100%)" }}
        />
        <img
          src={tenacity}
          className="w-5"
          style={{ filter: props.lane3 !== 2 && "grayscale(100%)" }}
        />
        <img
          src={healthscaling}
          className="w-5"
          style={{ filter: props.lane3 !== 3 && "grayscale(100%)" }}
        />
      </div>
    </div>
  );
}

export function PrecisionComponent(props) {
  return (
    <div className="flex flex-col w-[45%] max-w-xs">
      <div className="flex gap-3 items-center mb-5 mx-auto">
        <img src={precision} className="w-12 inline" />
        <span className="font-bold">Precision</span>
      </div>
      <div className="flex-col items-center">
        {props.isMainPath && (
          <div className="flex gap-5 justify-between my-5">
            <img
              src={pressattack}
              className="w-12"
              style={{ filter: props.lane1 !== 1 && "grayscale(100%)" }}
            />
            <img
              src={lethaltempo}
              className="w-12"
              style={{ filter: props.lane1 !== 2 && "grayscale(100%)" }}
            />
            <img
              src={fleetfootwork}
              className="w-12"
              style={{ filter: props.lane1 !== 3 && "grayscale(100%)" }}
            />
            <img
              src={conqueror}
              className="w-12"
              style={{ filter: props.lane1 !== 4 && "grayscale(100%)" }}
            />
          </div>
        )}
        <div className="flex justify-evenly my-5">
          <img
            src={absorblife}
            className="w-10"
            style={{ filter: props.lane2 !== 1 && "grayscale(100%)" }}
          />
          <img
            src={triumph}
            className="w-10"
            style={{ filter: props.lane2 !== 2 && "grayscale(100%)" }}
          />
          <img
            src={fleetfootwork}
            className="w-10"
            style={{ filter: props.lane2 !== 3 && "grayscale(100%)" }}
          />
        </div>
        <div className="flex justify-evenly my-5">
          <img
            src={alcacrity}
            className="w-10"
            style={{ filter: props.lane3 !== 1 && "grayscale(100%)" }}
          />
          <img
            src={haste}
            className="w-10"
            style={{ filter: props.lane3 !== 2 && "grayscale(100%)" }}
          />
          <img
            src={bloodline}
            className="w-10"
            style={{ filter: props.lane3 !== 3 && "grayscale(100%)" }}
          />
        </div>
        <div className="flex justify-evenly my-5">
          <img
            src={coupdegrace}
            className="w-10"
            style={{ filter: props.lane4 !== 1 && "grayscale(100%)" }}
          />
          <img
            src={cutdown}
            className="w-10"
            style={{ filter: props.lane4 !== 2 && "grayscale(100%)" }}
          />
          <img
            src={laststand}
            className="w-10"
            style={{ filter: props.lane4 !== 3 && "grayscale(100%)" }}
          />
        </div>
      </div>
      {!props.isMainPath && (
        <Shard 
            lane1={props.p1}
            lane2={props.p2}
            lane3={props.p3}
        />
      )}
    </div>
  );
}

export function ResolveComponent(props) {
  return (
    <div className="flex flex-col w-[45%] max-w-xs mt-1">
      <div className="flex gap-3 items-center mb-5 mx-auto">
        <img src={resolve} className="w-12 inline" />
        <span className="font-bold">Resolve</span>
      </div>
      <div className="flex-col items-center">
        {props.isMainPath && (
          <div className="flex gap-5 justify-between my-5">
            <img
              src={graspofundying}
              className="w-12"
              style={{ filter: props.lane1 !== 1 && "grayscale(100%)" }}
            />
            <img
              src={aftershock}
              className="w-12"
              style={{ filter: props.lane1 !== 2 && "grayscale(100%)" }}
            />
            <img
              src={guardian}
              className="w-12"
              style={{ filter: props.lane1 !== 3 && "grayscale(100%)" }}
            />
          </div>
        )}
        <div className="flex justify-evenly my-5">
          <img
            src={demolish}
            className="w-10"
            style={{ filter: props.lane2 !== 1 && "grayscale(100%)" }}
          />
          <img
            src={fontoflife}
            className="w-10"
            style={{ filter: props.lane2 !== 2 && "grayscale(100%)" }}
          />
          <img
            src={shieldbash}
            className="w-10"
            style={{ filter: props.lane2 !== 3 && "grayscale(100%)" }}
          />
        </div>
        <div className="flex justify-evenly my-5">
          <img
            src={conditioning}
            className="w-10"
            style={{ filter: props.lane3 !== 1 && "grayscale(100%)" }}
          />
          <img
            src={secondwind}
            className="w-10"
            style={{ filter: props.lane3 !== 2 && "grayscale(100%)" }}
          />
          <img
            src={boneplating}
            className="w-10"
            style={{ filter: props.lane3 !== 3 && "grayscale(100%)" }}
          />
        </div>
        <div className="flex justify-evenly my-5">
          <img
            src={overgrowth}
            className="w-10"
            style={{ filter: props.lane4 !== 1 && "grayscale(100%)" }}
          />
          <img
            src={revitalize}
            className="w-10"
            style={{ filter: props.lane4 !== 2 && "grayscale(100%)" }}
          />
          <img
            src={unfliching}
            className="w-10"
            style={{ filter: props.lane4 !== 3 && "grayscale(100%)" }}
          />
        </div>
      </div>

      {!props.isMainPath && 
      <Shard 
            lane1={props.p1}
            lane2={props.p2}
            lane3={props.p3}
      />
      }
    </div>
  );
}

export function DominationComponent(props) {
  return (
    <div className="flex flex-col w-[45%] max-w-xs mt-1">
      <div className="flex gap-3 items-center mb-5 mx-auto">
        <img src={domination} className="w-12 inline" />
        <span className="font-bold">Domination</span>
      </div>
      <div className="flex-col items-center">
        {props.isMainPath && (
          <div className="flex gap-5 justify-evenly my-5">
            <img
              src={electrocute}
              className="w-12"
              style={{ filter: props.lane1 !== 1 && "grayscale(100%)" }}
            />
            <img
              src={darkharvest}
              className="w-12"
              style={{ filter: props.lane1 !== 2 && "grayscale(100%)" }}
            />
            <img
              src={hailofblades}
              className="w-12"
              style={{ filter: props.lane1 !== 3 && "grayscale(100%)" }}
            />
          </div>
        )}
        <div className="flex justify-evenly my-5">
          <img
            src={cheapshot}
            className="w-10"
            style={{ filter: props.lane2 !== 1 && "grayscale(100%)" }}
          />
          <img
            src={tasteofblood}
            className="w-10"
            style={{ filter: props.lane2 !== 2 && "grayscale(100%)" }}
          />
          <img
            src={suddenimpact}
            className="w-10"
            style={{ filter: props.lane2 !== 3 && "grayscale(100%)" }}
          />
        </div>
        <div className="flex justify-evenly my-5">
          <img
            src={sixthsense}
            className="w-10"
            style={{ filter: props.lane3 !== 1 && "grayscale(100%)" }}
          />
          <img
            src={grisly}
            className="w-10"
            style={{ filter: props.lane3 !== 2 && "grayscale(100%)" }}
          />
          <img
            src={deepward}
            className="w-10"
            style={{ filter: props.lane3 !== 3 && "grayscale(100%)" }}
          />
        </div>
        <div className="flex justify-evenly my-5">
          <img
            src={treasurehunter}
            className="w-10"
            style={{ filter: props.lane4 !== 1 && "grayscale(100%)" }}
          />
          <img
            src={relentlesshunter}
            className="w-10"
            style={{ filter: props.lane4 !== 2 && "grayscale(100%)" }}
          />
          <img
            src={ultimatehunter}
            className="w-10"
            style={{ filter: props.lane4 !== 3 && "grayscale(100%)" }}
          />
        </div>
      </div>

      {!props.isMainPath && 
      <Shard 
            lane1={props.p1}
            lane2={props.p2}
            lane3={props.p3}
      />
      }
    </div>
  );
}

export function SorceryComponent(props) {
  return (
    <div className="flex flex-col w-[45%] max-w-xs mt-1">
      <div className="flex gap-3 items-center mb-5 mx-auto">
        <img src={sorcery} className="w-12 inline" />
        <span className="font-bold">Sorcery</span>
      </div>
      <div className="flex-col items-center">
        {props.isMainPath && (
          <div className="flex gap-5 justify-evenly my-5">
            <img
              src={summonaery}
              className="w-12"
              style={{ filter: props.lane1 !== 1 && "grayscale(100%)" }}
            />
            <img
              src={arcanecomet}
              className="w-12"
              style={{ filter: props.lane1 !== 2 && "grayscale(100%)" }}
            />
            <img
              src={phaserush}
              className="w-12"
              style={{ filter: props.lane1 !== 3 && "grayscale(100%)" }}
            />
          </div>
        )}
        <div className="flex justify-evenly my-5">
          <img
            src={axiomarcanist}
            className="w-10"
            style={{ filter: props.lane2 !== 1 && "grayscale(100%)" }}
          />
          <img
            src={manaflowband}
            className="w-10"
            style={{ filter: props.lane2 !== 2 && "grayscale(100%)" }}
          />
          <img
            src={nimbuscloak}
            className="w-10"
            style={{ filter: props.lane2 !== 3 && "grayscale(100%)" }}
          />
        </div>
        <div className="flex justify-evenly my-5">
          <img
            src={transcendence}
            className="w-10"
            style={{ filter: props.lane3 !== 1 && "grayscale(100%)" }}
          />
          <img
            src={celerity}
            className="w-10"
            style={{ filter: props.lane3 !== 2 && "grayscale(100%)" }}
          />
          <img
            src={absolutefocus}
            className="w-10"
            style={{ filter: props.lane3 !== 3 && "grayscale(100%)" }}
          />
        </div>
        <div className="flex justify-evenly my-5">
          <img
            src={scorch}
            className="w-10"
            style={{ filter: props.lane4 !== 1 && "grayscale(100%)" }}
          />
          <img
            src={waterwalking}
            className="w-10"
            style={{ filter: props.lane4 !== 2 && "grayscale(100%)" }}
          />
          <img
            src={gatheringstorm}
            className="w-10"
            style={{ filter: props.lane4 !== 3 && "grayscale(100%)" }}
          />
        </div>
      </div>

      {!props.isMainPath && 
      <Shard 
            lane1={props.p1}
            lane2={props.p2}
            lane3={props.p3}
      />
      }
    </div>
  );
}

export function InspirationComponent(props) {
  return (
    <div className="flex flex-col w-[45%] max-w-xs mt-1">
      <div className="flex gap-3 items-center mb-5 mx-auto">
        <img src={inspiration} className="w-12 inline" />
        <span className="font-bold">Inspiration</span>
      </div>
      <div className="flex-col items-center">
        {props.isMainPath && (
          <div className="flex gap-5 justify-evenly my-5">
            <img
              src={glacialaugment}
              className="w-12"
              style={{ filter: props.lane1 !== 1 && "grayscale(100%)" }}
            />
            <img
              src={unsealedspellbook}
              className="w-12"
              style={{ filter: props.lane1 !== 2 && "grayscale(100%)" }}
            />
            <img
              src={firststrike}
              className="w-12"
              style={{ filter: props.lane1 !== 3 && "grayscale(100%)" }}
            />
          </div>
        )}
        <div className="flex justify-evenly my-5">
          <img
            src={hextechflashtraption}
            className="w-10"
            style={{ filter: props.lane2 !== 1 && "grayscale(100%)" }}
          />
          <img
            src={magicalfootwear}
            className="w-10"
            style={{ filter: props.lane2 !== 2 && "grayscale(100%)" }}
          />
          <img
            src={cashback}
            className="w-10"
            style={{ filter: props.lane2 !== 3 && "grayscale(100%)" }}
          />
        </div>
        <div className="flex justify-evenly my-5">
          <img
            src={tripletonic}
            className="w-10"
            style={{ filter: props.lane3 !== 1 && "grayscale(100%)" }}
          />
          <img
            src={timewarptonic}
            className="w-10"
            style={{ filter: props.lane3 !== 2 && "grayscale(100%)" }}
          />
          <img
            src={biscuitdelivery}
            className="w-10"
            style={{ filter: props.lane3 !== 3 && "grayscale(100%)" }}
          />
        </div>
        <div className="flex justify-evenly my-5">
          <img
            src={cosmicinsight}
            className="w-10"
            style={{ filter: props.lane4 !== 1 && "grayscale(100%)" }}
          />
          <img
            src={approachvelocity}
            className="w-10"
            style={{ filter: props.lane4 !== 2 && "grayscale(100%)" }}
          />
          <img
            src={jackofalltrades}
            className="w-10"
            style={{ filter: props.lane4 !== 3 && "grayscale(100%)" }}
          />
        </div>
      </div>

      {!props.isMainPath && 
      <Shard 
            lane1={props.p1}
            lane2={props.p2}
            lane3={props.p3}
      />
      }
    </div>
  );
}