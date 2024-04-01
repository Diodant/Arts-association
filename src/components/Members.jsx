import React, { useState } from 'react';
import { expertsData } from './membersData';
import { Helmet } from 'react-helmet-async';

function Members() {
  const itemsPerPage = 50;
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = expertsData.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(expertsData.length / itemsPerPage);

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


    return (
      <div>
            <Helmet>
        <title>Список членов Ассоциации</title>
        <meta
        name="description"
        content="Список членов Международной Ассоциации Маркетологов СНГ"
        />
        <link rel="canonical" href="https://marketing-association.com/members" />
      </Helmet>
      <div className="members-content">
        <div className="content-blur"></div>
        <div className="content-overlay">
          <h1 className="main-title">Члены Международной Ассоциации</h1>
          <h1 className="main-title">Деятелей Искусств</h1>
        </div>
      </div>
      <div className="xContent p-box py-6">
      <div className='xContent-wrapper'>
        <h1 className="title">Список членов Ассоциации:</h1>
        </div>
        <div className="expertsTable">
        <table>
          <thead>
            <tr>
              <th>№ Сертификата</th>
              <th>ФИО</th>
              <th>Страна</th>
              <th>Профессия</th>
              <th>Год вступления</th>
            </tr>
          </thead>
          <tbody>
          {currentItems.map(expert => (
              <tr key={expert.id}>
                <td>{expert.id}</td>
                <td>{expert.name}</td>
                <td>{expert.country}</td>
                <td>{expert.description}</td>
                <td>{expert.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      <div className="pagination">
        {pages.map(page => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            disabled={currentPage === page}
          >
            {page}
          </button>
        ))}
      </div>
      </div>
    </div>
  );
}

  export default Members;
