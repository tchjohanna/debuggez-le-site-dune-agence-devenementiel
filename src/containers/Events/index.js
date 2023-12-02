import { useState } from "react";
import EventCard from "../../components/EventCard";
import Select from "../../components/Select";
import { useData } from "../../contexts/DataContext";
import Modal from "../Modal";
import ModalEvent from "../ModalEvent";

import "./style.css";

const PER_PAGE = 9;

const EventList = () => {
  const { data, error } = useData();
  const [type, setType] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => setCurrentPage(page);
  const handleChangeType = (evtType) => {
    setCurrentPage(1);
    setType(evtType);
  };

  const filteredEvents = data?.events
    .filter(event => !type || event.type === type)
    .slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE)
    .sort((a, b) => new Date(a.date) - new Date(b.date)) || [];

  const totalPages = Math.ceil((data?.events.length || 0) / PER_PAGE);
  const typeList = new Set(data?.events.map(event => event.type));

  return (
    <>
      {error && <div>An error occurred</div>}
      {!data ? (
        <div>Loading...</div>
      ) : (
        <>
          <h3 className="SelectTitle">Catégories</h3>
          <Select
            selection={Array.from(typeList)}
            onChange={handleChangeType}
          />
          <div id="events" className="ListContainer">
            {filteredEvents.map(event => (
              <Modal key={event.id} Content={<ModalEvent event={event} />}>
                {({ setIsOpened }) => (
                  <EventCard
                    onClick={() => setIsOpened(true)}
                    imageSrc={event.cover}
                    title={event.title}
                    date={new Date(event.date)}
                    label={event.type}
                  />
                )}
              </Modal>
            ))}
          </div>
          <div className="Pagination">
            {[...Array(totalPages)].map((_, n) => (
              <a 
                key={n} 
                href="#events" 
                onClick={() => handlePageChange(n + 1)}
              >
                {n + 1}
              </a>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default EventList;