// ==========================================
// 1. DATA SOALAN PERMAINAN (GAME DATA)
// ==========================================
const gameData = {
    missing: [
    { "q": "A P P L _ (A round fruit with red or green skin)", "a": "e" },
    { "q": "B A N A N _ (A long yellow fruit)", "a": "a" },
    { "q": "C _ T (A small pet that meows)", "a": "a" },
    { "q": "D O _ (A common pet that barks)", "a": "g" },
    { "q": "F I S _ (An animal that swims in water)", "a": "h" },
    { "q": "B I R _ (An animal that has wings and flies)", "a": "d" },
    { "q": "M O U S _ (A small animal that likes cheese)", "a": "e" },
    { "q": "H O R S _ (A large animal you can ride)", "a": "e" },
    { "q": "S N A _ E (A long animal with no legs)", "a": "k" },
    { "q": "T I G _ R (A big wild cat with stripes)", "a": "e" },
    { "q": "L I O _ (The king of the jungle)", "a": "n" },
    { "q": "B E A _ (A large wild animal with thick fur)", "a": "r" },
    { "q": "W _ N D O W (You look through this to see outside)", "a": "i" },
    { "q": "D O _ R (You open this to enter a room)", "a": "o" },
    { "q": "T A B _ E (Furniture with a flat top and legs)", "a": "l" },
    { "q": "C H A _ R (A piece of furniture you sit on)", "a": "i" },
    { "q": "B _ D (A piece of furniture you sleep on)", "a": "e" },
    { "q": "K I T C H _ N (A room where you cook food)", "a": "e" },
    { "q": "B A T H R O _ M (A room where you wash yourself)", "a": "o" },
    { "q": "G A R D _ N (A place where flowers and plants grow)", "a": "e" },
    { "q": "P A R _ (A large green place to play or walk)", "a": "k" },
    { "q": "B E A C _ (A sandy place next to the ocean)", "a": "h" },
    { "q": "S _ A (A large body of salt water)", "a": "e" },
    { "q": "R I V _ R (A long body of flowing water)", "a": "e" },
    { "q": "M O U N T _ I N (A very high hill)", "a": "a" },
    { "q": "S T _ R (A bright shape in the night sky)", "a": "a" },
    { "q": "M O _ N (The big white shape in the night sky)", "a": "o" },
    { "q": "S U _ (The bright star that gives us daylight)", "a": "n" },
    { "q": "R A _ N (Water falling from the clouds)", "a": "i" },
    { "q": "S N O _ (White flakes that fall in cold places)", "a": "w" },
    { "q": "W I N _ (Moving air that you can feel)", "a": "d" },
    { "q": "F I R _ (Hot, bright, and burns things)", "a": "e" },
    { "q": "T R E _ (A tall plant with a wooden trunk)", "a": "e" },
    { "q": "F L O W _ R (A colourful part of a plant)", "a": "e" },
    { "q": "G R A S _ (Green plants that cover the ground)", "a": "s" },
    { "q": "S H _ P (A large boat for traveling on water)", "a": "i" },
    { "q": "T R A _ N (A long vehicle that moves on tracks)", "a": "i" },
    { "q": "B U _ (A large vehicle that carries many people)", "a": "s" },
    { "q": "C A _ (A vehicle with four wheels)", "a": "r" },
    { "q": "T R U C _ (A large vehicle for carrying heavy things)", "a": "k" },
    { "q": "S H O _ (A place where you can buy things)", "a": "p" },
    { "q": "M A R K _ T (A place where you buy fresh food)", "a": "e" },
    { "q": "R E S T A U R A N _ (A place where you pay to eat meals)", "a": "t" },
    { "q": "L I B R A _ Y (A place where you can borrow books)", "a": "r" },
    { "q": "C I N E M _ (A place where you watch movies)", "a": "a" },
    { "q": "B _ C K E T (A round container with a handle for water)", "a": "u" },
    { "q": "G L A S _ (A cup made of clear material for drinking)", "a": "s" },
    { "q": "P L A _ E (A flat dish for holding food)", "a": "t" },
    { "q": "S P O _ N (A tool used for eating soup)", "a": "o" },
    { "q": "F O R _ (A tool with prongs used for eating)", "a": "k" },
    { "q": "K N I F _ (A sharp tool used for cutting)", "a": "e" },
    { "q": "S W E _ T (Tasting like sugar)", "a": "e" },
    { "q": "S O _ R (Tasting like a lemon)", "a": "u" },
    { "q": "S P I C _ (Having a hot taste like chili)", "a": "y" },
    { "q": "B I T T _ R (A strong taste that is not sweet like coffee)", "a": "e" },
    { "q": "C O _ D (Having a very low temperature)", "a": "l" },
    { "q": "H O _ (Having a high temperature)", "a": "t" },
    { "q": "W A R _ (A comfortable temperature, not too hot)", "a": "m" },
    { "q": "F A S _ (Moving very quickly)", "a": "t" },
    { "q": "S L O _ (Moving without much speed)", "a": "w" },
    { "q": "B I _ (Large in size)", "a": "g" },
    { "q": "S M A L _ (Little in size)", "a": "l" },
    { "q": "T A L _ (Of great height)", "a": "l" },
    { "q": "S H O R _ (Small in height or length)", "a": "t" },
    { "q": "L O N _ (Measuring a great distance from end to end)", "a": "g" },
    { "q": "C L E A _ (Not dirty)", "a": "n" },
    { "q": "D I R T _ (Not clean)", "a": "y" },
    { "q": "O P E _ (Not closed)", "a": "n" },
    { "q": "C L O S E _ (Not open)", "a": "d" },
    { "q": "S A _ (Feeling unhappy)", "a": "d" },
    { "q": "A N G R _ (Feeling mad or very annoyed)", "a": "y" },
    { "q": "T I R E _ (Needing sleep or rest)", "a": "d" },
    { "q": "S C A R E _ (Feeling fear or afraid)", "a": "d" },
    { "q": "S L E E P _ (Feeling like you want to rest)", "a": "y" },
    { "q": "H U N G R _ (Wanting to eat food)", "a": "y" }
],

    listening: [
        { q: "<button onclick='playAudio(\"beautiful\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "beautiful" },
        { q: "<button onclick='playAudio(\"restaurant\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "restaurant" },
        { q: "<button onclick='playAudio(\"tomorrow\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "tomorrow" },
        { q: "<button onclick='playAudio(\"scissors\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "scissors" },
        { q: "<button onclick='playAudio(\"elephant\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "elephant" },
        { q: "<button onclick='playAudio(\"dangerous\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "dangerous" },
        { q: "<button onclick='playAudio(\"vegetable\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "vegetable" },
        { q: "<button onclick='playAudio(\"library\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "library" },
        { q: "<button onclick='playAudio(\"mountain\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "mountain" },
        { q: "<button onclick='playAudio(\"chocolate\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "chocolate" },
        { q: "<button onclick='playAudio(\"umbrella\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "umbrella" },
        { q: "<button onclick='playAudio(\"crocodile\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "crocodile" },
        { q: "<button onclick='playAudio(\"hospital\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "hospital" },
        { q: "<button onclick='playAudio(\"dictionary\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "dictionary" },
        { q: "<button onclick='playAudio(\"mechanic\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "mechanic" },
        { q: "<button onclick='playAudio(\"comfortable\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "comfortable" },
        { q: "<button onclick='playAudio(\"expensive\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "expensive" },
        { q: "<button onclick='playAudio(\"interesting\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "interesting" },
        { q: "<button onclick='playAudio(\"yesterday\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "yesterday" },
        { q: "<button onclick='playAudio(\"astronaut\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "astronaut" },
        { q: "<button onclick='playAudio(\"scientist\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "scientist" },
        { q: "<button onclick='playAudio(\"passenger\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "passenger" },
        { q: "<button onclick='playAudio(\"neighbour\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "neighbour" },
        { q: "<button onclick='playAudio(\"afternoon\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "afternoon" },
        { q: "<button onclick='playAudio(\"breakfast\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "breakfast" },
        { q: "<button onclick='playAudio(\"delicious\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "delicious" },
        { q: "<button onclick='playAudio(\"sandwich\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "sandwich" },
        { q: "<button onclick='playAudio(\"butterfly\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "butterfly" },
        { q: "<button onclick='playAudio(\"mosquito\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "mosquito" },
        { q: "<button onclick='playAudio(\"kangaroo\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "kangaroo" },
        { q: "<button onclick='playAudio(\"dinosaur\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "dinosaur" },
        { q: "<button onclick='playAudio(\"envelope\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "envelope" },
        { q: "<button onclick='playAudio(\"telephone\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "telephone" },
        { q: "<button onclick='playAudio(\"computer\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "computer" },
        { q: "<button onclick='playAudio(\"luggage\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "luggage" },
        { q: "<button onclick='playAudio(\"museum\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "museum" },
        { q: "<button onclick='playAudio(\"stadium\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "stadium" },
        { q: "<button onclick='playAudio(\"island\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "island" },
        { q: "<button onclick='playAudio(\"village\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "village" },
        { q: "<button onclick='playAudio(\"celebrate\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "celebrate" },
        { q: "<button onclick='playAudio(\"remember\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "remember" },
        { q: "<button onclick='playAudio(\"understand\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "understand" },
        { q: "<button onclick='playAudio(\"exercise\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "exercise" },
        { q: "<button onclick='playAudio(\"frightened\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "frightened" },
        { q: "<button onclick='playAudio(\"important\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "important" },
        { q: "<button onclick='playAudio(\"adventure\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "adventure" },
        { q: "<button onclick='playAudio(\"treasure\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "treasure" },
        { q: "<button onclick='playAudio(\"holiday\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "holiday" },
        { q: "<button onclick='playAudio(\"autumn\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "autumn" },
        { q: "<button onclick='playAudio(\"biscuit\")' class='bg-blue-500 text-white px-3 py-1 rounded text-sm mb-2'><i class='fas fa-volume-up'></i> Play Audio</button><br>Listen and spell the word:", a: "biscuit" }
    ],

grammar: [
        { q: "I have ____ in Kuala Lumpur since 2015.", a: "lived" },
        { q: "Everyone in the classroom _____ listening to the teacher.", a: "is" },
        { q: "If it rains tomorrow, the football match ____ be cancelled.", a: "will" },
        { q: "While I was walking to school, I _____ my wallet.", a: "dropped" },
        { q: "Ahmad has ____ a beautiful poem for his mother.", a: "written" },
        { q: "This is the ____ mathematics question I have ever seen.", a: "hardest" },
        { q: "We stayed indoors ____ it was raining heavily.", a: "because" },
        { q: "The headmaster gave the certificates to Abu and ____.", a: "me" },
        { q: "The man ____ stole the bicycle was caught by the police.", a: "who" },
        { q: "The farmer feeds his herd of ____ every morning.", a: "sheep" },
        { q: "My sister plays ____ piano very beautifully.", a: "the" },
        { q: "The choir sang very ____ during the concert.", a: "beautifully" },
        { q: "How ____ apples do you need to bake the pie?", a: "many" },
        { q: "Either Ali or his brother ____ the keys to the house.", a: "has" },
        { q: "By the time we arrived, the train had ____ the station.", a: "left" },
        { q: "The school assembly will start ____ 7:30 a.m.", a: "at" },
        { q: "You are a Malaysian, ____ you?", a: "aren't" },
        { q: "The delicious chocolate cake was ____ by the children.", a: "eaten" },
        { q: "All students must ____ their school uniforms neatly.", a: "wear" },
        { q: "My family and I are sitting ____ the dining table.", a: "at" },
        { q: "If I ____ a bird, I would fly across the ocean.", a: "were" },
        { q: "Neither the teacher nor the students ____ in the library.", a: "were" },
        { q: "I look forward to ____ you next week.", a: "meeting" },
        { q: "Siti enjoys ____ in the river during the holidays.", a: "swimming" },
        { q: "Could you please give me some ____ on how to study?", a: "advice" },
        { q: "You will not pass the exam ____ you study hard.", a: "unless" },
        { q: "They have been playing badminton ____ three hours.", a: "for" },
        { q: "One of the boys ____ forgotten to bring his book.", a: "has" },
        { q: "Do you know ____ backpack is left on the bench?", a: "whose" },
        { q: "At 8 p.m. tonight, I will ____ watching my favourite television show.", a: "be" },
        { q: "She didn't go to the clinic, ____ she?", a: "did" },
        { q: "____ of the heavy rain, the football players continued playing.", a: "despite" },
        { q: "The school bought a lot of new sports ____.", a: "equipment" },
        { q: "Amin is the boy ____ won the first prize in the spelling bee.", a: "who" },
        { q: "I am slowly getting used to ____ up early for school.", a: "waking" },
        { q: "She has been ____ that thick novel since this morning.", a: "reading" },
        { q: "There is very ____ water left in the jug.", a: "little" },
        { q: "Although he was exhausted, ____ he kept running to the finish line.", a: "yet" },
        { q: "I prefer reading storybooks ____ playing video games.", a: "to" },
        { q: "The weather in Malaysia is getting hotter and ____.", a: "hotter" },
        { q: "She bought a ____ red dress for the annual dinner.", a: "beautiful" },
        { q: "Each of the participants ____ given a certificate of appreciation.", a: "was" },
        { q: "My grandmother speaks English very ____.", a: "well" },
        { q: "The classroom window was ____ by the strong wind.", a: "broken" },
        { q: "It was ____ a beautiful day that we decided to go for a picnic.", a: "such" },
        { q: "The headmaster, as well as the teachers, ____ attending the meeting.", a: "is" },
        { q: "My grandfather stopped ____ ten years ago.", a: "smoking" },
        { q: "We are looking forward to ____ the good news from you.", a: "hearing" },
        { q: "The kind teacher let the sick student ____ home early.", a: "go" },
        { q: "The chicken soup is hot ____ to drink.", a: "enough" }
    ],

architect: [
        { 
            q: "although / heavily / it / was / raining / they / football / played", 
            options: [
                "Although it was raining heavily they played football.",
                "They played football although raining it was heavily.",
                "Although heavily it was raining football they played.",
                "They football played although it was raining heavily."
            ], 
            a: 0 
        },
        { 
            q: "has / the / been / since / reading / she / morning / book", 
            options: [
                "She reading the book has been since morning.",
                "She has been reading the book since morning.",
                "Since morning the book she has been reading.",
                "The book has been reading she since morning."
            ], 
            a: 1 
        },
        { 
            q: "to / looking / forward / we / grandmother / visiting / are / our", 
            options: [
                "We are looking forward to visiting our grandmother.",
                "We are visiting our grandmother to looking forward.",
                "Our grandmother are looking forward to visiting we.",
                "Looking forward we are to visiting our grandmother."
            ], 
            a: 0 
        },
        { 
            q: "left / train / reached / the / by / station / had / the / time / we", 
            options: [
                "We reached the station by the time the train had left.",
                "The train had left by the time we reached the station.",
                "By the time we reached the station the train had left.",
                "By the time the train had left we reached the station."
            ], 
            a: 2 
        },
        { 
            q: "to / prefer / television / I / watching / reading / books", 
            options: [
                "I prefer watching television to reading books.",
                "I prefer watching to reading books television.",
                "I watching television prefer reading books to.",
                "Television prefer I to watching reading books."
            ], 
            a: 0 
        },
        { 
            q: "beautiful / gave / red / me / a / dress / mother / my", 
            options: [
                "My beautiful mother gave me a red dress.",
                "My mother gave me a beautiful red dress.",
                "A beautiful red dress my mother gave me.",
                "Me gave a beautiful red dress my mother."
            ], 
            a: 1 
        },
        { 
            q: "who / standing / tree / under / the / the / is / boy / brother / my / is", 
            options: [
                "The boy is my brother who is standing under the tree.",
                "The boy who is standing under the tree is my brother.",
                "Who is standing under the tree the boy is my brother.",
                "My brother is the boy who standing under the tree is."
            ], 
            a: 1 
        },
        { 
            q: "as / as / attending / headmaster / well / is / the / meeting / teachers / the", 
            options: [
                "The headmaster as well as the teachers is attending the meeting.",
                "The teachers as well as the headmaster are attending the meeting.",
                "The headmaster is attending the meeting as well as the teachers.",
                "The meeting is attending the headmaster as well as the teachers."
            ], 
            a: 0 
        },
        { 
            q: "tired / he / the / finished / was / he / although / marathon", 
            options: [
                "He finished the marathon although he was tired.",
                "Although he finished the marathon he was tired.",
                "Although he was tired he finished the marathon.",
                "He was tired although he finished the marathon."
            ], 
            a: 2 
        },
        { 
            q: "window / strong / was / broken / wind / by / the / the", 
            options: [
                "The strong wind was broken by the window.",
                "The window was broken by the strong wind.",
                "The window broken was by the strong wind.",
                "By the strong wind the window broken was."
            ], 
            a: 1 
        },
        { 
            q: "of / boys / his / wallet / lost / one / the / has", 
            options: [
                "One of the boys has lost his wallet.",
                "The boys has lost one of his wallet.",
                "One of his wallet has lost the boys.",
                "His wallet has lost one of the boys."
            ], 
            a: 0 
        },
        { 
            q: "either / going / Ali / Abu / or / represent / to / is / school / the", 
            options: [
                "Either Ali or Abu is going to represent the school.",
                "Either Ali or Abu are going to represent the school.",
                "Ali or Abu is going to represent either the school.",
                "To represent the school is either Ali or Abu going."
            ], 
            a: 0 
        },
        { 
            q: "homework / not / have / finished / yet / their / they", 
            options: [
                "They yet have not finished their homework.",
                "They have not finished their homework yet.",
                "Their homework have not finished they yet.",
                "They have finished not their homework yet."
            ], 
            a: 1 
        },
        { 
            q: "of / because / postponed / heavy / was / rain / match / the / the", 
            options: [
                "The heavy rain was postponed because of the match.",
                "Because of the match the heavy rain was postponed.",
                "The match was postponed because of the heavy rain.",
                "The match because of the heavy rain was postponed."
            ], 
            a: 2 
        },
        { 
            q: "you / please / could / direction / tell / nearest / me / hospital / the / to / the", 
            options: [
                "Could you please tell me the direction to the nearest hospital?",
                "Could you tell me please the nearest direction to hospital?",
                "The nearest hospital could you please tell me the direction to?",
                "Please could you tell direction to the me nearest hospital?"
            ], 
            a: 0 
        },
        { 
            q: "had / money / would / enough / buy / I / I / if / that / computer", 
            options: [
                "I would buy that computer if I had enough money.",
                "If I had enough money I would buy that computer.",
                "If I would buy that computer I had enough money.",
                "I had enough money if I would buy that computer."
            ], 
            a: 1 
        },
        { 
            q: "interesting / was / that / fell / book / the / asleep / not / I / reading / while", 
            options: [
                "I fell asleep while reading the book that was not interesting.",
                "The book was reading while I fell asleep not interesting.",
                "While reading that book I fell asleep was not interesting.",
                "I was reading that book not interesting while fell asleep."
            ], 
            a: 0 
        },
        { 
            q: "dictionary / I / looking / have / for / been / my / everywhere / bilingual", 
            options: [
                "I have looking been for my bilingual dictionary everywhere.",
                "Everywhere I looking have been for my bilingual dictionary.",
                "I have been looking for my bilingual dictionary everywhere.",
                "My bilingual dictionary have been looking for I everywhere."
            ], 
            a: 2 
        },
        { 
            q: "competition / won / who / girl / the / the / sister / is / my", 
            options: [
                "The girl who won the competition is my sister.",
                "The sister who won the competition is my girl.",
                "Who won the competition the girl is my sister.",
                "My sister is the girl who the competition won."
            ], 
            a: 0 
        },
        { 
            q: "comfortable / staying / hotel / very / we / a / at / are / in / town / the", 
            options: [
                "We are staying in the town at a very comfortable hotel.",
                "We are staying at a very comfortable hotel in the town.",
                "A very comfortable hotel we are staying at in the town.",
                "In the town we are staying at very comfortable a hotel."
            ], 
            a: 1 
        },
        { 
            q: "never / seen / such / beautiful / I / have / a / sunrise / before", 
            options: [
                "I have never seen such a beautiful sunrise before.",
                "Never I have seen before such a beautiful sunrise.",
                "I have seen never before such a beautiful sunrise.",
                "Such a beautiful sunrise I have never seen before."
            ], 
            a: 0 
        },
        { 
            q: "carefully / you / across / must / look / before / walking / the / street", 
            options: [
                "Before walking you must look carefully across the street.",
                "You must look carefully before walking across the street.",
                "You must walk carefully across the street before looking.",
                "Across the street you must look carefully before walking."
            ], 
            a: 1 
        },
        { 
            q: "traditional / dressed / the / dancers / costumes / were / in / colourful", 
            options: [
                "The dancers were dressed in colourful traditional costumes.",
                "The colourful traditional costumes were dressed in dancers.",
                "In colourful traditional costumes the dancers dressed were.",
                "The dancers dressed in colourful traditional costumes were."
            ], 
            a: 0 
        },
        { 
            q: "waiting / bus / stop / since / I / for / have / been / the / morning / at", 
            options: [
                "I have been waiting since morning at the bus stop.",
                "I have waiting been at the bus stop since morning.",
                "I have been waiting at the bus stop since morning.",
                "At the bus stop since morning I have waiting been."
            ], 
            a: 2 
        },
        { 
            q: "cake / baked / kitchen / chocolate / my / delicious / sister / a / the / in", 
            options: [
                "My sister baked a delicious chocolate cake in the kitchen.",
                "A delicious chocolate cake baked my sister in the kitchen.",
                "In the kitchen my sister a delicious chocolate cake baked.",
                "My sister in the kitchen baked a chocolate delicious cake."
            ], 
            a: 0 
        },
        { 
            q: "successfully / mountain / climbers / the / reached / peak / of / the / the", 
            options: [
                "The mountain climbers successfully reached the peak.",
                "The climbers successfully reached the mountain peak.",
                "Successfully the mountain climbers reached the peak.",
                "Reached the peak successfully the mountain climbers."
            ], 
            a: 0 
        },
        { 
            q: "project / science / group / completing / their / students / the / are / together", 
            options: [
                "Together the students completing their group science project are.",
                "The students are completing their group science project together.",
                "Their group science project are completing the students together.",
                "The students together completing are their group science project."
            ], 
            a: 1 
        },
        { 
            q: "remember / turn / off / the / you / leave / lights / to / before / room / the", 
            options: [
                "Remember to turn off the lights before you leave the room.",
                "Before you leave the room remember turn off the lights to.",
                "You remember to turn off the lights before leave the room.",
                "Turn off the lights remember to before you leave the room."
            ], 
            a: 0 
        },
        { 
            q: "celebrated / championship / team / the / winning / victory / their / after / the", 
            options: [
                "After winning the championship the team their victory celebrated.",
                "The team celebrated their victory after winning the championship.",
                "The team their victory celebrated after winning the championship.",
                "Winning the championship after the team celebrated their victory."
            ], 
            a: 1 
        },
        { 
            q: "gracefully / the / performing / stage / on / dancers / beautiful / are / the", 
            options: [
                "The beautiful dancers are performing gracefully on the stage.",
                "On the stage the beautiful dancers gracefully performing are.",
                "The dancers beautiful are performing gracefully on the stage.",
                "Performing gracefully on the stage are the dancers beautiful."
            ], 
            a: 0 
        },
        { 
            q: "dangerous / swim / river / is / in / that / it / to / deep", 
            options: [
                "To swim in that deep river dangerous it is.",
                "It is dangerous to swim in that deep river.",
                "That deep river is dangerous to swim in it.",
                "It is swim to dangerous in that deep river."
            ], 
            a: 1 
        },
        { 
            q: "heavily / raining / it / started / suddenly / while / walking / home / we / were", 
            options: [
                "While we were walking home it suddenly started raining heavily.",
                "It suddenly started raining heavily while we walking home were.",
                "Suddenly it started raining heavily while we were home walking.",
                "We were walking home while it suddenly started raining heavily."
            ], 
            a: 0 
        },
        { 
            q: "important / healthy / to / eat / exercise / food / and / regularly / is / it", 
            options: [
                "To eat healthy food and exercise regularly it is important.",
                "It is important to eat healthy food and exercise regularly.",
                "Healthy food to eat and exercise regularly is it important.",
                "It is regularly important to eat healthy food and exercise."
            ], 
            a: 1 
        },
        { 
            q: "exciting / vacation / during / family / the / our / had / an / holidays / school", 
            options: [
                "Our family had an exciting vacation during the school holidays.",
                "During the school holidays an exciting vacation our family had.",
                "Our family during the school holidays had an exciting vacation.",
                "An exciting vacation our family had during the school holidays."
            ], 
            a: 0 
        },
        { 
            q: "carefully / the / instructions / reading / before / exam / starting / the / read", 
            options: [
                "Before starting the exam read carefully the instructions.",
                "Read the instructions carefully before starting the exam.",
                "Reading the instructions carefully before start the exam.",
                "The instructions read carefully before starting the exam."
            ], 
            a: 1 
        },
        { 
            q: "museum / historical / visited / the / artifacts / learn / to / students / about / the", 
            options: [
                "The students visited the museum to learn about historical artifacts.",
                "To learn about historical artifacts the students visited the museum.",
                "The students to learn about historical artifacts visited the museum.",
                "Visited the museum the students to learn about historical artifacts."
            ], 
            a: 0 
        },
        { 
            q: "decorated / hall / beautifully / annual / the / dinner / was / for / the", 
            options: [
                "For the annual dinner the hall beautifully was decorated.",
                "The hall was beautifully decorated for the annual dinner.",
                "Beautifully the hall was decorated for the annual dinner.",
                "The annual dinner was beautifully decorated for the hall."
            ], 
            a: 1 
        },
        { 
            q: "surprisingly / managed / difficult / solve / he / puzzle / to / the / very / quickly", 
            options: [
                "Surprisingly he managed to solve the difficult puzzle very quickly.",
                "He managed surprisingly to solve very quickly the difficult puzzle.",
                "To solve the difficult puzzle very quickly he managed surprisingly.",
                "Surprisingly difficult puzzle he managed to solve very quickly."
            ], 
            a: 0 
        },
        { 
            q: "participating / students / many / activities / are / school / the / in / extracurricular", 
            options: [
                "In the school extracurricular activities many students are participating.",
                "Many students are participating in the school extracurricular activities.",
                "Many students participating are in the school extracurricular activities.",
                "Extracurricular activities are participating in the many school students."
            ], 
            a: 1 
        },
        { 
            q: "library / quiet / rules / observe / must / the / everyone / in / and / keep", 
            options: [
                "Everyone must observe the rules and keep quiet in the library.",
                "In the library everyone must keep quiet and observe rules.",
                "Everyone must keep quiet and rules observe in the library.",
                "Observe the rules everyone must and keep quiet in the library."
            ], 
            a: 0 
        },
        { 
            q: "confidently / delivered / speech / the / head / boy / morning / assembly / the / during", 
            options: [
                "During the morning assembly the head boy confidently delivered speech.",
                "The head boy confidently delivered the speech during the morning assembly.",
                "The head boy speech confidently delivered during the morning assembly.",
                "Confidently the head boy delivered during the morning assembly speech."
            ], 
            a: 1 
        },
        { 
            q: "environment / responsibility / our / to / protect / clean / the / keep / it / and / is", 
            options: [
                "To protect the environment and keep it clean is our responsibility.",
                "It is our responsibility to protect the environment and keep it clean.",
                "Our responsibility is to protect the environment and keep it clean.",
                "It is to protect the environment and keep it clean our responsibility."
            ], 
            a: 1 
        },
        { 
            q: "definitely / attend / will / farewell / party / teacher's / beloved / our / we", 
            options: [
                "We will definitely attend our beloved teacher's farewell party.",
                "Our beloved teacher's farewell party we will definitely attend.",
                "We definitely will attend our beloved teacher's farewell party.",
                "Definitely we will attend our beloved teacher's farewell party."
            ], 
            a: 0 
        },
        { 
            q: "unfortunately / cancelled / due / heavy / thunderstorm / outdoor / was / the / event / to", 
            options: [
                "Due to heavy thunderstorm unfortunately the outdoor event was cancelled.",
                "Unfortunately the outdoor event was cancelled due to heavy thunderstorm.",
                "The outdoor event was unfortunately cancelled due to heavy thunderstorm.",
                "Unfortunately due to heavy thunderstorm the outdoor event cancelled was."
            ], 
            a: 1 
        },
        { 
            q: "volunteers / collected / the / beach / rubbish / cleaning / campaign / along / during / the", 
            options: [
                "The volunteers collected rubbish along the beach during the cleaning campaign.",
                "During the cleaning campaign along the beach the volunteers collected rubbish.",
                "The volunteers during the cleaning campaign collected rubbish along the beach.",
                "Rubbish along the beach was collected by the volunteers during cleaning campaign."
            ], 
            a: 0 
        },
        { 
            q: "incredible / showed / magician / some / audience / tricks / amazed / the / to / the", 
            options: [
                "To the amazed audience the magician showed some incredible tricks.",
                "The magician showed some incredible tricks to the amazed audience.",
                "Some incredible tricks the magician showed to the amazed audience.",
                "The amazed audience showed some incredible tricks to the magician."
            ], 
            a: 1 
        },
        { 
            q: "carefully / chosen / representing / athletes / were / school / the / in / tournament / the", 
            options: [
                "The athletes representing the school in the tournament were carefully chosen.",
                "Carefully chosen were the athletes representing the school in tournament.",
                "The athletes were carefully chosen representing the school in tournament.",
                "In the tournament the athletes representing the school carefully chosen were."
            ], 
            a: 0 
        },
        { 
            q: "enthusiastic / cheering / loudly / supporters / team / for / their / favourite / were / the", 
            options: [
                "The enthusiastic supporters were cheering loudly for their favourite team.",
                "Loudly cheering for their favourite team were the enthusiastic supporters.",
                "The enthusiastic supporters for their favourite team were cheering loudly.",
                "Their favourite team were cheering loudly for the enthusiastic supporters."
            ], 
            a: 0 
        },
        { 
            q: "traditional / recipes / passed / generation / from / down / to / generation / been / have", 
            options: [
                "Traditional recipes have been passed down from generation to generation.",
                "From generation to generation traditional recipes have passed down been.",
                "Traditional recipes have passed down been from generation to generation.",
                "Have been passed down from generation to generation traditional recipes."
            ], 
            a: 0 
        },
        { 
            q: "responsible / citizens / rules / obey / the / always / country / of / the / good / and", 
            options: [
                "Good and responsible citizens always obey the rules of the country.",
                "The rules of the country always obey good and responsible citizens.",
                "Always obey the rules of the country good and responsible citizens.",
                "Good and responsible citizens obey always the rules of the country."
            ], 
            a: 0 
        }
    ],

pastTense: [
        { "q": "The bird ___ (fly) over the tall tree yesterday.", "a": "flew" },
        { "q": "She ___ (draw) a beautiful picture of a mountain last night.", "a": "drew" },
        { "q": "They ___ (build) a new hospital in our town last year.", "a": "built" },
        { "q": "My uncle ___ (send) me a special gift for my birthday.", "a": "sent" },
        { "q": "We ___ (spend) all our money at the mall yesterday.", "a": "spent" },
        { "q": "That gold necklace ___ (cost) a lot of money.", "a": "cost" },
        { "q": "The fire ___ (spread) quickly through the dry forest.", "a": "spread" },
        { "q": "His knee ___ (bleed) after he fell from the bicycle.", "a": "bled" },
        { "q": "I ___ (feed) the stray cats outside my house this morning.", "a": "fed" },
        { "q": "The tour guide ___ (lead) us through the dark cave.", "a": "led" },
        { "q": "We ___ (light) a campfire to keep ourselves warm last night.", "a": "lit" },
        { "q": "The police officer ___ (shoot) the target accurately.", "a": "shot" },
        { "q": "The car tires got ___ (stick) in the thick mud.", "a": "stuck" },
        { "q": "Lightning ___ (strike) the tall tower during the heavy storm.", "a": "struck" },
        { "q": "My mother ___ (sweep) the floor before the guests arrived.", "a": "swept" },
        { "q": "The little girl ___ (weep) when she lost her favorite doll.", "a": "wept" },
        { "q": "He ___ (bend) the thick metal wire with his bare hands.", "a": "bent" },
        { "q": "I ___ (lend) my dictionary to Sarah for her exam yesterday.", "a": "lent" },
        { "q": "I am sorry, I never ___ (mean) to hurt your feelings.", "a": "meant" },
        { "q": "Finally, the students ___ (understand) the difficult math formula.", "a": "understood" },
        { "q": "She bravely ___ (overcome) her fear of public speaking.", "a": "overcame" },
        { "q": "The ugly caterpillar ___ (become) a beautiful butterfly.", "a": "became" },
        { "q": "The neighbor's dog ___ (dig) a huge hole in our backyard.", "a": "dug" },
        { "q": "He ___ (hang) his wet coat behind the wooden door.", "a": "hung" },
        { "q": "My wool sweater ___ (shrink) after I washed it in hot water.", "a": "shrank" },
        { "q": "The heavy stone ___ (sink) to the bottom of the deep lake.", "a": "sank" },
        { "q": "A strong wind ___ (blow) away the important papers on my desk.", "a": "blew" },
        { "q": "The mother ___ (hold) her baby tightly during the loud thunder.", "a": "held" },
        { "q": "She kindly ___ (forgive) him for breaking her favorite vase.", "a": "forgave" },
        { "q": "He ___ (swear) to tell the truth in front of the judge.", "a": "swore" },
        { "q": "The angry customer ___ (tear) the receipt into tiny pieces.", "a": "tore" },
        { "q": "Everyone ___ (wear) traditional clothes to the cultural festival.", "a": "wore" },
        { "q": "The talented dancer ___ (spin) around gracefully on the stage.", "a": "spun" },
        { "q": "The green balloon ___ (burst) suddenly and scared all of us.", "a": "burst" },
        { "q": "The manager ___ (deal) with the complaining customer professionally.", "a": "dealt" },
        { "q": "The lake ___ (freeze) completely during the cold winter last year.", "a": "froze" },
        { "q": "He ___ (awake) early to the beautiful sound of birds singing.", "a": "awoke" },
        { "q": "The discipline teacher ___ (forbid) the students from bringing toys.", "a": "forbade" },
        { "q": "A new problem ___ (arise) during the weekly meeting yesterday.", "a": "arose" },
        { "q": "The old bridge ___ (bear) the weight of heavy trucks for many years.", "a": "bore" },
        { "q": "The farmer's chicken ___ (lay) three golden eggs yesterday.", "a": "laid" },
        { "q": "He was very tired, so he ___ (lie) down on the comfortable sofa.", "a": "lay" },
        { "q": "The colorful hot air balloon ___ (rise) high into the clear sky.", "a": "rose" },
        { "q": "The sun ___ (shine) brightly all day during our picnic yesterday.", "a": "shone" },
        { "q": "The happy children ___ (slide) down the slippery snowy hill.", "a": "slid" },
        { "q": "The cheeky monkey ___ (swing) from one branch to another quickly.", "a": "swung" },
        { "q": "Our school football team ___ (beat) the defending champions.", "a": "beat" },
        { "q": "My father ___ (let) me drive his new car last weekend.", "a": "let" },
        { "q": "She ___ (set) the table for dinner before the guests arrived.", "a": "set" },
        { "q": "He quickly ___ (shut) the front door because it was too cold outside.", "a": "shut" }
    ],
    
plural: [
        { "q": "One girl, many ...?", "a": "girls" },
        { "q": "One bird, two ...?", "a": "birds" },
        { "q": "One tree, several ...?", "a": "trees" },
        { "q": "One flower, many ...?", "a": "flowers" },
        { "q": "One house, a few ...?", "a": "houses" },
        { "q": "One door, two ...?", "a": "doors" },
        { "q": "One window, several ...?", "a": "windows" },
        { "q": "One shirt, many ...?", "a": "shirts" },
        { "q": "One shoe, a pair of ...?", "a": "shoes" },
        { "q": "One bag, two ...?", "a": "bags" },
        { "q": "One hat, several ...?", "a": "hats" },
        { "q": "One cup, many ...?", "a": "cups" },
        { "q": "One plate, two ...?", "a": "plates" },
        { "q": "One friend, a group of ...?", "a": "friends" },
        { "q": "One teacher, many ...?", "a": "teachers" },
        { "q": "One student, several ...?", "a": "students" },
        { "q": "One school, two ...?", "a": "schools" },
        { "q": "One animal, many ...?", "a": "animals" },
        { "q": "One star, a sky full of ...?", "a": "stars" },
        { "q": "One cloud, many ...?", "a": "clouds" },
        { "q": "One train, two ...?", "a": "trains" },
        { "q": "One boat, several ...?", "a": "boats" },
        { "q": "One desk, many ...?", "a": "desks" },
        { "q": "One bed, two ...?", "a": "beds" },
        { "q": "One room, several ...?", "a": "rooms" },
        { "q": "One bottle, many ...?", "a": "bottles" },
        { "q": "One cow, a herd of ...?", "a": "cows" },
        { "q": "One pig, many ...?", "a": "pigs" },
        { "q": "One horse, two ...?", "a": "horses" },
        { "q": "One duck, several ...?", "a": "ducks" },
        { "q": "One frog, many ...?", "a": "frogs" },
        { "q": "One snake, two ...?", "a": "snakes" },
        { "q": "One bear, several ...?", "a": "bears" },
        { "q": "One lion, many ...?", "a": "lions" },
        { "q": "One tiger, two ...?", "a": "tigers" },
        { "q": "One banana, a bunch of ...?", "a": "bananas" },
        { "q": "One orange, several ...?", "a": "oranges" },
        { "q": "One pear, many ...?", "a": "pears" },
        { "q": "One grape, a bunch of ...?", "a": "grapes" },
        { "q": "One carrot, two ...?", "a": "carrots" },
        { "q": "One fox, many ...?", "a": "foxes" },
        { "q": "One boss, two ...?", "a": "bosses" },
        { "q": "One dress, several ...?", "a": "dresses" },
        { "q": "One wish, many ...?", "a": "wishes" },
        { "q": "One bench, two ...?", "a": "benches" },
        { "q": "One peach, several ...?", "a": "peaches" },
        { "q": "One witch, many ...?", "a": "witches" },
        { "q": "One tax, two ...?", "a": "taxes" },
        { "q": "One kiss, many ...?", "a": "kisses" },
        { "q": "One bush, several ...?", "a": "bushes" },
        { "q": "One branch, many ...?", "a": "branches" },
        { "q": "One cross, two ...?", "a": "crosses" },
        { "q": "One sandwich, many ...?", "a": "sandwiches" },
        { "q": "One ostrich, several ...?", "a": "ostriches" },
        { "q": "One eyelash, many ...?", "a": "eyelashes" },
        { "q": "One fly, two ...?", "a": "flies" },
        { "q": "One lady, several ...?", "a": "ladies" },
        { "q": "One puppy, many ...?", "a": "puppies" },
        { "q": "One bunny, two ...?", "a": "bunnies" },
        { "q": "One penny, several ...?", "a": "pennies" },
        { "q": "One berry, a bowl of ...?", "a": "berries" },
        { "q": "One cherry, many ...?", "a": "cherries" },
        { "q": "One library, two ...?", "a": "libraries" },
        { "q": "One diary, several ...?", "a": "diaries" },
        { "q": "One fairy, many ...?", "a": "fairies" },
        { "q": "One tray, two ...?", "a": "trays" },
        { "q": "One guy, several ...?", "a": "guys" },
        { "q": "One turkey, many ...?", "a": "turkeys" },
        { "q": "One donkey, two ...?", "a": "donkeys" },
        { "q": "One valley, several ...?", "a": "valleys" },
        { "q": "One shelf, many ...?", "a": "shelves" },
        { "q": "One calf, two ...?", "a": "calves" },
        { "q": "One loaf, several ...?", "a": "loaves" },
        { "q": "One zoo, many ...?", "a": "zoos" },
        { "q": "One piano, two ...?", "a": "pianos" }
    ],
    
spelling: [
        { "q": "Fix the spelling: MUTHER", "a": "mother" },
        { "q": "Fix the spelling: FAUTHER", "a": "father" },
        { "q": "Fix the spelling: SISTAR", "a": "sister" },
        { "q": "Fix the spelling: BRUTHER", "a": "brother" },
        { "q": "Fix the spelling: CUZIN", "a": "cousin" },
        { "q": "Fix the spelling: GRANMOTHER", "a": "grandmother" },
        { "q": "Fix the spelling: UNKEL", "a": "uncle" },
        { "q": "Fix the spelling: AWNT", "a": "aunt" },
        { "q": "Fix the spelling: BABBY", "a": "baby" },
        { "q": "Fix the spelling: HOWSE", "a": "house" },
        { "q": "Fix the spelling: SKOOL", "a": "school" },
        { "q": "Fix the spelling: WINDO", "a": "window" },
        { "q": "Fix the spelling: BLANKIT", "a": "blanket" },
        { "q": "Fix the spelling: PILOW", "a": "pillow" },
        { "q": "Fix the spelling: CLOATHES", "a": "clothes" },
        { "q": "Fix the spelling: SHOOS", "a": "shoes" },
        { "q": "Fix the spelling: JAKET", "a": "jacket" },
        { "q": "Fix the spelling: GLASES", "a": "glasses" },
        { "q": "Fix the spelling: KAMERA", "a": "camera" },
        { "q": "Fix the spelling: TELAPHONE", "a": "telephone" },
        { "q": "Fix the spelling: WATTER", "a": "water" },
        { "q": "Fix the spelling: JOOCE", "a": "juice" },
        { "q": "Fix the spelling: COFEE", "a": "coffee" },
        { "q": "Fix the spelling: POTATOE", "a": "potato" },
        { "q": "Fix the spelling: TOMATOE", "a": "tomato" },
        { "q": "Fix the spelling: CHOCLATE", "a": "chocolate" },
        { "q": "Fix the spelling: SANWICH", "a": "sandwich" },
        { "q": "Fix the spelling: BISKIT", "a": "biscuit" },
        { "q": "Fix the spelling: VEGTABLE", "a": "vegetable" },
        { "q": "Fix the spelling: EATEING", "a": "eating" },
        { "q": "Fix the spelling: SLEPING", "a": "sleeping" },
        { "q": "Fix the spelling: MAKEING", "a": "making" },
        { "q": "Fix the spelling: PLAING", "a": "playing" },
        { "q": "Fix the spelling: RITING", "a": "writing" },
        { "q": "Fix the spelling: REDING", "a": "reading" },
        { "q": "Fix the spelling: LISENING", "a": "listening" },
        { "q": "Fix the spelling: WAUKING", "a": "walking" },
        { "q": "Fix the spelling: HAPY", "a": "happy" },
        { "q": "Fix the spelling: HEVY", "a": "heavy" },
        { "q": "Fix the spelling: LITE", "a": "light" },
        { "q": "Fix the spelling: BRITE", "a": "bright" },
        { "q": "Fix the spelling: FUNY", "a": "funny" },
        { "q": "Fix the spelling: QUIYT", "a": "quiet" },
        { "q": "Fix the spelling: NOIZY", "a": "noisy" },
        { "q": "Fix the spelling: SHOLDER", "a": "shoulder" },
        { "q": "Fix the spelling: STOMAK", "a": "stomach" },
        { "q": "Fix the spelling: FINGAR", "a": "finger" },
        { "q": "Fix the spelling: THUM", "a": "thumb" },
        { "q": "Fix the spelling: MOWTH", "a": "mouth" },
        { "q": "Fix the spelling: TOOTHE", "a": "tooth" },
        { "q": "Fix the spelling: WETHER", "a": "weather" },
        { "q": "Fix the spelling: SUMER", "a": "summer" },
        { "q": "Fix the spelling: WINTAR", "a": "winter" },
        { "q": "Fix the spelling: AUTUM", "a": "autumn" },
        { "q": "Fix the spelling: SPRIN", "a": "spring" },
        { "q": "Fix the spelling: MORNEING", "a": "morning" },
        { "q": "Fix the spelling: AFTERNUN", "a": "afternoon" },
        { "q": "Fix the spelling: EVNING", "a": "evening" },
        { "q": "Fix the spelling: NITE", "a": "night" },
        { "q": "Fix the spelling: MUNDAY", "a": "monday" },
        { "q": "Fix the spelling: TUSEDAY", "a": "tuesday" },
        { "q": "Fix the spelling: THIRSDAY", "a": "thursday" },
        { "q": "Fix the spelling: SATERDAY", "a": "saturday" },
        { "q": "Fix the spelling: JANURY", "a": "january" },
        { "q": "Fix the spelling: MARTCH", "a": "march" },
        { "q": "Fix the spelling: APREL", "a": "april" },
        { "q": "Fix the spelling: AUGOUST", "a": "august" },
        { "q": "Fix the spelling: OKTOBER", "a": "october" },
        { "q": "Fix the spelling: DESEMBER", "a": "december" },
        { "q": "Fix the spelling: ZIRO", "a": "zero" },
        { "q": "Fix the spelling: THRE", "a": "three" },
        { "q": "Fix the spelling: EIGTH", "a": "eight" },
        { "q": "Fix the spelling: TWELV", "a": "twelve" },
        { "q": "Fix the spelling: THIRTEN", "a": "thirteen" },
        { "q": "Fix the spelling: FOURTY", "a": "forty" }
    ],
        
guessing: [
        { "q": "I have hands but I cannot clap. I have a face but no eyes. What am I?", "a": "clock" },
        { "q": "I have a neck but no head. I hold water for you to drink. What am I?", "a": "bottle" },
        { "q": "I have many teeth but I cannot bite. I help to make your hair neat. What am I?", "a": "comb" },
        { "q": "I get wetter and wetter the more I dry you. What am I?", "a": "towel" },
        { "q": "I have one eye but I cannot see. I am used for sewing clothes. What am I?", "a": "needle" },
        { "q": "I am full of holes but I can still hold water. What am I?", "a": "sponge" },
        { "q": "I have keys but no locks. I have space but no rooms. You can enter but never leave. What am I?", "a": "keyboard" },
        { "q": "The more of me there is, the less you see. I happen at night. What am I?", "a": "darkness" },
        { "q": "I have a thumb and four fingers, but I have no flesh or bones. What am I?", "a": "glove" },
        { "q": "I follow you all day long, but when the sun goes down, I am gone. What am I?", "a": "shadow" },
        { "q": "I am the national flower of Malaysia. I am red and have five petals.", "a": "hibiscus" },
        { "q": "I am the king of fruits. I have a strong smell and sharp thorns.", "a": "durian" },
        { "q": "I am the highest mountain in Malaysia, located in Sabah.", "a": "mount kinabalu" },
        { "q": "I am the capital city of Malaysia where the Twin Towers are located.", "a": "kuala lumpur" },
        { "q": "I am known as the 'Land of the Hornbills' in Malaysia.", "a": "sarawak" },
        { "q": "I am the process where plants make their own food using sunlight.", "a": "photosynthesis" },
        { "q": "I am the gas that humans need to breathe in to stay alive.", "a": "oxygen" },
        { "q": "I am the force that pulls everything down to the ground.", "a": "gravity" },
        { "q": "I am the largest planet in our solar system.", "a": "jupiter" },
        { "q": "I am the closest star to the Earth and I give heat and light.", "a": "sun" },
        { "q": "I am an animal that can live both on land and in water, like a frog.", "a": "amphibian" },
        { "q": "I am a place where you go to borrow or read books.", "a": "library" },
        { "q": "I am the person who flies an airplane.", "a": "pilot" },
        { "q": "I am the person who helps the doctor treat sick people.", "a": "nurse" },
        { "q": "I am a place where many wild animals are kept for people to see.", "a": "zoo" },
        { "q": "I am the largest land animal and I have a long trunk.", "a": "elephant" },
        { "q": "I am a very tall animal with a very long neck.", "a": "giraffe" },
        { "q": "I am known as the 'King of the Jungle'.", "a": "lion" },
        { "q": "I am an insect that makes sweet honey.", "a": "bee" },
        { "q": "I am a bird that cannot fly but I can run very fast.", "a": "ostrich" },
        { "q": "I am the meal that you eat in the morning.", "a": "breakfast" },
        { "q": "I am the direction where the sun rises every morning.", "a": "east" },
        { "q": "I am the number of days in a week.", "a": "seven" },
        { "q": "I am the first month of the year.", "a": "january" },
        { "q": "I am a tool used to protect you from the rain or hot sun.", "a": "umbrella" },
        { "q": "I am a small tool used to cut paper or cloth.", "a": "scissors" },
        { "q": "I am a place where you can save or keep your money safely.", "a": "bank" },
        { "q": "I am the red liquid that flows inside your body.", "a": "blood" },
        { "q": "I am the hardest part of your body used for chewing food.", "a": "teeth" },
        { "q": "I am a planet famous for the beautiful rings around me.", "a": "saturn" },
        { "q": "I am the process when water turns into ice because it is very cold.", "a": "freezing" },
        { "q": "I am a fruit that is usually red or green and keeps the doctor away.", "a": "apple" },
        { "q": "I am the currency or money used in Malaysia.", "a": "ringgit" },
        { "q": "I am a person who creates beautiful paintings or drawings.", "a": "artist" },
        { "q": "I am the room in the house where your mother cooks food.", "a": "kitchen" },
        { "q": "I am an animal with a shell on my back and I move very slowly.", "a": "snail" },
        { "q": "I am the largest animal in the ocean.", "a": "blue whale" },
        { "q": "I am a shape that has three sides and three corners.", "a": "triangle" },
        { "q": "I am the natural satellite that orbits the Earth and shines at night.", "a": "moon" },
        { "q": "I am the third planet from the sun and it is our home.", "a": "earth" }
    ],
        
puzzle: [
        { "q": "O-O-L-C-H-S", "a": "school" },
        { "q": "T-E-N-S-U-D-T", "a": "student" },
        { "q": "G-N-I-N-R-O-M", "a": "morning" },
        { "q": "N-I-V-E-E-G-N", "a": "evening" },
        { "q": "R-E-T-C-I-U-P", "a": "picture" },
        { "q": "T-E-N-A-K-L-B", "a": "blanket" },
        { "q": "W-O-L-P-L-I", "a": "pillow" },
        { "q": "R-O-I-M-R-R", "a": "mirror" },
        { "q": "T-E-S-K-A-B", "a": "basket" },
        { "q": "K-E-T-C-O-P", "a": "pocket" },
        { "q": "K-E-T-C-A-J", "a": "jacket" },
        { "q": "R-E-T-A-E-W-S", "a": "sweater" },
        { "q": "S-E-G-L-S-S-A", "a": "glasses" },
        { "q": "B-I-T-B-A-R", "a": "rabbit" },
        { "q": "Y-E-K-N-O-M", "a": "monkey" },
        { "q": "R-E-D-I-P-S", "a": "spider" },
        { "q": "D-R-A-Z-I-L", "a": "lizard" },
        { "q": "T-O-R-A-R-P", "a": "parrot" },
        { "q": "N-O-E-G-I-P", "a": "pigeon" },
        { "q": "N-I-U-G-E-P-N", "a": "penguin" },
        { "q": "T-C-E-S-N-I", "a": "insect" },
        { "q": "M-O-T-O-T-A", "a": "tomato" },
        { "q": "T-A-O-T-O-P", "a": "potato" },
        { "q": "G-E-A-B-C-B-A", "a": "cabbage" },
        { "q": "N-A-N-A-B-A", "a": "banana" },
        { "q": "T-U-N-O-C-O-C", "a": "coconut" },
        { "q": "T-U-I-C-S-I-B", "a": "biscuit" },
        { "q": "L-E-D-O-O-N", "a": "noodle" },
        { "q": "R-E-T-T-U-B", "a": "butter" },
        { "q": "E-S-E-E-H-C", "a": "cheese" },
        { "q": "T-E-R-C-P-A", "a": "carpet" },
        { "q": "R-E-W-A-R-D", "a": "drawer" },
        { "q": "M-E-R-C-A-A", "a": "camera" },
        { "q": "R-O-T-C-O-D", "a": "doctor" },
        { "q": "E-C-I-L-O-P", "a": "police" },
        { "q": "R-E-V-I-R-D", "a": "driver" },
        { "q": "R-E-G-N-I-S", "a": "singer" },
        { "q": "R-E-Y-A-L-P", "a": "player" },
        { "q": "R-A-T-I-U-G", "a": "guitar" },
        { "q": "N-I-L-O-I-V", "a": "violin" },
        { "q": "K-E-T-C-I-T", "a": "ticket" },
        { "q": "M-A-E-N-I-C", "a": "cinema" },
        { "q": "M-U-E-S-U-M", "a": "museum" },
        { "q": "M-U-I-D-A-T-S", "a": "stadium" },
        { "q": "N-O-I-T-A-T-S", "a": "station" },
        { "q": "T-R-O-P-R-I-A", "a": "airport" },
        { "q": "C-I-F-F-A-R-T", "a": "traffic" },
        { "q": "E-N-I-H-C-A-M", "a": "machine" },
        { "q": "Y-R-O-T-C-A-F", "a": "factory" },
        { "q": "T-S-E-R-O-F", "a": "forest" },
        { "q": "D-N-A-L-S-I", "a": "island" },
        { "q": "R-E-V-I-R", "a": "river" },
        { "q": "N-A-E-C-O", "a": "ocean" },
        { "q": "T-R-E-S-E-D", "a": "desert" },
        { "q": "T-E-N-A-L-P", "a": "planet" },
        { "q": "T-E-K-C-O-R", "a": "rocket" },
        { "q": "R-E-V-L-I-S", "a": "silver" },
        { "q": "R-E-P-P-O-C", "a": "copper" },
        { "q": "N-E-D-L-O-G", "a": "golden" },
        { "q": "E-L-P-R-U-P", "a": "purple" },
        { "q": "E-Z-N-O-R-B", "a": "bronze" },
        { "q": "E-R-A-U-Q-S", "a": "square" },
        { "q": "E-L-C-R-I-C", "a": "circle" },
        { "q": "N-I-A-T-R-U-C", "a": "curtain" },
        { "q": "R-E-H-T-O-R-B", "a": "brother" },
        { "q": "R-E-T-S-I-S", "a": "sister" },
        { "q": "N-I-S-U-O-C", "a": "cousin" },
        { "q": "E-L-C-N-U", "a": "uncle" },
        { "q": "Y-H-T-L-A-E-H", "a": "healthy" },
        { "q": "L-U-F-E-R-A-C", "a": "careful" },
        { "q": "R-A-L-U-P-O-P", "a": "popular" },
        { "q": "L-A-I-C-E-P-S", "a": "special" },
        { "q": "E-G-N-A-R-T-S", "a": "strange" },
        { "q": "Y-T-S-R-I-H-T", "a": "thirsty" },
        { "q": "Y-R-G-N-U-H", "a": "hungry" }
    ],
        
synonym: [
        { "q": "Replace with a SYNONYM: The elephant at Zoo Negara is very ___ (big).", "a": "huge" },
        { "q": "Replace with a SYNONYM: Ali ran very ___ (fast) to catch the school bus.", "a": "quick" },
        { "q": "Replace with a SYNONYM: The ___ (smart) student won the spelling bee competition.", "a": "clever" },
        { "q": "Replace with a SYNONYM: The ants carrying the sugar are very ___ (small).", "a": "tiny" },
        { "q": "Replace with a SYNONYM: She wore a ___ (beautiful) dress to the dinner.", "a": "pretty" },
        { "q": "Replace with a SYNONYM: The library is a ___ (quiet) place to study.", "a": "silent" },
        { "q": "Replace with a SYNONYM: The English homework today was quite ___ (simple).", "a": "easy" },
        { "q": "Replace with a SYNONYM: Ahmad did not go to school because he was ___ (sick).", "a": "ill" },
        { "q": "Replace with a SYNONYM: The teacher was ___ (angry) when the students made noise.", "a": "mad" },
        { "q": "Replace with a SYNONYM: I received a special ___ (gift) for my birthday.", "a": "present" },
        { "q": "Replace with a SYNONYM: The assembly will ___ (begin) at 7:30 a.m.", "a": "start|commence" },
        { "q": "Replace with a SYNONYM: The little girl felt ___ (sad) when she lost her doll.", "a": "unhappy" },
        { "q": "Replace with a SYNONYM: Mr. Bean always makes us laugh because he is ___ (funny).", "a": "hilarious" },
        { "q": "Replace with a SYNONYM: Please do not ___ (shout) inside the hospital.", "a": "yell|scream" },
        { "q": "Replace with a SYNONYM: My little brother is ___ (scared) of the dark.", "a": "afraid" },
        { "q": "Replace with a SYNONYM: The ___ (rich) businessman donated money to the orphanage.", "a": "wealthy" },
        { "q": "Replace with a SYNONYM: My mother went to the market to ___ (buy) some fish.", "a": "purchase" },
        { "q": "Replace with a SYNONYM: You must ___ (finish) your food before going out to play.", "a": "end" },
        { "q": "Replace with a SYNONYM: Can you please ___ (help) me carry these heavy books?", "a": "assist" },
        { "q": "Replace with a SYNONYM: My father's ___ (job) is a police officer.", "a": "work" },
        { "q": "Replace with a SYNONYM: The baker wants to ___ (make) a chocolate cake.", "a": "create" },
        { "q": "Replace with a SYNONYM: Please keep your classroom ___ (neat) and tidy.", "a": "clean" },
        { "q": "Replace with a SYNONYM: We visited an ___ (old) museum in Melaka.", "a": "ancient" },
        { "q": "Replace with a SYNONYM: Make sure your answer for the math quiz is ___ (right).", "a": "correct" },
        { "q": "Replace with a SYNONYM: Keep your password ___ (safe) from strangers.", "a": "secure" },
        { "q": "Replace with a SYNONYM: The weather in December is usually ___ (cold) and rainy.", "a": "chilly" },
        { "q": "Replace with a SYNONYM: Wash your hands if they are ___ (dirty).", "a": "messy" },
        { "q": "Replace with a SYNONYM: I really ___ (enjoy) playing badminton with my friends.", "a": "like" },
        { "q": "Replace with a SYNONYM: Siti Nurhaliza is a ___ (famous) singer in Malaysia.", "a": "popular" },
        { "q": "Replace with a SYNONYM: The nasi lemak at that stall is very ___ (good).", "a": "tasty" },
        { "q": "Replace with a SYNONYM: The final exam was very ___ (hard) for the students.", "a": "difficult" },
        { "q": "Replace with a SYNONYM: Drinking enough water is ___ (important) for our health.", "a": "crucial" },
        { "q": "Replace with a SYNONYM: The frog can ___ (jump) very high.", "a": "leap|hop" },
        { "q": "Replace with a SYNONYM: A ___ (lazy) student will not finish his homework.", "a": "idle" },
        { "q": "Replace with a SYNONYM: There are ___ (many) people at the night market.", "a": "plenty" },
        { "q": "Replace with a SYNONYM: He bought a pair of ___ (new) shoes for the school sports day.", "a": "modern" },
        { "q": "Replace with a SYNONYM: We must be ___ (polite) to our parents and teachers.", "a": "respectful" },
        { "q": "Replace with a SYNONYM: The ___ (strong) man lifted the heavy box easily.", "a": "powerful" },
        { "q": "Replace with a SYNONYM: I feel very ___ (tired) after jogging in the park.", "a": "exhausted" },
        { "q": "Replace with a SYNONYM: The sick patient felt too ___ (weak) to walk.", "a": "fragile" },
        { "q": "Replace with a SYNONYM: I will ___ (reply) to your email tomorrow.", "a": "answer" },
        { "q": "Replace with a SYNONYM: Please ___ (choose) your favorite color.", "a": "pick" },
        { "q": "Replace with a SYNONYM: The cat is hiding ___ (under) the table.", "a": "below" },
        { "q": "Replace with a SYNONYM: The pizza is placed in the ___ (center) of the table.", "a": "middle" },
        { "q": "Replace with a SYNONYM: The ___ (brave) fireman saved the cat from the tree.", "a": "courageous" },
        { "q": "Replace with a SYNONYM: Can you ___ (tell) me the way to the library?", "a": "inform" },
        { "q": "Replace with a SYNONYM: The food was completely ___ (wrong) from what I ordered.", "a": "incorrect" },
        { "q": "Replace with a SYNONYM: Always ___ (keep) your money safely in the bank.", "a": "hold" },
        { "q": "Replace with a SYNONYM: You must ___ (use) a pencil for this drawing.", "a": "utilize" },
        { "q": "Replace with a SYNONYM: We will ___ (always) remember our beloved teacher.", "a": "constantly" }
    ],
        
    antonym: [
        { "q": "Replace with an ANTONYM: The weather in Cameron Highlands is very ___ (hot).", "a": "cold" },
        { "q": "Replace with an ANTONYM: Please sit ___ (up) when the teacher enters the class.", "a": "down" },
        { "q": "Replace with an ANTONYM: Smoking is a very ___ (good) habit for your health.", "a": "bad" },
        { "q": "Replace with an ANTONYM: The tortoise walks very ___ (fast) towards the finish line.", "a": "slow" },
        { "q": "Replace with an ANTONYM: The boy felt ___ (happy) when he failed his exam.", "a": "sad" },
        { "q": "Replace with an ANTONYM: The mouse is a very ___ (big) animal.", "a": "small" },
        { "q": "Replace with an ANTONYM: The elephant is a very ___ (light) animal.", "a": "heavy" },
        { "q": "Replace with an ANTONYM: The bats come out of the cave at ___ (day).", "a": "night" },
        { "q": "Replace with an ANTONYM: Please ___ (open) the door before you leave the room.", "a": "close" },
        { "q": "Replace with an ANTONYM: My grandfather drives an ___ (new) car.", "a": "old" },
        { "q": "Replace with an ANTONYM: The ___ (rich) beggar asked for some food.", "a": "poor" },
        { "q": "Replace with an ANTONYM: This math question is very ___ (hard) for me to answer.", "a": "easy" },
        { "q": "Replace with an ANTONYM: The water bottle is completely ___ (full) because he drank it all.", "a": "empty" },
        { "q": "Replace with an ANTONYM: Do not wear those ___ (clean) shoes into the house.", "a": "dirty" },
        { "q": "Replace with an ANTONYM: The sick puppy is too ___ (strong) to stand up.", "a": "weak" },
        { "q": "Replace with an ANTONYM: Your answer for question number five is ___ (right).", "a": "wrong" },
        { "q": "Replace with an ANTONYM: The ___ (tall) boy could not reach the top shelf.", "a": "short" },
        { "q": "Replace with an ANTONYM: The witch in the story was very ___ (beautiful).", "a": "ugly" },
        { "q": "Replace with an ANTONYM: The ___ (brave) dog ran away when it saw a cat.", "a": "coward" },
        { "q": "Replace with an ANTONYM: A diamond ring is very ___ (cheap).", "a": "expensive" },
        { "q": "Replace with an ANTONYM: The baby started to ___ (laugh) when he fell down.", "a": "cry" },
        { "q": "Replace with an ANTONYM: Do not come ___ (early) to school, or you will miss the bus.", "a": "late" },
        { "q": "Replace with an ANTONYM: He eats healthy food to stay ___ (fat).", "a": "thin" },
        { "q": "Replace with an ANTONYM: December is the ___ (first) month of the year.", "a": "last" },
        { "q": "Replace with an ANTONYM: The superhero fought his ___ (friend) to save the city.", "a": "enemy" },
        { "q": "Replace with an ANTONYM: Please ___ (take) this gift for your birthday.", "a": "give" },
        { "q": "Replace with an ANTONYM: The students are playing ___ (inside) the classroom during recess.", "a": "outside" },
        { "q": "Replace with an ANTONYM: The library is a very ___ (loud) place.", "a": "quiet" },
        { "q": "Replace with an ANTONYM: I really ___ (love) eating bitter gourd.", "a": "hate" },
        { "q": "Replace with an ANTONYM: My house is located very ___ (near) from the school.", "a": "far" },
        { "q": "Replace with an ANTONYM: He ___ (never) brushes his teeth before sleeping.", "a": "always" },
        { "q": "Replace with an ANTONYM: You must ___ (pull) the door to open it from inside.", "a": "push" },
        { "q": "Replace with an ANTONYM: The baby's skin is very ___ (rough).", "a": "smooth" },
        { "q": "Replace with an ANTONYM: It is ___ (safe) to play with fire.", "a": "dangerous" },
        { "q": "Replace with an ANTONYM: My twin brother and I go to ___ (same) schools.", "a": "different" },
        { "q": "Replace with an ANTONYM: The movie will ___ (start) in five minutes.", "a": "end" },
        { "q": "Replace with an ANTONYM: This lemon juice tastes very ___ (sweet).", "a": "sour" },
        { "q": "Replace with an ANTONYM: He is reading a very ___ (thick) comic book.", "a": "thin" },
        { "q": "Replace with an ANTONYM: The rumor about the ghost is completely ___ (true).", "a": "false" },
        { "q": "Replace with an ANTONYM: Our school football team will ___ (win) the match tomorrow.", "a": "lose" },
        { "q": "Replace with an ANTONYM: My grandmother is a very ___ (young) woman.", "a": "old" },
        { "q": "Replace with an ANTONYM: The fish in the dry pond are all ___ (alive).", "a": "dead" },
        { "q": "Replace with an ANTONYM: Do not make noise, the baby is ___ (awake).", "a": "asleep" },
        { "q": "Replace with an ANTONYM: Please be ___ (careless) when crossing the busy road.", "a": "careful" },
        { "q": "Replace with an ANTONYM: The wicked stepmother was very ___ (kind) to Cinderella.", "a": "cruel" },
        { "q": "Replace with an ANTONYM: The children are swimming in the ___ (deep) end of the pool.", "a": "shallow" },
        { "q": "Replace with an ANTONYM: A heavy stone will ___ (float) in the water.", "a": "sink" },
        { "q": "Replace with an ANTONYM: The ___ (generous) boy refused to share his toys.", "a": "stingy" },
        { "q": "Replace with an ANTONYM: Eating lots of vegetables will make you ___ (sick).", "a": "healthy" },
        { "q": "Replace with an ANTONYM: The thief tried to ___ (exit) the house through the window.", "a": "enter" }
    ],

occupations: [
        { "q": "A person who teaches students in a school or classroom.", "a": "teacher" },
        { "q": "A person who treats sick or injured people.", "a": "doctor" },
        { "q": "A person who helps doctors look after sick people in a hospital.", "a": "nurse" },
        { "q": "A doctor who checks and fixes your teeth.", "a": "dentist" },
        { "q": "A person who puts out fires and saves people.", "a": "firefighter" },
        { "q": "A person who catches thieves and keeps the city safe.", "a": "police officer" },
        { "q": "A person who flies an airplane or helicopter.", "a": "pilot" },
        { "q": "A person who travels into outer space in a rocket.", "a": "astronaut" },
        { "q": "A person who bakes and sells bread, cakes, and cookies.", "a": "baker" },
        { "q": "A person who cooks delicious food in a restaurant.", "a": "chef" },
        { "q": "A person who grows crops and takes care of farm animals.", "a": "farmer" },
        { "q": "A person who uses their voice to make music and sing songs.", "a": "singer" },
        { "q": "A man who performs in movies, television, or plays.", "a": "actor" },
        { "q": "A woman who performs in movies, television, or plays.", "a": "actress" },
        { "q": "A person who moves their body beautifully to music.", "a": "dancer" },
        { "q": "A person who paints, draws, or makes beautiful art.", "a": "artist" },
        { "q": "A person who writes books, stories, or articles.", "a": "writer" },
        { "q": "A person who delivers letters and parcels to your house.", "a": "postman" },
        { "q": "A person who fixes cars, motorcycles, and engines.", "a": "mechanic" },
        { "q": "A person who makes and fixes things made of wood.", "a": "carpenter" },
        { "q": "A person who fixes broken water pipes and toilets.", "a": "plumber" },
        { "q": "A person who fixes wires, lights, and electricity.", "a": "electrician" },
        { "q": "A person who cuts men's hair and shaves beards.", "a": "barber" },
        { "q": "A person who cuts, washes, and styles hair.", "a": "hairdresser" },
        { "q": "A man who takes your order and serves food in a restaurant.", "a": "waiter" },
        { "q": "A woman who takes your order and serves food in a restaurant.", "a": "waitress" },
        { "q": "A person you pay money to when you buy things in a shop.", "a": "cashier" },
        { "q": "A person who cuts and sells fresh meat.", "a": "butcher" },
        { "q": "A person who catches fish from the sea or river.", "a": "fisherman" },
        { "q": "A person who works on a boat or a ship.", "a": "sailor" },
        { "q": "A person who wears a uniform and protects the country.", "a": "soldier" },
        { "q": "A special doctor who treats sick animals and pets.", "a": "veterinarian" },
        { "q": "A person who does experiments in a laboratory.", "a": "scientist" },
        { "q": "A person who makes the final decisions in a court of law.", "a": "judge" },
        { "q": "A person who knows the law and helps people in court.", "a": "lawyer" },
        { "q": "A person who takes care of the books in a library.", "a": "librarian" },
        { "q": "A person who draws the plans for building a house.", "a": "architect" },
        { "q": "A person who takes pictures using a camera.", "a": "photographer" },
        { "q": "A person who finds out the news and tells it on TV.", "a": "reporter" },
        { "q": "A person who performs magic tricks to entertain people.", "a": "magician" },
        { "q": "A funny person with a red nose and colorful clothes who makes people laugh.", "a": "clown" },
        { "q": "A person who does amazing jumps and flips in a circus.", "a": "acrobat" },
        { "q": "A person who sweeps and keeps buildings clean and tidy.", "a": "cleaner" },
        { "q": "A person who stands at a gate to protect a building.", "a": "guard" },
        { "q": "A person who sews, makes, or alters clothes for people.", "a": "tailor" },
        { "q": "A person who paints the walls of a house or building.", "a": "painter" },
        { "q": "A person who arranges and sells beautiful flowers.", "a": "florist" },
        { "q": "A person who feeds and takes care of animals in a zoo.", "a": "zookeeper" },
        { "q": "A person who watches the swimming pool or beach to save people from drowning.", "a": "lifeguard" },
        { "q": "A person who writes code to make computer software or games.", "a": "programmer" },
        { "q": "A person who designs bridges, roads, or machines.", "a": "engineer" },
        { "q": "A person who gives out medicine at a pharmacy.", "a": "pharmacist" },
        { "q": "A special doctor who performs medical operations on people.", "a": "surgeon" },
        { "q": "A person who is very good at sports and competes in games.", "a": "athlete" },
        { "q": "A person who plays a musical instrument, like a piano or guitar.", "a": "musician" },
        { "q": "A person who drives a large vehicle to take people to school or work.", "a": "bus driver" },
        { "q": "A person who drives a car to take passengers where they want to go.", "a": "taxi driver" },
        { "q": "A person who serves food and helps passengers on an airplane.", "a": "flight attendant" },
        { "q": "A person whose job is to wear and show off beautiful clothes.", "a": "model" },
        { "q": "A person who empties the dustbins and takes away the rubbish.", "a": "garbage collector" },
        { "q": "A person who helps customers find things to buy in a store.", "a": "shop assistant" },
        { "q": "A person who types letters, answers the phone, and helps in an office.", "a": "secretary" },
        { "q": "A person who greets visitors when they walk into a hotel or clinic.", "a": "receptionist" },
        { "q": "A person who builds walls using bricks and cement.", "a": "bricklayer" },
        { "q": "A person who plants seeds and takes care of the garden.", "a": "gardener" },
        { "q": "A person who wears special gear to swim deep underwater for work.", "a": "diver" },
        { "q": "A person whose job is to fix broken shoes.", "a": "cobbler" },
        { "q": "A person who has written a book or many books.", "a": "author" },
        { "q": "A person who writes beautiful poems.", "a": "poet" },
        { "q": "A person who is elected to work in the government.", "a": "politician" },
        { "q": "The chosen leader of a country or a republic.", "a": "president" },
        { "q": "A man from a royal family who rules a country.", "a": "king" },
        { "q": "A woman from a royal family who rules a country.", "a": "queen" },
        { "q": "A person who cleans and takes care of a school or large building.", "a": "janitor" },
        { "q": "A person who brings food or packages to your front door.", "a": "delivery man" }
    ],

genderNouns: [
        { "q": "Male: Papa ➔ Female: ?", "a": "mama" },
        { "q": "Male: Daddy ➔ Female: ?", "a": "mummy" },
        { "q": "Male: Grandpa ➔ Female: ?", "a": "grandma" },
        { "q": "Male: Granddad ➔ Female: ?", "a": "granny" },
        { "q": "Male: Stepfather ➔ Female: ?", "a": "stepmother" },
        { "q": "Male: Stepson ➔ Female: ?", "a": "stepdaughter" },
        { "q": "Male: Stepbrother ➔ Female: ?", "a": "stepsister" },
        { "q": "Male: Father-in-law ➔ Female: ?", "a": "mother-in-law" },
        { "q": "Male: Son-in-law ➔ Female: ?", "a": "daughter-in-law" },
        { "q": "Male: Brother-in-law ➔ Female: ?", "a": "sister-in-law" },
        { "q": "Male: Great-grandfather ➔ Female: ?", "a": "great-grandmother" },
        { "q": "Male: Great-uncle ➔ Female: ?", "a": "great-aunt" },
        { "q": "Male: Godfather ➔ Female: ?", "a": "godmother" },
        { "q": "Male: Godson ➔ Female: ?", "a": "goddaughter" },
        { "q": "Male: Boyfriend ➔ Female: ?", "a": "girlfriend" },
        { "q": "Male: Schoolboy ➔ Female: ?", "a": "schoolgirl" },
        { "q": "Male: Headmaster ➔ Female: ?", "a": "headmistress" },
        { "q": "Male: Policeman ➔ Female: ?", "a": "policewoman" },
        { "q": "Male: Postman ➔ Female: ?", "a": "postwoman" },
        { "q": "Male: Businessman ➔ Female: ?", "a": "businesswoman" },
        { "q": "Male: Salesman ➔ Female: ?", "a": "saleswoman" },
        { "q": "Male: Sportsman ➔ Female: ?", "a": "sportswoman" },
        { "q": "Male: Superman ➔ Female: ?", "a": "superwoman" },
        { "q": "Male: Snowman ➔ Female: ?", "a": "snowwoman" },
        { "q": "Male: Merman ➔ Female: ?", "a": "mermaid" },
        { "q": "Male: Landlord ➔ Female: ?", "a": "landlady" },
        { "q": "Male: Baron ➔ Female: ?", "a": "baroness" },
        { "q": "Male: Sultan ➔ Female: ?", "a": "sultana" },
        { "q": "Male: Sorcerer ➔ Female: ?", "a": "sorceress" },
        { "q": "Male: Giant ➔ Female: ?", "a": "giantess" },
        { "q": "Male: Hunter ➔ Female: ?", "a": "huntress" },
        { "q": "Male: Founder ➔ Female: ?", "a": "foundress" },
        { "q": "Male: Instructor ➔ Female: ?", "a": "instructress" },
        { "q": "Male: Conductor ➔ Female: ?", "a": "conductress" },
        { "q": "Male: Director ➔ Female: ?", "a": "directress" },
        { "q": "Male: Protector ➔ Female: ?", "a": "protectress" },
        { "q": "Male: Tailor ➔ Female: ?", "a": "seamstress" },
        { "q": "Male: Poet ➔ Female: ?", "a": "poetess" },
        { "q": "Male: Author ➔ Female: ?", "a": "authoress" },
        { "q": "Male: Patron ➔ Female: ?", "a": "patroness" },
        { "q": "Male: Lad ➔ Female: ?", "a": "lass" },
        { "q": "Male: Billy goat ➔ Female: ?", "a": "nanny goat" },
        { "q": "Male: Tomcat ➔ Female: ?", "a": "tabby cat" },
        { "q": "Male: Buck (Deer/Rabbit) ➔ Female: ?", "a": "doe" },
        { "q": "Male: Stag (Deer) ➔ Female: ?", "a": "hind" },
        { "q": "Male: Cob (Swan) ➔ Female: ?", "a": "pen" },
        { "q": "Male: Leopard ➔ Female: ?", "a": "leopardess" },
        { "q": "Male: Panther ➔ Female: ?", "a": "pantheress" },
        { "q": "Male: Bull elephant ➔ Female: ?", "a": "cow elephant" },
        { "q": "Male: Jack (Donkey) ➔ Female: ?", "a": "jenny" },
        { "q": "Male: He-bear ➔ Female: ?", "a": "she-bear" },
        { "q": "Male: He-wolf ➔ Female: ?", "a": "she-wolf" },
        { "q": "Male: Grandnephew ➔ Female: ?", "a": "grandniece" },
        { "q": "Male: Milkman ➔ Female: ?", "a": "milkmaid" },
        { "q": "Male: Fisherman ➔ Female: ?", "a": "fisherwoman" },
        { "q": "Male: Craftsman ➔ Female: ?", "a": "craftswoman" },
        { "q": "Male: Congressman ➔ Female: ?", "a": "congresswoman" },
        { "q": "Male: Spokesman ➔ Female: ?", "a": "spokeswoman" },
        { "q": "Male: Cameraman ➔ Female: ?", "a": "camerawoman" },
        { "q": "Male: Anchorman ➔ Female: ?", "a": "anchorwoman" },
        { "q": "Male: Fireman ➔ Female: ?", "a": "firewoman" },
        { "q": "Male: Caveman ➔ Female: ?", "a": "cavewoman" },
        { "q": "Male: Ferryman ➔ Female: ?", "a": "ferrywoman" },
        { "q": "Male: Kinsman ➔ Female: ?", "a": "kinswoman" },
        { "q": "Male: Madman ➔ Female: ?", "a": "madwoman" },
        { "q": "Male: Nobleman ➔ Female: ?", "a": "noblewoman" },
        { "q": "Male: Englishman ➔ Female: ?", "a": "englishwoman" },
        { "q": "Male: Frenchman ➔ Female: ?", "a": "frenchwoman" },
        { "q": "Male: Irishman ➔ Female: ?", "a": "irishwoman" },
        { "q": "Male: Scotsman ➔ Female: ?", "a": "scotswoman" },
        { "q": "Male: Welshman ➔ Female: ?", "a": "welshwoman" },
        { "q": "Male: Granduncle ➔ Female: ?", "a": "grandaunt" },
        { "q": "Male: Stepnephew ➔ Female: ?", "a": "stepniece" },
        { "q": "Male: Watchman ➔ Female: ?", "a": "watchwoman" },
        { "q": "Male: Horseman ➔ Female: ?", "a": "horsewoman" }
    ],

    idioms: [
        { q: "The math test was very easy. It was a piece of ______.", a: "cake" },
        { q: "I am feeling slightly ill today. I am feeling under the ______.", a: "weather" },
        { q: "Good luck on your performance! Break a ______!", a: "leg" },
        { q: "That new phone is too expensive. It costs an arm and a ______.", a: "leg" },
        { q: "She accidentally revealed the secret party. She spilled the ______.", a: "beans" },
        { q: "I am very tired, it is time to go to sleep. It's time to hit the ______.", a: "sack" },
        { q: "We rarely go to the cinema, only once in a blue ______.", a: "moon" },
        { q: "Hold your ______. (Wait a moment / Be patient)", a: "horses" },
        { q: "The secret is out. You let the cat out of the ______.", a: "bag" },
        { q: "You are exactly right! You hit the nail on the ______.", a: "head" },
        { q: "To pass away or die is to kick the ______.", a: "bucket" },
        { q: "Are you joking with me? Are you pulling my ______?", a: "leg" },
        { q: "To force yourself to do something difficult is to bite the ______.", a: "bullet" },
        { q: "I barely passed the exam by the skin of my ______.", a: "teeth" },
        { q: "What's done is done. Don't cry over spilled ______.", a: "milk" },
        { q: "There is always hope. Every cloud has a silver ______.", a: "lining" },
        { q: "To do more than is expected is to go the extra ______.", a: "mile" },
        { q: "I heard a rumor about it on the ______.", a: "grapevine" },
        { q: "I have a big exam tomorrow, I need to hit the ______.", a: "books" },
        { q: "Sometimes, it's better not to know. Ignorance is ______.", a: "bliss" },
        { q: "Both people are responsible. It takes two to ______.", a: "tango" },
        { q: "Do not interfere with a situation to avoid trouble. Let sleeping dogs ______.", a: "lie" },
        { q: "You are too late for the opportunity. You missed the ______.", a: "boat" },
        { q: "You must work hard to see results. No pain, no ______.", a: "gain" },
        { q: "I can't decide which one to choose. I am on the ______.", a: "fence" },
        { q: "It happened unexpectedly, completely out of the ______.", a: "blue" },
        { q: "Rescued at the last possible moment. Saved by the ______.", a: "bell" },
        { q: "I was extremely ill yesterday. I was sick as a ______.", a: "dog" },
        { q: "Taking attention away from someone else is to steal their ______.", a: "thunder" },
        { q: "Don't believe everything completely. Take it with a grain of ______.", a: "salt" },
        { q: "It's your turn to make a decision. The ball is in your ______.", a: "court" },
        { q: "An obvious problem that no one wants to discuss. The elephant in the ______.", a: "room" },
        { q: "To support someone in good and bad times: Through thick and ______.", a: "thin" },
        { q: "To take a risk without worrying. Throw caution to the ______.", a: "wind" },
        { q: "A hopeless search for something impossible. A wild goose ______.", a: "chase" },
        { q: "To make a bad situation even worse. Adding insult to ______.", a: "injury" },
        { q: "You are looking in the wrong place. Barking up the wrong ______.", a: "tree" },
        { q: "Stop avoiding the main topic! Don't beat around the ______.", a: "bush" },
        { q: "Taking on a task that is too big. Biting off more than you can ______.", a: "chew" },
        { q: "To work late into the night. Burn the midnight ______.", a: "oil" },
        { q: "Caught in the act of doing something wrong. Caught red-______.", a: "handed" },
        { q: "That luxury car must have cost a pretty ______.", a: "penny" },
        { q: "We will deal with that problem when it happens. Cross that ______ when we come to it.", a: "bridge" },
        { q: "To do something badly to save time or money. Cutting ______.", a: "corners" },
        { q: "Arguing against something just to test it. Playing devil's ______.", a: "advocate" },
        { q: "Don't risk everything on one plan. Don't put all your eggs in one ______.", a: "basket" },
        { q: "Tell me what you are thinking. A penny for your ______.", a: "thoughts" },
        { q: "In perfect health. As fit as a ______.", a: "fiddle" },
        { q: "To trust someone even if you aren't sure. Give them the benefit of the ______.", a: "doubt" },
        { q: "To achieve two things with a single action. Kill two birds with one ______.", a: "stone" }
    ],

superlatives: [
        { "q": "Burj Khalifa is the ___ (tall) building in the world.", "a": "tallest" },
        { "q": "The blue whale is the ___ (big) animal on Earth.", "a": "biggest" },
        { "q": "She is the ___ (good) singer in our school choir.", "a": "best" },
        { "q": "That was the ___ (bad) movie I have ever seen.", "a": "worst" },
        { "q": "Today is the ___ (happy) day of my life!", "a": "happiest" },
        { "q": "The peacock is the ___ (beautiful) bird in the zoo.", "a": "most beautiful" },
        { "q": "Pluto is the ___ (far) planet from the sun.", "a": "farthest|furthest" },
        { "q": "This diamond ring is the ___ (expensive) item in the store.", "a": "most expensive" },
        { "q": "The hummingbird is the ___ (small) bird in the world.", "a": "smallest" },
        { "q": "The cheetah is the ___ (fast) land animal.", "a": "fastest" },
        { "q": "Antarctica is the ___ (cold) place on Earth.", "a": "coldest" },
        { "q": "Death Valley is the ___ (hot) desert in America.", "a": "hottest" },
        { "q": "February is the ___ (short) month of the year.", "a": "shortest" },
        { "q": "The Nile is the ___ (long) river in Africa.", "a": "longest" },
        { "q": "Mount Everest is the ___ (high) mountain in the world.", "a": "highest" },
        { "q": "The Dead Sea has the ___ (low) elevation on land.", "a": "lowest" },
        { "q": "Albert Einstein was one of the ___ (smart) scientists.", "a": "smartest" },
        { "q": "Diamond is the ___ (hard) natural substance.", "a": "hardest" },
        { "q": "This silk pillow is the ___ (soft) thing I have ever touched.", "a": "softest" },
        { "q": "The jet engine makes the ___ (loud) noise at the airport.", "a": "loudest" },
        { "q": "The library is the ___ (quiet) place in the school.", "a": "quietest" },
        { "q": "Sirius is the ___ (bright) star in the night sky.", "a": "brightest" },
        { "q": "Midnight is the ___ (dark) time of the day.", "a": "darkest" },
        { "q": "Singapore is known as one of the ___ (clean) cities in the world.", "a": "cleanest" },
        { "q": "That abandoned alley is the ___ (dirty) street in town.", "a": "dirtiest" },
        { "q": "My little brother is the ___ (young) member of our family.", "a": "youngest" },
        { "q": "My grandfather is the ___ (old) person in our village.", "a": "oldest|eldest" },
        { "q": "Hercules was known as the ___ (strong) man in Greek mythology.", "a": "strongest" },
        { "q": "A newborn baby is the ___ (weak) member of the pack.", "a": "weakest" },
        { "q": "The African elephant is the ___ (heavy) land mammal.", "a": "heaviest" },
        { "q": "A feather is the ___ (light) object on this table.", "a": "lightest" },
        { "q": "I am reading the ___ (thick) dictionary in the library.", "a": "thickest" },
        { "q": "This wire is the ___ (thin) one we have in the toolbox.", "a": "thinnest" },
        { "q": "He is one of the ___ (rich) businessmen in the world.", "a": "richest" },
        { "q": "They donated food to the ___ (poor) families in the village.", "a": "poorest" },
        { "q": "This plastic toy is the ___ (cheap) item in the shop.", "a": "cheapest" },
        { "q": "Question number one was the ___ (easy) question in the exam.", "a": "easiest" },
        { "q": "Mr. Bean is the ___ (funny) comedian I know.", "a": "funniest" },
        { "q": "That story has the ___ (sad) ending ever.", "a": "saddest" },
        { "q": "Tokyo is one of the ___ (busy) cities in the world.", "a": "busiest" },
        { "q": "The sloth is considered the ___ (lazy) animal in the jungle.", "a": "laziest" },
        { "q": "The ___ (angry) customer demanded to see the manager.", "a": "angriest" },
        { "q": "The mosquito is actually the ___ (dangerous) insect to humans.", "a": "most dangerous" },
        { "q": "She is the ___ (careful) driver I have ever met.", "a": "most careful" },
        { "q": "Quantum physics is the ___ (difficult) subject in university.", "a": "most difficult" },
        { "q": "This is the ___ (interesting) science book I have ever read.", "a": "most interesting" },
        { "q": "Water is the ___ (important) resource for all living things.", "a": "most important" },
        { "q": "The Mona Lisa is the ___ (famous) painting in the museum.", "a": "most famous" },
        { "q": "This leather sofa is the ___ (comfortable) seat in the house.", "a": "most comfortable" },
        { "q": "My grandmother cooks the ___ (delicious) chicken curry in town.", "a": "most delicious" }
    ]
};

// ==========================================
// 2. DATA AVATAR / GUARDIANS (10 JENIS & 10 LEVEL)
// ==========================================
const avatars = {
    bm: {
        id: 'avatar_bm',
        levels: [
            { level: 5, name: 'Pujangga Cilik', rarity: 'SPECIAL', price: 10000, img: 'babybm.webp', icon: 'fas fa-pen-nib text-red-500 drop-shadow-md text-xl', desc: 'Mulai mengenali keindahan tatabahasa dan kesantunan bahasa ibunda sejak dini.' },
            { level: 10, name: 'Sasterawan Agung', rarity: 'EXQUISITE', price: 20000, img: 'bmlvl10.webp', icon: 'fas fa-feather-alt fa-beat legendary-avatar text-red-500 drop-shadow-lg text-2xl', desc: 'Menguasai keindahan bahasa dan keagungan sastera Melayu sepenuhnya.' }
        ]
    },
    bi: {
        id: 'avatar_bi',
        levels: [
            { level: 5, name: 'English Explorer Cilik', rarity: 'SPECIAL', price: 10000, img: 'babyeng.webp', icon: 'fas fa-book text-blue-500 drop-shadow-md text-xl', desc: 'Langkah awal menguasai bahasa dunia dengan penuh ceria dan rasa percaya diri!' },
            { level: 10, name: 'English Grandmaster', rarity: 'EXQUISITE', price: 20000, img: 'bilvl10.webp', icon: 'fas fa-globe-americas fa-bounce legendary-avatar text-blue-500 drop-shadow-lg text-2xl', desc: 'Masteri mutlak dalam bahasa global dan komunikasi antarabangsa.' }
        ]
    },
    mt: {
        id: 'avatar_mt',
        levels: [
            { level: 5, name: 'Celik Nombor', rarity: 'SPECIAL', price: 10000, img: 'babymt.webp', icon: 'fas fa-calculator text-green-500 drop-shadow-md text-xl', desc: 'Pakar kalkulator kecil yang pantas menyelesaikan tantangan angka dan berhitung dasar.' },
            { level: 10, name: 'Mathematician Supreme', rarity: 'EXQUISITE', price: 20000, img: 'mtlvl10.webp', icon: 'fas fa-calculator fa-pulse legendary-avatar text-purple-500 drop-shadow-lg text-2xl', desc: 'Menyelesaikan formula paling rumit di alam semesta dengan sekelip mata.' }
        ]
    },
    sn: {
        id: 'avatar_sn',
        levels: [
            { level: 5, name: 'Saintis Cilik', rarity: 'SPECIAL', price: 10000, img: 'babysn.webp', icon: 'fas fa-flask text-purple-500 drop-shadow-md text-xl', desc: 'Penuh dengan rasa ingin tahu, bersiap menjelajahi misteri alam dan sains kehidupan.' },
            { level: 10, name: 'Saintis Terulung', rarity: 'EXQUISITE', price: 20000, img: 'snlvl10.webp', icon: 'fas fa-atom fa-spin legendary-avatar text-green-400 drop-shadow-lg text-2xl', desc: 'Membongkar rahsia sains, fizik, dan misteri kosmos demi masa depan.' }
        ]
    },
    mz: {
        id: 'avatar_mz',
        levels: [
            { level: 5, name: 'Melodi Cilik', rarity: 'SPECIAL', price: 10000, img: 'babymz.webp', icon: 'fas fa-music text-indigo-500 drop-shadow-md text-xl', desc: 'Menari mengikut ritme ceria dan mulai menciptakan harmoni musik yang unik.' },
            { level: 10, name: 'Maestro Muzik', rarity: 'EXQUISITE', price: 20000, img: 'mzlvl10.webp', icon: 'fas fa-music fa-bounce legendary-avatar text-pink-500 drop-shadow-lg text-2xl', desc: 'Mencipta simfoni agung yang menggetarkan jiwa dan mengharmonikan dunia.' }
        ]
    },
    pj: {
        id: 'avatar_pj',
        levels: [
            { level: 5, name: 'Wira Cergas', rarity: 'SPECIAL', price: 10000, img: 'babypj.webp', icon: 'fas fa-running text-orange-500 drop-shadow-md text-xl', desc: 'Sentiasa aktif, lincah, menjaga kesehatan diri dan siap menghadapi tantangan fisik.' },
            { level: 10, name: 'Atlit Legenda', rarity: 'EXQUISITE', price: 20000, img: 'pjlvl10.webp', icon: 'fas fa-running fa-beat legendary-avatar text-orange-500 drop-shadow-lg text-2xl', desc: 'Mencapai kemuncak kecergasan fizikal dan semangat kesukanan tertinggi.' }
        ]
    },
    pm: {
        id: 'avatar_pm',
        levels: [
            { level: 5, name: 'Tunas Berbudi', rarity: 'SPECIAL', price: 10000, img: 'babypm.webp', icon: 'fas fa-heart text-pink-500 drop-shadow-md text-xl', desc: 'Mengamalkan nilai-nilai murni, integritas, dan kebaikan dalam setiap langkah petualangan.' },
            { level: 10, name: 'Suri Teladan Sejati', rarity: 'EXQUISITE', price: 20000, img: 'pmlvl10.webp', icon: 'fas fa-heart fa-beat legendary-avatar text-emerald-500 drop-shadow-lg text-2xl', desc: 'Simbol keperibadian mulia, etika, dan nilai murni yang menerangi masyarakat.' }
        ]
    },
    psv: {
        id: 'avatar_psv',
        levels: [
            { level: 5, name: 'Pelukis Cerdik', rarity: 'SPECIAL', price: 10000, img: 'babypsv.webp', icon: 'fas fa-palette text-yellow-500 drop-shadow-md text-xl', desc: 'Mencurahkan imajinasi kreatif tanpa batas melalui warna dan lakaran yang menggemaskan.' },
            { level: 10, name: 'Pelukis Legenda', rarity: 'EXQUISITE', price: 20000, img: 'psvlvl10.webp', icon: 'fas fa-palette fa-shake legendary-avatar text-teal-400 drop-shadow-lg text-2xl', desc: 'Menghembus nafas kehidupan ke dalam kanvas dengan kreativiti tanpa sempadan.' }
        ]
    },
    rbt: {
        id: 'avatar_rbt',
        levels: [
            { level: 5, name: 'Inovator Muda', rarity: 'SPECIAL', price: 10000, img: 'babyrbt.webp', icon: 'fas fa-tools text-gray-500 drop-shadow-md text-xl', desc: 'Tangan kreatif yang suka merancang, membangun, dan mencoba teknologi-teknologi baru.' },
            { level: 10, name: 'Adiwira Inovasi', rarity: 'EXQUISITE', price: 20000, img: 'rbtlvl10.webp', icon: 'fas fa-tools fa-bounce legendary-avatar text-cyan-600 drop-shadow-lg text-2xl', desc: 'Pelopor teknologi, reka bentuk, dan kejuruteraan praktikal masa hadapan.' }
        ]
    },
    sj: {
        id: 'avatar_sj',
        levels: [
            { level: 5, name: 'Pengembara Masa Cilik', rarity: 'SPECIAL', price: 10000, img: 'babysj.webp', icon: 'fas fa-hourglass-start text-amber-500 drop-shadow-md text-xl', desc: 'Mulai meneroka kisah-kisah hebat dan mengambil pengajaran berharga dari sejarah masa lalu.' },
            { level: 10, name: 'Sejarawan Ulung', rarity: 'EXQUISITE', price: 20000, img: 'sjlvl10.webp', icon: 'fas fa-scroll fa-pulse legendary-avatar text-amber-600 drop-shadow-lg text-2xl', desc: 'Penjaga garis masa lampau, memelihara iktibar, asal-usul, dan warisan bangsa.' }
        ]
    },
    'ulti-boy': {
        id: 'avatar_ulti-boy',
        levels: [
            { 
                level: 100, 
                name: 'Ultimate Edu Master',
                rarity: 'GOD-TIER',
                price: 100000, 
                img: 'ulti-boy.webp', 
                icon: 'fas fa-book fa-pulse legendary-avatar text-blue-600 drop-shadow-lg text-2xl',
                desc: 'Master of All!'
            }
        ]
    },
    'ulti-girl': {
        id: 'avatar_ulti-girl',
        levels: [
            { 
                level: 100, 
                name: 'Ultimate Edu Goddess ',
                rarity: 'GOD-TIER',
                price: 100000, 
                img: 'ulti-girl.webp', 
                icon: 'fas fa-book fa-pulse legendary-avatar text-blue-600 drop-shadow-lg text-2xl',
                desc: 'Master of All!'
            }
        ]
    },
    school: {
        id: 'avatar_school', 
        levels: [
            { 
                level: 10, 
                name: 'Modern School Chancellor', 
                rarity: 'LEGENDARY',
                price: 15000, 
                img: 'modern-school-lvl10.webp', 
                icon: 'fas fa-crown fa-beat legendary-avatar text-yellow-600 drop-shadow-lg text-2xl', 
                desc: 'Pemerintah tertinggi empayar ilmu!' 
            }
        ]
    },
    edu: {
        id: 'avatar_edu', maxLevel: 100, theme: 'Academic Excellence',
        levels: [
            { 
                level: 10, name: 'Edu Grandmaster', rarity: 'LEGENDARY', price: 15000, img: 'edu-lvl10.webp', 
                icon: 'fas fa-university fa-beat legendary-avatar text-indigo-500 drop-shadow-lg text-2xl', 
                desc: 'Puncak tertinggi pencapaian akademik!' 
            }
        ]
    },
    stem: {
        id: 'avatar_stem', maxLevel: 100,
        levels: [
            { 
                level: 10, name: 'STEM Architect', rarity: 'LEGENDARY', price: 15000, img: 'stem-lvl10.webp', 
                icon: 'fas fa-rocket fa-spin legendary-avatar text-purple-500 drop-shadow-lg text-2xl', 
                desc: 'Arkitek masa depan dunia teknologi!' 
            }
        ]
    },
    kampung: {
        id: 'avatar_kampung', maxLevel: 100,
        levels: [
            { 
                level: 10, name: 'Tokoh Warisan', rarity: 'LEGENDARY', price: 15000, img: 'kampung-lvl10.webp', 
                icon: 'fas fa-home fa-beat legendary-avatar text-emerald-500 drop-shadow-lg text-2xl', 
                desc: 'Lagenda hidup tradisi turun-temurun!' 
            }
        ]
    },
    muslimah: {
        id: 'avatar_muslimah', maxLevel: 100, theme: 'Grace & Virtue',
        levels: [
            { 
                level: 10, name: 'Eternal Grace', rarity: 'LEGENDARY', price: 15000, img: 'muslimah-lvl10.webp', 
                icon: 'fas fa-dove fa-beat legendary-avatar text-rose-500 drop-shadow-lg text-2xl', 
                desc: 'Simbol keanggunan dan kecekalan abadi!' 
            }
        ]
    },
    leviathan: {
        id: 'avatar_leviathan', maxLevel: 100, theme: 'Leviathan',
        levels: [
            { level: 1, name: 'Context Drop', rarity: 'COMMON', price: 300, icon: 'fas fa-tint fa-pulse text-blue-200', desc: 'Guessing meaning from context.' },
            { level: 2, name: 'Skimming Drop', rarity: 'COMMON', price: 600, icon: 'fas fa-tint fa-shake text-blue-300', desc: 'Reading fast to get the main idea.' },
            { level: 3, name: 'Scanning Fish', rarity: 'COMMON', price: 900, icon: 'fas fa-fish fa-bounce text-teal-300', desc: 'Looking closely for specific facts.' },
            { level: 4, name: 'Inference Spirit', rarity: 'COMMON', price: 1200, icon: 'fas fa-fish fa-fade text-teal-400', desc: 'Reading between the lines.' },
            { level: 5, name: 'Summary Swimmer', rarity: 'RARE', price: 1500, icon: 'fas fa-fish fa-beat text-teal-500', desc: 'Condensing long texts easily.' },
            { level: 6, name: 'Analysis Spirit', rarity: 'EPIC', price: 1800, icon: 'fas fa-fish fa-shake text-teal-600', desc: 'Breaking down complex paragraphs.' },
            { level: 7, name: 'Comprehension Master', rarity: 'EPIC', price: 2100, icon: 'fas fa-water fa-bounce text-blue-500', desc: 'Understanding the deepest texts.' },
            { level: 8, name: 'Literature Ancient', rarity: 'EPIC', price: 2400, icon: 'fas fa-water fa-beat text-blue-600', desc: 'Devouring classic novels.' },
            { level: 9, name: 'Epic Mythic', rarity: 'EPIC', price: 2700, icon: 'fas fa-water fa-pulse text-blue-700', desc: 'Mastering poetry and prose.' },
            { 
                level: 10, 
                name: 'Nanotech Bard', 
                rarity: 'LEGENDARY',
                price: 3000, 
                img: 'avatar_leviathan.webp',
                icon: 'fas fa-water fa-beat legendary-avatar text-blue-500 drop-shadow-lg text-2xl', 
                desc: 'An unstoppable wave of knowledge!' 
            },
            // ======== TAMBAHAN LEVEL 50 ========
            { 
                level: 50, 
                name: 'Supreme Nanotech Prime', 
                rarity: 'MYTHIC',
                price: 30000, 
                img: 'avatar_leviathan50.webp',
                icon: 'fas fa-water fa-spin text-yellow-500 drop-shadow-lg text-3xl', 
                desc: 'Exclusive Guardian for reaching Level 50!' 
            },
            // ======== TAMBAHAN LEVEL 100 ========
            { 
                level: 100, 
                name: 'God-Tier Nanotech Bard', 
                rarity: 'GOD-TIER',
                price: 300000, 
                img: 'avatar_leviathan100.webp', 
                icon: 'fas fa-water fa-beat text-red-500 drop-shadow-2xl text-4xl', 
                desc: 'Mythical Guardian for the ultimate Level 100 player!' 
            }
        ]
    },
    unicorn: {
        id: 'avatar_unicorn', maxLevel: 100, theme: 'Unicorn',
        levels: [
            { level: 1, name: 'Rhyme Dust', rarity: 'COMMON', price: 300, icon: 'fas fa-star fa-pulse text-pink-200', desc: 'Words that sound magically alike.' },
            { level: 2, name: 'Simile Dust', rarity: 'COMMON', price: 600, icon: 'fas fa-star fa-shake text-pink-300', desc: 'As bright as a glowing star.' },
            { level: 3, name: 'Metaphor Pony', rarity: 'COMMON', price: 900, icon: 'fas fa-horse fa-bounce text-pink-400', desc: 'A pony that IS a star.' },
            { level: 4, name: 'Personification Pony', rarity: 'COMMON', price: 1200, icon: 'fas fa-horse fa-fade text-pink-500', desc: 'Making non-human things alive.' },
            { level: 5, name: 'Idiom Mystic', rarity: 'RARE', price: 1500, icon: 'fas fa-horse fa-beat text-purple-400', desc: 'Raining cats and dogs!' },
            { level: 6, name: 'Hyperbole Unicorn', rarity: 'EPIC', price: 1800, icon: 'fas fa-horse fa-shake text-purple-500', desc: 'The fastest creature in a million years.' },
            { level: 7, name: 'Alliteration Master', rarity: 'EPIC', price: 2100, icon: 'fas fa-horse-head fa-bounce text-purple-600', desc: 'Creating cool consonant combos.' },
            { level: 8, name: 'Poetic Ancient', rarity: 'EPIC', price: 2400, icon: 'fas fa-horse-head fa-beat text-purple-700', desc: 'Master of verses and stanzas.' },
            { level: 9, name: 'Inspiration Mythic', rarity: 'EPIC', price: 2700, icon: 'fas fa-horse-head fa-pulse text-pink-600', desc: 'Sparking creative writing ideas.' },
            { 
                level: 10, 
                name: 'Cosmic Narrator', 
                rarity: 'LEGENDARY',
                price: 3000, 
                img: 'avatar_unicorn.webp',
                icon: 'fas fa-horse-head fa-beat legendary-avatar text-pink-500 drop-shadow-lg text-2xl', 
                desc: 'The most beautiful magic in literature!' 
            },
            // ======== TAMBAHAN LEVEL 50 ========
            { 
                level: 50, 
                name: 'Supreme Cosmic Prime', 
                rarity: 'MYTHIC',
                price: 30000, 
                img: 'avatar_unicorn50.webp',
                icon: 'fas fa-horse-head fa-spin text-yellow-500 drop-shadow-lg text-3xl', 
                desc: 'Exclusive Guardian for reaching Level 50!' 
            },
            // ======== TAMBAHAN LEVEL 100 ========
            { 
                level: 100, 
                name: 'God-Tier Cosmic Narrator', 
                rarity: 'GOD-TIER',
                price: 300000, 
                img: 'avatar_unicorn100.webp', 
                icon: 'fas fa-horse-head fa-beat text-red-500 drop-shadow-2xl text-4xl', 
                desc: 'Mythical Guardian for the ultimate Level 100 player!' 
            }
        ]
    },
    golem: {
        id: 'avatar_golem', maxLevel: 100, theme: 'Golem',
        levels: [
            { level: 1, name: 'Past Pebble', rarity: 'COMMON', price: 300, icon: 'fas fa-circle fa-pulse text-gray-400', desc: 'Actions that already happened.' },
            { level: 2, name: 'Present Pebble', rarity: 'COMMON', price: 600, icon: 'fas fa-circle fa-shake text-gray-500', desc: 'Actions happening right now.' },
            { level: 3, name: 'Future Rock', rarity: 'COMMON', price: 900, icon: 'fas fa-cube fa-bounce text-gray-600', desc: 'Plans that will happen tomorrow.' },
            { level: 4, name: 'Continuous Stone', rarity: 'COMMON', price: 1200, icon: 'fas fa-cube fa-fade text-gray-700', desc: 'Rolling with the -ing verbs.' },
            { level: 5, name: 'Perfect Tense Guardian', rarity: 'RARE', price: 1500, icon: 'fas fa-cubes fa-beat text-gray-800', desc: 'Has mastered the past participles.' },
            { level: 6, name: 'Active Voice Iron', rarity: 'EPIC', price: 1800, icon: 'fas fa-cubes fa-shake text-gray-900', desc: 'Direct, clear, and unbreakable.' },
            { level: 7, name: 'Passive Voice Golem', rarity: 'EPIC', price: 2100, icon: 'fas fa-mountain fa-bounce text-gray-600', desc: 'Actions are being done to it.' },
            { level: 8, name: 'Conditional Ancient', rarity: 'EPIC', price: 2400, icon: 'fas fa-mountain fa-beat text-gray-700', desc: 'If you study, you will succeed.' },
            { level: 9, name: 'Structure Mythic', rarity: 'EPIC', price: 2700, icon: 'fas fa-mountain fa-pulse text-gray-800', desc: 'A walking mountain of solid grammar.' },
            { 
                level: 10, 
                name: 'Cyber Etymologist', 
                rarity: 'LEGENDARY',
                price: 3000, 
                img: 'avatar_golem.webp',
                icon: 'fas fa-mountain fa-shake legendary-avatar text-gray-900 drop-shadow-lg text-2xl', 
                desc: 'The Unshakeable Earth Shaker!' 
            },
            // ======== TAMBAHAN LEVEL 50 ========
            { 
                level: 50, 
                name: 'Supreme Cyber Prime', 
                rarity: 'MYTHIC',
                price: 30000, 
                img: 'avatar_golem50.webp',
                icon: 'fas fa-mountain fa-spin text-yellow-500 drop-shadow-lg text-3xl', 
                desc: 'Exclusive Guardian for reaching Level 50!' 
            },
            // ======== TAMBAHAN LEVEL 100 ========
            { 
                level: 100, 
                name: 'God-Tier Cyber Etymologist', 
                rarity: 'GOD-TIER',
                price: 300000, 
                img: 'avatar_golem100.webp', 
                icon: 'fas fa-mountain fa-beat text-red-500 drop-shadow-2xl text-4xl', 
                desc: 'Mythical Guardian for the ultimate Level 100 player!' 
            }
        ]
    },
    fairy: {
        id: 'avatar_fairy', maxLevel: 100, theme: 'Fairy',
        levels: [
            { level: 1, name: 'Sound Seedling', rarity: 'COMMON', price: 300, icon: 'fas fa-seedling fa-pulse text-green-300', desc: 'Catching the first English sounds.' },
            { level: 2, name: 'Tune Sprout', rarity: 'COMMON', price: 600, icon: 'fas fa-seedling fa-shake text-green-400', desc: 'Listening to the rhythm of sentences.' },
            { level: 3, name: 'Audio Sprite', rarity: 'COMMON', price: 900, icon: 'fas fa-leaf fa-bounce text-green-500', desc: 'Understanding short instructions.' },
            { level: 4, name: 'Podcast Sprite', rarity: 'COMMON', price: 1200, icon: 'fas fa-leaf fa-fade text-green-600', desc: 'Enjoying English stories in the wind.' },
            { level: 5, name: 'Conversation Fairy', rarity: 'RARE', price: 1500, icon: 'fas fa-tree fa-beat text-green-700', desc: 'Planting ideas through dialogue.' },
            { level: 6, name: 'Active Listener', rarity: 'EPIC', price: 1800, icon: 'fas fa-tree fa-shake text-green-800', desc: 'Paying close attention to details.' },
            { level: 7, name: 'Nuance Master', rarity: 'EPIC', price: 2100, icon: 'fas fa-tree fa-bounce text-teal-600', desc: 'Understanding tone and emotion.' },
            { level: 8, name: 'Interpreter Ancient', rarity: 'EPIC', price: 2400, icon: 'fas fa-tree fa-beat text-teal-700', desc: 'Translating thoughts seamlessly.' },
            { level: 9, name: 'Polyglot Mythic', rarity: 'EPIC', price: 2700, icon: 'fas fa-tree fa-pulse text-teal-800', desc: 'Glowing with communication magic.' },
            { 
                level: 10, 
                name: 'Bionic Botanist & Grammarian', 
                rarity: 'LEGENDARY',
                price: 3000, 
                img: 'avatar_fairy.webp',
                icon: 'fas fa-tree fa-beat legendary-avatar text-green-500 drop-shadow-lg text-2xl', 
                desc: 'The Queen of Global Connections!' 
            },
            // ======== TAMBAHAN LEVEL 50 ========
            { 
                level: 50, 
                name: 'Supreme Botanist Prime', 
                rarity: 'MYTHIC',
                price: 30000, 
                img: 'avatar_fairy50.webp',
                icon: 'fas fa-tree fa-spin text-yellow-500 drop-shadow-lg text-3xl', 
                desc: 'Exclusive Guardian for reaching Level 50!' 
            },
            // ======== TAMBAHAN LEVEL 100 ========
            { 
                level: 100, 
                name: 'God-Tier Bionic Botanist', 
                rarity: 'GOD-TIER',
                price: 300000, 
                img: 'avatar_fairy100.webp', 
                icon: 'fas fa-tree fa-beat text-red-500 drop-shadow-2xl text-4xl', 
                desc: 'Mythical Guardian for the ultimate Level 100 player!' 
            }
        ]
    },
    lion: {
        id: 'avatar_lion', maxLevel: 100, theme: 'Lion',
        levels: [
            { level: 1, name: 'Claim Kitten', rarity: 'COMMON', price: 300, icon: 'fas fa-bolt fa-pulse text-yellow-200', desc: 'Making a tiny but valid point.' },
            { level: 2, name: 'Reason Kitten', rarity: 'COMMON', price: 600, icon: 'fas fa-bolt fa-shake text-yellow-300', desc: 'Backing up claims with "because".' },
            { level: 3, name: 'Logic Cub', rarity: 'COMMON', price: 900, icon: 'fas fa-cat fa-bounce text-yellow-400', desc: 'Thinking fast and making sense.' },
            { level: 4, name: 'Evidence Volt Cat', rarity: 'COMMON', price: 1200, icon: 'fas fa-cat fa-fade text-yellow-500', desc: 'Running with facts and statistics.' },
            { level: 5, name: 'Argument Cat', rarity: 'RARE', price: 1500, icon: 'fas fa-cat fa-beat text-orange-400', desc: 'Building strong, shocking cases.' },
            { level: 6, name: 'Rebuttal Lion', rarity: 'EPIC', price: 1800, icon: 'fas fa-cat fa-shake text-orange-500', desc: 'Countering opposing views with thunder.' },
            { level: 7, name: 'Persuasion Master', rarity: 'EPIC', price: 2100, icon: 'fas fa-crown fa-bounce text-yellow-500', desc: 'Convincing the crowd easily.' },
            { level: 8, name: 'Rhetoric Ancient', rarity: 'EPIC', price: 2400, icon: 'fas fa-crown fa-beat text-yellow-600', desc: 'A legendary speaker of the sky.' },
            { level: 9, name: 'Debate Mythic', rarity: 'EPIC', price: 2700, icon: 'fas fa-crown fa-pulse text-orange-600', desc: 'Summoning lightning-fast responses.' },
            { 
                level: 10, 
                name: 'Aether Historian', 
                rarity: 'LEGENDARY',
                price: 3000, 
                img: 'avatar_lion.webp',
                icon: 'fas fa-crown fa-beat legendary-avatar text-yellow-400 drop-shadow-lg text-2xl', 
                desc: 'The Absolute King of the Stage!' 
            },
            // ======== TAMBAHAN LEVEL 50 ========
            { 
                level: 50, 
                name: 'Supreme Aether Prime', 
                rarity: 'MYTHIC',
                price: 30000, 
                img: 'avatar_lion50.webp',
                icon: 'fas fa-crown fa-spin text-yellow-500 drop-shadow-lg text-3xl', 
                desc: 'Exclusive Guardian for reaching Level 50!' 
            },
            // ======== TAMBAHAN LEVEL 100 ========
            { 
                level: 100, 
                name: 'God-Tier Aether Historian', 
                rarity: 'GOD-TIER',
                price: 300000, 
                img: 'avatar_lion100.webp', 
                icon: 'fas fa-crown fa-beat text-red-500 drop-shadow-2xl text-4xl', 
                desc: 'Mythical Guardian for the ultimate Level 100 player!' 
            }
        ]
    },
admin: {
        theme: "SPECIAL",
        levels: [
            { 
                level: 1, 
                price: 100, 
                name: "The Game Master", 
                img: "avatar.gif", // Nama fail gif cikgu
                desc: "Hanya untuk pentadbir sistem sahaja.",
                isSecret: true // Kita guna flag ini untuk sembunyikan dari murid
            }
        ]
    }
};

// ==========================================
// DATA KEDAI BADGE (BADGES SHOP)
// ==========================================
const shopBadges = [
    // ---------------------------------------------------------
    // 1. GAME BADGES (Tiada syarat, sentiasa ada di kedai)
    // Harga: 500 (Boleh tukar mengikut harga asal anda)
    // ---------------------------------------------------------
    { id: "gb_01", name: "Guessing Word Badge", icon: "fas fa-question-circle", price: 5000, type: "game", tier: "common", condition: "none" },
    { id: "gb_02", name: "Word Scramble Badge", icon: "fas fa-random", price: 5000, type: "game", tier: "common", condition: "none" },
    { id: "gb_03", name: "Synonym Badge", icon: "fas fa-equals", price: 5000, type: "game", tier: "common", condition: "none" },
    { id: "gb_04", name: "Antonym Badge", icon: "fas fa-exchange-alt", price: 5000, type: "game", tier: "common", condition: "none" },
    { id: "gb_05", name: "Missing Letter Badge", icon: "fas fa-search", price: 5000, type: "game", tier: "common", condition: "none" },
    { id: "gb_06", name: "Past Tense Badge", icon: "fas fa-history", price: 5000, type: "game", tier: "common", condition: "none" },
    { id: "gb_07", name: "Plural Form Badge", icon: "fas fa-copy", price: 5000, type: "game", tier: "common", condition: "none" },
    { id: "gb_08", name: "Correct Spelling Badge", icon: "fas fa-spell-check", price: 5000, type: "game", tier: "common", condition: "none" },
    { id: "gb_09", name: "Occupation Badge", icon: "fas fa-user-md", price: 5000, type: "game", tier: "common", condition: "none" },
    { id: "gb_10", name: "Gender Noun Badge", icon: "fas fa-venus-mars", price: 5000, type: "game", tier: "common", condition: "none" },
    { id: "gb_11", name: "Popular Idioms Badge", icon: "fas fa-comments", price: 5000, type: "game", tier: "common", condition: "none" },
    { id: "gb_12", name: "Superlatives Badge", icon: "fas fa-trophy", price: 5000, type: "game", tier: "common", condition: "none" },
    { id: "gb_13", name: "Grammar Badge", icon: "fas fa-spell-check", price: 5000, type: "game", tier: "common", condition: "none" },
    { id: "gb_14", name: "Architect Badge", icon: "fas fa-ruler-combined", price: 5000, type: "game", tier: "common", condition: "none" },
    { id: "gb_15", name: "Listening Badge", icon: "fas fa-headphones", price: 5000, type: "game", tier: "common", condition: "none" },
    { id: "gb_16", name: "Speaking Badge", icon: "fas fa-microphone", price: 5000, type: "game", tier: "common", condition: "none" },
];


// ------------------------------------------
    // KATEGORI: EDU SHOP (BARANGAN SEKOLAH / ALAT TULIS)
    // ------------------------------------------
const shopItems = [
    // --- HAD HARIAN (DAILY) ---
    { id: 'edu_eraser', category: 'edu', limitType: 'daily', name: 'Eraser', price: 1000, icon: 'fas fa-eraser text-pink-400', desc: 'A basic pink eraser to fix tiny mistakes.' },
    { id: 'edu_pencil', category: 'edu', limitType: 'daily', name: 'Pencil', price: 1500, icon: 'fas fa-pencil-alt text-yellow-500', desc: 'A sharp 2B pencil for writing down answers.' },
    { id: 'edu_pen', category: 'edu', limitType: 'daily', name: 'Pen', price: 3000, icon: 'fas fa-pen text-blue-600', desc: 'A smooth blue pen for confident writing.' },
    { id: 'edu_ruler', category: 'edu', limitType: 'daily', name: 'Ruler', price: 3500, icon: 'fas fa-ruler text-green-500', desc: 'Keep your lines straight and neat.' },
    { id: 'edu_sharpener', category: 'edu', limitType: 'daily', name: 'Sharpener', price: 7000, icon: 'fas fa-cube text-red-500', desc: 'Keep your pencils sharp and ready.' },

    // --- HAD BULANAN (MONTHLY) ---
    { id: 'edu_exercise_book', category: 'edu', limitType: 'monthly', name: 'Exercise Book', price: 10000, icon: 'fas fa-book-open text-blue-400', desc: 'A standard book for daily grammar practice.' },
    { id: 'edu_color_paper', category: 'edu', limitType: 'monthly', name: 'Color Paper', price: 10000, icon: 'fas fa-copy text-pink-500', desc: 'Bright colorful papers for your art projects.' },
    { id: 'edu_notebook', category: 'edu', limitType: 'monthly', name: 'Notebook', price: 12000, icon: 'fas fa-book text-indigo-500', desc: 'A premium notebook with thick pages.' },
    { id: 'edu_drawing_book', category: 'edu', limitType: 'monthly', name: 'Drawing Book', price: 20000, icon: 'fas fa-book-reader text-orange-400', desc: 'A large book for your creative ideas.' },

    // --- HAD TAHUNAN (YEARLY) ---
    { id: 'edu_pencil_box', category: 'edu', limitType: 'yearly', name: 'Pencil Box', price: 50000, icon: 'fas fa-box text-purple-500', desc: 'A cool box to store all your stationery.' },
    { id: 'edu_adv_sharpener', category: 'edu', limitType: 'yearly', name: 'Advance Sharpener', price: 75000, icon: 'fas fa-cogs text-gray-700', desc: 'An automatic sharpener. Fast and easy!' },
    { id: 'edu_pencil_color', category: 'edu', limitType: 'yearly', name: 'Pencil Color', price: 100000, icon: 'fas fa-pencil-ruler text-yellow-600', desc: 'A set of 24 beautiful colored pencils.' },
    { id: 'edu_water_color', category: 'edu', limitType: 'yearly', name: 'Water Color', price: 150000, icon: 'fas fa-paint-brush text-teal-500', desc: 'Premium water colors for a masterpiece!' }
];

// ==========================================
// 3. DATA LEVEL & PANGKAT (1 - 150)
// ==========================================
const levelRanks = [
    { minLevel: 1,  maxLevel: 10, title: "Novice",       icon: "🌱", colorClass: "text-green-500" },
    { minLevel: 11, maxLevel: 20, title: "Apprentice",   icon: "📘", colorClass: "text-blue-500" },
    { minLevel: 21, maxLevel: 30, title: "Explorer",     icon: "🔍", colorClass: "text-teal-500" },
    { minLevel: 31, maxLevel: 40, title: "Defender",     icon: "🛡️", colorClass: "text-indigo-500" },
    { minLevel: 41, maxLevel: 50, title: "Scholar",      icon: "📜", colorClass: "text-purple-500" },
    { minLevel: 51, maxLevel: 60, title: "Mystic",       icon: "🧙‍♂️", colorClass: "text-fuchsia-500" },
    { minLevel: 61, maxLevel: 70, title: "Champion",     icon: "⚔️", colorClass: "text-red-500" },
    { minLevel: 71, maxLevel: 80, title: "Wordsmith",    icon: "🖋️", colorClass: "text-orange-500" },
    { minLevel: 81, maxLevel: 90, title: "Grandmaster",  icon: "👑", colorClass: "text-yellow-400 drop-shadow-md" },
    { minLevel: 91, maxLevel: 100, title: "Legend",      icon: "🌟", colorClass: "text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)] animate-pulse" },
    
    // --- ERA HARDCORE (END-GAME TIERS) ---
    { minLevel: 101, maxLevel: 110, title: "Mythic",     icon: "🦄", colorClass: "text-pink-400 drop-shadow-[0_0_10px_rgba(244,114,182,0.8)]" },
    { minLevel: 111, maxLevel: 120, title: "Oracle",     icon: "🔮", colorClass: "text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.9)] animate-pulse" },
    { minLevel: 121, maxLevel: 130, title: "Celestial",  icon: "🌌", colorClass: "text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,1)] animate-pulse" },
    { minLevel: 131, maxLevel: 140, title: "Ascendant",  icon: "🕊️", colorClass: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 drop-shadow-lg animate-pulse font-extrabold" },
    { minLevel: 141, maxLevel: 150, title: "Omniscient", icon: "👁️‍🗨️", colorClass: "text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-red-500 to-orange-500 drop-shadow-[0_0_20px_rgba(217,70,239,1)] animate-pulse font-black" }
];
