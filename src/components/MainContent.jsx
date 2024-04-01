import React from 'react';
import News from './News';
import OrderImg from '../images/order.png'
import ArrowImg from '../images/arrow.svg'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function MainContent() {
  return (
    <div>
              <Helmet>
        <title>Международная Ассоциация Деятелей Искусств</title>
        <meta property="og:type" content="website"/>
    <meta property="og:title" content="Международная Ассоциация Деятелей Искусств"/>
    <meta property="og:description" content="Международная Ассоциация Деятелей Искусств является организацией, объединяющей выдающихся профессионалов в области искусства."/>
    <meta property="og:url" content="https://marketing-association.com/"/>
    <meta property="og:image" content="../../public/preview.png"/>
    <link rel="icon" href="../../public/logo.png" />
    <link rel="shortcut icon" href="../../public/logo.png" />
        <meta
        name="description"
        content="Международная Ассоциация Деятелей Искусств является организацией, объединяющей выдающихся профессионалов в области искусства."
        />

        <link rel="canonical" href="https://marketing-association.com/" />
      </Helmet>
            <div className="main-content">
        <div className="content-blur"></div>
        <div className="content-overlay">
          <h1 className="main-title">Международная Ассоциация</h1>
          <h1 className="main-title">Деятелей Искусств</h1>
          <h2 className="main-subtitle">Вдохновляем мир через искусство</h2>
          <div className='join-button-wrapper'>
          <Link to="/about-us" className="join-button">ВСТУПИТЬ</Link>
          </div>
        </div>
      </div>
    <div className='xContent py-6'>
      <div className='xContent-wrapper'>
      <div className="content">
      <div className="title">О Международной Ассоциации Деятелей Искусств</div>
      <p className='has-text-centered'>Международная Ассоциация Деятелей Искусств является организацией, объединяющей выдающихся профессионалов в области искусства.</p>
      <p>В Ассоциацию Деятелей Искусств входят представители таких творческих профессий как:</p>
      <ul className="content-details-list">
          <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text"><b>Музыканты</b> – инструменталисты и вокалисты всех жанров.</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text"><b>Композиторы</b> – авторы музыкальных произведений.</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text"><b>Актеры</b> – артисты театра, кино и телевидения.</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text"><b>Танцоры</b> – исполнители балета, народного, современного и уличного танца.</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text"><b>Художники</b> – живописцы, графики, скульпторы и представители других направлений изобразительного искусства.</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" /></span>
            <span className="content-text"><b>Писатели и поэты</b> – авторы литературных произведений.</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" /></span>
          <span className="content-text"><b>Режиссеры</b> – создатели театральных, кинематографических и других видов сценических произведений.</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text"><b>Сценаристы</b> – писатели, работающие над созданием сценариев для театра и кино.</span></li>
        </ul>
        <div className='join-button-wrapper'>
          <Link to="/about-us" className="join-button">Больше о нас</Link>
          </div>
      </div>
      <News />
    </div>
    <div className='main-card flex-container'>
        <div>
        <div className='title has-text-centered'>ОРДЕН «ЗА ЗАСЛУГИ В МАРКЕТИНГЕ»</div>
        <div className='main-card-text has-text-centered' >Орден "За заслуги в маркетинге" вручается выдающимся маркетологам за личные высокие достижения, которые оказали значительное влияние на рост и развитие маркетинговой отрасли в своих странах и за её пределами.</div>
        <div className="block button-content">
        <Link to={{
          pathname: "/order",
          state: { scrollToTop: true }
        }} className="is-more-w">
          <span>Перейти</span>
        </Link>
        </div>
        </div>
        <div className='card-img'><img src={OrderImg} alt="Order" /></div>
      </div>
      </div>
    </div>
  );
}

export default MainContent;
