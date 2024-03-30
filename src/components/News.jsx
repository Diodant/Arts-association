import React from 'react';
import { Link } from 'react-router-dom';

function News() {
  return (
<div class="p-box py-6">
    <div class="title p-1">
    Статьи Ассоциации
    </div>
    <div class="columns columns-style p-1">
                    <div class="is-one-third has-text-links articles-container">
                <div class="block is-size-l">5 Марта 2024</div>
                <div class="block is-size-xl has-text-var-blue is-font-title-regular">
                <Link to="/article01">Рекрутинг респондентов с помощью нейронной сети и телеграмм бота в сравнении с традиционным рекрутом через рекрутинговое агентство. Опережаем себя.</Link>
                </div>
                <div class="block is-size-l is-emptyhidden"></div>
                            </div>
                    <div class=" is-one-third has-text-links articles-container">
                <div class="block is-size-l">23 декабря 2022</div>
                <div class="block is-size-xl has-text-var-blue is-font-title-regular">
                <Link to="/article11">Торжественное вручение Орденов "За заслуги в маркетинге"</Link>
                </div>
                <div class="block is-size-l is-emptyhidden"></div>
                            </div>
                    <div class="is-one-third has-text-links articles-container">
                <div class="block is-size-l">22 Января 2024</div>
                <div class="block is-size-xl has-text-var-blue is-font-title-regular">
                <Link to="/article09">10 правил экспресс-оценки качества результатов социологического или маркетингового исследования</Link>
                </div>
                <div class="block is-size-l is-emptyhidden"></div>
                </div>
            </div>
    <div class="block button-content has-text-centered">
    <Link to="/articles" class="is-more-w"><span>Все cтатьи</span></Link>
    </div>
</div>
  );
}

export default News;
