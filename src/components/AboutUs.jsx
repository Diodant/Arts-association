import React from 'react';
import ArrowImg from '../images/arrow.svg'
import { Helmet } from 'react-helmet-async';

function AboutUs() {
  return (
    <div className="xContent p-box py-6">
      <Helmet>
        <title>О Международной Ассоциации Деятелей Искусств</title>
        <meta
        name="description"
        content="Международная Ассоциация Деятелей Искусств является организацией, объединяющей выдающихся профессионалов в области искусства."
        />
        <link rel="canonical" href="https://marketing-association.com/about-us" />
      </Helmet>
      <div className='xContent-wrapper'>
      <div className="page-title">О Международной Ассоциации Деятелей Искусств</div>
      <div className="content p-20">
      <p className='has-text-centered'>Международная Ассоциация Деятелей Искусств является организацией, объединяющей выдающихся профессионалов в области искусства.</p>
      <p>В Ассоциацию Деятелей Искусств входят представители таких творческих профессий как:</p>
      <ul className="content-details-list">
          <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text"><b>Музыканты</b> – инструменталисты и вокалисты всех жанров.</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text"><b>Композиторы</b> – авторы музыкальных произведений.</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text"><b>Актеры</b> – артисты театра, кино и телевидения.</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text"><b>Танцоры</b> – исполнители балета, народного, современного и уличного танца.</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text"><b>Художники</b> – живописцы, графики, скульпторы и представители других направлений изобразительного искусства.</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" /></span>
            <span className="content-text"><b>Писатели и поэты</b> – авторы литературных произведений.</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" /></span>
          <span className="content-text"><b>Режиссеры</b> – создатели театральных, кинематографических и других видов сценических произведений.</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text"><b>Сценаристы</b> – писатели, работающие над созданием сценариев для театра и кино.</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text"><b>Фотографы</b> – профессионалы в области фотографического искусства.</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text"><b>Хореографы</b> – специалисты в создании и постановке танцевальных композиций.</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text"><b>Звукорежиссеры</b> – специалисты по созданию и обработке звука в музыке и кино.</span></li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>
            <span className="content-text"><b>Арт-директора и дизайнеры</b> – специалисты по визуальному оформлению произведений искусства, включая сценический дизайн и дизайн костюмов.</span></li>
        </ul>
    <p>Ассоциация объединяет представителей творческих профессий из России, Украины, Азербайджана, Армении, Беларуси, Казахстана, Киргизии, Молдовы, Таджикистана, Туркменистана, Узбекистана и Грузии. Она служит платформой для обмена знаниями и опытом между этими культурно разнообразными странами, способствуя тем самым развитию и процветанию искусства в регионе.</p>
        <p>Ассоциация устанавливает высокие требования к профессиональной квалификации своих членов. Каждый кандидат проходит многоэтапный отбор, включающий следующие ступени:</p>
        <ol className="goalsList">
        <li><b>Подача заявления:</b> Кандидаты должны предоставить полное портфолио, включающее их биографию, список профессиональных достижений и примеры творческих работ.</li>
        <li><b>Профессиональные достижения:</b> От кандидатов ожидается наличие значимых достижений в своей области, таких как национальные и международные награды, публикации, индивидуальные или коллективные выставки, спектакли, концерты и прочие мероприятия.</li>
        <li><b>Рекомендации:</b> Необходимы рекомендательные письма от уважаемых деятелей культуры и искусства, подтверждающие профессионализм и вклад кандидата в культурную жизнь.</li>
        <li><b>Оценка вклада в культурное развитие:</b> Ассоциация оценивает не только личные достижения, но и степень влияния кандидата на развитие искусства в своей стране и за рубежом.</li>
        <li><b>Активное участие:</b> Предпочтение отдаётся тем кандидатам, которые активно участвуют в культурной жизни — например, организация образовательных мероприятий, участие в жюри конкурсов и фестивалей, педагогическая деятельность.</li>
        <li><b>Интервью:</b> На заключительном этапе может быть предусмотрено собеседование с комитетом Ассоциации, на котором кандидаты обсуждают свои видение и планы по дальнейшему развитию искусства.</li>
      </ol>
      <p>Этот процесс помогает Ассоциации поддерживать репутацию эксклюзивной организации, члены которой являются ведущими профессионалами в своих областях. Он также способствует созданию сильного и активного сообщества деятелей искусства, которое способно оказывать существенное влияние на культурное развитие в мировом масштабе.</p>
    <p>Основной миссией Ассоциации является повышение качества культурного продукта на международном уровне и поддержание высоких профессиональных стандартов в сферах музыкального исполнительства и композиции.</p>
    </div>
    <div className="page-title">Цели Ассоциации</div>
    </div>
    </div>
  );
}

export default AboutUs;
