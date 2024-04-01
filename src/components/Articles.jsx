import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Articles() {
  return (
    <div className="xContent p-0">
      <Helmet>
        <title>Новости и события</title>
        <meta
        name="description"
        content="Новости и события Международной Ассоциации Деятелей Искусств"
        />
        <link rel="canonical" href="https://marketing-association.com/articles" />
      </Helmet>
      <div className="articles-content">
        <div className="content-blur"></div>
        <div className="content-overlay">
          <h1 className="main-title">Новости и события</h1>
          <h1 className="main-title">Международной Ассоциации Деятелей Искусств</h1>
        </div>
      </div>
    <div className="block p-box py-6">

            <div className="block has-text-links has-border has-border-left-only has-border-width-2 has-border pl-4">
            <Link className='articles-title' to="/article01">Санкт-Петербургский оркестр саксофонов выступил в Александро-Невской лавре</Link>
            <div className="tags mt-3">
            <span className="articlesMember">Оркестр</span></div>
            </div>

            <div className="block has-text-links has-border has-border-left-only has-border-width-2 has-border pl-4">

            <Link className='articles-title' to="/article02">Погружение в музыку Сергея Рахманинова на фестивале «Арткино»</Link>

    		    <div className="tags mt-3">
			      <span className="articlesMember">Арткино</span>
    		    </div>
    		    </div>
            <div className="block has-text-links has-border has-border-left-only has-border-width-2 has-border pl-4">

            <Link className='articles-title' to="/article03">Как помочь музыкальной индустрии?</Link>

    		    <div className="tags mt-3">
			      <span className="articlesMember">Андрей Кричевский</span>
    		    </div>
    		    </div>
            <div className="block has-text-links has-border has-border-left-only has-border-width-2 has-border pl-4">

            <Link className='articles-title' to="/article11">Торжественное вручение Орденов "За заслуги в маркетинге"</Link>

    		    <div className="tags mt-3">
			      <span className="articlesMember">Владислав Соколов</span>
    		    </div>
    		    </div>
            <div className="block has-text-links has-border has-border-left-only has-border-width-2 has-border pl-4">

            <Link className='articles-title' to="/article04">С 7 по 12 июня состоится III Международный фестиваль классической музыки «Кантата»</Link>
    		    <div className="tags mt-3">
			      <span className="articlesMember">Фестиваль</span>
    		    </div>
    		    </div>
            <div className="block has-text-links has-border has-border-left-only has-border-width-2 has-border pl-4">
            <Link className='articles-title' to="/article13">Рейтинг самых высокооплачиваемых маркетологов России по итогам 2021 года от Международной Ассоциации маркетологов</Link>
    		    <div className="tags mt-3">
			      <span className="articlesMember">Снежана Морозова</span>
    		    </div>
    		    </div>
            <div className="block has-text-links has-border has-border-left-only has-border-width-2 has-border pl-4">

            <Link className='articles-title' to="/article05">Лучшие практики рекрутинга респондентов</Link>

    		    <div className="tags mt-3">
			      <span className="articlesMember">Фаина Аксенова</span>
    		    </div>
    		    </div>
            <div className="block has-text-links has-border has-border-left-only has-border-width-2 has-border pl-4">
            <Link className='articles-title' to="/article06">В Москве пройдет фестиваль забытых в советское время композиторов</Link>
    		    <div className="tags mt-3">
			      <span className="articlesMember">Фестиваль</span>
    		    </div>
    		    </div>
            <div className="block has-text-links has-border has-border-left-only has-border-width-2 has-border pl-4">
            <Link className='articles-title' to="/article12">Наталья Фролова: Лидер в Мире Маркетинга</Link>
    		    <div className="tags mt-3">
			      <span className="articlesMember">Александр Невинский</span>
    		    </div>
    		    </div>
            <div className="block has-text-links has-border has-border-left-only has-border-width-2 has-border pl-4">
            <Link className='articles-title' to="/article07">В Московской консерватории состоится концерт «Московского трио»</Link>
    		    <div className="tags mt-3">
			      <span className="articlesMember">Концерт</span>
    		    </div>
    		    </div>
            <div className="block has-text-links has-border has-border-left-only has-border-width-2 has-border pl-4">
            <Link className='articles-title' to="/article08">Игорь Бутман выступит на Skolkovo Jazz Science 2019</Link>
    		    <div className="tags mt-3">
			      <span className="articlesMember">Игорь Бутман</span>
    		    </div>
    		    </div>
            <div className="block has-text-links has-border has-border-left-only has-border-width-2 has-border pl-4">
            <Link className='articles-title' to="/article09">Международный фестиваль «Москва встречает друзей»</Link>
    		    <div className="tags mt-3">
			      <span className="articlesMember">Фестиваль</span>
    		    </div>
    		    </div>
            <div className="block has-text-links has-border has-border-left-only has-border-width-2 has-border pl-4">

            <Link className='articles-title' to="/article10">Опубликована партитура оперы Эдуарда Артемьева «Преступление и наказание»</Link>

    		    <div className="tags mt-3">
			      <span className="articlesMember">Эдуард Артемьев</span>
    		    </div>
    		    </div>
            <div className="block has-text-links has-border has-border-left-only has-border-width-2 has-border pl-4">
            <Link className='articles-title' to="/article14">В Москве пройдет концерт, посвященный произведениям композитора Жанны Верениновой</Link>
    		    <div className="tags mt-3">
			      <span className="articlesMember">Жанна Веренинова</span>
    		    </div>
    		    </div>
            <div className="block has-text-links has-border has-border-left-only has-border-width-2 has-border pl-4">
            <Link className='articles-title' to="/article15">Алексей Гориболь принял участие в Платоновском фестивале</Link>
    		    <div className="tags mt-3">
			      <span className="articlesMember">Алексей Гориболь</span>
    		    </div>
    		    </div>
            <div className="block has-text-links has-border has-border-left-only has-border-width-2 has-border pl-4">
            <Link className='articles-title' to="/article16">Рок-оперу «Преступление и наказание» представят на новой сцене Театра мюзикла</Link>
    		    <div className="tags mt-3">
			      <span className="articlesMember">Рок-опера</span>
    		    </div>
    		    </div>
    </div>
    </div>
  );
}

export default Articles;
