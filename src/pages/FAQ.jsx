import React from "react";
import Hero from "../components/Hero";
import FAQAccordion from "../components/FAQAccordion";
import Button from "../components/Button";

const faqs = [
  {
    question: "What age can my child start school?",
    answer:
      "Children can join our Early Years program from age 2, and progress through to Primary 6. We assess each child individually to place them in the most suitable class.",
  },
  {
    question: "Which classes do you offer?",
    answer:
      "We offer Early Years, and Primary 1 through Primary 6, following a structured curriculum designed for each stage of a child's development.",
  },
  {
    question: "How do I apply for admission?",
    answer:
      "Visit our Admission page and complete the online admission form in three simple steps: child information, parent/guardian information, and additional details.",
  },
  {
    question: "Is there an entrance assessment?",
    answer:
      "Assessment requirements vary by class. Early Years applicants typically undergo a brief interaction, while older applicants may complete a short age-appropriate assessment.",
  },
  {
    question: "Does the school provide extracurricular activities?",
    answer:
      "Yes. We offer football, athletics, music, drama, debate, coding, art & craft and a reading club to help pupils grow beyond the classroom.",
  },
  {
    question: "How can I contact the school?",
    answer:
      "You can call us on +234 XXX XXX XXXX, email info@brightfutureprimaryschool.com, or visit us at 12 Independence Layout, Enugu, Enugu State, Nigeria.",
  },
  {
    question: "Do you offer transportation?",
    answer:
      "School transportation arrangements can be discussed with our admissions office — please contact us for current routes and availability.",
  },
  {
    question: "What documents are required for admission?",
    answer:
      "You will need a completed admission form, the child's passport photograph, birth certificate, previous school report (if applicable), immunization information where required, and parent/guardian contact details.",
  },
  {
    question: "How can parents receive information about their children?",
    answer:
      "We share updates through parent-teacher meetings, progress reports, phone calls and email, keeping you informed of your child's academic and social development.",
  },
  {
    question: "Does the school have computer/coding classes?",
    answer:
      "Yes. Computer Studies is part of our academic curriculum from Lower Primary, and coding is offered as part of our extracurricular activities.",
  },
];

function FAQ() {
  return (
    <div>
      <Hero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions from parents and guardians."
      />

      <section className="px-5 py-16 md:px-8">
        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="bg-[#FBF9F4] px-5 py-16 text-center md:px-8">
        <h2 className="font-[Poppins] text-2xl font-bold text-[#152A54]">
          Still Have Questions?
        </h2>
        <div className="mt-6">
          <Button to="/contact">Contact Us</Button>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
