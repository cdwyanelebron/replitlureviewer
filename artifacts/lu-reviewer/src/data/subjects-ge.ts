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
      description: "Reviewer based on the updated class coverage: Module 1 and Module 2 for Prelim; Module 3 and Module 4 for Midterm. GE5NOTES are used as supporting explanations from class discussion.",
      terms: [
        {
          id: "prelim", label: "PRELIM",
          modules: [
            {
              id: "ge5-m1", title: "Module 1: Introduction to Globalization",
              topics: [
                {
                  id: "ge5-m1t1", title: "Nature and Definitions of Globalization",
                  content: {
                    heading: "Nature and Definitions of Globalization", term: "PRELIM", module: "Module 1: Introduction to Globalization",
                    objectives: ["Explain the nature of globalization", "Compare scholarly definitions of globalization", "Remember Steger's best scholarly description"],
                    sections: [
                      { type: "h2", content: "Nature of Globalization" },
                      { type: "text", content: "Globalization is the primary driving force of the contemporary world. It is complex and multifaceted: it happens at multiple levels and affects people differently." },
                      { type: "note", content: "Memory clue: 'The world is getting smaller' because people, objects, information, markets, cultures, and political ideas move across borders faster and more widely." },
                      { type: "table", content: "Definitions from Module 1", headers: ["Source", "Key Idea"], rows: [
                        ["Ohmae (1992)", "Globalization means the onset of the borderless world."],
                        ["Ritzer (2015)", "A trans-planetary process involving increasing liquidity and multidirectional flows of people, objects, places, and information."],
                        ["Giddens (1990)", "Intensification of worldwide social relations linking distant localities."],
                        ["Robertson (1992)", "Compression of the world and intensification of consciousness of the world as a whole."],
                        ["OECD (2002)", "Markets and production in different countries become increasingly interdependent through trade, services, capital, and technology."],
                        ["Beck (2000)", "Globalization implies the weakening of state sovereignty and state structures."],
                        ["Nikitin and Elliott (2003)", "Establishment of a global market free from socio-political control."],
                        ["Scholte (2000)", "De-territorialization or growth of superterritorial relations."],
                        ["Cooppan (2001)", "A process of cross-cultural interaction, exchange, and transformation."],
                        ["Steger", "Expansion and intensification of social relations and consciousness across world-time and world-space."],
                      ]},
                      { type: "note", content: "Module emphasis: Steger gives the best scholarly description of globalization: expansion and intensification of social relations and consciousness across world-time and world-space." },
                    ],
                    quiz: [
                      { question: "According to Ohmae, globalization means the onset of:", options: ["A borderless world", "A closed economy", "A purely local society", "A monarchy system"], answer: 0, explanation: "Ohmae's definition describes globalization as the onset of the borderless world." },
                      { question: "Which scholar defines globalization as the compression of the world and intensification of consciousness of the world as a whole?", options: ["Robertson", "Beck", "OECD", "Cooppan"], answer: 0, explanation: "Robertson emphasizes compression of the world and consciousness of the world as a whole." },
                      { question: "Steger's description of globalization focuses on expansion and intensification across:", options: ["World-time and world-space", "Only local markets", "Only military alliances", "Only religion"], answer: 0, explanation: "Steger describes globalization as expansion and intensification of social relations and consciousness across world-time and world-space." },
                      { question: "OECD's definition emphasizes interdependence through trade, capital, technology, and:", options: ["Goods and services", "Royal families", "Traditional farming only", "Local folklore only"], answer: 0, explanation: "OECD focuses on interdependence of markets and production through trade in goods and services and flows of capital and technology." },
                      { question: "Beck connects globalization with the weakening of:", options: ["State sovereignty and state structures", "All cultural exchange", "All technologies", "Personal identity only"], answer: 0, explanation: "Beck's definition states that globalization implies weakening of state sovereignty and state structures." },
                    ],
                  },
                },
                {
                  id: "ge5-m1t2", title: "Scapes of Globalization",
                  content: {
                    heading: "Appadurai's Scapes of Globalization", term: "PRELIM", module: "Module 1: Introduction to Globalization",
                    objectives: ["Identify the five scapes of globalization", "Match examples to each scape", "Explain how flows move globally"],
                    sections: [
                      { type: "h2", content: "Arjun Appadurai" },
                      { type: "text", content: "Arjun Appadurai is a cultural anthropologist whose work Modernity at Large: Cultural Dimensions of Globalization presents a fivefold theory of scapes that make up the contemporary social imaginary." },
                      { type: "table", content: "Five Scapes of Globalization", headers: ["Scape", "Meaning", "Module Example / Clue"], rows: [
                        ["Ethnoscape", "Global movement of people", "Tourism, migration, people from developed and developing parts of the world meeting."],
                        ["Mediascape", "Flow of culture through media", "Brazilian telenovelas, Bollywood films, World Cup, Olympics, Facebook posts."],
                        ["Technoscape", "Circulation of mechanical goods and software", "Apple's iPhone and technologies moving across boundaries."],
                        ["Financescape", "Global circulation of money", "NYSE, Nikkei index, and finance hubs affecting economies quickly."],
                        ["Ideoscape", "Movement of political ideas", "Personal views posted publicly; ideologies and political messages moving across borders."],
                      ]},
                      { type: "note", content: "Exam clue: people = ethnoscape; media/culture = mediascape; technology/software = technoscape; money/stock markets = financescape; political ideas/views = ideoscape." },
                    ],
                    quiz: [
                      { question: "Which scape refers to the global movement of people?", options: ["Ethnoscape", "Technoscape", "Financescape", "Ideoscape"], answer: 0, explanation: "Ethnoscape refers to the global movement of people." },
                      { question: "Apple's iPhone moving across boundaries is an example of:", options: ["Technoscape", "Ethnoscape", "Financescape", "Ideoscape"], answer: 0, explanation: "Technoscape refers to the circulation of technologies, mechanical goods, and software." },
                      { question: "Global transfer of money through NYSE and Nikkei is associated with:", options: ["Financescape", "Mediascape", "Ethnoscape", "Ideoscape"], answer: 0, explanation: "Financescape denotes the global circulation of money." },
                      { question: "Bollywood films shown in Canadian cinemas represent:", options: ["Mediascape", "Technoscape", "Financescape", "Ethnoscape"], answer: 0, explanation: "Mediascape refers to the flow of culture through media." },
                      { question: "Political ideas moving globally belong to:", options: ["Ideoscape", "Financescape", "Technoscape", "Ethnoscape"], answer: 0, explanation: "Ideoscape is the realm where political ideas move around." },
                    ],
                  },
                },
                {
                  id: "ge5-m1t3", title: "Theories and Cultural Flows",
                  content: {
                    heading: "Homogeneity, Heterogeneity, and Cultural Flows", term: "PRELIM", module: "Module 1: Introduction to Globalization",
                    objectives: ["Differentiate homogeneity and heterogeneity", "Explain cultural convergence, divergence, and hybridization", "Recognize glocalization examples"],
                    sections: [
                      { type: "h2", content: "Theories on Globalization" },
                      { type: "table", content: "Key Theories / Examples from Module 1", headers: ["Concept", "Meaning / Module Clue"], rows: [
                        ["Culture of Imperialism", "Foreign or dominant cultural influence appears in local spaces, such as Vigan Heritage Village showing European influence in architecture."],
                        ["Media Imperialism", "Global media platforms or applications can create images of exclusivity and shape cultural consumption."],
                        ["Neoliberalism", "Emphasizes market-oriented ideas; the module notes inequality, such as a large share of wealth owned by a small percentage of the population."],
                        ["McDonaldization", "Fast-food logic prioritizes convenience, speed, and efficiency, creating business opportunities and changing habits."],
                      ]},
                      { type: "table", content: "Perspectives on Global Cultural Flows", headers: ["Perspective", "Meaning", "Example Clue"], rows: [
                        ["Cultural Convergence", "Cultures become more similar because of global flows.", "Global spread of similar media, food, or consumer practices."],
                        ["Cultural Divergence / Differentialism", "Cultures remain different or resist becoming the same.", "Local identities and differences stay strong."],
                        ["Cultural Hybridization / Glocalization", "Global and local cultures blend.", "Shaka Shaka Chicken, Shrimp Beef Burger, Dosa Masala Burger, Cheesy Eggdesal; global products adapted to local tastes."],
                      ]},
                      { type: "note", content: "Supporting class note: Neoliberalism promotes free markets, free trade, privatization, and less government regulation, but it can create inequality because richer countries and corporations often benefit more." },
                    ],
                    quiz: [
                      { question: "Cultural hybridization means:", options: ["Global and local cultures blend", "All cultures disappear", "Only one culture remains", "No cultural exchange happens"], answer: 0, explanation: "Hybridization or glocalization occurs when global and local cultures mix." },
                      { question: "Shaka Shaka Chicken and Cheesy Eggdesal are examples of:", options: ["Glocalization", "Mercantilism", "Westphalian sovereignty", "UN veto power"], answer: 0, explanation: "They show global/local blending of products and tastes." },
                      { question: "Cultural convergence means cultures become:", options: ["More similar", "Completely isolated", "Legally sovereign", "Only political"], answer: 0, explanation: "Convergence means cultures move toward similarity." },
                      { question: "Neoliberalism promotes free markets, free trade, privatization, and:", options: ["Less government regulation", "More monarchy", "Closed borders only", "No private business"], answer: 0, explanation: "The class notes list less government regulation as a key neoliberal idea." },
                      { question: "McDonaldization is linked with:", options: ["Convenience, speed, and efficiency", "No businesses", "Only traditional agriculture", "Pure isolationism"], answer: 0, explanation: "The module example connects fast-food logic with convenience and business opportunities." },
                    ],
                  },
                },
              ],
            },
            {
              id: "ge5-m2", title: "Module 2: Globalization of World Economy",
              topics: [
                {
                  id: "ge5-m2t1", title: "Mercantilism and Open-Trade System",
                  content: {
                    heading: "Globalization of the World Economy", term: "PRELIM", module: "Module 2: Globalization of World Economy",
                    objectives: ["Explain mercantilism", "Explain the open-trade system and gold standard", "Connect economic globalization with trade systems"],
                    sections: [
                      { type: "h2", content: "Mercantilism" },
                      { type: "definition", content: "Mercantilism — an economic system dominant from the 16th to 18th century in which countries, primarily in Europe, competed to sell more goods as a way to boost national income or monetary reserves." },
                      { type: "list", content: "Key ideas from the Module 2 PPT:", items: ["16th–18th century", "Countries competed with one another, especially in Europe", "Selling more goods was a way to increase the country's income", "This income was later referred to as monetary reserves"] },
                      { type: "h2", content: "Open-Trade System" },
                      { type: "text", content: "The open-trade system adopted the gold standard at an international monetary conference in Paris. It aimed to prevent the isolationism of the mercantilist era." },
                      { type: "table", content: "Mercantilism vs. Open-Trade System", headers: ["Topic", "Main Idea", "Exam Clue"], rows: [
                        ["Mercantilism", "Countries compete to sell more goods and increase monetary reserves.", "16th–18th century; Europe; export/competition mindset."],
                        ["Open-Trade System", "Adopted the gold standard at an international monetary conference in Paris.", "Created to prevent isolationism of the mercantilist era."],
                      ]},
                      { type: "note", content: "Supporting class note: Mercantilism is connected to strong government control of trade and the idea that wealth is measured through reserves such as gold and silver." },
                    ],
                    quiz: [
                      { question: "Mercantilism was dominant during which period?", options: ["16th–18th century", "20th–21st century only", "Ancient period only", "After 2008 only"], answer: 0, explanation: "The Module 2 PPT states that mercantilism occurred in the 16th–18th century." },
                      { question: "Under mercantilism, European countries competed to:", options: ["Sell more goods to boost income", "Stop all production", "Abolish trade", "Remove monetary reserves"], answer: 0, explanation: "Countries competed to sell more goods as a means to boost national income or monetary reserves." },
                      { question: "The open-trade system adopted the gold standard at an international monetary conference in:", options: ["Paris", "Tokyo", "Manila", "New York"], answer: 0, explanation: "The PPT states that the gold standard was adopted at an international monetary conference in Paris." },
                      { question: "The open-trade system aimed to prevent:", options: ["Isolationism of the mercantilist era", "All global exchange", "All cultural flows", "All financial systems"], answer: 0, explanation: "The PPT says it was adopted to prevent the isolationism of the mercantilist era." },
                      { question: "In the supporting notes, mercantilism measures wealth through:", options: ["Gold and silver / reserves", "Social media followers", "Only population size", "No trade at all"], answer: 0, explanation: "The class notes connect mercantilism with wealth measured by gold, silver, or reserves." },
                    ],
                  },
                },
                {
                  id: "ge5-m2t2", title: "Economic Globalization: Crisis, Policy, and New Changes",
                  content: {
                    heading: "Supporting Notes on Economic Globalization", term: "PRELIM", module: "Module 2: Globalization of World Economy",
                    objectives: ["Use class notes to understand economic globalization", "Explain the 2008 crisis and monetary policy response", "Identify modern economic changes such as digital currency and AI"],
                    sections: [
                      { type: "note", content: "This topic uses GE5NOTES as supporting material because these are the verbal explanations/class notes from sir." },
                      { type: "h2", content: "2008 Global Financial Crisis" },
                      { type: "list", content: "Causes explained in class notes:", items: ["Banks and financial institutions lost billions due to the collapse of the housing market", "Many banks gave housing loans or mortgages", "Interest rates were very low, so many people borrowed money to buy houses", "High demand increased real estate prices quickly, creating a housing bubble"] },
                      { type: "definition", content: "Mortgage-Backed Securities (MBS) — investment products created when banks combined many housing loans and sold them like stocks to investors." },
                      { type: "example", content: "Bottle analogy: 'The bottle is the stock.' The bottle represents the investment fund or MBS. The money inside comes from mortgage payments. If people stop paying their loans, the bottle becomes empty and investors lose money." },
                      { type: "h2", content: "Government Response: Monetary Policy" },
                      { type: "list", content: "The Federal Reserve System tried to recover the economy by:", items: ["Lowering interest rates", "Increasing the money supply", "Encouraging borrowing and spending"] },
                      { type: "h2", content: "Modern Economic Changes" },
                      { type: "table", content: "Modern Changes from Class Notes", headers: ["Topic", "Main Idea"], rows: [
                        ["Digital currencies", "Bitcoin and similar currencies are digital, decentralized, and not controlled by a central bank."],
                        ["Artificial Intelligence", "AI transforms production and business through e-commerce automation, AI customer service, and faster data analysis."],
                        ["AI and labor", "AI can increase productivity and growth but may reduce the need for human labor and lower manpower costs."],
                      ]},
                    ],
                    quiz: [
                      { question: "The 2008 Global Financial Crisis was connected to the collapse of the:", options: ["Housing market", "Rice market", "Textile market", "Tourism market only"], answer: 0, explanation: "The notes state that banks lost billions due to the collapse of the housing market." },
                      { question: "Mortgage-Backed Securities were created by combining many:", options: ["Housing loans", "Political speeches", "Tourist visas", "Cultural festivals"], answer: 0, explanation: "MBS came from many mortgages combined into investment products." },
                      { question: "In the bottle analogy, if homeowners stop paying loans, the bottle becomes:", options: ["Empty", "Fuller", "A government", "A currency"], answer: 0, explanation: "If mortgage payments stop, the investment fund loses value, like an empty bottle." },
                      { question: "The Federal Reserve response included lowering interest rates, increasing money supply, and:", options: ["Encouraging borrowing and spending", "Ending all banks", "Stopping all money flow", "Abolishing mortgages"], answer: 0, explanation: "These actions were meant to stimulate economic recovery." },
                      { question: "Bitcoin is described in the notes as digital, decentralized, and:", options: ["Not controlled by a central bank", "Controlled by a monarchy", "Only paper money", "Not part of modern economy"], answer: 0, explanation: "The notes describe digital currencies like Bitcoin as not controlled by a central bank." },
                    ],
                  },
                },
                {
                  id: "ge5-prelim-exam", title: "Prelim Comprehensive Exam (Module 1–2)",
                  content: {
                    heading: "GE5 Prelim Comprehensive Exam", term: "PRELIM", module: "Modules 1–2",
                    objectives: ["Review Module 1 and Module 2 coverage", "Practice definitions, scapes, cultural flows, and economic globalization"],
                    sections: [{ type: "note", content: "Coverage: Module 1 Introduction to Globalization and Module 2 Globalization of World Economy, with GE5NOTES as supporting explanations." }],
                    quiz: [
                      { question: "1. The phrase 'the world is getting smaller' refers to the effect of:", options: ["Globalization", "Mercantilism only", "Isolationism", "Cominform"], answer: 0, explanation: "Globalization makes distant places and people more connected." },
                      { question: "2. Steger describes globalization as expansion and intensification of social relations and consciousness across:", options: ["World-time and world-space", "Only local time", "Only national law", "Gold reserves only"], answer: 0, explanation: "This is the module's best scholarly description." },
                      { question: "3. Ohmae defines globalization as the onset of:", options: ["A borderless world", "A closed kingdom", "A no-trade world", "A single city"], answer: 0, explanation: "Ohmae's definition uses the borderless world idea." },
                      { question: "4. Ethnoscape refers to the global movement of:", options: ["People", "Money", "Software", "Political slogans only"], answer: 0, explanation: "Ethnoscape is about people moving globally." },
                      { question: "5. Technoscape refers to the circulation of:", options: ["Mechanical goods and software", "Only taxes", "Only armies", "Only laws"], answer: 0, explanation: "Technology and software are technoscape clues." },
                      { question: "6. Financescape is the global circulation of:", options: ["Money", "Tourists", "Religious rituals", "National flags"], answer: 0, explanation: "Financescape denotes global money flows." },
                      { question: "7. Mediascape refers to:", options: ["Flow of culture through media", "Gold standard", "State sovereignty", "Labor reform only"], answer: 0, explanation: "Media content and cultural circulation belong to mediascape." },
                      { question: "8. Ideoscape is the movement of:", options: ["Political ideas", "Mortgages only", "Fruits only", "Tourists only"], answer: 0, explanation: "Political ideas moving around are ideoscape." },
                      { question: "9. Cultural convergence means cultures become:", options: ["More similar", "More isolated", "Completely invisible", "Only economic"], answer: 0, explanation: "Convergence is movement toward similarity." },
                      { question: "10. Cultural divergence or differentialism means cultures:", options: ["Remain different or resist sameness", "Always become identical", "Stop existing", "Become currencies"], answer: 0, explanation: "Divergence emphasizes difference and resistance." },
                      { question: "11. Glocalization means:", options: ["Global and local cultures blend", "All trade stops", "Only gold is used", "Workers unite only"], answer: 0, explanation: "Glocalization is global-local blending." },
                      { question: "12. Shaka Shaka Chicken and Cheesy Eggdesal are examples of:", options: ["Cultural hybridization", "Westphalian sovereignty", "Comintern", "Security Council veto"], answer: 0, explanation: "They show local adaptation of global products." },
                      { question: "13. Neoliberalism promotes free markets, free trade, privatization, and:", options: ["Less government regulation", "No companies", "More feudalism", "No global economy"], answer: 0, explanation: "These are listed in GE5NOTES." },
                      { question: "14. Mercantilism was dominant during the:", options: ["16th–18th century", "21st century only", "After 1945 only", "Ancient Egyptian era only"], answer: 0, explanation: "The Module 2 PPT states 16th–18th century." },
                      { question: "15. Mercantilist countries competed to sell more goods to boost:", options: ["Country income / monetary reserves", "Religious attendance", "UN membership", "Tourism only"], answer: 0, explanation: "Selling more goods boosted income or monetary reserves." },
                      { question: "16. The open-trade system adopted the gold standard in:", options: ["Paris", "Manila", "Moscow", "Beijing"], answer: 0, explanation: "The PPT says the gold standard was adopted at an international monetary conference in Paris." },
                      { question: "17. The open-trade system aimed to prevent:", options: ["Isolationism of mercantilism", "All economic exchange", "All cultural flows", "Technology"], answer: 0, explanation: "It was meant to prevent the isolationism of the mercantilist era." },
                      { question: "18. The 2008 financial crisis involved collapse of the:", options: ["Housing market", "United Nations", "Concert of Europe", "Facebook market only"], answer: 0, explanation: "The notes identify the housing market collapse." },
                      { question: "19. MBS stands for:", options: ["Mortgage-Backed Securities", "Market Balance Society", "Money Bank System", "Modern Borderless State"], answer: 0, explanation: "MBS are mortgage-backed securities." },
                      { question: "20. The Federal Reserve tried to recover the economy by:", options: ["Lowering interest rates", "Raising all prices only", "Ending banks", "Stopping borrowing"], answer: 0, explanation: "Lowering rates was one response." },
                      { question: "21. Bitcoin is described as:", options: ["Digital and decentralized", "Only paper money", "Controlled by one central bank", "A gold coin"], answer: 0, explanation: "The notes describe Bitcoin as digital and decentralized." },
                      { question: "22. AI can increase productivity but may reduce:", options: ["Need for human labor", "All technologies", "All trade", "All data"], answer: 0, explanation: "The notes mention AI may reduce human labor and manpower costs." },
                      { question: "23. Media imperialism in the module is connected with:", options: ["Global media/software influence", "Mercantilist gold reserves", "Only state territory", "ICJ decisions"], answer: 0, explanation: "The module example uses Netflix/media platforms and exclusivity." },
                      { question: "24. McDonaldization emphasizes:", options: ["Convenience and time-saving", "No business", "Only war", "No cultural exchange"], answer: 0, explanation: "Fast-food menu examples show convenience and time-saving." },
                      { question: "25. Ritzer's definition includes multidirectional flows of people, objects, places, and:", options: ["Information", "Only gold", "Only armies", "Only courts"], answer: 0, explanation: "Ritzer includes flows of information." },
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
              id: "ge5-m3", title: "Module 3: A History of Global Politics",
              topics: [
                {
                  id: "ge5-m3t1", title: "Power, Politics, State, and International Order",
                  content: {
                    heading: "Global Politics: Creating an International Order", term: "MIDTERM", module: "Module 3: A History of Global Politics",
                    objectives: ["Define power and politics", "Identify the elements of a state", "Explain basic government types in the Philippines"],
                    sections: [
                      { type: "note", content: "GE5NOTES are used here as supporting notes from sir's verbal explanations for Module 3." },
                      { type: "definition", content: "Power — the ability to influence or persuade others to achieve a goal." },
                      { type: "table", content: "Types of Power", headers: ["Type", "Meaning"], rows: [["Persuasion", "Based on trust and influence."], ["Control", "Based on authority or sometimes fear."]] },
                      { type: "definition", content: "Politics — the process of using power and influence to make decisions, achieve goals, and manage relationships between states and societies." },
                      { type: "table", content: "Types of Government in the Philippines", headers: ["Type", "Meaning"], rows: [
                        ["Democratic", "Power comes from the people; leaders are chosen through elections."],
                        ["Republic", "The country is governed by elected representatives chosen by the people."],
                        ["Constitutional", "Government follows the 1987 Philippine Constitution, limiting power and protecting rights."],
                        ["Unitary", "Most political power is held by the national government; local governments operate under it."],
                        ["Presidential", "The President is both Head of State and Head of Government."],
                      ]},
                      { type: "table", content: "Four Elements of an Estado / State", headers: ["Element", "Meaning"], rows: [["Population", "People living in the country."], ["Territory", "Land and geographical boundaries."], ["Government", "System that creates and enforces laws."], ["Sovereignty", "Ability to govern itself independently."]] },
                    ],
                    quiz: [
                      { question: "Power means the ability to influence or persuade others to:", options: ["Achieve a goal", "Remove all states", "Stop communication", "Create only money"], answer: 0, explanation: "The notes define power as the ability to influence or persuade others to achieve a goal." },
                      { question: "Control as a type of power is based on authority or sometimes:", options: ["Fear", "Currency", "Tourism", "Technology"], answer: 0, explanation: "Control is based on authority or fear." },
                      { question: "The four elements of a state are population, territory, government, and:", options: ["Sovereignty", "Gold", "Media", "AI"], answer: 0, explanation: "Sovereignty is the fourth element of a state." },
                      { question: "In the Philippine presidential system, the President is Head of State and:", options: ["Head of Government", "Chief Justice", "UN Secretary-General", "Private citizen only"], answer: 0, explanation: "The President is both Head of State and Head of Government." },
                      { question: "A constitutional government follows the:", options: ["1987 Philippine Constitution", "Gold standard", "Comintern", "MBS system"], answer: 0, explanation: "The Philippine constitutional government follows the 1987 Constitution." },
                    ],
                  },
                },
                {
                  id: "ge5-m3t2", title: "Interstate System, Westphalia, and Concert of Europe",
                  content: {
                    heading: "Interstate System and the Modern State System", term: "MIDTERM", module: "Module 3: A History of Global Politics",
                    objectives: ["Explain international relations and internationalism", "Describe the Westphalian system", "Explain the Concert of Europe"],
                    sections: [
                      { type: "definition", content: "Internationalism — the belief that countries should cooperate and build strong international relationships to maintain peace and solve global problems." },
                      { type: "table", content: "Forms of International Relations", headers: ["Form", "Meaning"], rows: [["Bilateral", "Relationship between two countries."], ["Trilateral", "Relationship between three countries."], ["Multilateral", "Relationship involving many countries, such as global organizations or alliances."]] },
                      { type: "table", content: "Important Thinkers", headers: ["Thinker", "Key Idea from Notes"], rows: [
                        ["Immanuel Kant", "Cooperation between nations could create permanent peace."],
                        ["Jeremy Bentham", "Supported international law and peaceful cooperation between states."],
                        ["Giuseppe Mazzini", "Promoted unity and cooperation among nations."],
                        ["Woodrow Wilson", "Advocated internationalism and self-determination — nations deciding their own political future."],
                        ["Karl Marx", "Supported international worker cooperation and opposed nationalism because it divided workers."],
                      ]},
                      { type: "definition", content: "Westphalian System (1648) — the Peace of Westphalia ended the Thirty Years' War and established sovereignty, independent states, and non-interference in internal affairs." },
                      { type: "table", content: "Historical Timeline", headers: ["Topic", "Key Points"], rows: [
                        ["Napoleonic Wars", "Led by Napoleon Bonaparte; spread ideas of equality and reform; challenged monarchy; ended in 1815."],
                        ["Concert of Europe", "Major European powers cooperated after the Napoleonic Wars to maintain balance of power and prevent major wars until World War I."],
                        ["Great Powers", "Historical: Austria, Russia, Prussia, United Kingdom. Modern examples: United Kingdom, Russia, United States, China."],
                      ]},
                    ],
                    quiz: [
                      { question: "Bilateral relations involve how many countries?", options: ["Two", "Three", "Many", "Zero"], answer: 0, explanation: "Bilateral means relationship between two countries." },
                      { question: "The Peace of Westphalia is important because it established:", options: ["Sovereignty", "Bitcoin", "MBS", "AI automation"], answer: 0, explanation: "Westphalia established sovereignty and the modern state system." },
                      { question: "The Westphalian system says no country should interfere in another country's:", options: ["Internal affairs", "Weather", "Currency design only", "Food only"], answer: 0, explanation: "Non-interference is one of its key ideas." },
                      { question: "The Concert of Europe was established after the:", options: ["Napoleonic Wars", "2008 crisis", "UN creation", "Gold standard conference"], answer: 0, explanation: "It followed the Napoleonic Wars." },
                      { question: "Woodrow Wilson is associated with:", options: ["Self-determination", "Mortgage-backed securities", "Only monarchy", "No democracy"], answer: 0, explanation: "Wilson advocated self-determination and internationalism." },
                    ],
                  },
                },
                {
                  id: "ge5-m3t3", title: "Nationalism, Socialism, Communism, and Internationalism",
                  content: {
                    heading: "Nationalism and Socialist Internationalism", term: "MIDTERM", module: "Module 3: A History of Global Politics",
                    objectives: ["Differentiate nationalism and ultra-nationalism", "Explain socialist internationalism", "Summarize communism and Comintern"],
                    sections: [
                      { type: "definition", content: "Nationalism — strong loyalty and devotion to one's nation." },
                      { type: "definition", content: "Ultra-nationalism — extreme loyalty to one's country, sometimes leading to aggression toward other nations." },
                      { type: "list", content: "Examples of ultra-nationalism from notes:", items: ["Japan sought to expand its empire and influence other Asian countries", "Adolf Hitler and Germany promoted extreme nationalism and expansionism"] },
                      { type: "definition", content: "Socialist Internationalism — an idea associated with Karl Marx focusing on workers across countries, opposition to capitalism, equality, fair distribution of wealth, and worldwide unity of workers." },
                      { type: "table", content: "Socialist Ideas and Effects", headers: ["Topic", "Explanation"], rows: [
                        ["Why socialist movements exist", "Some people believe capitalism creates inequality, unfair distribution of wealth, and exploitation of workers."],
                        ["Labor reforms", "Reduced working hours from 16 to 8 hours, better working conditions, workers' rights and protection."],
                        ["Capitalists", "Owners of businesses and companies who control production and capital."],
                        ["Meritocracy", "People gain power or position based on skills, ability, and talent, not wealth, family, or status."],
                      ]},
                      { type: "table", content: "Communism and Related Ideas", headers: ["Topic", "Meaning"], rows: [
                        ["Communism", "Property is owned collectively; classless society; wealth shared equally; workers control production."],
                        ["Capitalism to Communism", "According to Marx: capitalism creates exploitation, workers become aware, revolution may happen, socialism transitions to communism."],
                        ["Vladimir Lenin", "Led the Russian Revolution, ended the Tsar monarchy, established a communist government and the first socialist state/Soviet Union."],
                        ["Comintern", "Communist International created by Lenin to spread communism worldwide and unite communist parties."],
                        ["Cominform", "Replaced Comintern in 1947 to coordinate communist parties in Europe and strengthen Soviet influence."],
                      ]},
                    ],
                    quiz: [
                      { question: "Ultra-nationalism is:", options: ["Extreme loyalty that may lead to aggression", "Global cooperation only", "A monetary policy", "A digital currency"], answer: 0, explanation: "Ultra-nationalism is extreme loyalty to one's country, sometimes aggressive." },
                      { question: "Socialist internationalism is associated with:", options: ["Karl Marx", "Robertson", "Ohmae", "Steger only"], answer: 0, explanation: "The notes connect socialist internationalism to Karl Marx." },
                      { question: "Socialist movements demand change because they see capitalism as causing:", options: ["Inequality and exploitation", "Too much equality", "No business owners", "No workers"], answer: 0, explanation: "The notes mention inequality, unfair wealth distribution, and exploitation." },
                      { question: "Labor reforms influenced by socialist ideas include the:", options: ["8-hour workday", "No worker protection", "End of all wages", "No labor laws"], answer: 0, explanation: "The notes mention working hours reduced from 16 to 8 hours." },
                      { question: "Lenin established the Communist International to:", options: ["Spread communism worldwide", "Create MBS", "Adopt the gold standard", "Create cultural scapes"], answer: 0, explanation: "Comintern aimed to spread communism and unite communist parties." },
                    ],
                  },
                },
              ],
            },
            {
              id: "ge5-m4", title: "Module 4: United Nations and Contemporary Global Governance",
              topics: [
                {
                  id: "ge5-m4t1", title: "League of Nations and Creation of the United Nations",
                  content: {
                    heading: "Why the United Nations Was Created", term: "MIDTERM", module: "Module 4: UN and Contemporary Global Governance",
                    objectives: ["Explain the League of Nations", "Identify why the UN was created", "Describe the goals of the UN"],
                    sections: [
                      { type: "note", content: "GE5NOTES are used here as supporting notes from sir's verbal explanations for Module 4." },
                      { type: "definition", content: "League of Nations — created after World War I to promote peace and cooperation among countries." },
                      { type: "list", content: "League of Nations principles:", items: ["Respect for sovereignty", "Peaceful resolution of conflicts", "International cooperation", "It eventually failed to prevent another global conflict"] },
                      { type: "definition", content: "United Nations — an international organization established in 1945 after World War II to maintain peace, security, and cooperation among nations." },
                      { type: "list", content: "Goals of the United Nations:", items: ["Prevent future wars", "Promote international cooperation", "Protect human rights", "Maintain global peace and security"] },
                      { type: "note", content: "The UN replaced the League of Nations because the League failed to stop World War II." },
                    ],
                    quiz: [
                      { question: "The League of Nations was created after:", options: ["World War I", "World War II", "The 2008 crisis", "The Paris monetary conference"], answer: 0, explanation: "It was created after World War I." },
                      { question: "The United Nations was established in:", options: ["1945", "1648", "1815", "2008"], answer: 0, explanation: "The UN was created in 1945 after World War II." },
                      { question: "The UN replaced the:", options: ["League of Nations", "Cominform", "Gold standard", "Federal Reserve"], answer: 0, explanation: "The UN replaced the League of Nations." },
                      { question: "A goal of the UN is to:", options: ["Maintain global peace and security", "Promote housing bubbles", "End all cooperation", "Create only private corporations"], answer: 0, explanation: "Maintaining peace and security is a UN goal." },
                      { question: "The League of Nations failed to prevent:", options: ["Another global conflict", "The creation of states", "All cooperation", "Global cultural flows"], answer: 0, explanation: "Its failure was not stopping another global conflict." },
                    ],
                  },
                },
                {
                  id: "ge5-m4t2", title: "Five Main Organs of the United Nations",
                  content: {
                    heading: "United Nations — 5 Organs/Bodies", term: "MIDTERM", module: "Module 4: UN and Contemporary Global Governance",
                    objectives: ["Identify the five UN organs", "Explain the main function of each organ", "Remember P5 and veto power"],
                    sections: [
                      { type: "table", content: "Five Main UN Organs from Class Notes", headers: ["Organ", "Composition / Leadership", "Main Functions"], rows: [
                        ["General Assembly (GA)", "193 member states; 1 country = 1 vote; elects a President every year", "Main decision-making and discussion body; discusses peace, security, international concerns; handles admission of new members and budget approval; important decisions need 2/3 majority."],
                        ["Security Council (SC)", "15 members: 10 non-permanent members elected for 2-year terms and 5 permanent members/P5", "Maintains global peace and security; determines threats to peace or acts of aggression; may impose sanctions, peacekeeping missions, or military intervention."],
                        ["Economic and Social Council (ECOSOC)", "54 members elected by the GA for 3-year terms", "Coordinates economic, social, and environmental issues; focuses on policy-making, development programs, and SDGs."],
                        ["International Court of Justice (ICJ)", "15 judges elected for 9-year terms", "Judicial/legal organ; settles legal disputes between states and gives advisory opinions."],
                        ["UN Secretariat", "Headed by the Secretary-General; current note: António Guterres, 9th Secretary-General", "Administrative body; handles day-to-day operations, supports other organs, implements programs and decisions."],
                      ]},
                      { type: "table", content: "P5 Permanent Members", headers: ["P5 Member"], rows: [["United States"], ["United Kingdom"], ["France"], ["Russia"], ["China"]] },
                      { type: "note", content: "Veto power: if any one P5 member disagrees, the decision will not pass — 'baliwala na ang lahat' kahit marami ang agree." },
                      { type: "note", content: "Class note: Carlos P. Romulo became General Assembly President in 1989." },
                    ],
                    quiz: [
                      { question: "The General Assembly has how many member states?", options: ["193", "54", "15", "5"], answer: 0, explanation: "The notes state that the GA has 193 member states." },
                      { question: "In the General Assembly, voting power is:", options: ["1 country = 1 vote", "P5 only", "Rich countries only", "No voting"], answer: 0, explanation: "All member states have equal voting power." },
                      { question: "The Security Council has how many members total?", options: ["15", "193", "54", "9"], answer: 0, explanation: "The SC has 15 members." },
                      { question: "The P5 members are USA, UK, France, Russia, and:", options: ["China", "Japan", "Germany", "Philippines"], answer: 0, explanation: "China is one of the permanent five." },
                      { question: "ECOSOC focuses on economic, social, and:", options: ["Environmental issues", "Only military action", "Only courts", "Only veto power"], answer: 0, explanation: "ECOSOC coordinates economic, social, and environmental concerns." },
                      { question: "The ICJ settles legal disputes between:", options: ["States/countries", "Only private persons", "Only companies", "Only students"], answer: 0, explanation: "Only states can be involved in ICJ cases." },
                      { question: "The Secretariat is headed by the:", options: ["Secretary-General", "GA President", "Chief Justice of the Philippines", "Federal Reserve Chair"], answer: 0, explanation: "The Secretariat is headed by the Secretary-General." },
                    ],
                  },
                },
                {
                  id: "ge5-m4t3", title: "Cooperation and Challenges of the UN",
                  content: {
                    heading: "Importance and Challenges of the United Nations", term: "MIDTERM", module: "Module 4: UN and Contemporary Global Governance",
                    objectives: ["Explain why cooperation matters", "Identify challenges of the UN", "Evaluate the role of the UN in global governance"],
                    sections: [
                      { type: "h2", content: "Importance of Cooperation" },
                      { type: "text", content: "The UN can function effectively only if there is cooperation among nations. Countries like the Philippines join the UN to participate in global decision-making and help solve global issues." },
                      { type: "list", content: "The UN helps organize responses to problems such as:", items: ["Global warming", "Conflicts", "Economic issues"] },
                      { type: "table", content: "Challenges of the UN", headers: ["Challenge", "Explanation"], rows: [
                        ["Cooperation", "The UN depends on countries working together; lack of cooperation weakens effectiveness."],
                        ["P5 Veto Power", "One powerful country can block decisions, preventing action even if most countries agree."],
                        ["Military Intervention", "It is difficult to decide when and how to intervene; decisions may be influenced by political interests."],
                      ]},
                      { type: "note", content: "Overall idea from GE5NOTES: The UN plays a major role in maintaining global peace and cooperation, but its effectiveness depends on cooperation of countries, fair decision-making, and responsible use of power." },
                    ],
                    quiz: [
                      { question: "The UN depends on countries working together. This is the challenge of:", options: ["Cooperation", "MBS", "Technoscape", "Mercantilism"], answer: 0, explanation: "Cooperation is necessary for the UN to function effectively." },
                      { question: "One P5 member can block a decision through:", options: ["Veto power", "Gold standard", "Cultural hybridization", "Mortgage payments"], answer: 0, explanation: "P5 veto power can block Security Council decisions." },
                      { question: "A difficult UN issue is deciding when and how to use:", options: ["Military intervention", "Fast-food menus", "Bitcoin wallets", "Tourism"], answer: 0, explanation: "Military intervention is one of the challenges listed in the notes." },
                      { question: "Countries like the Philippines join the UN to participate in:", options: ["Global decision-making", "Housing bubbles", "No cooperation", "Only local trade"], answer: 0, explanation: "The notes say countries join to participate in global decisions and help solve issues." },
                      { question: "The UN helps organize responses to conflicts, economic issues, and:", options: ["Global warming", "Only private collections", "Only fast food", "Only exams"], answer: 0, explanation: "Global warming is listed as one issue the UN helps address." },
                    ],
                  },
                },
                {
                  id: "ge5-midterm-exam", title: "Midterm Comprehensive Exam (Module 3–4)",
                  content: {
                    heading: "GE5 Midterm Comprehensive Exam", term: "MIDTERM", module: "Modules 3–4",
                    objectives: ["Review Module 3 and Module 4 coverage", "Practice global politics, internationalism, communism, UN organs, and UN challenges"],
                    sections: [{ type: "note", content: "Coverage: Module 3 A History of Global Politics and Module 4 UN and Contemporary Global Governance, with GE5NOTES as supporting class explanations." }],
                    quiz: [
                      { question: "1. Power is the ability to influence or persuade others to:", options: ["Achieve a goal", "Stop all laws", "Remove sovereignty", "Create only markets"], answer: 0, explanation: "Power is defined as influence or persuasion to achieve a goal." },
                      { question: "2. Persuasion is power based on:", options: ["Trust and influence", "Fear only", "Gold reserves", "Military occupation only"], answer: 0, explanation: "Persuasion is based on trust and influence." },
                      { question: "3. Control is power based on authority or sometimes:", options: ["Fear", "Tourism", "Facebook", "Digital currency"], answer: 0, explanation: "Control can be based on authority or fear." },
                      { question: "4. Politics is the process of using power and influence to:", options: ["Make decisions and manage relationships", "End all states", "Sell mortgages", "Create fast-food menus"], answer: 0, explanation: "Politics uses power and influence for decisions, goals, and relationships." },
                      { question: "5. The four elements of a state are population, territory, government, and:", options: ["Sovereignty", "Mediascape", "Gold standard", "MBS"], answer: 0, explanation: "Sovereignty is one of the four elements." },
                      { question: "6. In the Philippines, leaders are chosen through elections under a:", options: ["Democratic government", "Mercantilist system", "Comintern system", "Housing bubble"], answer: 0, explanation: "Democratic means power comes from the people through elections." },
                      { question: "7. A republic is governed by:", options: ["Elected representatives", "Only kings", "Only foreign investors", "Only banks"], answer: 0, explanation: "A republic uses elected representatives." },
                      { question: "8. In a presidential system, the President is Head of State and:", options: ["Head of Government", "UN judge", "ECOSOC member", "MBS investor"], answer: 0, explanation: "The President holds both roles." },
                      { question: "9. Internationalism means countries should:", options: ["Cooperate to maintain peace and solve global problems", "Avoid all cooperation", "Only expand empires", "End diplomacy"], answer: 0, explanation: "Internationalism supports cooperation among nations." },
                      { question: "10. Bilateral relations involve:", options: ["Two countries", "Three countries", "Many countries", "No countries"], answer: 0, explanation: "Bilateral means between two countries." },
                      { question: "11. Trilateral relations involve:", options: ["Three countries", "Two countries", "All countries", "No countries"], answer: 0, explanation: "Trilateral means three countries." },
                      { question: "12. Multilateral relations involve:", options: ["Many countries", "One country only", "Two cities only", "No states"], answer: 0, explanation: "Multilateral relations involve many countries." },
                      { question: "13. The Peace of Westphalia happened in:", options: ["1648", "1815", "1945", "2008"], answer: 0, explanation: "Westphalia was in 1648." },
                      { question: "14. Westphalia established the concept of:", options: ["Sovereignty", "Bitcoin", "Fast food", "MBS"], answer: 0, explanation: "It established sovereign independent states." },
                      { question: "15. The Napoleonic Wars ended in:", options: ["1815", "1648", "1945", "1992"], answer: 0, explanation: "The notes state the Napoleonic Wars ended in 1815." },
                      { question: "16. The Concert of Europe aimed to maintain:", options: ["Balance of power", "Housing prices", "Media subscriptions", "Cryptocurrency"], answer: 0, explanation: "It maintained balance of power among major European powers." },
                      { question: "17. Woodrow Wilson advocated self-determination, meaning nations have the right to:", options: ["Decide their own political future", "Remove all workers", "Control all media", "Create MBS"], answer: 0, explanation: "Self-determination means deciding one's own political future." },
                      { question: "18. Karl Marx opposed nationalism because it:", options: ["Divided workers", "United all capitalists only", "Created gold standard", "Ended all politics"], answer: 0, explanation: "Marx believed nationalism divided workers." },
                      { question: "19. Capitalists are owners of businesses and companies who control:", options: ["Production and capital", "UN voting only", "Ethnoscapes", "All culture"], answer: 0, explanation: "Capitalists control production and capital." },
                      { question: "20. Ultra-nationalism is extreme loyalty that may lead to:", options: ["Aggression toward other nations", "Permanent peace only", "No conflict ever", "Open trade only"], answer: 0, explanation: "Ultra-nationalism can become aggressive." },
                      { question: "21. Socialist internationalism focuses on:", options: ["Workers across countries", "Only monarchies", "Only banks", "Only media"], answer: 0, explanation: "It emphasizes workers' unity across countries." },
                      { question: "22. Socialist movements criticize capitalism for:", options: ["Inequality and exploitation", "Too much equality", "No capitalists", "No businesses"], answer: 0, explanation: "The notes cite inequality, unfair distribution, and exploitation." },
                      { question: "23. A labor reform influenced by socialist movements is:", options: ["8-hour workday", "16-hour mandatory workday", "No benefits", "No worker rights"], answer: 0, explanation: "The notes mention reduction to 8 working hours." },
                      { question: "24. Communism aims for a:", options: ["Classless society", "Stronger monarchy", "Private ownership only", "No worker control"], answer: 0, explanation: "Communism aims for a classless society and collective ownership." },
                      { question: "25. Vladimir Lenin established the first socialist state called the:", options: ["Soviet Union", "United Nations", "League of Nations", "European Union"], answer: 0, explanation: "The notes identify the Soviet Union as the first socialist state." },
                      { question: "26. Comintern means:", options: ["Communist International", "Contemporary Internet", "Community Internalism", "Common Monetary Trade"], answer: 0, explanation: "Comintern is the Communist International." },
                      { question: "27. Comintern was dissolved in:", options: ["1943", "1945", "1815", "1648"], answer: 0, explanation: "The notes say Comintern was dissolved in 1943." },
                      { question: "28. Cominform replaced Comintern in:", options: ["1947", "1945", "2008", "1815"], answer: 0, explanation: "The notes say Cominform replaced it in 1947." },
                      { question: "29. The League of Nations was created after:", options: ["World War I", "World War II", "The 2008 crisis", "The Russian Revolution only"], answer: 0, explanation: "The League was created after WWI." },
                      { question: "30. The League of Nations failed to prevent:", options: ["Another global conflict", "All cooperation", "All state sovereignty", "All international law"], answer: 0, explanation: "It failed to prevent another world war." },
                      { question: "31. The United Nations was established in:", options: ["1945", "1919", "1648", "1815"], answer: 0, explanation: "The UN was established in 1945 after WWII." },
                      { question: "32. The UN was created to prevent future wars, promote cooperation, protect human rights, and:", options: ["Maintain global peace and security", "Promote housing bubbles", "End international law", "Stop all state relations"], answer: 0, explanation: "These are UN goals from notes." },
                      { question: "33. The General Assembly is composed of:", options: ["193 member states", "15 judges", "54 members", "5 permanent members only"], answer: 0, explanation: "The GA has 193 member states." },
                      { question: "34. In the General Assembly, all members have:", options: ["Equal voting power", "P5 veto", "No vote", "Military power only"], answer: 0, explanation: "1 country = 1 vote." },
                      { question: "35. Important GA decisions require:", options: ["2/3 majority vote", "One-person decision", "Only P5 approval", "No voting"], answer: 0, explanation: "Important decisions require a 2/3 majority vote." },
                      { question: "36. Carlos P. Romulo became GA President in:", options: ["1989", "1945", "1648", "2008"], answer: 0, explanation: "The notes state Carlos P. Romulo became GA President in 1989." },
                      { question: "37. The Security Council is responsible for:", options: ["Maintaining global peace and security", "Only school admissions", "Only global media", "Only economic globalization"], answer: 0, explanation: "This is the Security Council's main role." },
                      { question: "38. The Security Council has:", options: ["15 members", "193 members", "54 judges", "9 secretaries"], answer: 0, explanation: "The SC has 15 members total." },
                      { question: "39. The P5 are USA, UK, France, Russia, and:", options: ["China", "Japan", "Germany", "Canada"], answer: 0, explanation: "China is the fifth P5 member." },
                      { question: "40. P5 veto power means:", options: ["Any one P5 can block a decision", "All 193 countries can veto", "Only the Secretary-General votes", "No decisions exist"], answer: 0, explanation: "If any P5 disagrees, the decision will not pass." },
                      { question: "41. ECOSOC has how many members?", options: ["54", "15", "193", "5"], answer: 0, explanation: "ECOSOC has 54 members." },
                      { question: "42. ECOSOC promotes:", options: ["Sustainable Development Goals", "Housing bubbles", "Ultra-nationalism", "Mortgage products only"], answer: 0, explanation: "The notes connect ECOSOC with SDGs and development programs." },
                      { question: "43. The International Court of Justice has:", options: ["15 judges", "193 judges", "54 judges", "5 judges"], answer: 0, explanation: "The ICJ has 15 judges." },
                      { question: "44. ICJ judges are elected for:", options: ["9-year terms", "1-year terms", "2-year terms", "3-year terms"], answer: 0, explanation: "The notes state ICJ judges serve 9-year terms." },
                      { question: "45. Only states/countries can be involved in cases before the:", options: ["ICJ", "Mediascape", "MBS", "Gold standard"], answer: 0, explanation: "Only states can be parties in ICJ cases." },
                      { question: "46. The Secretariat handles:", options: ["Day-to-day operations of the UN", "Only veto votes", "Only court disputes", "Only tourism"], answer: 0, explanation: "The Secretariat is the administrative body." },
                      { question: "47. The current Secretary-General in the notes is:", options: ["António Guterres", "Carlos P. Romulo", "Woodrow Wilson", "Karl Marx"], answer: 0, explanation: "The notes identify António Guterres as the 9th Secretary-General." },
                      { question: "48. The UN can function effectively only if there is:", options: ["Cooperation among nations", "No cooperation", "Only vetoes", "Only military intervention"], answer: 0, explanation: "Cooperation is essential to UN effectiveness." },
                      { question: "49. One challenge of the UN is that a powerful country can block decisions through:", options: ["P5 veto power", "Cultural convergence", "Technoscape", "MBS"], answer: 0, explanation: "P5 veto power can prevent action." },
                      { question: "50. The UN helps organize responses to global warming, conflicts, and:", options: ["Economic issues", "Fast-food menus", "Only local exams", "Only personal opinions"], answer: 0, explanation: "The notes list economic issues as one problem the UN helps address." },
                    ],
                  },
                },
              ],
            },
          ],
        },
        { id: "finals", label: "FINALS", modules: [] },
      ],
    },

    // ─── GE 6: ART APPRECIATION ─────────────────────────────────────────────────
    {
      id: "ge6", code: "GE 6", title: "Art Appreciation", shortTitle: "GE 6", units: 3,
      description: "Art Appreciation reviewer. Prelim and finals will be added only when the official modules are provided; current verified content is MIDTERM from the attached modules.",
      terms: [
        {
          id: "midterm", label: "MIDTERM",
          modules: [],
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
