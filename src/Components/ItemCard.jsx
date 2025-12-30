import { useState, useRef, useEffect } from "react";
import gold_icon from "../assets/20px-Gold_colored_icon.png";
import {ItemTrait} from "./ItemTrait"

function ItemCard() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const itemRef = useRef(null);
  const [tableDimension, setTableDimension] = useState({ width: 0, height: 0 });
  let top = position.y + 15;
  let left = position.x + 15;

  useEffect(() => {
    console.log("HHHHH");
    if (hoveredItemId && itemRef.current) {
      const tableDim = itemRef.current.getBoundingClientRect();
      const width = tableDim.width;
      const height = tableDim.height;
      setTableDimension({ width, height });
      console.log("Hello");
    }
  }, [hoveredItemId]);

  if (top + tableDimension.height > window.innerHeight) {
    top = position.y - 15 - tableDimension.height;
  }

  if (left + tableDimension.width > window.innerWidth) {
    left = position.x - 15 - tableDimension.width;
  }


  return (
    <div className="flex flex-wrap gap-10">
      {ItemTrait.map((item) => (
        <div className="w-25 px-2 pb-3">
          <img
            src={item.itemImg}
            className="w-[100%] rounded-full mb-3"
            onMouseEnter={() => {
              setHoveredItemId(item.id);
              console.log(hoveredItemId);
              console.log(itemRef.current);
            }}
            onMouseLeave={() => setHoveredItemId(null)}
            onMouseMove={(e) => setPosition({ x: e.clientX, y: e.clientY })}
          />
          <p className="text-sm text-center">{item.itemName}</p>
          {hoveredItemId === item.id && (
            <div
              className="fixed bg-black px-5 py-5 flex gap-5 w-120"
              style={{ top, left }}
              ref={itemRef}
            >
              {/* Item box */}
              <img
                src={item.itemImg}
                className="w-18 rounded-full mb-3 h-18 "
              />{" "}
              {/* Icon img */}
              <div className="w-8/10">
                {" "}
                {/* description */}
                <div className="pb-3 border-b border-[#F2D18B] mb-3">
                  <h1 className="w-[100%] font-bold text-xl break-word">
                    {item.itemName}
                  </h1>
                  <div className="flex gap-2">
                    <img src={gold_icon} />
                    <span>{item.cost}</span>
                  </div>
                </div>
                {
                item.attribute[0] && <div className={`pb-3 border-[#F2D18B] mb-3 ${item.description[0] && "border-b"}`}>
                  {item.attribute.map((attribute) => (
                    <p className="mb-2">
                      <span>{attribute[0]}</span>
                      <span className="text-[#7F8AA3]">{attribute[1]}</span>
                    </p>
                  ))}
                </div>
                }{ item.description[0] &&
                <div className="pb-3">
                  {item.description.map((des) => (
                    <p className="mb-2">
                      <span>{des[0]}</span>
                      <span className="text-[#7F8AA3]">{des[1]}</span>
                    </p>
                  ))}
                </div>
              }
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ItemCard;
