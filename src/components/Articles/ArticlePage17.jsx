import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';
import ArrowImg from '../../images/arrow.svg'

function ArticlePage17() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
      <div className="xContent p-box py-6">
        <Helmet>
        <title>Подведены итоги Международного конкурса творческих работ звукорежиссеров 2022</title>
        <meta
        name="description"
        content='С 14 февраля по 31 марта под эгидой Международной Ассоциации Деятелей Искусств проводился Международный конкурс творческих работ звукорежиссеров, в котором приняло участие более 300 профессиональных звукорежиссеров со всего мира.'
        />
        <link rel="canonical" href="https://arts-association.com/article17"/>
      </Helmet>

      <div className='xContent-wrapper'>
      <div className="content p-20">
      <p className='has-text-left wysiwyg'>2 апреля 2022 год</p>
      <p className='has-text-left wysiwyg p-1'>Автор статьи: Иван Радужный</p>
        <div className="title p-1">Подведены итоги Международного конкурса творческих работ звукорежиссеров 2022</div>


        <p>С 14 февраля по 31 марта под эгидой Международной Ассоциации Деятелей Искусств проводился Международный конкурс творческих работ звукорежиссеров, в котором приняло участие более 300 профессиональных звукорежиссеров со всего мира.</p>
        <p>В жюри конкурса были приглашены выдающиеся звукорежиссеры, получившее международное признание: Константин Константинов (Украина), Урмат Мырзаев (Киргизия), Александр Курасов (Россия), Тигран Чухаджян (Армения), Гия Канчели (Грузия) и Игорь Матета (Россия). Их вердикт стал решающим в деле поиска корифеев аудиоарта.</p>
        <p><b>Победители Международного конкурса творческих работ звукорежиссеров 2022:</b></p>
        <p><b>В номинации "Академическая музыка":</b></p>
        <ul className="content-details-list">
          <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Сергей Максимов (Россия) - принял золото.</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Алексей Александров (Молдова) - заслуженно занял второе место.</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Михаил Сергеев (Азербайджан) - удостоен третьего места.</span></li>
      </ul>
        <p><b>В номинации "Музыка неакадемических стилей":</b></p>
        <ul className="content-details-list">
          <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Максим Петров (Беларусь) - взошел на первую ступень пьедестала.</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Илья Алексеев (Беларусь) - достойно стал обладателем серебра.</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Кирилл Иванов (Казахстан) - занял третью позицию.</span></li>
      </ul>
        <p>Этот конкурс не просто открыл новые имена, он стал символом международного единения и обмена культурными и техническими достижениями в мире звукозаписи. Эхо его результата прокатится по миру, вдохновляя звукорежиссёров на создание новых шедевров и укрепляя мосты между народами через универсальный язык музыки.</p>
        <p>Закончившийся конкурс стал зеркалом аудиовселенной, где отражены новые имена и будущие тренды. Победители и члены жюри – это визитные карточки музыкальной индустрии, символы её развития и инноваций. Отныне каждое имя и каждая фамилия будут звучать в унисон с международным признанием и профессиональным величием. С нетерпением ждём новых гармоний и мелодий, что будут созданы этими титанами аудиомира.</p>
        </div>
        </div>
      </div>
    );
  }

  export default ArticlePage17;
