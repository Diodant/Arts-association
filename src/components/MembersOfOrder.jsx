import React from 'react';
import { Helmet } from 'react-helmet-async';

const expertsData = [
    { id: 1, name:  'Абаев Алан',  year: '2018',   description: 'Инновации в маркетинге' },
    { id: 2, name:  'Мусатова Жанна',  year: '2018',   description: 'Лидерство в брендинге' },
    { id: 3, name:  'Никишин Валерий',  year: '2018',   description: 'Социальный и этичный маркетинг' },
    { id: 4, name:  'Розанова Татьяна',  year: '2018',   description: 'Международный маркетинговый вклад' },
    { id: 5, name:  'Себрант Андрей',  year: '2018',   description: 'Образование и наставничество в маркетинге' },
    { id: 6, name:  'Синяева Инга',  year: '2019',   description: 'Инновации в маркетинге', },
    { id: 7, name:  'Тюрин Дмитрий',  year: '2019',   description: 'Лидерство в брендинге', },
    { id: 8, name:  'Азоев Геннадий',  year: '2019',   description: 'Социальный и этичный маркетинг', },
    { id: 9, name:  'Березин Игорь',  year: '2019',   description: 'Международный маркетинговый вклад', },
    { id: 10, name:  'Виттель Игорь',  year: '2019',   description: 'Образование и наставничество в маркетинге', },
    { id: 11, name:  'Мешалкин Валерий',  year: '2020',   description: 'Инновации в маркетинге', },
    { id: 12, name:  'Панкрухин Александр',  year: '2020',   description: 'Лидерство в брендинге', },
    { id: 13, name:  'Сагинова Ольга', year: '2020',   description: 'Социальный и этичный маркетинг', },
    { id: 14, name:  'Хачатрян Мина',  year: '2020',   description: 'Международный маркетинговый вклад', },
    { id: 15, name:  'Жуковский Сергей',   year: '2020',   description: 'Образование и наставничество в маркетинге', },
    { id: 16, name:  'Чумаков Дмитрий',  year: '2021',   description: 'Инновации в маркетинге', },
    { id: 17, name:  'Соловьев Борис',  year: '2021',   description: 'Лидерство в брендинге', },
    { id: 18, name:  'Рожков Илья', year: '2021',   description: 'Социальный и этичный маркетинг', },
    { id: 19, name:  'Скотт Корнелия',  year: '2021',   description: 'Международный маркетинговый вклад', },
    { id: 20, name:  'Шевченко Дмитрий',   year: '2021',   description: 'Образование и наставничество в маркетинге', },
    { id: 21, name:  'Нечаев Владислав',  year: '2022',   description: 'Инновации в маркетинге', },
    { id: 22, name:  'Дымшиц Михаил',  year: '2022',   description: 'Лидерство в брендинге', },
    { id: 23, name:  'Есепова Ирина', year: '2022',   description: 'Социальный и этичный маркетинг', },
    { id: 24, name:  'Фролова Наталья',  year: '2022',   description: 'Международный маркетинговый вклад', },
    { id: 25, name:  'Иванов Александр',   year: '2022',   description: 'Образование и наставничество в маркетинге', },
    { id: 26, name:  'Икрамов Мурат', year: '2023',   description: 'Инновации в маркетинге', },
    { id: 27, name:  'Кафтанжиев Христо', year: '2023',   description: 'Лидерство в брендинге', },
    { id: 28, name:  'Качалов Игорь', year: '2023',   description: 'Социальный и этичный маркетинг', },
    { id: 29, name:  'Партизпанян Айк', year: '2023',   description: 'Международный маркетинговый вклад', },
    { id: 30, name:  'Коро Николас',  year: '2023',   description:'Образование и наставничество в маркетинге', },
  ];

function MembersOfOrder() {
  return (
    <div className="xContent p-box py-6">
        <Helmet>
        <title>Кавалеры Орденского Знака</title>
        <meta
        name="description"
        content="Кавалеры Орденского Знака «ЗА ЗАСЛУГИ В МАРКЕТИНГЕ»"
        />
        <link rel="canonical" href="https://marketing-association.com/membersoforder" />
      </Helmet>
      <h1 className="title is-font-title-regular has-text-centered has-text-var-blue">КАВАЛЕРЫ ОРДЕНСКОГО ЗНАКА «ЗА ЗАСЛУГИ В МАРКЕТИНГЕ»</h1>
      <div className="expertsTable">
      <table>
        <thead>
          <tr>
            <th>ФИО</th>
            <th>Год вручения Ордена</th>
            <th>Номинация</th>
          </tr>
        </thead>
        <tbody>
          {expertsData.map(expert => (
            <tr key={expert.id}>
              <td>{expert.name}</td>
              <td>{expert.year}</td>
              <td>{expert.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default MembersOfOrder;
