const CAT={
 'actionflow-2026':{t:'Актион HackFlow Challenge 2026',org:'Актион Цифровые решения',ownerId:'organizer',public:true,d:'10–20 ноября 2026',fmt:'Онлайн',venue:'УУНиТ, г. Уфа',finalDefenseFormat:'online',finalVenue:'Ссылка будет опубликована в расписании',desc:'Разработка цифровой среды для проведения студенческих хакатонов: командная работа, расписание, образовательный трек и сдача решений в одном пространстве.',businessCase:'Создайте сервис, который помогает участникам, экспертам и организаторам хакатона работать в одном пространстве: от формирования команды и планирования задач до обучения, расписания и сдачи проекта.',rules:['Участие командное; капитан регистрирует команду и подаёт решение.','Состав команды — от 2 до 5 человек.','Новые команды и приглашения доступны до указанного срока регистрации.'],registrationDeadline:'2026-11-09T23:59',st:'Идёт основной этап'},
 'bashkortostan-digital-sprint-2026':{t:'Башкортостан Digital Sprint 2026',org:'Цифровые проекты Башкортостана',ownerId:'organizer-2',public:false,d:'12–20 декабря 2026',fmt:'Онлайн',venue:'УУНиТ, г. Уфа',finalDefenseFormat:'online',finalVenue:'Ссылка будет опубликована в расписании',desc:'Закрытый хакатон по созданию цифровых сервисов для жителей и организаций региона.',businessCase:'Разработайте прототип цифрового сервиса, который решает практическую задачу региона и может быть проверен на реальных пользовательских сценариях.',rules:['Участие командное; состав и сроки устанавливает организатор.','Материалы хакатона доступны только организатору и приглашённым участникам.'],registrationDeadline:'2026-12-10T23:59',st:'Идёт регистрация'}
};
const MAIN_HACKATHON='actionflow-2026';
const SECOND_HACKATHON='bashkortostan-digital-sprint-2026';
const DEMO_SCENARIO_VERSION=5;
const SEMIFINAL_CRITERIA=[
 {id:'mainFlow',label:'Работоспособность основного сценария',description:'Можно ли полностью пройти основной пользовательский путь от начала до результата без критических ошибок.'},
 {id:'otherFlows',label:'Корректность работы остальных сценариев',description:'Насколько корректно система обрабатывает действия пользователя и данные, формируя ожидаемый результат.'},
 {id:'reviewReadiness',label:'Качество подготовки решения к ревью',description:'Понятно ли ревьюерам, как запустить и проверить решение без помощи команды.'},
 {id:'userLogic',label:'Логичность реализации для пользователя',description:'Последовательность и удобство сценариев, структура интерфейса и обработка ошибок.'},
 {id:'caseCoverage',label:'Полнота реализации кейса',description:'Насколько полно реализованы предусмотренные кейсом сценарии и требования.'},
 {id:'enhancements',label:'Проработка дополнительных возможностей',description:'Полезность и актуальность функций, усиливающих основное решение.'}
];
const FINAL_CRITERIA=[
 {id:'productQuality',label:'Качество продукта',description:'Соответствие задаче кейса, полнота основного сценария и результат для целевого пользователя.'},
 {id:'usability',label:'Пользовательский интерфейс и удобство',description:'Понятность, логичность и удобство интерфейса.'},
 {id:'demonstration',label:'Качество демонстрации',description:'Наглядность и последовательность показа основного сценария, возможностей и результата.'},
 {id:'productDecisions',label:'Продуктовые решения',description:'Понимание потребностей пользователя и обоснованность выбранного сценария и функциональности.'},
 {id:'teamwork',label:'Командная работа',description:'Распределение ролей, понимание вкладов участников и организация совместной работы.'},
 {id:'answers',label:'Ответы на вопросы',description:'Уверенные и содержательные ответы, понимание ограничений и обоснование решений.'}
];
const EVALUATION_STAGES={semifinal:{label:'Полуфинал',criteria:SEMIFINAL_CRITERIA},final:{label:'Финал',criteria:FINAL_CRITERIA}};
const stageCriteria=stage=>EVALUATION_STAGES[stage]?.criteria||SEMIFINAL_CRITERIA;
const STORE='hackflow-local-v3';
const LEGACY_STORE='hackflow-local-v2';
const MAX_SUBMISSION_FILE_SIZE=1024*1024;
const PALETTES=[
 {id:'violet',name:'Фиолетовая',swatch:'#5b4bff',darkSwatch:'#aa9cff'},
 {id:'ocean',name:'Океан',swatch:'#2478c8',darkSwatch:'#69b5ff'},
 {id:'turquoise',name:'Бирюзовая',swatch:'#008d91',darkSwatch:'#55d5d0'},
 {id:'emerald',name:'Изумрудная',swatch:'#078458',darkSwatch:'#64d5a0'},
 {id:'amber',name:'Янтарная',swatch:'#b77700',darkSwatch:'#ffd06a'},
 {id:'coral',name:'Коралловая',swatch:'#d45e4c',darkSwatch:'#ff927f'},
 {id:'rose',name:'Розовая',swatch:'#b74777',darkSwatch:'#f28bb7'},
 {id:'graphite',name:'Графитовая',swatch:'#8c7cff',darkSwatch:'#b3a5ff'}
];
const DEMO_EXPERTS=[
 {id:'demo-expert-1',firstName:'Елена',lastName:'Смирнова',email:'expert1@hackflow.local',password:'expert2026',organization:'AI Lab',about:'Работаю с продуктовой аналитикой и прототипами цифровых сервисов. Помогаю командам проверять гипотезы и делать решения понятными пользователям.',role:'expert',verified:true},
 {id:'demo-expert-2',firstName:'Дмитрий',lastName:'Орлов',email:'expert2@hackflow.local',password:'expert2026',organization:'Центр цифровых решений',about:'Специализируюсь на веб-разработке и архитектуре. Оцениваю качество реализации, устойчивость сценариев и готовность проекта к развитию.',role:'expert',verified:true},
 {id:'demo-expert-3',firstName:'Наталья',lastName:'Белова',email:'expert3@hackflow.local',password:'expert2026',organization:'УУНиТ',about:'Занимаюсь пользовательскими исследованиями и доступностью интерфейсов. Люблю видеть в проекте обоснованные решения и понятную демонстрацию.',role:'expert',verified:true},
 {id:'demo-expert-4',firstName:'Павел',lastName:'Иванов',email:'expert4@hackflow.local',password:'expert2026',organization:'DevLab',about:'Разрабатываю цифровые продукты и участвую в запуске MVP. Помогаю командам выделять главный сценарий и проверять его на практике.',role:'expert',verified:true},
 {id:'demo-expert-5',firstName:'Алина',lastName:'Громова',email:'expert5@hackflow.local',password:'expert2026',organization:'Product Studio',about:'Продуктовый менеджер с опытом в EdTech. Интересуюсь ценностью решения, командным взаимодействием и качеством ответа на запрос пользователя.',role:'expert',verified:true}
].map(user=>({...user,name:`${user.firstName} ${user.lastName}`}));
const DEMO_MENTORS=[
 {id:'demo-mentor-1',firstName:'Марина',lastName:'Крылова',email:'mentor@hackflow.local',password:'mentor2026',organization:'HackFlow',role:'mentor',verified:true}
].map(user=>({...user,name:`${user.firstName} ${user.lastName}`}));
const PARTICIPANT_FACULTY='ИИМРТ';
const PARTICIPANT_UNIVERSITY='УУНиТ';
const UNIVERSITY_OPTIONS=window.HACKFLOW_UNIVERSITIES;
if(!Array.isArray(UNIVERSITY_OPTIONS)||!UNIVERSITY_OPTIONS.length)throw new Error('Не загружен список российских вузов.');
const UNIVERSITIES=UNIVERSITY_OPTIONS.map(option=>option.value);
const DEMO_PARTICIPANTS=[
 ['Алина','Соколова','ПРО-1010Б'],['Тимур','Ахметов','ПРО-1010Б'],['Мария','Кузнецова','ПРО-1010Б'],['Илья','Петров','ПРО-1010Б'],
 ['София','Волкова','ТОП-2011Б'],['Артём','Михайлов','ТОП-2011Б'],['Полина','Новикова','ТОП-2011Б'],
 ['Кирилл','Фёдоров','ИВТ-1022Б'],['Дарья','Морозова','ИВТ-1022Б'],['Максим','Лебедев','ИВТ-1022Б'],
 ['Ева','Павлова','ПИ-2033Б'],['Никита','Семёнов','ПИ-2033Б'],['Виктория','Егорова','ПИ-2033Б'],
 ['Роман','Захаров','ПРО-1044Б'],['Анастасия','Борисова','ПРО-1044Б'],['Марк','Козлов','ПРО-1044Б'],
 ['Ксения','Власова','ТОП-2055Б'],['Денис','Попов','ТОП-2055Б'],['Юлия','Соколова','ТОП-2055Б']
].map(([firstName,lastName,group],index)=>({
 id:`demo-participant-${String(index+1).padStart(2,'0')}`,firstName,lastName,name:`${firstName} ${lastName}`,faculty:PARTICIPANT_FACULTY,university:PARTICIPANT_UNIVERSITY,group,
 email:`participant${String(index+1).padStart(2,'0')}@hackflow.local`,password:'participant2026',role:'participant',verified:true
}));
const DEMO_TEAMS=[
 {id:'demo-team-neurocampus',hack:MAIN_HACKATHON,name:'FlowMakers',memberIds:['demo-participant-01','demo-participant-02','demo-participant-03','demo-participant-04'],captainId:'demo-participant-01',mentorId:'demo-mentor-1',status:'active'},
 {id:'demo-team-navigators',hack:MAIN_HACKATHON,name:'TaskForge',memberIds:['demo-participant-05','demo-participant-06','demo-participant-07'],captainId:'demo-participant-05',status:'active'},
 {id:'demo-team-lab404',hack:MAIN_HACKATHON,name:'EventLink',memberIds:['demo-participant-08','demo-participant-09','demo-participant-10'],captainId:'demo-participant-08',status:'active'},
 {id:'demo-team-smart-campus',hack:MAIN_HACKATHON,name:'MentorHub',memberIds:['demo-participant-11','demo-participant-12','demo-participant-13'],captainId:'demo-participant-11',status:'active'},
 {id:'demo-team-study-ai',hack:MAIN_HACKATHON,name:'SubmitLab',memberIds:['demo-participant-14','demo-participant-15','demo-participant-16'],captainId:'demo-participant-14',status:'active'},
 {id:'demo-team-campus-flow',hack:MAIN_HACKATHON,name:'TeamSpace',memberIds:['demo-participant-17','demo-participant-18','demo-participant-19'],captainId:'demo-participant-17',status:'active'}
];
const DEMO_SUBMISSIONS=[
 {teamId:'demo-team-neurocampus',name:'HackFlow: единое пространство команды',description:'Команда получает кейс и сроки, распределяет задачи по Kanban-доске, общается в приватном чате и отправляет итоговое решение организатору.',time:'14.11.2026, 12:00'},
 {teamId:'demo-team-navigators',name:'TaskForge: задачи и прогресс',description:'Командная доска связывает ответственных, сроки и статусы задач, а капитан видит общий прогресс работы.',time:'14.11.2026, 12:05'},
 {teamId:'demo-team-lab404',name:'EventLink: расписание и обучение',description:'Единый календарь мероприятий и образовательный трек помогают участникам не пропускать вебинары и дедлайны.',time:'14.11.2026, 12:10'},
 {teamId:'demo-team-smart-campus',name:'MentorHub: обратная связь',description:'Эксперт получает проект команды, оставляет закрытую оценку и отдельно отправляет участникам рекомендации.',time:'14.11.2026, 12:15'},
 {teamId:'demo-team-study-ai',name:'SubmitLab: сдача проектов',description:'Капитан отправляет ссылку или файл проекта, а организатор отслеживает статус и время сдачи.',time:'14.11.2026, 12:20'},
 {teamId:'demo-team-campus-flow',name:'TeamSpace: рабочее пространство',description:'Участники одной команды совместно работают с задачами и материалами, недоступными другим командам.',time:'14.11.2026, 12:25'}
];
const DEMO_EVALUATIONS=[
 {id:'demo-eval-neuro-1',teamId:'demo-team-neurocampus',expertId:'demo-expert-1',scores:{value:9,feasibility:8,prototype:9,ux:8,presentation:9},comment:'Сильный сквозной сценарий участника и понятная ценность единого пространства. Добавьте больше данных о ходе работы команды.',updatedAt:'14.11.2026, 12:30'},
 {id:'demo-eval-neuro-2',teamId:'demo-team-neurocampus',expertId:'demo-expert-2',scores:{value:8,feasibility:9,prototype:8,ux:9,presentation:8},comment:'Хорошо связаны кейс, задачи, коммуникация и сдача проекта; интерфейс понятен с первого использования.',updatedAt:'14.11.2026, 12:35'},
 {id:'demo-eval-navigators-1',teamId:'demo-team-navigators',expertId:'demo-expert-1',scores:{value:8,feasibility:9,prototype:7,ux:9,presentation:8},comment:'Практичная доска задач с понятным прогрессом. Стоит добавить наглядный обзор дедлайнов.',updatedAt:'14.11.2026, 12:40'},
 {id:'demo-eval-navigators-2',teamId:'demo-team-navigators',expertId:'demo-expert-2',scores:{value:8,feasibility:8,prototype:8,ux:9,presentation:9},comment:'Роли и статусы задач понятны; сценарий капитана можно показать ещё короче.',updatedAt:'14.11.2026, 12:45'},
 {id:'demo-eval-lab404-1',teamId:'demo-team-lab404',expertId:'demo-expert-1',scores:{value:7,feasibility:8,prototype:8,ux:7,presentation:8},comment:'Расписание и материалы дополняют командную работу. Уточните, как участник узнаёт об изменениях.',updatedAt:'14.11.2026, 12:50'},
 {id:'demo-eval-lab404-2',teamId:'demo-team-lab404',expertId:'demo-expert-2',scores:{value:8,feasibility:7,prototype:8,ux:8,presentation:7},comment:'Структура образовательного трека логична; полезно показывать ссылки на конкретные материалы.',updatedAt:'14.11.2026, 12:55'},
 {id:'demo-eval-smart-1',teamId:'demo-team-smart-campus',expertId:'demo-expert-1',scores:{value:9,feasibility:7,prototype:8,ux:8,presentation:7},comment:'Обратная связь полезна команде; разделение закрытых оценок и открытых комментариев прозрачно.',updatedAt:'14.11.2026, 13:00'},
 {id:'demo-eval-smart-2',teamId:'demo-team-smart-campus',expertId:'demo-expert-2',scores:{value:8,feasibility:8,prototype:8,ux:7,presentation:8},comment:'Хорошая модель взаимодействия с экспертами. Покажите, как организатор назначает ревьюера.',updatedAt:'14.11.2026, 13:05'},
 {id:'demo-eval-study-1',teamId:'demo-team-study-ai',expertId:'demo-expert-1',scores:{value:7,feasibility:8,prototype:7,ux:9,presentation:8},comment:'Форма сдачи проекта понятна. В демо стоит показать реальный файл или рабочую ссылку на решение.',updatedAt:'14.11.2026, 13:10'},
 {id:'demo-eval-study-2',teamId:'demo-team-study-ai',expertId:'demo-expert-2',scores:{value:8,feasibility:8,prototype:7,ux:8,presentation:8},comment:'Метаданные проекта и дедлайн хорошо видны; добавьте состояние сдачи для команды и организатора.',updatedAt:'14.11.2026, 13:15'},
 {id:'demo-eval-flow-1',teamId:'demo-team-campus-flow',expertId:'demo-expert-1',scores:{value:8,feasibility:7,prototype:9,ux:8,presentation:8},comment:'Закрытое пространство команды соответствует потребности; важно сохранить серверную проверку доступа.',updatedAt:'14.11.2026, 13:20'},
 {id:'demo-eval-flow-2',teamId:'demo-team-campus-flow',expertId:'demo-expert-2',scores:{value:8,feasibility:7,prototype:8,ux:8,presentation:9},comment:'Хорошая основа для совместной работы; добавьте ссылки на материалы и проектный результат.',updatedAt:'14.11.2026, 13:25'}
].map(evaluation=>{
 const score=value=>Math.max(0,Math.min(5,Math.round(Number(value||0)/2)));
 return {...evaluation,hackId:MAIN_HACKATHON,stage:'semifinal',scores:{mainFlow:score(evaluation.scores.value),otherFlows:score(evaluation.scores.feasibility),reviewReadiness:score(evaluation.scores.presentation),userLogic:score(evaluation.scores.ux),caseCoverage:score(evaluation.scores.prototype),enhancements:score(evaluation.scores.feasibility)}};
});
const DEMO_TASKS={
 'demo-team-neurocampus':[
  {id:'task-flow-case',t:'Разобрать требования кейса',description:'Согласовать роли участника, капитана, эксперта и организатора.',w:'demo-participant-02',due:'2026-11-14',s:3},
  {id:'task-flow-board',t:'Настроить доску и дедлайны',description:'Проверить переходы задач между четырьмя статусами.',w:'demo-participant-03',due:'2026-11-16',s:2},
  {id:'task-flow-notifications',t:'Проверить уведомления',description:'Убедиться, что уведомления команды не видны другим командам.',w:'demo-participant-04',due:'2026-11-17',s:1},
  {id:'task-flow-demo',t:'Подготовить сквозное демо',description:'Показать путь от командной работы до отправки проекта.',w:'demo-participant-01',due:'2026-11-19',s:0}
 ],
 'demo-team-navigators':[{id:'task-forge-flow',t:'Подготовить сценарий Kanban',description:'Показать назначение ответственного и срока.',w:'demo-participant-06',due:'2026-11-16',s:2}],
 'demo-team-lab404':[{id:'task-event-content',t:'Собрать расписание и материалы',description:'Связать вебинар с образовательным треком.',w:'demo-participant-09',due:'2026-11-17',s:1}],
 'demo-team-smart-campus':[{id:'task-review-flow',t:'Проверить обратную связь эксперта',description:'Разделить закрытые оценки и комментарии команде.',w:'demo-participant-12',due:'2026-11-18',s:3}],
 'demo-team-study-ai':[{id:'task-submit-check',t:'Проверить отправку проекта',description:'Убедиться, что организатор видит решение и время сдачи.',w:'demo-participant-15',due:'2026-11-19',s:2}],
 'demo-team-campus-flow':[{id:'task-team-space',t:'Проверить доступ к пространству',description:'Убедиться, что рабочие материалы отделены от других команд.',w:'demo-participant-18',due:'2026-11-19',s:1}]
};
const seed={
 users:[
  {id:'organizer',name:'Организатор',firstName:'Организатор',email:'organizer@hackflow.local',password:'organizer2026',organization:'HackFlow',role:'organizer',verified:true},
  {id:'organizer-2',name:'Алексей Воронов',firstName:'Алексей',lastName:'Воронов',email:'organizer2@hackflow.local',password:'organizer22026',organization:'Цифровые проекты Башкортостана',role:'organizer',verified:true},
  ...DEMO_EXPERTS,...DEMO_MENTORS,...DEMO_PARTICIPANTS
 ],
 hacks:Object.entries(CAT).map(([id,hack])=>({id,...hack})),
 teams:DEMO_TEAMS,invites:[],tasks:DEMO_TASKS,
 hackExpertInvites:[
  {id:'hack-expert-main-1',hackId:MAIN_HACKATHON,organizerId:'organizer',expertId:'demo-expert-1',status:'accepted'},
  {id:'hack-expert-main-2',hackId:MAIN_HACKATHON,organizerId:'organizer',expertId:'demo-expert-2',status:'accepted'},
  {id:'hack-expert-second-1',hackId:SECOND_HACKATHON,organizerId:'organizer-2',expertId:'demo-expert-1',status:'pending'},
  {id:'hack-expert-second-2',hackId:SECOND_HACKATHON,organizerId:'organizer-2',expertId:'demo-expert-2',status:'pending'}
 ],
 learn:[
  {hack:MAIN_HACKATHON,m:'Модуль 1. Кейс и требования',i:[{id:'a',ty:'🎬',t:'Разбор бизнес-кейса HackFlow',d:'Видеоурок · 24 мин',u:'https://rutube.ru',x:1},{id:'b',ty:'📑',t:'Критерии оценки и формат защиты',d:'Презентация',u:'https://docs.google.com',x:1}]},
  {hack:MAIN_HACKATHON,m:'Модуль 2. Разработка MVP',i:[{id:'c',ty:'📡',t:'Вебинар: архитектура веб-приложения',d:'Яндекс Телемост · 12 нояб.',u:'https://telemost.yandex.ru',x:1},{id:'d',ty:'🎬',t:'Kanban и чат на практике',d:'Видеоурок · 31 мин',u:'https://rutube.ru',x:0},{id:'e',ty:'📄',t:'Шаблон README и инструкции для ревью',d:'Документ',u:'https://docs.google.com',x:0}]},
  {hack:MAIN_HACKATHON,m:'Модуль 3. Защита проекта',i:[{id:'f',ty:'📑',t:'Как питчить продукт за 5 минут',d:'Презентация',u:'https://docs.google.com',x:0},{id:'g',ty:'📡',t:'Консультация с экспертами',d:'Zoom · 16 нояб.',u:'https://zoom.us',x:0}]}
 ],
 events:[
  {hack:MAIN_HACKATHON,date:'2026-11-10',time:'10:00',title:'Старт хакатона',type:'Старт'},
  {hack:MAIN_HACKATHON,date:'2026-11-10',time:'12:00',title:'Публикация кейса',type:'Кейс'},
  {hack:MAIN_HACKATHON,date:'2026-11-12',time:'15:00',title:'Вебинар: архитектура веб-приложения',type:'Вебинар',speaker:'Иван Иванов, эксперт',link:'https://telemost.yandex.ru'},
  {hack:MAIN_HACKATHON,date:'2026-11-14',time:'18:00',title:'Промежуточный дедлайн: рабочий прототип',type:'Дедлайн'},
  {hack:MAIN_HACKATHON,date:'2026-11-16',time:'16:00',title:'Консультация с экспертами',type:'Консультация',speaker:'Мария Орлова, ментор',link:'https://zoom.us'},
  {hack:MAIN_HACKATHON,date:'2026-11-20',time:'18:00',title:'Срок сдачи проекта',type:'Дедлайн',submissionDeadline:true},
  {hack:MAIN_HACKATHON,date:'2026-11-22',time:'11:00',title:'Финальная защита',type:'Защита',speaker:'Жюри хакатона',link:'https://telemost.yandex.ru'},
  {hack:MAIN_HACKATHON,date:'2026-11-25',time:'12:00',title:'Публикация результатов',type:'Итоги'}
 ],
 chats:{},hackathonChats:{},submissions:DEMO_SUBMISSIONS,feedback:[],mentorComments:[{id:'mentor-comment-demo',teamId:'demo-team-neurocampus',userId:'demo-mentor-1',text:'Проверьте, чтобы первый запуск был понятен участнику без помощи организатора.',time:'14.11.2026, 14:00'}],evaluations:DEMO_EVALUATIONS,finalistTeams:{},semifinalResultsPublished:{},
 notifications:[
  {id:'notification-hack-invite-1',recipientId:'demo-expert-1',type:'hackInvite',text:'Вас пригласили экспертом на хакатон «Башкортостан Digital Sprint 2026».',detail:'Организатор Алексей Воронов приглашает вас присоединиться к экспертам хакатона. Примите или отклоните приглашение в этом уведомлении.',time:'14.11.2026, 17:00',read:false,hackId:SECOND_HACKATHON,hackExpertInviteId:'hack-expert-second-1'},
  {id:'notification-hack-invite-2',recipientId:'demo-expert-2',type:'hackInvite',text:'Вас пригласили экспертом на хакатон «Башкортостан Digital Sprint 2026».',detail:'Организатор Алексей Воронов приглашает вас присоединиться к экспертам хакатона. Примите или отклоните приглашение в этом уведомлении.',time:'14.11.2026, 17:00',read:false,hackId:SECOND_HACKATHON,hackExpertInviteId:'hack-expert-second-2'}
 ],
 currentUserId:null,selectedTeamByUser:{},caseDescriptions:{},hackathonEdits:{},learningProgress:{},deadlineReminderKeys:[],palette:'auto',paletteMode:'auto',demoScenarioVersion:DEMO_SCENARIO_VERSION
};
function loadState(){
 const raw=localStorage.getItem(STORE);
 if(!raw){localStorage.removeItem(LEGACY_STORE);return structuredClone(seed)}
 try{
  const saved=JSON.parse(raw);
  const defaults=structuredClone(seed),mergeSeededRecords=(items,stored,key)=>{
   const records=new Map(items.map(item=>[item[key],item]));
   if(Array.isArray(stored))stored.forEach(item=>{if(item&&item[key])records.set(item[key],item)});
   return [...records.values()];
  };
  const state={...defaults,...saved};
  state.demoScenarioVersion=saved.demoScenarioVersion;
  state.hacks=mergeSeededRecords(defaults.hacks,saved.hacks,'id');
  state.users=mergeSeededRecords(defaults.users,saved.users,'id');
  state.teams=mergeSeededRecords(defaults.teams,saved.teams,'id');
  state.submissions=mergeSeededRecords(defaults.submissions,saved.submissions,'teamId');
  state.evaluations=mergeSeededRecords(defaults.evaluations,saved.evaluations,'id');
  state.hackExpertInvites=mergeSeededRecords(defaults.hackExpertInvites,saved.hackExpertInvites,'id');
  state.notifications=mergeSeededRecords(defaults.notifications,saved.notifications,'id');
  if(saved.demoScenarioVersion!==DEMO_SCENARIO_VERSION){
   const demoTeams=new Map(defaults.teams.map(team=>[team.id,team])),demoSubmissions=new Map(defaults.submissions.map(submission=>[submission.teamId,submission])),demoEvaluations=new Map(defaults.evaluations.map(evaluation=>[evaluation.id,evaluation]));
   state.teams=state.teams.map(team=>demoTeams.has(team.id)?structuredClone(demoTeams.get(team.id)):team);
   state.submissions=state.submissions.map(submission=>demoSubmissions.has(submission.teamId)?structuredClone(demoSubmissions.get(submission.teamId)):submission);
   state.evaluations=state.evaluations.map(evaluation=>demoEvaluations.has(evaluation.id)?structuredClone(demoEvaluations.get(evaluation.id)):evaluation);
   state.tasks={...(state.tasks||{})};
   defaults.teams.forEach(team=>{if(!Array.isArray(state.tasks[team.id])||!state.tasks[team.id].length)state.tasks[team.id]=structuredClone(defaults.tasks[team.id]||[])});
  }
  const inviteRecords=new Map((defaults.invites||[]).map(invite=>[`${invite.teamId}:${invite.email.toLowerCase()}`,invite]));
  if(Array.isArray(saved.invites))saved.invites.forEach(invite=>{if(invite?.teamId&&invite.email)inviteRecords.set(`${invite.teamId}:${invite.email.toLowerCase()}`,invite)});
  state.invites=[...inviteRecords.values()];
  if(!['auto','light','dark'].includes(saved.paletteMode))state.paletteMode=saved.palette==='graphite'?'dark':saved.palette==='auto'?'auto':'light';
  if(!saved.learningProgress){
   state.learningProgress={};
   if(saved.currentUserId)state.learningProgress[saved.currentUserId]=Object.fromEntries(state.learn.flatMap(module=>module.i).map(item=>[item.id,Boolean(item.x)]));
   const initialProgress=new Map(seed.learn.flatMap(module=>module.i).map(item=>[item.id,item.x]));
   state.learn=state.learn.map(module=>({...module,i:module.i.map(item=>initialProgress.has(item.id)?{...item,x:initialProgress.get(item.id)}:item)}));
  }
  return state;
 }catch(error){
  console.error('Не удалось прочитать локальные данные HackFlow:',error);
  return structuredClone(seed);
 }
}
let data=loadState(),view='home',cur=null,hackSection='overview',hackMenuOpen=false,authMode='login',editingTaskId=null,editingMaterialId=null,organizerTab=null,notificationsFilter='all',selectedNotificationId=null,notificationSequence=0,leaderboardSortBy={},leaderboardSortDirection={},reviewStageByHack={};
if(data.currentUserId&&!seed.users.some(user=>user.id===data.currentUserId))data.currentUserId=null;
const needsDemoMigration=data.demoScenarioVersion!==DEMO_SCENARIO_VERSION;
let madeCreatedHackathonsPublic=false;
data.demoScenarioVersion=DEMO_SCENARIO_VERSION;
data.notifications=(Array.isArray(data.notifications)?data.notifications:[]).filter(notification=>notification?.recipientId&&data.users.some(user=>user.id===notification.recipientId));
data.notifications.forEach((notification,index)=>{if(!notification.id)notification.id=`notification-legacy-${index}-${Date.now()}`});
if(!data.hackathonChats||typeof data.hackathonChats!=='object'||Array.isArray(data.hackathonChats))data.hackathonChats={};
data.users.forEach(user=>{
 const demo=seed.users.find(item=>item.id===user.id);
 if(demo)Object.assign(user,{name:demo.name,firstName:demo.firstName,lastName:demo.lastName,faculty:demo.faculty,university:demo.university,group:demo.group,about:demo.about});
 if(user.role==='expert')user.verified=true;
});
data.events.forEach(event=>{if(event.speaker?.includes('Игорь Петров'))event.speaker=event.speaker.replace('Игорь Петров','Иван Иванов')});
data.hacks.forEach(record=>{
 const{id,...hack}=record;
 if(hack.finalDefenseFormat==='online'&&hack.finalVenue?.startsWith('Онлайн · '))hack.finalVenue=hack.finalVenue.slice('Онлайн · '.length);
 if(id&&id!==MAIN_HACKATHON&&id!==SECOND_HACKATHON){
  if(hack.public!==true){hack.public=true;record.public=true;madeCreatedHackathonsPublic=true}
  if(hack.rules?.[0]==='Участие возможно только по приглашению организатора.'){
   hack.rules=['Участие командное; капитан регистрирует команду и подаёт решение.','Состав команды и сроки участия определяются организатором.'];
   record.rules=hack.rules;madeCreatedHackathonsPublic=true;
  }
 }
 if(id)CAT[id]={...CAT[id],...hack};
});
data.events.forEach(event=>{if(event.title==='Срок сдачи проекта')event.submissionDeadline=true});
data.teams.forEach(team=>{if(team.mentor==='Игорь Петров')team.mentor='Иван Иванов';if(!team.mentorId&&team.mentor)team.mentorId=data.users.find(user=>user.role==='mentor'&&user.name===team.mentor)?.id});
data.invites.forEach(invite=>{const team=data.teams.find(item=>item.id===invite.teamId);if(team){invite.hack=invite.hack||team.hack;invite.teamName=team.name}});
data.finalistTeams=data.finalistTeams||{};
data.semifinalResultsPublished=data.semifinalResultsPublished||{};
data.evaluations.forEach(evaluation=>{
 const team=data.teams.find(item=>item.id===evaluation.teamId);
 evaluation.hackId=evaluation.hackId||team?.hack;
 if(!EVALUATION_STAGES[evaluation.stage]){
  const old=evaluation.scores||{},score=value=>Math.max(0,Math.min(5,Math.round(Number(value||0)/2)));
  evaluation.stage='semifinal';
  evaluation.scores=old.mainFlow!==undefined?old:{mainFlow:score(old.value),otherFlows:score(old.feasibility),reviewReadiness:score(old.presentation),userLogic:score(old.ux),caseCoverage:score(old.prototype),enhancements:score(old.feasibility)};
 }
});
Object.entries(data.hackathonEdits||{}).forEach(([id,edits])=>{if(CAT[id])Object.assign(CAT[id],edits)});
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const normalizeUniversitySearch=value=>String(value??'').toLocaleLowerCase('ru-RU').replace(/ё/g,'е').trim();
const save=()=>localStorage.setItem(STORE,JSON.stringify(data));
if(needsDemoMigration||madeCreatedHackathonsPublic)save();
const me=()=>data.users.find(u=>u.id===data.currentUserId);
function syncSupabaseUser(authUser){
 if(!authUser?.id||!authUser.email)throw new Error('В аккаунте Supabase не указан адрес электронной почты.');
 const metadata=authUser.user_metadata||{},email=authUser.email.toLowerCase();
 const profileValue=(key,fallback='')=>typeof metadata[key]==='string'&&metadata[key].trim()?metadata[key].trim():fallback;
 let user=data.users.find(candidate=>candidate.id===authUser.id);
 if(!user)user=data.users.find(candidate=>candidate.email.toLowerCase()===email&&!seed.users.some(demo=>demo.id===candidate.id));
 if(user&&user.id!==authUser.id){
  const previousId=user.id;
  const replaceId=value=>{
   if(Array.isArray(value)){value.forEach((item,index)=>{if(item===previousId)value[index]=authUser.id;else replaceId(item)});return}
   if(value&&typeof value==='object')Object.keys(value).forEach(key=>{if(value[key]===previousId)value[key]=authUser.id;else replaceId(value[key])});
  };
  replaceId(data);
 }
 const firstName=profileValue('firstName',user?.firstName||email.split('@')[0]),lastName=profileValue('lastName',user?.lastName||'');
 const role=['participant','expert','mentor'].includes(metadata.role)?metadata.role:['participant','expert','mentor'].includes(user?.role)?user.role:'participant';
 const profile={
  id:authUser.id,email,name:`${firstName} ${lastName}`.trim(),firstName,lastName,role,verified:true,
  university:profileValue('university',user?.university||''),faculty:profileValue('faculty',user?.faculty||''),
  group:profileValue('group',user?.group||''),organization:profileValue('organization',user?.organization||''),
  about:profileValue('about',user?.about||'')
 };
 if(user){Object.assign(user,profile);delete user.password}
 else{user=profile;data.users.push(user)}
 return user;
}
const roleName={participant:'Участник',organizer:'Организатор',expert:'Эксперт',mentor:'Ментор'};
const hackIds=()=>Object.keys(CAT);
const ownerOfHack=hackId=>CAT[hackId]?.ownerId||'organizer';
const canManageHack=(hackId,user=me())=>Boolean(user?.role==='organizer'&&ownerOfHack(hackId)===user.id);
const expertInvitation=(hackId,userId=me()?.id)=>{
 const latest=[...data.hackExpertInvites].reverse().find(invite=>invite.hackId===hackId&&invite.expertId===userId);
 return latest?.status==='accepted'?latest:undefined;
};
const canReviewHack=(hackId,user=me())=>Boolean(user?.role==='expert'&&user.verified&&expertInvitation(hackId,user.id));
const mentorTeam=(hackId,userId=me()?.id)=>data.teams.find(team=>team.hack===hackId&&team.mentorId===userId);
const canAccessHack=(hackId,user=me())=>{
 if(!user||!CAT[hackId])return false;
 if(canManageHack(hackId,user)||canReviewHack(hackId,user))return true;
 if(user.role==='mentor')return Boolean(mentorTeam(hackId,user.id));
 return user.role==='participant'&&(CAT[hackId].public===true||data.teams.some(team=>team.hack===hackId&&team.memberIds.includes(user.id)));
};
const accessibleHackIds=(user=me())=>hackIds().filter(hackId=>canAccessHack(hackId,user));
const canEvaluateHack=(hackId,user=me())=>canReviewHack(hackId,user);
const roleIn=(team,userId)=>team.captainId===userId?'Капитан':'Участник';
const myTeams=()=>data.teams.filter(t=>t.memberIds.includes(data.currentUserId)||t.mentorId===data.currentUserId);
const currentTeam=()=>{
 const active=myTeams().filter(t=>t.status==='active'),selected=data.selectedTeamByUser[data.currentUserId];
 if(view==='hack'&&cur)return active.find(t=>t.hack===cur)||null;
 return active.find(t=>t.id===selected)||active[0]||null;
};
const isCaptain=t=>Boolean(t&&t.captainId===data.currentUserId);
const currentRole=()=>me().role==='organizer'||me().role==='expert'||me().role==='mentor'?roleName[me().role]:isCaptain(currentTeam())?'Капитан':'Участник';
const caseDescription=id=>data.caseDescriptions[id]||CAT[id]?.businessCase||CAT[id]?.desc||'';
const registrationDeadline=id=>{const value=CAT[id]?.registrationDeadline,date=value?new Date(value):null;return date&&Number.isFinite(date.getTime())?date:null};
const registrationIsOpen=id=>{const deadline=registrationDeadline(id);return Boolean(deadline)&&CAT[id]?.st!=='Завершён'&&Date.now()<=deadline.getTime()};
const teamComposition=team=>{
 if(!team)return 'Состав команды пока не определён.';
 const members=team.memberIds.map(id=>data.users.find(user=>user.id===id)).filter(Boolean);
 const roster=members.map(user=>`${user.name} — ${roleIn(team,user.id)}`);
 const pending=data.invites.filter(invite=>invite.teamId===team.id&&!invite.accepted&&!team.memberIds.some(id=>data.users.find(user=>user.id===id)?.email.toLowerCase()===invite.email.toLowerCase())).map(invite=>`${invite.email} — ожидает принятия приглашения`);
 return `Состав команды «${team.name}»:\n${[...roster,...pending].join('\n')||'Пока участников нет.'}`;
};
const learningComplete=(userId,item)=>Boolean(data.learningProgress?.[userId]?.[item.id]??item.x);
const teamLearningProgress=team=>{
 const items=data.learn.filter(module=>module.hack===team.hack).flatMap(module=>module.i);
 const total=items.length*team.memberIds.length;
 const done=team.memberIds.reduce((count,userId)=>count+items.filter(item=>learningComplete(userId,item)).length,0);
 return {done,total,percent:total?Math.round(done/total*100):0};
};
const localDateKey=()=>{
 const now=new Date();
 return `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
};
const submissionDeadline=hackId=>{
 const event=data.events.find(item=>item.hack===hackId&&item.submissionDeadline);
 return event?new Date(`${event.date}T${event.time||'23:59'}`):null;
};
function applyPalette(){
 const selected=PALETTES.find(palette=>palette.id===data.palette),root=document.documentElement;
 const dark=data.paletteMode==='dark'||data.paletteMode==='auto'&&window.matchMedia('(prefers-color-scheme: dark)').matches;
 const themeColor=$('meta[name="theme-color"]');
 root.dataset.theme=dark?'dark':'light';
 if(selected)root.dataset.palette=selected.id;
 else delete root.dataset.palette;
 if(themeColor)themeColor.content=selected?(dark?selected.darkSwatch:selected.swatch):(dark?'#8b7fff':'#5b4bff');
}
const teamTasks=t=>data.tasks[t.id]||(data.tasks[t.id]=[]);
const teamChat=t=>data.chats[t.id]||(data.chats[t.id]=[]);
const hackathonChat=hackId=>data.hackathonChats[hackId]||(data.hackathonChats[hackId]=[]);
const teamMembersForHack=hackId=>data.teams.filter(team=>team.hack===hackId).flatMap(team=>team.memberIds);
function organizerLearningMarkup(team){
 const modules=data.learn.filter(module=>module.hack===team.hack);
 if(!modules.length)return '<p class="mu">Для этого хакатона пока нет учебных модулей.</p>';
 return modules.map(module=>{
  const items=module.i||[];
  return `<section class="team-learning-module"><h4>${esc(module.m)}</h4>${team.memberIds.map(userId=>{
   const user=data.users.find(item=>item.id===userId),done=items.filter(item=>learningComplete(userId,item)).length,percent=items.length?Math.round(done/items.length*100):0;
   return `<div class="team-learning-member"><div class="hh"><b>${esc(user?.name||'Участник')}</b><span>${done}/${items.length} · ${percent}%</span></div><div class="pg"><i style="width:${percent}%"></i></div><ul>${items.map(item=>`<li class="${learningComplete(userId,item)?'is-complete':''}">${learningComplete(userId,item)?'✓':'○'} ${esc(item.t)}</li>`).join('')||'<li class="mu">Материалов пока нет.</li>'}</ul></div>`;
  }).join('')}</section>`;
 }).join('');
}
function organizerTaskBoardMarkup(team){
 const tasks=teamTasks(team),columns=['К выполнению','В работе','На проверке','Выполнено'],done=tasks.filter(task=>task.s===3).length,percent=tasks.length?Math.round(done/tasks.length*100):0;
 return `<p class="mu">Задачи выполнены: ${done} из ${tasks.length} · ${percent}%</p><div class="pg"><i style="width:${percent}%"></i></div><div class="kb organizer-readonly-board">${columns.map((title,status)=>`<section class="col"><h3>${title}<span>${tasks.filter(task=>task.s===status).length}</span></h3>${tasks.filter(task=>task.s===status).map(task=>`<article class="tk"><b>${esc(task.t)}</b>${task.description?`<p class="task-description">${esc(task.description)}</p>`:''}<small>👤 ${esc(data.users.find(user=>user.id===task.w)?.name||'Не назначен')} · ⏰ ${esc(task.due||'без срока')}</small></article>`).join('')||'<span class="mu">Нет задач</span>'}</section>`).join('')}</div>`;
}
function organizerTeamMarkup(team){
 const tasks=teamTasks(team),complete=tasks.filter(task=>task.s===3).length,learning=teamLearningProgress(team);
 return `<article class="organizer-team"><div class="mem"><div class="av">${esc(team.name[0])}</div><div class="organizer-team-summary"><b>${esc(team.name)}</b><small class="mu">${esc(CAT[team.hack]?.t||'')} · ${team.memberIds.length} участников · капитан: ${esc(data.users.find(user=>user.id===team.captainId)?.name||'')} · задачи: ${complete}/${tasks.length} · обучение: ${learning.done}/${learning.total} (${learning.percent}%)</small></div><select data-mentor-team="${esc(team.id)}" aria-label="Назначить ментора"><option value="">Без ментора</option>${data.users.filter(user=>user.role==='mentor').map(user=>`<option value="${esc(user.id)}" ${team.mentorId===user.id?'selected':''}>${esc(user.name)}</option>`).join('')}</select><button class="btn sec" data-a="assign-mentor" data-team="${esc(team.id)}">Сохранить ментора</button><span class="bd ${stBadge[team.status][0]}">${team.status==='active'?'Допущена':'Ожидает допуска'}</span>${team.status==='pending'?`<button class="btn" data-a="approve-team" data-team="${esc(team.id)}">Допустить</button>`:''}</div><details class="organizer-team-details"><summary>Подробный прогресс обучения и доска задач · только просмотр</summary><h3>Прогресс участников по модулям</h3>${organizerLearningMarkup(team)}<h3>Доска задач · только просмотр</h3>${organizerTaskBoardMarkup(team)}</details></article>`;
}
const stBadge={active:['b-ok','Допущена'],pending:['b-wn','Ожидает допуска'],done:['b-nu','Завершена']};
const NAV=[['home','🏠','Главная'],['mine','🏆','Мои хакатоны'],['notes','🔔','Уведомления']];
const MO=['янв.','фев.','мар.','апр.','мая','июн.','июл.','авг.','сен.','окт.','нояб.','дек.'];
const $main=()=>$('#main');
const $content=()=>view==='hack'&&cur?$('#hack-content'):$main();

function toast(text){
 const el=document.createElement('div');el.className='toast';el.textContent=text;document.body.appendChild(el);
 setTimeout(()=>el.remove(),3200);
}
function closeMenu(){$('#side').classList.remove('open');$('#scrim').classList.remove('open')}
function go(next){view=next;cur=null;hackSection='overview';hackMenuOpen=false;editingTaskId=null;closeMenu();render();window.scrollTo(0,0)}
const NOTIFICATION_TYPES={
 message:{label:'Сообщения команды',icon:'💬'},
 expert:{label:'Комментарии экспертов',icon:'🧑‍🏫'},
 mentor:{label:'Комментарии ментора',icon:'🧑‍🤝‍🧑'},
 schedule:{label:'Расписание',icon:'📅'},
 material:{label:'Материалы',icon:'📚'},
 task:{label:'Задачи команды',icon:'✅'},
 deadline:{label:'Сроки сдачи',icon:'⏰'},
 submission:{label:'Работы команд',icon:'📤'},
 team:{label:'Команда',icon:'👥'},
 hackathon:{label:'Хакатон',icon:'⚡'},
 hackInvite:{label:'Приглашения экспертов',icon:'✉️'},
 finalist:{label:'Результаты полуфинала',icon:'🏁'},
 account:{label:'Проверка аккаунта',icon:'🛡️'}
};
function addNotification(text,options={}){
 if(!options.recipientId||!data.users.some(user=>user.id===options.recipientId))throw new Error('Уведомлению требуется существующий получатель.');
 data.notifications.unshift({id:`notification-${Date.now()}-${++notificationSequence}`,text,time:'только что',read:false,...options,recipientId:options.recipientId});
}
function notify(text,options={}){addNotification(text,{...options,recipientId:options.recipientId||data.currentUserId});save()}
function notifyUsers(text,userIds,options={}){
 [...new Set(userIds)].filter(recipientId=>data.users.some(user=>user.id===recipientId)).forEach(recipientId=>addNotification(text,{...options,recipientId}));
}
const notificationsForUser=userId=>data.notifications.filter(item=>item.recipientId===userId);
function notificationType(notification){
 if(NOTIFICATION_TYPES[notification.type])return notification.type;
 const text=notification.text||'';
 if(/сообщени|чат команды/i.test(text))return 'message';
 if(/эксперт|обратную связь|комментар/i.test(text))return 'expert';
 if(/расписани|этап|событи/i.test(text))return 'schedule';
 if(/материал|обучени/i.test(text))return 'material';
 if(/задач/i.test(text))return 'task';
 if(/срок|дедлайн/i.test(text))return 'deadline';
 if(/решение|проект отправил/i.test(text))return 'submission';
 if(/хакатон|кейс/i.test(text))return 'hackathon';
 return 'team';
}
function notificationRows(notifications){
 const rows=[],groups=new Map();
 notifications.forEach(notification=>{
  if(notificationType(notification)!=='message'||!notification.teamId){rows.push({notification});return}
  const key=`${notification.hackId||''}:${notification.teamId}`;
  let group=groups.get(key);
  if(!group){group={hackId:notification.hackId,teamId:notification.teamId,messages:[]};groups.set(key,group);rows.push({group})}
  group.messages.push(notification);
 });
 return rows;
}
function messageNotificationSummary(messages){
 const unread=messages.filter(message=>!message.read),items=unread.length?unread:messages,count=items.length;
 const senders=[...new Set(items.map(message=>{
  const user=data.users.find(candidate=>candidate.id===message.senderId);
  if(user)return user.name;
  return (message.detail||message.text||'').match(/^(.+?)\s+написал(?:а)?/u)?.[1];
 }).filter(Boolean))];
 const countLabel=unread.length?`${count} ${count===1?'новое сообщение':count<5?'новых сообщения':'новых сообщений'}`:`${count} ${count===1?'сообщение':'сообщений'}`;
 const senderLabel=senders.length>2?`${senders.slice(0,2).join(', ')} и других`:senders.join(' и ')||'участников команды';
 return `${countLabel} от ${senderLabel}`;
}
function notificationTarget(notification){
 if(notification.destination==='profile')return {destination:'profile'};
 if(notification.type==='hackInvite')return null;
 const team=data.teams.find(item=>item.id===notification.teamId)||data.teams.find(item=>notification.text?.includes(`«${item.name}»`));
 const event=data.events.find(item=>notification.text?.includes(item.title));
 const hackId=notification.hackId||team?.hack||event?.hack||Object.keys(CAT).find(id=>notification.text?.includes(CAT[id].t));
 const section=notification.section||({message:'chat',expert:'team',schedule:'cal',material:'learn',task:'tasks',deadline:'sub',submission:'sub',team:'team',hackathon:'overview',finalist:'overview'}[notificationType(notification)]);
 const hasInvitation=notification.teamId&&data.invites.some(invite=>invite.teamId===notification.teamId&&!invite.accepted&&invite.email===me().email.toLowerCase());
 const destination=hasInvitation?'profile':me().role==='organizer'?'admin':null;
 return hackId&&CAT[hackId]?{hackId,teamId:team?.id||notification.teamId,section,destination}:null;
}
function checkDeadlineReminders(){
 const now=Date.now(),day=24*60*60*1000;
 data.teams.forEach(team=>{
  const event=data.events.find(item=>item.hack===team.hack&&item.submissionDeadline);
  if(!event||data.submissions.some(item=>item.teamId===team.id))return;
  const deadline=new Date(`${event.date}T${event.time||'23:59'}`).getTime(),key=`${team.id}:${event.date}T${event.time||'23:59'}`;
  if(!Number.isFinite(deadline)||deadline<=now||deadline-now>day||data.deadlineReminderKeys.includes(key))return;
  const dueText=new Date(deadline).toLocaleString('ru-RU',{dateStyle:'long',timeStyle:'short'});
  notifyUsers(`До срока сдачи проекта команды «${team.name}» осталось меньше суток (${dueText}).`,team.memberIds,{type:'deadline',detail:`Напоминание о финальной отправке проекта. До дедлайна осталось меньше суток. Срок: ${dueText}.`,hackId:team.hack,teamId:team.id,section:'sub'});
  data.deadlineReminderKeys.push(key);
  save();
 });
}
function nav(){
 const user=me(),allowed=NAV.slice();
 if(user.role==='organizer')allowed.push(['admin','🛠️','Кабинет организатора']);
 if(user.role==='expert'&&user.verified&&accessibleHackIds(user).length)allowed.push(['review','🧭','Команды и обратная связь']);
 allowed.push(['profile','👤','Личный кабинет']);
 $('#nav').innerHTML=allowed.map(([key,icon,label])=>{
  const count=key==='notes'?notificationsForUser(data.currentUserId).filter(n=>!n.read).length:0;
  return `<button data-k="${key}" class="${view===key?'on':''}"><span class="ic">${icon}</span>${label}${count?`<span class="cnt">${count}</span>`:''}</button>`;
 }).join('');
 $('#nav').querySelectorAll('button').forEach(button=>button.onclick=()=>go(button.dataset.k));
 const initials=user.name.split(/\s+/).slice(0,2).map(x=>x[0]).join('');
 $('#profile-summary').innerHTML=`<div class="av">${esc(initials)}</div><div><b>${esc(user.name)}</b><small>${esc(currentRole())} · ${esc(user.organization||user.university||user.faculty||'Профиль')}</small></div>`;
}
function auth(){
 const register=authMode==='register';
 let selectedUniversity='';
 document.querySelector('.app').classList.add('auth-layout');
 $('#side').hidden=true;
 $('.top').hidden=true;
 $main().innerHTML=`<section class="auth-wrap"><div class="auth-card">
  <div class="logo"><i>⚡</i>HackFlow</div><h1>${register?'Создать аккаунт':'Войти в HackFlow'}</h1>
  <p class="mu">Аккаунт защищён Supabase Auth. Данные хакатонов в этой демо-версии хранятся в браузере.</p>
  <form id="auth-form">
  ${register?`<div class="fld"><label for="auth-role">Тип аккаунта</label><select id="auth-role" name="role"><option value="participant">Участник</option><option value="expert">Эксперт</option><option value="mentor">Ментор</option></select></div>
   <div class="form-grid"><div class="fld"><label for="auth-first-name">Имя</label><input id="auth-first-name" name="firstName" required autocomplete="given-name"></div><div class="fld"><label for="auth-last-name">Фамилия</label><input id="auth-last-name" name="lastName" required autocomplete="family-name"></div></div>
   <div id="participant-fields"><div class="form-grid"><div class="fld"><label for="auth-university">Университет</label><div class="university-picker"><input id="auth-university" name="university" role="combobox" aria-autocomplete="list" aria-controls="university-options" aria-describedby="university-status" aria-expanded="false" required autocomplete="off" placeholder="Начните вводить название"><div id="university-options" class="university-options" role="listbox" hidden></div></div><small id="university-status" class="mu university-status" aria-live="polite"></small></div><div class="fld"><label for="auth-faculty">Факультет</label><input id="auth-faculty" name="faculty" required autocomplete="organization-title"></div></div><div class="fld"><label for="auth-group">Группа</label><input id="auth-group" name="group" required autocomplete="off" placeholder="Введите группу"></div></div>
   <div id="expert-fields" hidden><div class="fld"><label for="auth-organization">Организация</label><input id="auth-organization" name="organization"></div><div class="fld"><label for="auth-about">О себе</label><textarea id="auth-about" name="about" rows="4" maxlength="1200" placeholder="Опыт, специализация и темы, в которых вы можете оценивать проекты"></textarea></div><p class="mu">После регистрации аккаунт эксперта готов к работе. Для оценки хакатона потребуется принять приглашение его организатора.</p></div>`:''}
   <div class="fld"><label for="auth-email">Электронная почта</label><input id="auth-email" name="email" type="email" required autocomplete="email"></div>
   <div class="fld"><label for="auth-password">Пароль</label><input id="auth-password" name="password" type="password" minlength="6" required autocomplete="${register?'new-password':'current-password'}"></div>
  <div class="err" id="auth-error" role="alert"></div><button class="btn" id="auth-submit" type="submit">${register?'Зарегистрироваться':'Войти'}</button>
  </form>
 <button class="text-btn" data-a="auth-toggle">${register?'Уже есть аккаунт? Войти':'Создать аккаунт'}</button>
  ${!register?`<div class="demo"><b>Демо-аккаунты</b><div class="demo-list">
   <button class="demo-item" data-a="demo" data-id="organizer"><b>Организатор · Актион HackFlow Challenge</b><small>organizer@hackflow.local · organizer2026</small></button>
   <button class="demo-item" data-a="demo" data-id="organizer-2"><b>Организатор · Башкортостан Digital Sprint</b><small>organizer2@hackflow.local · organizer22026</small></button>
  </div><details class="demo-more"><summary>Эксперты (${DEMO_EXPERTS.length}), менторы и участники (${DEMO_PARTICIPANTS.length})</summary><div class="demo-list">${seed.users.filter(user=>!['organizer','organizer-2'].includes(user.id)).map(user=>`<button class="demo-item" data-a="demo" data-id="${esc(user.id)}"><b>${esc(roleName[user.role])} · ${esc(user.name)}</b><small>${esc(user.email)} · ${esc(user.password)}</small></button>`).join('')}</div></details></div>`:''}
 </div></section>`;
 if(register){
 const role=$('#auth-role'),studentFields=$('#participant-fields'),expertFields=$('#expert-fields'),university=$('#auth-university'),faculty=$('#auth-faculty'),group=$('#auth-group'),organization=$('#auth-organization'),about=$('#auth-about'),universityOptions=$('#university-options'),universityStatus=$('#university-status');
 let matchingUniversities=[];
 const hideUniversityOptions=()=>{universityOptions.hidden=true;university.setAttribute('aria-expanded','false')};
 const chooseUniversity=option=>{university.value=option.value;selectedUniversity=option.value;hideUniversityOptions();universityStatus.textContent='Выбран вуз из официального списка.';university.focus()};
 const updateUniversityOptions=()=>{
  const query=normalizeUniversitySearch(university.value);
  if(query.length<2){matchingUniversities=[];universityOptions.innerHTML='';hideUniversityOptions();universityStatus.textContent=query?'Введите не менее двух символов для поиска.':'';return}
  const results=UNIVERSITY_OPTIONS.filter(option=>normalizeUniversitySearch(option.search).includes(query));
  matchingUniversities=results.slice(0,20);
  universityOptions.innerHTML=matchingUniversities.map((option,index)=>`<button type="button" class="university-option" role="option" data-university-index="${index}">${esc(option.value)}</button>`).join('');
  universityOptions.hidden=!matchingUniversities.length;
  university.setAttribute('aria-expanded',String(matchingUniversities.length>0));
  universityStatus.textContent=results.length?`Найдено вузов: ${results.length}${results.length>20?'. Уточните запрос, чтобы сузить список.':'.'}`:'Совпадений нет. Проверьте написание.';
 };
 university.addEventListener('input',()=>{selectedUniversity='';updateUniversityOptions()});
 university.addEventListener('keydown',event=>{
  if(event.key==='Escape')hideUniversityOptions();
  if(event.key==='ArrowDown'&&!universityOptions.hidden){event.preventDefault();universityOptions.querySelector('button')?.focus()}
 });
 universityOptions.addEventListener('click',event=>{
  const button=event.target.closest('button[data-university-index]');
  if(button){const option=matchingUniversities[Number(button.dataset.universityIndex)];if(option)chooseUniversity(option)}
 });
 const updateRegistrationFields=()=>{const isParticipant=role.value==='participant';studentFields.hidden=!isParticipant;expertFields.hidden=isParticipant;university.required=isParticipant;faculty.required=isParticipant;group.required=isParticipant;organization.required=!isParticipant;about.required=role.value==='expert';if(!isParticipant)hideUniversityOptions();$('#expert-fields p').textContent=role.value==='mentor'?'После регистрации организатор сможет прикрепить вас к команде.':'После регистрации аккаунт эксперта готов к работе. Для оценки хакатона потребуется принять приглашение его организатора.';$('#auth-submit').textContent='Зарегистрироваться'};
 role.onchange=updateRegistrationFields;updateRegistrationFields();
 }
 $('#auth-form').onsubmit=async e=>{e.preventDefault();const form=new FormData(e.currentTarget),email=String(form.get('email')).trim().toLowerCase(),password=String(form.get('password')),submitButton=$('#auth-submit'),errorBox=$('#auth-error');errorBox.textContent='';errorBox.classList.remove('success');
  if(register){
  const firstName=String(form.get('firstName')).trim(),lastName=String(form.get('lastName')).trim(),role=String(form.get('role')),university=role==='participant'?String(form.get('university')||'').trim():'',faculty=role==='participant'?String(form.get('faculty')||'').trim():'',group=role==='participant'?String(form.get('group')||'').trim():'',organization=String(form.get('organization')||'').trim(),about=String(form.get('about')||'').trim();
  if(!['participant','expert','mentor'].includes(role)){$('#auth-error').textContent='Выберите допустимый тип аккаунта.';return}
  if(!firstName||!lastName){$('#auth-error').textContent='Укажите имя и фамилию отдельно.';return}
  if(role==='participant'&&(!UNIVERSITIES.includes(university)||selectedUniversity!==university)){$('#auth-error').textContent='Найдите вуз по названию и выберите вариант из списка.';return}
  if(role==='participant'&&(!faculty||!group)){$('#auth-error').textContent='Укажите факультет и группу.';return}
  if(role!=='participant'&&!organization){$('#auth-error').textContent='Укажите организацию.';return}
  if(role==='expert'&&!about){$('#auth-error').textContent='Заполните поле «О себе».';return}
   if(!window.hackflowSupabase){errorBox.textContent='Не удалось подключиться к Supabase. Обновите страницу и попробуйте снова.';return}
   submitButton.disabled=true;
   try{
    const {data:result,error}=await window.hackflowSupabase.auth.signUp({email,password,options:{data:{firstName,lastName,role,university,faculty,group,organization,about}}});
    if(error)throw error;
    if(result.session&&result.user){const user=syncSupabaseUser(result.user);data.currentUserId=user.id;save();afterLogin()}
    else{errorBox.textContent='Регистрация прошла успешно. Проверьте почту и подтвердите адрес, затем войдите.';errorBox.classList.add('success')}
   }catch(error){console.error('Не удалось зарегистрировать аккаунт Supabase:',error);errorBox.textContent=error.message||'Не удалось зарегистрироваться. Попробуйте позже.'}
   finally{if(submitButton.isConnected)submitButton.disabled=false}
   return;
  }
   if(!window.hackflowSupabase){errorBox.textContent='Не удалось подключиться к Supabase. Обновите страницу и попробуйте снова.';return}
   submitButton.disabled=true;
   try{
    const {data:result,error}=await window.hackflowSupabase.auth.signInWithPassword({email,password});
    if(error)throw error;
    if(!result.user)throw new Error('Supabase не вернул данные аккаунта.');
    const user=syncSupabaseUser(result.user);data.currentUserId=user.id;save();afterLogin();
   }catch(error){console.error('Не удалось войти через Supabase:',error);errorBox.textContent=error.message||'Не удалось войти. Проверьте почту и пароль.'}
   finally{if(submitButton.isConnected)submitButton.disabled=false}
 };
}
function afterLogin(){
 document.querySelector('.app').classList.remove('auth-layout');$('#side').hidden=false;$('.top').hidden=false;
 view='home';acceptInvitations();render();
}
function acceptInvitations(){
 const incoming=data.invites.filter(i=>i.email===me().email.toLowerCase()&&!i.accepted);
 if(incoming.length){const invite=incoming[0],team=data.teams.find(item=>item.id===invite.teamId),hackId=invite.hack||team?.hack,alreadyNotified=notificationsForUser(me().id).some(item=>item.type==='team'&&item.teamId===invite.teamId&&item.text.includes('пригласили'));if(!alreadyNotified&&registrationIsOpen(hackId))notify(`Вас пригласили в команду «${invite.teamName}». Приглашение доступно в личном кабинете.`,{type:'team',detail:`Команда «${invite.teamName}» на хакатоне «${CAT[hackId]?.t||'Хакатон'}» отправила вам приглашение.\n${teamComposition(team)}\nОткройте личный кабинет, чтобы принять его.`,hackId,teamId:team?.id,section:'team'})}
}
function registrations(){
 return data.teams.filter(team=>team.memberIds.includes(data.currentUserId)).map(team=>({team,hack:CAT[team.hack]})).filter(entry=>entry.hack);
}
function card({team,hack}){
 const[badge,text]=stBadge[team.status]||stBadge.active;
 return `<div class="card hc"><div class="hh"><b>${esc(hack.t)}</b><span class="bd ${badge}">${text}</span></div>
  <div class="meta"><span>📅 ${esc(hack.d)}</span><span>📍 ${esc(hack.fmt)}</span><span>🏢 ${esc(hack.org)}</span><span>👥 ${data.teams.filter(item=>item.hack===team.hack).length} команд</span></div>
  <div class="team"><div class="av">${esc(team.name[0]||'К')}</div><div><span class="tn">Команда «${esc(team.name)}»</span><small>${roleIn(team,data.currentUserId)} · ${team.memberIds.length} чел.</small></div></div>
  <div class="ft"><span class="dl">${team.status==='active'?`⏰ Сдача проекта — ${esc(hack.d.split('–').pop())}`:'Заявку проверяет организатор'}</span><button class="btn ${team.status==='active'?'':'sec'}" data-open="${esc(team.hack)}">${team.status==='active'?'Открыть пространство':'Подробнее'}</button></div></div>`;
}
function home(){
 const user=me(),accessible=accessibleHackIds(user),context=user.role==='participant'?`${user.university} · ${user.faculty} · ${user.group} · ${currentRole()}`:`${user.organization||user.faculty||''} · ${currentRole()}`;
 $main().innerHTML=`<div class="hero"><h1>Привет, ${esc(user.firstName||user.name.split(/\s+/)[0])}! 👋</h1><div class="mu" style="margin-bottom:8px">${esc(context)}</div>
  <p class="mu" style="margin:0">HackFlow — единая среда хакатона: команда, задачи, обучение, расписание и сдача проекта.</p>
  <div class="join"><label for="lnk">Найти хакатон по ссылке</label><div class="row"><input id="lnk" placeholder="https://hackflow.app/h/actionflow-2026" autocomplete="off" inputmode="url"><button class="btn" id="find-hack">Перейти</button></div><div class="err" id="err" role="alert"></div>
   <div class="chips"><span class="mu">Демо-хакатоны:</span>${accessible.filter(id=>CAT[id].public).map(id=>`<button class="chip" data-ex="https://hackflow.app/h/${esc(id)}">${esc(id)}</button>`).join('')}</div></div>
 </div><section class="available-hackathons"><h2>Доступные хакатоны</h2><div class="fld"><label for="hackathon-search">Поиск по названию</label><input id="hackathon-search" type="search" placeholder="Введите название хакатона" autocomplete="off"></div><div id="available-hackathons" class="grid" aria-live="polite"></div></section>`;
 const availableHackIds=hackIds().filter(id=>(user.role==='participant'&&CAT[id].public)||canAccessHack(id,user));
 const renderAvailableHackathons=query=>{
  const search=normalizeUniversitySearch(query);
  const matches=availableHackIds.filter(id=>normalizeUniversitySearch(CAT[id].t).includes(search));
  $('#available-hackathons').innerHTML=matches.map(id=>{
   const hack=CAT[id],registrationOpen=registrationIsOpen(id),status=registrationOpen?hack.st:hack.st==='Завершён'?hack.st:'Регистрация закрыта';
   const action=user.role==='organizer'?'Управлять хакатоном':user.role==='expert'?'Открыть команды и оценки':user.role==='mentor'?'Открыть материалы команды':registrationOpen?'Подробнее и регистрация':'Подробнее';
   return `<div class="card hc"><div class="hh"><b>${esc(hack.t)}</b><span class="bd ${registrationOpen?'b-wn':'b-nu'}">${esc(status)}</span></div><div class="meta"><span>📅 ${esc(hack.d)}</span><span>📍 ${esc(hack.fmt)}</span><span>🏢 ${esc(hack.org)}</span>${registrationDeadline(id)?`<span>⏳ Регистрация до ${esc(registrationDeadline(id).toLocaleString('ru-RU',{dateStyle:'short',timeStyle:'short'}))}</span>`:''}</div><button class="btn sec" data-open="${esc(id)}">${action}</button></div>`;
  }).join('')||`<p class="mu">${search?'По этому названию хакатоны не найдены.':'Пока нет доступных хакатонов.'}</p>`;
  bindOpen();
 };
 renderAvailableHackathons('');
 $('#hackathon-search').addEventListener('input',event=>renderAvailableHackathons(event.target.value));
 const find=()=>{const value=$('#lnk').value.trim(),slug=value.split(/[?#]/)[0].replace(/\/+$/,'').split('/').pop().toLowerCase();if(!CAT[slug]||!canAccessHack(slug)){$('#err').textContent='Хакатон не найден или доступ к нему не предоставлен.';return}open(slug)};
 $('#find-hack').onclick=find;$('#lnk').onkeydown=e=>{if(e.key==='Enter')find()};
 document.querySelectorAll('[data-ex]').forEach(b=>b.onclick=()=>{$('#lnk').value=b.dataset.ex;$('#err').textContent=''});
}
function bindOpen(){document.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>open(b.dataset.open))}
function open(id){if(!canAccessHack(id)){toast('Доступ к этому хакатону не предоставлен.');return}cur=id;hackSection='overview';hackMenuOpen=false;editingTaskId=null;selectedNotificationId=null;view='hack';render();window.scrollTo(0,0)}
const HACK_SECTIONS=[['info','О хакатоне'],['overview','Обзор'],['team','Команда'],['tasks','Задачи'],['learn','Обучение'],['cal','Расписание'],['lobby','Общий чат'],['chat','Командный чат'],['sub','Сдача проекта']];
function hackathonInfoMarkup(hackId){
 const hack=CAT[hackId],deadline=registrationDeadline(hackId),events=data.events.filter(event=>event.hack===hackId).slice().sort((a,b)=>a.date.localeCompare(b.date)||a.time.localeCompare(b.time)),teams=data.teams.filter(team=>team.hack===hackId),modules=data.learn.filter(module=>module.hack===hackId),experts=data.users.filter(user=>user.role==='expert'&&expertInvitation(hackId,user.id));
 const milestones=events.filter(event=>event.submissionDeadline||event.type==='Дедлайн');
 const teamStatus=team=>{const[,label]=stBadge[team.status]||stBadge.active;return label};
 return `<div class="hack-info">
  <section class="card"><h2>Описание</h2><p>${esc(hack.desc)}</p></section>
  <section class="card"><h2>Правила участия</h2><ul class="hack-info-list">${hack.rules.map(rule=>`<li>${esc(rule)}</li>`).join('')}</ul></section>
  <section class="card"><h2>Условия бизнес-кейса</h2><p>${esc(caseDescription(hackId))}</p></section>
  <section class="card"><h2>Критерии полуфинала</h2><ul class="hack-info-list">${SEMIFINAL_CRITERIA.map(criterion=>`<li><b>${esc(criterion.label)}</b> — ${esc(criterion.description)}</li>`).join('')}</ul></section>
  <section class="card"><h2>Критерии финала</h2><ul class="hack-info-list">${FINAL_CRITERIA.map(criterion=>`<li><b>${esc(criterion.label)}</b> — ${esc(criterion.description)}</li>`).join('')}</ul></section>
  <section class="card"><h2>Место проведения</h2><p>${esc(hack.venue||hack.fmt)}</p></section>
  <section class="card"><h2>Финальная защита</h2><p>${hack.finalDefenseFormat==='in-person'?'Очно':'Онлайн'} · ${esc(hack.finalVenue||hack.venue||'Место не указано')}</p></section>
  <section class="card"><h2>Эксперты хакатона</h2><div class="hack-info-list">${experts.map(user=>`<div class="hack-module"><b>${esc(user.name)}</b><span>${esc(user.organization||'')}</span><span>${esc(user.about||'Информация о себе не указана.')}</span></div>`).join('')||'<span class="mu">Эксперты пока не назначены.</span>'}</div></section>
  <section class="card"><h2>Сроки выполнения</h2><div class="hack-info-list">${deadline?`<div class="hack-info-row"><b>Регистрация команд и приглашения</b><span>до ${esc(deadline.toLocaleString('ru-RU',{dateStyle:'long',timeStyle:'short'}))}</span></div>`:''}${milestones.map(event=>`<div class="hack-info-row"><b>${esc(event.title)}</b><span>${esc(new Date(`${event.date}T${event.time||'00:00'}`).toLocaleString('ru-RU',{dateStyle:'long',timeStyle:'short'}))}</span></div>`).join('')||'<span class="mu">Сроки этапов пока не опубликованы.</span>'}</div></section>
  <section class="card"><h2>Список команд</h2><div class="hack-info-list">${teams.map(team=>`<div class="hack-info-row"><b>${esc(team.name)}</b><span>${team.memberIds.length} участн. · ${esc(teamStatus(team))}</span></div>`).join('')||'<span class="mu">Команд пока нет.</span>'}</div></section>
  <section class="card"><h2>Расписание</h2><div class="hack-info-list">${events.map(event=>`<div class="hack-info-row"><b>${esc(event.title)}</b><span>${esc(new Date(`${event.date}T${event.time||'00:00'}`).toLocaleString('ru-RU',{dateStyle:'long',timeStyle:'short'}))}${event.speaker?` · ${esc(event.speaker)}`:''}</span>${event.description?`<p class="mu">${esc(event.description)}</p>`:''}</div>`).join('')||'<span class="mu">Расписание пока не опубликовано.</span>'}</div></section>
  <section class="card"><h2>Образовательный трек</h2><div class="hack-info-list">${modules.map(module=>`<div class="hack-module"><b>${esc(module.m)}</b>${module.i.map(item=>`<span>${esc(item.ty)} ${esc(item.t)} · ${esc(item.d)}</span>`).join('')}</div>`).join('')||'<span class="mu">Образовательные материалы пока не опубликованы.</span>'}</div></section>
  <section class="card"><h2>Командные пространства</h2><p class="mu">Задачи, чаты, сдачи и файлы видны только участникам соответствующей команды.</p><div class="hack-info-list">${teams.map(team=>{const isMember=team.memberIds.includes(data.currentUserId),isActive=team.status==='active';return `<div class="hack-space-row"><div><b>${esc(team.name)}</b><span class="mu">${isActive?'Пространство команды':`Команда: ${teamStatus(team)}`}</span></div>${isMember&&isActive?'<button class="btn sec" data-workspace="overview">Открыть пространство</button>':`<span class="bd b-nu">${isMember?'Откроется после допуска':'Закрыто для других команд'}</span>`}</div>`}).join('')||'<span class="mu">Командных пространств пока нет.</span>'}</div></section>
 </div>`;
}
function workspaceOverview(team){
 const tasks=teamTasks(team),done=tasks.filter(task=>task.s===3).length,submitted=data.submissions.some(item=>item.teamId===team.id);
 $content().innerHTML=`<div class="facts"><div>Ваша роль<b>${roleIn(team,data.currentUserId)}</b></div><div>Капитан команды<b>${esc(data.users.find(user=>user.id===team.captainId)?.name||'')}</b></div><div>Участники<b>${team.memberIds.length}</b></div><div>Задачи выполнены<b>${done} из ${tasks.length}</b></div><div>Решение<b>${submitted?'Отправлено':'Не отправлено'}</b></div></div>
  <div class="card"><h2 style="margin-top:0">Кейс</h2><p>${esc(caseDescription(cur))}</p><p class="mu">Материалы, расписание, задачи и общение команды собраны в разделах этого хакатона.</p><button class="btn" data-workspace="team">Открыть команду «${esc(team.name)}»</button></div>`;
}
function mentorWorkspace(team){
 const tasks=teamTasks(team),submission=data.submissions.find(item=>item.teamId===team.id),comments=data.mentorComments.filter(comment=>comment.teamId===team.id),members=team.memberIds.map(id=>data.users.find(user=>user.id===id)).filter(Boolean);
 $main().innerHTML=`<button class="back" id="mentor-back">← Мои хакатоны</button><div class="workspace-title"><div><h1>${esc(CAT[team.hack].t)}</h1><p class="mu">Наставник команды «${esc(team.name)}» · ${members.map(user=>esc(user.name)).join(', ')}</p></div><span class="bd b-ok">Только просмотр материалов</span></div>
  <section class="card"><h2>Кейс хакатона</h2><p>${esc(caseDescription(team.hack))}</p></section>
  <section class="card"><h2>Материалы команды</h2>${submission?projectMarkup(submission):'<p class="mu">Команда ещё не отправила проект.</p>'}<h3>Задачи</h3>${tasks.map(task=>`<div class="schedule-row"><div><b>${esc(task.t)}</b><p>${esc(task.description||'')}</p><small>${esc(data.users.find(user=>user.id===task.w)?.name||'Не назначен')} · ${esc(task.due||'без срока')}</small></div><span class="bd b-nu">${['К выполнению','В работе','На проверке','Выполнено'][task.s]||'К выполнению'}</span></div>`).join('')||'<p class="mu">Задач пока нет.</p>'}</section>
  <section class="card"><h2>Комментарии ментора</h2>${comments.map(comment=>`<div class="msg" style="max-width:100%;margin-top:10px"><small>${esc(data.users.find(user=>user.id===comment.userId)?.name||'Ментор')} · ${esc(comment.time)}</small>${esc(comment.text)}</div>`).join('')||'<p class="mu">Комментариев пока нет.</p>'}<form id="mentor-comment-form"><label for="mentor-comment">Новый комментарий для команды</label><textarea id="mentor-comment" required rows="3" maxlength="2000"></textarea><button class="btn" style="margin-top:8px">Отправить комментарий</button></form></section>`;
 $('#mentor-back').onclick=()=>go('mine');
 $('#mentor-comment-form').onsubmit=event=>{event.preventDefault();if(me().role!=='mentor'||team.mentorId!==me().id)return;const text=$('#mentor-comment').value.trim();if(!text)return;data.mentorComments.push({id:`mentor-comment-${Date.now()}`,teamId:team.id,userId:me().id,text,time:new Date().toLocaleString('ru-RU')});notifyUsers(`Ментор оставил комментарий команде «${team.name}».`,team.memberIds,{type:'mentor',detail:`${me().name} оставил комментарий: «${text}»`,hackId:team.hack,teamId:team.id,section:'team'});save();mentorWorkspace(team)};
}
function hack(){
 if(!canAccessHack(cur)){view='home';home();return}
 const h=CAT[cur];
 if(me().role==='mentor'){const team=mentorTeam(cur);if(!team){view='home';home();return}mentorWorkspace(team);return}
 const team=data.teams.find(t=>t.hack===cur&&t.memberIds.includes(data.currentUserId)),admitted=team?.status==='active';
 if(admitted){
  const sectionName=HACK_SECTIONS.find(([key])=>key===hackSection)?.[1]||'Обзор';
  $main().innerHTML=`<button class="back" id="back-hacks">← Мои хакатоны</button><div class="workspace-title"><div><h1>${esc(h.t)}</h1><p class="mu">${esc(h.d)} · ${esc(h.fmt)} · команда «${esc(team.name)}»</p></div><span class="bd b-ok">Основной этап</span></div>
   <div class="workspace-menu" role="navigation" aria-label="Разделы хакатона">
    <button class="workspace-menu-toggle" type="button" data-workspace-menu-toggle aria-expanded="${hackMenuOpen}" aria-controls="workspace-menu">Разделы хакатона: ${sectionName}<span aria-hidden="true">${hackMenuOpen?'▲':'▼'}</span></button>
    <div class="workspace-menu-list" id="workspace-menu" ${hackMenuOpen?'':'hidden'}>${HACK_SECTIONS.map(([key,label])=>`<button type="button" class="workspace-menu-item ${hackSection===key?'on':''}" data-workspace="${key}">${label}</button>`).join('')}</div>
   </div><section id="hack-content"></section>`;
  $('#back-hacks').onclick=()=>go('mine');
  if(hackSection==='overview')workspaceOverview(team);else V[hackSection]();
  return;
 }
 const open_=me().role==='participant'&&registrationIsOpen(cur)&&!team,registrationActive=registrationIsOpen(cur),publicSection=hackSection==='lobby'?'lobby':'info';
 const deadline=registrationDeadline(cur);
 const action=team?`<span class="bd ${stBadge[team.status][0]}">${team.status==='active'?'Вы в команде «'+esc(team.name)+'»':'Заявка команды на рассмотрении'}</span>`:open_?`<form id="team-register" class="register-team">
  <h2>Регистрация командой</h2><p class="mu">Создать команду или пригласить участников можно до ${esc(deadline.toLocaleString('ru-RU',{dateStyle:'long',timeStyle:'short'}))}.</p><div class="fld"><label for="team-name">Название команды</label><input id="team-name" name="teamName" maxlength="40" required placeholder="Например, spark"></div>
  <div class="fld"><label for="team-invites">Почты участников для приглашения</label><input id="team-invites" name="emails" placeholder="name@example.com, teammate@example.com"><small class="mu">Капитаном автоматически станет тот, кто подаёт заявку. Приглашать можно зарегистрированных пользователей.</small></div>
  <div class="err" id="reg-error" role="alert"></div><button class="btn" type="submit">Подать заявку команды</button></form>`:registrationActive?'<span class="mu">Создать команду или пригласить участников может аккаунт участника.</span>':'<span class="bd b-nu">Регистрация закрыта</span>';
 const pageStatus=team?team.status==='active'?'Основной этап':'Ожидает допуска':registrationActive?h.st:'Регистрация закрыта';
 $main().innerHTML=`<button class="back" id="back-home">← Главная</button><div class="card"><div class="hh"><h1 style="margin:0">${esc(h.t)}</h1><span class="bd ${team?stBadge[team.status][0]:registrationActive?'b-wn':'b-nu'}">${esc(pageStatus)}</span></div>
  <div class="facts"><div>Даты<b>${esc(h.d)}</b></div><div>Формат<b>${esc(h.fmt)}</b></div><div>Организатор<b>${esc(h.org)}</b></div><div>Команд<b>${data.teams.filter(t=>t.hack===cur).length}</b></div><div>Дедлайн регистрации<b>${deadline?esc(deadline.toLocaleString('ru-RU',{dateStyle:'long',timeStyle:'short'})):'Не задан'}</b></div></div></div>
  <nav class="hack-public-tabs" aria-label="Разделы хакатона"><button class="btn ${publicSection==='info'?'':'sec'}" data-public-hack-section="info" ${publicSection==='info'?'aria-current="page"':''}>О хакатоне</button><button class="btn ${publicSection==='lobby'?'':'sec'}" data-public-hack-section="lobby" ${publicSection==='lobby'?'aria-current="page"':''}>Общий чат</button></nav>
  <section id="hack-content"></section><div class="card">${action}</div>`;
 $('#back-home').onclick=()=>go('home');
 if(publicSection==='lobby')V.lobby();else V.info();
 const form=$('#team-register');
 if(form)form.onsubmit=e=>{e.preventDefault();const name=$('#team-name').value.trim(),emails=$('#team-invites').value.split(/[;,]/).map(x=>x.trim().toLowerCase()).filter(Boolean),error=$('#reg-error');
  if(me().role!=='participant'){toast('Создавать команды могут только участники.');return}
  if(!registrationIsOpen(cur)){toast('Срок регистрации команд завершён. Создать команду или отправить приглашения уже нельзя.');render();return}
  if(!name){error.textContent='Укажите название команды.';return}
  if(data.teams.some(t=>t.hack===cur&&t.name.toLowerCase()===name.toLowerCase())){error.textContent='Название команды уже занято на этом хакатоне.';return}
  const targets=emails.map(email=>data.users.find(u=>u.email.toLowerCase()===email));
  if(targets.some(user=>!user)){error.textContent='Не найдены аккаунты: '+emails.filter(email=>!data.users.some(u=>u.email.toLowerCase()===email)).join(', ');return}
  if(targets.some(user=>user.role!=='participant'||!user.verified)){error.textContent='Приглашать в команду можно только подтверждённые аккаунты участников.';return}
  if(targets.some(user=>data.teams.some(t=>t.hack===cur&&t.memberIds.includes(user.id)))){error.textContent='Один из приглашённых уже состоит в команде этого хакатона.';return}
  const newTeam={id:'team-'+Date.now(),hack:cur,name,captainId:me().id,memberIds:[me().id],status:'pending'};
  data.teams.push(newTeam);data.selectedTeamByUser[me().id]=newTeam.id;emails.forEach(email=>data.invites.push({email,teamId:newTeam.id,teamName:name,hack:cur,accepted:false}));
  notifyUsers(`Заявка команды «${name}» отправлена организатору.`,[ownerOfHack(cur),me().id],{type:'team',detail:`Заявка команды «${name}» на участие в хакатоне «${CAT[cur].t}» отправлена организатору и ожидает рассмотрения.`,hackId:cur,teamId:newTeam.id,section:'team'});save();toast('Капитан назначен автоматически. Заявка отправлена организатору.');render();
 };
}
function contextHeader(icon,title,team=currentTeam()){
 return `<h1>${icon} ${title}</h1><p class="mu" style="margin:0 0 16px">${team?`${esc(CAT[team.hack]?.t||'Хакатон')} · команда «${esc(team.name)}»`:''}</p>`;
}
function membersMarkup(team){
 return `<b>Состав команды (${team.memberIds.length})</b>${team.memberIds.map(id=>{const user=data.users.find(u=>u.id===id);if(!user)return '';return `<div class="mem"><div class="av">${esc(user.name[0])}</div><div style="flex:1"><b>${esc(user.name)}</b><small class="mu" style="display:block">${esc(user.university||'')} · ${esc(user.faculty||'')} · ${esc(user.group||'')}</small></div><span class="bd ${team.captainId===id?'b-ok':'b-nu'}">${roleIn(team,id)}</span></div>`}).join('')}`;
}
const V={};
V.info=()=>{$content().innerHTML=hackathonInfoMarkup(cur)};
V.mine=()=>{
 const user=me(),entries=user.role==='participant'?registrations().map(card):user.role==='mentor'?myTeams().filter(team=>team.mentorId===user.id).map(team=>`<div class="card hc"><h2>${esc(CAT[team.hack]?.t||'Хакатон')}</h2><p>Команда «${esc(team.name)}»</p><button class="btn" data-open="${esc(team.hack)}">Открыть командные материалы</button></div>`):accessibleHackIds(user).map(hackId=>`<div class="card hc"><h2>${esc(CAT[hackId].t)}</h2><p class="mu">${user.role==='organizer'?'Хакатон организован вами.':'Приглашение эксперта принято.'}</p><button class="btn" data-open="${esc(hackId)}">${user.role==='organizer'?'Управлять':'Открыть'}</button></div>`);
 $main().innerHTML=`<h1>🏆 Мои хакатоны</h1><div class="grid" style="margin-top:14px">${entries.join('')||'<div class="card mu">Пока нет доступных хакатонов.</div>'}</div>`;bindOpen();
};
V.team=()=>{
 const team=currentTeam();
 if(!team){const pending=myTeams().find(t=>t.hack===cur&&t.status==='pending');$content().innerHTML=contextHeader('👥','Моя команда',null)+`<div class="card">${pending?`Заявка команды «${esc(pending.name)}» ожидает допуска организатора. Командное пространство станет доступно после допуска.`:'Сначала зарегистрируйтесь на этот хакатон.'}</div>`;return}
 const invites=data.invites.filter(i=>i.teamId===team.id&&!i.accepted),canInvite=registrationIsOpen(team.hack);
 $content().innerHTML=contextHeader('👥','Моя команда',team)+`<div class="card">${membersMarkup(team)}${invites.length?`<h2>Ожидают приглашения</h2>${invites.map(i=>`<div class="mu">${esc(i.email)}</div>`).join('')}`:''}
  ${isCaptain(team)?`<h2>Пригласить участника</h2>${canInvite?`<div class="row"><input id="invite-email" type="email" placeholder="Почта зарегистрированного пользователя"><button class="btn" data-a="invite">Пригласить</button></div><div class="err" id="invite-error"></div>`:'<p class="mu">Срок регистрации участников для этого хакатона завершён.</p>'}
   ${team.memberIds.length>1?`<h2>Передать капитанство</h2><div class="row"><select id="new-captain">${team.memberIds.filter(id=>id!==team.captainId).map(id=>{const u=data.users.find(x=>x.id===id);return `<option value="${id}">${esc(u?.name||'')}</option>`}).join('')}</select><button class="btn sec" data-a="transfer">Назначить капитаном</button></div>`:''}`:''}
 </div><h2>Кейс</h2><div class="card">${esc(caseDescription(team.hack))}<div class="meta" style="margin-top:10px"><span>📅 ${esc(CAT[team.hack].d)}</span><span>📍 ${esc(CAT[team.hack].fmt)}</span></div></div>
 <h2>Обратная связь эксперта</h2><div class="card">${feedbackFor(team).map(feedbackMarkup).join('')||'<span class="mu">Пока нет комментариев.</span>'}</div>
 <h2>Комментарии ментора</h2><div class="card">${data.mentorComments.filter(comment=>comment.teamId===team.id).map(comment=>`<div class="msg" style="max-width:100%;margin-top:10px"><small>${esc(data.users.find(user=>user.id===comment.userId)?.name||'Ментор')} · ${esc(comment.time)}</small>${esc(comment.text)}</div>`).join('')||'<span class="mu">Ментор пока не оставил комментариев.</span>'}</div>`;
};
function feedbackFor(team){return data.feedback.filter(f=>f.teamId===team.id)}
function feedbackMarkup(f){const author=data.users.find(u=>u.id===f.userId);return `<div class="msg" style="max-width:100%;margin-top:10px"><small>${esc(author?.name||'Эксперт')} · ${esc(f.time)}</small>${esc(f.text)}</div>`}
function canViewEvaluations(hackId){return canManageHack(hackId)||canReviewHack(hackId)}
function evaluationsFor(teamId,stage){return data.evaluations.filter(evaluation=>evaluation.teamId===teamId&&(!stage||evaluation.stage===stage))}
function evaluationStats(teamId,stage='semifinal'){
 const criteria=stageCriteria(stage),evaluations=evaluationsFor(teamId,stage),scores=Object.fromEntries(criteria.map(criterion=>{
  const values=evaluations.map(evaluation=>evaluation.scores?.[criterion.id]).filter(value=>typeof value==='number'&&Number.isFinite(value));
  return [criterion.id,values.length?values.reduce((sum,value)=>sum+value,0)/values.length:null];
 }));
 const total=criteria.every(criterion=>scores[criterion.id]!==null)?Number(criteria.reduce((sum,criterion)=>sum+scores[criterion.id],0).toFixed(1)):null;
 return {scores,total,evaluations};
}
function privateEvaluationDetails(teamId,hackId,stage='semifinal'){
 if(!canViewEvaluations(hackId))return '';
 const criteria=stageCriteria(stage),{evaluations}=evaluationStats(teamId,stage);
 return `<details class="private-evaluations"><summary>Закрытые оценки экспертов (${evaluations.length})</summary>${evaluations.map(evaluation=>{
  const expert=data.users.find(user=>user.id===evaluation.expertId);
  return `<div class="private-evaluation"><div class="hh"><b>${esc(expert?.name||'Эксперт')}</b><small class="mu">${esc(evaluation.updatedAt||'')}</small></div><div class="evaluation-score-list">${criteria.map(criterion=>`<span>${esc(criterion.label)}: <b>${Number.isFinite(evaluation.scores?.[criterion.id])?evaluation.scores[criterion.id]:'—'}/5</b></span>`).join('')}</div><p>${esc(evaluation.comment)}</p></div>`;
 }).join('')||'<p class="mu">Оценок пока нет.</p>'}</details>`;
}
function leaderboardMarkup(hackId,stage){
 if(!stage)return `${leaderboardMarkup(hackId,'semifinal')}${leaderboardMarkup(hackId,'final')}`;
 if(!canViewEvaluations(hackId))return '';
 const criteria=stageCriteria(stage),sortKey=`${hackId}:${stage}`,allTeams=data.teams.filter(team=>team.hack===hackId),finalists=new Set(data.finalistTeams[hackId]||[]),teams=stage==='final'?allTeams.filter(team=>finalists.has(team.id)):allTeams,sortBy=leaderboardSortBy[sortKey]||'total',direction=leaderboardSortDirection[sortKey]||'desc';
 const sorted=teams.map(team=>({team,...evaluationStats(team.id,stage)})).sort((a,b)=>{
  const left=sortBy==='total'?a.total:a.scores[sortBy],right=sortBy==='total'?b.total:b.scores[sortBy];
  if(left===null&&right!==null)return 1;
  if(right===null&&left!==null)return -1;
  if(left!==null&&right!==null&&left!==right)return (left-right)*(direction==='asc'?1:-1);
  return a.team.name.localeCompare(b.team.name,'ru');
 });
 const finalistPicker=stage==='semifinal'&&canManageHack(hackId)?`<div class="finalist-controls"><b>Команды, прошедшие в финал</b><div class="finalist-checkboxes">${allTeams.map(team=>`<label class="check-row"><input type="checkbox" data-finalist-team data-hack="${esc(hackId)}" data-team="${esc(team.id)}" ${finalists.has(team.id)?'checked':''} ${data.semifinalResultsPublished[hackId]?'disabled':''}>${esc(team.name)}</label>`).join('')||'<span class="mu">Команд пока нет.</span>'}</div><p class="mu">${data.semifinalResultsPublished[hackId]?'Результаты опубликованы, изменить список нельзя.':'Отметьте финалистов и отправьте результаты командам.'}</p><button class="btn" data-a="publish-semifinal-results" data-hack="${esc(hackId)}" ${data.semifinalResultsPublished[hackId]?'disabled':''}>${data.semifinalResultsPublished[hackId]?'Результаты опубликованы':'Отправить результаты полуфинала'}</button></div>`:'';
 return `<section class="card leaderboard-card"><div class="hh"><h2>${esc(CAT[hackId]?.t||'Хакатон')} · закрытая таблица: ${EVALUATION_STAGES[stage].label}</h2><div class="leaderboard-controls"><label>Сортировка<select data-leaderboard-sort="${esc(hackId)}" data-stage="${stage}"><option value="total" ${sortBy==='total'?'selected':''}>Общий балл</option>${criteria.map(criterion=>`<option value="${criterion.id}" ${sortBy===criterion.id?'selected':''}>${esc(criterion.label)}</option>`).join('')}</select></label><button class="btn sec" data-a="toggle-leaderboard-sort" data-hack="${esc(hackId)}" data-stage="${stage}" aria-label="Изменить направление сортировки">${direction==='desc'?'↓':'↑'}</button></div></div><p class="mu">Баллы по каждому критерию — среднее оценок экспертов (шкала 0–5). Общая сумма — до 30 баллов. Таблица доступна только организатору и приглашённым экспертам.</p>${finalistPicker}${teams.length?`<div class="leaderboard-scroll"><table class="leaderboard-table"><thead><tr><th>Команда</th><th>Оценок</th>${criteria.map(criterion=>`<th>${esc(criterion.label)}</th>`).join('')}<th>Итого / 30</th><th>Комментарии</th></tr></thead><tbody>${sorted.map(({team,scores,total,evaluations})=>`<tr><th scope="row">${esc(team.name)}</th><td>${evaluations.length}</td>${criteria.map(criterion=>`<td>${scores[criterion.id]===null?'—':scores[criterion.id].toFixed(1)}</td>`).join('')}<td><b>${total===null?'—':total.toFixed(1)}</b></td><td>${privateEvaluationDetails(team.id,hackId,stage)}</td></tr>`).join('')}</tbody></table></div>`:stage==='final'&&data.semifinalResultsPublished[hackId]?'<p class="mu">В финал пока не выбраны команды.</p>':'<p class="mu">Команд пока нет.</p>'}</section>`;
}
function projectMarkup(submission){
 if(!submission)return '<p class="mu">Команда ещё не отправила проект; оценка пока недоступна.</p>';
 return `<div class="review-submission"><b>${esc(submission.name)}</b><p>${esc(submission.description)}</p>${submission.link?`<a href="${esc(submission.link)}" target="_blank" rel="noopener">Открыть проект ↗</a>`:''}${submission.file?`<a href="${esc(submission.file.dataUrl)}" download="${esc(submission.file.name)}">Скачать файл: ${esc(submission.file.name)} (${Math.ceil(submission.file.size/1024)} КБ)</a>`:''}<small class="mu">Отправлено: ${esc(submission.time)}</small></div>`;
}
V.tasks=()=>{
 const team=currentTeam();if(!team)return;
 const tasks=teamTasks(team),members=team.memberIds.map(id=>data.users.find(u=>u.id===id)).filter(Boolean),done=tasks.filter(t=>t.s===3).length,pc=tasks.length?Math.round(done/tasks.length*100):0;
 const editedTask=tasks.find(task=>String(task.id)===String(editingTaskId));
 if(editingTaskId&&!editedTask)editingTaskId=null;
 const cols=['К выполнению','В работе','На проверке','Выполнено'];
 $content().innerHTML=contextHeader('✅','Задачи',team)+`<div class="card" style="margin-bottom:14px"><b>Прогресс: ${done} из ${tasks.length} · ${pc}%</b><div class="pg"><i style="width:${pc}%"></i></div>
  ${isCaptain(team)?`<div class="fr" style="margin:10px 0 0"><input id="task-title" placeholder="Название задачи" aria-label="Название задачи" value="${esc(editedTask?.t||'')}" style="flex:1 1 180px"><textarea id="task-description" rows="1" placeholder="Описание задачи" aria-label="Описание задачи" style="flex:2 1 240px;min-height:44px;resize:vertical">${esc(editedTask?.description||'')}</textarea><select id="task-owner" aria-label="Ответственный" style="flex:1 1 150px;width:auto">${members.map(u=>`<option value="${esc(u.id)}" ${editedTask?.w===u.id?'selected':''}>${esc(u.name)}</option>`).join('')}</select><input id="task-date" type="date" aria-label="Срок выполнения" value="${editedTask&&/^\d{4}-\d{2}-\d{2}$/.test(editedTask.due)?esc(editedTask.due):''}" style="flex:1 1 130px"><button class="btn" data-a="save-task">${editedTask?'Сохранить задачу':'Добавить'}</button>${editedTask?'<button class="btn sec" data-a="cancel-task-edit">Отмена</button>':''}</div><div class="err" id="task-error"></div>`:''}</div>
  <div class="kb">${cols.map((label,status)=>`<div class="col"><h3>${label}<span>${tasks.filter(t=>t.s===status).length}</span></h3>${tasks.filter(t=>t.s===status).map(t=>`<div class="tk"><b>${esc(t.t)}</b>${t.description?`<p class="task-description">${esc(t.description)}</p>`:''}<small>👤 ${esc(data.users.find(u=>u.id===t.w)?.name||'Не назначен')} · ⏰ ${esc(t.due)}</small>${isCaptain(team)?`<div class="mv"><button class="mvb" data-a="edit-task" data-id="${esc(t.id)}">Изменить</button><button class="mvb" data-a="delete-task" data-id="${esc(t.id)}">Удалить</button>${status>0?`<button class="mvb" data-a="move-task" data-id="${esc(t.id)}" data-d="-1" aria-label="Назад">←</button>`:''}${status<3?`<button class="mvb" data-a="move-task" data-id="${esc(t.id)}" data-d="1" aria-label="Вперёд">→</button>`:''}</div>`:''}</div>`).join('')}</div>`).join('')}</div>`;
};
V.learn=()=>{
 const modules=data.learn.filter(module=>module.hack===cur),all=modules.flatMap(m=>m.i),isDone=item=>learningComplete(data.currentUserId,item),done=all.filter(isDone).length,pc=all.length?Math.round(done/all.length*100):0;
 const content=modules.length?modules.map(m=>`<h2>${esc(m.m)}</h2><div class="card">${m.i.map(i=>{const completed=isDone(i);return `<div class="ls ${completed?'done':''}"><span style="font-size:22px">${esc(i.ty)}</span><div class="ti"><b>${esc(i.t)}</b><small>${esc(i.d)}</small></div><a href="${esc(i.u)}" target="_blank" rel="noopener">Открыть ↗</a><button class="btn ${completed?'':'sec'}" data-a="toggle-learn" data-id="${esc(i.id)}">${completed?'✓ Изучено':'Изучено?'}</button></div>`}).join('')}</div>`).join(''):'<div class="card mu">Материалы для этого хакатона пока не опубликованы.</div>';
 $content().innerHTML=contextHeader('🎓','Обучение')+`<div class="card"><b>Пройдено ${done} из ${all.length} · ${pc}%</b><div class="pg"><i style="width:${pc}%"></i></div></div>`+content;
};
V.cal=()=>{
 const events=data.events.filter(event=>event.hack===cur).slice().sort((a,b)=>a.date.localeCompare(b.date)||a.time.localeCompare(b.time));
 const today=localDateKey();
 $content().innerHTML=contextHeader('📅','Расписание',currentTeam())+`<div class="card">${events.map(event=>{const[,month,day]=event.date.split('-'),past=event.date<today;return `<div class="ev ${past?'past':''}"><div class="dt"><b>${+day}</b>${MO[+month-1]}</div><div style="flex:1"><b>${esc(event.title)}</b><div class="mu" style="font-size:13px">${esc(event.time)} · ${esc(event.type)}${event.speaker?' · '+esc(event.speaker):''}</div>${event.description?`<p class="mu" style="margin:5px 0">${esc(event.description)}</p>`:''}${event.link?`<a href="${esc(event.link)}" target="_blank" rel="noopener">Подключиться ↗</a>`:''}</div></div>`}).join('')||'<p class="mu">Событий для этого хакатона пока нет.</p>'}</div>`;
};
V.lobby=()=>{
 const messages=hackathonChat(cur);
 $content().innerHTML=contextHeader('💬','Общий чат хакатона',null)+`<p class="mu">Ищите команду и задавайте вопросы об этом хакатоне. Сообщения видны всем участникам этого хакатона.</p><div class="card"><div class="chat" id="lobby-chat-list">${messages.map(message=>`<div class="msg ${message.userId===me().id?'mine':''}"><small>${esc(data.users.find(user=>user.id===message.userId)?.name||'Участник')} · ${esc(message.time||'')}</small>${esc(message.text)}</div>`).join('')||'<p class="mu">Сообщений пока нет — начните обсуждение.</p>'}</div><div class="row" style="margin-top:12px"><input id="lobby-message" maxlength="1000" aria-label="Сообщение в общем чате" placeholder="Вопрос о хакатоне или поиск команды" autocomplete="off"><button class="btn" data-a="send-lobby-message">Отправить</button></div></div>`;
 const list=$('#lobby-chat-list');list.scrollTop=list.scrollHeight;
};
V.chat=()=>{
 const team=currentTeam(),messages=teamChat(team);
 $content().innerHTML=contextHeader('💬','Командный чат',team)+`<div class="card"><div class="chat" id="chat-list">${messages.map(m=>`<div class="msg ${m.userId===me().id?'mine':''}"><small>${esc(data.users.find(u=>u.id===m.userId)?.name||'Участник')} · ${esc(m.time)}</small>${esc(m.text)}</div>`).join('')}</div><div class="row" style="margin-top:12px"><input id="message" placeholder="Сообщение команде" autocomplete="off"><button class="btn" data-a="send-message">Отправить</button></div></div>`;
 const list=$('#chat-list');list.scrollTop=list.scrollHeight;
};
V.sub=()=>{
 const team=currentTeam(),submission=data.submissions.find(s=>s.teamId===team.id),captain=isCaptain(team);
 const deadline=submissionDeadline(team.hack),deadlineText=deadline?deadline.toLocaleString('ru-RU',{dateStyle:'long',timeStyle:'short'}):'не установлен';
 $content().innerHTML=contextHeader('📤','Сдача проекта',team)+(submission?`<div class="card"><span class="bd b-ok">Отправлено</span><h2 style="margin-top:12px">${esc(submission.name)}</h2><p>${esc(submission.description)}</p><p class="mu">${submission.link?`🔗 <a href="${esc(submission.link)}" target="_blank" rel="noopener">${esc(submission.link)}</a><br>`:''}${submission.file?`📎 <a href="${esc(submission.file.dataUrl)}" download="${esc(submission.file.name)}">Скачать файл: ${esc(submission.file.name)} (${Math.ceil(submission.file.size/1024)} КБ)</a><br>`:''}Время отправки: ${esc(submission.time)}</p>${feedbackFor(team).map(feedbackMarkup).join('')}</div>`:`<div class="card"><span class="bd b-wn">Не отправлено · срок сдачи: ${esc(deadlineText)}</span>${captain?`<form id="submission-form"><div class="fld" style="margin-top:14px"><label for="submission-name">Название решения</label><input id="submission-name" required></div><div class="fld"><label for="submission-description">Краткое описание</label><textarea id="submission-description" rows="3" required></textarea></div><div class="fld"><label for="submission-link">Ссылка на проект или репозиторий (необязательно)</label><input id="submission-link" type="url" placeholder="https://"></div><div class="fld"><label for="submission-file">Файл проекта (не более 1 МБ, необязательно)</label><input id="submission-file" type="file"></div><div class="err" id="submission-error"></div><button class="btn">Отправить решение</button></form>`:'<p class="mu">Решение отправляет капитан команды.</p>'}</div>`);
 const form=$('#submission-form');
 if(form)form.onsubmit=e=>{
  e.preventDefault();
  const error=$('#submission-error'),button=form.querySelector('button'),link=$('#submission-link').value.trim(),file=$('#submission-file').files[0];
  if(deadline&&new Date()>deadline){error.textContent='Срок сдачи завершён.';return}
  if(!link&&!file){error.textContent='Добавьте ссылку на проект или прикрепите файл.';return}
  if(link&&!/^https?:\/\//i.test(link)){error.textContent='Ссылка должна начинаться с http:// или https://.';return}
  if(file&&file.size>MAX_SUBMISSION_FILE_SIZE){error.textContent='Размер файла не должен превышать 1 МБ.';return}
  const completeSubmission=fileData=>{
   const submissionData={teamId:team.id,name:$('#submission-name').value.trim(),description:$('#submission-description').value.trim(),link,time:new Date().toLocaleString('ru-RU')};
   if(file)submissionData.file={name:file.name,type:file.type,size:file.size,dataUrl:fileData};
   data.submissions.push(submissionData);
   notifyUsers(`Команда «${team.name}» отправила решение.`,[...team.memberIds,ownerOfHack(team.hack)],{type:'submission',detail:`Команда «${team.name}» отправила проект «${submissionData.name}». ${submissionData.description}`,hackId:team.hack,teamId:team.id,section:'sub'});
   try{save()}catch(saveError){
    data.submissions.pop();
    data.notifications.shift();
    if(saveError.name==='QuotaExceededError')error.textContent='Недостаточно места в локальном хранилище браузера. Попробуйте файл меньшего размера.';
    else{console.error('Не удалось сохранить отправку проекта:',saveError);error.textContent='Не удалось сохранить решение. Проверьте доступность локального хранилища и повторите попытку.'}
    button.disabled=false;return;
   }
   nav();V.sub();
  };
  if(!file){completeSubmission(null);return}
  button.disabled=true;
  const reader=new FileReader();
  reader.onload=()=>{if(typeof reader.result!=='string'){error.textContent='Не удалось прочитать выбранный файл.';button.disabled=false;return}completeSubmission(reader.result)};
  reader.onerror=()=>{error.textContent='Не удалось прочитать выбранный файл.';button.disabled=false};
  reader.readAsDataURL(file);
 };
};
V.notes=()=>{
 const notifications=notificationsForUser(data.currentUserId);
 const selected=notifications.find(item=>item.id===selectedNotificationId);
 if(selected){
  const type=NOTIFICATION_TYPES[notificationType(selected)],target=notificationTarget(selected),hack=target&&CAT[target.hackId],team=target&&data.teams.find(item=>item.id===target.teamId);
  const expertInvite=selected.type==='hackInvite'&&data.hackExpertInvites.find(item=>item.id===selected.hackExpertInviteId&&item.expertId===me().id);
  $main().innerHTML=`<button class="back" data-a="back-notifications">← Все уведомления</button><div class="card notification-detail">
   <div class="notification-type"><span class="notification-icon">${type.icon}</span>${type.label}</div><h1>${esc(selected.text)}</h1>
   <p class="mu">${esc(selected.time||'')}</p><p class="notification-description">${esc(selected.detail||selected.text)}</p>
   ${hack?`<div class="notification-context"><b>${esc(hack.t)}</b>${team?`<span>Команда «${esc(team.name)}»</span>`:''}</div>`:''}
   ${expertInvite?`<div class="notification-context"><b>${esc(CAT[expertInvite.hackId]?.t||'Хакатон')}</b><span>Статус приглашения: ${expertInvite.status==='pending'?'ожидает ответа':expertInvite.status==='accepted'?'принято':expertInvite.status==='revoked'?'отозвано':'отклонено'}</span></div>${expertInvite.status==='pending'?`<div class="form-actions"><button class="btn" data-a="respond-hack-invite" data-invite="${esc(expertInvite.id)}" data-response="accepted">Принять приглашение</button><button class="btn sec" data-a="respond-hack-invite" data-invite="${esc(expertInvite.id)}" data-response="declined">Отклонить</button></div>`:expertInvite.status==='accepted'&&canReviewHack(expertInvite.hackId)?'<button class="btn" data-a="open-expert-review">Перейти к оценке</button>':''}`:''}
   ${target?`<button class="btn" data-a="open-notification-target" data-hack="${esc(target.hackId)}" data-team="${esc(target.teamId||'')}" data-section="${esc(target.section)}" data-destination="${esc(target.destination||'')}">Перейти к разделу «${target.destination==='profile'?'Приглашения в команду':target.destination==='admin'?'Кабинет организатора':esc(HACK_SECTIONS.find(([key])=>key===target.section)?.[1]||'Обзор')}»</button>`:expertInvite?'':'<p class="mu">Для этого уведомления нет связанного раздела.</p>'}
  </div>`;
  return;
 }
 const availableTypes=Object.keys(NOTIFICATION_TYPES).filter(type=>notifications.some(item=>notificationType(item)===type));
 const visible=notificationRows(notifications.filter(item=>notificationsFilter==='all'||notificationType(item)===notificationsFilter));
 $main().innerHTML=`<div class="hh"><h1>🔔 Уведомления</h1>${notifications.some(item=>!item.read)?'<button class="btn sec" data-a="read-all">Прочитать все</button>':''}</div>
  <div class="notification-filters" role="group" aria-label="Фильтр уведомлений"><button class="notification-filter ${notificationsFilter==='all'?'on':''}" data-notification-filter="all">Все <span>${notifications.length}</span></button>${availableTypes.map(type=>`<button class="notification-filter ${notificationsFilter===type?'on':''}" data-notification-filter="${type}">${NOTIFICATION_TYPES[type].icon} ${NOTIFICATION_TYPES[type].label} <span>${notifications.filter(item=>notificationType(item)===type).length}</span></button>`).join('')}</div>
  <div class="card notification-list">${visible.map(row=>{
   if(row.group){
    const messages=row.group.messages,latest=messages[0],isRead=messages.every(message=>message.read);
    return `<button class="nt ${isRead?'':'un'}" data-a="open-message-group" data-hack="${esc(row.group.hackId||'')}" data-team="${esc(row.group.teamId)}"><span class="notification-icon">${NOTIFICATION_TYPES.message.icon}</span><span class="notification-copy"><span class="notification-type">${NOTIFICATION_TYPES.message.label}${isRead?'':' · Новое'}</span><b>${esc(messageNotificationSummary(messages))}</b><span class="mu notification-time">${esc(latest.time||'')}</span></span><span class="notification-arrow" aria-hidden="true">›</span></button>`;
   }
   const n=row.notification,type=NOTIFICATION_TYPES[notificationType(n)];
   return `<button class="nt ${n.read?'':'un'}" data-a="open-notification" data-id="${esc(n.id||'')}" ${n.id?'':'disabled'}><span class="notification-icon">${type.icon}</span><span class="notification-copy"><span class="notification-type">${type.label}${n.read?'':' · Новое'}</span><b>${esc(n.text)}</b><span class="mu notification-time">${esc(n.time||'')}</span></span><span class="notification-arrow" aria-hidden="true">›</span></button>`;
  }).join('')||`<p class="mu">${notifications.length?'В этом типе уведомлений пока нет.':'Уведомлений пока нет.'}</p>`}</div>`;
};
V.profile=()=>{
 const user=me(),invitations=data.invites.filter(i=>i.email===user.email.toLowerCase()&&!i.accepted);
 $main().innerHTML=contextHeader('👤','Личный кабинет',null)+`<div class="card"><div class="mem"><div class="av">${esc(user.name[0])}</div><div><b>${esc(user.name)}</b><small class="mu" style="display:block">${esc(user.email)}</small></div></div>
  <div class="facts"><div>Роль<b>${esc(currentRole())}</b></div>${user.role==='participant'?`<div>Университет<b>${esc(user.university||'—')}</b></div><div>Факультет<b>${esc(user.faculty||'—')}</b></div><div>Группа<b>${esc(user.group||'—')}</b></div><div>Хакатонов<b>${registrations().length}</b></div>`:`<div>Организация<b>${esc(user.organization||'—')}</b></div>`}${user.role==='expert'?`<div>Проверка аккаунта<b>${user.verified?'Подтверждён':'Ожидает подтверждения'}</b></div>`:''}</div>
  ${user.role==='expert'?`<section class="card"><h2>О себе</h2><p>${esc(user.about||'Информация о себе не заполнена.')}</p></section>`:''}
  <section class="palette-panel"><h2>Цветовая палитра</h2><p class="mu">Выберите цвет и вариант оформления. Настройка сохранится в этом браузере.</p><div class="palette-grid">${PALETTES.map(palette=>`<button type="button" class="palette-choice ${data.palette===palette.id?'selected':''}" data-a="set-palette" data-palette="${palette.id}" aria-pressed="${data.palette===palette.id}"><span class="palette-swatch" style="--swatch:${palette.swatch}"></span><span>${palette.name}</span></button>`).join('')}</div>
   <h3 class="palette-mode-title">Вариант оформления</h3><div class="palette-modes" role="group" aria-label="Вариант оформления">${[['light','Светлая'],['dark','Тёмная'],['auto','Как в системе']].map(([mode,label])=>`<button type="button" class="palette-mode ${data.paletteMode===mode?'selected':''}" data-a="set-palette-mode" data-mode="${mode}" aria-pressed="${data.paletteMode===mode}">${label}</button>`).join('')}</div>
   <button type="button" class="palette-reset ${data.palette==='auto'&&data.paletteMode==='auto'?'selected':''}" data-a="set-palette" data-palette="auto" aria-pressed="${data.palette==='auto'&&data.paletteMode==='auto'}">Использовать системное оформление</button>
  </section>
  <p class="mu">Вход выполняется через Supabase Auth; данные профиля и пространства демо хранятся локально в этом браузере.</p>
  ${invitations.length?`<h2>Приглашения в команду</h2>${invitations.map(i=>`<div class="invite-row"><span>«${esc(i.teamName)}» · ${esc(CAT[i.hack]?.t||'')}</span>${registrationIsOpen(i.hack)?`<button class="btn" data-a="accept-invite" data-team="${esc(i.teamId)}">Принять</button>`:'<span class="bd b-nu">Срок приглашения истёк</span>'}</div>`).join('')}`:''}
  <button class="btn sec" data-a="logout">Выйти из аккаунта</button></div>`;
};
function refreshExpertInviteList(){
 const list=$('#expert-invite-list'),hackId=list?.dataset.hack;
 if(!list||!canManageHack(hackId))return;
 list.innerHTML=data.users.filter(user=>user.role==='expert'&&user.verified).map(expert=>{
  const invite=[...data.hackExpertInvites].reverse().find(record=>record.hackId===hackId&&record.expertId===expert.id),active=invite&&['pending','accepted'].includes(invite.status),status=invite?.status==='accepted'?'Приглашение принято':invite?.status==='pending'?'Ожидает ответа':invite?.status==='declined'?'Отклонено':invite?.status==='revoked'?'Отозвано':'Не приглашён';
  return `<div class="expert-invite-row"><label class="check-row"><input type="checkbox" data-expert-invite data-hack="${esc(hackId)}" data-expert="${esc(expert.id)}" ${active?'checked':''}><span><b>${esc(expert.name)}</b><small>${esc(expert.email)} · ${status}</small></span></label>${active?`<button class="btn sec" data-a="revoke-hack-expert" data-invite="${esc(invite.id)}">Отозвать</button>`:''}</div>`;
 }).join('')||'<span class="mu">Подтверждённых экспертов пока нет.</span>';
}
function setupOrganizerHackTools(){
 const createForm=$('#hack-create-form');
 if(createForm&&!$('#new-hack-venue')){
  const deadlineField=$('#new-hack-deadline')?.closest('.fld');
  deadlineField?.insertAdjacentHTML('afterend',`<div class="fld"><label for="new-hack-venue">Место проведения</label><input id="new-hack-venue" required placeholder="Город, площадка или онлайн"></div><div class="fld"><label for="new-hack-final-format">Формат финальной защиты</label><select id="new-hack-final-format"><option value="online">Онлайн</option><option value="in-person">Очно</option></select></div><div class="fld"><label for="new-hack-final-venue">Место или платформа финала</label><input id="new-hack-final-venue" required placeholder="Ссылка на платформу или адрес"></div>`);
  createForm.querySelector('button[type="submit"],button:not([type])').textContent='Создать хакатон';
  $('#new-hack-final-format').onchange=event=>{$('#new-hack-final-venue').placeholder=event.target.value==='online'?'Платформа видеосвязи или ссылка':'Адрес места проведения'};
  createForm.onsubmit=event=>{
   event.preventDefault();
   const title=$('#new-hack-title').value.trim(),deadline=$('#new-hack-deadline').value,deadlineDate=new Date(deadline),venue=$('#new-hack-venue').value.trim(),finalVenue=$('#new-hack-final-venue').value.trim();
   if(!Number.isFinite(deadlineDate.getTime())||deadlineDate<=new Date()){$('#hack-create-error').textContent='Укажите будущий дедлайн регистрации.';return}
   if(!venue||!finalVenue){$('#hack-create-error').textContent='Укажите место проведения и площадку финальной защиты.';return}
   const id=`hack-${Date.now()}`,hack={id,t:title,org:$('#new-hack-org').value.trim(),ownerId:me().id,public:true,d:$('#new-hack-dates').value.trim(),fmt:$('#new-hack-format').value.trim(),venue,finalDefenseFormat:$('#new-hack-final-format').value,finalVenue,desc:$('#new-hack-desc').value.trim(),businessCase:$('#new-hack-desc').value.trim(),rules:['Участие командное; капитан регистрирует команду и подаёт решение.','Состав команды и сроки участия определяются организатором.'],registrationDeadline:deadline,st:'Идёт регистрация'};
   CAT[id]=hack;data.hacks.push(hack);data.finalistTeams[id]=[];data.semifinalResultsPublished[id]=false;organizerTab=id;
   save();toast('Хакатон создан. Теперь можно приглашать экспертов.');V.admin();
  };
 }
 refreshExpertInviteList();
 const hackForm=$('#hack-edit-form'),hackSelect=$('#hack-edit-id');
 if(hackForm&&hackSelect&&!$('#hack-edit-venue')){
  const statusField=$('#hack-edit-status').closest('.fld');
  statusField.insertAdjacentHTML('afterend',`<div class="fld"><label for="hack-edit-venue">Место проведения</label><input id="hack-edit-venue" required></div><div class="fld"><label for="hack-edit-final-format">Формат финальной защиты</label><select id="hack-edit-final-format"><option value="online">Онлайн</option><option value="in-person">Очно</option></select></div><div class="fld"><label for="hack-edit-final-venue">Место или платформа финала</label><input id="hack-edit-final-venue" required></div>`);
  const fillExtra=()=>{const hack=CAT[hackSelect.value];$('#hack-edit-venue').value=hack.venue||'';$('#hack-edit-final-format').value=hack.finalDefenseFormat||'online';$('#hack-edit-final-venue').value=hack.finalVenue||''};
  fillExtra();hackSelect.addEventListener('change',fillExtra);
  const priorSubmit=hackForm.onsubmit;
  hackForm.onsubmit=event=>{
   const id=hackSelect.value,registrationDeadline=$('#hack-edit-registration-deadline').value;
   if(!Number.isFinite(new Date(registrationDeadline).getTime()))return;
   const extra={venue:$('#hack-edit-venue').value.trim(),finalDefenseFormat:$('#hack-edit-final-format').value,finalVenue:$('#hack-edit-final-venue').value.trim()};
   Object.assign(CAT[id],extra);data.hackathonEdits[id]={...data.hackathonEdits[id],...extra};data.hacks=data.hacks.map(hack=>hack.id===id?{...hack,...extra}:hack);
   priorSubmit(event);
  };
 }
}
V.admin=()=>{
 if(me().role!=='organizer'){view='home';home();return}
 const allOwnedHackIds=hackIds().filter(id=>canManageHack(id));
 if(!allOwnedHackIds.length)organizerTab='create';
 if(organizerTab!=='create'&&!allOwnedHackIds.includes(organizerTab))organizerTab=allOwnedHackIds[0]||'create';
 const createTab=organizerTab==='create',ownedHackIds=createTab?[]:[organizerTab],activeHackId=ownedHackIds[0];
 const tabs=`<div class="organizer-tabs" role="tablist" aria-label="Хакатоны организатора"><button type="button" role="tab" aria-selected="${createTab}" class="organizer-tab ${createTab?'on':''}" data-organizer-tab="create">+ Создать новый хакатон</button>${allOwnedHackIds.map(id=>`<button type="button" role="tab" aria-selected="${organizerTab===id}" class="organizer-tab ${organizerTab===id?'on':''}" data-organizer-tab="${esc(id)}">${esc(CAT[id].t)}</button>`).join('')}</div>`;
 if(createTab){
  $main().innerHTML=contextHeader('🛠️','Кабинет организатора',null)+tabs+`<form id="hack-create-form" class="card"><h2>Создать новый хакатон</h2><div class="form-grid"><div class="fld"><label for="new-hack-title">Название</label><input id="new-hack-title" required></div><div class="fld"><label for="new-hack-org">Организатор</label><input id="new-hack-org" value="${esc(me().organization||'')}" required></div><div class="fld"><label for="new-hack-dates">Даты проведения</label><input id="new-hack-dates" required placeholder="1–10 декабря 2026"></div><div class="fld"><label for="new-hack-format">Формат</label><input id="new-hack-format" value="Онлайн" required></div><div class="fld"><label for="new-hack-deadline">Дедлайн регистрации</label><input id="new-hack-deadline" type="datetime-local" required></div></div><div class="fld"><label for="new-hack-desc">Описание и бизнес-кейс</label><textarea id="new-hack-desc" rows="4" required></textarea></div><div class="err" id="hack-create-error"></div><button class="btn" type="submit">Создать хакатон</button></form>`;
  return;
 }
 const ownedTeams=data.teams.filter(team=>team.hack===activeHackId),submissions=data.submissions.filter(submission=>ownedTeams.some(team=>team.id===submission.teamId));
 $main().innerHTML=contextHeader('🛠️','Кабинет организатора',null)+tabs+`<div class="facts"><div>Мои хакатоны<b>${allOwnedHackIds.length}</b></div><div>Команды<b>${ownedTeams.length}</b></div><div>Допущено<b>${ownedTeams.filter(t=>t.status==='active').length}</b></div><div>Ожидают допуска<b>${ownedTeams.filter(t=>t.status==='pending').length}</b></div><div>Сдано решений<b>${submissions.length}</b></div></div>
  <h2>Пригласить экспертов</h2><section class="card expert-invite-panel" id="expert-invite-panel"><p class="mu">Отметьте эксперта, чтобы сразу отправить приглашение. Снимите отметку или нажмите «Отозвать», чтобы отозвать его. Экспертов можно добавлять позже.</p><div id="expert-invite-list" data-hack="${esc(activeHackId)}" class="expert-invite-list"></div></section>
  <h2>Закрытые лидерборды</h2><div class="leaderboard-list">${ownedHackIds.map(leaderboardMarkup).join('')}</div>
  <h2>Команды и заявки</h2><div class="organizer-team-list">${ownedTeams.map(organizerTeamMarkup).join('')||'<div class="card mu">Заявок пока нет.</div>'}</div>
  <h2>Сданные проекты</h2><div class="card">${submissions.map(s=>{const t=ownedTeams.find(x=>x.id===s.teamId);return `<div class="submission-row"><b>${esc(t?.name||'Команда')} · ${esc(s.name)}</b><p>${esc(s.description)}</p>${s.link?`<a href="${esc(s.link)}" target="_blank" rel="noopener">${esc(s.link)}</a>`:''}${s.file?`<a href="${esc(s.file.dataUrl)}" download="${esc(s.file.name)}">Скачать файл: ${esc(s.file.name)} (${Math.ceil(s.file.size/1024)} КБ)</a>`:''}<small class="mu">${esc(s.time)}</small></div>`}).join('')||'<span class="mu">Пока нет отправленных решений.</span>'}</div>
  <h2>Редактировать хакатон</h2><div class="card"><form id="hack-edit-form"><div class="fld"><label for="hack-edit-id">Хакатон</label><select id="hack-edit-id">${ownedHackIds.map(id=>`<option value="${esc(id)}">${esc(CAT[id].t)}</option>`).join('')}</select></div><div class="form-grid"><div class="fld"><label for="hack-edit-title">Название</label><input id="hack-edit-title" required></div><div class="fld"><label for="hack-edit-org">Организатор</label><input id="hack-edit-org" required></div><div class="fld"><label for="hack-edit-dates">Даты проведения</label><input id="hack-edit-dates" required></div><div class="fld"><label for="hack-edit-format">Формат</label><input id="hack-edit-format" required></div><div class="fld"><label for="hack-edit-registration-deadline">Дедлайн регистрации команд</label><input id="hack-edit-registration-deadline" type="datetime-local" required></div><div class="fld"><label for="hack-edit-status">Статус</label><select id="hack-edit-status"><option>Идёт регистрация</option><option>Идёт основной этап</option><option>Завершён</option></select></div></div><button class="btn">Сохранить изменения</button></form></div>
  <h2>Расписание и сроки</h2><div class="card">${data.events.map((event,index)=>({event,index})).filter(({event})=>event.hack===activeHackId).map(({event,index})=>`<div class="schedule-row"><div><b>${esc(event.title)}${event.submissionDeadline?' · срок сдачи проекта':''}</b><small>${esc(CAT[event.hack]?.t||'Хакатон')} · ${esc(event.date)} · ${esc(event.time)}</small></div><div class="schedule-actions"><button class="btn sec" data-a="edit-event" data-index="${index}">Изменить</button><button class="btn danger" data-a="delete-event" data-index="${index}">Удалить этап</button></div></div>`).join('')||'<span class="mu">Событий пока нет.</span>'}</div>
  <h2>Опубликовать кейс</h2><div class="card"><form id="case-form"><div class="fld"><label for="case-hack">Хакатон</label><select id="case-hack">${ownedHackIds.map(id=>`<option value="${esc(id)}">${esc(CAT[id].t)}</option>`).join('')}</select></div><div class="fld"><label for="case-text">Условие и описание кейса</label><textarea id="case-text" rows="4" required>${esc(caseDescription(ownedHackIds[0]))}</textarea></div><button class="btn">Опубликовать кейс</button></form></div>
  <h2>Добавить или изменить событие</h2><div class="card"><form id="event-form"><div class="form-grid"><div class="fld"><label for="event-hack">Хакатон</label><select id="event-hack">${ownedHackIds.map(id=>`<option value="${esc(id)}">${esc(CAT[id].t)}</option>`).join('')}</select></div><div class="fld"><label for="event-title">Название</label><input id="event-title" required></div><div class="fld"><label for="event-type">Тип события</label><select id="event-type">${['Мероприятие','Дедлайн','Старт','Кейс','Вебинар','Консультация','Защита','Итоги'].map(type=>`<option>${type}</option>`).join('')}</select></div><div class="fld"><label for="event-date">Дата</label><input id="event-date" type="date" required></div><div class="fld"><label for="event-time">Время</label><input id="event-time" type="time" required></div><div class="fld"><label for="event-speaker">Спикер / эксперт</label><input id="event-speaker"></div><div class="fld"><label for="event-link">Ссылка</label><input id="event-link" type="url" placeholder="https://"></div></div><div class="fld"><label for="event-description">Описание события</label><textarea id="event-description" rows="2"></textarea></div><label class="check-row"><input id="event-submission-deadline" type="checkbox"> Это срок сдачи проекта</label><div class="form-actions"><button class="btn" id="event-submit">Добавить в расписание</button><button type="button" class="btn sec" data-a="cancel-event-edit" hidden>Отмена</button></div></form></div>
  <h2>Опубликовать учебный материал</h2><div class="card"><form id="material-form"><div class="form-grid"><div class="fld"><label for="material-hack">Хакатон</label><select id="material-hack">${ownedHackIds.map(id=>`<option value="${esc(id)}">${esc(CAT[id].t)}</option>`).join('')}</select></div><div class="fld"><label for="material-title">Название материала</label><input id="material-title" required></div><div class="fld"><label for="material-link">Ссылка</label><input id="material-link" type="url" required placeholder="https://"></div><div class="fld"><label for="material-module">Раздел</label><input id="material-module" value="Материалы организатора" required></div></div><button class="btn">Опубликовать материал</button></form></div>`;
 const hackForm=$('#hack-edit-form'),hackSelect=$('#hack-edit-id');
 const fillHackForm=()=>{const h=CAT[hackSelect.value];$('#hack-edit-title').value=h.t;$('#hack-edit-org').value=h.org;$('#hack-edit-dates').value=h.d;$('#hack-edit-format').value=h.fmt;$('#hack-edit-registration-deadline').value=h.registrationDeadline||'';$('#hack-edit-status').value=h.st};
 fillHackForm();hackSelect.onchange=fillHackForm;
 hackForm.onsubmit=e=>{e.preventDefault();const id=hackSelect.value,edits={t:$('#hack-edit-title').value.trim(),org:$('#hack-edit-org').value.trim(),d:$('#hack-edit-dates').value.trim(),fmt:$('#hack-edit-format').value.trim(),registrationDeadline:$('#hack-edit-registration-deadline').value,st:$('#hack-edit-status').value};if(!canManageHack(id)){toast('Управлять можно только собственным хакатоном.');return}if(!Number.isFinite(new Date(edits.registrationDeadline).getTime())){toast('Укажите корректный дедлайн регистрации команд.');return}data.hackathonEdits=data.hackathonEdits||{};data.hackathonEdits[id]={...data.hackathonEdits[id],...edits};Object.assign(CAT[id],edits);data.hacks=data.hacks.map(hack=>hack.id===id?{...hack,...edits}:hack);notifyUsers(`Организатор обновил информацию о хакатоне «${edits.t}».`,teamMembersForHack(id),{type:'hackathon',detail:`Обновлены параметры хакатона: название — ${edits.t}; даты — ${edits.d}; формат — ${edits.fmt}; дедлайн регистрации — ${new Date(edits.registrationDeadline).toLocaleString('ru-RU',{dateStyle:'long',timeStyle:'short'})}; статус — ${edits.st}.`,hackId:id,section:'overview'});save();toast('Информация о хакатоне обновлена.');V.admin()};
 const selectedHack=$('#case-hack'),caseText=$('#case-text');selectedHack.onchange=()=>{caseText.value=caseDescription(selectedHack.value)};
 $('#case-form').onsubmit=e=>{e.preventDefault();const hackId=selectedHack.value;if(!canManageHack(hackId)){toast('Управлять можно только собственным хакатоном.');return}data.caseDescriptions[hackId]=caseText.value.trim();notifyUsers('Организатор обновил условие кейса.',teamMembersForHack(hackId),{type:'hackathon',detail:`Опубликовано обновлённое описание кейса хакатона «${CAT[hackId].t}». Откройте обзор хакатона, чтобы прочитать условие.`,hackId,section:'overview'});save();toast('Кейс опубликован.');V.admin()};
 $('#event-form').onsubmit=e=>{
  e.preventDefault();
  const form=$('#event-form'),index=Number(form.dataset.editIndex),isEditing=Number.isInteger(index)&&form.dataset.editIndex!=='',hackId=$('#event-hack').value;
  if(!canManageHack(hackId)){toast('Управлять можно только собственным хакатоном.');return}
  const event={hack:hackId,title:$('#event-title').value.trim(),date:$('#event-date').value,time:$('#event-time').value,type:$('#event-type').value,description:$('#event-description').value.trim(),speaker:$('#event-speaker').value.trim(),link:$('#event-link').value.trim(),submissionDeadline:$('#event-submission-deadline').checked};
  if(isEditing&&!data.events[index]){toast('Не удалось найти событие для изменения.');return}
  if(event.submissionDeadline)data.events.forEach((item,position)=>{if(position!==index&&item.hack===hackId)item.submissionDeadline=false});
  const eventDetails=`${event.date} в ${event.time} · ${event.type}${event.speaker?` · ${event.speaker}`:''}${event.description?`. ${event.description}`:''}`;
  if(isEditing){const previous=data.events[index],previousDetails=`${previous.date} в ${previous.time} · ${previous.type||'Мероприятие'}${previous.speaker?` · ${previous.speaker}`:''}`;Object.assign(previous,event);notifyUsers(`Организатор изменил расписание: «${event.title}».`,teamMembersForHack(hackId),{type:'schedule',detail:`Изменение расписания: «${event.title}». Было: ${previousDetails}. Стало: ${eventDetails}`,hackId,section:'cal'})}
  else{data.events.push(event);notifyUsers(`Организатор добавил событие «${event.title}» в расписание.`,teamMembersForHack(hackId),{type:'schedule',detail:`В расписании появилось новое событие: «${event.title}». ${eventDetails}`,hackId,section:'cal'})}
  save();checkDeadlineReminders();toast(isEditing?'Расписание обновлено.':'Событие добавлено.');V.admin();
 };
 const materialForm=$('#material-form');
 if(materialForm){
  let editingMaterial=null;
  for(const module of data.learn){const item=module.i.find(candidate=>candidate.id===editingMaterialId);if(item){editingMaterial={module,item};break}}
  if(editingMaterial&&!canManageHack(editingMaterial.module.hack)){editingMaterialId=null;editingMaterial=null}
  if(editingMaterial){
   $('#material-hack').value=editingMaterial.module.hack;$('#material-hack').disabled=true;$('#material-title').value=editingMaterial.item.t;$('#material-link').value=editingMaterial.item.u;$('#material-module').value=editingMaterial.module.m;
   materialForm.closest('.card').previousElementSibling.textContent='Редактировать учебный материал';
   materialForm.querySelector('button[type="submit"],button:not([type])').textContent='Сохранить материал';
   materialForm.querySelector('button[type="submit"],button:not([type])').insertAdjacentHTML('afterend','<button type="button" class="btn sec" data-a="cancel-material-edit">Отмена</button>');
  }
  const materials=data.learn.filter(module=>module.hack===activeHackId).flatMap(module=>module.i.map(item=>({module,item})));
  materialForm.closest('.card').insertAdjacentHTML('afterend',`<div class="card material-list">${materials.map(({module,item})=>`<div class="schedule-row"><div><b>${esc(item.t)}</b><small>${esc(CAT[module.hack]?.t||'Хакатон')} · ${esc(module.m)} · <a href="${esc(item.u)}" target="_blank" rel="noopener">${esc(item.u)}</a></small></div><div class="schedule-actions"><button class="btn sec" data-a="edit-material" data-id="${esc(item.id)}">Изменить</button><button class="btn danger" data-a="delete-material" data-id="${esc(item.id)}">Удалить</button></div></div>`).join('')||'<span class="mu">Учебные материалы пока не опубликованы.</span>'}</div>`);
 }
 materialForm.onsubmit=e=>{
  e.preventDefault();
  const hackId=$('#material-hack').value,title=$('#material-title').value.trim(),moduleName=$('#material-module').value.trim(),link=$('#material-link').value.trim();
  if(!canManageHack(hackId)){toast('Управлять можно только собственным хакатоном.');return}
  if(!title||!moduleName||!link){toast('Заполните название, ссылку и раздел материала.');return}
  let sourceModule=null,item=null;
  if(editingMaterialId){
   sourceModule=data.learn.find(module=>module.i.some(candidate=>candidate.id===editingMaterialId));
   item=sourceModule?.i.find(candidate=>candidate.id===editingMaterialId);
   if(!sourceModule||!item||!canManageHack(sourceModule.hack)){editingMaterialId=null;toast('Учебный материал больше недоступен для изменения.');V.admin();return}
   if(sourceModule.hack!==hackId){toast('Нельзя перенести учебный материал в другой хакатон при редактировании.');return}
  }
  const previousHackId=sourceModule?.hack;
  let destination=data.learn.find(module=>module.hack===hackId&&module.m===moduleName&&module!==sourceModule);
  if(!destination&&sourceModule?.hack===hackId){destination=sourceModule;destination.m=moduleName}
  if(!destination){destination={hack:hackId,m:moduleName,i:[]};data.learn.push(destination)}
  if(item){
   sourceModule.i=sourceModule.i.filter(candidate=>candidate.id!==item.id);
   Object.assign(item,{t:title,d:'Материал организатора',u:link});
   destination.i.push(item);
   if(sourceModule!==destination&&!sourceModule.i.length)data.learn=data.learn.filter(module=>module!==sourceModule);
  }else destination.i.push({id:`m-${Date.now()}`,ty:'📄',t:title,d:'Материал организатора',u:link,x:0});
  const recipients=[...new Set([...teamMembersForHack(hackId),...(previousHackId?teamMembersForHack(previousHackId):[])])];
  notifyUsers(item?'Организатор обновил учебный материал.':'Опубликован новый образовательный материал.',recipients,{type:'material',detail:`${item?'Обновлён':'Добавлен'} материал «${title}» в раздел «${moduleName}» хакатона «${CAT[hackId].t}».`,hackId,section:'learn'});
  editingMaterialId=null;save();toast(item?'Материал обновлён.':'Материал опубликован.');V.admin();
 };
};
const renderOrganizerAdmin=V.admin;
V.admin=()=>{renderOrganizerAdmin();if(view==='admin')setupOrganizerHackTools()};
V.review=()=>{
 if(me().role!=='expert'||!me().verified||!accessibleHackIds().length){view='home';home();return}
 const hacks=hackIds().filter(hackId=>canReviewHack(hackId)).map(hackId=>{
  const stage=reviewStageByHack[hackId]||'semifinal',criteria=stageCriteria(stage),finalists=new Set(data.finalistTeams[hackId]||[]),allTeams=data.teams.filter(team=>team.hack===hackId),teams=stage==='final'?allTeams.filter(team=>finalists.has(team.id)):allTeams;
  return `<section class="review-hack"><h2>${esc(CAT[hackId].t)}</h2><div class="form-actions"><button class="btn ${stage==='semifinal'?'':'sec'}" data-a="review-stage" data-hack="${esc(hackId)}" data-stage="semifinal">Полуфинал</button><button class="btn ${stage==='final'?'':'sec'}" data-a="review-stage" data-hack="${esc(hackId)}" data-stage="final" ${data.semifinalResultsPublished[hackId]?'':'disabled'}>Финал${data.semifinalResultsPublished[hackId]?'':' · ожидает отбора'}</button></div><p class="mu">Формат финальной защиты: ${CAT[hackId].finalDefenseFormat==='in-person'?'очно':'онлайн'} · ${esc(CAT[hackId].finalVenue||CAT[hackId].venue||'не указано')}</p>${leaderboardMarkup(hackId,stage)}<div class="grid">${teams.map(team=>{
   const submission=data.submissions.find(item=>item.teamId===team.id),existing=evaluationsFor(team.id,stage).find(evaluation=>evaluation.expertId===me().id);
   return `<div class="card review-team"><div class="hh"><b>Команда «${esc(team.name)}»</b><span class="bd ${stBadge[team.status][0]}">${team.status==='active'?'Основной этап':'Ожидает допуска'}</span></div><p class="mu">${team.memberIds.map(id=>esc(data.users.find(u=>u.id===id)?.name||'')).join(', ')}</p>
    <h3>Проект</h3>${projectMarkup(submission)}
    <details class="evaluation-editor"><summary>${existing?'Изменить мою закрытую оценку':`Оценить проект · ${EVALUATION_STAGES[stage].label}`}</summary>${submission?`<form class="evaluation-form" data-team="${esc(team.id)}" data-stage="${stage}">${criteria.map(criterion=>`<div class="fld"><label for="score-${esc(team.id)}-${criterion.id}">${esc(criterion.label)} · 0–5</label><input id="score-${esc(team.id)}-${criterion.id}" name="${criterion.id}" type="number" min="0" max="5" step="1" value="${existing?.scores?.[criterion.id]??''}" required></div>`).join('')}<div class="fld"><label for="evaluation-comment-${esc(team.id)}">Закрытый комментарий</label><textarea id="evaluation-comment-${esc(team.id)}" name="comment" rows="3" required>${esc(existing?.comment||'')}</textarea></div><p class="mu">Оценки и комментарий видны только экспертам и организатору.</p><div class="err" role="alert"></div><button class="btn">${existing?'Сохранить оценку':'Отправить оценку'}</button></form>`:'<p class="mu">Оценка доступна после отправки проекта.</p>'}</details>
    ${privateEvaluationDetails(team.id,team.hack,stage)}
    <h3>Обратная связь команде</h3>${feedbackFor(team).map(feedbackMarkup).join('')}<form class="feedback-form" data-team="${esc(team.id)}"><label for="feedback-${esc(team.id)}">Комментарий, который увидит команда</label><textarea id="feedback-${esc(team.id)}" rows="2" required></textarea><button class="btn" style="margin-top:8px">Отправить команде</button></form></div>`;
  }).join('')||'<div class="card mu">Команд пока нет.</div>'}</div></section>`;
 }).join('');
 $main().innerHTML=contextHeader('🧭','Команды и оценки проектов',null)+`<p class="mu">Закрытые оценки и комментарии доступны только подтверждённым экспертам и организатору. Отправленная отдельно обратная связь отображается команде.</p>${hacks||'<div class="card mu">Хакатонов пока нет.</div>'}`;
 document.querySelectorAll('.feedback-form').forEach(form=>form.onsubmit=e=>{e.preventDefault();const teamId=form.dataset.team,text=form.querySelector('textarea').value.trim();if(!text)return;data.feedback.push({id:'fb-'+Date.now(),teamId,userId:me().id,text,time:new Date().toLocaleString('ru-RU')});const team=data.teams.find(t=>t.id===teamId);if(team)notifyUsers(`Эксперт оставил обратную связь команде «${team.name}».`,team.memberIds,{type:'expert',detail:`${me().name} оставил комментарий: «${text}»`,hackId:team.hack,teamId:team.id,section:'team'});save();V.review()});
 document.querySelectorAll('.evaluation-form').forEach(form=>form.onsubmit=e=>{
  e.preventDefault();
  if(me().role!=='expert'||!me().verified)return;
  const team=data.teams.find(item=>item.id===form.dataset.team),stage=form.dataset.stage,criteria=stageCriteria(stage),submission=data.submissions.find(item=>item.teamId===team?.id),error=form.querySelector('.err'),comment=form.elements.namedItem('comment').value.trim();
  if(!team||!submission||!canEvaluateHack(team.hack)){toast('Оценивать можно только проекты хакатонов, к которым вы допущены.');return}
  if(!EVALUATION_STAGES[stage]||stage==='final'&&!(data.finalistTeams[team.hack]||[]).includes(team.id)){toast('Эта команда не может получить оценку на выбранном этапе.');return}
  const scores=Object.fromEntries(criteria.map(criterion=>[criterion.id,Number(form.elements.namedItem(criterion.id).value)]));
  if(criteria.some(criterion=>!Number.isInteger(scores[criterion.id])||scores[criterion.id]<0||scores[criterion.id]>5)){error.textContent='Укажите балл от 0 до 5 по каждому критерию.';return}
  if(!comment){error.textContent='Добавьте комментарий к оценке.';return}
  const evaluation=data.evaluations.find(item=>item.teamId===team.id&&item.expertId===me().id&&item.stage===stage),update={hackId:team.hack,teamId:team.id,expertId:me().id,stage,scores,comment,updatedAt:new Date().toLocaleString('ru-RU')};
  if(evaluation)Object.assign(evaluation,update);else data.evaluations.push({id:'evaluation-'+Date.now(),...update});
  save();toast('Закрытая оценка сохранена.');V.review();
 });
};
function render(){
 if(!me()){auth();return}
 if(view==='review'&&(me().role!=='expert'||!me().verified||!accessibleHackIds().length))view='home';
 document.querySelector('.app').classList.remove('auth-layout');$('#side').hidden=false;$('.top').hidden=false;
 nav();
 if(view==='home')home();else if(view==='hack')hack();else (V[view]||home)();
}
const A={
 'lookup-expert'(){
  const hackId=$('#expert-invite-hack')?.value,email=$('#expert-invite-email')?.value.trim().toLowerCase(),result=$('#expert-lookup-result');
  if(!result||!canManageHack(hackId))return;
  const expert=data.users.find(user=>user.role==='expert'&&user.verified&&user.email.toLowerCase()===email);
  if(!email){result.innerHTML='<p class="err">Введите почту эксперта.</p>';return}
  if(!expert){result.innerHTML='<p class="mu">Аккаунт эксперта с такой почтой не найден.</p>';return}
  const existing=[...data.hackExpertInvites].reverse().find(invite=>invite.hackId===hackId&&invite.expertId===expert.id);
  const active=existing&&['pending','accepted'].includes(existing.status);
  result.innerHTML=`<div class="hack-module"><b>${esc(expert.name)}</b><span>${esc(expert.email)} · ${esc(expert.organization||'Организация не указана')}</span><span>${esc(expert.about||'Информация о себе не заполнена.')}</span>${active?`<span class="bd ${existing.status==='accepted'?'b-ok':'b-nu'}">${existing.status==='accepted'?'Приглашение принято':'Ожидает ответа'}</span>`:`<button class="btn" data-a="invite-expert" data-hack="${esc(hackId)}" data-expert="${esc(expert.id)}">${existing?'Пригласить повторно':'Пригласить эксперта'}</button>`}</div>`;
 },
 'invite-expert'({hack,expert}){
  if(!canManageHack(hack))return;
  const user=data.users.find(candidate=>candidate.id===expert&&candidate.role==='expert'&&candidate.verified);
  if(!user){toast('Профиль подтверждённого эксперта не найден.');return}
  const previous=[...data.hackExpertInvites].reverse().find(invite=>invite.hackId===hack&&invite.expertId===user.id);
  if(previous&&['pending','accepted'].includes(previous.status)){toast('Эксперт уже приглашён на этот хакатон.');return}
  const invitation={id:`hack-expert-${Date.now()}-${user.id}`,hackId:hack,organizerId:me().id,expertId:user.id,status:'pending'};
  data.hackExpertInvites.push(invitation);
  notifyUsers(`Вас пригласили экспертом на хакатон «${CAT[hack].t}».`,[user.id],{type:'hackInvite',detail:`Организатор ${me().name} приглашает вас присоединиться к экспертам хакатона. Профиль организатор просмотрел перед приглашением. Примите или отклоните приглашение в этом уведомлении.`,hackId:hack,hackExpertInviteId:invitation.id});
  save();toast('Приглашение отправлено эксперту.');refreshExpertInviteList();
 },
 'toggle-expert-invite'({hack,expert}){
  const checkbox=[...document.querySelectorAll('[data-expert-invite]')].find(item=>item.dataset.hack===hack&&item.dataset.expert===expert);
  if(!checkbox||!canManageHack(hack))return;
  if(checkbox.checked){A['invite-expert']({hack,expert});return}
  const invitation=[...data.hackExpertInvites].reverse().find(item=>item.hackId===hack&&item.expertId===expert&&['pending','accepted'].includes(item.status));
  if(invitation)A['revoke-hack-expert']({invite:invitation.id});
 },
 'revoke-hack-expert'({invite}){
  const item=data.hackExpertInvites.find(record=>record.id===invite);
  if(!item||!canManageHack(item.hackId)||!['pending','accepted'].includes(item.status))return;
  item.status='revoked';
  notifyUsers(`Приглашение на хакатон «${CAT[item.hackId]?.t||'Хакатон'}» отозвано.`,[item.expertId],{type:'hackInvite',detail:`Организатор отозвал приглашение эксперта на хакатон «${CAT[item.hackId]?.t||'Хакатон'}». Доступ к оценке закрыт.`,hackId:item.hackId,hackExpertInviteId:item.id});
  save();toast('Приглашение отозвано.');refreshExpertInviteList();
 },
 'auth-toggle'(){authMode=authMode==='login'?'register':'login';auth()},
 'toggle-leaderboard-sort'({hack,stage}){if(!CAT[hack]||!EVALUATION_STAGES[stage])return;const key=`${hack}:${stage}`;leaderboardSortDirection[key]=(leaderboardSortDirection[key]||'desc')==='desc'?'asc':'desc';render()},
 'review-stage'({hack,stage}){if(!canReviewHack(hack)||!EVALUATION_STAGES[stage]||stage==='final'&&!data.semifinalResultsPublished[hack])return;reviewStageByHack[hack]=stage;V.review()},
 'publish-semifinal-results'({hack}){
  if(!canManageHack(hack)||data.semifinalResultsPublished[hack])return;
  const checkboxes=[...document.querySelectorAll('[data-finalist-team]')].filter(input=>input.dataset.hack===hack);
  if(!checkboxes.length&&data.teams.some(team=>team.hack===hack)){toast('Не найден список команд для выбора финалистов.');return}
  const selected=new Set(checkboxes.filter(input=>input.checked).map(input=>input.dataset.team));
  if(!selected.size){toast('Выберите хотя бы одну команду в финал.');return}
  if([...selected].some(id=>!data.teams.some(team=>team.id===id&&team.hack===hack))){toast('Выбраны команды из другого хакатона.');return}
  data.finalistTeams[hack]=[...selected];data.semifinalResultsPublished[hack]=true;
  data.teams.filter(team=>team.hack===hack).forEach(team=>{
   const passed=selected.has(team.id),status=passed?'прошла':'не прошла';
   notifyUsers(`Команда «${team.name}» ${status} в финал.`,team.memberIds,{type:'finalist',detail:`Полуфинал хакатона «${CAT[hack].t}» завершён. Команда «${team.name}» ${status} в финал.${passed?' Вы можете открыть хакатон и ознакомиться с информацией о финальной защите.':''}`,hackId:hack,teamId:team.id,section:'overview'});
  });
  save();toast('Результаты полуфинала отправлены всем командам.');V.admin();
 },
 'edit-material'({id}){
  const module=data.learn.find(entry=>entry.i.some(item=>item.id===id));
  if(!module||!canManageHack(module.hack)){toast('Учебный материал недоступен для изменения.');return}
  editingMaterialId=id;V.admin();
 },
 'cancel-material-edit'(){editingMaterialId=null;V.admin()},
 'delete-material'({id}){
  const module=data.learn.find(entry=>entry.i.some(item=>item.id===id)),item=module?.i.find(entry=>entry.id===id);
  if(!module||!item||!canManageHack(module.hack)){toast('Учебный материал недоступен для удаления.');return}
  if(!confirm(`Удалить материал «${item.t}»?`))return;
  module.i=module.i.filter(entry=>entry.id!==id);
  if(!module.i.length)data.learn=data.learn.filter(entry=>entry!==module);
  if(editingMaterialId===id)editingMaterialId=null;
  notifyUsers(`Организатор удалил учебный материал «${item.t}».`,teamMembersForHack(module.hack),{type:'material',detail:`Материал «${item.t}» удалён из образовательного трека хакатона «${CAT[module.hack].t}».`,hackId:module.hack,section:'learn'});
  save();toast('Материал удалён.');V.admin();
 },
 'set-palette'({palette}){if(palette!=='auto'&&!PALETTES.some(item=>item.id===palette))return;data.palette=palette;if(palette==='auto')data.paletteMode='auto';applyPalette();save();V.profile()},
 'set-palette-mode'({mode}){if(!['auto','light','dark'].includes(mode))return;data.paletteMode=mode;applyPalette();save();V.profile()},
 async demo({id}){if(!data.users.some(user=>user.id===id))return;if(window.hackflowSupabase){const {error}=await window.hackflowSupabase.auth.signOut();if(error){console.error('Не удалось завершить сессию Supabase перед демо-входом:',error);toast('Не удалось переключиться на демо-аккаунт. Попробуйте снова.');return}}data.currentUserId=id;save();afterLogin()},
 async logout(){if(window.hackflowSupabase){const {error}=await window.hackflowSupabase.auth.signOut();if(error){console.error('Не удалось завершить сессию Supabase:',error);toast('Не удалось выйти из аккаунта. Попробуйте снова.');return}}data.currentUserId=null;save();authMode='login';view='home';render()},
 invite(){const team=currentTeam(),email=$('#invite-email').value.trim().toLowerCase(),error=$('#invite-error');if(!team){error.textContent='Командное пространство недоступно.';return}if(!registrationIsOpen(team.hack)){error.textContent='Срок регистрации в этом хакатоне завершён. Приглашать участников больше нельзя.';return}const user=data.users.find(u=>u.email.toLowerCase()===email);if(!email){error.textContent='Укажите почту участника.';return}if(!user){error.textContent='Участник должен сначала войти в HackFlow на этом устройстве.';return}if(user.role!=='participant'||!user.verified){error.textContent='Приглашать в команду можно только подтверждённые аккаунты участников.';return}if(team.memberIds.includes(user.id)){error.textContent='Этот пользователь уже в команде.';return}if(data.invites.some(i=>i.teamId===team.id&&i.email===email&&!i.accepted)){error.textContent='Приглашение уже отправлено.';return}data.invites.push({email,teamId:team.id,teamName:team.name,hack:team.hack,accepted:false});notifyUsers(`Вас пригласили в команду «${team.name}».`,[user.id],{type:'team',detail:`Команда «${team.name}» на хакатоне «${CAT[team.hack]?.t||'Хакатон'}» отправила вам приглашение.\n${teamComposition(team)}\nОткройте личный кабинет, чтобы принять его.`,hackId:team.hack,teamId:team.id,section:'team'});save();toast('Приглашение отправлено.');V.team()},
 transfer(){const team=currentTeam(),next=$('#new-captain').value;if(!team||!team.memberIds.includes(next))return;team.captainId=next;notifyUsers(`Капитаном команды «${team.name}» назначен ${data.users.find(u=>u.id===next)?.name}.`,team.memberIds,{type:'team',detail:`Капитаном команды «${team.name}» назначен ${data.users.find(u=>u.id===next)?.name}.`,hackId:team.hack,teamId:team.id,section:'team'});save();toast('Капитан команды изменён.');nav();V.team()},
 'accept-invite'({team}){const invite=data.invites.find(i=>i.teamId===team&&i.email===me().email.toLowerCase()&&!i.accepted),target=data.teams.find(t=>t.id===team);if(!invite||!target)return;if(me().role!=='participant'){toast('В команду могут вступить только участники.');return}if(!registrationIsOpen(target.hack)){toast('Срок регистрации в этом хакатоне завершён. Приглашение нельзя принять.');V.profile();return}if(data.teams.some(t=>t.hack===target.hack&&t.memberIds.includes(me().id))){toast('Вы уже состоите в команде этого хакатона.');return}target.memberIds.push(me().id);invite.accepted=true;if(target.status==='active')data.selectedTeamByUser[me().id]=target.id;notifyUsers(`${me().name} присоединился(ась) к команде «${target.name}».`,target.memberIds.filter(id=>id!==me().id),{type:'team',detail:`${me().name} присоединился(ась) к команде «${target.name}» на хакатоне «${CAT[target.hack]?.t||'Хакатон'}».`,hackId:target.hack,teamId:target.id,section:'team'});save();toast(`Добро пожаловать в команду «${target.name}»!`);V.profile()},
 'approve-team'({team}){const target=data.teams.find(t=>t.id===team);if(!target||!canManageHack(target.hack))return;target.status='active';notifyUsers(`Команда «${target.name}» допущена к хакатону.`,target.memberIds,{type:'team',detail:`Организатор допустил команду «${target.name}» к хакатону «${CAT[target.hack]?.t||'Хакатон'}». Командное пространство теперь доступно.`,hackId:target.hack,teamId:target.id,section:'overview'});save();toast('Команда допущена.');V.admin()},
 'assign-mentor'({team}){const target=data.teams.find(item=>item.id===team),select=[...document.querySelectorAll('[data-mentor-team]')].find(item=>item.dataset.mentorTeam===team);if(!target||!canManageHack(target.hack)||!select)return;const mentorId=select.value,mentor=data.users.find(user=>user.id===mentorId&&user.role==='mentor');if(mentorId&&!mentor){toast('Выберите существующий аккаунт ментора.');return}if((target.mentorId||'')===mentorId)return;const previousMentorId=target.mentorId;target.mentorId=mentorId||null;const recipients=[mentor?.id,previousMentorId].filter(Boolean);notifyUsers(mentor?`Вас назначили ментором команды «${target.name}».`:`С ментора команды «${target.name}» снято назначение.`,recipients,{type:'team',detail:mentor?`Организатор прикрепил вас к команде «${target.name}» хакатона «${CAT[target.hack].t}». Вам доступны материалы команды и комментарии.`:`Организатор снял ваше назначение с команды «${target.name}».`,hackId:target.hack,teamId:target.id});save();toast(mentor?'Ментор назначен.':'Назначение ментора снято.');V.admin()},
 'edit-event'({index}){
  const position=Number(index),event=data.events[position],form=$('#event-form');
  if(!Number.isInteger(position)||!event||!form||!canManageHack(event.hack)){toast('Не удалось найти доступное для изменения событие.');return}
  $('#event-hack').value=event.hack;$('#event-title').value=event.title;$('#event-type').value=event.type||'Мероприятие';$('#event-date').value=event.date;$('#event-time').value=event.time;$('#event-speaker').value=event.speaker||'';$('#event-link').value=event.link||'';$('#event-description').value=event.description||'';$('#event-submission-deadline').checked=Boolean(event.submissionDeadline);
  form.dataset.editIndex=String(position);$('#event-submit').textContent='Сохранить изменения';form.querySelector('[data-a="cancel-event-edit"]').hidden=false;form.scrollIntoView({behavior:'smooth',block:'center'});
 },
 'cancel-event-edit'(){const form=$('#event-form');if(!form)return;form.reset();delete form.dataset.editIndex;$('#event-submit').textContent='Добавить в расписание';form.querySelector('[data-a="cancel-event-edit"]').hidden=true},
 'delete-event'({index}){
  const position=Number(index),event=data.events[position];
  if(!Number.isInteger(position)||!event||!canManageHack(event.hack)){toast('Не удалось найти доступный этап расписания.');return}
  const message=event.submissionDeadline?`Удалить этап «${event.title}»? Дедлайн сдачи проекта будет снят.`:`Удалить этап «${event.title}» из расписания?`;
  if(!confirm(message))return;
  data.events.splice(position,1);notifyUsers(`Организатор удалил этап «${event.title}» из расписания.`,teamMembersForHack(event.hack),{type:'schedule',detail:`Этап «${event.title}» (${event.date} в ${event.time}) удалён из расписания хакатона «${CAT[event.hack]?.t||'Хакатон'}».`,hackId:event.hack,section:'cal'});save();toast('Этап удалён.');V.admin();
 },
 'read-all'(){notificationsForUser(data.currentUserId).forEach(n=>n.read=true);save();nav();V.notes()},
 'open-notification'({id}){const notification=notificationsForUser(data.currentUserId).find(item=>item.id===id);if(!notification)return;notification.read=true;selectedNotificationId=notification.id;save();nav();V.notes()},
 'open-message-group'({hack,team}){
  const hackId=hack||data.teams.find(item=>item.id===team)?.hack;
  const messages=notificationsForUser(data.currentUserId).filter(item=>notificationType(item)==='message'&&item.teamId===team&&(item.hackId||hackId)===hackId);
  if(!messages.length)return;
  messages.forEach(item=>item.read=true);save();nav();A['open-notification-target']({hack:hackId,team,section:'chat'});
 },
 'back-notifications'(){selectedNotificationId=null;V.notes()},
 'respond-hack-invite'({invite,response}){const item=data.hackExpertInvites.find(record=>record.id===invite&&record.expertId===me().id&&record.status==='pending');if(me().role!=='expert'||!item||!['accepted','declined'].includes(response))return;item.status=response;const notice=data.notifications.find(notification=>notification.hackExpertInviteId===item.id&&notification.recipientId===me().id);if(notice)notice.read=true;notifyUsers(`${me().name} ${response==='accepted'?'принял(а)':'отклонил(а)'} приглашение эксперта на хакатон «${CAT[item.hackId]?.t||'Хакатон'}».`,[item.organizerId],{type:'hackInvite',detail:`${me().name} ${response==='accepted'?'принял(а)':'отклонил(а)'} приглашение эксперта.`,hackId:item.hackId});save();nav();V.notes()},
 'open-expert-review'(){if(me().role!=='expert'||!accessibleHackIds().length)return;selectedNotificationId=null;go('review')},
 'open-notification-target'({hack,team,section,destination}){if(destination==='profile'){selectedNotificationId=null;go('profile');return}if(destination==='admin'){selectedNotificationId=null;go('admin');return}const hackId=hack;if(!canAccessHack(hackId)){toast('Доступ к хакатону не предоставлен.');return}const memberTeam=data.teams.find(item=>item.id===team&&item.hack===hackId&&item.memberIds.includes(data.currentUserId)&&item.status==='active')||data.teams.find(item=>item.hack===hackId&&item.memberIds.includes(data.currentUserId)&&item.status==='active');if(me().role==='mentor'){open(hackId);return}if(me().role==='expert'){go('review');return}if(!memberTeam&&me().role==='participant'&&!CAT[hackId].public){toast('Вы не состоите в команде этого закрытого хакатона.');return}cur=hackId;view='hack';hackSection=HACK_SECTIONS.some(([key])=>key===section)?section:'overview';selectedNotificationId=null;hackMenuOpen=false;closeMenu();render();window.scrollTo(0,0)},
 'move-task'({id,d}){const team=currentTeam(),task=teamTasks(team).find(t=>String(t.id)===id);if(!isCaptain(team)||!task)return;task.s=Math.max(0,Math.min(3,task.s+Number(d)));save();V.tasks()},
 'edit-task'({id}){const team=currentTeam();if(!isCaptain(team))return;const task=teamTasks(team).find(item=>String(item.id)===id);if(!task)return;editingTaskId=task.id;V.tasks();$('#task-title').scrollIntoView({behavior:'smooth',block:'center'});$('#task-title').focus()},
 'cancel-task-edit'(){editingTaskId=null;V.tasks()},
 'save-task'(){
  const team=currentTeam(),title=$('#task-title').value.trim(),description=$('#task-description').value.trim(),error=$('#task-error');
  if(!isCaptain(team))return;
  if(!title||!description){error.textContent='Укажите название и описание задачи.';return}
  const task=editingTaskId?teamTasks(team).find(item=>String(item.id)===String(editingTaskId)):null;
  if(editingTaskId&&!task){toast('Не удалось найти задачу для изменения.');editingTaskId=null;V.tasks();return}
  const details={t:title,description,w:$('#task-owner').value,due:$('#task-date').value||task?.due||'без срока'};
  if(task){Object.assign(task,details);notifyUsers(`Капитан обновил задачу «${title}» в команде «${team.name}».`,team.memberIds.filter(id=>id!==data.currentUserId),{type:'task',detail:`Обновлена задача «${title}». Ответственный: ${data.users.find(user=>user.id===details.w)?.name||'не назначен'}; срок: ${details.due}. ${details.description}`,hackId:team.hack,teamId:team.id,section:'tasks'})}
  else{teamTasks(team).push({id:'task-'+Date.now(),...details,s:0});notifyUsers(`В команде «${team.name}» добавлена задача «${title}».`,team.memberIds.filter(id=>id!==data.currentUserId),{type:'task',detail:`Добавлена задача «${title}». Ответственный: ${data.users.find(user=>user.id===details.w)?.name||'не назначен'}; срок: ${details.due}. ${details.description}`,hackId:team.hack,teamId:team.id,section:'tasks'})}
  editingTaskId=null;save();V.tasks();
 },
 'delete-task'({id}){
  const team=currentTeam();if(!isCaptain(team))return;
  const tasks=teamTasks(team),index=tasks.findIndex(task=>String(task.id)===id),task=tasks[index];
  if(!task){toast('Не удалось найти задачу.');return}
  if(!confirm(`Удалить задачу «${task.t}»?`))return;
  tasks.splice(index,1);if(String(editingTaskId)===id)editingTaskId=null;
  notifyUsers(`Задача «${task.t}» удалена из команды «${team.name}».`,team.memberIds.filter(userId=>userId!==data.currentUserId),{type:'task',detail:`Задача «${task.t}» удалена из списка задач команды «${team.name}».`,hackId:team.hack,teamId:team.id,section:'tasks'});
  save();toast('Задача удалена.');V.tasks();
 },
 'toggle-learn'({id}){const item=data.learn.flatMap(x=>x.i).find(x=>x.id===id);if(item){data.learningProgress[data.currentUserId]=data.learningProgress[data.currentUserId]||{};data.learningProgress[data.currentUserId][item.id]=!learningComplete(data.currentUserId,item);save();V.learn()}},
 'send-message'(){const input=$('#message'),text=input.value.trim(),team=currentTeam();if(!text)return;teamChat(team).push({userId:me().id,text,time:new Date().toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'})});notifyUsers(`Новое сообщение от ${me().name} в чате команды «${team.name}».`,team.memberIds.filter(id=>id!==data.currentUserId),{type:'message',senderId:me().id,detail:`${me().name} написал(а): «${text}»`,hackId:team.hack,teamId:team.id,section:'chat'});save();nav();V.chat()},
 'send-lobby-message'(){if(view!=='hack'||!CAT[cur]||hackSection!=='lobby')return;const input=$('#lobby-message'),text=input?.value.trim();if(!text)return;if(text.length>1000){toast('Сообщение не должно быть длиннее 1000 символов.');return}hackathonChat(cur).push({userId:me().id,text,time:new Date().toLocaleString('ru-RU',{dateStyle:'short',timeStyle:'short'})});save();V.lobby()}
};
document.addEventListener('click',e=>{const button=e.target.closest('[data-a]');if(button&&A[button.dataset.a])A[button.dataset.a](button.dataset)});
document.addEventListener('click',e=>{
 const tab=e.target.closest('[data-organizer-tab]');
 if(!tab||view!=='admin'||me()?.role!=='organizer')return;
 organizerTab=tab.dataset.organizerTab;editingMaterialId=null;V.admin();
});
document.addEventListener('change',e=>{
 const expertCheckbox=e.target.closest('[data-expert-invite]');
 if(expertCheckbox){A['toggle-expert-invite'](expertCheckbox.dataset);return}
 const select=e.target.closest('[data-leaderboard-sort]');
 if(!select)return;
 const hack=select.dataset.leaderboardSort,stage=select.dataset.stage,value=select.value,criteria=stageCriteria(stage);
 if(!CAT[hack]||!EVALUATION_STAGES[stage]||value!=='total'&&!criteria.some(criterion=>criterion.id===value))return;
 leaderboardSortBy[`${hack}:${stage}`]=value;render();
});
document.addEventListener('click',e=>{const filter=e.target.closest('[data-notification-filter]');if(!filter)return;const type=filter.dataset.notificationFilter;if(type==='all'||NOTIFICATION_TYPES[type]){notificationsFilter=type;selectedNotificationId=null;V.notes()}});
document.addEventListener('click',e=>{const section=e.target.closest('[data-public-hack-section]');if(!section)return;const key=section.dataset.publicHackSection;if(key==='info'||key==='lobby'){hackSection=key;render()}});
document.addEventListener('click',e=>{
 if(e.target.closest('[data-workspace-menu-toggle]')){hackMenuOpen=!hackMenuOpen;render();return}
 const section=e.target.closest('[data-workspace]');
 if(section){hackSection=section.dataset.workspace;hackMenuOpen=false;render()}
});
document.addEventListener('click',e=>{if(e.target.closest('#burger')){$('#side').classList.add('open');$('#scrim').classList.add('open')}});
document.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.id==='message')A['send-message']();if(e.key==='Enter'&&e.target.id==='lobby-message')A['send-lobby-message']()});
$('#scrim').onclick=closeMenu;
applyPalette();
checkDeadlineReminders();
setInterval(checkDeadlineReminders,60*1000);
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',()=>{if(data.paletteMode==='auto')applyPalette()});
if(window.hackflowSupabase){
 window.hackflowSupabase.auth.onAuthStateChange((event,session)=>{
  if(event==='SIGNED_OUT'&&data.currentUserId&&!seed.users.some(user=>user.id===data.currentUserId)){
   data.currentUserId=null;save();authMode='login';view='home';render();
  }else if(event==='SIGNED_IN'&&session?.user&&data.currentUserId!==session.user.id){
   const user=syncSupabaseUser(session.user);data.currentUserId=user.id;save();render();
  }
 });
}
async function initializeAuth(){
 if(window.hackflowSupabase){
  try{
   const {data:result,error}=await window.hackflowSupabase.auth.getSession();
   if(error)throw error;
   if(result.session?.user){const user=syncSupabaseUser(result.session.user);data.currentUserId=user.id;save()}
  }catch(error){console.error('Не удалось восстановить сессию Supabase:',error)}
 }
 render();
}
initializeAuth();
if('serviceWorker' in navigator&&window.isSecureContext){
 navigator.serviceWorker.register('./service-worker.js').catch(error=>console.error('Не удалось зарегистрировать офлайн-режим HackFlow:',error));
}
