//First Names
function getMLnames (nameAnswer) {
    const MLNames = ["Brian", "Melanie", "Allen", "Emma", "Cole", "Ava", "Colin", "Charlotte", "Conner", "Sophia", "Cory", "Isabelle", "Derek", "Mia", "Devin", "Harper", "Dillon", "Abigail", 
    "Douglas", "Luna", "Drake", "Ella", "Dustin", "Elizabeth", "Eric", "Sofia", "Gary", "Emily", "Gavin", "Scarlett", "Jared", "Penelope", "Jason", "Madison", "Jeffrey", "Chloe", "Jeremy", "Grace", 
    "Joeseph", "Ellie", "Justin", "Zoey", "Keith", "Victoria", "Kenneth", "Nova", "Kyle", "Hannah", "Mark", "Lily", "Mathew", "Violet", "Nicolas", "Stella", "Robert", "Willow", "Samuel", "Lucy", 
    "Scott", "Natalie", "Zachary", "Claire", "Skipper", "Naomi", "William", "Elana", "Charles", "Ivy", "Juan", "Anna", "Timothy", "Alice", "Ian", "Lydia", "Daniel", "Hope", "Christopher", "Rose",
    "Clint", "Anna", "Brett", "Cathrine", "Dean", "Daisy", "Sancho", "Innis" ];
    return MLNames[nameAnswer % MLNames.length];
}

//Last names
function getMLlastNames(nameAnswer) {
    const MLlastNames = ["Smith", "Witcraft", "Johnson", "Williams", "Brown", "Shake", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", 
    "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", 
    "Hill", "Flores", "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts", "Washington", "West", "Franco", "Moretti", "Burney", "Fillipo", "Newton", "Carlson" ];
    return MLlastNames[nameAnswer % MLlastNames.length];
}

//Pronouns
function getMLpronoun(nameAnswer) {
    const MLpronoun = ["his", "her"]
    return MLpronoun[nameAnswer % MLpronoun.length]
}

//Town
function getMLtown(nameAnswer) {
    const MLtown = ["Tiddlewinks, England", "Darlington, South Carolina", "Locksville, Arizona", "Camino, Spain", "Chester, Colorado", "Penshaw, Florida", "Anwick, New Jersey", "Gutherhiem, Alabama", "Chicago, Illinois", 
    "Murray, New Zealand", "Chonkers, Nebraska", "Lancaster, England", "Kald, Sweden", "Wingston, Idaho", "Minchi, China", "Ajanta, India", "Niah, Malaysia", "Chauvet, France", "Adder, Nigeria", "Anwa, Australia", 
    "Abeokuta, Nigeria", "Duckwater, Canada", "Llanfairpwllgwyngyll, Wales" ];
    return MLtown[nameAnswer % MLtown.length];
}

//Family of ____
function getMLfamily (nameAnswer) {
    const MLfamily = ["glass blowers", "railroad workers", "taffy makers", "psychics", "french chefs", "arctic explorers", "deep sea pearl divers", "scientists", "circus performers", "astronauts", 
    "foot doctors", "lettuce farmers", "peacan farmers", "high plains outlaws", "bird house builders", 
    "aristocrats", "high school teachers", "accountants", "politicians", "stage actors", "tile setters", "lawyers", "house painters", "poets", "blue grass musicians", "cattle ranchers", "realestate managers"];
    return MLfamily[nameAnswer % MLfamily.length];
}

//Raised by
function getMLraised (nameAnswer) {
    const MLraised = ["a single mother", "a merry band of pirates", "the town crazy cat lady", "two loving parents", "an adoring grandmother", "a step father", "a small herd of goats", "proctologists",
    "an aunt with a rare skin condition", "wolves", "a traditional family", "wonderful, adoptive parents", "a large family"];
    return MLraised[nameAnswer % MLraised.length];
}

//Ambition
function getMLambition(nameAnswer) {
    const MLambition = ["be knighted by the queen", "be famous", "be a train conductor", "write a symphony", "raise rabbits in Montana", "cure mad cow disease", "learn how to read", "compete in a hotdog eating contest", 
    "finally finish a crossword puzzle", "run a marathon", "go to the store and only buy the items on the list", "learn how to juggle", "bake the perfect apple pie",
    "help people", "get rich", "sail around the world", "climb a mountain", "learn Japanese", "go sky diving", "run for office", "fall inlove", "become a ballroom dancer", "buy a house", "sing in the grand ole opry",
    "eat 100 grilled cheese sandwiches in a single day", "get accepted to a top clown college", "have child named 'Life' that gives out lemons at a fruit stand", "win a Nobel prize", "go on a grand safari"];
    return MLambition[nameAnswer % MLambition.length];
}

//Condition
function getMLcondition(nameAnswer) {
    const MLcondition = ["but wasn't successful until", "but failed after", "but got distracted when", "and finally did, after", "and did it, but only because", "but forgot about it after", 
    "and almost did it if it wasn't for the fact that", "but was stopped short when", "but gave up hope after", "and almost didn't make it until", "but had second thoughts when"];
    return MLcondition[nameAnswer % MLcondition.length];
}

//Result
function getMLresult(nameAnswer) {
    const MLresult = ["a harrowing encounter with a wild bear took a terrifying turn", "an arrest warrant was issued", "the telephone was invented", "a fight with a colony of wild penguins turned ugly", 
    "the spaghetti incident gripped the nation", "a debilitating paper cut almost caused blindness in both eyes", "the circus came to town", "a meeting with a monkey got out of control", 
    "a long lost twin was discovered", "a rich uncle left behind a huge fortune", "a tornado leveled the town", "don't take wooden nickles" ];
    return MLresult[nameAnswer % MLresult.length];
}

//Age
function getMLage(nameAnswer) {
    const tempAge = nameAnswer % 70
    return tempAge + 40;
}

//Death
function getMLdeath(nameAnswer) {
    const MLdeath = ["of old age", "of spontaneous combustion", "during the night", "from a gardening accident", "after a freak storm", "while running with scissors", "of a mysterious illness", "of laughter", "after losing a pie eating contest", "after a freak chainsaw juggling accident", "from a broken heart"];
    return MLdeath[nameAnswer % MLdeath.length];
}

//Advice
function getMLadvice(nameAnswer) {
    const MLadvice = ["Try to be a rainbow in someone's cloud.", "Remember that spiders are more afraid of you, than you are of them.", "Smile and the world smiles with you. Frown and you're on your own.", 
    "Don't eat non-snow-coloured snow.", "Cars are bad investments.", "If you have the chance, take it!", "Make choices and dont look back.", "Happiness is a journey, not a destination.", "Never run a marathon in Crocs.",
    "True happiness always resides in the quest.", "Never pay full price for a sofa at DFS.", "Avoid mixing Ginger Nuts with other biscuits, they contaminate. Keep separated.", "Life is better when you sing about bananas.", 
    "If it ain't broke don't fix it.", "It's unlucky to be superstitious.", "Sometimes it's best to ignore other people's advice.", "Don't judge a book by its cover, unless it has a synopsis on the back.", 
    "If you cannot unscrew the lid of a jar, try placing a rubber band around its circumference for extra grip.", "Don't feed Mogwais after midnight.", "Don't cross the streams.", "Don't wear clean trousers when walking your dog in the park.", 
    "When looking up at birds flying overhead, keep mouth closed.", "As you get older, learn never to trust a fart.", "Never let your Mother cut your hair.", "Everything in moderation, including moderation itself.", 
    "Only those who attempt the impossible can achieve the absurd.", "If you think nobody cares if you're alive, try missing a few payments.", "Never run with scissors.", "Always double check you actually attached the file to the email.", 
    "Try to pay at least one person a compliment every day.", "Don't promise what you can't deliver.", "The more ideas that you give away, the more ideas that will come to you.", "Never ruin an apology with an excuse.", 
    "Don't ever take a fence down until you know why it was put up.",  "A wise man gets more use from his enemies than a fool from his friends.", "The best way to predict your future is to create it.", 
    "Don't own so much clutter that you will be relieved to see your house catch fire.", "Love your Enemies, for they tell you your Faults.", "Never argue with a monkey." ]
    return MLadvice[nameAnswer % MLadvice.length];
}

module.exports = { getMLnames, getMLlastNames, getMLpronoun, getMLtown, getMLfamily, getMLraised, getMLambition, getMLcondition, getMLresult, getMLage, getMLdeath, getMLadvice };