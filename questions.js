/**
 * P5 English Quest: Pass Mission 60
 * Question Bank — Original + Extended
 */

const PASSAGES = {
  schoolSupplies: `<strong>Happy School Supplies Shop</strong><br><br>
🖊️ <strong>Magic Glue</strong> — A plastic glue. It is used for sticking paper and photos. <em>$18</em><br>
💡 <strong>Metal Desk Lamp</strong> — A shiny metal lamp. It is used for reading at night. <em>$85</em><br>
📓 <strong>Star Notebook Set</strong> — Two paper notebooks. They are used for writing diaries and stories. <em>$30 for 2</em><br>
📏 <strong>Wooden Ruler Set</strong> — One wooden ruler and two wooden triangles. They are used for drawing straight lines and shapes. <em>$25</em><br>
🚀 <strong>Space Pen Holder</strong> — A plastic pen holder. It is used for holding pencils and pens. It can also hold one photo. <em>$70</em>`,

  countryPark: `Yesterday, Amy and Ben joined the <strong>Country Park Explorer Challenge</strong>. They started at the main entrance at nine o'clock. First, they had to find the visitor centre. It was about <strong>two kilometres</strong> from the entrance, so they walked quickly. On the way, they crossed a small wooden bridge. They saw a public toilet next to a picnic site.<br><br>After <strong>twenty-five minutes</strong>, they reached the visitor centre and collected a stamp. Then they saw <strong>Mr Lee</strong> near the information board. He gave them a map. Finally, they returned to the starting point before noon. Amy felt tired but happy because she learnt how to read a trail map.`,

  jasonBlog: `<strong>A better way to travel around Hong Kong</strong><br><em>Posted by Jason Lee</em><br><br>
Hong Kong has many types of public transport. I usually take the MTR to school because it is <strong>fast and convenient</strong>. It only takes <strong>ten minutes</strong> from my home to school. However, it is very crowded during rush hour and I can hardly get a seat.<br><br>
Last Saturday, my family went to Lantau Island. We first took the MTR. Then we took a bus to a country park. The visitor centre was about <strong>one kilometre</strong> from the bus stop. We walked there and looked at the information board. My little brother wanted to go to the picnic site, but it was too far away. It would take <strong>one hour</strong> to walk there.<br><br>
At the visitor centre, I saw a poster about road safety. It told children to cross the road at the zebra crossing, use the subway, and look right and left before crossing. I think the poster was useful because it helped children stay safe.`,

  bikeBlog: `<strong>More bikes = a better Hong Kong!</strong><br><em>Posted by Michael Zhang</em><br><br>
Although Hong Kong has a modern, convenient public transport system, travelling by bus or train can be uncomfortable. Most of us don't enjoy riding in a <strong>crowded</strong> space twice a day.<br><br>
Copenhagen is the most bicycle-friendly city in the world. <strong>Forty-five percent</strong> of people living there cycle to work or school. It also has a <strong>bike-sharing programme</strong>. Participants pay to borrow a bike and return it when done. Cycling is a convenient, <strong>inexpensive</strong> and environmentally friendly way to travel.<br><br>
The Hong Kong government says our roads are too busy and narrow for cycling. They say it is not <strong>necessary</strong>. But other big cities like London, New York and Tokyo have built bike lanes and started bike-sharing programmes. Being bicycle-friendly is good for both citizens and the world.`,

  diaryEntry: `<strong>12th November (Saturday) — Sunny &amp; Breezy</strong><br><br>
Right now, I am resting on a wooden bench at Shing Mun Country Park. My family and I have just finished a very long hike around the reservoir. This country park is famous for its beautiful paperbark trees and wild monkeys.<br><br>
We arrived at the main entrance early this morning. At first, the weather was quite cloudy, but the sun came out around noon. We saw a few monkeys sitting on the hiking trail, but we did not feed them because it is <strong>illegal and dangerous</strong>.<br><br>
Oh no, look over there! A naughty monkey is stealing a packet of crisps from a careless tourist's bag! I have never seen such a sneaky animal in my life. The park warden is running over to help now.`
};

// ============================
// ORIGINAL QUESTION BANK
// ============================
const GAME_DATA = {
  zones: [
    // ============================
    // ZONE 1: Inventor's Lab (Ch.2)
    // ============================
    {
      id: "zone1",
      name: "Inventor's Lab",
      subtitle: "Ch.2 — Be Creative",
      icon: "🔧",
      color: "#FF8C42",
      gradient: "linear-gradient(135deg, #FF8C42, #e85d26)",
      questions: [
        {
          id: "z1q1", type: "error_fix",
          instruction: "Find and correct the mistake:",
          sentence: "The pencil case is made <u>by</u> metal.",
          question: "What should 'by' be changed to?",
          options: ["of", "from", "with", "to"],
          correctIndex: 0,
          explanation: "We say <strong>'made of'</strong> + material. Example: made of metal, made of wood, made of plastic.",
          stars: 2
        },
        {
          id: "z1q2", type: "error_fix",
          instruction: "Find and correct the mistake:",
          sentence: "The bottle is used for <u>carry</u> water.",
          question: "What should 'carry' be changed to?",
          options: ["carrying", "carried", "carries", "to carry"],
          correctIndex: 0,
          explanation: "<strong>'used for' + -ing</strong>. Always add -ing after 'used for'. Example: used for carrying, used for making, used for holding.",
          stars: 2
        },
        {
          id: "z1q3", type: "error_fix",
          instruction: "Find and correct the mistake:",
          sentence: "Yesterday, Tom <u>buy</u> cardboard to make a toy bus.",
          question: "What should 'buy' be changed to?",
          options: ["bought", "buys", "buying", "buyed"],
          correctIndex: 0,
          explanation: "'Yesterday' tells us it happened in the past. The past tense of 'buy' is <strong>'bought'</strong>.",
          stars: 2
        },
        {
          id: "z1q4", type: "error_fix",
          instruction: "Find and correct the mistake:",
          sentence: "The chair is made <u>from</u> wood.",
          question: "What should 'from' be changed to?",
          options: ["of", "by", "with", "in"],
          correctIndex: 0,
          explanation: "We say <strong>'made of'</strong> + material (wood, metal, plastic, glass).",
          stars: 2
        },
        {
          id: "z1q5", type: "error_fix",
          instruction: "Find and correct the mistake:",
          sentence: "The lamp is used for <u>read</u> at night.",
          question: "What should 'read' be changed to?",
          options: ["reading", "reads", "readed", "to read"],
          correctIndex: 0,
          explanation: "Remember: <strong>'used for' + -ing</strong>. 'Used for reading' is correct!",
          stars: 2
        },
        {
          id: "z1q6", type: "reading",
          instruction: "Read the poster, then answer:",
          passage: "schoolSupplies",
          question: "The magic glue is used for ___.",
          options: ["reading at night", "sticking paper and photos", "drawing lines", "holding pencils"],
          correctIndex: 1,
          explanation: "The poster says: 'It is used for sticking paper and photos.'",
          stars: 2
        },
        {
          id: "z1q7", type: "reading",
          instruction: "Read the poster, then answer:",
          passage: "schoolSupplies",
          question: "Which item is made of metal?",
          options: ["Magic Glue", "Star Notebook Set", "Metal Desk Lamp", "Space Pen Holder"],
          correctIndex: 2,
          explanation: "The Metal Desk Lamp is described as 'A shiny <strong>metal</strong> lamp'.",
          stars: 2
        },
        {
          id: "z1q8", type: "reading",
          instruction: "Read the poster, then answer:",
          passage: "schoolSupplies",
          question: "How many items on the poster are made of plastic?",
          options: ["One", "Two", "Three", "Four"],
          correctIndex: 1,
          explanation: "Two items: <strong>Magic Glue</strong> (plastic glue) and <strong>Space Pen Holder</strong> (plastic pen holder).",
          stars: 2
        },
        {
          id: "z1q9", type: "reading",
          instruction: "Read the poster, then answer:",
          passage: "schoolSupplies",
          question: "Sam has $60. Star notebooks cost $30 for 2. How many can he buy?",
          options: ["2 notebooks", "3 notebooks", "4 notebooks", "6 notebooks"],
          correctIndex: 2,
          explanation: "$30 buys 2 notebooks. With $60 he can buy 2 sets = <strong>4 notebooks</strong>.",
          stars: 2
        },
        {
          id: "z1q10", type: "fill_blank",
          instruction: "Choose the correct phrase:",
          sentence: "It's a toaster. It's ___ making toast for breakfast.",
          question: "Which phrase completes the sentence?",
          options: ["used for", "made of", "made by", "used to"],
          correctIndex: 0,
          explanation: "A toaster is <strong>'used for'</strong> making toast. We use 'used for + -ing' to say what something does.",
          stars: 2
        }
      ]
    },

    // ============================
    // ZONE 2: Transport City (Ch.3)
    // ============================
    {
      id: "zone2",
      name: "Transport City",
      subtitle: "Ch.3 — Getting Around",
      icon: "🚌",
      color: "#4ECDC4",
      gradient: "linear-gradient(135deg, #4ECDC4, #2b8a82)",
      questions: [
        {
          id: "z2q1", type: "fill_blank",
          instruction: "Choose the best adjective:",
          sentence: "The MTR is usually ___ because it does not take much time.",
          question: "Which word fits best?",
          options: ["fast", "slow", "crowded", "expensive"],
          correctIndex: 0,
          explanation: "'Does not take much time' means it is <strong>fast</strong>.",
          stars: 2
        },
        {
          id: "z2q2", type: "fill_blank",
          instruction: "Choose the best adjective:",
          sentence: "A taxi is ___, so I do not take it every day.",
          question: "Which word fits best?",
          options: ["cheap", "expensive", "slow", "convenient"],
          correctIndex: 1,
          explanation: "If you can't afford it every day, the taxi is <strong>expensive</strong>.",
          stars: 2
        },
        {
          id: "z2q3", type: "fill_blank",
          instruction: "Choose the best adjective:",
          sentence: "The tram is ___, but I like looking at the view.",
          question: "Which word fits best?",
          options: ["fast", "crowded", "slow", "convenient"],
          correctIndex: 2,
          explanation: "'But I like the view' means the tram takes its time — it is <strong>slow</strong>.",
          stars: 2
        },
        {
          id: "z2q4", type: "fill_blank",
          instruction: "Choose the best adjective:",
          sentence: "I could not get a seat because the train was ___.",
          question: "Which word fits best?",
          options: ["fast", "comfortable", "convenient", "crowded"],
          correctIndex: 3,
          explanation: "If you can't get a seat, there are too many people — it is <strong>crowded</strong>.",
          stars: 2
        },
        {
          id: "z2q5", type: "error_fix",
          instruction: "Find and correct the mistake:",
          sentence: "Although the taxi is fast, <u>but</u> it is expensive.",
          question: "What should happen to 'but'?",
          options: [
            "Delete 'but' — don't use 'although' and 'but' together",
            "Change 'but' to 'and'",
            "Change 'but' to 'so'",
            "Keep 'but', delete 'although'"
          ],
          correctIndex: 0,
          explanation: "⚠️ <strong>Never use 'although' and 'but' in the same sentence.</strong> Say: 'Although the taxi is fast, it is expensive.' OR 'The taxi is fast, but it is expensive.'",
          stars: 3
        },
        {
          id: "z2q6", type: "error_fix",
          instruction: "Find and correct the mistake:",
          sentence: "We went there <u>in</u> minibus yesterday.",
          question: "What should 'in' be changed to?",
          options: ["by", "on", "at", "with"],
          correctIndex: 0,
          explanation: "We travel <strong>'by'</strong> + transport: by minibus, by bus, by MTR, by ferry.",
          stars: 2
        },
        {
          id: "z2q7", type: "error_fix",
          instruction: "Find and correct the mistake:",
          sentence: "Although <u>travelled</u> by minibus is convenient, it's expensive.",
          question: "What should 'travelled' be changed to?",
          options: ["travelling", "travel", "travels", "to travel"],
          correctIndex: 0,
          explanation: "We need the -ing form here: <strong>'travelling'</strong> by minibus is convenient.",
          stars: 2
        },
        {
          id: "z2q8", type: "error_fix",
          instruction: "Find and correct the mistake:",
          sentence: "I don't want to <u>gets</u> hot.",
          question: "What should 'gets' be changed to?",
          options: ["get", "got", "getting", "getted"],
          correctIndex: 0,
          explanation: "After 'to', use the base form of the verb: to <strong>get</strong>.",
          stars: 2
        },
        {
          id: "z2q9", type: "error_fix",
          instruction: "Find and correct the mistake:",
          sentence: "See you <u>on</u> the bus stop tomorrow!",
          question: "What should 'on' be changed to?",
          options: ["at", "in", "by", "to"],
          correctIndex: 0,
          explanation: "We meet <strong>'at'</strong> a place: at the bus stop, at school, at the park.",
          stars: 2
        },
        {
          id: "z2q10", type: "error_fix",
          instruction: "Find and correct the mistake:",
          sentence: "<u>So</u> travelling by taxi is comfortable, it's expensive.",
          question: "What should 'So' be changed to?",
          options: ["Although", "But", "Because", "And"],
          correctIndex: 0,
          explanation: "The sentence shows a contrast (comfortable vs expensive). Use <strong>'Although'</strong> for contrast.",
          stars: 2
        }
      ]
    },

    // ============================
    // ZONE 3: Country Park Trail (Ch.4)
    // ============================
    {
      id: "zone3",
      name: "Country Park Trail",
      subtitle: "Ch.4 — Near and Far",
      icon: "🏕️",
      color: "#2ECC71",
      gradient: "linear-gradient(135deg, #2ECC71, #1a9c54)",
      questions: [
        {
          id: "z3q1", type: "fill_blank",
          instruction: "Choose the correct question word:",
          sentence: "___ is the country park? — It is near the reservoir.",
          question: "Which question word fits?",
          options: ["Where", "When", "How far", "How long"],
          correctIndex: 0,
          explanation: "The answer tells a <strong>place</strong> (near the reservoir), so we ask <strong>'Where'</strong>.",
          stars: 2
        },
        {
          id: "z3q2", type: "fill_blank",
          instruction: "Choose the correct question word:",
          sentence: "___ does it take to go there? — It takes twenty minutes.",
          question: "Which question word fits?",
          options: ["How far", "How long", "When", "Where"],
          correctIndex: 1,
          explanation: "The answer tells <strong>time</strong> (twenty minutes), so we ask <strong>'How long'</strong>. Remember: How long = time!",
          stars: 3
        },
        {
          id: "z3q3", type: "fill_blank",
          instruction: "Choose the correct question word:",
          sentence: "___ is the visitor centre from here? — It is one kilometre away.",
          question: "Which question word fits?",
          options: ["How long", "How far", "Where", "How"],
          correctIndex: 1,
          explanation: "The answer tells <strong>distance</strong> (one kilometre), so we ask <strong>'How far'</strong>. Remember: How far = distance!",
          stars: 3
        },
        {
          id: "z3q4", type: "fill_blank",
          instruction: "Choose the correct question word:",
          sentence: "___ is helping the children? — Mr Chan is helping them.",
          question: "Which question word fits?",
          options: ["What", "Where", "Who", "How"],
          correctIndex: 2,
          explanation: "The answer names a <strong>person</strong> (Mr Chan), so we ask <strong>'Who'</strong>.",
          stars: 2
        },
        {
          id: "z3q5", type: "fill_blank",
          instruction: "Choose the correct question word:",
          sentence: "___ did you see? — I saw a robbery.",
          question: "Which question word fits?",
          options: ["Who", "Where", "What", "When"],
          correctIndex: 2,
          explanation: "The answer names a <strong>thing/event</strong> (a robbery), so we ask <strong>'What'</strong>.",
          stars: 2
        },
        {
          id: "z3q6", type: "fill_blank",
          instruction: "Choose the correct question word:",
          sentence: "___ does the race end? — It ends at four o'clock.",
          question: "Which question word fits?",
          options: ["How long", "Where", "What", "When"],
          correctIndex: 3,
          explanation: "The answer tells a <strong>time/date</strong> (four o'clock), so we ask <strong>'When'</strong>.",
          stars: 2
        },
        {
          id: "z3q7", type: "reading",
          instruction: "Read the story, then answer:",
          passage: "countryPark",
          question: "When did Amy and Ben start the challenge?",
          options: ["At eight o'clock", "At nine o'clock", "At ten o'clock", "Before noon"],
          correctIndex: 1,
          explanation: "The story says: 'They started at the main entrance at <strong>nine o'clock</strong>.'",
          stars: 2
        },
        {
          id: "z3q8", type: "reading",
          instruction: "Read the story, then answer:",
          passage: "countryPark",
          question: "How far was the visitor centre from the entrance?",
          options: ["About one kilometre", "About two kilometres", "About three kilometres", "About twenty-five minutes"],
          correctIndex: 1,
          explanation: "The story says it was about <strong>two kilometres</strong> from the entrance. 'Twenty-five minutes' is TIME, not DISTANCE!",
          stars: 2
        },
        {
          id: "z3q9", type: "reading",
          instruction: "Read the story, then answer:",
          passage: "countryPark",
          question: "How long did they take to reach the visitor centre?",
          options: ["Two kilometres", "Fifteen minutes", "Twenty-five minutes", "One hour"],
          correctIndex: 2,
          explanation: "The story says: 'After <strong>twenty-five minutes</strong>, they reached the visitor centre.' Don't confuse distance (km) with time (minutes)!",
          stars: 2
        },
        {
          id: "z3q10", type: "reading",
          instruction: "Read the story, then answer:",
          passage: "countryPark",
          question: "Who gave them a map?",
          options: ["Amy's teacher", "Mr Lee", "Ben's father", "A park warden"],
          correctIndex: 1,
          explanation: "The story says: 'Then they saw <strong>Mr Lee</strong> near the information board. He gave them a map.'",
          stars: 2
        }
      ]
    },

    // ============================
    // ZONE 4: Detective HQ (Ch.5)
    // ============================
    {
      id: "zone4",
      name: "Detective HQ",
      subtitle: "Ch.5 — Crime & Diary",
      icon: "🔍",
      color: "#9B59B6",
      gradient: "linear-gradient(135deg, #9B59B6, #7d3c98)",
      questions: [
        {
          id: "z4q1", type: "error_fix",
          instruction: "Find and correct the mistake:",
          sentence: "I was <u>walk</u> in the park when I saw a monkey.",
          question: "What should 'walk' be changed to?",
          options: ["walking", "walked", "walks", "to walk"],
          correctIndex: 0,
          explanation: "<strong>'was/were + -ing'</strong> for a longer action in the past. 'I was walking' is the past continuous tense.",
          stars: 2
        },
        {
          id: "z4q2", type: "error_fix",
          instruction: "Find and correct the mistake:",
          sentence: "The children <u>was</u> looking for the visitor centre.",
          question: "What should 'was' be changed to?",
          options: ["were", "is", "are", "has"],
          correctIndex: 0,
          explanation: "'Children' is plural, so use <strong>'were'</strong>. (I/he/she → was; you/we/they → were)",
          stars: 2
        },
        {
          id: "z4q3", type: "error_fix",
          instruction: "Find and correct the mistake:",
          sentence: "I <u>am seeing</u> a robber when I was walking home yesterday.",
          question: "What should 'am seeing' be changed to?",
          options: ["saw", "was seeing", "see", "have seen"],
          correctIndex: 0,
          explanation: "'Yesterday' means past tense. The short action uses simple past: 'I <strong>saw</strong> a robber.'",
          stars: 3
        },
        {
          id: "z4q4", type: "fill_blank",
          instruction: "Use the correct verb form:",
          sentence: "I ___ (walk) in the park when I saw a monkey.",
          question: "What is the correct form?",
          options: ["was walking", "walked", "am walking", "walk"],
          correctIndex: 0,
          explanation: "The longer action uses past continuous: <strong>'was walking'</strong>. The short action uses simple past: 'saw'.",
          stars: 2
        },
        {
          id: "z4q5", type: "fill_blank",
          instruction: "Use the correct verb form:",
          sentence: "The police ___ (chase) the robber now.",
          question: "What is the correct form?",
          options: ["are chasing", "chased", "was chasing", "chase"],
          correctIndex: 0,
          explanation: "'Now' means it is happening right now → present continuous: <strong>'are chasing'</strong>.",
          stars: 2
        },
        {
          id: "z4q6", type: "fill_blank",
          instruction: "Use the correct verb form:",
          sentence: "We ___ (visit) the country park yesterday.",
          question: "What is the correct form?",
          options: ["visited", "visit", "are visiting", "were visiting"],
          correctIndex: 0,
          explanation: "'Yesterday' = past tense → simple past: <strong>'visited'</strong>.",
          stars: 2
        },
        {
          id: "z4q7", type: "fill_blank",
          instruction: "Use the correct verb form:",
          sentence: "She ___ (not feed) the monkeys last Sunday.",
          question: "What is the correct form?",
          options: ["did not feed", "does not feed", "was not feeding", "not feed"],
          correctIndex: 0,
          explanation: "'Last Sunday' = past tense → <strong>'did not feed'</strong>. Negative past tense = did not + base verb.",
          stars: 2
        },
        {
          id: "z4q8", type: "fill_blank",
          instruction: "Use the correct verb form:",
          sentence: "I ___ (hope) it will not rain tomorrow.",
          question: "What is the correct form?",
          options: ["hope", "hoped", "am hoping", "was hoping"],
          correctIndex: 0,
          explanation: "Talking about what you feel right now → simple present: <strong>'hope'</strong>.",
          stars: 2
        },
        {
          id: "z4q9", type: "fill_blank",
          instruction: "Use the correct verb form:",
          sentence: "We have just ___ (finish) a very long hike.",
          question: "What is the correct form?",
          options: ["finished", "finish", "finishing", "finishes"],
          correctIndex: 0,
          explanation: "'Have just ___' = present perfect → have + past participle: <strong>'finished'</strong>.",
          stars: 2
        },
        {
          id: "z4q10", type: "fill_blank",
          instruction: "Use the correct verb form:",
          sentence: "Look! A monkey ___ (steal) a packet of crisps right now!",
          question: "What is the correct form?",
          options: ["is stealing", "stole", "steals", "was stealing"],
          correctIndex: 0,
          explanation: "'Look!' and 'right now' = happening at this moment → present continuous: <strong>'is stealing'</strong>.",
          stars: 2
        }
      ]
    },

    // ============================
    // BOSS LEVEL
    // ============================
    {
      id: "boss",
      name: "Final Challenge",
      subtitle: "Mock Exam Mix",
      icon: "👑",
      color: "#F1C40F",
      gradient: "linear-gradient(135deg, #F1C40F, #e67e22)",
      questions: [
        {
          id: "bq1", type: "error_fix",
          instruction: "Find and correct the mistake:",
          sentence: "<u>Where</u> long does it take to go there?",
          question: "What should 'Where' be changed to?",
          options: ["How", "What", "When", "Which"],
          correctIndex: 0,
          explanation: "'___ long does it take' asks about time. The correct question word is <strong>'How long'</strong>.",
          stars: 2
        },
        {
          id: "bq2", type: "error_fix",
          instruction: "Find and correct the mistake:",
          sentence: "We travelled to Lantau <u>in</u> MTR.",
          question: "What should 'in' be changed to?",
          options: ["by", "on", "at", "with"],
          correctIndex: 0,
          explanation: "We say travel <strong>'by'</strong> + transport: by MTR, by bus, by ferry.",
          stars: 2
        },
        {
          id: "bq3", type: "fill_blank",
          instruction: "Choose the best adjective:",
          sentence: "The ferry was ___ because there were many seats.",
          question: "Which word fits best?",
          options: ["crowded", "comfortable", "expensive", "slow"],
          correctIndex: 1,
          explanation: "Many seats = you can sit and relax = <strong>comfortable</strong>.",
          stars: 2
        },
        {
          id: "bq4", type: "fill_blank",
          instruction: "Choose the correct question word:",
          sentence: "___ is the campsite from here? — It is three kilometres away.",
          question: "Which question word fits?",
          options: ["How long", "Where", "How far", "When"],
          correctIndex: 2,
          explanation: "Three kilometres = <strong>distance</strong> → use <strong>'How far'</strong>.",
          stars: 3
        },
        {
          id: "bq5", type: "fill_blank",
          instruction: "Choose the correct question word:",
          sentence: "___ will it take? — It will take half an hour.",
          question: "Which question word fits?",
          options: ["How far", "How long", "When", "Where"],
          correctIndex: 1,
          explanation: "Half an hour = <strong>time</strong> → use <strong>'How long'</strong>.",
          stars: 3
        },
        {
          id: "bq6", type: "reading",
          instruction: "Read Jason's blog, then answer:",
          passage: "jasonBlog",
          question: "Why does Jason usually take the MTR to school?",
          options: ["It is cheap and slow", "It is fast and convenient", "It is not crowded", "His mum drives him"],
          correctIndex: 1,
          explanation: "Jason says: 'I usually take the MTR to school because it is <strong>fast and convenient</strong>.'",
          stars: 2
        },
        {
          id: "bq7", type: "reading",
          instruction: "Read Jason's blog, then answer:",
          passage: "jasonBlog",
          question: "How long does it take Jason to go from home to school by MTR?",
          options: ["Five minutes", "Ten minutes", "Half an hour", "One hour"],
          correctIndex: 1,
          explanation: "The blog says: 'It only takes <strong>ten minutes</strong> from my home to school.'",
          stars: 2
        },
        {
          id: "bq8", type: "reading",
          instruction: "Read Jason's blog, then answer:",
          passage: "jasonBlog",
          question: "How far was the visitor centre from the bus stop?",
          options: ["About ten minutes away", "About one kilometre", "About two kilometres", "About one hour"],
          correctIndex: 1,
          explanation: "The blog says: 'The visitor centre was about <strong>one kilometre</strong> from the bus stop.'",
          stars: 2
        },
        {
          id: "bq9", type: "reading",
          instruction: "Read Jason's blog, then answer:",
          passage: "jasonBlog",
          question: "What was the poster at the visitor centre about?",
          options: ["Country parks", "Road safety", "School supplies", "Public transport"],
          correctIndex: 1,
          explanation: "Jason says: 'I saw a poster about <strong>road safety</strong>.'",
          stars: 2
        },
        {
          id: "bq10", type: "reading",
          instruction: "Read Jason's blog, then answer:",
          passage: "jasonBlog",
          question: "Why did Jason think the poster was useful?",
          options: ["It was colourful", "It showed a map", "It helped children stay safe", "It told him about the MTR"],
          correctIndex: 2,
          explanation: "Jason says: 'I think the poster was useful because it <strong>helped children stay safe</strong>.'",
          stars: 2
        }
      ]
    }
  ],

  writingTips: {
    structure: [
      { label: "Paragraph 1", content: "Time + place + people", icon: "📍" },
      { label: "Paragraph 2", content: "What happened? What was the problem?", icon: "⚡" },
      { label: "Paragraph 3", content: "What did I/we do? What happened at the end?", icon: "🦸" },
      { label: "Final sentence", content: "Feeling or lesson learned", icon: "💭" }
    ],
    starters: [
      "Yesterday afternoon, I was ...",
      "At first, ...",
      "Suddenly, ...",
      "I felt worried because ...",
      "Then, I ...",
      "Finally, ...",
      "I learnt that ...",
      "It was a/an ... day."
    ],
    examRules: [
      { rule: "used for + -ing", example: "used for holding, making, carrying", icon: "🔧" },
      { rule: "made of + noun", example: "made of plastic, wood, metal, glass", icon: "🧱" },
      { rule: "Don't use 'although' and 'but' together", example: "Although it is fast, it is expensive. ✓\nIt is fast, but it is expensive. ✓\nAlthough it is fast, but it is expensive. ✗", icon: "⚠️" },
      { rule: "How long = time · How far = distance", example: "How long does it take? → 20 minutes\nHow far is it? → 2 kilometres", icon: "📏" },
      { rule: "Check before handing in", example: "Past tense ✓ Capital letters ✓ Full stops ✓ Pronouns ✓ Paragraphs ✓", icon: "✅" }
    ],
    sampleDiary: `<strong>Dear Diary,</strong><br><br>
This afternoon, I went to a country park with my family. The weather was sunny. When we were walking near the picnic site, I saw a tourist feeding the monkeys. Suddenly, a monkey took a packet of crisps from his bag. The tourist was frightened.<br><br>
I knew it was dangerous to feed monkeys, so I called a park warden for help. The park warden came quickly and told the tourist not to feed the monkeys again. I felt worried at first, but I was happy that nobody was hurt. I learnt that we should be responsible visitors.`
  }
};


// ============================
// EXTENDED QUESTION BANK
// ============================
const EXTENDED_QUESTIONS = {
  zone1: [
    {
      id: "z1e1", type: "error_fix",
      instruction: "Find and correct the mistake:",
      sentence: "She used a box for <u>keep</u> her toys.",
      question: "What should 'keep' be changed to?",
      options: ["keeping", "kept", "keeps", "to keep"],
      correctIndex: 0,
      explanation: "<strong>'used for' + -ing</strong>. 'Used for keeping' is correct. Always add -ing after 'used for'!",
      stars: 2
    },
    {
      id: "z1e2", type: "fill_blank",
      instruction: "Choose the correct phrase:",
      sentence: "The handbag is ___ leather.",
      question: "Which phrase completes the sentence?",
      options: ["made of", "used for", "made by", "used with"],
      correctIndex: 0,
      explanation: "Leather is a <strong>material</strong>. We say 'made of' + material: <strong>made of leather</strong>.",
      stars: 2
    },
    {
      id: "z1e3", type: "error_fix",
      instruction: "Find and correct the mistake:",
      sentence: "Dad <u>love</u> dogs so Sam wanted to draw some dogs.",
      question: "What should 'love' be changed to?",
      options: ["loves", "loved", "loving", "to love"],
      correctIndex: 0,
      explanation: "Third person singular (Dad = he) present tense needs an -s: Dad <strong>loves</strong> dogs.",
      stars: 2
    },
    {
      id: "z1e4", type: "error_fix",
      instruction: "Find and correct the mistake:",
      sentence: "Then, he <u>paint</u> the wood carefully with a paintbrush.",
      question: "What should 'paint' be changed to?",
      options: ["painted", "paints", "painting", "painten"],
      correctIndex: 0,
      explanation: "The story uses past tense (Then, he...). 'Paint' → <strong>'painted'</strong>.",
      stars: 2
    },
    {
      id: "z1e5", type: "fill_blank",
      instruction: "Choose the correct phrase:",
      sentence: "The brush is ___ cleaning the floor.",
      question: "Which phrase completes the sentence?",
      options: ["used for", "made of", "made from", "used by"],
      correctIndex: 0,
      explanation: "A brush does cleaning → <strong>'used for' + -ing</strong>: used for cleaning.",
      stars: 2
    },
    {
      id: "z1e6", type: "reading",
      instruction: "Read the poster, then answer:",
      passage: "schoolSupplies",
      question: "Which item can you use for writing stories?",
      options: ["Metal Desk Lamp", "Star Notebook Set", "Wooden Ruler Set", "Magic Glue"],
      correctIndex: 1,
      explanation: "The Star Notebook Set is described as: 'They are used for writing diaries and <strong>stories</strong>.'",
      stars: 2
    },
    {
      id: "z1e7", type: "error_fix",
      instruction: "Find and correct the mistake:",
      sentence: "Finally, <u>she</u> used wrapping paper to wrap the frame.",
      question: "Sam is a boy. What should 'she' be changed to?",
      options: ["he", "they", "it", "we"],
      correctIndex: 0,
      explanation: "Sam is a boy. Use the pronoun <strong>'he'</strong>, not 'she'. Check your pronouns!",
      stars: 2
    },
    {
      id: "z1e8", type: "error_fix",
      instruction: "Find and correct the mistake:",
      sentence: "The toys <u>is</u> made of plastic.",
      question: "What should 'is' be changed to?",
      options: ["are", "am", "be", "were"],
      correctIndex: 0,
      explanation: "'Toys' is plural, so we use <strong>'are'</strong> instead of 'is'.",
      stars: 2
    },
    {
      id: "z1e9", type: "fill_blank",
      instruction: "Choose the correct verb form:",
      sentence: "A hammer is used for ___ nails into wood.",
      question: "Which word fits the gap?",
      options: ["driving", "drive", "drives", "to drive"],
      correctIndex: 0,
      explanation: "Remember: <strong>'used for' + -ing</strong>. 'Used for driving' is correct!",
      stars: 2
    },
    {
      id: "z1e10", type: "reading",
      instruction: "Read the poster, then answer:",
      passage: "schoolSupplies",
      question: "Which plastic item costs $70?",
      options: ["Space Pen Holder", "Magic Glue", "Metal Desk Lamp", "Star Notebook Set"],
      correctIndex: 0,
      explanation: "The Space Pen Holder is described as 'A plastic pen holder' costing <strong>$70</strong>.",
      stars: 2
    }
  ],

  zone2: [
    {
      id: "z2e1", type: "fill_blank",
      instruction: "Choose the best adjective:",
      sentence: "The bus is ___ because it goes to many places easily.",
      question: "Which word fits best?",
      options: ["convenient", "expensive", "slow", "crowded"],
      correctIndex: 0,
      explanation: "Goes to many places easily = <strong>convenient</strong>.",
      stars: 2
    },
    {
      id: "z2e2", type: "error_fix",
      instruction: "Find and correct the mistake:",
      sentence: "We went to school <u>in</u> bus this morning.",
      question: "What should 'in' be changed to?",
      options: ["by", "on", "at", "from"],
      correctIndex: 0,
      explanation: "We travel <strong>'by'</strong> + transport: by bus, by minibus, by MTR.",
      stars: 2
    },
    {
      id: "z2e3", type: "error_fix",
      instruction: "Find and correct the mistake:",
      sentence: "Do you <u>has</u> any suggestion?",
      question: "What should 'has' be changed to?",
      options: ["have", "had", "having", "haves"],
      correctIndex: 0,
      explanation: "With 'you', use <strong>'have'</strong>. 'Has' is for he/she/it only.",
      stars: 2
    },
    {
      id: "z2e4", type: "error_fix",
      instruction: "Find and correct the mistake:",
      sentence: "Will it be <u>crowd</u> on the bus?",
      question: "What should 'crowd' be changed to?",
      options: ["crowded", "crowding", "crowds", "crowdy"],
      correctIndex: 0,
      explanation: "'Crowd' is a noun. The adjective is <strong>'crowded'</strong>. 'Will it be crowded?'",
      stars: 2
    },
    {
      id: "z2e5", type: "reading",
      instruction: "Read the blog, then answer:",
      passage: "bikeBlog",
      question: "What do people in Copenhagen think about cycling?",
      options: [
        "It is dangerous and slow",
        "It is convenient, inexpensive and eco-friendly",
        "It is only for children",
        "It is too difficult"
      ],
      correctIndex: 1,
      explanation: "The blog says cycling is 'a convenient, <strong>inexpensive</strong> and environmentally friendly way to travel.'",
      stars: 2
    },
    {
      id: "z2e6", type: "reading",
      instruction: "Read the blog, then answer:",
      passage: "bikeBlog",
      question: "How can you get a bike in Copenhagen without buying one?",
      options: [
        "Steal one from the park",
        "Use the bike-sharing programme",
        "Ask the government for one",
        "Build your own"
      ],
      correctIndex: 1,
      explanation: "The blog mentions a <strong>bike-sharing programme</strong> where participants pay to borrow a bike.",
      stars: 2
    },
    {
      id: "z2e7", type: "error_fix",
      instruction: "Find and correct the mistake:",
      sentence: "Although the MTR is fast, <u>but</u> it is very crowded.",
      question: "What should happen to 'but'?",
      options: [
        "Delete 'but' — never use 'although' and 'but' together",
        "Change 'but' to 'and'",
        "Change 'but' to 'because'",
        "Move 'but' to the start"
      ],
      correctIndex: 0,
      explanation: "⚠️ <strong>Don't use 'although' and 'but' together!</strong> Just: 'Although the MTR is fast, it is very crowded.'",
      stars: 3
    },
    {
      id: "z2e8", type: "fill_blank",
      instruction: "Choose the best adjective:",
      sentence: "Travelling by ferry is ___ because it is slow and has a lovely sea view.",
      question: "Which word fits best?",
      options: ["relaxing", "dangerous", "expensive", "crowded"],
      correctIndex: 0,
      explanation: "A slow journey with a lovely view is <strong>relaxing</strong>.",
      stars: 2
    },
    {
      id: "z2e9", type: "error_fix",
      instruction: "Find and correct the mistake:",
      sentence: "Travelling by plane is the <u>faster</u> way to travel.",
      question: "What should 'faster' be changed to?",
      options: ["fastest", "fast", "fastly", "more fast"],
      correctIndex: 0,
      explanation: "Since it is comparing all ways of travel, use the superlative: the <strong>fastest</strong>.",
      stars: 2
    },
    {
      id: "z2e10", type: "reading",
      instruction: "Read the blog, then answer:",
      passage: "bikeBlog",
      question: "What percentage of people in Copenhagen cycle to work or school?",
      options: ["45%", "10%", "30%", "15%"],
      correctIndex: 0,
      explanation: "The blog states: '<strong>Forty-five percent</strong> of people living there cycle to work or school.'",
      stars: 2
    }
  ],

  zone3: [
    {
      id: "z3e1", type: "fill_blank",
      instruction: "Choose the correct question word:",
      sentence: "___ did the race start? — It started at nine o'clock.",
      question: "Which question word fits?",
      options: ["When", "Where", "How far", "Who"],
      correctIndex: 0,
      explanation: "Nine o'clock is a <strong>time</strong>, so we ask <strong>'When'</strong>.",
      stars: 2
    },
    {
      id: "z3e2", type: "fill_blank",
      instruction: "Choose the correct question word:",
      sentence: "___ is the campsite from the car park? — Three kilometres away.",
      question: "Which question word fits?",
      options: ["How long", "How far", "Where", "When"],
      correctIndex: 1,
      explanation: "Three kilometres = <strong>distance</strong> → <strong>'How far'</strong>.",
      stars: 3
    },
    {
      id: "z3e3", type: "fill_blank",
      instruction: "Choose the correct question word:",
      sentence: "___ will it take to walk there? — About forty minutes.",
      question: "Which question word fits?",
      options: ["How far", "How long", "When", "Where"],
      correctIndex: 1,
      explanation: "Forty minutes = <strong>time</strong> → <strong>'How long'</strong>.",
      stars: 3
    },
    {
      id: "z3e4", type: "fill_blank",
      instruction: "Choose the correct question word:",
      sentence: "___ can we see from the mountain top? — The whole harbour.",
      question: "Which question word fits?",
      options: ["What", "Where", "How", "Who"],
      correctIndex: 0,
      explanation: "The answer is a <strong>thing</strong> (the harbour), so we ask <strong>'What'</strong>.",
      stars: 2
    },
    {
      id: "z3e5", type: "reading",
      instruction: "Read the story, then answer:",
      passage: "countryPark",
      question: "What did they cross on the way to the visitor centre?",
      options: [
        "A big river",
        "A small wooden bridge",
        "A busy road",
        "A metal gate"
      ],
      correctIndex: 1,
      explanation: "The story says: 'they crossed a <strong>small wooden bridge</strong>'.",
      stars: 2
    },
    {
      id: "z3e6", type: "reading",
      instruction: "Read the story, then answer:",
      passage: "countryPark",
      question: "Why did Amy feel happy at the end?",
      options: [
        "She found treasure",
        "She ate some snacks",
        "She learnt how to read a trail map",
        "She won a prize"
      ],
      correctIndex: 2,
      explanation: "The story says: 'Amy felt tired but happy because she <strong>learnt how to read a trail map</strong>.'",
      stars: 2
    },
    {
      id: "z3e7", type: "fill_blank",
      instruction: "Choose the correct question word:",
      sentence: "___ can we cross the road safely? — We can use the subway.",
      question: "Which question word fits?",
      options: ["How", "When", "Where", "Who"],
      correctIndex: 0,
      explanation: "The answer tells a <strong>method/way</strong> (use the subway), so we ask <strong>'How'</strong>.",
      stars: 2
    },
    {
      id: "z3e8", type: "fill_blank",
      instruction: "Choose the correct question word:",
      sentence: "___ does it take to walk to the visitor centre? — About forty-five minutes.",
      question: "Which question word fits?",
      options: ["How long", "How far", "Where", "When"],
      correctIndex: 0,
      explanation: "Forty-five minutes is a <strong>time</strong>, so we ask <strong>'How long'</strong>. Remember: How long = time!",
      stars: 3
    },
    {
      id: "z3e9", type: "fill_blank",
      instruction: "Choose the correct question word:",
      sentence: "___ is the visitor centre from the entrance? — It is about two kilometres away.",
      question: "Which question word fits?",
      options: ["How far", "How long", "Where", "Who"],
      correctIndex: 0,
      explanation: "Two kilometres is a <strong>distance</strong>, so we ask <strong>'How far'</strong>. Remember: How far = distance!",
      stars: 3
    },
    {
      id: "z3e10", type: "reading",
      instruction: "Read the story, then answer:",
      passage: "countryPark",
      question: "What did Amy and Ben collect at the visitor centre?",
      options: ["A stamp", "A trail map", "A picnic box", "A bottle of water"],
      correctIndex: 0,
      explanation: "The story says: 'After twenty-five minutes, they reached the visitor centre and <strong>collected a stamp</strong>.'",
      stars: 2
    }
  ],

  zone4: [
    {
      id: "z4e1", type: "fill_blank",
      instruction: "Use the correct verb form:",
      sentence: "Yesterday morning, we ___ (have) breakfast at a café.",
      question: "What is the correct form?",
      options: ["had", "have", "having", "has"],
      correctIndex: 0,
      explanation: "'Yesterday morning' = past tense → <strong>'had'</strong>.",
      stars: 2
    },
    {
      id: "z4e2", type: "fill_blank",
      instruction: "Use the correct verb form:",
      sentence: "Look! The cat ___ (climb) up the tree!",
      question: "What is the correct form?",
      options: ["is climbing", "climbed", "climbs", "was climbing"],
      correctIndex: 0,
      explanation: "'Look!' = happening right now → present continuous: <strong>'is climbing'</strong>.",
      stars: 2
    },
    {
      id: "z4e3", type: "error_fix",
      instruction: "Find and correct the mistake:",
      sentence: "We <u>was</u> playing football when it started to rain.",
      question: "What should 'was' be changed to?",
      options: ["were", "is", "are", "has"],
      correctIndex: 0,
      explanation: "'We' is plural → <strong>'were'</strong> playing. (I/he/she = was; you/we/they = were)",
      stars: 2
    },
    {
      id: "z4e4", type: "fill_blank",
      instruction: "Use the correct verb form:",
      sentence: "She ___ (read) a book when the phone rang.",
      question: "What is the correct form?",
      options: ["was reading", "read", "reads", "is reading"],
      correctIndex: 0,
      explanation: "The longer action (reading) uses past continuous: <strong>'was reading'</strong>. The short action (rang) uses simple past.",
      stars: 2
    },
    {
      id: "z4e5", type: "fill_blank",
      instruction: "Use the correct verb form:",
      sentence: "I have never ___ (see) such a sneaky animal in my life.",
      question: "What is the correct form?",
      options: ["seen", "see", "saw", "seeing"],
      correctIndex: 0,
      explanation: "'have never ___' = present perfect → have + past participle: <strong>'seen'</strong>.",
      stars: 2
    },
    {
      id: "z4e6", type: "fill_blank",
      instruction: "Use the correct verb form:",
      sentence: "My dad says we ___ (visit) Tai Mo Shan next weekend.",
      question: "What is the correct form?",
      options: ["will visit", "visited", "visiting", "visit"],
      correctIndex: 0,
      explanation: "'Next weekend' = future → <strong>'will visit'</strong>.",
      stars: 2
    },
    {
      id: "z4e7", type: "reading",
      instruction: "Read the diary entry, then answer:",
      passage: "diaryEntry",
      question: "Why didn't the family feed the monkeys?",
      options: [
        "They didn't have food",
        "The monkeys were not hungry",
        "It is illegal and dangerous",
        "The park warden told them not to"
      ],
      correctIndex: 2,
      explanation: "The diary says: 'we did not feed them because it is <strong>illegal and dangerous</strong>.'",
      stars: 2
    },
    {
      id: "z4e8", type: "error_fix",
      instruction: "Find and correct the mistake:",
      sentence: "We <u>was</u> having a picnic when a monkey stole our food.",
      question: "What should 'was' be changed to?",
      options: ["were", "are", "been", "wasn't"],
      correctIndex: 0,
      explanation: "'We' is plural, so we use <strong>'were'</strong>: 'We were having...'",
      stars: 2
    },
    {
      id: "z4e9", type: "fill_blank",
      instruction: "Use the correct verb form:",
      sentence: "He ___ (run) quickly to catch the thief yesterday.",
      question: "What is the correct form?",
      options: ["ran", "runs", "running", "was running"],
      correctIndex: 0,
      explanation: "'Yesterday' indicates the past tense. The simple past of 'run' is <strong>'ran'</strong>.",
      stars: 2
    },
    {
      id: "z4e10", type: "reading",
      instruction: "Read the diary entry, then answer:",
      passage: "diaryEntry",
      question: "What is Shing Mun Country Park famous for?",
      options: ["Beautiful paperbark trees and wild monkeys", "Tall mountains and clean rivers", "Sandy beaches and fish", "A clean picnic site and bridges"],
      correctIndex: 0,
      explanation: "The diary says: 'This country park is famous for its <strong>beautiful paperbark trees and wild monkeys</strong>.'",
      stars: 2
    }
  ],

  boss: [
    {
      id: "bqe1", type: "error_fix",
      instruction: "Find and correct the mistake:",
      sentence: "The ruler is used for <u>measure</u> straight lines.",
      question: "What should 'measure' be changed to?",
      options: ["measuring", "measured", "measures", "to measure"],
      correctIndex: 0,
      explanation: "<strong>'used for' + -ing</strong>: used for measuring. Always add -ing!",
      stars: 2
    },
    {
      id: "bqe2", type: "fill_blank",
      instruction: "Choose the correct question word:",
      sentence: "___ made this beautiful painting? — My sister made it.",
      question: "Which question word fits?",
      options: ["Who", "What", "How", "Where"],
      correctIndex: 0,
      explanation: "The answer names a <strong>person</strong> (my sister), so we ask <strong>'Who'</strong>.",
      stars: 2
    },
    {
      id: "bqe3", type: "fill_blank",
      instruction: "Use the correct verb form:",
      sentence: "While I ___ (do) my homework, my brother was watching TV.",
      question: "What is the correct form?",
      options: ["was doing", "did", "do", "am doing"],
      correctIndex: 0,
      explanation: "'While' + past continuous: <strong>'was doing'</strong>. Both actions were happening at the same time in the past.",
      stars: 2
    },
    {
      id: "bqe4", type: "fill_blank",
      instruction: "Choose the best adjective:",
      sentence: "Although the ferry is ___, I enjoy looking at the sea view.",
      question: "Which word fits best?",
      options: ["slow", "fast", "expensive", "crowded"],
      correctIndex: 0,
      explanation: "'Although... I enjoy the view' suggests a downside. Ferries are known for being <strong>slow</strong>.",
      stars: 2
    },
    {
      id: "bqe5", type: "reading",
      instruction: "Read Jason's blog, then answer:",
      passage: "jasonBlog",
      question: "Why couldn't Jason's little brother go to the picnic site?",
      options: [
        "It was closed",
        "It was too far away",
        "It was raining",
        "He was too young"
      ],
      correctIndex: 1,
      explanation: "The blog says: 'My little brother wanted to go to the picnic site, but it was <strong>too far away</strong>.'",
      stars: 2
    },
    {
      id: "bqe6", type: "error_fix",
      instruction: "Find and correct the mistake:",
      sentence: "He put it on <u>her</u> desk to surprise him in the morning.",
      question: "Sam is putting a gift on his dad's desk. What should 'her' be changed to?",
      options: ["his", "their", "its", "your"],
      correctIndex: 0,
      explanation: "Dad is male, so his desk → <strong>'his'</strong> desk. Check your pronouns carefully!",
      stars: 2
    },
    {
      id: "bqe7", type: "fill_blank",
      instruction: "Choose the correct phrase to complete the sentence:",
      sentence: "Although he was tired, ___ he continued walking.",
      question: "Which option completes the sentence safely?",
      options: ["(leave blank / no word)", "but", "so", "and"],
      correctIndex: 0,
      explanation: "⚠️ <strong>Never use 'although' and 'but' together in a sentence.</strong> Leave it blank! 'Although he was tired, he continued walking.'",
      stars: 3
    },
    {
      id: "bqe8", type: "error_fix",
      instruction: "Find and correct the mistake:",
      sentence: "A pair of scissors is used for <u>cut</u> paper.",
      question: "What should 'cut' be changed to?",
      options: ["cutting", "cuts", "cutted", "to cut"],
      correctIndex: 0,
      explanation: "Remember: <strong>'used for' + -ing</strong>. 'Used for cutting' is correct!",
      stars: 2
    },
    {
      id: "bqe9", type: "reading",
      instruction: "Read Jason's blog, then answer:",
      passage: "jasonBlog",
      question: "What does the road safety poster tell children to do?",
      options: ["Use the subway to cross the road safely", "Take a taxi during rush hour", "Feed the monkeys in Lantau Island", "Walk on the narrow busy roads"],
      correctIndex: 0,
      explanation: "The blog says: 'It told children to cross the road at the zebra crossing, <strong>use the subway</strong>, and look right and left before crossing.'",
      stars: 2
    },
    {
      id: "bqe10", type: "fill_blank",
      instruction: "Use the correct verb form:",
      sentence: "My family and I ___ (have) a great time at Lantau Island last week.",
      question: "What is the correct form?",
      options: ["had", "have", "are having", "were having"],
      correctIndex: 0,
      explanation: "'Last week' = past tense → <strong>'had'</strong>. The simple past of 'have' is 'had'.",
      stars: 2
    }
  ]
};
