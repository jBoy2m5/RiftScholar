import {
  PrecisionComponent,
  ResolveComponent,
  DominationComponent,
  SorceryComponent,
} from "./Rune.jsx";

function Build(props) {
  let mainPath, secondaryPath;
  switch (props.mainRune) {
    case "Precision":
      mainPath = (
        <PrecisionComponent
          lane1={props.lanemain1}
          lane2={props.lanemain2}
          lane3={props.lanemain3}
          lane4={props.lanemain4}
          isMainPath={true}
        />
      );
  }

  switch (props.secondaryRune) {
    case "Resolve":
      secondaryPath = (
        <ResolveComponent
          lane2={props.lane2}
          lane3={props.lane3}
          lane4={props.lane4}
          p1={props.p1}
          p2={props.p2}
          p3={props.p3}
        />
      );
  }

  return (
    <>
      <span className="font-semibold">RUNES</span>
      <div className="flex mt-8 justify-between">
        {mainPath}
        {secondaryPath}
      </div>
    </>
  );
}

export default Build;
