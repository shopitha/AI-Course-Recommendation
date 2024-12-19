document.addEventListener("DOMContentLoaded", () => {
    // Store courses in localStorage if not already stored
    if (!localStorage.getItem("courses")) {
      const courses = [
        {
          id: 1,
          title: "JavaScript Mastery",
          description: "Level up your coding skills with our comprehensive JavaScript course!",
          features: ["40+ Hours of Video", "Certificate of Completion", "Access to Premium Content"],
          price: "$49.99"
        },
        {
          id: 2,
          title: "React Basics",
          description: "Learn the fundamentals of React and build dynamic web applications.",
          features: ["30+ Hours of Video", "Lifetime Access", "Interactive Projects"],
          price: "$39.99"
        },
        {
          id: 3,
          title: "Python for Data Science",
          description: "Dive deep into Python and its libraries for data analysis and visualization.",
          features: ["50+ Hours of Video", "Real-world Projects", "Lifetime Access"],
          price: "$59.99"
        },
        {
          id: 4,
          title: "Machine Learning Essentials",
          description: "An introductory course to machine learning concepts and algorithms.",
          features: ["45+ Hours of Video", "Hands-on Labs", "Certificate of Completion"],
          price: "$69.99"
        },
        {
          id: 5,
          title: "UI/UX Design Principles",
          description: "Master the art of designing intuitive and user-friendly interfaces.",
          features: ["20+ Hours of Video", "Portfolio Projects", "Downloadable Resources"],
          price: "$29.99"
        },
        {
          id: 6,
          title: "Web Development Bootcamp",
          description: "Learn to build full-stack web applications from scratch.",
          features: ["100+ Hours of Video", "Real-world Projects", "Lifetime Support"],
          price: "$99.99"
        },
        {
          id: 7,
          title: "Digital Marketing 101",
          description: "Explore the basics of SEO, SEM, and social media marketing.",
          features: ["25+ Hours of Video", "Case Studies", "Certificate of Completion"],
          price: "$39.99"
        },
        {
          id: 8,
          title: "Graphic Design Masterclass",
          description: "Learn Photoshop, Illustrator, and other graphic design tools.",
          features: ["60+ Hours of Video", "Lifetime Access", "Certificate of Completion"],
          price: "$49.99"
        },
        {
          id: 9,
          title: "AWS Cloud Practitioner",
          description: "Prepare for the AWS Cloud Practitioner Certification.",
          features: ["30+ Hours of Video", "Practice Tests", "Certificate of Completion"],
          price: "$59.99"
        },
        {
          id: 10,
          title: "Cybersecurity Fundamentals",
          description: "Understand the basics of cybersecurity and ethical hacking.",
          features: ["40+ Hours of Video", "Case Studies", "Certificate of Completion"],
          price: "$69.99"
        },
        {
          id: 11,
          title: "Blockchain Development",
          description: "Learn the fundamentals of blockchain technology and smart contracts.",
          features: ["50+ Hours of Video", "Real-world Projects", "Lifetime Access"],
          price: "$79.99"
        },
        {
          id: 12,
          title: "Kubernetes for Developers",
          description: "Get hands-on experience with Kubernetes and container orchestration.",
          features: ["35+ Hours of Video", "Real-world Projects", "Certificate of Completion"],
          price: "$59.99"
        },
        {
          id: 13,
          title: "Advanced Excel Techniques",
          description: "Become a spreadsheet wizard with advanced Excel skills.",
          features: ["20+ Hours of Video", "Lifetime Access", "Certificate of Completion"],
          price: "$29.99"
        },
        {
          id: 14,
          title: "Adobe Premiere Pro Mastery",
          description: "Learn professional video editing with Adobe Premiere Pro.",
          features: ["30+ Hours of Video", "Downloadable Resources", "Lifetime Access"],
          price: "$39.99"
        },
        {
          id: 15,
          title: "iOS App Development",
          description: "Create stunning iOS apps with Swift and Xcode.",
          features: ["40+ Hours of Video", "Real-world Projects", "Lifetime Access"],
          price: "$89.99"
        },
        {
          id: 16,
          title: "Android App Development",
          description: "Master Android app development with Kotlin.",
          features: ["50+ Hours of Video", "Real-world Projects", "Certificate of Completion"],
          price: "$89.99"
        },
        {
          id: 17,
          title: "Artificial Intelligence Basics",
          description: "An introductory course to artificial intelligence and neural networks.",
          features: ["45+ Hours of Video", "Case Studies", "Certificate of Completion"],
          price: "$79.99"
        },
        {
          id: 18,
          title: "Photography Essentials",
          description: "Learn the fundamentals of photography and editing.",
          features: ["20+ Hours of Video", "Practical Tips", "Lifetime Access"],
          price: "$19.99"
        },
        {
          id: 19,
          title: "Stock Market Trading",
          description: "Understand the basics of stock trading and investment strategies.",
          features: ["30+ Hours of Video", "Case Studies", "Certificate of Completion"],
          price: "$49.99"
        },
        {
          id: 20,
          title: "Public Speaking Mastery",
          description: "Improve your public speaking and presentation skills.",
          features: ["20+ Hours of Video", "Downloadable Templates", "Certificate of Completion"],
          price: "$29.99"
        },
        {
          id: 21,
          title: "Ethical Hacking and Penetration Testing",
          description: "Learn to identify vulnerabilities and secure systems ethically.",
          features: ["50+ Hours of Video", "Hands-on Labs", "Certificate of Completion"],
          price: "$79.99"
        }
      ];
  
      // Set courses to localStorage
      localStorage.setItem("courses", JSON.stringify(courses));
    }
  
    // Fetch courses from localStorage and display them
    const courses = JSON.parse(localStorage.getItem("courses"));
    const courseContainer = document.querySelector("#course-container");
  
    courses.forEach(course => {
      const courseElement = document.createElement("div");
      courseElement.classList.add("course");
      courseElement.innerHTML = `
        <h2>${course.title}</h2>
        <p>${course.description}</p>
        <ul>
          ${course.features.map(feature => `<li>${feature}</li>`).join("")}
        </ul>
        <p><strong>${course.price}</strong></p>
      `;
      courseContainer.appendChild(courseElement);
    });
  });
  