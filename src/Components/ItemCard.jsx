
import item from "../item-img/40px-Doran's_Ring_item.png"
import item1 from "../item-img/40px-Hubris_item.png"
import {useState, useRef, useEffect} from "react";
import gold_icon from "../assets/20px-Gold_colored_icon.png"

function ItemCard() {

    const [position, setPosition] = useState({x: 0, y: 0});
    const [hoveredItemId, setHoveredItemId] = useState(null);
    const itemRef = useRef(null);
    const [tableDimension, setTableDimension] = useState({width: 0, height: 0});
    let top = position.y + 15;
    let left = position.x + 15;

    useEffect(() => {
        console.log("HHHHH");
        if (hoveredItemId && itemRef.current) {
            const tableDim = itemRef.current.getBoundingClientRect();
            const width = tableDim.width;
            const height = tableDim.height;
            setTableDimension({width, height});
            console.log("Hello")
        }
    }, [hoveredItemId])

    if (top + tableDimension.height > window.innerHeight){
        top = position.y - 15 - tableDimension.height;
    }

    if (left + tableDimension.width > window.innerWidth) {
        left = position.x - 15 - tableDimension.width;
    }

    const items = [{
        id: 0,
        itemImg: item, 
        itemName: "Doran's Ring",
        cost: 400, 
        attribute: [["+18 ", "Ability Power"], ["+90 ", "Health"]],
        description: [["Unique – Drain: ", "Restore 1 mana every second. Dealing damage to an enemy champion increases the restoration to 2 mana for the next 5 seconds. If you cannot gain mana, heal for 45% of the value instead."],
    ["Unique – Helping Hand: ", "Basic attacks deal 5 bonus physical damage on-hit against minions."]]
    }, {
        id: 1,
        itemImg: item1, 
        itemName: "Hubris",
        cost: 3000, 
        attribute: [["+60 ", "Attack Damage"], ["+10 ", "Ability Haste"], ["+18 ", "Lethality"]],
        description: [["Unique – Eminence: ", "Scoring a Damage rating takedown against an enemy champion within 3 seconds of damaging them generates a permanent stack and grants you 15 (+ 2 per stack) bonus attack damage for 90 seconds."]],
    },]

    return(
        <div className="flex flex-wrap gap-10">

            {items.map((item) => (
                <div className="w-25 px-2 pb-3">
                <img src={item.itemImg} className="w-[100%] rounded-full mb-3" 
                onMouseEnter={() => {setHoveredItemId(item.id); console.log(hoveredItemId); console.log(itemRef.current)}}
                onMouseLeave={() => setHoveredItemId(null)}
                onMouseMove={(e) => setPosition({x: e.clientX, y: e.clientY})}
                />
                <p className="text-sm text-center">{item.itemName}</p>
                {hoveredItemId === item.id &&
                <div className="fixed bg-black px-5 py-5 flex gap-5 w-120"
                style={{top, left}}
                ref={itemRef}
                > {/* Item box */}
                    <img src={item.itemImg} className="w-18 rounded-full mb-3 h-18 " /> {/* Icon img */}
                    <div className="w-8/10"> {/* description */}
                        <div className="pb-3 border-b border-[#F2D18B] mb-3">
                            <h1 className="w-[100%] font-bold text-xl break-word">{item.itemName}</h1>
                            <div className="flex gap-2">
                                <img src={gold_icon} />
                                <span>{item.cost}</span>
                            </div>
                        </div>
                        <div className="pb-3 border-b border-[#F2D18B] mb-3">
                            {item.attribute.map((attribute) => (
                                <p className="mb-2">
                                    <span>{attribute[0]}</span>
                                    <span className="text-[#7F8AA3]">{attribute[1]}</span>
                                </p>
                            ))}
                        </div>
                        <div className="pb-3">
                            {item.description.map((des) => (
                                <p className="mb-2">
                                    <span>{des[0]}</span>
                                    <span className="text-[#7F8AA3]">{des[1]}</span>
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                }
            </div>
            ))}

            

            
            
        </div>
    )
}

export default ItemCard