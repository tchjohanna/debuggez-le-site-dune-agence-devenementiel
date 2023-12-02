import React from 'react';
import PropTypes from 'prop-types';
import { getMonth } from '../../helpers/Date';
import './style.scss';

const EventCard = ({ imageSrc, imageAlt = 'image', date = new Date(), title, label, small = false, ...props }) => {
  const cardClass = `EventCard${small ? ' EventCard--small' : ''}`;
  const month = getMonth(date);

  return (
    <div data-testid="card-testid" className={cardClass} {...props}>
      <ImageContainer src={imageSrc} alt={imageAlt} label={label} />
      <DescriptionContainer title={title} month={month} />
    </div>
  );
};

const ImageContainer = ({ src, alt, label }) => (
  <div className="EventCard__imageContainer">
    <img data-testid="card-image-testid" src={src} alt={alt} />
    <div className="EventCard__label">{label}</div>
  </div>
);

const DescriptionContainer = ({ title, month }) => (
  <div className="EventCard__descriptionContainer">
    <div className="EventCard__title">{title}</div>
    <div className="EventCard__month">{month}</div>
  </div>
);

EventCard.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  date: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string,
  small: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

EventCard.defaultProps = {
  imageAlt: 'image',
  small: false,
};

export default EventCard;
