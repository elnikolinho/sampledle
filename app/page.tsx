"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    /* ── constants ── */
    const MAX_GUESSES = 6;
    const STORAGE_KEY = "sampledle_state_v2";

    const PUZZLES: Puzzle[] = [
      {
        sourceSearch: "Chic Good Times",
        answerSearch: "Sugarhill Gang Rapper's Delight",
        source: { title: "Good Times", artist: "Chic", year: 1979 },
        answer: {
          title: "Rapper's Delight",
          artist: "The Sugarhill Gang",
          year: 1979,
        },
        hint1: "Released the same year as the original — one of the genre's founding tracks",
        hint: "One of the earliest and most famous hip-hop records ever pressed",
        genre: "Hip-Hop",
        sampleAt: 0,
        siblings: [
          {
            title: "Another One Bites the Dust",
            artist: "Queen",
            year: 1980,
            note: "Inspired by the same bassline",
          },
          {
            title: "Jump to It",
            artist: "Aretha Franklin",
            year: 1982,
            note: "Same Chic DNA",
          },
        ],
      },
      {
        sourceSearch: "Rick James Super Freak",
        answerSearch: "MC Hammer U Can't Touch This",
        source: { title: "Super Freak", artist: "Rick James", year: 1981 },
        answer: {
          title: "U Can't Touch This",
          artist: "MC Hammer",
          year: 1990,
        },
        hint1: "The artist is known for flashy dance moves and iconic baggy pants",
        hint: "MC Hammer's signature hit — you'll know it by the pants",
        genre: "Pop Rap",
        sampleAt: 3,
        siblings: [
          {
            title: "Give It to Me Baby",
            artist: "Rick James",
            year: 1981,
            note: "Same session, same groove",
          },
          {
            title: "Pray",
            artist: "MC Hammer",
            year: 1990,
            note: "Same album: Please Hammer Don't Hurt Em",
          },
        ],
      },
      {
        sourceSearch: "Stevie Wonder Pastime Paradise",
        answerSearch: "Coolio Gangsta's Paradise",
        source: {
          title: "Pastime Paradise",
          artist: "Stevie Wonder",
          year: 1976,
        },
        answer: {
          title: "Gangsta's Paradise",
          artist: "Coolio ft. L.V.",
          year: 1995,
        },
        hint1: "A mid-'90s soundtrack single that became bigger than the movie itself",
        hint: "Featured on the Dangerous Minds soundtrack — spent 3 weeks at #1",
        genre: "Hip-Hop",
        sampleAt: 0,
        siblings: [
          {
            title: "Skeletons",
            artist: "Stevie Wonder",
            year: 1987,
            note: "Stevie's catalog is endlessly sampled",
          },
          {
            title: "I Wish",
            artist: "Stevie Wonder",
            year: 1976,
            note: "Same Songs in the Key of Life album",
          },
        ],
      },
      {
        sourceSearch: "Diana Ross I'm Coming Out",
        answerSearch: "Mo Money Mo Problems Notorious BIG",
        source: { title: "I'm Coming Out", artist: "Diana Ross", year: 1980 },
        answer: {
          title: "Mo Money Mo Problems",
          artist: "The Notorious B.I.G.",
          year: 1997,
        },
        hint1: "A posthumous #1 hit from 1997 on Bad Boy Records",
        hint: "Notorious B.I.G.'s posthumous 1997 chart-topper ft. Puff Daddy",
        genre: "East Coast Hip-Hop",
        sampleAt: 0,
        siblings: [
          {
            title: "Upside Down",
            artist: "Diana Ross",
            year: 1980,
            note: "Same Nile Rodgers session",
          },
          {
            title: "Hypnotize",
            artist: "The Notorious B.I.G.",
            year: 1997,
            note: "Same Life After Death album",
          },
        ],
      },
      {
        sourceSearch: "Marvin Gaye I Heard It Through the Grapevine",
        answerSearch: "California Love 2Pac",
        source: {
          title: "I Heard It Through the Grapevine",
          artist: "Marvin Gaye",
          year: 1968,
        },
        answer: {
          title: "California Love",
          artist: "2Pac ft. Dr. Dre",
          year: 1995,
        },
        hint1: "A defining West Coast anthem released in 1995",
        hint: "2Pac and Dr. Dre's definitive West Coast anthem",
        genre: "West Coast Hip-Hop",
        sampleAt: 0,
        siblings: [
          {
            title: "Let's Get It On",
            artist: "Marvin Gaye",
            year: 1973,
            note: "Marvin's catalog is foundational",
          },
          {
            title: "All Eyez on Me",
            artist: "2Pac",
            year: 1996,
            note: "Same album era",
          },
        ],
      },
      {
        sourceSearch: "Donna Summer I Feel Love",
        answerSearch: "Daft Punk Harder Better Faster",
        source: { title: "I Feel Love", artist: "Donna Summer", year: 1977 },
        answer: {
          title: "Harder, Better, Faster, Stronger",
          artist: "Daft Punk",
          year: 2001,
        },
        hint1: "An electronic duo released this on their Discovery album in 2001",
        hint: "A Daft Punk classic later flipped again by Kanye West",
        genre: "French House / Electronic",
        sampleAt: 0,
        siblings: [
          {
            title: "Around the World",
            artist: "Daft Punk",
            year: 1997,
            note: "Same electronic DNA",
          },
          {
            title: "Stronger",
            artist: "Kanye West",
            year: 2007,
            note: "Sampled this very Daft Punk track",
          },
        ],
      },
      {
        sourceSearch: "Zapp Roger More Bounce to the Ounce",
        answerSearch: "Snoop Dogg Gin and Juice",
        source: {
          title: "More Bounce to the Ounce",
          artist: "Zapp & Roger",
          year: 1980,
        },
        answer: { title: "Gin and Juice", artist: "Snoop Dogg", year: 1993 },
        hint1: "A laid-back 1993 single from a legendary West Coast debut album",
        hint: "One of Snoop Dogg's most iconic debut-era singles",
        genre: "G-Funk / West Coast Hip-Hop",
        sampleAt: 0,
        siblings: [
          {
            title: "Nuthin' But a G Thang",
            artist: "Dr. Dre",
            year: 1992,
            note: "West Coast G-funk companion",
          },
          {
            title: "So Fresh, So Clean",
            artist: "OutKast",
            year: 2001,
            note: "Zapp vocoder influence lives on",
          },
        ],
      },
      {
        sourceSearch: "Michael Jackson PYT Pretty Young Thing",
        answerSearch: "Kendrick Lamar Poetic Justice",
        source: {
          title: "P.Y.T. (Pretty Young Thing)",
          artist: "Michael Jackson",
          year: 1982,
        },
        answer: {
          title: "Poetic Justice",
          artist: "Kendrick Lamar",
          year: 2012,
        },
        hint1: "Shares its name with a 1993 film starring Tupac Shakur",
        hint: "A smooth Kendrick Lamar track from good kid, m.A.A.d city ft. Drake",
        genre: "West Coast Hip-Hop",
        sampleAt: 0,
        siblings: [
          {
            title: "Swimming Pools",
            artist: "Kendrick Lamar",
            year: 2012,
            note: "Same album",
          },
          {
            title: "Human Nature",
            artist: "Michael Jackson",
            year: 1982,
            note: "Also sampled by many hip-hop acts",
          },
        ],
      },
      {
        sourceSearch: "Billie Holiday Strange Fruit",
        answerSearch: "Kanye West Blood on the Leaves",
        source: {
          title: "Strange Fruit",
          artist: "Billie Holiday",
          year: 1939,
        },
        answer: {
          title: "Blood on the Leaves",
          artist: "Kanye West",
          year: 2013,
        },
        hint1: "Released on a polarizing 2013 album known for its industrial sound",
        hint: "A dark, orchestral Kanye West track from Yeezus using Nina Simone's version",
        genre: "Experimental Hip-Hop / Trap",
        sampleAt: 10,
        siblings: [
          {
            title: "New Slaves",
            artist: "Kanye West",
            year: 2013,
            note: "Same Yeezus album",
          },
          {
            title: "Strange Fruit",
            artist: "Nina Simone",
            year: 1965,
            note: "The sampled version of this song",
          },
        ],
      },
      {
        sourceSearch: "Abdel Halim Hafez Khosara",
        answerSearch: "Jay-Z Big Pimpin",
        source: {
          title: "Khosara Khosara",
          artist: "Abdel Halim Hafez",
          year: 1957,
        },
        answer: { title: "Big Pimpin'", artist: "Jay-Z ft. UGK", year: 2000 },
        hint1: "Features a legendary Southern rap duo from Texas",
        hint: "One of Jay-Z's biggest commercial hits, featuring UGK",
        genre: "Hip-Hop / Southern Rap",
        sampleAt: 0,
        siblings: [
          {
            title: "H to the Izzo",
            artist: "Jay-Z",
            year: 2001,
            note: "Same Blueprint era",
          },
          {
            title: "Hard Knock Life",
            artist: "Jay-Z",
            year: 1998,
            note: "Jay-Z's sample mastery",
          },
        ],
      },
      {
        sourceSearch: "Pete Rock CL Smooth They Reminisce Over You",
        answerSearch: "French Montana Pop That",
        source: {
          title: "They Reminisce Over You",
          artist: "Pete Rock & C.L. Smooth",
          year: 1992,
        },
        answer: {
          title: "Pop That",
          artist: "French Montana ft. Rick Ross",
          year: 2012,
        },
        hint1: "A 2012 club banger with four major rappers on the track",
        hint: "A 2012 hip-hop hit featuring Rick Ross, Drake and Lil Wayne",
        genre: "Trap / Hip-Hop",
        sampleAt: 0,
        siblings: [
          {
            title: "Juicy",
            artist: "The Notorious B.I.G.",
            year: 1994,
            note: "Golden age soul sample",
          },
          {
            title: "C.R.E.A.M.",
            artist: "Wu-Tang Clan",
            year: 1993,
            note: "Same era of soul-flip hip-hop",
          },
        ],
      },
      {
        sourceSearch: "Sly Family Stone Sing a Simple Song",
        answerSearch: "Nas The World Is Yours",
        source: {
          title: "Sing a Simple Song",
          artist: "Sly & the Family Stone",
          year: 1968,
        },
        answer: { title: "The World Is Yours", artist: "Nas", year: 1994 },
        hint1: "From a 1994 debut album widely considered a hip-hop masterpiece",
        hint: "A defining track from Nas's debut Illmatic — one of the greatest albums ever",
        genre: "East Coast Hip-Hop",
        sampleAt: 0,
        siblings: [
          {
            title: "N.Y. State of Mind",
            artist: "Nas",
            year: 1994,
            note: "Same Illmatic album",
          },
          {
            title: "Ain't No Half Steppin'",
            artist: "Big Daddy Kane",
            year: 1988,
            note: "Earlier soul flip",
          },
        ],
      },
      {
        sourceSearch: "Skull Snaps It's a New Day",
        answerSearch: "Nas NY State of Mind",
        source: { title: "It's a New Day", artist: "Skull Snaps", year: 1973 },
        answer: { title: "N.Y. State of Mind", artist: "Nas", year: 1994 },
        hint1: "A raw portrait of Queensbridge from a legendary 1994 debut",
        hint: "Widely considered one of the greatest rap songs ever recorded",
        genre: "East Coast Hip-Hop",
        sampleAt: 0,
        siblings: [
          {
            title: "The Message",
            artist: "Grandmaster Flash",
            year: 1982,
            note: "Defined NYC hip-hop",
          },
          {
            title: "C.R.E.A.M.",
            artist: "Wu-Tang Clan",
            year: 1993,
            note: "Same dark NYC palette",
          },
        ],
      },
      {
        sourceSearch: "Isaac Hayes Ike's Rap",
        answerSearch: "Kanye West Gone",
        source: { title: "Ike's Rap II", artist: "Isaac Hayes", year: 1971 },
        answer: {
          title: "Gone",
          artist: "Kanye West ft. Otis Redding",
          year: 2005,
        },
        hint1: "A 2005 deep cut featuring sampled vocals from a soul legend",
        hint: "A Late Registration deep cut by Kanye, featuring Otis Redding's vocals",
        genre: "Hip-Hop / Soul Rap",
        sampleAt: 0,
        siblings: [
          {
            title: "Heard 'Em Say",
            artist: "Kanye West",
            year: 2005,
            note: "Same Late Registration album",
          },
          {
            title: "Soul Power",
            artist: "James Brown",
            year: 1971,
            note: "Same soul/funk era",
          },
        ],
      },
      {
        sourceSearch: "Bobby Byrd Come On Do the James",
        answerSearch: "Missy Elliott Work It",
        source: {
          title: "Come On (Do the James)",
          artist: "Bobby Byrd",
          year: 1967,
        },
        answer: { title: "Work It", artist: "Missy Elliott", year: 2002 },
        hint1: "Produced by Timbaland — the vocal hook plays in reverse",
        hint: "Missy Elliott's signature 2002 track — the beat plays backwards",
        genre: "Hip-Hop / R&B",
        sampleAt: 0,
        siblings: [
          {
            title: "Get Ur Freak On",
            artist: "Missy Elliott",
            year: 2001,
            note: "Same creative peak era",
          },
          {
            title: "One Minute Man",
            artist: "Missy Elliott",
            year: 2001,
            note: "Same Timbaland production era",
          },
        ],
      },
      {
        sourceSearch: "Melvin Bliss Synthetic Substitution",
        answerSearch: "Dr Dre The Next Episode",
        source: {
          title: "Synthetic Substitution",
          artist: "Melvin Bliss",
          year: 1973,
        },
        answer: {
          title: "The Next Episode",
          artist: "Dr. Dre ft. Snoop Dogg",
          year: 1999,
        },
        hint1: "A late-'90s release that became a staple at sports events worldwide",
        hint: "Dr. Dre and Snoop Dogg track from the legendary 2001 album",
        genre: "West Coast Hip-Hop / G-Funk",
        sampleAt: 0,
        siblings: [
          {
            title: "Still D.R.E.",
            artist: "Dr. Dre",
            year: 1999,
            note: "Same 2001 album",
          },
          {
            title: "Forgot About Dre",
            artist: "Dr. Dre",
            year: 1999,
            note: "Same drum break era",
          },
        ],
      },
      {
        sourceSearch: "Lyn Collins Think About It",
        answerSearch: "Drake Hotline Bling",
        source: {
          title: "Think (About It)",
          artist: "Lyn Collins",
          year: 1972,
        },
        answer: { title: "Hotline Bling", artist: "Drake", year: 2015 },
        hint1: "Its music video spawned countless dance memes in 2015",
        hint: "A 2015 Drake hit with a now-iconic music video",
        genre: "Pop Rap / R&B",
        sampleAt: 81,
        siblings: [
          {
            title: "In the Air Tonight",
            artist: "Phil Collins",
            year: 1981,
            note: "Another breakbeat era classic",
          },
          {
            title: "Impeach the President",
            artist: "The Honey Drippers",
            year: 1973,
            note: "Foundational hip-hop sample source",
          },
        ],
      },
      {
        sourceSearch: "The Winstons Amen Brother",
        answerSearch: "OutKast B.O.B.",
        source: { title: "Amen, Brother", artist: "The Winstons", year: 1969 },
        answer: {
          title: "B.O.B. (Bombs Over Baghdad)",
          artist: "OutKast",
          year: 2000,
        },
        hint1: "An explosive album opener from an Atlanta duo's Stankonia",
        hint: "OutKast's explosive 2000 opener — the Amen break is one of music's most sampled drums",
        genre: "Southern Hip-Hop / Experimental",
        sampleAt: 86,
        siblings: [
          {
            title: "The Amen Break",
            artist: "Various artists",
            year: 1986,
            note: "Foundational drum & bass break",
          },
          {
            title: "Ms. Jackson",
            artist: "OutKast",
            year: 2000,
            note: "Same Stankonia album",
          },
        ],
      },
      {
        sourceSearch: "James Brown Funky Drummer",
        answerSearch: "Public Enemy Fight the Power",
        source: { title: "Funky Drummer", artist: "James Brown", year: 1970 },
        answer: {
          title: "Fight the Power",
          artist: "Public Enemy",
          year: 1989,
        },
        hint1: "Commissioned for a 1989 Spike Lee film about racial tension in Brooklyn",
        hint: "A Public Enemy anthem from Spike Lee's Do the Right Thing",
        genre: "Political Hip-Hop",
        sampleAt: 322,
        siblings: [
          {
            title: "Straight Outta Compton",
            artist: "N.W.A",
            year: 1988,
            note: "Same drum break",
          },
          {
            title: "Paid in Full",
            artist: "Eric B. & Rakim",
            year: 1987,
            note: "Golden age built on James Brown",
          },
        ],
      },
      { sourceSearch:"Isley Brothers Footsteps in the Dark", answerSearch:"Ice Cube It Was a Good Day",
        source:{title:"Footsteps in the Dark",artist:"The Isley Brothers",year:1977},
        answer:{title:"It Was a Good Day",artist:"Ice Cube",year:1993},
        hint1:"The narrator describes 24 hours without any trouble in South Central LA",
        hint:"Ice Cube paints a perfect day in South Central — no barking from the dog",
        genre:"West Coast Hip-Hop", sampleAt:0,
        siblings:[{title:"Straight Outta Compton",artist:"N.W.A",year:1988,note:"Ice Cube's earlier group"},{title:"Between the Sheets",artist:"The Isley Brothers",year:1983,note:"Also heavily sampled by hip-hop producers"}]
      },
      { sourceSearch:"Mtume Juicy Fruit", answerSearch:"Notorious BIG Juicy",
        source:{title:"Juicy Fruit",artist:"Mtume",year:1983},
        answer:{title:"Juicy",artist:"The Notorious B.I.G.",year:1994},
        hint1:"A rags-to-riches debut single from a Brooklyn hip-hop legend",
        hint:"Biggie's debut single — a rags-to-riches anthem from Ready to Die",
        genre:"East Coast Hip-Hop", sampleAt:0,
        siblings:[{title:"Big Poppa",artist:"The Notorious B.I.G.",year:1994,note:"Same Ready to Die album"},{title:"One More Chance",artist:"The Notorious B.I.G.",year:1994,note:"Same Puff Daddy production era"}]
      },
      { sourceSearch:"Chaka Khan Through the Fire", answerSearch:"Kanye West Through the Wire",
        source:{title:"Through the Fire",artist:"Chaka Khan",year:1984},
        answer:{title:"Through the Wire",artist:"Kanye West",year:2003},
        hint1:"The artist recorded this under extraordinary physical circumstances",
        hint:"Kanye recorded this with his jaw wired shut after a car accident",
        genre:"Hip-Hop / Soul Rap", sampleAt:56,
        siblings:[{title:"Jesus Walks",artist:"Kanye West",year:2004,note:"Same College Dropout album"},{title:"All Falls Down",artist:"Kanye West",year:2004,note:"Same breakout era"}]
      },
      { sourceSearch:"Daft Punk Harder Better Faster Stronger", answerSearch:"Kanye West Stronger",
        source:{title:"Harder, Better, Faster, Stronger",artist:"Daft Punk",year:2001},
        answer:{title:"Stronger",artist:"Kanye West",year:2007},
        hint1:"From a 2007 album named after an academic ceremony",
        hint:"Kanye's electronic-influenced hit from Graduation — what doesn't kill you...",
        genre:"Pop Rap / Electronic", sampleAt:0,
        siblings:[{title:"Good Morning",artist:"Kanye West",year:2007,note:"Same Graduation album"},{title:"Can't Tell Me Nothing",artist:"Kanye West",year:2007,note:"Same Graduation era"}]
      },
      { sourceSearch:"King Crimson 21st Century Schizoid Man", answerSearch:"Kanye West Power",
        source:{title:"21st Century Schizoid Man",artist:"King Crimson",year:1969},
        answer:{title:"Power",artist:"Kanye West",year:2010},
        hint1:"Lead single from a maximalist 2010 hip-hop album",
        hint:"Kanye's grandiose MBDTF lead single — 'no one man should have all that power'",
        genre:"Hip-Hop / Experimental", sampleAt:0,
        siblings:[{title:"Monster",artist:"Kanye West",year:2010,note:"Same MBDTF album"},{title:"Runaway",artist:"Kanye West",year:2010,note:"Same MBDTF album"}]
      },
      { sourceSearch:"Smokey Robinson Will You Love Me Tomorrow", answerSearch:"Kanye West Devil in a New Dress",
        source:{title:"Will You Love Me Tomorrow",artist:"Smokey Robinson",year:1978},
        answer:{title:"Devil in a New Dress",artist:"Kanye West ft. Rick Ross",year:2010},
        hint1:"Contains one of the most celebrated guest rap verses of the 2010s",
        hint:"A smooth MBDTF deep cut with one of Rick Ross's greatest verses",
        genre:"Hip-Hop / Soul", sampleAt:126,
        siblings:[{title:"Gorgeous",artist:"Kanye West",year:2010,note:"Same MBDTF album"},{title:"All of the Lights",artist:"Kanye West",year:2010,note:"Same MBDTF album"}]
      },
      { sourceSearch:"Ponderosa Twins Plus One Bound", answerSearch:"Kanye West Bound 2",
        source:{title:"Bound",artist:"Ponderosa Twins Plus One",year:1971},
        answer:{title:"Bound 2",artist:"Kanye West",year:2013},
        hint1:"The soulful, melodic closing track on a harsh 2013 album",
        hint:"The soulful closer to Yeezus — also featured an infamous music video",
        genre:"Hip-Hop / Soul", sampleAt:0,
        siblings:[{title:"On Sight",artist:"Kanye West",year:2013,note:"Same Yeezus album"},{title:"Black Skinhead",artist:"Kanye West",year:2013,note:"Same Yeezus album"}]
      },
      { sourceSearch:"Curtis Mayfield Move On Up", answerSearch:"Kanye West Touch the Sky",
        source:{title:"Move On Up",artist:"Curtis Mayfield",year:1970},
        answer:{title:"Touch the Sky",artist:"Kanye West ft. Lupe Fiasco",year:2005},
        hint1:"Features the mainstream debut of a Chicago rapper who'd become a star",
        hint:"A triumphant Late Registration single featuring Lupe Fiasco's debut",
        genre:"Hip-Hop / Soul Rap", sampleAt:0,
        siblings:[{title:"Gold Digger",artist:"Kanye West",year:2005,note:"Same Late Registration album"},{title:"Drive Slow",artist:"Kanye West",year:2005,note:"Same Late Registration album"}]
      },
      { sourceSearch:"Ray Charles I Got a Woman", answerSearch:"Kanye West Gold Digger",
        source:{title:"I Got a Woman",artist:"Ray Charles",year:1954},
        answer:{title:"Gold Digger",artist:"Kanye West ft. Jamie Foxx",year:2005},
        hint1:"An Oscar-winning actor channels a classic R&B voice on the hook",
        hint:"Kanye's biggest commercial hit from Late Registration — Jamie Foxx sings the hook",
        genre:"Pop Rap", sampleAt:0,
        siblings:[{title:"Touch the Sky",artist:"Kanye West",year:2005,note:"Same Late Registration album"},{title:"Diamonds from Sierra Leone",artist:"Kanye West",year:2005,note:"Same album era"}]
      },
      { sourceSearch:"The Charmels As Long As I Got You", answerSearch:"Wu-Tang Clan C.R.E.A.M.",
        source:{title:"As Long as I've Got You",artist:"The Charmels",year:1967},
        answer:{title:"C.R.E.A.M.",artist:"Wu-Tang Clan",year:1993},
        hint1:"An acronym that became a financial motto from Staten Island's finest",
        hint:"Wu-Tang's ode to money — 'cash rules everything around me'",
        genre:"East Coast Hip-Hop", sampleAt:0,
        siblings:[{title:"Protect Ya Neck",artist:"Wu-Tang Clan",year:1993,note:"Same 36 Chambers album"},{title:"Method Man",artist:"Wu-Tang Clan",year:1993,note:"Same 36 Chambers album"}]
      },
      { sourceSearch:"Herbie Hancock Jessica", answerSearch:"Mobb Deep Shook Ones Part II",
        source:{title:"Jessica",artist:"Herbie Hancock",year:1969},
        answer:{title:"Shook Ones, Part II",artist:"Mobb Deep",year:1995},
        hint1:"One of the hardest beats ever produced, from a Queensbridge duo",
        hint:"One of the hardest beats in hip-hop history — Queensbridge's finest",
        genre:"East Coast Hip-Hop / Hardcore", sampleAt:0,
        siblings:[{title:"Survival of the Fittest",artist:"Mobb Deep",year:1995,note:"Same The Infamous album"},{title:"Shook Ones, Part I",artist:"Mobb Deep",year:1995,note:"The precursor"}]
      },
      { sourceSearch:"Dido Thank You", answerSearch:"Eminem Stan",
        source:{title:"Thank You",artist:"Dido",year:1998},
        answer:{title:"Stan",artist:"Eminem ft. Dido",year:2000},
        hint1:"This track's title became a dictionary word meaning 'obsessive fan'",
        hint:"Eminem's haunting narrative about an obsessed fan — now a word in the dictionary",
        genre:"Hip-Hop / Narrative", sampleAt:0,
        siblings:[{title:"The Real Slim Shady",artist:"Eminem",year:2000,note:"Same Marshall Mathers LP"},{title:"The Way I Am",artist:"Eminem",year:2000,note:"Same Marshall Mathers LP"}]
      },
      { sourceSearch:"Leon Haywood I Wanna Do Something Freaky to You", answerSearch:"Dr Dre Nuthin But a G Thang",
        source:{title:"I Want'a Do Something Freaky to You",artist:"Leon Haywood",year:1975},
        answer:{title:"Nuthin' but a 'G' Thang",artist:"Dr. Dre ft. Snoop Dogg",year:1992},
        hint1:"This 1992 track introduced a Long Beach MC to the world",
        hint:"The song that launched G-funk and introduced the world to Snoop Dogg",
        genre:"G-Funk / West Coast Hip-Hop", sampleAt:0,
        siblings:[{title:"Deep Cover",artist:"Dr. Dre & Snoop Dogg",year:1992,note:"Their first collaboration"},{title:"Let Me Ride",artist:"Dr. Dre",year:1992,note:"Same The Chronic album"}]
      },
      { sourceSearch:"Dennis Edwards Don't Look Any Further", answerSearch:"Eric B Rakim Paid in Full",
        source:{title:"Don't Look Any Further",artist:"Dennis Edwards",year:1984},
        answer:{title:"Paid in Full",artist:"Eric B. & Rakim",year:1987},
        hint1:"A golden-age hip-hop title track — 'thinking of a master plan'",
        hint:"Eric B. & Rakim's title track — 'thinking of a master plan'",
        genre:"Golden Age Hip-Hop", sampleAt:30,
        siblings:[{title:"I Know You Got Soul",artist:"Eric B. & Rakim",year:1987,note:"Same album"},{title:"My Melody",artist:"Eric B. & Rakim",year:1987,note:"Same debut album"}]
      },
      { sourceSearch:"Tommy Butler Prison Song", answerSearch:"Future Mask Off",
        source:{title:"Prison Song",artist:"Tommy Butler",year:1976},
        answer:{title:"Mask Off",artist:"Future",year:2017},
        hint1:"A viral 2017 hit built around a hypnotic flute melody",
        hint:"Future's viral hit built on an unforgettable flute riff — produced by Metro Boomin",
        genre:"Trap / Hip-Hop", sampleAt:0,
        siblings:[{title:"March Madness",artist:"Future",year:2015,note:"Same trap anthem energy"},{title:"Low Life",artist:"Future ft. The Weeknd",year:2016,note:"Same EVOL era"}]
      },
      { sourceSearch:"Lauryn Hill Ex-Factor", answerSearch:"Drake Nice for What",
        source:{title:"Ex-Factor",artist:"Lauryn Hill",year:1998},
        answer:{title:"Nice for What",artist:"Drake",year:2018},
        hint1:"A bounce-influenced 2018 #1 hit celebrating women",
        hint:"Drake's empowering 2018 #1 hit — a bounce-influenced banger",
        genre:"Pop Rap / Bounce", sampleAt:0,
        siblings:[{title:"God's Plan",artist:"Drake",year:2018,note:"Same Scorpion era"},{title:"In My Feelings",artist:"Drake",year:2018,note:"Same album, same year"}]
      },
      { sourceSearch:"Beach House Silver Soul", answerSearch:"Kendrick Lamar Money Trees",
        source:{title:"Silver Soul",artist:"Beach House",year:2010},
        answer:{title:"Money Trees",artist:"Kendrick Lamar ft. Jay Rock",year:2012},
        hint1:"Features Jay Rock on a dreamy, hypnotic hip-hop track from 2012",
        hint:"A hypnotic good kid, m.A.A.d city standout — 'it go Halle Berry or hallelujah'",
        genre:"West Coast Hip-Hop", sampleAt:0,
        siblings:[{title:"Bitch, Don't Kill My Vibe",artist:"Kendrick Lamar",year:2012,note:"Same GKMC album"},{title:"m.A.A.d city",artist:"Kendrick Lamar",year:2012,note:"Same album"}]
      },
      { sourceSearch:"Doug E Fresh Slick Rick La Di Da Di", answerSearch:"Snoop Dogg Lodi Dodi",
        source:{title:"La Di Da Di",artist:"Doug E. Fresh & Slick Rick",year:1985},
        answer:{title:"Lodi Dodi",artist:"Snoop Dogg",year:1993},
        hint1:"A near bar-for-bar tribute remake on a 1993 West Coast debut album",
        hint:"Snoop's tribute remake from Doggystyle — one of hip-hop's most sampled tracks",
        genre:"West Coast Hip-Hop / G-Funk", sampleAt:0,
        siblings:[{title:"Who Am I (What's My Name)?",artist:"Snoop Dogg",year:1993,note:"Same Doggystyle album"},{title:"Children's Story",artist:"Slick Rick",year:1988,note:"Slick Rick's storytelling legacy"}]
      },
      { sourceSearch:"Otis Redding Try a Little Tenderness", answerSearch:"Kanye West Jay-Z Otis",
        source:{title:"Try a Little Tenderness",artist:"Otis Redding",year:1966},
        answer:{title:"Otis",artist:"Jay-Z & Kanye West",year:2011},
        hint1:"Named after a soul legend — from a 2011 collaborative album",
        hint:"The lead single from Watch the Throne — Jay and Kanye at their most triumphant",
        genre:"Hip-Hop / Soul", sampleAt:0,
        siblings:[{title:"N***as in Paris",artist:"Jay-Z & Kanye West",year:2011,note:"Same Watch the Throne album"},{title:"No Church in the Wild",artist:"Jay-Z & Kanye West",year:2011,note:"Same WTT album"}]
      },
    ];

    interface Sibling {
      title: string;
      artist: string;
      year: number;
      note: string;
    }
    interface Puzzle {
      sourceSearch: string;
      answerSearch: string;
      source: { title: string; artist: string; year: number };
      answer: { title: string; artist: string; year: number };
      hint1: string;
      hint: string;
      genre: string;
      sampleAt: number;
      siblings: Sibling[];
      previewOffset?: number;
    }

    const ALL_SONGS = [
      // Puzzle answers
      {title:"Hotline Bling",artist:"Drake"},
      {title:"Fight the Power",artist:"Public Enemy"},
      {title:"Rapper's Delight",artist:"The Sugarhill Gang"},
      {title:"U Can't Touch This",artist:"MC Hammer"},
      {title:"California Love",artist:"2Pac ft. Dr. Dre"},
      {title:"The World Is Yours",artist:"Nas"},
      {title:"N.Y. State of Mind",artist:"Nas"},
      {title:"Mo Money Mo Problems",artist:"The Notorious B.I.G."},
      {title:"Harder, Better, Faster, Stronger",artist:"Daft Punk"},
      {title:"Gin and Juice",artist:"Snoop Dogg"},
      {title:"The Next Episode",artist:"Dr. Dre ft. Snoop Dogg"},
      {title:"Gone",artist:"Kanye West ft. Otis Redding"},
      {title:"Poetic Justice",artist:"Kendrick Lamar"},
      {title:"Pop That",artist:"French Montana ft. Rick Ross"},
      {title:"Big Pimpin'",artist:"Jay-Z ft. UGK"},
      {title:"B.O.B. (Bombs Over Baghdad)",artist:"OutKast"},
      {title:"Gangsta's Paradise",artist:"Coolio ft. L.V."},
      {title:"Work It",artist:"Missy Elliott"},
      {title:"Blood on the Leaves",artist:"Kanye West"},
      {title:"Gold Digger",artist:"Kanye West ft. Jamie Foxx"},
      {title:"It Was a Good Day",artist:"Ice Cube"},
      {title:"Through the Wire",artist:"Kanye West"},
      {title:"Stronger",artist:"Kanye West"},
      {title:"Power",artist:"Kanye West"},
      {title:"Devil in a New Dress",artist:"Kanye West ft. Rick Ross"},
      {title:"Bound 2",artist:"Kanye West"},
      {title:"Touch the Sky",artist:"Kanye West ft. Lupe Fiasco"},
      {title:"C.R.E.A.M.",artist:"Wu-Tang Clan"},
      {title:"Shook Ones, Part II",artist:"Mobb Deep"},
      {title:"Stan",artist:"Eminem ft. Dido"},
      {title:"Nuthin' but a 'G' Thang",artist:"Dr. Dre ft. Snoop Dogg"},
      {title:"Paid in Full",artist:"Eric B. & Rakim"},
      {title:"Mask Off",artist:"Future"},
      {title:"Nice for What",artist:"Drake"},
      {title:"Money Trees",artist:"Kendrick Lamar ft. Jay Rock"},
      {title:"Lodi Dodi",artist:"Snoop Dogg"},
      {title:"Otis",artist:"Jay-Z & Kanye West"},
      {title:"Juicy",artist:"The Notorious B.I.G."},
      // Siblings (also sampled the source — near-miss targets)
      {title:"Another One Bites the Dust",artist:"Queen"},
      {title:"Jump to It",artist:"Aretha Franklin"},
      {title:"Give It to Me Baby",artist:"Rick James"},
      {title:"Pray",artist:"MC Hammer"},
      {title:"Skeletons",artist:"Stevie Wonder"},
      {title:"I Wish",artist:"Stevie Wonder"},
      {title:"Upside Down",artist:"Diana Ross"},
      {title:"Hypnotize",artist:"The Notorious B.I.G."},
      {title:"Let's Get It On",artist:"Marvin Gaye"},
      {title:"All Eyez on Me",artist:"2Pac"},
      {title:"So Fresh, So Clean",artist:"OutKast"},
      {title:"Human Nature",artist:"Michael Jackson"},
      {title:"One Minute Man",artist:"Missy Elliott"},
      {title:"In the Air Tonight",artist:"Phil Collins"},
      {title:"Ain't No Half Steppin'",artist:"Big Daddy Kane"},
      {title:"The Message",artist:"Grandmaster Flash"},
      {title:"Soul Power",artist:"James Brown"},
      {title:"Between the Sheets",artist:"The Isley Brothers"},
      {title:"One More Chance",artist:"The Notorious B.I.G."},
      {title:"Survival of the Fittest",artist:"Mobb Deep"},
      {title:"Shook Ones, Part I",artist:"Mobb Deep"},
      {title:"The Real Slim Shady",artist:"Eminem"},
      {title:"The Way I Am",artist:"Eminem"},
      {title:"Let Me Ride",artist:"Dr. Dre"},
      {title:"I Know You Got Soul",artist:"Eric B. & Rakim"},
      {title:"My Melody",artist:"Eric B. & Rakim"},
      {title:"Low Life",artist:"Future ft. The Weeknd"},
      {title:"Who Am I (What's My Name)?",artist:"Snoop Dogg"},
      {title:"Children's Story",artist:"Slick Rick"},
      {title:"No Church in the Wild",artist:"Jay-Z & Kanye West"},
      {title:"Method Man",artist:"Wu-Tang Clan"},
      {title:"Straight Outta Compton",artist:"N.W.A"},
      {title:"Good Morning",artist:"Kanye West"},
      {title:"Can't Tell Me Nothing",artist:"Kanye West"},
      {title:"On Sight",artist:"Kanye West"},
      {title:"Diamonds from Sierra Leone",artist:"Kanye West"},
      {title:"Drive Slow",artist:"Kanye West"},
      // Popular hip-hop — classic
      {title:"Lose Yourself",artist:"Eminem"},
      {title:"HUMBLE.",artist:"Kendrick Lamar"},
      {title:"99 Problems",artist:"Jay-Z"},
      {title:"In Da Club",artist:"50 Cent"},
      {title:"Ms. Jackson",artist:"OutKast"},
      {title:"No Role Modelz",artist:"J. Cole"},
      {title:"Alright",artist:"Kendrick Lamar"},
      {title:"Empire State of Mind",artist:"Jay-Z"},
      {title:"Hard Knock Life",artist:"Jay-Z"},
      {title:"H to the Izzo",artist:"Jay-Z"},
      {title:"New Slaves",artist:"Kanye West"},
      {title:"Heard 'Em Say",artist:"Kanye West"},
      {title:"Get Ur Freak On",artist:"Missy Elliott"},
      {title:"Forgot About Dre",artist:"Dr. Dre"},
      {title:"Still D.R.E.",artist:"Dr. Dre"},
      {title:"Nuthin' But a G Thang",artist:"Dr. Dre"},
      {title:"Around the World",artist:"Daft Punk"},
      {title:"Runaway",artist:"Kanye West"},
      {title:"All of the Lights",artist:"Kanye West"},
      {title:"Black Skinhead",artist:"Kanye West"},
      {title:"Jesus Walks",artist:"Kanye West"},
      {title:"All Falls Down",artist:"Kanye West"},
      {title:"Protect Ya Neck",artist:"Wu-Tang Clan"},
      {title:"Big Poppa",artist:"The Notorious B.I.G."},
      {title:"Deep Cover",artist:"Dr. Dre & Snoop Dogg"},
      {title:"Monster",artist:"Kanye West"},
      {title:"Gorgeous",artist:"Kanye West"},
      {title:"Swimming Pools",artist:"Kendrick Lamar"},
      {title:"March Madness",artist:"Future"},
      {title:"In My Feelings",artist:"Drake"},
      {title:"Bitch, Don't Kill My Vibe",artist:"Kendrick Lamar"},
      {title:"Regulate",artist:"Warren G ft. Nate Dogg"},
      {title:"Jump Around",artist:"House of Pain"},
      {title:"Hypnotize",artist:"The Notorious B.I.G."},
      {title:"Drop It Like It's Hot",artist:"Snoop Dogg"},
      {title:"Changes",artist:"2Pac"},
      {title:"Dear Mama",artist:"2Pac"},
      {title:"Hit 'Em Up",artist:"2Pac"},
      {title:"Electric Relaxation",artist:"A Tribe Called Quest"},
      {title:"Can I Kick It?",artist:"A Tribe Called Quest"},
      {title:"Scenario",artist:"A Tribe Called Quest"},
      {title:"Passin' Me By",artist:"The Pharcyde"},
      {title:"Rebirth of Slick",artist:"Digable Planets"},
      {title:"93 'til Infinity",artist:"Souls of Mischief"},
      {title:"Mass Appeal",artist:"Gang Starr"},
      {title:"Planet Rock",artist:"Afrika Bambaataa"},
      {title:"Express Yourself",artist:"N.W.A"},
      {title:"It Takes Two",artist:"Rob Base & DJ E-Z Rock"},
      {title:"Ruff Ryders' Anthem",artist:"DMX"},
      {title:"Da Rockwilder",artist:"Method Man & Redman"},
      {title:"Shimmy Shimmy Ya",artist:"Ol' Dirty Bastard"},
      // Popular hip-hop — modern
      {title:"Sicko Mode",artist:"Travis Scott"},
      {title:"God's Plan",artist:"Drake"},
      {title:"Old Town Road",artist:"Lil Nas X"},
      {title:"Formation",artist:"Beyoncé"},
      {title:"DNA.",artist:"Kendrick Lamar"},
      {title:"King Kunta",artist:"Kendrick Lamar"},
      {title:"LOYALTY.",artist:"Kendrick Lamar"},
      {title:"Backseat Freestyle",artist:"Kendrick Lamar"},
      {title:"m.A.A.d city",artist:"Kendrick Lamar"},
      {title:"Started From the Bottom",artist:"Drake"},
      {title:"Headlines",artist:"Drake"},
      {title:"Take Care",artist:"Drake ft. Rihanna"},
      {title:"Marvins Room",artist:"Drake"},
      {title:"One Dance",artist:"Drake"},
      {title:"Passionfruit",artist:"Drake"},
      {title:"Nonstop",artist:"Drake"},
      {title:"Life Is Good",artist:"Future ft. Drake"},
      {title:"Panda",artist:"Desiigner"},
      {title:"Bad and Boujee",artist:"Migos"},
      {title:"XO Tour Llif3",artist:"Lil Uzi Vert"},
      {title:"Congratulations",artist:"Post Malone"},
      {title:"Rockstar",artist:"Post Malone"},
      {title:"Bodak Yellow",artist:"Cardi B"},
      {title:"Mo Bamba",artist:"Sheck Wes"},
      {title:"Middle Child",artist:"J. Cole"},
      {title:"Wet Dreamz",artist:"J. Cole"},
      {title:"A Lot",artist:"21 Savage"},
      {title:"Bank Account",artist:"21 Savage"},
      {title:"Savage",artist:"Megan Thee Stallion"},
      {title:"Industry Baby",artist:"Lil Nas X"},
      {title:"Sunflower",artist:"Post Malone & Swae Lee"},
      {title:"Lucid Dreams",artist:"Juice WRLD"},
      {title:"SAD!",artist:"XXXTENTACION"},
      {title:"Goosebumps",artist:"Travis Scott"},
      {title:"HIGHEST IN THE ROOM",artist:"Travis Scott"},
      {title:"Praise the Lord",artist:"A$AP Rocky"},
      {title:"L$D",artist:"A$AP Rocky"},
      {title:"Magnolia",artist:"Playboi Carti"},
      {title:"Pick Up the Phone",artist:"Young Thug"},
      // R&B / Pop / Electronic
      {title:"Blinding Lights",artist:"The Weeknd"},
      {title:"Save Your Tears",artist:"The Weeknd"},
      {title:"Starboy",artist:"The Weeknd"},
      {title:"Can't Feel My Face",artist:"The Weeknd"},
      {title:"Redbone",artist:"Childish Gambino"},
      {title:"This Is America",artist:"Childish Gambino"},
      {title:"Crazy in Love",artist:"Beyoncé"},
      {title:"Drunk in Love",artist:"Beyoncé"},
      {title:"Try Again",artist:"Aaliyah"},
      {title:"Love Lockdown",artist:"Kanye West"},
      {title:"Heartless",artist:"Kanye West"},
      {title:"Flashing Lights",artist:"Kanye West"},
      {title:"Ultralight Beam",artist:"Kanye West"},
      {title:"Father Stretch My Hands",artist:"Kanye West"},
      {title:"Ghost Town",artist:"Kanye West"},
      {title:"Fade",artist:"Kanye West"},
      {title:"Good Life",artist:"Kanye West"},
      {title:"Roses",artist:"Kanye West"},
      {title:"Spaceship",artist:"Kanye West"},
      {title:"Family Business",artist:"Kanye West"},
      // Sample-based classics & misc
      {title:"Juicy Fruit",artist:"Mtume"},
      {title:"La Di Da Di",artist:"Doug E. Fresh & Slick Rick"},
      {title:"Apache",artist:"Incredible Bongo Band"},
      {title:"Impeach the President",artist:"The Honey Drippers"},
      {title:"Think (About It)",artist:"Lyn Collins"},
      {title:"Funky Drummer",artist:"James Brown"},
      {title:"Amen, Brother",artist:"The Winstons"},
      {title:"Good Times",artist:"Chic"},
      {title:"I Got a Woman",artist:"Ray Charles"},
      {title:"Walk This Way",artist:"Run-D.M.C."},
      {title:"Peter Piper",artist:"Run-D.M.C."},
      {title:"Hey Ya!",artist:"OutKast"},
      {title:"Rosa Parks",artist:"OutKast"},
      {title:"Aquemini",artist:"OutKast"},
      {title:"SpottieOttieDopaliscious",artist:"OutKast"},
      {title:"Return of the Mack",artist:"Mark Morrison"},
      {title:"No Diggity",artist:"Blackstreet"},
      {title:"Doo Wop (That Thing)",artist:"Lauryn Hill"},
      {title:"Everything Is Everything",artist:"Lauryn Hill"},
      {title:"Killing Me Softly",artist:"Fugees"},
      {title:"Ready or Not",artist:"Fugees"},
      {title:"If I Ruled the World",artist:"Nas"},
      {title:"One Mic",artist:"Nas"},
      {title:"It Ain't Hard to Tell",artist:"Nas"},
      {title:"Ether",artist:"Nas"},
      {title:"Izzo (H.O.V.A.)",artist:"Jay-Z"},
      {title:"Dirt Off Your Shoulder",artist:"Jay-Z"},
      {title:"Encore",artist:"Jay-Z"},
      {title:"Run This Town",artist:"Jay-Z"},
      {title:"Triumph",artist:"Wu-Tang Clan"},
      {title:"Gravel Pit",artist:"Wu-Tang Clan"},
      {title:"Wu-Tang Clan Ain't Nuthing ta F' Wit",artist:"Wu-Tang Clan"},
      {title:"Without Me",artist:"Eminem"},
      {title:"My Name Is",artist:"Eminem"},
      {title:"Rap God",artist:"Eminem"},
      {title:"Cleanin' Out My Closet",artist:"Eminem"},
      {title:"Many Men",artist:"50 Cent"},
      {title:"P.I.M.P.",artist:"50 Cent"},
      {title:"Candy Shop",artist:"50 Cent"},
      {title:"International Players Anthem",artist:"UGK"},
      {title:"Mind Playing Tricks on Me",artist:"Geto Boys"},
      {title:"Ridin'",artist:"Chamillionaire"},
      {title:"Ante Up",artist:"M.O.P."},
      {title:"Put It On",artist:"Big L"},
      {title:"Ambitionz Az a Ridah",artist:"2Pac"},
      {title:"I Get Around",artist:"2Pac"},
      {title:"Who Shot Ya?",artist:"The Notorious B.I.G."},
      {title:"Ten Crack Commandments",artist:"The Notorious B.I.G."},
      {title:"Warning",artist:"The Notorious B.I.G."},
      {title:"Sky's the Limit",artist:"The Notorious B.I.G."},
    ];

    const FREQS = [
      0.4, 0.6, 0.9, 0.7, 0.5, 0.8, 1.0, 0.6, 0.4, 0.7, 0.9, 0.5, 0.3, 0.6, 0.8,
      0.7, 0.5, 0.4, 0.9, 1.0, 0.6, 0.5, 0.7, 0.8, 0.5, 0.7, 0.9, 0.6, 0.8, 1.0,
    ];

    /* ── mutable state ── */
    let spotifyToken: string | null = null;
    let puzzle: Puzzle;
    let dayIndex = 0;
    let sourcePreviewUrl: string | null = null;
    let answerPreviewUrl: string | null = null;
    let sourceArtUrl: string | null = null;
    let answerArtUrl: string | null = null;
    let previewSource: "itunes" | "deezer" | "spotify" | null = null;
    let audio: HTMLAudioElement | null = null;
    let animFrame: number | null = null;
    let siblingPreviews: Record<number, string> = {};

    let state = {
      guesses: [] as {
        title: string;
        artist: string;
        correct: boolean;
        skipped: boolean;
        label?: string;
        nearMiss?: boolean;
      }[],
      input: "",
      suggestions: [] as { title: string; artist: string }[],
      gameOver: false,
      won: false,
      playsLeft: 3,
      isPlaying: false,
      activeBar: -1,
      loaded: false,
      hint1Used: false,
      hintUsed: false,
      genreUsed: false,
      siblingsUsed: false,
    };

    function countUsedGuesses() {
      return state.guesses.filter((g) => !g.nearMiss).length;
    }

    const DIFFICULTY_TIERS = [
      [0, 1, 2],
      [3, 4],
      [5, 6, 7],
      [8, 9, 10],
      [11, 12, 13],
      [14, 15, 16],
      [17, 18],
    ];

    function getDayDifficulty() {
      return (new Date().getDay() + 1) % 7;
    }

    function getDayIndex() {
      const tier = DIFFICULTY_TIERS[getDayDifficulty()];
      const epoch = new Date("2026-04-18T00:00:00Z");
      const weekNum = Math.floor(
        (Date.now() - epoch.getTime()) / (1000 * 60 * 60 * 24 * 7),
      );
      return tier[((weekNum % tier.length) + tier.length) % tier.length];
    }

    function getTodayKey() {
      const d = new Date();
      return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    }

    function loadSavedState() {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (!saved) return false;
        const data = JSON.parse(saved);
        if (data.dateKey !== getTodayKey()) return false;
        state.guesses = data.guesses || [];
        state.gameOver = data.gameOver || false;
        state.won = data.won || false;
        state.playsLeft = data.playsLeft !== undefined ? data.playsLeft : 3;
        state.hint1Used = data.hint1Used || false;
        state.hintUsed = data.hintUsed || false;
        state.genreUsed = data.genreUsed || false;
        state.siblingsUsed = data.siblingsUsed || false;
        return true;
      } catch {
        return false;
      }
    }

    function saveState() {
      try {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            dateKey: getTodayKey(),
            guesses: state.guesses,
            gameOver: state.gameOver,
            won: state.won,
            playsLeft: state.playsLeft,
            hint1Used: state.hint1Used,
            hintUsed: state.hintUsed,
            genreUsed: state.genreUsed,
            siblingsUsed: state.siblingsUsed,
          }),
        );
      } catch {}
    }

    function loadStreak() {
      try {
        const s = localStorage.getItem("sampledle_streak");
        return s ? JSON.parse(s) : { count: 0, lastWonKey: null };
      } catch {
        return { count: 0, lastWonKey: null };
      }
    }

    function updateStreak(won: boolean) {
      try {
        const streak = loadStreak();
        const todayKey = getTodayKey();
        const d = new Date();
        d.setDate(d.getDate() - 1);
        const yesterdayKey = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
        if (won) {
          if (streak.lastWonKey === yesterdayKey) {
            streak.count++;
          } else if (streak.lastWonKey !== todayKey) {
            streak.count = 1;
          }
          streak.lastWonKey = todayKey;
        } else {
          if (streak.lastWonKey !== todayKey) {
            streak.count = 0;
          }
        }
        localStorage.setItem("sampledle_streak", JSON.stringify(streak));
        return streak;
      } catch {
        return { count: 0 };
      }
    }

    function renderStreak() {
      const streak = loadStreak();
      const el = document.getElementById("streak-display");
      if (!el) return;
      if (streak.count > 1) el.textContent = `🔥 ${streak.count} day streak`;
      else if (streak.count === 1) el.textContent = "🎵 On a streak";
      else el.textContent = "";
    }

    async function getSpotifyToken() {
      const r = await fetch("/api/spotify-token", { method: "POST" });
      const d = await r.json();
      return d.access_token as string;
    }

    async function searchTrack(query: string, token: string) {
      const r = await fetch(
        "https://api.spotify.com/v1/search?q=" +
          encodeURIComponent(query) +
          "&type=track&limit=3",
        {
          headers: { Authorization: "Bearer " + token },
        },
      );
      const d = await r.json();
      const track = d.tracks?.items?.[0];
      if (!track) return { preview: null, art: null };
      return {
        preview: track.preview_url || null,
        art:
          track.album?.images?.[1]?.url ||
          track.album?.images?.[0]?.url ||
          null,
      };
    }

    type PreviewResult = { url: string; source: "itunes" | "deezer" } | null;

    async function searchPreview(query: string): Promise<PreviewResult> {
      const strategies: (() => Promise<PreviewResult>)[] = [
        async () => {
          const r = await fetch(
            "https://itunes.apple.com/search?term=" +
              encodeURIComponent(query) +
              "&media=music&limit=5",
          );
          const d = await r.json();
          const t =
            d.results?.find((t: { previewUrl?: string }) => t.previewUrl) ||
            d.results?.[0];
          return t?.previewUrl
            ? { url: t.previewUrl, source: "itunes" as const }
            : null;
        },
        async () => {
          const r = await fetch(
            "https://api.deezer.com/search?q=" +
              encodeURIComponent(query) +
              "&limit=5",
          );
          const d = await r.json();
          const url = d.data?.find(
            (t: { preview?: string }) => t.preview,
          )?.preview;
          return url ? { url, source: "deezer" as const } : null;
        },
        async () => {
          const deezerUrl =
            "https://api.deezer.com/search?q=" +
            encodeURIComponent(query) +
            "&limit=5";
          const r = await fetch(
            "https://corsproxy.io/?" + encodeURIComponent(deezerUrl),
          );
          const d = await r.json();
          const url = d.data?.find(
            (t: { preview?: string }) => t.preview,
          )?.preview;
          return url ? { url, source: "deezer" as const } : null;
        },
      ];

      for (const tryFetch of strategies) {
        try {
          const result = await tryFetch();
          if (result) return result;
        } catch {}
      }
      return null;
    }

    async function loadPuzzleMedia() {
      const safeSpotify = async (q: string) => {
        try {
          return await searchTrack(q, spotifyToken!);
        } catch {
          return { preview: null, art: null };
        }
      };

      const [srcSpotify, ansSpotify, srcResult, ansResult] = await Promise.all([
        spotifyToken
          ? safeSpotify(puzzle.sourceSearch)
          : Promise.resolve({ preview: null, art: null }),
        spotifyToken
          ? safeSpotify(puzzle.answerSearch)
          : Promise.resolve({ preview: null, art: null }),
        searchPreview(puzzle.sourceSearch),
        searchPreview(puzzle.answerSearch),
      ]);

      sourceArtUrl = srcSpotify.art;
      answerArtUrl = ansSpotify.art;

      if (srcResult) {
        sourcePreviewUrl = srcResult.url;
        previewSource = srcResult.source;
      } else if (srcSpotify.preview) {
        sourcePreviewUrl = srcSpotify.preview;
        previewSource = "spotify";
      } else {
        sourcePreviewUrl = null;
        previewSource = null;
      }
      answerPreviewUrl = ansResult?.url || ansSpotify.preview || null;

      if (!sourcePreviewUrl && state.guesses.length === 0) state.playsLeft = 0;
      if (
        sourcePreviewUrl &&
        state.playsLeft <= 0 &&
        state.guesses.length === 0
      )
        state.playsLeft = 3;
      render();
    }

    async function init() {
      dayIndex = getDayIndex();
      puzzle = PUZZLES[dayIndex];
      renderStreak();

      try {
        spotifyToken = await getSpotifyToken();
      } catch {
        spotifyToken = null;
      }

      const diffLabels = [
        "Saturday Starter",
        "Sunday Groove",
        "Monday Mix",
        "Tuesday Track",
        "Midweek Dig",
        "Thursday Deep Cut",
        "Friday Challenge",
      ];
      const badge = document.getElementById("day-badge");
      if (badge) badge.textContent = diffLabels[getDayDifficulty()];
      loadSavedState();
      state.loaded = true;
      render();
      await loadPuzzleMedia();
    }

    function render() {
      const gameArea = document.getElementById("game-area");
      if (gameArea)
        gameArea.innerHTML = state.gameOver ? buildResult() : buildGame();
      attachEvents();
    }

    function buildGame() {
      if (!state.loaded)
        return `<div style="text-align:center;padding:3rem;color:var(--text2)">Loading...</div>`;

      const bars = FREQS.map(
        (h, i) =>
          `<div class="bar ${state.isPlaying && i === state.activeBar ? "active" : ""}" style="height:${Math.round(h * 100)}%"></div>`,
      ).join("");

      const artHTML = sourceArtUrl
        ? `<img class="album-art" src="${sourceArtUrl}" alt="album art"/>`
        : `<div class="album-art-ph">♪</div>`;

      const playDisabled = state.playsLeft <= 0 && !state.isPlaying;
      const playIcon = state.isPlaying ? "◼" : "▶";

      let rows = "";
      for (let i = 0; i < state.guesses.length; i++) {
        const g = state.guesses[i];
        if (g.skipped) {
          rows += `<div class="guess-row"><div class="guess-tile skipped">— ${g.label || "skipped"} —</div></div>`;
        } else if (g.nearMiss) {
          rows += `<div class="guess-row"><div class="guess-tile near-miss">"${g.title}" <span style="font-weight:400;opacity:.8">— also samples this! ✓</span></div></div>`;
        } else {
          const cls = g.correct ? "correct" : "wrong";
          rows += `<div class="guess-row"><div class="guess-tile ${cls}">"${g.title}" <span style="font-weight:400;opacity:.8">— ${g.artist}</span></div></div>`;
        }
      }

      const genreHTML = state.genreUsed
        ? `<div class="hint-box">Genre: ${puzzle.genre}</div>`
        : "";

      const hint1HTML = state.hint1Used
        ? `<div class="hint-box">${puzzle.hint1}</div>`
        : "";

      const hintHTML = state.hintUsed
        ? `<div class="hint-box">${puzzle.hint}</div>`
        : "";

      const siblings = puzzle.siblings || [];
      const siblingsHTML =
        state.siblingsUsed && siblings.length > 0
          ? `<div class="siblings-panel">
            <div class="siblings-label">Also sampled "${puzzle.source.title}"</div>
            ${siblings
              .map(
                (s, i) => `
              <div class="sibling-card">
                <div class="sibling-info">
                  <div class="s-title">"${s.title}"</div>
                  <div class="s-artist">${s.artist} · ${s.year}</div>
                  ${s.note ? `<div class="s-note">${s.note}</div>` : ""}
                </div>
                <button class="sib-play-btn" data-sib-idx="${i}" title="Preview">▶</button>
              </div>`,
              )
              .join("")}
          </div>`
          : "";

      const suggHTML =
        state.suggestions.length > 0
          ? `<div class="suggestions">${state.suggestions
              .map(
                (s) =>
                  `<div class="sugg-item" data-title="${s.title.replace(/"/g, "&quot;")}" data-artist="${s.artist.replace(/"/g, "&quot;")}">
              <span>${s.title}</span>
              <span class="sugg-artist">${s.artist}</span>
            </div>`,
              )
              .join("")}</div>`
          : "";

      const used = countUsedGuesses();
      const canGuess = used < MAX_GUESSES;
      const gNum = used + 1;

      return `
        <div class="player-card">
          <div class="source-label">Original sample — what song flipped this?</div>
          <div class="album-row">
            ${artHTML}
            <div class="album-info">
              <div class="source-song">"${puzzle.source.title}"</div>
              <div class="source-artist">${puzzle.source.artist}</div>
              <div class="source-year">${puzzle.source.year}</div>
            </div>
          </div>
          <div class="waveform" id="waveform">${bars}</div>
          <div class="controls">
            <button class="play-btn" id="play-btn" ${playDisabled ? "disabled" : ""}>
              ${playIcon}
            </button>
            <div class="plays-info">
              <div class="plays-left">${sourcePreviewUrl ? state.playsLeft + " listen" + (state.playsLeft === 1 ? "" : "s") + " remaining" : "Preview unavailable"}</div>
              ${!sourcePreviewUrl ? `<div class="no-preview">No audio preview found for this track</div>` : ""}
            </div>
          </div>
          ${
            sourcePreviewUrl && previewSource
              ? `<div class="preview-note"><div class="preview-dot"></div>${
                  previewSource === "itunes"
                    ? "Preview via Apple Music"
                    : previewSource === "deezer"
                      ? "Preview via Deezer"
                      : "Preview via Spotify"
                }</div>`
              : ""
          }
        </div>
        <div class="guess-section">
          ${rows ? `<div class="guess-history">${rows}</div>` : ""}
          ${
            canGuess
              ? `
            ${genreHTML}
            ${hint1HTML}
            ${hintHTML}
            ${siblingsHTML}
            <div class="input-area">
              <div class="guesses-remaining">${MAX_GUESSES - used} guess${MAX_GUESSES - used === 1 ? "" : "es"} remaining</div>
              <div class="input-wrap">
                <input class="song-input" id="song-input" type="text" placeholder="Type a song name..." value="${state.input.replace(/"/g, "&quot;")}" autocomplete="off" enterkeyhint="go"/>
              </div>
              ${suggHTML}
              <div class="btn-row">
              <button class="btn primary" id="guess-btn">Guess #${gNum}</button>
              ${!state.genreUsed ? `<button class="btn skip" id="genre-btn">Genre</button>` : ""}
              ${!state.hint1Used ? `<button class="btn skip" id="hint1-btn">Hint</button>` : !state.hintUsed ? `<button class="btn skip" id="hint-btn">Hint 2</button>` : ""}
              ${!state.siblingsUsed ? `<button class="btn skip" id="siblings-btn">Related</button>` : ""}
              </div>
            </div>
          `
              : ""
          }
        </div>`;
    }

    function buildResult() {
      const numG = state.won
        ? state.guesses.filter((g) => !g.nearMiss).findIndex((g) => g.correct) + 1
        : null;
      const resultIcons: Record<number, string> = {
        1: "🎯",
        2: "🔥",
        3: "🎵",
        4: "🎧",
        5: "👀",
        6: "😅",
      };
      const icon = state.won ? resultIcons[numG!] || "✓" : "😔";
      const title = state.won ? "You got it!" : "Not today!";
      const sub = state.won
        ? `Identified in ${numG} guess${numG === 1 ? "" : "es"}`
        : `The answer was "${puzzle.answer.title}"`;

      const realGuesses = state.guesses.filter((g) => !g.nearMiss);
      const dots = realGuesses
        .map((g) =>
          g.correct
            ? `<div class="dot correct"></div>`
            : g.skipped
              ? `<div class="dot skipped"></div>`
              : `<div class="dot wrong"></div>`,
        )
        .join("");
      const nearMissDots = state.guesses
        .filter((g) => g.nearMiss)
        .map(() => `<div class="dot near-miss"></div>`)
        .join("");
      const unused = Array(MAX_GUESSES - realGuesses.length)
        .fill(`<div class="dot unused"></div>`)
        .join("");

      const srcArt = sourceArtUrl
        ? `<img class="answer-art" src="${sourceArtUrl}" alt=""/>`
        : `<div class="answer-art-ph">♪</div>`;
      const ansArt = answerArtUrl
        ? `<img class="answer-art" src="${answerArtUrl}" alt=""/>`
        : `<div class="answer-art-ph">♫</div>`;

      const siblings = puzzle.siblings || [];
      const sibNodes = siblings
        .map(
          (s) => `
        <div class="tree-node">
          <div class="t-title">"${s.title}"</div>
          <div class="t-sub">${s.artist}</div>
          <div class="t-year">${s.year}</div>
          <div class="t-note">${s.note}</div>
        </div>`,
        )
        .join("");

      return `
        <div class="result-wrap">
          <div class="result-top">
            <div class="result-icon">${icon}</div>
            <div class="result-title">${title}</div>
            <div class="result-sub">${sub}</div>
            <div class="dots-row">${dots}${unused}${nearMissDots ? `<span class="near-miss-dots">${nearMissDots}</span>` : ""}</div>
          </div>
          <div class="answer-flow">
            <div class="answer-card">
              ${srcArt}
              <div class="answer-info">
                <div class="label">Sampled from</div>
                <div class="song">"${puzzle.source.title}"</div>
                <div class="artist">${puzzle.source.artist} · ${puzzle.source.year}</div>
              </div>
              ${sourcePreviewUrl ? `<button class="card-play-btn" id="play-source" title="Play source">▶</button>` : ""}
            </div>
            <div class="flow-arrow">↓</div>
            <div class="answer-card">
              ${ansArt}
              <div class="answer-info">
                <div class="label">Sampled in</div>
                <div class="song">"${puzzle.answer.title}"</div>
                <div class="artist">${puzzle.answer.artist} · ${puzzle.answer.year}</div>
              </div>
              ${answerPreviewUrl ? `<button class="card-play-btn" id="play-answer" title="Play answer">▶</button>` : ""}
            </div>
          </div>
          <div class="tree-section">
            <div class="tree-label">Sample family tree</div>
            <div class="tree-source">
              <div class="t-title">"${puzzle.source.title}"</div>
              <div class="t-sub">${puzzle.source.artist}, ${puzzle.source.year}</div>
              <div class="t-year">original source</div>
            </div>
            <div class="tree-connector"></div>
            <div class="tree-arrow-lbl">sampled by</div>
            <div class="tree-connector"></div>
            <div class="tree-branches">
              ${sibNodes}
              <div class="tree-node answer-node">
                <div class="t-title">"${puzzle.answer.title}"</div>
                <div class="t-sub">${puzzle.answer.artist}</div>
                <div class="t-year">${puzzle.answer.year}</div>
                <div class="t-note">today's answer ✓</div>
              </div>
            </div>
          </div>
          <div class="share-row">
            <button class="share-btn" id="share-btn">Copy result</button>
            <button class="share-btn" id="replay-btn">Replay</button>
          </div>
        </div>`;
    }

    function buildShareText() {
      const realGuesses = state.guesses.filter((g) => !g.nearMiss);
      const n = state.won
        ? realGuesses.findIndex((g) => g.correct) + 1
        : "X";
      const icons = realGuesses
        .map((g) => (g.correct ? "🟩" : g.skipped ? "⬜" : "🟥"))
        .join("");
      const nearMissCount = state.guesses.filter((g) => g.nearMiss).length;
      const nearMissIcons = nearMissCount > 0 ? " " + "🟨".repeat(nearMissCount) : "";
      const unused = Array(MAX_GUESSES - realGuesses.length)
        .fill("⬛")
        .join("");
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return `Sampledle (${days[new Date().getDay()]})\n"${puzzle.source.title}" → ?\n${icons}${unused}${nearMissIcons}\n${n}/${MAX_GUESSES}\nPlay at: ${window.location.href}`;
    }

    function attachEvents() {
      const pb = document.getElementById("play-btn");
      if (pb) pb.onclick = handlePlay;

      const inp = document.getElementById(
        "song-input",
      ) as HTMLInputElement | null;
      if (inp) {
        if (!state.gameOver) {
          inp.focus({ preventScroll: true });
          setTimeout(
            () => inp.scrollIntoView({ behavior: "smooth", block: "center" }),
            350,
          );
        }
        inp.onfocus = () => {
          setTimeout(
            () => inp.scrollIntoView({ behavior: "smooth", block: "center" }),
            350,
          );
        };
        inp.oninput = () => {
          state.input = inp.value;
          state.suggestions =
            state.input.length > 1
              ? ALL_SONGS.filter(
                  (s) =>
                    s.title.toLowerCase().includes(state.input.toLowerCase()) ||
                    s.artist.toLowerCase().includes(state.input.toLowerCase()),
                ).slice(0, 8)
              : [];
          render();
          const ni = document.getElementById(
            "song-input",
          ) as HTMLInputElement | null;
          if (ni) {
            ni.focus({ preventScroll: true });
            ni.setSelectionRange(ni.value.length, ni.value.length);
          }
        };
        inp.onkeydown = (e) => {
          if (e.key === "Enter") submitGuess();
        };
      }

      document.querySelectorAll(".sugg-item").forEach((el) => {
        (el as HTMLElement).onclick = () => {
          state.input = (el as HTMLElement).dataset.title || "";
          state.suggestions = [];
          render();
        };
      });

      const gb = document.getElementById("guess-btn");
      if (gb) gb.onclick = submitGuess;

      const gnb = document.getElementById("genre-btn");
      if (gnb)
        gnb.onclick = () => {
          state.genreUsed = true;
          state.guesses.push({
            title: "",
            artist: "",
            correct: false,
            skipped: true,
            label: "used genre",
          });
          if (countUsedGuesses() >= MAX_GUESSES) {
            state.gameOver = true;
            state.won = false;
            updateStreak(false);
          }
          saveState();
          render();
        };

      const h1b = document.getElementById("hint1-btn");
      if (h1b)
        h1b.onclick = () => {
          state.hint1Used = true;
          state.guesses.push({
            title: "",
            artist: "",
            correct: false,
            skipped: true,
            label: "used hint 1",
          });
          if (countUsedGuesses() >= MAX_GUESSES) {
            state.gameOver = true;
            state.won = false;
            updateStreak(false);
          }
          saveState();
          render();
        };

      const hb = document.getElementById("hint-btn");
      if (hb)
        hb.onclick = () => {
          state.hintUsed = true;
          state.guesses.push({
            title: "",
            artist: "",
            correct: false,
            skipped: true,
            label: "used hint 2",
          });
          if (countUsedGuesses() >= MAX_GUESSES) {
            state.gameOver = true;
            state.won = false;
            updateStreak(false);
          }
          saveState();
          render();
        };

      const sibBtn = document.getElementById("siblings-btn");
      if (sibBtn)
        sibBtn.onclick = () => {
          state.siblingsUsed = true;
          state.guesses.push({
            title: "",
            artist: "",
            correct: false,
            skipped: true,
            label: "used related",
          });
          if (countUsedGuesses() >= MAX_GUESSES) {
            state.gameOver = true;
            state.won = false;
            updateStreak(false);
          }
          const siblings = puzzle.siblings || [];
          siblings.forEach((s, i) => {
            if (!siblingPreviews[i]) {
              searchPreview(s.title + " " + s.artist).then((r) => {
                if (r) siblingPreviews[i] = r.url;
              });
            }
          });
          saveState();
          render();
        };

      document.querySelectorAll(".sib-play-btn").forEach((btn) => {
        (btn as HTMLElement).onclick = () => {
          const idx = parseInt((btn as HTMLElement).dataset.sibIdx || "0");
          const s = puzzle.siblings[idx];
          const url = siblingPreviews[idx];
          if (!url) {
            searchPreview(s.title + " " + s.artist).then((r) => {
              if (r) {
                siblingPreviews[idx] = r.url;
                playResultPreview(r.url, (btn as HTMLElement).id || "sib-" + idx);
              }
            });
            return;
          }
          playResultPreview(url, (btn as HTMLElement).id || "sib-" + idx);
        };
      });

      const shr = document.getElementById("share-btn");
      if (shr)
        shr.onclick = () => {
          navigator.clipboard.writeText(buildShareText()).then(() => {
            shr.textContent = "Copied! ✓";
            setTimeout(() => {
              const el = document.getElementById("share-btn");
              if (el) el.textContent = "Copy result";
            }, 2000);
          });
        };

      const rep = document.getElementById("replay-btn");
      if (rep)
        rep.onclick = () => {
          if (audio && !audio.paused) {
            audio.pause();
            audio.currentTime = 0;
          }
          siblingPreviews = {};
          state = {
            guesses: [],
            input: "",
            suggestions: [],
            gameOver: false,
            won: false,
            playsLeft: 3,
            isPlaying: false,
            activeBar: -1,
            loaded: true,
            hint1Used: false,
            hintUsed: false,
            genreUsed: false,
            siblingsUsed: false,
          };
          saveState();
          render();
        };

      const playSrc = document.getElementById("play-source");
      if (playSrc)
        playSrc.onclick = () =>
          playResultPreview(sourcePreviewUrl!, "play-source");

      const playAns = document.getElementById("play-answer");
      if (playAns)
        playAns.onclick = () =>
          playResultPreview(answerPreviewUrl!, "play-answer");
    }

    function handlePlay() {
      if (audio && state.isPlaying) {
        audio.pause();
        audio.currentTime = 0;
        state.isPlaying = false;
        state.activeBar = -1;
        if (animFrame) cancelAnimationFrame(animFrame);
        render();
        return;
      }
      if (state.playsLeft <= 0) return;

      state.playsLeft--;
      saveState();

      if (sourcePreviewUrl) {
        if (!audio) {
          audio = new Audio();
          audio.crossOrigin = "anonymous";
        }
        audio.src = sourcePreviewUrl;
        const offset = puzzle.previewOffset || 0;
        const startPlayback = () => {
          if (offset > 0) audio!.currentTime = offset;
          audio!
            .play()
            .then(() => {
              state.isPlaying = true;
              animateWave();
              audio!.onended = () => {
                state.isPlaying = false;
                state.activeBar = -1;
                if (animFrame) cancelAnimationFrame(animFrame);
                render();
              };
            })
            .catch(() => fallbackAnimate());
        };
        if (audio.readyState >= 1) startPlayback();
        else
          audio.addEventListener("loadedmetadata", startPlayback, {
            once: true,
          });
      } else {
        fallbackAnimate();
      }
    }

    function stopAllPreviewBtns() {
      document
        .querySelectorAll(".card-play-btn, .sib-play-btn")
        .forEach((b) => {
          b.textContent = "▶";
          b.classList.remove("playing");
        });
    }

    function playResultPreview(url: string, btnId: string) {
      if (!url) return;
      if (!audio) {
        audio = new Audio();
        audio.crossOrigin = "anonymous";
      }

      if (
        !audio.paused &&
        (audio as HTMLAudioElement & { _currentPreview?: string })
          ._currentPreview === url
      ) {
        audio.pause();
        audio.currentTime = 0;
        (
          audio as HTMLAudioElement & { _currentPreview?: string }
        )._currentPreview = undefined;
        stopAllPreviewBtns();
        return;
      }

      audio.pause();
      stopAllPreviewBtns();

      audio.src = url;
      (
        audio as HTMLAudioElement & { _currentPreview?: string }
      )._currentPreview = url;
      audio
        .play()
        .then(() => {
          const btn =
            document.getElementById(btnId) ||
            document.querySelector(
              `[data-sib-idx="${btnId.replace("sib-", "")}"]`,
            );
          if (btn) {
            btn.textContent = "◼";
            btn.classList.add("playing");
          }
          audio!.onended = () => {
            (
              audio as HTMLAudioElement & { _currentPreview?: string }
            )._currentPreview = undefined;
            stopAllPreviewBtns();
          };
        })
        .catch(() => {});
    }

    function animateWave() {
      let bar = 0;
      const step = () => {
        if (!state.isPlaying) return;
        state.activeBar = bar % FREQS.length;
        bar++;
        const wv = document.getElementById("waveform");
        if (wv)
          wv.querySelectorAll(".bar").forEach((b, i) =>
            b.classList.toggle("active", i === state.activeBar),
          );
        animFrame = requestAnimationFrame(() => setTimeout(step, 80));
      };
      render();
      setTimeout(step, 50);
    }

    function fallbackAnimate() {
      state.isPlaying = true;
      let bar = 0;
      const total = FREQS.length * 2;
      render();
      const iv = setInterval(() => {
        state.activeBar = bar % FREQS.length;
        bar++;
        const wv = document.getElementById("waveform");
        if (wv)
          wv.querySelectorAll(".bar").forEach((b, i) =>
            b.classList.toggle("active", i === state.activeBar),
          );
        if (bar >= total) {
          clearInterval(iv);
          state.isPlaying = false;
          state.activeBar = -1;
          render();
        }
      }, 80);
    }

    function submitGuess() {
      const title = state.input.trim();
      if (!title) return;
      const match = ALL_SONGS.find(
        (s) => s.title.toLowerCase() === title.toLowerCase(),
      ) || { title, artist: "Unknown" };
      const correct = title.toLowerCase() === puzzle.answer.title.toLowerCase();
      const isSibling =
        !correct &&
        puzzle.siblings.some(
          (s) => s.title.toLowerCase() === title.toLowerCase(),
        );
      state.guesses.push({
        title: match.title,
        artist: match.artist,
        correct,
        skipped: false,
        nearMiss: isSibling || undefined,
      });
      state.input = "";
      state.suggestions = [];
      if (correct) {
        state.gameOver = true;
        state.won = true;
        updateStreak(true);
      } else if (!isSibling && countUsedGuesses() >= MAX_GUESSES) {
        state.gameOver = true;
        state.won = false;
        updateStreak(false);
      }
      if (audio && state.isPlaying) {
        audio.pause();
        state.isPlaying = false;
      }
      saveState();
      render();
      renderStreak();
    }

    init();
  }, []);

  return (
    <>
      <nav>
        <div className="logo">
          Sample<span>dle</span>
        </div>
        <div className="streak" id="streak-display"></div>
      </nav>
      <main>
        <div className="header">
          <h1>Sampledle</h1>
          <p>Hear the original sample. Name the song that flipped it.</p>
          <div className="day-badge" id="day-badge">
            Day #1
          </div>
        </div>
        <div id="game-area">
          <div
            style={{
              textAlign: "center",
              padding: "3rem",
              color: "var(--text2)",
              fontSize: "15px",
            }}
          >
            Loading today&apos;s puzzle...
          </div>
        </div>
      </main>
      <div className="footer">
        A daily music sample guessing game.
        <br />
        New puzzle every day.{" "}
        <a
          href="https://whosampled.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhoSampled.com
        </a>{" "}
        for the deep cuts.
      </div>
    </>
  );
}
