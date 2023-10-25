import React from "react";
import QuestionPNG from "../images/question.png";
import "font-awesome/css/font-awesome.min.css";

const About = () => {
  const handleDownload = () => {
    const anchor = document.createElement("a");
    anchor.href = "/cv.pdf"; // Zip dosyanızın yolu
    anchor.download = "HasanSemihAktasCV.pdf"; // İndirilen dosyanın adı
    anchor.click();
  };
  return (
    <>
      <div className="w-full lg:w-full h-auto lg:h-screen lg:flex items-center justify-center gap-5 bg-[#242424]">
        <div className="text-white w-full py-10 px-5 lg:w-2/3 lg:px-60 ">
          <div className="text-3xl my-3 lg:text-5xl lg:my-5">Who is Semih?</div>
          <div className="text-l my-3 lg:text-xl lg:my-5">
            Hi, I'm Semih,
            <br /> I entered the world of computer engineering in 2019 by
            winning the Computer Engineering department of Sakarya University.
            After studying at Sakarya University for 1 year, I transferred to
            Istanbul Medeniyet University. I have seen various software
            languages in my university life. Among these software languages, I
            saw ReactJS and NodeJS as close to myself and I am trying to improve
            myself in these areas.
          </div>
          <div className=" w-full flex flex-wrap">
            <a
              href="https://www.linkedin.com/in/hsemihaktas/"
              className="social-margin"
              target="blank"
            >
              <div className="social-icon linkedin">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </div>
            </a>
            <a
              href="https://github.com/hsemihaktas"
              target="blank"
              className="social-margin"
            >
              <div className="social-icon github">
                <i className="fa fa-github-alt" aria-hidden="true"></i>
              </div>
            </a>
            <a
              href="https://twitter.com/hsemihaktas"
              target="blank"
              className="social-margin"
            >
              <div className="social-icon twitter">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </div>
            </a>
            <a
              href="https://www.instagram.com/hsemihaktas/"
              target="blank"
              className="social-margin"
            >
              <div className="social-icon instagram">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </div>
            </a>
            <a
              href="mailto:info.hsemihaktas@gmail.com"
              target="blank"
              className="social-margin"
            >
              <div className="social-icon envelope">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </div>
            </a>
            <button
              onClick={handleDownload}
              target="blank"
              className="social-margin"
            >
              <div className="social-icon file">
                <i className="fa fa-file" aria-hidden="true"></i>
              </div>
            </button>
          </div>
        </div>
        <div className="w-0 lg:w-1/3 lg:h-1/2 lg:flex lg:flex-wrap ">
          <div className="w-full ">
            <img src={QuestionPNG} alt="question" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
