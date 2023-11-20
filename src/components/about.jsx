import React from "react";
import QuestionPNG from "../images/question.png";
import "font-awesome/css/font-awesome.min.css";

const About = () => {
  const handleDownload = () => {
    const anchor = document.createElement("a");
    anchor.href = "/cv.pdf";
    anchor.download = "HasanSemihAktasCV.pdf";
    anchor.click();
  };
  return (
    <>
      <div className="w-full lg:w-full h-auto lg:min-h-screen lg:h-auto lg:flex items-center justify-center gap-5 bg-[#242424]">
        <div className="text-white w-full py-10 px-5 lg:w-2/3 lg:px-20 ">
          <div className="text-3xl my-3 lg:text-5xl lg:my-5">Who is <span className="text-[#df9100]">Semih</span>?</div>
          <div className="text-l my-3 lg:text-xl lg:my-5">
            I started my computer engineering career at Sakarya University,
            Department of Computer Engineering in 2019. After my first year, I
            transferred to Istanbul Medeniyet University to further increase my
            knowledge and experience. During my university life, I was
            introduced to various software languages, but I was particularly
            interested in ReactJS and NodeJS. While I have deepened in creating
            user interfaces and component development on ReactJS, I have
            increased my server-side application development skills with NodeJS.
            I have an approach that focuses on continuous self-improvement and I
            successfully apply this knowledge in my projects by following the
            innovations in the software world. My goal is to develop
            user-friendly and effective software by making the most of the
            opportunities offered by technology.
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
            <img
              src={QuestionPNG}
              alt="question"
              className="drop-shadow-[0_35px_35px_rgba(0,65,255,0.7)]  hover:scale-110 transition-all transform duration-500"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
