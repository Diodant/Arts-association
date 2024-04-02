import React, { useEffect } from 'react';

function ArticlePage16() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
      <div className="xContent p-box py-6">
        <div className='xContent-wrapper'>
        <h1 class="title is-font-title-regular has-text-centered has-text-var-blue">Рок-оперу «Преступление и наказание» представят на новой сцене Театра мюзикла</h1>
        <div className="content">
        <p>С 15 ноября рок-опера Эдуарда Артемьева «Преступление и наказание» в постановке Андрея Кончаловского переедет на новую сцену Театра мюзикла и будет идти в обновленном здании кинотеатра «Россия».</p>
        <p>Спектакль 26 ноября отметит на новой площадке свое 100-е представление. Первый блок показов продлится до 3 декабря.</p>
        <p>Премьера рок-оперы состоялась в Театре мюзикла в марте 2016 года и была приурочена к 150-летию выхода романа Достоевского. Спектакль уже посмотрели более 90 тыс. зрителей.</p>
        <p>Рок-опера «Преступление и наказание» — это современный взгляд на классический роман. Режиссер Андрей Кончаловский переносит героев в Петербург конца ХХ века, где, так же как и во времена Достоевского, героев мучают проблемы человеческой свободы, социальной справедливости, жертвенности и нравственного долга.</p>
        <p>Музыка Эдуарда Артемьева, которую композитор начал писать более 30 лет назад, сочетает разнообразные жанры — от народных мотивов до арт-рока.</p>
        <p>В апреле 2017 года спектакль стал обладателем российской национальной театральной премии «Золотая Маска» в номинациях «Лучшая женская роль» (Мария Биорк, роль Сони) и «Работа композитора в музыкальном театре» (Эдуард Артемьев).</p>
        <p>В спектакле заняты артисты Станислав Беляев, Денис Котельников, Александр Казьмин, Александр Бобров, Мария Биорк, Галина Безрук, Александр Маракулин, Евгений Вальц, Ефим Шифрин, Владимир Ябчаник, Максим Заусалин, Антон Дёров, Антон Аносов. Масштабные декорации и визуальные технологии созданы по эскизам сценографа Мэтта Диили. </p>

        </div>
        </div>
      </div>
    );
  }

  export default ArticlePage16;
