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
        <title>Свет волн и гармонии: завершение Первого Международного конкурса звукорежиссеров 2019</title>
        <meta
        name="description"
        content='Великий фестиваль звука и технологии достиг своего апогея, когда мастера аудиовизуального искусства со всех концов света собрались под эгидой Первого Международного конкурса звукорежиссеров.'
        />
        <link rel="canonical" href="https://arts-association.com/article19"/>
      </Helmet>

      <div className='xContent-wrapper'>
      <div className="content p-20">
      <p className='has-text-left wysiwyg'>21 июня 2019 года </p>
      <p className='has-text-left wysiwyg p-1'>Автор статьи: Семен Огородников</p>
        <div className="title p-1">Свет волн и гармонии: завершение Первого Международного конкурса звукорежиссеров 2019</div>

        <p>Великий фестиваль звука и технологии достиг своего апогея, когда мастера аудиовизуального искусства со всех концов света собрались под эгидой Первого Международного конкурса звукорежиссеров. Этот конкурс, в котором приняли участие более трехсот звукорежиссеров из стран СНГ с географией от России до Узбекистана, выявил лучших из лучших в этой тонкой и критически важной сфере.</p>
        <p>Профессионализм и инновационный подход демонстрировались на каждом этапе соревнований, обогащая аудиокультуру и способствуя трансграничному диалогу в мире музыки и звукозаписи. Жюри, составленное из авторитетных и уважаемых профессионалов мировой аудиоиндустрии, вынесло свой вердикт, признав достижения и таланты участников.</p>
        <p>В списке победителей Первого Международного конкурса звукорежиссёров выделяются:</p>
        <p><b>Категория 1: Профессиональные звукорежиссёры</b></p>
        <p><b>Симфоническое/вокально-симфоническое произведение:</b></p>
        <ul className="content-details-list">
          <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Александр Михлин (Россия) — золото</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Экхард Глаухе (Германия) — серебро</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Мария Беляева (Россия) — бронза</span></li>
      </ul>
        <p><b>Хоровое произведение без сопровождения:</b></p>
        <ul className="content-details-list">
          <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Экхард Глаухе (Германия) — золото</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Вадим Киранов (Белоруссия) — серебро</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Дмитрий Сычёв (Россия) — бронза</span></li>
      </ul>
      <p><b>Камерно-инструментальное произведение:</b></p>
      <ul className="content-details-list">
          <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Вадим Киранов (Белоруссия) — золото</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Александр Михлин (Россия) — серебро</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Экхард Глаухе (Германия) — бронза</span></li>
      </ul>
      <p><b>Камерно-вокальное произведение:</b></p>
      <ul className="content-details-list">
          <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Алексей Погарский (Россия) — золото</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Александр Михлин (Россия) — серебро</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Илья Донцов (Россия) — бронза</span></li>
      </ul>
      <p><b>Электронное/электронно-акустическое музыкальное произведение:</b></p>
      <ul className="content-details-list">
          <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Александр Курасов (Россия) — золото и приз от Yamaha: Steinberg UR22</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Илья Пригожин (Россия) — серебро</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Семен Растворцев (Россия) — бронза</span></li>
      </ul>
      <p><b>Запись не входящая в остальные номинации:</b></p>
      <ul className="content-details-list">
          <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Илья Донцов (Россия) — золото</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Александр Михлин (Россия) — серебро</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Алексей Погарский (Россия) — бронза</span></li>
      </ul>
        <p><b>Категория 2: Студенты</b></p>
        <p><b>Симфоническое/вокально-симфоническое произведение:</b></p>
        <ul className="content-details-list">
          <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Мария Шокина (Россия) — золото и приз от Yamaha: Steinberg UR-RT4</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Ксения Татарова (Россия) — серебро</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Михаил Иванцов (Россия) — бронза</span></li>
      </ul>
      <p><b>Камерно-инструментальное произведение:</b></p>
      <ul className="content-details-list">
          <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Каринэ Аветян (Россия) — золото и приз от Yamaha: Steinberg UR-RT2</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Мария Шокина (Россия) — серебро</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Софья Кокорева (Россия) — бронза</span></li>
      </ul>
      <p><b>Электронное/электронно-акустическое музыкальное произведение:</b></p>
      <ul className="content-details-list">
          <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Ксения Татарова (Россия) — золото</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Регина Хайбуллина (Россия) — серебро</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Луань Тяньцюань (Китай) — бронза</span></li>
      </ul>
      <p><b>Запись не входящая в остальные номинации:</b></p>
      <ul className="content-details-list">
          <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Арина Тузова (Россия) — золото и приз от Yamaha: Steinberg UR22</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Александр Яковлев (Россия) — серебро</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Регина Хайбуллина (Россия) — бронза</span></li>
      </ul>
      <p>Каждый победитель заслуживает признания за своё мастерство и вносит ценный вклад в развитие звуковой инженерии и аудиоискусства.</p>
        <p>Каждый победитель заслуживает признания за своё мастерство и вносит ценный вклад в развитие звуковой инженерии и аудиоискусства.</p>
        <p>Это событие стало мостом, соединяющим технологии и творчество, а победа в нём — не просто подтверждение мастерства, но и весомый вклад в глобальное развитие аудиоискусства. Награды и признание, полученные победителями, свидетельствуют о влиятельности и важности их работы в сфере звукового инжиниринга.</p>
        <p>Особую благодарность заслуживают члены жюри, чьё мнение основывалось на глубоком понимании искусства и технологии звука, что и определило исход соревнования:</p>
        <ul className="content-details-list">
          <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Павел Лаврененков и Мария Соболева, представляющие Россию;</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Эрдо Грот из Нидерландов;</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Геннадий Папин из России;</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Николас Паркер, пользующийся уважением в Великобритании;</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text">Владимир Рябенко, также из России.</span></li>
      </ul>
        <p>Конкурс подчеркнул международное значение звукорежиссуры и её роль в культурном обмене, доказав, что искусство звука — это искусство без границ.</p>
        </div>
        </div>
      </div>
    );
  }

  export default ArticlePage17;
