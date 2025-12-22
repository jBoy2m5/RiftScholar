import item from "../../item-img/40px-Doran's_Ring_item.png"

function ItemCard() {
    
}

function Items() {
    return(
        <div className="flex flex-wrap gap-10">
            <div className="w-25 px-2 pb-3">
                <img src={item} className="w-[100%] rounded-full mb-3" />
                <p className="text-sm text-center">Item's name</p>
                
            </div>
            <div className="w-25 bg-black px-2 pb-3">
                <img src={item} className="w-[100%] rounded-full" />
                <p className="text-sm break-all text-center">Item's namesfpfdsfdsdfssddfsds</p>
            </div>
            <div className="w-25 bg-black px-2 pb-3">
                <img src={item} className="w-[100%] rounded-full" />
                <p className="text-sm">Item's name</p>
            </div>
            <div className="w-25 bg-black px-2 pb-3">
                <img src={item} className="w-[100%] rounded-full" />
                <p className="text-sm">Item's name</p>
            </div>
            <div className="w-25 bg-black px-2 pb-3">
                <img src={item} className="w-[100%] rounded-full" />
                <p className="text-sm">Item's name</p>
            </div>
            <div className="w-25 bg-black px-2 pb-3">
                <img src={item} className="w-[100%] rounded-full" />
                <p className="text-sm">Item's name</p>
            </div>
            <div className="w-25 bg-black px-2 pb-3">
                <img src={item} className="w-[100%] rounded-full" />
                <p className="text-sm">Item's name</p>
            </div>
            <div className="w-25 bg-black px-2 pb-3">
                <img src={item} className="w-[100%] rounded-full" />
                <p className="text-sm">Item's name</p>
            </div>
            <div className="w-25 bg-black px-2 pb-3">
                <img src={item} className="w-[100%] rounded-full" />
                <p className="text-sm">Item's name</p>
            </div>
            <div className="w-25 bg-black px-2 pb-3">
                <img src={item} className="w-[100%] rounded-full" />
                <p className="text-sm">Item's name</p>
            </div>
        </div>
    )
}

export default Items