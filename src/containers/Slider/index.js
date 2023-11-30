import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const [sortedEvents, setSortedEvents] = useState([]);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (data?.focus) {
      const sorted = [...data.focus].sort((evtA, evtB) =>
        new Date(evtA.date) > new Date(evtB.date) ? -1 : 1
      );
      setSortedEvents(sorted);
    }
  }, [data?.focus]);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex < sortedEvents.length - 1 ? prevIndex + 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, sortedEvents.length]);

  return (
    <div className="SlideCardList">
      <div className="SliderControl">
        {isPlaying ? (
          <FaPauseCircle className="icon" onClick={() => setIsPlaying(false)} />
        ) : (
          <FaPlayCircle className="icon" onClick={() => setIsPlaying(true)} />
        )}
      </div>
      {sortedEvents.map((event, idx) => (
        <div
          key={event.id || idx}
          className={`SlideCard SlideCard--${index === idx ? "display" : "hide"}`}
        >
          <img src={event.cover} alt="forum" />
          <div className="SlideCard__descriptionContainer">
            <div className="SlideCard__description">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div>{getMonth(new Date(event.date))}</div>
            </div>
          </div>
        </div>
      ))}
      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {sortedEvents.map((_, radioIdx) => (
            <input
              key={`radio-${radioIdx}`}
              type="radio"
              name="radio-button"
              checked={index === radioIdx}
              readOnly
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
