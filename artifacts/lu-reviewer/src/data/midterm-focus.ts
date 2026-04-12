import { ContentSection, QuizQuestion, Subject, Topic } from "./types";

const makeExamSections = (subject: string, coverage: string[]) => [
  { type: "h2" as const, content: `${subject} Midterm Comprehensive Exam` },
  { type: "note" as const, content: "This exam is longer than the quick quizzes. Use it after finishing all module topics. It combines definition, application, analysis, and scenario-based questions so you can check if you are ready for the actual midterm." },
  { type: "list" as const, content: "Before answering, review these coverage points:", items: coverage },
  { type: "text" as const, content: "Recommended method: answer once without notes, review every explanation, then retry the exam after reviewing weak topics." },
];

const ge7Exam: QuizQuestion[] = [
  { question: "Environmentalism is best described as:", options: ["A laboratory science that only studies chemicals", "An advocacy or movement that protects, restores, and improves the natural environment", "A law that bans all technology", "A weather forecasting method"], answer: 1, explanation: "Environmentalism is an advocacy and social movement focused on preserving, restoring, and improving the environment." },
  { question: "Which statement correctly distinguishes weather from climate?", options: ["Weather is long-term; climate is daily", "Weather is daily atmospheric condition; climate is long-term average patterns", "Weather and climate are identical", "Climate changes every hour"], answer: 1, explanation: "Weather refers to short-term conditions; climate uses long-term averages, commonly over about 30 years." },
  { question: "Which is a natural climate factor mentioned in the module?", options: ["Plastic packaging", "Volcanic eruptions", "Social media", "Online shopping"], answer: 1, explanation: "Natural climate drivers include volcanic eruptions, ocean currents, orbital changes, solar variations, and internal variability." },
  { question: "Why is climate change also a social justice issue?", options: ["It affects only scientists", "Poor and vulnerable communities usually have fewer resources to adapt", "It is only about social media", "It happens only in rich countries"], answer: 1, explanation: "Climate change impacts are unequal; poor communities often have fewer choices, weaker infrastructure, and greater exposure to hazards." },
  { question: "Which example shows mitigation rather than adaptation?", options: ["Building higher houses in flood areas", "Reducing fossil-fuel use and increasing renewable energy", "Preparing evacuation bags", "Moving crops to a different planting calendar"], answer: 1, explanation: "Mitigation reduces causes of climate change, especially greenhouse gas emissions. Adaptation adjusts to impacts." },
  { question: "An energy crisis occurs when:", options: ["Energy supply cannot meet demand at affordable and reliable levels", "There is too much sunlight", "People stop using electricity entirely", "All fuels become free"], answer: 0, explanation: "Energy crisis means shortage, high price, unreliable supply, or mismatch between demand and available energy sources." },
  { question: "Which is a major cause of energy crisis?", options: ["Overdependence on limited fossil fuels", "Too many trees", "Studying environmental science", "Using public parks"], answer: 0, explanation: "Dependence on finite fossil fuels makes societies vulnerable to depletion, price shocks, geopolitical issues, and pollution." },
  { question: "Which solution best supports energy security and sustainability?", options: ["Use only imported oil forever", "Improve efficiency and diversify with renewable energy", "Ignore demand growth", "Increase wasteful consumption"], answer: 1, explanation: "Efficiency reduces demand while renewable energy diversification reduces dependence on finite/imported fuels." },
  { question: "The Information Age is characterized mainly by:", options: ["Handwritten documents only", "Rapid creation, processing, storage, and sharing of information through digital technologies", "No communication systems", "A complete rejection of computers"], answer: 1, explanation: "The Information Age centers on digital tools, computers, networks, and data-driven communication." },
  { question: "Which pandemic example shows technology supporting public health?", options: ["Contact tracing apps and online dashboards", "Removing all internet access", "Avoiding digital records", "Stopping scientific research"], answer: 0, explanation: "Digital tools helped pandemic preparedness through dashboards, contact tracing, telemedicine, research sharing, and online learning." },
  { question: "A negative social impact of technology is:", options: ["Faster emergency communication", "Cybercrime, misinformation, and privacy loss", "Access to educational videos", "Remote collaboration"], answer: 1, explanation: "Technology brings benefits but also risks such as cybercrime, misinformation, surveillance, privacy loss, and addiction." },
  { question: "A gene is:", options: ["A segment of DNA that carries instructions for traits or functions", "A type of fossil fuel", "A computer protocol", "A climate model"], answer: 0, explanation: "A gene is a DNA segment that helps determine traits by coding for products such as proteins." },
  { question: "Gene therapy differs from stem cell therapy because gene therapy primarily:", options: ["Changes or replaces faulty genetic material", "Only teaches exercise routines", "Always replaces organs", "Studies ocean currents"], answer: 0, explanation: "Gene therapy targets genetic defects by introducing, replacing, or editing genes; stem cell therapy uses cells that can develop or repair tissues." },
  { question: "GMOs are controversial mainly because:", options: ["They have no possible benefit", "They involve genetic modification that may raise food, health, economic, and environmental concerns", "They are the same as weather", "They cannot affect agriculture"], answer: 1, explanation: "GMOs may improve crops but also raise questions about biodiversity, health, corporate control, labeling, and environmental effects." },
  { question: "Which attitude best represents environmental awareness?", options: ["Recognizing how personal and collective actions affect the environment", "Ignoring pollution if it is far away", "Believing climate has no relation to human actions", "Avoiding all learning about nature"], answer: 0, explanation: "Environmental awareness means being conscious of environmental conditions and how actions, lifestyles, and policies affect them." },
];

const mst02Exam: QuizQuestion[] = [
  { question: "A computer network is:", options: ["Only one isolated device", "Two or more connected devices that share data, resources, or communication", "A drawing application", "A private diary"], answer: 1, explanation: "Networks connect devices so they can communicate, share files, printers, applications, or internet access." },
  { question: "Which network type usually covers a school, office, or building?", options: ["LAN", "WAN", "MAN", "VPN"], answer: 0, explanation: "A Local Area Network covers a limited area such as a room, laboratory, building, school, or office." },
  { question: "A WAN is different from a LAN because a WAN:", options: ["Covers a much wider geographic area", "Has no computers", "Can only use one cable", "Is not a network"], answer: 0, explanation: "WANs connect networks across cities, countries, or continents; the internet is the largest WAN-like system." },
  { question: "What is the purpose of a VPN?", options: ["To create a secure private connection over a public network", "To remove all passwords", "To replace the keyboard", "To make computers unable to communicate"], answer: 0, explanation: "A Virtual Private Network creates an encrypted private tunnel, often used for privacy and secure remote access." },
  { question: "Which device forwards data between different networks?", options: ["Router", "Keyboard", "Monitor", "Speaker"], answer: 0, explanation: "Routers connect networks and direct packets to their destinations." },
  { question: "Which device typically connects a local network to an internet service provider?", options: ["Modem", "Mouse", "Scanner", "Projector"], answer: 0, explanation: "A modem converts signals so a home or office network can connect to an ISP." },
  { question: "E-commerce refers to:", options: ["Buying, selling, or transacting through electronic networks", "Only face-to-face cash buying", "A type of stretching", "A virus"], answer: 0, explanation: "E-commerce uses the internet or electronic networks for buying, selling, banking, booking, and online transactions." },
  { question: "Which is an advantage of e-commerce?", options: ["24/7 access and wider market reach", "No need for security", "No customer convenience", "Only works without internet"], answer: 0, explanation: "E-commerce can operate anytime and reach customers beyond a physical location." },
  { question: "Which is a disadvantage or risk of e-commerce?", options: ["Online fraud and privacy concerns", "Faster product search", "Convenient comparison", "Digital payment options"], answer: 0, explanation: "E-commerce creates risks such as scams, fraud, privacy issues, delivery problems, and lack of physical inspection." },
  { question: "A protocol is:", options: ["A set of rules for communication between devices", "A computer chair", "A random password", "A type of exercise"], answer: 0, explanation: "Protocols define how data is formatted, transmitted, received, and acknowledged in networks." },
  { question: "Which protocol is used for secure web browsing?", options: ["HTTPS", "HTML only", "JPEG", "MP3"], answer: 0, explanation: "HTTPS is HTTP protected by encryption, helping secure data exchanged with websites." },
  { question: "A URL is:", options: ["The address of a resource on the web", "A network cable", "A hardware port", "An operating system"], answer: 0, explanation: "A Uniform Resource Locator identifies the location/address of a web resource." },
  { question: "An ISP provides:", options: ["Internet access to users and organizations", "Only word-processing templates", "Exercise clothing", "Climate predictions only"], answer: 0, explanation: "Internet Service Providers connect customers to the internet through wired, wireless, fiber, DSL, or mobile services." },
  { question: "Netiquette means:", options: ["Ethical and respectful behavior online", "Removing all online rules", "A physical network cable", "A security virus"], answer: 0, explanation: "Netiquette is proper online conduct: respect, clarity, privacy, responsible sharing, and avoiding harassment." },
  { question: "Which issue is commonly associated with internet use?", options: ["Misinformation, cyberbullying, privacy risks, and malware", "Only improved eyesight", "Guaranteed truth in all posts", "No social consequences"], answer: 0, explanation: "The internet is useful but includes issues such as cybercrime, fake news, addiction, privacy risks, and digital divide." },
  { question: "Data privacy focuses on:", options: ["Proper collection, use, sharing, and protection of personal information", "Making all data public", "Deleting all records", "Ignoring consent"], answer: 0, explanation: "Data privacy protects personal information and requires lawful, fair, transparent processing." },
  { question: "The Data Privacy Act of the Philippines is:", options: ["RA 10173", "RA 10175", "RA 9003", "RA 9163"], answer: 0, explanation: "RA 10173 is the Data Privacy Act of 2012. RA 10175 is the Cybercrime Prevention Act." },
  { question: "Which is an economic impact of ICT?", options: ["Growth of online work, e-commerce, automation, and IT-related jobs", "No effect on employment", "Ending all business communication", "Removing digital markets"], answer: 0, explanation: "ICT changes economies through productivity, e-commerce, remote work, automation, and new industries." },
  { question: "Which is a political impact of ICT?", options: ["Faster citizen participation and political communication online", "No access to government information", "Total removal of public opinion", "Only offline campaigns"], answer: 0, explanation: "ICT affects politics through e-governance, online campaigns, citizen reporting, mobilization, and also disinformation risks." },
  { question: "Which is a social impact of ICT?", options: ["Changed communication, learning, relationships, culture, and access to information", "No changes in daily life", "Only physical exercise improvement", "Ending all communication"], answer: 0, explanation: "ICT affects how people communicate, study, work, socialize, and participate in culture." },
];

const pe2Exam: QuizQuestion[] = [
  { question: "A health appraisal is:", options: ["A systematic evaluation of health status and lifestyle factors", "Only buying sportswear", "A type of internet service", "A network cable"], answer: 0, explanation: "Health appraisal gathers health and lifestyle information to identify risks and guide safe fitness decisions." },
  { question: "Before starting a new exercise program, a person with health concerns should:", options: ["Ignore symptoms", "Seek health screening or medical clearance", "Exercise at maximum intensity immediately", "Avoid hydration"], answer: 1, explanation: "Health screening protects safety, especially for beginners or people with medical conditions." },
  { question: "Proper warm-up is important because it:", options: ["Prepares the body for activity and reduces injury risk", "Makes exercise impossible", "Replaces hydration", "Only increases soreness"], answer: 0, explanation: "Warm-up raises temperature, improves blood flow, prepares joints/muscles, and reduces risk of strains." },
  { question: "Which clothing choice is best for exercise?", options: ["Moisture-wicking, breathable, properly fitted clothing", "Very restrictive clothing", "Shoes not made for the activity", "Dirty and damaged gear"], answer: 0, explanation: "Proper clothing and footwear support movement, comfort, hygiene, and injury prevention." },
  { question: "For hydration before exercise, the module recommends drinking water:", options: ["Only after fainting", "Throughout the day and around 16–20 oz 2–3 hours before activity", "Never before activity", "Only soda"], answer: 1, explanation: "Pre-exercise hydration includes regular fluid intake and about 16–20 oz 2–3 hours before exercise." },
  { question: "A blister is commonly caused by:", options: ["Friction, pressure, moisture, or ill-fitting footwear", "Drinking enough water", "Using proper socks", "Cool-down exercises"], answer: 0, explanation: "Blisters form when repeated friction separates skin layers, especially with poor footwear or prolonged activity." },
  { question: "Delayed muscle soreness is best managed by:", options: ["Gradual progression, warm-up/cool-down, hydration, recovery, and avoiding overexertion", "Ignoring pain and pushing harder", "Never resting", "Using bouncing stretches only"], answer: 0, explanation: "Soreness is common after activity; safe progression and recovery reduce severity and injury risk." },
  { question: "Dynamic stretching is most appropriate:", options: ["Before workout as part of warm-up", "Only while sleeping", "After injury without guidance", "As a replacement for hydration"], answer: 0, explanation: "Dynamic stretches use controlled movements and prepare the body before exercise." },
  { question: "HIIT means:", options: ["High Intensity Interval Training", "Healthy Internet Information Transfer", "Heavy Injury Isolation Test", "Human Internal Interval Timing"], answer: 0, explanation: "HIIT alternates short high-intensity work intervals with rest or lower-intensity recovery intervals." },
  { question: "In HIIT, work interval refers to:", options: ["The active high-effort exercise period", "The entire semester", "Only the cool-down", "A hydration break"], answer: 0, explanation: "Work intervals are the intense exercise segments; rest/recovery intervals allow partial recovery." },
  { question: "Proper exercise execution matters because:", options: ["Correct form lowers injury risk and improves effectiveness", "Form has no effect", "It removes the need for rest", "It prevents all sweating"], answer: 0, explanation: "Proper form protects joints/muscles and ensures the intended muscles are trained." },
  { question: "A personal fitness program should include:", options: ["Assessment, SMART goals, FITT principle, progression, and recovery", "Only random maximum workouts", "No rest days", "No monitoring"], answer: 0, explanation: "A good plan is individualized, measurable, progressive, balanced, and includes recovery." },
  { question: "The core muscles help mainly with:", options: ["Stability, posture, balance, and force transfer", "Only finger movement", "Internet access", "Vision correction"], answer: 0, explanation: "Core muscles stabilize the trunk and support posture, balance, and efficient movement." },
  { question: "Which is a core exercise?", options: ["Plank", "Typing only", "Router setup", "Online shopping"], answer: 0, explanation: "The plank trains core stability by resisting trunk movement." },
  { question: "Which is a lower body exercise?", options: ["Squat", "Email sending", "Browser refresh", "Shoulder shrug only"], answer: 0, explanation: "Squats train lower body muscles including quadriceps, hamstrings, glutes, and core stabilizers." },
  { question: "When performing lower body exercises, knees should generally:", options: ["Track in line with toes and avoid collapsing inward", "Always twist sharply inward", "Remain locked at all times", "Be ignored"], answer: 0, explanation: "Good knee alignment reduces stress and supports safer movement." },
  { question: "Progressive overload means:", options: ["Gradually increasing training demand over time", "Doing the same workout forever", "Skipping warm-up", "Avoiding all difficult movement"], answer: 0, explanation: "Progressive overload improves fitness by increasing intensity, volume, frequency, or complexity gradually." },
  { question: "Which action best prevents injury during fitness activities?", options: ["Use proper technique, appropriate intensity, hydration, warm-up, cool-down, and safe equipment", "Exercise through severe pain", "Use broken equipment", "Skip all safety guidelines"], answer: 0, explanation: "Safety depends on preparation, technique, environment, equipment, intensity control, and listening to the body." },
  { question: "If pain is sharp, unusual, or worsening during exercise, the safest response is to:", options: ["Stop and seek guidance if needed", "Continue harder", "Ignore it because all pain is normal", "Hide the symptom"], answer: 0, explanation: "Sharp or worsening pain can signal injury. Stop, assess, and seek help when needed." },
  { question: "Why should fitness programs be individualized?", options: ["People differ in health status, fitness level, goals, risks, and available resources", "Everyone has the same body", "Individual needs do not matter", "Only athletes need plans"], answer: 0, explanation: "Individualization makes exercise safer and more effective for each person's condition and goals." },
];

const ge7Exam50: QuizQuestion[] = [
  ...ge7Exam,
  { question: "Which phrase best explains altruism in environmental awareness?", options: ["Concern for the welfare of others, not only oneself", "A desire to waste resources", "A type of computer hardware", "A law about online shopping"], answer: 0, explanation: "The module connects environmental awareness with altruism because environmental choices affect other people and future generations." },
  { question: "Why is the statement 'climate change is real' scientifically important?", options: ["It reflects strong agreement among climate scientists based on evidence", "It is only a political slogan", "It means weather never changes naturally", "It means storms are imaginary"], answer: 0, explanation: "The module emphasizes that many publishing climate scientists agree climate change is happening and human activities are a major cause." },
  { question: "Which situation best shows the difference between weather and climate?", options: ["A rainy afternoon is weather; decades of rainy-season patterns are climate", "A rainy afternoon is climate; decades of records are weather", "Both are only guesses", "Neither relates to the atmosphere"], answer: 0, explanation: "Weather is short-term; climate is the long-term pattern built from many weather events." },
  { question: "Why are ocean currents important to climate?", options: ["They distribute heat around the globe", "They stop all storms permanently", "They remove all greenhouse gases instantly", "They are unrelated to temperature"], answer: 0, explanation: "Ocean circulation moves heat horizontally and vertically, influencing weather and climate." },
  { question: "What is the effect of volcanic ash and dust on climate?", options: ["Temporary cooling because sunlight can be blocked", "Permanent warming only", "No effect at all", "It creates internet networks"], answer: 0, explanation: "Volcanic particles can block sunlight temporarily, but the cooling effect is usually short-lived." },
  { question: "Which is an example of climate adaptation?", options: ["Improving drainage and evacuation plans in flood-prone barangays", "Increasing coal burning", "Ignoring typhoon warnings", "Removing early warning systems"], answer: 0, explanation: "Adaptation means adjusting to climate impacts, such as flooding and stronger storms." },
  { question: "Which is an example of climate mitigation?", options: ["Shifting to renewable energy and reducing emissions", "Only moving furniture during floods", "Buying more diesel generators without efficiency", "Building houses in danger zones"], answer: 0, explanation: "Mitigation addresses the causes of warming by reducing greenhouse gas emissions." },
  { question: "Why are poor coastal communities often highly vulnerable?", options: ["They may face high exposure and have fewer resources to recover", "They are unaffected by typhoons", "They always have unlimited savings", "They control global oil prices"], answer: 0, explanation: "Vulnerability increases when exposure is high and adaptive capacity is low." },
  { question: "Which sector is directly affected when climate change reduces crop yield?", options: ["Food security", "Only web browsing", "Only router setup", "Only gene editing"], answer: 0, explanation: "Reduced crop yield affects food supply, prices, nutrition, and livelihoods." },
  { question: "Which greenhouse gas is commonly linked to fossil fuel burning?", options: ["Carbon dioxide", "Oxygen only", "Helium only", "Neon only"], answer: 0, explanation: "Burning coal, oil, and gas releases carbon dioxide, a major greenhouse gas." },
  { question: "Which action best combines environmental awareness and community responsibility?", options: ["Joining waste segregation, clean-up, and disaster-preparedness efforts", "Throwing trash into waterways", "Ignoring local hazards", "Spreading fake climate information"], answer: 0, explanation: "Environmental awareness becomes meaningful when translated into responsible community action." },
  { question: "Energy demand usually increases when:", options: ["Population, industry, transportation, and technology use grow", "All appliances disappear", "Cities stop using electricity", "Hospitals close permanently"], answer: 0, explanation: "Growing population and economic activity increase energy needs." },
  { question: "Why can import dependence worsen an energy crisis?", options: ["Global price shocks and supply disruptions can affect local prices", "It guarantees free electricity", "It removes all geopolitical risks", "It prevents fuel shortages forever"], answer: 0, explanation: "Countries dependent on imported energy are vulnerable to international price and supply changes." },
  { question: "Which energy source is finite and emits greenhouse gases when burned?", options: ["Coal", "Solar sunlight", "Wind", "Flowing water"], answer: 0, explanation: "Coal is a fossil fuel, finite, and carbon-intensive." },
  { question: "Which solution reduces both household bills and total energy demand?", options: ["Energy efficiency", "Leaving appliances plugged in and running", "Using old inefficient bulbs", "Ignoring energy labels"], answer: 0, explanation: "Efficiency gives the same service with less energy, lowering cost and demand." },
  { question: "Geothermal energy is especially relevant to the Philippines because:", options: ["The country is volcanic and has geothermal potential", "The country has no volcanic activity", "It needs no scientific planning", "It is the same as social media"], answer: 0, explanation: "The Philippines has geothermal resources due to its geologic setting." },
  { question: "Which choice is the most sustainable energy strategy?", options: ["Combine efficiency, renewables, reliable grids, and responsible consumption", "Depend on one imported fossil fuel forever", "Increase waste", "Avoid planning"], answer: 0, explanation: "Sustainable energy requires diversified, efficient, reliable, and cleaner systems." },
  { question: "What made the Information Age different from earlier periods?", options: ["Information processing and sharing became fast, digital, and central to society", "People stopped communicating", "Only handwritten letters existed", "Science ended"], answer: 0, explanation: "Digital technologies made information a central resource in modern life." },
  { question: "Which tool helped continue education during pandemic lockdowns?", options: ["Learning management systems and video conferencing", "Only physical chalkboards in closed rooms", "No communication tools", "Broken computers"], answer: 0, explanation: "Online platforms helped classes continue when face-to-face learning was restricted." },
  { question: "What is a limitation of online learning during the pandemic?", options: ["Unequal internet and device access", "Instant equality for all students", "No need for electricity", "No need for teachers"], answer: 0, explanation: "Digital divide made online learning difficult for students without reliable devices, internet, or learning spaces." },
  { question: "Why did misinformation become dangerous during COVID-19?", options: ["False health claims could influence unsafe decisions", "All online posts were verified", "Rumors improve public health", "It only affected entertainment"], answer: 0, explanation: "Misinformation can lead people to reject safety measures or believe harmful claims." },
  { question: "Which example shows positive social impact of technology?", options: ["Emergency alerts reaching communities quickly", "Cyberbullying", "Identity theft", "Fake donation links"], answer: 0, explanation: "Technology can support disaster response by sending warnings and coordinating help." },
  { question: "Which example shows negative social impact of technology?", options: ["Online harassment damaging mental health", "Access to credible research", "Telemedicine for remote patients", "Disaster response coordination"], answer: 0, explanation: "Online harassment and cyberbullying are harmful social effects." },
  { question: "In research, computers are useful because they can:", options: ["Process, store, analyze, and share large amounts of data", "Eliminate the need for evidence", "Make all conclusions automatically true", "Stop all experiments"], answer: 0, explanation: "Computers support scientific work through data processing, modeling, storage, and communication." },
  { question: "Which describes genomic surveillance during a pandemic?", options: ["Tracking virus variants through genetic sequencing", "Counting push-ups only", "Selling products online", "Measuring shoe size"], answer: 0, explanation: "Genomic surveillance uses sequencing to identify and monitor variants." },
  { question: "A gene influences traits because it:", options: ["Carries instructions that can affect proteins or biological functions", "Is a power plant", "Is a social media post", "Is a typhoon category"], answer: 0, explanation: "Genes carry instructions that help determine inherited traits and biological processes." },
  { question: "Who introduced the term gene according to common history of genetics?", options: ["Wilhelm Johannsen", "Tim Berners-Lee", "Charles Babbage", "Isaac Newton"], answer: 0, explanation: "Wilhelm Johannsen is associated with the term gene." },
  { question: "Why is gene therapy considered promising for the future?", options: ["It may treat diseases at their genetic source", "It replaces all public health measures", "It stops climate change directly", "It only improves internet speed"], answer: 0, explanation: "Gene therapy is promising because it targets faulty genes that contribute to disease." },
  { question: "Which concern is associated with gene therapy?", options: ["Safety, delivery, ethics, and long-term effects", "No possible risk", "Only shoe comfort", "Only network speed"], answer: 0, explanation: "Gene therapy raises safety, delivery, ethical, and long-term monitoring concerns." },
  { question: "Stem cells are important because they:", options: ["Can develop into specialized cells and may help repair tissues", "Are fossil fuels", "Are internet protocols", "Are typhoon names"], answer: 0, explanation: "Stem cells can differentiate and are studied for tissue repair and regenerative medicine." },
  { question: "Which statement about genes and environment is accurate?", options: ["Genes influence traits, but environment can also affect expression and outcomes", "Genes alone decide everything with no environmental role", "Environment has no relation to health", "Genes are computer cables"], answer: 0, explanation: "Traits often reflect interaction between heredity and environmental factors." },
  { question: "Which is a possible benefit of GMO crops?", options: ["Pest resistance or improved yield", "Guaranteed absence of all concerns", "No relation to agriculture", "Instant end to climate change"], answer: 0, explanation: "GMOs may be designed for pest resistance, improved nutrition, longer shelf life, or yield." },
  { question: "Which is a possible environmental concern about GM plants?", options: ["Effects on biodiversity or gene flow to wild relatives", "Improved nutrition only", "Better storage only", "No possible ecosystem interaction"], answer: 0, explanation: "GM plants may raise concerns about ecosystem effects, biodiversity, and gene flow." },
  { question: "Why should GMO issues be discussed carefully rather than emotionally only?", options: ["They involve scientific evidence, ethics, environment, economy, and food security", "They have no scientific aspect", "They are only about fashion", "They are unrelated to society"], answer: 0, explanation: "GMO debates require balanced evaluation of benefits, risks, ethics, and social impacts." },
  { question: "Which best summarizes the GE7 midterm modules?", options: ["Science and technology affect environment, energy, information, genes, and society", "Only sports performance matters", "Only grammar rules matter", "Only accounting matters"], answer: 0, explanation: "GE7 connects scientific and technological issues with social consequences and ethical responsibilities." },
];

const mst02Exam50: QuizQuestion[] = [
  ...mst02Exam,
  { question: "Which topology connects devices around a circular path?", options: ["Ring topology", "Star topology only", "Tree only", "No topology"], answer: 0, explanation: "Ring topology connects devices in a loop where data can travel around the ring." },
  { question: "Which topology commonly uses a central device such as a switch?", options: ["Star topology", "Bus topology only", "No topology", "Random topology"], answer: 0, explanation: "In a star topology, devices connect to a central hub or switch." },
  { question: "A network's geographic coverage helps determine its:", options: ["Type or classification", "Keyboard color", "Screen brightness", "Operating chair"], answer: 0, explanation: "LAN, MAN, and WAN are classified mainly by coverage area and scale." },
  { question: "Which statement about a switch is correct?", options: ["It reduces unnecessary traffic by forwarding to the correct port", "It broadcasts everything like a simple hub all the time", "It is only a monitor", "It prevents networking"], answer: 0, explanation: "Switches learn addresses and forward traffic more efficiently than hubs." },
  { question: "Which cable is commonly used in wired LANs?", options: ["Ethernet cable", "Shoelace", "HDMI only for all networking", "Audio cable only"], answer: 0, explanation: "Ethernet cables are common wired LAN transmission media." },
  { question: "Wireless networks transmit data mainly through:", options: ["Radio waves", "Printed paper", "Water pipes", "Exercise bands"], answer: 0, explanation: "Wi-Fi and many wireless systems use radio waves." },
  { question: "Which is a common reason organizations use networks?", options: ["Collaboration and resource sharing", "Stopping all file sharing", "Avoiding communication", "Removing all devices"], answer: 0, explanation: "Networks support collaboration, communication, shared hardware, and shared data." },
  { question: "In e-commerce, B2C means:", options: ["Business to consumer", "Browser to cable", "Body to core", "Backup to climate"], answer: 0, explanation: "B2C means a business sells products or services directly to consumers." },
  { question: "In e-commerce, C2C means:", options: ["Consumer to consumer", "Cable to computer only", "Core to cardio", "Climate to city"], answer: 0, explanation: "C2C occurs when consumers sell or trade with other consumers, often through platforms." },
  { question: "Which is a safe sign when entering payment information online?", options: ["HTTPS and trusted website identity", "Unknown shortened links from strangers", "No privacy policy and suspicious URL", "Misspelled bank domain"], answer: 0, explanation: "HTTPS and verified site identity reduce risk, though users should still remain cautious." },
  { question: "An IP address is used to:", options: ["Identify a device or destination on a network", "Stretch muscles", "Measure body fat only", "Name a gene"], answer: 0, explanation: "IP addresses help route data to devices across networks." },
  { question: "DNS is useful because it:", options: ["Translates domain names into IP addresses", "Makes exercise safer", "Creates genetic traits", "Replaces all routers"], answer: 0, explanation: "DNS lets users type names like example.com instead of numeric IP addresses." },
  { question: "A browser is:", options: ["Software used to access web pages", "An ISP company only", "A network cable", "A type of lower body exercise"], answer: 0, explanation: "Browsers such as Chrome, Edge, Firefox, and Safari display web content." },
  { question: "Which part of a URL usually identifies the protocol?", options: ["https://", ".jpg only", "The keyboard", "The monitor"], answer: 0, explanation: "The beginning of a URL such as http:// or https:// indicates the protocol." },
  { question: "Which online behavior violates netiquette?", options: ["Posting insults and private information without consent", "Checking sources", "Using respectful language", "Crediting authors"], answer: 0, explanation: "Harassment and privacy violations are against responsible online conduct." },
  { question: "Cyberbullying is serious because it can:", options: ["Damage mental health, safety, and reputation", "Always improve learning", "Protect privacy", "Remove all harm"], answer: 0, explanation: "Cyberbullying can cause emotional distress and social harm." },
  { question: "Phishing usually tries to obtain:", options: ["Passwords, codes, personal data, or financial information", "Only exercise records", "Only weather averages", "Only muscle names"], answer: 0, explanation: "Phishing tricks users into revealing sensitive information." },
  { question: "Malware means:", options: ["Malicious software", "Manual learning only", "Muscle alert", "Metropolitan area law"], answer: 0, explanation: "Malware is software designed to damage, disrupt, spy, or gain unauthorized access." },
  { question: "A strong password should generally be:", options: ["Long, unique, and difficult to guess", "Your birthday only", "123456", "Your name repeated"], answer: 0, explanation: "Long, unique passwords reduce account compromise risk." },
  { question: "Two-factor authentication improves security by:", options: ["Requiring another verification factor besides the password", "Removing all login checks", "Sharing passwords faster", "Turning off protection"], answer: 0, explanation: "2FA adds a second proof such as a code, app prompt, or biometric factor." },
  { question: "Which principle means personal data should only be collected for a valid reason?", options: ["Legitimate purpose", "Unlimited collection", "Random sharing", "Public posting"], answer: 0, explanation: "The Data Privacy Act emphasizes legitimate purpose, transparency, and proportionality." },
  { question: "Which principle means collecting only data that is necessary?", options: ["Proportionality", "Oversharing", "Unlimited copying", "Random collection"], answer: 0, explanation: "Proportionality means data processing should be adequate, relevant, and not excessive." },
  { question: "A data breach is:", options: ["Unauthorized access, disclosure, loss, or misuse of data", "A normal warm-up", "A LAN cable color", "A safe stretching method"], answer: 0, explanation: "Data breaches compromise confidentiality, integrity, or availability of information." },
  { question: "Which is personal information?", options: ["A student's full name with student number", "A random weather average with no person identified", "A generic network definition", "A public formula only"], answer: 0, explanation: "Information that identifies or can identify an individual is personal information." },
  { question: "Which ICT effect can help government service delivery?", options: ["E-governance and online public services", "No public communication", "No records", "Only paper delays"], answer: 0, explanation: "ICT can make government services faster, more accessible, and more transparent." },
  { question: "Which ICT risk can affect elections and public opinion?", options: ["Disinformation campaigns", "Accurate public advisories", "Transparent data portals", "Voter education"], answer: 0, explanation: "False or manipulative online content can distort political judgment." },
  { question: "Which ICT change supports the economy?", options: ["Remote work and digital entrepreneurship", "Removing online transactions", "Preventing communication", "Banning all data"], answer: 0, explanation: "ICT enables online businesses, freelancing, BPO, and productivity tools." },
  { question: "Which social challenge is linked to too much screen exposure?", options: ["Screen fatigue, sleep issues, and reduced well-being", "Guaranteed better health", "No effect on students", "Instant privacy"], answer: 0, explanation: "Excessive screen time can affect sleep, attention, mental health, and physical habits." },
  { question: "Which statement best connects Modules 5 to 7?", options: ["Networks enable digital services, which require security/privacy and create social impacts", "Networks only affect sports", "Privacy is unrelated to ICT", "ICT has no economic role"], answer: 0, explanation: "MST02 connects network infrastructure with digital behavior, data protection, and societal change." },
  { question: "The best responsible ICT user is one who:", options: ["Uses technology effectively, ethically, securely, and critically", "Shares passwords freely", "Believes every post", "Attacks others online"], answer: 0, explanation: "Responsible ICT use combines skill, ethics, safety, privacy, and critical thinking." },
];

const pe2Exam50: QuizQuestion[] = [
  ...pe2Exam,
  { question: "Which is part of a pre-exercise health screening?", options: ["Checking existing conditions, injuries, and readiness for activity", "Ignoring all symptoms", "Starting maximum effort immediately", "Choosing only shirt color"], answer: 0, explanation: "Health screening checks factors that may affect safe participation." },
  { question: "Why should beginners avoid sudden high intensity?", options: ["Their bodies need gradual adaptation to reduce injury risk", "High intensity is always forbidden", "Adaptation does not matter", "It improves networks"], answer: 0, explanation: "Gradual progression lets muscles, joints, heart, and coordination adapt safely." },
  { question: "A cool-down helps because it:", options: ["Gradually lowers intensity and supports recovery", "Replaces all training", "Causes intentional dehydration", "Stops all flexibility"], answer: 0, explanation: "Cool-down helps transition the body back toward resting state." },
  { question: "Which is the safest response to dizziness during exercise?", options: ["Stop, rest, hydrate if appropriate, and seek help if needed", "Continue harder", "Ignore it", "Increase jumping immediately"], answer: 0, explanation: "Dizziness can indicate a safety issue and should not be ignored." },
  { question: "Moisture-wicking clothes help by:", options: ["Moving sweat away from the body for comfort", "Increasing friction and blisters", "Blocking all movement", "Replacing water intake"], answer: 0, explanation: "Moisture-wicking fabric helps keep the body drier and more comfortable." },
  { question: "Why is proper footwear important?", options: ["It provides support, cushioning, and stability for the activity", "It has no safety function", "It replaces warm-up", "It prevents all sweating"], answer: 0, explanation: "Activity-appropriate shoes reduce foot, ankle, and impact-related risk." },
  { question: "When exercising longer than 60 minutes, fluid intake should be:", options: ["Regular and adjusted to conditions", "Avoided completely", "Only after severe dehydration", "Only coffee"], answer: 0, explanation: "Longer activity requires regular fluid replacement, especially in heat." },
  { question: "Which environmental condition increases hydration needs?", options: ["Hot and humid weather", "Cool indoor rest only", "No movement", "Sleeping"], answer: 0, explanation: "Heat and humidity increase sweat and fluid loss." },
  { question: "What should you generally avoid doing to a clean, uninfected blister?", options: ["Unnecessarily popping it", "Protecting it from friction", "Keeping it clean", "Monitoring for infection"], answer: 0, explanation: "Popping can increase infection risk unless medically necessary or properly managed." },
  { question: "Which is a warning sign that a blister may need medical attention?", options: ["Severe pain, redness, pus, or signs of infection", "It is protected and clean", "Friction is reduced", "Footwear is corrected"], answer: 0, explanation: "Infection signs or severe cases should be checked by a professional." },
  { question: "Muscle soreness after a new workout usually means:", options: ["The muscles experienced unfamiliar stress and need recovery", "Exercise is always harmful", "Hydration is useless", "No adaptation will occur"], answer: 0, explanation: "Delayed soreness can occur after new or intense activity and should be managed with recovery." },
  { question: "Which stretching type is usually held without movement?", options: ["Static stretching", "Dynamic stretching", "HIIT", "Circuit interval"], answer: 0, explanation: "Static stretching holds a position for a period of time." },
  { question: "Ballistic stretching is risky because it:", options: ["Uses bouncing or forced movement that may strain tissues", "Is always controlled and slow", "Requires no caution", "Is the same as hydration"], answer: 0, explanation: "Bouncing movements can push beyond safe range and increase injury risk." },
  { question: "Which is a low-impact HIIT modification?", options: ["Step jacks instead of jumping jacks", "Jump higher despite pain", "Skip warm-up", "Hold breath"], answer: 0, explanation: "Low-impact versions reduce stress while keeping interval structure." },
  { question: "Recovery intervals in HIIT are important because they:", options: ["Allow partial recovery so work intervals can be performed safely", "Make the workout useless", "Replace all effort", "Increase injury intentionally"], answer: 0, explanation: "Recovery intervals help maintain quality and reduce excessive fatigue." },
  { question: "Which is a sign that HIIT intensity may be too high for a beginner?", options: ["Loss of form, dizziness, or inability to recover", "Controlled breathing", "Proper rest", "Good alignment"], answer: 0, explanation: "Poor form and distress are signs to reduce intensity or stop." },
  { question: "SMART goals are useful because they:", options: ["Make progress clear and realistic", "Make goals vague", "Ignore time", "Remove measurement"], answer: 0, explanation: "SMART goals help track and achieve realistic fitness outcomes." },
  { question: "Which is a SMART fitness goal?", options: ["Walk briskly 30 minutes, 4 days a week for 6 weeks", "Get fit someday", "Exercise randomly forever", "Never track progress"], answer: 0, explanation: "The goal is specific, measurable, attainable, relevant, and time-bound." },
  { question: "Which FITT variable answers 'how hard?'", options: ["Intensity", "Frequency", "Type", "Time"], answer: 0, explanation: "Intensity describes exercise difficulty or effort level." },
  { question: "Which FITT variable answers 'what activity?'", options: ["Type", "Time", "Frequency", "Intensity"], answer: 0, explanation: "Type refers to the mode of exercise such as HIIT, walking, core, or resistance." },
  { question: "Why include rest days in a program?", options: ["To allow recovery and adaptation", "To erase all progress", "To avoid hydration", "To increase overtraining"], answer: 0, explanation: "Recovery supports improvement and lowers overuse risk." },
  { question: "Which muscle group is strongly involved in squats and lunges?", options: ["Quadriceps and glutes", "Only fingers", "Only neck", "Only eyes"], answer: 0, explanation: "Squats and lunges train major lower body muscles including quadriceps and glutes." },
  { question: "A glute bridge mainly targets:", options: ["Glutes and posterior chain", "Only wrists", "Only shoulders", "Only jaw"], answer: 0, explanation: "Glute bridges train hip extension, especially glutes and supporting posterior muscles." },
  { question: "A side plank emphasizes:", options: ["Lateral core stability and obliques", "Only calves", "Only biceps", "Only fingers"], answer: 0, explanation: "Side plank targets lateral trunk stability." },
  { question: "Bird dog exercise is useful for:", options: ["Core stability and coordination", "Only maximum jumping", "Only sprint speed", "Only shoe fitting"], answer: 0, explanation: "Bird dog trains trunk control while moving opposite arm and leg." },
  { question: "During a plank, the hips should:", options: ["Stay aligned with a neutral spine", "Sag heavily", "Twist randomly", "Be ignored"], answer: 0, explanation: "Neutral alignment makes the plank safer and more effective." },
  { question: "Which is a good lower body progression?", options: ["Bodyweight squat before weighted or jump variations", "Jump squat before learning squat form", "Painful depth immediately", "No practice needed"], answer: 0, explanation: "Learn basic control before adding load, speed, or impact." },
  { question: "Which principle best prevents overtraining?", options: ["Balance exercise stress with recovery", "Train maximally every day", "Ignore fatigue", "Avoid sleep"], answer: 0, explanation: "Recovery is necessary for adaptation and injury prevention." },
  { question: "Which statement best summarizes PE2 midterm safety?", options: ["Prepare, perform correctly, hydrate, progress gradually, and recover", "Move randomly and ignore warning signs", "Only focus on speed", "Never assess health"], answer: 0, explanation: "Safe fitness requires preparation, correct technique, appropriate intensity, hydration, and recovery." },
  { question: "The best PE2 program for a student is one that is:", options: ["Safe, realistic, progressive, and matched to personal goals", "Copied blindly from an athlete", "Always maximum intensity", "Without warm-up or rest"], answer: 0, explanation: "Fitness programs should fit the student's needs, level, risks, and goals." },
];

const GE7_MIDTERM_TOPICS: Topic[] = [
  {
    id: "ge7-mid-m5-l1",
    title: "Module 5 Lesson 1: Environmentalism and Environmental Awareness",
    content: {
      heading: "Environmentalism and Environmental Awareness",
      term: "MIDTERM",
      module: "Module 5: Environmental Awareness",
      objectives: ["Define environmentalism and environmental awareness", "Distinguish environmentalism from environmental science", "Explain why environmental awareness requires action and lifestyle reflection"],
      sections: [
        { type: "h2", content: "Why Environmental Awareness Matters" },
        { type: "text", content: "The Philippines faces environmental hazards because it is an archipelagic country exposed to typhoons, warm ocean waters, flooding, landslides, and other climate-related risks. Climate change makes many of these hazards stronger, more frequent, and harder to predict." },
        { type: "definition", content: "Environmentalism — an advocacy, philosophy, and social movement focused on preserving, restoring, and improving the natural environment, including biodiversity, forests, water systems, climate, and weather-related processes." },
        { type: "definition", content: "Environmental awareness — being conscious of environmental issues and recognizing that personal behavior, lifestyle, community choices, and national policies affect the environment." },
        { type: "table", content: "Environmentalism vs. Environmental Science", headers: ["Aspect", "Environmentalism", "Environmental Science"], rows: [["Nature", "Advocacy, philosophy, social movement", "Scientific field combining biology, chemistry, geology, ecology, and social science"], ["Main question", "What should we protect and change?", "How do environmental systems work and what evidence explains problems?"], ["Training", "Does not require a science degree", "Usually involves formal scientific study"], ["Output", "Campaigns, lifestyle change, policy advocacy", "Research, data, monitoring, technical solutions"]] },
        { type: "note", content: "Environmental science can support environmentalism by providing evidence. Environmentalism turns concern into public action." },
        { type: "h3", content: "Importance of Environmental Awareness" },
        { type: "list", content: "An environmentally aware person:", items: ["Recognizes that everyday actions affect air, water, land, biodiversity, and climate", "Understands that collective small actions can create large environmental impacts", "Makes informed choices about consumption, waste, transportation, and energy use", "Supports policies and practices that reduce pollution and protect vulnerable communities"] },
      ],
      quiz: [
        { question: "Environmentalism is mainly:", options: ["A social advocacy for protecting and improving the natural environment", "A computer network", "A type of muscle soreness", "A weather event"], answer: 0, explanation: "Environmentalism is an advocacy/social movement focused on protecting, restoring, and improving the environment." },
        { question: "Environmental science differs from environmentalism because it:", options: ["Uses scientific study to understand and solve environmental problems", "Does not care about evidence", "Is only a political campaign", "Means the same as climate"], answer: 0, explanation: "Environmental science is a scientific field; environmentalism is a movement or advocacy." },
        { question: "Environmental awareness means:", options: ["Being conscious of environmental conditions and one's impact", "Ignoring pollution", "Believing nature cannot be damaged", "Studying only sports"], answer: 0, explanation: "Awareness includes recognizing environmental problems and how our choices affect them." },
      ],
    },
  },
  {
    id: "ge7-mid-m5-l2",
    title: "Module 5 Lesson 2: Climate Change",
    content: {
      heading: "Climate Change",
      term: "MIDTERM",
      module: "Module 5: Environmental Awareness",
      objectives: ["Differentiate weather and climate", "Identify natural and human causes of climate change", "Explain why Filipinos should be concerned about climate change"],
      sections: [
        { type: "h2", content: "Weather vs. Climate" },
        { type: "table", content: "Key Difference", headers: ["Concept", "Meaning", "Example"], rows: [["Weather", "Temporary atmospheric condition that changes hour to hour or day to day", "Today is rainy in Laguna"], ["Climate", "Average weather pattern over a long period, commonly 30 years, in a region", "The Philippines has a tropical climate with wet and dry seasons"]] },
        { type: "h2", content: "Natural Causes of Climate Change" },
        { type: "list", content: "Natural factors can affect climate over long periods:", items: ["Volcanic eruptions temporarily cool climate by releasing ash and particles that block sunlight", "Ocean currents distribute heat around the planet and influence weather and climate patterns", "Earth's orbital shifts and wobble influence ice ages over thousands of years", "Solar variations change the amount of energy received from the Sun", "Internal variability means natural fluctuations within Earth's climate system"] },
        { type: "h2", content: "Human-Driven Climate Change" },
        { type: "text", content: "Current global warming is strongly linked to human activities, especially burning fossil fuels, deforestation, industrial processes, agriculture, and land-use changes. These increase greenhouse gases such as carbon dioxide, methane, and nitrous oxide." },
        { type: "note", content: "Climate change is not only a science topic. It affects food, water, health, livelihood, housing, education, disaster preparedness, and national development." },
      ],
      quiz: [
        { question: "Climate usually refers to weather patterns averaged over about:", options: ["1 hour", "1 day", "30 years", "2 minutes"], answer: 2, explanation: "Climate uses long-term averages, commonly over a 30-year period." },
        { question: "Which natural event can temporarily cool climate?", options: ["Volcanic eruption", "Online gaming", "Text messaging", "Poor posture"], answer: 0, explanation: "Volcanic ash and particles can temporarily block sunlight and cool climate." },
        { question: "The main human cause of current warming is:", options: ["Increased greenhouse gases from fossil fuels and land-use changes", "Too much exercise", "More printed textbooks only", "Ocean waves alone"], answer: 0, explanation: "Human activities increase greenhouse gases that trap heat in the atmosphere." },
      ],
    },
  },
  {
    id: "ge7-mid-m5-l3",
    title: "Module 5 Lesson 3: Climate Change and Social Justice",
    content: {
      heading: "Climate Change and Social Justice",
      term: "MIDTERM",
      module: "Module 5: Environmental Awareness",
      objectives: ["Explain climate vulnerability", "Connect climate change with poverty and inequality", "Identify fair responses to climate-related risks"],
      sections: [
        { type: "h2", content: "Unequal Impacts" },
        { type: "text", content: "Different people and communities experience climate change differently. Wealthier groups usually have more choices: safer housing, insurance, savings, backup power, private transportation, and the ability to relocate. Poor communities often have fewer resources and higher exposure to floods, heat, storms, and livelihood loss." },
        { type: "definition", content: "Climate justice — the idea that climate change should be addressed in a fair way because those who contributed least to the problem often suffer the most." },
        { type: "table", content: "Climate Risk Factors", headers: ["Factor", "Why It Matters"], rows: [["Exposure", "Living in flood-prone, coastal, or landslide-prone areas increases danger"], ["Sensitivity", "Health, age, income, disability, livelihood, and housing quality affect impact"], ["Adaptive capacity", "Savings, education, infrastructure, government support, and social networks affect recovery"]] },
        { type: "h3", content: "Fair Climate Action" },
        { type: "list", content: "Climate justice responses include:", items: ["Prioritizing vulnerable communities in disaster preparedness", "Improving early warning systems and evacuation centers", "Supporting climate-resilient livelihoods and agriculture", "Making clean energy affordable and accessible", "Holding major polluters accountable while protecting ordinary families"] },
      ],
      quiz: [
        { question: "Climate justice emphasizes that:", options: ["Climate impacts and responsibilities are unequal", "Only wealthy countries experience climate change", "Weather is always fair", "No policy response is needed"], answer: 0, explanation: "Climate justice focuses on unequal responsibility, vulnerability, and access to adaptation resources." },
        { question: "Adaptive capacity means:", options: ["Ability to adjust, cope, and recover from climate impacts", "The number of smartphones owned", "The speed of a router", "A type of stretching"], answer: 0, explanation: "Adaptive capacity is the ability to prepare, adjust, respond, and recover." },
      ],
    },
  },
  {
    id: "ge7-mid-m5-l4",
    title: "Module 5 Lesson 4: What Climate Change Means for Filipinos",
    content: {
      heading: "What Climate Change Means for Filipinos",
      term: "MIDTERM",
      module: "Module 5: Environmental Awareness",
      objectives: ["Describe Philippine climate vulnerabilities", "Identify effects on Filipino communities", "Recommend practical adaptation and mitigation actions"],
      sections: [
        { type: "h2", content: "Why the Philippines Is Highly Vulnerable" },
        { type: "list", content: "The Philippines is at risk because it has:", items: ["Long coastlines and many low-lying communities vulnerable to sea-level rise and storm surges", "Frequent typhoons and heavy rainfall", "Urban flooding due to drainage, waste, and land-use issues", "Agricultural areas sensitive to drought, pests, and changing rainfall", "Communities whose income depends on farming, fishing, tourism, and informal work"] },
        { type: "table", content: "Possible Effects on Filipinos", headers: ["Area", "Impact"], rows: [["Health", "Heat stress, waterborne disease, respiratory problems, mental stress after disasters"], ["Food", "Reduced crop yield, higher food prices, fisheries decline"], ["Housing", "Flooding, damaged homes, displacement"], ["Education", "Class disruptions, damaged schools, limited online access during disasters"], ["Economy", "Livelihood loss, infrastructure damage, higher recovery cost"]] },
        { type: "h3", content: "What Students Can Do" },
        { type: "list", content: "Practical actions:", items: ["Reduce waste and practice proper segregation", "Conserve electricity and water", "Join community clean-up and tree-growing activities", "Prepare emergency kits and know evacuation plans", "Verify climate information from credible sources", "Support policies for clean energy, disaster risk reduction, and environmental protection"] },
      ],
      quiz: [
        { question: "Which makes the Philippines vulnerable to climate change?", options: ["Long coastline and frequent typhoons", "No exposure to oceans", "No farming communities", "Cold polar climate"], answer: 0, explanation: "The Philippines has many coastal and low-lying areas and experiences frequent typhoons." },
        { question: "Which student action helps mitigation?", options: ["Conserving electricity and reducing waste", "Burning trash", "Wasting water", "Ignoring local warnings"], answer: 0, explanation: "Conservation and waste reduction lower environmental impact and emissions." },
      ],
    },
  },
  {
    id: "ge7-mid-m6-l1",
    title: "Module 6 Lesson 1: Definition of Energy Crisis",
    content: {
      heading: "Definition of Energy Crisis",
      term: "MIDTERM",
      module: "Module 6: Energy Crisis",
      objectives: ["Define energy crisis", "Explain energy security", "Recognize why energy affects national development"],
      sections: [
        { type: "definition", content: "Energy crisis — a situation where energy supply is insufficient, unreliable, inaccessible, or too expensive to meet the needs of households, industries, transportation, and public services." },
        { type: "definition", content: "Energy security — reliable, affordable, and sustainable access to energy sources needed for daily life and economic activity." },
        { type: "h2", content: "Why Energy Crisis Matters" },
        { type: "text", content: "Electricity powers schools, hospitals, homes, transportation, communication, businesses, and government services. When energy is expensive or unreliable, prices rise, productivity falls, and poor households suffer most." },
        { type: "table", content: "Signs of Energy Crisis", headers: ["Sign", "Meaning"], rows: [["Shortage", "Supply cannot meet demand"], ["High prices", "Fuel or electricity becomes unaffordable"], ["Brownouts/blackouts", "Power supply becomes unreliable"], ["Import dependence", "Country is vulnerable to global price shocks"], ["Environmental cost", "Energy production harms air, water, climate, or communities"]] },
      ],
      quiz: [
        { question: "Energy security means:", options: ["Reliable, affordable, and sustainable access to energy", "Using no energy", "Only importing oil", "Making electricity unpredictable"], answer: 0, explanation: "Energy security involves access, affordability, reliability, and sustainability." },
        { question: "An energy crisis can affect:", options: ["Homes, schools, hospitals, transport, and businesses", "Only volcanoes", "Only genes", "Nothing outside sports"], answer: 0, explanation: "Energy is connected to almost every part of modern life and development." },
      ],
    },
  },
  {
    id: "ge7-mid-m6-l2",
    title: "Module 6 Lesson 2: Causes of Energy Crisis",
    content: {
      heading: "Causes of Energy Crisis",
      term: "MIDTERM",
      module: "Module 6: Energy Crisis",
      objectives: ["Identify major causes of energy crisis", "Explain fossil fuel dependence", "Analyze demand, supply, and policy factors"],
      sections: [
        { type: "list", content: "Common causes:", items: ["Overdependence on finite fossil fuels such as coal, oil, and natural gas", "Rapid population growth and increasing energy demand", "Aging power plants and transmission infrastructure", "Geopolitical conflict and global price shocks", "Natural disasters damaging supply lines and power systems", "Underinvestment in renewable energy and efficiency", "Wasteful consumption and poor energy planning"] },
        { type: "h2", content: "Fossil Fuel Dependence" },
        { type: "text", content: "Fossil fuels are energy-dense but limited and polluting. Countries that import fuel are exposed to international price increases and supply disruptions. Burning fossil fuels also increases greenhouse gases, connecting energy crisis with climate change." },
        { type: "note", content: "The energy question is not only 'Where do we get power?' but also 'Who pays the cost, who benefits, and what environmental damage is produced?'" },
      ],
      quiz: [
        { question: "Which is a cause of energy crisis?", options: ["Overdependence on fossil fuels", "Too much proper planning", "Low demand everywhere", "Unlimited free oil"], answer: 0, explanation: "Fossil fuel dependence creates scarcity, cost, import, and pollution problems." },
        { question: "Energy crisis connects with climate change because:", options: ["Many energy sources emit greenhouse gases", "Electricity has no environmental effect", "Climate is unrelated to fuel", "Only genes matter"], answer: 0, explanation: "Burning coal, oil, and gas releases greenhouse gases that drive warming." },
      ],
    },
  },
  {
    id: "ge7-mid-m6-l3",
    title: "Module 6 Lesson 3: Possible Solutions to Energy Crisis",
    content: {
      heading: "Possible Solutions to Energy Crisis",
      term: "MIDTERM",
      module: "Module 6: Energy Crisis",
      objectives: ["Describe energy conservation and efficiency", "Compare renewable energy options", "Recommend realistic household and community energy practices"],
      sections: [
        { type: "table", content: "Solution Paths", headers: ["Solution", "How It Helps"], rows: [["Energy efficiency", "Uses less energy for the same output, lowering bills and demand"], ["Renewable energy", "Solar, wind, hydro, geothermal, and biomass reduce fossil-fuel dependence"], ["Grid modernization", "Improves reliability and integrates renewable power"], ["Public transport and walkable cities", "Reduces fuel consumption and emissions"], ["Education and conservation", "Encourages responsible daily energy use"]] },
        { type: "list", content: "Household actions:", items: ["Switch off unused lights and appliances", "Use efficient appliances and LED bulbs", "Maximize natural light and ventilation when possible", "Plan trips and support public transportation", "Report illegal connections and unsafe wiring", "Understand electricity bills to monitor consumption"] },
        { type: "note", content: "The best energy solution is usually a combination: reduce demand, improve efficiency, diversify supply, and protect the environment." },
      ],
      quiz: [
        { question: "Energy efficiency means:", options: ["Using less energy to provide the same service", "Using more power for the same task", "Wasting electricity", "Avoiding all technology"], answer: 0, explanation: "Efficiency reduces energy waste without necessarily reducing quality of life." },
        { question: "Which is renewable energy?", options: ["Solar power", "Coal", "Diesel", "Crude oil"], answer: 0, explanation: "Solar power comes from sunlight and is renewable." },
      ],
    },
  },
  {
    id: "ge7-mid-m7-l1",
    title: "Module 7 Lesson 1: Historical Development of the Information Age",
    content: {
      heading: "Historical Development of the Information Age",
      term: "MIDTERM",
      module: "Module 7: The Information Age",
      objectives: ["Define the Information Age", "Trace major information technology developments", "Explain how information became a key resource"],
      sections: [
        { type: "definition", content: "Information Age — a period where creating, processing, storing, and sharing information through digital technologies became central to economic, social, educational, political, and cultural life." },
        { type: "table", content: "Development Timeline", headers: ["Stage", "Key Development", "Impact"], rows: [["Manual and print era", "Writing, printing press, libraries", "Information preservation and mass literacy"], ["Electromechanical era", "Telegraph, telephone, radio", "Long-distance communication"], ["Computer era", "Mainframes, personal computers", "Fast data processing and office automation"], ["Internet era", "Networks, web, email, search engines", "Global communication and information access"], ["Mobile/cloud/AI era", "Smartphones, cloud, big data, AI", "Always-connected and data-driven society"]] },
        { type: "text", content: "In the Information Age, information itself becomes a source of power. Whoever can access, analyze, protect, and use data effectively has an advantage in education, business, government, and science." },
      ],
      quiz: [
        { question: "The Information Age is centered on:", options: ["Digital creation, processing, storage, and sharing of information", "Only farming tools", "No communication", "Avoiding all data"], answer: 0, explanation: "Digital information and communication technologies define the Information Age." },
        { question: "Why is information considered power?", options: ["It supports decisions, innovation, education, and control of resources", "It has no use", "It replaces oxygen", "It only exists on paper"], answer: 0, explanation: "Information guides decisions and gives advantages to those who can use it well." },
      ],
    },
  },
  {
    id: "ge7-mid-m7-l2",
    title: "Module 7 Lesson 2: Computers in Science and Research During COVID-19",
    content: {
      heading: "Applications of Computers in Science and Research During COVID-19",
      term: "MIDTERM",
      module: "Module 7: The Information Age",
      objectives: ["Describe digital tools used in pandemic response", "Explain how computers supported research and public health", "Evaluate benefits and limits of pandemic technologies"],
      sections: [
        { type: "table", content: "Digital Technology Initiatives", headers: ["Use", "Example", "Benefit"], rows: [["Data dashboards", "Case counts, maps, hospital capacity", "Real-time monitoring for decisions"], ["Contact tracing", "Apps and databases", "Faster exposure notification"], ["Telemedicine", "Online consultation", "Safer access to healthcare"], ["Genomic research", "Sequencing virus variants", "Tracking mutation and spread"], ["Online learning/work", "LMS, video calls, collaboration apps", "Continuity during lockdowns"]] },
        { type: "h2", content: "Benefits and Limits" },
        { type: "list", content: "Benefits:", items: ["Faster sharing of research", "Remote access to services", "Improved data collection", "Better coordination of public health response"] },
        { type: "list", content: "Limits and risks:", items: ["Digital divide excludes students and communities without devices or internet", "Privacy concerns in health and contact tracing data", "Misinformation spreads quickly", "Overreliance on technology can ignore social realities"] },
      ],
      quiz: [
        { question: "Which tool helped monitor COVID-19 cases in real time?", options: ["Digital dashboards", "Broken modems", "Paperless misinformation", "Unplugged routers"], answer: 0, explanation: "Dashboards summarized cases, location, trends, and hospital data." },
        { question: "A major concern with contact tracing apps is:", options: ["Privacy and data protection", "Improved alerts", "Faster notification", "Public health coordination"], answer: 0, explanation: "Health and location data must be protected and used only for legitimate purposes." },
      ],
    },
  },
  {
    id: "ge7-mid-m7-l3",
    title: "Module 7 Lesson 3: Living in the Information Age During the Pandemic",
    content: {
      heading: "Impact of Living in the Information Age During COVID-19",
      term: "MIDTERM",
      module: "Module 7: The Information Age",
      objectives: ["Analyze effects of digital life during the pandemic", "Identify digital divide issues", "Practice responsible information behavior"],
      sections: [
        { type: "text", content: "The pandemic showed both the strength and weakness of the Information Age. Technology allowed classes, work, banking, worship, shopping, and communication to continue, but unequal access made many students and families struggle." },
        { type: "definition", content: "Digital divide — inequality between people who have reliable access to digital tools, internet, skills, and support and those who do not." },
        { type: "table", content: "Pandemic Digital Life", headers: ["Area", "Positive Impact", "Challenge"], rows: [["Education", "Online classes and learning resources", "Connectivity, devices, motivation, mental fatigue"], ["Work", "Remote work and online meetings", "Job loss for work that cannot go online"], ["Health", "Telemedicine and health information", "Misinformation and privacy concerns"], ["Social life", "Communication despite distance", "Isolation, screen fatigue, anxiety"]] },
        { type: "note", content: "Responsible digital citizenship includes checking sources, respecting others, protecting privacy, and avoiding panic-sharing unverified posts." },
      ],
      quiz: [
        { question: "Digital divide means:", options: ["Unequal access to digital tools, internet, and skills", "A faster computer processor", "A type of gene therapy", "A fitness program"], answer: 0, explanation: "Digital divide refers to inequality in digital access and ability." },
        { question: "Responsible information behavior during a crisis includes:", options: ["Verifying sources before sharing", "Forwarding every rumor", "Sharing private patient data", "Ignoring official advisories"], answer: 0, explanation: "Verification reduces misinformation and panic." },
      ],
    },
  },
  {
    id: "ge7-mid-m7-l4",
    title: "Module 7 Lesson 4: Social Impact of Technology",
    content: {
      heading: "The Social Impact of Technology",
      term: "MIDTERM",
      module: "Module 7: The Information Age",
      objectives: ["Identify positive and negative social effects of technology", "Explain ethical concerns in technology use", "Apply balanced judgment to technological change"],
      sections: [
        { type: "table", content: "Social Impact of Technology", headers: ["Positive Effects", "Negative Effects"], rows: [["Access to education and information", "Misinformation and information overload"], ["Faster communication and collaboration", "Cyberbullying and harassment"], ["New jobs and digital entrepreneurship", "Automation and job displacement"], ["Improved healthcare and research", "Privacy loss and surveillance"], ["Disaster alerts and public service delivery", "Digital divide and unequal benefits"]] },
        { type: "list", content: "Major ethical questions:", items: ["Who owns and profits from personal data?", "How do algorithms influence what people believe?", "Can technology be inclusive for poor, rural, elderly, and disabled users?", "How do we balance innovation with human rights and safety?"] },
        { type: "example", content: "Example: Social media can help organize donation drives after a typhoon, but the same platform can spread fake donation links. The technology is powerful; responsible use determines whether it helps or harms." },
      ],
      quiz: [
        { question: "Which pair shows balanced understanding of technology?", options: ["It can educate and connect, but can also spread misinformation and harm privacy", "It is always good", "It is always bad", "It has no social impact"], answer: 0, explanation: "Technology has both benefits and risks depending on design, access, and use." },
        { question: "An ethical concern in technology is:", options: ["Privacy and data ownership", "Only screen brightness", "Only font size", "No human issue"], answer: 0, explanation: "Data privacy and ownership are major ethical concerns in digital society." },
      ],
    },
  },
  {
    id: "ge7-mid-m8-l1",
    title: "Module 8 Lessons 1–6: Genes, Therapy, Heredity, Environment, and GMO",
    content: {
      heading: "Genes, Gene Therapy, Heredity, Environment, and GMO",
      term: "MIDTERM",
      module: "Module 8: Gene",
      objectives: ["Define gene and heredity", "Compare gene therapy and stem cell therapy", "Explain GMOs and their possible benefits and risks"],
      sections: [
        { type: "definition", content: "Gene — a segment of DNA that carries instructions for producing functional products, commonly proteins, that influence traits and biological processes." },
        { type: "definition", content: "Heredity — the passing of traits from parents to offspring through genes." },
        { type: "table", content: "Gene Therapy vs. Stem Cell Therapy", headers: ["Feature", "Gene Therapy", "Stem Cell Therapy"], rows: [["Main focus", "Correcting or replacing faulty genetic instructions", "Using cells that can develop into specialized cells or repair tissues"], ["Target", "Genes/DNA", "Cells/tissues"], ["Potential use", "Inherited disorders, some cancers, immune diseases", "Tissue repair, blood disorders, degenerative conditions"], ["Concern", "Safety, delivery, long-term effects, ethics", "Tumor risk, rejection, ethics, regulation"]] },
        { type: "h2", content: "Genes and Environment" },
        { type: "text", content: "Genes influence traits, but environment also matters. Nutrition, pollution, stress, physical activity, education, and healthcare can affect how genetic potentials are expressed." },
        { type: "definition", content: "Genetically Modified Organism (GMO) — an organism whose genetic material has been altered using biotechnology to introduce desired traits such as pest resistance, improved nutrition, or longer shelf life." },
        { type: "table", content: "GMO Benefits and Concerns", headers: ["Possible Benefits", "Possible Concerns"], rows: [["Higher crop yield", "Environmental effects on biodiversity"], ["Pest/disease resistance", "Gene flow to wild relatives"], ["Improved nutrition", "Health and labeling concerns"], ["Reduced pesticide use in some cases", "Corporate control of seeds and farmer dependence"]] },
      ],
      quiz: [
        { question: "A gene is made of:", options: ["DNA", "Electricity only", "Plastic only", "Internet cables"], answer: 0, explanation: "Genes are DNA segments that carry hereditary information." },
        { question: "Gene therapy mainly aims to:", options: ["Correct or replace faulty genetic instructions", "Increase typhoon speed", "Set up routers", "Design shoes"], answer: 0, explanation: "Gene therapy targets the genetic cause of disease." },
        { question: "A GMO is:", options: ["An organism with altered genetic material through biotechnology", "A weather pattern", "A type of stretching", "A computer browser"], answer: 0, explanation: "GMOs are genetically modified organisms created through biotechnology." },
      ],
    },
  },
  {
    id: "ge7-mid-exam",
    title: "Midterm Comprehensive Exam",
    content: {
      heading: "GE7 Midterm Comprehensive Exam",
      term: "MIDTERM",
      module: "Final Content: Midterm Exam",
      objectives: ["Test mastery of Modules 5–8", "Apply concepts to Philippine and student-life situations", "Review explanations for weak areas"],
      sections: makeExamSections("GE7", ["Module 5: Environmentalism, climate change, climate justice, Filipino vulnerability", "Module 6: Energy crisis, causes, solutions", "Module 7: Information Age, pandemic technologies, digital divide, social impact", "Module 8: Genes, heredity, gene therapy, stem cell therapy, GMOs"]),
      quiz: ge7Exam50,
    },
  },
];

const MST02_MIDTERM_TOPICS: Topic[] = [
  {
    id: "mst02-mid-m5-l1",
    title: "Module 5 Lesson 1: Definition of Network Terms",
    content: {
      heading: "Definition of Network Terms",
      term: "MIDTERM",
      module: "Module 5: Networks and Types",
      objectives: ["Define computer network", "Explain why networks are important", "Identify basic network uses"],
      sections: [
        { type: "definition", content: "Network — a collection of computers, servers, devices, peripherals, or nodes connected so they can share data, resources, services, and communication." },
        { type: "text", content: "Early computer networks connected physical workstations through cables such as Ethernet. Users could share drives, files, printers, and applications. Today, networks may connect a few devices in one room or millions of devices across the world." },
        { type: "list", content: "Networks are used for:", items: ["Communication such as email, chat, video calls, and messaging", "Shared hardware such as printers, scanners, and storage devices", "Shared data and files", "Shared software and cloud applications", "Gaming, collaboration, online classes, e-commerce, and remote work"] },
        { type: "table", content: "Common Network Elements", headers: ["Term", "Meaning"], rows: [["Node", "Any device connected to a network"], ["Server", "Provides services or resources to other devices"], ["Client", "Requests services from a server"], ["Transmission media", "Wired or wireless path used to carry data"], ["Topology", "Arrangement or structure of connected devices"]] },
      ],
      quiz: [
        { question: "A computer network requires at least:", options: ["Two connected devices", "One isolated calculator", "No communication", "A printed document only"], answer: 0, explanation: "At least two devices must be connected for communication or resource sharing." },
        { question: "Which is a network use?", options: ["Sharing a printer", "Removing all communication", "Stopping data exchange", "Destroying files"], answer: 0, explanation: "Networks allow users to share printers, files, applications, and communication services." },
      ],
    },
  },
  {
    id: "mst02-mid-m5-l2",
    title: "Module 5 Lesson 2: LAN, MAN, WAN, and VPN",
    content: {
      heading: "Types of Networks: LAN, MAN, WAN, VPN",
      term: "MIDTERM",
      module: "Module 5: Networks and Types",
      objectives: ["Differentiate LAN, MAN, WAN, and VPN", "Identify examples of each network type", "Select the right network type for a scenario"],
      sections: [
        { type: "table", content: "Network Types", headers: ["Type", "Full Name", "Coverage", "Example"], rows: [["LAN", "Local Area Network", "Small area such as home, school laboratory, office, or building", "Computers and printer inside a computer lab"], ["MAN", "Metropolitan Area Network", "City or large campus", "Network connecting city government offices"], ["WAN", "Wide Area Network", "Large geographic area, country, or global", "Bank branches across regions; internet"], ["VPN", "Virtual Private Network", "Secure private tunnel over public networks", "Student or employee securely accessing school/company systems remotely"]] },
        { type: "note", content: "Network type can be based on size, purpose, privacy, ownership, and geographic coverage." },
        { type: "example", content: "If Laguna University connects computers inside one laboratory, it is a LAN. If multiple campuses in different cities connect through leased lines, it may become a WAN. If a user securely connects from home to campus resources, that secure connection can use a VPN." },
      ],
      quiz: [
        { question: "Which network covers the smallest area?", options: ["LAN", "WAN", "Global internet", "Intercontinental network"], answer: 0, explanation: "LAN covers a limited local area." },
        { question: "A VPN is mainly used to:", options: ["Create a secure private connection", "Make a monitor brighter", "Replace a mouse", "Remove all passwords"], answer: 0, explanation: "VPNs secure communication through an encrypted tunnel." },
      ],
    },
  },
  {
    id: "mst02-mid-m5-l3",
    title: "Module 5 Lesson 3: Components of a Network",
    content: {
      heading: "Components of a Network",
      term: "MIDTERM",
      module: "Module 5: Networks and Types",
      objectives: ["Identify network components", "Describe the role of NIC, hub, switch, router, modem, and cables", "Explain how devices work together"],
      sections: [
        { type: "table", content: "Network Components", headers: ["Component", "Function"], rows: [["Network Interface Card (NIC)", "Allows a computer/device to connect to a network"], ["Hub", "Broadcasts data to all connected devices; older and less efficient"], ["Switch", "Connects devices in a LAN and sends data only to intended device/port"], ["Router", "Connects different networks and directs packets"], ["Modem", "Connects local network to ISP by converting signals"], ["Cables/connectors", "Physical media such as Ethernet cables and connectors"], ["Wireless access point", "Allows wireless devices to connect to a wired network"]] },
        { type: "h3", content: "Hub vs. Switch vs. Router" },
        { type: "text", content: "A hub is basic and sends traffic to all ports. A switch is smarter and forwards data to the correct destination in the local network. A router connects one network to another, such as a home LAN to the internet." },
      ],
      quiz: [
        { question: "Which device connects different networks?", options: ["Router", "Keyboard", "Monitor", "Headphones"], answer: 0, explanation: "Routers connect different networks and route packets." },
        { question: "A switch is better than a hub because it:", options: ["Forwards data more intelligently to the intended port", "Has no network function", "Only displays videos", "Deletes protocols"], answer: 0, explanation: "Switches reduce unnecessary traffic compared with hubs." },
      ],
    },
  },
  {
    id: "mst02-mid-m5-l4",
    title: "Module 5 Lesson 4: E-Commerce",
    content: {
      heading: "E-Commerce",
      term: "MIDTERM",
      module: "Module 5: Networks and Types",
      objectives: ["Define e-commerce", "List advantages and disadvantages", "Practice safe online transactions"],
      sections: [
        { type: "definition", content: "E-commerce — buying, selling, marketing, payment, banking, booking, or other commercial transactions conducted through electronic networks, especially the internet." },
        { type: "table", content: "Advantages and Disadvantages", headers: ["Advantages", "Disadvantages/Risks"], rows: [["24/7 availability", "Scams and fraudulent sellers"], ["Wider market reach", "Privacy and data security risks"], ["Convenient product comparison", "Delivery delays or damaged items"], ["Lower operating cost for some sellers", "Cannot physically inspect product before purchase"], ["Digital payment and tracking", "Dependence on internet and platforms"]] },
        { type: "list", content: "Safe e-commerce practices:", items: ["Use trusted platforms and sellers", "Check reviews and return policies", "Use secure payment methods", "Avoid sharing unnecessary personal data", "Beware of deals that are too good to be true", "Check that websites use HTTPS"] },
      ],
      quiz: [
        { question: "E-commerce requires:", options: ["Electronic networks for transactions", "Only face-to-face bargaining", "No internet ever", "No payment system"], answer: 0, explanation: "E-commerce uses electronic networks for commercial activities." },
        { question: "Which is a safe e-commerce practice?", options: ["Use trusted platforms and secure payment", "Send passwords to sellers", "Ignore reviews", "Click every random link"], answer: 0, explanation: "Trusted platforms and secure payment reduce fraud risk." },
      ],
    },
  },
  {
    id: "mst02-mid-m5-l5",
    title: "Module 5 Lessons 5–7: Internet, IPs, Protocols, Browsers, URL, and ISPs",
    content: {
      heading: "Internet, IPs, Protocols, Browsers, URL, and ISPs",
      term: "MIDTERM",
      module: "Module 5: Networks and Types",
      objectives: ["Explain internet and internetworking", "Define IP address, protocol, browser, URL, and ISP", "Understand how web access works"],
      sections: [
        { type: "definition", content: "Internet — the global network of interconnected networks that use standard protocols to exchange data." },
        { type: "table", content: "Internet Terms", headers: ["Term", "Meaning"], rows: [["IP address", "Numerical address used to identify a device on a network"], ["Protocol", "Rules for data communication"], ["Browser", "Application used to access and view web pages"], ["URL", "Address of a web resource"], ["ISP", "Company or organization that provides internet access"], ["HTTP/HTTPS", "Protocol for web communication; HTTPS is secured with encryption"], ["DNS", "Translates domain names into IP addresses"]] },
        { type: "example", content: "When you type a URL, DNS finds the matching IP address, your browser requests the page using HTTP/HTTPS, packets travel through networks, and the web server sends data back for the browser to display." },
      ],
      quiz: [
        { question: "A URL is:", options: ["A web address", "A power cable", "A physical router", "A type of muscle"], answer: 0, explanation: "URL means Uniform Resource Locator, the address of a web resource." },
        { question: "An ISP provides:", options: ["Internet access", "Only sports equipment", "Only gene therapy", "Only climate reports"], answer: 0, explanation: "Internet Service Providers connect users to the internet." },
        { question: "HTTPS is preferred because it:", options: ["Encrypts web communication", "Removes all websites", "Means no protocol", "Blocks all learning"], answer: 0, explanation: "HTTPS secures data between browser and website." },
      ],
    },
  },
  {
    id: "mst02-mid-m5-l8",
    title: "Module 5 Lessons 8–9: Netiquette, Issues, and Problems",
    content: {
      heading: "Ethics, Netiquette, Issues, and Problems",
      term: "MIDTERM",
      module: "Module 5: Networks and Types",
      objectives: ["Define netiquette", "Identify internet issues and problems", "Apply responsible online behavior"],
      sections: [
        { type: "definition", content: "Netiquette — proper, ethical, respectful, and responsible behavior when communicating or participating online." },
        { type: "list", content: "Netiquette guidelines:", items: ["Think before posting or sharing", "Respect privacy and consent", "Avoid cyberbullying, insults, and harassment", "Use clear language and avoid all-caps shouting", "Credit sources and avoid plagiarism", "Verify information before reposting"] },
        { type: "table", content: "Internet Issues", headers: ["Issue", "Why It Matters"], rows: [["Misinformation", "False content can influence health, politics, and safety decisions"], ["Cyberbullying", "Can harm mental health and reputation"], ["Privacy loss", "Personal data can be misused"], ["Malware/phishing", "Can steal data or damage systems"], ["Addiction/screen fatigue", "Affects sleep, study habits, and relationships"], ["Digital divide", "Unequal access limits learning and opportunity"]] },
      ],
      quiz: [
        { question: "Netiquette is:", options: ["Respectful and responsible online behavior", "A computer virus", "A modem type", "A lower body exercise"], answer: 0, explanation: "Netiquette means proper etiquette in online communication." },
        { question: "Which is an internet problem?", options: ["Phishing", "Correct citation", "Respecting privacy", "Checking sources"], answer: 0, explanation: "Phishing tricks users into revealing sensitive data." },
      ],
    },
  },
  {
    id: "mst02-mid-m6",
    title: "Module 6: Data Security, Data Privacy, and Protection",
    content: {
      heading: "Data Security, Data Privacy, and Protection",
      term: "MIDTERM",
      module: "Module 6: Data Security, Data Privacy and Protection",
      objectives: ["Define computer/data security", "Explain data privacy and the Data Privacy Act", "Recognize examples, issues, and concerns"],
      sections: [
        { type: "definition", content: "Computer and data security — practices that protect systems and data from unauthorized access, damage, theft, disruption, or misuse." },
        { type: "definition", content: "Data privacy — proper handling of personal information, including lawful collection, informed consent, limited use, secure storage, and respect for data subject rights." },
        { type: "table", content: "Security vs. Privacy", headers: ["Security", "Privacy"], rows: [["Protects data from threats", "Controls how personal data is collected and used"], ["Uses passwords, encryption, backups, access control", "Uses consent, transparency, purpose limitation, data rights"], ["Question: Is data safe?", "Question: Is data used properly and fairly?"]] },
        { type: "h2", content: "Data Privacy Act" },
        { type: "text", content: "The Philippine Data Privacy Act of 2012 (RA 10173) protects personal information in government and private sectors. It promotes transparency, legitimate purpose, proportionality, and the rights of data subjects." },
        { type: "list", content: "Common issues and concerns:", items: ["Weak passwords and account sharing", "Oversharing personal information online", "Unauthorized collection of student or customer data", "Identity theft", "Data breaches", "Improper use of photos, messages, and records"] },
      ],
      quiz: [
        { question: "RA 10173 is the:", options: ["Data Privacy Act", "Cybercrime Prevention Act", "Clean Air Act", "NSTP Law"], answer: 0, explanation: "RA 10173 is the Data Privacy Act of 2012." },
        { question: "Data security asks mainly:", options: ["Is the data protected from unauthorized access or damage?", "Is a squat lower body exercise?", "Is climate daily weather?", "Is hydration optional?"], answer: 0, explanation: "Security focuses on protecting systems and data." },
        { question: "A privacy-respecting practice is:", options: ["Collect only necessary data for a clear purpose", "Post private records publicly", "Share passwords", "Ignore consent"], answer: 0, explanation: "Privacy requires lawful, fair, transparent, limited, and purposeful data handling." },
      ],
    },
  },
  {
    id: "mst02-mid-m7",
    title: "Module 7: Political, Economic, and Societal Impacts of ICT",
    content: {
      heading: "Political, Economic, and Societal Impacts of ICT",
      term: "MIDTERM",
      module: "Module 7: Political, Economic and Societal Impacts and Change",
      objectives: ["Explain economic impacts of ICT", "Explain political impacts of ICT", "Explain social impacts and changes caused by ICT"],
      sections: [
        { type: "table", content: "ICT Impacts", headers: ["Area", "Positive Impact", "Risk/Challenge"], rows: [["Economic", "E-commerce, IT jobs, remote work, productivity, digital entrepreneurship", "Job displacement, platform dependence, unequal opportunity"], ["Political", "E-governance, online participation, faster public information", "Disinformation, manipulation, surveillance, cyberattacks"], ["Social", "Communication, online learning, communities, access to knowledge", "Cyberbullying, addiction, privacy issues, digital divide"]] },
        { type: "h3", content: "Economic Change" },
        { type: "text", content: "ICT creates new industries and ways of working, including online selling, freelancing, IT-BPO, digital marketing, and automation. It can increase productivity but may also reduce demand for some traditional jobs." },
        { type: "h3", content: "Political Change" },
        { type: "text", content: "ICT helps citizens receive information, report issues, join discussions, and participate in campaigns. However, politics online can be affected by fake news, trolls, bot networks, and privacy violations." },
        { type: "h3", content: "Social Change" },
        { type: "text", content: "ICT changes relationships, education, entertainment, language, culture, and identity. It can connect families and learners, but it can also increase isolation, comparison, and screen fatigue." },
      ],
      quiz: [
        { question: "Which is an economic impact of ICT?", options: ["Growth of e-commerce and digital jobs", "No change in business", "No online market", "Ending communication"], answer: 0, explanation: "ICT supports e-commerce, digital services, remote work, and IT industries." },
        { question: "Which is a political risk of ICT?", options: ["Disinformation and manipulation", "Transparent public information", "Online government services", "Citizen reporting"], answer: 0, explanation: "ICT can be misused to spread false information or manipulate public opinion." },
        { question: "Which is a social effect of ICT?", options: ["Changed communication and learning", "No effect on relationships", "Only affects volcanoes", "Only affects genes"], answer: 0, explanation: "ICT changes how people learn, work, communicate, and build relationships." },
      ],
    },
  },
  {
    id: "mst02-mid-exam",
    title: "Midterm Comprehensive Exam",
    content: {
      heading: "MST02 Midterm Comprehensive Exam",
      term: "MIDTERM",
      module: "Final Content: Midterm Exam",
      objectives: ["Test mastery of Modules 5–7", "Apply networking, data privacy, and ICT impact concepts", "Use explanations to guide final review"],
      sections: makeExamSections("MST02", ["Module 5: Network definitions, LAN/MAN/WAN/VPN, components, e-commerce, internet terms, ISP, netiquette, issues", "Module 6: Data security, data privacy, Data Privacy Act, cases and concerns", "Module 7: Economic, political, and societal impacts of ICT"]),
      quiz: mst02Exam50,
    },
  },
];

const PE2_MIDTERM_TOPICS: Topic[] = [
  {
    id: "pe2-mid-m4",
    title: "Module 4: Health Appraisal, Safety Tips, and Protocols",
    content: {
      heading: "Health Appraisal, Safety Tips, and Protocols",
      term: "MIDTERM",
      module: "Module 4: Health Appraisal",
      objectives: ["Identify types of injury and coping methods", "Explain the importance of health appraisal before, during, and after activity", "Apply course safety guidelines and health protocols"],
      sections: [
        { type: "definition", content: "Health appraisal — a systematic process of evaluating an individual's health status, lifestyle, risk factors, and readiness for physical activity." },
        { type: "h2", content: "Pre-Exercise Precautions" },
        { type: "list", content: "Before exercise:", items: ["Complete health screening or seek medical clearance if you have health conditions", "Assess personal risks such as recent injury, illness, medication, or low fitness level", "Consult professionals when unsure, especially beginners or students with specific concerns"] },
        { type: "h2", content: "Safety Variables" },
        { type: "list", content: "Safety depends on:", items: ["Current health status and fitness level", "Proper warm-up and cool-down", "Correct form and technique", "Safe equipment and environment", "Appropriate intensity and gradual progression"] },
        { type: "h2", content: "Proper Clothing and Hydration" },
        { type: "table", content: "Exercise Preparation", headers: ["Area", "Guidelines"], rows: [["Clothing", "Moisture-wicking, breathable, properly fitted, activity-appropriate"], ["Footwear", "Shoes designed for the activity with support and cushioning"], ["Visibility", "Reflective clothing/accessories in low-light conditions"], ["Before activity", "Drink water throughout the day; about 16–20 oz 2–3 hours before exercise"], ["During activity", "Drink regularly, especially beyond 60 minutes"], ["After activity", "Replace fluids and monitor thirst/urine color"]] },
        { type: "h2", content: "Blisters and Muscle Soreness" },
        { type: "table", content: "Common Issues", headers: ["Issue", "Cause", "Prevention/Care"], rows: [["Blister", "Friction, moisture, pressure, ill-fitting shoes", "Proper footwear/socks, protective gear, breaks, cleanliness, do not pop unnecessarily"], ["Muscle soreness", "New or intense activity; micro-tears and inflammation", "Warm-up, cool-down, gradual progression, hydration, rest, proper technique"]] },
      ],
      quiz: [
        { question: "Health appraisal helps identify:", options: ["Health risks and readiness for activity", "Only shoe color", "Internet speed", "Network type"], answer: 0, explanation: "Health appraisal assesses status and risk to guide safe physical activity." },
        { question: "Proper exercise clothing should be:", options: ["Breathable, moisture-wicking, and well-fitted", "Always restrictive", "Unsafe and damaged", "Unrelated to activity"], answer: 0, explanation: "Good clothing supports movement, comfort, temperature control, and safety." },
        { question: "A common cause of blisters is:", options: ["Friction from ill-fitting footwear", "Correct hydration", "Proper warm-up", "Good socks"], answer: 0, explanation: "Friction and pressure commonly cause blisters." },
      ],
    },
  },
  {
    id: "pe2-mid-m5-l1",
    title: "Module 5 Lesson 1: Dynamic Stretching",
    content: {
      heading: "Dynamic Stretching",
      term: "MIDTERM",
      module: "Module 5: High Intensity Interval Training (HIIT)",
      objectives: ["Define dynamic stretching", "Explain why it is used before activity", "Perform safe dynamic warm-up movements"],
      sections: [
        { type: "definition", content: "Dynamic stretching — controlled, active movement through a joint's range of motion, usually used before exercise to prepare muscles and joints." },
        { type: "text", content: "Dynamic stretching increases blood flow, activates muscles, raises body temperature, and prepares the nervous system for activity. It is different from static stretching, where a position is held for several seconds." },
        { type: "table", content: "Dynamic Stretch Examples", headers: ["Movement", "Target Area", "Purpose"], rows: [["Arm circles", "Shoulders", "Prepare upper body movement"], ["Leg swings", "Hips/hamstrings", "Improve hip mobility"], ["High knees", "Hip flexors/cardio", "Raise heart rate"], ["Butt kicks", "Quadriceps/hamstrings", "Prepare running mechanics"], ["Walking lunges", "Hips/quads/glutes", "Prepare lower body"], ["Torso rotations", "Core/spine", "Prepare twisting motion"]] },
        { type: "note", content: "Dynamic movements should be controlled, not forced. Pain is a warning sign, not a goal." },
      ],
      quiz: [
        { question: "Dynamic stretching is best used:", options: ["Before exercise", "Only while sleeping", "To replace all workouts", "As a network device"], answer: 0, explanation: "Dynamic stretching is ideal for warm-up before activity." },
        { question: "Which is a dynamic stretch?", options: ["Leg swings", "Holding a toe touch for 60 seconds", "Sitting completely still", "Typing an essay"], answer: 0, explanation: "Leg swings involve controlled movement through range of motion." },
      ],
    },
  },
  {
    id: "pe2-mid-m5-l2",
    title: "Module 5 Lesson 2: Proper Execution of Exercises",
    content: {
      heading: "Proper Execution of Exercises",
      term: "MIDTERM",
      module: "Module 5: High Intensity Interval Training (HIIT)",
      objectives: ["Explain the importance of proper form", "Identify common exercise execution cues", "Reduce risk of injury during workouts"],
      sections: [
        { type: "text", content: "Proper execution means performing exercises with correct alignment, control, breathing, and range of motion. It protects joints and muscles while making the exercise more effective." },
        { type: "table", content: "Execution Cues", headers: ["Exercise/Movement", "Safe Cue"], rows: [["Squat", "Feet stable, knees track with toes, chest lifted, hips move back"], ["Lunge", "Front knee aligned, torso upright, controlled lowering"], ["Push-up", "Body straight, hands under shoulders, controlled descent"], ["Plank", "Neutral spine, brace core, avoid sagging hips"], ["Jumping jack", "Land softly, keep rhythm, maintain breathing"], ["Mountain climber", "Hands stable, core tight, controlled knee drive"]] },
        { type: "list", content: "General rules:", items: ["Start with easier variations before advanced ones", "Prioritize quality over speed", "Breathe continuously; do not hold breath unnecessarily", "Stop if sharp pain or dizziness occurs", "Use rest intervals correctly"] },
      ],
      quiz: [
        { question: "Proper exercise form helps:", options: ["Reduce injury risk and improve effectiveness", "Make injury certain", "Remove need for hydration", "Replace sleep"], answer: 0, explanation: "Correct technique protects the body and trains the intended muscles." },
        { question: "During squats, knees should generally:", options: ["Track with toes", "Collapse inward sharply", "Twist randomly", "Remain ignored"], answer: 0, explanation: "Knee tracking supports safe lower body alignment." },
      ],
    },
  },
  {
    id: "pe2-mid-m5-l3",
    title: "Module 5 Lesson 3: Workout vs. Work Interval",
    content: {
      heading: "Workout vs. Work Interval",
      term: "MIDTERM",
      module: "Module 5: High Intensity Interval Training (HIIT)",
      objectives: ["Define HIIT", "Differentiate workout, work interval, and recovery interval", "Understand safe HIIT structure"],
      sections: [
        { type: "definition", content: "HIIT (High Intensity Interval Training) — a training method alternating short periods of intense effort with recovery or lower-intensity periods." },
        { type: "table", content: "HIIT Terms", headers: ["Term", "Meaning"], rows: [["Workout", "The complete exercise session from warm-up to cool-down"], ["Work interval", "The active high-intensity exercise segment"], ["Recovery/rest interval", "Lower-intensity or rest period between work intervals"], ["Round/set", "One cycle of work plus rest"], ["Intensity", "How hard the body works during exercise"]] },
        { type: "example", content: "Sample beginner HIIT: Warm-up 5 minutes; 20 seconds jumping jacks + 40 seconds rest; repeat 8 rounds; cool down 5 minutes. The whole session is the workout; each 20-second activity is a work interval." },
        { type: "note", content: "HIIT is effective but demanding. Beginners should use shorter work intervals, longer recovery, and low-impact variations." },
      ],
      quiz: [
        { question: "In HIIT, the work interval is:", options: ["The intense active exercise period", "The entire semester", "Only cool-down", "Only drinking water"], answer: 0, explanation: "Work interval is the high-effort part of an interval cycle." },
        { question: "A complete session from warm-up to cool-down is the:", options: ["Workout", "Only one repetition", "Only rest interval", "Only a blister"], answer: 0, explanation: "Workout refers to the whole training session." },
      ],
    },
  },
  {
    id: "pe2-mid-m5-l4",
    title: "Module 5 Lesson 4: Personal Fitness Program",
    content: {
      heading: "Personal Fitness Program",
      term: "MIDTERM",
      module: "Module 5: High Intensity Interval Training (HIIT)",
      objectives: ["Design a personal fitness program", "Apply FITT and SMART principles", "Balance safety, progression, and recovery"],
      sections: [
        { type: "definition", content: "Personal fitness program — an individualized plan that uses exercise principles to improve health or fitness based on goals, current status, available time, and safety needs." },
        { type: "table", content: "FITT Principle", headers: ["Variable", "Question", "Example"], rows: [["Frequency", "How often?", "3–5 days/week"], ["Intensity", "How hard?", "Moderate to vigorous, based on fitness level"], ["Time", "How long?", "20–60 minutes"], ["Type", "What activity?", "HIIT, walking, resistance, flexibility, core"]] },
        { type: "list", content: "Program design steps:", items: ["Assess current fitness and health readiness", "Set SMART goals: specific, measurable, attainable, relevant, time-bound", "Choose appropriate activities", "Start with manageable intensity", "Progress gradually", "Include warm-up, cool-down, and rest days", "Monitor results and adjust"] },
      ],
      quiz: [
        { question: "FITT stands for:", options: ["Frequency, Intensity, Time, Type", "Fast Internet Training Tool", "Fitness Is Totally Tiring", "Food Intake Training Type"], answer: 0, explanation: "FITT is used to plan exercise variables." },
        { question: "A SMART goal should be:", options: ["Specific and measurable", "Vague and impossible", "Unsafe", "Unrelated to fitness"], answer: 0, explanation: "SMART goals are specific, measurable, attainable, relevant, and time-bound." },
      ],
    },
  },
  {
    id: "pe2-mid-m6-l1",
    title: "Module 6 Lesson 1: Core Exercises",
    content: {
      heading: "Core Exercises",
      term: "MIDTERM",
      module: "Module 6: Core Exercises and Lower Body Exercises",
      objectives: ["Identify core muscles", "Explain the role of core stability", "Perform common core exercises safely"],
      sections: [
        { type: "definition", content: "Core — muscles around the trunk and pelvis that stabilize the spine, support posture, transfer force, and assist balance." },
        { type: "table", content: "Common Core Exercises", headers: ["Exercise", "Main Focus", "Safety Cue"], rows: [["Plank", "Anti-extension core stability", "Keep neutral spine; avoid sagging hips"], ["Side plank", "Obliques and lateral stability", "Stack shoulders and hips"], ["Crunch", "Abdominal flexion", "Do not pull neck"], ["Bird dog", "Spinal stability and coordination", "Move slowly; keep hips level"], ["Dead bug", "Core control", "Lower limbs only as far as control allows"], ["Mountain climber", "Core plus cardio", "Hands stable; avoid bouncing hips"]] },
        { type: "note", content: "Core training is not only for appearance. It supports posture, safe lifting, athletic movement, and injury prevention." },
      ],
      quiz: [
        { question: "The core mainly supports:", options: ["Stability, posture, and force transfer", "Only internet access", "Only hearing", "Only shoe size"], answer: 0, explanation: "Core muscles stabilize the trunk and pelvis." },
        { question: "Which is a core exercise?", options: ["Plank", "Router setup", "Online shopping", "Cable crimping"], answer: 0, explanation: "Plank trains core stability." },
      ],
    },
  },
  {
    id: "pe2-mid-m6-l2",
    title: "Module 6 Lesson 2: Lower Body Exercises",
    content: {
      heading: "Lower Body Exercises",
      term: "MIDTERM",
      module: "Module 6: Core Exercises and Lower Body Exercises",
      objectives: ["Identify lower body muscle groups", "Perform lower body exercises safely", "Explain benefits of lower body strength"],
      sections: [
        { type: "table", content: "Lower Body Muscles and Exercises", headers: ["Muscle Group", "Role", "Exercise Examples"], rows: [["Quadriceps", "Knee extension; standing from squat", "Squats, lunges, step-ups"], ["Hamstrings", "Hip extension and knee flexion", "Glute bridge, Romanian deadlift pattern"], ["Glutes", "Hip extension and stability", "Squats, hip thrusts, lunges"], ["Calves", "Ankle movement and push-off", "Calf raises, jumping movements"], ["Hip abductors/adductors", "Pelvic and side-to-side stability", "Side steps, lateral lunges"]] },
        { type: "list", content: "Safety cues:", items: ["Warm up before lower body training", "Keep knees aligned with toes", "Land softly during jumps", "Control both lowering and lifting phases", "Use pain-free range of motion", "Progress gradually before adding intensity"] },
        { type: "example", content: "Beginner lower body circuit: 10 bodyweight squats, 8 lunges per side, 12 glute bridges, 15 calf raises, 30 seconds rest; repeat 2–3 rounds depending on fitness level." },
      ],
      quiz: [
        { question: "Which exercise primarily trains the lower body?", options: ["Squat", "Email", "Browser", "Keyboard shortcut"], answer: 0, explanation: "Squats train lower body muscles." },
        { question: "A key lower body safety cue is:", options: ["Keep knees aligned with toes", "Force knees inward", "Skip warm-up", "Use pain as goal"], answer: 0, explanation: "Knee alignment helps prevent injury." },
      ],
    },
  },
  {
    id: "pe2-mid-exam",
    title: "Midterm Comprehensive Exam",
    content: {
      heading: "PE2 Midterm Comprehensive Exam",
      term: "MIDTERM",
      module: "Final Content: Midterm Exam",
      objectives: ["Test mastery of Modules 4–6", "Apply safety, HIIT, core, and lower body concepts", "Review explanations before practical performance"],
      sections: makeExamSections("PE2", ["Module 4: Health appraisal, safety tips, clothing, hydration, blisters, muscle soreness", "Module 5: HIIT, dynamic stretching, proper execution, work interval vs workout, fitness program", "Module 6: Core exercises and lower body exercises"]),
      quiz: pe2Exam50,
    },
  },
];

export const MIDTERM_FOCUS_SUBJECTS: Subject[] = [
  {
    id: "ge7",
    code: "GE 7",
    title: "Science, Technology & Society",
    shortTitle: "GE 7",
    units: 3,
    description: "Focused midterm reviewer from the attached modules: Environmental Awareness, Energy Crisis, Information Age, and Gene. Includes detailed lessons, quizzes per subtopic, and a comprehensive exam at the end.",
    terms: [
      {
        id: "midterm",
        label: "MIDTERM",
        modules: [
          { id: "ge7-mid-m5", title: "Module 5: Environmental Awareness", topics: GE7_MIDTERM_TOPICS.slice(0, 4) },
          { id: "ge7-mid-m6", title: "Module 6: Energy Crisis", topics: GE7_MIDTERM_TOPICS.slice(4, 7) },
          { id: "ge7-mid-m7", title: "Module 7: The Information Age", topics: GE7_MIDTERM_TOPICS.slice(7, 11) },
          { id: "ge7-mid-m8", title: "Module 8: Gene", topics: GE7_MIDTERM_TOPICS.slice(11, 12) },
          { id: "ge7-mid-final-content", title: "Final Content: Midterm Comprehensive Exam", topics: GE7_MIDTERM_TOPICS.slice(12) },
        ],
      },
    ],
  },
  {
    id: "mst02",
    code: "MST 02",
    title: "Living in the IT Era",
    shortTitle: "MST 02",
    units: 3,
    description: "Focused midterm reviewer from the attached Living in the IT Era module: Networks and Types, Data Security/Data Privacy, and Political/Economic/Societal Impacts of ICT.",
    terms: [
      {
        id: "midterm",
        label: "MIDTERM",
        modules: [
          { id: "mst02-mid-m5", title: "Module 5: Networks and Types", topics: MST02_MIDTERM_TOPICS.slice(0, 6) },
          { id: "mst02-mid-m6", title: "Module 6: Data Security, Data Privacy and Protection", topics: MST02_MIDTERM_TOPICS.slice(6, 7) },
          { id: "mst02-mid-m7", title: "Module 7: Political, Economic and Societal Impacts and Change", topics: MST02_MIDTERM_TOPICS.slice(7, 8) },
          { id: "mst02-mid-final-content", title: "Final Content: Midterm Comprehensive Exam", topics: MST02_MIDTERM_TOPICS.slice(8) },
        ],
      },
    ],
  },
  {
    id: "pe2",
    code: "PE 2",
    title: "Exercise-based Fitness Activities",
    shortTitle: "PE 2",
    units: 2,
    description: "Focused midterm reviewer from the attached PATH-FIT 2 module: Health Appraisal, HIIT, Core Exercises, and Lower Body Exercises with quizzes and a final comprehensive exam.",
    terms: [
      {
        id: "midterm",
        label: "MIDTERM",
        modules: [
          { id: "pe2-mid-m4", title: "Module 4: Health Appraisal", topics: PE2_MIDTERM_TOPICS.slice(0, 1) },
          { id: "pe2-mid-m5", title: "Module 5: High Intensity Interval Training (HIIT)", topics: PE2_MIDTERM_TOPICS.slice(1, 5) },
          { id: "pe2-mid-m6", title: "Module 6: Core Exercises and Lower Body Exercises", topics: PE2_MIDTERM_TOPICS.slice(5, 7) },
          { id: "pe2-mid-final-content", title: "Final Content: Midterm Comprehensive Exam", topics: PE2_MIDTERM_TOPICS.slice(7) },
        ],
      },
    ],
  },
];

type ModuleObjectiveSupport = {
  sections: ContentSection[];
  quiz: QuizQuestion[];
};

const MODULE_OBJECTIVE_SUPPORT: Record<string, ModuleObjectiveSupport> = {
  "ge7-mid-m5-l1": {
    sections: [
      { type: "h2", content: "Exam Focus: Environmentalism" },
      { type: "list", content: "Must-know points from the module:", items: ["Environmentalism is an advocacy/social movement, not the same as environmental science", "Environmental awareness means recognizing that behavior and lifestyle affect the environment", "Environmental scientists produce evidence; environmentalists may use evidence for public action", "The module connects awareness with altruism because environmental harm affects other people"] },
      { type: "note", content: "For exam answers, focus on definitions and distinctions: environmentalism vs environmental science, environmentally aware behavior, and why awareness should lead to action." },
    ],
    quiz: [
      { question: "A person can be an environmentalist even without:", options: ["A formal environmental science degree", "Concern for nature", "Any action or advocacy", "Awareness of environmental issues"], answer: 0, explanation: "The module states environmentalism does not require formal scientific training." },
      { question: "Environmental science is useful to environmentalism because it:", options: ["Provides evidence for understanding and solving environmental problems", "Replaces all public action", "Ignores data", "Studies only politics"], answer: 0, explanation: "Environmental science provides research and evidence that can support environmental advocacy." },
      { question: "Which is the best example of environmental awareness?", options: ["Changing waste and consumption habits after recognizing their environmental impact", "Knowing pollution exists but doing nothing", "Throwing garbage into canals", "Believing individual actions never matter"], answer: 0, explanation: "Awareness includes recognizing impact and making better choices." },
    ],
  },
  "ge7-mid-m5-l2": {
    sections: [
      { type: "h2", content: "Exam Focus: Weather, Climate, and Climate Change" },
      { type: "list", content: "Must-know points from the module:", items: ["Weather changes hour to hour or day to day", "Climate is based on long-term weather patterns in a region, commonly around 30 years", "Natural climate influences include volcanoes, ocean currents, orbital changes, solar variation, and internal variability", "Current rapid climate change is strongly linked with human greenhouse gas emissions"] },
      { type: "table", content: "Common Exam Confusion", headers: ["If the question says...", "Think..."], rows: [["Rain today, hot afternoon, cloudy morning", "Weather"], ["Long-term pattern of rainy and dry seasons", "Climate"], ["CO2 from fossil fuels and deforestation", "Human-driven warming"], ["Volcano ash blocking sunlight temporarily", "Natural short-term cooling influence"]] },
    ],
    quiz: [
      { question: "A statement like 'It rained this afternoon' refers to:", options: ["Weather", "Climate", "Heredity", "Energy crisis"], answer: 0, explanation: "Short-term atmospheric condition is weather." },
      { question: "Which is NOT listed as a natural influence on climate?", options: ["Social media comments", "Ocean currents", "Volcanic eruptions", "Earth's orbital changes"], answer: 0, explanation: "Social media is not a natural climate driver." },
      { question: "Climate change becomes alarming when:", options: ["Changes are rapid and intensified by human activities", "Weather changes daily", "The word climate is used", "People study science"], answer: 0, explanation: "Natural changes can occur slowly, but present warming is rapid and human-amplified." },
    ],
  },
  "ge7-mid-m5-l3": {
    sections: [
      { type: "h2", content: "Exam Focus: Climate Justice" },
      { type: "list", content: "Objective-oriented points:", items: ["Explain why not all people experience climate change equally", "Connect poverty, location, livelihood, and access to resources with vulnerability", "Use the terms exposure, sensitivity, and adaptive capacity correctly", "Explain why fair climate action prioritizes those most at risk"] },
    ],
    quiz: [
      { question: "Which group usually has the lowest adaptive capacity?", options: ["Low-income communities with unsafe housing and few savings", "Families with insurance, savings, and safe housing", "Communities with strong infrastructure", "People with many relocation options"], answer: 0, explanation: "Lower income and fewer resources reduce capacity to prepare and recover." },
      { question: "Exposure in climate risk means:", options: ["Being located where hazards can affect you", "Having a strong password", "Knowing all network types", "Having flexible muscles"], answer: 0, explanation: "Exposure refers to being in places affected by hazards such as floods or storm surges." },
      { question: "Climate justice asks society to consider:", options: ["Fairness in responsibility, vulnerability, and protection", "Only daily temperature", "Only laboratory equipment", "Only private profit"], answer: 0, explanation: "Climate justice frames climate change as an issue of fairness and inequality." },
    ],
  },
  "ge7-mid-m5-l4": {
    sections: [
      { type: "h2", content: "Exam Focus: Filipino Context" },
      { type: "list", content: "When answering, connect climate change to Filipino realities:", items: ["Typhoons, floods, storm surges, sea-level rise, and heat affect communities", "Food, water, health, housing, education, and livelihood are connected to climate risk", "The Philippines' archipelagic geography increases exposure", "Practical responses include preparedness, conservation, waste management, and credible information use"] },
    ],
    quiz: [
      { question: "Which Philippine feature increases vulnerability to storm surges?", options: ["Many coastal and low-lying communities", "No coastline", "Permanent snow cover", "No typhoons"], answer: 0, explanation: "Coastal and low-lying communities face storm surge and sea-level rise risks." },
      { question: "Climate-related class suspensions show impact on:", options: ["Education", "Only genetics", "Only e-commerce", "Only stretching"], answer: 0, explanation: "Strong typhoons and floods interrupt schooling." },
      { question: "Which is a credible student response to climate risk?", options: ["Know evacuation plans and verify warnings", "Ignore official advisories", "Share panic posts without checking", "Block disaster information"], answer: 0, explanation: "Preparedness and credible information use are practical adaptation actions." },
    ],
  },
  "ge7-mid-m6-l1": {
    sections: [
      { type: "h2", content: "Exam Focus: Energy Crisis Definition" },
      { type: "list", content: "Remember these keywords:", items: ["Insufficient supply", "Unaffordable or unstable prices", "Unreliable electricity or fuel access", "Energy security means reliable, affordable, and sustainable energy access"] },
    ],
    quiz: [
      { question: "High electricity prices are part of energy crisis when they affect:", options: ["Affordability and access", "Only spelling", "Only climate vocabulary", "Only browser speed"], answer: 0, explanation: "Energy crisis includes price and access problems, not only physical shortage." },
      { question: "Energy security is important because modern society depends on energy for:", options: ["Homes, schools, hospitals, communication, transport, and industry", "Only entertainment", "Only genetics", "Only clothing color"], answer: 0, explanation: "Energy supports major services and economic activity." },
    ],
  },
  "ge7-mid-m6-l2": {
    sections: [
      { type: "h2", content: "Exam Focus: Causes of Energy Crisis" },
      { type: "list", content: "Module-aligned causes:", items: ["Overconsumption and growing demand", "Dependence on fossil fuels and imports", "Limited supply and depletion of non-renewable resources", "Poor infrastructure, conflict, disasters, and weak planning"] },
    ],
    quiz: [
      { question: "A non-renewable source can contribute to energy crisis because it is:", options: ["Limited and depletable", "Automatically unlimited", "Always free", "Not used by society"], answer: 0, explanation: "Non-renewable fuels can be depleted and affected by supply constraints." },
      { question: "Which situation can worsen energy supply problems?", options: ["Damaged power infrastructure after a disaster", "Efficient appliances", "Conservation", "Renewable diversification"], answer: 0, explanation: "Damaged infrastructure can cause brownouts and supply interruptions." },
    ],
  },
  "ge7-mid-m6-l3": {
    sections: [
      { type: "h2", content: "Exam Focus: Energy Solutions" },
      { type: "list", content: "Objective-oriented answer pattern:", items: ["Define the problem first: demand, supply, price, reliability, or pollution", "Match solution to problem: conservation, efficiency, renewables, grid improvement, public transport", "Explain both economic and environmental benefit", "Avoid one-solution answers; energy crisis usually needs combined strategies"] },
    ],
    quiz: [
      { question: "Which solution directly lowers wasted energy?", options: ["Energy efficiency", "Leaving appliances on", "Ignoring maintenance", "Using inefficient bulbs"], answer: 0, explanation: "Efficiency reduces waste while maintaining useful output." },
      { question: "Why are renewables part of energy-crisis solutions?", options: ["They reduce dependence on finite fossil fuels", "They increase oil imports", "They always cause shortage", "They eliminate the need for planning"], answer: 0, explanation: "Renewables diversify supply and reduce dependence on finite fuel sources." },
    ],
  },
  "ge7-mid-m7-l1": {
    sections: [
      { type: "h2", content: "Exam Focus: Information Age" },
      { type: "list", content: "Must-know development logic:", items: ["Society moved from manual/print information to electronic and digital systems", "Computers and networks made information faster to store, process, and share", "Information became a major resource in education, science, business, politics, and daily life"] },
    ],
    quiz: [
      { question: "The Information Age made information:", options: ["A central resource in society", "Completely useless", "Impossible to share", "Only available in libraries"], answer: 0, explanation: "Information became central to modern systems and decisions." },
      { question: "Which technology best represents the digital spread of information?", options: ["Internet", "Stone tools only", "Manual abacus only", "Handwritten scroll only"], answer: 0, explanation: "The internet allows rapid global information sharing." },
    ],
  },
  "ge7-mid-m7-l2": {
    sections: [
      { type: "h2", content: "Exam Focus: Pandemic Technology" },
      { type: "list", content: "Expect questions on:", items: ["Digital dashboards and data monitoring", "Contact tracing and privacy", "Telemedicine and remote service access", "Online research sharing and genomic surveillance", "Online learning and digital divide"] },
    ],
    quiz: [
      { question: "Telemedicine became useful during the pandemic because it:", options: ["Allowed health consultation while reducing exposure risk", "Stopped all healthcare", "Removed the need for doctors", "Was only entertainment"], answer: 0, explanation: "Telemedicine supported safer access to healthcare during restrictions." },
      { question: "Digital dashboards are valuable because they:", options: ["Summarize data for monitoring and decision-making", "Hide all public information", "Replace evidence", "Prevent analysis"], answer: 0, explanation: "Dashboards organize data such as cases, trends, and capacity." },
    ],
  },
  "ge7-mid-m7-l3": {
    sections: [
      { type: "h2", content: "Exam Focus: Life During Pandemic" },
      { type: "list", content: "Connect benefits and problems:", items: ["Benefits: continuity of classes, work, communication, services", "Problems: connectivity, devices, privacy, misinformation, screen fatigue", "The digital divide explains why technology does not help everyone equally"] },
    ],
    quiz: [
      { question: "Which is an example of digital divide during online classes?", options: ["A student cannot attend due to no reliable internet or device", "A student has a stable connection and laptop", "A teacher posts learning materials", "A class uses video meetings"], answer: 0, explanation: "Digital divide is unequal access to technology and connectivity." },
      { question: "Screen fatigue is a concern because it can affect:", options: ["Well-being, focus, and learning", "Only router names", "Only climate justice", "Only gene expression"], answer: 0, explanation: "Long screen exposure can affect physical and mental well-being." },
    ],
  },
  "ge7-mid-m7-l4": {
    sections: [
      { type: "h2", content: "Exam Focus: Social Impact of Technology" },
      { type: "list", content: "Use a balanced answer:", items: ["Technology can improve access, communication, research, and disaster response", "Technology can also cause misinformation, cybercrime, privacy loss, addiction, and inequality", "The exam may ask for both positive and negative impacts"] },
    ],
    quiz: [
      { question: "A balanced view of technology says it is:", options: ["Helpful or harmful depending on use, access, design, and ethics", "Always perfect", "Always useless", "Never social"], answer: 0, explanation: "Technology has mixed impacts that depend on context and responsibility." },
      { question: "Which issue is linked to social media algorithms?", options: ["Echo chambers or filter bubbles", "Muscle soreness", "Volcanic ash", "Lower body alignment"], answer: 0, explanation: "Algorithms can repeatedly show similar content, creating echo chambers." },
    ],
  },
  "ge7-mid-m8-l1": {
    sections: [
      { type: "h2", content: "Exam Focus: Gene Module" },
      { type: "list", content: "Must-know points:", items: ["Gene: DNA segment carrying hereditary instructions", "Heredity: passing traits from parents to offspring", "Gene therapy targets faulty genes; stem cell therapy uses cells for repair/regeneration", "Genes interact with environment; traits are not always genes alone", "GMOs have possible agricultural benefits and ethical/environmental concerns"] },
      { type: "table", content: "Common Exam Pairings", headers: ["Pair", "Difference"], rows: [["Gene therapy vs Stem cell therapy", "Gene therapy changes genetic instructions; stem cell therapy uses cells"], ["Gene vs Heredity", "Gene is unit/instruction; heredity is transmission of traits"], ["GMO benefit vs concern", "Higher yield/pest resistance vs biodiversity, labeling, and control issues"]] },
    ],
    quiz: [
      { question: "Heredity refers to:", options: ["Passing traits from parents to offspring", "Daily weather changes", "Router configuration", "Exercise hydration"], answer: 0, explanation: "Heredity is trait transmission through genetic information." },
      { question: "Which is the clearest stem cell therapy idea?", options: ["Using cells that can develop or repair tissues", "Changing a URL", "Reducing typhoons", "Increasing coal use"], answer: 0, explanation: "Stem cell therapy focuses on cells with regenerative or developmental potential." },
      { question: "A fair GMO answer should mention:", options: ["Both possible benefits and possible risks/concerns", "Only benefits always", "Only fear without evidence", "No relation to society"], answer: 0, explanation: "The module presents GMO as a science-society issue with benefits and concerns." },
    ],
  },
  "mst02-mid-m5-l1": {
    sections: [
      { type: "h2", content: "Exam Focus: Network Basics" },
      { type: "list", content: "Must-know points:", items: ["Network means two or more connected devices/nodes", "Networks share data, hardware, software, and communication services", "Early networks used physical workstations and cabling; modern networks can be wired, wireless, local, or global", "Topologies describe how devices are arranged"] },
    ],
    quiz: [
      { question: "Which is required for a network?", options: ["Connection and communication between at least two devices", "Only a single disconnected device", "No data exchange", "No hardware"], answer: 0, explanation: "A network requires connected devices that can communicate." },
      { question: "Which is shared through a network?", options: ["Printers, files, applications, and messages", "Only shoes", "Only exercise mats", "Only climate data"], answer: 0, explanation: "Networks support resource and information sharing." },
    ],
  },
  "mst02-mid-m5-l2": {
    sections: [
      { type: "h2", content: "Exam Focus: LAN, MAN, WAN, VPN" },
      { type: "list", content: "Memorize by coverage:", items: ["LAN: limited area like home, lab, office, building", "MAN: metropolitan/city coverage", "WAN: large geographic area; connects distant networks", "VPN: private encrypted connection over a public network"] },
    ],
    quiz: [
      { question: "A network connecting computers inside one laboratory is usually:", options: ["LAN", "WAN", "MAN", "VPN only"], answer: 0, explanation: "A laboratory network is a Local Area Network." },
      { question: "A network connecting branches across regions is usually:", options: ["WAN", "LAN only", "A single NIC", "A keyboard"], answer: 0, explanation: "WAN covers wide geographic areas." },
    ],
  },
  "mst02-mid-m5-l3": {
    sections: [
      { type: "h2", content: "Exam Focus: Network Devices" },
      { type: "list", content: "Device roles to memorize:", items: ["NIC connects a device to a network", "Hub broadcasts to all ports", "Switch forwards within a LAN more intelligently", "Router connects different networks", "Modem connects to ISP services", "Cables/connectors or wireless signals carry data"] },
    ],
    quiz: [
      { question: "The component that lets a computer connect to a network is:", options: ["NIC", "Speaker", "Chair", "Projector"], answer: 0, explanation: "NIC means Network Interface Card." },
      { question: "Compared with a hub, a switch is:", options: ["More efficient in forwarding local network traffic", "Only a display device", "Not used in networking", "Always slower by definition"], answer: 0, explanation: "Switches reduce unnecessary broadcasts." },
    ],
  },
  "mst02-mid-m5-l4": {
    sections: [
      { type: "h2", content: "Exam Focus: E-Commerce" },
      { type: "list", content: "Objective-oriented points:", items: ["Define e-commerce as online/electronic transaction activity", "Know advantages: convenience, wider reach, 24/7 access", "Know risks: fraud, privacy, delivery problems, inability to inspect items", "Connect safe practices with secure transactions"] },
    ],
    quiz: [
      { question: "Which is a risk specific to online transactions?", options: ["Fake sellers or phishing payment pages", "Ability to compare products", "24/7 browsing", "Wider reach"], answer: 0, explanation: "Fraud and phishing are major e-commerce risks." },
      { question: "A buyer protects themselves online by:", options: ["Checking seller credibility and using secure payment", "Sending passwords", "Ignoring suspicious URLs", "Sharing OTP codes"], answer: 0, explanation: "Credibility checks and secure payment reduce transaction risk." },
    ],
  },
  "mst02-mid-m5-l5": {
    sections: [
      { type: "h2", content: "Exam Focus: Internet Terms" },
      { type: "list", content: "Do not mix these up:", items: ["Internet: global network infrastructure", "Browser: software for viewing web pages", "URL: address of a web resource", "IP address: numeric network identifier", "Protocol: rules for communication", "ISP: provider of internet access"] },
    ],
    quiz: [
      { question: "Which one is software?", options: ["Browser", "Ethernet cable", "RJ45 connector", "Power outlet"], answer: 0, explanation: "A browser is an application/software." },
      { question: "Rules like HTTP/HTTPS and TCP/IP are examples of:", options: ["Protocols", "Blisters", "Core exercises", "Genes"], answer: 0, explanation: "Protocols are communication rules." },
    ],
  },
  "mst02-mid-m5-l8": {
    sections: [
      { type: "h2", content: "Exam Focus: Netiquette and Internet Issues" },
      { type: "list", content: "Likely exam targets:", items: ["Define netiquette as proper online behavior", "Identify cyberbullying, misinformation, malware, phishing, addiction, and privacy risks", "Explain why verifying information matters", "Respect privacy, consent, and intellectual property"] },
    ],
    quiz: [
      { question: "Sharing screenshots of private messages without consent violates:", options: ["Privacy and netiquette", "Dynamic stretching", "Energy security", "Heredity"], answer: 0, explanation: "Respecting privacy is part of responsible online behavior." },
      { question: "Before sharing alarming news online, you should:", options: ["Verify it through credible sources", "Forward it immediately", "Add unverified claims", "Remove context"], answer: 0, explanation: "Verification helps prevent misinformation." },
    ],
  },
  "mst02-mid-m6": {
    sections: [
      { type: "h2", content: "Exam Focus: Data Security and Privacy" },
      { type: "list", content: "Must-know points:", items: ["Security protects data/systems from unauthorized access, damage, or disruption", "Privacy governs proper use of personal data", "RA 10173 is the Data Privacy Act", "Remember transparency, legitimate purpose, and proportionality", "Examples include data breach, identity theft, oversharing, weak passwords, and unauthorized disclosure"] },
    ],
    quiz: [
      { question: "Which principle requires informing people how their data will be used?", options: ["Transparency", "Overcollection", "Secrecy", "Random posting"], answer: 0, explanation: "Transparency is a key privacy principle." },
      { question: "Which is a security control?", options: ["Strong passwords and access control", "Sharing OTP codes", "Posting private records", "Ignoring updates"], answer: 0, explanation: "Passwords and access controls help protect systems and data." },
      { question: "Data privacy is violated when:", options: ["Personal data is used without proper basis or consent", "Data is protected lawfully", "A user reads a privacy notice", "A system limits access"], answer: 0, explanation: "Improper collection/use/disclosure violates privacy principles." },
    ],
  },
  "mst02-mid-m7": {
    sections: [
      { type: "h2", content: "Exam Focus: ICT Impacts" },
      { type: "list", content: "Use the three-impact framework:", items: ["Economic: jobs, e-commerce, productivity, automation, digital entrepreneurship", "Political: e-governance, participation, campaigns, disinformation, surveillance", "Social: communication, learning, culture, relationships, cyberbullying, screen fatigue, digital divide"] },
    ],
    quiz: [
      { question: "Automation belongs mainly to which ICT impact area?", options: ["Economic", "Lower body", "Gene therapy", "Weather"], answer: 0, explanation: "Automation affects jobs, productivity, and industries." },
      { question: "Online petitions and government portals show ICT's:", options: ["Political impact", "Muscle soreness impact", "GMO impact", "Hydration impact"], answer: 0, explanation: "They involve citizen participation and government services." },
      { question: "Cyberbullying belongs mainly to which ICT impact area?", options: ["Social impact", "Energy crisis", "Climate adaptation", "Stem cell therapy"], answer: 0, explanation: "Cyberbullying affects social behavior and well-being." },
    ],
  },
  "pe2-mid-m4": {
    sections: [
      { type: "h2", content: "Exam Focus: Health Appraisal and Safety" },
      { type: "list", content: "Must-know points:", items: ["Health appraisal identifies risks before, during, and after activity", "Safety variables include health status, fitness level, warm-up/cool-down, equipment, form, and environment", "Proper clothing and footwear reduce discomfort and injury", "Fluid intake prevents dehydration, especially during long or hot activity", "Blisters and muscle soreness require prevention, monitoring, and proper care"] },
    ],
    quiz: [
      { question: "Health appraisal is done before activity mainly to:", options: ["Identify risks and guide safe participation", "Choose a random song", "Avoid all movement forever", "Test internet speed"], answer: 0, explanation: "Health appraisal supports safe exercise decisions." },
      { question: "Which is part of exercise safety?", options: ["Proper equipment inspection", "Using broken equipment", "Skipping warm-up always", "Ignoring pain"], answer: 0, explanation: "Safe equipment reduces accident and injury risk." },
      { question: "Sports drinks may be considered when activity lasts:", options: ["More than about 60–90 minutes", "Only 2 seconds", "Never under any condition", "Only while sleeping"], answer: 0, explanation: "Longer activity may require electrolytes/carbohydrates depending on intensity and conditions." },
    ],
  },
  "pe2-mid-m5-l1": {
    sections: [
      { type: "h2", content: "Exam Focus: Dynamic Stretching" },
      { type: "list", content: "Must-know points:", items: ["Dynamic stretching is active and controlled", "It is usually used before exercise", "It prepares muscles, joints, heart rate, and nervous system", "It is different from static stretching, which holds positions"] },
    ],
    quiz: [
      { question: "Dynamic stretching prepares the body by:", options: ["Using controlled movement through range of motion", "Holding still for a long time only", "Stopping circulation", "Replacing the workout"], answer: 0, explanation: "Dynamic stretching uses movement to prepare for activity." },
      { question: "Which is best before HIIT?", options: ["Dynamic warm-up", "No warm-up", "Only long static holds", "Immediate maximum effort"], answer: 0, explanation: "A dynamic warm-up prepares the body for intense movement." },
    ],
  },
  "pe2-mid-m5-l2": {
    sections: [
      { type: "h2", content: "Exam Focus: Proper Execution" },
      { type: "list", content: "Objective-oriented points:", items: ["Correct form reduces injury risk", "Alignment matters: knees, spine, shoulders, hips, and landing mechanics", "Quality is more important than speed", "Pain, dizziness, and loss of form mean intensity should be reduced or stopped"] },
    ],
    quiz: [
      { question: "If form breaks during HIIT, the best action is to:", options: ["Slow down, modify, or rest", "Move faster", "Ignore technique", "Hold breath"], answer: 0, explanation: "Maintaining form is essential for safety." },
      { question: "Proper landing during jumps should be:", options: ["Soft and controlled", "Stiff and painful", "Random and twisted", "Ignored"], answer: 0, explanation: "Soft landing reduces stress on joints." },
    ],
  },
  "pe2-mid-m5-l3": {
    sections: [
      { type: "h2", content: "Exam Focus: HIIT Terms" },
      { type: "list", content: "Do not confuse:", items: ["Workout: the whole session", "Work interval: high-effort active segment", "Recovery interval: rest or lower-intensity segment", "Round: one work-rest cycle", "Intensity must match fitness level"] },
    ],
    quiz: [
      { question: "In a 30 seconds exercise + 30 seconds rest setup, the 30 seconds exercise part is the:", options: ["Work interval", "Cool-down only", "Whole semester", "Health appraisal"], answer: 0, explanation: "The active high-effort period is the work interval." },
      { question: "Recovery interval is included to:", options: ["Manage fatigue and support safe repeated effort", "Make the workout dangerous", "Remove all rest", "Stop adaptation"], answer: 0, explanation: "Recovery makes interval training safer and more sustainable." },
    ],
  },
  "pe2-mid-m5-l4": {
    sections: [
      { type: "h2", content: "Exam Focus: Fitness Program" },
      { type: "list", content: "Must-know planning tools:", items: ["SMART goals define clear targets", "FITT controls exercise variables", "Progression should be gradual", "Programs must include warm-up, workout, cool-down, and recovery", "Monitor progress and adjust based on response"] },
    ],
    quiz: [
      { question: "Which FITT variable tells how often exercise is done?", options: ["Frequency", "Intensity", "Time", "Type"], answer: 0, explanation: "Frequency means how often." },
      { question: "A program that becomes harder slowly over time uses:", options: ["Progression", "Overexertion", "Neglect", "Randomization only"], answer: 0, explanation: "Progression gradually increases demand." },
    ],
  },
  "pe2-mid-m6-l1": {
    sections: [
      { type: "h2", content: "Exam Focus: Core Exercises" },
      { type: "list", content: "Must-know points:", items: ["Core supports posture, stability, balance, and movement control", "Core exercises include plank, side plank, bird dog, dead bug, crunches, and mountain climbers", "Neutral spine and controlled movement are safety priorities", "Core strength supports lower body and whole-body exercise"] },
    ],
    quiz: [
      { question: "Which cue is correct for plank?", options: ["Brace core and keep neutral spine", "Let hips sag", "Hold breath always", "Twist the neck"], answer: 0, explanation: "Neutral spine and core bracing improve plank safety." },
      { question: "Bird dog trains:", options: ["Core control and coordination", "Only calves", "Only biceps", "Only hydration"], answer: 0, explanation: "Bird dog challenges stability while limbs move." },
    ],
  },
  "pe2-mid-m6-l2": {
    sections: [
      { type: "h2", content: "Exam Focus: Lower Body Exercises" },
      { type: "list", content: "Must-know points:", items: ["Lower body exercises train quadriceps, hamstrings, glutes, calves, and hip stabilizers", "Examples: squat, lunge, step-up, glute bridge, calf raise", "Safety cues: warm up, align knees with toes, land softly, control range of motion", "Progress from bodyweight to harder variations"] },
    ],
    quiz: [
      { question: "Which muscle group is strongly used in glute bridges?", options: ["Glutes", "Forearms only", "Neck only", "Fingers only"], answer: 0, explanation: "Glute bridges focus on hip extension and glute activation." },
      { question: "Before adding jumps or weights, a student should first:", options: ["Master controlled bodyweight form", "Skip basics", "Ignore pain", "Use maximum load immediately"], answer: 0, explanation: "Progression starts with safe movement quality." },
    ],
  },
};

function applyModuleObjectiveSupport(subjects: Subject[]) {
  for (const subject of subjects) {
    for (const term of subject.terms) {
      for (const mod of term.modules) {
        for (const topic of mod.topics) {
          const support = MODULE_OBJECTIVE_SUPPORT[topic.id];
          if (!support) continue;
          topic.content.sections = [
            ...topic.content.sections,
            ...support.sections,
          ];
          topic.content.quiz = [
            ...(topic.content.quiz ?? []),
            ...support.quiz,
          ];
        }
      }
    }
  }
}

applyModuleObjectiveSupport(MIDTERM_FOCUS_SUBJECTS);