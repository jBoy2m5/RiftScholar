import { Link } from "react-router-dom"


function ChampionCard(props) {
    return(
        <Link to={props.to}>
        <div className="bg-[#0D1221] h-75 w-75 px-3 py-3 flex flex-col items-center border border-[rgba(230,234,242,0.16)] hover:border-[#F2D18B] ">
          <div className="w-10/10 mb-5 flex flex-row justify-between">
            <div className="flex gap-1 w-1/2">
              {props.lane1 && <img src={props.lane1} className="w-[20%] " />}
              {props.lane2 && <img src={props.lane2} className="w-[20%] " />}
              {props.lane3 && <img src={props.lane3} className="w-[20%] " />}
              {props.lane4 && <img src={props.lane4} className="w-[20%] " />}
            </div>

            <div className="flex gap-1 w-1/2 justify-end">
              {props.class1 && <img src={props.class1} className="w-[20%]" />}
              {props.class2 && <img src={props.class2} className="w-[20%]" />}
              {props.class3 && <img src={props.class3} className="w-[20%]" />}
              {props.class4 && <img src={props.class4} className="w-[20%]" />}
            </div>
          </div>
          <img src={props.champimg} alt="aatrox" className="w-4/10 mb-6" />
          <span className="font-extrabold text-3xl font-roboto mb-2">{props.name}</span>
          <span className="text-[#7F8AA3]">{props.description}</span>
        </div>
      </Link>
    )
}

export default ChampionCard