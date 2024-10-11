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
    href: "/services",
    subLinks: [
      {
        id: crypto.randomUUID(),
        name: "Equipment-Financing",
        href: "/",
      },
      {
        id: crypto.randomUUID(),
        name: "Business Line of Credit",
        href: "/",
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
