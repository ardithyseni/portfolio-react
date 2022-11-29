import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "NET_skill", 
          content: ".NET & .NET Core",
          percentage: "80%", 
          value: "80"
        },
        {
          id: "Node_skill", 
          content: "Node.js & Express.js",
          percentage: "77%", 
          value: "77"
        },
        
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          percentage: "70%",
          value: "70"
        },
        
        {
          id: "ReactJS_skill",
          content: "React.js",
          percentage: "70%",
          value: "70"
        },
        {
          id: "VueJS_skill",
          content: "Vue.js",
          percentage: "70%",
          value: "70"
        },
        {
          id: "SQL",
          content: "SQL & NoSQL",
          percentage: "75%",
          value: "75"
        },
        {
          id: "Git",
          content: "Git",
          percentage: "65%",
          value: "65"
        },
        {
          id: "Java_skill",
          content: "Java",
          percentage: "65%",
          value: "65"
        },
        {
          id: "CSS3_skill",
          content: "CSS 3",
          percentage: "45%", 
          value: "45"
        },
        {
          id: "MUI_skill",
          content: "Material UI",
          percentage: "60%", 
          value: "60"
        },
        
        {
          id: "PHP_skill",
          content: "PHP", 
          percentage: "40%", 
          value: "40"
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
             "Hi, I’m Ardit Hyseni, a Computer Science and Engineering Graduate @UBT Prishtina, Kosovo. I'm currently 21 years old. I’m interested in software development, currently focused on Web Development. I am certified in the Microsoft Azure Cloud Service Fundamentals, and have general knowledge on IT & Computer Science subjects."
        },
        {
          id: "second-p-about",
          content:
            "Experienced in all stages of web development: designing, implementing, testing, and debugging processes. I have built several full-stack projects, both individually and in teams, some of which are hosted online."
        },
        {
          id: "third-p-about",
          content:
            "Here you can see my hard skills listed. Below this you can find my web application projects."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            {/* <span className="pull-right">
                              {skill.percentage}
                            </span> */}
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.percentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
