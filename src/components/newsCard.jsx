import React from 'react';
import PropTypes from 'prop-types';
import thumb from '../assets/thumb.jpeg';

const NewsCard = ({ title, date, description, image }) => {
  return (
    <div className="w-full">
      <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col h-full">
        <div className="w-full h-auto">
          <img
            src={thumb}
            alt="News Thumbnail"
            className="w-full h-[200px] md:h-[250px] object-cover"
          />
        </div>

        <div className="p-4 flex flex-col flex-grow justify-between">
          <div className="text-gray-600 text-sm mb-2">{date}</div>
          <h2 className="text-lg font-bold my-1 text-blue-500">{title}</h2>
          <p className="text-gray-700 text-sm mb-4 line-clamp-2">{description}</p>

          <div className="flex justify-end">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-xs">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default NewsCard;









  





