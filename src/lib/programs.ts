export const programs = [
  {
    slug: "intra-oral-dental-assisting",
    path: "/programs/intra-oral-dental-assisting",
    navLabel: "Intra Oral Dental Assisting Level I & II",
    shortTitle: "Intra Oral Dental Assisting Level I & II",
    overviewTitle: "INTRA ORAL DENTAL ASSISTING LEVEL I & II",
    overviewSubtitle: "Preparing you for your dental career",
    overviewExcerpt:
      "The Intra Oral Dental Assisting Level I and II course will prepare the student to assist the dentist in all dental procedures in a general practice or a specialist setting.",
    overviewExcerpt2:
      "Our state of the art facilities give students plenty of practice in real situations with modern equipment. The program includes field training in a dental office as well as extensive practical experience with knowledgeable instructors.",
    image: "student",
    imageAlt: "Intra oral dental assisting student",
    variant: "light" as const,
  },
  {
    slug: "dental-assisting-level-ii",
    path: "/programs/dental-assisting-level-ii",
    navLabel: "Dental Assisting Level II",
    shortTitle: "Dental Assisting Level II",
    overviewTitle: "DENTAL ASSISTANT LEVEL II",
    overviewSubtitle: "Become a Dental Assistant Level II in just 8 Weekends",
    overviewExcerpt:
      "The Dental Assistant Level II program is offered on weekends (Friday-Sunday) for duration of 8 weeks. It is designed to allow the individual to continue to work and learn at the same time.",
    overviewExcerpt2:
      "This program provides the student with the theoretical and practical experience of a Level II Dental Assistant. All concepts taught in the classroom are demonstrated and practiced in the clinical setting on mannequins, student partners, and clients.",
    image: "classroom",
    imageAlt: "Dental assisting level II training",
    variant: "dark" as const,
  },
] as const;

export type ProgramSlug = (typeof programs)[number]["slug"];
