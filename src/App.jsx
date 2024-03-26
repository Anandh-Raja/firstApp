import { useState } from 'react';
import './App.css';

function App() {
  const [section, setSection] = useState('home');

  const showSection = (sectionId) => {
    setSection(sectionId);
  };

  const hideAllSections = () => {
    const sections = document.getElementsByTagName('section');
    for (let i = 0; i < sections.length; i++) {
      sections[i].style.display = 'none';
    }
  };

  return (
    <>
      <header>
        <h1>Welcome to My Portfolio</h1>
      </header>

      <nav>
        <ul>
          <li><button onClick={() => { showSection('home'); }}>Home</button></li>
          <li><button onClick={() => { showSection('projects'); }}>Projects</button></li>
          <li><button onClick={() => { showSection('about'); }}>About Me</button></li>
          <li><button onClick={() => { showSection('contact'); }}>Contact</button></li>
        </ul>
      </nav>

      <section id="home" style={{ display: section === 'home' ? 'block' : 'none' }}>
        <h2>Home</h2>
        <p>Welcome to my portfolio website! Here you can find information about me and my projects.</p>
      </section>

      <section id="projects" style={{ display: section === 'projects' ? 'block' : 'none' }}>
        <h2>Projects</h2>
        <ul>
          <li>
            <h3>Open API Implementation</h3>
            <p>Telstra, Bangalore</p>
            <p>06 ‘21 - 03 ‘22</p>
            <p>Developer</p>
            <p>To extend the TMF open API’s TMF 640 and TMF 641 from the TM Forum in order to leverage my skills in Springboot and REST API development.</p>
          </li>
          <li>
            <h3>Dubber Portal</h3>
            <p>Dubber, Bangalore</p>
            <p>06 ‘22 - 09 ‘22</p>
            <p>Junior Developer</p>
            <p>To Identify vulnerabilities post upgrading application version and Fixing the bugs, depreciation warnings after the application upgrade.</p>
          </li>
          <li>
            <h3>Dubber Portal</h3>
            <p>Dubber, Bangalore</p>
            <p>09 ‘22 - 04 ‘23</p>
            <p>Production Support SME</p>
            <p>To Identify client requirements through ITSM tickets and SSH into particular production and provide the details to the end customer as per their requirement.</p>
          </li>
          <li>
            <h3>E-Commerce Application Development</h3>
            <p>UHG, Bangalore</p>
            <p>04 ‘23 - 11 ‘23</p>
            <p>Team Lead</p>
            <p>To Combine all the individual microservices and integrate them into an end-to-end application using Service Registry, API Gateway, Establish reliable communication channels, either through message brokers or HTTP-based protocols, enabling effective communication and coordination between microservices. Developed a Frontend Application for Employee Management Using Angular Framework.</p>
          </li>
        </ul>
      </section>

      <section id="about" style={{ display: section === 'about' ? 'block' : 'none' }}>
        <h2>About Me</h2>
        <p>
          Enthusiastic and curious Java Developer with a passion for learning and a positive outlook.
          Eager to contribute as a team player in a dynamic work environment. Adept at problem-solving
          and excited to bring a fresh perspective to coding challenges. Ready to embrace new
          opportunities and grow as a valuable asset to your organization by leveraging my strong Java
          skills and collaborative spirit.
        </p>
        <h3>Skills</h3>
        <ul>
          <li>Java Programming- Experience in developing, testing, and debugging Java applications</li>
          <li>Spring FrameWork- Strong Understanding in Spring and leverage Rapid Application Development</li>
          <li>Database Management- Hands-on experience with relational databases like MySQL and PostgreSQL.</li>
          <li>Web Development- Understanding of front-end technologies, including HTML, CSS, and JavaScript.</li>
          <li>Kneen Learner, Problem solver, Team Player</li>
        </ul>
      </section>

      <section id="contact" style={{ display: section === 'contact' ? 'block' : 'none' }}>
        <h2>Contact</h2>
        <p>Mobile Number: 8667709438</p>
        <p>Email Address: anandhraja1030@gmail.com</p>
        <p>Location: Salem, Tamil Nadu, India</p>
        <p>
          LinkedIn Profile Link: 
          <a href="https://www.linkedin.com/in/anandh-raja-296a59129/">https://www.linkedin.com/in/anandh-raja-296a59129/</a>
        </p>
      </section>

      <footer>
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </>
  );
}

export default App;
