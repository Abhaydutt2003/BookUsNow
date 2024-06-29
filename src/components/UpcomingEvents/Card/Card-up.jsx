/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { formatDate, getRandomImage } from "../../../util";
import { FaLocationDot } from "react-icons/fa6";
import "./style.scss";

const Card = ({ event, last, page, setPage }) => {
  const formattedDate = formatDate(event.date);
  const imgUrl = getRandomImage();
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (page <= 4 && last) {
              setPage(page + 1);
            }
            console.log("visible");
            const ele = entry.target;
            const src = ele.getAttribute("data-background-src");
            ele.style.backgroundImage = `url(${src})`;
            observer.unobserve(ele); // Stop observing the current element
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(element);

    // Cleanup function
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div className="card-up">
      <div
        className="imageHolder"
        ref={elementRef}
        data-background-src={imgUrl}
      >
        <span className="date">{formattedDate}</span>
      </div>
      <div className="card-up-text">
        <span className="eventName">{event.eventName}</span>
        <div className="lower">
          <span className="location">
            <FaLocationDot />
            {event.cityName}
          </span>
          <div className="weather-distance">
            <span>{event.weather}</span>|
            <span>{event.distanceKm.substring(0, 3)} Km</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
