import {useState, useRef, useEffect} from "react";
import {data} from "./Test/Data.jsx";

function Test() { 
    const [position, setPosition] = useState({x: 0, y: 0})
    const [show, setShow] = useState(false);
    const [tableDimension, setTableDimension] = useState({width: 0, height: 0});
    const stateRef = useRef(null);

    useEffect(() => {
        if (show && stateRef.current) {
            const width = stateRef.current.getBoundingClientRect().width;
            const height = stateRef.current.getBoundingClientRect().height;
            setTableDimension({width, height})
        }

    }, [show])

    let left = position.x + 15;
    let top = position.y + 15;

    if (left + tableDimension.width > window.innerWidth) {
        left = position.x - tableDimension.width - 15;
    } 

    if (top + tableDimension.height > window.innerHeight) {
        top = position.y - tableDimension.height - 15;
    }

    return (
        <div className="group">
            <button className="px-5 py-10 bg-[#00f]" 
            onMouseMove={(e) => setPosition({x: e.clientX, y: e.clientY})}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            >Hover Me</button>

            
            {show &&
            <div className="px-5 py-10 bg-black fixed"
            style={{ left, top }}
            ref={stateRef}
            >
                The table showned
            </div>
}
        </div>
    )
}

export default Test;