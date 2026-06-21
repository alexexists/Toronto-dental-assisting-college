export const levelIiBenefitItems = [
  "Become a Dental Assistant Level II in just 8 Weekends",
  "Hybrid Learning",
  "Competitive Rates",
  "New Teaching Equipment",
  "Small Classroom Size",
  "Close to Subway, TTC and Major Auto Routes",
];

export const levelIiOverviewBenefitItems = levelIiBenefitItems;

export type LevelIiProgramPage = "overview" | "prerequisites" | "apply" | "fees";

export function getLevelIiNavItems(active: LevelIiProgramPage) {
  return [
    {
      label: "Program Overview",
      to: "/programs/dental-assisting-level-ii",
      hash: "program-content",
      active: active === "overview",
    },
    {
      label: "Prerequisites",
      to: "/programs/dental-assisting-level-ii-prerequisites",
      hash: "program-content",
      active: active === "prerequisites",
    },
    {
      label: "How to Apply",
      to: "/programs/dental-assisting-level-ii-apply",
      hash: "program-content",
      active: active === "apply",
    },
    {
      label: "Program Fees & Financing",
      to: "/programs/dental-assisting-level-ii-fees",
      hash: "program-content",
      active: active === "fees",
    },
    { label: "Our Features & Facilities", to: "/facility" },
    { label: "Student Success Stories", to: "/testimonials" },
    { label: "Common Questions", to: "/faq" },
  ];
}

export const levelIiSidebarTitle = "Dental Assisting Level II";
