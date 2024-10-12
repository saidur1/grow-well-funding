export const navLinks = [
  {
    id: crypto.randomUUID(),
    name: "Home",
    href: "/",
  },
  {
    id: crypto.randomUUID(),
    name: "About",
    href: "/about",
  },
  {
    id: crypto.randomUUID(),
    name: "Services",
    href: "",
    subLinks: [
      {
        id: crypto.randomUUID(),
        name: "Equipment-Financing",
        href: "/equipment-financing",
      },
      {
        id: crypto.randomUUID(),
        name: "Business Line of Credit",
        href: "/business-line-of-credit",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Contact us",
    href: "/contact",
  },
];

export const servicesLists = [
  {
    id: crypto.randomUUID(),
    title: "Equipment Financing",
    description:
      "These small-business loans can help growing companies cover the cost of machinery vital to their operation, ranging in scope from office furniture to medical equipment to restaurant equipment to agricultural tools.",
    icon: "https://utfs.io/f/O28eV6fH0F3pkQ4HG653KaS7uVNAQ9iLWqD0xoRwnfdCsHcl",
  },
  {
    id: crypto.randomUUID(),
    title: "Equipment Financing",
    description:
      "These small-business loans can help growing companies cover the cost of machinery vital to their operation, ranging in scope from office furniture to medical equipment to restaurant equipment to agricultural tools.",
    icon: "https://utfs.io/f/O28eV6fH0F3pkQ4HG653KaS7uVNAQ9iLWqD0xoRwnfdCsHcl",
  },
];

export const faqsForBusinessFinancing = [
  {
    id: crypto.randomUUID(),
    ques: "What Is Equipment Financing?",
    desc: "Simply put, equipment financing is a kind of small-business loan that enables the borrower to purchase vital equipment necessary to run their company. These loans cover a wide range of merchandise, spanning everything from a commercial oven, company vehicle, or fax machine. This makes equipment financing loans especially palatable to small business owners who may not have access to the capital necessary to get started.",
  },
  {
    id: crypto.randomUUID(),
    ques: "How Equipment Financing Loans Are Funded?",
    desc: "Equipment financing loans are funded by aggregated capital from an array of investors or participating banks.",
  },
  {
    id: crypto.randomUUID(),
    ques: "What are the terms?",
    desc: "As with most traditional loans, rates and terms fluctuate based on the current state of the market as well as the applicant’s qualifications. Generally, applicants can expect funding in as little as two business days or up to seven, with repayment terms spanning from one to 25 years. Fixed interest rates can be anywhere from 2%-20%, with operating history or minimum credit score standards.",
  },
  {
    id: crypto.randomUUID(),
    ques: "Who Qualifies?",
    desc: "Often, personal and business credit scores are considered when applying for equipment financing. Some lenders might require that your business has seen revenue for at least two years, reaching over $200,000 annually, for example. Further, balance sheets for your business may be necessary to secure a loan. Documents like previous tax returns or bank statements may prove helpful as well.",
  },
];
