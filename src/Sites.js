import Card from "./Card";
import { Chevron_Right, Chevron_Left } from "react-icons/ai";
const Sites = () => {
  return (
    <div className="Sites">
      <div>
        <h3>연관사이트</h3>
      </div>
      <div className="mid">
        <div>
          <Chevron_Right />
        </div>
        <Card name={"1"} />
        <Card name={"2"} />
        <Card name={"3"} />
        {/* <Card name={"4"} />
        <Card name={"5"} />
        <Card name={"6"} />
        <Card name={"7"} />
        <Card name={"8"} />
        <Card name={"9"} />
        <Card name={"10"} />
        <Card name={"11"} /> */}
        <div>
          <Chevron_Left />
        </div>
      </div>
    </div>
  );
};
export default Sites;
