import React from 'react';
import ArticlesImg from '../images/articles.webp'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Articles() {
  return (
    <div className="xContent p-0">
      <Helmet>
        <title>Статьи</title>
        <meta
        name="description"
        content="Статьи Международной Ассоциации Маркетологов СНГ"
        />
        <link rel="canonical" href="https://marketing-association.com/articles" />
      </Helmet>
    <div className="articlesContainer">
      <div className="articlesImage">
        <img src={ArticlesImg} alt="Статьи" />
      </div>
      <div className="articlesText">
        <h1>Публикации</h1>
        <h2>Статьи</h2>
        <p>Статьи членов Ассоциации</p>
      </div>
    </div>
    <div class="block p-box py-6">
            <div className="block has-text-links has-border has-border-left-only has-border-width-2 has-border-var-blue pl-4">
            <div className="is-size-xl has-text-var-blue is-font-title-regular">
            <Link to="/article01">Рекрутинг респондентов с помощью нейронной сети и телеграмм бота в сравнении с традиционным рекрутом через рекрутинговое агентство. Опережаем себя.</Link>
            </div>
            <div className="tags mt-3">
            <span className="articlesMember">Сергей Жуковский</span></div>
            </div>
            <div className="block has-text-links has-border has-border-left-only has-border-width-2 has-border-var-blue pl-4">
            <div className="is-size-xl has-text-var-blue is-font-title-regular">
            <Link to="/article12">Наталья Фролова: Лидер в Мире Маркетинга</Link>
            </div>
    		    <div className="tags mt-3">
			      <span className="articlesMember">Александр Невинский</span>
    		    </div>
    		    </div>
            <div className="block has-text-links has-border has-border-left-only has-border-width-2 has-border-var-blue pl-4">
            <div className="is-size-xl has-text-var-blue is-font-title-regular">
            <Link to="/article02">Как правильно выбрать вуз?</Link>
            </div>
    		    <div className="tags mt-3">
			      <span className="articlesMember">Максим Попов</span>
    		    </div>
    		    </div>
            <div className="block has-text-links has-border has-border-left-only has-border-width-2 has-border-var-blue pl-4">
            <div className="is-size-xl has-text-var-blue is-font-title-regular">
            <Link to="/article03">Отблагодарите акциями. Как стартапу работать с инфлюенсерами в США.</Link>
            </div>
    		    <div className="tags mt-3">
			      <span className="articlesMember">Авксентий Рогов</span>
    		    </div>
    		    </div>
            <div className="block has-text-links has-border has-border-left-only has-border-width-2 has-border-var-blue pl-4">
            <div className="is-size-xl has-text-var-blue is-font-title-regular">
            <Link to="/article11">Торжественное вручение Орденов "За заслуги в маркетинге"</Link>
            </div>
    		    <div className="tags mt-3">
			      <span className="articlesMember">Владислав Соколов</span>
    		    </div>
    		    </div>
            <div className="block has-text-links has-border has-border-left-only has-border-width-2 has-border-var-blue pl-4">
            <div className="is-size-xl has-text-var-blue is-font-title-regular">
            <Link to="/article04">Как использовать подкаст для развития личного бренда</Link>
            </div>
    		    <div className="tags mt-3">
			      <span className="articlesMember">Алла	Доронина</span>
    		    </div>
    		    </div>
            <div className="block has-text-links has-border has-border-left-only has-border-width-2 has-border-var-blue pl-4">
            <div className="is-size-xl has-text-var-blue is-font-title-regular">
            <Link to="/article13">Рейтинг самых высокооплачиваемых маркетологов России по итогам 2021 года от Международной Ассоциации маркетологов</Link>
            </div>
    		    <div className="tags mt-3">
			      <span className="articlesMember">Снежана Морозова</span>
    		    </div>
    		    </div>
            <div className="block has-text-links has-border has-border-left-only has-border-width-2 has-border-var-blue pl-4">
            <div className="is-size-xl has-text-var-blue is-font-title-regular">
            <Link to="/article05">Лучшие практики рекрутинга респондентов</Link>
            </div>
    		    <div className="tags mt-3">
			      <span className="articlesMember">Фаина Аксенова</span>
    		    </div>
    		    </div>
            <div className="block has-text-links has-border has-border-left-only has-border-width-2 has-border-var-blue pl-4">
            <div className="is-size-xl has-text-var-blue is-font-title-regular">
            <Link to="/article06">Agile-маркетинг и 5 антикризисных маркетинговых стратегий 2021 в автобизнесе</Link>
            </div>
    		    <div className="tags mt-3">
			      <span className="articlesMember">Данияр Алимбаев</span>
    		    </div>
    		    </div>
            <div className="block has-text-links has-border has-border-left-only has-border-width-2 has-border-var-blue pl-4">
            <div className="is-size-xl has-text-var-blue is-font-title-regular">
            <Link to="/article07">Зачем тебе нужна система эмоциональных продаж?</Link>
            </div>
    		    <div className="tags mt-3">
			      <span className="articlesMember">Василиса Логинова</span>
    		    </div>
    		    </div>
            <div className="block has-text-links has-border has-border-left-only has-border-width-2 has-border-var-blue pl-4">
            <div className="is-size-xl has-text-var-blue is-font-title-regular">
            <Link to="/article08">Чёрная пятница</Link>
            </div>
    		    <div className="tags mt-3">
			      <span className="articlesMember">Ольга Сергеева</span>
    		    </div>
    		    </div>
            <div className="block has-text-links has-border has-border-left-only has-border-width-2 has-border-var-blue pl-4">
            <div className="is-size-xl has-text-var-blue is-font-title-regular">
            <Link to="/article09">10 правил экспресс-оценки качества результатов социологического или маркетингового исследования</Link>
            </div>
    		    <div className="tags mt-3">
			      <span className="articlesMember">Кондрат Кулагин</span>
    		    </div>
    		    </div>
            <div className="block has-text-links has-border has-border-left-only has-border-width-2 has-border-var-blue pl-4">
            <div className="is-size-xl has-text-var-blue is-font-title-regular">
            <Link to="/article10">Этапы построения воронки продаж в коммерческом банке</Link>
            </div>
    		    <div className="tags mt-3">
			      <span className="articlesMember">Анвар Агаев</span>
    		    </div>
    		    </div>
    </div>
    </div>
  );
}

export default Articles;
