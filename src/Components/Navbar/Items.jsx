import item from "../../item-img/40px-Doran's_Ring_item.png"
import {useState, useRef, useEffect} from "react";

function Items() {

    const [position, setPosition] = useState({x: 0, y: 0});
    const [show, setShow] = useState(false);
    const itemRef = useRef(null);
    const [tableDimension, setTableDimension] = useState({width: 0, height: 0});
    let top = position.y + 15;
    let left = position.x + 15;

    useEffect(() => {
        if (show && itemRef.current) {
            const tableDim = itemRef.current.getBoundingClientRect();
            const width = tableDim.width;
            const height = tableDim.height;
            setTableDimension({width, height});
        }
    }, [show])

    if (top + tableDimension.height > window.innerHeight){
        top = position.y - 15 - tableDimension.height;
    }

    if (left + tableDimension.width > window.innerWidth) {
        left = position.x - 15 - tableDimension.width;
    }

    return(
        <div className="flex flex-wrap gap-10">
            <div className="w-25 px-2 pb-3">
                <img src={item} className="w-[100%] rounded-full mb-3" 
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
                onMouseMove={(e) => setPosition({x: e.clientX, y: e.clientY})}
                />
                <p className="text-sm text-center">Item's name</p>
                {show &&
                <div className="fixed bg-black px-5 py-5"
                style={{top, left}}
                ref={itemRef}
                > {/* Description */}
                    Hello World
                </div>
                }
            </div>
            
        </div>
    )
}

export default Items