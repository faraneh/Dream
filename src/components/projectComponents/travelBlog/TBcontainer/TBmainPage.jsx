import React, { Component } from 'react';
import './TBmainPage.css';
import TBNavBar from '../TBcomponents/TBnavBar/TBnavBar';
import TBLeftColumn from '../TBcomponents/TBleftColumn/TBleftColumn';
import TBRightColumn from '../TBcomponents/TBrightColumn/TBrightColumn/TBrightColumn';
import TBFooter from '../TBcomponents/TBfooter/TBfooter';
import TBPostMoreInfo from '../TBcomponents/TButilities/TBpostMoreInfo/TBpostMoreInfo';


class TBMainPage extends Component {
    state = {
      TBposts: [
          { popularity: "popular", 
            date: 'March 3, 2021', 
            title: 'FRENCH CREPE FROM BORDEAUX, FRANCE', 
            image: "URL('https://images.unsplash.com/photo-1584299574144-b5f8ac209707?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZyYW5jZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')", 
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo nam veniam quibusdam magnam, quia sint nesciunt, a quod sunt ipsam necessitatibus debitis voluptatum omnis perspiciatis laborum, explicabo odio corporis ea accusantium voluptate aliquid tenetur aperiam similique. Illo non illum sunt ipsum laudantium quisquam exercitationem minus voluptate explicabo sapiente eius, corrupti temporibus et quod. Earum quidem laudantium quia fuga accusantium ipsum! Maiores ea rem ab, unde voluptatum pariatur ducimus culpa possimus amet harum esse, reiciendis dolores temporibus iste! Sequi, ullam fugit, soluta a aliquid nostrum beatae quas illo enim vel voluptatum, magni quisquam doloremque. Ipsa, error impedit in cupiditate minus rem. Incidunt praesentium maiores repudiandae esse ipsa a, sint ea in delectus. Mollitia nostrum veritatis quia quis esse! Corporis provident impedit illo quis aut dicta ex asperiores officia numquam mollitia quasi, tempore aspernatur odio delectus libero atque sequi sapiente voluptas sed, laudantium ab sint non eum omnis. Labore expedita animi aut eius! Quos cupiditate iste beatae. Rem aliquam delectus provident temporibus? Amet, facere? Exercitationem rem voluptatem sequi possimus numquam animi sit illo ipsam tenetur adipisci aut nesciunt distinctio nam harum, fugit perferendis consequuntur doloribus? Magni sapiente quod quaerat in sint inventore obcaecati, excepturi libero quos voluptate, velit temporibus nostrum expedita eveniet ab suscipit repellat! Commodi corporis dolorum debitis quasi assumenda officia ducimus eius perspiciatis similique omnis, repellendus delectus, soluta atque vel quibusdam inventore incidunt maiores iure accusamus repellat iusto in fugit et. Magni et at porro assumenda debitis rem voluptatum, asperiores tempore est id sit nam quas fugit? Odio natus suscipit quod omnis accusantium, nemo eos cupiditate, provident eius aut possimus error delectus! Cumque, delectus. Consequuntur dolorem minima dolores ab eligendi, dicta eveniet quaerat similique porro, aut, totam voluptatum facere officiis commodi neque ad. Laboriosam nostrum voluptate nam! Fuga hic rerum qui saepe modi voluptas inventore reprehenderit accusantium necessitatibus consectetur, culpa, eum et pariatur voluptatem labore porro nostrum ab, nesciunt delectus. Molestias omnis odio possimus repudiandae illum sapiente animi fugit autem tempora voluptas odit voluptatem aut labore porro aperiam nihil rem, impedit veritatis sed numquam perferendis. Aspernatur ipsa facere veritatis, corrupti asperiores ab eligendi libero ad odio possimus exercitationem sequi obcaecati quia! Minima magnam repudiandae obcaecati perspiciatis explicabo adipisci incidunt dignissimos, repellendus enim tempore error quisquam veniam sequi laborum necessitatibus provident consequatur reprehenderit eius et. Ea praesentium ab culpa laboriosam ipsam odit, iusto atque dolorem ad, eos at amet nulla. Sunt voluptates beatae iure incidunt ab rem eligendi eius maxime asperiores?",
            comments: ['Maria : Good one !', 'Sara : I were there once, loved it'],
            imageList: ['https://images.unsplash.com/photo-1503944168849-8bf86875bbd8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHx0cmF2ZWx8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60','https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60','https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60','https://images.unsplash.com/photo-1513581166391-887a96ddeafd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60','https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60','https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60','https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60','https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60','https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60','https://images.unsplash.com/photo-1460627390041-532a28402358?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60','https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60','https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60','https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60','https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60','https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60','https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'],
          },
          { popularity: "popular",
            date: 'March 3, 2021', title: '10 THINGS TO KNOW BEFORE YOU GO TO ROMANIA',
            image: "URL('https://images.unsplash.com/photo-1564332680205-1b74e65f9608?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1Y2hhcmVzdHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Sine ea igitur iucunde negat posse se vivere? At hoc in eo M. Nihil illinc huc pervenit. Qui autem esse poteris, nisi te amor ipse ceperit? Sumenda potius quam expetenda. Age, inquies,',
            comments: ['Paul : so nice'],
            imageList: ['https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1460627390041-532a28402358?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
              ],
          },
          { popularity: "normal",
            date: 'March 3, 2021',
            title: '10 THINGS TO KNOW BEFORE YOU GO TO ROMANIA',
            image: "URL('https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tenetur debitis atque sint aliquid ipsum qui tempore nisi non iste nostrum aspernatur, impedit nulla eligendi mollitia numquam dicta labore a corporis enim esse? Est voluptatum rerum soluta iusto quam fugit! Natus eum deleniti, ullam maxime eos magni ea harum optio assumenda ut dolores, eius voluptatibus possimus corporis nemo? Quisquam explicabo amet laborum quis quas repellendus earum aliquam, sequi rerum consequuntur quibusdam, sunt nesciunt? Totam consequatur at aut sed dolore recusandae incidunt expedita adipisci, dicta illo deleniti exercitationem quaerat quidem enim beatae fugit magnam similique eius. Consequatur pariatur quod autem eius.",
            comments: ['Jana : nice place to go'],
            imageList: ['https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1460627390041-532a28402358?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
              ],
          },
          { popularity: "normal",
            date: 'March 3, 2021', title: '10 THINGS TO KNOW BEFORE YOU GO TO ROMANIA', 
            image: "URL('https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')", 
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Sine ea igitur iucunde negat posse se vivere? At hoc in eo M. Nihil illinc huc pervenit. Qui autem esse poteris, nisi te amor ipse ceperit? Sumenda potius quam expetenda. Age, inquies,',
            comments: ['Mike : I’m not going to lie: I think I have a pretty good travel blog.'],
            imageList: ['https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
              ],
          },
          { popularity: "popular", 
            date: 'March 3, 2021', 
            title: '10 THINGS TO KNOW BEFORE YOU GO TO ROMANIA', 
            image: "URL('https://images.unsplash.com/photo-1522509585149-c9cd39d1ff08?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')", 
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Sine ea igitur iucunde negat posse se vivere? At hoc in eo M. Nihil illinc huc pervenit. Qui autem esse poteris, nisi te amor ipse ceperit? Sumenda potius quam expetenda. Age, inquies,',
            comments: ['Yonas : They also offer an incredible lineup of community events from documentary film nights to writing workshops to beach cleanup brunches. Check their social media for details when you’re on the island!'],
            imageList: ['https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
              ],
          },
          { popularity: "normal", 
            date: 'March 3, 2021', 
            title: '10 THINGS TO KNOW BEFORE YOU GO TO ROMANIA', 
            image: "URL('https://images.unsplash.com/photo-1534777367038-9404f45b869a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')", 
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident modi neque voluptate molestias eos expedita, repellat eum asperiores ex tenetur possimus aspernatur, officiis officia adipisci dolorem laboriosam nam ipsa sit laborum quia omnis corporis. Distinctio mollitia dolor, aut ipsa facilis necessitatibus. Porro, soluta. Dolores quis odit illo dolorem harum quae iure necessitatibus tempore suscipit quam. Ipsum exercitationem sequi quisquam, dolorem veritatis itaque harum eaque dignissimos quia repellat deserunt illum modi tempore iusto esse nesciunt quam architecto obcaecati quis laborum veniam, nisi quo. Dolores, assumenda! Ad illo dignissimos iste odio, accusantium quisquam laborum vel esse beatae at architecto suscipit nam corrupti tempora vitae ut aut maxime cum. Aperiam, quibusdam harum natus nostrum reprehenderit voluptates vel laborum beatae quasi obcaecati illum odit aut itaque, ea eligendi amet nemo voluptatum a sit earum molestias. Quam dicta perspiciatis officia vero perferendis aperiam optio corrupti doloribus nobis iure odio deserunt sed vel, quibusdam natus dolorem!",
            comments: ['Nikkie : Sabich, pitas, kebabs, Israeli salads, Moroccan stews, they have it all!', 'Olaf : nice'],
            imageList: ['https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1460627390041-532a28402358?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
              ],
          },
          { popularity: "normal", 
            date: 'March 3, 2021', 
            title: '10 THINGS TO KNOW BEFORE YOU GO TO ROMANIA', 
            image: "URL('https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')", 
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Sine ea igitur iucunde negat posse se vivere? At hoc in eo M. Nihil illinc huc pervenit. Qui autem esse poteris, nisi te amor ipse ceperit? Sumenda potius quam expetenda. Age, inquies,',
            comments: ['Maya : It’s the kind of place you hope to stumble across'],
            imageList: ['https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
              ],
          },
          { popularity: "normal", 
            date: 'March 3, 2021', 
            title: '10 THINGS TO KNOW BEFORE YOU GO TO ROMANIA', 
            image: "URL('https://images.unsplash.com/photo-1499678329028-101435549a4e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')", 
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Sine ea igitur iucunde negat posse se vivere? At hoc in eo M. Nihil illinc huc pervenit. Qui autem esse poteris, nisi te amor ipse ceperit? Sumenda potius quam expetenda. Age, inquies,',
            comments: ['Misha : the food is very expensive for the area'],
            imageList: ['https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1460627390041-532a28402358?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
              ],
          },
          { popularity: "popular", 
            date: 'March 3, 2021', title: '10 THINGS TO KNOW BEFORE YOU GO TO ROMANIA', 
            image: "URL('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')", 
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Sine ea igitur iucunde negat posse se vivere? At hoc in eo M. Nihil illinc huc pervenit. Qui autem esse poteris, nisi te amor ipse ceperit? Sumenda potius quam expetenda. Age, inquies,',
            comments: ['Paul : It’s the kind of place you hope to stumble across', 'Rai : It’s the kind of place you hope to stumble across', 'Dana : the clanging echoing between tufts of grass made the goats impossible to ignore', 'Roj : They also offer an incredible lineup of community events from documentary film nights to writing workshops to beach cleanup brunches. Check their social media for details when you’re on the island!', 'Edie : nice place to go', 'Paulina : nice place to go'],
            imageList: ['https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1460627390041-532a28402358?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
              ],
          },
          { popularity: "normal", 
            date: 'March 3, 2021', 
            title: '10 THINGS TO KNOW BEFORE YOU GO TO ROMANIA', 
            image: "URL('https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')", 
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Sine ea igitur iucunde negat posse se vivere? At hoc in eo M. Nihil illinc huc pervenit. Qui autem esse poteris, nisi te amor ipse ceperit? Sumenda potius quam expetenda. Age, inquies,',
            comments: ['Sara : It’s the kind of place you hope to stumble across', 'Dann : I loved it here!', 'it’s a gorgeous spot to dream away an afternoon.', 'Natasha : the food is very expensive for the area', ],
            imageList: ['https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1460627390041-532a28402358?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
              ],
          },
          { popularity: "normal", 
            date: 'March 3, 2021', 
            title: '10 THINGS TO KNOW BEFORE YOU GO TO ROMANIA', 
            image: "URL('https://images.unsplash.com/photo-1515859005217-8a1f08870f59?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')", 
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Sine ea igitur iucunde negat posse se vivere? At hoc in eo M. Nihil illinc huc pervenit. Qui autem esse poteris, nisi te amor ipse ceperit? Sumenda potius quam expetenda. Age, inquies,',
            comments: ['Yoda : I loved it here!', 'Love : it’s a gorgeous spot to dream away an afternoon.'],
            imageList: ['https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1460627390041-532a28402358?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
              ],
          },
          { popularity: "normal", 
            date: 'March 3, 2021', 
            title: '10 THINGS TO KNOW BEFORE YOU GO TO ROMANIA', 
            image: "URL('https://images.unsplash.com/photo-1523496922380-91d5afba98a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')", 
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Sine ea igitur iucunde negat posse se vivere? At hoc in eo M. Nihil illinc huc pervenit. Qui autem esse poteris, nisi te amor ipse ceperit? Sumenda potius quam expetenda. Age, inquies,',
            comments: ['Rayan : It has gotten a serious glow-up in the interim, and was so hip I almost didn’t recognize it.'],
            imageList: ['https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1460627390041-532a28402358?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
              ],
          },
          { popularity: "normal", 
            date: 'March 3, 2021', 
            title: '10 THINGS TO KNOW BEFORE YOU GO TO ROMANIA', 
            image: "URL('https://images.unsplash.com/photo-1496864137062-a12b5defe6be?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')", 
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Sine ea igitur iucunde negat posse se vivere? At hoc in eo M. Nihil illinc huc pervenit. Qui autem esse poteris, nisi te amor ipse ceperit? Sumenda potius quam expetenda. Age, inquies,',
            comments: ['Sabrina : the clanging echoing between tufts of grass made the goats impossible to ignore'],
            imageList: ['https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1460627390041-532a28402358?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
              ],
          },
       ],
       TBcurrentPage: 1,
       TBemailValue: '',
       TBconfirmationBtn : 'CONFIRM',
       TBleftColumnDisplay: 'flex',
       TBmoreInfoDisplay: 'none',
       TBpostDisplayed: 0,
       TBcommentName: '',
       TBcommentValue: '',
  }

  TBnavBarButtonClicked = () => { 
      window.scrollTo({
        top: 1100, 
        behavior: 'smooth'
      });
    }

    TBonPageChange = (index) => {
        this.setState({TBcurrentPage : index + 1});
        window.scrollTo({
          top: 1100, 
          behavior: 'smooth'
        });
      }

      TBonPrevious = () => {
        if(this.state.TBcurrentPage === 1) { 
          return;
        } else {
          const TBprevPage = this.state.TBcurrentPage - 1;
          this.setState({TBcurrentPage : TBprevPage});
          window.scrollTo({
            top: 1100, 
            behavior: 'smooth'
          });
        }
      }

      TBonNext = () => {
        const TBtotalPages = Math.floor(this.state.TBposts.length / 3) + 1;
        if(this.state.TBcurrentPage === TBtotalPages) { 
          return;
        } else {
          const TBnxtPage = this.state.TBcurrentPage + 1;
          this.setState({TBcurrentPage : TBnxtPage});
          window.scrollTo({
            top: 1100, 
            behavior: 'smooth'
          });
        }
      }

      TBemailChanged = async (event) => {
        const TBvalue = event.target.value;
        await this.setState({TBemailValue : TBvalue});
      }

      TBemailConfirmation = () => {
        var TBtestEmail =    /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
        const TBconfirmationBtn = TBtestEmail.test(this.state.TBemailValue) ? "THANK YOU !" : "TRY AGAIN";
        this.setState({ TBconfirmationBtn });
    }

    TBpostClickedd = (index) => {
      const TBindexSelected = parseInt(index);
      window.scrollTo({
        top: 1100, 
        behavior: 'smooth'
      });
      this.setState({TBleftColumnDisplay : 'none'});
      this.setState({TBmoreInfoDisplay : 'flex'});
      this.setState({TBpostDisplayed : TBindexSelected});
    }

    TBgoBack = () => {
      window.scrollTo({
        top: 1100, 
        behavior: 'smooth'
      });
      this.setState({TBleftColumnDisplay : 'flex'});
      this.setState({TBmoreInfoDisplay : 'none'});
      this.setState({TBpostDisplayed : 0});
    }

    TBmoreInfoNext = () => {
      const TBnewIndex = this.state.TBpostDisplayed  + 1;
      console.log(this.state.TBpostDisplayed);
      console.log(this.state.TBposts.length);
      if(this.state.TBpostDisplayed === this.state.TBposts.length - 1) { 
        return;
      } else {
        window.scrollTo({
          top: 1100, 
          behavior: 'smooth'
        });
        this.setState({TBpostDisplayed : TBnewIndex});
      }
    }

    TBmoreInfoPrev = (indexSelectedInfo) => {
      const TBnewIndex = this.state.TBpostDisplayed - 1;
      if(indexSelectedInfo === 0) { 
        return;
      } else {
        window.scrollTo({
          top: 1100, 
          behavior: 'smooth'
        });
        this.setState({TBpostDisplayed : TBnewIndex});
      }
    }

    TBcommentNameAdded = async (event) => {
      const TBcommentName = event.target.value;
      await this.setState({TBcommentName});
    }


    TBcommentTextAdd = async (event) => {
      const TBcommentValue = event.target.value;
      await this.setState({TBcommentValue});
    }

    TBcommentConfirmed = async() => {
      const TBindex = this.state.TBpostDisplayed;
      const TBposts = [...this.state.TBposts];
      if(this.state.TBcommentName.length > 1 && this.state.TBcommentValue.length > 1 ) {
        TBposts[TBindex].TBcomments.push(`${this.state.TBcommentName} : ${this.state.TBcommentValue}`)
        this.setState({TBposts});
        this.setState({TBcommentValue : ''});
        this.setState({TBcommentName : ''});
      } else if(this.state.TBcommentName.length < 1 && this.state.TBcommentValue.length > 1 ) { 
        alert("Please enter your name");
      } else if(this.state.TBcommentName.length > 1 && this.state.TBcommentValue.length < 1 ) { 
        alert("Please enter your comment");
      } else {
        return;
      }
    }


  render() {
    return (
      <div className="TBbody">

        <TBNavBar TBnavBarButtonClicked={this.navBarButtonClicked} />

        <div className="TBmiddlePart">

          <TBLeftColumn 
            leftColumnDisplay={this.state.TBleftColumnDisplay}
            posts={this.state.TBposts} 
            currentPage={this.state.TBcurrentPage} 
            onClick={this.TBonPageChange} 
            onPrev={this.TBonPrevious} 
            onNext={this.TBonNext}
            postClicked={this.TBpostClickedd} />

          <TBPostMoreInfo 
            display={this.state.TBmoreInfoDisplay}
            index={this.state.TBpostDisplayed}
            posts={this.state.TBposts}
            goBack={this.TBgoBack}
            postDisplayed={this.state.TBpostDisplayed}
            moreInfoGoNext={this.TBmoreInfoNext}
            moreInfoGoPrev={this.TBmoreInfoPrev}
            commentNameAdded={this.TBcommentNameAdded}
            commentName={this.state.TBcommentName}
            commentTextAdd={this.TBcommentTextAdd}
            commentValue={this.state.TBcommentValue}
            commentConfirmed={this.TBcommentConfirmed}
             />

          <TBRightColumn  
            posts={this.state.TBposts} 
            emailVerification={this.TBemailChanged} 
            inputValue={this.state.TBemailValue} 
            confirmationBtn={this.state.TBconfirmationBtn} 
            emailConfirmation={this.TBemailConfirmation} />
        </div>

        <TBFooter posts={this.state.TBposts} />

      </div>
    );
  }
}

export default TBMainPage;
