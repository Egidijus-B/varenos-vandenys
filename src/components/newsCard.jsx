import React from 'react';
import PropTypes from 'prop-types'; // Ensure PropTypes is imported

const NewsCard = ({ title, date, description, image }) => {
  return (
    <div style={{ paddingLeft: '2rem', paddingRight: '2rem', paddingBottom: '2rem', paddingTop: '2rem' }}>
      <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden mb-4 w-full h-auto">
        {/* Image or video thumbnail */}
        <div className="w-full md:w-/3 h-auto">
          <img
            src={image}
            alt="News Thumbnail"
            className="w-full h-[150px] md:h-[250px] object-cover" // Reduced height on desktop
          />
        </div>
        {/* Content section */}
        <div className="w-full md:w-2/3 p-2 md:p-3 flex flex-col justify-between"> {/* Reduced padding */}
          <div className="text-right text-gray-600 text-sm">{date}</div>
          <h2 className="text-lg font-bold my-1 truncate text-blue-500">{title}</h2>
          <p className="text-gray-700 text-sm truncate">{description}</p>
          <div className="flex justify-end mt-auto">
            <button className="bg-blue-500 text-white px-4 py-1 md:py-2 rounded hover:bg-blue-600 text-xs mt-2">
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






  





