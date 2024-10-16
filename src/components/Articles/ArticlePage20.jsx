import ArticlePage20Img from '../../images/articlepage20.png'
import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';

function ArticlePage20() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
      <div className="xContent p-box py-6">
        <Helmet>
        <title>Приём заявок на Международный конкурс творческих работ звукорежиссёров 2022 открыт!</title>
        <meta
        name="description"
        content='Стартовал приём заявок на участие в престижном Международном конкурсе творческих работ звукорежиссёров.'
        />
        <link rel="canonical" href="https://arts-association.com/article20"/>
      </Helmet>

      <div className='xContent-wrapper'>
      <div className="content p-20">
      <p className='has-text-left wysiwyg'>16 февраля 2022 год</p>
      <p className='has-text-left wysiwyg p-1'>Автор статьи: Иван Радужный</p>
        <div className="title p-1">Приём заявок на Международный конкурс творческих работ звукорежиссёров 2022 открыт!</div>
          <div class="block">
        <div class="articleImage"><img src={ArticlePage20Img} alt="Order" /></div>
        </div>
        <p>Москва, Россия. Стартовал приём заявок на участие в престижном Международном конкурсе творческих работ звукорежиссёров.</p>
        <p>С 14 февраля по 31 марта 2022 года, мастера звука из всех уголков планеты смогут представить своё искусство и претендовать на звание лучших в таких категориях, как "Академическая музыка" и "Музыка неакадемических стилей".</p>
        <p><b>Звездный состав жюри</b> — это воплощение глубокой компетентности и исключительной мастерской подкованности, профессиональные звукорежиссеры с мировым признанием, победители многочисленных Международных конкурсов звукорежиссеров:</p>
        <p>Константин Константинов из Украины,</p>
        <p>Урмат Мырзаев из Киргизии, </p>
        <p>Александр Курасов из России, </p>
        <p>Тигран Чухаджян из Армении, </p>
        <p>Гия Канчели из Грузии </p>
        <p>Игорь Матета из России </p>
        <p>Вместе составляют судейский комитет, обеспечивая непревзойдённое качество и справедливость оценок.</p>
        <p>Этот конкурс уникален не только масштабом и составом участников, но и своей цифровой природой, преодолевая пространственные барьеры и объединяя таланты различных направлений музыки — от величественной классики до современных ритмов.</p>
        <p><b>Награды и перспективы для победителей</b> — великолепные возможности для профессионального роста и участия в глобальных аудиопроектах. Помимо денежных призов и современного аудиооборудования, участники могут рассчитывать на публикации в ведущих отраслевых медиа и продвижение своей работы на международном уровне.</p>
        <p><b>Дополнительные возможности для развития</b> — мастер-классы и сессии обратной связи с экспертами, а также возможность для сетевого общения и обмена знаниями с коллегами и ветеранами отрасли.</p>
        <p><b>Участие и регистрация</b> — просты и доступны каждому профессионалу в области звуковой инженерии. Для подачи заявки посетите официальный сайт конкурса soundmasterscompetition.com и представьте свои работы, соответствующие установленным номинациям.</p>
        <p>Не упустите шанс зазвучать в унисон с успехом и продемонстрировать своё мастерство на международной арене — <b>примите участие сегодня!</b></p>
        </div>
        </div>
      </div>
    );
  }

  export default ArticlePage20;
