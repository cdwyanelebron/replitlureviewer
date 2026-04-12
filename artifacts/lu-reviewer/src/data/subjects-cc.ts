import { Subject } from "./types";

export const CC_SUBJECTS: Subject[] = [
  {
    id: "cc1100",
    code: "CC 1100",
    title: "Introduction to Computing",
    shortTitle: "CC 1100",
    units: 3,
    description: "Covers fundamentals of computing, history and evolution of computers, data representation, computer organization, and an overview of computing disciplines.",
    terms: [
      {
        id: "prelim", label: "PRELIM",
        modules: [
          {
            id: "cc1100-m1", title: "Module 1: Fundamentals of Computing",
            topics: [
              {
                id: "cc1100-m1t1", title: "History and Evolution of Computers",
                content: {
                  heading: "History and Evolution of Computers", term: "PRELIM", module: "Module 1: Fundamentals of Computing",
                  objectives: ["Trace the history of computing from ancient tools to modern computers", "Identify the five generations of computers", "Describe key milestones in computing history"],
                  sections: [
                    { type: "h2", content: "The History of Computing" },
                    { type: "list", content: "Pre-Computer Era", items: ["Abacus (3000 BCE) — First known calculating tool", "Pascaline (1642) — Blaise Pascal's mechanical calculator", "Difference Engine (1820s) — Charles Babbage's concept", "Analytical Engine — Babbage's programmable mechanical computer", "Punch Cards — Herman Hollerith's data storage (1890 US Census)"] },
                    { type: "definition", content: "Charles Babbage — 'Father of the Computer'. Designed the Difference Engine and Analytical Engine, which contained concepts found in modern computers: input, memory, processor, and output." },
                    { type: "table", content: "Five Generations of Computers", headers: ["Generation", "Period", "Technology", "Example"], rows: [["1st", "1940s–50s", "Vacuum tubes", "ENIAC, UNIVAC"], ["2nd", "1950s–60s", "Transistors", "IBM 1401, IBM 7090"], ["3rd", "1960s–70s", "Integrated Circuits (ICs)", "IBM System/360"], ["4th", "1970s–present", "Microprocessors (VLSI)", "Intel 4004, modern PCs"], ["5th", "Present–future", "Artificial Intelligence", "Voice assistants, quantum computing"]] },
                    { type: "list", content: "Key Milestones in Computing", items: ["1936 — Alan Turing proposes the Turing Machine", "1945 — John von Neumann proposes stored-program concept", "1947 — Transistor invented at Bell Labs", "1958 — First integrated circuit (Jack Kilby, Texas Instruments)", "1971 — Intel 4004, first commercial microprocessor", "1981 — IBM PC introduced", "1991 — World Wide Web launched by Tim Berners-Lee", "2007 — iPhone introduced; smartphone era begins"] },
                    { type: "note", content: "ENIAC (1945): First general-purpose electronic digital computer. Weighed 30 tons, used 18,000 vacuum tubes, occupied a gymnasium-sized room. Lady Ada Lovelace (1815–1852) is considered the world's first programmer for her notes on Babbage's Analytical Engine." },
                  ],
                  quiz: [
                    { question: "Who is known as the 'Father of the Computer'?", options: ["Alan Turing", "John von Neumann", "Charles Babbage", "Bill Gates"], answer: 2, explanation: "Charles Babbage is the 'Father of the Computer' for his design of the Difference Engine and Analytical Engine." },
                    { question: "Which technology characterized the 2nd generation of computers?", options: ["Vacuum tubes", "Transistors", "Integrated Circuits", "Microprocessors"], answer: 1, explanation: "2nd generation computers (1950s–60s) used transistors — smaller, faster, and more reliable than vacuum tubes." },
                    { question: "The World Wide Web was launched by:", options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Vint Cerf"], answer: 2, explanation: "Tim Berners-Lee launched the World Wide Web in 1991 at CERN." },
                    { question: "ENIAC is notable as:", options: ["The first personal computer", "The first general-purpose electronic digital computer", "The first computer with a mouse", "The first laptop"], answer: 1, explanation: "ENIAC (1945) was the first general-purpose electronic digital computer, using 18,000 vacuum tubes." },
                  ],
                },
              },
              {
                id: "cc1100-m1t2", title: "Computer Components and Von Neumann Architecture",
                content: {
                  heading: "Computer Components and Von Neumann Architecture", term: "PRELIM", module: "Module 1: Fundamentals of Computing",
                  objectives: ["Identify basic hardware components", "Explain the function of each component", "Describe the Von Neumann architecture and stored-program concept"],
                  sections: [
                    { type: "h2", content: "Computer System Components" },
                    { type: "table", content: "Major Hardware Components", headers: ["Component", "Function", "Examples"], rows: [["CPU (Processor)", "Executes instructions and processes data", "Intel Core i7, AMD Ryzen"], ["RAM", "Temporary fast memory for active programs", "8GB DDR4, 16GB DDR5"], ["ROM", "Permanent memory storing firmware/BIOS", "BIOS chip"], ["Storage", "Permanent data storage", "HDD, SSD, USB"], ["Motherboard", "Connects all components", "ASUS, MSI motherboards"], ["GPU", "Processes graphics output", "NVIDIA RTX, AMD Radeon"], ["PSU", "Converts electrical power", "500W, 750W units"], ["I/O Devices", "Input/Output interfaces", "Keyboard, mouse, monitor"]] },
                    { type: "definition", content: "CPU (Central Processing Unit) — The 'brain' of the computer. Executes instructions by fetching, decoding, and executing operations. Key parts: ALU (Arithmetic Logic Unit), Control Unit, and Cache memory." },
                    { type: "h3", content: "Von Neumann Architecture (1945)" },
                    { type: "list", content: "Von Neumann Components", items: ["Memory Unit — Stores both program instructions and data", "Control Unit (CU) — Fetches and decodes instructions", "ALU — Performs mathematical and logical operations", "Input/Output — Interfaces for data entry and display", "Buses — Data pathways (Data bus, Address bus, Control bus)"] },
                    { type: "h3", content: "Types of Memory" },
                    { type: "table", content: "Memory Types Compared", headers: ["Type", "Volatile?", "Speed", "Capacity"], rows: [["Cache (L1/L2/L3)", "Yes", "Fastest", "KB to few MB"], ["RAM", "Yes", "Very Fast", "4–64 GB"], ["SSD", "No", "Fast", "128 GB–4 TB"], ["HDD", "No", "Slower", "500 GB–20+ TB"]] },
                    { type: "note", content: "Volatile memory = loses data when power is off (RAM, Cache). Non-volatile = retains data without power (ROM, SSD, HDD)." },
                  ],
                  quiz: [
                    { question: "CPU stands for:", options: ["Central Program Unit", "Central Processing Unit", "Computer Processing Utility", "Core Processor Unit"], answer: 1, explanation: "CPU = Central Processing Unit — the primary component that executes instructions." },
                    { question: "Which memory type is VOLATILE (loses data when power is off)?", options: ["HDD", "SSD", "ROM", "RAM"], answer: 3, explanation: "RAM (Random Access Memory) is volatile — it loses all stored data when power is cut." },
                    { question: "The Von Neumann architecture introduced:", options: ["Vacuum tubes", "Transistors", "Stored-program concept where instructions and data share memory", "Parallel processing"], answer: 2, explanation: "Von Neumann's key contribution: the stored-program concept — instructions and data stored in the same memory unit." },
                  ],
                },
              },
            ],
          },
          {
            id: "cc1100-m2", title: "Module 2: Number Systems and Data Representation",
            topics: [
              {
                id: "cc1100-m2t1", title: "Number Systems",
                content: {
                  heading: "Number Systems", term: "PRELIM", module: "Module 2: Number Systems and Data Representation",
                  objectives: ["Explain binary, octal, decimal, hexadecimal number systems", "Convert between different number systems", "Understand how computers represent data using binary"],
                  sections: [
                    { type: "h2", content: "Number Systems in Computing" },
                    { type: "table", content: "Common Number Systems", headers: ["System", "Base", "Digits", "Example"], rows: [["Binary", "2", "0, 1", "1010₂ = 10₁₀"], ["Octal", "8", "0–7", "12₈ = 10₁₀"], ["Decimal", "10", "0–9", "10₁₀"], ["Hexadecimal", "16", "0–9, A–F", "A₁₆ = 10₁₀"]] },
                    { type: "definition", content: "Bit — The smallest unit of data (binary digit: 0 or 1). Eight bits = one byte. One byte can represent 256 values (2⁸)." },
                    { type: "example", content: "Binary to Decimal conversion:\n1101₂ = 1×2³ + 1×2² + 0×2¹ + 1×2⁰ = 8 + 4 + 0 + 1 = 13₁₀\n\n1010₂ = 1×2³ + 0×2² + 1×2¹ + 0×2⁰ = 8 + 0 + 2 + 0 = 10₁₀" },
                    { type: "h3", content: "Hexadecimal" },
                    { type: "text", content: "Hexadecimal uses digits 0–9 and A–F (A=10, B=11, C=12, D=13, E=14, F=15). Each hex digit = exactly 4 binary bits. Commonly used in memory addresses, color codes (#FF5733), and computer error messages." },
                    { type: "table", content: "Data Storage Units", headers: ["Unit", "Size"], rows: [["Bit (b)", "Single binary digit (0 or 1)"], ["Byte (B)", "8 bits"], ["Kilobyte (KB)", "1,024 bytes"], ["Megabyte (MB)", "1,024 KB"], ["Gigabyte (GB)", "1,024 MB"], ["Terabyte (TB)", "1,024 GB"]] },
                  ],
                  quiz: [
                    { question: "What is 1010₂ in decimal?", options: ["8", "10", "12", "14"], answer: 1, explanation: "1010₂ = 1×8 + 0×4 + 1×2 + 0×1 = 10₁₀" },
                    { question: "In hexadecimal, 'F' represents:", options: ["14", "15", "16", "12"], answer: 1, explanation: "In hexadecimal: A=10, B=11, C=12, D=13, E=14, F=15." },
                    { question: "How many bits are in one byte?", options: ["4", "6", "8", "16"], answer: 2, explanation: "1 byte = 8 bits. Eight bits can represent 2⁸ = 256 different values." },
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
            id: "cc1100-m3", title: "Module 3: Computer Software and Operating Systems",
            topics: [
              {
                id: "cc1100-m3t1", title: "Operating Systems",
                content: {
                  heading: "Operating Systems", term: "MIDTERM", module: "Module 3: Computer Software and Operating Systems",
                  objectives: ["Define an operating system and its functions", "Identify major operating systems and their characteristics", "Explain process management and memory management"],
                  sections: [
                    { type: "h2", content: "What is an Operating System?" },
                    { type: "definition", content: "Operating System (OS) — System software that manages computer hardware and software resources and provides services for computer programs. It acts as an intermediary between hardware and application software." },
                    { type: "h3", content: "Functions of an OS" },
                    { type: "list", content: "Key OS Functions", items: ["Process Management — Managing running programs (creation, scheduling, termination)", "Memory Management — Allocating and deallocating RAM", "File System Management — Organizing, storing, and retrieving files", "Device Management — Managing I/O devices via drivers", "Security and Access Control — User authentication and permissions", "User Interface — CLI (command line) or GUI (graphical)"] },
                    { type: "table", content: "Major Operating Systems", headers: ["OS", "Type", "Characteristics"], rows: [["Windows", "Proprietary", "Most widely used desktop OS; GUI; Microsoft"], ["macOS", "Proprietary", "Apple computers; Unix-based; sleek UI"], ["Linux", "Open Source", "Server-dominant; many distributions (Ubuntu, Red Hat)"], ["Android", "Open Source", "Mobile OS; Linux-based; Google"], ["iOS", "Proprietary", "Apple mobile OS; highly secure; closed ecosystem"]] },
                    { type: "h3", content: "Types of Operating Systems" },
                    { type: "list", content: "OS Types", items: ["Batch OS — Processes jobs in batches without user interaction", "Time-Sharing OS — Multiple users share CPU simultaneously", "Real-Time OS (RTOS) — Strict time constraints; used in embedded systems", "Distributed OS — Manages resources across multiple networked computers", "Mobile OS — Designed for smartphones and tablets"] },
                  ],
                  quiz: [
                    { question: "Which is NOT a function of an Operating System?", options: ["Process management", "Memory management", "Creating user applications", "Device management"], answer: 2, explanation: "Creating user applications is the job of application developers, not the operating system. The OS manages processes, memory, files, and devices." },
                    { question: "Linux is best described as:", options: ["A proprietary OS made by Microsoft", "An open-source OS widely used on servers", "A mobile OS made by Apple", "A real-time operating system"], answer: 1, explanation: "Linux is open-source and widely used on servers, supercomputers, and embedded systems. Android is also Linux-based." },
                  ],
                },
              },
              {
                id: "cc1100-m3t2", title: "Types of Software",
                content: {
                  heading: "Types of Computer Software", term: "MIDTERM", module: "Module 3: Computer Software and Operating Systems",
                  objectives: ["Distinguish between system software and application software", "Identify categories of application software", "Explain programming languages and their levels"],
                  sections: [
                    { type: "h2", content: "Software Classification" },
                    { type: "table", content: "System Software vs. Application Software", headers: ["Type", "Definition", "Examples"], rows: [["System Software", "Manages hardware and provides platform for applications", "OS, device drivers, utilities, BIOS"], ["Application Software", "Performs specific user tasks", "Word processors, browsers, games, database apps"]] },
                    { type: "h3", content: "Categories of Application Software" },
                    { type: "list", content: "Application Software Types", items: ["Productivity Software — MS Office, Google Workspace", "Educational Software — e-learning platforms, simulations", "Communication Software — Email clients, video conferencing", "Entertainment Software — Games, media players, streaming", "Business Software — ERP systems, accounting software", "Web Browsers — Chrome, Firefox, Edge, Safari"] },
                    { type: "h3", content: "Programming Language Levels" },
                    { type: "table", content: "Programming Language Levels", headers: ["Level", "Description", "Examples"], rows: [["Machine Language", "Binary (0s and 1s); directly executed by CPU", "00110001 01000011"], ["Assembly Language", "Low-level using mnemonics", "MOV AX, BX; ADD CX, DX"], ["High-Level Language", "Human-readable; close to English", "Python, Java, C++, C#"]] },
                  ],
                  quiz: [
                    { question: "Device drivers are an example of:", options: ["Application software", "System software", "Productivity software", "Entertainment software"], answer: 1, explanation: "Device drivers are system software — they allow the OS to communicate with hardware devices." },
                    { question: "Which is a high-level programming language?", options: ["Machine code", "Assembly language", "Python", "Binary"], answer: 2, explanation: "Python is high-level — it uses human-readable syntax. Machine code and Assembly are low-level languages." },
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
            id: "cc1100-m4", title: "Module 4: Networks and the Internet",
            topics: [
              {
                id: "cc1100-m4t1", title: "Computer Networks",
                content: {
                  heading: "Computer Networks", term: "FINALS", module: "Module 4: Networks and the Internet",
                  objectives: ["Define computer networking and its benefits", "Identify types of networks by geographic scope", "Describe the OSI model and TCP/IP"],
                  sections: [
                    { type: "h2", content: "Computer Networks" },
                    { type: "definition", content: "Computer Network — A set of interconnected computers and devices that can communicate and share resources (data, printers, internet connection) with each other." },
                    { type: "table", content: "Network Types by Geographic Scope", headers: ["Type", "Scope", "Example"], rows: [["PAN (Personal Area Network)", "< 10 meters", "Bluetooth devices, smartwatch to phone"], ["LAN (Local Area Network)", "Building or campus", "Home network, school computer lab"], ["MAN (Metropolitan Area Network)", "City-wide", "City CCTV network, cable TV network"], ["WAN (Wide Area Network)", "Countries/global", "The Internet"]] },
                    { type: "h3", content: "The OSI Model" },
                    { type: "table", content: "OSI Model (7 Layers)", headers: ["Layer", "Name", "Function"], rows: [["7", "Application", "Interface for end-user applications (HTTP, FTP, SMTP)"], ["6", "Presentation", "Data formatting, encryption, compression"], ["5", "Session", "Establishes, manages, and terminates sessions"], ["4", "Transport", "Reliable end-to-end delivery (TCP, UDP)"], ["3", "Network", "Routing and logical addressing (IP addresses)"], ["2", "Data Link", "MAC addressing, error detection (Ethernet, Wi-Fi)"], ["1", "Physical", "Physical transmission of raw bits (cables, signals)"]] },
                    { type: "definition", content: "TCP/IP (Transmission Control Protocol/Internet Protocol) — The foundational communication protocol of the internet. TCP ensures reliable delivery of data packets; IP handles addressing and routing." },
                    { type: "note", content: "Mnemonic for OSI layers (bottom to top): 'Please Do Not Throw Sausage Pizza Away' = Physical, Data Link, Network, Transport, Session, Presentation, Application" },
                  ],
                  quiz: [
                    { question: "Which network type covers an entire city?", options: ["PAN", "LAN", "MAN", "WAN"], answer: 2, explanation: "MAN (Metropolitan Area Network) covers a city or metropolitan area." },
                    { question: "The OSI layer responsible for logical addressing (IP addresses) is:", options: ["Physical", "Data Link", "Network", "Transport"], answer: 2, explanation: "Layer 3 (Network) handles routing and logical addressing — IP addresses operate at this layer." },
                    { question: "TCP/IP is significant because:", options: ["It is only used in local networks", "It is the foundational communication protocol of the internet", "It was invented by Microsoft", "It only handles security"], answer: 1, explanation: "TCP/IP is the foundational protocol suite of the internet — it enables data transmission between any networked devices globally." },
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
    id: "cc1101",
    code: "CC 1101",
    title: "Computer Programming 1",
    shortTitle: "CC 1101",
    units: 3,
    description: "Introduction to programming using a high-level language. Covers problem-solving, algorithm design, and fundamental programming constructs including variables, control structures, and functions.",
    terms: [
      {
        id: "prelim", label: "PRELIM",
        modules: [
          {
            id: "cc1101-m1", title: "Module 1: Problem Solving and Algorithms",
            topics: [
              {
                id: "cc1101-m1t1", title: "Programming Fundamentals",
                content: {
                  heading: "Programming Fundamentals", term: "PRELIM", module: "Module 1: Problem Solving and Algorithms",
                  objectives: ["Define a program and programming language", "Explain the software development process", "Design algorithms using flowcharts and pseudocode"],
                  sections: [
                    { type: "h2", content: "What is Programming?" },
                    { type: "definition", content: "Program — A set of instructions written in a programming language that a computer executes to perform a specific task or solve a problem." },
                    { type: "definition", content: "Algorithm — A well-defined, step-by-step procedure for solving a problem or accomplishing a task. Algorithms must be: finite, definite, effective, and produce output." },
                    { type: "h3", content: "Software Development Process" },
                    { type: "list", content: "Steps in Program Development", items: ["1. Problem Analysis — Understand what the problem is asking", "2. Algorithm Design — Plan the solution step-by-step (pseudocode/flowchart)", "3. Coding — Write the program in a programming language", "4. Testing and Debugging — Find and fix errors", "5. Documentation — Write explanations for the code", "6. Maintenance — Update and improve the program over time"] },
                    { type: "h3", content: "Flowchart Symbols" },
                    { type: "table", content: "Flowchart Symbols", headers: ["Symbol", "Shape", "Use"], rows: [["Terminal", "Oval/Rounded rectangle", "Start and End of program"], ["Process", "Rectangle", "Computation or assignment"], ["Decision", "Diamond", "Yes/No or True/False condition"], ["Input/Output", "Parallelogram", "Data entry (input) or display (output)"], ["Connector", "Circle", "Connects parts of flowchart on same page"], ["Arrow", "Arrow line", "Flow of control/direction"]] },
                    { type: "example", content: "Pseudocode for computing average of three numbers:\nSTART\n  INPUT num1, num2, num3\n  SET sum = num1 + num2 + num3\n  SET average = sum / 3\n  PRINT average\nEND" },
                    { type: "h3", content: "Control Structures" },
                    { type: "list", content: "Three Fundamental Control Structures", items: ["Sequence — Instructions execute one after another in order", "Selection (Decision) — Branches based on condition (IF-THEN-ELSE, SWITCH)", "Iteration (Loop) — Repeats a block of code (FOR, WHILE, DO-WHILE)"] },
                  ],
                  quiz: [
                    { question: "An algorithm must be:", options: ["Written in Python only", "Finite, definite, effective, and produce output", "At least 100 steps long", "Implemented only using flowcharts"], answer: 1, explanation: "An algorithm must be: finite (terminates), definite (clear steps), effective (achievable steps), and produce output." },
                    { question: "In a flowchart, a DIAMOND shape represents:", options: ["Start/End", "Process or computation", "Decision (Yes/No condition)", "Input or Output"], answer: 2, explanation: "A diamond shape in a flowchart represents a decision point — a yes/no or true/false condition." },
                    { question: "The three fundamental control structures are:", options: ["Input, Process, Output", "Sequence, Selection, Iteration", "Compile, Execute, Debug", "Declare, Assign, Display"], answer: 1, explanation: "The three control structures: Sequence (step-by-step), Selection (decisions/branches), and Iteration (loops/repetition)." },
                  ],
                },
              },
              {
                id: "cc1101-m1t2", title: "Variables, Data Types, and Operators",
                content: {
                  heading: "Variables, Data Types, and Operators", term: "PRELIM", module: "Module 1: Problem Solving and Algorithms",
                  objectives: ["Define variables and constants", "Identify primitive data types", "Use arithmetic, relational, and logical operators"],
                  sections: [
                    { type: "h2", content: "Variables and Data Types" },
                    { type: "definition", content: "Variable — A named storage location in memory that holds a value which can change during program execution. Each variable has a data type, name, and value." },
                    { type: "definition", content: "Constant — A named value that cannot change during program execution (e.g., PI = 3.14159)." },
                    { type: "table", content: "Common Primitive Data Types", headers: ["Data Type", "Description", "Example Values"], rows: [["int (integer)", "Whole numbers", "0, 42, -17, 1000"], ["float / double", "Decimal numbers", "3.14, -0.5, 2.71828"], ["char", "Single character", "'A', 'z', '7', '!'"], ["String", "Sequence of characters", "'Hello', 'Laguna University'"], ["boolean", "True or false only", "true, false"]] },
                    { type: "h3", content: "Operators" },
                    { type: "table", content: "Types of Operators", headers: ["Type", "Operators", "Example"], rows: [["Arithmetic", "+ - * / % ** //", "5 + 3 = 8; 10 % 3 = 1"], ["Relational", "== != > < >= <=", "5 > 3 → True"], ["Logical", "and, or, not (&&, ||, !)", "True and False → False"], ["Assignment", "= += -= *= /=", "x = 5; x += 2 (x is now 7)"]] },
                    { type: "example", content: "Python example:\nname = 'Juan'          # String variable\nage = 19               # Integer variable\ngpa = 1.75             # Float variable\nis_enrolled = True     # Boolean variable\n\nprint(name, 'is', age, 'years old')\n# Output: Juan is 19 years old" },
                    { type: "note", content: "In Python, you don't need to declare the data type explicitly — Python infers it automatically. This is called dynamic typing. In Java/C++, you must declare the type: int age = 19;" },
                  ],
                  quiz: [
                    { question: "Which data type stores decimal numbers?", options: ["int", "float", "char", "boolean"], answer: 1, explanation: "Float (or double) stores decimal/floating-point numbers like 3.14 or -0.5." },
                    { question: "The modulo operator (%) returns:", options: ["The quotient of division", "The remainder of integer division", "The product of multiplication", "The power/exponent"], answer: 1, explanation: "The modulo operator (%) returns the remainder of integer division. Example: 10 % 3 = 1 (10 ÷ 3 = 3 remainder 1)." },
                    { question: "A CONSTANT is different from a variable because:", options: ["Constants store numbers only", "Constants cannot change during program execution", "Constants use more memory", "Constants must be declared in all caps"], answer: 1, explanation: "A constant holds a value that cannot change during program execution (e.g., PI = 3.14159)." },
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
            id: "cc1101-m2", title: "Module 2: Control Structures",
            topics: [
              {
                id: "cc1101-m2t1", title: "Selection Statements (Conditional)",
                content: {
                  heading: "Selection Statements", term: "MIDTERM", module: "Module 2: Control Structures",
                  objectives: ["Write IF, IF-ELSE, and IF-ELIF-ELSE statements", "Use SWITCH/CASE for multiple conditions", "Apply nested conditional statements"],
                  sections: [
                    { type: "h2", content: "Selection / Decision Structures" },
                    { type: "text", content: "Selection structures allow a program to make decisions and execute different code paths based on conditions. They implement the 'Selection' control structure." },
                    { type: "h3", content: "IF Statement" },
                    { type: "example", content: "Python - Simple IF:\ngrade = 85\nif grade >= 75:\n    print('Passed!')\n\n# IF-ELSE:\nif grade >= 75:\n    print('Passed!')\nelse:\n    print('Failed. Try again.')" },
                    { type: "h3", content: "IF-ELIF-ELSE (Multiple Conditions)" },
                    { type: "example", content: "Python - Grade Classifier:\nif grade >= 90:\n    print('Excellent - A')\nelif grade >= 80:\n    print('Very Good - B')\nelif grade >= 75:\n    print('Passed - C')\nelse:\n    print('Failed - F')" },
                    { type: "h3", content: "Logical Operators in Conditions" },
                    { type: "table", content: "Logical Operators Truth Table", headers: ["A", "B", "A and B", "A or B", "not A"], rows: [["True", "True", "True", "True", "False"], ["True", "False", "False", "True", "False"], ["False", "True", "False", "True", "True"], ["False", "False", "False", "False", "True"]] },
                    { type: "note", content: "In Python: and, or, not. In Java/C++: &&, ||, !" },
                  ],
                  quiz: [
                    { question: "What does the following Python code print if grade = 82?\nif grade >= 90: print('A')\nelif grade >= 80: print('B')\nelse: print('C')", options: ["A", "B", "C", "Nothing"], answer: 1, explanation: "82 is not ≥ 90, but 82 ≥ 80 is True, so 'B' is printed." },
                    { question: "The result of 'True and False' is:", options: ["True", "False", "Error", "None"], answer: 1, explanation: "In logical AND, both operands must be True for the result to be True. True AND False = False." },
                  ],
                },
              },
              {
                id: "cc1101-m2t2", title: "Loops (Iteration Structures)",
                content: {
                  heading: "Loops and Iteration", term: "MIDTERM", module: "Module 2: Control Structures",
                  objectives: ["Write for, while, and do-while loops", "Identify when to use each type of loop", "Use break and continue statements"],
                  sections: [
                    { type: "h2", content: "Iteration Structures (Loops)" },
                    { type: "text", content: "Loops allow a program to execute a block of code repeatedly. They implement the 'Iteration' control structure and reduce code repetition." },
                    { type: "table", content: "Types of Loops", headers: ["Loop Type", "When to Use", "Python Syntax"], rows: [["for loop", "Known number of iterations; iterate over sequences", "for i in range(10):"], ["while loop", "Unknown iterations; repeat while condition is True", "while condition:"], ["do-while", "Execute at least once before checking condition", "Not native in Python; simulated with while True + break"]] },
                    { type: "example", content: "FOR loop - Print 1 to 5:\nfor i in range(1, 6):\n    print(i)\n# Output: 1 2 3 4 5\n\nWHILE loop - Sum until 100:\ntotal = 0\nn = 1\nwhile total < 100:\n    total += n\n    n += 1\nprint('Total:', total)" },
                    { type: "h3", content: "Break and Continue" },
                    { type: "definition", content: "break — Immediately terminates the loop and transfers control to the statement after the loop.\ncontinue — Skips the rest of the current iteration and goes to the next iteration." },
                    { type: "example", content: "# Find first number divisible by 7 between 1–50:\nfor num in range(1, 51):\n    if num % 7 == 0:\n        print('First divisible by 7:', num)\n        break  # Stop after finding the first one" },
                  ],
                  quiz: [
                    { question: "What does 'range(1, 6)' generate in Python?", options: ["1, 2, 3, 4, 5, 6", "1, 2, 3, 4, 5", "0, 1, 2, 3, 4, 5", "1, 6"], answer: 1, explanation: "range(1, 6) generates integers from 1 to 5 (the stop value 6 is excluded)." },
                    { question: "The 'break' statement in a loop:", options: ["Skips the current iteration only", "Immediately terminates the loop entirely", "Pauses the loop temporarily", "Repeats the current iteration"], answer: 1, explanation: "break immediately exits the loop entirely, transferring control to the code after the loop." },
                    { question: "A WHILE loop continues as long as:", options: ["A fixed number of iterations is reached", "The condition remains True", "A break statement is executed", "The variable reaches zero"], answer: 1, explanation: "A while loop continues executing as long as its condition evaluates to True." },
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
            id: "cc1101-m3", title: "Module 3: Functions and Arrays",
            topics: [
              {
                id: "cc1101-m3t1", title: "Functions / Subprograms",
                content: {
                  heading: "Functions and Subprograms", term: "FINALS", module: "Module 3: Functions and Arrays",
                  objectives: ["Define a function and explain its purpose", "Write and call user-defined functions", "Understand parameters, arguments, and return values"],
                  sections: [
                    { type: "h2", content: "Functions" },
                    { type: "definition", content: "Function — A named, reusable block of code that performs a specific task. Functions promote code reusability, modularity, and readability." },
                    { type: "h3", content: "Function Anatomy" },
                    { type: "example", content: "Python function:\ndef calculate_average(num1, num2, num3):  # Parameters\n    total = num1 + num2 + num3\n    average = total / 3\n    return average  # Return value\n\n# Calling the function:\nresult = calculate_average(85, 90, 78)  # Arguments\nprint('Average:', result)  # Output: Average: 84.33" },
                    { type: "table", content: "Function Terminology", headers: ["Term", "Definition", "Example"], rows: [["Function Definition", "Declaring the function with its name and body", "def add(a, b): return a+b"], ["Parameter", "Variable in function definition receiving values", "a, b in add(a, b)"], ["Argument", "Actual value passed when calling the function", "3, 7 in add(3, 7)"], ["Return value", "Value the function sends back to the caller", "return a + b"], ["Function Call", "Invoking the function to execute it", "result = add(3, 7)"]] },
                    { type: "h3", content: "Built-in Functions" },
                    { type: "text", content: "Python has many built-in functions: print(), input(), len(), int(), float(), str(), max(), min(), sum(), range(), abs(), type()." },
                  ],
                  quiz: [
                    { question: "A 'parameter' in a function is:", options: ["The actual value passed when calling the function", "The variable in the function definition that receives values", "The name of the function", "The output of the function"], answer: 1, explanation: "A parameter is the variable in the function definition (the 'placeholder'). An argument is the actual value passed when calling the function." },
                    { question: "What does the 'return' statement do in a function?", options: ["Exits the program completely", "Sends a value back to the caller of the function", "Prints output to the screen", "Declares a variable inside the function"], answer: 1, explanation: "The return statement sends a value back to the code that called the function." },
                  ],
                },
              },
              {
                id: "cc1101-m3t2", title: "Arrays and Lists",
                content: {
                  heading: "Arrays and Lists", term: "FINALS", module: "Module 3: Functions and Arrays",
                  objectives: ["Define arrays and lists", "Perform common list operations", "Use loops to process arrays"],
                  sections: [
                    { type: "h2", content: "Arrays and Lists" },
                    { type: "definition", content: "Array — A collection of elements of the same data type stored in consecutive memory locations, accessed by index. Python uses Lists, which are more flexible (can hold mixed types)." },
                    { type: "example", content: "Python Lists:\nstudents = ['Juan', 'Maria', 'Pedro', 'Ana']\ngrades = [85, 92, 78, 95]\n\n# Access by index (0-based):\nprint(students[0])   # Juan\nprint(grades[2])     # 78\nprint(grades[-1])    # 95 (last element)\n\n# Length:\nprint(len(students))  # 4" },
                    { type: "h3", content: "Common List Operations" },
                    { type: "table", content: "Python List Operations", headers: ["Operation", "Code", "Result"], rows: [["Append (add to end)", "grades.append(88)", "Adds 88 to the list"], ["Insert", "grades.insert(2, 100)", "Inserts 100 at index 2"], ["Remove by value", "grades.remove(78)", "Removes first occurrence of 78"], ["Pop (remove by index)", "grades.pop(0)", "Removes and returns element at index 0"], ["Sort", "grades.sort()", "Sorts list in ascending order"], ["Reverse", "grades.reverse()", "Reverses the list"]] },
                    { type: "example", content: "Compute sum and average using a loop:\ngrades = [85, 92, 78, 95, 88]\ntotal = 0\nfor g in grades:\n    total += g\naverage = total / len(grades)\nprint('Average:', average)  # 87.6" },
                  ],
                  quiz: [
                    { question: "In Python, what is the index of the FIRST element in a list?", options: ["1", "0", "-1", "None"], answer: 1, explanation: "Python (and most programming languages) use 0-based indexing — the first element is at index 0." },
                    { question: "The len() function returns:", options: ["The largest element in a list", "The smallest element in a list", "The number of elements in a list", "The sum of all elements"], answer: 2, explanation: "len() returns the number of elements in a list (or length of a string)." },
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
    id: "cc1202",
    code: "CC 1202",
    title: "Computer Programming 2 (C Programming)",
    shortTitle: "CC 1202",
    units: 3,
    description: "Continuation of Computer Programming 1. Covers advanced programming concepts including object-oriented programming, file handling, exception handling, and basic data structures.",
    terms: [
      {
        id: "prelim", label: "PRELIM",
        modules: [
          {
            id: "cc1102-m1", title: "Module 1: Object-Oriented Programming Concepts",
            topics: [
              {
                id: "cc1102-m1t1", title: "Introduction to OOP",
                content: {
                  heading: "Introduction to Object-Oriented Programming", term: "PRELIM", module: "Module 1: Object-Oriented Programming Concepts",
                  objectives: ["Define OOP and its four pillars", "Distinguish between a class and an object", "Create a simple class in Python"],
                  sections: [
                    { type: "h2", content: "Object-Oriented Programming (OOP)" },
                    { type: "definition", content: "Object-Oriented Programming (OOP) — A programming paradigm that organizes software design around objects (data and behavior) rather than functions. It models real-world entities as objects with attributes and methods." },
                    { type: "h3", content: "Four Pillars of OOP" },
                    { type: "table", content: "Four Pillars of OOP", headers: ["Pillar", "Definition", "Example"], rows: [["Encapsulation", "Bundling data and methods together; hiding internal details", "A class hides its variables using private access"], ["Inheritance", "A class inherits attributes and methods from a parent class", "Dog class inherits from Animal class"], ["Polymorphism", "Same interface used for different data types or classes", "Different classes implementing the same method differently"], ["Abstraction", "Hiding complex implementation; showing only essential features", "Using a TV remote without knowing its internal circuitry"]] },
                    { type: "h3", content: "Class and Object" },
                    { type: "definition", content: "Class — A blueprint or template for creating objects. It defines the attributes (data) and methods (behavior) that objects of that class will have.\nObject — An instance of a class. It is the actual entity created from the class blueprint." },
                    { type: "example", content: "Python Class Example:\nclass Student:\n    def __init__(self, name, student_id, gpa):\n        self.name = name          # Attribute\n        self.student_id = student_id\n        self.gpa = gpa\n    \n    def display_info(self):    # Method\n        print(f'{self.name} (ID: {self.student_id}) - GPA: {self.gpa}')\n    \n    def is_honor_student(self):\n        return self.gpa <= 1.75\n\n# Creating objects:\nstudent1 = Student('Juan dela Cruz', '2024-001', 1.50)\nstudent2 = Student('Maria Santos', '2024-002', 2.25)\n\nstudent1.display_info()\n# Output: Juan dela Cruz (ID: 2024-001) - GPA: 1.50\nprint(student1.is_honor_student())  # True" },
                  ],
                  quiz: [
                    { question: "A CLASS in OOP is:", options: ["An instance of an object", "A blueprint or template for creating objects", "A function inside a program", "A data type like int or float"], answer: 1, explanation: "A class is a blueprint that defines the attributes and methods that objects of that type will have." },
                    { question: "Which OOP pillar involves hiding internal implementation details?", options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"], answer: 3, explanation: "Abstraction hides complex implementation details and shows only essential features to the user." },
                    { question: "The four pillars of OOP are:", options: ["Input, Process, Output, Feedback", "Encapsulation, Inheritance, Polymorphism, Abstraction", "Sequence, Selection, Iteration, Recursion", "Class, Object, Method, Attribute"], answer: 1, explanation: "The four pillars of OOP: Encapsulation, Inheritance, Polymorphism, and Abstraction (EIPA)." },
                  ],
                },
              },
              {
                id: "cc1102-m1t2", title: "Inheritance and Polymorphism",
                content: {
                  heading: "Inheritance and Polymorphism", term: "PRELIM", module: "Module 1: Object-Oriented Programming Concepts",
                  objectives: ["Implement class inheritance in Python", "Create derived classes that extend parent classes", "Demonstrate polymorphism through method overriding"],
                  sections: [
                    { type: "h2", content: "Inheritance" },
                    { type: "definition", content: "Inheritance — A mechanism where a child (derived) class inherits the attributes and methods of a parent (base) class. It promotes code reusability and represents 'is-a' relationships." },
                    { type: "example", content: "Python Inheritance:\nclass Animal:  # Parent class\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return 'Some sound'\n    def describe(self):\n        return f'I am {self.name}'\n\nclass Dog(Animal):  # Child class\n    def speak(self):  # Method overriding\n        return 'Woof!'\n\nclass Cat(Animal):\n    def speak(self):\n        return 'Meow!'\n\n# Polymorphism:\nanimals = [Dog('Buddy'), Cat('Whiskers'), Dog('Max')]\nfor animal in animals:\n    print(animal.name + ':', animal.speak())\n# Output:\n# Buddy: Woof!\n# Whiskers: Meow!\n# Max: Woof!" },
                    { type: "definition", content: "Method Overriding — When a child class provides its own implementation of a method already defined in the parent class. This is the basis of polymorphism." },
                    { type: "h3", content: "Types of Inheritance" },
                    { type: "list", content: "Inheritance Types", items: ["Single — One child, one parent (class Dog(Animal))", "Multilevel — Child inherits from child (GuideDog → Dog → Animal)", "Multiple — One child inherits from multiple parents (Python supports this)", "Hierarchical — Multiple children from one parent (Dog, Cat, Bird from Animal)"] },
                  ],
                  quiz: [
                    { question: "Method overriding occurs when:", options: ["A parent class calls a child's method", "A child class provides its own version of a method defined in the parent", "Two methods have the same name in the same class", "A method takes multiple arguments"], answer: 1, explanation: "Method overriding happens when a child class redefines a method inherited from the parent class." },
                    { question: "Which type of inheritance has multiple parent classes for one child?", options: ["Single inheritance", "Multilevel inheritance", "Hierarchical inheritance", "Multiple inheritance"], answer: 3, explanation: "Multiple inheritance is when a class inherits from more than one parent class." },
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
            id: "cc1102-m2", title: "Module 2: File Handling and Exception Handling",
            topics: [
              {
                id: "cc1102-m2t1", title: "File Handling in Python",
                content: {
                  heading: "File Handling in Python", term: "MIDTERM", module: "Module 2: File Handling and Exception Handling",
                  objectives: ["Open, read, write, and close files in Python", "Work with text files and CSV files", "Apply file modes correctly"],
                  sections: [
                    { type: "h2", content: "File Handling" },
                    { type: "text", content: "File handling allows programs to store data permanently (on disk) and retrieve it later. Files persist even after the program ends, unlike variables that exist only during execution." },
                    { type: "table", content: "File Modes in Python", headers: ["Mode", "Description"], rows: [["'r'", "Read only (file must exist)"], ["'w'", "Write (creates new / overwrites existing)"], ["'a'", "Append (adds to end of existing file)"], ["'r+'", "Read and Write"], ["'b'", "Binary mode (add to other modes: 'rb', 'wb')"]] },
                    { type: "example", content: "Writing to a file:\nwith open('students.txt', 'w') as file:\n    file.write('Juan dela Cruz\\n')\n    file.write('Maria Santos\\n')\n    file.write('Pedro Garcia\\n')\n# 'with' automatically closes the file\n\nReading from a file:\nwith open('students.txt', 'r') as file:\n    for line in file:\n        print(line.strip())\n# Output:\n# Juan dela Cruz\n# Maria Santos\n# Pedro Garcia" },
                    { type: "note", content: "Always use the 'with' statement when working with files in Python. It automatically closes the file even if an error occurs, preventing resource leaks." },
                  ],
                  quiz: [
                    { question: "Which file mode opens a file for WRITING and creates it if it doesn't exist?", options: ["'r'", "'a'", "'w'", "'r+'"], answer: 2, explanation: "Mode 'w' opens for writing. If the file doesn't exist, it creates it. If it exists, it overwrites the content." },
                    { question: "The advantage of using 'with open()' in Python is:", options: ["It reads files faster", "It automatically closes the file even if an error occurs", "It converts the file to binary format", "It compresses the file for storage"], answer: 1, explanation: "The 'with' statement ensures the file is properly closed after the block exits, even if an exception occurs." },
                  ],
                },
              },
              {
                id: "cc1102-m2t2", title: "Exception Handling",
                content: {
                  heading: "Exception Handling", term: "MIDTERM", module: "Module 2: File Handling and Exception Handling",
                  objectives: ["Define exceptions and runtime errors", "Use try-except blocks to handle exceptions", "Raise custom exceptions"],
                  sections: [
                    { type: "h2", content: "Exception Handling" },
                    { type: "definition", content: "Exception — An error that occurs during program execution (runtime). If not handled, exceptions cause the program to crash. Exception handling allows programs to respond gracefully to errors." },
                    { type: "h3", content: "Common Python Exceptions" },
                    { type: "table", content: "Common Exceptions", headers: ["Exception", "Cause"], rows: [["ZeroDivisionError", "Dividing by zero"], ["ValueError", "Invalid value for a function (int('abc'))"], ["FileNotFoundError", "Opening a non-existent file"], ["IndexError", "Accessing invalid list index"], ["TypeError", "Operation on incompatible types"], ["NameError", "Using an undefined variable"]] },
                    { type: "example", content: "try-except block:\ntry:\n    num = int(input('Enter a number: '))\n    result = 100 / num\n    print('Result:', result)\nexcept ZeroDivisionError:\n    print('Error: Cannot divide by zero!')\nexcept ValueError:\n    print('Error: Please enter a valid number!')\nfinally:\n    print('Program finished.')  # Always runs" },
                    { type: "note", content: "The 'finally' block always executes — whether an exception occurred or not. It is used for cleanup tasks like closing files or releasing resources." },
                  ],
                  quiz: [
                    { question: "A ZeroDivisionError occurs when:", options: ["A variable has no value", "The program runs out of memory", "A number is divided by zero", "A file is not found"], answer: 2, explanation: "ZeroDivisionError is raised when a program attempts to divide by zero." },
                    { question: "The 'finally' block in exception handling:", options: ["Only runs if an exception occurs", "Only runs if no exception occurs", "Always runs regardless of whether an exception occurred", "Replaces the except block"], answer: 2, explanation: "The finally block ALWAYS executes — whether an exception was raised or not. Used for cleanup code." },
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
            id: "cc1102-m3", title: "Module 3: Introduction to Data Structures",
            topics: [
              {
                id: "cc1102-m3t1", title: "Stacks and Queues",
                content: {
                  heading: "Stacks and Queues", term: "FINALS", module: "Module 3: Introduction to Data Structures",
                  objectives: ["Define stacks and queues", "Explain LIFO and FIFO principles", "Implement basic stack and queue operations"],
                  sections: [
                    { type: "h2", content: "Linear Data Structures" },
                    { type: "definition", content: "Data Structure — A way of organizing and storing data in a computer so that it can be accessed and modified efficiently. Choice of data structure affects algorithm performance." },
                    { type: "h3", content: "Stack" },
                    { type: "definition", content: "Stack — A LIFO (Last In, First Out) data structure. The last element added is the first to be removed. Like a stack of plates — you add and remove from the top." },
                    { type: "list", content: "Stack Operations", items: ["push(item) — Add item to top of stack", "pop() — Remove and return item from top", "peek() — View top item without removing", "is_empty() — Check if stack is empty", "size() — Return number of items"] },
                    { type: "example", content: "Real-world Stack examples:\n• Browser back button (history stack)\n• Undo function in text editors\n• Function call stack in programming\n• Reversing a string" },
                    { type: "h3", content: "Queue" },
                    { type: "definition", content: "Queue — A FIFO (First In, First Out) data structure. The first element added is the first to be removed. Like a line at the cashier — first person in line is served first." },
                    { type: "list", content: "Queue Operations", items: ["enqueue(item) — Add item to the rear/back", "dequeue() — Remove and return item from front", "peek() — View front item without removing", "is_empty() — Check if queue is empty"] },
                    { type: "example", content: "Real-world Queue examples:\n• Print queue (printer jobs)\n• Customer service ticket system\n• CPU scheduling in operating systems\n• Keyboard input buffer" },
                  ],
                  quiz: [
                    { question: "A Stack follows which principle?", options: ["FIFO (First In, First Out)", "LIFO (Last In, First Out)", "FILO (First In, Last Out)", "LILO (Last In, Last Out)"], answer: 1, explanation: "A Stack is LIFO — Last In, First Out. The last item pushed is the first item popped." },
                    { question: "Which is a real-world example of a QUEUE?", options: ["Browser back button", "Undo function in an editor", "A print queue for printer jobs", "Function call stack"], answer: 2, explanation: "A print queue is FIFO — the first document sent to the printer is the first to be printed." },
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
    id: "it1201",
    code: "IT 1201",
    title: "Discrete Mathematics",
    shortTitle: "IT 1201",
    units: 3,
    description: "Covers mathematical structures fundamental to computer science: logic, set theory, relations, functions, graph theory, combinatorics, and proofs.",
    terms: [
      {
        id: "prelim", label: "PRELIM",
        modules: [
          {
            id: "it1201-m1", title: "Module 1: Logic and Propositional Calculus",
            topics: [
              {
                id: "it1201-m1t1", title: "Propositions and Logical Connectives",
                content: {
                  heading: "Propositions and Logical Connectives", term: "PRELIM", module: "Module 1: Logic and Propositional Calculus",
                  objectives: ["Define propositions and their truth values", "Identify and apply logical connectives", "Construct truth tables for compound propositions"],
                  sections: [
                    { type: "h2", content: "Propositional Logic" },
                    { type: "definition", content: "Proposition — A declarative statement that is either TRUE (T) or FALSE (F), but not both. Questions, commands, and exclamations are NOT propositions." },
                    { type: "example", content: "Propositions:\n• '2 + 2 = 4' → TRUE (proposition)\n• 'Manila is the capital of the Philippines' → TRUE (proposition)\n• 'How are you?' → NOT a proposition (question)\n• 'x + 1 = 5' → NOT a proposition (truth depends on x; it's a predicate)" },
                    { type: "h2", content: "Logical Connectives" },
                    { type: "table", content: "Logical Connectives", headers: ["Name", "Symbol", "Read As", "True When..."], rows: [["Negation", "¬p", "NOT p", "p is false"], ["Conjunction", "p ∧ q", "p AND q", "Both p and q are true"], ["Disjunction", "p ∨ q", "p OR q", "At least one is true"], ["Exclusive OR", "p ⊕ q", "p XOR q", "Exactly one is true (not both)"], ["Conditional", "p → q", "If p, then q", "p is false OR q is true"], ["Biconditional", "p ↔ q", "p if and only if q", "p and q have same truth value"]] },
                    { type: "h2", content: "Truth Table for Conditional (p → q)" },
                    { type: "table", content: "Conditional Truth Table", headers: ["p", "q", "p → q"], rows: [["T", "T", "T"], ["T", "F", "F"], ["F", "T", "T"], ["F", "F", "T"]] },
                    { type: "note", content: "KEY RULE: p → q is FALSE only when p is TRUE and q is FALSE. In all other cases (false hypothesis), the implication is vacuously true. This confuses many students!" },
                    { type: "h2", content: "Converse, Inverse, and Contrapositive" },
                    { type: "table", content: "Related Conditionals", headers: ["Statement", "Form", "Logically Equivalent To"], rows: [["Original", "p → q", "(itself)"], ["Converse", "q → p", "Inverse (¬p → ¬q)"], ["Inverse", "¬p → ¬q", "Converse"], ["Contrapositive", "¬q → ¬p", "Original (p → q)"]] },
                    { type: "example", content: "Original: If it rains (p), then the ground is wet (q).\nConverse: If ground is wet → it rained. (NOT equivalent)\nInverse: If it doesn't rain → ground is not wet. (NOT equivalent)\nContrapositive: If ground is NOT wet → it didn't rain. (Equivalent to original)" },
                  ],
                  quiz: [
                    { question: "p → q is FALSE when:", options: ["p is false and q is true", "p is true and q is true", "p is true and q is false", "p is false and q is false"], answer: 2, explanation: "A conditional p → q is only false when the hypothesis p is TRUE and the conclusion q is FALSE." },
                    { question: "The contrapositive of 'p → q' is:", options: ["q → p", "¬p → ¬q", "¬q → ¬p", "p → ¬q"], answer: 2, explanation: "Contrapositive switches and negates both parts: ¬q → ¬p. It is logically equivalent to the original." },
                    { question: "Which of the following is NOT a proposition?", options: ["2 is an even number.", "All cats are mammals.", "What time is it?", "The Earth is flat."], answer: 2, explanation: "A question ('What time is it?') is not a proposition — propositions must be declarative statements with a truth value." },
                  ],
                },
              },
              {
                id: "it1201-m1t2", title: "Truth Tables and Tautologies",
                content: {
                  heading: "Truth Tables, Tautologies, and Logical Equivalence", term: "PRELIM", module: "Module 1: Logic and Propositional Calculus",
                  objectives: ["Construct truth tables for compound propositions", "Identify tautologies and contradictions", "Prove logical equivalence using truth tables"],
                  sections: [
                    { type: "h2", content: "Tautologies and Contradictions" },
                    { type: "definition", content: "Tautology — A compound proposition that is ALWAYS TRUE regardless of the truth values of its components. Example: p ∨ ¬p ('It rains or it does not rain')." },
                    { type: "definition", content: "Contradiction — A compound proposition that is ALWAYS FALSE. Example: p ∧ ¬p ('It rains AND it does not rain')." },
                    { type: "definition", content: "Contingency — A proposition that is neither a tautology nor a contradiction — its truth value depends on its components." },
                    { type: "h2", content: "De Morgan's Laws" },
                    { type: "list", content: "De Morgan's Laws", items: ["Law 1: ¬(p ∧ q) ≡ ¬p ∨ ¬q — NOT(p AND q) ≡ (NOT p) OR (NOT q)", "Law 2: ¬(p ∨ q) ≡ ¬p ∧ ¬q — NOT(p OR q) ≡ (NOT p) AND (NOT q)"] },
                    { type: "example", content: "De Morgan's in Programming:\nInstead of: NOT (x > 5 AND y < 3)\nWrite: (x <= 5) OR (y >= 3)\n\nInstead of: NOT (a == 0 OR b == 0)\nWrite: (a != 0) AND (b != 0)" },
                    { type: "table", content: "Key Logical Equivalences", headers: ["Law", "Equivalence"], rows: [["Double Negation", "¬¬p ≡ p"], ["Idempotent (AND)", "p ∧ p ≡ p"], ["Idempotent (OR)", "p ∨ p ≡ p"], ["Identity (AND)", "p ∧ T ≡ p"], ["Identity (OR)", "p ∨ F ≡ p"], ["Domination (AND)", "p ∧ F ≡ F"], ["Domination (OR)", "p ∨ T ≡ T"], ["Absorption", "p ∨ (p ∧ q) ≡ p"]] },
                  ],
                  quiz: [
                    { question: "A tautology is a statement that is:", options: ["Always false", "Sometimes true, sometimes false", "Always true", "Undefined"], answer: 2, explanation: "A tautology is always TRUE regardless of the truth values of its component propositions." },
                    { question: "Which correctly expresses De Morgan's Law: ¬(p ∧ q)?", options: ["¬p ∧ ¬q", "¬p ∨ ¬q", "p ∨ ¬q", "¬p ∧ q"], answer: 1, explanation: "De Morgan's Law 1: ¬(p ∧ q) ≡ ¬p ∨ ¬q" },
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
            id: "it1201-m2", title: "Module 2: Set Theory and Relations",
            topics: [
              {
                id: "it1201-m2t1", title: "Set Theory Fundamentals",
                content: {
                  heading: "Set Theory Fundamentals", term: "MIDTERM", module: "Module 2: Set Theory and Relations",
                  objectives: ["Define sets, subsets, and operations on sets", "Apply Venn diagrams", "Solve problems using set operations"],
                  sections: [
                    { type: "h2", content: "Sets" },
                    { type: "definition", content: "Set — An unordered collection of distinct objects called elements. Sets are usually denoted by capital letters: A, B, S. Elements are listed in curly braces: A = {1, 2, 3}." },
                    { type: "h2", content: "Set Notation" },
                    { type: "table", content: "Set Notation", headers: ["Symbol", "Meaning", "Example"], rows: [["∈", "is an element of", "3 ∈ {1,2,3}"], ["∉", "is NOT an element of", "5 ∉ {1,2,3}"], ["∅ or {}", "empty set (null set)", "The set with no elements"], ["|A|", "cardinality (number of elements)", "|{a,b,c}| = 3"], ["⊆", "subset of", "{1,2} ⊆ {1,2,3}"], ["⊂", "proper subset of", "{1,2} ⊂ {1,2,3}"], ["℘(A)", "power set (all subsets)", "℘({1,2}) = {∅,{1},{2},{1,2}}"]] },
                    { type: "h2", content: "Set Operations" },
                    { type: "table", content: "Set Operations", headers: ["Operation", "Symbol", "Definition", "Example (A={1,2,3}, B={2,3,4})"], rows: [["Union", "A ∪ B", "All elements in A or B (or both)", "{1,2,3,4}"], ["Intersection", "A ∩ B", "Elements in BOTH A and B", "{2,3}"], ["Difference", "A − B", "Elements in A but NOT in B", "{1}"], ["Complement", "Ā or A'", "All elements NOT in A (relative to universal set U)", "Depends on U"], ["Symmetric Diff.", "A ⊕ B", "Elements in A or B but NOT both", "{1,4}"]] },
                    { type: "example", content: "Given: U = {1,2,3,4,5,6,7,8,9,10}, A = {1,2,3,4,5}, B = {3,4,5,6,7}\nA ∪ B = {1,2,3,4,5,6,7}\nA ∩ B = {3,4,5}\nA − B = {1,2}\nB − A = {6,7}\nĀ (complement of A) = {6,7,8,9,10}" },
                    { type: "note", content: "Power Set Rule: If |A| = n, then |℘(A)| = 2ⁿ. So if A has 3 elements, it has 2³ = 8 subsets." },
                  ],
                  quiz: [
                    { question: "If A = {1,2,3} and B = {2,3,4}, what is A ∩ B?", options: ["{1,2,3,4}", "{2,3}", "{1,4}", "{1,2,3,4,5}"], answer: 1, explanation: "Intersection = elements in BOTH sets. Both A and B contain 2 and 3. A ∩ B = {2,3}." },
                    { question: "How many subsets does the set {a, b, c} have?", options: ["6", "7", "8", "9"], answer: 2, explanation: "Power set formula: 2ⁿ = 2³ = 8. Subsets include ∅, {a}, {b}, {c}, {a,b}, {a,c}, {b,c}, {a,b,c}." },
                    { question: "The set A − B means:", options: ["Elements in both A and B", "Elements in A or B", "Elements in A but NOT in B", "Elements NOT in A"], answer: 2, explanation: "A − B = {x | x ∈ A and x ∉ B} — elements belonging to A but not B." },
                  ],
                },
              },
              {
                id: "it1201-m2t2", title: "Relations and Functions",
                content: {
                  heading: "Relations and Functions", term: "MIDTERM", module: "Module 2: Set Theory and Relations",
                  objectives: ["Define relations and functions", "Identify types of functions", "Determine domain, codomain, and range"],
                  sections: [
                    { type: "h2", content: "Relations" },
                    { type: "definition", content: "Relation — A set of ordered pairs (a, b) where a is from set A and b is from set B. Written as R ⊆ A × B." },
                    { type: "table", content: "Properties of Relations on a Set A", headers: ["Property", "Definition", "Example"], rows: [["Reflexive", "For all a ∈ A: (a, a) ∈ R", "a = a (equality relation)"], ["Symmetric", "If (a, b) ∈ R, then (b, a) ∈ R", "Friendship (if A is B's friend, B is A's friend)"], ["Transitive", "If (a,b) ∈ R and (b,c) ∈ R, then (a,c) ∈ R", "a ≤ b and b ≤ c → a ≤ c"], ["Anti-symmetric", "If (a,b) and (b,a) ∈ R, then a = b", "Less-than-or-equal ≤"]] },
                    { type: "definition", content: "Equivalence Relation — A relation that is reflexive, symmetric, AND transitive." },
                    { type: "h2", content: "Functions" },
                    { type: "definition", content: "Function — A relation where each element of the domain maps to EXACTLY ONE element in the codomain. f: A → B" },
                    { type: "table", content: "Types of Functions", headers: ["Type", "Definition", "Example"], rows: [["One-to-one (Injective)", "Different inputs → different outputs. No two x values map to same y", "f(x) = 2x"], ["Onto (Surjective)", "Every element of codomain is mapped to (range = codomain)", "f(x) = x for f: R → R"], ["Bijective", "Both one-to-one AND onto. Has an inverse", "f(x) = x + 1"]] },
                    { type: "note", content: "For functions: Domain = all inputs; Codomain = all possible outputs declared; Range = actual outputs produced." },
                  ],
                  quiz: [
                    { question: "An equivalence relation must be:", options: ["Reflexive only", "Symmetric and transitive only", "Reflexive, symmetric, AND transitive", "Anti-symmetric"], answer: 2, explanation: "Equivalence relation = reflexive + symmetric + transitive." },
                    { question: "A function f is bijective when it is:", options: ["One-to-one only", "Onto only", "Both one-to-one and onto", "Neither one-to-one nor onto"], answer: 2, explanation: "Bijective = injective (one-to-one) AND surjective (onto)." },
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
            id: "it1201-m3", title: "Module 3: Graph Theory and Combinatorics",
            topics: [
              {
                id: "it1201-m3t1", title: "Graph Theory Basics",
                content: {
                  heading: "Graph Theory", term: "FINALS", module: "Module 3: Graph Theory and Combinatorics",
                  objectives: ["Define graphs, vertices, and edges", "Distinguish directed from undirected graphs", "Apply graph concepts to real-world problems"],
                  sections: [
                    { type: "h2", content: "Introduction to Graph Theory" },
                    { type: "definition", content: "Graph G = (V, E) — A mathematical structure consisting of a set of Vertices (V) and a set of Edges (E) connecting pairs of vertices." },
                    { type: "table", content: "Graph Terminology", headers: ["Term", "Definition", "Example"], rows: [["Vertex (Node)", "A fundamental unit of the graph", "Cities on a map"], ["Edge", "A connection between two vertices", "Roads between cities"], ["Degree", "Number of edges incident to a vertex", "How many roads lead to a city"], ["Path", "A sequence of vertices connected by edges", "A route from city A to B"], ["Cycle", "A path that begins and ends at the same vertex", "A circular route"], ["Connected Graph", "There is a path between every pair of vertices", "All cities reachable from any city"]] },
                    { type: "table", content: "Types of Graphs", headers: ["Type", "Description", "Use Case"], rows: [["Undirected", "Edges have no direction; (u,v) = (v,u)", "Social networks (friendship is mutual)"], ["Directed (Digraph)", "Edges have direction; (u,v) ≠ (v,u)", "Web links, Twitter follows"], ["Weighted", "Edges have associated numerical values", "Road distances, costs"], ["Complete Graph (Kₙ)", "Every vertex connected to every other vertex", "Fully connected networks"]] },
                    { type: "example", content: "Handshaking Lemma: The sum of all vertex degrees = 2 × number of edges.\nFor a graph with 4 vertices each of degree 3: sum of degrees = 4 × 3 = 12 → number of edges = 12/2 = 6." },
                    { type: "h3", content: "Euler and Hamilton Paths" },
                    { type: "table", content: "Euler vs Hamilton", headers: ["Type", "Visits...", "Condition for Existence"], rows: [["Euler Path", "Every EDGE exactly once", "Exactly 0 or 2 vertices with odd degree"], ["Euler Circuit", "Every EDGE; starts and ends at same vertex", "ALL vertices have even degree"], ["Hamilton Path", "Every VERTEX exactly once", "No simple necessary/sufficient condition"], ["Hamilton Circuit", "Every VERTEX; starts and ends at same vertex", "NP-complete problem"]] },
                  ],
                  quiz: [
                    { question: "A graph where every pair of vertices is connected by an edge is called:", options: ["Bipartite graph", "Complete graph", "Tree", "Sparse graph"], answer: 1, explanation: "A complete graph (Kₙ) has an edge between every pair of vertices." },
                    { question: "An Euler circuit exists in a graph only if:", options: ["All vertices have odd degree", "All vertices have even degree", "Exactly 2 vertices have odd degree", "The graph is directed"], answer: 1, explanation: "Euler circuit condition: ALL vertices must have even degree." },
                    { question: "The handshaking lemma states that the sum of all degrees equals:", options: ["The number of vertices", "The number of edges squared", "Twice the number of edges", "The number of vertices times edges"], answer: 2, explanation: "Handshaking lemma: Σdeg(v) = 2|E|. Sum of degrees = twice the number of edges." },
                  ],
                },
              },
              {
                id: "it1201-m3t2", title: "Counting and Combinatorics",
                content: {
                  heading: "Counting, Permutations, and Combinations", term: "FINALS", module: "Module 3: Graph Theory and Combinatorics",
                  objectives: ["Apply the fundamental counting principle", "Compute permutations and combinations", "Solve real-world counting problems"],
                  sections: [
                    { type: "h2", content: "Counting Principles" },
                    { type: "definition", content: "Multiplication Principle — If event A can occur in m ways and event B can occur in n ways, then both A and B can occur in m × n ways." },
                    { type: "definition", content: "Addition Principle — If event A can occur in m ways and event B can occur in n ways (and they are mutually exclusive), then A or B can occur in m + n ways." },
                    { type: "h2", content: "Permutations (Order MATTERS)" },
                    { type: "definition", content: "Permutation — An ordered arrangement of r objects chosen from n distinct objects.\nFormula: P(n, r) = n! / (n − r)!\nSpecial case: P(n, n) = n! (arrange all n objects)" },
                    { type: "example", content: "How many ways can 3 students be arranged in a line from 5 students?\nP(5, 3) = 5! / (5−3)! = 5! / 2! = 120 / 2 = 60 ways" },
                    { type: "h2", content: "Combinations (Order does NOT matter)" },
                    { type: "definition", content: "Combination — Selection of r objects from n without regard to order.\nFormula: C(n, r) = n! / (r! × (n−r)!)\nAlso written as nCr or C(n,r) or (n choose r)" },
                    { type: "example", content: "How many ways to choose a committee of 3 from 5 people?\nC(5, 3) = 5! / (3! × 2!) = 120 / (6 × 2) = 10 ways\n\nNote: C(5,3) = C(5,2) = 10. This is a general rule: C(n,r) = C(n, n−r)" },
                    { type: "table", content: "Permutation vs. Combination", headers: ["", "Permutation", "Combination"], rows: [["Order", "MATTERS", "Does NOT matter"], ["Formula", "n! / (n-r)!", "n! / (r!(n-r)!)"], ["Example", "Arranging 3 people in 3 seats", "Choosing 3 pizza toppings"], ["Result (n=5, r=3)", "60", "10"]] },
                    { type: "note", content: "Quick rule: If the problem asks 'how many ARRANGEMENTS/ORDERS/SEQUENCES' → Permutation. If it asks 'how many SELECTIONS/GROUPS/COMMITTEES' → Combination." },
                  ],
                  quiz: [
                    { question: "How many ways can 4 books be arranged on a shelf?", options: ["16", "24", "12", "256"], answer: 1, explanation: "Arranging 4 books = P(4,4) = 4! = 4×3×2×1 = 24 ways." },
                    { question: "How many ways can 2 representatives be chosen from 6 students?", options: ["30", "12", "15", "36"], answer: 2, explanation: "Order doesn't matter → Combination: C(6,2) = 6!/(2!×4!) = (6×5)/(2×1) = 15 ways." },
                    { question: "P(7, 2) = ?", options: ["21", "42", "14", "28"], answer: 1, explanation: "P(7,2) = 7! / (7-2)! = 7! / 5! = 7 × 6 = 42." },
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
