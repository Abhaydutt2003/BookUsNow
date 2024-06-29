import { useLoaderData } from "react-router-dom";
import "./style.scss";
import Card from "./Card/Card";
import { FaArrowRight } from "react-icons/fa";

const HorizontalScroll = () => {
  const { response } = useLoaderData();
  return (
    <>
      <div className="text-scroll">
        <div className="recshows">
          <span>Recommended shows</span>
          <FaArrowRight></FaArrowRight>
        </div>
        <span className="seeall">See all</span>
      </div>
      <div className="hscroll noScrollBar">
        {response.data.events.map((event, index) => {
          return <Card event={event} key={index}></Card>;
        })}
      </div>
    </>
  );
};

export default HorizontalScroll;
