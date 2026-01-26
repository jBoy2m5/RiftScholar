import {
  PrecisionComponent,
  ResolveComponent,
  DominationComponent,
  SorceryComponent,
  InspirationComponent
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
    break;
    
    case "Resolve":
      mainPath = (
        <ResolveComponent
          lane1={props.lanemain1}
          lane2={props.lanemain2}
          lane3={props.lanemain3}
          lane4={props.lanemain4}
          isMainPath={true}
        />
      );
      break;

    case "Domination":
      mainPath = (
        <DominationComponent
          lane1={props.lanemain1}
          lane2={props.lanemain2}
          lane3={props.lanemain3}
          lane4={props.lanemain4}
          isMainPath={true}
        />
      );
      break;

      case "Sorcery":
      mainPath = (
        <SorceryComponent
          lane1={props.lanemain1}
          lane2={props.lanemain2}
          lane3={props.lanemain3}
          lane4={props.lanemain4}
          isMainPath={true}
        />
      );
      break;

      case "Inspiration":
      mainPath = (
        <InspirationComponent
          lane1={props.lanemain1}
          lane2={props.lanemain2}
          lane3={props.lanemain3}
          lane4={props.lanemain4}
          isMainPath={true}
        />
      );
      break;
      
  }

  switch (props.secondaryRune) {
    case "Precision":
      secondaryPath = (
        <PrecisionComponent
          lane2={props.lane2}
          lane3={props.lane3}
          lane4={props.lane4}
          p1={props.p1}
          p2={props.p2}
          p3={props.p3}
        />
      );
      break;

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
      break;

    case "Domination":
      secondaryPath = (
        <DominationComponent
          lane2={props.lane2}
          lane3={props.lane3}
          lane4={props.lane4}
          p1={props.p1}
          p2={props.p2}
          p3={props.p3}
        />
      );
      break;

    case "Sorcery":
      secondaryPath = (
        <SorceryComponent
          lane2={props.lane2}
          lane3={props.lane3}
          lane4={props.lane4}
          p1={props.p1}
          p2={props.p2}
          p3={props.p3}
        />
      );
      break;

    case "Inspiration":
      secondaryPath = (
        <InspirationComponent
          lane2={props.lane2}
          lane3={props.lane3}
          lane4={props.lane4}
          p1={props.p1}
          p2={props.p2}
          p3={props.p3}
        />
      );
      break;


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
