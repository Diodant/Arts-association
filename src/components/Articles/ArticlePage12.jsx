import ArticlePage12Img from '../../images/articlepage12.png'
import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';

function ArticlePage12() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
      <div className="xContent p-box py-6">
        <Helmet>
        <title>Объявляем о приеме заявок для участия в первом Международном конкурсе звукорежиссеров.</title>
        <meta
        name="description"
        content='Участие в Первом Международном конкурсе звукорежиссёров — это не только возможность выиграть ценные призы и получить признание на международном уровне, но и значительный вклад в развитие искусства звукозаписи.'
        />
        <link rel="canonical" href="https://arts-association.com/article12"/>
      </Helmet>

      <div className='xContent-wrapper'>
      <div className="content p-20">
      <p className='has-text-left wysiwyg'>3 марта 2019 года </p>
      <p className='has-text-left wysiwyg p-1'>Автор статьи: Кирил Кривошапка</p>
        <div className="title p-1">Объявляем о приеме заявок для участия в первом Международном конкурсе звукорежиссеров</div>
          <div class="block">
    <div class="articleImage"><img src={ArticlePage12Img} alt="Order" /></div>
    </div>

        <p>Московская государственная консерватория имени П. И. Чайковского с гордостью объявляет о проведении Первого Международного конкурса звукорежиссёров, который пройдет с <b>6 мая – 19 июня 2019 года</b>. Данный конкурс, учреждённый ведущим учебным заведением в сфере музыкального искусства, открыт для участия профессионалов с опытом работы более трёх лет и молодых специалистов — студентов, ассистентов-стажёров и докторантов, обучающихся в области музыкальной звукорежиссуры.</p>
        <p>Значимость конкурса для профессионального сообщества звукорежиссёров невозможно переоценить. Он станет мостом между опытом и новаторством, позволяя обменяться знаниями и культурными ценностями между разными поколениями и странами. Победители получат заслуженное международное признание и станут обладателями дипломов и ценных наград, что откроет перед ними новые перспективы в профессиональном росте и творчестве.</p>
        <p>Официальный сайт конкурса, globalaudiocontest.com, служит платформой для подачи заявок, а также источником актуальной информации о ходе и результатах конкурса.</p>
        <p>Жюри конкурса состоит из выдающихся мастеров и экспертов в области звукового искусства, что гарантирует объективность и всесторонний анализ представленных работ.</p>
        <p>Конкурс пройдет в шести номинациях, что позволит оценить разнообразие талантов в широком спектре звукорежиссурной деятельности. Анонимность подачи заявок гарантирует равные условия и справедливую конкуренцию между участниками.</p>
        <p>Участие в Первом Международном конкурсе звукорежиссёров — это не только возможность выиграть ценные призы и получить признание на международном уровне, но и значительный вклад в развитие искусства звукозаписи.</p>
        </div>
        </div>
      </div>
    );
  }

  export default ArticlePage12;
