
import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';

function ArticlePage21() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
      <div className="xContent p-box py-6">
        <Helmet>
        <title>Открыт прием заявок на "Gnesin Sound Competition 2022"</title>
        <meta
        name="description"
        content='Отправьте свою заявку на Третий Международный открытый конкурс творческих работ звукорежиссеров "Gnesin Sound Competition 2022"'
        />
        <link rel="canonical" href="https://arts-association.com/article21"/>
      </Helmet>

      <div className='xContent-wrapper'>
      <div className="content p-20">
      <p className='has-text-left wysiwyg'>1 февраля 2022 года </p>
      <p className='has-text-left wysiwyg p-1'>Автор статьи: Иван Соловьев</p>
        <div className="title p-1">Открыт прием заявок на Третий Международный открытый конкурс творческих работ звукорежиссеров "Gnesin Sound Competition 2022"</div>
        <div className="title p-1">Номинации:</div>
        <p><b>Академическая музыка</b></p>
        <p>(симфоническая, оперная, камерная, хоровая, вокальная, акустическая народная музыка)</p>
        <p><b>Эстрадная музыка</b></p>
        <p>(джаз, фольклорная музыка, эстрадная, поп и рок музыка)</p>
        <div className="title p-1">Организатор:</div>
        <p>Кафедра музыкальной звукорежессуры Российской академии музыки имени Гнесиных.</p>
        <div className="title p-1">Члены жюри:</div>
        <p><b>Мария Соболева</b> звукорежиссер, профессор Московской государственной консерватории имени П. И. Чайковского</p>
        <p><b>Александр Курасов</b> звукорежиссер телеканалов "Россия", "Первый канал"</p>
        <p><b>Михаил Спасский</b> звукорежиссер Московской государственной консерватории имени П. И. Чайковского</p>
        <p><b>Софья Кругликова</b> доцент кафедры Музыкальной звукорежессуры РАМ имени Гнесиных</p>
        <p><b>Олег Чечик</b> звукорежиссер, саундпродюсер, Studio CSP</p>
        <p><b>Илья Мазаев</b> продюсер, звукорежиссер, микс и мастеринг-инженер</p>
        <p><b>Haydn Bendall</b> Chief Engineer в Abbey Road Studio на протяжении 10 лет</p>
        <p><b>Формат конкурса: онлайн</b></p>
        </div>
        </div>
      </div>
    );
  }

  export default ArticlePage21;
