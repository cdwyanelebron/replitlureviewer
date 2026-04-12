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
            id: "ge5-m1", title: "Module 1: Globalization",
            topics: [
              {
                id: "ge5-m1t1", title: "Nature and Dimensions of Globalization",
                content: {
                  heading: "Nature and Dimensions of Globalization", term: "PRELIM", module: "Module 1: Globalization",
                  objectives: ["Define globalization and its key dimensions", "Trace the historical development of globalization", "Analyze the positive and negative effects of globalization"],
                  sections: [
                    { type: "h2", content: "What is Globalization?" },
                    { type: "definition", content: "Globalization — The process of increasing interconnectedness and interdependence among countries through the movement of goods, services, capital, people, ideas, and information across borders." },
                    { type: "table", content: "Dimensions of Globalization", headers: ["Dimension", "Description", "Example"], rows: [["Economic", "Free trade, global markets, multinational corporations", "WTO, NAFTA, BPO industry"], ["Political", "International organizations, global governance", "UN, ASEAN, WHO"], ["Cultural", "Spread of values, ideas, music, food across borders", "K-pop, McDonald's globally"], ["Technological", "Internet, telecommunications, digital revolution", "Social media, e-commerce"], ["Environmental", "Global climate change, shared ecological challenges", "Paris Agreement"]] },
                    { type: "list", content: "Positive Effects of Globalization", items: ["Economic growth through trade and investment", "Spread of technology and innovation", "Greater cultural exchange and understanding", "Access to global information and education", "Job creation through foreign investment (e.g., BPO in Philippines)"] },
                    { type: "list", content: "Negative Effects of Globalization", items: ["Inequality: benefits distributed unevenly between rich and poor nations", "Cultural homogenization: local cultures being replaced by global culture", "Environmental degradation: increased production and consumption", "Brain drain: skilled workers leaving developing countries"] },
                    { type: "note", content: "The Philippines is significantly affected by globalization — OFW remittances are a major part of GDP, the BPO industry employs millions, and Filipino culture has both spread globally and been influenced by global trends." },
                  ],
                  quiz: [
                    { question: "Which is a NEGATIVE effect of globalization?", options: ["Increased trade and economic growth", "Cultural homogenization threatening local cultures", "Access to global information", "Spread of medical innovations"], answer: 1, explanation: "Cultural homogenization — spread of global culture at the expense of local cultures — is a major criticism." },
                    { question: "The economic dimension of globalization includes:", options: ["Spread of K-pop worldwide", "Free trade, multinational corporations, and global markets", "International organizations like the UN", "Climate change agreements"], answer: 1, explanation: "The economic dimension involves trade liberalization, multinational corporations, and global markets." },
                  ],
                },
              },
              {
                id: "ge5-m1t2", title: "Theories of Globalization",
                content: {
                  heading: "Theories of Globalization", term: "PRELIM", module: "Module 1: Globalization",
                  objectives: ["Distinguish hyperglobalist, skeptic, and transformationalist perspectives"],
                  sections: [
                    { type: "h2", content: "Theoretical Perspectives on Globalization" },
                    { type: "table", content: "Three Main Perspectives", headers: ["Perspective", "Key Claim", "Proponents"], rows: [["Hyperglobalists", "Globalization is unprecedented; nation-states becoming less relevant; one global economy forming", "Kenichi Ohmae, Francis Fukuyama"], ["Skeptics", "Globalization is exaggerated; nation-states remain powerful; economic interdependence is not new", "Paul Hirst, Grahame Thompson"], ["Transformationalists", "Globalization is real but uneven; states are being transformed, not eliminated", "Anthony Giddens, David Held"]] },
                    { type: "definition", content: "World-System Theory (Immanuel Wallerstein) — Divides the world into Core (wealthy), Semi-periphery (middle-income), and Periphery (poor) nations. Globalization reinforces this hierarchy." },
                    { type: "note", content: "The Philippines is generally classified as a semi-periphery nation." },
                  ],
                  quiz: [
                    { question: "Hyperglobalists believe that:", options: ["Globalization is exaggerated", "Nation-states remain dominant", "Globalization is unprecedented and is creating a single global economy", "Globalization has uncertain outcomes"], answer: 2, explanation: "Hyperglobalists argue globalization is unprecedented, creating a single global economy." },
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
            id: "ge5-m2", title: "Module 2: International Organizations",
            topics: [
              {
                id: "ge5-m2t1", title: "International Organizations and Global Governance",
                content: {
                  heading: "International Organizations and Global Governance", term: "MIDTERM", module: "Module 2: International Organizations",
                  objectives: ["Identify major international organizations", "Explain the role of the United Nations", "Describe ASEAN and its significance"],
                  sections: [
                    { type: "h2", content: "International Organizations" },
                    { type: "table", content: "Major International Organizations", headers: ["Organization", "Founded", "Purpose"], rows: [["United Nations (UN)", "1945", "Maintain international peace and security; promote human rights"], ["WTO", "1995", "Regulate international trade"], ["IMF", "1945", "Provide financial assistance; promote monetary cooperation"], ["World Bank", "1944", "Loans and assistance to developing countries"], ["ASEAN", "1967", "Promote cooperation in Southeast Asia"], ["WHO", "1948", "Coordinate international health efforts"]] },
                    { type: "text", content: "ASEAN (Association of Southeast Asian Nations): Founded August 8, 1967 (Bangkok Declaration). Original members: Philippines, Thailand, Malaysia, Singapore, Indonesia. Now 10 members." },
                  ],
                  quiz: [
                    { question: "ASEAN was founded in:", options: ["1945", "1963", "1967", "1975"], answer: 2, explanation: "ASEAN was founded August 8, 1967 through the Bangkok Declaration." },
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
            id: "ge5-m3", title: "Module 3: Human Rights, Migration, and Global Challenges",
            topics: [
              {
                id: "ge5-m3t1", title: "Human Rights and OFWs",
                content: {
                  heading: "Human Rights and OFWs", term: "FINALS", module: "Module 3: Human Rights, Migration, and Global Challenges",
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
