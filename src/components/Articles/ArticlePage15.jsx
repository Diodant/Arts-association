import React, { useEffect } from 'react';

function ArticlePage15() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
      <div className="xContent p-box py-6">
        <div className='xContent-wrapper'>
        <h1 class="title is-font-title-regular has-text-centered has-text-var-blue">Алексей Гориболь принял участие в Платоновском фестивале</h1>
        <div className="content">
        <p>В рамках VIII международного Платоновского фестиваля искусств, который прошел в Воронеже с 6 по 17 июня 2018 года, прозвучали избранные сочинения Леонида Десятникова – одного из самых исполняемых композиторов-современников. Впервые в России прозвучали его «Буковинские песни».</p>
        <p>В новый фортепианный цикл Десятникова вошло 12 прелюдий в духе минимализма, которые исполнил неутомимый популяризатор творчества Десятникова – пианист, заслуженный артист России, член Совета Российского музыкального союза Алексей Гориболь.</p>
        <p>Представляя композитора, нельзя было обойти стороной его аранжировки сочинений Астора Пьяццоллы. В 1990-е благодаря Десятникову и скрипачу Гидону Кремеру танго великого аргентинца стали доступны струнным оркестрам. Так, «Времена года» звучат в «академической» версии гораздо чаще, чем на бандонеоне. Воронежцы насладились пьесами для фортепианного квартета «По канве Астора» (написаны для кинофильма «Закат») и посвященными Пьяццолле транскрипциями танго «Счастье мое» и «Утомленное солнце».</p>
        <p>Фестиваль традиционно делает акцент на музыке первой трети ХХ века – условно определяя это время как эпоху Андрея Платонова, пытаясь проиллюстрировать ее энтузиазм и ее трагедию. Поэтому в концерт «Леонид Десятников. Избранное» включили своего рода размышление над советским песенным наследием – саундтрек к фильму Александра Зельдовича «Москва» (2000), за который композитору дали премию «Золотой овен».</p>
        </div>
        </div>
      </div>
    );
  }

  export default ArticlePage15;