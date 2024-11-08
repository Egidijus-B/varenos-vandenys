import React from 'react';
import NewsCard from './newsCard'; // Make sure this path is correct

const NewsSection = () => {
  const newsData = [
    {
      title: 'News Title 1',
      date: 'October 8, 2024',
      description: 'This is a short description of news item 1.',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'News Title 2',
      date: 'October 9, 2024',
      description: 'This is a short description of news item 2.',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'News Title 2',
      date: 'October 9, 2024',
      description: 'This is a short description of news item 2.',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <section className="w-full py-10 md:py-10 lg:py-10 mx-auto">
      <div className="px-4 md:px-10 lg:px-14 max-w-[1320px] mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Naujienos</h2>

        <div className="flex flex-wrap md:grid md:grid-cols-3 gap-6">
          {newsData.length > 0 ? (
            newsData.map((news, index) => (
              <NewsCard
                key={index}
                title={news.title}
                date={news.date}
                description={news.description}
                image={news.image}
              />
            ))
          ) : (
            <p className="text-center text-gray-600">Nėra naujienų.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;









