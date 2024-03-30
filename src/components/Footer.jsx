import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
      <footer className="footer">
        <div className="footer-section">
          <h4 className="fs">Об Ассоциации</h4>
          <Link to="/about-us">О нас</Link>
          <Link to="/membersBA">Члены правления Ассоциации</Link>
        </div>
        <div className="footer-section">
          <h4 className="fs">Члены Ассоциации</h4>
          <Link to="/geography">География</Link>
          <Link to="/members">Список членов Ассоциации</Link>
        </div>
        <div className="footer-section">
          <h4 className="fs">Документы</h4>
          <Link to="/statute">Устав</Link>
          <Link to="/ethicscodex">Этический кодекс члена Ассоциации</Link>
        </div>
        <div className="footer-section">
          <h4 className="fs">Награды</h4>
          <Link to="/order">Орден “За заслуги в маркетинге”</Link>
          <Link to="/membersoforder">Кавалеры ордена «За заслуги в маркетинге»</Link>
        </div>
        <div className="footer-section">
          <h4 className="fs">Публикации</h4>
          <Link to="/articles">Статьи</Link>
          <Link to="/reviews">Рецензии</Link>
        </div>
        <div className="footer-section">
          <h4 className="fs">Контакты</h4>
          <Link to="/contacts">Контакты</Link>
        </div>
      </footer>
    );
  }

  export default Footer;
