export type FaqBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | {
      type: "p-with-link";
      before: string;
      linkText: string;
      href: string;
      after?: string;
    };

export type IntraOralFaq = {
  id: string;
  question: string;
  blocks: FaqBlock[];
};

export const intraOralFaqs: IntraOralFaq[] = [
  {
    id: "mcures-registration",
    question:
      "Is the Intra Oral Dental Assisting Level I & II Program registered with the Ministry of Colleges, Universities, Research Excellence and Security (MCURES)?",
    blocks: [
      {
        type: "p",
        text: "Intra Oral Dental Assisting Level I & II Program is approved under the Ontario Career Colleges Act, 2005.",
      },
      {
        type: "p",
        text: "Intra Oral Dental Assisting Level I & II Program is registered under the Ontario Career Colleges Act, 2005.",
      },
    ],
  },
  {
    id: "diploma",
    question: "Do students receive a certificate or a diploma once they complete the program at the TCDHA?",
    blocks: [
      {
        type: "p",
        text: "The student will receive an official diploma upon successful completion of the program.",
      },
    ],
  },
  {
    id: "program-length",
    question: "How long is the Intra Oral Dental Assisting Level I & II Program?",
    blocks: [
      {
        type: "p",
        text: "The program is 41 weeks or approximately 10 months in duration. Students are able to complete the program in this amount of time because there is no extended summer vacation or holiday breaks. Other programs in Canada that take extended breaks within their program may take up to a year to complete.",
      },
      {
        type: "p",
        text: "Students that attend TCDHA appreciate the fact that they are able to finish the program in a shorter period of time. This allows the graduate the opportunity to seek employment sooner.",
      },
    ],
  },
  {
    id: "program-cost",
    question: "What is the cost of the program?",
    blocks: [
      {
        type: "p",
        text: "The total tuition cost is $18,490.00. The cost of books, uniforms, equipment and materials, insurance and rentals is $4,325.00.",
      },
    ],
  },
  {
    id: "hidden-fees",
    question: "Are there any hidden fees that students should be aware of?",
    blocks: [
      {
        type: "p",
        text: "NO! There are no hidden fees. TCDHA believes that students should know about all fees well in advance so that they can prepare for the financial commitment of the program.",
      },
    ],
  },
  {
    id: "payment-options",
    question: "Does TCDHA have payment options?",
    blocks: [
      {
        type: "p",
        text: "YES! Payments at TCDHA are monthly in order to assist students with their finances during the program.",
      },
    ],
  },
  {
    id: "student-loans",
    question: "Does TCDHA accept student loans?",
    blocks: [
      {
        type: "p",
        text: "YES! All provincial student loans across Canada are available as an option for payment.",
      },
      {
        type: "p-with-link",
        before:
          "Students enrolled in the Intra Oral Dental Assisting Level I & II Program may be eligible for loans, grants, or bursaries granted under the Ontario Students Assistance Program (OSAP). Financial assistance may be available for those who qualify. Please ",
        linkText: "click here",
        href: "https://www.ontario.ca/page/osap-ontario-student-assistance-program",
        after: " to visit the OSAP website for more information.",
      },
      {
        type: "p-with-link",
        before: "Applicants can also complete the ",
        linkText: "OSAP Estimator",
        href: "https://osap.gov.on.ca/AidEstimator2627Web/enterapp/enter.xhtml",
        after:
          ' to see how much funding they may qualify for. When on the OSAP estimate website, students will notice that TCDHA is not in the drop down list of schools. If students click the section indicating that TCDHA is not on the list, a box will appear. Typing in "Toronto Coll" will bring up the college.',
      },
    ],
  },
  {
    id: "other-payment-options",
    question: "Are there other payment options?",
    blocks: [
      {
        type: "p",
        text: "Other payments options include the Second Career Program, Registered Education Savings Plan (RESP), Registered Retirement Savings Plan (RRSP), and Student Line of Credit.",
      },
    ],
  },
  {
    id: "admissions-test-fee",
    question: "Is there a fee associated with the admissions test and interview?",
    blocks: [
      {
        type: "p",
        text: "No! Currently there are no fees associated with the admission test and interview.",
      },
      {
        type: "p",
        text: "Sample questions are available by contacting the Admissions Department at info@toronto-college-dental.org or 416-423-3099 or toll free 1-866-923-3099.",
      },
    ],
  },
  {
    id: "out-of-province",
    question: "Does the Intra Oral Dental Assisting Level I & II Program accept out of province students?",
    blocks: [
      {
        type: "p",
        text: "Yes! TCDHA accepts students from all across Canada. TCDHA understands that there is a lot of planning involved with attending a program away from home. The admission staff will assist the applicant throughout the entire process until arrival at TCDHA.",
      },
    ],
  },
  {
    id: "international-students",
    question: "Does the Intra Oral Dental Assisting Level I & II Program accept international students?",
    blocks: [
      {
        type: "p",
        text: "Yes! TCDHA accepts international students if they meet all the entry requirements. TCDHA is designated with the International Student Program (ISP) as a Designated Learning Institution with Citizenship and Immigration Canada (CIC).",
      },
      {
        type: "p-with-link",
        before:
          "Successfully completing the Intra Oral Dental Assisting Level I & II Program at the Toronto College of Dental Hygiene and Auxiliaries Inc. does not guarantee the ability to work and/or live in Canada. Please see the ",
        linkText: "Citizenship and Immigration Canada (CIC) website",
        href: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
        after: " for information on working and living in Canada.",
      },
      {
        type: "p",
        text: "Study visas must be valid in Canada for the duration of the study period.",
      },
    ],
  },
  {
    id: "dental-chairs",
    question: "How many dental chairs are there at TCDHA?",
    blocks: [
      {
        type: "p",
        text: "There are 121 fully operational dental chairs, 18 of which are located in digital radiography rooms in the radiography wing. The clinical area also includes 3 digital panoramic x-ray machine.",
      },
      {
        type: "p",
        text: "Each of the Dental Hygiene Clinics are 100% paperless using all the latest technology that a modern dental office would use. This includes digital photography, digital x-rays, digital Panoramic x-ray machine, 3D Consult-Pro patient education software to educate the patients, signature pads and fingerprint scanners. Each dental chair is equipped with its own computer.",
      },
    ],
  },
  {
    id: "employment-assistance",
    question: "Does TCDHA provide employment assistance?",
    blocks: [
      {
        type: "p",
        text: "YES! TCDHA provides assistance with job placement in the following ways:",
      },
      {
        type: "list",
        items: [
          "TCDHA maintains alumni information and notifies former graduates of potential job opportunities through e-mail",
          "TCDHA assists student with resume writing, interview techniques, soft skills, and job preparation skills",
          "TCDHA allows students to utilize the facilities to contact potential employers and print resumes",
          "TCDHA provides reference letters for their graduates",
        ],
      },
      {
        type: "p",
        text: "TCDHA does not guarantee employment for any student who successfully completes the Intra Oral Dental Assisting Level I & II Program.",
      },
    ],
  },
];
