import React from 'react';
import { Helmet } from 'react-helmet-async';

const expertsData = [
    { id: 1,  name:  'Наталья Петрова', country: 'Россия', description: 'Арт-директор', year: '2014', },
    { id: 2,  name:  'Андрей Иванов', country: 'Украина', description: 'Писатель', year: '2014', },
    { id: 3,  name:  'Дмитрий Фёдоров', country: 'Украина', description: 'Актер', year: '2014', },
    { id: 4,  name:  'Дмитрий Соколов', country: 'Азербайджан', description: 'Фотограф', year: '2014', },
    { id: 5,  name:  'Наталья Сидорова', country: 'Армения', description: 'Хореограф', year: '2014', },
    { id: 6,  name:  'Николай Сидоров   ', country: 'Украина     ', description: 'Звукорежиссер ', year: '2015', },
    { id: 7,  name:  'Иван Фёдоров      ', country: 'Азербайджан ', description: 'Арт-директор ', year: '2015', },
    { id: 8,  name:  'Максим Морозов    ', country: 'Армения     ', description: 'Фотограф ', year: '2015', },
    { id: 9,  name:  'Сергей Иванов     ', country: 'Беларусь    ', description: 'Сценарист', year: '2015', },
    { id: 10, name:  'Владимир Михайлов ', country: 'Киргизия   ', description: 'Писатель ', year: '2015', },
    { id: 11, name:  'Алексей Васильев  ', country: 'Россия      ', description: 'Композитор ', year: '2016', },
    { id: 12, name:  'Дмитрий Морозов   ', country: 'Украина     ', description: 'Музыкант ', year: '2016', },
    { id: 13, name:  'Алексей Михайлов  ', country: 'Азербайджан ', description: 'Писатель ', year: '2016', },
    { id: 14, name:  'Егор Попов        ', country: 'Армения     ', description: 'Музыкант ', year: '2016', },
    { id: 15, name:  'Алина Морозова    ', country: 'Молдова     ', description: 'Танцор ', year: '2016', },
    { id: 16, name:  'Максим Морозов    ', country: 'Россия      ', description: 'Танцор ', year: '2017', },
    { id: 17, name:  'Алина Фёдорова    ', country: 'Украина     ', description: 'Художник ', year: '2017', },
    { id: 18, name:  'Наталья Сидорова  ', country: 'Азербайджан ', description: 'Звукорежиссер ', year: '2017', },
    { id: 19, name:  'Егор Попов        ', country: 'Армения     ', description: 'Композитор ', year: '2017', },
    { id: 20, name:  'Елена Иванова     ', country: 'Киргизия    ', description: 'Сценарист ', year: '2017', },
    { id: 21, name:  'Сергей Сидоров    ', country: 'Россия      ', description: 'Сценарист ', year: '2018', },
    { id: 22, name:  'Наталья Петрова   ', country: 'Украина     ', description: 'Хореограф ', year: '2018', },
    { id: 23, name:  'Татьяна Морозова  ', country: 'Азербайджан ', description: 'Музыкант ', year: '2018', },
    { id: 24, name:  'Татьяна Петрова   ', country: 'Армения     ', description: 'Художник ', year: '2018', },
    { id: 25, name:  'Дмитрий Морозов   ', country: 'Молдова     ', description: 'Арт-директор ', year: '2018', },
    { id: 26, name:  'Александр Курасов ', country: 'Россия     ', description: 'Звукорежиссер', year: '2019', },
    { id: 27, name:  'Александр Пономаре', country: 'Украина  ', description: 'Певец ', year: '2019', },
    { id: 28, name:  'Гелоди Поцхишвили ', country: 'Грузия     ', description: 'Хореограф ', year: '2019', },
    { id: 29, name:  'Микаэл Погосов    ', country: 'Армения     ', description: 'Актер ', year: '2019', },
    { id: 30, name:  'Никита Михалков   ', country: 'Россия      ', description: 'Режиссер  ', year: '2019', },
    { id: 31, name:  'Егор Васильев     ', country: 'Россия      ', description: 'Фотограф  ', year: '2020', },
    { id: 32, name:  'Иван Морозов      ', country: 'Украина     ', description: 'Писатель  ', year: '2020', },
    { id: 33, name:  'Алексей Петров    ', country: 'Азербайджан ', description: 'Музыкант ', year: '2020', },
    { id: 34, name:  'Николай Фёдоров   ', country: 'Беларусь    ', description: 'Художник ', year: '2020', },
    { id: 35, name:  'Максим Фёдоров    ', country: 'Казахстан   ', description: 'Художник ', year: '2020', },
    { id: 36, name:  'Иван Попов        ', country: 'Россия      ', description: 'Сценарист  ', year: '2021', },
    { id: 37, name:  'Владимир Попов    ', country: 'Украина     ', description: 'Звукорежиссер ', year: '2021', },
    { id: 38, name:  'Наталья Михайлова ', country: 'Азербайджан', description: 'Арт-директор', year: '2021', },
    { id: 39, name:  'Павел Михайлов    ', country: 'Армения     ', description: 'Художник ', year: '2021', },
    { id: 40, name:  'Мария Попова      ', country: 'Казахстан   ', description: 'Танцор', year: '2021', },
    { id: 41, name:  'Сергей Безруков   ', country: 'Россия      ', description: 'Актер ', year: '2022', },
    { id: 42, name:  'Татьяна Степанова ', country: 'Украина    ', description: 'Певец ', year: '2022', },
    { id: 43, name:  'Карен Шахназаров  ', country: 'Армения     ', description: 'Режиссер ', year: '2022', },
    { id: 44, name:  'Вячеслав Кузнецов ', country: 'Беларусь   ', description: 'Композитор ', year: '2022', },
    { id: 45, name:  'Дан Балан         ', country: 'Молдова     ', description: 'Певец ', year: '2022', },
    { id: 46, name:  'Владимир Морозов  ', country: 'Россия      ', description: 'Актер ', year: '2023', },
    { id: 47, name:  'Андрей Петров     ', country: 'Азербайджан ', description: 'Танцор ', year: '2023', },
    { id: 48, name:  'Мария Морозова    ', country: 'Беларусь    ', description: 'Звукорежиссер ', year: '2023', },
    { id: 49, name:  'Николай Сидоров   ', country: 'Киргизия    ', description: 'Актер ', year: '2023', },
    { id: 50, name:  'Елена Соколова    ', country: 'Таджикистан ', description: 'Актер ', year: '2023', },
  ];

function MembersOfOrder() {
  return (
    <div className="xContent p-box py-6">
        <Helmet>
        <title>Кавалеры Орденского Знака</title>
        <meta
        name="description"
        content='КАВАЛЕРЫ ОРДЕНА "ЗАСЛУЖЕННЫЙ ДЕЯТЕЛЬ ИСКУССТВ"'
        />
        <link rel="canonical" href="https://marketing-association.com/membersoforder" />
      </Helmet>
      <h1 className="title p-60">КАВАЛЕРЫ ОРДЕНА "ЗАСЛУЖЕННЫЙ ДЕЯТЕЛЬ ИСКУССТВ"</h1>
      <div className="expertsTable">
      <table>
        <thead>
          <tr>
            <th>ФИО</th>
            <th>Страна</th>
            <th>Профессия</th>
            <th>Год вступления</th>
          </tr>
        </thead>
        <tbody>
          {expertsData.map(expert => (
            <tr key={expert.id}>
              <td>{expert.name}</td>
              <td>{expert.country}</td>
              <td>{expert.description}</td>
              <td>{expert.year}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default MembersOfOrder;
