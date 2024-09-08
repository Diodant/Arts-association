import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../images/logo.png';

function Navigation() {
  return (
   <div className="xNavi" id="xNaviID">
     <div className="columns is-flex-wfix is-vcentered">

       <div className="column xNaviMenu">
         <ul>
         <img src={LogoImg} alt="Логотип" className="xNaviLogo"/>
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
               <Link to="/order" title='Орден "Почетный деятель искусств"'>Орден "Почетный деятель искусств"</Link>
               </li>
               <li>
               <Link to="/membersoforder" title="Кавалеры ордена «Заслуженный деятель искусств»">Кавалеры ордена «Почетный деятель искусств»</Link>
               </li>
               <li>
               <Link to="/positionoforder" title='Положение о награждении Орденом "Почетный деятель искусств"'>Положение о награждении Орденом "Почетный деятель искусств"</Link>
               </li>
             </ul>
           </li>
	 	  <li>
     <Link to="/articles" title="Новости">Новости</Link>
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
