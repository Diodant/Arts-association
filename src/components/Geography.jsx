import React from 'react';
import { Helmet } from 'react-helmet-async';

function Geography() {
  return (
    <div className="xContent p-0">
          <Helmet>
        <title>География</title>
        <meta
        name="description"
        content="География Международной Ассоциации Деятелей Искусств"
        />
        <link rel="canonical" href="https://marketing-association.com/geography"/>
      </Helmet>
      <div className="geography-content">
        <div className="geography-blur"></div>
        <div className="content-overlay">
          <h1 className="main-title">География Международной Ассоциации</h1>
          <h1 className="main-title">Деятелей Искусств</h1>
        </div>
      </div>
        <div class="geography-title">Всего Членов Ассоциации: 345</div>
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
                    <div class="xCounterVar">Украина</div>
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
