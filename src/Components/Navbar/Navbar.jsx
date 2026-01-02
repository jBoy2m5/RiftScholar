import GameKnowledge from './GameKnowledge.jsx'
import Champion from './Champion.jsx'
import Items from './Items.jsx'
import { Link } from 'react-router-dom';

function Navbar() {
    return(
    <div className="font-inter text-white flex justify-between flex-row items-center bg-[#1E2B46] lg:px-18 lg:py-8 md:px-15 md:py-6 px-15 sm:py-4 whitespace-nowrap w-screen overflow-x-visible gap-8">
        <Link to={"/"}>
            <span className="font-bold text-4xl text-white font-logo">RiftScholar</span>
        </Link>
        
        <ul className="flex flex-row lg:gap-20 md:gap-12 gap-8 shrink-0">
            <Link to={"/gameknowledge"}>
                <li><span className="block py-2 hover:text-[#2FD4FF]">Game Knowledge</span></li>
            </Link>
            <li className="relative group ">
                <Link to={"/champion"}>
                    <span className="py-2 block hover:text-[#2FD4FF]">Champion</span>
                </Link>
                <div className="absolute bg-[#0D1221] rounded-lg hidden group-hover:block">
                    <Link to={"/build"}>
                        <span className="w-56 block py-2 px-1 hover:text-[#2FD4FF]">Build</span>
                    </Link>
                    <Link to={"/guide"}>
                        <span className="w-56 block py-2 px-1 hover:text-[#2FD4FF]">Guide</span>
                    </Link>
                    <Link to={"/counter"}>
                        <span className="w-56 block py-2 px-1 hover:text-[#2FD4FF]">Counter</span>
                    </Link>
                   
                </div>
            </li>
            <Link to={"/items"}>
                <li><span className="py-2 block hover:text-[#2FD4FF]">Items</span></li>
            </Link>
        </ul>
        <input className="w-5/12 md:w-3/12 sm:w-2/12 max-w-xs bg-[#121A2A] rounded-xl px-5 py-1 min-w-40" placeholder="🔍︎ Search"></input>
    </div>
    )
}

export default Navbar;