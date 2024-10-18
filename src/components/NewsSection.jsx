import React from 'react';
import NewsCard from './newsCard'; // Ensure this path is correct

const NewsSection = () => {
  // Sample data for demonstration
  const newsData = [
    {
      title: 'News Title 1',
      date: 'October 8, 2024',
      description: 'This is a short description of news item 1.',
      image: 'https://via.placeholder.com/150', // Example placeholder image
    },
  ];

  return (
    <section className="w-full">
      <div className="px-4 md:px-32 lg:px-32"> {/* Adjusted padding for mobile and larger screens */}

        {/* News Title */}
        <h2 className="text-3xl font-bold text-center mb-8">Naujienos</h2> 

        {newsData.map((news, index) => (
          <NewsCard
            key={index}
            title={news.title}
            date={news.date}
            description={news.description}
            image={news.image} // Ensure this is a valid path
          />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;




