import { Subject } from "./types";

export const GE_SUBJECTS: Subject[] = [
  // ─── GE 1 ───────────────────────────────────────────────────────────────────
  {
    id: "ge1", code: "GE 1", title: "Understanding the Self", shortTitle: "GE 1", units: 3,
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
                    { type: "table", content: "Summary of Philosophical Views", headers: ["Philosopher", "View of Self", "Key Concept"], rows: [["Socrates", "Soul; unexamined life not worth living", "Know Thyself"], ["Plato", "Immortal soul; tripartite", "Logos, Thymos, Epithumia"], ["Aristotle", "Soul = form of body; inseparable", "Hylomorphism"], ["Descartes", "Thinking substance; dualism", "Cogito ergo sum"], ["Locke", "Memory-based identity", "Tabula rasa; continuity"], ["Hume", "No permanent self; bundle of perceptions", "Bundle Theory"], ["Kant", "Transcendental self organizes experience", "'I think' = unifying self"]] },
                  ],
                  quiz: [
                    { question: "Who said 'Cogito ergo sum' (I think, therefore I am)?", options: ["Plato", "Socrates", "René Descartes", "David Hume"], answer: 2, explanation: "René Descartes coined 'Cogito ergo sum' as the foundation of his rationalist philosophy." },
                    { question: "Plato's tripartite soul does NOT include which part?", options: ["Rational (Logos)", "Spirited (Thymos)", "Appetitive (Epithumia)", "Empirical (Empeiria)"], answer: 3, explanation: "Plato's three parts are Rational, Spirited, and Appetitive. 'Empirical' is not part of Plato's model." },
                    { question: "David Hume's 'Bundle Theory' states that the self is:", options: ["A unified, permanent substance", "A bundle of perceptions with no persistent self", "The immortal soul", "Identical to the physical body"], answer: 1, explanation: "Hume: No permanent self exists — just a collection of perceptions and experiences." },
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
                    { type: "table", content: "Agents of Socialization", headers: ["Agent", "Role"], rows: [["Family", "Primary socialization; first values and language"], ["School", "Formal education; rules and peer interaction"], ["Peer Groups", "Social comparison; identity testing"], ["Media", "Cultural norms and worldviews"], ["Religion", "Moral framework; sense of purpose"]] },
                  ],
                  quiz: [
                    { question: "George Herbert Mead's 'Me' represents:", options: ["The spontaneous, impulsive self", "The socialized self reflecting others' expectations", "The biological self", "The unconscious self"], answer: 1, explanation: "The 'Me' is the socialized aspect of self — the internalization of society's norms and expectations." },
                    { question: "The 'Looking-Glass Self' was proposed by:", options: ["George Herbert Mead", "Erving Goffman", "Charles Cooley", "Max Weber"], answer: 2, explanation: "Charles Cooley proposed the Looking-Glass Self — we form self-concept based on how we imagine others see us." },
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
            id: "ge1-m3", title: "Module 2: The Physical, Digital, Political, and Spiritual Self",
            topics: [
              {
                id: "ge1-m3t1", title: "The Physical Self and Body Image",
                content: {
                  heading: "The Physical Self and Body Image", term: "MIDTERM", module: "Module 2: The Physical, Digital, Political, and Spiritual Self",
                  objectives: ["Define body image and its dimensions", "Explain how media shapes body image", "Identify factors promoting positive body image"],
                  sections: [
                    { type: "h2", content: "The Physical Self" },
                    { type: "definition", content: "Body Image — The subjective perception a person has of their own physical appearance. It includes how you see, feel, and think about your body." },
                    { type: "list", content: "Four Dimensions of Body Image", items: ["Perceptual — How you see your body (may differ from reality)", "Affective — How you feel about your body", "Cognitive — What you think about your body", "Behavioral — Actions taken based on body image (exercise, dieting, avoidance)"] },
                    { type: "h3", content: "Media and Body Image" },
                    { type: "text", content: "Mass media promotes narrow beauty standards that few naturally achieve. Constant exposure leads to body dissatisfaction, eating disorders, and low self-esteem especially among youth." },
                    { type: "note", content: "Positive body image does NOT mean thinking your body is perfect — it means accepting your body and appreciating what it can do." },
                  ],
                  quiz: [
                    { question: "Which is NOT a dimension of body image?", options: ["Perceptual", "Affective", "Cognitive", "Genetic"], answer: 3, explanation: "The four dimensions are Perceptual, Affective, Cognitive, and Behavioral." },
                  ],
                },
              },
              {
                id: "ge1-m3t2", title: "The Political and Spiritual Self",
                content: {
                  heading: "The Political and Spiritual Self", term: "MIDTERM", module: "Module 2: The Physical, Digital, Political, and Spiritual Self",
                  objectives: ["Define political self and civic identity", "Explain rights and duties of Filipino citizens", "Distinguish spirituality from religion"],
                  sections: [
                    { type: "h2", content: "The Political Self" },
                    { type: "text", content: "Aristotle declared humans are 'zoon politikon' — political animals. We are inherently social beings who form communities, govern ourselves, and participate in civic life." },
                    { type: "definition", content: "Political Self — The dimension of the self defined by citizenship, civic participation, political beliefs, and engagement with governance." },
                    { type: "list", content: "Rights of Filipino Citizens", items: ["Right to vote and be elected to public office", "Right to free speech, assembly, and petition", "Right to due process and equal protection of laws", "Right to education, health, and social services"] },
                    { type: "h2", content: "The Spiritual Self" },
                    { type: "definition", content: "Spirituality — A broad concept involving a sense of connection to something greater than oneself. It can include religious practice but transcends organized religion." },
                    { type: "table", content: "Religion vs. Spirituality", headers: ["Dimension", "Religion", "Spirituality"], rows: [["Structure", "Organized, institutional", "Personal, individual"], ["Goal", "Salvation, divine relationship", "Meaning, inner peace, connection"]] },
                  ],
                  quiz: [
                    { question: "Who declared humans are 'political animals' (zoon politikon)?", options: ["Plato", "Socrates", "Aristotle", "Locke"], answer: 2, explanation: "Aristotle declared humans are 'zoon politikon' in his work 'Politics'." },
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
            id: "ge1-m4", title: "Module 3: Psychological Theories of the Self",
            topics: [
              {
                id: "ge1-m4t1", title: "Erikson's Stages of Psychosocial Development",
                content: {
                  heading: "Erikson's Stages of Psychosocial Development", term: "FINALS", module: "Module 3: Psychological Theories of the Self",
                  objectives: ["Describe Erikson's 8 stages", "Identify the core conflict in each stage", "Apply Erikson's theory to adolescent identity formation"],
                  sections: [
                    { type: "h2", content: "Erikson's Theory" },
                    { type: "table", content: "Erikson's 8 Stages", headers: ["Stage", "Age", "Crisis", "Virtue"], rows: [["1. Infancy", "0–1", "Trust vs. Mistrust", "Hope"], ["2. Early Childhood", "1–3", "Autonomy vs. Shame", "Will"], ["3. Preschool", "3–6", "Initiative vs. Guilt", "Purpose"], ["4. School Age", "6–12", "Industry vs. Inferiority", "Competence"], ["5. Adolescence", "12–18", "Identity vs. Role Confusion", "Fidelity"], ["6. Young Adult", "18–40", "Intimacy vs. Isolation", "Love"], ["7. Middle Adult", "40–65", "Generativity vs. Stagnation", "Care"], ["8. Late Adult", "65+", "Ego Integrity vs. Despair", "Wisdom"]] },
                    { type: "note", content: "Stage 5 (Identity vs. Role Confusion) is most relevant for college freshmen — forming a coherent identity. Erikson coined the term 'identity crisis'." },
                  ],
                  quiz: [
                    { question: "The central conflict of adolescence in Erikson's theory is:", options: ["Trust vs. Mistrust", "Autonomy vs. Shame", "Identity vs. Role Confusion", "Intimacy vs. Isolation"], answer: 2, explanation: "Stage 5 (Adolescence) involves Identity vs. Role Confusion. Successfully resolving it leads to Fidelity." },
                  ],
                },
              },
              {
                id: "ge1-m4t2", title: "Maslow's Hierarchy of Needs",
                content: {
                  heading: "Maslow's Hierarchy of Needs", term: "FINALS", module: "Module 3: Psychological Theories of the Self",
                  objectives: ["Describe the five levels of Maslow's hierarchy", "Explain how needs motivate behavior", "Apply the hierarchy to understanding self-actualization"],
                  sections: [
                    { type: "h2", content: "Maslow's Theory of Motivation" },
                    { type: "table", content: "Maslow's Hierarchy of Needs", headers: ["Level", "Need Type", "Examples"], rows: [["5 (Highest)", "Self-Actualization", "Full potential, creativity, peak experiences"], ["4", "Esteem Needs", "Self-esteem, respect, achievement, status"], ["3", "Love/Belonging", "Friendship, intimacy, family"], ["2", "Safety Needs", "Security, employment, health"], ["1 (Base)", "Physiological", "Food, water, shelter, sleep"]] },
                    { type: "definition", content: "Self-Actualization — The highest level. Realization of one's full potential and authentic self." },
                  ],
                  quiz: [
                    { question: "What is at the top of Maslow's Hierarchy?", options: ["Safety", "Love and Belonging", "Esteem", "Self-Actualization"], answer: 3, explanation: "Self-Actualization is at the pinnacle — the fulfillment of one's full potential." },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  },

  // ─── GE 2 ───────────────────────────────────────────────────────────────────
  {
    id: "ge2", code: "GE 2", title: "Readings in Philippine History", shortTitle: "GE 2", units: 3,
    description: "A critical study of Philippine history through primary sources and documents, examining historical events, movements, and their significance to contemporary Filipino society.",
    terms: [
      {
        id: "prelim", label: "PRELIM",
        modules: [
          {
            id: "ge2-m1", title: "Module 1: Historiography and Pre-Colonial Philippines",
            topics: [
              {
                id: "ge2-m1t1", title: "Nature of History and Historiography",
                content: {
                  heading: "Nature of History and Historiography", term: "PRELIM", module: "Module 1: Historiography and Pre-Colonial Philippines",
                  objectives: ["Define history and historiography", "Distinguish primary from secondary sources", "Explain the importance of critical reading of historical documents"],
                  sections: [
                    { type: "h2", content: "What is History?" },
                    { type: "definition", content: "History — The study of past human events, societies, and civilizations, primarily through written records and other evidence. It is not simply the past, but an interpretation of the past." },
                    { type: "definition", content: "Historiography — The study of how history is written, including the methods, sources, and perspectives historians use. It asks: Who wrote history? For what purpose? Whose voices are included or excluded?" },
                    { type: "table", content: "Types of Historical Sources", headers: ["Type", "Definition", "Examples"], rows: [["Primary Source", "Original, first-hand documents from the period studied", "Diaries, letters, official documents, artifacts, speeches"], ["Secondary Source", "Interpretations or analyses of primary sources", "History books, academic articles, documentaries"]] },
                    { type: "note", content: "The CHED memorandum requiring this course emphasizes reading primary sources because Philippine history has often been written from colonial perspectives." },
                  ],
                  quiz: [
                    { question: "Which is a PRIMARY source of Philippine history?", options: ["A history textbook about the Philippine Revolution", "José Rizal's diary entries written during his exile in Dapitan", "A documentary about the Katipunan", "An academic article about Andres Bonifacio"], answer: 1, explanation: "Primary source = first-hand account from the period. Rizal's diary is an original document." },
                  ],
                },
              },
              {
                id: "ge2-m1t2", title: "Pre-Colonial Philippines",
                content: {
                  heading: "Pre-Colonial Philippines", term: "PRELIM", module: "Module 1: Historiography and Pre-Colonial Philippines",
                  objectives: ["Describe the social, political, and economic conditions of pre-colonial Philippines", "Identify key features of Barangay society"],
                  sections: [
                    { type: "h2", content: "Pre-Colonial Philippine Society" },
                    { type: "definition", content: "Barangay — The basic political and social unit of pre-colonial Philippine society, consisting of 30 to 100 families led by a Datu (chieftain). Named after the boats (balangay) used by Malay settlers." },
                    { type: "table", content: "Social Classes in Pre-Colonial Philippines", headers: ["Class", "Description"], rows: [["Datu (Nobility)", "Chiefs/rulers; owned land and controlled resources"], ["Timawa (Freemen)", "Free people with rights; warriors and craftsmen"], ["Alipin (Dependents)", "Debt servants; not necessarily slaves — could earn freedom"]] },
                    { type: "list", content: "Key Features of Pre-Colonial Philippines", items: ["Active trade with China, India, Arabia, Borneo, and Java", "The Baybayin script used for writing", "Oral epics: Darangen (Maranao), Biag ni Lam-ang (Ilocano), Hinilawod (Visayan)", "Islam established in Mindanao by the 14th century"] },
                    { type: "note", content: "Pre-colonial Filipinos were NOT primitive — they had sophisticated governance, rich literature, active international trade, and well-developed social systems." },
                  ],
                  quiz: [
                    { question: "What was the basic political unit of pre-colonial Philippine society?", options: ["Kingdom", "Barangay", "Province", "Sultanate"], answer: 1, explanation: "The barangay was the basic political and social unit, led by a Datu." },
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
                  objectives: ["Trace the events of Spanish colonization", "Explain the Reduccion policy and its effects"],
                  sections: [
                    { type: "h2", content: "The Spanish Colonial Period" },
                    { type: "table", content: "Key Events in Spanish Colonization", headers: ["Year", "Event"], rows: [["1521", "Magellan arrives; killed in Battle of Mactan (Lapu-Lapu)"], ["1565", "Legazpi establishes first permanent Spanish settlement in Cebu"], ["1571", "Manila established as capital"], ["1896", "Philippine Revolution begins (Katipunan, Bonifacio)"], ["1898", "Treaty of Paris — Spain cedes Philippines to USA"]] },
                    { type: "definition", content: "Reduccion — Spanish colonial policy of forcibly relocating scattered indigenous communities into centralized towns (pueblos) near churches, to facilitate religious conversion, taxation, and forced labor (polo y servicio)." },
                    { type: "list", content: "Functions of the Church in Colonial Philippines", items: ["Evangelization: Converting Filipinos to Catholicism", "Education: Schools and universities (UST founded 1611)", "Record keeping: Baptismal, marriage, and death registers", "Political power: Friars became powerful figures defying civil authorities"] },
                  ],
                  quiz: [
                    { question: "The Reduccion policy involved:", options: ["Teaching Filipinos Spanish language", "Forcibly relocating scattered communities into centralized towns", "Granting land to Filipino nobles", "Establishing trade routes with China"], answer: 1, explanation: "Reduccion forcibly moved dispersed indigenous communities into centralized towns." },
                  ],
                },
              },
              {
                id: "ge2-m2t2", title: "Philippine Revolution and José Rizal",
                content: {
                  heading: "Philippine Revolution and José Rizal", term: "MIDTERM", module: "Module 2: The Spanish Colonial Period",
                  objectives: ["Explain the causes of the Philippine Revolution", "Analyze Rizal's contribution to Philippine nationalism"],
                  sections: [
                    { type: "h2", content: "José Rizal: The National Hero" },
                    { type: "list", content: "Key Works of José Rizal", items: ["Noli Me Tangere (1887) — Exposed social cancer of Spanish colonial society", "El Filibusterismo (1891) — Darker sequel showing consequences of oppression", "La Liga Filipina (1892) — Civic organization; led to his exile in Dapitan"] },
                    { type: "definition", content: "Katipunan (KKK) — Secret revolutionary society founded by Andres Bonifacio on July 7, 1892. Advocated armed revolution for independence." },
                    { type: "note", content: "Rizal was executed on December 30, 1896. December 30 is now Rizal Day — a national holiday." },
                  ],
                  quiz: [
                    { question: "Rizal's first novel, which exposed the social cancer of colonial society, is:", options: ["El Filibusterismo", "Noli Me Tangere", "La Liga Filipina", "Morga's Sucesos"], answer: 1, explanation: "Noli Me Tangere (1887) was Rizal's first novel exposing Spanish colonial abuses." },
                    { question: "The Katipunan was founded by:", options: ["José Rizal", "Emilio Aguinaldo", "Andres Bonifacio", "Apolinario Mabini"], answer: 2, explanation: "Andres Bonifacio founded the Katipunan on July 7, 1892." },
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
            id: "ge2-m3", title: "Module 3: American Period and Contemporary History",
            topics: [
              {
                id: "ge2-m3t1", title: "American Colonial Period (1898–1946)",
                content: {
                  heading: "American Colonial Period (1898–1946)", term: "FINALS", module: "Module 3: American Period and Contemporary History",
                  objectives: ["Explain the circumstances of American colonization", "Describe American colonial policies and their long-term effects"],
                  sections: [
                    { type: "h2", content: "The American Period" },
                    { type: "text", content: "After the Spanish-American War (1898), Spain ceded the Philippines to the USA for $20 million through the Treaty of Paris. Filipino revolutionary forces had declared independence on June 12, 1898, but were not recognized." },
                    { type: "list", content: "Key American Policies", items: ["Public education: English as medium; Thomasites (teacher volunteers)", "Commonwealth Government: Established 1935", "Jones Act (1916): Established Philippine legislature", "Tydings-McDuffie Act (1934): Promised independence after 10 years"] },
                    { type: "note", content: "The Philippines gained independence on July 4, 1946 (later moved to June 12). American colonial legacy includes the English language and public education system." },
                  ],
                  quiz: [
                    { question: "The Treaty of Paris (1898) resulted in:", options: ["Philippine independence from Spain", "Spain ceding the Philippines to the USA for $20 million", "USA declaring war on the Philippines", "Establishment of the Commonwealth Government"], answer: 1, explanation: "Treaty of Paris (December 10, 1898): Spain ceded the Philippines to USA for $20 million." },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  },

  // ─── GE 3: MATHEMATICS IN THE MODERN WORLD ──────────────────────────────────
  {
    id: "ge3", code: "GE 3", title: "Mathematics in the Modern World", shortTitle: "GE 3", units: 3,
    description: "Explores mathematics as a tool to quantify, organize, and control the world. Covers patterns in nature, mathematical language, logic, and financial mathematics.",
    terms: [
      {
        id: "prelim", label: "PRELIM",
        modules: [
          {
            id: "ge3-m1", title: "Module 1: Mathematics in Our World",
            topics: [
              {
                id: "ge3-m1t1", title: "Patterns and Numbers in Nature",
                content: {
                  heading: "Patterns and Numbers in Nature", term: "PRELIM", module: "Module 1: Mathematics in Our World",
                  objectives: ["Identify mathematical patterns in nature", "Explain the Fibonacci sequence and Golden Ratio", "Describe fractals and symmetry in natural phenomena"],
                  sections: [
                    { type: "h2", content: "Mathematics in Nature" },
                    { type: "text", content: "Mathematics is the universal language of nature. Mathematical patterns appear in sunflower seeds, seashells, snowflakes, and galaxies." },
                    { type: "definition", content: "Fibonacci Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89... Formula: F(n) = F(n-1) + F(n-2). Each number is the sum of the two preceding numbers." },
                    { type: "example", content: "Fibonacci in Nature:\n• Sunflower seeds: 21 spirals clockwise, 34 counterclockwise\n• Pineapple scales: 8, 13, 21 spirals\n• Leaf arrangement (phyllotaxis): follows Fibonacci ratios to maximize sunlight" },
                    { type: "definition", content: "Golden Ratio (φ ≈ 1.618) — As Fibonacci numbers get larger, their ratio F(n+1)/F(n) approaches φ. Appears in art (Parthenon), architecture, and nature (nautilus shells)." },
                    { type: "table", content: "Symmetry in Nature", headers: ["Type", "Description", "Example"], rows: [["Bilateral", "Mirror image across a central axis", "Human body, butterfly wings"], ["Radial", "Arranged around a central point", "Starfish, flowers, snowflakes"], ["Rotational", "Looks the same after rotation", "Pinwheel, sunflower"]] },
                    { type: "definition", content: "Fractal — A geometric shape that exhibits self-similarity at different scales. Examples: Romanesco broccoli, coastlines, snowflakes, fern leaves." },
                  ],
                  quiz: [
                    { question: "What is the 8th term of the Fibonacci sequence (starting: 0, 1, 1, 2...)?", options: ["13", "21", "8", "34"], answer: 0, explanation: "Fibonacci: 0(1st),1(2nd),1(3rd),2(4th),3(5th),5(6th),8(7th),13(8th). The 8th term is 13." },
                    { question: "The Golden Ratio φ is approximately:", options: ["1.414", "1.618", "2.718", "3.14159"], answer: 1, explanation: "The Golden Ratio φ (phi) ≈ 1.618." },
                    { question: "A fractal is characterized by:", options: ["Perfect straight lines", "Self-similarity at different scales", "Random patterns", "Only existing in mathematics textbooks"], answer: 1, explanation: "Fractals exhibit self-similarity — the same pattern repeats when you zoom in or out." },
                  ],
                },
              },
              {
                id: "ge3-m1t2", title: "Mathematical Language and Symbols",
                content: {
                  heading: "Mathematical Language and Symbols", term: "PRELIM", module: "Module 1: Mathematics in Our World",
                  objectives: ["Distinguish mathematical expressions from sentences", "Understand common symbols and notation", "Translate English phrases to mathematical expressions"],
                  sections: [
                    { type: "h2", content: "The Language of Mathematics" },
                    { type: "table", content: "Expressions vs. Sentences", headers: ["Type", "Definition", "Example"], rows: [["Expression", "Mathematical phrase (no verb, no = sign)", "3x + 5, 2y², x + y"], ["Equation", "Mathematical sentence with '=' showing equality", "2x + 3 = 7"], ["Inequality", "Uses <, >, ≤, ≥", "x + 2 > 5"]] },
                    { type: "table", content: "Common Mathematical Symbols", headers: ["Symbol", "Meaning", "Example"], rows: [["∈", "Is an element of", "3 ∈ {1,2,3}"], ["∅", "Empty set", "{} = ∅"], ["∀", "For all (universal)", "∀x, x + 0 = x"], ["∃", "There exists (existential)", "∃x: x² = 4"], ["⊂", "Subset of", "{1,2} ⊂ {1,2,3}"], ["∪", "Union", "A ∪ B"], ["∩", "Intersection", "A ∩ B"]] },
                    { type: "table", content: "English to Mathematical Expressions", headers: ["English Phrase", "Math Expression"], rows: [["Sum of a number and 5", "x + 5"], ["Twice a number decreased by 3", "2x − 3"], ["Product of a number and 7", "7x"], ["Square of a number increased by 1", "x² + 1"]] },
                  ],
                  quiz: [
                    { question: "Which is a mathematical EXPRESSION (not a sentence)?", options: ["2x + 3 = 7", "x > 5", "3x + 5", "y = 2x + 1"], answer: 2, explanation: "An expression has no '=' or inequality sign. '3x + 5' is an expression." },
                    { question: "∀ means:", options: ["There exists", "For all / for every", "Is an element of", "Is a subset of"], answer: 1, explanation: "∀ is the universal quantifier meaning 'for all' or 'for every'." },
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
            id: "ge3-m2", title: "Module 2: Mathematical Reasoning and Logic",
            topics: [
              {
                id: "ge3-m2t1", title: "Inductive and Deductive Reasoning",
                content: {
                  heading: "Inductive and Deductive Reasoning", term: "MIDTERM", module: "Module 2: Mathematical Reasoning and Logic",
                  objectives: ["Distinguish inductive from deductive reasoning", "Identify valid and invalid arguments", "Apply deductive reasoning to solve problems"],
                  sections: [
                    { type: "h2", content: "Mathematical Reasoning" },
                    { type: "definition", content: "Inductive Reasoning — Drawing a general conclusion (conjecture) from specific observations. Moving from specific to general. Results in probable but not certain conclusions." },
                    { type: "definition", content: "Deductive Reasoning — Drawing a specific conclusion from general principles. Moving from general to specific. If premises are true and logic is valid, the conclusion must be true." },
                    { type: "example", content: "Inductive: The sun rose in the east every day this week → The sun always rises in the east (conjecture).\n\nDeductive:\nPremise 1: All IT students study programming.\nPremise 2: Juan is an IT student.\nConclusion: Juan studies programming. (Necessarily true if premises are true)" },
                    { type: "table", content: "Logical Connectives", headers: ["Connective", "Symbol", "True When..."], rows: [["AND", "∧", "Both p and q are true"], ["OR", "∨", "At least one is true"], ["NOT", "¬p", "p is false"], ["IF...THEN", "p→q", "p is false OR q is true"], ["BICONDITIONAL", "p↔q", "p and q have same truth value"]] },
                  ],
                  quiz: [
                    { question: "Which type of reasoning draws a general conclusion from specific observations?", options: ["Deductive reasoning", "Inductive reasoning", "Abductive reasoning", "Circular reasoning"], answer: 1, explanation: "Inductive reasoning moves from specific observations to a general conclusion (conjecture)." },
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
            id: "ge3-m3", title: "Module 3: Statistics and Financial Mathematics",
            topics: [
              {
                id: "ge3-m3t1", title: "Descriptive Statistics",
                content: {
                  heading: "Descriptive Statistics", term: "FINALS", module: "Module 3: Statistics and Financial Mathematics",
                  objectives: ["Compute measures of central tendency", "Calculate measures of dispersion", "Interpret statistical data"],
                  sections: [
                    { type: "h2", content: "Descriptive Statistics" },
                    { type: "table", content: "Measures of Central Tendency", headers: ["Measure", "Definition", "Best Used When..."], rows: [["Mean (Average)", "Sum of all values / count — x̄ = Σx/n", "Data is symmetrical, no extreme outliers"], ["Median", "Middle value when data is sorted", "Data has outliers or is skewed"], ["Mode", "Most frequently occurring value", "Finding most common value"]] },
                    { type: "example", content: "Dataset: 72, 85, 90, 65, 85, 78, 92, 85, 70, 88\nMean = 810 / 10 = 81\nSorted: 65,70,72,78,85,85,85,88,90,92 → Median = (85+85)/2 = 85\nMode = 85 (appears 3 times)" },
                    { type: "list", content: "Measures of Spread", items: ["Range = Maximum − Minimum value", "Variance = Average of squared deviations from the mean", "Standard Deviation = Square root of variance", "IQR = Q3 − Q1"] },
                  ],
                  quiz: [
                    { question: "Which measure of central tendency is most affected by outliers?", options: ["Median", "Mode", "Mean", "Range"], answer: 2, explanation: "The mean is most sensitive to outliers." },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  },

  // ─── GE 4 ───────────────────────────────────────────────────────────────────
  {
    id: "ge4", code: "GE 4", title: "Purposive Communication", shortTitle: "GE 4", units: 3,
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
                    { type: "text", content: "Developed in 1949, this model views communication as one-way: sender encodes → channel → receiver decodes. Noise can disrupt the process. Limitation: no feedback." },
                    { type: "h3", content: "Schramm's Interactive Model" },
                    { type: "definition", content: "Field of Experience — The sum of a person's experiences, values, beliefs, and cultural background. Communication is most effective when sender and receiver have overlapping fields of experience." },
                    { type: "h3", content: "Transactional Model (Barnlund)" },
                    { type: "text", content: "Communication is simultaneous, ongoing, and mutually influential. Both parties are simultaneously senders and receivers. Most accurate model of real human communication." },
                  ],
                  quiz: [
                    { question: "Which model introduced the concept of 'feedback'?", options: ["Shannon-Weaver Model", "Schramm's Interactive Model", "Aristotle's Model", "Barnlund's Model"], answer: 1, explanation: "Schramm's Interactive Model added feedback, making communication two-way." },
                    { question: "Noise in communication refers to:", options: ["Loud background sounds only", "Any interference that distorts the message", "The speaker's tone of voice", "The length of the message"], answer: 1, explanation: "Noise includes any factor — physical, psychological, or semantic — that distorts the intended message." },
                  ],
                },
              },
              {
                id: "ge4-m1t2", title: "Types of Communication",
                content: {
                  heading: "Types and Forms of Communication", term: "PRELIM", module: "Module 1: Nature and Elements of Communication",
                  objectives: ["Distinguish verbal and non-verbal communication", "Explain non-verbal cues and proxemics"],
                  sections: [
                    { type: "h2", content: "Types of Communication" },
                    { type: "text", content: "Research by Albert Mehrabian: In face-to-face communication — 7% from words, 38% from tone of voice, 55% from non-verbal cues." },
                    { type: "list", content: "Types of Non-Verbal Communication", items: ["Kinesics — Body movements, gestures, facial expressions", "Proxemics — Use of physical space and distance (Edward T. Hall)", "Haptics — Communication through touch", "Paralanguage — Vocal qualities (tone, pitch, speed)", "Chronemics — Use of time in communication"] },
                    { type: "table", content: "Proxemic Zones (Edward T. Hall)", headers: ["Zone", "Distance", "Context"], rows: [["Intimate", "0–18 inches", "Close friends, family"], ["Personal", "18 inches – 4 feet", "Friends and acquaintances"], ["Social", "4–12 feet", "Formal interactions, colleagues"], ["Public", "12+ feet", "Public speaking, large gatherings"]] },
                  ],
                  quiz: [
                    { question: "According to Mehrabian, body language accounts for what % of face-to-face communication?", options: ["7%", "38%", "55%", "70%"], answer: 2, explanation: "Mehrabian: 55% body language, 38% tone, 7% words." },
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
                  objectives: ["Apply conventions of academic writing", "Write organized paragraphs using PEEL structure"],
                  sections: [
                    { type: "h2", content: "Academic Writing" },
                    { type: "list", content: "Characteristics of Academic Writing", items: ["Formal register and objective tone", "Evidence-based claims with proper citation", "Clear structure: introduction, body, conclusion", "Precise and concise language", "Third-person perspective (generally)", "Avoidance of contractions and colloquialisms"] },
                    { type: "definition", content: "PEEL Paragraph Structure — Point (topic sentence) → Evidence (supporting data/quotes) → Explanation (analysis of evidence) → Link (connection back to thesis or next paragraph)." },
                    { type: "example", content: "Point: Social media negatively affects academic performance. Evidence: Junco (2012) found students who used Facebook while studying scored lower on exams. Explanation: Multitasking fragments attention, reducing depth of learning. Link: Thus, digital media time management is essential for academic success." },
                  ],
                  quiz: [
                    { question: "In PEEL, what does the second 'E' stand for?", options: ["Evidence", "Explanation", "Example", "Elaborate"], answer: 1, explanation: "PEEL: Point, Evidence, Explanation, Link. Second E = Explanation." },
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
            id: "ge4-m3", title: "Module 3: Research Writing and Citation",
            topics: [
              {
                id: "ge4-m3t1", title: "APA Citation and Avoiding Plagiarism",
                content: {
                  heading: "Research Writing and Citation", term: "FINALS", module: "Module 3: Research Writing and Citation",
                  objectives: ["Apply APA citation format", "Distinguish plagiarism from proper citation"],
                  sections: [
                    { type: "h2", content: "Research Writing" },
                    { type: "definition", content: "Plagiarism — Presenting someone else's work, ideas, or words as your own without proper attribution. It is academic dishonesty." },
                    { type: "h3", content: "APA Citation Format (7th Edition)" },
                    { type: "example", content: "Book: Author, A. A. (Year). Title of work. Publisher.\nJournal: Author, A. A. (Year). Title. Journal Name, vol(issue), pp. https://doi.org/xxx\nWebsite: Author, A. A. (Year, Month Day). Title. Site Name. URL" },
                    { type: "list", content: "APA In-text Citation Rules", items: ["One author: (Santos, 2023)", "Two authors: (Santos & Reyes, 2023)", "Three or more: (Santos et al., 2023)", "Direct quote: (Santos, 2023, p. 45)"] },
                  ],
                  quiz: [
                    { question: "In APA format with 3+ authors, how do you cite in-text?", options: ["List all authors' names", "Use 'et al.' after the first author", "Use only the title", "Use the publisher's name"], answer: 1, explanation: "APA 3+ authors: (First Author et al., Year) — 'et al.' means 'and others'." },
                    { question: "Plagiarism means:", options: ["Writing too long a paper", "Presenting someone else's work as your own", "Using too many quotes", "Writing about controversial topics"], answer: 1, explanation: "Plagiarism is presenting another's work or ideas as your own without attribution." },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  },

  // ─── GE 5: THE CONTEMPORARY WORLD ──────────────────────────────────────────
  {
    id: "ge5", code: "GE 5", title: "The Contemporary World", shortTitle: "GE 5", units: 3,
    description: "Examines globalization and its political, economic, social, and cultural dimensions, and the challenges and opportunities it presents to nations and individuals.",
    terms: [
      {
        id: "prelim", label: "PRELIM",
        modules: [
          {
            id: "ge5-m1", title: "Module 1: Introduction to Globalization",
            topics: [
              {
                id: "ge5-m1t1", title: "Definitions of Globalization",
                content: {
                  heading: "Definitions of Globalization", term: "PRELIM", module: "Module 1: Introduction to Globalization",
                  objectives: [
                    "Write a personal definition of globalization based on a concept map",
                    "Differentiate the competing conceptions of globalization",
                    "Identify the underlying philosophies of the varying definitions",
                    "Agree on a working definition of globalization for the course",
                  ],
                  sections: [
                    { type: "h2", content: "What is Globalization?" },
                    { type: "text", content: "Perhaps you heard the phrase 'The world is getting smaller.' This is because of the primary driving force of the contemporary world — globalization. The concept of globalization is complex and multifaceted. It is a phenomenon that occurs at multiple levels and a process that affects people differently (Abinales & Claudio, 2018)." },
                    { type: "h2", content: "Scholarly Definitions of Globalization" },
                    { type: "table", content: "Key Definitions of Globalization", headers: ["Scholar/Source", "Year", "Definition"], rows: [
                      ["Ohmae", "1992", "The onset of the borderless world."],
                      ["Ritzer", "2015", "A trans-planetary process involving increasing liquidity and multidirectional flows of people, objects, places, and information."],
                      ["Giddens", "1990", "The intensification of worldwide social relations which link distant localities in such a way that local happenings are shaped by events occurring many miles away."],
                      ["Robertson", "1992", "The compression of the world and the intensification of consciousness of the world as a whole."],
                      ["OECD", "2002", "Markets and production in different countries becoming increasingly interdependent due to trade, services, capital, and technology flows."],
                      ["Beck", "2000", "Implies the weakening of state sovereignty and state structures."],
                      ["Nikitin & Elliott", "2003", "The establishment of the global market free from socio-political control."],
                      ["Scholte", "2000", "De-territorialization or the growth of superterritorial relations between people."],
                      ["Cooppan", "2001", "A process of cross-cultural interaction, exchange, and transformation."],
                      ["Manfred Steger", "Best definition", "The expansion and intensification of social relations and consciousness across world-time and world-space."],
                    ]},
                    { type: "note", content: "The best scholarly description is given by Manfred Steger: Globalization is 'the expansion and intensification of social relations and consciousness across world-time and world-space.' (Abinales & Claudio, 2018)" },
                    { type: "h2", content: "Types of Globalization" },
                    { type: "table", content: "Three Types of Globalization", headers: ["Type", "Focus", "Key Features"], rows: [
                      ["Economic Globalization", "Unification and integration of international financial markets", "Multinational corporations, global markets, free trade, FDI"],
                      ["Political Globalization", "Policies facilitating international trade and commerce", "International institutions: IMF, WTO, national governments"],
                      ["Cultural Globalization", "Social factors causing cultures to converge", "Communication technology, transportation, cultural exchange"],
                    ]},
                    { type: "h2", content: "Brief History of Globalization" },
                    { type: "list", content: "Stages of Globalization (Eriksen, 2020)", items: [
                      "Stage 1 (1400–1750) — Primary stage: geographic discoveries, colonization, transcontinental trade exchanges.",
                      "Stage 2 (1750–1880) — Incipient stage: formation of unitary states, development of trading relations, first international trade agreements.",
                      "Stage 3 (1880–1925) — Stage of development: manufactured production grows, transport evolves, population migration intensifies, multinational organizations take shape.",
                      "Stage 4 (1920–1927) — Great state powers crystallize; worldwide organizations and institutions develop.",
                      "Stage 5 (Late 20th century) — Intensification of regionalization and integration; strong development of multinational corporations.",
                    ]},
                    { type: "text", content: "After World War II, the United States led efforts to revive international trade under negotiated ground rules, starting a second wave of globalization. The current wave has been driven by free-market policies, dramatic reductions in trade barriers, and the rise of the digital economy." },
                    { type: "h2", content: "Effects of Globalization" },
                    { type: "table", content: "Advantages vs. Disadvantages of Globalization", headers: ["Advantages", "Disadvantages"], rows: [
                      ["More goods at lower prices through comparative advantage", "Widening inequality within nations"],
                      ["Scaled up businesses reaching larger markets", "Job displacement due to automation and cheaper labor abroad"],
                      ["Better quality and variety of products through competition", "Risk of pandemic spread due to increased travel"],
                      ["Innovation spreads more easily across borders", "Decimation of unique cultural identity and language"],
                      ["Free trade promotes economic growth and job creation", "Some critics say it lowers living standards in developed countries"],
                    ]},
                    { type: "note", content: "In the Philippines, globalization is seen through OFW remittances (8-10% of GDP), the BPO industry, and the influence of global culture on Filipino society." },
                  ],
                  quiz: [
                    { question: "According to Manfred Steger, globalization is best described as:", options: ["The onset of the borderless world", "The expansion and intensification of social relations and consciousness across world-time and world-space", "The weakening of state sovereignty", "The establishment of the global market free from socio-political control"], answer: 1, explanation: "Steger's definition is considered the best scholarly description: globalization is 'the expansion and intensification of social relations and consciousness across world-time and world-space.'" },
                    { question: "Which scholar defined globalization as 'the compression of the world and the intensification of consciousness of the world as a whole'?", options: ["Giddens", "Ohmae", "Robertson", "Beck"], answer: 2, explanation: "Robertson (1992) defined globalization as the compression of the world and intensification of consciousness of the world as a whole." },
                    { question: "Which TYPE of globalization focuses on social factors causing cultures to converge?", options: ["Economic Globalization", "Political Globalization", "Cultural Globalization", "Technological Globalization"], answer: 2, explanation: "Cultural globalization focuses on the social factors — like communication and transportation technology — that cause cultures to converge." },
                    { question: "The FIRST wave of modern globalization was driven by:", options: ["The internet and social media", "Steamships, railroads, and the telegraph", "Multinational corporations", "The United Nations"], answer: 1, explanation: "The first wave of modern globalization (19th century) was propelled by steamships, railroads, the telegraph, and increasing economic cooperation." },
                    { question: "Globalization is grounded in the theory of:", options: ["Social contract", "Comparative advantage", "Divine right", "Mercantilism"], answer: 1, explanation: "Globalization is grounded in the theory of comparative advantage — countries that are good at producing a particular good benefit by trading with others." },
                    { question: "Beck (2000) described globalization as:", options: ["A trans-planetary process of flows", "The onset of the borderless world", "The weakening of state sovereignty and state structures", "A process of cross-cultural interaction"], answer: 2, explanation: "Beck (2000) stated that globalization implies the weakening of state sovereignty and state structures." },
                    { question: "Which is Stage 3 of globalization according to Eriksen?", options: ["Geographic discoveries and colonization", "Formation of unitary states and trade agreements", "Manufactured production growth, transport evolution, multinational organizations take shape", "Intensification of regionalization"], answer: 2, explanation: "Stage 3 (1880–1925) is characterized by the growth of manufactured production, transport evolution, intensified international trade, and multinational organizations taking shape." },
                    { question: "Which effect of globalization is considered NEGATIVE?", options: ["Lower prices for consumers", "Access to global information", "Brain drain — skilled workers leaving developing countries", "Spread of technology"], answer: 2, explanation: "Brain drain, where skilled workers leave developing countries for better opportunities abroad, is considered a negative effect of globalization." },
                    { question: "Scholte (2000) described globalization as:", options: ["The borderless world", "De-territorialization or growth of superterritorial relations", "Compression of the world", "A process of cultural transformation"], answer: 1, explanation: "Scholte defined globalization as 'de-territorialization' or the growth of 'superterritorial' relations between people." },
                    { question: "The second wave of globalization after WWII was led by:", options: ["The United Kingdom", "The Soviet Union", "The United States", "China"], answer: 2, explanation: "After WWII, the United States led efforts to revive international trade and investment under negotiated ground rules, starting the second wave of globalization." },
                  ],
                },
              },
              {
                id: "ge5-m1t2", title: "Scapes of Globalization",
                content: {
                  heading: "Scapes of Globalization (Appadurai)", term: "PRELIM", module: "Module 1: Introduction to Globalization",
                  objectives: [
                    "Identify Arjun Appadurai's five scapes of globalization",
                    "Give examples of each scape in real-world contexts",
                  ],
                  sections: [
                    { type: "h2", content: "Arjun Appadurai" },
                    { type: "text", content: "Arjun Appadurai is a US-based cultural anthropologist born and educated in Mumbai, India. He moved to the US in 1967. His most important work is Modernity at Large: Cultural Dimensions of Globalization (1996), which offers a fivefold theory of scapes — together comprising the contemporary social imaginary." },
                    { type: "h2", content: "The Five Scapes of Globalization" },
                    { type: "table", content: "Appadurai's Five Scapes", headers: ["Scape", "Description", "Examples"], rows: [
                      ["1. Ethnoscape", "Refers to the global movement of people across borders", "Tourists, immigrants, refugees, OFWs, guest workers"],
                      ["2. Mediascape", "Refers to the flow of culture and information through media", "News broadcasts, Netflix, K-pop, social media, film"],
                      ["3. Technoscape", "Refers to the circulation of mechanical goods and software globally", "iPhone spread, computer hardware, industrial machinery"],
                      ["4. Financescape", "Denotes the global circulation of money and financial instruments", "Stock exchanges (NYSE, Nikkei), FDI, cryptocurrency"],
                      ["5. Ideoscape", "The realm where political ideas move around", "Democracy, human rights, communism, nationalism"],
                    ]},
                    { type: "h2", content: "Examples to Identify Each Scape" },
                    { type: "list", content: "Practice: Identify which scape each situation belongs to", items: [
                      "An individual posting personal views on Facebook for public consumption → MEDIASCAPE (flow of ideas through media)",
                      "Apple's iPhone movement across commodity chains → TECHNOSCAPE (circulation of technology)",
                      "Tourism putting people from developed and developing worlds in contact → ETHNOSCAPE (movement of people)",
                      "Brazilian telenovelas shown in Africa; Bollywood films in Canadian cinemas → MEDIASCAPE (flow of culture)",
                      "Transactions in NYSE and Nikkei affecting economies worldwide → FINANCESCAPE (global money circulation)",
                    ]},
                    { type: "note", content: "Remember the scapes with the acronym E-M-T-F-I: Ethno (people), Media (culture/info), Techno (machines/software), Finance (money), Ideo (ideas/politics)." },
                  ],
                  quiz: [
                    { question: "Which scape refers to the global movement of people?", options: ["Mediascape", "Technoscape", "Ethnoscape", "Financescape"], answer: 2, explanation: "Ethnoscape refers to the global movement of people — tourists, immigrants, refugees, OFWs." },
                    { question: "Transactions in the New York Stock Exchange affecting economies worldwide is an example of:", options: ["Ethnoscape", "Ideoscape", "Technoscape", "Financescape"], answer: 3, explanation: "Financescape denotes the global circulation of money. Stock exchange transactions affecting economies worldwide is a prime example." },
                    { question: "The spread of democracy and human rights as political ideas around the world represents:", options: ["Ethnoscape", "Ideoscape", "Mediascape", "Technoscape"], answer: 1, explanation: "Ideoscape is the realm where political ideas (democracy, human rights, communism) move around the globe." },
                    { question: "Arjun Appadurai's five scapes are found in his work:", options: ["The World is Flat", "Modernity at Large: Cultural Dimensions of Globalization", "The Globalization Paradox", "The End of History"], answer: 1, explanation: "Appadurai's theory of scapes is found in 'Modernity at Large: Cultural Dimensions of Globalization' (1996)." },
                    { question: "Brazilian telenovelas shown in African bus trips is an example of:", options: ["Financescape", "Ethnoscape", "Mediascape", "Technoscape"], answer: 2, explanation: "Mediascape refers to the flow of culture and information — including entertainment like telenovelas crossing national boundaries." },
                    { question: "Apple's iPhone spreading across global commodity chains is an example of:", options: ["Financescape", "Technoscape", "Ideoscape", "Ethnoscape"], answer: 1, explanation: "Technoscape refers to the circulation of mechanical goods and software globally — iPhone is a prime example." },
                    { question: "OFWs working abroad is best described under which scape?", options: ["Technoscape", "Mediascape", "Financescape", "Ethnoscape"], answer: 3, explanation: "OFWs (Overseas Filipino Workers) represent the movement of people globally, which is what Ethnoscape describes." },
                    { question: "How many scapes did Appadurai identify?", options: ["Three", "Four", "Five", "Six"], answer: 2, explanation: "Appadurai identified five scapes: Ethnoscape, Mediascape, Technoscape, Financescape, and Ideoscape." },
                  ],
                },
              },
              {
                id: "ge5-m1t3", title: "Theories on Globalization: Homogeneity and Heterogeneity",
                content: {
                  heading: "Theories on Globalization: Homogeneity & Heterogeneity", term: "PRELIM", module: "Module 1: Introduction to Globalization",
                  objectives: [
                    "Distinguish between homogenization and heterogenization theories of globalization",
                    "Explain Cultural Imperialism, McDonaldization, Neoliberalism, and Media Imperialism",
                    "Describe Cultural Convergence, Divergence, and Hybridization (Glocalization)",
                  ],
                  sections: [
                    { type: "h2", content: "Homogeneity Theories" },
                    { type: "text", content: "Homogeneity theories argue that globalization leads to the spread of a single, dominant culture — primarily Western/American — at the expense of local cultures." },
                    { type: "h3", content: "1. Cultural Imperialism" },
                    { type: "definition", content: "Cultural Imperialism — The domination of one culture over others through economic, political, or media power. Example: European architectural influence on Vigan Heritage Village; Japanese sushi becoming a global dish." },
                    { type: "h3", content: "2. Media Imperialism" },
                    { type: "definition", content: "Media Imperialism — The control of global media by a few powerful Western companies that spread their values and culture. Example: Netflix creating an 'image of exclusivity' among subscribers worldwide." },
                    { type: "h3", content: "3. Neoliberalism" },
                    { type: "definition", content: "Neoliberalism — An ideology promoting free markets, free trade, privatization, and reduced government regulation. Critics argue it creates economic inequality — 'Almost half of the world's wealth is now owned by just one percent of the population.' (Forbes)" },
                    { type: "h3", content: "4. McDonaldization" },
                    { type: "definition", content: "McDonaldization (George Ritzer) — The process by which the principles of the fast-food restaurant (efficiency, calculability, predictability, control) are coming to dominate more sectors of society. Fast-food culture saves time and creates business opportunities globally." },
                    { type: "h2", content: "Heterogeneity: Perspectives on Global Cultural Flows" },
                    { type: "text", content: "Heterogeneity theories argue that globalization does not simply erase local cultures but creates diversity and hybridity." },
                    { type: "table", content: "Three Perspectives on Global Cultural Flows", headers: ["Perspective", "Description", "Key Idea"], rows: [
                      ["Cultural Convergence", "Cultures become more similar due to globalization", "The world moves toward a single, shared culture (similar to Cultural Imperialism)"],
                      ["Cultural Divergence / Differentialism", "Cultures resist globalization and maintain their distinctiveness", "Local cultures push back against global influences; cultural differences persist"],
                      ["Cultural Hybridization / Glocalization", "Local and global cultures blend to create something new", "Global products are adapted to local tastes; McDonald's in the Philippines has rice meals and McSpaghetti"],
                    ]},
                    { type: "note", content: "Glocalization = Global + Local. Example: McDonald's serving Shaka Shaka Chicken in Japan, Dosa Masala Burger in India, Cheesy Egg Desal in the Philippines. Dubai, Mexico, China, Japan — all show architectural and cultural hybridization." },
                    { type: "h2", content: "Key Comparison" },
                    { type: "table", content: "Homogeneity vs. Heterogeneity Theories", headers: ["Homogeneity (Convergence)", "Heterogeneity (Divergence/Hybridization)"], rows: [
                      ["One global culture emerges", "Multiple, diverse cultures persist"],
                      ["Western/American culture dominates", "Local cultures adapt or resist global trends"],
                      ["Cultural Imperialism, McDonaldization, Neoliberalism", "Cultural Divergence, Glocalization"],
                    ]},
                  ],
                  quiz: [
                    { question: "McDonaldization was a concept developed by:", options: ["Arjun Appadurai", "George Ritzer", "Manfred Steger", "Anthony Giddens"], answer: 1, explanation: "George Ritzer developed the concept of McDonaldization — the spread of fast-food principles (efficiency, calculability, predictability, control) across society." },
                    { question: "Glocalization is an example of:", options: ["Cultural Convergence", "Cultural Imperialism", "Cultural Hybridization", "McDonaldization"], answer: 2, explanation: "Glocalization (Global + Local) represents Cultural Hybridization — global products are adapted to local tastes and cultures." },
                    { question: "Netflix creating an 'image of exclusivity' worldwide is an example of:", options: ["Cultural Divergence", "Media Imperialism", "Ethnoscape", "Glocalization"], answer: 1, explanation: "Media Imperialism refers to the control and spread of media by powerful Western companies like Netflix, shaping global culture and values." },
                    { question: "The idea that cultures RESIST globalization and maintain their distinctiveness is called:", options: ["Cultural Convergence", "Cultural Hybridization", "Cultural Divergence (Differentialism)", "McDonaldization"], answer: 2, explanation: "Cultural Divergence or Differentialism holds that local cultures resist globalization and maintain their distinctiveness." },
                    { question: "McDonald's offering rice meals in the Philippines and Dosa Masala Burger in India is an example of:", options: ["Cultural Imperialism", "Neoliberalism", "Media Imperialism", "Glocalization"], answer: 3, explanation: "This is Glocalization — global products adapted to local tastes, a form of Cultural Hybridization." },
                    { question: "Neoliberalism promotes all of the following EXCEPT:", options: ["Free markets", "Privatization", "Less government regulation", "Increased state control of trade"], answer: 3, explanation: "Neoliberalism promotes free markets, free trade, privatization, and LESS — not more — government regulation." },
                    { question: "Which theory argues that globalization creates a single dominant culture?", options: ["Cultural Divergence", "Cultural Hybridization", "Cultural Convergence / Cultural Imperialism", "Glocalization"], answer: 2, explanation: "Cultural Convergence and Cultural Imperialism both argue that globalization leads to a single, dominant global culture (primarily Western/American)." },
                    { question: "The principles of a fast-food restaurant (efficiency, predictability, calculability, control) spreading to all sectors of society is called:", options: ["Neoliberalism", "McDonaldization", "Media Imperialism", "Cultural Hybridization"], answer: 1, explanation: "McDonaldization (George Ritzer) is the process by which fast-food restaurant principles come to dominate more and more sectors of society." },
                    { question: "European architectural influence on Vigan Heritage Village is an example of:", options: ["Glocalization", "Cultural Imperialism", "Cultural Divergence", "Technoscape"], answer: 1, explanation: "European colonial architectural influence on Vigan is an example of Cultural Imperialism — cultural domination through historical colonial power." },
                    { question: "Which of these is NOT a homogeneity theory?", options: ["Cultural Imperialism", "McDonaldization", "Neoliberalism", "Cultural Divergence (Differentialism)"], answer: 3, explanation: "Cultural Divergence / Differentialism is a heterogeneity theory — it argues cultures RESIST and maintain distinctiveness against globalization." },
                  ],
                },
              },
            ],
          },
          {
            id: "ge5-m2", title: "Module 2: The Global Economy",
            topics: [
              {
                id: "ge5-m2t1", title: "What is a Global Economy?",
                content: {
                  heading: "What is a Global Economy?", term: "PRELIM", module: "Module 2: The Global Economy",
                  objectives: [
                    "Define economic globalization",
                    "Identify the actors that facilitate economic globalization",
                    "Define the modern world system",
                    "Articulate a stance on global economic integration",
                  ],
                  sections: [
                    { type: "h2", content: "The Global Economy Defined" },
                    { type: "definition", content: "Global Economy — The interconnected worldwide economic activities that take place between multiple countries, encompassing production, consumption, economic management, exchange of financial values, and trade of goods and services." },
                    { type: "h2", content: "Characteristics of the Global Economy" },
                    { type: "table", content: "Key Characteristics of the Global Economy", headers: ["Characteristic", "Description", "Example"], rows: [
                      ["Globalization", "Integration of national economies through trade, communication, immigration, and transportation", "BPO industry in the Philippines"],
                      ["International Trade", "Exchange of goods and services between countries; countries specialize via comparative advantage", "Philippines exports electronics; imports petroleum"],
                      ["International Finance", "Currency exchange rates and monetary policy; money transferred faster than goods", "Remittances from OFWs; foreign exchange markets"],
                      ["Global Investment", "Investment not constrained by geographical boundaries, mainly via FDI", "Samsung investing in factories abroad"],
                    ]},
                    { type: "h2", content: "Why is the Global Economy Important?" },
                    { type: "list", content: "Benefits of the Global Economy", items: [
                      "Foundation for worldwide economic growth through international transactions",
                      "Encourages competitiveness between countries in various markets",
                      "Raises productivity and efficiency across countries",
                      "Helps development of underdeveloped countries by allowing them to import capital goods",
                      "Free trade allows countries to specialize in goods where they have comparative advantage",
                    ]},
                    { type: "h2", content: "Who Controls the Global Economy?" },
                    { type: "text", content: "While governments hold power over national economies, it is large banks and corporations that effectively control and fund governments. For example, Morgan Stanley, Goldman Sachs, and JP Morgan have expanded beyond banking into oil, ports, airports, and electricity — effectively becoming hybrid entities beyond traditional banking." },
                    { type: "h2", content: "Factors Affecting the Global Economy" },
                    { type: "list", content: "Key Factors Influencing the Global Economy", items: ["Natural resources", "Infrastructure", "Population", "Labour", "Human capital", "Technology", "Law"] },
                    { type: "note", content: "The global economy functions primarily through transactions — international trade between top economies. These include trade in everything from food to weapons to technology." },
                  ],
                  quiz: [
                    { question: "The global economy refers to:", options: ["Economic activities within a single country", "Interconnected worldwide economic activities between multiple countries", "The policies of the World Trade Organization", "The GDP of the G8 nations"], answer: 1, explanation: "The global economy refers to interconnected worldwide economic activities between multiple countries, encompassing trade, finance, and investment." },
                    { question: "Foreign Direct Investment (FDI) is a feature of which characteristic of the global economy?", options: ["International Trade", "International Finance", "Global Investment", "Globalization"], answer: 2, explanation: "Global Investment mainly takes place via FDI — investment strategies not constrained by geographical boundaries." },
                    { question: "Comparative advantage refers to:", options: ["A country producing more goods than others", "An economy's ability to produce goods at a lower opportunity cost than trade partners", "The financial power of multinational corporations", "The advantage of having more natural resources"], answer: 1, explanation: "Comparative advantage is an economy's ability to produce goods at a lower opportunity cost than trade partners — the basis for international trade." },
                    { question: "Which factor does NOT directly affect the global economy?", options: ["Technology", "Infrastructure", "Astrology", "Labour"], answer: 2, explanation: "Astrology is not among the key factors. The actual factors include: natural resources, infrastructure, population, labour, human capital, technology, and law." },
                    { question: "According to the module, who REALLY controls the global economy?", options: ["National governments", "The United Nations", "Large banks and multinational corporations", "The International Monetary Fund alone"], answer: 2, explanation: "While governments hold power, it is actually large banks and corporations (like Goldman Sachs, Morgan Stanley) that effectively control and fund governments." },
                  ],
                },
              },
              {
                id: "ge5-m2t2", title: "History of Global Economy and Economic Crises",
                content: {
                  heading: "History of Global Economy & Economic Crises", term: "PRELIM", module: "Module 2: The Global Economy",
                  objectives: [
                    "Trace the historical development of the global economy from Mercantilism to today",
                    "Explain the 2008 Global Financial Crisis and government monetary response",
                    "Identify modern economic changes: Neoliberalism, cryptocurrency, and AI",
                  ],
                  sections: [
                    { type: "h2", content: "Historical Development of the Global Economy" },
                    { type: "table", content: "History of Economic Globalization", headers: ["Era", "Period", "Key Features"], rows: [
                      ["Mercantilism", "16th–18th century", "Countries competed to sell more goods to boost monetary reserves (gold and silver). Export more than import. Strong government control of trade."],
                      ["Open Trade System / Gold Standard", "19th century", "Adopted gold standard at international conference in Paris to prevent mercantilist isolationism."],
                      ["First Wave of Globalization", "19th–early 20th century", "Propelled by steamships, railroads, telegraph; ended with WWI and the Great Depression."],
                      ["GATT Era", "Post-WWII", "General Agreement on Tariffs and Trade guided globalization through negotiations."],
                      ["Neoliberalism Era", "1970s–present", "Free markets, free trade, privatization, less government regulation dominate the global economy."],
                    ]},
                    { type: "h2", content: "The 2008 Global Financial Crisis" },
                    { type: "text", content: "During the 2008 Global Financial Crisis, banks and financial institutions lost billions due to the collapse of the housing market." },
                    { type: "list", content: "Causes of the 2008 Crisis", items: [
                      "Banks gave housing loans (mortgages) to people with low creditworthiness",
                      "Very low interest rates encouraged excessive borrowing to buy houses",
                      "High demand for houses inflated real estate prices, creating a housing bubble",
                      "Banks combined loans into Mortgage-Backed Securities (MBS) — investment products sold like stocks",
                      "When homeowners could not pay loans, the value of MBS collapsed",
                    ]},
                    { type: "definition", content: "Mortgage-Backed Securities (MBS) — Banks combined many housing loans together (pinagsama-sama) and sold them like stocks to investors. When homeowners stopped paying, the 'bottle' (investment fund) became empty and investors lost money." },
                    { type: "h3", content: "Government Response: Monetary Policy" },
                    { type: "list", content: "Federal Reserve Response to the 2008 Crisis", items: [
                      "Lowering interest rates to encourage borrowing",
                      "Increasing the money supply",
                      "Encouraging borrowing and spending to stimulate economic recovery",
                    ]},
                    { type: "h2", content: "Modern Economic Changes" },
                    { type: "table", content: "New Economic Trends", headers: ["Trend", "Description", "Impact"], rows: [
                      ["Neoliberalism", "Free markets, free trade, privatization, less regulation", "Creates economic inequality between rich and poor countries; richer countries benefit more"],
                      ["Cryptocurrency (Bitcoin)", "Digital, decentralized currency not controlled by a central bank", "New forms of value exchange outside traditional banking"],
                      ["Artificial Intelligence (AI)", "Transforms production, e-commerce, call centers, data analysis", "Increases productivity but may reduce need for human labor"],
                    ]},
                    { type: "note", content: "Economic crises reveal weaknesses in political and economic systems. When economies collapse, tensions between countries may increase and sometimes lead to conflict." },
                  ],
                  quiz: [
                    { question: "Mercantilism was the dominant economic system during:", options: ["The 19th–20th century", "16th–18th century", "Ancient times", "Post-WWII"], answer: 1, explanation: "Mercantilism dominated from the 16th to 18th century. Countries competed to export more than they imported to accumulate gold and silver." },
                    { question: "Mortgage-Backed Securities (MBS) contributed to the 2008 crisis because:", options: ["They were created by the government", "They combined housing loans into investment products that collapsed when homeowners defaulted", "They increased housing prices directly", "They were unregulated cryptocurrency"], answer: 1, explanation: "MBS combined many housing loans and sold them as investments. When homeowners stopped paying, these securities lost their value, causing the financial crisis." },
                    { question: "The Federal Reserve responded to the 2008 crisis by:", options: ["Raising interest rates significantly", "Lowering interest rates and increasing money supply", "Stopping all international trade", "Creating new cryptocurrency"], answer: 1, explanation: "The Federal Reserve lowered interest rates, increased the money supply, and encouraged borrowing and spending to stimulate economic recovery." },
                    { question: "Neoliberalism promotes:", options: ["Strong government control of markets", "Free markets, free trade, privatization, and less regulation", "Collective ownership of production", "Equal distribution of all wealth"], answer: 1, explanation: "Neoliberalism promotes free markets, free trade, privatization, and reduced government regulation — the dominant economic ideology today." },
                    { question: "Bitcoin is best described as:", options: ["A government-backed currency", "A digital, decentralized currency not controlled by a central bank", "A form of stock investment", "An international monetary fund currency"], answer: 1, explanation: "Bitcoin is a digital, decentralized currency — it is not controlled by any central bank or government." },
                    { question: "The 2008 housing bubble was primarily caused by:", options: ["High interest rates discouraging borrowing", "Low interest rates encouraging excessive borrowing to buy houses", "A shortage of available housing", "Stock market manipulation"], answer: 1, explanation: "Very low interest rates encouraged many people to borrow money to buy houses, driving up demand and prices, creating the housing bubble." },
                  ],
                },
              },
            ],
          },
          {
            id: "ge5-m3", title: "Module 3: Market Integration",
            topics: [
              {
                id: "ge5-m3t1", title: "Definition of Market Integration and Free Trade",
                content: {
                  heading: "Market Integration and Free Trade", term: "PRELIM", module: "Module 3: Market Integration",
                  objectives: [
                    "Explain the role of international financial institutions in the creation of a global economy",
                    "Narrate a short history of global market integration in the 20th century",
                    "Identify the attributes of global corporations",
                  ],
                  sections: [
                    { type: "h2", content: "What is Market Integration?" },
                    { type: "definition", content: "Market Integration — The unrestricted circulation of goods, services, and production factors across various regions, leading to the equalization of prices for goods and capital." },
                    { type: "text", content: "Example: A small business in the Philippines producing handmade crafts can export to Malaysia and Thailand without customs barriers. Prices remain relatively consistent across these markets — illustrating market integration." },
                    { type: "h2", content: "Free Trade" },
                    { type: "definition", content: "Free Trade — International trade (importation and exportation) left to its natural course without tariffs and non-tariff trade barriers such as quotas, embargoes, sanctions, or other restrictions." },
                    { type: "table", content: "Trade Barriers", headers: ["Barrier", "Definition", "Example"], rows: [
                      ["Tariff", "Tax or duty on imports/exports", "Import tax on foreign cars"],
                      ["Embargo", "Government ban on trade with a certain country", "US embargo on Cuba, North Korea, Iran"],
                      ["Economic Sanctions", "Commercial and financial penalties against a country/group", "Sanctions against Russia"],
                      ["Quota", "Limitation on the number of products that can be imported", "Limit on imported rice"],
                    ]},
                    { type: "h2", content: "Major Free Trade Areas of the World" },
                    { type: "table", content: "World's Major Free Trade Areas", headers: ["Agreement", "Members", "Key Facts"], rows: [
                      ["NAFTA (North American Free Trade Agreement)", "Canada, USA, Mexico", "Effective January 1, 1994; tariffs fully abolished in 2008; trilateral trade exceeded US$1.12 trillion by 2014"],
                      ["AFTA (ASEAN Free Trade Area)", "Brunei, Indonesia, Malaysia, Philippines, Singapore, Thailand, Vietnam, Laos, Myanmar, Cambodia", "Signed January 1992 in Singapore; largely removed all export/import duties; combined GDP US$2.3 trillion in 2012"],
                      ["MERCOSUR (Southern Common Market)", "Argentina, Brazil, Paraguay, Uruguay", "Established by Treaty of Asuncion 1991; combined GDP ~US$2.9 trillion"],
                      ["COMESA (Common Market of Eastern and Southern Africa)", "19 African nations including Egypt, Kenya, Rwanda, Uganda", "Formed December 1994; annual export bill exceeding US$80 billion"],
                      ["European Union (EU)", "28 member countries (Austria, France, Germany, etc.)", "Single market with no tariffs; GDP ~€14.8 trillion in 2016; founded through Treaty of Rome 1957"],
                      ["CPTPP (Trans-Pacific Partnership)", "Australia, Brunei, Canada, Chile, Japan, Malaysia, Mexico, New Zealand, Peru, Singapore, Vietnam", "Market of nearly 500 million people; signed February 2016"],
                    ]},
                    { type: "h2", content: "Protectionism vs. Free Trade" },
                    { type: "table", content: "Free Trade vs. Protectionism", headers: ["Free Trade", "Protectionism"], rows: [
                      ["No tariffs or trade barriers", "Uses tariffs and quotas to protect domestic industries"],
                      ["Advocated by right-wing economic parties", "Advocated by left-wing and economically nationalist parties"],
                      ["Promotes economic growth and lower prices", "Protects domestic jobs and industries from foreign competition"],
                    ]},
                    { type: "definition", content: "Protectionism — The theory or practice of shielding a country's domestic industries from foreign competition by taxing imports. Economic Nationalism — An ideology favoring state interventionism to emphasize domestic control of the economy, labor, and capital." },
                    { type: "h2", content: "Brief History of Market Integration in the 20th Century" },
                    { type: "list", content: "Historical Timeline of Market Integration", items: [
                      "WWI (1914) — Ended the liberal economic order; import/export ratios shifted dramatically",
                      "Great Depression — Major reason for severe protectionism across the world",
                      "Post-WWII — Reintegration supported by technological and political factors; GATT guided negotiations",
                      "1990s–2000s — Intensification of free trade agreements and regional economic blocs",
                    ]},
                  ],
                  quiz: [
                    { question: "Market integration refers to:", options: ["Government control of all markets", "The unrestricted circulation of goods and services across regions", "Protection of domestic industries from foreign competition", "A single country's internal trade policies"], answer: 1, explanation: "Market integration is the unrestricted circulation of goods, services, and production factors across regions, equalizing prices." },
                    { question: "NAFTA was originally signed among:", options: ["USA, UK, Canada", "Canada, USA, Mexico", "USA, Mexico, Brazil", "Canada, Mexico, Cuba"], answer: 1, explanation: "NAFTA (North American Free Trade Agreement) was a free trade pact among Canada, the United States, and Mexico." },
                    { question: "The ASEAN Free Trade Area (AFTA) was signed in:", options: ["Bangkok, 1967", "Singapore, 1992", "Manila, 1989", "Jakarta, 2000"], answer: 1, explanation: "AFTA was signed in January 1992 in Singapore among the ASEAN member nations." },
                    { question: "A government-instituted prevention of exports/imports with a certain country is called:", options: ["Tariff", "Quota", "Embargo", "Subsidy"], answer: 2, explanation: "An embargo is a government ban on trade or commercial activity with a specific country (e.g., US embargo on Cuba, North Korea, and Iran)." },
                    { question: "Protectionism is generally advocated by:", options: ["Right-wing economic parties", "Economically left-wing and nationalist parties", "Multinational corporations", "The World Trade Organization"], answer: 1, explanation: "In government, protectionism is predominantly advocated by economically left-wing political parties and economic nationalists." },
                    { question: "The European Union was originally established through:", options: ["Treaty of Westphalia", "Treaty of Asuncion", "Treaty of Rome (1957)", "Bangkok Declaration"], answer: 2, explanation: "The EU traces its origins to the Treaty of Rome (1957), which established the European Economic Community (Common Market)." },
                    { question: "Which free trade area covers 19 African nations?", options: ["NAFTA", "MERCOSUR", "AFTA", "COMESA"], answer: 3, explanation: "COMESA (Common Market of Eastern and Southern Africa) covers 19 African nations and was formed in December 1994." },
                    { question: "Economic Nationalism emphasizes:", options: ["Open borders and free trade", "Domestic control of economy, labor, and capital even with trade restrictions", "Global financial integration", "Elimination of all tariffs"], answer: 1, explanation: "Economic nationalism favors state interventionism with policies emphasizing domestic control of the economy, labor, and capital formation." },
                  ],
                },
              },
              {
                id: "ge5-m3t2", title: "International Financial Institutions",
                content: {
                  heading: "International Financial Institutions", term: "PRELIM", module: "Module 3: Market Integration",
                  objectives: [
                    "Identify the major international financial institutions",
                    "Describe the roles of the World Bank and the IMF",
                  ],
                  sections: [
                    { type: "h2", content: "International Financial Institutions (IFIs)" },
                    { type: "text", content: "International non-profit agencies are major sources of financing — including regional development banks and global banks — providing funds for productive development projects and promoting economic development." },
                    { type: "h2", content: "The World Bank Group" },
                    { type: "definition", content: "World Bank — A multinational financial institution established at the end of WWII (1944) to provide long-term capital for the reconstruction and development of member countries. It provides much of the planning and financing for economic development projects involving billions of dollars." },
                    { type: "table", content: "World Bank Group Components", headers: ["Institution", "Founded", "Key Role"], rows: [
                      ["IBRD (International Bank for Reconstruction and Development)", "1945", "Provides funds to governments by borrowing from world capital markets; funds for economic infrastructure (roads, power)"],
                      ["IDA (International Development Association)", "1960", "Provides financial support to Least Developed Countries (LDCs); 40–50 year credit terms with no interest"],
                      ["IFC (International Finance Corporation)", "1956", "Provides risk capital for private enterprises; loans to private firms in developing countries (7–12 year terms)"],
                    ]},
                    { type: "list", content: "What the World Bank Does", items: [
                      "World's largest source of development assistance — nearly US$30 billion in loans annually",
                      "Invests in people: basic health and education",
                      "Protects the environment",
                      "Supports private business development",
                      "Strengthens government capacity for quality, efficient services",
                      "Focuses on social development, inclusion, governance, and poverty reduction",
                    ]},
                    { type: "h2", content: "International Monetary Fund (IMF)" },
                    { type: "definition", content: "IMF — A cooperative institution that 182 countries voluntarily joined to maintain a stable system of buying and selling their currencies. Its policies are guided by the Articles of Agreement. It lends money to members with financial difficulties — but only if they undertake economic reforms." },
                    { type: "table", content: "IMF Accomplishments", headers: ["Achievement", "Description"], rows: [
                      ["Sustained trade growth", "Supported a rapidly increasing volume of trade and investment"],
                      ["Flexibility", "Adapted to changes in international commerce"],
                      ["Survival", "Survived various crises and business cycle swings"],
                      ["Cooperation", "Established capacity for international cooperation"],
                      ["Reform", "Demonstrated capacity to accommodate reforms and improvements"],
                    ]},
                    { type: "note", content: "Contrary to widespread perception, the IMF has no effective authority over the domestic economic policies of its members — it can only require reforms as a condition of lending." },
                  ],
                  quiz: [
                    { question: "The World Bank was established in:", options: ["1941", "1944", "1947", "1950"], answer: 1, explanation: "The World Bank was established at the end of WWII in 1944 to help provide long-term capital for reconstruction and development." },
                    { question: "The IDA (International Development Association) was formed to:", options: ["Regulate international currency exchange", "Provide financial support to Least Developed Countries with soft credit terms", "Lend to private enterprises only", "Control global stock markets"], answer: 1, explanation: "IDA was formed in 1960 as part of the World Bank Group to provide financial support to LDCs — with 40–50 year credit terms and no interest." },
                    { question: "The IMF lends money to members on the condition that:", options: ["They have gold reserves", "They undertake economic reforms", "They are members of the UN Security Council", "They have no existing debts"], answer: 1, explanation: "IMF lends money only on the condition that recipients undertake economic reforms to eliminate their financial difficulties." },
                    { question: "The IFC (International Finance Corporation) primarily lends to:", options: ["Government infrastructure projects", "Private enterprises in developing countries", "Military programs", "Developed countries only"], answer: 1, explanation: "The IFC provides risk capital and loans to private firms in developing member countries, usually for 7–12 years." },
                    { question: "The World Bank provides approximately how much in annual loans?", options: ["US$3 billion", "US$10 billion", "US$30 billion", "US$100 billion"], answer: 2, explanation: "The World Bank is the world's largest source of development assistance, providing nearly US$30 billion in loans annually." },
                  ],
                },
              },
              {
                id: "ge5-m3exam", title: "Prelim Comprehensive Exam (50 Items)",
                content: {
                  heading: "Prelim Comprehensive Exam", term: "PRELIM", module: "Module 3: Market Integration",
                  objectives: ["Review all Prelim topics: Globalization, Global Economy, and Market Integration"],
                  sections: [
                    { type: "note", content: "This is your 50-item Prelim Comprehensive Exam covering Modules 1–3: Introduction to Globalization, The Global Economy, and Market Integration." },
                  ],
                  quiz: [
                    { question: "1. Manfred Steger defined globalization as:", options: ["The onset of the borderless world", "The expansion and intensification of social relations and consciousness across world-time and world-space", "A trans-planetary process of liquidity", "The weakening of state sovereignty"], answer: 1, explanation: "Steger's definition is considered the best scholarly description: 'the expansion and intensification of social relations and consciousness across world-time and world-space.'" },
                    { question: "2. Which scholar defined globalization as 'the intensification of worldwide social relations which link distant localities'?", options: ["Ohmae", "Ritzer", "Giddens", "Robertson"], answer: 2, explanation: "Giddens (1990) defined globalization as the intensification of worldwide social relations linking distant localities." },
                    { question: "3. According to Appadurai, the global movement of people is called:", options: ["Mediascape", "Technoscape", "Financescape", "Ethnoscape"], answer: 3, explanation: "Ethnoscape refers to the global movement of people — tourists, immigrants, refugees, guest workers." },
                    { question: "4. The global circulation of money is referred to as:", options: ["Ethnoscape", "Ideoscape", "Financescape", "Mediascape"], answer: 2, explanation: "Financescape denotes the global circulation of money and financial instruments." },
                    { question: "5. McDonaldization was introduced by:", options: ["Arjun Appadurai", "George Ritzer", "Manfred Steger", "Anthony Giddens"], answer: 1, explanation: "George Ritzer introduced the concept of McDonaldization." },
                    { question: "6. Glocalization is best described as:", options: ["Cultural Convergence", "Cultural Imperialism", "Cultural Hybridization (blend of global and local)", "Cultural Divergence"], answer: 2, explanation: "Glocalization represents Cultural Hybridization — global products adapted to local cultures." },
                    { question: "7. Which type of globalization focuses on policy-making institutions like the IMF and WTO?", options: ["Economic Globalization", "Political Globalization", "Cultural Globalization", "Technological Globalization"], answer: 1, explanation: "Political globalization deals with policies facilitating international trade and the institutions that implement them, like the IMF and WTO." },
                    { question: "8. The theory of comparative advantage states that:", options: ["Countries should produce all goods themselves", "Countries that produce goods at a lower opportunity cost should export them", "Richer nations always benefit more from trade", "Free trade creates more losers than winners"], answer: 1, explanation: "Comparative advantage: countries that produce goods at a lower opportunity cost benefit by exporting them and importing others." },
                    { question: "9. Arjun Appadurai's five scapes are found in:", options: ["The World is Flat", "Modernity at Large (1996)", "The Globalization Paradox", "Nations and Nationalism"], answer: 1, explanation: "Appadurai's fivefold theory of scapes is found in 'Modernity at Large: Cultural Dimensions of Globalization' (1996)." },
                    { question: "10. A government ban on trade with a specific country is called:", options: ["Tariff", "Quota", "Embargo", "Subsidy"], answer: 2, explanation: "An embargo is a government-instituted ban on trade or commercial activity with a specific country." },
                    { question: "11. NAFTA was originally composed of:", options: ["USA, UK, Canada", "USA, Mexico, Canada", "USA, Mexico, Brazil", "Canada, UK, Australia"], answer: 1, explanation: "NAFTA (North American Free Trade Agreement) originally comprised the USA, Mexico, and Canada." },
                    { question: "12. The ASEAN Free Trade Area (AFTA) was signed in:", options: ["Bangkok, 1967", "Singapore, 1992", "Manila, 1989", "Kuala Lumpur, 2001"], answer: 1, explanation: "AFTA was signed in January 1992 in Singapore among ASEAN member nations." },
                    { question: "13. Mortgage-Backed Securities (MBS) during the 2008 crisis were:", options: ["Government bonds backed by gold", "Housing loans combined and sold as investment products", "International currency exchange mechanisms", "Central bank reserve instruments"], answer: 1, explanation: "MBS combined many housing loans together and sold them like stocks to investors. When homeowners defaulted, these investments collapsed." },
                    { question: "14. The Federal Reserve responded to the 2008 crisis by:", options: ["Raising interest rates", "Lowering interest rates and increasing money supply", "Stopping all international trade", "Creating cryptocurrency"], answer: 1, explanation: "The Federal Reserve lowered interest rates, increased money supply, and encouraged borrowing and spending to stimulate recovery." },
                    { question: "15. Protectionism is advocated primarily by:", options: ["Right-wing economic parties", "Economically left-wing parties and economic nationalists", "The World Trade Organization", "Multinational corporations"], answer: 1, explanation: "Protectionism is predominantly advocated by economically left-wing parties and economic nationalists who want to protect domestic industries." },
                    { question: "16. The World Bank was established in:", options: ["1941", "1944", "1947", "1950"], answer: 1, explanation: "The World Bank was established in 1944 at the end of WWII to provide long-term capital for reconstruction and development." },
                    { question: "17. The IDA provides financial support primarily to:", options: ["Wealthy nations", "Private corporations", "Least Developed Countries (LDCs)", "Military programs"], answer: 2, explanation: "IDA (International Development Association, 1960) provides financial support to LDCs with 40-50 year credit terms and no interest." },
                    { question: "18. Which scape covers the flow of political ideas globally?", options: ["Ethnoscape", "Mediascape", "Technoscape", "Ideoscape"], answer: 3, explanation: "Ideoscape is the realm where political ideas — democracy, human rights, communism — move around the globe." },
                    { question: "19. Robertson (1992) defined globalization as:", options: ["The borderless world", "The compression of the world and intensification of consciousness of the world as a whole", "De-territorialization", "Weakening of state sovereignty"], answer: 1, explanation: "Robertson (1992) defined globalization as 'the compression of the world and the intensification of consciousness of the world as a whole.'" },
                    { question: "20. Market integration refers to:", options: ["Government control of all trade", "Unrestricted circulation of goods, services, and production factors across regions", "National economic policies", "Bilateral trade agreements only"], answer: 1, explanation: "Market integration is the unrestricted circulation of goods, services, and production factors leading to equalization of prices across regions." },
                    { question: "21. Mercantilism was the dominant economic system during:", options: ["Ancient times", "16th–18th century", "19th century", "Post-WWII"], answer: 1, explanation: "Mercantilism dominated from the 16th to 18th century — countries competed to export more than import to accumulate gold and silver." },
                    { question: "22. Cultural Imperialism refers to:", options: ["Cultural exchange between equal partners", "Domination of one culture over others through economic, political, or media power", "Local cultures resisting globalization", "Cultural blending creating new hybrid forms"], answer: 1, explanation: "Cultural Imperialism is the domination of one culture over others — often Western/American — through economic or media power." },
                    { question: "23. Neoliberalism promotes all of the following EXCEPT:", options: ["Free markets", "Privatization", "Less government regulation", "Collective state ownership of industry"], answer: 3, explanation: "Neoliberalism opposes collective state ownership. It promotes free markets, privatization, free trade, and less government regulation." },
                    { question: "24. The IMF lends to member countries only on the condition that they:", options: ["Are members of the G8", "Undertake economic reforms", "Have large gold reserves", "Have no existing foreign debt"], answer: 1, explanation: "The IMF lends only when members agree to undertake economic reforms to eliminate their financial difficulties." },
                    { question: "25. Appadurai was born and educated in:", options: ["New York", "London", "Mumbai, India", "Tokyo"], answer: 2, explanation: "Arjun Appadurai was born and educated in Mumbai, India, and moved to the US in 1967." },
                    { question: "26. Bitcoin is best described as:", options: ["A government-backed currency", "A digital, decentralized currency not controlled by a central bank", "A form of World Bank bond", "An IMF reserve currency"], answer: 1, explanation: "Bitcoin is a digital, decentralized currency not controlled by any central bank or government." },
                    { question: "27. The CPTPP (formerly TPP) covers a market of:", options: ["1 billion people", "Nearly 500 million people", "2 billion people", "250 million people"], answer: 1, explanation: "The CPTPP covers a market of nearly 500 million people across its member countries." },
                    { question: "28. The principle that fast-food efficiency and predictability spreads to all sectors of society is called:", options: ["Neoliberalism", "Glocalization", "McDonaldization", "Media Imperialism"], answer: 2, explanation: "McDonaldization (Ritzer) is the process by which fast-food restaurant principles — efficiency, calculability, predictability, control — spread across society." },
                    { question: "29. The IFC primarily lends to:", options: ["National governments", "Private enterprises in developing countries", "Developed countries only", "International agencies"], answer: 1, explanation: "The IFC (International Finance Corporation, 1956) provides risk capital and loans to private firms in developing member countries." },
                    { question: "30. Stage 1 of globalization (1400–1750) is characterized by:", options: ["Multinational corporations and digital economy", "Geographic discoveries, colonization, and transcontinental trade", "GATT negotiations and free trade agreements", "Regionalization and integration"], answer: 1, explanation: "Stage 1 (1400–1750) witnessed geographic discoveries, colonization, and the appearance of transcontinental trading exchanges." },
                    { question: "31. Korean dramas spreading worldwide is an example of:", options: ["Technoscape", "Ethnoscape", "Mediascape", "Financescape"], answer: 2, explanation: "Mediascape refers to the flow of culture through media — Korean dramas (K-dramas) and K-pop crossing borders are prime examples." },
                    { question: "32. The IBRD (International Bank for Reconstruction and Development) was set up in:", options: ["1944", "1945", "1956", "1960"], answer: 1, explanation: "The IBRD was set up in 1945 along with the IMF to aid in rebuilding the world economy after WWII." },
                    { question: "33. Economic sanctions are:", options: ["Taxes on imported goods", "Commercial and financial penalties applied against a country or individual", "Government bans on all trade", "Limitations on the number of imports"], answer: 1, explanation: "Economic sanctions are commercial and financial penalties applied by one or more countries against a targeted country, group, or individual." },
                    { question: "34. The 'bottle analogy' in the context of MBS means:", options: ["The bottle is the mortgage loan", "The bottle is the investment fund (MBS); when homeowners stop paying, it empties", "The bottle represents inflation", "The bottle is the central bank's reserve"], answer: 1, explanation: "The bottle represents the MBS investment fund. The money inside comes from mortgage payments. If homeowners stop paying, the bottle empties and investors lose money." },
                    { question: "35. The EU was originally established through which treaty?", options: ["Treaty of Westphalia", "Treaty of Asuncion", "Treaty of Rome (1957)", "Treaty of Bangkok"], answer: 2, explanation: "The EU traces its origins to the Treaty of Rome (1957), which established the European Economic Community or Common Market." },
                    { question: "36. Cultural Divergence (Differentialism) argues that:", options: ["Cultures merge into one global culture", "Local cultures resist globalization and maintain their distinctiveness", "Cultural exchange creates new hybrid cultures", "Western culture dominates all others"], answer: 1, explanation: "Cultural Divergence (Differentialism) holds that local cultures resist globalization and maintain their uniqueness." },
                    { question: "37. The gold standard was adopted at:", options: ["A UN conference in New York", "An international monetary conference in Paris", "The Bretton Woods Conference", "The Treaty of Westphalia"], answer: 1, explanation: "Countries adopted the gold standard at an international monetary conference in Paris during the 19th century, to prevent mercantilist isolationism." },
                    { question: "38. Foreign Direct Investment (FDI) is primarily associated with:", options: ["International Trade", "International Finance", "Global Investment", "Globalization"], answer: 2, explanation: "Global Investment mainly takes place via FDI — investment strategies not constrained by geographical boundaries." },
                    { question: "39. Which ASEAN members joined AFTA after the original six?", options: ["Japan, South Korea, India", "Vietnam, Laos, Myanmar, Cambodia", "China, Australia, New Zealand", "Pakistan, Bangladesh, Sri Lanka"], answer: 1, explanation: "The original AFTA members (Brunei, Indonesia, Malaysia, Philippines, Singapore, Thailand) were later joined by Vietnam, Laos, Myanmar, and Cambodia." },
                    { question: "40. Ohmae (1992) defined globalization as:", options: ["The compression of the world", "The onset of the borderless world", "A trans-planetary process of flows", "De-territorialization"], answer: 1, explanation: "Ohmae (1992) defined globalization simply as 'the onset of the borderless world.'" },
                    { question: "41. AI's impact on the economy includes:", options: ["Decreasing productivity", "Increasing need for human labor", "Increasing productivity while potentially reducing need for human labor", "Eliminating international trade"], answer: 2, explanation: "AI increases productivity through automation and data analysis but may reduce the need for human labor, lowering manpower costs." },
                    { question: "42. COMESA was formed in:", options: ["December 1991", "January 1992", "December 1994", "July 2015"], answer: 2, explanation: "COMESA (Common Market of Eastern and Southern Africa) was formed in December 1994." },
                    { question: "43. Which body guided post-WWII globalization through negotiations?", options: ["UN Security Council", "ASEAN", "GATT (General Agreement on Tariffs and Trade)", "NATO"], answer: 2, explanation: "After WWII, globalization was guided by negotiations under the GATT (General Agreement on Tariffs and Trade)." },
                    { question: "44. Scholte (2000) described globalization as:", options: ["The borderless world", "De-territorialization or growth of superterritorial relations", "Intensification of worldwide social relations", "Compression of the world"], answer: 1, explanation: "Scholte defined globalization as 'de-territorialization' or the growth of 'superterritorial' relations between people." },
                    { question: "45. The housing bubble of 2008 was created because:", options: ["Governments raised taxes on property", "Low interest rates encouraged excessive borrowing, inflating real estate prices", "Too few houses were built", "The stock market crashed first"], answer: 1, explanation: "Very low interest rates encouraged many people to borrow money to buy houses, creating excessive demand and inflating real estate prices." },
                    { question: "46. The World Bank provides approximately how much in annual loans?", options: ["US$3 billion", "US$10 billion", "US$30 billion", "US$100 billion"], answer: 2, explanation: "The World Bank provides nearly US$30 billion in loans annually to client countries." },
                    { question: "47. Which scape involves the movement of technology and software globally?", options: ["Ethnoscape", "Financescape", "Ideoscape", "Technoscape"], answer: 3, explanation: "Technoscape refers to the circulation of mechanical goods and software globally." },
                    { question: "48. MERCOSUR's full members include:", options: ["Canada, USA, Mexico", "Argentina, Brazil, Paraguay, Uruguay", "Egypt, Kenya, Rwanda, Uganda", "Australia, Japan, New Zealand, Singapore"], answer: 1, explanation: "MERCOSUR's full members are Argentina, Brazil, Paraguay, and Uruguay (with Venezuela suspended since 2016 and Bolivia joining in 2015)." },
                    { question: "49. Cultural homogenization is most associated with:", options: ["Glocalization", "Cultural Divergence", "Cultural Convergence / Cultural Imperialism", "Cultural Hybridization"], answer: 2, explanation: "Cultural homogenization — one culture spreading worldwide at the expense of others — is associated with Cultural Convergence and Cultural Imperialism." },
                    { question: "50. The IBRD lends money for:", options: ["Private corporate ventures", "Government economic infrastructure like roads and power", "Military operations", "Currency exchange operations"], answer: 1, explanation: "The IBRD lends money to governments for developing economic infrastructure such as roads and power-generating facilities." },
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
            id: "ge5-m4", title: "Module 4: The Global Interstate System",
            topics: [
              {
                id: "ge5-m4t1", title: "Attributes of Today's Global System",
                content: {
                  heading: "Attributes of Today's Global System", term: "MIDTERM", module: "Module 4: The Global Interstate System",
                  objectives: [
                    "Describe the attributes of today's global system",
                    "Define power and politics in the context of international relations",
                    "Identify the elements of a state",
                  ],
                  sections: [
                    { type: "h2", content: "Power and Politics" },
                    { type: "definition", content: "Power — The ability to influence or persuade others to achieve a goal. Types: (1) Persuasion — based on trust and influence; (2) Control — based on authority or sometimes fear." },
                    { type: "definition", content: "Politics — The process of using power and influence to make decisions, achieve goals, and manage relationships between states and societies." },
                    { type: "h2", content: "Elements of a State (Estado)" },
                    { type: "table", content: "Four Elements of a State", headers: ["Element", "Description"], rows: [
                      ["Population", "The people living in the country"],
                      ["Territory", "The land and geographical boundaries of the country"],
                      ["Government", "The system that creates and enforces laws"],
                      ["Sovereignty", "The ability to govern itself independently"],
                    ]},
                    { type: "h2", content: "Types of Government in the Philippines" },
                    { type: "table", content: "Philippine Government Types", headers: ["Type", "Description"], rows: [
                      ["Democratic", "Power comes from the people; leaders chosen through elections"],
                      ["Republic", "Governed by elected representatives chosen by the people"],
                      ["Constitutional", "Follows the 1987 Philippine Constitution; limits government power and protects rights"],
                      ["Unitary", "Most political power held by the national government; LGUs operate under it"],
                      ["Presidential", "The President is both Head of State and Head of Government"],
                    ]},
                    { type: "h2", content: "Historical Great Powers" },
                    { type: "table", content: "Historical and Modern Great Powers", headers: ["Era", "Great Powers"], rows: [
                      ["Historical (European)", "Austria, Russia, Prussia, United Kingdom"],
                      ["Modern (Contemporary)", "United Kingdom, Russia, United States, China"],
                    ]},
                    { type: "text", content: "The global interstate system refers to how countries interact with each other globally. Forms of international relations: Bilateral (two countries), Trilateral (three countries), Multilateral (many countries — e.g., global organizations, alliances)." },
                  ],
                  quiz: [
                    { question: "Power based on trust and influence is called:", options: ["Control", "Persuasion", "Sovereignty", "Authority"], answer: 1, explanation: "Persuasion is the type of power based on trust and influence — not force or authority." },
                    { question: "Which is NOT an element of a state?", options: ["Population", "Territory", "Military strength", "Sovereignty"], answer: 2, explanation: "The four elements of a state are Population, Territory, Government, and Sovereignty. Military strength is not among the official elements." },
                    { question: "The Philippines has which type of government where the President is both Head of State and Head of Government?", options: ["Parliamentary", "Constitutional Monarchy", "Presidential", "Federal"], answer: 2, explanation: "The Philippines has a Presidential system where the President serves as both Head of State and Head of Government." },
                    { question: "A relationship between TWO countries is called:", options: ["Multilateral", "Bilateral", "Trilateral", "Unilateral"], answer: 1, explanation: "Bilateral refers to the relationship/ugnayan between two countries." },
                    { question: "The ability of a country to govern itself independently is called:", options: ["Territory", "Population", "Government", "Sovereignty"], answer: 3, explanation: "Sovereignty is the ability of a state to govern itself independently, free from external control." },
                  ],
                },
              },
              {
                id: "ge5-m4t2", title: "Internationalism and Political History",
                content: {
                  heading: "Internationalism and Political History", term: "MIDTERM", module: "Module 4: The Global Interstate System",
                  objectives: [
                    "Distinguish between liberal and socialist internationalism",
                    "Identify key thinkers who shaped international relations",
                    "Trace the development from the Westphalian System to the United Nations",
                  ],
                  sections: [
                    { type: "h2", content: "Internationalism" },
                    { type: "definition", content: "Internationalism — The belief that countries should cooperate and build strong international relationships to maintain peace and solve global problems." },
                    { type: "table", content: "Two Types of Internationalism", headers: ["Type", "Focus", "Key Ideas"], rows: [
                      ["Liberal Internationalism", "Cooperation, peace, and international organizations", "Countries work together for mutual benefit through institutions like the UN, WTO"],
                      ["Socialist Internationalism (Karl Marx)", "Workers' unity across countries and equality", "Opposes capitalism; focuses on the labor class; wants fair distribution of wealth"],
                    ]},
                    { type: "h2", content: "Key Thinkers in Internationalism" },
                    { type: "table", content: "Important Thinkers in International Relations", headers: ["Thinker", "Key Contribution"], rows: [
                      ["Immanuel Kant", "Believed cooperation between nations could create permanent peace"],
                      ["Jeremy Bentham", "Supported international law and peaceful cooperation between states"],
                      ["Giuseppe Mazzini", "Promoted unity and cooperation among nations"],
                      ["Woodrow Wilson", "Strong advocate of internationalism; supported self-determination (right of nations to choose their own political future); wanted to prevent another world war"],
                      ["Karl Marx", "Believed in international cooperation among workers; opposed nationalism as it divided workers; emphasized the struggle between workers and capitalists"],
                    ]},
                    { type: "h2", content: "Historical Milestones in the Interstate System" },
                    { type: "table", content: "Key Historical Milestones", headers: ["Event", "Year/Period", "Significance"], rows: [
                      ["Westphalian System (Peace of Westphalia)", "1648", "Ended the Thirty Years' War; established the concept of sovereignty; countries became independent states; no country should interfere in another's internal affairs — foundation of modern state system"],
                      ["Mercantilism", "16th–18th century", "Wealth measured in gold and silver; export more than import; strong government control"],
                      ["Napoleonic Wars", "Early 19th century (ended 1815)", "Led by Napoleon Bonaparte; spread ideas of equality and reform; challenged monarchy; ended with Napoleon's defeat"],
                      ["Concert of Europe", "1815 – WWI", "System where major European powers cooperated to maintain peace after the Napoleonic Wars; maintained balance of power"],
                      ["Rise of Nationalism / Ultra-Nationalism", "Late 19th – early 20th century", "Japan sought empire expansion; Adolf Hitler and Germany promoted extreme nationalism (ultra-nationalism) and expansionism"],
                      ["League of Nations", "Post-WWI (1919)", "Created after WWI to promote peace; principles: sovereignty, peaceful conflict resolution, international cooperation; ultimately failed to prevent WWII"],
                      ["Communist International (Comintern)", "1919, dissolved 1943", "Lenin established to spread communism worldwide; replaced by Cominform (1947) to coordinate European communist parties"],
                      ["United Nations", "1945", "Established after WWII to replace the League of Nations; goals: prevent war, promote cooperation, protect human rights, maintain peace"],
                    ]},
                    { type: "h2", content: "Socialist Movements and Their Impact" },
                    { type: "list", content: "Impact of Socialist Movements on Labor", items: [
                      "Reduced working hours from 16 hours to 8 hours",
                      "Better working conditions demanded and achieved",
                      "Workers gained more rights and legal protections",
                      "Introduction of labor laws, minimum wage, benefits",
                    ]},
                    { type: "note", content: "Communism vs. Socialism: Socialism promotes human rights, humane treatment, and government involvement in the economy (can exist with democracy). Communism is more extreme — aims for a classless society with no private ownership and usually strong centralized control." },
                  ],
                  quiz: [
                    { question: "The Peace of Westphalia (1648) established:", options: ["The League of Nations", "The concept of sovereignty and modern state system", "The United Nations", "The Concert of Europe"], answer: 1, explanation: "The Peace of Westphalia (1648) established the concept of sovereignty — countries became independent states and could not interfere in each other's internal affairs." },
                    { question: "Karl Marx believed in:", options: ["Liberal internationalism through the UN", "Socialist internationalism — workers' unity across countries against capitalism", "Nationalism and state sovereignty above all", "Meritocracy as the basis of government"], answer: 1, explanation: "Karl Marx believed in socialist internationalism — international cooperation among workers to oppose capitalism and promote equality." },
                    { question: "Woodrow Wilson supported:", options: ["Ultra-nationalism", "Colonialism", "Self-determination — the right of nations to choose their own political future", "Mercantilism"], answer: 2, explanation: "Woodrow Wilson was a strong advocate of internationalism and self-determination — the right of nations to freely determine their own political future." },
                    { question: "The Concert of Europe was a system where:", options: ["European powers competed militarily", "Major European powers cooperated to maintain peace after the Napoleonic Wars", "The US led all European policy decisions", "Communist states united against capitalism"], answer: 1, explanation: "The Concert of Europe (1815–WWI) was a system of cooperation among major European powers to maintain balance of power and prevent major wars." },
                    { question: "The League of Nations was created after:", options: ["World War II", "The Napoleonic Wars", "World War I", "The Cold War"], answer: 2, explanation: "The League of Nations was created after World War I (1919) to promote peace and cooperation — but ultimately failed to prevent WWII." },
                    { question: "Socialist movements led to the reduction of working hours from:", options: ["20 hours to 10 hours", "16 hours to 8 hours", "12 hours to 6 hours", "10 hours to 8 hours"], answer: 1, explanation: "Because of socialist movements, working hours were reduced from 16 hours to 8 hours — a major labor reform." },
                    { question: "The Communist International (Comintern) was established by:", options: ["Karl Marx", "Adolf Hitler", "Vladimir Lenin", "Woodrow Wilson"], answer: 2, explanation: "Vladimir Lenin established the Communist International (Comintern) to spread communism worldwide and unite communist parties." },
                    { question: "Immanuel Kant believed that:", options: ["Nations should compete aggressively", "Cooperation between nations could create permanent peace", "Workers should control all production", "Sovereignty must never be questioned"], answer: 1, explanation: "Immanuel Kant believed that cooperation between nations (through law and international agreements) could create permanent peace." },
                    { question: "Ultra-nationalism in Germany was associated with:", options: ["Woodrow Wilson", "Vladimir Lenin", "Karl Marx", "Adolf Hitler"], answer: 3, explanation: "Adolf Hitler and Germany promoted extreme nationalism (ultra-nationalism) and expansionism, leading to WWII." },
                    { question: "The Comintern was dissolved in:", options: ["1939", "1943", "1945", "1947"], answer: 1, explanation: "The Communist International (Comintern) was dissolved in 1943 during World War II. It was replaced by the Cominform in 1947." },
                  ],
                },
              },
              {
                id: "ge5-m4t3", title: "The United Nations and Contemporary Global Governance",
                content: {
                  heading: "The United Nations and Contemporary Global Governance", term: "MIDTERM", module: "Module 4: The Global Interstate System",
                  objectives: [
                    "Identify the five main organs of the United Nations",
                    "Explain the role and challenges of the United Nations",
                    "Describe the effects of globalization on governments",
                  ],
                  sections: [
                    { type: "h2", content: "The United Nations (UN)" },
                    { type: "text", content: "The United Nations was established in 1945 after World War II to replace the League of Nations. Goals: prevent future wars, promote international cooperation, protect human rights, maintain global peace and security." },
                    { type: "h2", content: "Five Main Organs of the United Nations" },
                    { type: "table", content: "UN's Five Main Organs", headers: ["Organ", "Composition", "Key Functions"], rows: [
                      ["1. General Assembly (GA)", "193 member states; 1 country = 1 vote; important decisions need 2/3 majority", "Main decision-making body; discusses global issues; admits new members; approves budget; elects President every year (A Filipino, Carlos P. Romulo, became GA President in 1989)"],
                      ["2. Security Council (SC)", "15 members: 5 permanent (P5) + 10 non-permanent (2-year terms)", "Maintains global peace and security; determines threats; can impose sanctions, peacekeeping, military intervention; P5 has veto power"],
                      ["3. ECOSOC", "54 members elected by GA for 3-year terms", "Coordinates economic, social, and environmental issues; promotes SDGs; focuses on policy-making and development programs"],
                      ["4. International Court of Justice (ICJ)", "15 judges for 9-year terms", "Settles legal disputes between states based on international law; gives advisory opinions; only states (not individuals) can be parties"],
                      ["5. UN Secretariat", "Headed by the Secretary-General (current: Antonio Guterres, 9th SG)", "Administrative body; handles day-to-day operations; supports all other UN organs; implements programs"],
                    ]},
                    { type: "h2", content: "The P5 (Permanent Five) and Veto Power" },
                    { type: "list", content: "The Five Permanent Members of the Security Council", items: [
                      "United States",
                      "United Kingdom",
                      "France",
                      "Russia",
                      "China",
                    ]},
                    { type: "definition", content: "Veto Power — The P5 each have the right to veto any Security Council resolution. If even one of the P5 disagrees, the decision will not pass — even if all other members agree." },
                    { type: "h2", content: "Challenges of the United Nations" },
                    { type: "list", content: "Key Challenges Facing the UN", items: [
                      "Cooperation — The UN depends on countries working together; lack of cooperation weakens effectiveness",
                      "P5 Veto Power — One powerful country can block decisions even if most countries agree",
                      "Military Intervention — Difficult to decide when and how to intervene; may be influenced by political interests",
                    ]},
                    { type: "note", content: "The UN can only function effectively if there is cooperation among nations. Countries like the Philippines join the UN to participate in global decision-making and help solve global issues like global warming, conflicts, and economic problems." },
                  ],
                  quiz: [
                    { question: "The United Nations was established in:", options: ["1919", "1939", "1945", "1948"], answer: 2, explanation: "The United Nations was established in 1945 after World War II to replace the League of Nations." },
                    { question: "How many members does the UN General Assembly have?", options: ["50", "100", "150", "193"], answer: 3, explanation: "The UN General Assembly is composed of 193 member states, each with one vote (1 country = 1 vote)." },
                    { question: "The P5 permanent members of the Security Council include all EXCEPT:", options: ["USA", "France", "Germany", "China"], answer: 2, explanation: "The P5 are USA, UK, France, Russia, and China. Germany is NOT a permanent member of the Security Council." },
                    { question: "Veto power means:", options: ["A member can veto their own sanctions", "Any P5 member can block a Security Council decision by disagreeing", "All 15 members must agree for a decision to pass", "The General Assembly can override the Security Council"], answer: 1, explanation: "Veto power means that if any one of the P5 permanent members disagrees (vetoes), the Security Council decision will not pass." },
                    { question: "The ICJ settles legal disputes between:", options: ["Individual citizens globally", "Corporations and governments", "States (countries) based on international law", "Criminal organizations and states"], answer: 2, explanation: "The International Court of Justice (ICJ) settles legal disputes between states (countries) based on international law. Only states can be parties in ICJ cases." },
                    { question: "The current UN Secretary-General is:", options: ["Ban Ki-moon", "Kofi Annan", "Antonio Guterres", "Carlos P. Romulo"], answer: 2, explanation: "Antonio Guterres is the current (9th) Secretary-General of the United Nations." },
                    { question: "The ECOSOC has how many members?", options: ["15", "34", "54", "193"], answer: 2, explanation: "ECOSOC has 54 members elected by the General Assembly for 3-year terms." },
                    { question: "Carlos P. Romulo became UN General Assembly President in:", options: ["1967", "1975", "1989", "2000"], answer: 2, explanation: "A Filipino, Carlos P. Romulo, became President of the UN General Assembly in 1989." },
                    { question: "Important decisions in the General Assembly require:", options: ["A simple majority (50%+1)", "A two-thirds (2/3) majority vote", "Unanimous agreement of all members", "Approval by the Security Council"], answer: 1, explanation: "Important decisions in the UN General Assembly require a two-thirds (2/3) majority vote." },
                    { question: "How many judges serve on the International Court of Justice?", options: ["5", "9", "15", "19"], answer: 2, explanation: "The ICJ has 15 judges elected for 9-year terms." },
                  ],
                },
              },
            ],
          },
          {
            id: "ge5-m5", title: "Module 5: The Global North and South Divide",
            topics: [
              {
                id: "ge5-m5t1", title: "Global North and South",
                content: {
                  heading: "The Global North and South Divide", term: "MIDTERM", module: "Module 5: The Global North and South Divide",
                  objectives: [
                    "Define the term 'Global South'",
                    "Differentiate the Global South from the Third World",
                    "Analyze how a new conception of global relations emerged from Latin American experiences",
                  ],
                  sections: [
                    { type: "h2", content: "What is the Global South?" },
                    { type: "definition", content: "Global South — A metaphor for interstate inequality and a product of Western imagination (Claudio, 2014). It refers to the socio-economic and political divide focused on the southern hemisphere — encompassing Africa, Latin America, and Asia (including the Middle East). These nations are deemed not aligned with nations in the northern hemisphere that adhere to fair labor practices, free trade, and sustainable development policies." },
                    { type: "h2", content: "What is the Global North?" },
                    { type: "definition", content: "Global North — Home of all members of the Group of Eight (G8): Canada, France, Germany, Italy, Japan, United Kingdom, Russia, and the United States. Also includes four powerful permanent members of the UN Security Council. Also refers to developed countries in Asia, Australia, and New Zealand." },
                    { type: "h2", content: "The Brandt Line" },
                    { type: "text", content: "The Brandt Line is a conceptual north-south divide of the world. Countries north of the line are generally more developed (Global North), while countries south are developing (Global South). However, this line is considered outdated in today's context as many Asian economies have grown significantly." },
                    { type: "table", content: "Characteristics: Brandt Line Comparison", headers: ["Global North", "Global South"], rows: [
                      ["Higher standard of living", "Lower standard of living"],
                      ["Developed economies", "Developing or underdeveloped economies"],
                      ["Fair labor practices", "Often lack fair labor protections"],
                      ["Higher trade volume and benefits from trade", "Less trade benefit; extractive relationship historically"],
                      ["G8 members (Canada, France, Germany, Italy, Japan, UK, Russia, USA)", "Africa, Latin America, most of Asia, Middle East"],
                    ]},
                    { type: "h2", content: "Third World vs. Global South" },
                    { type: "text", content: "The term 'Third World' preceded 'Global South.' During the Cold War: First World = Capitalist economies, Second World = Socialist/Communist economies, Third World = Neither (often former colonies). After the Cold War ended, the term Third World ceased usage. The Philippines was classified as Third World but now belongs to the Global South (though some citizens experience the Global North within the country)." },
                    { type: "note", content: "The Global South is NOT only found in developing countries. Economically poor families, underprivileged individuals, and human rights violations in Europe, Australia, US, and Canada also represent 'Global South' conditions. Conversely, visiting Metro Manila from a rural province can feel like experiencing the 'Global North.'" },
                    { type: "h2", content: "Background: Latin America and the Treaty of Tordesillas" },
                    { type: "text", content: "By the Treaty of Tordesillas (1494), newly discovered lands were divided between Spain (West) and Portugal (East). Countries colonized by Spain in the southern Americas became collectively known as Latin America. Divisions in the global order are also described through Wallerstein's World-System theory: Core, Semi-periphery, and Periphery." },
                  ],
                  quiz: [
                    { question: "The Global South is described as:", options: ["Only the southern hemisphere geographically", "A metaphor for interstate inequality encompassing Africa, Latin America, and Asia", "Countries with warm climates only", "Only former communist states"], answer: 1, explanation: "The Global South is a metaphor for interstate inequality — it encompasses Africa, Latin America, and Asia (including the Middle East), referring to developing nations and conditions." },
                    { question: "The G8 members are home of the:", options: ["Global South", "Global North", "Third World", "Non-Aligned Movement"], answer: 1, explanation: "The Global North is home of all G8 members: Canada, France, Germany, Italy, Japan, UK, Russia, and USA." },
                    { question: "What divided newly discovered lands between Spain and Portugal in 1494?", options: ["The Peace of Westphalia", "The Brandt Line", "The Treaty of Tordesillas", "The Concert of Europe"], answer: 2, explanation: "The Treaty of Tordesillas (1494) divided newly discovered lands: West to Spain, East to Portugal." },
                    { question: "After the Cold War, the term 'Third World' was replaced by:", options: ["Second World", "Global South", "Non-Aligned Movement", "Developing World"], answer: 1, explanation: "The term Third World ceased usage after the Cold War ended. Countries previously called Third World are now classified as part of the Global South." },
                    { question: "The Brandt Line divides the world into:", options: ["East and West", "Communist and Capitalist", "Developed (North) and Developing (South)", "Colonial and Post-colonial"], answer: 2, explanation: "The Brandt Line is a conceptual division between more developed countries (Global North) and developing countries (Global South)." },
                    { question: "During the Cold War, 'First World' referred to:", options: ["The richest nations", "Capitalist economies", "Communist economies", "Former colonies"], answer: 1, explanation: "During the Cold War, First World referred to capitalist economies (led by the US), Second World to socialist/communist economies, and Third World to neither." },
                    { question: "The Global South can also be found within developed countries because:", options: ["Developing nations are expanding globally", "Poverty, unfair labor, and human rights violations exist even in rich countries", "The climate is similar globally", "All nations face the same economic challenges"], answer: 1, explanation: "The Global South refers to conditions — poverty, unfair labor, human rights violations — which can also be found within developed countries like the US, UK, and Australia." },
                  ],
                },
              },
              {
                id: "ge5-m5t2", title: "Youth Studies for the Global South",
                content: {
                  heading: "Youth Studies for the Global South", term: "MIDTERM", module: "Module 5: The Global North and South Divide",
                  objectives: [
                    "Explain the concept of Youth Studies 'for' the Global South",
                    "Distinguish between the socio-cultural and dynamic systems approaches",
                    "Analyze the position of youth in the Global South",
                  ],
                  sections: [
                    { type: "h2", content: "Youth Studies and the Global South" },
                    { type: "text", content: "Youth Studies' theories often assume universal generalizability, but they largely originate from Western Europe and North America (WENA). Youth Studies 'for' the Global South questions whether these theories can be usefully applied in the Global South. (Cooper et al., 2018)" },
                    { type: "table", content: "Three Positions of Youth Studies", headers: ["Position", "Description"], rows: [
                      ["Youth Studies 'IN' the South", "Northern theory transplanted into Southern contexts with its universal relevance unquestioned"],
                      ["Youth Studies 'OF' the South", "Shows how using theory in a different local context changes its meaning; what is conservative in one place may be radical in another"],
                      ["Youth Studies 'FOR' the South", "Not content with showing local particularities; moves toward universality; considers theory in relation to local values, politics, and ontologies"],
                    ]},
                    { type: "h2", content: "Two Mainstream Approaches to Youth Studies" },
                    { type: "table", content: "Socio-Cultural vs. Dynamic Systems Approaches", headers: ["Approach", "Description", "Key Theorists/Models"], rows: [
                      ["Socio-Cultural Approach", "Highlights the effects of social conditions on young people; documents individual biographies in relation to macro societal forces; emphasizes local contexts and youth agency", "Sub-culture theory; cultural identity formation"],
                      ["Dynamic Systems Approach", "Views developmental change as located in systemic relations between individuals and environments; focuses on risk and protective factors", "Bronfenbrenner's Ecological Model; Positive Youth Development (PYD) framework (5 Cs: competence, confidence, character, connection, caring)"],
                    ]},
                    { type: "h2", content: "Youth in the Global South" },
                    { type: "list", content: "Key Facts about Youth in the Global South", items: [
                      "89% of the world's 1.8 billion youth live in the Global South (UN, 2014)",
                      "As many as 40% of the global population are affected by inadequate or precarious living conditions",
                      "Youth in the Global South navigate uncertain terrain in quests for adulthood and social standing",
                      "Youth movements in the Global South are often more disruptive and politically charged than in the North",
                      "Youth in the Global South are exposed to Utopian visions that contrast with their everyday realities",
                    ]},
                    { type: "h2", content: "Strategies for Youth Studies for the Global South" },
                    { type: "list", content: "Three Strategies (Cooper et al., 2018)", items: [
                      "Disentangling the local and global — Critiquing theory assumed to be universally relevant; showing how it works in new contexts",
                      "Democratizing through cooperation and new alliances — Building South-South alliances; strengthening collaboration",
                      "Decentering Northern scholarship — Challenging WENA as the theoretical hegemon; promoting Southern scholarship globally",
                    ]},
                    { type: "note", content: "There is no Global North without a Global South — they are historically connected. Youth in the Global South are often 'at risk' OR described as agents of social change, embodying the future of the nation." },
                  ],
                  quiz: [
                    { question: "89% of the world's 1.8 billion youth live in:", options: ["The Global North", "Europe and North America", "The Global South", "Asia only"], answer: 2, explanation: "According to UN statistics, 89% of the world's 1.8 billion youth (as of 2014) live in the Global South." },
                    { question: "The Positive Youth Development (PYD) framework focuses on the '5 Cs' which are:", options: ["Confidence, Culture, Cash, Connection, Care", "Competence, Confidence, Character, Connection, Caring", "Community, Cooperation, Creativity, Critical thinking, Communication", "Capacity, Courage, Care, Citizenship, Culture"], answer: 1, explanation: "The PYD framework's 5 Cs are: competence, confidence, character, connection, and caring." },
                    { question: "Bronfenbrenner's Ecological Model belongs to which approach?", options: ["Socio-Cultural Approach", "Dynamic Systems Approach", "Marxist Approach", "Postcolonial Approach"], answer: 1, explanation: "Bronfenbrenner's (1979) Ecological Model is part of the Dynamic Systems approach, which views youth development as interaction with multiple nested environments." },
                    { question: "Youth Studies 'FOR' the Global South means:", options: ["Simply applying Northern theories to Southern contexts", "Moving toward universality by considering local values, politics, and ontologies", "Ignoring Southern youth entirely", "Studying youth only in Africa and Latin America"], answer: 1, explanation: "Youth Studies 'for' the Global South moves beyond showing local particularities to say something more general about the human condition, considering local values and politics." },
                    { question: "The socio-cultural approach to youth studies emphasizes:", options: ["Risk and protective factors in the environment", "Individual psychology and cognitive development", "Local contexts and youth agency in relation to structural forces", "Economic productivity of young people"], answer: 2, explanation: "The socio-cultural approach highlights the effects of social conditions on young people and emphasizes local contexts and youth agency." },
                  ],
                },
              },
            ],
          },
          {
            id: "ge5-m6", title: "Module 6: Integration of the Asian Region",
            topics: [
              {
                id: "ge5-m6t1", title: "Monitoring Regional Economic Integration in Asia",
                content: {
                  heading: "Regional Economic Integration in Asia", term: "MIDTERM", module: "Module 6: Integration of the Asian Region",
                  objectives: [
                    "Differentiate between regionalization and globalization",
                    "Identify the factors leading to greater integration of the Asian region",
                    "Analyze how different Asian states confront the challenges of globalization and regionalization",
                  ],
                  sections: [
                    { type: "h2", content: "What is Regional Economic Integration?" },
                    { type: "definition", content: "Regional Economic Integration — A process in which two or more countries agree to eliminate economic barriers, with the end goal of enhancing productivity and achieving greater economic interdependence. It ranges from the simplest preferential trade area to the most advanced monetary or fiscal union." },
                    { type: "h2", content: "Asian Economic Integration" },
                    { type: "text", content: "Asian integration has intensified since the 1990s as countries recognized the need to harness domestic sources of growth. The most well-known model is the ASEAN Economic Community (AEC), formally established in 2015. Asia's integration is: Market-driven (influenced by policies), Multispeed (different levels of integration), Multitracked (varies across sectors)." },
                    { type: "table", content: "Key Indicators of Asian Economic Integration", headers: ["Indicator", "Description"], rows: [
                      ["Trade flows", "Asia's trade openness is above the global level; trade creating and intense"],
                      ["Foreign Direct Investment (FDI)", "Growing inflows and outflows across Asian economies"],
                      ["Tourism", "Increasing movement of people across Asian borders"],
                      ["Financial links", "Growing connections between Asian financial markets"],
                      ["Output correlation", "Economic performance of Asian countries increasingly interconnected"],
                    ]},
                    { type: "h2", content: "ASEAN and Regional Integration" },
                    { type: "text", content: "ASEAN (Association of Southeast Asian Nations) was founded August 8, 1967 through the Bangkok Declaration. Original members: Philippines, Thailand, Malaysia, Singapore, Indonesia. Now 10 members. The ASEAN Economic Community (AEC) was formally established in 2015." },
                    { type: "h2", content: "East Asia as the Most Integrated" },
                    { type: "text", content: "East Asia is the most integrated sub-region due to its extensive regional production networks. One important characteristic is the rise of regional production networks and growing trade in intermediate goods. By end of 2014, intermediate exports accounted for 50% of total exports in Asia. Economic corridors (e.g., Greater Mekong Subregion) connect markets and facilitate movement of goods, services, and people." },
                    { type: "h2", content: "Limitations of Asian Integration" },
                    { type: "list", content: "Challenges to Monitoring Asian Integration", items: [
                      "Lack of a systematic approach to measure integration progress",
                      "Asia's diversity makes overall integration uneven",
                      "Limited knowledge of integration outcomes fails to advance real merits",
                      "Need for better policy to sustain the integration process",
                    ]},
                  ],
                  quiz: [
                    { question: "Regional economic integration aims to:", options: ["Protect domestic industries from all foreign competition", "Eliminate economic barriers to enhance productivity and economic interdependence", "Create a single world government", "Establish global trade quotas"], answer: 1, explanation: "Regional economic integration is about eliminating economic barriers between countries to enhance productivity and achieve greater economic interdependence." },
                    { question: "The ASEAN Economic Community (AEC) was formally established in:", options: ["2007", "2010", "2015", "2020"], answer: 2, explanation: "The ASEAN Economic Community (AEC) was formally established in 2015." },
                    { question: "By end of 2014, intermediate exports accounted for what percentage of total exports in Asia?", options: ["25%", "35%", "50%", "75%"], answer: 2, explanation: "By end of 2014, intermediate exports accounted for 50% of total exports in Asia, reflecting the rise of regional production networks." },
                    { question: "Asia's regional integration is characterized as:", options: ["Single-speed and single-tracked", "Market-driven, multispeed, and multitracked", "Entirely government-directed", "Uniform across all sub-regions"], answer: 1, explanation: "Asia's integration is market-driven (influenced by policies), multispeed (different levels), and multitracked (varies across sectors)." },
                    { question: "Which Asian sub-region is most integrated?", options: ["Southeast Asia", "South Asia", "East Asia", "Central Asia"], answer: 2, explanation: "East Asia is the most integrated sub-region due to its extensive regional production networks, led by China's soaring trade." },
                  ],
                },
              },
              {
                id: "ge5-m6t2", title: "Human Development and Economic Integration",
                content: {
                  heading: "Human Development and Economic Integration", term: "MIDTERM", module: "Module 6: Integration of the Asian Region",
                  objectives: [
                    "Explain how regional economic integration affects human development",
                    "Analyze the linkage between integration and income, health, education, and environment",
                  ],
                  sections: [
                    { type: "h2", content: "Integration and Human Development" },
                    { type: "definition", content: "Human Development — Enlarging people's freedoms to live lives they value. Measured by the Human Development Index (HDI), which covers income and access to health and education services. (UNDP Human Development Report)" },
                    { type: "text", content: "Regional economic integration is broader than just eliminating trade barriers. It can encompass: harmonizing standards and regulatory frameworks; reducing restrictions on financial capital and labour mobility; adopting common approaches to fiscal and monetary policy; promoting peace and conflict prevention; and pooling investment in cross-border infrastructure." },
                    { type: "h2", content: "Key Areas Where Integration Affects Human Development" },
                    { type: "table", content: "Effects of Integration on Human Development", headers: ["Area", "How Integration Affects It"], rows: [
                      ["Income & Employment", "Higher growth from comparative advantage; but impact on aggregate employment unclear. Trade can spur entrepreneurship; investment may lead to 'jobless growth.' Quality of employment as important as quantity."],
                      ["Prices", "Integration creates larger market with downward pressure on prices — benefits poor consumers. But market consolidation without competition policy can create monopolies."],
                      ["Inequality", "Economic integration can increase inequality if those with assets benefit more. Countries that liberalized internally/externally saw increased inequality in last 30 years."],
                      ["Health & Education", "Integration creates opportunities but also challenges for health and education access across borders."],
                      ["Environment", "Economic activity and human development must take place within natural environment limits. Growing recognition of ecological boundaries."],
                    ]},
                    { type: "list", content: "Integration and Youth Employment", items: [
                      "Youth unemployment is a pressing global concern, especially in African countries",
                      "Whether integration creates jobs for youth or favors capital-intensive sectors is a key question",
                      "Public policy must create incentives that benefit youth employment through skills, mobility, and access to finance",
                    ]},
                    { type: "note", content: "The IBRD's relationship with integration: The enlarged size of regional economic blocs offers potential for more successful regional industrial policy — enabling new dynamic comparative advantages and additional employment opportunities." },
                  ],
                  quiz: [
                    { question: "Human Development is measured by:", options: ["GDP per capita only", "Military spending", "Human Development Index (HDI) covering income, health, and education", "Trade surplus"], answer: 2, explanation: "Human Development is proxied by the Human Development Index (HDI), which covers income and access to health and education services." },
                    { question: "Integration can lead to 'jobless growth' when:", options: ["Too many workers are hired", "Investment occurs primarily in capital-intensive sectors linked to natural resource extraction", "Trade is completely unrestricted", "Education levels rise faster than employment"], answer: 1, explanation: "Jobless growth occurs when investment goes primarily to capital-intensive sectors (natural resources), creating economic growth without creating many jobs." },
                    { question: "Integration's effect on prices generally creates:", options: ["Higher prices due to monopolies", "Downward pressure on prices — benefiting poor consumers", "Fixed prices across all markets", "Inflation due to currency exchange"], answer: 1, explanation: "Integration creates a larger market system with downward pressure on prices, which can benefit poor consumers who buy these goods." },
                    { question: "Countries that liberalized internally and externally over 30 years saw:", options: ["Decreased inequality", "No change in inequality", "Increased inequality", "Equal distribution of wealth"], answer: 2, explanation: "Inequality has increased markedly in most countries that liberalized internally and externally in the last 30 years." },
                    { question: "The UNDP's definition of human development focuses on:", options: ["Increasing GDP above all else", "Enlarging people's freedoms to live lives they value", "Military and security capabilities", "Environmental protection exclusively"], answer: 1, explanation: "The UNDP defines human development as enlarging people's freedoms to live lives they value — going beyond income to include health and education." },
                  ],
                },
              },
            ],
          },
          {
            id: "ge5-m7", title: "Module 7: A World of Ideas",
            topics: [
              {
                id: "ge5-m7t1", title: "Global Media Cultures",
                content: {
                  heading: "Global Media Cultures", term: "MIDTERM", module: "Module 7: A World of Ideas",
                  objectives: [
                    "Analyze how various media drive various forms of global integration",
                    "Explain the dynamic between local and global cultural production",
                  ],
                  sections: [
                    { type: "h2", content: "What is Media?" },
                    { type: "definition", content: "Media — A generic term for all human-invented technology that extends the range, speed, or channels of communication. Mass media reaches large audiences. Global Media is 'the mass communication on a global level, allowing people across the world to share and access the same information.' (Shanida, 2015)" },
                    { type: "h2", content: "Three Types of Media" },
                    { type: "table", content: "Three Types of Media", headers: ["Type", "Description", "Examples"], rows: [
                      ["Print Media", "Consisting of paper and ink, reproduced through mechanical printing", "Newspapers, books, magazines, comics, brochures"],
                      ["Broadcast Media", "Reaches audiences using airwaves as transmission medium", "Television, radio, satellites, mobile phones, movies/films"],
                      ["Digital Media (New Media)", "Content organized and distributed on digital platforms", "Internet, social media, computers"],
                    ]},
                    { type: "h2", content: "Roles of Media" },
                    { type: "list", content: "What Media Does in Society", items: [
                      "Acts as channels of information through which citizens communicate and make informed decisions",
                      "Facilitates informed debates between diverse social actors",
                      "Provides knowledge about the world beyond immediate experience",
                      "Helps society learn about itself and builds community",
                      "Functions as a watchdog of government — promoting transparency and exposing corruption",
                      "Facilitates democratic processes and ensures free and fair elections",
                      "Serves as a vehicle for cultural expression and cohesion within and between nations",
                    ]},
                    { type: "h2", content: "Media and Globalization of Culture" },
                    { type: "table", content: "Perspectives on Media and Cultural Globalization", headers: ["Perspective", "Key Argument"], rows: [
                      ["Cultural Homogenization", "Media contributes to making cultures more similar worldwide (Planet Hollywood, MTV generation). Largely Western/American content dominates."],
                      ["Cultural Hybridization", "Local and global cultures blend through media. Local cultures adapt global content rather than simply absorbing it (e.g., India's Zee TV thriving despite foreign competition)."],
                      ["Cultural Imperialism", "Global media dominated by 9-10 Western transnational corporations (Time Warner, Disney, Bertelsman, Viacom, etc.) causing 'transnational cultural domination' (Herman & McChesney)."],
                    ]},
                    { type: "h2", content: "Features of Media Globalization (Thompson, 1995)" },
                    { type: "list", content: "Six Features of Media Globalization", items: [
                      "1. Continued dominance of global media by a small number of transnational media conglomerates",
                      "2. Use of new information and communications technologies by these conglomerates",
                      "3. Increasingly deregulated environment for media organizations",
                      "4. Greater homogenization and standardization of certain media products",
                      "5. Uneven flow of information within the global system with different levels of access",
                      "6. Media globalization linked to promotion of consumerism ideology and capitalist project",
                    ]},
                    { type: "h2", content: "Social Media in the Contemporary World" },
                    { type: "text", content: "Mark Zuckerberg (2017) explained that Facebook's Community Standards must adapt because: (1) The community evolved from connecting family and friends to news and public discourse; (2) Norms differ across countries and cultures; (3) Individual preferences vary even within cultures; (4) Operating at large scale means even 1% errors affect millions." },
                    { type: "note", content: "Much globalized media content comes from the West, particularly the US. Driven by advertising, US culture promotes consumerism — the view that ever-increasing consumption of goods is an economic virtue." },
                  ],
                  quiz: [
                    { question: "Which is classified as Broadcast Media?", options: ["Newspapers and magazines", "Television and radio", "Social media and the internet", "Books and comics"], answer: 1, explanation: "Broadcast media reaches audiences using airwaves — including television, radio, satellites, mobile phones, and films." },
                    { question: "The view that media contributes to making cultures more similar worldwide is called:", options: ["Cultural Hybridization", "Cultural Differentialism", "Cultural Homogenization", "Glocalization"], answer: 2, explanation: "Cultural Homogenization argues that media makes cultures more similar globally — promoting Western/American culture worldwide (Planet Hollywood, MTV generation)." },
                    { question: "According to Herman & McChesney, the global media market is dominated by:", options: ["50 competing corporations", "9 or 10 major transnational corporations", "Government media agencies", "Social media platforms only"], answer: 1, explanation: "Herman and McChesney argue the global media market is dominated by 9 or 10 companies: Time Warner, Disney, Bertelsman, Viacom, News Corporation, Sony, etc." },
                    { question: "Thompson (1995) identified how many features of media globalization?", options: ["Three", "Four", "Five", "Six"], answer: 3, explanation: "Thompson (1995) identified six distinct features of media globalization." },
                    { question: "Digital or New Media refers to:", options: ["Newspapers and print publications", "Television and radio broadcasts", "Content organized and distributed on digital platforms (internet, social media)", "Film and cinema only"], answer: 2, explanation: "Digital Media (also called New Media) consists of content organized and distributed on digital platforms — the internet, social media, computers." },
                    { question: "Media globalization is linked to the promotion of:", options: ["Anti-consumerism", "Environmental sustainability", "Consumerism ideology and the capitalist project", "Socialism"], answer: 2, explanation: "According to Thompson (1995), media globalization is inextricably linked to the promotion of consumerism ideology and the capitalist project." },
                    { question: "Cultural Hybridization in media means:", options: ["Western culture completely replaces local culture", "Local and global cultures blend; local media adapts to compete with global content", "Cultures become completely isolated from each other", "Only government media can exist"], answer: 1, explanation: "Cultural Hybridization means local and global cultures blend — as in India where national media (Zee TV) thrives alongside foreign imports by adapting to local cultural preferences." },
                    { question: "The function of media as a 'watchdog of government' means:", options: ["Media controls government decisions", "Media exposes corruption and promotes transparency in public life", "Media censors anti-government content", "Media only reports positive government news"], answer: 1, explanation: "Media's watchdog function is promoting transparency in public life and exposing corruption, maladministration, and corporate wrongdoing." },
                  ],
                },
              },
              {
                id: "ge5-m7t2", title: "The Globalization of Religion",
                content: {
                  heading: "The Globalization of Religion", term: "MIDTERM", module: "Module 7: A World of Ideas",
                  objectives: [
                    "Explain the relationship between religion and globalization",
                    "Analyze how religion responds to the rapid changes brought by globalization",
                  ],
                  sections: [
                    { type: "h2", content: "Religion in a Globalized World" },
                    { type: "definition", content: "Religion — A 'system of beliefs and practices.' From the Latin 'religare' meaning 'to bind together again that which was once bound but has since been torn apart or broken.'" },
                    { type: "text", content: "The relationship between religion and globalization has rapidly become a central concern for the social sciences (Csordas, 2009). As globalization shifts the cultural makeup of the globe and creates a homogenized 'global culture,' individuals search for 'constant time and space-bounded identities' — and religion becomes one such identity." },
                    { type: "h2", content: "Why Religion Matters in Globalization" },
                    { type: "list", content: "Role of Religion in Globalized Society", items: [
                      "Provides identity and meaning in a rapidly changing world",
                      "Binds communities together across cultural differences",
                      "Addresses individuals' need for psychological well-being and avoidance of existential anxiety",
                      "Acts as a source of resistance against Western cultural domination",
                      "Globalizes itself — religious ideas, practices, and institutions spread worldwide through migration and media",
                    ]},
                    { type: "h2", content: "Religion and Globalization: Key Dimensions" },
                    { type: "table", content: "Religion and Globalization", headers: ["Dimension", "Description"], rows: [
                      ["Religion as Culture", "Religious practices are part of cultural identity; globalization affects how religions are expressed"],
                      ["Pure vs. Applied Religion", "Pure religion focuses on spiritual matters; applied religion addresses social justice and practical issues"],
                      ["Privatized vs. Publicly Influential Religion", "Religion can be personal and private, or it can influence public policy and social norms"],
                      ["Liberal vs. Conservative Religion", "Globalization creates tension between liberal (inclusive, adapting) and conservative (traditional) religious expressions"],
                    ]},
                    { type: "text", content: "Thomas (1999) states that in a time when globalization is ongoing, religions must use communication technology to focus more on humane and pluralistic forms of their teachings — values such as human dignity." },
                    { type: "note", content: "Religion and globalization create both convergence (global religious movements) and divergence (religious fundamentalism as resistance to globalization). Religion can be both a product of globalization and a response to it." },
                  ],
                  quiz: [
                    { question: "The word 'religion' comes from the Latin 'religare' which means:", options: ["To pray for others", "To bind together again that which was once torn apart", "To follow ancient traditions", "To study divine scriptures"], answer: 1, explanation: "Religion comes from the Latin 'religare' — 'to bind together again that which was once bound but has since been torn apart or broken.'" },
                    { question: "According to the module, why do individuals turn to religion in the context of globalization?", options: ["To oppose political governments", "To maintain economic wealth", "To maintain psychological well-being and identity in a rapidly changing world", "To spread their culture to others"], answer: 2, explanation: "As globalization creates a rapidly changing world, individuals turn to religion to maintain psychological well-being, avoid existential anxiety, and find a stable identity." },
                    { question: "The relationship between religion and globalization has become a central concern for:", options: ["Economics and finance only", "The military and national security", "The social sciences and religious studies", "Technology companies"], answer: 2, explanation: "According to Csordas (2009), the relationship between religion and globalization has rapidly become a central concern for the social sciences and religious studies." },
                    { question: "Religion is described as a 'system of':", options: ["Laws and regulations", "Economic practices", "Beliefs and practices", "Political ideologies"], answer: 2, explanation: "Religion is generally defined as a 'system of beliefs and practices.'" },
                    { question: "Thomas (1999) argues that religions in the age of globalization should use communication technology to:", options: ["Spread political influence", "Create economic networks", "Focus on humane and pluralistic forms of teachings like human dignity", "Oppose other religions"], answer: 2, explanation: "Thomas (1999) states that religions must use technology to focus more on humane and pluralistic forms of their teachings — values like human dignity." },
                  ],
                },
              },
              {
                id: "ge5-midexam", title: "Midterm Comprehensive Exam (50 Items)",
                content: {
                  heading: "Midterm Comprehensive Exam", term: "MIDTERM", module: "Module 7: A World of Ideas",
                  objectives: ["Review all Midterm topics: Global Interstate System, Global North and South, Asian Integration, and A World of Ideas"],
                  sections: [
                    { type: "note", content: "This is your 50-item Midterm Comprehensive Exam covering Modules 4–7: The Global Interstate System, The Global North and South Divide, Integration of the Asian Region, and A World of Ideas." },
                  ],
                  quiz: [
                    { question: "1. The Peace of Westphalia (1648) is significant because it:", options: ["Created the United Nations", "Established the concept of sovereignty and the modern state system", "Founded the League of Nations", "Created the Concert of Europe"], answer: 1, explanation: "The Peace of Westphalia (1648) established the concept of sovereignty — countries became independent states that could not interfere in each other's internal affairs." },
                    { question: "2. The four elements of a state are:", options: ["Population, Territory, Military, Sovereignty", "Population, Territory, Government, Sovereignty", "People, Land, Economy, Culture", "Citizens, Borders, Laws, Language"], answer: 1, explanation: "The four elements of a state (Estado) are: Population, Territory, Government, and Sovereignty." },
                    { question: "3. Karl Marx opposed nationalism because:", options: ["He supported colonialism", "Nationalism divided workers who should unite across countries", "He believed in absolute monarchy", "Nations were too small for his economic ideas"], answer: 1, explanation: "Karl Marx opposed nationalism because it divided workers. He emphasized the struggle between workers and capitalists and believed in international workers' unity." },
                    { question: "4. The Concert of Europe (1815) was established after:", options: ["World War I", "World War II", "The Napoleonic Wars", "The American Revolution"], answer: 2, explanation: "The Concert of Europe was established in 1815 after the Napoleonic Wars to maintain balance of power and prevent major wars in Europe." },
                    { question: "5. The United Nations was established in:", options: ["1919", "1939", "1945", "1948"], answer: 2, explanation: "The United Nations was established in 1945 after World War II to replace the League of Nations." },
                    { question: "6. The P5 permanent members of the UN Security Council are:", options: ["USA, UK, France, Russia, China", "USA, UK, Germany, Russia, Japan", "USA, UK, France, Germany, Italy", "USA, China, Japan, India, Russia"], answer: 0, explanation: "The P5 are: USA, United Kingdom, France, Russia, and China." },
                    { question: "7. The UN General Assembly has how many member states?", options: ["50", "100", "150", "193"], answer: 3, explanation: "The UN General Assembly is composed of 193 member states, each with one vote." },
                    { question: "8. The Global South is described as:", options: ["Countries located south of the equator", "A metaphor for interstate inequality encompassing Africa, Latin America, and Asia", "Only post-communist states", "Countries without ocean access"], answer: 1, explanation: "The Global South is a metaphor for interstate inequality — it encompasses Africa, Latin America, and Asia (including the Middle East)." },
                    { question: "9. The Brandt Line divides the world into:", options: ["East and West hemispheres", "Developed (North) and Developing (South) countries", "Capitalist and Communist nations", "Colonial and Post-colonial territories"], answer: 1, explanation: "The Brandt Line is a conceptual division between more developed (Global North) and developing (Global South) countries." },
                    { question: "10. During the Cold War, 'Second World' referred to:", options: ["Developed capitalist economies", "Socialist/Communist economies", "Former colonies", "Neutral non-aligned nations"], answer: 1, explanation: "During the Cold War, First World = capitalist economies, Second World = socialist/communist economies, Third World = neither." },
                    { question: "11. ASEAN was founded in:", options: ["1945", "1960", "1967", "1975"], answer: 2, explanation: "ASEAN was founded August 8, 1967 through the Bangkok Declaration." },
                    { question: "12. The ASEAN Economic Community (AEC) was formally established in:", options: ["2005", "2010", "2015", "2018"], answer: 2, explanation: "The ASEAN Economic Community (AEC) was formally established in 2015." },
                    { question: "13. Regional economic integration in Asia is described as:", options: ["Government-directed and uniform", "Market-driven, multispeed, and multitracked", "Only focused on Southeast Asia", "Purely monetary integration"], answer: 1, explanation: "Asia's integration is market-driven (influenced by policies), multispeed (different levels of integration), and multitracked (varies across sectors)." },
                    { question: "14. By end of 2014, intermediate exports accounted for what percentage of total Asian exports?", options: ["25%", "35%", "50%", "75%"], answer: 2, explanation: "By end of 2014, intermediate exports accounted for 50% of total exports in Asia." },
                    { question: "15. Human Development is measured by:", options: ["GDP per capita only", "Military power", "Human Development Index (HDI): income, health, and education", "Number of trade agreements"], answer: 2, explanation: "Human Development is proxied by the Human Development Index (HDI), which covers income and access to health and education services." },
                    { question: "16. Print media includes:", options: ["Television and radio", "Internet and social media", "Newspapers, books, magazines, comics", "Films and movies"], answer: 2, explanation: "Print media consists of paper and ink products — newspapers, books, magazines, comics, and brochures." },
                    { question: "17. According to Herman & McChesney, the global media market is dominated by:", options: ["Hundreds of competing companies", "9 or 10 major transnational corporations", "Government-run media agencies", "Individual journalists"], answer: 1, explanation: "Herman and McChesney argue the global media market is dominated by 9 or 10 large transnational corporations: Time Warner, Disney, Bertelsman, Viacom, etc." },
                    { question: "18. Religion comes from the Latin word 'religare' meaning:", options: ["To pray and worship", "To bind together again that which was torn apart", "To follow ancient customs", "To seek divine guidance"], answer: 1, explanation: "Religion comes from the Latin 'religare' — 'to bind together again that which was once bound but has since been torn apart or broken.'" },
                    { question: "19. The League of Nations failed to:", options: ["Establish international cooperation", "Create the concept of sovereignty", "Prevent World War II", "Set up any international institutions"], answer: 2, explanation: "The League of Nations, created after WWI, failed to prevent WWII — its ultimate failure." },
                    { question: "20. Woodrow Wilson's key international contribution was advocating for:", options: ["Ultra-nationalism", "Colonialism and empire", "Self-determination — the right of nations to decide their own political future", "Communist internationalism"], answer: 2, explanation: "Woodrow Wilson was a strong advocate of internationalism and self-determination — the right of nations to freely determine their own political future." },
                    { question: "21. The ICJ (International Court of Justice) settles disputes between:", options: ["Individual citizens", "Private corporations", "States (countries)", "Criminal organizations"], answer: 2, explanation: "The ICJ settles legal disputes between states (countries) based on international law. Only states can be parties in ICJ cases." },
                    { question: "22. The UN Secretary-General currently is:", options: ["Ban Ki-moon", "Kofi Annan", "Antonio Guterres", "Boutros Boutros-Ghali"], answer: 2, explanation: "Antonio Guterres is the current (9th) Secretary-General of the United Nations." },
                    { question: "23. 89% of the world's 1.8 billion youth live in:", options: ["The Global North", "Europe and North America", "East Asia only", "The Global South"], answer: 3, explanation: "According to UN statistics (2014), 89% of the world's 1.8 billion youth live in the Global South." },
                    { question: "24. The PYD (Positive Youth Development) framework's 5 Cs are:", options: ["Confidence, Culture, Cash, Connection, Care", "Competence, Confidence, Character, Connection, Caring", "Community, Cooperation, Creativity, Critical thinking, Communication", "Capacity, Courage, Care, Citizenship, Culture"], answer: 1, explanation: "The PYD framework focuses on the 5 Cs: competence, confidence, character, connection, and caring." },
                    { question: "25. Veto power in the UN Security Council means:", options: ["All 193 members can veto", "Any P5 member can block a decision by disagreeing", "The Secretary-General can veto resolutions", "A 2/3 majority is needed to veto"], answer: 1, explanation: "Veto power: if any one of the P5 permanent members disagrees (vetoes), the Security Council decision will not pass." },
                    { question: "26. The Treaty of Tordesillas (1494) divided newly discovered lands between:", options: ["Britain and France", "Spain and Portugal", "USA and UK", "Portugal and the Netherlands"], answer: 1, explanation: "The Treaty of Tordesillas (1494) divided newly discovered lands between Spain (West) and Portugal (East)." },
                    { question: "27. Which type of internationalism focuses on workers' unity across countries?", options: ["Liberal Internationalism", "Socialist Internationalism", "Economic Internationalism", "Cultural Internationalism"], answer: 1, explanation: "Socialist Internationalism (Marx) focuses on workers' unity across countries, opposes capitalism, and promotes equality." },
                    { question: "28. The ECOSOC has how many members?", options: ["15", "34", "54", "193"], answer: 2, explanation: "ECOSOC has 54 members elected by the General Assembly for 3-year terms." },
                    { question: "29. Media globalization is linked to the promotion of:", options: ["Anti-capitalism", "Environmental sustainability", "Consumerism ideology and the capitalist project", "Religious fundamentalism"], answer: 2, explanation: "According to Thompson (1995), media globalization is linked to the promotion of consumerism ideology and the capitalist project." },
                    { question: "30. The Comintern was dissolved in:", options: ["1939", "1943", "1945", "1947"], answer: 1, explanation: "The Communist International (Comintern) was dissolved in 1943 during WWII. It was replaced by the Cominform in 1947." },
                    { question: "31. Cultural Homogenization through media means:", options: ["Cultures become more diverse", "Media makes cultures more similar worldwide", "Local cultures resist all foreign influence", "Media promotes only traditional values"], answer: 1, explanation: "Cultural Homogenization through media means cultures become more similar worldwide — Western/American content (Planet Hollywood, MTV) spreading globally." },
                    { question: "32. East Asia is the most integrated sub-region in Asia because of:", options: ["Government directives from Beijing", "Extensive regional production networks", "Historical colonial ties", "IMF funding"], answer: 1, explanation: "East Asia is the most integrated due to its extensive regional production networks and growing trade in intermediate goods." },
                    { question: "33. Bilateral relations refers to:", options: ["Relations between three countries", "Relations between many countries", "Relations between two countries", "Relations within a single country"], answer: 2, explanation: "Bilateral refers to the relationship/ugnayan between two (bi = two) countries." },
                    { question: "34. The G8 member nations include:", options: ["Canada, France, Germany, Italy, Japan, UK, Russia, USA", "USA, UK, China, India, Brazil, Russia, Japan, Australia", "USA, UK, France, Germany, Italy, Spain, Belgium, Netherlands", "Japan, China, India, USA, Canada, Brazil, Russia, Australia"], answer: 0, explanation: "The G8 members are: Canada, France, Germany, Italy, Japan, United Kingdom, Russia, and the United States." },
                    { question: "35. Integration can lead to 'jobless growth' when:", options: ["Too many workers are hired at once", "Investment occurs primarily in capital-intensive sectors with minimal job creation", "Trade is completely unrestricted and unregulated", "Education levels rise faster than employment opportunities"], answer: 1, explanation: "Jobless growth occurs when investment goes primarily to capital-intensive sectors (like natural resources), creating economic growth without creating many jobs." },
                    { question: "36. A Filipino who became UN General Assembly President in 1989 is:", options: ["Corazon Aquino", "Ferdinand Marcos", "Carlos P. Romulo", "Benigno Aquino"], answer: 2, explanation: "Carlos P. Romulo became President of the UN General Assembly in 1989 — a notable Filipino achievement." },
                    { question: "37. Bronfenbrenner's Ecological Model belongs to which approach in Youth Studies?", options: ["Socio-Cultural Approach", "Dynamic Systems Approach", "Marxist Approach", "Postcolonial Approach"], answer: 1, explanation: "Bronfenbrenner's (1979) Ecological Model is part of the Dynamic Systems approach, viewing youth development as nested environmental interactions." },
                    { question: "38. The three types of media are:", options: ["Local, national, international", "Print, Broadcast, Digital", "Government, private, community", "Radio, television, film"], answer: 1, explanation: "The three types of media are: Print Media, Broadcast Media, and Digital/New Media." },
                    { question: "39. Thomas (1999) argues that in globalization, religions should use technology to:", options: ["Spread political influence globally", "Focus on humane and pluralistic forms of their teachings like human dignity", "Oppose Western cultural domination", "Create global religious governance"], answer: 1, explanation: "Thomas (1999) states religions must use communication technology to focus more on humane and pluralistic forms of their teachings — like human dignity." },
                    { question: "40. The ASEAN founding original members were:", options: ["Philippines, Thailand, Malaysia, Singapore, Indonesia", "Philippines, Vietnam, Myanmar, Laos, Cambodia", "All 10 current ASEAN members", "Philippines, Japan, South Korea, Indonesia, Malaysia"], answer: 0, explanation: "ASEAN's original five founding members were Philippines, Thailand, Malaysia, Singapore, and Indonesia (1967). Four countries joined later." },
                    { question: "41. The socio-cultural approach to youth studies emphasizes:", options: ["Quantitative measurement of youth outcomes", "Local contexts and youth agency in relation to structural forces", "Economic productivity only", "Individual psychology in isolation from society"], answer: 1, explanation: "The socio-cultural approach highlights the effects of social conditions on young people and emphasizes local contexts and youth agency." },
                    { question: "42. The Global North includes which developed Asian countries?", options: ["Philippines, Indonesia, Vietnam", "Australia, Japan, New Zealand", "China, India, Thailand", "South Korea, Taiwan, Malaysia"], answer: 1, explanation: "The Global North refers to developed countries including Australia, Japan, and New Zealand in Asia." },
                    { question: "43. The UN General Assembly elects a President for how long?", options: ["3 years", "5 years", "1 year", "6 months"], answer: 2, explanation: "The UN General Assembly elects a President for a 1-year term." },
                    { question: "44. Cultural Hybridization in media means:", options: ["Western culture completely replaces local culture", "Local and global cultures blend; local media adapts to compete", "Cultures isolate themselves from global content", "Government controls all media content"], answer: 1, explanation: "Cultural Hybridization means local and global cultures blend — as in India, national media (Zee TV) thrives by adapting global content to local preferences." },
                    { question: "45. The Non-permanent members of the UN Security Council are:", options: ["5 members elected for 3-year terms", "10 members elected by the GA for 2-year terms", "15 members elected by all UN members", "8 members appointed by the P5"], answer: 1, explanation: "The Security Council has 15 members: 5 permanent (P5) and 10 non-permanent members elected by the General Assembly for 2-year terms." },
                    { question: "46. Which approach to youth studies focuses on 'risk and protective factors'?", options: ["Socio-Cultural Approach", "Dynamic Systems Approach", "Cultural Studies Approach", "Post-colonial Approach"], answer: 1, explanation: "The Dynamic Systems approach examines multiple risk and protective factors in young people's interactions within different environments." },
                    { question: "47. Csordas (2009) stated that the relationship between religion and globalization has become:", options: ["Less important in social sciences", "A central concern for social sciences and religious studies", "A purely philosophical debate", "A political controversy only"], answer: 1, explanation: "Csordas (2009) stated that 'the relationship between religion and globalization has rapidly become a central concern for the social sciences and religious studies.'" },
                    { question: "48. Economic corridors in Asia (like the Greater Mekong Subregion) serve to:", options: ["Create military alliances", "Connect markets and facilitate movement of goods, services, and people across borders", "Establish a common Asian currency", "Regulate environmental policies"], answer: 1, explanation: "Economic corridors connect markets and facilitate the movement of goods, services, and people across borders — opening new opportunities for industrialization." },
                    { question: "49. Youth Studies 'OF' the South shows:", options: ["Northern theories are universally applicable", "How using theory in different local contexts changes its meaning", "Southern youth have the same experiences as Northern youth", "Only demographic data about Southern youth"], answer: 1, explanation: "Youth Studies 'of' the South shows how the use of theory in a different local context changes its meaning — what may be conservative in one place may be radical in another." },
                    { question: "50. The UNDP's Human Development Report defines human development as:", options: ["Increasing a nation's military capacity", "Enlarging people's freedoms to live lives they value", "Achieving the highest GDP growth rate", "Equal distribution of wealth globally"], answer: 1, explanation: "The UNDP defines human development as enlarging people's freedoms to live lives they value — the foundation of the Human Development Index (HDI)." },
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
            id: "ge5-f1", title: "Module 8: Human Rights and Migration",
            topics: [
              {
                id: "ge5-f1t1", title: "Human Rights and OFWs",
                content: {
                  heading: "Human Rights and OFWs", term: "FINALS", module: "Module 8: Human Rights and Migration",
                  objectives: ["Explain the concept of universal human rights", "Analyze the situation of OFWs in the context of globalization"],
                  sections: [
                    { type: "h2", content: "Human Rights" },
                    { type: "definition", content: "Human Rights — Universal rights inherent to all human beings regardless of race, sex, nationality, or religion. Enshrined in the Universal Declaration of Human Rights (UDHR, 1948)." },
                    { type: "list", content: "Three Generations of Human Rights", items: ["First generation: Civil and political rights (right to life, free speech, vote)", "Second generation: Economic, social, and cultural rights (right to education, work, health)", "Third generation: Solidarity rights (right to development, peace, clean environment)"] },
                    { type: "text", content: "OFWs (Overseas Filipino Workers) numbered approximately 2.2 million in 2022. Remittances account for about 8–10% of Philippine GDP." },
                    { type: "note", content: "The Philippines enacted RA 10022 (Migrant Workers Act) to protect OFWs. POEA regulates deployment." },
                  ],
                  quiz: [
                    { question: "The Universal Declaration of Human Rights (UDHR) was adopted in:", options: ["1945", "1948", "1955", "1966"], answer: 1, explanation: "The UDHR was adopted by the UN General Assembly on December 10, 1948 — Human Rights Day." },
                    { question: "Second generation human rights include:", options: ["Civil and political rights", "Economic, social, and cultural rights", "Solidarity rights", "Environmental rights"], answer: 1, explanation: "Second generation rights are economic, social, and cultural rights — including the right to education, work, and health." },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  },

  // ─── GE 6: ART APPRECIATION ─────────────────────────────────────────────────
  {
    id: "ge6", code: "GE 6", title: "Art Appreciation", shortTitle: "GE 6", units: 3,
    description: "Develops appreciation of the arts through understanding the nature, elements, and principles of art, and exploring Philippine and world artistic traditions.",
    terms: [
      {
        id: "prelim", label: "PRELIM",
        modules: [
          {
            id: "ge6-m1", title: "Module 1: Nature and Scope of Art",
            topics: [
              {
                id: "ge6-m1t1", title: "Definition and Functions of Art",
                content: {
                  heading: "Definition and Functions of Art", term: "PRELIM", module: "Module 1: Nature and Scope of Art",
                  objectives: ["Define art and distinguish it from non-art", "Identify the functions of art in society", "Differentiate fine arts, applied arts, and performing arts"],
                  sections: [
                    { type: "h2", content: "What is Art?" },
                    { type: "definition", content: "Art — Human activity and its product which involves technical and creative skill, imagination, or expression. It communicates ideas, emotions, or a worldview through an aesthetic medium." },
                    { type: "table", content: "Functions of Art", headers: ["Function", "Description", "Example"], rows: [["Personal", "Expression of inner feelings", "A painter expressing grief"], ["Social", "Reflects and shapes cultural values", "Rizal's novels as social commentary"], ["Physical", "Serves a practical purpose", "Architecture, furniture design"], ["Political", "Challenges power or promotes change", "Protest murals, political cartoons"], ["Spiritual", "Serves religious purposes", "Church art, sacred music"]] },
                    { type: "list", content: "Major Art Classifications", items: ["Fine Arts — Primarily aesthetic: painting, sculpture, drawing, printmaking", "Applied Arts — Functional purpose: architecture, industrial design, fashion, ceramics", "Performing Arts — Time-based: music, theater, dance, film", "Literary Arts — Written expression: poetry, fiction, drama"] },
                  ],
                  quiz: [
                    { question: "Which is an example of APPLIED arts?", options: ["Portrait painting", "Symphony music", "Ballet performance", "Furniture design"], answer: 3, explanation: "Applied arts have a functional purpose beyond aesthetics. Furniture design serves both practical and aesthetic functions." },
                  ],
                },
              },
              {
                id: "ge6-m1t2", title: "Elements and Principles of Art",
                content: {
                  heading: "Elements and Principles of Art", term: "PRELIM", module: "Module 1: Nature and Scope of Art",
                  objectives: ["Identify the elements of art", "Describe the principles of design"],
                  sections: [
                    { type: "h2", content: "Elements of Art" },
                    { type: "table", content: "Elements of Art", headers: ["Element", "Definition"], rows: [["Line", "A continuous mark; conveys direction, emotion, movement"], ["Shape", "2D area defined by boundaries; geometric or organic"], ["Form", "3D quality of an object; sculpture, architecture"], ["Space", "Area around or between objects; positive and negative space"], ["Color", "Visual quality of light reflected; hue, value, intensity"], ["Texture", "Surface quality (rough, smooth, soft); actual or implied"], ["Value", "Lightness or darkness of a color or shade"]] },
                    { type: "list", content: "Principles of Design", items: ["Balance — Visual weight distribution (symmetrical, asymmetrical, radial)", "Emphasis — Area attracting most attention", "Movement — Visual flow guiding the viewer's eye", "Pattern — Repetition of elements for visual rhythm", "Unity/Harmony — All elements working coherently together", "Contrast — Difference between elements for visual interest", "Proportion — Relationship of sizes between parts"] },
                  ],
                  quiz: [
                    { question: "Which element of art refers to the lightness or darkness of a color?", options: ["Hue", "Intensity", "Value", "Texture"], answer: 2, explanation: "Value refers to lightness or darkness. High value = light; low value = dark." },
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
            id: "ge6-m2", title: "Module 2: Philippine Visual Arts",
            topics: [
              {
                id: "ge6-m2t1", title: "Philippine Visual Arts History",
                content: {
                  heading: "Philippine Visual Arts", term: "MIDTERM", module: "Module 2: Philippine Visual Arts",
                  objectives: ["Identify major periods in Philippine art history", "Describe key Filipino artists and their works"],
                  sections: [
                    { type: "h2", content: "Philippine Art History" },
                    { type: "table", content: "Periods in Philippine Art", headers: ["Period", "Characteristics", "Examples"], rows: [["Pre-Colonial", "Gold ornaments, pottery, weaving, Baybayin", "Laguna Copperplate, Tabon Cave artifacts"], ["Spanish Colonial", "Religious art, church architecture", "San Agustin Church (Intramuros), retablos"], ["American Period", "Academism, naturalism, social realism", "Juan Luna, Felix Hidalgo"], ["Modern", "Abstract, experimental", "Victorio Edades (Father of Modern Philippine Painting)"], ["Contemporary", "Multi-media, digital art", "BenCab, Elmer Borlongan"]] },
                    { type: "list", content: "Selected National Artists for Visual Arts", items: ["Fernando Amorsolo — Rural idyllic scenes with natural sunlight", "Guillermo Tolentino — Sculptor; Oblation (UP), Bonifacio Monument", "Victorio Edades — 'Father of Modern Philippine Painting'", "Carlos Francisco (Botong) — Muralist; depicted Philippine history", "BenCab (Benedicto Cabrera) — Contemporary; 'Sabel' series"] },
                    { type: "note", content: "Juan Luna's Spolarium (1884) won major prize at the Madrid Exposition of Fine Arts — a landmark proving Filipino artistic excellence to the colonial world." },
                  ],
                  quiz: [
                    { question: "Who is known as the 'Father of Modern Philippine Painting'?", options: ["Fernando Amorsolo", "Juan Luna", "Victorio Edades", "Carlos Francisco"], answer: 2, explanation: "Victorio Edades introduced modernist style to Philippine art." },
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
            id: "ge6-m3", title: "Module 3: Art Criticism",
            topics: [
              {
                id: "ge6-m3t1", title: "Approaches to Art Criticism",
                content: {
                  heading: "Approaches to Art Criticism", term: "FINALS", module: "Module 3: Art Criticism",
                  objectives: ["Describe major approaches to art criticism", "Apply the steps of art criticism to analyze artworks"],
                  sections: [
                    { type: "h2", content: "Art Criticism (Feldman's Model)" },
                    { type: "list", content: "Four Steps of Art Criticism", items: ["Description — What do you see? (Objective facts: subject matter, medium, size, colors)", "Analysis — How is it organized? (Elements and principles used)", "Interpretation — What does it mean? (Message, mood, symbolism, theme)", "Evaluation/Judgment — Is it successful? Why or why not?"] },
                    { type: "table", content: "Art Criticism Approaches", headers: ["Approach", "Focus"], rows: [["Formalism", "Form, composition, and structure (Clement Greenberg)"], ["Expressionism", "Emotional content and the artist's intent"], ["Contextualism", "Cultural, historical, and social context"], ["Feminism", "Gender representation and women's perspectives"]] },
                  ],
                  quiz: [
                    { question: "In Feldman's model, 'Interpretation' involves:", options: ["Listing the colors and medium used", "Analyzing elements and principles of design", "Determining the meaning, mood, and symbolism", "Judging whether the artwork is successful"], answer: 2, explanation: "Interpretation asks 'What does it mean?' — exploring message, mood, and symbolism." },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  },

  // ─── GE 7: SCIENCE, TECHNOLOGY & SOCIETY ────────────────────────────────────
  {
    id: "ge7", code: "GE 7", title: "Science, Technology & Society", shortTitle: "GE 7", units: 3,
    description: "Examines the relationship between science, technology, and society, including historical development, ethical implications, and the impact of technology on Filipino life.",
    terms: [
      {
        id: "prelim", label: "PRELIM",
        modules: [
          {
            id: "ge7-m1", title: "Module 1: Science, Technology, and Society Nexus",
            topics: [
              {
                id: "ge7-m1t1", title: "Nature of Science and Technology",
                content: {
                  heading: "Nature of Science and Technology", term: "PRELIM", module: "Module 1: Science, Technology, and Society Nexus",
                  objectives: ["Define science and technology", "Explain the relationship between science, technology, and society", "Trace the historical development of science and technology"],
                  sections: [
                    { type: "h2", content: "Science and Technology Defined" },
                    { type: "definition", content: "Science — A systematic enterprise that builds and organizes knowledge in the form of testable explanations and predictions about the natural world through observation, experimentation, and analysis." },
                    { type: "definition", content: "Technology — The application of scientific knowledge for practical purposes, especially in industry. It includes tools, machines, techniques, and processes developed to solve problems or improve human life." },
                    { type: "table", content: "Historical Scientific Revolutions", headers: ["Period", "Key Development", "Impact"], rows: [["Scientific Revolution (16th–17th c.)", "Copernican heliocentric model; Newton's laws", "Replaced religious dogma with empirical science"], ["Industrial Revolution (18th–19th c.)", "Steam engine, mechanized production", "Urbanization, capitalism, mass production"], ["Digital Revolution (20th–21st c.)", "Computers, internet, smartphones", "Information age, globalization, AI"]] },
                    { type: "note", content: "Thomas Kuhn's 'The Structure of Scientific Revolutions' (1962) introduced the concept of paradigm shifts — revolutionary changes in scientific understanding." },
                  ],
                  quiz: [
                    { question: "Technology is best defined as:", options: ["Pure theoretical knowledge about the natural world", "The application of scientific knowledge for practical purposes", "The study of society's relationship to nature", "Mathematical formulas and equations"], answer: 1, explanation: "Technology is the practical application of scientific knowledge — tools and processes to solve problems." },
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
            id: "ge7-m2", title: "Module 2: Technology and Society",
            topics: [
              {
                id: "ge7-m2t1", title: "Social Implications of Technology",
                content: {
                  heading: "Social Implications of Technology", term: "MIDTERM", module: "Module 2: Technology and Society",
                  objectives: ["Analyze positive and negative effects of technology", "Identify ethical issues raised by emerging technologies"],
                  sections: [
                    { type: "h2", content: "Technology and Its Social Impact" },
                    { type: "table", content: "Social Implications of Key Technologies", headers: ["Technology", "Positive Effects", "Negative Effects"], rows: [["Internet", "Access to information, global communication", "Misinformation, cybercrime, addiction, privacy loss"], ["Social Media", "Community building, free expression", "Mental health issues, echo chambers, fake news"], ["AI", "Automation, medical diagnosis, efficiency", "Job displacement, bias, surveillance"], ["Biotechnology", "New medicines, improved crop yields", "GMO controversies, bioweapons potential"]] },
                    { type: "list", content: "Key Ethical Issues in Technology", items: ["Privacy: Who owns our data? Surveillance capitalism", "Digital divide: Unequal access to technology", "Automation and job displacement: AI replacing workers", "Cybercrime: Hacking, identity theft, fraud", "Intellectual property: Copyright in the digital age"] },
                    { type: "note", content: "In the Philippines: Cybercrime Prevention Act (RA 10175, 2012) addresses online offenses. Data Privacy Act (RA 10173) protects personal information." },
                  ],
                  quiz: [
                    { question: "The 'digital divide' refers to:", options: ["Gap between analog and digital technology", "Unequal access to technology between different groups", "Difference between hardware and software", "Security vulnerabilities in digital systems"], answer: 1, explanation: "Digital divide: the gap between those who have access to technology and those who do not." },
                    { question: "The Philippine Cybercrime Prevention Act is:", options: ["RA 9163", "RA 10173", "RA 10175", "RA 7722"], answer: 2, explanation: "RA 10175 (Cybercrime Prevention Act of 2012) addresses hacking, identity theft, and cyberlibel." },
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
            id: "ge7-m3", title: "Module 3: Science and Technology in the Philippines",
            topics: [
              {
                id: "ge7-m3t1", title: "Philippine Science, Technology, and IT-BPO",
                content: {
                  heading: "Science and Technology in the Philippines", term: "FINALS", module: "Module 3: Science and Technology in the Philippines",
                  objectives: ["Describe the state of science and technology in the Philippines", "Analyze the role of IT-BPO in Philippine development"],
                  sections: [
                    { type: "h2", content: "Philippine Science and Technology" },
                    { type: "list", content: "Key DOST Agencies", items: ["PAGASA — Atmospheric, Geophysical and Astronomical Services", "PHIVOLCS — Volcanology and Seismology", "DOST-ASTI — Advanced Science and Technology Institute (IT research)", "PCHRD — Health Research", "PCAARRD — Agriculture and Natural Resources Research"] },
                    { type: "h3", content: "IT-BPO Industry" },
                    { type: "text", content: "The IT-BPO sector employs over 1.5 million Filipinos. The Philippines is the world's leading destination for voice-based BPO services due to English proficiency, cultural affinity with the West, and a large pool of IT graduates." },
                  ],
                  quiz: [
                    { question: "Which Philippine government agency monitors volcanic and earthquake activity?", options: ["PAGASA", "PHIVOLCS", "DOST-ASTI", "PCHRD"], answer: 1, explanation: "PHIVOLCS (Philippine Institute of Volcanology and Seismology) monitors volcanic and seismic activity." },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  },

  // ─── GE 8: ETHICS ────────────────────────────────────────────────────────────
  {
    id: "ge8", code: "GE 8", title: "Ethics", shortTitle: "GE 8", units: 3,
    description: "Examines ethical theories and principles, moral reasoning, and the application of ethics to contemporary personal, professional, and social issues.",
    terms: [
      {
        id: "prelim", label: "PRELIM",
        modules: [
          {
            id: "ge8-m1", title: "Module 1: Introduction to Ethics",
            topics: [
              {
                id: "ge8-m1t1", title: "Nature and Scope of Ethics",
                content: {
                  heading: "Nature and Scope of Ethics", term: "PRELIM", module: "Module 1: Introduction to Ethics",
                  objectives: ["Define ethics and distinguish it from morality", "Identify the branches of ethics", "Explain why ethics is important for a BSIT student"],
                  sections: [
                    { type: "h2", content: "What is Ethics?" },
                    { type: "definition", content: "Ethics — The branch of philosophy concerned with what is morally right and wrong, good and evil, virtue and vice. It involves systematic reflection on moral principles and their application to human conduct." },
                    { type: "table", content: "Branches of Ethics", headers: ["Branch", "Question", "Description"], rows: [["Metaethics", "What IS morality?", "Studies the nature and foundations of moral concepts and language"], ["Normative Ethics", "What SHOULD we do?", "Develops theories about right and wrong action"], ["Applied Ethics", "How do we handle specific moral issues?", "Applies ethical theory to real situations (medical, IT, environmental ethics)"]] },
                    { type: "list", content: "Ethical Issues in IT", items: ["Privacy and data protection", "Intellectual property and software piracy", "Cybercrime and hacking", "Algorithmic bias and fairness in AI", "Digital surveillance and freedom"] },
                  ],
                  quiz: [
                    { question: "Applied ethics involves:", options: ["Studying the nature of moral concepts", "Developing abstract theories", "Applying ethical theory to specific real-world situations", "Defining what 'good' and 'bad' mean"], answer: 2, explanation: "Applied ethics applies ethical theory to specific real-world issues." },
                  ],
                },
              },
              {
                id: "ge8-m1t2", title: "Major Ethical Theories",
                content: {
                  heading: "Major Ethical Theories", term: "PRELIM", module: "Module 1: Introduction to Ethics",
                  objectives: ["Describe major normative ethical theories", "Apply each theory to ethical dilemmas", "Evaluate strengths and weaknesses of each theory"],
                  sections: [
                    { type: "h2", content: "Major Normative Ethical Theories" },
                    { type: "definition", content: "Utilitarianism (Bentham, Mill) — An action is morally right if it produces the greatest good for the greatest number. Consequences determine morality." },
                    { type: "definition", content: "Categorical Imperative (Kant) — Act only according to principles you could will to become universal law. Duty and rules — not consequences — determine right action." },
                    { type: "definition", content: "Virtue Ethics (Aristotle) — Focuses on character rather than rules or consequences. A virtuous person (courage, honesty, justice, temperance) will naturally make good choices. Goal: eudaimonia (human flourishing)." },
                    { type: "table", content: "Comparison of Ethical Theories", headers: ["Theory", "Basis of Morality", "Key Figure"], rows: [["Utilitarianism", "Consequences — greatest good for greatest number", "Bentham, Mill"], ["Deontology", "Duty and rules — regardless of consequences", "Kant"], ["Virtue Ethics", "Character and virtues", "Aristotle"], ["Ethics of Care", "Relationships and empathy", "Gilligan, Noddings"], ["Social Contract", "Agreement among rational individuals", "Hobbes, Locke, Rousseau"]] },
                    { type: "example", content: "Lying example:\n• Utilitarian: lying is OK if it saves lives (consequences matter)\n• Kantian: lying is ALWAYS wrong — if everyone lied, trust would be destroyed (universalizability test fails)\n• Virtue Ethics: an honest person would find a truthful solution even in difficult situations" },
                  ],
                  quiz: [
                    { question: "Utilitarianism judges the morality of an action by:", options: ["Whether it follows a moral rule", "Whether it produces the greatest good for the greatest number", "Whether it reflects good character", "Whether it is agreed upon by society"], answer: 1, explanation: "Utilitarianism is consequentialist — determined by outcomes: greatest good for greatest number." },
                    { question: "Kant's Categorical Imperative requires that:", options: ["Actions maximize utility", "You act as a virtuous person would", "You act only on principles you could will to be universal laws", "You follow the commands of authority"], answer: 2, explanation: "Kant's Categorical Imperative: Act only on principles you could will to be universal laws." },
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
            id: "ge8-m2", title: "Module 2: Professional and Computer Ethics",
            topics: [
              {
                id: "ge8-m2t1", title: "Computer and IT Ethics",
                content: {
                  heading: "Computer and IT Ethics", term: "MIDTERM", module: "Module 2: Professional and Computer Ethics",
                  objectives: ["Define computer ethics", "Identify the ten commandments of computer ethics", "Analyze ethical dilemmas in IT professional practice"],
                  sections: [
                    { type: "h2", content: "Computer Ethics" },
                    { type: "definition", content: "Computer Ethics — A branch of applied ethics that studies ethical issues arising from the use of computers and IT, including privacy, intellectual property, and professional responsibility." },
                    { type: "list", content: "Ten Commandments of Computer Ethics (CEBI, 1992)", items: ["1. Thou shalt not use a computer to harm other people", "2. Thou shalt not interfere with other people's computer work", "3. Thou shalt not snoop around in other people's files", "4. Thou shalt not use a computer to steal", "5. Thou shalt not use a computer to bear false witness", "6. Thou shalt not copy or use proprietary software without paying", "7. Thou shalt not use other people's computer resources without authorization", "8. Thou shalt not appropriate other people's intellectual output", "9. Thou shalt think about the social consequences of the program you write", "10. Thou shalt always use a computer to ensure respect for your fellow humans"] },
                    { type: "table", content: "Types of Software Licenses", headers: ["Type", "Description", "Example"], rows: [["Proprietary", "Owned; must purchase; source code protected", "Microsoft Windows, Adobe Photoshop"], ["Freeware", "Free to use but source code not available", "Older Adobe Reader"], ["Open Source", "Source code available; can be modified and distributed", "Linux, Firefox, VLC"], ["Shareware", "Try before buying; full features require payment", "WinRAR"]] },
                  ],
                  quiz: [
                    { question: "Open-source software means:", options: ["Software that is free to download only", "Software with publicly available source code that can be modified", "Software owned by the government", "Software that cannot be copied"], answer: 1, explanation: "Open-source has publicly available source code that can be viewed, modified, and distributed." },
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
            id: "ge8-m3", title: "Module 3: Environmental and Social Ethics",
            topics: [
              {
                id: "ge8-m3t1", title: "Environmental Ethics",
                content: {
                  heading: "Environmental Ethics", term: "FINALS", module: "Module 3: Environmental and Social Ethics",
                  objectives: ["Define environmental ethics", "Identify major environmental ethics perspectives", "Analyze human responsibility toward the natural environment"],
                  sections: [
                    { type: "h2", content: "Environmental Ethics" },
                    { type: "definition", content: "Environmental Ethics — A branch of applied ethics examining human beings' ethical relationship with the natural environment. What duties, if any, do humans have toward nature?" },
                    { type: "table", content: "Environmental Ethics Perspectives", headers: ["Perspective", "View of Nature", "Implication"], rows: [["Anthropocentrism", "Nature has value only insofar as it serves human needs", "Environment protected only for human benefit"], ["Biocentrism", "All living things have intrinsic moral value", "Humans must respect all life forms"], ["Ecocentrism", "Entire ecosystems and species have inherent value", "Biodiversity must be protected even at human cost"], ["Deep Ecology", "Radical rejection of human superiority; all nature is intrinsically valuable", "Fundamental change in human-nature relationship required"]] },
                  ],
                  quiz: [
                    { question: "Biocentrism in environmental ethics holds that:", options: ["Only humans have moral standing", "All living things have intrinsic moral value", "Entire ecosystems have inherent value", "Economic development takes priority"], answer: 1, explanation: "Biocentrism: all living beings — not just humans — have intrinsic moral value." },
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
