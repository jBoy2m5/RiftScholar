import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Champion from './Components/Champion/Champion.jsx'
import GameKnowledge from './Components/Navbar/GameKnowledge.jsx'
import Home from './Components/Navbar/Home.jsx'
import Items from './Components/Navbar/Items.jsx'
import Build from './Components/Champion/Build.jsx'
import Guide from './Components/Champion/Guide.jsx'
import Counter from './Components/Champion/Counter.jsx'
import Test from './Components/Navbar/Test.jsx'
import CoreKnowledge from './Components/GameKnowledge/CoreKnowledge.jsx'
import RoleSpecific from './Components/GameKnowledge/RoleSpecific.jsx'
import BeginnerGuide from './Components/GameKnowledge/BeginnerGuide.jsx'
import GameKnowledgeHome from './Components/GameKnowledge/GameKnowledgeHome.jsx'
import * as Champions from './Components/Champion/ChampionComponents.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: "champion", 
      element: <Champion />},

      { path: "gameknowledge", 
        element: <GameKnowledge />,
        children: [
          {index: true, element: <GameKnowledgeHome />},
          {path: "coreknowledge", element: <CoreKnowledge />},
          {path: "beginnerguide", element: <BeginnerGuide />},
          {path: "rolespecific", element: <RoleSpecific />}
        ]
      },
      {path: "items", element: <Items />},
      {path: "build", element: <Build />},
      {path: "guide", element: <Guide />},
      {path: "counter", element: <Counter />},
      {path: "test", element: <Test />},
      // Champion
      {path: "aatrox", element: <Champions.Aatrox />},
      {path: "ahri", element: <Champions.Ahri />},
      { path: "akali", element: <Champions.Akali /> },
{ path: "akshan", element: <Champions.Akshan /> },
{ path: "alistar", element: <Champions.Alistar /> },
{ path: "ambessa", element: <Champions.Ambessa /> },
{ path: "amumu", element: <Champions.Amumu /> },
{ path: "anivia", element: <Champions.Anivia /> },
{ path: "annie", element: <Champions.Annie /> },
{ path: "aphelios", element: <Champions.Aphelios /> },
{ path: "ashe", element: <Champions.Ashe /> },
{ path: "aurelionsol", element: <Champions.AurelionSol /> },
{ path: "aurora", element: <Champions.Aurora /> },
{ path: "azir", element: <Champions.Azir /> },

{ path: "bard", element: <Champions.Bard /> },
{ path: "belveth", element: <Champions.Belveth /> },
{ path: "blitzcrank", element: <Champions.Blitzcrank /> },
{ path: "brand", element: <Champions.Brand /> },
{ path: "braum", element: <Champions.Braum /> },
{ path: "briar", element: <Champions.Briar /> },

{ path: "caitlyn", element: <Champions.Caitlyn /> },
{ path: "camille", element: <Champions.Camille /> },
{ path: "cassiopeia", element: <Champions.Cassiopeia /> },
{ path: "chogath", element: <Champions.Chogath /> },
{ path: "corki", element: <Champions.Corki /> },

{ path: "darius", element: <Champions.Darius /> },
{ path: "diana", element: <Champions.Diana /> },
{ path: "draven", element: <Champions.Draven /> },
{ path: "drmundo", element: <Champions.DrMundo /> },

{ path: "ekko", element: <Champions.Ekko /> },
{ path: "elise", element: <Champions.Elise /> },
{ path: "evelynn", element: <Champions.Evelynn /> },
{ path: "ezreal", element: <Champions.Ezreal /> },

{ path: "fiddlesticks", element: <Champions.Fiddlesticks /> },
{ path: "fiora", element: <Champions.Fiora /> },
{ path: "fizz", element: <Champions.Fizz /> },

{ path: "galio", element: <Champions.Galio /> },
{ path: "gangplank", element: <Champions.Gangplank /> },
{ path: "garen", element: <Champions.Garen /> },
{ path: "gnar", element: <Champions.Gnar /> },
{ path: "gragas", element: <Champions.Gragas /> },
{ path: "graves", element: <Champions.Graves /> },
{ path: "gwen", element: <Champions.Gwen /> },

{ path: "hecarim", element: <Champions.Hecarim /> },
{ path: "heimerdinger", element: <Champions.Heimerdinger /> },
{ path: "hwei", element: <Champions.Hwei /> },

{ path: "illaoi", element: <Champions.Illaoi /> },
{ path: "irelia", element: <Champions.Irelia /> },
{ path: "ivern", element: <Champions.Ivern /> },

{ path: "janna", element: <Champions.Janna /> },
{ path: "jarvaniv", element: <Champions.JarvanIV /> },
{ path: "jax", element: <Champions.Jax /> },
{ path: "jayce", element: <Champions.Jayce /> },
{ path: "jhin", element: <Champions.Jhin /> },
{ path: "jinx", element: <Champions.Jinx /> },

{ path: "kaisa", element: <Champions.KaiSa /> },
{ path: "kalista", element: <Champions.Kalista /> },
{ path: "karma", element: <Champions.Karma /> },
{ path: "karthus", element: <Champions.Karthus /> },
{ path: "kassadin", element: <Champions.Kassadin /> },
{ path: "katarina", element: <Champions.Katarina /> },
{ path: "kayle", element: <Champions.Kayle /> },
{ path: "kayn", element: <Champions.Kayn /> },
{ path: "kennen", element: <Champions.Kennen /> },
{ path: "khazix", element: <Champions.KhaZix /> },
{ path: "kindred", element: <Champions.Kindred /> },
{ path: "kled", element: <Champions.Kled /> },
{ path: "kogmaw", element: <Champions.KogMaw /> },
{ path: "ksante", element: <Champions.KSante /> },

{ path: "leblanc", element: <Champions.LeBlanc /> },
{ path: "leesin", element: <Champions.LeeSin /> },
{ path: "leona", element: <Champions.Leona /> },
{ path: "lillia", element: <Champions.Lillia /> },
{ path: "lissandra", element: <Champions.Lissandra /> },
{ path: "lucian", element: <Champions.Lucian /> },
{ path: "lulu", element: <Champions.Lulu /> },
{ path: "lux", element: <Champions.Lux /> },

{ path: "malphite", element: <Champions.Malphite /> },
{ path: "malzahar", element: <Champions.Malzahar /> },
{ path: "maokai", element: <Champions.Maokai /> },
{ path: "masteryi", element: <Champions.MasterYi /> },
{ path: "mel", element: <Champions.Mel /> },
{ path: "milio", element: <Champions.Milio /> },
{ path: "missfortune", element: <Champions.MissFortune /> },
{ path: "mordekaiser", element: <Champions.Mordekaiser /> },
{ path: "morgana", element: <Champions.Morgana /> },

{ path: "naafiri", element: <Champions.Naafiri /> },
{ path: "nami", element: <Champions.Nami /> },
{ path: "nasus", element: <Champions.Nasus /> },
{ path: "nautilus", element: <Champions.Nautilus /> },
{ path: "neeko", element: <Champions.Neeko /> },
{ path: "nidalee", element: <Champions.Nidalee /> },
{ path: "nilah", element: <Champions.Nilah /> },
{ path: "nocturne", element: <Champions.Nocturne /> },
{ path: "nunuwillump", element: <Champions.NunuWillump /> },

{ path: "olaf", element: <Champions.Olaf /> },
{ path: "orianna", element: <Champions.Orianna /> },
{ path: "ornn", element: <Champions.Ornn /> },

{ path: "pantheon", element: <Champions.Pantheon /> },
{ path: "poppy", element: <Champions.Poppy /> },
{ path: "pyke", element: <Champions.Pyke /> },

{ path: "qiyana", element: <Champions.Qiyana /> },
{ path: "quinn", element: <Champions.Quinn /> },

{ path: "rakan", element: <Champions.Rakan /> },
{ path: "rammus", element: <Champions.Rammus /> },
{ path: "reksai", element: <Champions.RekSai /> },
{ path: "rell", element: <Champions.Rell /> },
{ path: "renataglasc", element: <Champions.RenataGlasc /> },
{ path: "renekton", element: <Champions.Renekton /> },
{ path: "rengar", element: <Champions.Rengar /> },
{ path: "riven", element: <Champions.Riven /> },
{ path: "rumble", element: <Champions.Rumble /> },
{ path: "ryze", element: <Champions.Ryze /> },

{ path: "samira", element: <Champions.Samira /> },
{ path: "sejuani", element: <Champions.Sejuani /> },
{ path: "senna", element: <Champions.Senna /> },
{ path: "seraphine", element: <Champions.Seraphine /> },
{ path: "sett", element: <Champions.Sett /> },
{ path: "shaco", element: <Champions.Shaco /> },
{ path: "shen", element: <Champions.Shen /> },
{ path: "shyvana", element: <Champions.Shyvana /> },
{ path: "singed", element: <Champions.Singed /> },
{ path: "sion", element: <Champions.Sion /> },
{ path: "sivir", element: <Champions.Sivir /> },
{ path: "skarner", element: <Champions.Skarner /> },
{ path: "smolder", element: <Champions.Smolder /> },
{ path: "sona", element: <Champions.Sona /> },
{ path: "soraka", element: <Champions.Soraka /> },
{ path: "swain", element: <Champions.Swain /> },
{ path: "sylas", element: <Champions.Sylas /> },
{ path: "syndra", element: <Champions.Syndra /> },

{ path: "tahmkench", element: <Champions.TahmKench /> },
{ path: "taliyah", element: <Champions.Taliyah /> },
{ path: "talon", element: <Champions.Talon /> },
{ path: "taric", element: <Champions.Taric /> },
{ path: "teemo", element: <Champions.Teemo /> },
{ path: "thresh", element: <Champions.Thresh /> },
{ path: "tristana", element: <Champions.Tristana /> },
{ path: "trundle", element: <Champions.Trundle /> },
{ path: "tryndamere", element: <Champions.Tryndamere /> },
{ path: "twistedfate", element: <Champions.TwistedFate /> },
{ path: "twitch", element: <Champions.Twitch /> },

{ path: "udyr", element: <Champions.Udyr /> },
{ path: "urgot", element: <Champions.Urgot /> },

{ path: "varus", element: <Champions.Varus /> },
{ path: "vayne", element: <Champions.Vayne /> },
{ path: "veigar", element: <Champions.Veigar /> },
{ path: "velkoz", element: <Champions.VelKoz /> },
{ path: "vex", element: <Champions.Vex /> },
{ path: "vi", element: <Champions.Vi /> },
{ path: "viego", element: <Champions.Viego /> },
{ path: "viktor", element: <Champions.Viktor /> },
{ path: "vladimir", element: <Champions.Vladimir /> },
{ path: "volibear", element: <Champions.Volibear /> },

{ path: "warwick", element: <Champions.Warwick /> },
{ path: "wukong", element: <Champions.Wukong /> },

{ path: "xayah", element: <Champions.Xayah /> },
{ path: "xerath", element: <Champions.Xerath /> },
{ path: "xinzhao", element: <Champions.XinZhao /> },

{ path: "yasuo", element: <Champions.Yasuo /> },
{ path: "yone", element: <Champions.Yone /> },
{ path: "yorick", element: <Champions.Yorick /> },
{ path: "yunara", element: <Champions.Yunara /> },
{ path: "yuumi", element: <Champions.Yuumi /> },
{ path: "zaahen", element: <Champions.Zaahen /> },

{ path: "zac", element: <Champions.Zac /> },
{ path: "zed", element: <Champions.Zed /> },
{ path: "zeri", element: <Champions.Zeri /> },
{ path: "ziggs", element: <Champions.Ziggs /> },
{ path: "zilean", element: <Champions.Zilean /> },
{ path: "zoe", element: <Champions.Zoe /> },
{ path: "zyra", element: <Champions.Zyra /> },



    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
