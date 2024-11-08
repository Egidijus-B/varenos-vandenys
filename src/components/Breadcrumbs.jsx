import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const pathMapping = {
  'about-us': 'About Us',
  'contact': 'Contact',
  'services': 'Services',
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-container">
      <ul className="flex items-center space-x-2">
        {/* Only show "Home" if we're not on the homepage */}
        {pathnames.length > 0 && (
          <li>
            <Link to="/" className="breadcrumb-link">Home</Link>
          </li>
        )}
        {pathnames.map((path, index) => {
          const linkTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const breadcrumbName = pathMapping[path] || path.charAt(0).toUpperCase() + path.slice(1);

          return (
            <li key={index} className="flex items-center">
              {/* Use a separator only for items that aren't the last item */}
              {index !== 0 && <span className="text-gray-500"> / </span>}
              <Link to={linkTo} className="breadcrumb-link">
                {breadcrumbName}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;

  