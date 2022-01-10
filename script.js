let Quotes;

let AnimeList=[
"Hyouka",
"Youjo Senki",
"Bungou Stray Dogs 2nd Season",
"Fullmetal Alchemist: Brotherhood",
"Tokyo Ghoul √A",
"Mahouka Koukou no Rettousei",
"Boku wa Tomodachi ga Sukunai NEXT",
"Joker Game",
"Avatar: The Last Airbender",
"Charlotte",
"ReLIFE",
"Soul Eater",
"Psycho-Pass Extended Edition",
"Naruto",
"Detective Conan",
"Death Parade",
"Darker than Black - Kuro no Keiyakusha: Gaiden",
"Haikyuu!! Second Season",
"Nekomonogatari: Kuro",
"Gekijōban Gintama Kanketsu-hen: Yorozuya yo Eien Nare",
"Naruto Shippuuden",
"Tanaka-kun wa Itsumo Kedaruge",
"Little Busters!",
"Fairy Tail",
"Aoharu x Kikanjuu",
"Subete ga F ni Naru",
"Danganronpa The Animation",
"Ookami Shoujo To Kuro Ouji",
"Hotarubi no Mori e",
"Assassination Classroom",
"Hunter X Hunter",
"Date A Live",
"Bleach",
"Noragami",
"The Melancholy of Haruhi Suzumiya",
"Yu-Gi-Oh! Arc-V",
"Owarimonogatari",
"Monogatari Series: Second Season",
"Magi - The Labyrinth of Magic",
"Cardcaptor Sakura",
"xxxHOLiC",
"No Game No Life",
"Danshi Koukousei no Nichijou",
"Shirobako",
"Katanagatari",
"One Piece",
"3-gatsu no Lion",
"Seishun Forget!",
"Yojouhan Shinwa Taikei",
"Tokyo Ghoul:re",
"Bungou Stray Dogs",
"Gurren Lagann",
"JoJo's Bizarre Adventure: Stardust Crusaders",
"Uchouten Kazoku",
"Dice: The Cube That Changes Everything",
"Re:Zero kara Hajimeru Isekai Seikatsu",
"Kimi no Na wa",
"Ao Haru Ride",
"Yahari Ore No Seishun Love Come Wa Machigatteiru",
"Darker than Black: Gemini of the Meteor",
"Days TV",
"Love Live! School idol project TV 2/2014",
"Natsume Yuujinchou",
"Three Days of Happiness",
"Wolf Girl & Black Prince",
"La Corda D'Oro - primo passo",
"Whistle!",
"Berserk",
"Higurashi No Naku Koro Ni",
"Durarara!!",
"Tamako Market",
"Eureka Seven",
"Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e",
"Boku no Hero Academia",
"Rokudenashi Majutsu Koushi to Akashic Records",
"Psycho-Pass",
"Legend of Zelda",
"Koe no Katachi",
"Koi to Uso",
"Nanbaka",
"Spice and Wolf",
"Sakurasou no Pet na Kanojo",
"Nisekoi",
"Isshūkan Friends",
"Kono Subarashii Sekai ni Shukufuku wo!",
"Mayoiga",
"Liar Game",
"Shingeki no Bahamut: Genesis",
"Kakegurui",
"Ore Monogatari!!",
"Akame ga KILL!",
"Gunbuster",
"Katekyo Hitman Reborn!",
"Yahari Ore no Seishun Love Come wa Machigatteiru. Zoku",
"Grisaia no Meikyuu",
"Trigun",
"Grisaia no Kajitsu",
"Octave",
"Oushitsu Kyoushi Haine",
"Tokyo Ghoul",
"Shingeki no Kyojin",
"Kingdom",
"Gintama",
"Mondaiji-tachi Ga Isekai Kara Kuru Sou Desu Yo?",
"Yahari Ore no Seishun Love Come wa Machigatteiru.",
"Hanamonogatari",
"Magic-Kyun! Renaissance",
"Boku dake ga Inai Machi",
"Kokoro ga Sakebitagatterunda.",
"Golgo 13",
"Steins;Gate",
"Barakamon",
"Citrus",
"Teen Spirit",
"Kill la Kill",
"Atelier Escha & Logy: Alchemists of the Dusk Sky",
"Denpa Kyoushi",
"Tower Of God",
"The Legend of the Legendary Heroes",
"Karneval",
"Welcome to Irabu's Office",
"Arakawa Under the Bridge",
"Senki Zesshō Symphogear",
"Amagi Brilliant Park",
"JoJo's Bizarre Adventure: Phantom Blood",
"Sakamoto desu ga?",
"Reikenzan: Hoshikuzu-tachi no Utage",
"Shingeki no Kyojin: Before the Fall",
"Torikago no Tsugai",
"Kenichi: The Mightiest Disciple",
"Alderamin on the Sky",
"Amaama to Inazuma",
"Durarara!!×2",
"SERVAMP",
"Danganronpa 3: The End of Kibougamine Gakuen - Zetsubou-hen",
"Vinland Saga",
"Takane to Hana",
"Hai to Gensou no Grimgar",
"Girl Friends",
"Vagabond",
"Suicide Island",
"Fate/zero",
"Arakawa under the Bridge × Bridge",
"One Punch Man",
"Kaiji",
"Guilty Crown",
"Gakkou Gurashi!",
"Prince Of Tennis",
"Log Horizon",
"Paprika",
"Ghost Hound",
"Adventures of Sinbad",
"Shingeki no Kyojin: Lost Girls",
"Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka",
"Evangelion: 2.0 You Can Not Advance",
"The Gamer",
"Mobile Suit Gundam Wing",
"Ouran High School Host Club",
"Inuyasha",
"Jitsu wa Watashi wa",
"Code Geass: Akito the Exiled",
"Super Lovers",
"Koutetsujou no Kabaneri",
"The Heroic Legend of Arslan",
"Naruto Shippūden",
"Fist of the North Star",
"Gantz",
"Aoi Bungaku Series",
"Monster",
"Shiki",
"Welcome to the N.H.K",
"Kuroko No Basket",
"Gekijou-ban Kyoukai no Kanata -I'll Be Here- Mirai-hen",
"Shokugeki no Sōma",
"Dragon Ball Super",
"Pandora Hearts",
"Hetalia The Beautiful World",
"Haikyuu!!",
"Boruto: Naruto Next Generations",
"The Last -Naruto the Movie-",
"Kamisama no Inai Nichiyoubi",
"Saenai Heroine no Sodatekata",
"Akatsuki no Yona",
"Hunter × Hunter",
"Porco Rosso",
"Skip Beat!",
"Bakemonogatari",
"Strike the Blood",
"Utsuro no Hako to Zero no Maria",
"Sword Art Online II",
"Shigatsu Wa Kimi No Uso",
"Owari no Seraph",
"Nisemonogatari",
"Umineko no Naku Koro ni Chiru Episode 8: Twilight of the...",
"Haibane Renmei",
"Chihayafuru",
"Toradora!",
"Tabi ni Deyou Horobiyuku Sekai no Hate Made",
"Yamada-kun to 7-nin no Majo",
"Terror in Resonance",
"Bokurano",
"Princess Tutu",
"Bleach the Movie: Hell Verse",
"Rurouni Kenshin",
"Kuroshitsuji",
"Tari Tari",
"07 Ghost",
"Shakugan no Shana III",
"Rokka no Yuusha",
"Yahari Ore no Seishun Love Comedy wa Machigatteiru",
"Tsubasa Reservoir Chronicle",
"Elfen Lied",
"Gosick",
"Kiznaiver",
"Fate/stay night",
"Kekkai Sensen",
"NANA",
"Baby Steps",
"Fate Grand Order",
"Fractale",
"Atrocious Fairy Tales for Adults",
"RWBY",
"Shokugeki no Sōma: Ni no Sara",
"Baka to Test to Shoukanjuu",
"Gate: Jieitai Kanochi nite Kaku Tatakaeri",
"Brynhildr in the Darkness",
"Ana Satsujin",
"Assassination Classroom 2nd Season",
"Orange",
"Sailor Moon",
"Akagami no Shirayukihime",
"Nani made nara Koroseru",
"Ga-Rei:Zero",
"Yu-Gi-Oh!",
"Code:Breaker",
"Toaru Majutsu no Index",
"Koi Dano Ai Dano",
"Gintama' TV 2012",
"Makai Ouji : Devils And Realist",
"Inu X Boku SS",
"Tonari No Kaibutsu-kun",
"Monster Musume no Iru Nichijou",
"Kuroko no Basket: Mou Ikkai Yarimasen ka",
"Rakudai Kishi no Cavalry",
"Cowboy Bebop",
"Ergo Proxy",
"Code Geass: Lelouch of the Rebellion",
"Da Capo II",
"Sakurako-san no Ashioto ni wa Shitai ga Umatteiru",
"Ghost Hunt",
"Imawa no Kuni no Alice",
"Umineko no Naku Koro ni Chiru Episode 7: Requiem of the...",
"Koyomimonogatari",
"Mirai Nikki",
"Ao no Exorcist",
"Nobunaga The Fool",
"Cardfight!! Vanguard",
"Deadman Wonderland",
"Senki Zesshō Symphogear G",
"K: Missing Kings",
"Phantom: Requiem For The Phantom",
"K",
"Kamisama No Memochou",
"Fukushuu Kyoushitsu",
"Loveless",
"Kyoukai No Kanata",
"Inou Battle wa Nichijou-kei no Naka de",
"Durarara!!×2 Ten",
"Kuroko's Basketball TV 3",
"Danganronpa: Kibou No Gakuen To Zetsubou No Koukousei",
"Boys Over Flowers",
"Black Bullet",
"Arslan Senki",
"CLANNAD",
"One Outs",
"Shakugan no Shana",
"Axis Powers: Hetalia",
"Kagerou Days",
".hack//SIGN",
"Tales Of Vesperia",
"Overlord",
"Life is Money",
"Hakkenden: Eight Dogs of the East TV 2",
"Magi - The Kingdom of Magic",
"Puella Magi Madoka Magica",
"Mobile Suit Gundam UC",
"Selector Spread Wixoss",
"Monthly Girls' Nozaki-kun",
"Kara no Kyoukai",
"Uchuu Kyoudai",
"Aldnoah.Zero",
"MAGI: The Labyrinth Of Magic",
"Yowamushi Pedal Grande Road",
"Hamatora: The Animation",
"Taimadou Gakuen 35 Shiken Shoutai",
"The Story of Saiunkoku",
"Terraformars",
"The World God Only Knows",
"Special A",
"Mondaji-tachi ga Isekai kara Kuru Sou Desu yo?",
"Psychic Detective Yakumo",
"Hajime no Ippo",
"Death Note",
"Black Butler II",
"Mobile Suit Gundam: Iron-Blooded Orphans",
"Gekkan Shoujo Nozaki-kun",
"Kiniro no Corda: Blue♪Sky",
"Toriko",
"Inazuma Eleven",
"Fate/stay night: Unlimited Blade Works",
"Gakusen Toshi Asterisk",
"Tsumi to Batsu: A Falsified Romance",
"Kanon",
"Monochrome Factor",
"Free! Eternal Summer",
"Aria the Animation",
"Durarara!!×2 Shou",
"Himouto! Umaru-chan",
"Utawarerumono",
"Perfect Blue",
"Gankutsuou",
"Umineko no Naku Koro ni",
"Hellsing Ultimate",
"Junjou Romantica",
"Last Game",
"Persona 3",
"Classroom Crisis",
"Polar Bear's Café",
"Vandread",
"Yowamushi Pedal",
"Infinite Ryvius",
"Fate Stay Night - Unlimited Blade Works",
"Kuroshitsuji: Book of Murder",
"Subarashii Sekai",
"ef - a tale of memories",
"Kore Wa Zombie Desu Ka?",
"Grisaia no Rakuen",
"Magical Warfare",
"Solanin",
"Hibike! Euphonium",
"Hentai Ouji To Warawanai Neko",
"Plastic Memories",
"Gunslinger Stratos: The Animation",
"The Disappearance of Nagato Yuki-chan",
"Houkago no Pleiades",
"High School DxD BorN",
"Black Rock Shooter",
"Air Gear",
"Ojojojo",
"Shugo Chara",
"Medaka Box",
"Ghost in the Shell: Stand Alone Complex",
"Black Cat",
"Mikagura School Suite",
"Eden*",
"Claymore",
"Kokoro Connect",
"Kino No Tabi",
"Final Fantasy VII: Advent Children",
"Nagi no Asukara",
"Bleach: Official Character Book 3 UNMASKED",
"Shining Hearts",
"Final Fantasy VII",
"Chuunibyou Demo Koi Ga Shitai!",
"Aikatsu!",
"Sukitte Ii Na Yo",
"Absolute Duo",
"Noblesse",
"Angel Beats!",
"Psyren",
"Walkure Romanze",
"Haiyore! Nyaruko-san",
"Denpa teki na Kanojo",
"Uta No Prince Sama",
"Valvrave the Liberator",
"WATAMOTE",
"D.Gray-man",
"Fate/stay night: Unlimited Blade Works TV",
"Another",
"Mahou Shoujo Madoka Magica",
"Fullmetal Alchemist",
"Trinity Blood",
"Wolf's Rain",
"One thousand and one nights",
"Natsume's Book of Friends",
"Giant Killing",
"Rosario Vampire",
"Neon Genesis Evangelion",
"Serial Experiments Lain",
"Sekirei",
"Kore wa Zombie Desu ka? of the Dead",
"Seiken Tsukai no World Break",
"Arashi no Yoru ni",
"Hunter x Hunter 2011",
"Accel World",
"Magi: Adventure of Sinbad",
"Velvet Blue Rose",
"Toaru Kagaku no Railgun",
"Bakuman",
"Devil May Cry",
"Boku wa Tomodachi ga Sukunai",
"Inferno Cop",
"K Project",
"Neko no Machi no Ko",
"Naruto Shippūden: Kizuna",
"ib: Instant Bullet",
"Fullmetal Alchemist: Brotherhood OAV",
"Tamako Love Story",
"Kuroshitsuji: Book of Circus",
"Parasyte -the maxim-",
"Dragon Ball Z",
"Persona 3 The Movie #1 Spring of Birth",
"Rakuen Tsuihō - Expelled from Paradise",
"Final Fantasy VII: Crisis Core",
"Persona 4",
"Highschool Of The Dead",
"Highschool Debut",
"Zero no Tsukaima: Futatsuki no Kishi",
"Zero no Tsukaima: Princess no Rondo",
"The Garden of Words",
"Air",
"Oyasumi Punpun",
"Sankarea",
"Boogiepop Phantom",
"Baccano!",
"Excel Saga",
"Final Fantasy XIII",
"Ef - A Fairy Tale Of The Two",
"KenIchi the Mightiest Disciple",
"Kimi To Boku.",
"The Legend Of Zelda",
"Psycho Love Comedy",
"Sugar Dark",
"Kimi ni Todoke",
"Final Fantasy VIII",
"Final Fantasy IX",
"Freedom Wars",
"Final Fantasy XV",
"Nanatsu no Taizai",
"R-15",
"Tales from Earthsea",
"Trigun: Badlands Rumble",
"Brave 10",
"Bungaku Shoujo",
"Doraemon",
"Sakura Taisen",
".hack//GIFT",
"Dusk maiden of Amnesia",
"Major",
"Shinmai Maou no Testament",
"Jing: King of Bandits",
"Hirunaka no Ryuusei",
"Chihayafuru 2",
"Kingdom Hearts",
"Noir",
"The World Is Still Beautiful",
"Shaman King",
"Fairy Tail TV 2/2014",
"Fruits Basket",
"Kamisama Hajimemashita",
"Higurashi no Naku Koro ni Rei",
"Kuroko's Basketball",
"Princess Lover!",
"Pochama ni",
"Aldnoah.Zero 2nd Season",
"Nabari no Ou",
"Junjō Romantica",
"Sekai Ichi Hatsukoi",
"Princess Princess",
"Gakuen Alice",
"Uta no Prince-sama",
"Shinkyoku Soukai Polyphonica",
"Golden Time",
"Black Lagoon",
"Black Butler: Book of Circus",
"Uragiri Wa Boku No Namae Wo Shitteiru",
"Nerawareta Gakuen",
"Living for the Day After Tomorrow",
"Shōnen Hollywood - Holly Stage for 49",
"Azumanga Daioh",
"Mushishi",
"Eyeshield 21",
"Magic Kaito",
"Blood-C",
"Sword Art Online",
"Hellsing",
"Medaka Box Abnormal",
"Juuou Mujin no Fafnir",
"Mobile Suit Gundam 00",
"Shuffle!",
"Broken Blade",
"Shinigami no Ballad",
"Bokura ga Ita",
"Natsuyuki Rendezvous",
"Zetsuen No Tempest",
"RDG: Red Data Girl",
"Neo Angelique Abyss",
"Neo Angelique Abyss -Second Age-",
"School Rumble",
"Mobile Suit Gundam Seed",
"5 Centimeters per Second",
"Shugo Chara!",
"Again!!",
"Akuma To Love Song",
"Legend of the Galactic Heroes",
"Sayonara Zetsubou Sensei",
"Voices of a Distant Star",
"Mobile Suit Gundam 00 2nd.Season",
"Croisée in a Foreign Labyrinth - The Animation",
"Genshiken: Second Generation",
"Appleseed",
"Argento Soma",
"Ghost in the Shell 2: Innocence",
"Giant Robo",
"Le Portrait de Petit Cossette",
"Masquerade",
"Cardfight!! Vanguard G",
"Akuma no Riddle",
"Jubei-Chan 2: The Counterattack of Siberia Yagyu",
"Ghost in the Shell",
"Nibari No Ou",
"ef: a tale of memories",
"Mobile Suit Gundam Seed Destiny",
"Donten ni Warau",
"Hatsukoi Limited",
"White Album 2",
"Royal Space Force: The Wings of Honneamise",
"RahXephon",
"Samurai X: Trust & Betrayal",
"Kyo kara Maoh!",
"The Comic Artist and His Assistants",
"Kantai Collection: KanColle",
"World Trigger",
"Rozen Maiden",
"Record of Lodoss War",
"Zettai Shonen",
"Nura: Rise of the Yokai Clan",
"Yokai Rise Of The Nura Clan",
"Chuunibyo Demo Koi ga Shitai!",
"Neppu Kairiku Bushi Road",
"Gankutsuou: The Count of Monte Cristo",
"Hajimete no Aku",
"To Love-Ru Darkness",
"Fushigi Yugi",
"Bubblegum Crisis: Tokyo 2040",
"Space Battleship Yamato",
"Tengen Toppa Gurren Laggan",
"X",
"Kodomo no Jikan",
"Paradise Kiss",
"Silver Spoon",
"So Ra No Wo To",
"Maoyuu Maou Yuusha",
"Romeo x Juliet",
"Rainbow: Nisha Rokubou no Shichinin",
"Working!!",
"Servant X Service",
"Hanasaku Iroha",
"Aoi Sekai no Chuushin de",
"Stella Jogakuin Koutou-ka C³-bu",
"Ping Pong The Animation",
"Love Live! School Idol Project 2nd Season",
"Tamayura",
"Onii-chan Dakedo Ai Sae Areba Kankeinai yo ne!",
"Ryuugajou Nanana No Maizoukin",
"Yu Yu Hakusho",
"Devil Survivor 2",
"Mayonaka Ni Kiss",
"The Seven Deadly Sins",
"A Certain Scientific Railgun",
"Love Live! School idol project",
"JoJo's Bizarre Adventure",
"Mashiroiro Symphony - The color of lovers",
"Love Lab",
"Da Capo III",
"Wolf’s Rain",
"BlazBlue: Alter Memory",
"Cardfight!! Vanguard: Link Joker Hen",
"True Tears",
"Panty And Stocking With Gaterbelt",
"Tokyo Ghoul: Jack",
"Rokujouma no Shinryakusha!?",
"Kotoura-san",
"Mushishi Zoku Shou",
"No.6",
"Dansai Bunri no Crime Edge",
"Kimi no Iru Machi",
"Shinsekai Yori",
"Un-Go",
"Cowboy Bebop: The Movie",
"Hayate the Combat Butler",
"Chrono Crusade",
"Ah! My Goddess: The Movie",
"Kore wa Zombie Desu ka?",
"Tsubasa Reservoir Chronicles",
"Touhou Project",
"Midnight Secretary",
"Onanie Master Kurosawa",
"Free!",
"Texhnolyze",
"Gugure! Kokkuri-san",
"Psycho-Pass 2",
"Sousei no Aquarion",
"Hanayamata",
"Nichijou",
"Bokura wa Minna Kawaisou",
"Inou-Battle wa Nichijou-kei no Naka de",
"Initial D: Fifth Stage",
"Saiyuki",
"To Love-Ru",
"Inari Kon Kon",
"Gaussian Blur",
"K-ON!",
"Clannad After Story",
"Kids on the Slope",
"Daily Lives of High School Boys",
".hack//Liminality",
"Hajime no Ippo - Champion Road",
"Assassins",
"Yu-Gi-Oh 5Ds",
"Warau Kanoko-sama",
"Kanojo wa Uso wo Aishisugiteru",
"Arata Kangatari",
"Vampire Knight",
"Tegami Bachi",
"Nodame Cantabile",
"Gatchaman Crowds",
"Karigurashi no Arrietty",
"Mimi wo Sumaseba",
"My Neighbors the Yamadas",
"Kuragehime",
"Jormungand",
"Revolutionary Girl Utena",
"Super Dangan Ronpa 2",
"Samurai Champloo",
"Hataraku Maou-sama!",
"Avatar: The Legend Of Korra",
"Ushinawareta Mirai wo Motomete",
"Coppelion",
"One-Punch Man",
"Kaichou Wa Maid-Sama!",
"Seven Days",
"Ano Hi Mita Hana No Namae Wo Bokutachi Wa Mada Shiranai",
"Hayate no Gotoku!",
"Beelzebub",
"Acchi Kocchi",
"Tengen Toppa Gurren Lagann",
"Spirited Away",
"Mobile Suit Gundam 00: A Wakening of the Trailblazer",
"Beck",
"Aria the Origination",
"Phi Brain: Kami No Puzzle",
"Rewrite",
"Sket Dance",
"Blood Lad",
"Demon King Daimao",
"Rin ~Daughters of Mnemosyne~",
"Kamisama To Unmei Kakumei No Paradox",
"Immortal Rain",
"Ore No Imouto Ga Konna Ni Kawaii Wake Ga Nai",
"Shingetsutan Tsukihime",
"Ore no Kanojo to Osananajimi ga Shuraba Sugiru",
"Kingdom Hearts 2",
"Eden of the East",
"Casshern Sins",
"Mahou Shoujo Madoka Magica: The Different Story",
"Okami-san And Her Seven Companions",
"Fate/hollow ataraxia",
"King Of Thorns",
"Code Geass: Boukoku No Akito",
"Aah! Megami-Sama",
"Tough",
"Mouryou No Hako",
"Touhai Densetsu Akagi: Yami Ni Maiorita Tensai",
"Yu-Gi-Oh! 5D's",
"Love Hina",
"Gundam 00",
"Pokémon",
"The Breaker",
"Slam Dunk",
"Rave Master",
"Kaze no Stigma",
"Tokyo Ravens",
"Busou Renkin",
"Itazura na Kiss",
"Sora No Woto",
"Yuri Yuri",
"FLCL",
"Outlaw Star",
"Senyuu. 2",
"Fushigi Yuugi",
"Galilei Donna",
"Yu-Gi-Oh! GX",
"Lovely Complex",
"Diamond No Ace",
"Project K: Days Of Blue",
"Bounen No Zamned",
"Sengoku Basara",
"Binbougami Ga!",
"Yu-Gi-Oh! Duel Monsters GX",
"Jinrui wa Suitai Shimashita",
"Sword of the Stranger",
"Darker than Black",
"Suisei no Gargantia",
"Mushibugyou",
"",
"Gekkou",
"Ai no Kusabi",
"Hagure Yuusha No Estetica",
"Honey and Clover",
"Aria The Natural",
"The Garden of Sinners",
"Koko Ni Iru Yo!",
"Magic Knight Rayearth",
"Kakumeiki Valvrave",
"Dragon Ball",
"Kekkaishi",
"Asu No Yoichi",
"The Girl Who Leapt Through Time",
"Pet Shop of Horrors",
"Saint Seiya",
"Denpa Onna to Seishun Otoko",
"Getbackers",
"Steel Angel Kurumi",
"Star Driver",
"The Skull Man",
"Kami Nomi zo Shiru Sekai",
"Ano Natsu de Matteru",
"Jigoku Shoujo",
"Digimon Savers",
"Are You Alice?",
"Dengeki Daisy",
"Gyakkyou Burai Kaiji: Hakairoku Hen",
"CANAAN",
"Kanashimi no Belladonna",
"Disgaea",
"Slayers",
"Sunabouzu",
"Tales of the Abyss",
"Sora no Otoshimono: Forte",
"Btooom!",
"Tenshi Nanka ja Nai",
"Mawaru Penguindrum",
"Muv-Luv Alternative: Total Eclipse",
"Tales Of Symphonia",
"Hourou Musuko",
"Hana Yori Dango",
"Ludwig Kakumei",
"Starry Sky",
"Great Teacher Onizuka",
"Yami no Matsuei",
"His and Her Circumstances",
"Myself ; Yourself",
"Madlax",
"Mahou Shoujo Lyrical Nanoha",
"El Cazador de la Bruja",
"The Big O",
"Saint Seiya: The Lost Canvas",
"Bakuretsu Hunters",
"Howl's Moving Castle",
"Blue Seed",
"Summer Wars",
"Queen's Blade: Rebellion",
"Spiral",
"Scryed",
"Subarashiki Kono Sekai",
"Tasogare Otome X Amnesia",
"Dance in the Vampire Bund",
"A Channel",
"Hidan no Aria",
"Kino",
"Xenogears",
"Bastard",
"Kannazuki no Miko",
"NG Knight Ramune & 40",
"Terra E",
"Seikon no Qwaser",
"Lucky Star",
"Nineteen Twenty-one",
"Kyoukai Senjou No Horizon",
"Sakamichi no Apollon",
"Zetman",
"Blood+",
"Princess Mononoke",
"Ranma ½",
"Tiger & Bunny",
"Zombie-Loan",
"Gunslinger Girl",
"The Vision of Escaflowne",
"Big Windup!",
"Seirei No Moribito",
"Full Metal Panic!",
"D.N.Angel",
"Lucky Dog",
"Macross Frontier"
];

let page=1;

let FetchedQuotesLen;
let CurrentSearchedAnime;
let CurrentSearchedCharacter;
let isSearchedTypeCharacter;   //used in pegination (getQuotesByPage) to run character query //it also resets in SearchThisAnime()

let DisplayPegination="block";
// (!FetchedQuotesLen) ? DisplayPegination="none": DisplayPegination="block";

document.body.innerHTML=`

                        <div class="container">
                            <nav class="navbar mt-4 d-flex justify-content-center ">
                                
                                <div class="search-box-container  d-flex justify-content-center align-items-center "> 
                                    
                                    
                                    <input class="inp-search" type="text" placeholder="Search the Sacred words..."  /> 
                                    <div class="sheath"><div class="sparking"></div></div><span></span>
                                    <div class="handle-wraper">
                                        <button class="btn-search" title="Search" onClick="SerchThisAnime(null,false)"><i class="bi bi-binoculars-fill"></i></button>                          
                                        <select class="search-type" title="Search Type"  name="search-opts" >
                                            <option value="anime">Anime</option>
                                            <option value="character">Character</option>
                                        </select>
                                        </div>
                                 </div>
            
                               
                            </nav>

                            <hr />
                            <div class="letters-box-container text-danger flex-wrap  d-flex justify-content-center align-items-center "> 
                                    
                            </div>
                            <hr> 

                            <div class="result-container mt-5 d-flex flex-wrap  justify-content-center">

                            </div>

                            <div class="pegination-container  my-5 d-flex text-white flex-wrap  justify-content-center">
                            <!--<div class="pegination-prev d-none   mx-1 p-1" onclick=PeginationPrev() > <h5> << Prev </h5></div>
                                <div class="pegination-currNum mx-1 p-1" > <h5> ${page} </h5></div>
                                <div class="pegination-next    mx-1 p-1" onclick=PeginationNext() > <h5> Next >></h5></div> -->
                            </div>
                            
                            <!-- The Popup container for Animelist -->
                            <div class="myModal popup-container modal" >
                                <!-- Popup content  -->
                                <div class="bg-dark text-danger Anime-list-modal-content">
                                    <span class="close " onclick="opencloseModal()">&times;</span>                                       
                                    <ul class="popup-list"></ul>
                                </div>
                            </div>  

                        </div>

                            



                            
                       
                        `;


const LettersBox = document.querySelector(".letters-box-container");
const PopupList = document.querySelector(".popup-list");

//printing all latters from A-Z
for(let i=65 ;i<91 ;i++)
{

    LettersBox.innerHTML+=`
                        <p onclick="letterPressed(${i})"  name="${String.fromCharCode(i)}" class="mx-2 p-1">${String.fromCharCode(i)}</p>                    
                       `;
    
                    

                            
    // console.log(Quotes[i]);

}

var modal = document.querySelector(".myModal");

function opencloseModal()
{
  ( modal.style.display!=="block") ? modal.style.display="block" : modal.style.display="none";
}

function letterPressed(letter)
{   
    
    
    opencloseModal();
    PopupList.innerHTML=``; //it can be empty for next letter
    // console.log(AnimeList);
    console.log("Val",letter);
    AnimeList.map(AnimeName => { (AnimeName.charAt(0) == String.fromCharCode(letter) ) ? 

                                // console.log(AnimeName)
                                PopupList.innerHTML+=`
                                                        <li onclick="SerchThisAnime('${AnimeName}',true)">${AnimeName}</li>
                                                    ` 
                                :null;
                                } )

}



async function getQuotes()
    {

       
        const FetchedData = await fetch('https://animechan.vercel.app/api/quotes');
        Quotes = await FetchedData.json();

          // All Anime Names
        // const FetchedDataList = await fetch('https://animechan.vercel.app/api/available/anime')
        // AnimeList = await FetchedDataList.json();

        renderResults();

    }
    getQuotes();

async function getQuotesByPage(pageNum)
    {

       if(isSearchedTypeCharacter)
       {
           const FetchedData = await fetch(`https://animechan.vercel.app/api/quotes/character?name=${CurrentSearchedCharacter}&page=${pageNum}`);
            Quotes = await FetchedData.json();
            FetchedQuotesLen=Quotes.length;
       }
        else{

            const FetchedData = await fetch(`https://animechan.vercel.app/api/quotes/anime?title=${CurrentSearchedAnime}&page=${pageNum}`);
            Quotes = await FetchedData.json();
            FetchedQuotesLen=Quotes.length;
        }


        
    
        renderResults();

    }
   




    const SearchInput = document.querySelector(".inp-search");
    const SearchType= document.querySelector(".search-type");

async function SerchThisAnime(AnimeName , FromAnimeList)
    {
        // console.log(SearchInput.value);
        let ResultStatus;
        (!AnimeName)? AnimeName=SearchInput.value:AnimeName;

        if(FromAnimeList ||  SearchType.value==="anime")
        {

            const FetchedData = await fetch(`https://animechan.vercel.app/api/quotes/anime?title=${AnimeName}`)             
            Quotes = await FetchedData.json();

            ResultStatus= FetchedData.status;
            FetchedQuotesLen=Quotes.length;

           // console.log("Searchresult",Quotes);
            CurrentSearchedAnime=AnimeName;

    
            isSearchedTypeCharacter=false;
        
        }
        else if(SearchType.value==="character"  )
        {
            const FetchedData = await fetch(`https://animechan.vercel.app/api/quotes/character?name=${SearchInput.value}`);             
            Quotes = await FetchedData.json();
            ResultStatus= FetchedData.status;

            FetchedQuotesLen=Quotes.length;
            
            //console.log("Searchresult",Quotes);
            CurrentSearchedCharacter=SearchInput.value;

            isSearchedTypeCharacter=true;
           
        }

        

        if(FetchedQuotesLen===10)
        {   

            page=1;
            pegination();
        }       
 
        // 
        if(ResultStatus===200)  
        {
           renderResults();
        }
        else{
            ResultNotFound();
        }
        

    }






const resultContainer = document.querySelector(".result-container");

function renderResults()
{

    resultContainer.innerHTML=  ``;
    console.log("red",Quotes);
    for(let i=0 ;i<10 ;i++)
    {

        resultContainer.innerHTML+=`
                        
                        <div class="card my-1">
                            <div class="card-body  text-white">
                                <h4 class="card-title text-danger"> <label><B>Anime : </B>  </label> ${Quotes[i].anime}</h4>
                                    <p class="card-text-quote"> ${Quotes[i].quote}</p>
                                    <p class="card-text-quoteBy">- ${Quotes[i].character} </p>    
                                
                            </div>           
                        </div>
                                    `;
        
                        

                                
        console.log(Quotes[i]);

    }
//     const resultContainer = document.querySelector(".result-container");
// resultContainer.innerHTML=`
                        
//                        <div class="card " >
//                             <div class="card-body  text-white">
//                                 <h4 class="card-title text-danger"> <label><B>Anime : </B> </label> Soul Eater</h4>
//                                     <p class="card-text-quote">It could be real difficult to hide when you're as big a star as I am.</p>
//                                     <p class="card-text-quoteBy">- Black Star </p>
                                      
                                
//                             </div>           
//                         </div>
//                                     `;


}

function ResultNotFound()
{

    resultContainer.innerHTML=  ``;
    console.log("404",Quotes);
        resultContainer.innerHTML+=`
                        
                        <div class="card my-1">
                            <div class="card-body  text-white">
                               
                                  <h4 class="card-title text-danger"> <label><B>Search Result : </B>  </label> Not Found 404</h4>     
                                
                            </div>           
                        </div>
                                    `;
        
                        

                                
        console.log(Quotes);




}

//When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
   opencloseModal();
  }
}





function pegination()
{
    const PegignationCon = document.querySelector(".pegination-container");

    PegignationCon.innerHTML=`
                                <div class="pegination-prev d-none   mx-1 p-1" onclick=PeginationPrev() > <h5> << Prev </h5></div>
                                <div class="pegination-currNum mx-1 p-1" > <h5> ${page} </h5></div>
                                <div class="pegination-next    mx-1 p-1" onclick=PeginationNext() > <h5> Next >></h5></div>
                             `;
   

}
 

function PeginationPrev(){
    
    let displayPrev="block";
    page--;
    getQuotesByPage(page);

    const PegignationCon = document.querySelector(".pegination-container");
    (page>1) ? displayPrev="block": displayPrev="none";
    
        PegignationCon.innerHTML=`
                                <div class="pegination-prev  d-${displayPrev}  mx-1 p-1" onclick=PeginationPrev() > <h5> << Prev </h5></div>
                                <div class="pegination-currNum mx-1 p-1" > <h5> ${page} </h5></div>
                                <div class="pegination-next    mx-1 p-1" onclick=PeginationNext() > <h5> Next >></h5></div>
                             `;
   
    
    
   
    console.log("pprev",page);
   
}

function PeginationNext(){

    let displayNext="block";
    
    
    page++;
    getQuotesByPage(page);
    (FetchedQuotesLen < 10) ? displayNext="none" : displayNext="block";
    const PegignationCon = document.querySelector(".pegination-container");
    PegignationCon.innerHTML=`
                            <div class="pegination-prev    mx-1 p-1" onclick=PeginationPrev() > <h5> << Prev </h5></div>
                            <div class="pegination-currNum mx-1 p-1" > <h5> ${page} </h5></div>
                            <div class="pegination-next d-${displayNext}   mx-1 p-1" onclick=PeginationNext() > <h5> Next >></h5></div>
                            `;
    
    console.log("next",page);

   

}