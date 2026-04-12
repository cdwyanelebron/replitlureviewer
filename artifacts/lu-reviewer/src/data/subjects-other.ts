import { Subject } from "./types";

export const OTHER_SUBJECTS: Subject[] = [

  // ─── MST 01: ENVIRONMENTAL SCIENCE ──────────────────────────────────────────
  {
    id: "mst01", code: "MST 01", title: "Environmental Science", shortTitle: "MST 01", units: 3,
    description: "Examines the natural environment, ecosystems, biodiversity, environmental issues, and the role of human activity in shaping our planet.",
    terms: [
      {
        id: "prelim", label: "PRELIM",
        modules: [
          {
            id: "mst01-m1", title: "Module 1: Ecology and Ecosystems",
            topics: [
              {
                id: "mst01-m1t1", title: "Ecosystem Structure and Function",
                content: {
                  heading: "Ecosystem Structure and Function", term: "PRELIM", module: "Module 1: Ecology and Ecosystems",
                  objectives: ["Define ecosystem and its components", "Distinguish biotic from abiotic factors", "Explain energy flow and nutrient cycles"],
                  sections: [
                    { type: "h2", content: "What is an Ecosystem?" },
                    { type: "definition", content: "Ecosystem — A community of living organisms (biotic components) interacting with each other and with their non-living environment (abiotic components) as a system." },
                    { type: "table", content: "Biotic vs. Abiotic Components", headers: ["Type", "Definition", "Examples"], rows: [["Biotic", "All living components", "Plants, animals, bacteria, fungi"], ["Abiotic", "All non-living components", "Water, sunlight, temperature, soil, air"]] },
                    { type: "h3", content: "Trophic Levels and Energy Flow" },
                    { type: "table", content: "Trophic Levels", headers: ["Level", "Name", "Examples"], rows: [["1", "Producers (Autotrophs)", "Plants, algae, phytoplankton"], ["2", "Primary Consumers (Herbivores)", "Deer, caterpillars, grasshoppers"], ["3", "Secondary Consumers (Carnivores)", "Frogs, small fish"], ["4", "Tertiary Consumers (Top Predators)", "Eagles, sharks, lions"], ["Any", "Decomposers", "Bacteria, fungi"]] },
                    { type: "definition", content: "10% Rule — Only about 10% of energy is transferred from one trophic level to the next. 90% is lost as heat. This limits food chain length." },
                    { type: "list", content: "Major Nutrient Cycles", items: ["Carbon Cycle — CO₂ absorbed by plants (photosynthesis), released by respiration, decomposition, and combustion", "Nitrogen Cycle — N₂ fixation, nitrification, denitrification. Key to protein synthesis", "Water Cycle — Evaporation, condensation, precipitation, runoff, infiltration"] },
                  ],
                  quiz: [
                    { question: "According to the 10% rule, if producers have 10,000 kcal, how much energy reaches primary consumers?", options: ["10,000 kcal", "1,000 kcal", "100 kcal", "10 kcal"], answer: 1, explanation: "10% rule: 10% of 10,000 = 1,000 kcal reaches primary consumers." },
                    { question: "Abiotic factors in an ecosystem include:", options: ["Bacteria and fungi", "Sunlight, water, and temperature", "Deer and grasshoppers", "Trees and shrubs"], answer: 1, explanation: "Abiotic = non-living factors: sunlight, water, temperature, soil, air." },
                  ],
                },
              },
              {
                id: "mst01-m1t2", title: "Biodiversity and the Philippines",
                content: {
                  heading: "Biodiversity", term: "PRELIM", module: "Module 1: Ecology and Ecosystems",
                  objectives: ["Define biodiversity and its levels", "Explain threats to biodiversity", "Identify the Philippines as a biodiversity hotspot"],
                  sections: [
                    { type: "h2", content: "Biodiversity" },
                    { type: "definition", content: "Biodiversity — The variety of life on Earth. Measured at three levels: genetic diversity, species diversity, and ecosystem diversity." },
                    { type: "list", content: "Threats to Biodiversity (HIPPO)", items: ["H — Habitat destruction and fragmentation", "I — Invasive species", "P — Pollution", "P — Population growth (human)", "O — Overhunting and overharvesting"] },
                    { type: "note", content: "The Philippines is one of 17 'megadiverse' countries in the world and a biodiversity hotspot. It is home to over 52,000 animal species and more than 9,250 plant species — many found nowhere else on Earth (endemic)." },
                    { type: "definition", content: "Endemic Species — Species found only in a particular geographic area and nowhere else. Philippines examples: Philippine Eagle (national bird, critically endangered), Tamaraw (dwarf buffalo, endemic to Mindoro)." },
                  ],
                  quiz: [
                    { question: "The Philippine Eagle is an example of:", options: ["An invasive species", "An endemic species", "A keystone species", "An exotic species"], answer: 1, explanation: "The Philippine Eagle is endemic — found only in the Philippines." },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        id: "midterm", label: "MIDTERM",
        modules: [
          {
            id: "mst01-m2", title: "Module 2: Environmental Issues",
            topics: [
              {
                id: "mst01-m2t1", title: "Climate Change",
                content: {
                  heading: "Climate Change", term: "MIDTERM", module: "Module 2: Environmental Issues",
                  objectives: ["Explain the greenhouse effect and global warming", "Identify causes and consequences of climate change", "Evaluate mitigation strategies"],
                  sections: [
                    { type: "h2", content: "Climate Change" },
                    { type: "definition", content: "Greenhouse Effect — Natural process where greenhouse gases (CO₂, CH₄, N₂O, H₂O vapor) trap heat in the atmosphere, keeping Earth warm enough to support life. Enhanced greenhouse effect = global warming from increased GHGs." },
                    { type: "table", content: "Greenhouse Gases", headers: ["Gas", "Source", "Global Warming Potential"], rows: [["CO₂ (Carbon dioxide)", "Fossil fuels, deforestation", "1 (reference)"], ["CH₄ (Methane)", "Livestock, rice paddies, landfills", "25x CO₂"], ["N₂O (Nitrous oxide)", "Fertilizers, livestock", "298x CO₂"], ["CFCs", "Refrigerants, aerosols", "Thousands x CO₂"]] },
                    { type: "list", content: "Effects of Climate Change", items: ["Rising sea levels (ice melt) — threatens low-lying areas like Manila Bay", "Extreme weather events — stronger typhoons, droughts, floods", "Ocean acidification — threatens coral reefs (Philippines has Tubbataha Reef)", "Threats to food security and water supply"] },
                    { type: "note", content: "Philippines Vulnerability: The Philippines is among the world's most vulnerable countries to climate change due to its long coastline (36,289 km), frequent typhoons (20 annually), and many low-lying communities." },
                  ],
                  quiz: [
                    { question: "Which greenhouse gas has the highest global warming potential?", options: ["CO₂", "CH₄ (Methane)", "N₂O (Nitrous oxide)", "CFCs"], answer: 3, explanation: "CFCs (chlorofluorocarbons) have the highest global warming potential, thousands of times that of CO₂." },
                  ],
                },
              },
              {
                id: "mst01-m2t2", title: "Pollution and Philippine Environmental Laws",
                content: {
                  heading: "Pollution Types and Philippine Environmental Laws", term: "MIDTERM", module: "Module 2: Environmental Issues",
                  objectives: ["Classify different types of pollution", "Identify causes and effects of each type", "Explain key Philippine environmental laws"],
                  sections: [
                    { type: "h2", content: "Types of Pollution" },
                    { type: "table", content: "Pollution Types", headers: ["Type", "Sources", "Effects"], rows: [["Air Pollution", "Vehicle emissions, factories, burning", "Respiratory diseases, acid rain, smog"], ["Water Pollution", "Industrial waste, sewage, agricultural runoff", "Waterborne diseases, dead zones, coral damage"], ["Land/Soil Pollution", "Pesticides, solid waste, mining", "Soil degradation, food contamination"], ["Noise Pollution", "Traffic, construction, industries", "Stress, hearing loss, sleep disturbance"]] },
                    { type: "list", content: "Philippine Environmental Laws", items: ["RA 9003 — Ecological Solid Waste Management Act: segregation, composting, recycling", "RA 8749 — Clean Air Act: standards for air quality", "RA 9275 — Clean Water Act: protection of water resources", "RA 9147 — Wildlife Resources Conservation and Protection Act"] },
                  ],
                  quiz: [
                    { question: "RA 9003 (Philippine Ecological Solid Waste Management Act) mandates:", options: ["Air quality standards", "Waste segregation, composting, and recycling", "Clean water standards", "Noise pollution limits"], answer: 1, explanation: "RA 9003 requires mandatory waste segregation, composting, and recycling." },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        id: "finals", label: "FINALS",
        modules: [
          {
            id: "mst01-m3", title: "Module 3: Sustainable Development",
            topics: [
              {
                id: "mst01-m3t1", title: "Sustainable Development and SDGs",
                content: {
                  heading: "Sustainable Development", term: "FINALS", module: "Module 3: Sustainable Development",
                  objectives: ["Define sustainable development", "Explain the SDGs", "Apply sustainability principles to daily life"],
                  sections: [
                    { type: "h2", content: "Sustainable Development" },
                    { type: "definition", content: "Sustainable Development — 'Development that meets the needs of the present without compromising the ability of future generations to meet their own needs.' (Brundtland Commission, 1987)" },
                    { type: "list", content: "Three Pillars of Sustainability", items: ["Environmental — Protecting natural resources and ecosystems", "Economic — Economic growth that is inclusive and efficient", "Social — Meeting human needs, equity, and quality of life"] },
                    { type: "text", content: "The UN's 17 Sustainable Development Goals (SDGs), adopted in 2015 as part of Agenda 2030, provide a framework for global sustainable development. Relevant SDGs: SDG 6 (Clean Water), SDG 7 (Clean Energy), SDG 13 (Climate Action), SDG 14 (Life Below Water), SDG 15 (Life on Land)." },
                  ],
                  quiz: [
                    { question: "Sustainable development was defined in the Brundtland Commission as:", options: ["Economic growth at all costs", "Development meeting present needs without compromising future generations", "Protecting only the environment", "Industrial development with green technology"], answer: 1, explanation: "Brundtland: meeting present needs without compromising future generations' ability to meet theirs." },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  },

  // ─── MST 02: LIVING IN THE IT ERA ─────────────────────────────────────────
  {
    id: "mst02", code: "MST 02", title: "Living in the IT Era", shortTitle: "MST 02", units: 3,
    description: "Explores how information technology shapes modern life, covering digital literacy, cybersecurity, social media, emerging technologies, and responsible use of digital tools.",
    terms: [
      {
        id: "prelim", label: "PRELIM",
        modules: [
          {
            id: "mst02-m1", title: "Module 1: Digital Literacy and Information Technology",
            topics: [
              {
                id: "mst02-m1t1", title: "Understanding Information Technology",
                content: {
                  heading: "Understanding Information Technology", term: "PRELIM", module: "Module 1: Digital Literacy and Information Technology",
                  objectives: ["Define information technology and digital literacy", "Trace the evolution of computing", "Identify key IT tools and their applications"],
                  sections: [
                    { type: "h2", content: "What is Information Technology?" },
                    { type: "definition", content: "Information Technology (IT) — The use of computers, software, networks, and electronics to store, process, transmit, and retrieve information. IT encompasses hardware, software, telecommunications, and data management." },
                    { type: "definition", content: "Digital Literacy — The ability to use digital technologies effectively and responsibly. Includes finding, evaluating, creating, and communicating information using digital tools." },
                    { type: "table", content: "Evolution of Computing", headers: ["Generation", "Period", "Technology", "Key Feature"], rows: [["1st", "1940s–1950s", "Vacuum tubes", "Room-sized computers; ENIAC"], ["2nd", "1950s–1960s", "Transistors", "Smaller, faster, more reliable"], ["3rd", "1960s–1970s", "Integrated circuits", "Further miniaturization"], ["4th", "1970s–present", "Microprocessors", "Personal computers; Intel 4004 (1971)"], ["5th", "Present–future", "AI, quantum computing", "Parallel processing, machine learning"]] },
                    { type: "list", content: "Key Digital Literacy Skills", items: ["Information literacy: Finding and evaluating credible sources online", "Communication: Effective use of email, messaging, and digital platforms", "Content creation: Creating digital documents, presentations, media", "Cybersecurity awareness: Recognizing threats, protecting data", "Critical thinking: Evaluating digital content for accuracy and bias"] },
                    { type: "note", content: "The Digital Divide in the Philippines: As of 2023, internet penetration is approximately 73% of the population. Rural areas have significantly lower access than Metro Manila." },
                  ],
                  quiz: [
                    { question: "Digital literacy primarily refers to:", options: ["Being able to read digital text", "Using digital technologies effectively and responsibly", "Programming computer software", "Operating digital hardware"], answer: 1, explanation: "Digital literacy: the ability to use digital tools effectively and responsibly to find, evaluate, create, and share information." },
                    { question: "The 4th generation of computers used:", options: ["Vacuum tubes", "Transistors", "Integrated circuits", "Microprocessors"], answer: 3, explanation: "4th generation computers (1970s–present) use microprocessors — entire CPUs on a single chip." },
                  ],
                },
              },
              {
                id: "mst02-m1t2", title: "Internet and World Wide Web",
                content: {
                  heading: "Internet and World Wide Web", term: "PRELIM", module: "Module 1: Digital Literacy and Information Technology",
                  objectives: ["Distinguish the Internet from the World Wide Web", "Understand web technologies and browsers", "Evaluate online information for credibility"],
                  sections: [
                    { type: "h2", content: "Internet vs. World Wide Web" },
                    { type: "table", content: "Internet vs. WWW", headers: ["Aspect", "Internet", "World Wide Web (WWW)"], rows: [["Definition", "Global network of interconnected computers", "System of interlinked web pages accessed via the internet"], ["Nature", "Infrastructure (hardware and protocols)", "Content/service running ON the internet"], ["Inventor", "DARPA/multiple contributors (ARPANET, 1969)", "Tim Berners-Lee (1989)"], ["Access", "Via ISPs using TCP/IP", "Via web browsers using HTTP/HTTPS"]] },
                    { type: "list", content: "Key Internet Services (Beyond WWW)", items: ["Email (SMTP, POP3, IMAP) — Electronic mail communication", "VoIP — Voice over IP (Zoom, Teams, Facebook Calls)", "FTP — File Transfer Protocol for downloading/uploading files", "Cloud storage — Google Drive, OneDrive, Dropbox", "Streaming — Netflix, YouTube, Spotify"] },
                    { type: "h3", content: "CRAAP Test for Evaluating Online Sources" },
                    { type: "list", content: "CRAAP Test Criteria", items: ["Currency — Is the information recent/up-to-date?", "Relevance — Does it relate to your topic?", "Authority — Who created it? What are their credentials?", "Accuracy — Is it supported by evidence? Can it be verified?", "Purpose — Is the goal to inform, persuade, sell, or entertain?"] },
                  ],
                  quiz: [
                    { question: "The World Wide Web was invented by:", options: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Mark Zuckerberg"], answer: 1, explanation: "Tim Berners-Lee invented the World Wide Web in 1989 at CERN." },
                    { question: "Which best distinguishes the Internet from the World Wide Web?", options: ["They are the same thing", "The Internet is the infrastructure; the WWW is a service on it", "The WWW is the infrastructure; the Internet is a service", "The Internet only works with web browsers"], answer: 1, explanation: "The Internet = global network infrastructure. The WWW = one service (web pages) that runs on the Internet." },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        id: "midterm", label: "MIDTERM",
        modules: [
          {
            id: "mst02-m2", title: "Module 2: Cybersecurity and Social Media",
            topics: [
              {
                id: "mst02-m2t1", title: "Cybersecurity Fundamentals",
                content: {
                  heading: "Cybersecurity Fundamentals", term: "MIDTERM", module: "Module 2: Cybersecurity and Social Media",
                  objectives: ["Define cybersecurity and common cyber threats", "Identify methods of protecting digital assets", "Apply cybersecurity best practices"],
                  sections: [
                    { type: "h2", content: "Cybersecurity" },
                    { type: "definition", content: "Cybersecurity — The practice of protecting computers, servers, networks, programs, and data from digital attacks, damage, or unauthorized access." },
                    { type: "table", content: "Common Cyber Threats", headers: ["Threat", "Definition", "Example"], rows: [["Phishing", "Fraudulent emails/messages tricking users into revealing credentials", "Fake bank email asking for password"], ["Malware", "Malicious software designed to harm", "Viruses, worms, ransomware, spyware"], ["Ransomware", "Encrypts victim's files; demands payment for decryption", "WannaCry (2017) affected 150+ countries"], ["Social Engineering", "Manipulating humans to breach security", "Pretending to be IT support to get your password"], ["Man-in-the-Middle", "Attacker intercepts communication between two parties", "Intercepting public Wi-Fi traffic"], ["DDoS", "Overloading a server with traffic to make it unavailable", "Taking down a website by flooding it with requests"]] },
                    { type: "list", content: "Cybersecurity Best Practices", items: ["Use strong, unique passwords for each account (mix of upper/lowercase, numbers, symbols)", "Enable Two-Factor Authentication (2FA) wherever available", "Keep software and operating systems updated (patches fix vulnerabilities)", "Be suspicious of unsolicited emails — never click unknown links", "Use HTTPS websites; avoid unsecured public Wi-Fi for sensitive tasks", "Regularly back up important data (3-2-1 rule: 3 copies, 2 formats, 1 off-site)"] },
                    { type: "definition", content: "CIA Triad — The three core principles of information security:\n• Confidentiality: Only authorized users access data\n• Integrity: Data is accurate and unaltered\n• Availability: Systems and data are accessible when needed" },
                    { type: "note", content: "Philippine Cybercrime Prevention Act (RA 10175, 2012): Cybercrime offenses include illegal access, data interference, cybersex, child pornography, identity theft, and cyberlibel. Penalty: imprisonment of 6 years or more." },
                  ],
                  quiz: [
                    { question: "Phishing is best described as:", options: ["A type of malware that encrypts files", "Fraudulent messages tricking users into revealing credentials", "Flooding a server with traffic", "Intercepting network communication"], answer: 1, explanation: "Phishing = fraudulent emails/messages that trick users into revealing passwords or personal information." },
                    { question: "The CIA Triad in cybersecurity stands for:", options: ["Computers, Internet, Applications", "Confidentiality, Integrity, Availability", "Cybercrime, Investigation, Accountability", "Coding, Implementation, Auditing"], answer: 1, explanation: "CIA Triad = Confidentiality, Integrity, Availability — the three core principles of information security." },
                    { question: "Ransomware is a type of malware that:", options: ["Steals your personal information silently", "Tracks your browsing habits", "Encrypts your files and demands payment", "Sends spam from your computer"], answer: 2, explanation: "Ransomware encrypts a victim's files and demands a ransom for decryption." },
                  ],
                },
              },
              {
                id: "mst02-m2t2", title: "Social Media and Digital Citizenship",
                content: {
                  heading: "Social Media and Digital Citizenship", term: "MIDTERM", module: "Module 2: Cybersecurity and Social Media",
                  objectives: ["Analyze the impact of social media", "Define digital citizenship", "Identify responsible online behavior"],
                  sections: [
                    { type: "h2", content: "Social Media" },
                    { type: "table", content: "Social Media Types and Platforms", headers: ["Type", "Examples", "Primary Use"], rows: [["Social Networking", "Facebook, LinkedIn", "Connecting with people"], ["Microblogging", "Twitter/X, Tumblr", "Short-form content sharing"], ["Photo/Video Sharing", "Instagram, TikTok, YouTube", "Visual content"], ["Professional", "LinkedIn", "Career networking"], ["Messaging", "WhatsApp, Telegram, Messenger", "Private communication"]] },
                    { type: "table", content: "Effects of Social Media", headers: ["Positive", "Negative"], rows: [["Community building and social support", "Cyberbullying and online harassment"], ["Information sharing and awareness", "Fake news and misinformation"], ["Business marketing and e-commerce", "Mental health issues (social comparison, FOMO)"], ["Educational resources", "Echo chambers and filter bubbles"], ["Political participation", "Privacy risks and data exploitation"]] },
                    { type: "definition", content: "Digital Citizenship — Responsible, ethical, and safe participation in digital life. It includes respecting others' rights, protecting privacy, thinking critically, and contributing positively online." },
                    { type: "list", content: "Nine Elements of Digital Citizenship (Ribble)", items: ["Digital Access", "Digital Commerce", "Digital Communication", "Digital Literacy", "Digital Etiquette", "Digital Law", "Digital Rights and Responsibilities", "Digital Health and Wellness", "Digital Security"] },
                  ],
                  quiz: [
                    { question: "Digital citizenship refers to:", options: ["Having a social media account", "Responsible, ethical, and safe participation in digital life", "Being able to write code", "Having internet access at home"], answer: 1, explanation: "Digital citizenship = responsible, ethical, safe online participation, respecting rights and contributing positively." },
                    { question: "A 'filter bubble' on social media means:", options: ["Your private messages are encrypted", "Algorithms show you only content aligned with your existing views", "Your feed is filtered from offensive content", "You can filter spam emails"], answer: 1, explanation: "Filter bubbles: algorithms curate content based on your preferences, isolating you from opposing views." },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        id: "finals", label: "FINALS",
        modules: [
          {
            id: "mst02-m3", title: "Module 3: Emerging Technologies",
            topics: [
              {
                id: "mst02-m3t1", title: "Artificial Intelligence and Machine Learning",
                content: {
                  heading: "Artificial Intelligence and Machine Learning", term: "FINALS", module: "Module 3: Emerging Technologies",
                  objectives: ["Define AI and its subfields", "Distinguish machine learning from traditional programming", "Analyze AI's impact on society and the workforce"],
                  sections: [
                    { type: "h2", content: "Artificial Intelligence (AI)" },
                    { type: "definition", content: "Artificial Intelligence (AI) — The simulation of human intelligence processes by computer systems, including learning, reasoning, problem-solving, perception, and language understanding." },
                    { type: "table", content: "AI Subfields", headers: ["Subfield", "Description", "Example"], rows: [["Machine Learning", "Systems that learn from data without explicit programming", "Netflix recommendations, spam filters"], ["Deep Learning", "ML using multi-layered neural networks", "Face recognition, ChatGPT"], ["Natural Language Processing (NLP)", "Computers understanding human language", "Google Translate, Siri, ChatGPT"], ["Computer Vision", "Computers interpreting visual information", "CCTV recognition, medical imaging"], ["Robotics", "Intelligent physical machines", "Automated manufacturing, delivery drones"]] },
                    { type: "table", content: "AI Applications in Daily Life", headers: ["Application Area", "AI Use"], rows: [["Healthcare", "Diagnosis, drug discovery, medical imaging analysis"], ["Finance", "Fraud detection, algorithmic trading, credit scoring"], ["Education", "Personalized learning, AI tutors"], ["Transportation", "Self-driving cars, route optimization"], ["Entertainment", "Content recommendations, game AI"], ["Customer Service", "Chatbots, virtual assistants"]] },
                    { type: "list", content: "Ethical Concerns About AI", items: ["Job displacement — Automation may eliminate certain jobs", "Algorithmic bias — AI trained on biased data produces biased results", "Privacy — AI systems collect and analyze massive amounts of personal data", "Deepfakes — AI-generated fake images and videos can be used for misinformation", "Autonomous weapons — AI used in military without human oversight"] },
                  ],
                  quiz: [
                    { question: "Machine learning is best described as:", options: ["Teaching robots to move physically", "Systems that learn from data without explicit programming", "Manual programming of rules for computers to follow", "Artificial creation of human consciousness"], answer: 1, explanation: "Machine learning: systems that learn patterns from data automatically without being explicitly programmed." },
                    { question: "Which is an example of Natural Language Processing?", options: ["Google Maps navigation", "Netflix movie recommendations", "Google Translate", "iPhone Face ID"], answer: 2, explanation: "Natural Language Processing (NLP): computers understand human language. Google Translate uses NLP." },
                  ],
                },
              },
              {
                id: "mst02-m3t2", title: "Cloud Computing, IoT, and Blockchain",
                content: {
                  heading: "Cloud Computing, IoT, and Blockchain", term: "FINALS", module: "Module 3: Emerging Technologies",
                  objectives: ["Explain cloud computing concepts", "Describe the Internet of Things (IoT)", "Understand blockchain technology basics"],
                  sections: [
                    { type: "h2", content: "Cloud Computing" },
                    { type: "table", content: "Cloud Service Models", headers: ["Model", "What You Manage", "Example"], rows: [["SaaS", "Nothing (just use it)", "Gmail, Microsoft 365, Zoom"], ["PaaS", "Your applications", "Heroku, Google App Engine"], ["IaaS", "Your OS and applications", "AWS EC2, Azure VMs"]] },
                    { type: "h2", content: "Internet of Things (IoT)" },
                    { type: "definition", content: "Internet of Things (IoT) — The network of physical devices (smart home devices, wearables, sensors) embedded with electronics, software, and sensors that can collect and exchange data over the internet." },
                    { type: "list", content: "IoT Applications", items: ["Smart home: Smart TVs, voice assistants (Alexa, Google Home), automated lighting", "Healthcare: Smartwatches monitoring heart rate, blood oxygen", "Agriculture: Soil sensors, automated irrigation systems", "Smart cities: Traffic management, smart parking, environmental sensors"] },
                    { type: "h2", content: "Blockchain" },
                    { type: "definition", content: "Blockchain — A decentralized, distributed digital ledger that records transactions across multiple computers. Records cannot be altered retroactively without changing all subsequent blocks." },
                    { type: "table", content: "Blockchain Applications", headers: ["Application", "Description"], rows: [["Cryptocurrency", "Bitcoin, Ethereum — digital currencies without a central bank"], ["Smart Contracts", "Self-executing contracts with terms written in code"], ["Supply Chain", "Tracking goods from origin to consumer transparently"], ["Healthcare", "Secure sharing of medical records"], ["Voting", "Transparent, tamper-resistant election systems"]] },
                  ],
                  quiz: [
                    { question: "The Internet of Things (IoT) refers to:", options: ["The World Wide Web", "Social media platforms", "Physical devices with sensors that connect and share data online", "Blockchain-based applications"], answer: 2, explanation: "IoT = physical devices (smart home, wearables, sensors) that connect to the internet and exchange data." },
                    { question: "Which cloud service model provides the LEAST control to the user?", options: ["IaaS", "PaaS", "SaaS", "DaaS"], answer: 2, explanation: "SaaS provides the least control — you just use the software; all underlying infrastructure is managed by the provider." },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  },

  // ─── NSTP 1: CIVIC WELFARE TRAINING SERVICE 1 ────────────────────────────
  {
    id: "nstp1", code: "NSTP 1", title: "Civic Welfare Training Service 1", shortTitle: "NSTP 1", units: 3,
    description: "Introduces civic responsibility, volunteerism, and community service. Develops students' awareness of national issues and commitment to nation building.",
    terms: [
      {
        id: "prelim", label: "PRELIM",
        modules: [
          {
            id: "nstp1-m1", title: "Module 1: Introduction to NSTP and CWTS",
            topics: [
              {
                id: "nstp1-m1t1", title: "Republic Act 9163 — The NSTP Law",
                content: {
                  heading: "Republic Act 9163 — The NSTP Law", term: "PRELIM", module: "Module 1: Introduction to NSTP and CWTS",
                  objectives: ["Explain the purpose of RA 9163", "Identify the three NSTP components", "Explain the CWTS program objective"],
                  sections: [
                    { type: "h2", content: "National Service Training Program (NSTP)" },
                    { type: "definition", content: "RA 9163 (2001) — The National Service Training Program Act. Mandates NSTP for all incoming freshmen in tertiary education, both public and private schools. Replaced the old Citizen's Military Training (CMT)." },
                    { type: "table", content: "Three NSTP Components", headers: ["Component", "Full Name", "Focus"], rows: [["CWTS", "Civic Welfare Training Service", "Community service; social development; volunteerism"], ["ROTC", "Reserve Officers' Training Corps", "Military training for national defense"], ["LTS", "Literacy Training Service", "Teaching literacy and numeracy in communities"]] },
                    { type: "definition", content: "CWTS (Civic Welfare Training Service) — NSTP component aimed at enhancing civic consciousness and defense preparedness in youth. Focuses on projects that contribute to the general welfare and betterment of life in communities." },
                    { type: "list", content: "CWTS Program Goals", items: ["Develop civic responsibility and consciousness among students", "Equip students with skills for community service", "Promote values of service, patriotism, and solidarity", "Engage students in social development projects", "Foster love of country and commitment to nation-building"] },
                    { type: "note", content: "NSTP is a requirement for graduation. Students must complete NSTP 1 and NSTP 2 (6 units total). CWTS is 3 hours per week for 2 semesters." },
                  ],
                  quiz: [
                    { question: "RA 9163 (NSTP Law) was enacted in:", options: ["1991", "1997", "2001", "2010"], answer: 2, explanation: "RA 9163 (National Service Training Program Act) was signed into law in 2001." },
                    { question: "CWTS stands for:", options: ["Civic Warfare Training Service", "Civic Welfare Training Service", "Community Work and Training Service", "Civic Welfare Teaching Service"], answer: 1, explanation: "CWTS = Civic Welfare Training Service — one of the three NSTP components." },
                    { question: "Which NSTP component focuses on military training?", options: ["CWTS", "LTS", "ROTC", "NTS"], answer: 2, explanation: "ROTC (Reserve Officers' Training Corps) focuses on military training for national defense." },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        id: "midterm", label: "MIDTERM",
        modules: [
          {
            id: "nstp1-m2", title: "Module 2: Volunteerism and Community Development",
            topics: [
              {
                id: "nstp1-m2t1", title: "Volunteerism and Service Learning",
                content: {
                  heading: "Volunteerism and Service Learning", term: "MIDTERM", module: "Module 2: Volunteerism and Community Development",
                  objectives: ["Define volunteerism and service learning", "Identify motivations for volunteering", "Distinguish service learning from community service"],
                  sections: [
                    { type: "h2", content: "Volunteerism" },
                    { type: "definition", content: "Volunteerism — The practice of freely giving time and effort for the benefit of others and the community without expectation of financial reward." },
                    { type: "definition", content: "Service Learning — A teaching strategy that combines academic learning with meaningful community service. Students apply classroom knowledge to real-world problems." },
                    { type: "table", content: "Community Service vs. Service Learning", headers: ["Aspect", "Community Service", "Service Learning"], rows: [["Focus", "Meeting community needs", "Student learning through service"], ["Reflection", "Optional", "Required and integrated"], ["Academic link", "Not required", "Directly connected to curriculum"], ["Goal", "Service only", "Service + academic + personal growth"]] },
                  ],
                  quiz: [
                    { question: "Service learning differs from regular community service in that it:", options: ["Provides financial incentives", "Is directly linked to academic learning with required reflection", "Does not involve community work", "Is only for graduate students"], answer: 1, explanation: "Service learning integrates meaningful community service with academic curriculum and required reflection." },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        id: "finals", label: "FINALS",
        modules: [
          {
            id: "nstp1-m3", title: "Module 3: Philippine Social Issues",
            topics: [
              {
                id: "nstp1-m3t1", title: "Poverty and Social Development in the Philippines",
                content: {
                  heading: "Poverty and Social Development in the Philippines", term: "FINALS", module: "Module 3: Philippine Social Issues",
                  objectives: ["Analyze poverty in the Philippines", "Identify government programs addressing poverty", "Explain how CWTS contributes to social development"],
                  sections: [
                    { type: "h2", content: "Poverty in the Philippines" },
                    { type: "text", content: "As of 2021, the Philippine poverty incidence was 18.1% (about 19.9 million Filipinos). Poverty is concentrated in rural areas, particularly in Mindanao." },
                    { type: "list", content: "Causes of Poverty", items: ["Low wages and underemployment", "Limited access to quality education and healthcare", "Natural disasters (typhoons, earthquakes, floods)", "Conflict and displacement in Mindanao", "Systemic inequality and land ownership issues"] },
                    { type: "list", content: "Government Programs", items: ["4Ps (Pantawid Pamilyang Pilipino Program) — Conditional cash transfer for poor families", "Libreng Sakay — Free public transportation for students, workers, seniors", "PhilHealth — Universal health insurance", "DepEd's Alternative Learning System (ALS) — For out-of-school youth"] },
                  ],
                  quiz: [
                    { question: "The 4Ps (Pantawid Pamilyang Pilipino Program) is best described as:", options: ["A housing subsidy program", "A conditional cash transfer program for poor families", "A free healthcare program", "A public transportation program"], answer: 1, explanation: "4Ps is a conditional cash transfer program providing cash grants to poor families." },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  },

  // ─── NSTP 2: CIVIC WELFARE TRAINING SERVICE 2 ────────────────────────────
  {
    id: "nstp2", code: "NSTP 2", title: "Civic Welfare Training Service 2", shortTitle: "NSTP 2", units: 3,
    description: "Continuation of CWTS 1. Focuses on hands-on community engagement, project implementation, disaster risk reduction, and evaluation of community service projects.",
    terms: [
      {
        id: "prelim", label: "PRELIM",
        modules: [
          {
            id: "nstp2-m1", title: "Module 1: Disaster Risk Reduction",
            topics: [
              {
                id: "nstp2-m1t1", title: "Disaster Risk Reduction and Management (DRRM)",
                content: {
                  heading: "Disaster Risk Reduction and Management (DRRM)", term: "PRELIM", module: "Module 1: Disaster Risk Reduction",
                  objectives: ["Define disaster risk reduction", "Understand RA 10121", "Identify types of disasters affecting the Philippines"],
                  sections: [
                    { type: "h2", content: "DRRM in the Philippines" },
                    { type: "definition", content: "Disaster Risk Reduction (DRR) — The concept and practice of reducing disaster risks through systematic efforts including reduced exposure to hazards and lessened vulnerability of people and property." },
                    { type: "definition", content: "RA 10121 (Philippine Disaster Risk Reduction and Management Act, 2010) — Provides for a comprehensive national DRRM policy. Created NDRRMC (National Disaster Risk Reduction and Management Council)." },
                    { type: "table", content: "DRRM Phases", headers: ["Phase", "Activities"], rows: [["Prevention & Mitigation", "Risk assessment, land use planning, building codes, early warning systems"], ["Preparedness", "Training, drills, emergency plans, stockpiling"], ["Response", "Search and rescue, evacuation, emergency relief"], ["Recovery & Rehabilitation", "Rebuilding infrastructure, livelihood restoration, psychosocial support"]] },
                    { type: "list", content: "Natural Hazards in the Philippines", items: ["Typhoons — Average 20 typhoons per year; strongest: Yolanda/Haiyan (2013)", "Earthquakes — Located on Pacific Ring of Fire; Valley Fault System near Metro Manila", "Volcanic Eruptions — 24 active volcanoes; Taal (2020), Mayon, Pinatubo (1991)", "Floods and Landslides — Especially in mountainous provinces after heavy rains"] },
                  ],
                  quiz: [
                    { question: "RA 10121 created which government body for disaster management?", options: ["PAGASA", "PHIVOLCS", "NDRRMC", "OCD"], answer: 2, explanation: "RA 10121 created the NDRRMC (National Disaster Risk Reduction and Management Council)." },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        id: "midterm", label: "MIDTERM",
        modules: [
          {
            id: "nstp2-m2", title: "Module 2: Community Project Implementation",
            topics: [
              {
                id: "nstp2-m2t1", title: "Project Planning and Implementation",
                content: {
                  heading: "Project Planning and Implementation", term: "MIDTERM", module: "Module 2: Community Project Implementation",
                  objectives: ["Plan a community service project", "Apply SMART objectives", "Evaluate project outcomes"],
                  sections: [
                    { type: "h2", content: "Community Project Cycle" },
                    { type: "list", content: "Steps in Community Project Management", items: ["1. Community Assessment — Identify needs and problems (surveys, interviews, focus groups)", "2. Problem Identification — Prioritize the most pressing need", "3. Project Planning — Set SMART objectives, identify activities, resources, timeline", "4. Implementation — Execute the activities; coordinate volunteers", "5. Monitoring — Track progress against plan; adjust as needed", "6. Evaluation — Measure outcomes; did you achieve objectives?", "7. Documentation and Reporting — Write project report; present findings"] },
                    { type: "definition", content: "SMART Objectives — Specific, Measurable, Achievable, Relevant, Time-bound." },
                    { type: "example", content: "Poor objective: 'Help the community.'\nSMART: 'Reduce littering by 50% in Barangay X within 3 months by conducting weekly clean-up drives and installing 10 additional trash bins.'" },
                  ],
                  quiz: [
                    { question: "SMART objectives must be:", options: ["Simple, Meaningful, Achievable, Realistic, Timely", "Specific, Measurable, Achievable, Relevant, Time-bound", "Specific, Manageable, Accessible, Realistic, Tangible", "Simple, Manageable, Achievable, Relevant, Time-bound"], answer: 1, explanation: "SMART = Specific, Measurable, Achievable, Relevant, Time-bound." },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        id: "finals", label: "FINALS",
        modules: [
          {
            id: "nstp2-m3", title: "Module 3: Peace Education and Filipino Values",
            topics: [
              {
                id: "nstp2-m3t1", title: "Peace Education and Nation-Building",
                content: {
                  heading: "Peace Education and Filipino Values", term: "FINALS", module: "Module 3: Peace Education and Filipino Values",
                  objectives: ["Define peace education", "Identify Filipino values relevant to community service", "Develop personal commitment to nation-building"],
                  sections: [
                    { type: "h2", content: "Peace Education" },
                    { type: "definition", content: "Peace Education — The process of acquiring values, knowledge, and skills that promote nonviolent coexistence, conflict resolution, and social justice." },
                    { type: "list", content: "Filipino Core Values in CWTS", items: ["Bayanihan — Community spirit; collective effort for a common good", "Kapwa — Shared identity; recognizing others as part of your community", "Malasakit — Compassion and concern for others", "Pagmamahal sa bayan — Love of country; patriotism"] },
                  ],
                  quiz: [
                    { question: "Bayanihan refers to:", options: ["Personal achievement", "Community spirit and collective effort for a common good", "Love of country", "Compassion for others"], answer: 1, explanation: "Bayanihan = Filipino tradition of working together as a community for a common purpose." },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  },

  // ─── PE 1: MOVEMENT COMPETENCY TRAINING ─────────────────────────────────────
  {
    id: "pe1", code: "PE 1", title: "Movement Competency Training", shortTitle: "PE 1", units: 2,
    description: "Develops fundamental movement skills, body coordination, physical fitness, and motor competencies through structured physical activities and training programs.",
    terms: [
      {
        id: "prelim", label: "PRELIM",
        modules: [
          {
            id: "pe1-m1", title: "Module 1: Physical Fitness and Movement Fundamentals",
            topics: [
              {
                id: "pe1-m1t1", title: "Components of Physical Fitness",
                content: {
                  heading: "Physical Fitness Concepts", term: "PRELIM", module: "Module 1: Physical Fitness and Movement Fundamentals",
                  objectives: ["Define physical fitness and its components", "Distinguish health-related from skill-related fitness", "Assess personal fitness levels"],
                  sections: [
                    { type: "h2", content: "Physical Fitness" },
                    { type: "definition", content: "Physical Fitness — The ability of the body to function efficiently and effectively in daily activities, occupational tasks, and leisure activities." },
                    { type: "table", content: "Health-Related Components of Fitness", headers: ["Component", "Definition", "Test"], rows: [["Cardiovascular Endurance", "Heart and lungs sustaining activity over time", "3-minute step test, 12-min run"], ["Muscular Strength", "Maximum force a muscle can exert in one effort", "1-rep maximum (1RM)"], ["Muscular Endurance", "Muscles performing repeated contractions", "Push-up test, sit-up test"], ["Flexibility", "Range of motion around a joint", "Sit-and-reach test"], ["Body Composition", "Ratio of fat to lean mass", "BMI, skinfold measurement"]] },
                    { type: "table", content: "Skill-Related Components of Fitness", headers: ["Component", "Definition", "Sport Example"], rows: [["Speed", "Rate of movement", "100m sprint"], ["Power", "Speed + strength combined", "Jumping, throwing"], ["Agility", "Quick direction changes", "Basketball, badminton"], ["Balance", "Maintaining equilibrium", "Gymnastics"], ["Coordination", "Multiple body parts working together", "Ball skills, dance"], ["Reaction Time", "Speed of response to a stimulus", "Sprinting at the gun"]] },
                  ],
                  quiz: [
                    { question: "Cardiovascular endurance involves:", options: ["Maximum force a muscle can exert", "The heart and lungs' ability to sustain activity over time", "Range of motion around a joint", "Ratio of fat to lean body mass"], answer: 1, explanation: "Cardiovascular endurance: the ability of the heart and lungs to deliver oxygen to working muscles during sustained exercise." },
                    { question: "Which of these is a SKILL-related fitness component?", options: ["Flexibility", "Body Composition", "Agility", "Muscular Strength"], answer: 2, explanation: "Agility is skill-related. Flexibility, body composition, and muscular strength are health-related fitness components." },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        id: "midterm", label: "MIDTERM",
        modules: [
          {
            id: "pe1-m2", title: "Module 2: Movement Skills and FITT Principle",
            topics: [
              {
                id: "pe1-m2t1", title: "Fundamental Movement Skills",
                content: {
                  heading: "Fundamental Movement Skills", term: "MIDTERM", module: "Module 2: Movement Skills and FITT Principle",
                  objectives: ["Classify fundamental movement skills", "Apply movement skills to physical activities"],
                  sections: [
                    { type: "h2", content: "Fundamental Movement Skills" },
                    { type: "table", content: "Categories of Movement Skills", headers: ["Category", "Description", "Examples"], rows: [["Locomotor", "Moving from one place to another", "Running, jumping, hopping, skipping, galloping, leaping"], ["Non-locomotor (Stability)", "Movements performed in place", "Bending, stretching, twisting, turning, swinging, balancing"], ["Manipulative", "Controlling objects with body parts", "Throwing, catching, kicking, striking, dribbling"]] },
                    { type: "list", content: "FITT Principle", items: ["Frequency — How often you exercise (days per week)", "Intensity — How hard you exercise (heart rate, perceived exertion)", "Time — Duration of each exercise session", "Type — Mode of exercise (aerobic, resistance, flexibility)"] },
                  ],
                  quiz: [
                    { question: "Which movement skill involves controlling objects with body parts?", options: ["Locomotor", "Non-locomotor", "Manipulative", "Stability"], answer: 2, explanation: "Manipulative skills: controlling objects using body parts (throwing, catching, kicking, dribbling)." },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        id: "finals", label: "FINALS",
        modules: [
          {
            id: "pe1-m3", title: "Module 3: Principles of Training",
            topics: [
              {
                id: "pe1-m3t1", title: "Training Principles for Fitness Development",
                content: {
                  heading: "Principles of Physical Training", term: "FINALS", module: "Module 3: Principles of Training",
                  objectives: ["Apply principles of exercise training", "Design a basic personal fitness program"],
                  sections: [
                    { type: "h2", content: "Principles of Training" },
                    { type: "table", content: "Training Principles", headers: ["Principle", "Definition", "Example"], rows: [["Overload", "Exercise must exceed normal demands to improve fitness", "Increasing weight lifted by 5% each week"], ["Progression", "Gradually increase exercise intensity over time", "Walking → jogging → running"], ["Specificity", "Train the specific component you want to improve", "Swimmer trains swimming, not weightlifting"], ["Reversibility", "'Use it or lose it' — fitness decreases if training stops", "2 weeks of inactivity reduces aerobic fitness"], ["Individuality", "Programs must be tailored to the individual", "Different starting weights for different people"], ["Recovery", "Muscles need rest to repair and grow stronger", "Rest day between strength training sessions"]] },
                  ],
                  quiz: [
                    { question: "The principle of specificity means:", options: ["You should train every day without rest", "You should train the specific component/activity you want to improve", "Exercise intensity should gradually increase", "Fitness decreases when you stop training"], answer: 1, explanation: "Specificity: to improve a specific fitness component or skill, you must train that specific component." },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  },

  // ─── PE 2: EXERCISE-BASED FITNESS ACTIVITIES ─────────────────────────────────
  {
    id: "pe2", code: "PE 2", title: "Exercise-based Fitness Activities", shortTitle: "PE 2", units: 2,
    description: "Applies principles of exercise science to design and implement personal fitness programs. Covers aerobic and anaerobic training, resistance exercises, flexibility, body composition, and sports nutrition.",
    terms: [
      {
        id: "prelim", label: "PRELIM",
        modules: [
          {
            id: "pe2-m1", title: "Module 1: Exercise Physiology Basics",
            topics: [
              {
                id: "pe2-m1t1", title: "Energy Systems in Exercise",
                content: {
                  heading: "Energy Systems in Exercise", term: "PRELIM", module: "Module 1: Exercise Physiology Basics",
                  objectives: ["Explain the three energy systems", "Identify which energy system is used for different exercise types", "Understand ATP and its role in muscle contraction"],
                  sections: [
                    { type: "h2", content: "Energy for Exercise" },
                    { type: "definition", content: "ATP (Adenosine Triphosphate) — The immediate energy currency of the body. All muscular work requires ATP. The body must constantly replenish ATP through three energy systems." },
                    { type: "table", content: "Three Energy Systems", headers: ["System", "Fuel", "Duration", "Type of Activity", "Oxygen Required?"], rows: [["Phosphagen (ATP-PCr)", "Creatine phosphate (stored)", "0–10 seconds", "Very high intensity: 100m sprint, 1RM weight lift, shot put", "No (Anaerobic)"], ["Glycolytic (Lactic Acid)", "Glycogen (glucose)", "10 sec–2 min", "High intensity: 200m–800m race, basketball sprint, HIIT", "No (Anaerobic)"], ["Oxidative (Aerobic)", "Glucose, fat, protein", "2 min +", "Low-moderate intensity: long-distance running, swimming, cycling", "Yes (Aerobic)"]] },
                    { type: "note", content: "Real exercise involves all three systems simultaneously — just in different proportions. A 100m sprint is 95% phosphagen; a marathon is mostly aerobic." },
                  ],
                  quiz: [
                    { question: "Which energy system is used primarily during a 100m sprint?", options: ["Aerobic (Oxidative) system", "Glycolytic (Lactic Acid) system", "Phosphagen (ATP-PCr) system", "All systems equally"], answer: 2, explanation: "100m sprint (~10 seconds, max intensity) relies primarily on the Phosphagen (ATP-PCr) system." },
                    { question: "ATP stands for:", options: ["Adenosine Triphosphate", "Active Training Protocol", "Aerobic Training Program", "Adenosine Triadenine Phosphate"], answer: 0, explanation: "ATP = Adenosine Triphosphate — the immediate energy currency for all cellular work including muscle contraction." },
                  ],
                },
              },
              {
                id: "pe2-m1t2", title: "Aerobic vs. Anaerobic Training and Heart Rate Zones",
                content: {
                  heading: "Aerobic vs. Anaerobic Training", term: "PRELIM", module: "Module 1: Exercise Physiology Basics",
                  objectives: ["Distinguish aerobic from anaerobic exercise", "Understand target heart rate zones", "Apply heart rate monitoring for training intensity"],
                  sections: [
                    { type: "h2", content: "Aerobic vs. Anaerobic" },
                    { type: "table", content: "Aerobic vs. Anaerobic Exercise", headers: ["Feature", "Aerobic", "Anaerobic"], rows: [["Oxygen", "Requires oxygen", "Does NOT require oxygen"], ["Intensity", "Low to moderate intensity", "High intensity"], ["Duration", "Longer (20+ minutes)", "Shorter (0–2 minutes)"], ["Examples", "Jogging, cycling, swimming, Zumba", "Sprinting, weightlifting, HIIT"], ["Primary fuel", "Fat and glucose", "Glucose (and creatine)"], ["By-product", "Water and CO₂", "Lactic acid"]] },
                    { type: "h2", content: "Heart Rate Zones" },
                    { type: "definition", content: "Maximum Heart Rate (MHR) — Estimated using: MHR = 220 − age.\nExample: 19-year-old: MHR = 220 − 19 = 201 bpm" },
                    { type: "table", content: "Heart Rate Training Zones", headers: ["Zone", "% of MHR", "Training Effect"], rows: [["Zone 1: Recovery", "50–60%", "Active recovery, warm-up"], ["Zone 2: Fat Burn", "60–70%", "Fat oxidation, base endurance"], ["Zone 3: Aerobic", "70–80%", "Improved aerobic capacity, cardiovascular fitness"], ["Zone 4: Threshold", "80–90%", "Increased anaerobic threshold, speed"], ["Zone 5: Maximum", "90–100%", "Maximum performance, brief only"]] },
                    { type: "example", content: "For a 20-year-old student (MHR = 200 bpm):\nZone 2 (Fat Burn): 120–140 bpm — comfortable jogging\nZone 3 (Aerobic): 140–160 bpm — challenging but sustained\nZone 4 (Threshold): 160–180 bpm — very hard, breathing heavily" },
                  ],
                  quiz: [
                    { question: "What is the estimated Maximum Heart Rate for a 20-year-old?", options: ["180 bpm", "190 bpm", "200 bpm", "210 bpm"], answer: 2, explanation: "MHR = 220 − age = 220 − 20 = 200 bpm." },
                    { question: "Lactic acid is a by-product of which type of exercise?", options: ["Aerobic exercise", "Anaerobic exercise", "Flexibility training", "Balance exercises"], answer: 1, explanation: "Anaerobic exercise produces lactic acid as a by-product of energy production." },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        id: "midterm", label: "MIDTERM",
        modules: [
          {
            id: "pe2-m2", title: "Module 2: Resistance Training and Flexibility",
            topics: [
              {
                id: "pe2-m2t1", title: "Resistance Training Fundamentals",
                content: {
                  heading: "Resistance Training Fundamentals", term: "MIDTERM", module: "Module 2: Resistance Training and Flexibility",
                  objectives: ["Explain benefits of resistance training", "Identify major muscle groups", "Apply progressive overload principles"],
                  sections: [
                    { type: "h2", content: "Resistance Training" },
                    { type: "definition", content: "Resistance Training (Strength Training) — Exercise that causes muscles to contract against an external resistance, resulting in increases in strength, tone, mass, and/or endurance." },
                    { type: "list", content: "Benefits of Resistance Training", items: ["Increased muscular strength and endurance", "Increased bone density (reduces osteoporosis risk)", "Improved metabolic rate (muscle burns more calories at rest)", "Better posture and body composition", "Reduced risk of injury in daily activities"] },
                    { type: "table", content: "Major Muscle Groups", headers: ["Group", "Muscles", "Common Exercises"], rows: [["Chest", "Pectoralis major/minor", "Push-ups, bench press"], ["Back", "Latissimus dorsi, rhomboids, trapezius", "Pull-ups, rows"], ["Shoulders", "Deltoids", "Overhead press, lateral raises"], ["Biceps", "Biceps brachii", "Bicep curls"], ["Triceps", "Triceps brachii", "Dips, tricep extensions"], ["Core", "Rectus abdominis, obliques, erector spinae", "Planks, crunches, deadlifts"], ["Quadriceps", "Rectus femoris, vastus lateralis/medialis", "Squats, lunges"], ["Hamstrings", "Biceps femoris, semimembranosus", "Romanian deadlifts, leg curls"], ["Glutes", "Gluteus maximus/medius", "Hip thrusts, squats"], ["Calves", "Gastrocnemius, soleus", "Calf raises"]] },
                    { type: "table", content: "Compound vs. Isolation Exercises", headers: ["Type", "Definition", "Examples", "Advantage"], rows: [["Compound", "Multi-joint; works multiple muscle groups", "Squat, deadlift, bench press, pull-up", "More muscle activation, functional strength, time efficient"], ["Isolation", "Single-joint; works one muscle group", "Bicep curl, leg extension, lat pulldown", "Target weak muscles, bodybuilding, rehabilitation"]] },
                  ],
                  quiz: [
                    { question: "Which exercise is classified as COMPOUND?", options: ["Bicep curl", "Leg extension", "Lateral raise", "Squat"], answer: 3, explanation: "Squat = compound exercise working quads, hamstrings, glutes, core, and back simultaneously." },
                    { question: "Which is a benefit of resistance training?", options: ["Decreased bone density", "Reduced metabolic rate", "Increased bone density", "Decreased muscular endurance"], answer: 2, explanation: "Resistance training increases bone density, reducing osteoporosis risk." },
                  ],
                },
              },
              {
                id: "pe2-m2t2", title: "Flexibility Training and Stretching",
                content: {
                  heading: "Flexibility Training and Stretching", term: "MIDTERM", module: "Module 2: Resistance Training and Flexibility",
                  objectives: ["Define flexibility and its importance", "Distinguish types of stretching", "Design a stretching routine"],
                  sections: [
                    { type: "h2", content: "Flexibility" },
                    { type: "definition", content: "Flexibility — The ability of a joint or series of joints to move through an unrestricted, pain-free range of motion (ROM)." },
                    { type: "table", content: "Types of Stretching", headers: ["Type", "Description", "When to Use", "Example"], rows: [["Static", "Hold a stretch for 15–60 seconds without movement", "Post-workout (cool-down)", "Quad stretch, hamstring stretch"], ["Dynamic", "Controlled movements through the range of motion", "Pre-workout (warm-up)", "Leg swings, arm circles, hip rotations"], ["Ballistic", "Bouncing movements (forced range)", "Not recommended (injury risk)", "Bouncing toe touch"], ["PNF", "Contract, then relax, then stretch (with partner)", "Advanced flexibility training", "Contract-relax hamstring stretch"]] },
                    { type: "note", content: "NEVER stretch cold muscles. Always warm up (5–10 min light cardio) before stretching. Static stretching before exercise can temporarily reduce power output — use dynamic stretching pre-workout." },
                  ],
                  quiz: [
                    { question: "Which type of stretching is best suited for warm-up BEFORE exercise?", options: ["Static stretching", "Ballistic stretching", "Dynamic stretching", "PNF stretching"], answer: 2, explanation: "Dynamic stretching (controlled movements through ROM) is best for pre-workout warm-up." },
                    { question: "Static stretching involves:", options: ["Bouncing movements through the range of motion", "Contracting then relaxing a muscle before stretching", "Holding a stretched position for 15–60 seconds", "Using a partner to push beyond normal range"], answer: 2, explanation: "Static stretching: hold a stretch in a fixed position for 15–60 seconds without bouncing." },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        id: "finals", label: "FINALS",
        modules: [
          {
            id: "pe2-m3", title: "Module 3: Sports Nutrition and Personal Fitness Programs",
            topics: [
              {
                id: "pe2-m3t1", title: "Sports Nutrition",
                content: {
                  heading: "Sports Nutrition", term: "FINALS", module: "Module 3: Sports Nutrition and Personal Fitness Programs",
                  objectives: ["Explain macronutrients and their role in exercise", "Apply nutrition timing principles", "Calculate caloric needs for different fitness goals"],
                  sections: [
                    { type: "h2", content: "Macronutrients for Exercise" },
                    { type: "table", content: "Macronutrients and Exercise", headers: ["Macronutrient", "Calories/gram", "Primary Role in Exercise", "Sources"], rows: [["Carbohydrates", "4 kcal/g", "Primary fuel source; replenishes muscle glycogen", "Rice, bread, pasta, fruits, vegetables"], ["Proteins", "4 kcal/g", "Muscle repair and growth; enzyme production", "Meat, fish, eggs, tofu, legumes, dairy"], ["Fats", "9 kcal/g", "Energy for low-intensity, long-duration exercise; hormones", "Avocado, nuts, olive oil, fish"]] },
                    { type: "h3", content: "Protein Requirements for Exercise" },
                    { type: "table", content: "Protein Needs by Activity Level", headers: ["Activity Level", "Protein Need (g/kg body weight/day)"], rows: [["Sedentary", "0.8 g/kg"], ["Recreational exercise", "1.2–1.4 g/kg"], ["Endurance athlete", "1.4–1.6 g/kg"], ["Strength/power athlete", "1.6–2.2 g/kg"]] },
                    { type: "example", content: "Example: 60 kg college student who does weight training:\nProtein target: 60 kg × 1.8 g/kg = 108 g of protein per day\nCaloric value: 108 g × 4 kcal/g = 432 kcal from protein" },
                    { type: "h3", content: "Nutrition Timing" },
                    { type: "list", content: "Pre-Workout Nutrition (1–3 hours before)", items: ["Emphasize carbohydrates for energy", "Moderate protein", "Low fat (slower digestion, can cause discomfort)", "Stay hydrated: drink 400–600 ml water 2 hours before"] },
                    { type: "list", content: "Post-Workout Nutrition (within 30–60 min after)", items: ["'Anabolic window' — prime time for recovery", "Carbohydrates to replenish glycogen stores", "Protein for muscle repair (20–40g recommended)", "Example: Rice + grilled chicken, chocolate milk, protein shake"] },
                    { type: "definition", content: "Hydration — For every 1% loss of body weight in sweat, performance can decrease by 2–3%. Aim for pale yellow urine as indicator of adequate hydration. Drink ~2–3 liters of water daily." },
                  ],
                  quiz: [
                    { question: "Which macronutrient is the PRIMARY fuel source for high-intensity exercise?", options: ["Fat", "Protein", "Carbohydrates", "Water"], answer: 2, explanation: "Carbohydrates (stored as glycogen) are the primary and preferred fuel source for high-intensity exercise." },
                    { question: "The recommended post-workout protein intake to support muscle recovery is:", options: ["5–10g", "20–40g", "60–80g", "100g+"], answer: 1, explanation: "Research supports 20–40g of protein post-workout for optimal muscle protein synthesis." },
                    { question: "Fats provide how many calories per gram?", options: ["4 kcal/g", "7 kcal/g", "9 kcal/g", "11 kcal/g"], answer: 2, explanation: "Fat = 9 kcal/g (more than double carbs and protein at 4 kcal/g each)." },
                  ],
                },
              },
              {
                id: "pe2-m3t2", title: "Designing a Personal Fitness Program",
                content: {
                  heading: "Designing a Personal Fitness Program", term: "FINALS", module: "Module 3: Sports Nutrition and Personal Fitness Programs",
                  objectives: ["Apply FITT principle to design a complete fitness program", "Balance different training types", "Account for rest and recovery"],
                  sections: [
                    { type: "h2", content: "Personal Fitness Program Design" },
                    { type: "list", content: "Steps to Design a Fitness Program", items: ["1. Assess current fitness level — push-ups, sit-up, step test, sit-and-reach", "2. Set SMART goals — specific, measurable, time-bound", "3. Apply FITT principle — frequency, intensity, time, type", "4. Include all fitness components — cardio, strength, flexibility", "5. Incorporate progressive overload — gradually increase demands", "6. Plan rest/recovery — 1–2 rest days per week", "7. Monitor and evaluate — track progress, adjust plan"] },
                    { type: "example", content: "Sample Weekly Program for General Fitness (College Student):\nMonday: Resistance training (upper body) — 45 min\nTuesday: Cardio (jogging/cycling) — 30 min\nWednesday: Resistance training (lower body) — 45 min\nThursday: Active recovery (yoga/stretching) — 30 min\nFriday: Full-body circuit training — 45 min\nSaturday: Recreational sports/aerobics — 60 min\nSunday: Rest or light walking" },
                    { type: "table", content: "FITT Guidelines for Different Components", headers: ["Component", "Frequency", "Intensity", "Time", "Type"], rows: [["Cardio (Aerobic)", "3–5 days/week", "60–85% MHR", "20–60 min", "Running, swimming, cycling"], ["Resistance", "2–4 days/week", "60–80% 1RM", "20–60 min", "Weights, bodyweight"], ["Flexibility", "2–7 days/week", "Mild discomfort (not pain)", "10–30 sec hold", "Static, dynamic, PNF"]] },
                    { type: "note", content: "BMI (Body Mass Index) = Weight (kg) / Height (m)². Healthy BMI: 18.5–24.9. Limitation: does not distinguish between muscle and fat mass." },
                  ],
                  quiz: [
                    { question: "The FITT principle stands for:", options: ["Fitness, Intensity, Training, Technique", "Frequency, Intensity, Time, Type", "Focus, Intensity, Timing, Tension", "Frequency, Interval, Time, Tension"], answer: 1, explanation: "FITT = Frequency, Intensity, Time, Type — the four variables to manipulate in an exercise program." },
                    { question: "BMI is calculated as:", options: ["Weight (kg) × Height (m)", "Weight (kg) / Height (m)²", "Height (m) / Weight (kg)", "Weight (lbs) / Height (inches)²"], answer: 1, explanation: "BMI = Weight in kilograms divided by Height in meters squared (kg/m²)." },
                    { question: "According to FITT guidelines, aerobic exercise should be performed at what intensity?", options: ["20–40% MHR", "40–60% MHR", "60–85% MHR", "90–100% MHR"], answer: 2, explanation: "ACSM recommends 60–85% of Maximum Heart Rate for effective aerobic training." },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  },
];
