import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import portfolio from "../../Assets/Projects/Portfolio.png";
import Table from "../../Assets/Projects/Table.png";

import Ecommerce from "../../Assets/Projects/Ecommerce.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Table}
              isBlog={false}
              title="Table For Everyone (University Final Year Project)"
              description="I developed an Android application as my Final Year Project at my University. Basically it's an application for
              Table Reservation and Order Food from different restaurants. In this project my proposed system help users
              to recommend different restaurants according to their tastes and choices. It provide ease for to users to
              order food or reserve their table in any of the registered restaurant."
              ghLink="https://github.com/Sp20-bse-030/TableforEveryone"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            
              imgPath={Ecommerce}
              isBlog={false}
              title="Shopper(Ecommerce Website)"
              description="I have developed an Ecommerce website name Shopper. I developed this website using React.js
              Framework. I developed the whole frontend by using React.js for both Customers and Admin. I developed
              the Server-Side using Node.js Express.js and I used MongoDB Database. The website is fully functional. An
              Admin can sell out any of his clothing brand and a Customer can visit and purchase those products. It is a
              user friendly website which provides the ease of use for both Admin and Customer"
              ghLink="https://github.com/Sp20-bse-030/Shopper"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="I have developed a Portfolio website using Bootstrap framework. it is also fully functional website. In this
              project my entire focus is at frontend. I developed this website using some beautiful animation. Using this
              site anyone can represent his/her portfolio to others."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
