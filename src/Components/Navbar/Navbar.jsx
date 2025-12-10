function Navbar() {
    return(
    <div className="flex justify-between flex-row items-center bg-[#1E2B46] lg:px-18 lg:py-8 md:px-15 md:py-6 px-15 sm:py-4">
        <span className="font-bold text-4xl text-white font-logo">RiftScholar</span>
        <ul className="flex flex-row lg:gap-20 md:gap-12 sm:gap-8 ">
            <li><a href="#" className="block py-2 hover:text-[#2FD4FF]">Game Knowledge</a></li>
            <li className="relative group">
                <a href="#" className="py-2 block hover:text-[#2FD4FF]">Champion</a>
                <div className="absolute bg-[#0D1221] rounded-lg hidden group-hover:block">
                   <a href="#" className="w-56 block py-2 px-1 hover:text-[#2FD4FF]">Build</a>
                   <a href="#" className="w-56 block py-2 px-1 hover:text-[#2FD4FF]">Guide</a>
                   <a href="#" className="w-56 block py-2 px-1 hover:text-[#2FD4FF]">Counter</a>
                </div>
            </li>
            <li><a href="#" className="py-2 block hover:text-[#2FD4FF]">Items</a></li>
        </ul>
        <input className="w-5/12 md:w-3/12 sm:w-2/12 bg-[#121A2A] rounded-xl px-5 py-1" placeholder="🔍︎ Search"></input>
    </div>
    )
}

export default Navbar;