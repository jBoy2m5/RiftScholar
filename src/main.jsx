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

    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
