import React from "react";

//import images
import memories1 from '../img/memories1.jpg'
import memories2 from '../img/memories2.jpg'
import memories3 from '../img/memories3.jpg'

import activities1 from '../img/activities1.jpg'
import activities2 from '../img/activities2.jpg'
import activities3 from '../img/activities3.jpg'
import activities4 from '../img/activities4.jpg'

import meetup1 from '../img/meetup1.jpg'
import meetup2 from '../img/meetup2.jpg'
import meetup3 from '../img/meetup3.jpg'
import meetup4 from '../img/meetup4.jpg'
import meetup5 from '../img/meetup5.jpg'
import meetup6 from '../img/meetup6.jpg'
import meetup7 from '../img/meetup7.jpg'
import meetup8 from '../img/meetup8.jpg'

import mvckrye from '../img/mvckrye.jpg'
import mvc1 from '../img/mvc1.jpg'
import mvc2 from '../img/mvc2.jpg'
import mvc3 from '../img/mvc3.jpg'

import ski1 from '../img/ski1.jpg'
import ski2 from '../img/ski2.jpg'
import ski3 from '../img/ski3.jpg'
import ski4 from '../img/ski4.jpg'
import ski5 from '../img/ski5.jpg'
import ski6 from '../img/ski6.jpg'

import blog1 from "../img/blog1.jpg";
import blog2 from "../img/blog2.jpg";
import blog3 from "../img/blog3.jpg";
import blog4 from "../img/blog4.jpg";
import blog5 from "../img/blog5.jpg";



class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  My list of web application projects
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="work-box">
              
                  <div className="work-img">
                    <img src="https://placehold.co/550x270?text=Coming+Soon" alt="" className="img-fluid" />
                  </div>
                
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">MERN E-Commerce</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          MERN, Firebase, Stripe
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="w-like">
                        <a
                          href="https://github.com/ardithyseni/mern-ecommerce"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="ion-social-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <a
                  href={memories2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={memories3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a> */}

              </div>
            </div>
            
            <div className="col-md-6">
              <div className="work-box">
                <a href={memories1} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={memories1} alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Memories App</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          MERN, GoogleOAuth2
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="w-like">
                        <a
                          href="https://github.com/ardithyseni/memories-app"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="ion-social-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={memories2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={memories3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>

              </div>
            </div>
            
            <div className="col-md-6">
              <div className="work-box">
                <a href={activities1} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={activities1} alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-9">
                      <h2 className="w-title">Activities App</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          .NET, SQLite, React, MobX, Redux
                        </span>{" "}
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="w-like">
                        <a
                          href="https://github.com/ardithyseni/Reactivities"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="ion-social-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={activities2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={activities3}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={activities4}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="work-box">
                <a href={meetup1} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={meetup1} alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-9">
                      <h2 className="w-title">Meetuper App</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          MEVN
                        </span>
                        {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="w-like">
                        <a
                          href="https://github.com/ardithyseni/vue-meetup-app"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="ion-social-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={meetup2}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={meetup3}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={meetup4}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={meetup5}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={meetup6}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={meetup7}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={meetup8}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="work-box">
                <a href={mvckrye} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={mvckrye} alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-9">
                      <h2 className="w-title">.NET 5 MVC E-Commerce</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          .NET 5 MVC, Bootstrap, REST
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="w-like">
                        
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={mvc1}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={mvc2}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={mvc3}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="work-box">
                <a href={ski1} data-lightbox="gallery-smth">
                  <div className="work-img">
                    <img src={ski2} alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-9">
                      <h2 className="w-title">Ski Store</h2>
                      <div className="w-more">
                        <span className="w-ctegory">.NET Core 5, React, Redux, Stripe</span>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="w-like">
                        <a
                          href="https://github.com/ardithyseni/SkiStore"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="ion-social-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={ski2}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={ski3}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={ski4}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={ski5}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={ski6}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="work-box">
                <a href={blog1} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={blog1} alt="" className="img-fluid" />
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-9">
                      <h2 className="w-title">Blog Site</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          Laravel CMS
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="w-like">
                        <a
                          href="https://github.com/ardithyseni/blog-app"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="ion-social-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={blog2}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={blog3}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={blog4}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={blog5}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
