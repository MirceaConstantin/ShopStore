var Product = require('../models/product');
var mongoDB = require('mongoose');

mongoDB.connect('mongodb+srv://shopAdmin:shopAdmin@myshopproducts-huk3f.mongodb.net/myShop', {
  useNewUrlParser: true
});

var products = [
  new Product({
    title: 'State of Decay 2',
    imagePoster: 'https://store-images.s-microsoft.com/image/apps.18454.14425140369408817.31079f78-7ddb-48a1-bb62-355c82034fdd.cbc00080-ee71-485b-917c-b4f035e7cfea',
    imagesSlider: ['https://cdn.stateofdecay.com/sod/wp-content/uploads/2017/01/XB17_Dayton_YTThumbnail_v11.jpg',
      'https://cdn.stateofdecay.com/sod/wp-content/uploads/2017/01/XB17_Dayton_YTThumbnail_v8.jpg',
      'https://cdn.stateofdecay.com/sod/wp-content/uploads/2017/01/XB17_Dayton_YTThumbnail_v16.jpg'
    ],
    trailerGame: 'https://www.youtube.com/embed/qjLOFZjGClY',
    description: 'State of Decay 2 is an open world and "indie" zombie survival video game developed by Undead Labs and published by Microsoft Studios. It is a sequel to the 2013 video game State of Decay. The game was released on May 22, 2018 for Windows and Xbox One. The point of the game is to build a community and survive against the horde of zombies.',
    price: 50,
    genre: ['Survival'],
    platform: ['Microsoft Windows', 'Xbox One'],
    stock: 300
  }),
  new Product({
    title: 'God of War 4',
    imagePoster: 'https://ae01.alicdn.com/kf/HTB15IW6RVXXXXauXpXXq6xXFXXX1/2018-Game-God-of-War-4-Poster-T-shirts-Kratos-Atreus-Mens-Casual-Short-Sleeve-Cotton.jpg',
    imagesSlider: ['https://cdna.altex.ro/Jocuri%20PC/ENTERTAINMENT/JOCURI%20PS4/God-of-War-Desc-01_296e5c26.jpg',
      'https://cdna.altex.ro/Jocuri%20PC/ENTERTAINMENT/JOCURI%20PS4/God-of-War-Desc-02_0b3fb3f7.jpg',
      'https://cdna.altex.ro/Jocuri%20PC/ENTERTAINMENT/JOCURI%20PS4/God-of-War-Desc-03_59ccfad7.jpg'
    ],
    trailerGame: 'https://www.youtube.com/embed/fBSjiak4Pnk',
    description: "God of War is an action-adventure video game developed by Santa Monica Studio and published by Sony Interactive Entertainment (SIE). Released on April 20, 2018, for the PlayStation 4 (PS4) console, it is the eighth installment in the God of War series, the eighth chronologically, and the sequel to 2010's God of War III. Unlike previous games, which were loosely based on Greek mythology, this installment is loosely based on Norse mythology, with the majority of it set in ancient Norway in the realm of Midgard. For the first time in the series, there are two protagonists: Kratos, the former Greek God of War who remains the only playable character, and his young son Atreus; at times, the player may passively control him. Following the death of Kratos' second wife and Atreus' mother, they journey to fulfill her promise to spread her ashes at the highest peak of the nine realms. Kratos keeps his troubled past a secret from Atreus, who is unaware of his divine nature. Along their journey, they encounter monsters and gods of the Norse world.",
    price: 60,
    genre: ['Action', 'Adventure'],
    platform: ['PlayStation 4'],
    stock: 300
  }),
  new Product({
    title: "Assassin's Creed Odyssey",
    imagePoster: 'https://images-na.ssl-images-amazon.com/images/I/B1AdYFp9vQS._SY445_.jpg',
    imagesSlider: ['https://steamcdn-a.akamaihd.net/steam/apps/812140/ss_0ef33c0f230da6ebac94f5959f0e0a8bbc48cf8a.600x338.jpg?t=1540836192',
      'https://steamcdn-a.akamaihd.net/steam/apps/812140/ss_3f8f4a09fb1d69648a8c20aae19ca2924ba275bd.600x338.jpg?t=1540836192',
      'https://steamcdn-a.akamaihd.net/steam/apps/812140/ss_6dc9f95cfb6d264c3535b53ce08f36ee07066550.600x338.jpg?t=1540836192'
    ],
    trailerGame: 'https://www.youtube.com/embed/cK4iAjzAoas',
    description: "Assassin's Creed Odyssey is an action role-playing video game developed by Ubisoft Quebec and published by Ubisoft. It is the 11th major installment, and 21st overall, in the Assassin's Creed series and the successor to 2017's Assassin's Creed Origins. Set in the year 431 BC, the plot tells a fictional history of the Peloponnesian War between Athens and Sparta. Players control a male or female mercenary (Ancient Greek: μίσθιος misthios) who fights for both sides as they attempt to unite their family and uncover a malign cult. The game was released worldwide for Microsoft Windows, PlayStation 4, Xbox One, and (in Japan only) for Nintendo Switch on October 5, 2018, with a Google Stadia version launching alongside the service in 2019. It received generally positive reviews, with praise for its open world, visuals, combat, story, and characters, while receiving criticism for some reliance on grinding, microtransactions, and for feeling bloated.",
    price: 55,
    genre: ['Action', 'Role-Playing', 'Stealth'],
    platform: ['Microsoft Windows', 'PlayStation 4', 'Xbox One', 'Nintendo Switch', 'Google Stadia'],
    stock: 300
  }),
  new Product({
    title: 'World War Z',
    imagePoster: 'https://cdn.cdkeys.com/500x706/media/catalog/product/w/o/worldwar-z.jpg',
    imagesSlider: ['https://wwzgame.com/img/screenshots/WWZ_logo_22.jpg',
      'https://wwzgame.com/img/levels/tokyo-1.jpg',
      'https://wwzgame.com/img/screenshots/WWZ_logo_02.jpg'
    ],
    trailerGame: 'https://www.youtube.com/embed/m_EGqXQ0IKI',
    description: "World War Z is a third-person shooter video game developed by Saber Interactive and published by Mad Dog Games. It was released for Microsoft Windows, PlayStation 4, and Xbox One on April 16, 2019. Loosely based on the 2006 book of the same name, and set in the same universe as the 2013 film adaptation, the game follows groups of survivors of a zombie apocalypse in the cities of Moscow, New York, Jerusalem, and Tokyo.",
    price: 50,
    genre: ['Third-person', 'Shooter'],
    platform: ['Microsoft Windows', 'PlayStation 4', 'Xbox One'],
    stock: 300
  }),
  new Product({
    title: 'Fifa 2019',
    imagePoster: 'https://m.media-amazon.com/images/M/MV5BMTcyZjI5MzYtNGEyMC00NTNkLTgxZTktMmQ5MmIxNjRiYzg3XkEyXkFqcGdeQXVyNDIwOTkyNjM@._V1_UY268_CR14,0,182,268_AL_.jpg',
    imagesSlider: ['https://ksassets.timeincuk.net/wp/uploads/sites/54/2018/08/FIFA19_gdp_screenshot_neymar_hero-2-1220x686.jpg',
      'https://ksassets.timeincuk.net/wp/uploads/sites/54/2018/06/Fifa-19-1-1220x685.jpg',
      'https://ksassets.timeincuk.net/wp/uploads/sites/54/2018/06/Fifa-19-2-1220x685.jpg'
    ],
    trailerGame: 'https://www.youtube.com/embed/zX0AV6yxyrQ',
    description: "FIFA 19 is a football simulation video game developed by EA Vancouver as part of Electronic Arts' FIFA series. Announced on 6 June 2018 for its E3 2018 press conference, it was released on 28 September 2018 for PlayStation 3, PlayStation 4, Xbox 360, Xbox One, Nintendo Switch, and Microsoft Windows. It is the 26th installment in the FIFA series. As with FIFA 18, Cristiano Ronaldo initially as the cover athlete of the regular edition: however, following his unanticipated transfer from Spanish club Real Madrid to Italian side Juventus, new cover art was released, featuring Hazrol Box V4, Neymar, Kevin De Boxer Paulo Dybala.",
    price: 65,
    genre: ['Sports'],
    platform: ['Microsoft Windows', 'PlayStation 3', 'PlayStation 4', 'Xbox 360', 'Xbox One', 'Nintendo Switch'],
    stock: 300
  }),
  new Product({
    title: "PlayerUnknown's Battlegrounds",
    imagePoster: 'https://g2anewsprod02storage.s3.amazonaws.com/app/uploads/2018/11/PLAYERUNKNOWNS-BATTLEGROUNDS.jpg',
    imagesSlider: ['https://steamcdn-a.akamaihd.net/steam/apps/578080/ss_23af2e59855a833c22d0c11ca23a719f54a554ff.600x338.jpg?t=1556089957',
      'https://steamcdn-a.akamaihd.net/steam/apps/578080/ss_2c79b3b590b186b10bf082d37674621f204a3497.600x338.jpg?t=1556089957',
      'https://steamcdn-a.akamaihd.net/steam/apps/578080/ss_a3f3f8894f4a4eb4d17d7e41c8e1f195f37ba896.600x338.jpg?t=1556089957'
    ],
    trailerGame: 'https://www.youtube.com/embed/ODWCbu_cuqk',
    description: `PlayerUnknown's Battlegrounds (PUBG) is an online multiplayer battle royale game developed and published by PUBG Corporation, a subsidiary of South Korean video game company Bluehole. The game is based on previous mods that were created by Brendan " PlayerUnknown " Greene for other games, inspired by the 2000 Japanese film Battle Royale, and expanded into a standalone game under Greene's creative direction. In the game, up to one hundred players parachute onto an island and scavenge for weapons and equipment to kill others while avoiding getting killed themselves. The available safe area of the game's map decreases in size over time, directing surviving players into tighter areas to force encounters. The last player or team standing wins the round. Battlegrounds was first released for Microsoft Windows via Steam's early access beta program in March 2017, with a full release on December 20, 2017. That same month, the game was released by Microsoft Studios for the Xbox One via its Xbox Game Preview program, and officially released in September 2018. The same year, a free-to-play mobile version for Android and iOS was released, in addition to a port for the PlayStation 4. Battlegrounds is one of the best-selling and most-played video games of all time, selling over fifty million copies worldwide by June 2018, with over 400 million players in total when including the mobile version. Battlegrounds received positive reviews from critics, who found that while the game had some technical flaws, it presented new types of gameplay that could be easily approached by players of any skill level and was highly replayable. The game was attributed to popularizing the battle royale genre, with a number of unofficial Chinese clones also being produced following its success. The game also received several Game of the Year nominations, among other accolades. PUBG Corporation has run several small tournaments and introduced in-game tools to help with broadcasting the game to spectators, as they wish for it to become a popular esport. The game has also been banned in some countries, such as India, Nepal and Iraq, for allegedly being harmful and addictive for children in those regions.`,
    price: 65,
    genre: ['Battle royale'],
    platform: ['Microsoft Windows', 'Xbox One', 'Android', 'iOS', 'PlayStation 4'],
    stock: 300
  }),
  new Product({
    title: "The Witcher 3: Wild Hunt",
    imagePoster: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Witcher_3_cover_art.jpg/220px-Witcher_3_cover_art.jpg',
    imagesSlider: ['https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_64eb760f9a2b67f6731a71cce3a8fb684b9af267.600x338.jpg?t=1550078557',
      'https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_eda99e7f705a113d04ab2a7a36068f3e7b343d17.600x338.jpg?t=1550078557',
      'https://steamcdn-a.akamaihd.net/steam/apps/292030/ss_849ec8dcc6f8df1c0b2c509584c9fc9e51f88cfa.600x338.jpg?t=1550078557'
    ],
    trailerGame: 'https://www.youtube.com/embed/c0i88t0Kacs',
    description: `The Witcher 3: Wild Hunt is a 2015 action role-playing game developed and published by CD Projekt, based on The Witcher series of fantasy novels by Andrzej Sapkowski. It is the sequel to the 2011 game The Witcher 2: Assassins of Kings. Played in an open world with a third-person perspective, players control protagonist Geralt of Rivia, a monster hunter known as a witcher, who is looking for his missing adopted daughter on the run from the Wild Hunt: an otherworldly force determined to capture and use her powers. Players battle the game's many dangers with weapons and magic, interact with non-player characters, and complete main-story and side quests to acquire experience points and gold, which are used to increase Geralt's abilities and purchase equipment. Its central story has several endings, determined by the player's choices at certain points in the game. Development began in 2011 and lasted for three and a half years. Voice recording took over two and a half years. The writing was infused with realistic aspects like moral ambiguity in a deliberate attempt to avoid simplification, impart authenticity, and reflect Sapkowski's novels. Central and Northern Europe was the basis of the game's world. REDengine 3 enabled the developer to create a complex story without compromising the game's open world. The music was composed by Marcin Przybyłowicz and performed by the Brandenburg State Orchestra. The Witcher 3: Wild Hunt was released for Microsoft Windows, PlayStation 4, and Xbox One in May 2015, with a Nintendo Switch version slated for 2019. The game received critical acclaim, with praise for its gameplay, narrative, world design, combat, and visuals, although it received minor criticism due to technical issues. It received numerous Game of the Year awards, and has been cited as one of the greatest video games of all time. It was also a commercial success, shipping over twenty million copies by June 2019. Two expansions, Hearts of Stone and Blood and Wine, were also released to critical acclaim. A Game of the Year edition, with the base game, expansions and all downloadable content, was released in August 2016.`,
    price: 65,
    genre: ['Action role-playing'],
    platform: ['Microsoft Windows', 'Xbox One', 'PlayStation 4', 'Nintendo Switch'],
    stock: 300
  }),
  new Product({
    title: "Red Dead Redemption 2",
    imagePoster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Red_Dead_Redemption_II.jpg/220px-Red_Dead_Redemption_II.jpg',
    imagesSlider: ['https://cdn.pocket-lint.com/r/s/970x/assets/images/147087-games-review-red-dead-redemption-2-screens-image13-hdbmt7yoru.jpg',
      'https://cdn.mos.cms.futurecdn.net/gDavJNbL5jzZpLDye5H2xP.jpg',
      'https://koupelna-koupelny.info/photos/8a334b17490dac192d4eaf4923a4accf.jpg'
    ],
    trailerGame: 'https://www.youtube.com/embed/J9bTR-CfF0U',
    description: `Red Dead Redemption 2 is a Western-themed action-adventure game developed and published by Rockstar Games. It was released on October 26, 2018, for the PlayStation 4 and Xbox One consoles. The third entry in the Red Dead series, it is a prequel to the 2010 game Red Dead Redemption. Set in 1899 in a fictionalized version of the Western, Midwestern and Southern United States, the story centers on outlaw Arthur Morgan, a member of the Van der Linde gang dealing with the decline of the Wild West whilst attempting to survive against government forces, rival gangs, and other enemies. The story also follows fellow gang member John Marston, protagonist from the first Red Dead Redemption. The game is presented through both first and third-person perspectives, and the player may freely roam in its interactive open world. Gameplay elements include shootouts, heists, hunting, horseback riding, interacting with any non-player character (NPC), and maintaining the character's honor rating through moral choices and deeds. A bounty system similar to the "wanted" system from the Grand Theft Auto franchise governs the response of law enforcement and bounty hunters to crimes committed by the player. Red Dead Online, the online multiplayer mode of the game, was released as a beta version in November 2018. Broadly anticipated and marketed before release, Red Dead Redemption 2 broke several records and had the second-biggest launch in the history of entertainment, generating $725 million in sales from its opening weekend and shipping over 24 million copies in retail. It was universally acclaimed by critics, who praised the story, characters, open world, and considerable level of detail. It received a number of perfect scores and awards, including the "Critics' Choice Award" at the 2018 Golden Joystick Awards, and honors such as "Best Narrative" and "Best Score/Music" at The Game Awards 2018.`,
    price: 65,
    genre: ['Action-adventure'],
    platform: ['Xbox One', 'PlayStation 4'],
    stock: 300
  }),
  new Product({
    title: "Grand Theft Auto V",
    imagePoster: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Grand_Theft_Auto_V.png/220px-Grand_Theft_Auto_V.png',
    imagesSlider: ['https://steamcdn-a.akamaihd.net/steam/apps/271590/ss_e929649b2b98ad76795d92d8489470bc5dbffddb.600x338.jpg?t=1544815097',
      'https://steamcdn-a.akamaihd.net/steam/apps/271590/ss_e080b9646300458e7e6fde55ad68c8fd3650371c.600x338.jpg?t=1544815097',
      'https://steamcdn-a.akamaihd.net/steam/apps/271590/ss_3ce5439cfdd04d1c53487f7057d45360839c0205.600x338.jpg?t=1544815097'
    ],
    trailerGame: 'https://www.youtube.com/embed/LqDAPKDDpJA',
    description: `Grand Theft Auto V is an action-adventure video game developed by Rockstar North and published by Rockstar Games. It was released in September 2013 for PlayStation 3 and Xbox 360, in November 2014 for PlayStation 4 and Xbox One, and in April 2015 for Microsoft Windows. It is the first main entry in the Grand Theft Auto series since 2008's Grand Theft Auto IV. Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three criminals and their efforts to commit heists while under pressure from a government agency. The open world design lets players freely roam San Andreas' open countryside and the fictional city of Los Santos, based on Los Angeles. The game is played from either a third-person or first-person perspective and its world is navigated on foot or by vehicle. Players control the three lead protagonists throughout single-player and switch between them both during and outside missions. The story is centred on the heist sequences, and many missions involve shooting and driving gameplay. A "wanted" system governs the aggression of law enforcement response to players who commit crimes. Grand Theft Auto Online, the game's online multiplayer mode, lets up to 30 players engage in a variety of different cooperative and competitive game modes. The game's development began soon after Grand Theft Auto IV's release and was shared between many of Rockstar's studios worldwide. The development team drew influence from many of their previous projects such as Red Dead Redemption and Max Payne 3 and designed the game around three lead protagonists to innovate on the core structure of its predecessors. Much of the development work constituted the open world's creation, and several team members conducted field research around California to capture footage for the design team. The game's soundtrack features an original score composed by a team of producers who collaborated over several years. Extensively marketed and widely anticipated, the game broke industry sales records and became the fastest-selling entertainment product in history, earning $800 million in its first day and $1 billion in its first three days. It received widespread critical acclaim, with praise directed at its multiple protagonist design, open world, presentation and gameplay. However, it caused controversies related to its depiction of violence and women. Considered one of seventh and eighth generation console gaming's most significant titles and among the best video games ever made, it won year-end accolades including Game of the Year awards from several gaming publications. It is the third best-selling video game of all time with over 110 million copies shipped and one of the most financially successful entertainment products of all time, with about $6 billion in worldwide revenue.`,
    price: 65,
    genre: ['Action-adventure'],
    platform: ['Xbox One', 'PlayStation 4', 'Microsoft Windows', 'Xbox 360', 'PlayStation 3'],
    stock: 300
  }),
  new Product({
    title: 'Civilization VI',
    imagePoster: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Civilization_VI_cover_art.jpg/220px-Civilization_VI_cover_art.jpg',
    imagesSlider: ['https://steamcdn-a.akamaihd.net/steam/apps/947510/ss_4c2a100b81d10790a5b5376e9d08df565a67996d.600x338.jpg?t=1550120629',
      'https://steamcdn-a.akamaihd.net/steam/apps/947510/ss_52d8679f215d0dddb13334395bc896f19a8a6ba4.600x338.jpg?t=1550120629',
      'https://steamcdn-a.akamaihd.net/steam/apps/947510/ss_2c0ffbb6f72e5a4324519e01d07b00e7795f9a00.600x338.jpg?t=1550120629'
    ],
    trailerGame: 'https://www.youtube.com/embed/trNUE32O-do',
    description: `Sid Meier's Civilization VI is a turn-based strategy 4X video game developed by Firaxis Games, published by 2K Games, and distributed by Take-Two Interactive. The latest entry into the Civilization series, it was released on Microsoft Windows and macOS in October 2016, with later ports for Linux in February 2017,[1] iOS in December 2017, and Nintendo Switch, the game's only console release, in November 2018. Similarly to previous installments, the goal for the player is to develop a civilization from an early settlement through many millennia to become a world power and achieve one of several victory conditions, such as through military domination, technological superiority, or cultural influence, over the other human and computer controlled opponents. Players do this by exploring the world, founding new cities, building city improvements, deploying military troops to attack and defend from others, researching new technologies and cultural civics, and engaging in trade and negotiations with other world leaders. A critical design focus was to avoid having the player follow a pre-set path of improvements towards their civilization which they had observed from earlier games. Civilization VI places more emphasis on the terrain by "unstacking" city improvements from the main city space and giving bonuses for placing improvements near certain terrains. Other new features include research on the game's technology tree based on nearby terrain, a similar technology tree for cultural improvements and a better government civics structure for those playing on a cultural victory path, and new artificial intelligence mechanics for computer-controlled opponents that include secret goals and randomized engagements to disrupt an otherwise stable game. The game's first major expansion, Civilization VI: Rise and Fall, was released in February 2018, and a second expansion, Civilization VI: Gathering Storm, followed in February 2019.`,
    price: 50,
    genre: ['Turn-based strategy', '4X'],
    platform: ['Microsoft Windows', 'macOS', 'Linux', 'iOS', 'Nintendo Switch'],
    stock: 300
  }),
  new Product({
    title: "Tom Clancy's The Division 2",
    imagePoster: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/af/The_Division_2_art.jpg/220px-The_Division_2_art.jpg',
    imagesSlider: ['https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/en_US/dwdefb9d03/images/large/5b06a3984e0165fa45ffdcc5-3.jpg?sw=783&sh=440&sm=fit',
      'https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/en_US/dwa6777e2b/images/large/5b06a3984e0165fa45ffdcc5-4.jpg?sw=783&sh=440&sm=fit',
      'https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/en_US/dw9af6f95e/images/large/5b06a3984e0165fa45ffdcc5-2.jpg?sw=783&sh=440&sm=fit'
    ],
    trailerGame: 'https://www.youtube.com/embed/sli7AbX2bEk',
    description: `Tom Clancy's The Division 2 is an online action role-playing video game developed by Massive Entertainment and published by Ubisoft. The sequel to Tom Clancy's The Division (2016), it is set in a near-future Washington, D.C. in the aftermath of a smallpox pandemic, and follows an agent of the Strategic Homeland Division as they try to rebuild the city. The game was released for Microsoft Windows, PlayStation 4 and Xbox One on March 15, 2019. It received generally favorable reviews from critics, with most noting it as an improvement over the first installment.`,
    price: 50,
    genre: ['Action role-playing', 'Third person shooter'],
    platform: ['Microsoft Windows', 'PlayStation 4', 'Xbox One', 'Google Stadia'],
    stock: 300
  }),
  new Product({
    title: 'Far Cry Primal',
    imagePoster: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Far_Cry_Primal_cover_art.jpg/220px-Far_Cry_Primal_cover_art.jpg',
    imagesSlider: ['https://steamcdn-a.akamaihd.net/steam/apps/371660/ss_d820e20568ae777eda44fdebe23690e1e5c3d3a0.600x338.jpg?t=1527101931',
      'https://steamcdn-a.akamaihd.net/steam/apps/371660/ss_ba889584f1312c18efc11b8bbea916a9e118272a.600x338.jpg?t=1527101931',
      'https://steamcdn-a.akamaihd.net/steam/apps/371660/ss_b26849b80fc001ad55c4e5e87dacb3cf391cfa12.600x338.jpg?t=1527101931'
    ],
    trailerGame: 'https://www.youtube.com/embed/I_Can35IcA8',
    description: `Far Cry Primal is a first-person shooter video game developed by Ubisoft Montreal and published by Ubisoft. It was released worldwide for PlayStation 4 and Xbox One on February 23, 2016, and for Microsoft Windows on March 1, 2016. The game is a spin-off of the main Far Cry series. It is the first Far Cry game set in the Mesolithic Age. It revolves around the story of Takkar, who starts off as an unarmed hunter and rises to become the leader of a tribe. Far Cry Primal received generally positive reception from critics, who mostly praised the concept and setting, as well as the animal-taming mechanic and world design. Some reviewers felt there was a lack of weapons for the player to utilize, leading to repetitive gameplay design, while others felt the story and characters were not on par with the previous Far Cry games.`,
    price: 50,
    genre: ['First-person shooter'],
    platform: ['Microsoft Windows', 'Xbox One', 'PlayStation 4'],
    stock: 300
  })
]

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save((err, result) => {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoDB.disconnect()
}

module.exports = products;