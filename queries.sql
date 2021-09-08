create table crewing_vac(
    id int PRIMARY key auto_increment, 
    nameVac VARCHAR(255),
    count VARCHAR(255), 
    text VARCHAR(255), 
    sudno VARCHAR(255), 
    date VARCHAR(255), 
    price VARCHAR(255)
);


create table crewing_data(
    id int PRIMARY key auto_increment, 
    phone varchar(255),
    about_1 varchar(2000),
    about_2 varchar(2000),
    about_3 varchar(2000),
    about_4 varchar(2000),
    education_1 VARCHAR(2000),
    education_2 VARCHAR(2000),
    count_type VARCHAR(255),
    people_count VARCHAR(255),
    nav_to_sudna VARCHAR(255)
);


insert into crewing_data(id, phone, about_1, about_2, about_3, about_4, education_1, education_2, count_type, people_count, nav_to_sudna) 
values(1, '8 771 545 58 88', 'Мы занимаемся крюинговой деятельностью, помогая морякам устраиваться на морские суда. Первостепенная задача нашей компании - обеспечить полный цикл необходимых инициатив для успешного трудоустройства наших клиентов. Так, мы проводим обязательное обучение, оказываем консультации, координируем клиента и сопровождаем его на протяжении всего срока сбора документов.', 'Мы ценим ваше время. Опытные специалисты нашей компании предпримут для вас все нужные шаги для получения достойной вакансии.', 'Качественное трудоустройство моряков на суда торгового флота', 'Памятник «Каравелла Колумба Санта-Мария», Актау', 'Одним из ключевых преимуществ работы с нашей компанией является качественное обучение. Перед приемом на работу вы сможете успешно завершить несколько курсов подготовки, улучшив собственные знания и навыки.', 'Для ознакомления с текущим списком активных курсов свяжитесь с нами по телефону: наш HR-менеджер с удовольствием проконсультирует вас по вопросам обучения.', '5', '119', 'Узнайте больше о кораблях, на которые мы трудоустраиваем');



insert into crewing_data(id, phone, about_1, about_2, about_3, about_4, education_1, education_2, count_type, people_count, nav_to_sudna) 
values(2, '8 771 545 58 88', 'Мы занимаемся крюинговой деятельностью, помогая морякам устраиваться на морские суда. Первостепенная задача нашей компании - обеспечить полный цикл необходимых инициатив для успешного трудоустройства наших клиентов. Так, мы проводим обязательное обучение, оказываем консультации, координируем клиента и сопровождаем его на протяжении всего срока сбора документов.', 'Мы ценим ваше время. Опытные специалисты нашей компании предпримут для вас все нужные шаги для получения достойной вакансии.', 'Качественное трудоустройство моряков на суда торгового флота', 'Памятник «Каравелла Колумба Санта-Мария», Актау', 'Одним из ключевых преимуществ работы с нашей компанией является качественное обучение. Перед приемом на работу вы сможете успешно завершить несколько курсов подготовки, улучшив собственные знания и навыки.', 'Для ознакомления с текущим списком активных курсов свяжитесь с нами по телефону: наш HR-менеджер с удовольствием проконсультирует вас по вопросам обучения.', '5', '119', 'Узнайте больше о кораблях, на которые мы трудоустраиваем');


insert into crewing_vac(nameVac, count, text, sudno, date, price) values('Капитан', '1', 'Deputy Harbour Master – Permanent – IOW – up to £40k plus benefits Cowes Harbour Commission (CHC) is working exclusively with Navis Consulting to appoint a new Deputy Harbour Master.', 'MCV Беркут', '4+1 месяца', '2000 USD');
insert into crewing_vac(nameVac, count, text, sudno, date, price) values('Старший помощник капитана', '2', 'Deputy Harbour Master – Permanent – IOW – up to £40k plus benefits Cowes Harbour Commission (CHC) is working exclusively with Navis Consulting to appoint a new Deputy Harbour Master.', 'MCV Беркут, Буксир Талас', '4+1 месяца', '1200 USD');
insert into crewing_vac(nameVac, count, text, sudno, date, price) values('Второй помощник капитана', '1', 'Deputy Harbour Master – Permanent – IOW – up to £40k plus benefits Cowes Harbour Commission (CHC) is working exclusively with Navis Consulting to appoint a new Deputy Harbour Master.', 'MCV Беркут, Буксир Талас', '4+1 месяца', '1200 USD');
insert into crewing_vac(nameVac, count, text, sudno, date, price) values('Третий помощник капитана', '1', 'Deputy Harbour Master – Permanent – IOW – up to £40k plus benefits Cowes Harbour Commission (CHC) is working exclusively with Navis Consulting to appoint a new Deputy Harbour Master.', 'MCV Беркут, Буксир Талас', '4+1 месяца', '1200 USD');
insert into crewing_vac(nameVac, count, text, sudno, date, price) values('Старший механик', '3', 'Deputy Harbour Master – Permanent – IOW – up to £40k plus benefits Cowes Harbour Commission (CHC) is working exclusively with Navis Consulting to appoint a new Deputy Harbour Master.', 'MCV Беркут, Буксир Талас', '4+1 месяца', '1200 USD');
insert into crewing_vac(nameVac, count, text, sudno, date, price) values('Второй механик', '1', 'Deputy Harbour Master – Permanent – IOW – up to £40k plus benefits Cowes Harbour Commission (CHC) is working exclusively with Navis Consulting to appoint a new Deputy Harbour Master.', 'MCV Беркут, Буксир Талас', '4+1 месяца', '1200 USD');
insert into crewing_vac(nameVac, count, text, sudno, date, price) values('Электромеханик', '1', 'Deputy Harbour Master – Permanent – IOW – up to £40k plus benefits Cowes Harbour Commission (CHC) is working exclusively with Navis Consulting to appoint a new Deputy Harbour Master.', 'MCV Беркут, Буксир Талас', '4+1 месяца', '1200 USD');
insert into crewing_vac(nameVac, count, text, sudno, date, price) values('Боцман', '1', 'Deputy Harbour Master – Permanent – IOW – up to £40k plus benefits Cowes Harbour Commission (CHC) is working exclusively with Navis Consulting to appoint a new Deputy Harbour Master.', 'MCV Беркут, Буксир Талас', '4+1 месяца', '1200 USD');
insert into crewing_vac(nameVac, count, text, sudno, date, price) values('Матрос', '1', 'Deputy Harbour Master – Permanent – IOW – up to £40k plus benefits Cowes Harbour Commission (CHC) is working exclusively with Navis Consulting to appoint a new Deputy Harbour Master.', 'MCV Беркут, Буксир Талас', '4+1 месяца', '1200 USD');
insert into crewing_vac(nameVac, count, text, sudno, date, price) values('Моторист', '1', 'Deputy Harbour Master – Permanent – IOW – up to £40k plus benefits Cowes Harbour Commission (CHC) is working exclusively with Navis Consulting to appoint a new Deputy Harbour Master.', 'MCV Беркут, Буксир Талас', '4+1 месяца', '1200 USD');

