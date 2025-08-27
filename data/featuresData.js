import FeatImage01 from "@/public/images/saas.jpg";
import FeatImage02 from "@/public/images/consultancy.jpg";
import FeatImage03 from "@/public/images/features-03-image-03.png";
export const featuresData = [
  {
    id: 1,
    image: FeatImage01,
    alt: "Features 01",
    reverse: false,
    animation: "fade-right",
    subHeading: "Accelerated efficiency. Optimized expenditure.",
    heading: "Strategy, architecture, & development of SaaS & mobile products.",
    description:
      "Our adept team creates bespoke software tailored to your needs, prioritizing innovation and precision for exceptional functionality, scalability, and user experience from conception to deployment.",
    points: [
      "Tailor-Made Solutions",
      "Focus on Innovation",
      "Functionality & Scalability",
    ],
    hoverEffect: false,
  },
  {
    id: 2,
    image: FeatImage02,
    alt: "Features 02",
    reverse: true,
    animation: "fade-left",
    subHeading: "Revamp. Revitalize",
    heading: "IT Consultancy",
    description:
      "Harnessing our deep industry expertise, we offer strategic IT consultancy services aimed at optimizing your technological infrastructure. Whether it's revamping existing systems, adopting new technologies, or implementing robust IT strategies, our consultants provide insightful guidance to drive your business forward.",
    points: [
      "Strategic IT Consultancy",
      "Diverse Expertise",
      "Business-Driven Solutions",
    ],
    hoverEffect: true,
  },
  {
    id: 3,
    image: FeatImage03,
    alt: "Features 03",
    reverse: false,
    animation: "fade-right",
    subHeading: "More speed. Less spend",
    heading: "Keep projects on schedule",
    description:
      "We offer comprehensive project management services, overseeing every aspect of your tech initiatives from inception to execution. Our adept team ensures seamless coordination, timely delivery, and efficient resource management, guaranteeing successful project outcomes.",
    points: [
      "Complete Project Oversight",
      "Seamless Coordination",
      "Efficient Resource Management",
    ],
    hoverEffect: false,
  },
];
