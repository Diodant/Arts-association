import React from 'react';
import EarthImg from '../images/earth.webp'
import { Helmet } from 'react-helmet-async';

function Geography() {
  return (
    <div className="xContent p-0">
          <Helmet>
        <title>География</title>
        <meta
        name="description"
        content="География Ассоциации Некоммерческого Партнерства 
        «Международная Ассоциация Маркетологов СНГ»"
        />
        <link rel="canonical" href="https://marketing-association.com/geography"/>
      </Helmet>
        <div class="block">
    <div class="image is-3by1 is-bgcover"><img src={EarthImg} alt="Earth" /></div>
</div>
        <div class="title is-font-title-regular has-text-centered has-text-var-blue">География Международной Ассоциации Маркетологов</div>
        <div class="block has-text-centered has-text-var-blue is-font-title-regular">Всего членов: <span class="is-size-4">345</span></div>
        <div class="block my-6">
    <div class="columns is-flex-wrap-wrap">
                    <div class="column">
                <div class="xCounter">
                    <div class="xCounterVal">112</div>
                    <div class="xCounterVar">Россия</div>
                </div>
            </div>
                    <div class="column">
                <div class="xCounter">
                    <div class="xCounterVal">76</div>
                    <div class="xCounterVar">Украины</div>
                </div>
            </div>
                    <div class="column">
                <div class="xCounter">
                    <div class="xCounterVal">23</div>
                    <div class="xCounterVar">Азербайджан</div>
                </div>
            </div>
            </div>
        </div>
    <div class="block my-6">
    <div class="columns is-flex-wrap-wrap">
                    <div class="column">
                <div class="xCounter">
                    <div class="xCounterVal">59</div>
                    <div class="xCounterVar">Армения</div>
                </div>
            </div>
                    <div class="column">
                <div class="xCounter">
                    <div class="xCounterVal">24</div>
                    <div class="xCounterVar">Беларусия</div>
                </div>
            </div>
                    <div class="column">
                <div class="xCounter">
                    <div class="xCounterVal">12</div>
                    <div class="xCounterVar">Казахстан</div>
                </div>
            </div>
            </div>
        </div>
        <div class="block my-6">
    <div class="columns is-flex-wrap-wrap">
                    <div class="column">
                <div class="xCounter">
                    <div class="xCounterVal">14</div>
                    <div class="xCounterVar">Молдавия</div>
                </div>
            </div>
                    <div class="column">
                <div class="xCounter">
                    <div class="xCounterVal">10</div>
                    <div class="xCounterVar">Таджикистан</div>
                </div>
            </div>
                    <div class="column">
                <div class="xCounter">
                    <div class="xCounterVal">7</div>
                    <div class="xCounterVar">Киргизия</div>
                </div>
            </div>
            </div>
        </div>
        <div class="block my-6">
    <div class="columns is-flex-wrap-wrap">
                    <div class="column">
                <div class="xCounter">
                    <div class="xCounterVal">8</div>
                    <div class="xCounterVar">Грузия</div>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
}

export default Geography;
