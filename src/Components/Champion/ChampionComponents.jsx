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

import cull from "../../item-img/40px-Cull_item.png"
import darkseal from "../../item-img/40px-Dark_Seal_item.png"
import doranblade from "../../item-img/40px-Doran's_Blade_item.png"
import doranring from "../../item-img/40px-Doran's_Ring_item.png"
import doranshield from "../../item-img/40px-Doran's_Shield_item.png"
import gustwalker from "../../item-img/40px-Gustwalker_Hatchling_item.png"
import mosstomper from "../../item-img/40px-Mosstomper_Seedling_item.png"
import scorchclaw from "../../item-img/40px-Scorchclaw_Pup_item.png"
import tear from "../../item-img/40px-Tear_of_the_Goddess_item.png"
import atlas from "../../item-img/40px-World_Atlas_item.png"
import controlward from "../../item-img/40px-Control_Ward_item.png"
import ironelixir from "../../item-img/40px-Elixir_of_Iron_item_Winter.png"
import sorceryelixir from "../../item-img/40px-Elixir_of_Sorcery_item_Winter.png"
import wrathelixir from "../../item-img/40px-Elixir_of_Wrath_item_Winter.png"
import healthpotion from "../../item-img/40px-Health_Potion_item_Winter.png"
import refillablepotion from "../../item-img/40px-Refillable_Potion_item_Winter.png"
import farsight from "../../item-img/40px-Farsight_Alteration_item.png"
import lens from "../../item-img/40px-Oracle_Lens_item.png"
import ward from "../../item-img/40px-Stealth_Ward_item.png"
import berserkerboot from "../../item-img/40px-Berserker's_Greaves_item.png"
import boots from "../../item-img/40px-Boots_item.png"
import swiftnessboot from "../../item-img/40px-Boots_of_Swiftness_item.png"
import ionianboot from "../../item-img/40px-Ionian_Boots_of_Lucidity_item.png"
import mercurytreads from "../../item-img/40px-Mercury's_Treads_item.png"
import steelcapsboot from "../../item-img/40px-Plated_Steelcaps_item.png"
import sorcererboot from "../../item-img/40px-Sorcerer's_Shoes_item.png"
import symbioticsoles from "../../item-img/40px-Symbiotic_Soles_item.png"
import amplifyingtome from "../../item-img/40px-Amplifying_Tome_item.png"
import bf from "../../item-img/40px-B._F._Sword_item.png"
import blastingwand from "../../item-img/40px-Blasting_Wand_item.png"
import cloakagility from "../../item-img/40px-Cloak_of_Agility_item.png"
import cloakarmor from "../../item-img/40px-Cloth_Armor_item.png"
import dagger from "../../item-img/40px-Dagger_item.png"
import faeriecharm from "../../item-img/40px-Faerie_Charm_item.png"
import glowingmote from "../../item-img/40px-Glowing_Mote_item.png"
import longsword from "../../item-img/40px-Long_Sword_item.png"
import largerod from "../../item-img/40px-Needlessly_Large_Rod_item.png"
import nullmagicmantle from "../../item-img/40px-Null-Magic_Mantle_item.png"
import pickaxe from "../../item-img/40px-Pickaxe_item.png"
import rejuvenationbead from "../../item-img/40px-Rejuvenation_Bead_item.png"
import rubycrystal from "../../item-img/40px-Ruby_Crystal_item.png"
import sapphirecrystal from "../../item-img/40px-Sapphire_Crystal_item.png"
import aegis from "../../item-img/40px-Aegis_of_the_Legion_item.png"
import aetherwisp from "../../item-img/40px-Aether_Wisp_item.png"
import bami from "../../item-img/40px-Bami's_Cinder_item.png"
import bandleglass from "../../item-img/40px-Bandleglass_Mirror_item.png"
import blighting from "../../item-img/40px-Blighting_Jewel_item.png"
import bramble from "../../item-img/40px-Bramble_Vest_item.png"
import catalyst from "../../item-img/40px-Catalyst_of_Aeons_item.png"
import caulfield from "../../item-img/40px-Caulfield's_Warhammer_item.png"
import chainvest from "../../item-img/40px-Chain_Vest_item.png"
import crystalline from "../../item-img/40px-Crystalline_Bracer_item.png"
import executioner from "../../item-img/40px-Executioner's_Calling_item.png"
import fatedashes from "../../item-img/40px-Fated_Ashes_item.png"
import fiendishcodex from "../../item-img/40px-Fiendish_Codex_item.png"
import forbiddenidol from "../../item-img/40px-Forbidden_Idol_item.png"
import giantbelt from "../../item-img/40px-Giant's_Belt_item.png"
import glacial from "../../item-img/40px-Glacial_Buckler_item.png"
import hauntingguise from "../../item-img/40px-Haunting_Guise_item.png"
import hearthboundaxe from "../../item-img/40px-Hearthbound_Axe_item.png"
import hexdrinker from "../../item-img/40px-Hexdrinker_item.png"
import hextechalternator from "../../item-img/40px-Hextech_Alternator_item.png"
import kindlegem from "../../item-img/40px-Kindlegem_item.png"
import lastwhisper from "../../item-img/40px-Last_Whisper_item.png"
import lostchapter from "../../item-img/40px-Lost_Chapter_item.png"
import negatroncloak from "../../item-img/40px-Negatron_Cloak_item.png"
import noonquiver from "../../item-img/40px-Noonquiver_item.png"
import oblivionorb from "../../item-img/40px-Oblivion_Orb_item.png"
import phage from "../../item-img/40px-Phage_item.png"
import quicksilver from "../../item-img/40px-Quicksilver_Sash_item.png"
import rectrix from "../../item-img/40px-Rectrix_item.png"
import recurvebow from "../../item-img/40px-Recurve_Bow_item.png"
import runiccompass from "../../item-img/40px-Runic_Compass_item.png"
import scout from "../../item-img/40px-Scout's_Slingshot_item.png"
import seeker from "../../item-img/40px-Seeker's_Armguard_item.png"
import serrateddirk from "../../item-img/40px-Serrated_Dirk_item.png"
import sheen from "../../item-img/40px-Sheen_item.png"
import spectrecowl from "../../item-img/40px-Spectre's_Cowl_item.png"
import steelsigil from "../../item-img/40px-Steel_Sigil_item.png"
import brutalizer from "../../item-img/40px-The_Brutalizer_item.png"
import tiamat from "../../item-img/40px-Tiamat_item.png"
import tunneler from "../../item-img/40px-Tunneler_item.png"
import vampiricscepter from "../../item-img/40px-Vampiric_Scepter_item.png"
import verdantbarrier from "../../item-img/40px-Verdant_Barrier_item.png"
import wardenmall from "../../item-img/40px-Warden's_Mail_item.png"
import watchful from "../../item-img/40px-Watchful_Wardstone_item.png"
import wingedmoonplate from "../../item-img/40px-Winged_Moonplate_item.png"
import zeal from "../../item-img/40px-Zeal_item.png"
import abyssal from "../../item-img/40px-Abyssal_Mask_item.png"
import archangelstaff from "../../item-img/40px-Archangel's_Staff_item.png"
import ardentcenser from "../../item-img/40px-Ardent_Censer_item.png"
import axiomarc from "../../item-img/40px-Axiom_Arc_item.png"
import banshee from "../../item-img/40px-Banshee's_Veil_item.png"
import blackcleaver from "../../item-img/40px-Black_Cleaver_item.png"
import blackfire from "../../item-img/40px-Blackfire_Torch_item.png"
import bladeruinedking from "../../item-img/40px-Blade_of_the_Ruined_King_item.png"
import bloodletter from "../../item-img/40px-Bloodletter's_Curse_item.png"
import bloodsong from "../../item-img/40px-Bloodsong_item.png"
import bloodthirster from "../../item-img/40px-Bloodthirster_item.png"
import bountyworld from "../../item-img/40px-Bounty_of_Worlds_item.png"
import celestialopposition from "../../item-img/40px-Celestial_Opposition_item.png"
import chempunk from "../../item-img/40px-Chempunk_Chainsword_item.png"
import cosmicdrive from "../../item-img/40px-Cosmic_Drive_item.png"
import cryptbloom from "../../item-img/40px-Cryptbloom_item.png"
import dawncore from "../../item-img/40px-Dawncore_item.png"
import deadmanplate from "../../item-img/40px-Dead_Man's_Plate_item.png"
import deathdance from "../../item-img/40px-Death's_Dance_item.png"
import dreammaker from "../../item-img/40px-Dream_Maker_item.png"
import echohelia from "../../item-img/40px-Echoes_of_Helia_item.png"
import eclipse from "../../item-img/40px-Eclipse_item.png"
import edgeofnight from "../../item-img/40px-Edge_of_Night_item.png"
import essencereaver from "../../item-img/40px-Essence_Reaver_item.png"
import hexplate from "../../item-img/40px-Experimental_Hexplate_item.png"
import fimbulwinter from "../../item-img/40px-Fimbulwinter_item.png"
import forcenature from "../../item-img/40px-Force_of_Nature_item.png"
import frozenheart from "../../item-img/40px-Frozen_Heart_item.png"
import guardianangel from "../../item-img/40px-Guardian_Angel_item.png"
import guinsoo from "../../item-img/40px-Guinsoo's_Rageblade_item.png"
import heartsteel from "../../item-img/40px-Heartsteel_item.png"
import rocketbelt from "../../item-img/40px-Hextech_Rocketbelt_item.png"
import hollowradiance from "../../item-img/40px-Hollow_Radiance_item.png"
import horizonfocus from "../../item-img/40px-Horizon_Focus_item.png"
import hubris from "../../item-img/40px-Hubris_item.png"
import hullbreaker from "../../item-img/40px-Hullbreaker_item.png"
import iceborngauntlet from "../../item-img/40px-Iceborn_Gauntlet_item.png"
import shieldbow from "../../item-img/40px-Immortal_Shieldbow_item.png"
import imperialmandate from "../../item-img/40px-Imperial_Mandate_item.png"
import infinityedge from "../../item-img/40px-Infinity_Edge_item.png"
import jaksho from "../../item-img/40px-Jak'Sho,_The_Protean_item.png"
import kaenic from "../../item-img/40px-Kaenic_Rookern_item.png"
import knightvow from "../../item-img/40px-Knight's_Vow_item.png"
import krakenslayer from "../../item-img/40px-Kraken_Slayer_item.png"
import liandry from "../../item-img/40px-Liandry's_Torment_item.png"
import lichbane from "../../item-img/40px-Lich_Bane_item.png"
import ironsolari from "../../item-img/40px-Locket_of_the_Iron_Solari_item.png"
import dominik from "../../item-img/40px-Lord_Dominik's_Regards_item.png"
import ludengun from "../../item-img/40px-Luden's_Companion_item.png"
import malignance from "../../item-img/40px-Malignance_item.png"
import manamune from "../../item-img/40px-Manamune_item.png"
import malmortius from "../../item-img/40px-Maw_of_Malmortius_item.png"
import mejai from "../../item-img/40px-Mejai's_Soulstealer_item.png"
import mercurial from "../../item-img/Mercurial.png"
import mikael from "../../item-img/40px-Mikael's_Blessing_item.png"
import moonstone from "../../item-img/40px-Moonstone_Renewer_item.png"
import morello from "../../item-img/40px-Morellonomicon_item.png"
import mortalreminder from "../../item-img/40px-Mortal_Reminder_item.png"
import muramana from "../../item-img/40px-Muramana_item.png"
import nashor from "../../item-img/40px-Nashor's_Tooth_item.png"
import navori from "../../item-img/40px-Navori_Flickerblade_item.png"
import opportunity from "../../item-img/40px-Opportunity_item.png"
import overlord from "../../item-img/40px-Overlord's_Bloodmail_item.png"
import phantom from "../../item-img/40px-Phantom_Dancer_item.png"
import profane from "../../item-img/40px-Profane_Hydra_item.png"
import rabadon from "../../item-img/40px-Rabadon's_Deathcap_item.png"
import randuin from "../../item-img/40px-Randuin's_Omen_item.png"
import firecannon from "../../item-img/40px-Rapid_Firecannon_item.png"
import ravenous from "../../item-img/40px-Ravenous_Hydra_item.png"
import redemption from "../../item-img/40px-Redemption_item.png"
import riftmaker from "../../item-img/40px-Riftmaker_item.png"
import rodofages from "../../item-img/40px-Rod_of_Ages_item.png"
import runaan from "../../item-img/40px-Runaan's_Hurricane_item.png"
import rylai from "../../item-img/40px-Rylai's_Crystal_Scepter_item.png"
import seraph from "../../item-img/40px-Seraph's_Embrace_item.png"
import serpentfang from "../../item-img/40px-Serpent's_Fang_item.png"
import serylda from "../../item-img/40px-Serylda's_Grudge_item.png"
import shadowflame from "../../item-img/40px-Shadowflame_item.png"
import shurelya from "../../item-img/40px-Shurelya's_Battlesong_item.png"
import solstice from "../../item-img/40px-Solstice_Sleigh_item.png"
import shojin from "../../item-img/40px-Spear_of_Shojin_item.png"
import spiritvisage from "../../item-img/spirit_visage.png"
import flowingwater from "../../item-img/40px-Staff_of_Flowing_Water_item.png"
import statikk from "../../item-img/40px-Statikk_Shiv_item.png"
import sterak from "../../item-img/40px-Sterak's_Gage_item.png"
import stormsurge from "../../item-img/40px-Stormsurge_item.png"
import stridebreaker from "../../item-img/40px-Stridebreaker_item.png"
import sunderedsky from "../../item-img/40px-Sundered_Sky_item.png"
import sunfire from "../../item-img/40px-Sunfire_Aegis_item.png"
import terminus from "../../item-img/40px-Terminus_item.png"
import collector from "../../item-img/40px-The_Collector_item.png"
import thornmail from "../../item-img/40px-Thornmail_item.png"
import titanic from "../../item-img/40px-Titanic_Hydra_item.png"
import trailblazer from "../../item-img/40px-Trailblazer_item.png"
import trinityforce from "../../item-img/40px-Trinity_Force_item.png"
import umbral from "../../item-img/40px-Umbral_Glaive_item.png"
import unending from "../../item-img/40px-Unending_Despair_item.png"
import wardstone from "../../item-img/40px-Vigilant_Wardstone_item.png"
import voidstaff from "../../item-img/40px-Void_Staff_item.png"
import voltaic from "../../item-img/40px-Voltaic_Cyclosword_item.png"
import warmog from "../../item-img/40px-Warmog's_Armor_item.png"
import winterapproach from "../../item-img/40px-Winter's_Approach_item.png"
import witend from "../../item-img/40px-Wit's_End_item.png"
import youmuu from "../../item-img/40px-Youmuu's_Ghostblade_item.png"
import yuntal from "../../item-img/40px-Yun_Tal_Wildarrows_item.png"
import zazzak from "../../item-img/40px-Zaz'Zak's_Realmspike_item.png"
import zeke from "../../item-img/40px-Zeke's_Convergence_item.png"
import zhonya from "../../item-img/40px-Zhonya's_Hourglass_item.png"
import synchronizedsouls from "../../item-img/40px-Synchronized_Souls_item.png"

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
      lanemain1={2}
      lanemain2={3}
      lanemain3={2}
      lanemain4={1}
      lane2={2}
      lane3={0}
      lane4={1}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Domination"}
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
          <img src={ekko} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Ekko</h3>
            <div className="flex">
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

export function Elise() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={2}
      lanemain2={1}
      lanemain3={2}
      lanemain4={2}
      lane2={2}
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
          <img src={elise} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Elise</h3>
            <div className="flex">
              <img src={jungle} alt="" className="w-10" />
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
      lanemain2={3}
      lanemain3={2}
      lanemain4={2}
      lane2={0}
      lane3={3}
      lane4={3}
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
          <img src={evelynn} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Evelynn</h3>
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

export function Ezreal() {
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
      lane2={2}
      lane3={3}
      lane4={0}
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
          <img src={ezreal} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Ezreal</h3>
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
      lanemain2={1}
      lanemain3={2}
      lanemain4={3}
      lane2={1}
      lane3={1}
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
          <img src={fiddlesticks} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Fiddlesticks</h3>
            <div className="flex">
              <img src={jungle} alt="" className="w-10" />
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
      lanemain3={1}
      lanemain4={3}
      lane2={0}
      lane3={3}
      lane4={3}
      p1={1}
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
          <img src={fiora} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Fiora</h3>
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
      lanemain2={3}
      lanemain3={2}
      lanemain4={1}
      lane2={0}
      lane3={1}
      lane4={1}
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
          <img src={fizz} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Fizz</h3>
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
      lanemain1={3}
      lanemain2={2}
      lanemain3={1}
      lanemain4={1}
      lane2={0}
      lane3={2}
      lane4={3}
      p1={1}
      p2={1}
      p3={1}
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
          <img src={galio} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Galio</h3>
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

export function Gangplank() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={3}
      lanemain2={3}
      lanemain3={1}
      lanemain4={1}
      lane2={0}
      lane3={2}
      lane4={2}
      p1={1}
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
          <img src={gangplank} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Gangplank</h3>
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

export function Garen() {
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
      lane3={2}
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
          <img src={garen} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Garen</h3>
            <div className="flex">
              <img src={top} alt="" className="w-10" />
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
      lanemain1={3}
      lanemain2={2}
      lanemain3={1}
      lanemain4={3}
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
          <img src={gnar} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Gnar</h3>
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

export function Gragas() {
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
          <img src={gragas} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Gragas</h3>
            <div className="flex">
              <img src={jungle} alt="" className="w-10" />
              <img src={top} alt="" className="w-10" />
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
      lanemain1={2}
      lanemain2={3}
      lanemain3={2}
      lanemain4={1}
      lane2={2}
      lane3={1}
      lane4={0}
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
          <img src={graves} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Graves</h3>
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

export function Gwen() {
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
      lanemain4={3}
      lane2={0}
      lane3={3}
      lane4={3}
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
          <img src={gwen} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Gwen</h3>
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

export function Hecarim() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={3}
      lanemain2={3}
      lanemain3={2}
      lanemain4={2}
      lane2={2}
      lane3={2}
      lane4={0}
      p1={1}
      p2={1}
      p3={0}
      mainRune={"Sorcery"}
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
          <img src={hecarim} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Hecarim</h3>
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

export function Heimerdinger() {
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
      lanemain4={2}
      lane2={0}
      lane3={3}
      lane4={3}
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
          <img src={heimerdinger} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Heimerdinger</h3>
            <div className="flex">
              <img src={top} alt="" className="w-10" />
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

export function Hwei() {
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
      lane3={2}
      lane4={2}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Sorcery"}
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
          <img src={hwei} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Hwei</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
              <img src={support} alt="" className="w-10" />
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
      lanemain2={1}
      lanemain3={3}
      lanemain4={1}
      lane2={3}
      lane3={0}
      lane4={3}
      p1={1}
      p2={1}
      p3={3}
      mainRune={"Resolve"}
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
          <img src={illaoi} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Illaoi</h3>
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

export function Irelia() {
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
      lane2={0}
      lane3={3}
      lane4={3}
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
          <img src={irelia} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Irelia</h3>
            <div className="flex">
              <img src={top} alt="" className="w-10" />
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
      lanemain2={3}
      lanemain3={1}
      lanemain4={2}
      lane2={3}
      lane3={0}
      lane4={1}
      p1={3}
      p2={2}
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
          <img src={ivern} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Ivern</h3>
            <div className="flex">
              <img src={jungle} alt="" className="w-10" />
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
      lane3={0}
      lane4={2}
      p1={1}
      p2={2}
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
          <img src={janna} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Janna</h3>
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

export function JarvanIV() {
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
          <img src={jarvanIV} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Jarvan IV</h3>
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

export function Jax() {
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
      lanemain4={3}
      lane2={0}
      lane3={3}
      lane4={3}
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
          <img src={ahri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Jax</h3>
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

export function Jayce() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={3}
      lanemain2={3}
      lanemain3={1}
      lanemain4={1}
      lane2={3}
      lane3={0}
      lane4={1}
      p1={1}
      p2={1}
      p3={3}
      mainRune={"Inspiration"}
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
          <img src={jayce} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Jayce</h3>
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

export function Jhin() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={3}
      lanemain2={3}
      lanemain3={3}
      lanemain4={1}
      lane2={0}
      lane3={2}
      lane4={3}
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
          <img src={jhin} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Jhin</h3>
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

export function Jinx() {
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
          <img src={jinx} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Jinx</h3>
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
      lanemain2={3}
      lanemain3={2}
      lanemain4={1}
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
          <img src={ksante} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">K'Sante</h3>
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
      lanemain1={2}
      lanemain2={3}
      lanemain3={3}
      lanemain4={1}
      lane2={2}
      lane3={3}
      lane4={0}
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
          <img src={kaisa} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Kai'Sa</h3>
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

export function Kalista() {
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
      lanemain4={3}
      lane2={3}
      lane3={0}
      lane4={1}
      p1={2}
      p2={1}
      p3={1}
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
          <img src={kalista} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Kalista</h3>
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
      lanemain3={1}
      lanemain4={3}
      lane2={2}
      lane3={0}
      lane4={2}
      p1={3}
      p2={1}
      p3={1}
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
          <img src={karma} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Karma</h3>
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

export function Karthus() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={2}
      lanemain2={1}
      lanemain3={1}
      lanemain4={1}
      lane2={2}
      lane3={0}
      lane4={3}
      p1={1}
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
          <img src={karthus} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Karthus</h3>
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
      lanemain2={3}
      lanemain3={2}
      lanemain4={3}
      lane2={0}
      lane3={2}
      lane4={1}
      p1={1}
      p2={3}
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
          <img src={kassadin} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Kassadin</h3>
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
      lanemain2={3}
      lanemain3={2}
      lanemain4={2}
      lane2={2}
      lane3={0}
      lane4={1}
      p1={1}
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
          <img src={katarina} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Katarina</h3>
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
      lanemain2={1}
      lanemain3={1}
      lanemain4={3}
      lane2={0}
      lane3={2}
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
          <img src={kayle} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Kayle</h3>
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

export function Kayn() {
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
          <img src={kayn} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Kayn</h3>
            <div className="flex">
              <img src={jungle} alt="" className="w-10" />
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
      lane2={0}
      lane3={3}
      lane4={1}
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
          <img src={kennen} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Kennen</h3>
            <div className="flex">
              <img src={top} alt="" className="w-10" />
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
      lanemain1={3}
      lanemain2={3}
      lanemain3={1}
      lanemain4={1}
      lane2={3}
      lane3={0}
      lane4={1}
      p1={1}
      p2={1}
      p3={3}
      mainRune={"Inspiration"}
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
          <img src={khazix} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Kha'Zix</h3>
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
      lanemain3={1}
      lanemain4={1}
      lane2={3}
      lane3={0}
      lane4={1}
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
          <img src={kindred} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Kindred</h3>
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

export function Kled() {
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
      lane3={3}
      lane4={0}
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
          <img src={kled} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Kled</h3>
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
          <img src={kogmaw} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Kog'Maw</h3>
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
      lanemain2={3}
      lanemain3={2}
      lanemain4={2}
      lane2={0}
      lane3={1}
      lane4={3}
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
          <img src={leblanc} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">LeBlanc</h3>
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

export function LeeSin() {
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
          <img src={leesin} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Lee Sin</h3>
            <div className="flex">
              <img src={jungle} alt="" className="w-10" />
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

export function Leona() {
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
      lane2={0}
      lane3={3}
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
          <img src={leona} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Leona</h3>
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

export function Lillia() {
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
          <img src={lillia} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Lillia</h3>
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
      lanemain2={1}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
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
          <img src={lissandra} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Lissandra</h3>
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
      lanemain2={3}
      lanemain3={3}
      lanemain4={1}
      lane2={2}
      lane3={3}
      lane4={0}
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
          <img src={lucian} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Lucian</h3>
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
      lanemain3={1}
      lanemain4={1}
      lane2={0}
      lane3={3}
      lane4={2}
      p1={3}
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
          <img src={lulu} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Lulu</h3>
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

export function Lux() {
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
      lane2={1}
      lane3={0}
      lane4={3}
      p1={1}
      p2={1}
      p3={3}
      mainRune={"Sorcery"}
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
          <img src={lux} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Lux</h3>
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
          <img src={malphite} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Malphite</h3>
            <div className="flex">
              <img src={top} alt="" className="w-10" />
              <img src={support} alt="" className="w-10" />
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

export function Malzahar() {
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
      lanemain4={3}
      lane2={2}
      lane3={0}
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
          <img src={malzahar} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Malzahar</h3>
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
      lanemain1={2}
      lanemain2={2}
      lanemain3={3}
      lanemain4={3}
      lane2={0}
      lane3={3}
      lane4={1}
      p1={1}
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
          <img src={maokai} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Maokai</h3>
            <div className="flex">
              <img src={jungle} alt="" className="w-10" />
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

export function MasterYi() {
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
          <img src={masteryi} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Master Yi</h3>
            <div className="flex">
              <img src={jungle} alt="" className="w-10" />
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

export function Mel() {
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
      lane2={3}
      lane3={0}
      lane4={1}
      p1={3}
      p2={1}
      p3={3}
      mainRune={"Sorcery"}
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
          <img src={mel} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Mel</h3>
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
      lanemain3={1}
      lanemain4={1}
      lane2={0}
      lane3={3}
      lane4={2}
      p1={3}
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
          <img src={milio} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Milio</h3>
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

export function MissFortune() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={3}
      lanemain2={3}
      lanemain3={3}
      lanemain4={3}
      lane2={2}
      lane3={0}
      lane4={3}
      p1={1}
      p2={1}
      p3={1}
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
          <img src={missfortune} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Miss Fortune</h3>
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

export function Mordekaiser() {
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
      lane2={0}
      lane3={3}
      lane4={2}
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
          <img src={mordekaiser} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Mordekaiser</h3>
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
          <img src={morgana} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Morgana</h3>
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

export function Naafiri() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={3}
      lanemain2={3}
      lanemain3={1}
      lanemain4={1}
      lane2={0}
      lane3={1}
      lane4={1}
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
          <img src={naafiri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Naafiri</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
              <img src={jungle} alt="" className="w-10" />
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
      lanemain3={1}
      lanemain4={1}
      lane2={0}
      lane3={3}
      lane4={2}
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
          <img src={nami} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Nami</h3>
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

export function Nasus() {
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
      lanemain3={2}
      lanemain4={3}
      lane2={0}
      lane3={2}
      lane4={3}
      p1={3}
      p2={3}
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
          <img src={nasus} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Nasus</h3>
            <div className="flex">
              <img src={top} alt="" className="w-10" />
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

export function Nautilus() {
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
      lanemain4={3}
      lane2={0}
      lane3={3}
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
          <img src={nautilus} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Nautilus</h3>
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

export function Neeko() {
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
          <img src={neeko} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Neeko</h3>
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

export function Nidalee() {
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
      lanemain3={2}
      lanemain4={1}
      lane2={0}
      lane3={1}
      lane4={2}
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
          <img src={nidalee} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Nidalee</h3>
            <div className="flex">
              <img src={jungle} alt="" className="w-10" />
              <img src={support} alt="" className="w-10" />
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

export function Nilah() {
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
      lane2={3}
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
          <img src={nilah} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Nilah</h3>
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

export function Nocturne() {
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
      lane2={0}
      lane3={2}
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
          <img src={nocturne} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Nocturne</h3>
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
          <img src={nunuWillump} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Nunu & Willump</h3>
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

export function Olaf() {
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
      lane2={0}
      lane3={3}
      lane4={2}
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
          <img src={olaf} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Olaf</h3>
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

export function Orianna() {
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
      lanemain3={1}
      lanemain4={1}
      lane2={3}
      lane3={2}
      lane4={0}
      p1={2}
      p2={1}
      p3={1}
      mainRune={"Sorcery"}
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
          <img src={orianna} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Orianna</h3>
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
      lanemain2={1}
      lanemain3={3}
      lanemain4={1}
      lane2={2}
      lane3={3}
      lane4={0}
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
          <img src={ornn} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Ornn</h3>
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
      lanemain4={1}
      lane2={1}
      lane3={0}
      lane4={2}
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
          <img src={pantheon} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Pantheon</h3>
            <div className="flex">
              <img src={top} alt="" className="w-10" />
              <img src={jungle} alt="" className="w-10" />
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

export function Poppy() {
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
      p1={1}
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
          <img src={poppy} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Poppy</h3>
            <div className="flex">
              <img src={top} alt="" className="w-10" />
              <img src={support} alt="" className="w-10" />
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

export function Pyke() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={3}
      lanemain2={1}
      lanemain3={1}
      lanemain4={3}
      lane2={0}
      lane3={3}
      lane4={3}
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
          <img src={pyke} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Pyke</h3>
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
      lanemain2={3}
      lanemain3={2}
      lanemain4={1}
      lane2={3}
      lane3={0}
      lane4={3}
      p1={1}
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
          <img src={qiyana} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Qiyana</h3>
            <div className="flex">
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
      lanemain2={3}
      lanemain3={2}
      lanemain4={1}
      lane2={0}
      lane3={3}
      lane4={3}
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
          <img src={quinn} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Quinn</h3>
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

export function Rakan() {
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
      lane3={1}
      lane4={3}
      p1={1}
      p2={1}
      p3={3}
      mainRune={"Resolve"}
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
          <img src={rakan} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Rakan</h3>
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

export function Rammus() {
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
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={3}
      p3={3}
      mainRune={"Resolve"}
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
          <img src={rammus} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Rammus</h3>
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

export function RekSai() {
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
          <img src={reksai} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Rek'Sai</h3>
            <div className="flex">
              <img src={jungle} alt="" className="w-10" />
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

export function Rell() {
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
          <img src={rell} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Rell</h3>
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

export function RenataGlasc() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={3}
      lanemain2={3}
      lanemain3={3}
      lanemain4={3}
      lane2={0}
      lane3={1}
      lane4={2}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Resolve"}
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
          <img src={renataGlasc} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Renata Glasc</h3>
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

export function Renekton() {
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
      lane2={0}
      lane3={3}
      lane4={3}
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
          <img src={renekton} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Renekton</h3>
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

export function Rengar() {
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
      lane2={3}
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
          <img src={rengar} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Rengar</h3>
            <div className="flex">
              <img src={jungle} alt="" className="w-10" />
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

export function Riven() {
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
      lane2={3}
      lane3={0}
      lane4={3}
      p1={3}
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
          <img src={riven} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Riven</h3>
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

export function Rumble() {
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
          <img src={rumble} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Rumble</h3>
            <div className="flex">
              <img src={top} alt="" className="w-10" />
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
      lanemain1={3}
      lanemain2={2}
      lanemain3={1}
      lanemain4={3}
      lane2={0}
      lane3={3}
      lane4={1}
      p1={2}
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
          <img src={ryze} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Ryze</h3>
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
      lanemain1={4}
      lanemain2={2}
      lanemain3={3}
      lanemain4={3}
      lane2={2}
      lane3={0}
      lane4={1}
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
          <img src={samira} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Samira</h3>
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

export function Sejuani() {
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
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={3}
      p3={3}
      mainRune={"Resolve"}
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
          <img src={sejuani} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Sejuani</h3>
            <div className="flex">
              <img src={jungle} alt="" className="w-10" />
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
      lanemain3={1}
      lanemain4={1}
      lane2={2}
      lane3={0}
      lane4={2}
      p1={2}
      p2={1}
      p3={1}
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
          <img src={senna} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Senna</h3>
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
      lanemain3={1}
      lanemain4={3}
      lane2={2}
      lane3={0}
      lane4={2}
      p1={3}
      p2={1}
      p3={1}
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
          <img src={seraphine} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Seraphine</h3>
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

export function Sett() {
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
      lane2={0}
      lane3={2}
      lane4={3}
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
          <img src={sett} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Sett</h3>
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

export function Shaco() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={3}
      lanemain2={3}
      lanemain3={2}
      lanemain4={2}
      lane2={0}
      lane3={1}
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
          <img src={shaco} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Shaco</h3>
            <div className="flex">
              <img src={jungle} alt="" className="w-10" />
              <img src={support} alt="" className="w-10" />
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
      lanemain2={3}
      lanemain3={2}
      lanemain4={1}
      lane2={0}
      lane3={3}
      lane4={2}
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
          <img src={shen} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Shen</h3>
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

export function Shyvana() {
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
      lanemain3={2}
      lanemain4={2}
      lane2={2}
      lane3={0}
      lane4={3}
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
          <img src={shyvana} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Shyvana</h3>
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

export function Singed() {
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
      lane2={3}
      lane3={2}
      lane4={0}
      p1={1}
      p2={2}
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
          <img src={singed} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Singed</h3>
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
      lanemain2={1}
      lanemain3={1}
      lanemain4={1}
      lane2={3}
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
          <img src={sion} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Sion</h3>
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

export function Sivir() {
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
          <img src={sivir} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Sivir</h3>
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
      lanemain2={3}
      lanemain3={1}
      lanemain4={1}
      lane2={2}
      lane3={0}
      lane4={2}
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
          <img src={skarner} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Skarner</h3>
            <div className="flex">
              <img src={jungle} alt="" className="w-10" />
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

export function Smolder() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={3}
      lanemain2={3}
      lanemain3={2}
      lanemain4={1}
      lane2={0}
      lane3={1}
      lane4={3}
      p1={2}
      p2={1}
      p3={1}
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
          <img src={smolder} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Smolder</h3>
            <div className="flex">
              <img src={bot} alt="" className="w-10" />
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
      lanemain3={1}
      lanemain4={3}
      lane2={0}
      lane3={1}
      lane4={2}
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
          <img src={sona} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Sona</h3>
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
      lanemain3={1}
      lanemain4={1}
      lane2={0}
      lane3={3}
      lane4={2}
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
          <img src={soraka} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Soraka</h3>
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

export function Swain() {
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
      lane2={0}
      lane3={1}
      lane4={1}
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
          <img src={swain} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Swain</h3>
            <div className="flex">
              <img src={top} alt="" className="w-10" />
              <img src={mid} alt="" className="w-10" />
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

export function Sylas() {
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
      lane2={0}
      lane3={2}
      lane4={3}
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
          <img src={sylas} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Sylas</h3>
            <div className="flex">
              <img src={mid} alt="" className="w-10" />
              <img src={top} alt="" className="w-10" />
              <img src={jungle} alt="" className="w-10" />
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

export function Syndra() {
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
      lanemain4={1}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
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
          <img src={syndra} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Syndra</h3>
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
      lanemain2={3}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={2}
      p2={3}
      p3={3}
      mainRune={"Resolve"}
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
          <img src={tahmKench} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Tahm Kench</h3>
            <div className="flex">
              <img src={support} alt="" className="w-10" />
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

export function Taliyah() {
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
      lanemain3={1}
      lanemain4={1}
      lane2={3}
      lane3={2}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Sorcery"}
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
          <img src={taliyah} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Taliyah</h3>
            <div className="flex">
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
      lanemain2={3}
      lanemain3={2}
      lanemain4={3}
      lane2={2}
      lane3={0}
      lane4={1}
      p1={1}
      p2={1}
      p3={3}
      mainRune={"Domination"}
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
          <img src={talon} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Talon</h3>
            <div className="flex">
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
      lanemain3={3}
      lanemain4={1}
      lane2={0}
      lane3={1}
      lane4={2}
      p1={2}
      p2={3}
      p3={3}
      mainRune={"Inspiration"}
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
          <img src={taric} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Taric</h3>
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
      lanemain3={1}
      lanemain4={3}
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
          <img src={teemo} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Teemo</h3>
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

export function Thresh() {
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
      lane2={0}
      lane3={3}
      lane4={1}
      p1={1}
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
          <img src={thresh} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Thresh</h3>
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

export function Tristana() {
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
      lanemain4={2}
      lane2={2}
      lane3={3}
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
          <img src={tristana} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Tristana</h3>
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

export function Trundle() {
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
      lanemain4={3}
      lane2={1}
      lane3={3}
      lane4={0}
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
          <img src={trundle} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Trundle</h3>
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

export function Tryndamere() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={3}
      lanemain2={3}
      lanemain3={2}
      lanemain4={1}
      lane2={0}
      lane3={1}
      lane4={3}
      p1={1}
      p2={1}
      p3={1}
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
          <img src={tryndamere} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Tryndamere</h3>
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

export function TwistedFate() {
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
      lanemain4={3}
      lane2={0}
      lane3={3}
      lane4={3}
      p1={2}
      p2={2}
      p3={1}
      mainRune={"Inspiration"}
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
          <img src={twistedFate} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Twisted Fate</h3>
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
      lanemain1={2}
      lanemain2={2}
      lanemain3={1}
      lanemain4={2}
      lane2={1}
      lane3={0}
      lane4={3}
      p1={2}
      p2={1}
      p3={1}
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
          <img src={twitch} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Twitch</h3>
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

export function Udyr() {
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
      lane2={2}
      lane3={0}
      lane4={2}
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
          <img src={udyr} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Udyr</h3>
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
      lane2={0}
      lane3={3}
      lane4={1}
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
          <img src={urgot} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Urgot</h3>
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

export function Varus() {
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
      lane2={3}
      lane3={1}
      lane4={0}
      p1={2}
      p2={1}
      p3={1}
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
          <img src={varus} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Varus</h3>
            <div className="flex">
              <img src={bot} alt="" className="w-10" />
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

export function Vayne() {
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
      lane3={1}
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
          <img src={vayne} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Vayne</h3>
            <div className="flex">
              <img src={bot} alt="" className="w-10" />
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

export function Veigar() {
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
      lanemain4={1}
      lane2={2}
      lane3={1}
      lane4={0}
      p1={3}
      p2={1}
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
          <img src={veigar} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Veigar</h3>
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

export function VelKoz() {
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
      lane2={1}
      lane3={0}
      lane4={3}
      p1={1}
      p2={1}
      p3={3}
      mainRune={"Sorcery"}
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
          <img src={velkoz} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Vel'Koz</h3>
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
          <img src={vex} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Vex</h3>
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
      lanemain1={4}
      lanemain2={2}
      lanemain3={2}
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
          <img src={vi} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Vi</h3>
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

export function Viego() {
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
          <img src={viego} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Viego</h3>
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
      lanemain3={1}
      lanemain4={1}
      lane2={3}
      lane3={3}
      lane4={0}
      p1={2}
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
          <img src={viktor} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Viktor</h3>
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
      lanemain1={3}
      lanemain2={3}
      lanemain3={1}
      lanemain4={3}
      lane2={0}
      lane3={2}
      lane4={3}
      p1={3}
      p2={1}
      p3={3}
      mainRune={"Sorcery"}
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
          <img src={vladimir} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Vladimir</h3>
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

export function Volibear() {
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
      lanemain3={2}
      lanemain4={3}
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
          <img src={volibear} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Volibear</h3>
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

export function Warwick() {
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
      lanemain4={3}
      lane2={0}
      lane3={2}
      lane4={2}
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
          <img src={warwick} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Warwick</h3>
            <div className="flex">
              <img src={jungle} alt="" className="w-10" />
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

export function Wukong() {
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
          <img src={wukong} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Wukong</h3>
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

export function Xayah() {
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
      lane2={2}
      lane3={3}
      lane4={0}
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
          <img src={xayah} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Xayah</h3>
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

export function Xerath() {
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
      lane2={3}
      lane3={0}
      lane4={1}
      p1={1}
      p2={1}
      p3={3}
      mainRune={"Sorcery"}
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
          <img src={xerath} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Xerath</h3>
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

export function XinZhao() {
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
          <img src={xinzhao} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Xin Zhao</h3>
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

export function Yasuo() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={2}
      lanemain2={1}
      lanemain3={1}
      lanemain4={3}
      lane2={0}
      lane3={2}
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
          <img src={yasuo} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Yasuo</h3>
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

export function Yone() {
  const [clickedItem, setClickedItem] = useState(0);
  let displayItem;
  switch (clickedItem) {
    case 0:
      displayItem = "";
      break;
    case 1:
      displayItem = <Build 
      lanemain1={2}
      lanemain2={1}
      lanemain3={1}
      lanemain4={3}
      lane2={0}
      lane3={2}
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
          <img src={yone} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Yone</h3>
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

export function Yunara() {
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
          <img src={yunara} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Yunara</h3>
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
      lanemain2={1}
      lanemain3={3}
      lanemain4={1}
      lane2={3}
      lane3={3}
      lane4={0}
      p1={2}
      p2={1}
      p3={3}
      mainRune={"Resolve"}
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
          <img src={yorick} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Yorick</h3>
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
      lanemain3={1}
      lanemain4={1}
      lane2={2}
      lane3={0}
      lane4={2}
      p1={3}
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
          <img src={yuumi} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Yuumi</h3>
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

export function Zaahen() {
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
      lanemain4={1}
      lane2={0}
      lane3={3}
      lane4={2}
      p1={2}
      p2={1}
      p3={1}
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
          <img src={zaahen} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Zaahen</h3>
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

export function Zac() {
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
      lane2={2}
      lane3={0}
      lane4={1}
      p1={3}
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
          <img src={zac} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Zac</h3>
            <div className="flex">
              <img src={jungle} alt="" className="w-10" />
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
      lane2={0}
      lane3={1}
      lane4={1}
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
          <img src={zed} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Zed</h3>
            <div className="flex">
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

export function Zeri() {
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
          <img src={zeri} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Zeri</h3>
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

export function Ziggs() {
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
      lane2={3}
      lane3={1}
      lane4={0}
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
          <img src={ziggs} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Ziggs</h3>
            <div className="flex">
              <img src={bot} alt="" className="w-10" />
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
      lanemain1={2}
      lanemain2={1}
      lanemain3={2}
      lanemain4={1}
      lane2={1}
      lane3={0}
      lane4={2}
      p1={3}
      p2={1}
      p3={3}
      mainRune={"Sorcery"}
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
          <img src={zilean} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Zilean</h3>
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
      lanemain2={3}
      lanemain3={2}
      lanemain4={2}
      lane2={3}
      lane3={1}
      lane4={0}
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
          <img src={zoe} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Zoe</h3>
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

export function Zyra() {
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
      lane2={2}
      lane3={0}
      lane4={2}
      p1={1}
      p2={1}
      p3={3}
      mainRune={"Sorcery"}
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
          <img src={zyra} className="max-w-28 w-28" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-4xl">Zyra</h3>
            <div className="flex">
              <img src={jungle} alt="" className="w-10" />
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
