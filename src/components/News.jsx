
import { Link } from 'react-router-dom';

function News() {

  return (
<div class="p-box py-6">
    <div class="title p-1">
    Новости Ассоциации
    </div>
    <div className="columns columns-style p-1">
                    <div className="is-one-third has-text-links articles-container">
                <div className="block is-size-l">18 Января 2024</div>
                <div className="block is-size-xl has-text-var-blue is-font-title-regular">
                <Link className='articles-title' to="/article01">Санкт-Петербургский оркестр саксофонов выступил в Александро-Невской лавре</Link>
                </div>
                <div className="block is-size-l is-emptyhidden"></div>
                            </div>
                    <div class=" is-one-third has-text-links articles-container">
                <div className="block is-size-l">22 Ноября 2023</div>
                <div className="block is-size-xl has-text-var-blue is-font-title-regular">
                <Link className='articles-title' to="/article02">Погружение в музыку Сергея Рахманинова на фестивале «Арткино»</Link>
                </div>
                <div className="block is-size-l is-emptyhidden"></div>
                            </div>
                    <div className="is-one-third has-text-links articles-container">
                <div className="block is-size-l">20 Сентября 2023</div>
                <div className="block is-size-xl has-text-var-blue is-font-title-regular">
                <Link className='articles-title' to="/article09">Как помочь музыкальной индустрии?</Link>
                </div>
                <div className="block is-size-l is-emptyhidden"></div>
                </div>
            </div>
    <div className="join-button-wrapper">
      <Link to={{
            pathname: "/articles",
            state: { scrollToTop: true }
          }} className="join-button">
            <span>Все новости</span>
          </Link>
    </div>
</div>
  );
}

export default News;
