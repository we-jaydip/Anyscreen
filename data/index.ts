import About from "@/app/about/page";

export const navItems = [
  {
    name: "About",
    link: "/about/", // Add trailing slash
  },
  {
    name: "Portfolio",
    link: "/portfolio/",
  },
  {
    name: "Services",
    link: "/services/",
  },
  {
    name: "Contact",
    link: "/contact/",
  },
];

export const gridItems = [
  {
    id: 1,
    title: "No website? You’re running a kirana store in a digital age.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Even your best employee takes breaks, Your website never does.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Missing 90% of customers who research online first",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "In 2025, your website is the front door to your business. ",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Your next customer just Googled you. What did they see?",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "How OfficeBing Skyrocketed with AnyScreen!",
    des: "We helped OfficeBing revolutionize their online presence.",
    img: "/officebing.png",
    iconLists: ["/figma.svg", "/wordpress.svg", "/google.svg", "/elementor.svg", "/anyscreen.png"],
    link: "https://officebing.com/",
    pinTitle: "officebing.com", // ✅ new key
  },
  {
    id: 2,
    title: "We Helped CEMtics Power Up Their Digital Presence!",
    des: "We transformed CEMtics' vision into a powerful, user-friendly website",
    img: "/cemtics.png",
    iconLists: ["/figma.svg", "/wordpress.svg", "/google.svg", "/elementor.svg", "/anyscreen.png"],
    link: "https://cemtics.com/",
    pinTitle: "cemtics.com", // ✅ new key
  },
  {
    id: 3,
    title: "Seawoods Hospital Goes Digital, Care Meets Clicks!",
    des: "We built a sleek, patient-friendly website for Seawoods Hospital.",
    img: "/seawoods.png",
    iconLists: ["/figma.svg", "/wordpress.svg", "/google.svg", "/elementor.svg", "/anyscreen.png"],
    link: "https://seawoodshospital.com/",
    pinTitle: "seawoodshospital.com", // ✅ new key
  },
  {
    id: 4,
    title: "StockVista Decode the Market with Data-Driven Insights",
    des: "We crafted a clean, professional website for StockVista.",
    img: "/stockvista.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://stockvista.in/",
    pinTitle: "stockvista.in", // ✅ new key
  },
];


export const testimonials = [
  {
    quote:
      "Our new website perfectly captures the essence of OfficeBing — modern, tech-smart, and growth-ready. The team understood our vision and delivered a high-performing site that our clients love. Great work!",
    name: "Ajay Shaha",
    title: "Director of officebing",
    image: "/clients/officebing-logo.svg",
  },
  {
    quote:
      "From concept to launch, the team brought clarity to our complex tech offerings. The website is now aligned with our global presence and technical expertise. Seamless delivery and great collaboration!",
    name: "Akash Sharma",
    title: "CEO of CEMtics",
    image: "/clients/cemtics-logo.svg",
  },
  {
    quote:
      "We needed a website that matched our patient-first approach — and they nailed it. It’s fast, clean, and easy for patients to navigate. Appointment bookings have never been smoother!",
    name: "Dr.Sanjay Dhar",
    title: "Seawoods Hospital – Multispeciality Healthcare",
     image: "/clients/seawood-logo.svg",
  },
  {
    quote:
      "Our site now reflects the sharp, data-driven nature of our research. From layout to content structure, everything is investor-friendly and professional. Couldn’t have asked for better!",
    name: "Manav Goswami",
    title: "StockVista – Administrator",
     image: "/clients/stockvista-logo.svg",
  },
  {
    quote:
      "The website is clean, crisp, and speaks directly to our audience. The team translated our vision into a digital platform that’s both informative and visually engaging. Truly leveled up our online presence!",
    name: "RA Omkar Thakur",
    title: "CEO of Filterfinance",
     image: "clients/ff-logo.svg",
  },
];

export const companies = [
  {
    id: 1,
    name: "stockvista",
    img: "/stockvista-black.png",
    nameImg: "/stockviista.png",
  },
  {
    id: 2,
    name: "officebing",
    img: "/officebiing.png",
    nameImg: "/officebiing.png",
  },
  {
    id: 3,
    name: "Seawoods",
    img: "/seowoood.png",
    nameImg: "/seowoood.png",
  },
  {
    id: 4,
    name: "cemetiics",
    img: "/cemetiics.png",
    nameImg: "/cemetiics.png",
  },
  {
    id: 5,
    name: "filterfinance",
    img: "/ffwhite.png",
    nameImg: "/ffwhite.png",
  },
  
];

export const workExperience = [
  {
    id: 1,
    title: "Custom Coded Websites",
    desc: "We create fully custom-coded websites from scratch using cutting-edge technologies—no templates, no limits. Our scalable, clean code highlights your unique brand, enterprise-grade security.",
    className: "md:col-span-2",
    thumbnail: "/custom-website-icn.png",
  },
  {
    id: 2,
    title: "CMS Websites",
    desc: "We build fast, SEO-friendly websites using top CMS and no-code platforms like WordPress, Shopify, and Webflow. Our fully customizable, mobile-friendly sites give you complete control without technical hassle.",
    className: "md:col-span-2",
    thumbnail: "/cms-website-icn.png",
  },
  {
    id: 3,
    title: "Web Tools & SaaS",
    desc: "We create scalable, user-friendly SaaS products and web tools using modern cloud technologies. Our solutions are designed to deliver real value with ease of use and seamless growth.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/saas-icn.png",
  },
  {
    id: 4,
    title: "Digital Marketing",
    desc: "We connect your brand with the right people using smart, creative digital marketing—think SEO, social media, and targeted ads. From sparking interest to boosting sales, we treat your business’s online growth like our own.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/marketing-icn.png",
  },
  
];

export const socialMedia = [
  {
    id: 1,
    img: "/insta.svg",
    link: "https://www.instagram.com/anyscreen.official",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/company/anyscreentech",
  },
];

