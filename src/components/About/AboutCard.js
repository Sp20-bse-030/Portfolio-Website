import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Haider Abbas </span>
            basically from <span className="purple"> Jauharabad, District Khushab.</span>
            <br />
            Currently i'm living in <span className="purple">Islamabad, Pakistan.</span> 
            <br />
            I have recently completed my <span className="purple">Bachelors in Software Engineering</span>  at <span className="purple">Comsats University Islamabad.</span> 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Scrolling Social Media
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Haider</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
