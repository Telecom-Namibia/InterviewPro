    export const vacancies = [
      { 
        id: 1, 
        title: "Software Engineer",
        department: "Engineering",
        level: "Mid",
        summary: "We are looking for a Software Engineer with experience in JavaScript and React.",
        responsibilities: ["Develop new user-facing features", "Build reusable code and libraries", "Collaborate with cross-functional teams"],
        minimum_qualifications: ["Bachelor's degree in Computer Science or related field", "3+ years of experience in JavaScript and React"],
        preferred_qualifications: ["Master's degree in Computer Science or related field", "Experience with Node.js and Redux"],
        certifications: ["AWS Certified Developer - Associate", "Google Certified Professional - Cloud Developer"],
        projects: [
          { name: "Project A", description: "Developed a new feature that increased user engagement by 15%" },
          { name: "Project B", description: "Built a reusable component library that improved development efficiency by 20%" },
        ],
        interviews: [
          { 
            id: 1, 
            title: "First Round Interview",
            dateTime: "2023-11-09T19:00:16Z",
            interviewers: ["John Doe", "Jane Smith"],
            status: "set",
            description: "First round interview",
            location: "Office",
            location_url: "https://maps.google.com/office",
            interview_type: "in_person",
            duration: 30,
            reschedule_reason: "",
            reschedule_date: null,
            rejection_reasons: "",
            follow_up_actions: "Send follow-up email",
            interviewer_notes: "Candidate was well-prepared and answered all questions confidently.",
            schedule: [
              { id: 1, time: "09:00", name: "Candidate 1" },
              { id: 2, time: "09:30", name: "Candidate 2" },
              { id: 3, time: "10:00", name: "Candidate 3" },
              // More candidates...
              { id: 9, time: "12:30", name: "Candidate 9" },
              // Break from 13:00 to 14:00
              { id: 10, time: "14:00", name: "Candidate 10" },
              { id: 11, time: "14:30", name: "Candidate 11" },
              // More candidates...
            ],
            questionnaire: [
              {
                question: "What is your experience with React?",
                answers: ["None", "Beginner", "Intermediate", "Advanced"],
              },
              {
                question: "What is your experience with Node.js?",
                answers: ["None", "Beginner", "Intermediate", "Advanced"],
              },
              {
                question: "What is your experience with Redux?",
                answers: ["None", "Beginner", "Intermediate", "Advanced"],
              },
              // Add more questions here
            ],
          },
          { 
            id: 2, 
            title: "Second Round Interview",
            dateTime: "2023-11-16T19:00:16Z",
            interviewers: ["John Doe"],
            status: "set",
            description: "Second round interview",
            location: "Office",
            location_url: "https://maps.google.com/office",
            interview_type: "in_person",
            duration: 60,
            reschedule_reason: "",
            reschedule_date: null,
            rejection_reasons: "",
            follow_up_actions: "Discuss with team",
            interviewer_notes: "Candidate showed good technical skills and team fit.",
            schedule: [
              { id: 1, time: "09:00", name: "Candidate 1" },
              { id: 2, time: "09:30", name: "Candidate 2" },
              { id: 3, time: "10:00", name: "Candidate 3" },
              // More candidates...
              { id: 9, time: "12:30", name: "Candidate 9" },
              // Break from 13:00 to 14:00
              { id: 10, time: "14:00", name: "Candidate 10" },
              { id: 11, time: "14:30", name: "Candidate 11" },
            ],
          },
          // More interviews...
        ],
        questionnaire: [
          {
            question: "What is your experience with React?",
            answers: ["None", "Beginner", "Intermediate", "Advanced"],
          },
          {
            question: "What is your experience with Node.js?",
            answers: ["None", "Beginner", "Intermediate", "Advanced"],
          },
          {
            question: "What is your experience with Redux?",
            answers: ["None", "Beginner", "Intermediate", "Advanced"],
          },
          // Add more questions here
        ],
        candidates: [
          { 
            id: 1, 
            name: "Alice Johnson",
            email: "alice.johnson@example.com",
            phone: "+1 (555) 123-4567",
            grade: 20,
            summary: "I am a software engineer with experience in React and Node.js.",
            experience: ["Developed a new feature for a social media platform using React", "Built a RESTful API using Node.js"],
            education: ["Bachelor's degree in Computer Science from XYZ University"],
            skills: ["JavaScript", "React", "Node.js", "RESTful API"],
            languages:['English, Afrikaans'],
            certifications: ["AWS Certified Developer - Associate"],
            projects: [
              { name: "Project C", description: "Developed a new feature for a social media platform that increased user engagement by 10%" },
              { name: "Project D", description: "Built a RESTful API that improved data retrieval efficiency by 20%" },
            ],
            interviews: [
              { id: 3, interviewer: "Bob Lee", date: "2022-01-15", notes: "Candidate has strong experience in React" },
              { id: 4, interviewer: "Sarah Johnson", date: "2022-01-20", notes: "Candidate demonstrated excellent communication skills" },
            ],
          },
          // Add more candidate data here
        ]
      },
      { 
        id: 2, 
        title: "Product Manager",
        department: "Product",
        level: "Mid",
        summary: "We are looking for a Product Manager with experience in Agile methodologies and product development.",
        responsibilities: ["Develop product roadmap", "Collaborate with cross-functional teams", "Conduct market research"],
        minimum_qualifications: ["Bachelor's degree in Business Administration or related field", "3+ years of experience in product management"],
        preferred_qualifications: ["Master's degree in Business Administration or related field", "Experience with Agile methodologies"],
        certifications: ["Certified Scrum Product Owner (CSPO)", "Certified Product Manager (CPM)"],
        projects: [
          { name: "Project S", description: "Launched a new product that increased revenue by 20%" },
          { name: "Project T", description: "Led the development of a mobile app that received 4.5 stars on the App Store" },
        ],
      
        candidates: [
          
        ]
      },
      { 
        id: 3, 
        title: "Marketing Specialist",
        department: "Marketing",
        level: "Mid",
        summary: "We are looking for a Marketing Specialist with experience in digital marketing and social media.",
        responsibilities: ["Develop marketing campaigns", "Manage social media accounts", "Analyze marketing data"],
        minimum_qualifications: ["Bachelor's degree in Marketing or related field", "3+ years of experience in digital marketing"],
        preferred_qualifications: ["Master's degree in Marketing or related field", "Experience with Google Analytics"],
        certifications: ["Google Analytics Certification", "Facebook Blueprint Certification"],
        projects: [
          { name: "Project U", description: "Launched a successful email marketing campaign that increased sales by 15%" },
          { name: "Project V", description: "Managed a social media campaign that increased engagement by 25%" },
        ],
        
        candidates: [
          
          // Add more candidate data here
        ]
      },
      { 
        id: 4, 
        title: "Data Scientist",
        department: "Data Science",
        level: "Mid",
        summary: "We are looking for a Data Scientist with experience in machine learning and data analysis.",
        responsibilities: ["Develop machine learning models", "Analyze data", "Collaborate with cross-functional teams"],
        minimum_qualifications: ["Bachelor's degree in Computer Science, Statistics, or related field", "3+ years of experience in data analysis"],
        preferred_qualifications: ["Master's degree in Computer Science, Statistics, or related field", "Experience with Python and R"],
        certifications: ["Certified Data Scientist (CDS)", "Google Cloud Certified - Data Engineer"],
        projects: [
          { name: "Project W", description: "Developed a machine learning model that improved accuracy by 10%" },
          { name: "Project X", description: "Analyzed customer data to identify key trends and insights" },
        ],
        
        candidates: [
          
          // Add more candidate data here
        ]
      },
      { 
        id: 5, 
        title: "UX Designer",
        department: "Design",
        level: "Mid",
        summary: "We are looking for a UX Designer with experience in user research and design thinking.",
        responsibilities: ["Conduct user research", "Design user interfaces", "Collaborate with cross-functional teams"],
        minimum_qualifications: ["Bachelor's degree in Design or related field", "3+ years of experience in UX design"],
        preferred_qualifications: ["Master's degree in Design or related field", "Experience with design thinking methodologies"],
        certifications: ["Certified User Experience Professional (CUXP)", "Certified Design Thinking Professional (CDTP)"],
        projects: [
          { name: "Project Y", description: "Designed a mobile app that received 4.5 stars on the App Store" },
          { name: "Project Z", description: "Conducted user research that led to a 20% increase in user engagement" },
        ],
        
        candidates: [
        ]
      },
    ];
