import { Helmet } from 'react-helmet-async';
import ArticlePage11Img from '../../images/articlepage11.png'
import ArticlePage11n2Img from '../../images/articlepage11n2.png'
import ArticlePage11n3Img from '../../images/articlepage11n3.png'
import React, { useEffect } from 'react';

function ArticlePage11() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
      <div className="xContent p-box py-6">
        <Helmet>
        <title>Торжественное вручение Орденов "За заслуги в маркетинге"</title>
        <meta
        name="description"
        content='Международная Ассоциация Деятелей Искусств вручила Орден "Почетный деятель искусств" пятерым выдающимся личностям. Этот орден - не просто награда, это символ глубокого признания вклада каждого из них в мировую культуру и искусство.'
        />
        <link rel="canonical" href="https://arts-association.com/article11"/>
      </Helmet>
      <div className='xContent-wrapper'>
      <div className="content p-20">
      <p className='has-text-left wysiwyg'>13 мая 2019 года</p>
      <p className='has-text-left wysiwyg p-1'>Автор статьи: Наталья Стрельцова</p>
        <div class="title p-1">Торжественное вручение Орденов "За заслуги в маркетинге"</div>
        <div class="block">
      <div class="articleImage"><img src={ArticlePage11Img} alt="Новости" /></div>
      </div>
        <p>12 мая 2019 года стал ярким событием в календаре культурной жизни: Международная Ассоциация Деятелей Искусств вручила Орден "Почетный деятель искусств" пятерым выдающимся личностям. Этот орден - не просто награда, это символ глубокого признания вклада каждого из них в мировую культуру и искусство.</p>
        <p>Вручение Ордена "Почетный деятель искусств" — это высшая точка признания, которая может значительно повлиять на ход истории в искусстве. Для лауреатов это признание их влияния на культурные течения, на их способность вдохновлять изменения и на их вклад в общественное развитие через искусство.</p>
        <p>Эта награда является также напоминанием о том, что искусство играет ключевую роль в укреплении идентичности, сохранении и развитии национального духа и глобального культурного диалога. Она выделяет тех, кто с помощью своего искусства способен влиять на мировые взгляды, формировать общественные ценности и углублять понимание между культурами.</p>
        <div class="block">
      <div class="articleImage"><img src={ArticlePage11n2Img} alt="Новости" /></div>
      </div>
        <p>Орден "Почетный деятель искусств" не только увековечивает достижения лауреатов, но и демонстрирует их непреходящую ценность для будущих поколений. Лауреаты ордена, став примерами для подражания, могут вдохновлять молодых артистов стремиться к исключительности и оригинальности в своём искусстве.</p>
        <p>Церемония награждения привлекает внимание к культуре и искусству, поднимает их статус в обществе и подчеркивает их необходимость в образовательных и социальных программах. Это событие становится моментом коллективной гордости и общего восхищения, объединяя людей вокруг празднования человеческого творчества и его потенциала для прогресса и гармонии в мире.</p>
        <p>Орден "Почетный деятель искусств" является не просто честью и наградой; это живой символ бесконечной цепи творческой передачи, который несет в себе сообщение о вечном стремлении к красоте, гармонии и общечеловеческим ценностям через язык искусства.</p>
        <div class="block">
      <div class="articleImage"><img src={ArticlePage11n3Img} alt="Новости" /></div>
      </div>
        <p>В 2019 году были награждены 5 выдающихся деятелей искусства: </p>
        <p><b>Александр Курасов</b>, российский звукорежиссер с мировым именем, его уникальная разработка «Скрытый петличный микрофон в ледовом покрытии» революционизировала звукозапись, а его талант блестяще реализуется на ведущем канале страны. Его достижения неоднократно отмечались победами на международных конкурсах звукорежиссеров.</p>
        <p><b>Александр Пономарев</b>, певец, кумир украинской эстрады, композитор и исполнитель, который своим творчеством не только завоевал сердца слушателей, но и получил высокую оценку критиков, удостаиваясь звания «Лучший певец года». Его талант и мастерство теперь увековечены в этой престижной награде.</p>
        <p><b>Гелоди Поцхишвили</b>, хореограф, чей вклад в грузинскую хореографию неоценим, удостоен не только высших национальных наград, но и международного признания. Его работа, отмеченная Орденом Почета и множеством других заслуг, продолжает вдохновлять танцоров и хореографов по всему миру.</p>
        <p><b>Микаэл Погосов</b>, актер, чье имя известно каждому ценителю армянского кино, был удостоен наград за роли в культовых фильмах «Цвет граната» и «Зеркала». Его глубокий талант актера и неповторимая харизма получили очередное международное признание.</p>
        <p><b>Никита Михалков</b> – российский режиссер. Его вклад в мировое киноискусство, был отмечен Государственными премиями России.</p>
        <p>Церемония награждения стала свидетельством уважения и признания тех неустанных творческих усилий, которые способствуют обогащению культурного пространства СНГ и мира. Эти пять имен стали символами творческой стойкости, инноваций и культурного лидерства, а их награждение – важным моментом в истории культуры СНГ.</p>
        </div>
        </div>
      </div>
    );
  }

  export default ArticlePage11;