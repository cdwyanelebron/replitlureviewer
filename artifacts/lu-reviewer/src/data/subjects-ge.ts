import { Subject } from "./types";

export const GE_SUBJECTS: Subject[] = [
  {
    id: "ge1",
    code: "GE 1",
    title: "Understanding the Self",
    shortTitle: "GE 1",
    units: 3,
    description: "Explores the nature and dimensions of the self from philosophical, psychological, sociological, and cultural perspectives.",
    terms: [
      {
        id: "prelim", label: "PRELIM",
        modules: [
          {
            id: "ge1-m1", title: "Module 1: The Self from Various Perspectives",
            topics: [
              {
                id: "ge1-m1t1", title: "The Philosophical Self",
                content: {
                  heading: "The Philosophical Self", term: "PRELIM", module: "Module 1: The Self from Various Perspectives",
                  objectives: ["Explain philosophical views on the self", "Distinguish Socrates, Plato, Aristotle, Descartes, Hume, Locke, and Kant's concepts of self", "Analyze how philosophy shapes self-understanding"],
                  sections: [
                    { type: "h2", content: "What is the Self?" },
                    { type: "text", content: "The concept of the 'self' is one of the most fundamental questions in philosophy. It refers to the entity that is the subject of one's own experience of memory, perception, emotion, and action." },
                    { type: "h3", content: "Socrates: Know Thyself" },
                    { type: "text", content: "Socrates (470–399 BCE) believed the unexamined life is not worth living. For him, the self is primarily the soul (psyche). Self-knowledge is the highest form of wisdom, achieved through dialogue and critical questioning." },
                    { type: "h3", content: "Plato: The Immortal Soul" },
                    { type: "text", content: "Plato (428–348 BCE) distinguished between the body (mortal) and the soul (immortal). The soul has three parts: Rational (Logos), Spirited (Thymos), and Appetitive (Epithumia)." },
                    { type: "table", content: "Plato's Tripartite Soul", headers: ["Part", "Function", "Virtue"], rows: [["Rational (Logos)", "Reason and intellect", "Wisdom"], ["Spirited (Thymos)", "Emotions and courage", "Courage"], ["Appetitive (Epithumia)", "Desires and appetites", "Temperance"]] },
                    { type: "h3", content: "Aristotle: Soul as Form of the Body" },
                    { type: "text", content: "Aristotle (384–322 BCE) believed the soul and body cannot be separated. The soul is the form of the body, giving it life and function. Self is a unified substance where both work together." },
                    { type: "h3", content: "René Descartes: Cogito Ergo Sum" },
                    { type: "definition", content: "Cogito ergo sum — 'I think, therefore I am.' Descartes' method of radical doubt led to one certainty: the thinking self exists. He proposed Cartesian Dualism — mind (res cogitans) and body (res extensa) are separate substances." },
                    { type: "h3", content: "John Locke: Memory and Personal Identity" },
                    { type: "text", content: "Locke (1632–1704) defined personal identity through consciousness and memory. You are the same person throughout your life because of your continuous chain of memories and self-awareness." },
                    { type: "h3", content: "David Hume: Bundle Theory" },
                    { type: "text", content: "Hume (1711–1776) argued there is no persistent self — only a bundle of perceptions. When we introspect, we find only individual thoughts and feelings, not a unified self." },
                    { type: "h3", content: "Immanuel Kant: Transcendental Self" },
                    { type: "text", content: "Kant (1724–1804) proposed the 'I think' must accompany all representations. The self is the necessary condition for experience, organizing perceptions into a coherent whole." },
                    { type: "note", content: "Key distinction: Plato = soul survives death; Aristotle = soul inseparable from body; Descartes = mind-body dualism; Hume = no permanent self; Kant = self as organizer of experience." },
                  ],
                  quiz: [
                    { question: "Who said 'Cogito ergo sum' (I think, therefore I am)?", options: ["Plato", "Socrates", "René Descartes", "David Hume"], answer: 2, explanation: "René Descartes coined 'Cogito ergo sum' as the foundation of his rationalist philosophy after applying radical doubt." },
                    { question: "Plato's tripartite soul does NOT include which part?", options: ["Rational (Logos)", "Spirited (Thymos)", "Appetitive (Epithumia)", "Empirical (Empeiria)"], answer: 3, explanation: "Plato's three parts are Rational, Spirited, and Appetitive. 'Empirical' is not part of Plato's model." },
                    { question: "David Hume's 'Bundle Theory' states that the self is:", options: ["A unified, permanent substance", "A bundle of perceptions with no persistent self", "The immortal soul", "Identical to the physical body"], answer: 1, explanation: "Hume's Bundle Theory: No permanent self exists — just a collection of perceptions and experiences." },
                    { question: "Aristotle believed that the soul and body are:", options: ["Completely separate substances", "The soul controls the body from outside", "Inseparable — soul is the form of the body", "Identical to each other"], answer: 2, explanation: "Aristotle held that the soul cannot be separated from the body — the soul is the form that gives the body life and function." },
                  ],
                },
              },
              {
                id: "ge1-m1t2", title: "The Sociological Self",
                content: {
                  heading: "The Sociological Self", term: "PRELIM", module: "Module 1: The Self from Various Perspectives",
                  objectives: ["Explain how society shapes the self", "Distinguish the 'I' and 'Me' in Mead's theory", "Describe the Looking-Glass Self and Goffman's dramaturgical theory"],
                  sections: [
                    { type: "h2", content: "The Self in Society" },
                    { type: "text", content: "Sociology views the self not as an isolated individual but as a product of social interactions, cultural influences, and group memberships." },
                    { type: "h3", content: "George Herbert Mead: The Social Self" },
                    { type: "definition", content: "The 'I' — The spontaneous, creative, impulsive aspect of the self that acts without prior reflection." },
                    { type: "definition", content: "The 'Me' — The socialized aspect of the self reflecting society's expectations and attitudes. It is the object of one's own reflection." },
                    { type: "h3", content: "Charles Cooley: The Looking-Glass Self" },
                    { type: "list", content: "Three-step process of the Looking-Glass Self", items: ["We imagine how we appear to others", "We imagine what judgment others make of our appearance", "We develop our self-concept through perceived judgments of others"] },
                    { type: "h3", content: "Erving Goffman: Dramaturgical Theory" },
                    { type: "text", content: "Goffman compared social life to a theatrical performance. We manage impressions (impression management) to control how others perceive us, performing different roles in different social contexts." },
                    { type: "example", content: "Front stage vs. Back stage: In a job interview (front stage) you dress formally. At home (back stage) you relax. Both are 'you,' but you perform different selves." },
                    { type: "h3", content: "Agents of Socialization" },
                    { type: "table", content: "Agents of Socialization", headers: ["Agent", "Role"], rows: [["Family", "Primary socialization; first values and language"], ["School", "Formal education; rules and peer interaction"], ["Peer Groups", "Social comparison; identity testing"], ["Media", "Cultural norms and worldviews"], ["Religion", "Moral framework; sense of purpose"]] },
                  ],
                  quiz: [
                    { question: "George Herbert Mead's 'Me' represents:", options: ["The spontaneous, impulsive self", "The socialized self reflecting others' expectations", "The biological self", "The unconscious self"], answer: 1, explanation: "The 'Me' is the socialized aspect of self — the internalization of society's norms and expectations." },
                    { question: "The 'Looking-Glass Self' was proposed by:", options: ["George Herbert Mead", "Erving Goffman", "Charles Cooley", "Max Weber"], answer: 2, explanation: "Charles Cooley proposed the Looking-Glass Self — we form self-concept based on how we imagine others see us." },
                    { question: "Goffman's dramaturgical theory compares social life to:", options: ["A military operation", "A theatrical performance", "A biological organism", "An economic market"], answer: 1, explanation: "Goffman used theatrical metaphors — front stage, back stage, impression management — to explain self-presentation." },
                  ],
                },
              },
            ],
          },
          {
            id: "ge1-m2", title: "Module 2: The Physical and Digital Self",
            topics: [
              {
                id: "ge1-m2t1", title: "Body Image and the Physical Self",
                content: {
                  heading: "Body Image and the Physical Self", term: "PRELIM", module: "Module 2: The Physical and Digital Self",
                  objectives: ["Define body image and its dimensions", "Explain how media shapes body image", "Identify factors promoting positive body image"],
                  sections: [
                    { type: "h2", content: "The Physical Self" },
                    { type: "definition", content: "Body Image — The subjective perception a person has of their own physical appearance. It includes how you see, feel, and think about your body." },
                    { type: "list", content: "Four Dimensions of Body Image", items: ["Perceptual — How you see your body (may differ from reality)", "Affective — How you feel about your body", "Cognitive — What you think about your body", "Behavioral — Actions taken based on body image (exercise, dieting, avoidance)"] },
                    { type: "h3", content: "Media and Unrealistic Standards" },
                    { type: "text", content: "Mass media promotes narrow beauty standards that few naturally achieve. Constant exposure leads to body dissatisfaction, eating disorders, and low self-esteem especially among youth." },
                    { type: "note", content: "Positive body image does NOT mean thinking your body is perfect — it means accepting your body and appreciating what it can do, not just how it looks." },
                  ],
                  quiz: [
                    { question: "Which is NOT a dimension of body image?", options: ["Perceptual", "Affective", "Cognitive", "Genetic"], answer: 3, explanation: "The four dimensions are Perceptual, Affective, Cognitive, and Behavioral. Genetic is not a dimension of body image." },
                    { question: "Body image is best described as:", options: ["Actual physical measurements", "Subjective perception of one's physical appearance", "A doctor's assessment of health", "BMI calculation"], answer: 1, explanation: "Body image is subjective — how you perceive, think, and feel about your body, which may or may not match reality." },
                  ],
                },
              },
              {
                id: "ge1-m2t2", title: "The Digital Self",
                content: {
                  heading: "The Digital Self", term: "PRELIM", module: "Module 2: The Physical and Digital Self",
                  objectives: ["Define the digital self", "Explain how online identity differs from offline identity", "Analyze ethical implications of digital self-presentation"],
                  sections: [
                    { type: "h2", content: "Identity in the Digital Age" },
                    { type: "definition", content: "Digital Self — The representation of a person's identity in digital environments, including social media profiles, avatars, online behavior, and digital footprint." },
                    { type: "list", content: "Characteristics of the Digital Self", items: ["Curated — People carefully select what they share online", "Persistent — Digital content can last indefinitely", "Searchable — Online information is easily discoverable", "Scalable — A single post can reach millions", "Context collapse — Multiple audiences see the same content simultaneously"] },
                    { type: "definition", content: "Context Collapse (danah boyd) — When content designed for one audience is simultaneously viewed by many different audiences on social media, complicating self-presentation." },
                    { type: "table", content: "Online vs. Offline Identity", headers: ["Dimension", "Offline Self", "Digital Self"], rows: [["Control", "Limited — physical appearance is given", "High — can curate profile and photos"], ["Anonymity", "Difficult to maintain", "Possible through pseudonyms/avatars"], ["Audience", "Local, limited", "Global, potentially unlimited"], ["Permanence", "Fades over time", "Can be permanent and searchable"]] },
                  ],
                  quiz: [
                    { question: "'Context collapse' means:", options: ["Internet connection dropping", "Multiple different audiences viewing the same content simultaneously", "Losing your online account", "Online identity merging with offline identity"], answer: 1, explanation: "Context collapse occurs when content meant for one audience (e.g., friends) is seen by many different audiences at once on social media." },
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
            id: "ge1-m3", title: "Module 3: The Political, Moral, and Spiritual Self",
            topics: [
              {
                id: "ge1-m3t1", title: "The Political Self",
                content: {
                  heading: "The Political Self", term: "MIDTERM", module: "Module 3: The Political, Moral, and Spiritual Self",
                  objectives: ["Define political self and civic identity", "Explain rights and duties of Filipino citizens", "Describe civic participation in a democratic society"],
                  sections: [
                    { type: "h2", content: "The Self as a Political Being" },
                    { type: "text", content: "Aristotle declared humans are 'zoon politikon' — political animals. We are inherently social beings who form communities, govern ourselves, and participate in civic life." },
                    { type: "definition", content: "Political Self — The dimension of the self defined by citizenship, civic participation, political beliefs, and engagement with governance." },
                    { type: "list", content: "Rights of Filipino Citizens (1987 Constitution)", items: ["Right to vote and be elected to public office", "Right to free speech, assembly, and petition", "Right to due process and equal protection of laws", "Right to information on matters of public concern", "Right to education, health, and social services"] },
                    { type: "list", content: "Duties of Filipino Citizens", items: ["Defend the State", "Pay taxes honestly", "Register and vote in elections", "Obey the law", "Cooperate with duly constituted authorities"] },
                  ],
                  quiz: [
                    { question: "Who declared humans are 'political animals' (zoon politikon)?", options: ["Plato", "Socrates", "Aristotle", "John Locke"], answer: 2, explanation: "Aristotle declared humans are 'zoon politikon' in his work 'Politics'." },
                  ],
                },
              },
              {
                id: "ge1-m3t2", title: "The Spiritual Self",
                content: {
                  heading: "The Spiritual Self", term: "MIDTERM", module: "Module 3: The Political, Moral, and Spiritual Self",
                  objectives: ["Define spirituality and distinguish it from religion", "Explain how spirituality contributes to identity", "Describe Filipino spirituality and its cultural roots"],
                  sections: [
                    { type: "h2", content: "Understanding Spirituality" },
                    { type: "definition", content: "Spirituality — A broad concept involving a sense of connection to something greater than oneself, and a search for meaning in life. It can include religious practice but transcends organized religion." },
                    { type: "table", content: "Religion vs. Spirituality", headers: ["Dimension", "Religion", "Spirituality"], rows: [["Structure", "Organized, institutional", "Personal, individual"], ["Authority", "Scripture, clergy, tradition", "Personal experience and reflection"], ["Community", "Communal worship", "May be solitary or communal"], ["Goal", "Salvation, divine relationship", "Meaning, inner peace, connection"]] },
                    { type: "note", content: "Filipino spirituality is embedded in culture through values like 'bayanihan' (communal unity), 'pakikisama' (harmony), and 'loob' (inner self)." },
                  ],
                  quiz: [
                    { question: "Which best distinguishes spirituality from religion?", options: ["Spirituality is always atheistic", "Spirituality is personal while religion is organized and institutional", "Religion focuses on inner peace only", "Spirituality requires church attendance"], answer: 1, explanation: "Spirituality is typically personal and individual; religion involves organized, institutional practices and communal worship." },
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
            id: "ge1-m4", title: "Module 4: The Integrated Self",
            topics: [
              {
                id: "ge1-m4t1", title: "Erikson's Stages of Psychosocial Development",
                content: {
                  heading: "Erikson's Stages of Psychosocial Development", term: "FINALS", module: "Module 4: The Integrated Self",
                  objectives: ["Describe Erikson's 8 stages", "Identify the core conflict in each stage", "Apply Erikson's theory to adolescent identity formation"],
                  sections: [
                    { type: "h2", content: "Erikson's Theory" },
                    { type: "text", content: "Erik Erikson (1902–1994) proposed 8 stages of psychosocial development spanning the entire lifespan. Each stage involves a central conflict that must be resolved for healthy development." },
                    { type: "table", content: "Erikson's 8 Stages", headers: ["Stage", "Age", "Crisis", "Virtue"], rows: [["1. Infancy", "0–1", "Trust vs. Mistrust", "Hope"], ["2. Early Childhood", "1–3", "Autonomy vs. Shame", "Will"], ["3. Preschool", "3–6", "Initiative vs. Guilt", "Purpose"], ["4. School Age", "6–12", "Industry vs. Inferiority", "Competence"], ["5. Adolescence", "12–18", "Identity vs. Role Confusion", "Fidelity"], ["6. Young Adult", "18–40", "Intimacy vs. Isolation", "Love"], ["7. Middle Adult", "40–65", "Generativity vs. Stagnation", "Care"], ["8. Late Adult", "65+", "Ego Integrity vs. Despair", "Wisdom"]] },
                    { type: "note", content: "Stage 5 (Identity vs. Role Confusion) is most relevant for college freshmen — the task of forming a coherent identity. Erikson coined the term 'identity crisis' for the confusion adolescents feel while exploring different roles." },
                  ],
                  quiz: [
                    { question: "The central conflict of adolescence in Erikson's theory is:", options: ["Trust vs. Mistrust", "Autonomy vs. Shame", "Identity vs. Role Confusion", "Intimacy vs. Isolation"], answer: 2, explanation: "Stage 5 (Adolescence, 12–18 years) involves Identity vs. Role Confusion. Successfully resolving it leads to Fidelity." },
                    { question: "How many stages does Erikson's theory have?", options: ["5", "6", "7", "8"], answer: 3, explanation: "Erikson proposed 8 stages spanning from infancy to late adulthood." },
                  ],
                },
              },
              {
                id: "ge1-m4t2", title: "Maslow's Hierarchy of Needs",
                content: {
                  heading: "Maslow's Hierarchy of Needs", term: "FINALS", module: "Module 4: The Integrated Self",
                  objectives: ["Describe the five levels of Maslow's hierarchy", "Explain how needs motivate behavior", "Apply the hierarchy to understanding self-actualization"],
                  sections: [
                    { type: "h2", content: "Maslow's Theory of Motivation" },
                    { type: "text", content: "Abraham Maslow (1908–1970) proposed human needs are arranged in a hierarchical pyramid. Lower-level needs must be satisfied before people can focus on higher-level needs." },
                    { type: "table", content: "Maslow's Hierarchy of Needs", headers: ["Level", "Need Type", "Examples"], rows: [["5 (Highest)", "Self-Actualization", "Full potential, creativity, peak experiences"], ["4", "Esteem Needs", "Self-esteem, respect, achievement, status"], ["3", "Love/Belonging", "Friendship, intimacy, family"], ["2", "Safety Needs", "Security, employment, health"], ["1 (Base)", "Physiological", "Food, water, shelter, sleep"]] },
                    { type: "definition", content: "Self-Actualization — The highest level of Maslow's hierarchy. The realization of one's full potential and authentic self. The desire to become the most that one can be." },
                    { type: "note", content: "Maslow distinguished D-needs (Deficiency needs, levels 1–4) from B-needs (Being/Growth needs, level 5). D-needs arise from lack; B-needs arise from desire to grow." },
                  ],
                  quiz: [
                    { question: "What is at the top of Maslow's Hierarchy?", options: ["Safety", "Love and Belonging", "Esteem", "Self-Actualization"], answer: 3, explanation: "Self-Actualization is at the pinnacle — the fulfillment of one's full potential." },
                    { question: "According to Maslow, lower-level needs must be:", options: ["Ignored in favor of higher needs", "Satisfied before higher-level needs can be pursued", "Achieved simultaneously with higher needs", "Fulfilled after self-actualization"], answer: 1, explanation: "Deficiency needs (lower levels) must be met first before people can pursue higher-level growth needs." },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "ge2",
    code: "GE 2",
    title: "Readings in Philippine History",
    shortTitle: "GE 2",
    units: 3,
    description: "A critical study of Philippine history through primary sources and documents, examining historical events, movements, and their significance to contemporary Filipino society.",
    terms: [
      {
        id: "prelim", label: "PRELIM",
        modules: [
          {
            id: "ge2-m1", title: "Module 1: Historiography and Primary Sources",
            topics: [
              {
                id: "ge2-m1t1", title: "Nature of History and Historiography",
                content: {
                  heading: "Nature of History and Historiography", term: "PRELIM", module: "Module 1: Historiography and Primary Sources",
                  objectives: ["Define history and historiography", "Distinguish primary from secondary sources", "Explain the importance of critical reading of historical documents"],
                  sections: [
                    { type: "h2", content: "What is History?" },
                    { type: "definition", content: "History — The study of past human events, societies, and civilizations, primarily through written records and other evidence. It is not simply the past, but an interpretation of the past." },
                    { type: "definition", content: "Historiography — The study of how history is written, including the methods, sources, and perspectives historians use. It asks: Who wrote history? For what purpose? Whose voices are included or excluded?" },
                    { type: "h3", content: "Primary vs. Secondary Sources" },
                    { type: "table", content: "Types of Historical Sources", headers: ["Type", "Definition", "Examples"], rows: [["Primary Source", "Original, first-hand documents from the period being studied", "Diaries, letters, official documents, photographs, artifacts, speeches"], ["Secondary Source", "Interpretations or analyses of primary sources, written after the fact", "History books, academic articles, documentaries, biographies"]] },
                    { type: "h3", content: "Why Reading Primary Sources Matters" },
                    { type: "text", content: "Primary sources allow us to hear directly from those who experienced historical events. They reveal perspectives, biases, and contexts that secondary interpretations may distort or omit." },
                    { type: "note", content: "The CHED memorandum requiring this course emphasizes reading primary sources because Philippine history has often been written from colonial perspectives. Understanding these biases helps develop critical historical consciousness." },
                  ],
                  quiz: [
                    { question: "Which is a PRIMARY source of Philippine history?", options: ["A history textbook about the Philippine Revolution", "José Rizal's diary entries written during his exile in Dapitan", "A documentary film about the Katipunan", "An academic article about Andres Bonifacio"], answer: 1, explanation: "A primary source is a first-hand account from the period. Rizal's diary entries written during his exile are an original, first-hand document." },
                    { question: "Historiography is best defined as:", options: ["The memorization of historical dates and events", "The study of how history is written, including methods and perspectives of historians", "The collection of primary sources in a library", "A timeline of Philippine historical events"], answer: 1, explanation: "Historiography examines how history is written — who writes it, what sources they use, what perspectives and biases shape the narrative." },
                  ],
                },
              },
              {
                id: "ge2-m1t2", title: "Pre-Colonial Philippines",
                content: {
                  heading: "Pre-Colonial Philippines", term: "PRELIM", module: "Module 1: Historiography and Primary Sources",
                  objectives: ["Describe the social, political, and economic conditions of pre-colonial Philippines", "Identify key features of Barangay society", "Explain trade relations and cultural practices of pre-colonial Filipinos"],
                  sections: [
                    { type: "h2", content: "Pre-Colonial Philippine Society" },
                    { type: "text", content: "Before Spanish colonization in 1565, the Philippine archipelago was home to sophisticated societies with complex political structures, trade networks, and cultural traditions." },
                    { type: "h3", content: "The Barangay System" },
                    { type: "definition", content: "Barangay — The basic political and social unit of pre-colonial Philippine society, consisting of 30 to 100 families led by a Datu (chieftain). Named after the boats (balangay) used by Malay settlers." },
                    { type: "table", content: "Social Classes in Pre-Colonial Philippines", headers: ["Class", "Description"], rows: [["Datu (Nobility)", "Chiefs/rulers; owned land and controlled resources"], ["Timawa (Freemen)", "Free people with rights; warriors and craftsmen"], ["Alipin (Dependents)", "Debt servants; not necessarily slaves — could earn freedom"]] },
                    { type: "h3", content: "Trade and Culture" },
                    { type: "list", content: "Key Features of Pre-Colonial Philippines", items: ["Active trade with China, India, Arabia, Borneo, and Java", "The Baybayin script used for writing", "Gold ornaments, weapons, and textiles produced", "Oral literature: epics like Darangen (Maranao), Biag ni Lam-ang (Ilocano), Hinilawod (Visayan)", "Islam established in Mindanao by the 14th century (Shariff Kabungsuwan)"] },
                    { type: "note", content: "Pre-colonial Filipinos were NOT primitive — they had sophisticated governance, rich oral and written literature, active international trade, and well-developed social systems." },
                  ],
                  quiz: [
                    { question: "What was the basic political unit of pre-colonial Philippine society?", options: ["Kingdom", "Barangay", "Province", "Sultanate"], answer: 1, explanation: "The barangay was the basic political and social unit, consisting of 30–100 families led by a Datu." },
                    { question: "The Alipin in pre-colonial Philippines were:", options: ["Ruling nobility", "Warriors and freemen", "Debt servants (not necessarily permanent slaves)", "Foreign traders"], answer: 2, explanation: "Alipin were dependents or debt servants — not lifelong hereditary slaves. They could earn their freedom." },
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
            id: "ge2-m2", title: "Module 2: The Spanish Colonial Period",
            topics: [
              {
                id: "ge2-m2t1", title: "Spanish Colonization (1565–1898)",
                content: {
                  heading: "Spanish Colonization (1565–1898)", term: "MIDTERM", module: "Module 2: The Spanish Colonial Period",
                  objectives: ["Trace the events of Spanish colonization", "Explain the Reduccion policy and its effects", "Describe the role of the Catholic Church in colonial society"],
                  sections: [
                    { type: "h2", content: "The Spanish Colonial Period" },
                    { type: "text", content: "Spain colonized the Philippines for 333 years (1565–1898). The colonization was justified by the twin goals of 'God and Gold' — spreading Catholicism and extracting economic resources." },
                    { type: "h3", content: "Key Events" },
                    { type: "table", content: "Key Events in Spanish Colonization", headers: ["Year", "Event"], rows: [["1521", "Ferdinand Magellan arrives; killed in Battle of Mactan (Lapu-Lapu)"], ["1565", "Miguel López de Legazpi establishes first permanent Spanish settlement in Cebu"], ["1571", "Manila established as capital of the Philippines"], ["1574", "Limahong's attack on Manila repelled"], ["1896", "Philippine Revolution begins (Katipunan, Andres Bonifacio"], ["1898", "Treaty of Paris — Spain cedes Philippines to USA for $20 million"]] },
                    { type: "h3", content: "Reduccion Policy" },
                    { type: "definition", content: "Reduccion — Spanish colonial policy of forcibly relocating scattered indigenous communities into centralized towns (pueblos) near churches, to facilitate religious conversion, taxation, and forced labor (polo y servicio)." },
                    { type: "h3", content: "The Role of the Catholic Church" },
                    { type: "list", content: "Functions of the Church in Colonial Philippines", items: ["Evangelization: Converting Filipinos to Catholicism", "Education: Establishing schools and universities (UST founded 1611)", "Cultural influence: Replacing indigenous traditions with Catholic practices", "Political power: Friars became powerful figures, often defying civil authorities", "Record keeping: Baptismal, marriage, and death registers"] },
                  ],
                  quiz: [
                    { question: "In what year did Miguel López de Legazpi establish the first permanent Spanish settlement in the Philippines?", options: ["1521", "1565", "1571", "1600"], answer: 1, explanation: "Legazpi established the first permanent settlement in Cebu in 1565. In 1571, Manila was established as the capital." },
                    { question: "The Reduccion policy involved:", options: ["Teaching Filipinos Spanish language", "Forcibly relocating scattered communities into centralized towns", "Granting land to Filipino nobles", "Establishing trade routes with China"], answer: 1, explanation: "Reduccion forcibly moved dispersed indigenous communities into centralized towns near churches to facilitate conversion, taxation, and forced labor." },
                  ],
                },
              },
              {
                id: "ge2-m2t2", title: "The Philippine Revolution and José Rizal",
                content: {
                  heading: "The Philippine Revolution and José Rizal", term: "MIDTERM", module: "Module 2: The Spanish Colonial Period",
                  objectives: ["Explain the causes of the Philippine Revolution", "Analyze Rizal's contribution to Philippine nationalism", "Describe the Katipunan and Andres Bonifacio's role"],
                  sections: [
                    { type: "h2", content: "The Birth of Philippine Nationalism" },
                    { type: "h3", content: "José Rizal: The National Hero" },
                    { type: "text", content: "José Protacio Rizal Mercado y Alonso Realonda (1861–1896) was a polymath — physician, novelist, poet, sculptor, and political activist. He advocated reforms through peaceful means rather than armed revolution." },
                    { type: "list", content: "Key Works of José Rizal", items: ["Noli Me Tangere (1887) — Exposed social cancer of Spanish colonial society", "El Filibusterismo (1891) — Darker sequel showing consequences of oppression", "La Liga Filipina (1892) — Civic organization promoting reforms; led to his exile in Dapitan", "Annotations to Morga's Sucesos — Proved Philippines had sophisticated pre-colonial civilization"] },
                    { type: "h3", content: "The Katipunan and Andres Bonifacio" },
                    { type: "definition", content: "Katipunan (KKK — Kataastaasan, Kagalanggalangang Katipunan ng mga Anak ng Bayan) — Secret revolutionary society founded by Andres Bonifacio on July 7, 1892. Unlike Rizal's reformist approach, the Katipunan advocated armed revolution for independence." },
                    { type: "h3", content: "The Cry of Pugad Lawin (1896)" },
                    { type: "text", content: "On August 19–23, 1896, Bonifacio led Katipuneros in tearing their cedulas (tax certificates) — symbolically rejecting Spanish authority. This is considered the start of the Philippine Revolution." },
                    { type: "note", content: "Rizal was executed on December 30, 1896 by the Spanish authorities, accused of inciting rebellion. He is now commemorated as National Heroes' Day — December 30 (Rizal Day)." },
                  ],
                  quiz: [
                    { question: "Rizal's first novel, which exposed the social cancer of Spanish colonial society, is:", options: ["El Filibusterismo", "Noli Me Tangere", "La Liga Filipina", "Sucesos de las Islas Filipinas"], answer: 1, explanation: "Noli Me Tangere (1887) was Rizal's first novel, exposing the abuses of Spanish colonial rule and the Church." },
                    { question: "The Katipunan was founded by:", options: ["José Rizal", "Emilio Aguinaldo", "Andres Bonifacio", "Apolinario Mabini"], answer: 2, explanation: "Andres Bonifacio founded the Katipunan (KKK) on July 7, 1892 as a secret revolutionary society advocating armed independence." },
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
            id: "ge2-m3", title: "Module 3: American Colonial Period and Independence",
            topics: [
              {
                id: "ge2-m3t1", title: "American Colonial Period (1898–1946)",
                content: {
                  heading: "American Colonial Period (1898–1946)", term: "FINALS", module: "Module 3: American Colonial Period and Independence",
                  objectives: ["Explain the circumstances of American colonization", "Describe American colonial policies and their long-term effects", "Analyze the Philippine–American War"],
                  sections: [
                    { type: "h2", content: "The American Period" },
                    { type: "text", content: "After the Spanish-American War (1898), Spain ceded the Philippines to the USA for $20 million through the Treaty of Paris. Filipino revolutionary forces had already declared independence on June 12, 1898, but were not recognized." },
                    { type: "h3", content: "Philippine-American War (1899–1913)" },
                    { type: "text", content: "The Philippine-American War began on February 4, 1899. Often called 'America's forgotten war,' it was marked by intense guerrilla warfare, widespread civilian casualties, and US military atrocities including the water cure (waterboarding) and the Samar massacre." },
                    { type: "h3", content: "American Colonial Policies" },
                    { type: "list", content: "Key American Policies", items: ["Public education: English as medium of instruction; Thomasites (teacher volunteers) brought from USA", "Commonwealth Government: Established 1935, preparing for full independence", "Jones Act (1916): Established Philippine legislature", "Tydings-McDuffie Act (1934): Promised independence after 10 years of Commonwealth status", "Economic dependency: Parity rights giving Americans equal economic rights as Filipinos"] },
                    { type: "h3", content: "Independence (July 4, 1946)" },
                    { type: "text", content: "The Philippines gained formal independence on July 4, 1946 (later changed to June 12 — the date Aguinaldo declared independence in 1898). Manuel Roxas became the first President of the Third Republic." },
                    { type: "note", content: "The American colonial period's most lasting legacy is the English language and public education system. However, it also created neocolonial economic dependence that continues to affect the Philippines today." },
                  ],
                  quiz: [
                    { question: "The Treaty of Paris (1898) resulted in:", options: ["Philippine independence from Spain", "Spain ceding the Philippines to the USA for $20 million", "USA declaring war on the Philippines", "Establishment of the Commonwealth Government"], answer: 1, explanation: "The Treaty of Paris (December 10, 1898) ended the Spanish-American War, with Spain ceding the Philippines to the USA for $20 million." },
                    { question: "The Tydings-McDuffie Act (1934) promised:", options: ["Immediate Philippine independence", "10 years of Commonwealth status followed by independence", "Permanent American sovereignty over the Philippines", "English as the official language"], answer: 1, explanation: "The Tydings-McDuffie Act promised independence after 10 years of Commonwealth status, leading to independence on July 4, 1946." },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "ge3",
    code: "GE 3",
    title: "The Contemporary World",
    shortTitle: "GE 3",
    units: 3,
    description: "Examines globalization and its political, economic, social, and cultural dimensions, and the challenges and opportunities it presents to nations and individuals.",
    terms: [
      {
        id: "prelim", label: "PRELIM",
        modules: [
          {
            id: "ge3-m1", title: "Module 1: Globalization",
            topics: [
              {
                id: "ge3-m1t1", title: "Nature and Dimensions of Globalization",
                content: {
                  heading: "Nature and Dimensions of Globalization", term: "PRELIM", module: "Module 1: Globalization",
                  objectives: ["Define globalization and its key dimensions", "Trace the historical development of globalization", "Analyze the positive and negative effects of globalization"],
                  sections: [
                    { type: "h2", content: "What is Globalization?" },
                    { type: "definition", content: "Globalization — The process of increasing interconnectedness and interdependence among countries through the movement of goods, services, capital, people, ideas, and information across borders." },
                    { type: "h3", content: "Dimensions of Globalization" },
                    { type: "table", content: "Dimensions of Globalization", headers: ["Dimension", "Description", "Example"], rows: [["Economic", "Free trade, global markets, multinational corporations", "WTO, NAFTA, BPO industry"], ["Political", "International organizations, global governance", "UN, ASEAN, WHO"], ["Cultural", "Spread of values, ideas, music, food across borders", "K-pop, McDonald's globally"], ["Technological", "Internet, telecommunications, digital revolution", "Social media, e-commerce"], ["Environmental", "Global climate change, shared ecological challenges", "Paris Agreement"]] },
                    { type: "h3", content: "Positive and Negative Effects" },
                    { type: "list", content: "Positive Effects of Globalization", items: ["Economic growth through trade and investment", "Spread of technology and innovation", "Greater cultural exchange and understanding", "Access to global information and education", "Job creation through foreign investment (e.g., BPO in Philippines)"] },
                    { type: "list", content: "Negative Effects of Globalization", items: ["Inequality: benefits distributed unevenly between rich and poor nations", "Cultural homogenization: local cultures being replaced by global (often Western) culture", "Environmental degradation: increased production and consumption", "Brain drain: skilled workers leaving developing countries", "Loss of economic sovereignty: small countries vulnerable to global market forces"] },
                    { type: "note", content: "The Philippines is significantly affected by globalization — OFW remittances are a major part of GDP, the BPO industry employs millions, and Filipino culture has both spread globally and been influenced by global trends." },
                  ],
                  quiz: [
                    { question: "Which is a NEGATIVE effect of globalization?", options: ["Increased trade and economic growth", "Cultural homogenization threatening local cultures", "Access to global information", "Spread of medical innovations"], answer: 1, explanation: "Cultural homogenization — the spread of global (often Western) culture at the expense of local cultures — is a major criticism of globalization." },
                    { question: "The economic dimension of globalization includes:", options: ["Spread of K-pop worldwide", "Free trade, multinational corporations, and global markets", "International organizations like the UN", "Climate change agreements"], answer: 1, explanation: "The economic dimension involves trade liberalization, multinational corporations, global markets, and organizations like the WTO." },
                  ],
                },
              },
              {
                id: "ge3-m1t2", title: "Theories of Globalization",
                content: {
                  heading: "Theories of Globalization", term: "PRELIM", module: "Module 1: Globalization",
                  objectives: ["Distinguish hyperglobalist, skeptic, and transformationalist perspectives", "Analyze different theoretical approaches to globalization", "Apply globalization theories to the Philippine context"],
                  sections: [
                    { type: "h2", content: "Theoretical Perspectives on Globalization" },
                    { type: "table", content: "Three Main Perspectives on Globalization", headers: ["Perspective", "Key Claim", "Proponents"], rows: [["Hyperglobalists", "Globalization is unprecedented; nation-states are becoming less relevant; one global economy is forming", "Kenichi Ohmae, Francis Fukuyama"], ["Skeptics", "Globalization is exaggerated; nation-states remain powerful; economic interdependence is not new", "Paul Hirst, Grahame Thompson"], ["Transformationalists", "Globalization is real but uneven; states are being transformed, not eliminated; outcomes are uncertain", "Anthony Giddens, David Held"]] },
                    { type: "definition", content: "World-System Theory (Immanuel Wallerstein) — Divides the world into Core (wealthy, industrialized), Semi-periphery (middle-income), and Periphery (poor, raw materials exporter) nations. Globalization reinforces this hierarchy." },
                    { type: "note", content: "The Philippines is generally classified as a semi-periphery nation — developing economically but still dependent on core nations for technology, capital, and markets." },
                  ],
                  quiz: [
                    { question: "Hyperglobalists believe that:", options: ["Globalization is exaggerated and not new", "Nation-states remain the dominant political unit", "Globalization is unprecedented and is creating a single global economy", "Globalization has uncertain and uneven outcomes"], answer: 2, explanation: "Hyperglobalists argue globalization is creating a single global economy where nation-states are becoming less relevant." },
                    { question: "According to World-System Theory, the Philippines is best classified as:", options: ["A Core nation", "A Semi-periphery nation", "A Periphery nation", "A Supra-national state"], answer: 1, explanation: "The Philippines is generally classified as semi-periphery — developing economically but still dependent on core nations." },
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
            id: "ge3-m2", title: "Module 2: Global Politics and International Organizations",
            topics: [
              {
                id: "ge3-m2t1", title: "International Organizations and Global Governance",
                content: {
                  heading: "International Organizations and Global Governance", term: "MIDTERM", module: "Module 2: Global Politics and International Organizations",
                  objectives: ["Identify major international organizations and their functions", "Explain the role of the United Nations", "Describe ASEAN and its significance to the Philippines"],
                  sections: [
                    { type: "h2", content: "International Organizations" },
                    { type: "definition", content: "International Organization — An entity established by treaties or agreements between two or more nations to coordinate collective action on shared issues, transcending national boundaries." },
                    { type: "table", content: "Major International Organizations", headers: ["Organization", "Founded", "Purpose"], rows: [["United Nations (UN)", "1945", "Maintain international peace and security; promote human rights"], ["World Trade Organization (WTO)", "1995", "Regulate international trade; reduce trade barriers"], ["International Monetary Fund (IMF)", "1945", "Provide financial assistance; promote monetary cooperation"], ["World Bank", "1944", "Provide loans and assistance to developing countries"], ["ASEAN", "1967", "Promote economic, political, and cultural cooperation in Southeast Asia"], ["WHO", "1948", "Direct and coordinate international health efforts"]] },
                    { type: "h3", content: "The United Nations System" },
                    { type: "list", content: "Key UN Bodies", items: ["General Assembly — All member states; deliberative body", "Security Council — 5 permanent members (P5) + 10 rotating; maintains peace", "International Court of Justice — Settles disputes between nations", "UNICEF — Children's rights and welfare", "UNHCR — Refugee protection"] },
                    { type: "h3", content: "ASEAN (Association of Southeast Asian Nations)" },
                    { type: "text", content: "Founded on August 8, 1967 (Bangkok Declaration). Original members: Philippines, Thailand, Malaysia, Singapore, Indonesia. Now 10 members including Vietnam, Cambodia, Myanmar, Laos, Brunei. ASEAN promotes economic integration (AFTA), political security, and cultural exchange." },
                  ],
                  quiz: [
                    { question: "ASEAN was founded in:", options: ["1945", "1963", "1967", "1975"], answer: 2, explanation: "ASEAN was founded on August 8, 1967 through the Bangkok Declaration. The Philippines was one of the five original founding members." },
                    { question: "Which UN body is responsible for maintaining international peace and security?", options: ["General Assembly", "Security Council", "UNICEF", "International Court of Justice"], answer: 1, explanation: "The UN Security Council has primary responsibility for maintaining international peace and security, with 5 permanent members (USA, Russia, UK, France, China)." },
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
            id: "ge3-m3", title: "Module 3: Global Challenges",
            topics: [
              {
                id: "ge3-m3t1", title: "Global Issues: Human Rights and Migration",
                content: {
                  heading: "Global Issues: Human Rights and Migration", term: "FINALS", module: "Module 3: Global Challenges",
                  objectives: ["Explain the concept of universal human rights", "Describe global migration patterns and causes", "Analyze the situation of OFWs in the context of globalization"],
                  sections: [
                    { type: "h2", content: "Human Rights" },
                    { type: "definition", content: "Human Rights — Universal rights inherent to all human beings regardless of race, sex, nationality, ethnicity, language, religion, or any other status. Enshrined in the Universal Declaration of Human Rights (UDHR, 1948)." },
                    { type: "list", content: "Three Generations of Human Rights", items: ["First generation: Civil and political rights (right to life, free speech, vote)", "Second generation: Economic, social, and cultural rights (right to education, work, health)", "Third generation: Solidarity rights (right to development, peace, clean environment)"] },
                    { type: "h3", content: "Global Migration" },
                    { type: "text", content: "Migration — the movement of people from one place to another — is driven by push factors (poverty, conflict, climate change) and pull factors (better opportunities, safety, education)." },
                    { type: "h3", content: "OFWs and the Philippines" },
                    { type: "text", content: "The Philippines is one of the world's largest exporters of labor. Overseas Filipino Workers (OFWs) numbered approximately 2.2 million in 2022. Remittances account for about 8-10% of Philippine GDP, making OFW labor a critical economic pillar." },
                    { type: "note", content: "The Philippines enacted RA 10022 (Migrant Workers and Overseas Filipinos Act) to protect OFWs. POEA (Philippine Overseas Employment Administration) regulates deployment." },
                  ],
                  quiz: [
                    { question: "The Universal Declaration of Human Rights (UDHR) was adopted in:", options: ["1945", "1948", "1955", "1966"], answer: 1, explanation: "The UDHR was adopted by the UN General Assembly on December 10, 1948 — now celebrated as Human Rights Day." },
                    { question: "OFW remittances represent approximately what percentage of Philippine GDP?", options: ["1-2%", "3-5%", "8-10%", "15-20%"], answer: 2, explanation: "OFW remittances account for approximately 8-10% of Philippine GDP, making them a critical pillar of the Philippine economy." },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "ge4",
    code: "GE 4",
    title: "Purposive Communication",
    shortTitle: "GE 4",
    units: 3,
    description: "Develops communication skills for various purposes using various registers of spoken and written language across different contexts and audiences.",
    terms: [
      {
        id: "prelim", label: "PRELIM",
        modules: [
          {
            id: "ge4-m1", title: "Module 1: Nature and Elements of Communication",
            topics: [
              {
                id: "ge4-m1t1", title: "Communication Models",
                content: {
                  heading: "Communication Models", term: "PRELIM", module: "Module 1: Nature and Elements of Communication",
                  objectives: ["Define communication and its elements", "Explain linear, interactive, and transactional models", "Identify barriers to effective communication"],
                  sections: [
                    { type: "h2", content: "What is Communication?" },
                    { type: "definition", content: "Communication — The process of creating, sending, receiving, and interpreting messages through various channels between senders and receivers, influenced by context and noise." },
                    { type: "table", content: "Elements of Communication", headers: ["Element", "Definition", "Example"], rows: [["Sender", "Originator of the message", "A professor lecturing"], ["Message", "Idea or information transmitted", "Course content"], ["Channel", "Medium of transmission", "Speech, writing, video"], ["Receiver", "Recipient of the message", "Students in class"], ["Feedback", "Receiver's response", "Students asking questions"], ["Noise", "Any interference distorting the message", "Background noise, jargon"], ["Context", "Situation surrounding communication", "Classroom setting"]] },
                    { type: "h3", content: "Shannon-Weaver Model (Linear)" },
                    { type: "text", content: "Developed in 1949, this model views communication as one-way: sender encodes → channel → receiver decodes. Noise can disrupt the process. Limitation: no feedback, doesn't reflect real interaction." },
                    { type: "h3", content: "Schramm's Interactive Model" },
                    { type: "definition", content: "Field of Experience — The sum of a person's experiences, values, beliefs, and cultural background that affects how they encode and decode messages. Communication is most effective when sender and receiver have overlapping fields of experience." },
                    { type: "h3", content: "Transactional Model (Barnlund, 1970)" },
                    { type: "text", content: "Communication is simultaneous, ongoing, and mutually influential. Both parties are simultaneously senders and receivers. Most accurate model of real human communication." },
                  ],
                  quiz: [
                    { question: "Which model introduced the concept of 'feedback'?", options: ["Shannon-Weaver Model", "Schramm's Interactive Model", "Aristotle's Model", "Barnlund's Model"], answer: 1, explanation: "Schramm's Interactive Model (1954) added feedback, making communication a two-way process." },
                    { question: "Noise in communication refers to:", options: ["Loud background sounds only", "Any interference that distorts the message", "The speaker's tone of voice", "The length of the message"], answer: 1, explanation: "Noise includes any factor — physical, psychological, or semantic — that distorts or interferes with the intended message." },
                  ],
                },
              },
              {
                id: "ge4-m1t2", title: "Types of Communication",
                content: {
                  heading: "Types and Forms of Communication", term: "PRELIM", module: "Module 1: Nature and Elements of Communication",
                  objectives: ["Distinguish verbal and non-verbal communication", "Identify types by context", "Explain non-verbal cues and proxemics"],
                  sections: [
                    { type: "h2", content: "Types of Communication" },
                    { type: "table", content: "Verbal vs. Non-Verbal", headers: ["Type", "Definition", "Examples"], rows: [["Verbal", "Use of words (spoken or written)", "Speech, letters, text messages"], ["Non-Verbal", "Without words", "Facial expressions, gestures, eye contact, silence"]] },
                    { type: "text", content: "Research by Albert Mehrabian: In face-to-face communication — 7% from words, 38% from tone of voice, 55% from non-verbal cues (body language)." },
                    { type: "list", content: "Types of Non-Verbal Communication", items: ["Kinesics — Body movements, gestures, facial expressions", "Proxemics — Use of physical space and distance (Edward T. Hall)", "Haptics — Communication through touch", "Paralanguage — Vocal qualities (tone, pitch, speed, volume)", "Chronemics — Use of time in communication"] },
                    { type: "table", content: "Proxemic Zones (Edward T. Hall)", headers: ["Zone", "Distance", "Context"], rows: [["Intimate", "0–18 inches", "Close friends, family, intimate relationships"], ["Personal", "18 inches – 4 feet", "Friends and acquaintances"], ["Social", "4–12 feet", "Formal interactions, colleagues"], ["Public", "12+ feet", "Public speaking, large gatherings"]] },
                    { type: "list", content: "Communication Contexts", items: ["Intrapersonal — Communication within oneself (self-talk)", "Interpersonal — Between two people", "Small Group — 3–15 people", "Public — One speaker to large audience", "Mass Communication — Via media to large anonymous audiences"] },
                  ],
                  quiz: [
                    { question: "According to Mehrabian, body language accounts for what percentage of face-to-face communication?", options: ["7%", "38%", "55%", "70%"], answer: 2, explanation: "Mehrabian: 55% from body language, 38% from tone, 7% from words." },
                    { question: "Proxemics refers to:", options: ["Use of time in communication", "Communication through touch", "Use of physical space and distance", "Vocal qualities like tone and pitch"], answer: 2, explanation: "Proxemics (Edward T. Hall) is the study of how people use personal space and distance in communication." },
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
            id: "ge4-m2", title: "Module 2: Academic and Professional Communication",
            topics: [
              {
                id: "ge4-m2t1", title: "Academic Writing",
                content: {
                  heading: "Academic Writing Skills", term: "MIDTERM", module: "Module 2: Academic and Professional Communication",
                  objectives: ["Apply conventions of academic writing", "Distinguish academic from non-academic texts", "Write organized paragraphs using PEEL structure"],
                  sections: [
                    { type: "h2", content: "Academic Writing" },
                    { type: "text", content: "Academic writing is a formal style used in universities and scholarly publications. Characterized by clarity, precision, evidence-based arguments, and citation standards." },
                    { type: "list", content: "Characteristics of Academic Writing", items: ["Formal register and objective tone", "Evidence-based claims with proper citation", "Clear structure: introduction, body, conclusion", "Precise and concise language", "Third-person perspective (generally)", "Avoidance of contractions and colloquialisms"] },
                    { type: "definition", content: "PEEL Paragraph Structure — Point (topic sentence) → Evidence (supporting data/quotes) → Explanation (analysis of evidence) → Link (connection back to thesis or next paragraph)." },
                    { type: "example", content: "Point: Social media negatively affects academic performance. Evidence: Junco (2012) found students who used Facebook while studying scored lower on exams. Explanation: Multitasking with social media fragments attention, reducing depth of learning. Link: Thus, digital media time management is essential for academic success." },
                  ],
                  quiz: [
                    { question: "In PEEL, what does the second 'E' stand for?", options: ["Evidence", "Explanation", "Example", "Elaborate"], answer: 1, explanation: "PEEL: Point, Evidence, Explanation, Link. The second E is 'Explanation' — analyzing the evidence." },
                    { question: "Academic writing is characterized by:", options: ["Informal tone and personal opinions", "Formal register and evidence-based arguments", "Creative storytelling", "Casual language and contractions"], answer: 1, explanation: "Academic writing uses formal register, objective tone, and evidence-based arguments with proper citations." },
                  ],
                },
              },
              {
                id: "ge4-m2t2", title: "Oral Communication and Public Speaking",
                content: {
                  heading: "Oral Communication and Public Speaking", term: "MIDTERM", module: "Module 2: Academic and Professional Communication",
                  objectives: ["Identify characteristics of effective oral communication", "Apply strategies for public speaking", "Manage communication anxiety"],
                  sections: [
                    { type: "h2", content: "Oral Communication" },
                    { type: "text", content: "Oral communication involves spoken language — conversations, presentations, speeches, debates, and discussions. Effectiveness depends on both verbal content and non-verbal delivery." },
                    { type: "h3", content: "Types of Speeches by Purpose" },
                    { type: "table", content: "Types of Speeches", headers: ["Type", "Purpose", "Example"], rows: [["Informative", "Share information or educate", "Explaining how the internet works"], ["Persuasive", "Change attitudes or motivate action", "Campaign speech"], ["Entertainment", "Amuse or entertain the audience", "Wedding toast"], ["Ceremonial", "Mark a special occasion", "Graduation speech"]] },
                    { type: "h3", content: "Overcoming Communication Anxiety" },
                    { type: "list", content: "Strategies", items: ["Thorough preparation and rehearsal", "Visualization of successful performance", "Deep breathing and relaxation techniques", "Focus on the message, not on yourself", "Start with a positive self-talk routine"] },
                    { type: "note", content: "Glossophobia (fear of public speaking) is among the most common phobias. Research shows 75% of people experience anxiety about public speaking. It can be managed through systematic preparation and exposure." },
                  ],
                  quiz: [
                    { question: "A speech intended to change the audience's opinion is called:", options: ["Informative speech", "Persuasive speech", "Ceremonial speech", "Entertainment speech"], answer: 1, explanation: "A persuasive speech aims to change attitudes, beliefs, or behaviors or to motivate action." },
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
            id: "ge4-m3", title: "Module 3: Communication for Specific Purposes",
            topics: [
              {
                id: "ge4-m3t1", title: "Research Writing and Citation",
                content: {
                  heading: "Research Writing and Citation", term: "FINALS", module: "Module 3: Communication for Specific Purposes",
                  objectives: ["Apply APA citation format", "Distinguish plagiarism from proper citation", "Write a proper reference list"],
                  sections: [
                    { type: "h2", content: "Research Writing" },
                    { type: "definition", content: "Plagiarism — Presenting someone else's work, ideas, or words as your own without proper attribution. It is academic dishonesty and violates intellectual property rights." },
                    { type: "h3", content: "APA Citation Format (7th Edition)" },
                    { type: "example", content: "Book: Author, A. A. (Year). Title of work: Capital letter also for subtitle. Publisher.\n\nJournal: Author, A. A. (Year). Title of article. Journal Name, volume(issue), page–page. https://doi.org/xxxxx\n\nWebsite: Author, A. A. (Year, Month Day). Title of page. Site Name. URL" },
                    { type: "h3", content: "In-text Citations (APA)" },
                    { type: "list", content: "APA In-text Citation Rules", items: ["One author: (Santos, 2023) or Santos (2023) argued...", "Two authors: (Santos & Reyes, 2023)", "Three or more authors: (Santos et al., 2023)", "Direct quote: (Santos, 2023, p. 45)", "No author: (Title of Work, Year)"] },
                  ],
                  quiz: [
                    { question: "In APA format with three or more authors, how do you cite in-text?", options: ["List all authors' names", "Use 'et al.' after the first author", "Use only the title of the work", "Use the publisher's name"], answer: 1, explanation: "APA format with 3+ authors: (First Author et al., Year) — et al. means 'and others'." },
                    { question: "Plagiarism means:", options: ["Writing too long a paper", "Presenting someone else's work or ideas as your own", "Using too many quotes in a paper", "Writing about controversial topics"], answer: 1, explanation: "Plagiarism is presenting another's work, ideas, or words as your own without proper attribution." },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "ge5",
    code: "GE 5",
    title: "Art Appreciation",
    shortTitle: "GE 5",
    units: 3,
    description: "Develops appreciation of the arts through understanding the nature, elements, and principles of art, and exploring Philippine and world artistic traditions.",
    terms: [
      {
        id: "prelim", label: "PRELIM",
        modules: [
          {
            id: "ge5-m1", title: "Module 1: Nature and Scope of Art",
            topics: [
              {
                id: "ge5-m1t1", title: "Definition and Functions of Art",
                content: {
                  heading: "Definition and Functions of Art", term: "PRELIM", module: "Module 1: Nature and Scope of Art",
                  objectives: ["Define art and distinguish it from non-art", "Identify the functions of art in society", "Differentiate fine arts, applied arts, and performing arts"],
                  sections: [
                    { type: "h2", content: "What is Art?" },
                    { type: "definition", content: "Art — Human activity and its product which involves technical and creative skill, imagination, or expression. It is the communication of ideas, emotions, or a worldview through an aesthetic medium." },
                    { type: "h3", content: "Functions of Art" },
                    { type: "table", content: "Functions of Art", headers: ["Function", "Description", "Example"], rows: [["Personal", "Expression of inner feelings and ideas", "A painter expressing grief through abstract work"], ["Social", "Reflects and shapes cultural values and identity", "José Rizal's novels as social commentary"], ["Physical", "Serves a practical purpose beyond aesthetics", "Architecture, furniture design"], ["Political", "Challenges power or promotes change", "Protest murals, political cartoons"], ["Spiritual", "Serves religious or transcendental purposes", "Church art, sacred music"]] },
                    { type: "h3", content: "Classifications of Art" },
                    { type: "list", content: "Major Art Classifications", items: ["Fine Arts — Created primarily for aesthetic value: painting, sculpture, drawing, printmaking", "Applied Arts — Art with functional purpose: architecture, industrial design, fashion, ceramics", "Performing Arts — Time-based, performed before audience: music, theater, dance, film", "Literary Arts — Written expression: poetry, fiction, drama, non-fiction"] },
                  ],
                  quiz: [
                    { question: "Which is an example of APPLIED arts?", options: ["Portrait painting", "Symphony music", "Ballet performance", "Furniture design"], answer: 3, explanation: "Applied arts have a functional purpose beyond aesthetics. Furniture design serves both practical and aesthetic functions." },
                    { question: "The POLITICAL function of art involves:", options: ["Expressing personal emotions", "Serving religious purposes", "Challenging power structures or promoting social change", "Making art for commercial use"], answer: 2, explanation: "Art serves a political function when it challenges power, promotes change, or makes a statement about governance and society." },
                  ],
                },
              },
              {
                id: "ge5-m1t2", title: "Elements and Principles of Art",
                content: {
                  heading: "Elements and Principles of Art", term: "PRELIM", module: "Module 1: Nature and Scope of Art",
                  objectives: ["Identify the elements of art", "Describe the principles of design", "Apply knowledge of elements and principles in analyzing artworks"],
                  sections: [
                    { type: "h2", content: "Elements of Art" },
                    { type: "text", content: "The elements of art are the building blocks that artists use to create artworks. Understanding them helps us analyze and appreciate visual art." },
                    { type: "table", content: "Elements of Art", headers: ["Element", "Definition"], rows: [["Line", "A continuous mark made on a surface; conveys direction, emotion, movement"], ["Shape", "2D area defined by boundaries; geometric or organic"], ["Form", "3D quality of an object; sculpture, architecture"], ["Space", "Area around, within, or between objects; positive and negative space"], ["Color", "Visual quality of light reflected from surfaces; hue, value, intensity"], ["Texture", "Surface quality (rough, smooth, soft); actual or implied"], ["Value", "Lightness or darkness of a color or shade"]] },
                    { type: "h3", content: "Principles of Design" },
                    { type: "list", content: "Principles of Design", items: ["Balance — Visual weight distribution (symmetrical, asymmetrical, radial)", "Emphasis/Focal Point — Area that attracts most attention", "Movement — Visual flow that guides the viewer's eye through the artwork", "Pattern — Repetition of elements to create visual rhythm", "Rhythm — Regular repetition creating a sense of movement", "Unity/Harmony — All elements working together coherently", "Contrast — Difference between elements to create visual interest", "Proportion — Relationship of sizes between parts"] },
                  ],
                  quiz: [
                    { question: "Which element of art refers to the lightness or darkness of a color or shade?", options: ["Hue", "Intensity", "Value", "Texture"], answer: 2, explanation: "Value refers to the lightness or darkness of a color. High value = light; low value = dark." },
                    { question: "The principle of EMPHASIS in art means:", options: ["Repeating elements for visual rhythm", "The area that attracts the viewer's greatest attention", "Equal visual weight on both sides", "All elements working together"], answer: 1, explanation: "Emphasis (or focal point) is the area of an artwork that attracts the most visual attention — the visual 'center' of interest." },
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
            id: "ge5-m2", title: "Module 2: Philippine Arts",
            topics: [
              {
                id: "ge5-m2t1", title: "Philippine Visual Arts",
                content: {
                  heading: "Philippine Visual Arts", term: "MIDTERM", module: "Module 2: Philippine Arts",
                  objectives: ["Identify major periods in Philippine art history", "Describe key Filipino artists and their works", "Analyze how colonial history shaped Philippine visual arts"],
                  sections: [
                    { type: "h2", content: "Philippine Art History" },
                    { type: "table", content: "Periods in Philippine Art History", headers: ["Period", "Characteristics", "Examples"], rows: [["Pre-Colonial", "Gold ornaments, pottery, weaving, Baybayin script", "Laguna Copperplate, Tabon Cave artifacts"], ["Colonial (Spanish)", "Religious art, church architecture, portrait painting", "San Agustin Church (Intramuros), retablos"], ["Colonial (American)", "Academism, naturalism, social realism", "Juan Luna, Felix Hidalgo"], ["Modern (Post-WWII)", "Abstract, experimental, installation art", "Victorio Edades (Father of Modern Philippine Painting)"], ["Contemporary", "Multi-media, global themes, digital art", "BenCab, Elmer Borlongan"]] },
                    { type: "h3", content: "National Artists of the Philippines" },
                    { type: "list", content: "Selected National Artists for Visual Arts", items: ["Fernando Amorsolo — Golden Age of Philippine Art; rural idyllic scenes with natural sunlight", "Guillermo Tolentino — Sculptor; created the Oblation (UP), Bonifacio Monument", "Victorio Edades — 'Father of Modern Philippine Painting'; introduced modernism", "Carlos Francisco (Botong) — Muralist; depicted Philippine history and folk themes", "BenCab (Benedicto Cabrera) — Contemporary; known for 'Sabel' series"] },
                    { type: "note", content: "Juan Luna (Spolarium, 1884) and Félix Resurrección Hidalgo won major prizes at the Madrid Exposition of Fine Arts in 1884 — a landmark moment proving Filipino artistic excellence to the colonial world." },
                  ],
                  quiz: [
                    { question: "Who is known as the 'Father of Modern Philippine Painting'?", options: ["Fernando Amorsolo", "Juan Luna", "Victorio Edades", "Carlos Francisco"], answer: 2, explanation: "Victorio Edades is called the 'Father of Modern Philippine Painting' for introducing modernist style to Philippine art." },
                    { question: "Juan Luna's masterpiece 'Spolarium' (1884) is currently housed in:", options: ["National Museum of the Philippines", "Prado Museum, Spain", "Ayala Museum, Makati", "Cultural Center of the Philippines"], answer: 0, explanation: "Juan Luna's Spolarium is housed in the National Museum of Fine Arts (formerly National Museum) in Manila." },
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
            id: "ge5-m3", title: "Module 3: Art Criticism and Appreciation",
            topics: [
              {
                id: "ge5-m3t1", title: "Approaches to Art Criticism",
                content: {
                  heading: "Approaches to Art Criticism", term: "FINALS", module: "Module 3: Art Criticism and Appreciation",
                  objectives: ["Describe major approaches to art criticism", "Apply the steps of art criticism to analyze artworks", "Distinguish between subject matter, form, and content in art"],
                  sections: [
                    { type: "h2", content: "Art Criticism" },
                    { type: "definition", content: "Art Criticism — The discussion, evaluation, and interpretation of works of art. It involves describing, analyzing, interpreting, and evaluating artworks." },
                    { type: "h3", content: "Steps in Art Criticism (Feldman's Model)" },
                    { type: "list", content: "Four Steps of Art Criticism", items: ["Description — What do you see? (Objective facts: subject matter, medium, size, colors used)", "Analysis — How is it organized? (Elements and principles of design used)", "Interpretation — What does it mean? (Message, mood, symbolism, theme)", "Evaluation/Judgment — Is it successful? Why or why not? (Based on criteria)"] },
                    { type: "h3", content: "Approaches to Art Criticism" },
                    { type: "table", content: "Art Criticism Approaches", headers: ["Approach", "Focus"], rows: [["Formalism", "Form, composition, and structure; content is secondary (Clement Greenberg)"], ["Expressionism", "Emotional content and the artist's intent and feelings"], ["Contextualism", "Cultural, historical, and social context surrounding the artwork"], ["Feminism", "Gender representation and women's perspectives in art"]] },
                  ],
                  quiz: [
                    { question: "In Feldman's model of art criticism, 'Interpretation' involves:", options: ["Listing the colors and medium used", "Analyzing the elements and principles of design", "Determining the meaning, mood, and symbolism of the artwork", "Judging whether the artwork is successful"], answer: 2, explanation: "Interpretation asks 'What does it mean?' — exploring the message, mood, symbolism, and theme of the artwork." },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "ge6",
    code: "GE 6",
    title: "Science, Technology, and Society",
    shortTitle: "GE 6",
    units: 3,
    description: "Examines the relationship between science, technology, and society, including historical development, ethical implications, and the impact of technology on Filipino life.",
    terms: [
      {
        id: "prelim", label: "PRELIM",
        modules: [
          {
            id: "ge6-m1", title: "Module 1: Science, Technology, and Society Nexus",
            topics: [
              {
                id: "ge6-m1t1", title: "Nature of Science and Technology",
                content: {
                  heading: "Nature of Science and Technology", term: "PRELIM", module: "Module 1: Science, Technology, and Society Nexus",
                  objectives: ["Define science and technology", "Explain the relationship between science, technology, and society", "Trace the historical development of science and technology"],
                  sections: [
                    { type: "h2", content: "Science and Technology Defined" },
                    { type: "definition", content: "Science — A systematic enterprise that builds and organizes knowledge in the form of testable explanations and predictions about the natural world through observation, experimentation, and analysis." },
                    { type: "definition", content: "Technology — The application of scientific knowledge for practical purposes, especially in industry. It includes tools, machines, techniques, and processes developed to solve problems or improve human life." },
                    { type: "h3", content: "The Science-Technology-Society (STS) Triangle" },
                    { type: "text", content: "Science, Technology, and Society are deeply interconnected. Science produces knowledge; technology applies that knowledge; society both shapes and is shaped by the outcomes. This relationship is bidirectional — society influences what is researched and how technology is applied." },
                    { type: "table", content: "Historical Scientific Revolutions", headers: ["Period", "Key Development", "Impact"], rows: [["Scientific Revolution (16th–17th c.)", "Copernican heliocentric model; Newton's laws", "Replaced religious dogma with empirical science"], ["Industrial Revolution (18th–19th c.)", "Steam engine, mechanized production", "Urbanization, capitalism, mass production"], ["Digital Revolution (20th–21st c.)", "Computers, internet, smartphones", "Information age, globalization, AI"]] },
                    { type: "note", content: "Thomas Kuhn's 'The Structure of Scientific Revolutions' (1962) introduced the concept of paradigm shifts — revolutionary changes in scientific understanding that transform entire fields." },
                  ],
                  quiz: [
                    { question: "Technology is best defined as:", options: ["Pure theoretical knowledge about the natural world", "The application of scientific knowledge for practical purposes", "The study of society's relationship to nature", "Mathematical formulas and equations"], answer: 1, explanation: "Technology is the practical application of scientific knowledge — tools, machines, and processes used to solve problems." },
                    { question: "Thomas Kuhn is associated with the concept of:", options: ["Scientific method", "Paradigm shifts", "Social Darwinism", "Digital revolution"], answer: 1, explanation: "Thomas Kuhn introduced 'paradigm shifts' in 'The Structure of Scientific Revolutions' — revolutionary changes in scientific thinking." },
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
            id: "ge6-m2", title: "Module 2: Technology and Society",
            topics: [
              {
                id: "ge6-m2t1", title: "Social Implications of Technology",
                content: {
                  heading: "Social Implications of Technology", term: "MIDTERM", module: "Module 2: Technology and Society",
                  objectives: ["Analyze positive and negative effects of technology on society", "Identify ethical issues raised by emerging technologies", "Apply ethical frameworks to technology-related decisions"],
                  sections: [
                    { type: "h2", content: "Technology and Its Social Impact" },
                    { type: "text", content: "Every technology has unintended social consequences. While technology solves problems, it also creates new ones — a phenomenon called the double-edged sword of technology." },
                    { type: "table", content: "Social Implications of Key Technologies", headers: ["Technology", "Positive Effects", "Negative Effects"], rows: [["Internet", "Access to information, global communication, e-commerce", "Misinformation, cybercrime, addiction, privacy loss"], ["Social Media", "Community building, free expression, business", "Mental health issues, echo chambers, fake news"], ["Artificial Intelligence", "Automation, medical diagnosis, efficiency", "Job displacement, bias, surveillance, ethical concerns"], ["Biotechnology", "New medicines, improved crop yields", "GMO controversies, bioweapons potential, inequality"]] },
                    { type: "h3", content: "Ethical Issues in Technology" },
                    { type: "list", content: "Key Ethical Issues", items: ["Privacy: Who owns our data? Surveillance capitalism", "Digital divide: Unequal access to technology between rich and poor", "Automation and job displacement: AI replacing human workers", "Cybercrime: Hacking, identity theft, online fraud", "Intellectual property: Copyright in the digital age", "Environmental impact: E-waste, carbon footprint of data centers"] },
                    { type: "note", content: "In the Philippines, the Cybercrime Prevention Act (RA 10175, 2012) addresses online offenses. The Data Privacy Act (RA 10173) protects personal information against unauthorized collection and use." },
                  ],
                  quiz: [
                    { question: "The 'digital divide' refers to:", options: ["The gap between analog and digital technology", "Unequal access to technology between different groups", "The difference between hardware and software", "Security vulnerabilities in digital systems"], answer: 1, explanation: "Digital divide refers to the gap between those who have access to modern technology and those who do not — often reflecting socioeconomic inequalities." },
                    { question: "The Philippine Cybercrime Prevention Act is:", options: ["RA 9163", "RA 10173", "RA 10175", "RA 7722"], answer: 2, explanation: "RA 10175 (Cybercrime Prevention Act of 2012) addresses online offenses like hacking, identity theft, and cyberlibel." },
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
            id: "ge6-m3", title: "Module 3: Technology and Philippine Development",
            topics: [
              {
                id: "ge6-m3t1", title: "Science and Technology in the Philippines",
                content: {
                  heading: "Science and Technology in the Philippines", term: "FINALS", module: "Module 3: Technology and Philippine Development",
                  objectives: ["Describe the state of science and technology in the Philippines", "Identify key government agencies and policies supporting S&T", "Analyze the role of IT-BPO in Philippine development"],
                  sections: [
                    { type: "h2", content: "Philippine Science and Technology" },
                    { type: "text", content: "The Philippines' science and technology sector is guided by the Department of Science and Technology (DOST), established under RA 2067. DOST formulates S&T policy and coordinates research." },
                    { type: "list", content: "Key DOST Agencies", items: ["PAGASA — Philippine Atmospheric, Geophysical and Astronomical Services Administration", "PHIVOLCS — Philippine Institute of Volcanology and Seismology", "DOST-ASTI — Advanced Science and Technology Institute (IT research)", "PCHRD — Philippine Council for Health Research", "PCAARRD — Agriculture and Natural Resources Research"] },
                    { type: "h3", content: "IT-BPO Industry" },
                    { type: "text", content: "The IT-Business Process Outsourcing (IT-BPO) sector is one of the Philippines' largest industries, employing over 1.5 million Filipinos. The Philippines is the world's leading destination for voice-based BPO services." },
                    { type: "note", content: "The Philippines consistently ranks among the top BPO destinations globally due to: high English proficiency, cultural affinity with the West, competitive labor costs, and a large pool of skilled IT graduates — which is why BSIT is a highly relevant degree." },
                  ],
                  quiz: [
                    { question: "Which Philippine government agency is responsible for volcanic and earthquake monitoring?", options: ["PAGASA", "PHIVOLCS", "DOST-ASTI", "PCHRD"], answer: 1, explanation: "PHIVOLCS (Philippine Institute of Volcanology and Seismology) monitors volcanic and seismic activity." },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "ge7",
    code: "GE 7",
    title: "Ethics",
    shortTitle: "GE 7",
    units: 3,
    description: "Examines ethical theories and principles, moral reasoning, and the application of ethics to contemporary personal, professional, and social issues.",
    terms: [
      {
        id: "prelim", label: "PRELIM",
        modules: [
          {
            id: "ge7-m1", title: "Module 1: Introduction to Ethics",
            topics: [
              {
                id: "ge7-m1t1", title: "Nature and Scope of Ethics",
                content: {
                  heading: "Nature and Scope of Ethics", term: "PRELIM", module: "Module 1: Introduction to Ethics",
                  objectives: ["Define ethics and distinguish it from morality", "Identify the branches of ethics", "Explain why ethics is important for a BSIT student"],
                  sections: [
                    { type: "h2", content: "What is Ethics?" },
                    { type: "definition", content: "Ethics — The branch of philosophy concerned with what is morally right and wrong, good and evil, virtue and vice. It involves systematic reflection on moral principles and their application to human conduct." },
                    { type: "definition", content: "Morality — The actual set of values, norms, and principles that individuals and societies use to guide behavior. Ethics is the philosophical study of morality." },
                    { type: "h3", content: "Branches of Ethics" },
                    { type: "table", content: "Branches of Ethics", headers: ["Branch", "Question", "Description"], rows: [["Metaethics", "What IS morality?", "Studies the nature and foundations of moral concepts and language"], ["Normative Ethics", "What SHOULD we do?", "Develops theories about right and wrong action"], ["Applied Ethics", "How do we handle specific moral issues?", "Applies ethical theory to real situations (medical, IT, environmental ethics)"]] },
                    { type: "h3", content: "Why Ethics Matters for IT Professionals" },
                    { type: "list", content: "Ethical Issues in IT", items: ["Privacy and data protection", "Intellectual property and software piracy", "Cybercrime and hacking", "Algorithmic bias and fairness in AI", "Digital surveillance and freedom", "Responsible social media use"] },
                    { type: "note", content: "The ACM (Association for Computing Machinery) Code of Ethics requires computer professionals to 'Contribute to society and human well-being' and 'Avoid harm.' Ethical reasoning is a core professional competency for IT practitioners." },
                  ],
                  quiz: [
                    { question: "Applied ethics involves:", options: ["Studying the nature and foundations of moral concepts", "Developing abstract theories about right and wrong", "Applying ethical theory to real-world specific moral situations", "Defining what 'good' and 'bad' mean"], answer: 2, explanation: "Applied ethics applies ethical theory to specific real-world issues like medical ethics, IT ethics, and environmental ethics." },
                    { question: "Ethics differs from morality in that:", options: ["Ethics is personal; morality is social", "Ethics is the philosophical study of morality; morality is the actual values and norms people hold", "Morality is more important than ethics", "They are exactly the same thing"], answer: 1, explanation: "Ethics is the systematic philosophical study of morality — it analyzes and reflects on the moral values and norms that constitute morality." },
                  ],
                },
              },
              {
                id: "ge7-m1t2", title: "Major Ethical Theories",
                content: {
                  heading: "Major Ethical Theories", term: "PRELIM", module: "Module 1: Introduction to Ethics",
                  objectives: ["Describe major normative ethical theories", "Apply each theory to ethical dilemmas", "Evaluate strengths and weaknesses of each theory"],
                  sections: [
                    { type: "h2", content: "Major Normative Ethical Theories" },
                    { type: "h3", content: "1. Utilitarianism (Consequentialism)" },
                    { type: "definition", content: "Utilitarianism (Jeremy Bentham, John Stuart Mill) — An action is morally right if it produces the greatest good for the greatest number. The consequences (outcomes) determine the morality of an action." },
                    { type: "h3", content: "2. Kantian Ethics (Deontology)" },
                    { type: "definition", content: "Categorical Imperative (Immanuel Kant) — Act only according to that maxim by which you can at the same time will that it should become a universal law. Duty and rules — not consequences — determine right action." },
                    { type: "example", content: "Lying example: A Utilitarian might justify lying if it saves lives. A Kantian (deontologist) would say lying is always wrong because if everyone lied, trust would be destroyed — it fails the universalizability test." },
                    { type: "h3", content: "3. Virtue Ethics (Aristotle)" },
                    { type: "definition", content: "Virtue Ethics — Focuses on character rather than rules or consequences. A person of good character (virtues: courage, honesty, justice, temperance) will naturally make good moral choices. The goal is eudaimonia (human flourishing)." },
                    { type: "h3", content: "4. Ethics of Care (Carol Gilligan, Nel Noddings)" },
                    { type: "text", content: "Ethics of Care emphasizes relationships, empathy, and context. Moral decisions should be guided by care for others, especially in close relationships. It critiques the abstraction of traditional ethical theories." },
                    { type: "table", content: "Comparison of Ethical Theories", headers: ["Theory", "Basis of Morality", "Key Figure"], rows: [["Utilitarianism", "Consequences — greatest good for greatest number", "Bentham, Mill"], ["Deontology", "Duty and rules — regardless of consequences", "Kant"], ["Virtue Ethics", "Character and virtues", "Aristotle"], ["Ethics of Care", "Relationships and empathy", "Gilligan, Noddings"], ["Social Contract", "Agreement among rational individuals", "Hobbes, Locke, Rousseau"]] },
                  ],
                  quiz: [
                    { question: "Utilitarianism judges the morality of an action by:", options: ["Whether it follows a moral rule or duty", "Whether it produces the greatest good for the greatest number", "Whether it reflects good character", "Whether it is agreed upon by society"], answer: 1, explanation: "Utilitarianism is consequentialist — the morality of an action is determined by its outcomes: the greatest good for the greatest number." },
                    { question: "Kant's Categorical Imperative requires that:", options: ["Actions maximize utility", "You act as a virtuous person would", "You act only according to principles you would want to be universal laws", "You follow the commands of authority"], answer: 2, explanation: "Kant's Categorical Imperative: Act only on principles you could will to be universal laws. It is about duty, not consequences." },
                    { question: "Virtue ethics focuses primarily on:", options: ["Consequences of actions", "Following moral rules", "Developing good character and virtues", "What society agrees upon"], answer: 2, explanation: "Virtue ethics (Aristotle) focuses on character — developing virtues like courage, honesty, and justice — rather than rules or consequences." },
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
            id: "ge7-m2", title: "Module 2: Professional and Computer Ethics",
            topics: [
              {
                id: "ge7-m2t1", title: "Computer and IT Ethics",
                content: {
                  heading: "Computer and IT Ethics", term: "MIDTERM", module: "Module 2: Professional and Computer Ethics",
                  objectives: ["Define computer ethics and its scope", "Identify the ten commandments of computer ethics", "Analyze ethical dilemmas in IT professional practice"],
                  sections: [
                    { type: "h2", content: "Computer Ethics" },
                    { type: "definition", content: "Computer Ethics — A branch of applied ethics that studies ethical issues arising from the use of computers and information technology, including issues of privacy, intellectual property, and professional responsibility." },
                    { type: "h3", content: "The Ten Commandments of Computer Ethics (CEBI, 1992)" },
                    { type: "list", content: "Ten Commandments of Computer Ethics", items: ["1. Thou shalt not use a computer to harm other people", "2. Thou shalt not interfere with other people's computer work", "3. Thou shalt not snoop around in other people's files", "4. Thou shalt not use a computer to steal", "5. Thou shalt not use a computer to bear false witness", "6. Thou shalt not copy or use proprietary software for which you have not paid", "7. Thou shalt not use other people's computer resources without authorization", "8. Thou shalt not appropriate other people's intellectual output", "9. Thou shalt think about the social consequences of the program you are writing", "10. Thou shalt always use a computer in ways that ensure consideration and respect for your fellow humans"] },
                    { type: "h3", content: "Intellectual Property in IT" },
                    { type: "table", content: "Types of Software Licenses", headers: ["Type", "Description", "Example"], rows: [["Proprietary", "Owned; must purchase; source code protected", "Microsoft Windows, Adobe Photoshop"], ["Freeware", "Free to use but source code not available", "Older Adobe Reader"], ["Open Source", "Source code available; can be modified and distributed", "Linux, Firefox, VLC"], ["Shareware", "Try before buying; full features require payment", "WinRAR"]] },
                  ],
                  quiz: [
                    { question: "Computer ethics is primarily concerned with:", options: ["Repairing computer hardware", "Ethical issues arising from the use of computers and IT", "Programming algorithms", "Computer security systems"], answer: 1, explanation: "Computer ethics studies ethical issues arising from the use of computers — privacy, intellectual property, professional responsibility." },
                    { question: "Open-source software means:", options: ["Software that is free to download only", "Software with publicly available source code that can be modified and distributed", "Software owned by the government", "Software that cannot be copied"], answer: 1, explanation: "Open-source software has publicly available source code that can be viewed, modified, and distributed under the terms of its license." },
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
            id: "ge7-m3", title: "Module 3: Social and Environmental Ethics",
            topics: [
              {
                id: "ge7-m3t1", title: "Environmental Ethics",
                content: {
                  heading: "Environmental Ethics", term: "FINALS", module: "Module 3: Social and Environmental Ethics",
                  objectives: ["Define environmental ethics", "Identify major environmental ethics perspectives", "Analyze human responsibility toward the natural environment"],
                  sections: [
                    { type: "h2", content: "Environmental Ethics" },
                    { type: "definition", content: "Environmental Ethics — A branch of applied ethics that examines human beings' ethical relationship with the natural environment. It asks: What duties, if any, do humans have toward nature?" },
                    { type: "table", content: "Environmental Ethics Perspectives", headers: ["Perspective", "View of Nature", "Implication"], rows: [["Anthropocentrism", "Nature has value only insofar as it serves human needs", "Environment protected for human benefit only"], ["Biocentrism", "All living things have intrinsic moral value", "Humans must respect all life forms"], ["Ecocentrism", "Entire ecosystems and species have inherent value", "Biodiversity and ecosystems must be protected even at human cost"], ["Deep Ecology", "Radical rejection of human superiority; all nature is intrinsically valuable", "Fundamental change in human-nature relationship required"]] },
                    { type: "note", content: "The Philippines, as a mega-biodiverse country, faces serious environmental threats: deforestation, coral reef destruction, mining, and climate change impacts. Environmental ethics provides a moral framework for responding to these challenges." },
                  ],
                  quiz: [
                    { question: "Biocentrism in environmental ethics holds that:", options: ["Only humans have moral standing", "All living things have intrinsic moral value", "Entire ecosystems have inherent value", "Economic development takes priority over environment"], answer: 1, explanation: "Biocentrism holds that all living beings — not just humans — have intrinsic moral value and deserve moral consideration." },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "ge8",
    code: "GE 8",
    title: "Filipino sa Piling Larang (Tech/IT)",
    shortTitle: "GE 8",
    units: 3,
    description: "Pagpapaunlad ng kakayahang komunikatibo sa Filipino sa konteksto ng teknolohiya at IT. Gamit ng Filipino sa teknikal na larangan.",
    terms: [
      {
        id: "prelim", label: "PRELIM",
        modules: [
          {
            id: "ge8-m1", title: "Modyul 1: Filipino sa Teknikal na Komunikasyon",
            topics: [
              {
                id: "ge8-m1t1", title: "Wika at Komunikasyon sa Larangan ng IT",
                content: {
                  heading: "Wika at Komunikasyon sa Larangan ng IT", term: "PRELIM", module: "Modyul 1: Filipino sa Teknikal na Komunikasyon",
                  objectives: ["Maipaliwanag ang papel ng Filipino sa larangang teknikal", "Matukoy ang teknikal na bokabularyo sa IT na may katumbas na Filipino", "Makapagbigay ng simpleng teknikal na paliwanag sa Filipino"],
                  sections: [
                    { type: "h2", content: "Ang Filipino sa Larangan ng Teknolohiya" },
                    { type: "text", content: "Ang Filipino ay isang makulay at buhay na wika na patuloy na lumalago. Sa larangan ng IT at teknolohiya, maraming bagong salita at konsepto ang inangkop mula sa Ingles. Ang gawaing ito ay tinatawag na paghihiram ng salita o 'borrowing'." },
                    { type: "definition", content: "Neolohismo — Bagong salita o ekspresyon na nilikha upang tumukoy sa bagong konsepto o bagay. Sa IT, maraming neolohismo ang ginagamit tulad ng 'kompyuter,' 'internet,' at 'download.'" },
                    { type: "h3", content: "Mga Teknikal na Termino sa IT na may Filipino" },
                    { type: "table", content: "IT Terms in Filipino", headers: ["English Term", "Filipino/Filipino Term", "Kahulugan"], rows: [["Computer", "Kompyuter / Tagasaliksik", "Electronic device for processing data"], ["Software", "Programang pangkompyuter", "Programs and operating information"], ["Hardware", "Kagamitang pangkompyuter", "Physical components of a computer"], ["Network", "Ugnayan / Kalawakan ng datos", "Connected system of computers"], ["Internet", "Pandaigdigang ugnayan", "Global network of networks"], ["Download", "I-download / Kunin", "Transfer data from internet to device"], ["Database", "Talaan ng datos / Bangko ng datos", "Organized collection of data"]] },
                    { type: "h3", content: "Teknikal na Sulatin sa Filipino" },
                    { type: "text", content: "Ang teknikal na sulatin ay may katangiang formal, tiyak, at malinaw. Sa Filipino, mahalaga ang wastong gramatika at ang paggamit ng angkop na bokabularyo para sa larangan ng teknolohiya." },
                  ],
                  quiz: [
                    { question: "Ang 'neolohismo' sa Filipino ay tumutukoy sa:", options: ["Mga lumang salita na hindi na ginagamit", "Bagong salita o ekspresyon na nilikha para sa bagong konsepto", "Mga salitang hiniram mula sa Espanyol lamang", "Mga pormal na salita sa pamahalaan"], answer: 1, explanation: "Ang neolohismo ay bagong salita na nilikha para tumukoy sa bagong konsepto o bagay — tulad ng mga teknikal na termino sa IT." },
                    { question: "Ang 'software' sa Filipino ay madalas na tinatawag na:", options: ["Kagamitang pangkompyuter", "Programang pangkompyuter", "Talaan ng datos", "Pandaigdigang ugnayan"], answer: 1, explanation: "Ang 'software' ay tinutukoy bilang 'programang pangkompyuter' — ang mga programa at operating information ng isang computer." },
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
            id: "ge8-m2", title: "Modyul 2: Pagsulat ng Teknikal na Dokumento sa Filipino",
            topics: [
              {
                id: "ge8-m2t1", title: "Teknikal na Ulat at Dokumentasyon",
                content: {
                  heading: "Teknikal na Ulat at Dokumentasyon sa Filipino", term: "MIDTERM", module: "Modyul 2: Pagsulat ng Teknikal na Dokumento sa Filipino",
                  objectives: ["Makapagsulat ng teknikal na ulat sa Filipino", "Maitukoy ang mga bahagi ng teknikal na dokumento", "Makapaggamit ng malinaw na wika sa pagpapaliwanag ng teknikal na proseso"],
                  sections: [
                    { type: "h2", content: "Teknikal na Sulatin" },
                    { type: "text", content: "Ang teknikal na sulatin ay isang espesyal na uri ng komunikasyon na nagbibigay ng impormasyon tungkol sa siyentipiko o teknikal na paksa. Mahalaga ito sa larangan ng IT para sa dokumentasyon ng sistema, user manual, at mga ulat." },
                    { type: "h3", content: "Mga Uri ng Teknikal na Dokumento" },
                    { type: "list", content: "Mga Uri ng Teknikal na Dokumento", items: ["User Manual — Gabay para sa mga gumagamit ng sistema o software", "Teknikal na Ulat — Ulat ng pananaliksik o resulta ng proyekto", "Proposal — Mungkahi para sa isang proyekto o sistema", "Memorandum — Opisyal na mensahe sa loob ng organisasyon", "Programa ng Trabaho — Detalyadong plano ng gawain"] },
                    { type: "h3", content: "Mga Bahagi ng Teknikal na Ulat" },
                    { type: "table", content: "Bahagi ng Teknikal na Ulat", headers: ["Bahagi", "Nilalaman"], rows: [["Pamagat", "Malinaw na titulong nagpapakita ng paksa"], ["Panimula", "Background, layunin, at saklaw ng ulat"], ["Katawan", "Detalyadong datos, pagsusuri, at natuklasan"], ["Konklusyon", "Buod ng pangunahing natuklasan"], ["Rekomendasyon", "Mga mungkahi batay sa natuklasan"], ["Talaan ng Sanggunian", "Listahan ng mga pinagkunan"]] },
                  ],
                  quiz: [
                    { question: "Ang 'User Manual' sa teknikal na dokumentasyon ay:", options: ["Ulat ng pananaliksik", "Gabay para sa mga gumagamit ng sistema o software", "Mungkahi para sa isang proyekto", "Opisyal na mensahe sa loob ng organisasyon"], answer: 1, explanation: "Ang User Manual ay gabay para sa mga gumagamit — nagpapaliwanag kung paano gamitin ang isang sistema o software." },
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
            id: "ge8-m3", title: "Modyul 3: Oral na Komunikasyon sa IT",
            topics: [
              {
                id: "ge8-m3t1", title: "Presentasyon at Talakayan sa Filipino",
                content: {
                  heading: "Presentasyon at Talakayan sa Filipino", term: "FINALS", module: "Modyul 3: Oral na Komunikasyon sa IT",
                  objectives: ["Makapagsalita nang epektibo sa Filipino sa teknikal na konteksto", "Makapagpresenta ng IT na proyekto sa Filipino", "Makapagpartisipa sa talakayan gamit ang Filipino"],
                  sections: [
                    { type: "h2", content: "Oral na Komunikasyon sa Teknikal na Larangan" },
                    { type: "text", content: "Ang oral na komunikasyon ay mahalaga sa propesyonal na mundo ng IT. Kailangan ng mga IT professional na makapagsalita nang malinaw at epektibo sa iba't ibang sitwasyon — presentasyon, pulong, at pakikipag-ugnayan sa kliyente." },
                    { type: "list", content: "Mga Estratehiya sa Epektibong Presentasyon", items: ["Ihanda ang nilalaman nang maayos at malinaw", "Gumamit ng biswal na tulong (PowerPoint, diagram)", "Magsalita nang may kumpiyansa at tiyak", "Gamitin ang angkop na bokabularyo para sa audience", "Huwag basahin ang slides — ipaliwanag sa sariling salita", "Maging handa sa mga tanong mula sa audience"] },
                    { type: "note", content: "Sa isang IT project presentation, mahalagang maipaliwanag ang sistema sa simpleng paraan para maunawaan ng mga kliyente na hindi IT literate. Ito ay tinatawag na 'translation' ng teknikal na impormasyon para sa pangkalahatang audience." },
                  ],
                  quiz: [
                    { question: "Sa isang IT project presentation para sa mga kliyente na hindi IT literate, dapat:", options: ["Gumamit ng maraming teknikal na termino para maging propesyonal", "Ipaliwanag ang sistema sa simpleng paraan na maiintindihan nila", "Ipakita lamang ang code at hindi mag-explain", "Magbigay ng makapal na dokumentasyon"], answer: 1, explanation: "Sa pagpresenta sa mga non-technical na kliyente, kailangan i-translate ang teknikal na impormasyon sa simpleng wika na maiintindihan nila." },
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
