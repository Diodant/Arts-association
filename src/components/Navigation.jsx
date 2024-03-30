import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
   <div className="xNavi" id="xNaviID">
     <div className="columns is-flex-wfix is-vcentered">
       <div className="column xNaviMenu">
         <ul>
         <li>
           <Link to="/" title="Главная">Главная</Link>
           </li>
           <li>
           <Link to="/about-us" title="Об Ассоциации">Об Ассоциации</Link>
             <ul>
               <li>
	 		<Link to="/about-us" title="О нас">О нас</Link>
               </li>
               <li>
	 		<Link to="/membersBA" title="Члены правления Ассоциации">Члены правления Ассоциации</Link>
	 		</li>
             </ul>
           </li>
           <li>
           <Link to="/members" title="Члены Ассоциации">Члены Ассоциации</Link>
             <ul>
               <li>
               <Link to="/geography" title="География">География</Link>
               </li>
               <li>
               <Link to="/members" title="Список членов Ассоциации">Список членов Ассоциации</Link>
               </li>
             </ul>
           </li>
           <li>
           <Link to="/statute" title="Документы">Документы</Link>
             <ul>
               <li>
               <Link to="/statute" title="Устав">Устав</Link>
               </li>
               <li>
               <Link to="/ethicscodex" title="Этический кодекс члена Ассоциации">Этический кодекс члена Ассоциации</Link>
               </li>
             </ul>
           </li>
           <li>
           <Link to="/order" title="Награды">Награды</Link>
             <ul>
               <li>
               <Link to="/order" title="Орден “За заслуги в маркетинге”">Орден “За заслуги в маркетинге”</Link>
               </li>
               <li>
               <Link to="/membersoforder" title="Кавалеры ордена «За заслуги в маркетинге»">Кавалеры ордена «За заслуги в маркетинге»</Link>
               </li>
             </ul>
           </li>
	 	  <li>
     <Link to="/articles" title="Публикации">Публикации</Link>
             <ul>
               <li>
               <Link to="/articles" title="Статьи">Статьи</Link>
               </li>
               <li>
               <Link to="/reviews" title="Рецензии">Рецензии</Link>
               </li>
             </ul>
           </li>
           <li>
           <Link to="/contacts" title="Контакты">Контакты</Link>
           </li>
         </ul>
       </div>
     </div>
   </div>
  );
}

export default Navigation;

<nav className="menu">
  <div className="logo">
    <img src="path-to-your-logo.png" alt="Logo" />
  </div>
  <ul className="navigation">
    <li className="nav-item">
      <a href="/" className="nav-link">Главная</a>
    </li>
    <li className="nav-item">
      <a href="/about" className="nav-link">Об ассоциации</a>
      <div className="dropdown-content">
        <a href="/about#more-info">Подробная информация</a>
        <a href="/about#structure">Структура</a>
        <a href="/about#join">Вступить</a>
      </div>
    </li>
  </ul>
</nav>
