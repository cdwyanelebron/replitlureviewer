import { Subject } from "./types";

export const OTHER_SUBJECTS: Subject[] = [
  {
    id: "mst01",
    code: "MST 01",
    title: "Mathematics in the Modern World",
    shortTitle: "MST 01",
    units: 3,
    description: "Explores mathematics as a tool to quantify, organize, and control the world. Covers nature of mathematics, mathematical reasoning, statistics, and financial mathematics.",
    terms: [
      {
        id: "prelim", label: "PRELIM",
        modules: [
          {
            id: "mst01-m1", title: "Module 1: Mathematics in Our World",
            topics: [
              {
                id: "mst01-m1t1", title: "Patterns and Numbers in Nature",
                content: {
                  heading: "Patterns and Numbers in Nature", term: "PRELIM", module: "Module 1: Mathematics in Our World",
                  objectives: ["Identify mathematical patterns in nature", "Explain the Fibonacci sequence and Golden Ratio", "Describe fractals and symmetry in natural phenomena"],
                  sections: [
                    { type: "h2", content: "Mathematics in Nature" },
                    { type: "text", content: "Mathematics is not just a school subject — it is the universal language of nature. Mathematical patterns appear in sunflower seeds, seashells, snowflakes, and galaxies." },
                    { type: "definition", content: "Fibonacci Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89... Formula: F(n) = F(n-1) + F(n-2), where F(0)=0, F(1)=1. Each number is the sum of the two preceding numbers." },
                    { type: "example", content: "Fibonacci in Nature:\n• Sunflower seeds: 21 spirals clockwise, 34 counterclockwise\n• Pineapple scales: 8, 13, 21 spirals\n• Leaf arrangement (phyllotaxis): follows Fibonacci ratios to maximize sunlight\n• Rabbit population growth follows Fibonacci numbers" },
                    { type: "definition", content: "Golden Ratio (φ ≈ 1.618) — As Fibonacci numbers get larger, their ratio F(n+1)/F(n) approaches φ. Considered aesthetically pleasing; appears in art (Parthenon), architecture, nature (nautilus shells), and the human body." },
                    { type: "h3", content: "Types of Symmetry" },
                    { type: "table", content: "Symmetry in Nature", headers: ["Type", "Description", "Example"], rows: [["Bilateral", "Mirror image across a central axis", "Human body, butterfly wings"], ["Radial", "Arranged around a central point", "Starfish, flowers, snowflakes"], ["Rotational", "Looks the same after rotation", "Pinwheel, sunflower"], ["Translational", "Repeating pattern at regular intervals", "Honeycomb, brick wall"]] },
                    { type: "definition", content: "Fractal — A geometric shape that exhibits self-similarity at different scales. When you zoom into a fractal, you see the same pattern repeated. Examples: Romanesco broccoli, coastlines, snowflakes, fern leaves, lightning bolts." },
                  ],
                  quiz: [
                    { question: "What is the 8th term of the Fibonacci sequence (starting: 0, 1, 1, 2, 3...)?", options: ["13", "21", "8", "34"], answer: 0, explanation: "Fibonacci: 0(1st), 1(2nd), 1(3rd), 2(4th), 3(5th), 5(6th), 8(7th), 13(8th). The 8th term is 13." },
                    { question: "The Golden Ratio φ is approximately:", options: ["1.414", "1.618", "2.718", "3.14159"], answer: 1, explanation: "The Golden Ratio φ (phi) ≈ 1.618. It's the limit of ratios of consecutive Fibonacci numbers." },
                    { question: "A fractal is characterized by:", options: ["Perfect straight lines", "Self-similarity at different scales", "Random patterns", "Only existing in mathematics textbooks"], answer: 1, explanation: "Fractals exhibit self-similarity — the same pattern repeats when you zoom in or out." },
                  ],
                },
              },
              {
                id: "mst01-m1t2", title: "Mathematical Language and Symbols",
                content: {
                  heading: "Mathematical Language and Symbols", term: "PRELIM", module: "Module 1: Mathematics in Our World",
                  objectives: ["Distinguish mathematical expressions from sentences", "Understand common symbols and notation", "Translate English phrases to mathematical expressions"],
                  sections: [
                    { type: "h2", content: "The Language of Mathematics" },
                    { type: "table", content: "Expressions vs. Sentences", headers: ["Type", "Definition", "Example"], rows: [["Expression", "Mathematical phrase (no verb, no = sign)", "3x + 5, 2y², x + y"], ["Equation", "Mathematical sentence with '=' showing equality", "2x + 3 = 7"], ["Inequality", "Uses <, >, ≤, ≥", "x + 2 > 5"]] },
                    { type: "table", content: "Common Mathematical Symbols", headers: ["Symbol", "Meaning", "Example"], rows: [["∈", "Is an element of", "3 ∈ {1,2,3}"], ["∅", "Empty set", "{} = ∅"], ["∀", "For all (universal)", "∀x, x + 0 = x"], ["∃", "There exists (existential)", "∃x: x² = 4"], ["⊂", "Subset of", "{1,2} ⊂ {1,2,3}"], ["∪", "Union", "A ∪ B"], ["∩", "Intersection", "A ∩ B"]] },
                    { type: "table", content: "English to Mathematical Expressions", headers: ["English Phrase", "Math Expression"], rows: [["Sum of a number and 5", "x + 5"], ["Twice a number decreased by 3", "2x − 3"], ["Product of a number and 7", "7x"], ["A number divided by 4", "x/4"], ["Square of a number increased by 1", "x² + 1"]] },
                  ],
                  quiz: [
                    { question: "Which is a mathematical EXPRESSION (not a sentence)?", options: ["2x + 3 = 7", "x > 5", "3x + 5", "y = 2x + 1"], answer: 2, explanation: "An expression has no '=' or inequality sign. '3x + 5' is an expression; others are equations or inequalities." },
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
            id: "mst01-m2", title: "Module 2: Mathematical Reasoning and Logic",
            topics: [
              {
                id: "mst01-m2t1", title: "Inductive and Deductive Reasoning",
                content: {
                  heading: "Inductive and Deductive Reasoning", term: "MIDTERM", module: "Module 2: Mathematical Reasoning and Logic",
                  objectives: ["Distinguish inductive from deductive reasoning", "Identify valid and invalid arguments", "Apply deductive reasoning to solve problems"],
                  sections: [
                    { type: "h2", content: "Mathematical Reasoning" },
                    { type: "definition", content: "Inductive Reasoning — Drawing a general conclusion (conjecture) from specific observations or examples. Moving from specific to general. Results in probable (but not certain) conclusions." },
                    { type: "definition", content: "Deductive Reasoning — Drawing a specific conclusion from general principles or premises. Moving from general to specific. If premises are true and logic is valid, the conclusion must be true." },
                    { type: "example", content: "Inductive Reasoning Example:\nObservation 1: The sun rose in the east today.\nObservation 2: The sun rose in the east yesterday.\nObservation 3: The sun rose in the east the day before.\nConclusion: The sun always rises in the east.\n(This is inductive — based on repeated observations, not proven with certainty)\n\nDeductive Reasoning Example:\nPremise 1: All IT students study programming.\nPremise 2: Juan is an IT student.\nConclusion: Therefore, Juan studies programming.\n(This is deductive — necessarily true if premises are true)" },
                    { type: "h3", content: "Logic and Propositions" },
                    { type: "definition", content: "Proposition — A declarative statement that is either true or false, but not both. Example: 'Manila is the capital of the Philippines' (True). 'All squares are circles' (False)." },
                    { type: "table", content: "Logical Connectives", headers: ["Connective", "Symbol", "Name", "True When..."], rows: [["AND", "∧ or p∧q", "Conjunction", "Both p and q are true"], ["OR", "∨ or p∨q", "Disjunction", "At least one is true"], ["NOT", "¬p or ~p", "Negation", "p is false"], ["IF...THEN", "p→q", "Conditional", "p is false OR q is true"], ["IF AND ONLY IF", "p↔q", "Biconditional", "p and q have same truth value"]] },
                  ],
                  quiz: [
                    { question: "Which type of reasoning draws a general conclusion from specific observations?", options: ["Deductive reasoning", "Inductive reasoning", "Abductive reasoning", "Circular reasoning"], answer: 1, explanation: "Inductive reasoning moves from specific observations to a general conclusion (conjecture)." },
                    { question: "In deductive reasoning, if the premises are true and the logic is valid, the conclusion is:", options: ["Probably true", "Certainly true", "Possibly true", "Always false"], answer: 1, explanation: "Deductive reasoning guarantees the conclusion — if premises are true and logic valid, the conclusion must be true." },
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
            id: "mst01-m3", title: "Module 3: Data Analysis and Statistics",
            topics: [
              {
                id: "mst01-m3t1", title: "Descriptive Statistics",
                content: {
                  heading: "Descriptive Statistics", term: "FINALS", module: "Module 3: Data Analysis and Statistics",
                  objectives: ["Compute measures of central tendency", "Calculate measures of dispersion", "Interpret statistical data"],
                  sections: [
                    { type: "h2", content: "Descriptive Statistics" },
                    { type: "definition", content: "Statistics — The science of collecting, organizing, analyzing, and interpreting data. Descriptive statistics summarize and describe data; inferential statistics use sample data to make predictions about a population." },
                    { type: "h3", content: "Measures of Central Tendency" },
                    { type: "table", content: "Measures of Central Tendency", headers: ["Measure", "Definition", "Formula", "Best Used When..."], rows: [["Mean (Average)", "Sum of all values divided by the count", "x̄ = Σx/n", "Data is symmetrical, no extreme outliers"], ["Median", "Middle value when data is sorted", "Middle value (or avg of two middle values)", "Data has outliers or is skewed"], ["Mode", "Most frequently occurring value", "Value that appears most often", "Finding most common value (categorical data)"]] },
                    { type: "example", content: "Dataset: 72, 85, 90, 65, 85, 78, 92, 85, 70, 88\n\nMean = (72+85+90+65+85+78+92+85+70+88) / 10\n     = 810 / 10 = 81\n\nSorted: 65, 70, 72, 78, 85, 85, 85, 88, 90, 92\nMedian = (85 + 85) / 2 = 85\n\nMode = 85 (appears 3 times)" },
                    { type: "h3", content: "Measures of Dispersion" },
                    { type: "list", content: "Measures of Spread", items: ["Range = Maximum − Minimum value", "Variance = Average of squared deviations from the mean", "Standard Deviation = Square root of variance; most common measure of spread", "Interquartile Range (IQR) = Q3 − Q1; middle 50% spread"] },
                    { type: "note", content: "A small standard deviation means data points are close to the mean (consistent). A large standard deviation means data is spread out (variable). In the example above: Range = 92 − 65 = 27." },
                  ],
                  quiz: [
                    { question: "Which measure of central tendency is most affected by outliers?", options: ["Median", "Mode", "Mean", "Range"], answer: 2, explanation: "The mean is most sensitive to outliers — one very large or small value can significantly change the mean." },
                    { question: "For the data set 5, 7, 7, 8, 9, the MODE is:", options: ["7", "8", "7.2", "5"], answer: 0, explanation: "The mode is the most frequently occurring value. 7 appears twice, all others once. Mode = 7." },
                    { question: "Standard deviation measures:", options: ["The middle value of a data set", "How spread out the data is around the mean", "The most common value", "The range from min to max"], answer: 1, explanation: "Standard deviation measures the average distance of data points from the mean — a measure of variability or spread." },
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
    id: "mst02",
    code: "MST 02",
    title: "Statistics and Probability",
    shortTitle: "MST 02",
    units: 3,
    description: "A comprehensive study of probability theory, probability distributions, statistical inference, hypothesis testing, and correlation and regression analysis.",
    terms: [
      {
        id: "prelim", label: "PRELIM",
        modules: [
          {
            id: "mst02-m1", title: "Module 1: Probability Theory",
            topics: [
              {
                id: "mst02-m1t1", title: "Basic Concepts of Probability",
                content: {
                  heading: "Basic Concepts of Probability", term: "PRELIM", module: "Module 1: Probability Theory",
                  objectives: ["Define probability and basic terms", "Apply classical and empirical probability", "Use counting techniques: permutations and combinations"],
                  sections: [
                    { type: "h2", content: "Introduction to Probability" },
                    { type: "definition", content: "Probability — A numerical measure of the likelihood that an event will occur. Expressed as a number between 0 (impossible) and 1 (certain), or as a percentage (0% to 100%)." },
                    { type: "h3", content: "Key Terms" },
                    { type: "table", content: "Probability Terminology", headers: ["Term", "Definition", "Example"], rows: [["Experiment", "A process that produces an outcome", "Rolling a die"], ["Sample Space (S)", "Set of all possible outcomes", "S = {1, 2, 3, 4, 5, 6}"], ["Event", "A subset of the sample space", "E = {even numbers} = {2, 4, 6}"], ["Outcome", "A single result of an experiment", "Rolling a 4"], ["Probability of Event E", "P(E) = favorable outcomes / total outcomes", "P(even) = 3/6 = 1/2"]] },
                    { type: "h3", content: "Types of Probability" },
                    { type: "list", content: "Three Types of Probability", items: ["Classical (Theoretical) — Based on equally likely outcomes. P(E) = n(E)/n(S)", "Empirical (Experimental) — Based on actual observations. P(E) = frequency of E / total trials", "Subjective — Based on personal judgment or experience. Example: 'There's a 70% chance of rain today'"] },
                    { type: "h3", content: "Counting Techniques" },
                    { type: "definition", content: "Fundamental Counting Principle — If event A can occur in m ways and event B can occur in n ways, then both events can occur in m × n ways.\n\nExample: 3 shirts × 4 pants = 12 possible outfits" },
                    { type: "definition", content: "Permutation — An arrangement of objects where ORDER MATTERS.\nFormula: P(n,r) = n! / (n−r)!\nExample: How many 3-letter codes from {A,B,C,D,E}? P(5,3) = 5×4×3 = 60" },
                    { type: "definition", content: "Combination — A selection of objects where ORDER DOES NOT MATTER.\nFormula: C(n,r) = n! / [r!(n−r)!]\nExample: Choosing 3 students from 5 for a committee: C(5,3) = 10" },
                  ],
                  quiz: [
                    { question: "What is the probability of rolling an even number on a standard die?", options: ["1/6", "1/3", "1/2", "2/3"], answer: 2, explanation: "Even numbers: {2, 4, 6} = 3 outcomes. Total outcomes = 6. P(even) = 3/6 = 1/2." },
                    { question: "In a Permutation, what is important?", options: ["The size of the group selected", "The ORDER of the arrangement", "Whether all elements are selected", "The type of objects chosen"], answer: 1, explanation: "Permutations are arrangements where ORDER MATTERS. Selecting A,B,C is different from C,B,A in a permutation." },
                    { question: "P(5,2) equals:", options: ["10", "20", "5", "15"], answer: 1, explanation: "P(5,2) = 5! / (5-2)! = 5! / 3! = 5 × 4 = 20" },
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
            id: "mst02-m2", title: "Module 2: Probability Distributions",
            topics: [
              {
                id: "mst02-m2t1", title: "Normal Distribution",
                content: {
                  heading: "Normal Distribution", term: "MIDTERM", module: "Module 2: Probability Distributions",
                  objectives: ["Describe the properties of the normal distribution", "Standardize values using z-scores", "Find probabilities using the standard normal table"],
                  sections: [
                    { type: "h2", content: "The Normal Distribution" },
                    { type: "definition", content: "Normal Distribution — A continuous probability distribution that is symmetrical about the mean, shaped like a bell curve. Also called the Gaussian distribution." },
                    { type: "list", content: "Properties of the Normal Distribution", items: ["Bell-shaped and symmetrical about the mean", "Mean = Median = Mode (all equal)", "Total area under the curve = 1 (100%)", "Curve extends infinitely in both directions but never touches the x-axis", "Defined by two parameters: mean (μ) and standard deviation (σ)"] },
                    { type: "h3", content: "The Empirical Rule (68-95-99.7 Rule)" },
                    { type: "table", content: "Empirical Rule", headers: ["Range", "% of Data"], rows: [["μ ± 1σ", "Approximately 68% of data"], ["μ ± 2σ", "Approximately 95% of data"], ["μ ± 3σ", "Approximately 99.7% of data"]] },
                    { type: "h3", content: "Z-Score (Standard Score)" },
                    { type: "definition", content: "Z-Score — The number of standard deviations a data point is from the mean.\nFormula: z = (x − μ) / σ\nwhere x = observed value, μ = mean, σ = standard deviation" },
                    { type: "example", content: "Example: Exam scores are normally distributed with mean μ = 75 and σ = 10.\n\nWhat is the z-score for a score of 85?\nz = (85 − 75) / 10 = 10/10 = 1.0\n\nA score of 85 is 1 standard deviation above the mean.\nUsing the empirical rule: about 84% of scores fall below 85." },
                  ],
                  quiz: [
                    { question: "In a normal distribution, what percentage of data falls within 2 standard deviations of the mean?", options: ["68%", "95%", "99.7%", "50%"], answer: 1, explanation: "The Empirical Rule: μ ± 1σ = 68%; μ ± 2σ = 95%; μ ± 3σ = 99.7%" },
                    { question: "A z-score of -1.5 means the data point is:", options: ["1.5 standard deviations above the mean", "1.5 standard deviations below the mean", "1.5 units from the median", "In the top 1.5% of the distribution"], answer: 1, explanation: "A negative z-score means the value is below the mean. z = -1.5 means 1.5 standard deviations below the mean." },
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
            id: "mst02-m3", title: "Module 3: Hypothesis Testing",
            topics: [
              {
                id: "mst02-m3t1", title: "Introduction to Hypothesis Testing",
                content: {
                  heading: "Introduction to Hypothesis Testing", term: "FINALS", module: "Module 3: Hypothesis Testing",
                  objectives: ["Define hypothesis testing and its steps", "Distinguish null and alternative hypotheses", "Interpret p-values and significance levels"],
                  sections: [
                    { type: "h2", content: "Hypothesis Testing" },
                    { type: "definition", content: "Hypothesis Testing — A statistical procedure for testing a claim about a population parameter using sample data. It helps determine if observed results are due to chance or reflect a real effect." },
                    { type: "h3", content: "Types of Hypotheses" },
                    { type: "definition", content: "Null Hypothesis (H₀) — The default assumption of 'no effect' or 'no difference.' We test whether there is enough evidence to REJECT it.\n\nAlternative Hypothesis (H₁ or Hₐ) — The claim we want to support. It contradicts H₀." },
                    { type: "example", content: "Example: Testing if a new teaching method improves exam scores.\n\nH₀: The new method makes no difference. μ = 75\nH₁: The new method improves scores. μ > 75\n\nThis is a right-tailed (one-tailed) test." },
                    { type: "h3", content: "Steps in Hypothesis Testing" },
                    { type: "list", content: "Steps in Hypothesis Testing", items: ["1. State H₀ and H₁", "2. Set the significance level (α) — usually 0.05 or 5%", "3. Select the appropriate test statistic (z-test, t-test, chi-square)", "4. Compute the test statistic from sample data", "5. Find the p-value or compare test statistic to critical value", "6. Make a decision: Reject H₀ if p-value < α; otherwise Fail to Reject H₀", "7. State the conclusion in context"] },
                    { type: "definition", content: "p-value — The probability of obtaining results as extreme as observed, assuming H₀ is true. A small p-value (< α) provides evidence against H₀. If p < 0.05, reject H₀ at the 5% significance level." },
                    { type: "table", content: "Types of Errors in Hypothesis Testing", headers: ["Error Type", "Description", "Consequence"], rows: [["Type I Error (α)", "Rejecting a TRUE H₀ (false positive)", "Claiming an effect exists when it doesn't"], ["Type II Error (β)", "Failing to reject a FALSE H₀ (false negative)", "Missing a real effect"]] },
                  ],
                  quiz: [
                    { question: "The null hypothesis (H₀) represents:", options: ["The research hypothesis we want to prove", "The assumption of no effect or no difference", "The conclusion after testing", "The significance level"], answer: 1, explanation: "H₀ is the null hypothesis — the default assumption of no effect or no difference that we test against." },
                    { question: "If p-value = 0.03 and α = 0.05, we should:", options: ["Fail to reject H₀", "Reject H₀", "Accept H₁ as proven", "Repeat the experiment"], answer: 1, explanation: "Since p-value (0.03) < α (0.05), we reject H₀. The evidence is statistically significant." },
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
    id: "nstp1",
    code: "NSTP 1",
    title: "National Service Training Program 1",
    shortTitle: "NSTP 1",
    units: 3,
    description: "Develops civic consciousness and defense preparedness. Enhances civic awareness, community service skills, patriotism, and nation-building among college students.",
    terms: [
      {
        id: "prelim", label: "PRELIM",
        modules: [
          {
            id: "nstp1-m1", title: "Module 1: Introduction to NSTP",
            topics: [
              {
                id: "nstp1-m1t1", title: "NSTP Law (RA 9163) and History",
                content: {
                  heading: "NSTP Law (RA 9163) and History", term: "PRELIM", module: "Module 1: Introduction to NSTP",
                  objectives: ["Explain the legal basis and history of NSTP", "Identify the three components of NSTP", "Distinguish ROTC, CWTS, and LTS"],
                  sections: [
                    { type: "h2", content: "Republic Act 9163: The NSTP Act of 2001" },
                    { type: "definition", content: "NSTP (National Service Training Program) — Mandated by RA 9163, this program aims to enhance civic consciousness and defense preparedness among the youth, develop ethics of service and patriotism, and encourage civic participation in nation-building." },
                    { type: "table", content: "Three Components of NSTP", headers: ["Component", "Full Name", "Focus"], rows: [["ROTC", "Reserve Officers' Training Corps", "Military science and national defense"], ["CWTS", "Civic Welfare Training Service", "Community service and social development"], ["LTS", "Literacy Training Service", "Teaching literacy and numeracy to out-of-school youth and adults"]] },
                    { type: "list", content: "Objectives of NSTP", items: ["Promote physical, moral, spiritual, intellectual, and social well-being of youth", "Train students to become civic-spirited and responsible citizens", "Inculcate patriotism and nationalism", "Advance youth leadership and citizenship", "Foster love of country and nation-building participation"] },
                    { type: "note", content: "RA 9163 requires ALL incoming college freshmen — male AND female — to complete NSTP for 2 semesters. Students may choose any one of the three components. The law was enacted following public outcry over hazing incidents in ROTC (2001 Caltex ROTC hazing incident)." },
                    { type: "h3", content: "Historical Background" },
                    { type: "text", content: "Before RA 9163, only ROTC (compulsory for male students) was required. The law replaced this single military requirement with three options, broadening the scope to include civic welfare and literacy training — recognizing that national service goes beyond military preparedness." },
                  ],
                  quiz: [
                    { question: "What Republic Act established the NSTP?", options: ["RA 7722", "RA 8294", "RA 9163", "RA 10121"], answer: 2, explanation: "Republic Act 9163, the NSTP Act of 2001, established the National Service Training Program." },
                    { question: "Which NSTP component focuses on teaching literacy to out-of-school youth?", options: ["ROTC", "CWTS", "LTS", "AFP Reserves"], answer: 2, explanation: "LTS (Literacy Training Service) focuses on teaching literacy and numeracy skills to out-of-school youth and adults." },
                    { question: "NSTP under RA 9163 is required for:", options: ["Male students only", "All incoming freshmen regardless of gender", "College seniors only", "Graduate students"], answer: 1, explanation: "RA 9163 requires ALL incoming college freshmen — both male and female — to complete NSTP." },
                  ],
                },
              },
            ],
          },
          {
            id: "nstp1-m2", title: "Module 2: Filipino Values and National Identity",
            topics: [
              {
                id: "nstp1-m2t1", title: "Filipino Values and Character",
                content: {
                  heading: "Filipino Values and Character", term: "PRELIM", module: "Module 2: Filipino Values and National Identity",
                  objectives: ["Identify core Filipino values and cultural origins", "Analyze both positive and negative Filipino values", "Explain how values contribute to national development"],
                  sections: [
                    { type: "h2", content: "Filipino Core Values" },
                    { type: "list", content: "Positive Filipino Values", items: ["Bayanihan — Spirit of communal unity and cooperation", "Pakikipagkapwa — Treating others as equal human beings; empathy", "Paggalang — Respect for elders and authority (po, opo)", "Pagmamahal sa pamilya — Strong family orientation", "Pagtitiis — Perseverance and endurance; resilience", "Utang na loob — Debt of gratitude and reciprocity", "Malasakit — Genuine concern for others' welfare"] },
                    { type: "definition", content: "Bayanihan — Filipino practice of communal work and unity. Historically demonstrated when neighbors help a family move their house together. Represents selfless cooperation for the common good." },
                    { type: "h3", content: "Negative Filipino Traits to Overcome" },
                    { type: "list", content: "Negative Cultural Tendencies", items: ["Kanya-kanya syndrome — Selfishness; putting personal gain over common good", "Crab mentality (Talangka mentality) — Pulling others down to prevent their success", "Manana habit (Mamaya na) — Procrastination; deferring tasks", "Ningas-kugon — Starting with enthusiasm but losing interest quickly", "Colonial mentality — Favoring foreign over Filipino products/culture", "Bahala na — Fatalistic attitude of leaving things to fate", "Pakikisama (excessive) — Conformity to group even against one's better judgment"] },
                    { type: "note", content: "These negative traits are not inherent to Filipinos — they are products of historical circumstances, colonial experience, and social conditioning. Understanding them is the first step toward positive change and national progress." },
                  ],
                  quiz: [
                    { question: "'Bayanihan' best represents:", options: ["Individual achievement", "Communal unity and cooperative work", "Respect for colonial influences", "Religious devotion"], answer: 1, explanation: "Bayanihan is the Filipino spirit of communal unity — working together for the common good." },
                    { question: "'Ningas-kugon' means:", options: ["Strong perseverance until completion", "Starting enthusiastically but losing interest quickly", "Leaving everything to fate", "Excessive dependence on foreign products"], answer: 1, explanation: "Ningas-kugon (named after cogon grass that burns briefly) = starting with enthusiasm but abandoning tasks before completion." },
                    { question: "The 'Kanya-kanya syndrome' refers to:", options: ["Extreme patriotism", "Pulling others down", "Selfishness and prioritizing personal gain over collective good", "Excessive community spirit"], answer: 2, explanation: "Kanya-kanya syndrome is selfishness — prioritizing personal gain even at the expense of community welfare." },
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
            id: "nstp1-m3", title: "Module 3: Disaster Risk Reduction and Management",
            topics: [
              {
                id: "nstp1-m3t1", title: "DRRM Fundamentals",
                content: {
                  heading: "Disaster Risk Reduction and Management (DRRM)", term: "MIDTERM", module: "Module 3: Disaster Risk Reduction and Management",
                  objectives: ["Define disaster and its types", "Explain RA 10121 (PDRRM Act)", "Identify disaster preparedness measures"],
                  sections: [
                    { type: "h2", content: "Disaster Risk Reduction and Management" },
                    { type: "definition", content: "Disaster — A serious disruption of the functioning of a community or society involving widespread human, material, economic, or environmental losses and impacts exceeding the ability to cope using its own resources." },
                    { type: "h3", content: "RA 10121: Philippine DRRM Act of 2010" },
                    { type: "text", content: "Republic Act 10121 (Philippine Disaster Risk Reduction and Management Act of 2010) established the National Disaster Risk Reduction and Management Council (NDRRMC) and DRRM offices at all levels of government." },
                    { type: "list", content: "Four Thematic Areas of DRRM (RA 10121)", items: ["Disaster Prevention and Mitigation — Reducing exposure and vulnerability before disasters", "Disaster Preparedness — Readiness for effective response when disasters occur", "Disaster Response — Providing timely assistance during disasters", "Disaster Rehabilitation and Recovery — Restoring and improving communities post-disaster"] },
                    { type: "h3", content: "Natural Hazards in the Philippines" },
                    { type: "table", content: "Common Philippine Natural Hazards", headers: ["Hazard", "Affected Areas", "Key Agencies"], rows: [["Typhoon/Bagyo", "Entire Philippines (especially Luzon and Visayas)", "PAGASA, NDRRMC"], ["Earthquake", "Entire Philippines (Ring of Fire)", "PHIVOLCS"], ["Volcanic Eruption", "Luzon (Mayon, Taal, Pinatubo area)", "PHIVOLCS"], ["Flood", "Low-lying areas, river basins", "NDRRMC, LGUs"], ["Landslide", "Mountainous areas, deforested slopes", "Mines and Geosciences Bureau"]] },
                    { type: "note", content: "The Philippines is one of the most disaster-prone countries in the world, located along the Pacific Ring of Fire and the Pacific typhoon belt. It experiences an average of 20 typhoons per year and is prone to earthquakes and volcanic eruptions." },
                  ],
                  quiz: [
                    { question: "RA 10121 is known as:", options: ["The NSTP Act", "The Philippine DRRM Act of 2010", "The Civil Defense Act", "The Disaster Relief Act"], answer: 1, explanation: "RA 10121 is the Philippine Disaster Risk Reduction and Management Act of 2010, creating the NDRRMC." },
                    { question: "Which is NOT one of the four thematic areas of DRRM under RA 10121?", options: ["Prevention and Mitigation", "Preparedness", "Response", "Construction"], answer: 3, explanation: "The four areas are: Prevention and Mitigation, Preparedness, Response, and Rehabilitation and Recovery. 'Construction' is not one of them." },
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
            id: "nstp1-m4", title: "Module 4: Community Service and Leadership",
            topics: [
              {
                id: "nstp1-m4t1", title: "Leadership and Community Development",
                content: {
                  heading: "Leadership and Community Development", term: "FINALS", module: "Module 4: Community Service and Leadership",
                  objectives: ["Define leadership and identify leadership styles", "Explain community development principles", "Apply leadership skills to community service projects"],
                  sections: [
                    { type: "h2", content: "Leadership in Community Service" },
                    { type: "definition", content: "Leadership — The ability to guide, inspire, and influence others toward achieving a common goal. Effective leaders in community service mobilize people for collective action and positive social change." },
                    { type: "table", content: "Leadership Styles", headers: ["Style", "Description", "Best For"], rows: [["Autocratic/Authoritarian", "Leader makes all decisions; top-down", "Emergencies; crisis situations"], ["Democratic/Participative", "Leader involves team in decision-making", "Collaborative projects; diverse expertise"], ["Laissez-faire", "Leader provides minimal direction; team has freedom", "Expert, highly motivated teams"], ["Transformational", "Leader inspires through vision and passion", "Change initiatives; motivating teams"], ["Servant Leadership", "Leader prioritizes the needs of others", "Community service; non-profit organizations"]] },
                    { type: "h3", content: "Community Development" },
                    { type: "definition", content: "Community Development — A process where community members identify shared needs and work collectively to address them, building capacity and improving quality of life. It emphasizes participation, empowerment, and sustainability." },
                    { type: "list", content: "Principles of Community Development", items: ["Participation — Community members actively involved in decisions", "Empowerment — Building community capacity for self-reliance", "Sustainability — Programs continue beyond initial intervention", "Social Justice — Equitable distribution of resources and opportunities", "Cultural Sensitivity — Respecting local traditions and practices"] },
                  ],
                  quiz: [
                    { question: "Which leadership style is most appropriate for emergency disaster response?", options: ["Democratic", "Laissez-faire", "Autocratic/Authoritarian", "Transformational"], answer: 2, explanation: "Autocratic leadership is effective in emergencies where quick, decisive commands are needed without lengthy discussion." },
                    { question: "Servant leadership is characterized by:", options: ["Making all decisions unilaterally", "The leader prioritizing the needs of others and the community", "Giving maximum freedom to the team", "Using authority and power to motivate"], answer: 1, explanation: "Servant leadership prioritizes serving others first — ideal for community service and non-profit work." },
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
    id: "nstp2",
    code: "NSTP 2",
    title: "National Service Training Program 2",
    shortTitle: "NSTP 2",
    units: 3,
    description: "Continuation of NSTP 1. Focuses on community immersion, service project planning and implementation, and deepening civic engagement and patriotism.",
    terms: [
      {
        id: "prelim", label: "PRELIM",
        modules: [
          {
            id: "nstp2-m1", title: "Module 1: Community Needs Assessment",
            topics: [
              {
                id: "nstp2-m1t1", title: "Community Needs Assessment (CNA)",
                content: {
                  heading: "Community Needs Assessment", term: "PRELIM", module: "Module 1: Community Needs Assessment",
                  objectives: ["Define community needs assessment and its purpose", "Apply data collection methods for CNA", "Analyze CNA results to prioritize community needs"],
                  sections: [
                    { type: "h2", content: "Community Needs Assessment (CNA)" },
                    { type: "definition", content: "Community Needs Assessment (CNA) — A systematic process of gathering and analyzing information about a community's current situation to identify gaps between what exists and what is needed. It guides planning of appropriate interventions." },
                    { type: "h3", content: "Purpose of CNA" },
                    { type: "list", content: "Why Conduct a CNA?", items: ["Identify the actual needs of the community (not assumed needs)", "Prioritize needs based on urgency and resources", "Gather data to design effective community projects", "Establish a baseline for measuring project impact", "Ensure community participation in the planning process"] },
                    { type: "h3", content: "Data Collection Methods" },
                    { type: "table", content: "CNA Data Collection Methods", headers: ["Method", "Description", "Advantages"], rows: [["Survey/Questionnaire", "Structured questions given to community members", "Quantitative data; can reach many people"], ["Interview", "In-depth one-on-one or group conversation", "Rich qualitative data; explores perspectives"], ["Focus Group Discussion (FGD)", "Small group discussion on specific topics", "Multiple perspectives; interactive"], ["Observation", "Directly observing conditions and behaviors", "First-hand information; non-intrusive"], ["Secondary Data Review", "Analyzing existing records and reports", "Cost-effective; provides historical context"]] },
                    { type: "note", content: "The Barangay Development Plan (BDP) and the Annual Investment Plan (AIP) of LGUs contain community data that can be used as secondary sources for CNA. NSTP students should coordinate with the Barangay Hall before conducting community assessments." },
                  ],
                  quiz: [
                    { question: "A Community Needs Assessment helps primarily to:", options: ["Determine the GDP of a community", "Identify gaps between what exists and what is needed in a community", "Evaluate students' NSTP performance", "Establish barangay governance structures"], answer: 1, explanation: "CNA systematically identifies the community's actual needs — the gaps between current conditions and desired conditions." },
                    { question: "A Focus Group Discussion (FGD) is best described as:", options: ["One-on-one structured interview", "Small group discussion on specific topics to gather qualitative data", "A written questionnaire distributed to the community", "Direct observation of community behaviors"], answer: 1, explanation: "FGD involves a small group discussing specific topics — it gathers multiple qualitative perspectives interactively." },
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
            id: "nstp2-m2", title: "Module 2: Community Service Project Planning",
            topics: [
              {
                id: "nstp2-m2t1", title: "Project Planning and Implementation",
                content: {
                  heading: "Community Service Project Planning", term: "MIDTERM", module: "Module 2: Community Service Project Planning",
                  objectives: ["Develop a community service project plan", "Apply project management tools to community service", "Monitor and evaluate community projects"],
                  sections: [
                    { type: "h2", content: "Community Service Project Planning" },
                    { type: "text", content: "A community service project must be carefully planned, implemented, monitored, and evaluated to ensure it creates a real positive impact for the target community." },
                    { type: "h3", content: "Project Planning Framework" },
                    { type: "list", content: "Key Elements of a Community Project Plan", items: ["Project Title — Clear, descriptive name", "Project Background — Rationale/justification based on CNA", "Project Objectives — SMART: Specific, Measurable, Achievable, Realistic, Time-bound", "Target Beneficiaries — Who will benefit", "Activities — Step-by-step tasks to achieve objectives", "Timeline — Schedule using Gantt chart", "Budget — Estimated costs and sources of funding", "Monitoring and Evaluation (M&E) — How success will be measured"] },
                    { type: "definition", content: "SMART Objectives — Specific (clear and well-defined), Measurable (can be quantified), Achievable (realistic given resources), Relevant (addresses the identified need), Time-bound (has a deadline)." },
                    { type: "example", content: "Good SMART Objective:\n'Conduct a literacy tutoring session for 30 out-of-school youth in Barangay San Jose every Saturday from March 1 to May 31, 2025, improving their reading level from Grade 1 to Grade 3 as measured by a pre-post test.'" },
                    { type: "h3", content: "Gantt Chart" },
                    { type: "text", content: "A Gantt chart is a horizontal bar chart that visually shows project activities against time. It helps teams see the schedule, identify overlapping tasks, track progress, and ensure milestones are met." },
                  ],
                  quiz: [
                    { question: "SMART in project objectives stands for:", options: ["Simple, Manageable, Achievable, Real, Timely", "Specific, Measurable, Achievable, Relevant, Time-bound", "Strategic, Meaningful, Aligned, Reasonable, Thorough", "Short, Measurable, Actionable, Reliable, Tracked"], answer: 1, explanation: "SMART = Specific, Measurable, Achievable, Relevant, Time-bound — criteria for well-defined project objectives." },
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
            id: "nstp2-m3", title: "Module 3: Environmental Awareness and Conservation",
            topics: [
              {
                id: "nstp2-m3t1", title: "Environmental Stewardship",
                content: {
                  heading: "Environmental Stewardship", term: "FINALS", module: "Module 3: Environmental Awareness and Conservation",
                  objectives: ["Describe key environmental laws in the Philippines", "Apply principles of environmental stewardship", "Plan community-based environmental projects"],
                  sections: [
                    { type: "h2", content: "Environmental Stewardship" },
                    { type: "definition", content: "Environmental Stewardship — The responsible use and protection of the natural environment through conservation and sustainable practices. It recognizes that the environment is a shared heritage to be protected for future generations." },
                    { type: "h3", content: "Key Philippine Environmental Laws" },
                    { type: "table", content: "Philippine Environmental Laws", headers: ["Law", "Description"], rows: [["RA 9003 — Ecological Solid Waste Management Act (2001)", "Requires segregation of waste and establishment of MRFs"], ["RA 8749 — Clean Air Act (1999)", "Addresses air pollution from vehicles and industries"], ["RA 9275 — Clean Water Act (2004)", "Protects water bodies from pollution"], ["RA 7586 — NIPAS Act (1992)", "Establishes National Integrated Protected Areas System"], ["PD 1586 — EIS System", "Requires Environmental Impact Statement for major projects"]] },
                    { type: "h3", content: "The 3Rs and Beyond" },
                    { type: "list", content: "Waste Hierarchy (Most to Least Preferred)", items: ["Refuse — Avoid purchasing what you don't need", "Reduce — Minimize waste generation", "Reuse — Use items multiple times", "Recycle — Process waste into new products", "Recover — Extract energy from waste (waste-to-energy)", "Rot — Composting organic waste", "Responsible Disposal — Sanitary landfill as last resort"] },
                    { type: "note", content: "In the Philippines, RA 9003 prohibits open burning, open dumping, and throwing of garbage in waterways. LGUs are required to operate Materials Recovery Facilities (MRFs) for waste segregation and recycling." },
                  ],
                  quiz: [
                    { question: "RA 9003 is the Philippine law on:", options: ["Clean Air", "Clean Water", "Ecological Solid Waste Management", "Protected Areas"], answer: 2, explanation: "RA 9003 (Ecological Solid Waste Management Act, 2001) requires waste segregation, MRFs, and prohibits open dumping and burning." },
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
    id: "pe1",
    code: "PE 1",
    title: "Physical Education 1 (Movement Enhancement)",
    shortTitle: "PE 1",
    units: 2,
    description: "Develops fundamental movement skills, physical fitness, and a healthy lifestyle. Covers wellness concepts, fitness components, and basic exercise principles.",
    terms: [
      {
        id: "prelim", label: "PRELIM",
        modules: [
          {
            id: "pe1-m1", title: "Module 1: Health and Wellness Concepts",
            topics: [
              {
                id: "pe1-m1t1", title: "Health, Wellness, and Fitness",
                content: {
                  heading: "Health, Wellness, and Fitness", term: "PRELIM", module: "Module 1: Health and Wellness Concepts",
                  objectives: ["Define health, wellness, and physical fitness", "Identify the dimensions of wellness", "Distinguish between health-related and skill-related fitness components"],
                  sections: [
                    { type: "h2", content: "Health, Wellness, and Physical Fitness" },
                    { type: "definition", content: "Health (WHO Definition) — 'A state of complete physical, mental, and social well-being and not merely the absence of disease or infirmity.' It encompasses the whole person, not just the physical body." },
                    { type: "definition", content: "Wellness — An active, ongoing process of making choices toward a healthier and more fulfilling life. It is multidimensional and goes beyond the absence of illness." },
                    { type: "definition", content: "Physical Fitness — The ability to perform daily activities with vigor and without undue fatigue, with energy remaining for leisure activities. Achieved through regular exercise, proper nutrition, and adequate rest." },
                    { type: "h3", content: "Dimensions of Wellness" },
                    { type: "list", content: "Seven Dimensions of Wellness", items: ["Physical — Proper nutrition, regular exercise, adequate sleep, avoiding harmful behaviors", "Emotional — Managing emotions effectively; self-awareness; resilience", "Social — Healthy relationships; communication; community connections", "Intellectual — Lifelong learning; creativity; critical thinking", "Spiritual — Sense of purpose; values; meaning in life", "Environmental — Living in harmony with the earth; protecting the environment", "Occupational/Vocational — Satisfaction and enrichment from work or studies"] },
                    { type: "h3", content: "Components of Physical Fitness" },
                    { type: "table", content: "Health-Related vs. Skill-Related Fitness", headers: ["Category", "Components"], rows: [["Health-Related Fitness (CAVE-F)", "Cardiovascular Endurance, Muscular Strength, Muscular Endurance, Flexibility, Body Composition"], ["Skill-Related Fitness (BAC-PRS)", "Balance, Agility, Coordination, Power, Reaction Time, Speed"]] },
                  ],
                  quiz: [
                    { question: "According to the WHO, health is:", options: ["The absence of disease only", "A state of complete physical, mental, and social well-being", "Being able to exercise without pain", "Having a normal BMI"], answer: 1, explanation: "WHO defines health as 'a state of complete physical, mental, and social well-being and not merely the absence of disease.'" },
                    { question: "Cardiovascular endurance is classified as:", options: ["A skill-related fitness component", "A health-related fitness component", "A performance-related skill", "A recreational activity"], answer: 1, explanation: "Cardiovascular endurance is a health-related fitness component — directly related to overall health and disease prevention." },
                    { question: "Which is a SKILL-RELATED fitness component?", options: ["Muscular strength", "Flexibility", "Body composition", "Agility"], answer: 3, explanation: "Agility (ability to change direction quickly) is skill-related. Muscular strength, flexibility, and body composition are health-related." },
                  ],
                },
              },
              {
                id: "pe1-m1t2", title: "Exercise Principles and FITT",
                content: {
                  heading: "Exercise Principles and FITT", term: "PRELIM", module: "Module 1: Health and Wellness Concepts",
                  objectives: ["Explain the principles of exercise training", "Apply the FITT principle to design exercise programs", "Describe the phases of an exercise session"],
                  sections: [
                    { type: "h2", content: "Principles of Exercise Training" },
                    { type: "list", content: "Principles of Training", items: ["Overload — Must exercise beyond your current level to improve (progressive overload)", "Specificity — Train specifically for your goal (runners train by running, not swimming)", "Progression — Gradually increase intensity, frequency, or duration over time", "Reversibility — Fitness gains are lost when you stop training ('use it or lose it')", "Individuality — Each person responds differently to the same training", "Rest and Recovery — Adequate rest is needed for muscles to repair and grow"] },
                    { type: "h3", content: "FITT Principle" },
                    { type: "table", content: "FITT Principle", headers: ["Component", "Definition", "Cardiovascular Recommendation"], rows: [["Frequency (F)", "How often you exercise", "3–5 days per week"], ["Intensity (I)", "How hard you exercise", "Moderate (50–70% max heart rate)"], ["Time/Duration (T)", "How long each session lasts", "20–60 minutes"], ["Type (T)", "What kind of exercise", "Aerobic activities (walking, running, swimming)"]] },
                    { type: "h3", content: "Target Heart Rate" },
                    { type: "definition", content: "Maximum Heart Rate (MHR) = 220 − Age\nTarget Heart Rate Zone = 50–85% of MHR\n\nFor a 19-year-old: MHR = 220 − 19 = 201 bpm\nTarget zone = 100.5 to 170.85 bpm" },
                    { type: "h3", content: "Phases of an Exercise Session" },
                    { type: "list", content: "Three Phases", items: ["Warm-Up (5–10 min) — Gradual increase in activity; prepares body for exercise; reduces injury risk", "Main Activity (20–60 min) — The actual exercise at target intensity", "Cool-Down (5–10 min) — Gradual decrease in activity; returns body to resting state; prevents blood pooling"] },
                  ],
                  quiz: [
                    { question: "The FITT principle stands for:", options: ["Fitness, Intensity, Training, Tempo", "Frequency, Intensity, Time, Type", "Force, Interval, Tolerance, Training", "Frequency, Interval, Training, Time"], answer: 1, explanation: "FITT = Frequency (how often), Intensity (how hard), Time (how long), Type (what kind of exercise)." },
                    { question: "The Overload principle in exercise means:", options: ["Exercising until you are exhausted", "Training at a level beyond your current capacity to stimulate improvement", "Always using heavy weights", "Exercising every day without rest"], answer: 1, explanation: "The Overload principle: To improve, you must exercise at a level that challenges your current capacity — gradually increasing the demand." },
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
            id: "pe1-m2", title: "Module 2: Physical Activities and Sports",
            topics: [
              {
                id: "pe1-m2t1", title: "Individual and Dual Sports",
                content: {
                  heading: "Individual and Dual Sports", term: "MIDTERM", module: "Module 2: Physical Activities and Sports",
                  objectives: ["Identify common individual and dual sports", "Explain basic rules of selected sports", "Apply fundamental skills in physical activity"],
                  sections: [
                    { type: "h2", content: "Sports Classification" },
                    { type: "table", content: "Sports Classification", headers: ["Category", "Description", "Examples"], rows: [["Individual Sports", "Competed alone against other individuals or course", "Swimming, athletics (track & field), gymnastics, tennis (singles)"], ["Dual Sports", "Competed between two players or two teams of equal small numbers", "Badminton, table tennis, chess, tennis (doubles)"], ["Team Sports", "Competed between teams of multiple players", "Basketball, volleyball, football, softball"]] },
                    { type: "h3", content: "Badminton Basics" },
                    { type: "list", content: "Basic Badminton Rules", items: ["Court: 13.4m × 6.1m (doubles); 13.4m × 5.18m (singles)", "Scoring: Rally point system; first to 21 points wins a game (lead of 2 required)", "Serve: Must be diagonal; shuttle below server's waist", "Rally continues until shuttle lands on court or hits net", "Match: Best of 3 games"] },
                    { type: "h3", content: "Table Tennis Basics" },
                    { type: "list", content: "Basic Table Tennis Rules", items: ["Points scored by opponent missing, hitting table edge, or double-bouncing on own side", "Games: First to 11 points (lead of 2); Match: best of 5 or 7 games", "Serve: Toss ball 16cm high, hit from flat open palm; must bounce on server's side first"] },
                  ],
                  quiz: [
                    { question: "Badminton uses which scoring system?", options: ["Sideout scoring", "Rally point scoring (21 points)", "Deuce/advantage scoring", "15-30-40 scoring"], answer: 1, explanation: "Badminton uses rally point scoring — any rally can score a point. First to 21 wins (must lead by 2)." },
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
            id: "pe1-m3", title: "Module 3: Fitness Testing and Lifestyle",
            topics: [
              {
                id: "pe1-m3t1", title: "Fitness Assessment and Healthy Lifestyle",
                content: {
                  heading: "Fitness Assessment and Healthy Lifestyle", term: "FINALS", module: "Module 3: Fitness Testing and Lifestyle",
                  objectives: ["Conduct and interpret fitness tests", "Calculate and interpret BMI", "Design a personal physical activity plan"],
                  sections: [
                    { type: "h2", content: "Fitness Assessment" },
                    { type: "text", content: "Regular fitness assessment helps track progress and design appropriate exercise programs. Key tests measure different health-related fitness components." },
                    { type: "table", content: "Common Fitness Tests", headers: ["Test", "Fitness Component", "Procedure"], rows: [["3-Minute Step Test", "Cardiovascular endurance", "Step up and down a 30cm step for 3 minutes; measure recovery HR"], ["1-Mile Run/Walk", "Cardiovascular endurance", "Complete 1 mile as fast as possible"], ["Push-up Test", "Muscular endurance/strength (upper body)", "Max push-ups without rest"], ["Sit-up/Crunch Test", "Muscular endurance (core)", "Max sit-ups in 1 minute"], ["Sit-and-Reach Test", "Flexibility (lower back and hamstrings)", "Reach forward while seated; measure distance"], ["Body Mass Index (BMI)", "Body composition (indirect)", "Weight (kg) / Height (m)²"]] },
                    { type: "h3", content: "BMI Classification" },
                    { type: "table", content: "BMI Classifications (WHO)", headers: ["BMI Range", "Classification"], rows: [["Below 18.5", "Underweight"], ["18.5 – 24.9", "Normal/Healthy Weight"], ["25.0 – 29.9", "Overweight"], ["30.0 and above", "Obese"]] },
                    { type: "example", content: "BMI Calculation:\nA student weighs 65 kg and is 1.70 m tall.\nBMI = 65 / (1.70)² = 65 / 2.89 = 22.5\nClassification: Normal/Healthy Weight" },
                    { type: "note", content: "BMI is a simple screening tool but has limitations — it doesn't distinguish between fat and muscle. Athletes may have high BMI but low body fat. Use BMI alongside other assessments for a complete picture." },
                  ],
                  quiz: [
                    { question: "A BMI of 27 is classified as:", options: ["Underweight", "Normal/Healthy", "Overweight", "Obese"], answer: 2, explanation: "BMI 25.0–29.9 = Overweight. BMI 27 falls in the overweight range." },
                    { question: "The Sit-and-Reach test measures:", options: ["Cardiovascular endurance", "Muscular strength", "Flexibility", "Speed"], answer: 2, explanation: "The Sit-and-Reach test measures flexibility, specifically of the lower back and hamstrings." },
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
    id: "pe2",
    code: "PE 2",
    title: "Physical Education 2 (Rhythmic Activities)",
    shortTitle: "PE 2",
    units: 2,
    description: "Introduces rhythmic activities, dance forms, aerobics, and recreational sports. Develops coordination, musicality, and appreciation for dance as physical activity and cultural expression.",
    terms: [
      {
        id: "prelim", label: "PRELIM",
        modules: [
          {
            id: "pe2-m1", title: "Module 1: Introduction to Rhythmic Activities",
            topics: [
              {
                id: "pe2-m1t1", title: "Rhythmic Activities and Dance",
                content: {
                  heading: "Rhythmic Activities and Dance", term: "PRELIM", module: "Module 1: Introduction to Rhythmic Activities",
                  objectives: ["Define rhythmic activities and their benefits", "Identify types of dance and rhythmic activities", "Describe basic elements of dance and movement"],
                  sections: [
                    { type: "h2", content: "Rhythmic Activities" },
                    { type: "definition", content: "Rhythmic Activities — Physical activities performed to an underlying beat or rhythm. They combine movement, music, and expression, developing coordination, timing, endurance, and artistic expression." },
                    { type: "h3", content: "Benefits of Rhythmic Activities" },
                    { type: "list", content: "Benefits", items: ["Physical: Improves cardiovascular endurance, muscular strength, flexibility, and coordination", "Mental: Reduces stress; improves mood through endorphin release", "Social: Promotes teamwork and social interaction", "Cultural: Preserves and expresses cultural heritage through folk dances"] },
                    { type: "h3", content: "Types of Dance Forms" },
                    { type: "table", content: "Types of Dance", headers: ["Type", "Description", "Examples"], rows: [["Folk/Ethnic Dance", "Traditional dances of a cultural group", "Tinikling, Pandanggo sa Ilaw, Binasuan (Philippines)"], ["Social Dance", "Dance done with a partner in social settings", "Waltz, Cha-cha, Rumba, Tango"], ["Modern/Contemporary", "Abstract movement expressing ideas and emotions", "Jazz, Hip-hop, Contemporary"], ["Ballroom Dance", "Formalized partner dancing", "Foxtrot, Quickstep, Viennese Waltz"], ["Aerobic Dance", "Dance for cardiovascular fitness", "Zumba, aerobics, step aerobics"]] },
                    { type: "h3", content: "Elements of Dance" },
                    { type: "list", content: "BASTE Elements of Dance", items: ["Body — Parts of the body used in movement", "Action — What the body does (locomotor, non-locomotor movements)", "Space — Where the body moves (level, direction, pathway, size)", "Time — Rhythm, tempo, duration of movement", "Energy — How the body moves (smooth, sharp, heavy, light, sustained, sudden)"] },
                    { type: "note", content: "Tinikling is the Philippine national folk dance — it mimics the tikling bird hopping between grass stems. Dancers step between two bamboo poles that are clapped together rhythmically. It is considered one of the most difficult folk dances due to its speed and precision." },
                  ],
                  quiz: [
                    { question: "Tinikling is classified as what type of dance?", options: ["Social dance", "Ballroom dance", "Folk/Ethnic dance", "Modern contemporary"], answer: 2, explanation: "Tinikling is a Philippine folk/ethnic dance that mimics the movement of the tikling bird — it is a traditional dance of Philippine cultural heritage." },
                    { question: "The BASTE elements of dance stand for:", options: ["Body, Action, Space, Time, Energy", "Balance, Agility, Skill, Tempo, Expression", "Bend, Align, Stretch, Turn, Elevate", "Beat, Accent, Sequence, Technique, Execution"], answer: 0, explanation: "BASTE = Body, Action, Space, Time, Energy — the five elements that describe how dance movement is created." },
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
            id: "pe2-m2", title: "Module 2: Philippine Folk Dances",
            topics: [
              {
                id: "pe2-m2t1", title: "Philippine Folk Dances by Region",
                content: {
                  heading: "Philippine Folk Dances by Region", term: "MIDTERM", module: "Module 2: Philippine Folk Dances",
                  objectives: ["Identify major Philippine folk dances by region", "Describe the cultural significance of each dance", "Perform basic steps of selected folk dances"],
                  sections: [
                    { type: "h2", content: "Philippine Folk Dances" },
                    { type: "text", content: "Philippine folk dances reflect the cultural diversity of the archipelago. They express the customs, beliefs, and daily lives of various ethnic groups across Luzon, Visayas, and Mindanao." },
                    { type: "table", content: "Major Philippine Folk Dances", headers: ["Dance", "Origin/Region", "Description"], rows: [["Tinikling", "Leyte, Visayas", "National folk dance; mimics tikling bird; bamboo pole dance"], ["Binasuan", "Pangasinan, Luzon", "Balancing glasses filled with rice wine; graceful and skillful"], ["Pandanggo sa Ilaw", "Mindoro", "Graceful dance balancing oil lamps on head and both hands"], ["Maglalatik", "Biñan, Laguna", "Coconut shell dance; originally depicts battle between Moros and Christians"], ["Subli", "Batangas", "Religious dance for the Holy Cross; slow and dignified"], ["Itik-Itik", "Surigao del Sur, Mindanao", "Mimics movements of the itik (duck)"], ["Singkil", "Maranao, Mindanao", "Royal dance of Maranao Muslims; bamboo clapping poles; inspired by epic of Princess Gandingan"]] },
                    { type: "note", content: "The Bayanihan Philippine National Folk Dance Company (established 1956) has brought Philippine folk dances to international stages, preserving and promoting them as cultural heritage. They are based at the Cultural Center of the Philippines (CCP)." },
                  ],
                  quiz: [
                    { question: "The Philippine national folk dance is:", options: ["Pandanggo sa Ilaw", "Tinikling", "Singkil", "Maglalatik"], answer: 1, explanation: "Tinikling is the national folk dance of the Philippines, originating from Leyte. It mimics the tikling bird hopping between bamboo poles." },
                    { question: "The Singkil is a dance originating from the:", options: ["Igorots of Mountain Province", "Maranao people of Mindanao", "Tagalogs of Luzon", "Cebuanos of Visayas"], answer: 1, explanation: "Singkil is a royal dance of the Maranao Muslims of Lake Lanao, Mindanao, depicting Princess Gandingan in an epic story." },
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
            id: "pe2-m3", title: "Module 3: Aerobics and Recreational Activities",
            topics: [
              {
                id: "pe2-m3t1", title: "Aerobic Exercise and Zumba",
                content: {
                  heading: "Aerobic Exercise and Zumba", term: "FINALS", module: "Module 3: Aerobics and Recreational Activities",
                  objectives: ["Describe aerobic exercise and its health benefits", "Explain the principles of Zumba fitness", "Design a simple aerobic exercise routine"],
                  sections: [
                    { type: "h2", content: "Aerobic Exercise" },
                    { type: "definition", content: "Aerobic Exercise — Physical activity that uses oxygen for energy production, involving large muscle groups in rhythmic, continuous activity. Examples: jogging, cycling, swimming, dancing, aerobics." },
                    { type: "h3", content: "Benefits of Aerobic Exercise" },
                    { type: "list", content: "Health Benefits", items: ["Strengthens the heart and lungs (cardiovascular health)", "Lowers blood pressure and cholesterol", "Burns calories; helps with weight management", "Reduces risk of diabetes, heart disease, and stroke", "Improves mood and mental health (releases endorphins)", "Improves sleep quality", "Boosts energy levels"] },
                    { type: "h3", content: "Zumba Fitness" },
                    { type: "text", content: "Zumba was created in the 1990s by Colombian dancer Alberto 'Beto' Perez. It combines Latin dance styles (salsa, merengue, cumbia, reggaeton) with fitness principles into a fun, high-energy workout." },
                    { type: "list", content: "Zumba Dance Styles Used", items: ["Salsa — Cuban-origin; 4-count rhythm; hip movement", "Merengue — Dominican Republic; simple march-like steps; 2/4 time", "Cumbia — Colombian; circular hip movements; 4/4 time", "Reggaeton — Urban Latin style; hip-hop influenced", "Samba — Brazilian; syncopated rhythm; bouncy movement"] },
                    { type: "note", content: "Zumba is effective as a cardiovascular workout, burning 400–600 calories per hour (depending on intensity). Its dance format makes exercise enjoyable, improving long-term adherence to physical activity." },
                  ],
                  quiz: [
                    { question: "Aerobic exercise is characterized by:", options: ["Short, intense bursts of anaerobic effort", "Using oxygen for energy in continuous, rhythmic activity with large muscle groups", "Weightlifting and resistance training only", "Static stretching exercises"], answer: 1, explanation: "Aerobic exercise uses oxygen continuously, involves large muscle groups in rhythmic movement, and builds cardiovascular endurance." },
                    { question: "Zumba was created by:", options: ["Jane Fonda", "Alberto 'Beto' Perez", "Richard Simmons", "Billy Blanks"], answer: 1, explanation: "Zumba was created by Colombian dancer Alberto 'Beto' Perez in the 1990s, combining Latin dance styles with fitness principles." },
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
