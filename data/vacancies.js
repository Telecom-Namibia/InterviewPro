

export const vacancies = [
  { id: 1, title: "Software Engineer" },
  { id: 2, title: "Product Manager" },
  { id: 3, title: "Marketing Specialist" },
  { id: 4, title: "Data Scientist" }, // Added
  { id: 5, title: "UX Designer" }, // Added
];

export const candidates = {
  1: [
    {
      id: 101,
      name: "John Doe",
      grade: 90,
      email: "john.doe@email.com",
      phone: "+1234567890",
      address: "123 Main Street, City",
      skills: ["JavaScript", "React", "Node.js"],
      experience: "5 years",
      education: "Bachelor's in Computer Science",
      languages: ["English", "Spanish"],
      certifications: ["React Certification", "Node.js Certification"],
      projects: [
        { name: "Project A", description: "Web application using React" },
        { name: "Project B", description: "Node.js backend for data processing" },
      ],
    },
    {
      id: 102,
      name: "Jane Smith",
      grade: 85,
      email: "jane.smith@email.com",
      phone: "+9876543210",
      address: "456 Elm Avenue, Town",
      skills: ["Java", "Spring Boot", "Angular"],
      experience: "4 years",
      education: "Master's in Software Engineering",
      languages: ["English", "French"],
      certifications: ["Java Certification", "AWS Certification"],
      projects: [
        { name: "Project X", description: "Enterprise application with Java and Spring" },
        { name: "Project Y", description: "Single-page application using Angular" },
      ],
    },
    // Add more candidates here
  ],
  // Repeat the structure for other vacancies
};