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
            id: "cc1202-m5", title: "Module 5: Arrays",
            topics: [
              {
                id: "cc1202-m5t1", title: "What is an Array? & 1D Array",
                content: {
                  heading: "What is an Array? & One-Dimensional Array", term: "MIDTERM", module: "Module 5: Arrays",
                  objectives: ["Define an array and explain its purpose in programming", "Declare and use a one-dimensional (1-D) array in C", "Distinguish array elements and their index positions"],
                  sections: [
                    { type: "h2", content: "What is an Array?" },
                    { type: "definition", content: "Array — A collection of one or more values of the same data type. Each value is called an element. All elements share the same variable name but each has a unique index (subscript). Arrays can be of any type: int, float, char, etc." },
                    { type: "text", content: "Why use arrays? Consider storing grades for 100 students. Without arrays, you'd need 100 separate variables. With an array, one declaration handles all 100 values, making the program cleaner and easier to manage." },
                    { type: "note", content: "In C, index or subscript starts at 0. So for an array of size 5, valid indices are 0, 1, 2, 3, 4. The last element is at index [size-1]." },
                    { type: "h2", content: "One-Dimensional (1-D) Array" },
                    { type: "text", content: "A 1-D array is like a single row of boxes where elements are stored one after another." },
                    { type: "definition", content: "1-D Array Syntax:\ndatatype array_name[size];\n\n• datatype — the type of all elements (int, float, char)\n• array_name — a valid identifier following variable naming rules\n• size — how many elements the array can hold" },
                    { type: "example", content: "Declaring arrays:\nint num[100];       // holds 100 integers\nfloat temp[20];     // holds 20 floats\nchar ch[50];        // holds 50 characters\n\nNote: When declared inside a function, array contains garbage values until initialized." },
                    { type: "table", content: "Array Element Examples (int arr[5])", headers: ["Element", "Index", "How to Access"], rows: [["First element", "0", "arr[0]"], ["Second element", "1", "arr[1]"], ["Third element", "2", "arr[2]"], ["Fourth element", "3", "arr[3]"], ["Fifth (last) element", "4", "arr[4]"]] },
                    { type: "note", content: "Accessing an index beyond the array size (e.g., arr[10] for a size-5 array) causes undefined behavior — sometimes an error, sometimes wrong output. Always stay within bounds!" },
                    { type: "code", language: "c", content: `#include<stdio.h>\n\nint main()\n{\n    // Declaring a 1-D integer array of size 5\n    int arr[5];\n    int i;\n\n    // Assigning values to each element\n    arr[0] = 10;\n    arr[1] = 20;\n    arr[2] = 30;\n    arr[3] = 40;\n    arr[4] = 50;\n\n    // Printing all elements\n    printf("Elements of the array:\\n");\n    for(i = 0; i < 5; i++)\n    {\n        printf("arr[%d] = %d\\n", i, arr[i]);\n    }\n\n    return 0;\n}` },
                  ],
                  quiz: [
                    { question: "An array in C is:", options: ["A collection of values of different data types", "A collection of values of the same data type sharing one variable name", "A function that stores values", "A type of loop"], answer: 1, explanation: "An array stores multiple values of the SAME data type under one variable name, accessed by index." },
                    { question: "For int arr[8], what is the index of the LAST element?", options: ["8", "7", "1", "0"], answer: 1, explanation: "Array indices start at 0, so for size 8, the last valid index is 8-1 = 7." },
                    { question: "Which declaration correctly creates an array of 10 floats?", options: ["float[10] temp;", "array float temp(10);", "float temp[10];", "int temp[10.0];"], answer: 2, explanation: "Correct syntax: datatype array_name[size]; → float temp[10];" },
                    { question: "What happens when you access an array index that is out of bounds in C?", options: ["The program automatically resizes the array", "A compile-time error always occurs", "Undefined behavior — could crash or give wrong output", "The array returns 0 automatically"], answer: 2, explanation: "C does not check bounds. Accessing out-of-bounds index causes undefined behavior." },
                    { question: "How many elements can int scores[25] hold?", options: ["24", "25", "26", "0"], answer: 1, explanation: "The number in brackets is the size. scores[25] holds exactly 25 elements (index 0 to 24)." },
                  ],
                },
              },
              {
                id: "cc1202-m5t2", title: "Accessing Elements of an Array",
                content: {
                  heading: "Accessing Elements of an Array", term: "MIDTERM", module: "Module 5: Arrays",
                  objectives: ["Access specific elements of an array using subscript notation", "Use loops to read and print array elements", "Compute the sum and other operations on array elements"],
                  sections: [
                    { type: "h2", content: "Accessing Array Elements" },
                    { type: "text", content: "Elements of an array are accessed by specifying the array name followed by the subscript (index) inside square brackets. The first valid index is called the lower bound (0), and the last valid index is the upper bound (size - 1)." },
                    { type: "definition", content: "Syntax: array_name[index]\n\nExample: my_arr[0] → first element, my_arr[4] → fifth element (for size 5)" },
                    { type: "h3", content: "Example 1: Input and Print Array Elements" },
                    { type: "code", language: "c", codeInput: "11\n22\n34\n4\n34\n", content: `#include<stdio.h>\n\nint main()\n{\n    int arr[5], i;\n\n    // Input: enter 5 numbers\n    for(i = 0; i < 5; i++)\n    {\n        printf("Enter a[%d]: ", i);\n        scanf("%d", &arr[i]);\n    }\n\n    printf("\\nPrinting elements of the array:\\n\\n");\n\n    // Output: print all elements\n    for(i = 0; i < 5; i++)\n    {\n        printf("%d ", arr[i]);\n    }\n    printf("\\n");\n\n    return 0;\n}` },
                    { type: "note", content: "In scanf(), we use &arr[i] (the address-of operator) just like with regular variables. This tells scanf where in memory to store the value." },
                    { type: "h3", content: "Example 2: Sum of Array Elements" },
                    { type: "code", language: "c", codeInput: "22\n33\n56\n73\n23\n", content: `#include<stdio.h>\n\nint main()\n{\n    int arr[5], i, s = 0;\n\n    for(i = 0; i < 5; i++)\n    {\n        printf("Enter a[%d]: ", i);\n        scanf("%d", &arr[i]);\n    }\n\n    // Calculate sum\n    for(i = 0; i < 5; i++)\n    {\n        s += arr[i];  // s = s + arr[i]\n    }\n\n    printf("\\nSum of elements = %d\\n", s);\n\n    return 0;\n}` },
                    { type: "note", content: "Always initialize s = 0 before accumulating. If s has a garbage value, the sum will be wrong." },
                  ],
                  quiz: [
                    { question: "To access the THIRD element of array int data[10], you write:", options: ["data[3]", "data[2]", "data[10]", "data(3)"], answer: 1, explanation: "Array indexing starts at 0. Third element is at index 2: data[2]." },
                    { question: "In the statement scanf(\"%d\", &arr[i]), the & operator means:", options: ["Multiply arr[i] by the value", "The address of arr[i] in memory", "Print arr[i]", "Declare arr[i]"], answer: 1, explanation: "& is the address-of operator. scanf needs the memory address to store the value entered." },
                    { question: "To sum all 5 elements of int arr[5], you should initialize the sum variable s as:", options: ["s = 1", "s = arr[0]", "s = 0", "No initialization needed"], answer: 2, explanation: "Always initialize s = 0 to avoid adding garbage values. Otherwise the result is wrong." },
                    { question: "What is the upper bound index of an array declared as int x[12]?", options: ["12", "11", "13", "0"], answer: 1, explanation: "Upper bound = size - 1 = 12 - 1 = 11. Valid indices: x[0] to x[11]." },
                    { question: "A for loop that reads 7 elements into int arr[7] should use condition:", options: ["i <= 7", "i < 7", "i < 8", "i <= 6 but start at 1"], answer: 1, explanation: "for(i = 0; i < 7; i++) covers indices 0 through 6 — all 7 elements." },
                  ],
                },
              },
              {
                id: "cc1202-m5t3", title: "Initializing Array",
                content: {
                  heading: "Initializing Array", term: "MIDTERM", module: "Module 5: Arrays",
                  objectives: ["Initialize arrays at declaration using initializer lists", "Apply partial initialization rules", "Modify specific elements of an array after declaration"],
                  sections: [
                    { type: "h2", content: "Initializing a 1-D Array" },
                    { type: "text", content: "When declared inside a function, arrays contain garbage values. You can explicitly initialize them at the time of declaration using curly braces." },
                    { type: "definition", content: "Syntax:\ndatatype array_name[size] = { val1, val2, val3, ..., valN };\n\nValues are called initializers. Each is separated by a comma. Semicolon comes after the closing brace." },
                    { type: "example", content: "Initializing arrays:\nfloat temp[5] = {12.3, 4.1, 3.8, 9.5, 4.5};  // 5 floats\nint arr[9] = {11, 22, 33, 44, 55, 66, 77, 88, 99}; // 9 ints\n\n// Size can be omitted when initializing — compiler counts the values:\nfloat temp[] = {12.3, 4.1, 3.8, 9.5, 4.5};  // compiler sets size to 5\nint arr[] = {11, 22, 33, 44, 55, 66, 77, 88, 99}; // size = 9" },
                    { type: "h3", content: "Partial Initialization" },
                    { type: "note", content: "If fewer initializers are given than the array size, the remaining elements are automatically set to 0." },
                    { type: "example", content: "float temp[5] = {12.3, 4.1};\n// Result:\n// temp[0] = 12.3\n// temp[1] = 4.1\n// temp[2] = 0  (auto-filled)\n// temp[3] = 0\n// temp[4] = 0" },
                    { type: "h3", content: "Changing Array Element Values" },
                    { type: "code", language: "c", content: `#include<stdio.h>\n\nint main()\n{\n    int mark[5] = {19, 10, 8, 17, 9};\n    int i;\n\n    printf("Before modification:\\n");\n    for(i = 0; i < 5; i++)\n        printf("mark[%d] = %d\\n", i, mark[i]);\n\n    // Change specific elements\n    mark[2] = -1;  // 3rd element changed to -1\n    mark[4] = 0;   // 5th element changed to 0\n\n    printf("\\nAfter modification:\\n");\n    for(i = 0; i < 5; i++)\n        printf("mark[%d] = %d\\n", i, mark[i]);\n\n    return 0;\n}` },
                  ],
                  quiz: [
                    { question: "What are the values of temp[2], temp[3], temp[4] after: float temp[5] = {1.1, 2.2}?", options: ["Garbage values", "0, 0, 0", "1.1, 2.2, 1.1", "Undefined"], answer: 1, explanation: "Partial initialization fills remaining elements with 0. temp[2]=0, temp[3]=0, temp[4]=0." },
                    { question: "Which declaration is valid when initializing an array without specifying size?", options: ["int arr[] = {1, 2, 3};", "int[] arr = {1, 2, 3};", "int arr[0] = {1, 2, 3};", "array arr = {1, 2, 3};"], answer: 0, explanation: "int arr[] = {1, 2, 3}; is valid. The compiler counts the initializers and sets size to 3." },
                    { question: "After int x[4] = {5, 10, 15, 20}; what is x[1]?", options: ["5", "10", "15", "20"], answer: 1, explanation: "x[0]=5, x[1]=10, x[2]=15, x[3]=20." },
                    { question: "If int arr[5] is declared inside a function without initialization, its elements contain:", options: ["0", "Garbage (random) values", "-1", "NULL"], answer: 1, explanation: "Local arrays (inside functions) contain garbage values unless explicitly initialized. Global/static arrays are initialized to 0." },
                    { question: "To set the 2nd element of int scores[5] to 100, you write:", options: ["scores[2] = 100;", "scores[1] = 100;", "scores(2) = 100;", "scores.2 = 100;"], answer: 1, explanation: "2nd element is at index 1: scores[1] = 100;" },
                  ],
                },
              },
              {
                id: "cc1202-m5t4", title: "One-Dimensional Array with Functions",
                content: {
                  heading: "One-Dimensional Array with Functions", term: "MIDTERM", module: "Module 5: Arrays",
                  objectives: ["Pass a 1-D array to a function in C", "Understand that arrays are passed by reference", "Write functions that process arrays"],
                  sections: [
                    { type: "h2", content: "Passing Arrays to Functions" },
                    { type: "text", content: "When you pass an array to a function in C, you are actually passing a pointer to the first element. This means the function can modify the original array — this is called pass by reference." },
                    { type: "definition", content: "Syntax for function parameter:\nvoid functionName(datatype arrayName[], int size)\n\nWhen calling:\nfunctionName(myArray, size);\n\nNote: You do NOT use & when passing an array — the array name itself is the address of the first element." },
                    { type: "h3", content: "Example: Function to Print Array" },
                    { type: "code", language: "c", content: `#include<stdio.h>\n\n// Function to print all elements of an array\nvoid printArray(int arr[], int size)\n{\n    int i;\n    printf("Array elements: ");\n    for(i = 0; i < size; i++)\n    {\n        printf("%d ", arr[i]);\n    }\n    printf("\\n");\n}\n\n// Function to calculate sum\nint sumArray(int arr[], int size)\n{\n    int i, total = 0;\n    for(i = 0; i < size; i++)\n        total += arr[i];\n    return total;\n}\n\nint main()\n{\n    int numbers[5] = {10, 20, 30, 40, 50};\n    int n = 5;\n\n    printArray(numbers, n);\n    printf("Sum = %d\\n", sumArray(numbers, n));\n\n    return 0;\n}` },
                    { type: "note", content: "Since arrays are passed by reference, any changes made to the array inside the function WILL affect the original array in main(). This is different from regular variables which are copied." },
                  ],
                  quiz: [
                    { question: "When you pass an array to a function in C, what is actually passed?", options: ["A copy of all array elements", "A pointer (address) to the first element", "The size of the array", "The data type of the array"], answer: 1, explanation: "In C, arrays are passed by reference. The array name is a pointer to the first element. No copy is made." },
                    { question: "Which function header correctly accepts a 1-D integer array?", options: ["void show(int arr, int n)", "void show(int arr[], int n)", "void show(array arr, int n)", "void show(int[] n, arr)"], answer: 1, explanation: "Correct syntax: void show(int arr[], int n) — brackets [] indicate it's an array parameter." },
                    { question: "If a function modifies arr[2] from the passed array, the change in main() is:", options: ["Not visible — a copy was passed", "Visible — arrays are passed by reference", "Only visible if return type is int[]", "Depends on the compiler"], answer: 1, explanation: "Arrays are passed by reference. Changes inside the function affect the original array." },
                    { question: "When calling printArray(numbers, 5), what does numbers represent?", options: ["The value of numbers[0]", "The address of the first element of numbers", "A copy of the array", "The size of numbers"], answer: 1, explanation: "The array name (numbers) represents the memory address of the first element." },
                    { question: "Why must the size be passed as a separate parameter to a function that processes an array?", options: ["Because arrays shrink when passed", "Because C functions don't know the size of a passed array automatically", "Because size changes inside the function", "It is not needed, C tracks it automatically"], answer: 1, explanation: "C does not track array size when passed to a function. The programmer must pass size separately." },
                  ],
                },
              },
              {
                id: "cc1202-m5t5", title: "2D Arrays & Multidimensional Arrays",
                content: {
                  heading: "Two-Dimensional and Multidimensional Arrays", term: "MIDTERM", module: "Module 5: Arrays",
                  objectives: ["Declare and use two-dimensional arrays", "Access and initialize 2D array elements", "Understand multidimensional arrays"],
                  sections: [
                    { type: "h2", content: "Two-Dimensional Array" },
                    { type: "definition", content: "Two-Dimensional Array — An array with two subscripts (row and column). Think of it as a table or matrix with rows and columns. It is an array of 1-D arrays." },
                    { type: "definition", content: "Syntax:\ndatatype array_name[rows][columns];\n\nExample: int matrix[3][4];\nThis creates a matrix with 3 rows and 4 columns → 3 × 4 = 12 total elements." },
                    { type: "h3", content: "Accessing 2D Array Elements" },
                    { type: "text", content: "Each element is accessed with two indices: array_name[row_index][column_index]. Both row and column indices start at 0." },
                    { type: "example", content: "For int a[2][3]:\na[0][0]  a[0][1]  a[0][2]   ← row 0\na[1][0]  a[1][1]  a[1][2]   ← row 1\n\nTotal elements = 2 rows × 3 columns = 6" },
                    { type: "h3", content: "Initializing a 2D Array" },
                    { type: "example", content: "Method 1 (with inner braces per row):\nint a[3][3] = {\n    {1, 2, 3},\n    {4, 5, 6},\n    {7, 8, 9}\n};\n\nMethod 2 (single list, row by row):\nint a[3][3] = {1, 2, 3, 4, 5, 6, 7, 8, 9};" },
                    { type: "code", language: "c", content: `#include<stdio.h>\n\nint main()\n{\n    int a[3][3] = {\n        {1, 2, 3},\n        {4, 5, 6},\n        {7, 8, 9}\n    };\n    int i, j;\n\n    printf("2D Array (Matrix):\\n");\n    for(i = 0; i < 3; i++)\n    {\n        for(j = 0; j < 3; j++)\n        {\n            printf("%d\\t", a[i][j]);\n        }\n        printf("\\n");\n    }\n\n    return 0;\n}` },
                    { type: "h2", content: "Multidimensional Arrays" },
                    { type: "text", content: "C allows arrays with more than two dimensions. A 3D array, for example, can be thought of as a collection of 2D matrices." },
                    { type: "definition", content: "3D Array Syntax:\ndatatype array_name[size1][size2][size3];\n\nExample: int arr[2][3][4]; → 2 × 3 × 4 = 24 total elements\nAccess: arr[1][2][3] → last element" },
                  ],
                  quiz: [
                    { question: "How many total elements does int matrix[4][5] have?", options: ["9", "45", "20", "25"], answer: 2, explanation: "Total elements = rows × columns = 4 × 5 = 20." },
                    { question: "Which correctly accesses the element at row 2, column 3 of array a?", options: ["a[2][3]", "a[3][2]", "a[1][2]", "a[2,3]"], answer: 2, explanation: "Row 2 is index 1 (0-based), column 3 is index 2. So: a[1][2]." },
                    { question: "How do you declare a 3-row, 4-column integer 2D array named grid?", options: ["int grid[4][3];", "int grid[3][4];", "int grid(3)(4);", "array grid[3,4];"], answer: 1, explanation: "Correct: int grid[3][4]; — first bracket is rows, second is columns." },
                    { question: "When initializing int b[2][2] = {1, 2, 3, 4}, what is b[1][0]?", options: ["2", "3", "4", "1"], answer: 1, explanation: "Elements fill row by row: b[0][0]=1, b[0][1]=2, b[1][0]=3, b[1][1]=4. So b[1][0]=3." },
                    { question: "For int arr[2][3][4], the total number of elements is:", options: ["9", "24", "14", "12"], answer: 1, explanation: "2 × 3 × 4 = 24 elements." },
                  ],
                },
              },
            ],
          },
          {
            id: "cc1202-m6", title: "Module 6: Passing Arrays to a Function",
            topics: [
              {
                id: "cc1202-m6t1", title: "Passing 1-D Array to a Function",
                content: {
                  heading: "Passing 1-D Array to a Function", term: "MIDTERM", module: "Module 6: Passing Arrays to a Function",
                  objectives: ["Pass a one-dimensional array to a function", "Understand how C passes arrays (by address)", "Write functions that receive, process, and return results from arrays"],
                  sections: [
                    { type: "h2", content: "Passing a 1-D Array" },
                    { type: "text", content: "In C, passing an array to a function means passing the address (pointer) of the first element. Changes inside the function reflect in the original array — this is called pass by reference." },
                    { type: "definition", content: "Function declaration:\nvoid functionName(datatype arrayName[], int size)\n\nEquivalent declaration (both are valid):\nvoid functionName(datatype *arrayName, int size)\n\nWhen calling:\nfunctionName(myArray, size);" },
                    { type: "h3", content: "Example: Find Maximum in Array" },
                    { type: "code", language: "c", content: `#include<stdio.h>\n\n// Function to find maximum element\nint findMax(int arr[], int n)\n{\n    int i, max = arr[0];  // assume first element is max\n\n    for(i = 1; i < n; i++)\n    {\n        if(arr[i] > max)\n            max = arr[i];\n    }\n    return max;\n}\n\n// Function to find minimum element\nint findMin(int arr[], int n)\n{\n    int i, min = arr[0];\n\n    for(i = 1; i < n; i++)\n    {\n        if(arr[i] < min)\n            min = arr[i];\n    }\n    return min;\n}\n\nint main()\n{\n    int scores[6] = {85, 92, 78, 95, 67, 88};\n\n    printf("Scores: 85 92 78 95 67 88\\n");\n    printf("Maximum: %d\\n", findMax(scores, 6));\n    printf("Minimum: %d\\n", findMin(scores, 6));\n\n    return 0;\n}` },
                    { type: "note", content: "When passing arr[] to a function, you write only the array name without brackets: findMax(scores, 6). Writing scores[] in the call would be a syntax error." },
                    { type: "h3", content: "Modifying Array via Function" },
                    { type: "code", language: "c", content: `#include<stdio.h>\n\n// Double every element of the array (modifies original)\nvoid doubleAll(int arr[], int n)\n{\n    int i;\n    for(i = 0; i < n; i++)\n        arr[i] *= 2;  // same as arr[i] = arr[i] * 2\n}\n\nint main()\n{\n    int nums[4] = {3, 6, 9, 12};\n    int i;\n\n    printf("Before: ");\n    for(i = 0; i < 4; i++) printf("%d ", nums[i]);\n\n    doubleAll(nums, 4);\n\n    printf("\\nAfter doubling: ");\n    for(i = 0; i < 4; i++) printf("%d ", nums[i]);\n    printf("\\n");\n\n    return 0;\n}` },
                  ],
                  quiz: [
                    { question: "When passing a 1-D array to a function, C passes:", options: ["A full copy of all elements", "Only the first element", "The address (pointer) of the first element", "The size of the array"], answer: 2, explanation: "C passes arrays by reference — the address of the first element is passed, not a copy." },
                    { question: "Which is the correct way to call a function that accepts a 1-D array named data?", options: ["process(data[], 10)", "process(&data, 10)", "process(data, 10)", "process(*data[], 10)"], answer: 2, explanation: "Use just the array name: process(data, 10). No brackets or & needed." },
                    { question: "If a function modifies element arr[0] in a passed array, in main() arr[0] will be:", options: ["Unchanged — a copy was passed", "Changed — arrays are passed by reference", "Reset to 0", "Unchanged — only the return value matters"], answer: 1, explanation: "Since arrays are passed by reference, changes inside the function affect the original array." },
                    { question: "Which function header is valid for receiving a 1-D float array?", options: ["void show(float arr, int n)", "void show(float arr[])", "void show(float arr[], int n)", "void show(arr float[], int n)"], answer: 2, explanation: "Correct: void show(float arr[], int n) — data type, name with brackets, and size parameter." },
                    { question: "To find the average of array elements in a function, what does the function need to return?", options: ["The array", "A float or double value", "The last element", "Nothing — just print inside"], answer: 1, explanation: "Average is typically a decimal value, so the function should return float or double." },
                  ],
                },
              },
              {
                id: "cc1202-m6t2", title: "Passing 2-D Array to a Function",
                content: {
                  heading: "Passing 2-D Array to a Function", term: "MIDTERM", module: "Module 6: Passing Arrays to a Function",
                  objectives: ["Pass a two-dimensional array to a function in C", "Understand why column size must be specified in the parameter", "Process 2D arrays using functions"],
                  sections: [
                    { type: "h2", content: "Passing a 2-D Array" },
                    { type: "text", content: "Passing a 2D array is similar to 1D, but with one important rule: the number of columns MUST be specified in the function parameter. The row count is optional, but columns are required so C can calculate memory addresses correctly." },
                    { type: "definition", content: "Function declaration for 2D array:\nvoid functionName(datatype arrayName[][COLS], int rows)\n\nThe column size (COLS) must be a constant — it cannot be left blank. The row count can be left blank or passed as a parameter.\n\nExample:\nvoid display(int a[][4], int rows)" },
                    { type: "code", language: "c", content: `#include<stdio.h>\n\n#define COLS 3\n\n// Display a 2D array\nvoid display2D(int a[][COLS], int rows)\n{\n    int i, j;\n    printf("Matrix:\\n");\n    for(i = 0; i < rows; i++)\n    {\n        for(j = 0; j < COLS; j++)\n        {\n            printf("%4d", a[i][j]);\n        }\n        printf("\\n");\n    }\n}\n\n// Calculate sum of all elements\nint sumMatrix(int a[][COLS], int rows)\n{\n    int i, j, total = 0;\n    for(i = 0; i < rows; i++)\n        for(j = 0; j < COLS; j++)\n            total += a[i][j];\n    return total;\n}\n\nint main()\n{\n    int mat[2][COLS] = {\n        {1, 2, 3},\n        {4, 5, 6}\n    };\n\n    display2D(mat, 2);\n    printf("Sum of all elements: %d\\n", sumMatrix(mat, 2));\n\n    return 0;\n}` },
                    { type: "note", content: "Why must column size be specified? C stores 2D arrays in row-major order. To find element a[i][j], C calculates: base_address + (i × number_of_columns + j) × element_size. Without knowing COLS, this calculation is impossible." },
                    { type: "table", content: "1-D vs 2-D Array Passing", headers: ["", "1-D Array", "2-D Array"], rows: [["Parameter syntax", "int arr[], int n", "int arr[][COLS], int rows"], ["Size needed", "Pass n separately", "Pass rows; COLS must be compile-time constant"], ["Blank brackets", "Allowed: int arr[]", "Only first (row) bracket can be blank"], ["Memory layout", "Linear", "Row-major (row by row)"]] },
                  ],
                  quiz: [
                    { question: "When passing a 2D array to a function, which dimension MUST be specified in the parameter?", options: ["Number of rows", "Number of columns", "Both rows and columns", "Neither — both can be blank"], answer: 1, explanation: "The number of columns must be specified so C can correctly calculate memory offsets. Rows can be omitted or passed as parameter." },
                    { question: "Which is a valid function parameter for a 2D int array with 5 columns?", options: ["void f(int a[][], int r)", "void f(int a[][5], int r)", "void f(int a[5][], int r)", "void f(int[][] a, int r)"], answer: 1, explanation: "void f(int a[][5], int r) — column size (5) must be specified; row can be omitted." },
                    { question: "C stores 2D arrays in memory using:", options: ["Column-major order", "Random order", "Row-major order", "Diagonal order"], answer: 2, explanation: "C uses row-major order: all elements of row 0 are stored first, then row 1, etc." },
                    { question: "The formula to locate element a[i][j] in memory is:", options: ["base + i + j", "base + (i × ROWS + j) × size", "base + (i × COLS + j) × size", "base + i × j × size"], answer: 2, explanation: "Row-major formula: base_address + (i × COLS + j) × element_size." },
                    { question: "To use #define COLS 4 in a function parameter for a 2D array:", options: ["void f(int a[][COLS], int r) — valid", "void f(int a[][COLS], int r) — invalid; must use literal", "void f(int a[COLS][], int r) — valid", "COLS cannot be used in parameters"], answer: 0, explanation: "#define creates a compile-time constant, so COLS can be used as the column size in array parameters." },
                  ],
                },
              },
            ],
          },
          {
            id: "cc1202-m7", title: "Module 7: Strings",
            topics: [
              {
                id: "cc1202-m7t1", title: "Introduction to Strings",
                content: {
                  heading: "What is a String? & String Literals", term: "MIDTERM", module: "Module 7: Strings",
                  objectives: ["Define a string in C as an array of characters", "Understand the null terminator character \\0", "Distinguish between string literals and character arrays"],
                  sections: [
                    { type: "h2", content: "What is a String?" },
                    { type: "definition", content: "String — In C, a string is a one-dimensional array of characters terminated by a null character (\\0). The null character (ASCII 0) marks the end of the string." },
                    { type: "text", content: "C does not have a built-in string type like other languages. Strings are simply arrays of char with a special '\\0' terminator at the end. Every string function in C relies on finding this \\0 to know where the string ends." },
                    { type: "h2", content: "String Literals" },
                    { type: "definition", content: "String Literal — A sequence of characters enclosed in double quotes. Example: \"Hello\"\n\nWhen you write \"Hello\" in C, the compiler automatically stores it as: H e l l o \\0 (6 characters including the null terminator)." },
                    { type: "example", content: "String literal declarations:\nchar greeting[] = \"Hello\";  // size = 6 (5 chars + \\0)\nchar name[20] = \"Juan\";     // 20-char array, first 4 + \\0 stored\n\nCharacter by character equivalent:\nchar greeting[] = {'H','e','l','l','o','\\0'};\n\nNote: Always ensure array size is at least length + 1 to fit the \\0." },
                    { type: "note", content: "Double quotes \" \" → String (array of chars with \\0)\nSingle quotes ' ' → Single character (char type)\n\"A\" is NOT the same as 'A'. \"A\" is a string with 2 bytes: 'A' and '\\0'." },
                    { type: "code", language: "c", content: `#include<stdio.h>\n\nint main()\n{\n    // String as char array\n    char greeting[] = "Hello, World!";\n\n    // Printing the string\n    printf("%s\\n", greeting);\n\n    // Accessing individual characters\n    printf("First char: %c\\n", greeting[0]);\n    printf("Sixth char: %c\\n", greeting[5]);\n\n    // The null terminator is at greeting[13]\n    printf("Is it null? %d\\n", greeting[13] == '\\0'); // prints 1 (true)\n\n    return 0;\n}` },
                  ],
                  quiz: [
                    { question: "In C, a string is:", options: ["A built-in data type", "A 1-D array of characters terminated by \\0", "A sequence of numbers", "A function that stores text"], answer: 1, explanation: "C strings are char arrays ending with the null terminator \\0, which marks the end." },
                    { question: "What is the minimum array size needed to store the string \"Juan\"?", options: ["4", "5", "3", "6"], answer: 1, explanation: "\"Juan\" has 4 characters + 1 null terminator (\\0) = minimum size of 5." },
                    { question: "What does the null character \\0 do in a C string?", options: ["Prints a space", "Marks the end of the string", "Converts the string to uppercase", "Adds a newline"], answer: 1, explanation: "\\0 (null terminator) signals the end of a string. All string functions use it to stop processing." },
                    { question: "Which is the correct way to declare a string that can hold up to 19 characters?", options: ["char s[19];", "char s[20];", "string s[20];", "char s(20);"], answer: 1, explanation: "For 19 characters, declare char s[20] — 19 chars + 1 for the null terminator." },
                    { question: "What is the difference between 'A' and \"A\" in C?", options: ["They are identical", "'A' is a single char; \"A\" is a string (char + \\0)", "'A' is a string; \"A\" is a single char", "Both require 2 bytes"], answer: 1, explanation: "'A' is a single char (1 byte). \"A\" is a string: 'A' + '\\0' = 2 bytes." },
                  ],
                },
              },
              {
                id: "cc1202-m7t2", title: "C Programming Strings",
                content: {
                  heading: "C Programming Strings: Input and Output", term: "MIDTERM", module: "Module 7: Strings",
                  objectives: ["Read and print strings using printf/scanf and puts/gets", "Understand %s format specifier", "Handle multi-word string input with fgets"],
                  sections: [
                    { type: "h2", content: "printf() and scanf() with Strings" },
                    { type: "text", content: "The format specifier %s is used to read and print strings. When using scanf(\"%s\", name), do NOT use the & operator — the array name is already an address." },
                    { type: "definition", content: "printf(\"%s\", str)  — prints the string until \\0\nscanf(\"%s\", str)   — reads a word (stops at space/newline), no & needed\nputs(str)          — prints string + automatic newline\ngets(str)          — reads an entire line including spaces (deprecated in C11)" },
                    { type: "code", language: "c", codeInput: "Juan\n", content: `#include<stdio.h>\n\nint main()\n{\n    char name[50];\n\n    printf("Enter your name: ");\n    scanf("%s", name);  // No & needed for arrays\n\n    printf("Hello, %s!\\n", name);\n    printf("Using puts: ");\n    puts(name);  // puts adds \\n automatically\n\n    return 0;\n}` },
                    { type: "note", content: "scanf(\"%s\") stops reading at whitespace. So \"Juan dela Cruz\" would only read \"Juan\".\nTo read a full line with spaces, use: fgets(name, sizeof(name), stdin);" },
                    { type: "h3", content: "String as Array of Characters" },
                    { type: "code", language: "c", content: `#include<stdio.h>\n\nint main()\n{\n    // Initialize string directly\n    char str[] = "Programming";\n    int i;\n\n    printf("String: %s\\n", str);\n    printf("Characters one by one:\\n");\n\n    // Access each character using index\n    for(i = 0; str[i] != '\\0'; i++)\n    {\n        printf("str[%d] = %c\\n", i, str[i]);\n    }\n\n    return 0;\n}` },
                  ],
                  quiz: [
                    { question: "To print a string variable called city using printf, you write:", options: ["printf(\"%c\", city)", "printf(\"%d\", city)", "printf(\"%s\", city)", "printf(\"%s\", &city)"], answer: 2, explanation: "%s is the format specifier for strings. No & needed for arrays." },
                    { question: "What is the difference between scanf(\"%s\") and fgets() for string input?", options: ["scanf reads the full line; fgets reads one word", "scanf reads one word (stops at space); fgets reads the full line", "They are identical", "fgets cannot read spaces"], answer: 1, explanation: "scanf(\"%s\") stops at whitespace. fgets() reads the entire line including spaces." },
                    { question: "Why is & NOT used with scanf(\"%s\", name) for a char array?", options: ["It is optional but recommended", "char arrays are already addresses; & is not needed", "scanf doesn't support & with strings", "Using & would cause an overflow"], answer: 1, explanation: "An array name is already a pointer to the first element (address), so & is redundant." },
                    { question: "What does puts(str) do that printf(\"%s\", str) does not?", options: ["puts adds a newline automatically", "puts formats the output", "puts converts to uppercase", "puts adds a null terminator"], answer: 0, explanation: "puts() prints the string AND automatically adds a newline (\\n) at the end." },
                    { question: "A for loop: for(i=0; str[i]!='\\0'; i++) processes characters until:", options: ["i reaches 50", "A space is found", "The null terminator is found", "The array is full"], answer: 2, explanation: "str[i] != '\\0' is the standard way to iterate through a C string until the null terminator." },
                  ],
                },
              },
              {
                id: "cc1202-m7t3", title: "String Manipulation Functions",
                content: {
                  heading: "String Manipulation using Library Functions", term: "MIDTERM", module: "Module 7: Strings",
                  objectives: ["Use string.h library functions to manipulate strings", "Apply strlen, strcpy, strcat, strcmp, strlwr, strupr correctly", "Understand the return values and effects of each function"],
                  sections: [
                    { type: "h2", content: "String Library: #include <string.h>" },
                    { type: "text", content: "C provides a powerful set of string handling functions in the <string.h> header. These built-in functions handle common string operations so you don't have to write them from scratch." },
                    { type: "table", content: "String Functions Summary", headers: ["Function", "Purpose", "Returns"], rows: [["strlen(s)", "Length of string (excluding \\0)", "int (number of chars)"], ["strcpy(dest, src)", "Copy src into dest", "dest pointer"], ["strcat(dest, src)", "Append src to end of dest", "dest pointer"], ["strcmp(s1, s2)", "Compare two strings", "0 if equal, <0 if s1<s2, >0 if s1>s2"], ["strlwr(s)", "Convert string to lowercase", "pointer to s"], ["strupr(s)", "Convert string to uppercase", "pointer to s"]] },
                    { type: "h3", content: "strlen() — String Length" },
                    { type: "code", language: "c", content: `#include<stdio.h>\n#include<string.h>\n\nint main()\n{\n    char str1[] = "Hello";\n    char str2[] = "Programming";\n\n    printf("Length of '%s' = %lu\\n", str1, strlen(str1));\n    printf("Length of '%s' = %lu\\n", str2, strlen(str2));\n\n    return 0;\n}` },
                    { type: "h3", content: "strcpy() — String Copy" },
                    { type: "code", language: "c", content: `#include<stdio.h>\n#include<string.h>\n\nint main()\n{\n    char src[] = "Laguna University";\n    char dest[50];  // destination must be large enough\n\n    strcpy(dest, src);  // copy src into dest\n\n    printf("Source: %s\\n", src);\n    printf("Destination: %s\\n", dest);\n\n    return 0;\n}` },
                    { type: "note", content: "strcpy(dest, src) — destination comes FIRST, source comes second. The destination array must be large enough to hold the copied string including \\0." },
                    { type: "h3", content: "strcat() — String Concatenation" },
                    { type: "code", language: "c", content: `#include<stdio.h>\n#include<string.h>\n\nint main()\n{\n    char str1[50] = "Hello, ";\n    char str2[] = "World!";\n\n    printf("Before strcat: %s\\n", str1);\n    strcat(str1, str2);  // appends str2 to str1\n    printf("After strcat:  %s\\n", str1);\n\n    return 0;\n}` },
                    { type: "h3", content: "strcmp() — String Comparison" },
                    { type: "code", language: "c", content: `#include<stdio.h>\n#include<string.h>\n\nint main()\n{\n    char s1[] = "apple";\n    char s2[] = "apple";\n    char s3[] = "banana";\n    int result;\n\n    result = strcmp(s1, s2);\n    printf("strcmp(\\"apple\\", \\"apple\\") = %d\\n", result);  // 0 = equal\n\n    result = strcmp(s1, s3);\n    printf("strcmp(\\"apple\\", \\"banana\\") = %d\\n", result); // <0 apple comes first\n\n    return 0;\n}` },
                    { type: "h3", content: "strlwr() and strupr() — Case Conversion" },
                    { type: "note", content: "strlwr() and strupr() are Turbo C functions. In standard GCC (and most modern compilers), use tolower() and toupper() from <ctype.h> instead." },
                    { type: "code", language: "c", content: `#include<stdio.h>\n#include<string.h>\n#include<ctype.h>\n\n// Standard C: convert string to lowercase\nvoid strToLower(char str[])\n{\n    int i;\n    for(i = 0; str[i] != '\\0'; i++)\n        str[i] = tolower(str[i]);\n}\n\n// Standard C: convert string to uppercase\nvoid strToUpper(char str[])\n{\n    int i;\n    for(i = 0; str[i] != '\\0'; i++)\n        str[i] = toupper(str[i]);\n}\n\nint main()\n{\n    char str[] = "Hello World";\n\n    printf("Original:  %s\\n", str);\n\n    strToLower(str);\n    printf("Lowercase: %s\\n", str);\n\n    strToUpper(str);\n    printf("Uppercase: %s\\n", str);\n\n    return 0;\n}` },
                  ],
                  quiz: [
                    { question: "What does strlen(\"Computer\") return?", options: ["9", "8", "7", "0"], answer: 1, explanation: "strlen counts characters up to (not including) \\0. \"Computer\" has 8 characters." },
                    { question: "In strcpy(dest, src), which is the correct order of parameters?", options: ["src first, then dest", "dest first, then src", "Order doesn't matter", "Both must be the same size"], answer: 1, explanation: "strcpy(destination, source) — destination comes first. The source is copied INTO destination." },
                    { question: "strcat(str1, str2) does what?", options: ["Copies str2 over str1", "Compares str1 and str2", "Appends str2 to the end of str1", "Swaps str1 and str2"], answer: 2, explanation: "strcat appends (concatenates) str2 to the end of str1. str1 must have enough space." },
                    { question: "strcmp(\"abc\", \"abc\") returns:", options: ["1", "-1", "0", "3"], answer: 2, explanation: "strcmp returns 0 when both strings are identical (equal)." },
                    { question: "strlwr(str) converts str to:", options: ["Uppercase", "Lowercase", "Title case", "Removes spaces"], answer: 1, explanation: "strlwr converts all alphabetic characters in str to lowercase." },
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
            id: "it1201-m5", title: "Module 5: Basics of Counting",
            topics: [
              {
                id: "it1201-m5t1", title: "Fundamental Counting Principle",
                content: {
                  heading: "Fundamental Counting Principle", term: "MIDTERM", module: "Module 5: Basics of Counting",
                  objectives: ["Describe the fundamental counting principle", "Apply multiplication and addition rules to counting problems", "Determine the total number of outcomes in a probability problem"],
                  sections: [
                    { type: "h2", content: "Introduction to Counting" },
                    { type: "text", content: "Counting problems appear frequently in computer science: How many Java identifiers of length 8 are possible? How many routes exist between two cities? How many users are friends with at least one of three people? Systematic counting methods help answer these efficiently." },
                    { type: "h2", content: "Fundamental Counting Principle" },
                    { type: "definition", content: "Fundamental Counting Principle — If event A can happen in m ways and event B can happen in n ways, then both events A and B can happen in m × n ways (multiplication rule). The formula: Total outcomes = a × b" },
                    { type: "h3", content: "Examples" },
                    { type: "example", content: "Example 1: Flip a coin and roll a die.\n→ Coin has 2 outcomes, die has 6 outcomes.\n→ Total = 2 × 6 = 12 ways\n\nExample 2: Draw 2 cards from 52 without replacing.\n→ First draw: 52 ways; Second draw: 51 ways.\n→ Total = 52 × 51 = 2,652 ordered pairs\n\nExample 3: Piano note (88 keys) AND banjo string (5 strings).\n→ Total = 88 × 5 = 440 combinations" },
                    { type: "h2", content: "Sample Spaces" },
                    { type: "definition", content: "Sample Space (S) — A listing of ALL possible outcomes of an experiment.\n\nExample: Flipping a coin AND rolling a die:\nS = {H1, H2, H3, H4, H5, H6, T1, T2, T3, T4, T5, T6}\n|S| = 12 outcomes — matches 2 × 6 = 12 ✓" },
                    { type: "note", content: "The counting principle lets you determine the number of outcomes WITHOUT having to list them all in the sample space. This is especially useful when numbers are large." },
                    { type: "table", content: "Counting Principle Applications", headers: ["Scenario", "Calculation", "Answer"], rows: [["Coin flip and die roll", "2 × 6", "12"], ["8-character binary string", "2⁸", "256"], ["3-character password (26 letters)", "26 × 26 × 26", "17,576"], ["License plate (3 letters + 3 digits)", "26³ × 10³", "17,576,000"]] },
                  ],
                  quiz: [
                    { question: "If a shirt comes in 4 colors and 3 sizes, how many shirt options are there?", options: ["7", "12", "16", "24"], answer: 1, explanation: "Fundamental counting principle: 4 colors × 3 sizes = 12 shirt options." },
                    { question: "How many 3-digit binary strings exist?", options: ["3", "6", "8", "9"], answer: 2, explanation: "Each position has 2 choices (0 or 1): 2 × 2 × 2 = 2³ = 8." },
                    { question: "A sample space S lists:", options: ["Only the most likely outcomes", "All possible outcomes of an experiment", "Only successful outcomes", "Average outcomes"], answer: 1, explanation: "Sample space S is the complete list of all possible outcomes of an experiment." },
                    { question: "How many ordered pairs of cards can be drawn from 52 cards (without replacement)?", options: ["104", "52", "2,652", "2,704"], answer: 2, explanation: "52 ways for first card × 51 ways for second = 52 × 51 = 2,652." },
                    { question: "A password has 2 letters followed by 3 digits. How many passwords are possible (26 letters, 10 digits)?", options: ["270,000", "676,000", "6,760,000", "26,000"], answer: 1, explanation: "26 × 26 × 10 × 10 × 10 = 676 × 1,000 = 676,000." },
                  ],
                },
              },
              {
                id: "it1201-m5t2", title: "Counting Arguments",
                content: {
                  heading: "Counting Arguments: Rules of Sum, Product, and Inclusion-Exclusion", term: "MIDTERM", module: "Module 5: Basics of Counting",
                  objectives: ["Apply the Rule of Sum and Rule of Product to decompose counting problems", "Use the Inclusion-Exclusion Principle for overlapping sets", "Solve multi-step counting problems systematically"],
                  sections: [
                    { type: "h2", content: "Counting Arguments" },
                    { type: "text", content: "Counting arguments use set sizes and logical reasoning to count outcomes. The Rule of Sum and Rule of Product are the two fundamental tools for decomposing complex problems." },
                    { type: "h2", content: "Rule of Sum" },
                    { type: "definition", content: "Rule of Sum — If event A can happen in m ways and event B can happen in n ways, and A and B are mutually exclusive (cannot happen at the same time), then A OR B can happen in m + n ways." },
                    { type: "example", content: "Example: A store has 56 salted eggs and 105 unsalted eggs.\nAssuming each customer buys only one type:\nCustomers who bought either type = 56 + 105 = 161\n\n(Mutually exclusive: A ∩ B = ∅ means add directly)" },
                    { type: "h2", content: "Inclusion-Exclusion Principle" },
                    { type: "definition", content: "Inclusion-Exclusion (2 sets) — When events can overlap (A ∩ B ≠ ∅):\n|A ∪ B| = |A| + |B| − |A ∩ B|\n\nFor 3 sets:\n|A ∪ B ∪ C| = |A| + |B| + |C| − |A∩B| − |A∩C| − |B∩C| + |A∩B∩C|" },
                    { type: "example", content: "Example 1 (2 sets): Customers bought 56 salted, 105 unsalted, 25 bought BOTH:\n|S ∪ U| = 56 + 105 − 25 = 136 customers\n\nExample 2 (3 sets): Students taking foreign languages:\nFrench=32, Spanish=45, German=20\nFrench∩Spanish=15, German∩Spanish=12, French∩German=10\nAll three=6\n|F∪S∪G| = 32+45+20−15−12−10+6 = 66 students" },
                    { type: "h2", content: "Rule of Product (Combined with Sum)" },
                    { type: "example", content: "A boy goes from X → Y → Z.\nX to Y: 3 bus routes OR 2 train routes = 3+2 = 5 ways (Rule of Sum)\nY to Z: 4 bus routes OR 5 train routes = 4+5 = 9 ways (Rule of Sum)\nX to Z total: 5 × 9 = 45 ways (Rule of Product)" },
                    { type: "table", content: "Rule Summary", headers: ["Rule", "When to Use", "Formula"], rows: [["Rule of Sum", "Either A or B (mutually exclusive)", "|A| + |B|"], ["Rule of Product", "Both A and B (sequential/independent)", "|A| × |B|"], ["Inclusion-Exclusion", "A or B (with possible overlap)", "|A| + |B| − |A∩B|"]] },
                  ],
                  quiz: [
                    { question: "32 students take French, 45 take Spanish, and no student takes both. How many take either?", options: ["13", "32", "45", "77"], answer: 3, explanation: "Mutually exclusive → Rule of Sum: 32 + 45 = 77." },
                    { question: "Using Inclusion-Exclusion: |A| = 56, |B| = 105, |A ∩ B| = 25. What is |A ∪ B|?", options: ["161", "136", "186", "81"], answer: 1, explanation: "|A ∪ B| = 56 + 105 − 25 = 136." },
                    { question: "The Rule of Product applies when:", options: ["Choosing A OR B (exclusive)", "Doing A AND B in sequence", "A and B overlap", "A and B are identical"], answer: 1, explanation: "Rule of Product: when both events occur sequentially or independently: m × n ways." },
                    { question: "French=32, Spanish=45, both=15. How many take at least one?", options: ["92", "77", "62", "60"], answer: 2, explanation: "|F ∪ S| = 32 + 45 − 15 = 62." },
                    { question: "How many bit strings of length 8 are there?", options: ["8", "16", "64", "256"], answer: 3, explanation: "Each bit has 2 choices: 2⁸ = 256. Rule of Product applied 8 times." },
                  ],
                },
              },
            ],
          },
          {
            id: "it1201-m6", title: "Module 6: Pigeonhole Principle",
            topics: [
              {
                id: "it1201-m6t1", title: "Pigeonhole Principle",
                content: {
                  heading: "Pigeonhole Principle", term: "MIDTERM", module: "Module 6: Pigeonhole Principle",
                  objectives: ["State and prove the Pigeonhole Principle", "Apply the basic and generalized pigeonhole principle", "Recognize when the pigeonhole principle applies to a problem"],
                  sections: [
                    { type: "h2", content: "The Pigeonhole Principle" },
                    { type: "definition", content: "Pigeonhole Principle — If n pigeons are placed into k pigeonholes and n > k, then at least one pigeonhole contains MORE than one pigeon.\n\nSimply: If you have more items than containers, at least one container must hold more than one item." },
                    { type: "text", content: "The principle seems obvious but leads to elegant and non-trivial proofs in mathematics and computer science. It proves existence (something MUST happen) without constructing the specific case." },
                    { type: "h3", content: "Finite Set and Proof" },
                    { type: "text", content: "Consider a function f from a set X (n elements) to a set Y (n elements). If f is not onto (surjective), there's some y ∈ Y not mapped to — so the image has at most n−1 elements, meaning f can't be 1-to-1 either. This is the pigeonhole principle: more 'pigeons' (domain elements) than 'holes' (range elements) forces collisions." },
                    { type: "h2", content: "Basic Pigeonhole Examples" },
                    { type: "example", content: "Example 1: In a group of 13 people, at least 2 must share the same birth month.\n→ 12 months (holes), 13 people (pigeons)\n→ By pigeonhole, at least one month has 2 people.\n\nExample 2: Among 5 points chosen inside a 2×2 square, at least 2 are within √2 distance of each other.\n→ Divide square into 4 quadrants (holes), 5 points (pigeons) → one quadrant has ≥ 2 points." },
                    { type: "h2", content: "Generalized Pigeonhole Principle" },
                    { type: "definition", content: "Generalized Pigeonhole Principle — If n items are placed into k boxes, then at least one box contains at least ⌈n/k⌉ items (where ⌈ ⌉ is the ceiling function, rounding up).\n\nFormula: At least one box has ≥ ⌈n/k⌉ items" },
                    { type: "example", content: "Example: 100 students, 12 months of birth.\nGeneralized: ⌈100/12⌉ = ⌈8.33⌉ = 9\n→ At least 9 students share the same birth month.\n\nExample: 25 students in 4 sections:\n⌈25/4⌉ = ⌈6.25⌉ = 7\n→ At least one section has ≥ 7 students." },
                    { type: "table", content: "Basic vs. Generalized Pigeonhole", headers: ["Version", "Condition", "Conclusion"], rows: [["Basic", "n items in k holes, n > k", "At least one hole has ≥ 2 items"], ["Generalized", "n items in k holes", "At least one hole has ≥ ⌈n/k⌉ items"]] },
                  ],
                  quiz: [
                    { question: "The Pigeonhole Principle states that if n > k items fill k containers, then:", options: ["All containers have exactly n/k items", "At least one container has more than one item", "All containers are full", "No container is empty"], answer: 1, explanation: "Pigeonhole: with more items than containers, at least one container holds more than one item." },
                    { question: "In a group of 13 people, why must at least 2 share a birth month?", options: ["13 > 12 months, so by pigeonhole, one month has ≥ 2 people", "13 is a prime number", "There are 13 months in a year", "People always share birthdays"], answer: 0, explanation: "13 people (pigeons), 12 months (holes). Since 13 > 12, at least one month has at least 2 people." },
                    { question: "Using the generalized pigeonhole principle: 50 students, 7 days of the week. At least how many students share the same birth day?", options: ["7", "8", "6", "50"], answer: 1, explanation: "⌈50/7⌉ = ⌈7.14⌉ = 8. At least 8 students share the same birth day of the week." },
                    { question: "The pigeonhole principle is useful because it:", options: ["Requires listing all cases", "Proves something MUST exist without finding the specific case", "Only works with small numbers", "Requires a computer to solve"], answer: 1, explanation: "Pigeonhole proves existence — it guarantees a property exists without identifying the specific instance." },
                    { question: "If 30 socks (10 red, 10 blue, 10 green) are in a drawer, how many must you pull to guarantee a matching pair?", options: ["2", "3", "4", "10"], answer: 2, explanation: "3 colors (holes). Pull 4 socks (pigeons > holes) → by pigeonhole, at least 2 socks must match. But actually you need 4 to guarantee — wait, 3 colors means pulling 4 guarantees a pair. With 4 socks and 3 colors, at least 2 are the same color." },
                  ],
                },
              },
              {
                id: "it1201-m6t2", title: "Applications of Pigeonhole Principle",
                content: {
                  heading: "Applications of the Pigeonhole Principle", term: "MIDTERM", module: "Module 6: Pigeonhole Principle",
                  objectives: ["Apply pigeonhole to subset cardinality problems", "Understand the Chinese Remainder Theorem connection", "Distinguish constructive from non-constructive proofs"],
                  sections: [
                    { type: "h2", content: "Common Properties in Large Groups" },
                    { type: "text", content: "The pigeonhole principle guarantees that in any sufficiently large group, some shared property must exist. This is used to prove theorems in number theory, graph theory, and combinatorics." },
                    { type: "h3", content: "Subset Cardinalities" },
                    { type: "example", content: "Application: Among any 5 integers, at least two must have the same remainder when divided by 4.\n→ Only 4 possible remainders (0, 1, 2, 3) when dividing by 4.\n→ 5 integers (pigeons), 4 remainders (holes)\n→ At least 2 integers share the same remainder (are congruent mod 4)." },
                    { type: "example", content: "Application: Among any n+1 integers from {1, 2, ..., 2n}, at least one pair must have one number dividing the other.\n→ Each integer can be written as 2^k × m where m is odd.\n→ Odd parts range in {1, 3, 5, ..., 2n-1} — only n possible odd values.\n→ n+1 integers but only n odd parts → two integers share the same odd part." },
                    { type: "h2", content: "Constructive vs. Non-Constructive Proofs" },
                    { type: "definition", content: "Constructive Proof — Shows existence by explicitly building the example. Finds the specific item.\n\nNon-Constructive Proof — Proves something exists WITHOUT finding the specific example. The pigeonhole principle produces non-constructive proofs." },
                    { type: "example", content: "Algebraic Application (Ring Theory):\nIn a finite ring R, if element a is not a zero divisor (ab=0 implies b=0), then the function x → ax is 1-to-1.\nBy the pigeonhole principle applied to finite sets: 1-to-1 on a finite set means it's also onto.\nTherefore, some b exists with ab = 1 (a has a multiplicative inverse).\nConclusion: Every non-zero-divisor in a finite ring is a unit." },
                    { type: "table", content: "Proof Types Comparison", headers: ["Type", "Method", "Example"], rows: [["Constructive", "Build the specific case directly", "Find the two integers with same birth month"], ["Non-Constructive (Pigeonhole)", "Prove it must exist without finding it", "Prove two must share a month without identifying which two"]] },
                    { type: "note", content: "The power of the Pigeonhole Principle is that it makes guaranteed existence claims about large, complex systems using simple counting — no computer search needed." },
                  ],
                  quiz: [
                    { question: "Among any 5 integers, why must at least two have the same remainder mod 4?", options: ["Because 5 > 4 remainders (0,1,2,3) — pigeonhole applies", "All integers have the same remainder", "5 is a prime number", "Remainders are always equal"], answer: 0, explanation: "Only 4 possible remainders (mod 4). With 5 integers, pigeonhole guarantees at least 2 share a remainder." },
                    { question: "A non-constructive proof:", options: ["Builds the specific example explicitly", "Proves existence without finding the specific case", "Requires trial and error", "Only works for small numbers"], answer: 1, explanation: "Non-constructive proofs (like pigeonhole) guarantee existence but don't identify the specific instance." },
                    { question: "The Pigeonhole Principle is considered non-constructive because:", options: ["It finds the specific matching case", "It proves something must exist without specifying which items are involved", "It requires extensive computation", "It only applies to birds"], answer: 1, explanation: "Pigeonhole guarantees a collision exists but doesn't tell you WHICH items collide — it's non-constructive." },
                    { question: "If a finite ring element a satisfies (ab=0 → b=0), then by pigeonhole:", options: ["a has no inverse", "a must be a zero divisor", "The map x→ax is onto (surjective), so a has an inverse", "The ring is infinite"], answer: 2, explanation: "The map x→ax is 1-to-1 (since a is not a zero divisor). On a finite set, 1-to-1 implies onto by pigeonhole, so some b satisfies ab=1." },
                    { question: "How many people are needed to guarantee at least ⌈100/12⌉ = 9 share a birth month?", options: ["100", "9", "108", "12"], answer: 0, explanation: "⌈100/12⌉ = 9. With 100 people and 12 months, at least one month has ≥ 9 people." },
                  ],
                },
              },
            ],
          },
          {
            id: "it1201-m7", title: "Module 7: Permutations and Combinations",
            topics: [
              {
                id: "it1201-m7t1", title: "Permutations",
                content: {
                  heading: "Permutations", term: "MIDTERM", module: "Module 7: Permutations and Combinations",
                  objectives: ["Define permutation and n factorial", "Compute P(n, r) using the permutation formula", "Solve problems where ORDER of selection matters"],
                  sections: [
                    { type: "h2", content: "What is a Permutation?" },
                    { type: "definition", content: "Permutation — An ordered arrangement of objects. The ORDER matters — different orderings of the same items are counted as different permutations.\n\nKey question: 'How many ARRANGEMENTS/ORDERS/SEQUENCES can be formed?'" },
                    { type: "h2", content: "n Factorial" },
                    { type: "definition", content: "n! (n factorial) — The product of all positive integers from n down to 1.\nn! = n × (n−1) × (n−2) × ... × 2 × 1\n\nSpecial case: 0! = 1 (by definition)\n\nExamples:\n3! = 3 × 2 × 1 = 6\n5! = 5 × 4 × 3 × 2 × 1 = 120\n7! = 5,040" },
                    { type: "h2", content: "Permutation Formula P(n, r)" },
                    { type: "definition", content: "P(n, r) = n! / (n − r)!\n\nWhere:\n• n = total number of distinct objects\n• r = number of objects being arranged (selected and ordered)\n\nSpecial case: P(n, n) = n! (arrange ALL n objects)" },
                    { type: "example", content: "Example 1: How many ways can 3 students be arranged in a line from 5?\nP(5, 3) = 5! / (5−3)! = 120 / 2! = 120 / 2 = 60 ways\n\nExample 2: How many 4-digit codes from digits 1–9 without repetition?\nP(9, 4) = 9! / (9−4)! = 9! / 5! = 9×8×7×6 = 3,024 codes\n\nExample 3: Arrange all 4 books on a shelf.\nP(4, 4) = 4! = 24 ways" },
                    { type: "note", content: "Permutation key words: arrange, order, sequence, schedule, rank, assign to positions. If position matters → use permutation." },
                    { type: "table", content: "Permutation Examples", headers: ["Problem", "n", "r", "Formula", "Answer"], rows: [["3 from 5 in a line", "5", "3", "5!/(5−3)! = 120/2", "60"], ["Top 3 from 8 runners", "8", "3", "8!/(8−3)! = 8×7×6", "336"], ["All 6 books on shelf", "6", "6", "6!", "720"]] },
                  ],
                  quiz: [
                    { question: "P(6, 2) = ?", options: ["15", "30", "12", "36"], answer: 1, explanation: "P(6,2) = 6!/(6-2)! = 6!/4! = 6×5 = 30." },
                    { question: "How many ways can you arrange the letters of 'CAT'?", options: ["3", "6", "9", "12"], answer: 1, explanation: "3 distinct letters, arrange all: P(3,3) = 3! = 6 ways." },
                    { question: "The value of 5! is:", options: ["25", "60", "120", "720"], answer: 2, explanation: "5! = 5 × 4 × 3 × 2 × 1 = 120." },
                    { question: "Permutations are used when:", options: ["Selecting a group without order", "Order of selection matters", "Items are identical", "All items must be selected"], answer: 1, explanation: "Permutation counts ordered arrangements — ORDER matters." },
                    { question: "How many 3-digit numbers can be formed from {1,2,3,4,5} without repetition?", options: ["10", "60", "125", "15"], answer: 1, explanation: "P(5,3) = 5!/(5−3)! = 5!/2! = 60 three-digit numbers." },
                  ],
                },
              },
              {
                id: "it1201-m7t2", title: "Combinations",
                content: {
                  heading: "Combinations", term: "MIDTERM", module: "Module 7: Permutations and Combinations",
                  objectives: ["Define combination and distinguish it from permutation", "Apply the combination formula C(n, r)", "Solve problems where ORDER does NOT matter"],
                  sections: [
                    { type: "h2", content: "What is a Combination?" },
                    { type: "definition", content: "Combination — A selection of objects where ORDER does NOT matter. Only which items are chosen matters, not the sequence.\n\nKey question: 'How many GROUPS/SELECTIONS/COMMITTEES can be formed?'" },
                    { type: "h2", content: "Combination Formula C(n, r)" },
                    { type: "definition", content: "C(n, r) = n! / (r! × (n − r)!)\n\nAlso written as: nCr or (n choose r) or C(n,r)\n\nWhere:\n• n = total items to choose from\n• r = number of items selected\n\nSymmetry property: C(n, r) = C(n, n−r)" },
                    { type: "example", content: "Example 1: How many ways to choose a committee of 3 from 5 people?\nC(5, 3) = 5! / (3! × 2!) = 120 / (6 × 2) = 10 ways\n\nExample 2: How many ways to choose 2 from 6 students?\nC(6, 2) = 6! / (2! × 4!) = (6×5) / (2×1) = 15 ways\n\nExample 3: Lotto — choose 6 from 42 numbers:\nC(42, 6) = 42! / (6! × 36!) = 5,245,786 combinations" },
                    { type: "note", content: "Symmetry shortcut: C(5, 3) = C(5, 2) = 10. Always compute with the smaller r to simplify calculations." },
                    { type: "table", content: "Permutation vs. Combination", headers: ["Feature", "Permutation", "Combination"], rows: [["Order", "MATTERS", "Does NOT matter"], ["Formula", "n! / (n−r)!", "n! / (r!(n−r)!)"], ["Key words", "arrange, order, sequence", "choose, select, group, committee"], ["Example (n=5, r=3)", "P(5,3)=60", "C(5,3)=10"], ["Which is larger?", "Always ≥ combinations", "Always ≤ permutations"]] },
                  ],
                  quiz: [
                    { question: "C(7, 2) = ?", options: ["14", "21", "42", "7"], answer: 1, explanation: "C(7,2) = 7!/(2!×5!) = (7×6)/(2×1) = 21." },
                    { question: "How many ways to choose 4 books from a shelf of 10?", options: ["5,040", "210", "40", "10"], answer: 1, explanation: "Order doesn't matter → C(10,4) = 10!/(4!×6!) = (10×9×8×7)/(4×3×2×1) = 210." },
                    { question: "Which problem uses COMBINATION (not permutation)?", options: ["Arranging 5 trophies on a shelf", "Selecting a group of 4 students from 20", "Creating a 4-digit PIN code", "Choosing gold, silver, bronze medalists"], answer: 1, explanation: "Selecting a group (committee/team) — order doesn't matter → Combination." },
                    { question: "C(8, 8) = ?", options: ["0", "8", "1", "64"], answer: 2, explanation: "C(n,n) = 1 always. There is exactly 1 way to choose all n items from n." },
                    { question: "By the symmetry property, C(10, 3) equals:", options: ["C(10, 7)", "C(3, 10)", "C(7, 3)", "C(10, 6)"], answer: 0, explanation: "Symmetry: C(n,r) = C(n, n−r). C(10,3) = C(10, 10−3) = C(10,7)." },
                  ],
                },
              },
              {
                id: "it1201-m7t3", title: "Real Life Use of Permutations and Combinations",
                content: {
                  heading: "Real Life Applications of Permutations and Combinations", term: "MIDTERM", module: "Module 7: Permutations and Combinations",
                  objectives: ["Identify real-world problems that use permutations or combinations", "Apply counting in computer architecture, biology, security, and databases", "Solve multi-domain counting problems"],
                  sections: [
                    { type: "h2", content: "Where Are Permutations and Combinations Used?" },
                    { type: "text", content: "Combinatorics is at the heart of computer science, biology, linguistics, and security. Understanding which technique (permutation or combination) applies is the first step to solving real problems." },
                    { type: "table", content: "Real Life Applications", headers: ["Field", "Application", "Technique"], rows: [["Computer Architecture", "Counting instruction sets, memory addresses, logic circuits", "Permutation / Product Rule"], ["Computational Biology", "Counting DNA sequences, protein arrangements, gene combinations", "Permutation (ordered) / Combination (unordered)"], ["Languages", "Counting valid words, sentences, or grammar structures", "Permutation"], ["Pattern Analysis", "Counting distinct patterns in signals or images", "Combination"], ["Scientific Discovery", "Experimental design — choosing which variables to test", "Combination"], ["Databases & Data Mining", "Counting query joins, table arrangements, subset selections", "Combination"], ["Operations Research", "Scheduling, routing optimization (TSP)", "Permutation"], ["Simulation", "Generating random scenarios from a sample space", "Both"], ["Security / Cryptography", "Counting possible passwords, keys, or encryption combinations", "Permutation / Combination"]] },
                    { type: "h3", content: "Security / Cryptography" },
                    { type: "example", content: "Password strength:\n• 4-digit PIN (digits 0-9): P(10,4) = 5,040 ordered (or 10⁴=10,000 with repetition)\n• 8-char password (52 letters + 10 digits, repetition allowed): 62⁸ ≈ 218 trillion\n\nEncryption key:\n• 128-bit AES key: 2¹²⁸ ≈ 3.4 × 10³⁸ possible keys → practically unbreakable\n\nThis is why longer passwords and keys are exponentially harder to crack." },
                    { type: "h3", content: "DNA and Computational Biology" },
                    { type: "example", content: "DNA strands use 4 nucleotide bases (A, T, G, C).\nA gene segment of length n has 4ⁿ possible sequences.\nFor n=10: 4¹⁰ = 1,048,576 ≈ 1 million possible 10-base sequences.\n\nChoosing which 3 genes from 20 to study (order doesn't matter):\nC(20, 3) = 1,140 combinations" },
                    { type: "h3", content: "Operations Research — Traveling Salesman" },
                    { type: "example", content: "A salesman must visit 10 cities and return home.\nNumber of possible routes = (10−1)! = 9! = 362,880\n\nFor 20 cities: 19! ≈ 1.2 × 10¹⁷ routes — impossible to check all by brute force.\nThis is why we need algorithms and heuristics for large TSP problems." },
                    { type: "note", content: "Quick rule:\n→ ORDER matters? → Permutation P(n, r) = n!/(n−r)!\n→ ORDER doesn't matter? → Combination C(n, r) = n!/(r!(n−r)!)\n→ With repetition allowed? → nʳ (product rule)" },
                  ],
                  quiz: [
                    { question: "A DNA strand of length 4 using {A,T,G,C}. How many sequences are possible (repetition allowed)?", options: ["16", "24", "256", "64"], answer: 2, explanation: "Each position has 4 choices: 4⁴ = 256. Product rule with repetition." },
                    { question: "A researcher selects 3 experimental variables from 8 available ones. Order doesn't matter. How many ways?", options: ["336", "56", "24", "512"], answer: 1, explanation: "Selection without order → C(8,3) = 8!/(3!×5!) = 56 ways." },
                    { question: "How many routes exist for a salesman visiting 5 cities and returning home (TSP)?", options: ["5!", "(5−1)! = 24", "5", "120"], answer: 1, explanation: "TSP routes = (n−1)! = (5−1)! = 4! = 24." },
                    { question: "A 6-character password using 62 characters (letters + digits) with repetition. Total passwords:", options: ["62 × 6", "P(62,6)", "62⁶", "C(62,6)"], answer: 2, explanation: "With repetition allowed: 62⁶ (product rule). Each of 6 positions has 62 choices." },
                    { question: "In a database, choosing 4 tables to JOIN from 10 available (order irrelevant). Use:", options: ["P(10,4) = 5040", "C(10,4) = 210", "10⁴ = 10000", "10 × 4 = 40"], answer: 1, explanation: "Selecting tables without caring about order → C(10,4) = 210." },
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
