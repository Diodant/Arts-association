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
        <div className="title is-font-title-regular has-text-centered has-text-var-blue">
          Контакты Международной Ассоциации маркетологов СНГ
        </div>
        <div className="contacts-container">
          <div className="address">
            <strong>Адрес:</strong>
            <p>125009, г. Москва, Газетный переулок, д. 9</p>
          </div>
          <div className="phone">
            <strong>Телефон:</strong>
            <p>8 (495) 662-39-88</p>
          </div>
          <div className="postal-address">
            <strong>Почтовый адрес:</strong>
            <p>127018, г. Москва, а/я 133</p>
          </div>
          <div className="email">
            <strong>E-mail:</strong>
            <p>marketing.association.com@gmail.com</p>
          </div>
        </div>
      </div>
    );
  }

  export default Contacts;
