import React from "react";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";

const caseStudies = [
  {
    id: 1,
    subtitle: "Developer",
    title: "Talk is cheap, Show me the code.",
    img: "curology-min"
  },
  {
    id: 2,
    subtitle: "Content Creator",
    title: "Doing small things in a great way",
    img: "7p"
  },
  {
    id: 3,
    subtitle: "Founder @bechho.in",
    title: "Chase the vision...",
    img: "yourspace-min"
  },
  {
    id: 4,
    subtitle: " Keep Smiling xD",
    title: "Thanks for visiting my mansion...",
    img: "5p"
  }
];

const Cases = () => {
  return (
    <section className='cases'>
      <div className='container-fluid'>
        <div className='cases-navigation'>
          <div className='cases-arrow prev disabled'>
            <CasesPrev />
          </div>
          <div className='cases-arrow next'>
            <CasesNext />
          </div>
        </div>
        <div className='row'>
          {caseStudies.map(caseItem => (
            <div className='case' key={caseItem.id}>
              <div className='case-details'>
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className='case-image'>
                <img
                  src={require(`../assets/${caseItem.img}.png`)}
                  alt={caseItem.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
