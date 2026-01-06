import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Champion from './Components/Navbar/Champion.jsx'
import GameKnowledge from './Components/Navbar/GameKnowledge.jsx'
import Home from './Components/Navbar/Home.jsx'
import Items from './Components/Navbar/Items.jsx'
import Build from './Components/Navbar/Build.jsx'
import Guide from './Components/Navbar/Guide.jsx'
import Counter from './Components/Navbar/Counter.jsx'
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
      {path: "aatrox", element: <Champions.Aatrox />}
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
