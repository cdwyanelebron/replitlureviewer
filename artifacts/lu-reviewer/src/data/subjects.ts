export interface Topic {
  id: string;
  title: string;
  content: TopicContent;
}

export interface Module {
  id: string;
  title: string;
  topics: Topic[];
}

export interface Term {
  id: string;
  label: string;
  modules: Module[];
}

export interface Subject {
  id: string;
  code: string;
  title: string;
  shortTitle: string;
  units: number;
  description: string;
  terms: Term[];
}

export interface TopicContent {
  heading: string;
  term: string;
  module: string;
  objectives: string[];
  sections: ContentSection[];
  quiz?: QuizQuestion[];
}

export interface ContentSection {
  type: "text" | "definition" | "note" | "example" | "list" | "table" | "h2" | "h3";
  content: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export const SUBJECTS: Subject[] = [
  {
    id: "ge1",
    code: "GE 1",
    title: "Understanding the Self",
    shortTitle: "GE 1",
    units: 3,
    description: "A course that explores the nature and dimensions of the self in relation to the physical, personal, social, and digital environment.",
    terms: [
      {
        id: "prelim",
        label: "PRELIM",
        modules: [
          {
            id: "m1",
            title: "Module 1: The Self from Various Perspectives",
            topics: [
              {
                id: "m1t1",
                title: "The Philosophical Self",
                content: {
                  heading: "The Philosophical Self",
                  term: "PRELIM",
                  module: "Module 1: The Self from Various Perspectives",
                  objectives: [
                    "Explain different philosophical perspectives on the self",
                    "Distinguish between mind, body, and soul in philosophical tradition",
                    "Analyze how ancient and modern philosophers conceptualize the self",
                  ],
                  sections: [
                    { type: "h2", content: "What is the Self?" },
                    { type: "text", content: "The concept of the 'self' is one of the most fundamental questions in philosophy. It refers to the entity that is the subject of one's own experience of memory, perception, emotion, and action." },
                    { type: "definition", content: "Self — The totality of an individual's conscious and unconscious experiences, thoughts, feelings, and behavior. It is the essence of who a person is, encompassing their identity, personality, and consciousness." },
                    { type: "h3", content: "Socrates: Know Thyself" },
                    { type: "text", content: "Socrates (470–399 BCE) believed that the unexamined life is not worth living. For him, the self is primarily the soul (psyche), not the body. Self-knowledge is the highest form of wisdom." },
                    { type: "example", content: "The Socratic Method — Socrates would engage people in dialogue (elenchus) to help them realize their own ignorance and arrive at deeper truths about themselves and the world." },
                    { type: "h3", content: "Plato: The Immortal Soul" },
                    { type: "text", content: "Plato (428–348 BCE) distinguished between the body (mortal, corruptible) and the soul (immortal, rational). The soul has three parts: the rational (logos), the spirited (thymos), and the appetitive (epithumia)." },
                    { type: "table", content: "Plato's Tripartite Soul", headers: ["Part of Soul", "Function", "Virtue"], rows: [["Rational (Logos)", "Reason and intellect", "Wisdom"], ["Spirited (Thymos)", "Emotions and courage", "Courage"], ["Appetitive (Epithumia)", "Desires and appetites", "Temperance"]] },
                    { type: "h3", content: "Aristotle: The Self as Substance" },
                    { type: "text", content: "Aristotle (384–322 BCE) believed the soul is the form of the body — they cannot be separated. The self is a unified substance where body and soul work together. The soul gives life and function to the body." },
                    { type: "h3", content: "Rene Descartes: The Thinking Self" },
                    { type: "text", content: "Descartes (1596–1650) proposed the famous phrase 'Cogito ergo sum' — 'I think, therefore I am.' He argued that the only certainty is the existence of the thinking self." },
                    { type: "definition", content: "Cartesian Dualism — Descartes' view that the mind (res cogitans) and body (res extensa) are two separate substances. The mind is non-physical and thinking; the body is physical and extended in space." },
                    { type: "note", content: "Key takeaway: Descartes' method of radical doubt led him to one indubitable truth — the self as a thinking entity. Even if everything else can be doubted, the act of doubting proves that a thinking self exists." },
                    { type: "h3", content: "John Locke: Personal Identity" },
                    { type: "text", content: "Locke (1632–1704) defined personal identity through consciousness and memory. You are the same person throughout your life because of your continuous chain of memories and self-awareness, not because of your body or soul." },
                    { type: "h3", content: "David Hume: The Bundle Theory" },
                    { type: "text", content: "Hume (1711–1776) argued there is no persistent 'self' — only a bundle of perceptions. When we introspect, we find only individual thoughts, feelings, and sensations, not a unified self." },
                    { type: "h3", content: "Immanuel Kant: The Transcendental Self" },
                    { type: "text", content: "Kant (1724–1804) proposed the transcendental unity of apperception — the 'I think' that must accompany all our representations. The self is the necessary condition for experience, organizing perceptions into a coherent whole." },
                  ],
                  quiz: [
                    { question: "Which philosopher said 'Cogito ergo sum' (I think, therefore I am)?", options: ["Plato", "Aristotle", "Rene Descartes", "David Hume"], answer: 2, explanation: "Rene Descartes coined the phrase 'Cogito ergo sum' as the foundation of his rationalist philosophy." },
                    { question: "Plato's tripartite soul does NOT include which part?", options: ["Rational (Logos)", "Spirited (Thymos)", "Appetitive (Epithumia)", "Empirical (Empeiria)"], answer: 3, explanation: "Plato's three parts of the soul are Rational, Spirited, and Appetitive. 'Empirical' is not part of Plato's model." },
                    { question: "According to David Hume, the self is:", options: ["A unified, permanent substance", "A bundle of perceptions with no persistent self", "The immortal soul", "Identical to the body"], answer: 1, explanation: "Hume's Bundle Theory states there is no permanent self — just a collection of perceptions." },
                    { question: "Socrates believed that the self is primarily:", options: ["The physical body", "The soul (psyche)", "The mind and body combined", "Social relationships"], answer: 1, explanation: "Socrates believed the true self is the soul, not the body. Self-knowledge (know thyself) was central to his philosophy." },
                  ],
                },
              },
              {
                id: "m1t2",
                title: "The Sociological Self",
                content: {
                  heading: "The Sociological Self",
                  term: "PRELIM",
                  module: "Module 1: The Self from Various Perspectives",
                  objectives: [
                    "Explain how society and culture shape the self",
                    "Distinguish between 'I' and 'Me' in sociological theory",
                    "Describe how socialization forms personal identity",
                  ],
                  sections: [
                    { type: "h2", content: "The Self in Society" },
                    { type: "text", content: "Sociology examines the self not as an isolated individual but as a product of social interactions, cultural influences, and group memberships. Who we are is shaped by the societies and communities we belong to." },
                    { type: "h3", content: "George Herbert Mead: The Social Self" },
                    { type: "text", content: "George Herbert Mead (1863–1931) argued that the self emerges through social interaction. The self has two parts:" },
                    { type: "definition", content: "The 'I' — The spontaneous, creative, and impulsive aspect of the self. It is the subject that acts and responds to the social environment without prior reflection." },
                    { type: "definition", content: "The 'Me' — The socialized aspect of the self, reflecting society's expectations and attitudes. It is the object of one's own reflection — how we think others see us." },
                    { type: "note", content: "Think of it this way: When you unexpectedly help a stranger (spontaneous act), that's the 'I'. When you later reflect on whether that was a 'good' thing to do based on social norms, that's the 'Me'." },
                    { type: "h3", content: "Charles Cooley: The Looking-Glass Self" },
                    { type: "text", content: "Charles Cooley (1864–1929) proposed the concept of the 'looking-glass self' — we see ourselves as others see us. The process involves three steps:" },
                    { type: "list", content: "Looking-Glass Self Process", items: ["We imagine how we appear to others", "We imagine what judgment others make of our appearance", "We develop our self through the perceived judgments of others"] },
                    { type: "h3", content: "Socialization and the Self" },
                    { type: "text", content: "Socialization is the lifelong process through which people learn the norms, values, and behaviors of their society. It is the primary mechanism through which the social self is formed." },
                    { type: "table", content: "Agents of Socialization", headers: ["Agent", "Role in Self Formation"], rows: [["Family", "Primary socialization; first values and language"], ["School", "Formal education; peer interaction; rules and norms"], ["Peer Groups", "Sense of belonging; social comparison; identity testing"], ["Media", "Cultural norms; role models; worldviews"], ["Religion", "Moral framework; community; sense of purpose"]] },
                    { type: "h3", content: "Erving Goffman: Dramaturgical Theory" },
                    { type: "text", content: "Goffman compared social life to a theatrical performance. We present different 'selves' depending on the 'stage' (social context). We manage impressions (impression management) to control how others perceive us." },
                    { type: "example", content: "Front stage vs. Back stage: In a job interview (front stage), you dress formally and speak professionally. At home with family (back stage), you relax and behave more naturally. Both are 'you,' but you perform different selves." },
                  ],
                  quiz: [
                    { question: "George Herbert Mead's 'Me' represents:", options: ["The spontaneous, impulsive self", "The socialized self reflecting others' expectations", "The biological self", "The unconscious self"], answer: 1, explanation: "The 'Me' is the socialized aspect of the self — the internalization of society's norms and expectations." },
                    { question: "The 'Looking-Glass Self' was proposed by:", options: ["George Herbert Mead", "Erving Goffman", "Charles Cooley", "Max Weber"], answer: 2, explanation: "Charles Cooley proposed the looking-glass self — we form our self-concept based on how we imagine others see us." },
                    { question: "Goffman's dramaturgical theory compares social life to:", options: ["A military operation", "A theatrical performance", "A biological organism", "An economic market"], answer: 1, explanation: "Goffman used theatrical metaphors — front stage, back stage, performance, role — to explain how we present ourselves in social situations." },
                  ],
                },
              },
            ],
          },
          {
            id: "m2",
            title: "Module 2: The Physical and Digital Self",
            topics: [
              {
                id: "m2t1",
                title: "The Physical Self and Body Image",
                content: {
                  heading: "The Physical Self and Body Image",
                  term: "PRELIM",
                  module: "Module 2: The Physical and Digital Self",
                  objectives: [
                    "Define body image and its psychological dimensions",
                    "Explain how society shapes perceptions of physical beauty",
                    "Identify factors affecting positive and negative body image",
                  ],
                  sections: [
                    { type: "h2", content: "Understanding the Physical Self" },
                    { type: "text", content: "The physical self refers to the body — how we look, how we feel physically, and how we perceive our physical appearance. It is a fundamental dimension of personal identity." },
                    { type: "definition", content: "Body Image — The subjective perception a person has of their own physical appearance. It includes how you see yourself, how you feel about your body, and how you think others perceive you physically." },
                    { type: "h3", content: "Dimensions of Body Image" },
                    { type: "list", content: "Four Dimensions of Body Image", items: ["Perceptual: How you see your body (may differ from reality)", "Affective: How you feel about your body (satisfaction/dissatisfaction)", "Cognitive: What you think about your body", "Behavioral: Actions you take based on body image (exercise, dieting, avoidance)"] },
                    { type: "h3", content: "Factors Influencing Body Image" },
                    { type: "text", content: "Body image is shaped by a complex mix of personal experiences and social influences:" },
                    { type: "list", content: "Factors Affecting Body Image", items: ["Media and advertising standards of beauty", "Cultural ideals of attractiveness", "Family comments and peer comparisons", "Personal health and fitness experiences", "Social media and filtered images"] },
                    { type: "note", content: "Positive body image does not mean thinking your body is perfect — it means accepting and respecting your body, appreciating what it can do rather than focusing only on how it looks." },
                    { type: "h3", content: "The Media and Unrealistic Standards" },
                    { type: "text", content: "Mass media often promotes narrow, unrealistic standards of beauty that few people naturally achieve. Constant exposure to these images can lead to body dissatisfaction, eating disorders, and low self-esteem, especially among young people." },
                    { type: "example", content: "Research shows that after viewing 'ideal' body images in magazines or social media, people (especially women) report lower self-esteem and greater body dissatisfaction. This is the media's impact on the physical self-concept." },
                  ],
                  quiz: [
                    { question: "Body image refers to:", options: ["Your actual physical measurements", "Your subjective perception of your own physical appearance", "Your doctor's assessment of your health", "How much you weigh relative to height"], answer: 1, explanation: "Body image is subjective — it's how you perceive, think, and feel about your body, which may or may not match reality." },
                    { question: "Which is NOT a dimension of body image?", options: ["Perceptual", "Affective", "Cognitive", "Genetic"], answer: 3, explanation: "The four dimensions are Perceptual, Affective, Cognitive, and Behavioral. Genetic is not a dimension of body image." },
                  ],
                },
              },
              {
                id: "m2t2",
                title: "The Digital Self",
                content: {
                  heading: "The Digital Self",
                  term: "PRELIM",
                  module: "Module 2: The Physical and Digital Self",
                  objectives: [
                    "Define the digital self and its characteristics",
                    "Explain how online identity differs from offline identity",
                    "Analyze the ethical implications of digital self-presentation",
                  ],
                  sections: [
                    { type: "h2", content: "Identity in the Digital Age" },
                    { type: "text", content: "The rise of the internet and social media has created a new dimension of the self — the digital or virtual self. This is how we present ourselves, interact, and build identity in online spaces." },
                    { type: "definition", content: "Digital Self — The representation of a person's identity in digital and online environments, including their social media profiles, avatars, online behavior, and digital footprint." },
                    { type: "h3", content: "Characteristics of the Digital Self" },
                    { type: "list", content: "Key Characteristics", items: ["Curated: People carefully select what they share online", "Persistent: Digital content can last indefinitely", "Searchable: Online information is easily discoverable", "Scalable: A single post can reach millions instantly", "Context collapse: Multiple audiences see the same content simultaneously"] },
                    { type: "h3", content: "Online vs. Offline Identity" },
                    { type: "table", content: "Comparison of Online and Offline Identity", headers: ["Dimension", "Offline Self", "Online/Digital Self"], rows: [["Control", "Limited — physical appearance is given", "High — can curate profile, photos, bio"], ["Anonymity", "Difficult to maintain", "Possible through pseudonyms/avatars"], ["Audience", "Local, limited", "Global, potentially unlimited"], ["Permanence", "Fades over time (memory)", "Can be permanent and searchable"], ["Multiplicity", "Relatively stable persona", "Multiple personas possible"]] },
                    { type: "note", content: "The term 'context collapse' (coined by danah boyd) refers to the phenomenon where content designed for one audience (close friends) is viewed by many different audiences simultaneously on social media, complicating self-presentation." },
                    { type: "h3", content: "Ethical Considerations" },
                    { type: "text", content: "The digital self raises important ethical questions about authenticity, privacy, and responsibility. Presenting a false self online, cyberbullying, and digital surveillance are major concerns in the modern era." },
                  ],
                  quiz: [
                    { question: "'Context collapse' in digital identity means:", options: ["Your internet connection dropping", "Multiple different audiences viewing the same content simultaneously", "Losing your online account", "Your online identity merging with your offline identity"], answer: 1, explanation: "Context collapse occurs when content meant for one audience (e.g., friends) is seen by many different audiences at the same time on social media." },
                    { question: "Which is a characteristic of the digital self?", options: ["It is always identical to the offline self", "It cannot be changed once created", "It is curated and selective", "It is only accessible to close friends"], answer: 2, explanation: "The digital self is curated — people carefully choose what to share, often presenting an idealized version of themselves online." },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        id: "midterm",
        label: "MIDTERM",
        modules: [
          {
            id: "m3",
            title: "Module 3: The Political and Spiritual Self",
            topics: [
              {
                id: "m3t1",
                title: "The Political Self",
                content: {
                  heading: "The Political Self",
                  term: "MIDTERM",
                  module: "Module 3: The Political and Spiritual Self",
                  objectives: [
                    "Define the political self and civic identity",
                    "Explain the role of citizens in a democratic society",
                    "Identify rights and responsibilities of Filipino citizens",
                  ],
                  sections: [
                    { type: "h2", content: "The Self as a Political Being" },
                    { type: "text", content: "Aristotle famously declared that 'man is by nature a political animal' (zoon politikon). We are inherently social beings who form communities, govern ourselves, and participate in civic life." },
                    { type: "definition", content: "Political Self — The dimension of the self defined by citizenship, civic participation, political beliefs, and engagement with governance and public affairs." },
                    { type: "h3", content: "Citizenship in the Philippines" },
                    { type: "text", content: "Under the 1987 Philippine Constitution, citizenship is defined in Article IV. Filipino citizens have both rights and duties." },
                    { type: "list", content: "Rights of Filipino Citizens", items: ["Right to vote and be elected to public office", "Right to free speech, assembly, and petition", "Right to due process and equal protection of laws", "Right to education, health, and social services", "Right to information on matters of public concern"] },
                    { type: "list", content: "Duties of Filipino Citizens", items: ["Defend the State", "Pay taxes honestly", "Register and vote in elections", "Obey the law", "Cooperate with duly constituted authorities"] },
                    { type: "note", content: "Civic participation goes beyond voting. It includes attending barangay assemblies, engaging with local government, joining civic organizations, and staying informed about public issues." },
                  ],
                  quiz: [
                    { question: "Who said 'Man is by nature a political animal'?", options: ["Plato", "Socrates", "Aristotle", "John Locke"], answer: 2, explanation: "Aristotle declared humans are 'zoon politikon' — political animals — in his work 'Politics'." },
                    { question: "Philippine citizenship is defined in which article of the 1987 Constitution?", options: ["Article II", "Article III", "Article IV", "Article V"], answer: 2, explanation: "Article IV of the 1987 Philippine Constitution defines Philippine citizenship and how it is acquired or lost." },
                  ],
                },
              },
              {
                id: "m3t2",
                title: "The Spiritual Self",
                content: {
                  heading: "The Spiritual Self",
                  term: "MIDTERM",
                  module: "Module 3: The Political and Spiritual Self",
                  objectives: [
                    "Define spirituality and its dimensions",
                    "Distinguish between religion and spirituality",
                    "Explain how spirituality contributes to well-being and identity",
                  ],
                  sections: [
                    { type: "h2", content: "Understanding Spirituality" },
                    { type: "text", content: "The spiritual self refers to the inner dimension of a person that seeks meaning, purpose, and connection to something greater than oneself. It is distinct from, but often related to, religion." },
                    { type: "definition", content: "Spirituality — A broad concept involving a sense of connection to something greater than oneself, and it typically involves a search for meaning in life. It can include religious practice but also transcends organized religion." },
                    { type: "h3", content: "Religion vs. Spirituality" },
                    { type: "table", content: "Religion vs. Spirituality", headers: ["Dimension", "Religion", "Spirituality"], rows: [["Structure", "Organized, institutional", "Personal, individual"], ["Authority", "Scripture, clergy, tradition", "Personal experience and reflection"], ["Community", "Communal worship and practice", "May be solitary or communal"], ["Beliefs", "Specific doctrines and dogmas", "Personal beliefs and values"], ["Goal", "Salvation, divine relationship", "Meaning, inner peace, connection"]] },
                    { type: "h3", content: "Spiritual Well-being" },
                    { type: "text", content: "Research shows that spiritual well-being is associated with better mental health, resilience, and life satisfaction. It helps people cope with suffering, loss, and uncertainty." },
                    { type: "note", content: "In the Philippine context, spirituality is deeply embedded in culture. Filipino values like 'bayanihan' (communal unity), 'pakikisama' (harmony), and 'loob' (inner self) have strong spiritual dimensions." },
                  ],
                  quiz: [
                    { question: "Which best distinguishes spirituality from religion?", options: ["Spirituality is always atheistic", "Spirituality is personal while religion is often organized and institutional", "Religion focuses on inner peace only", "Spirituality requires church attendance"], answer: 1, explanation: "Spirituality is typically personal and individual, while religion involves organized, institutional practices and communal worship." },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        id: "finals",
        label: "FINALS",
        modules: [
          {
            id: "m4",
            title: "Module 4: The Integrated Self",
            topics: [
              {
                id: "m4t1",
                title: "Erikson's Stages of Psychosocial Development",
                content: {
                  heading: "Erikson's Stages of Psychosocial Development",
                  term: "FINALS",
                  module: "Module 4: The Integrated Self",
                  objectives: [
                    "Describe Erikson's 8 stages of psychosocial development",
                    "Identify the core conflict in each developmental stage",
                    "Apply Erikson's theory to understanding adolescent identity formation",
                  ],
                  sections: [
                    { type: "h2", content: "Erik Erikson's Theory" },
                    { type: "text", content: "Erik Erikson (1902–1994) proposed that personality development occurs across 8 stages spanning the entire lifespan. Each stage involves a central conflict or crisis that must be resolved for healthy psychological development." },
                    { type: "definition", content: "Psychosocial Crisis — A developmental challenge at each stage where the individual must resolve a conflict between two opposing tendencies. Successfully resolving it results in a 'virtue' or strength." },
                    { type: "table", content: "Erikson's 8 Stages of Psychosocial Development", headers: ["Stage", "Age", "Crisis", "Virtue"], rows: [["1. Infancy", "0–1 yr", "Trust vs. Mistrust", "Hope"], ["2. Early Childhood", "1–3 yrs", "Autonomy vs. Shame/Doubt", "Will"], ["3. Preschool", "3–6 yrs", "Initiative vs. Guilt", "Purpose"], ["4. School Age", "6–12 yrs", "Industry vs. Inferiority", "Competence"], ["5. Adolescence", "12–18 yrs", "Identity vs. Role Confusion", "Fidelity"], ["6. Young Adult", "18–40 yrs", "Intimacy vs. Isolation", "Love"], ["7. Middle Adult", "40–65 yrs", "Generativity vs. Stagnation", "Care"], ["8. Late Adult", "65+ yrs", "Ego Integrity vs. Despair", "Wisdom"]] },
                    { type: "h3", content: "Stage 5: Identity vs. Role Confusion (Adolescence)" },
                    { type: "text", content: "This is the most relevant stage for college freshmen. During adolescence (12–18 years), the central task is forming a coherent identity — a stable sense of who you are, what you value, and where you're headed in life." },
                    { type: "note", content: "Erikson coined the term 'identity crisis' to describe the confusion adolescents feel as they explore different roles and values. Successfully resolving this crisis leads to 'fidelity' — loyalty to one's own values and identity." },
                    { type: "example", content: "A 1st-year college student exploring different friend groups, majors, and life philosophies is actively working through the Identity vs. Role Confusion stage — a healthy part of development." },
                  ],
                  quiz: [
                    { question: "According to Erikson, what is the central conflict of adolescence?", options: ["Trust vs. Mistrust", "Autonomy vs. Shame", "Identity vs. Role Confusion", "Intimacy vs. Isolation"], answer: 2, explanation: "Stage 5 (Adolescence, 12–18 years) involves Identity vs. Role Confusion. Successfully resolving it leads to the virtue of Fidelity." },
                    { question: "The virtue gained from successfully resolving the 'Trust vs. Mistrust' stage is:", options: ["Will", "Hope", "Love", "Wisdom"], answer: 1, explanation: "Stage 1 (Infancy) involves Trust vs. Mistrust. When resolved successfully, the child develops Hope." },
                    { question: "How many stages does Erikson's psychosocial theory have?", options: ["5", "6", "7", "8"], answer: 3, explanation: "Erikson proposed 8 stages of psychosocial development spanning from infancy to late adulthood." },
                  ],
                },
              },
              {
                id: "m4t2",
                title: "Maslow's Hierarchy of Needs",
                content: {
                  heading: "Maslow's Hierarchy of Needs",
                  term: "FINALS",
                  module: "Module 4: The Integrated Self",
                  objectives: [
                    "Describe the five levels of Maslow's hierarchy",
                    "Explain how needs motivate human behavior",
                    "Apply the hierarchy to understanding self-actualization",
                  ],
                  sections: [
                    { type: "h2", content: "Abraham Maslow's Theory of Motivation" },
                    { type: "text", content: "Abraham Maslow (1908–1970) proposed that human needs are arranged in a hierarchical pyramid. Lower-level needs must be satisfied before people can focus on higher-level needs." },
                    { type: "definition", content: "Self-Actualization — The highest level of Maslow's hierarchy, representing the realization of one's full potential, creativity, and authentic self. It is the desire to become the most that one can be." },
                    { type: "table", content: "Maslow's Hierarchy of Needs", headers: ["Level", "Need Type", "Examples"], rows: [["5 (Highest)", "Self-Actualization", "Achieving full potential, creativity, peak experiences"], ["4", "Esteem Needs", "Self-esteem, respect, achievement, status"], ["3", "Love/Belonging", "Friendship, intimacy, family, sense of connection"], ["2", "Safety Needs", "Security, employment, health, property"], ["1 (Base)", "Physiological", "Food, water, shelter, sleep, warmth"]] },
                    { type: "h3", content: "Deficiency Needs vs. Growth Needs" },
                    { type: "text", content: "Maslow distinguished between D-needs (Deficiency needs — levels 1–4) and B-needs or Being needs (Growth needs — level 5). D-needs arise from lack; B-needs arise from desire to grow." },
                    { type: "note", content: "Maslow estimated that only about 1% of people ever achieve true self-actualization. Examples he cited include Abraham Lincoln, Albert Einstein, and Eleanor Roosevelt." },
                    { type: "h3", content: "Peak Experiences" },
                    { type: "text", content: "Maslow described 'peak experiences' as rare, exciting, deeply moving, and joyous moments that are associated with self-actualization. They are characterized by feelings of profound happiness, harmony, and interconnectedness." },
                  ],
                  quiz: [
                    { question: "What is at the top of Maslow's Hierarchy of Needs?", options: ["Safety", "Love and Belonging", "Esteem", "Self-Actualization"], answer: 3, explanation: "Self-Actualization is at the pinnacle of Maslow's hierarchy — the fulfillment of one's full potential." },
                    { question: "According to Maslow, lower-level needs must be:", options: ["Ignored in favor of higher needs", "Satisfied before higher-level needs can be pursued", "Achieved simultaneously with higher needs", "Fulfilled after self-actualization"], answer: 1, explanation: "Maslow's theory states that deficiency needs (lower levels) must be met first before people can pursue higher-level growth needs." },
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
    description: "Develops communication skills for various purposes and audiences using various registers of spoken and written language.",
    terms: [
      {
        id: "prelim",
        label: "PRELIM",
        modules: [
          {
            id: "m1",
            title: "Module 1: Nature and Elements of Communication",
            topics: [
              {
                id: "m1t1",
                title: "Communication Models",
                content: {
                  heading: "Communication Models",
                  term: "PRELIM",
                  module: "Module 1: Nature and Elements of Communication",
                  objectives: [
                    "Define communication and its key elements",
                    "Explain major communication models",
                    "Distinguish between linear, interactive, and transactional models",
                  ],
                  sections: [
                    { type: "h2", content: "What is Communication?" },
                    { type: "text", content: "Communication is the process of sharing meaning through a common system of symbols, signs, and behavior. It is the foundation of human interaction, relationship-building, and social organization." },
                    { type: "definition", content: "Communication — The process of creating, sending, receiving, and interpreting messages through various channels between senders and receivers, influenced by context and noise." },
                    { type: "h3", content: "Elements of Communication" },
                    { type: "table", content: "Elements of Communication", headers: ["Element", "Definition", "Example"], rows: [["Sender", "The originator of the message", "A professor giving a lecture"], ["Message", "The idea or information transmitted", "Course content being taught"], ["Channel", "The medium through which message travels", "Speech, writing, video"], ["Receiver", "The recipient of the message", "Students in the class"], ["Feedback", "The receiver's response to the message", "Students asking questions"], ["Noise", "Any interference that distorts the message", "Background noise, jargon, distractions"], ["Context", "The situation surrounding the communication", "Classroom setting, academic context"]] },
                    { type: "h3", content: "Shannon-Weaver Model (Linear Model)" },
                    { type: "text", content: "Developed in 1949, this model views communication as a one-way process. The sender encodes a message, transmits it through a channel, and the receiver decodes it. Noise can disrupt the process." },
                    { type: "note", content: "Limitation of the Linear Model: It treats communication as a one-way process with no feedback, which doesn't reflect real human interaction." },
                    { type: "h3", content: "Schramm's Interactive Model" },
                    { type: "text", content: "Wilbur Schramm (1954) added the concept of feedback, making communication a two-way process. Both sender and receiver encode and decode messages based on their 'fields of experience.'" },
                    { type: "definition", content: "Field of Experience — The sum of a person's experiences, values, beliefs, and cultural background that affects how they encode and decode messages. Communication is most effective when sender and receiver have overlapping fields of experience." },
                    { type: "h3", content: "Transactional Model" },
                    { type: "text", content: "The most sophisticated model, proposed by Barnlund (1970). Communication is viewed as simultaneous, ongoing, and mutually influential. Both parties are simultaneously senders and receivers." },
                  ],
                  quiz: [
                    { question: "Which communication model introduced the concept of 'feedback'?", options: ["Shannon-Weaver Model", "Schramm's Interactive Model", "Linear Model", "Barnlund's Model"], answer: 1, explanation: "Schramm's Interactive Model (1954) added feedback to communication, making it a two-way process." },
                    { question: "Noise in communication refers to:", options: ["Loud background sounds only", "Any interference that distorts the message", "The tone of the speaker's voice", "The length of the message"], answer: 1, explanation: "Noise includes any factor — physical, psychological, or semantic — that distorts or interferes with the intended message." },
                    { question: "The 'Field of Experience' in communication refers to:", options: ["A person's academic achievements", "The sum of experiences, values, and backgrounds affecting message encoding/decoding", "The physical space where communication occurs", "The educational level of communicators"], answer: 1, explanation: "Field of Experience (Schramm) refers to the totality of one's knowledge, values, and cultural background that shapes how messages are interpreted." },
                  ],
                },
              },
              {
                id: "m1t2",
                title: "Types of Communication",
                content: {
                  heading: "Types and Forms of Communication",
                  term: "PRELIM",
                  module: "Module 1: Nature and Elements of Communication",
                  objectives: [
                    "Distinguish between verbal and non-verbal communication",
                    "Identify types of communication based on context",
                    "Explain how non-verbal cues complement verbal messages",
                  ],
                  sections: [
                    { type: "h2", content: "Types of Communication" },
                    { type: "h3", content: "Verbal vs. Non-Verbal Communication" },
                    { type: "table", content: "Verbal vs. Non-Verbal Communication", headers: ["Type", "Definition", "Examples"], rows: [["Verbal", "Use of words (spoken or written)", "Speech, conversations, letters, text messages"], ["Non-Verbal", "Communication without words", "Facial expressions, gestures, body language, eye contact, silence"]] },
                    { type: "text", content: "Research by Albert Mehrabian suggests that in face-to-face communication, 7% of meaning comes from words, 38% from tone of voice, and 55% from non-verbal cues (body language)." },
                    { type: "h3", content: "Types of Non-Verbal Communication" },
                    { type: "list", content: "Non-Verbal Communication Types", items: ["Kinesics: Body movements, gestures, facial expressions", "Proxemics: Use of physical space and distance", "Haptics: Communication through touch", "Paralanguage: Vocal qualities (tone, pitch, speed, volume)", "Chronemics: Use of time in communication", "Appearance: Clothing, grooming, physical features"] },
                    { type: "h3", content: "Types Based on Context" },
                    { type: "list", content: "Communication Contexts", items: ["Intrapersonal: Communication within oneself (self-talk, inner dialogue)", "Interpersonal: Communication between two people", "Small Group: Communication in groups (3–15 people)", "Public Communication: One speaker to a large audience", "Mass Communication: Messages sent to large, anonymous audiences via media"] },
                    { type: "note", content: "Proxemics was studied extensively by Edward T. Hall, who identified four zones of personal space: Intimate Zone (0–18 inches), Personal Zone (18 inches–4 feet), Social Zone (4–12 feet), and Public Zone (12+ feet)." },
                  ],
                  quiz: [
                    { question: "According to Mehrabian, what percentage of face-to-face communication comes from body language?", options: ["7%", "38%", "55%", "70%"], answer: 2, explanation: "Mehrabian's research suggests 55% of meaning in face-to-face communication comes from non-verbal cues (body language)." },
                    { question: "Proxemics refers to:", options: ["Use of time in communication", "Communication through touch", "Use of physical space and distance", "Vocal qualities like tone and pitch"], answer: 2, explanation: "Proxemics (studied by Edward Hall) is the study of how people use physical space and distance in communication." },
                    { question: "Which type of communication is considered intrapersonal?", options: ["Talking to a friend on the phone", "Posting on social media", "Inner dialogue and self-talk", "Giving a class presentation"], answer: 2, explanation: "Intrapersonal communication is communication within oneself — including self-talk, reflection, and inner dialogue." },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        id: "midterm",
        label: "MIDTERM",
        modules: [
          {
            id: "m2",
            title: "Module 2: Communication for Academic Purposes",
            topics: [
              {
                id: "m2t1",
                title: "Academic Writing Skills",
                content: {
                  heading: "Academic Writing Skills",
                  term: "MIDTERM",
                  module: "Module 2: Communication for Academic Purposes",
                  objectives: [
                    "Apply the conventions of academic writing",
                    "Distinguish academic from non-academic texts",
                    "Write clear, coherent paragraphs using PEEL structure",
                  ],
                  sections: [
                    { type: "h2", content: "Academic Writing" },
                    { type: "text", content: "Academic writing is a formal style of writing used in universities and scholarly publications. It is characterized by clarity, precision, evidence-based arguments, and adherence to citation standards." },
                    { type: "h3", content: "Characteristics of Academic Writing" },
                    { type: "list", content: "Key Characteristics", items: ["Formal register and objective tone", "Evidence-based claims with proper citation", "Clear structure (introduction, body, conclusion)", "Precise and concise language", "Third-person perspective (generally)", "Avoidance of contractions and colloquialisms"] },
                    { type: "h3", content: "PEEL Paragraph Structure" },
                    { type: "definition", content: "PEEL Structure — A framework for writing well-organized academic paragraphs: Point (topic sentence), Evidence (supporting data/quotes), Explanation (analysis of evidence), Link (connection back to thesis or next paragraph)." },
                    { type: "example", content: "Point: Social media negatively affects academic performance. Evidence: A study by Junco (2012) found that students who used Facebook while studying scored lower on exams. Explanation: This suggests that multitasking with social media fragments attention, reducing the depth of learning. Link: Therefore, effective time management of digital media is essential for academic success." },
                    { type: "h3", content: "Types of Academic Texts" },
                    { type: "table", content: "Types of Academic Texts", headers: ["Type", "Purpose", "Example"], rows: [["Essay", "Argue a position with evidence", "Argumentative essay on climate change"], ["Research Paper", "Present original research findings", "IMRAD format research study"], ["Literature Review", "Synthesize existing research", "Review of studies on e-learning"], ["Case Study", "Analyze a specific real-world situation", "Business ethics case analysis"], ["Reaction Paper", "Critical response to a text or work", "Response to a documentary film"]] },
                  ],
                  quiz: [
                    { question: "In the PEEL structure, what does 'E' stand for?", options: ["Elaborate", "Evidence", "Example", "Evaluate"], answer: 1, explanation: "PEEL stands for Point, Evidence, Explanation, Link. The first E is 'Evidence' — supporting data, quotes, or examples." },
                    { question: "Academic writing is characterized by:", options: ["Informal tone and personal opinions", "Formal register and evidence-based arguments", "Creative storytelling and metaphors", "Casual language and contractions"], answer: 1, explanation: "Academic writing uses a formal register, objective tone, and evidence-based arguments with proper citations." },
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
    id: "nstp",
    code: "NSTP 1",
    title: "National Service Training Program 1",
    shortTitle: "NSTP 1",
    units: 3,
    description: "Develops civic consciousness and defense preparedness among the youth by developing the ethics of service and patriotism.",
    terms: [
      {
        id: "prelim",
        label: "PRELIM",
        modules: [
          {
            id: "m1",
            title: "Module 1: Introduction to NSTP",
            topics: [
              {
                id: "m1t1",
                title: "NSTP Law and History",
                content: {
                  heading: "NSTP Law and History",
                  term: "PRELIM",
                  module: "Module 1: Introduction to NSTP",
                  objectives: [
                    "Explain the legal basis and history of NSTP",
                    "Identify the three components of NSTP",
                    "Distinguish between ROTC, CWTS, and LTS",
                  ],
                  sections: [
                    { type: "h2", content: "Republic Act 9163: The NSTP Act of 2001" },
                    { type: "text", content: "The National Service Training Program (NSTP) was established under Republic Act 9163, also known as the National Service Training Program (NSTP) Act of 2001. It replaced the old ROTC-only requirement with a broader civic-oriented program." },
                    { type: "definition", content: "NSTP (National Service Training Program) — A program mandated by RA 9163 that aims to enhance civic consciousness and defense preparedness among the youth, develop the ethics of service and patriotism while encouraging the participation of citizens in nation-building." },
                    { type: "h3", content: "Three Components of NSTP" },
                    { type: "table", content: "NSTP Components", headers: ["Component", "Full Name", "Focus"], rows: [["ROTC", "Reserve Officers' Training Corps", "Military science and national defense"], ["CWTS", "Civic Welfare Training Service", "Community service and social development"], ["LTS", "Literacy Training Service", "Teaching literacy and numeracy skills to out-of-school youth and adults"]] },
                    { type: "h3", content: "Objectives of NSTP" },
                    { type: "list", content: "NSTP Objectives", items: ["Promote the physical, moral, spiritual, intellectual, and social well-being of youth", "Train students to become civic-spirited and responsible citizens", "Inculcate patriotism and nationalism", "Advance youth leadership and citizenship", "Foster love of country"] },
                    { type: "note", content: "RA 9163 requires all incoming college freshmen (male and female) to complete NSTP. Students must take 2 semesters. They may choose any one of the three components." },
                    { type: "h3", content: "History of Military Training in the Philippines" },
                    { type: "text", content: "Prior to RA 9163, military training was compulsory for male college students through ROTC alone. After the 'Caltex ROTC hazing incident' in 2001 and public outcry, Congress passed RA 9163 giving students options beyond ROTC." },
                  ],
                  quiz: [
                    { question: "What Republic Act established the NSTP?", options: ["RA 7722", "RA 8294", "RA 9163", "RA 10121"], answer: 2, explanation: "Republic Act 9163, known as the NSTP Act of 2001, established the National Service Training Program." },
                    { question: "Which NSTP component focuses on teaching literacy to out-of-school youth?", options: ["ROTC", "CWTS", "LTS", "AFP"], answer: 2, explanation: "LTS (Literacy Training Service) focuses on teaching literacy and numeracy skills to out-of-school youth and adults." },
                    { question: "NSTP is required for:", options: ["Male college students only", "All incoming college freshmen regardless of gender", "College seniors only", "Graduate students"], answer: 1, explanation: "RA 9163 requires all incoming college freshmen — both male and female — to complete NSTP." },
                  ],
                },
              },
            ],
          },
          {
            id: "m2",
            title: "Module 2: Values and Leadership",
            topics: [
              {
                id: "m2t1",
                title: "Filipino Values and Character",
                content: {
                  heading: "Filipino Values and Character",
                  term: "PRELIM",
                  module: "Module 2: Values and Leadership",
                  objectives: [
                    "Identify core Filipino values and their cultural origins",
                    "Analyze both positive and negative Filipino values",
                    "Explain how Filipino values can contribute to national development",
                  ],
                  sections: [
                    { type: "h2", content: "Filipino Core Values" },
                    { type: "text", content: "Filipino culture has a rich set of values that shape individual and collective behavior. These values are rooted in indigenous traditions, centuries of colonial influence, and Catholic faith." },
                    { type: "h3", content: "Positive Filipino Values" },
                    { type: "list", content: "Core Positive Values", items: ["Bayanihan — Spirit of communal unity and cooperation", "Pakikipagkapwa — Treating others as equal human beings", "Pagiging mapagkumbaba — Humility and modesty", "Paggalang — Respect for elders and authority", "Pagmamahal sa pamilya — Strong family orientation", "Pagtitiis — Perseverance and endurance", "Utang na loob — Debt of gratitude and reciprocity"] },
                    { type: "definition", content: "Bayanihan — A Filipino practice of communal work and unity, historically demonstrated when neighbors help a family move their house together. It represents the spirit of selfless cooperation for the common good." },
                    { type: "h3", content: "Negative Filipino Traits (by Maning Diokno)" },
                    { type: "list", content: "Problematic Cultural Tendencies", items: ["Kanya-kanya syndrome — Selfishness, putting personal gain over common good", "Crab mentality — Pulling others down to prevent their success", "Manana habit — Procrastination ('mamaya na' attitude)", "Ningas-kugon — Starting projects with enthusiasm but losing interest quickly", "Colonial mentality — Favoring foreign over Filipino products/cultures", "Bahala na — Fatalistic attitude of leaving things to chance"] },
                    { type: "note", content: "These negative traits are not inherent but are acquired through history and social conditioning. Understanding them is the first step toward overcoming them for national progress." },
                  ],
                  quiz: [
                    { question: "'Bayanihan' best represents:", options: ["Individual achievement and competition", "Communal unity and cooperative work", "Respect for colonial influences", "Religious devotion"], answer: 1, explanation: "Bayanihan is the Filipino spirit of communal unity and cooperation — working together for the common good." },
                    { question: "'Crab mentality' refers to:", options: ["Loving seafood in Filipino cuisine", "Pulling others down to prevent their success", "Working hard like a crab", "Being overly protective of one's family"], answer: 1, explanation: "Crab mentality (alimango mentality) describes the tendency to pull down those who are succeeding, much like crabs in a bucket pulling each other down." },
                    { question: "'Ningas-kugon' means:", options: ["Strong perseverance until project completion", "Starting with enthusiasm but losing interest quickly", "Leaving everything to fate", "Excessive dependence on foreign products"], answer: 1, explanation: "Ningas-kugon (from burning cogon grass that dies quickly) refers to starting tasks with great enthusiasm but abandoning them before completion." },
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
    id: "compprog",
    code: "CC 101",
    title: "Introduction to Computing",
    shortTitle: "Intro Computing",
    units: 3,
    description: "Covers fundamentals of computing, history and evolution of computers, data representation, and basic programming concepts.",
    terms: [
      {
        id: "prelim",
        label: "PRELIM",
        modules: [
          {
            id: "m1",
            title: "Module 1: Fundamentals of Computing",
            topics: [
              {
                id: "m1t1",
                title: "History and Evolution of Computers",
                content: {
                  heading: "History and Evolution of Computers",
                  term: "PRELIM",
                  module: "Module 1: Fundamentals of Computing",
                  objectives: [
                    "Trace the history of computing from ancient tools to modern computers",
                    "Identify the five generations of computers",
                    "Describe key milestones in computing history",
                  ],
                  sections: [
                    { type: "h2", content: "The History of Computing" },
                    { type: "text", content: "Computing has evolved from simple counting tools to powerful supercomputers. Understanding this history helps us appreciate the technology we use today." },
                    { type: "h3", content: "Pre-Computer Era" },
                    { type: "list", content: "Early Computing Devices", items: ["Abacus (3000 BCE) — First known calculating tool", "Pascaline (1642) — Blaise Pascal's mechanical calculator", "Difference Engine (1820s) — Charles Babbage's mechanical computer concept", "Analytical Engine — Babbage's programmable mechanical computer (never completed)", "Punch Cards — Herman Hollerith's data storage for the 1890 US Census"] },
                    { type: "definition", content: "Charles Babbage — Known as the 'Father of the Computer'. He designed the Difference Engine and the more advanced Analytical Engine, which contained concepts found in modern computers: input, memory, processor, and output." },
                    { type: "h3", content: "Five Generations of Computers" },
                    { type: "table", content: "Computer Generations", headers: ["Generation", "Period", "Technology", "Example"], rows: [["1st", "1940s–1950s", "Vacuum tubes", "ENIAC, UNIVAC"], ["2nd", "1950s–1960s", "Transistors", "IBM 1401, IBM 7090"], ["3rd", "1960s–1970s", "Integrated Circuits (ICs)", "IBM System/360, DEC PDP-8"], ["4th", "1970s–present", "Microprocessors (VLSI)", "Intel 4004, modern PCs"], ["5th", "Present–future", "Artificial Intelligence", "Voice assistants, quantum computers"]] },
                    { type: "h3", content: "Key Milestones" },
                    { type: "list", content: "Important Milestones", items: ["1936 — Alan Turing proposes the Turing Machine (theoretical computing model)", "1945 — John von Neumann proposes the stored-program concept", "1947 — Transistor invented at Bell Labs", "1958 — First integrated circuit by Jack Kilby (Texas Instruments)", "1971 — Intel 4004, first commercial microprocessor", "1975 — Altair 8800, first personal computer kit", "1981 — IBM PC introduced", "1991 — World Wide Web (WWW) launched by Tim Berners-Lee", "2007 — Apple iPhone introduced, beginning of smartphone era"] },
                    { type: "note", content: "ENIAC (Electronic Numerical Integrator and Computer, 1945) was the first general-purpose electronic digital computer. It weighed 30 tons, used 18,000 vacuum tubes, and occupied a room the size of a gymnasium." },
                  ],
                  quiz: [
                    { question: "Who is known as the 'Father of the Computer'?", options: ["Alan Turing", "John von Neumann", "Charles Babbage", "Bill Gates"], answer: 2, explanation: "Charles Babbage is known as the 'Father of the Computer' for his design of the Difference Engine and the Analytical Engine." },
                    { question: "Which technology characterized the 2nd generation of computers?", options: ["Vacuum tubes", "Transistors", "Integrated Circuits", "Microprocessors"], answer: 1, explanation: "2nd generation computers (1950s–1960s) used transistors, which were smaller, faster, and more reliable than vacuum tubes." },
                    { question: "The World Wide Web was launched by:", options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Vint Cerf"], answer: 2, explanation: "Tim Berners-Lee launched the World Wide Web in 1991, creating the foundation of the internet as we know it today." },
                    { question: "ENIAC was notable for being:", options: ["The first personal computer", "The first general-purpose electronic digital computer", "The first computer with a mouse", "The first laptop"], answer: 1, explanation: "ENIAC (1945) was the first general-purpose electronic digital computer, using 18,000 vacuum tubes." },
                  ],
                },
              },
              {
                id: "m1t2",
                title: "Computer Components and Architecture",
                content: {
                  heading: "Computer Components and Architecture",
                  term: "PRELIM",
                  module: "Module 1: Fundamentals of Computing",
                  objectives: [
                    "Identify the basic components of a computer system",
                    "Explain the function of each hardware component",
                    "Describe the von Neumann architecture",
                  ],
                  sections: [
                    { type: "h2", content: "Computer System Components" },
                    { type: "text", content: "A computer system consists of hardware (physical components) and software (programs and data). The hardware follows the Input-Process-Output (IPO) model." },
                    { type: "h3", content: "Hardware Components" },
                    { type: "table", content: "Major Hardware Components", headers: ["Component", "Function", "Examples"], rows: [["CPU (Processor)", "Executes instructions and processes data", "Intel Core i7, AMD Ryzen"], ["RAM", "Temporary, fast memory for active programs", "8GB DDR4, 16GB DDR5"], ["ROM", "Permanent memory storing firmware/BIOS", "BIOS chip on motherboard"], ["Storage", "Permanent data storage", "HDD, SSD, USB drives"], ["Motherboard", "Connects all components together", "ASUS, MSI motherboards"], ["GPU", "Processes graphics and display output", "NVIDIA RTX, AMD Radeon"], ["PSU", "Converts electrical power for components", "500W, 750W power supplies"], ["I/O Devices", "Input/Output interfaces", "Keyboard, mouse, monitor, speakers"]] },
                    { type: "definition", content: "CPU (Central Processing Unit) — The 'brain' of the computer. It executes instructions from programs by fetching, decoding, and executing operations. Key parts include the ALU (Arithmetic Logic Unit), Control Unit, and Cache memory." },
                    { type: "h3", content: "Von Neumann Architecture" },
                    { type: "text", content: "Proposed by John von Neumann in 1945, this architecture describes the stored-program concept — both instructions and data are stored in the same memory. This is the basis of almost all modern computers." },
                    { type: "list", content: "Von Neumann Architecture Components", items: ["Memory Unit — Stores both program instructions and data", "Control Unit (CU) — Fetches and decodes instructions", "Arithmetic Logic Unit (ALU) — Performs mathematical and logical operations", "Input/Output — Interfaces for data entry and display", "Buses — Data pathways connecting components (Data bus, Address bus, Control bus)"] },
                    { type: "h3", content: "Types of Memory" },
                    { type: "table", content: "Memory Types", headers: ["Type", "Volatile?", "Speed", "Capacity"], rows: [["Cache (L1/L2/L3)", "Yes", "Fastest", "KB to few MB"], ["RAM", "Yes", "Very Fast", "GB range"], ["SSD", "No", "Fast", "GB–TB range"], ["HDD", "No", "Slower", "TB range"]] },
                    { type: "note", content: "Volatile memory loses its data when power is cut off (RAM, Cache). Non-volatile memory retains data without power (ROM, SSD, HDD)." },
                  ],
                  quiz: [
                    { question: "What does CPU stand for?", options: ["Central Program Unit", "Central Processing Unit", "Computer Processing Utility", "Core Processor Unit"], answer: 1, explanation: "CPU stands for Central Processing Unit — the primary component that executes instructions." },
                    { question: "Which type of memory is VOLATILE (loses data when power is off)?", options: ["HDD", "SSD", "ROM", "RAM"], answer: 3, explanation: "RAM (Random Access Memory) is volatile — it loses all stored data when the computer is powered off." },
                    { question: "The Von Neumann architecture introduced the concept of:", options: ["Vacuum tubes for computing", "Transistors for processing", "Stored-program where instructions and data share memory", "Parallel processing"], answer: 2, explanation: "Von Neumann's key contribution was the stored-program concept — both instructions and data are stored in the same memory unit." },
                  ],
                },
              },
            ],
          },
          {
            id: "m2",
            title: "Module 2: Number Systems and Data Representation",
            topics: [
              {
                id: "m2t1",
                title: "Number Systems",
                content: {
                  heading: "Number Systems",
                  term: "PRELIM",
                  module: "Module 2: Number Systems and Data Representation",
                  objectives: [
                    "Explain binary, octal, decimal, and hexadecimal number systems",
                    "Convert between different number systems",
                    "Understand how computers represent data using binary",
                  ],
                  sections: [
                    { type: "h2", content: "Number Systems in Computing" },
                    { type: "text", content: "Computers operate using binary (base-2) because electronic circuits have two states: on (1) and off (0). Understanding number systems is fundamental to understanding how computers process and store data." },
                    { type: "table", content: "Common Number Systems", headers: ["System", "Base", "Digits Used", "Example"], rows: [["Binary", "2", "0, 1", "1010₂ = 10₁₀"], ["Octal", "8", "0–7", "12₈ = 10₁₀"], ["Decimal", "10", "0–9", "10₁₀"], ["Hexadecimal", "16", "0–9, A–F", "A₁₆ = 10₁₀"]] },
                    { type: "h3", content: "Binary Number System" },
                    { type: "text", content: "Binary is base-2. Each digit (bit) represents a power of 2. Bits are grouped into bytes (8 bits), kilobytes (1024 bytes), megabytes, etc." },
                    { type: "definition", content: "Bit — The smallest unit of data in computing. A single binary digit (0 or 1). Eight bits make one byte, which can represent 256 different values (2⁸)." },
                    { type: "example", content: "Converting 1101₂ to Decimal: 1×2³ + 1×2² + 0×2¹ + 1×2⁰ = 8 + 4 + 0 + 1 = 13₁₀" },
                    { type: "h3", content: "Hexadecimal" },
                    { type: "text", content: "Hexadecimal (base-16) uses digits 0–9 and letters A–F (where A=10, B=11, C=12, D=13, E=14, F=15). It is commonly used in computing because each hex digit represents exactly 4 binary bits." },
                    { type: "example", content: "Memory address example: 0x1A3F (hexadecimal) represents a memory location. In binary: 0001 1010 0011 1111. Each hex digit = 4 bits." },
                    { type: "h3", content: "Data Storage Units" },
                    { type: "table", content: "Data Storage Units", headers: ["Unit", "Abbreviation", "Size"], rows: [["Bit", "b", "Single binary digit"], ["Byte", "B", "8 bits"], ["Kilobyte", "KB", "1,024 bytes"], ["Megabyte", "MB", "1,024 KB"], ["Gigabyte", "GB", "1,024 MB"], ["Terabyte", "TB", "1,024 GB"], ["Petabyte", "PB", "1,024 TB"]] },
                  ],
                  quiz: [
                    { question: "What is the decimal equivalent of binary 1010?", options: ["8", "10", "12", "14"], answer: 1, explanation: "1010₂ = 1×2³ + 0×2² + 1×2¹ + 0×2⁰ = 8 + 0 + 2 + 0 = 10₁₀" },
                    { question: "In hexadecimal, what does the letter 'F' represent?", options: ["14", "15", "16", "12"], answer: 1, explanation: "In hexadecimal: A=10, B=11, C=12, D=13, E=14, F=15." },
                    { question: "How many bits are in one byte?", options: ["4", "6", "8", "16"], answer: 2, explanation: "One byte = 8 bits. Eight bits can represent 2⁸ = 256 different values." },
                    { question: "Computers use binary because:", options: ["Binary is easiest for humans to understand", "Electronic circuits have two states: on (1) and off (0)", "Binary was invented before other number systems", "Binary is required by international standards"], answer: 1, explanation: "Binary perfectly maps to electronic circuit states: a transistor is either conducting (1/on) or not conducting (0/off)." },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        id: "midterm",
        label: "MIDTERM",
        modules: [
          {
            id: "m3",
            title: "Module 3: Introduction to Programming",
            topics: [
              {
                id: "m3t1",
                title: "Programming Fundamentals",
                content: {
                  heading: "Programming Fundamentals",
                  term: "MIDTERM",
                  module: "Module 3: Introduction to Programming",
                  objectives: [
                    "Define a computer program and programming language",
                    "Distinguish between low-level and high-level languages",
                    "Explain the software development lifecycle (SDLC)",
                  ],
                  sections: [
                    { type: "h2", content: "What is Programming?" },
                    { type: "text", content: "Programming (or coding) is the process of writing instructions that tell a computer what to do. These instructions are written in programming languages that computers can understand and execute." },
                    { type: "definition", content: "Program — A set of instructions written in a programming language that a computer can execute to perform a specific task or solve a problem." },
                    { type: "h3", content: "Types of Programming Languages" },
                    { type: "table", content: "Programming Language Levels", headers: ["Level", "Description", "Examples", "Pros/Cons"], rows: [["Machine Language", "Binary code (0s and 1s) directly executed by CPU", "00110001 01000011", "Fast but extremely hard to write"], ["Assembly Language", "Low-level using mnemonics (MOV, ADD, etc.)", "x86 Assembly, ARM Assembly", "Faster control, but complex"], ["High-Level Language", "Human-readable, closer to English", "Python, Java, C++, JavaScript", "Easier to write, but needs compilation"]] },
                    { type: "h3", content: "Compilation vs. Interpretation" },
                    { type: "table", content: "Compiler vs. Interpreter", headers: ["Aspect", "Compiler", "Interpreter"], rows: [["Process", "Translates entire program at once", "Translates line by line at runtime"], ["Output", "Creates executable file", "No separate executable"], ["Speed", "Faster execution", "Slower (translates each time)"], ["Examples", "C, C++, Java (to bytecode)", "Python, JavaScript (traditionally)"]] },
                    { type: "h3", content: "Basic Programming Concepts" },
                    { type: "list", content: "Fundamental Concepts", items: ["Variable — Named storage location that holds a value", "Data Type — Classification of data (int, float, string, boolean)", "Operator — Symbol performing operations (+, -, *, /)", "Statement — A single instruction in a program", "Algorithm — Step-by-step procedure to solve a problem", "Flowchart — Visual diagram of an algorithm", "Pseudocode — Informal description of an algorithm in plain English"] },
                    { type: "example", content: "Pseudocode for computing average: \nSTART\n  INPUT num1, num2, num3\n  SET sum = num1 + num2 + num3\n  SET average = sum / 3\n  OUTPUT average\nEND" },
                    { type: "h3", content: "Control Structures" },
                    { type: "list", content: "Three Types of Control Structures", items: ["Sequence — Instructions execute one after another in order", "Selection (Decision) — Branches based on condition (IF-THEN-ELSE)", "Iteration (Loop) — Repeats a block of code (FOR, WHILE, DO-WHILE)"] },
                  ],
                  quiz: [
                    { question: "A compiler differs from an interpreter in that:", options: ["Compilers only work with Python", "Compilers translate the entire program at once, interpreters translate line by line", "Interpreters are always faster", "Compilers cannot handle errors"], answer: 1, explanation: "A compiler translates the entire source code into an executable file first. An interpreter translates and executes code line by line at runtime." },
                    { question: "Which is an example of a high-level programming language?", options: ["Machine code", "Assembly language", "Python", "Binary"], answer: 2, explanation: "Python is a high-level language — it uses human-readable syntax close to English. Machine code and Assembly are low-level languages." },
                    { question: "An algorithm is best described as:", options: ["A type of computer hardware", "A step-by-step procedure to solve a problem", "A programming language", "A type of computer memory"], answer: 1, explanation: "An algorithm is a well-defined, step-by-step procedure for solving a problem or accomplishing a task." },
                    { question: "The three types of control structures in programming are:", options: ["Input, Process, Output", "Sequence, Selection, Iteration", "Compile, Execute, Debug", "Declare, Assign, Display"], answer: 1, explanation: "The three fundamental control structures are: Sequence (step by step), Selection (if-then-else decisions), and Iteration (loops)." },
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
    id: "math1",
    code: "MATH 1",
    title: "Mathematics in the Modern World",
    shortTitle: "MATH 1",
    units: 3,
    description: "Explores mathematics as a tool to quantify, organize, and control the world, dealing with nature, society, and the environment.",
    terms: [
      {
        id: "prelim",
        label: "PRELIM",
        modules: [
          {
            id: "m1",
            title: "Module 1: Mathematics in Our World",
            topics: [
              {
                id: "m1t1",
                title: "Patterns and Numbers in Nature",
                content: {
                  heading: "Patterns and Numbers in Nature",
                  term: "PRELIM",
                  module: "Module 1: Mathematics in Our World",
                  objectives: [
                    "Identify mathematical patterns in nature",
                    "Explain the Fibonacci sequence and the Golden Ratio",
                    "Describe fractals and symmetry in natural phenomena",
                  ],
                  sections: [
                    { type: "h2", content: "Mathematics in Nature" },
                    { type: "text", content: "Mathematics is not just a subject in school — it is the universal language of nature. From the spiral of a nautilus shell to the branching of a tree, mathematical patterns appear throughout the natural world." },
                    { type: "h3", content: "The Fibonacci Sequence" },
                    { type: "text", content: "The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1." },
                    { type: "definition", content: "Fibonacci Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144... Formula: F(n) = F(n-1) + F(n-2), where F(0)=0 and F(1)=1" },
                    { type: "example", content: "Fibonacci in Nature: Sunflower seeds arrange in Fibonacci spirals (21 clockwise, 34 counterclockwise). Pineapple scales: 8, 13, 21. Leaf arrangements (phyllotaxis) follow Fibonacci ratios to maximize sunlight exposure." },
                    { type: "h3", content: "The Golden Ratio (φ)" },
                    { type: "text", content: "As Fibonacci numbers get larger, their ratio (F(n+1)/F(n)) approaches the Golden Ratio φ ≈ 1.6180339..." },
                    { type: "definition", content: "Golden Ratio (φ ≈ 1.618) — A mathematical proportion considered aesthetically pleasing. It appears in art (Parthenon, Mona Lisa), architecture, nature (shell spirals, leaf arrangement), and the human body." },
                    { type: "h3", content: "Types of Symmetry" },
                    { type: "table", content: "Types of Symmetry in Nature", headers: ["Type", "Description", "Example"], rows: [["Bilateral", "Mirror image across a central axis", "Human body, butterfly wings"], ["Radial", "Arranged around a central point", "Starfish, flowers, snowflakes"], ["Rotational", "Looks the same after rotation", "Pinwheel, sunflower"], ["Translational", "Repeating pattern at regular intervals", "Honeycomb, brick wall"]] },
                    { type: "h3", content: "Fractals" },
                    { type: "definition", content: "Fractal — A mathematical shape that exhibits self-similarity at different scales. When you zoom into a fractal, you see the same pattern repeated at smaller and smaller scales." },
                    { type: "example", content: "Natural fractals: Romanesco broccoli, coastlines, snowflakes, fern leaves, river networks, lightning bolts, and blood vessel branching patterns." },
                  ],
                  quiz: [
                    { question: "What is the 8th number in the Fibonacci sequence (starting from 0)?", options: ["13", "21", "8", "34"], answer: 0, explanation: "Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13. The 8th number (0-indexed 7th) is 13. Wait — counting from 1: 0(1), 1(2), 1(3), 2(4), 3(5), 5(6), 8(7), 13(8). The 8th term is 13." },
                    { question: "The Golden Ratio φ is approximately equal to:", options: ["1.414", "1.618", "2.718", "3.14159"], answer: 1, explanation: "The Golden Ratio φ (phi) ≈ 1.618. It is the limit of the ratio of consecutive Fibonacci numbers." },
                    { question: "A fractal is characterized by:", options: ["Perfect straight lines", "Self-similarity at different scales", "Randomly scattered patterns", "Only appearing in mathematics textbooks"], answer: 1, explanation: "Fractals exhibit self-similarity — the same pattern repeats when you zoom in or out. They appear extensively in nature." },
                  ],
                },
              },
              {
                id: "m1t2",
                title: "Mathematical Language and Symbols",
                content: {
                  heading: "Mathematical Language and Symbols",
                  term: "PRELIM",
                  module: "Module 1: Mathematics in Our World",
                  objectives: [
                    "Distinguish between mathematical expressions and sentences",
                    "Understand common mathematical symbols and notation",
                    "Translate English phrases into mathematical expressions",
                  ],
                  sections: [
                    { type: "h2", content: "The Language of Mathematics" },
                    { type: "text", content: "Mathematics has its own language — precise, concise, and universal. Understanding mathematical language is essential to communicating mathematical ideas clearly." },
                    { type: "h3", content: "Expressions vs. Sentences" },
                    { type: "table", content: "Mathematical Expressions vs. Sentences", headers: ["Type", "Definition", "Example"], rows: [["Expression", "Mathematical phrase with no verb (no = or inequality)", "3x + 5, 2y², x + y"], ["Equation", "Mathematical sentence with '=' showing equality", "2x + 3 = 7"], ["Inequality", "Mathematical sentence using <, >, ≤, ≥", "x + 2 > 5"]] },
                    { type: "h3", content: "Common Mathematical Symbols" },
                    { type: "table", content: "Mathematical Symbols", headers: ["Symbol", "Meaning", "Example"], rows: [["∈", "Is an element of (belongs to)", "3 ∈ {1,2,3}"], ["∉", "Is not an element of", "4 ∉ {1,2,3}"], ["∅", "Empty set (null set)", "{ } = ∅"], ["∀", "For all (universal quantifier)", "∀x, x+0=x"], ["∃", "There exists (existential quantifier)", "∃x such that x²=4"], ["⊂", "Is a subset of", "{1,2} ⊂ {1,2,3}"], ["∪", "Union of sets", "A∪B"], ["∩", "Intersection of sets", "A∩B"]] },
                    { type: "h3", content: "Translating English to Math" },
                    { type: "table", content: "English to Mathematical Expressions", headers: ["English Phrase", "Mathematical Expression"], rows: [["The sum of a number and 5", "x + 5"], ["Twice a number decreased by 3", "2x - 3"], ["The product of a number and 7", "7x"], ["A number divided by 4", "x/4 or x÷4"], ["The square of a number increased by 1", "x² + 1"]] },
                  ],
                  quiz: [
                    { question: "Which is a mathematical EXPRESSION (not a sentence)?", options: ["2x + 3 = 7", "x > 5", "3x + 5", "y = 2x + 1"], answer: 2, explanation: "An expression has no '=' or inequality sign. '3x + 5' is an expression; the others are equations or inequalities (sentences)." },
                    { question: "The symbol '∀' means:", options: ["There exists", "For all", "Is an element of", "Is a subset of"], answer: 1, explanation: "∀ is the universal quantifier meaning 'for all' or 'for every'." },
                    { question: "How would you express 'Twice a number decreased by 3' mathematically?", options: ["2(x-3)", "2x - 3", "x/2 - 3", "2 + x - 3"], answer: 1, explanation: "'Twice a number' = 2x; 'decreased by 3' = -3; together: 2x - 3" },
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

export function getAllTopics(subject: Subject): Array<{ termId: string; termLabel: string; moduleId: string; moduleTitle: string; topic: Topic }> {
  const result = [];
  for (const term of subject.terms) {
    for (const mod of term.modules) {
      for (const topic of mod.topics) {
        result.push({ termId: term.id, termLabel: term.label, moduleId: mod.id, moduleTitle: mod.title, topic });
      }
    }
  }
  return result;
}

export function findTopic(subject: Subject, topicId: string): { topic: Topic; term: Term; mod: Module } | null {
  for (const term of subject.terms) {
    for (const mod of term.modules) {
      for (const topic of mod.topics) {
        if (topic.id === topicId) return { topic, term, mod };
      }
    }
  }
  return null;
}
