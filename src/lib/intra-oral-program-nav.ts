export const intraOralBenefitItems = [
  "Become an Intra Oral Dental Assistant in 10 Months",
  "Competitive Rates",
  "New Teaching Equipment",
  "Large and Small Classroom Size",
  "Close to Subway, TTC and Major Auto Routes",
];

export const intraOralOverviewBenefitItems = [
  "Meet the requirements of the Healing Arts Radiation Protection (HARP) Act in 12 weeks!",
  ...intraOralBenefitItems,
];

export type IntraOralProgramPage = "overview" | "prerequisites" | "apply" | "fees";

export function getIntraOralNavItems(active: IntraOralProgramPage) {
  return [
    {
      label: "Program Overview",
      to: "/programs/intra-oral-dental-assisting",
      hash: "program-content",
      active: active === "overview",
    },
    {
      label: "Prerequisites",
      to: "/programs/intra-oral-dental-assisting-prerequisites",
      hash: "program-content",
      active: active === "prerequisites",
    },
    {
      label: "How to Apply",
      to: "/programs/intra-oral-dental-assisting-apply",
      hash: "program-content",
      active: active === "apply",
    },
    {
      label: "Program Fees & Financing",
      to: "/programs/intra-oral-dental-assisting-fees",
      hash: "program-content",
      active: active === "fees",
    },
    { label: "Our Features & Facilities", to: "/facility" },
    { label: "Student Success Stories", to: "/testimonials" },
    { label: "Common Questions", to: "/faq" },
  ];
}

export const intraOralSidebarTitle = "Intra Oral Dental Assisting Level I and II";
