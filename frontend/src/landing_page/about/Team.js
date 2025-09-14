import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5  border-top  ">
        <h1 className="text-center" style={{ color: "#424242" }}>
          People
        </h1>
      </div>
      <div className="row p-3  text-muted  ">
        <div className="col-6 p-5 fs-5 text-center" style={{ lineHeight: "1.8" }}>
          <img src="media/images/image.jpeg" style={{ borderRadius: "100%",width:"50%" }} />
          <h4 className="mt-3">Abhishek Jain</h4>
          <h6>Software Developer</h6>
        </div>
        
        <div className="col-6  p-5 fs-6" style={{ lineHeight: "1.8" }}>
          <p>
            Final-year B.Tech student with a strong foundation in Java, DSA,
            MySQL, and full-stack web development using the MERN stack. Adept at
            building real-world solutions through hands-on project work,
            including OCR apps, chatbots, and geo-tagged imaging tools.
            
          </p>
          <p>
            A Smart India Hackathon 2024 Grand Finalist and Accenture Forage
            Virtual Intern with exposure to secure SDLC, Agile methodology, and
            cloud architecture.
          </p>
          <p>
            Passionate about scalable software design, clean code, and
            continuous learning. Actively developing backend logic and system
            design skills to align with industry-ready SDE roles.
            <br className="mb-3"/>

            <h6>Contact me </h6>
            <a href="https://www.linkedin.com/in/abhishekjain2004/" style={{textDecoration:"none"}}> Linkedin @Abhishek Jain</a>
            <br/>
            <a href="mailto:apjain2004@gmail.com" style={{textDecoration:"none"}}>Mail @apjain2004@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
