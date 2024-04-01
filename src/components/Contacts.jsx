import React from 'react';
import { Helmet } from 'react-helmet-async';

function Contacts() {
    return (
      <div className="xContent p-box py-6">
      <Helmet>
        <title>Контакты</title>
        <meta
        name="description"
        content="Контакты Международной Ассоциации маркетологов СНГ"
        />
        <link rel="canonical" href="https://marketing-association.com/contacts" />
      </Helmet>
      <div className='xContent-wrapper'>
      <div className="page-title">Контакты</div>
      <div className="content p-20">
      <p className='has-text-centered'>Свяжитесь с нами любым удобным для вас способом!</p>
        <div className="contacts-container">
          <div className="address">
            <strong>Адрес:</strong>
            <p>Новослободская улица, 73, Москва, Россия, 127055 </p>
          </div>
          <div className="phone">
            <strong>Телефон:</strong>
            <p>+7 (495) 961-41-22</p>
          </div>
          <div className="email">
            <strong>E-mail:</strong>
            <p>arts.association.2014@gmail.com</p>
          </div>
        </div>

        </div>
        </div>
      </div>
    );
  }

  export default Contacts;
