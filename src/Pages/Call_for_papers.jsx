import React from "react";
import { Accordion, AccordionHeader } from "react-bootstrap";

const Call_for_papers = () => {
  return (
    <div className="banner-main">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="about-innar-content">
              <h1>Call for Papers</h1>
              <hr />
              <p>
                All papers must be original and not simultaneously submitted to
                another journal or conference. The submissions may be of any
                form from the following: The recent development in artificial
                intelligence and embedded systems has increased the potential of
                receiving and processing huge amounts of real-time data in
                Cyber-Physical Systems (CPS). CPS is the engineered physical
                system able to perceive and process the information and act
                accordingly. These physical systems are well inter-connected,
                coordinated and integrated by computing and communication.
                Computing and communication devices have become much faster,
                cheaper and consume less power. It has become significant to
                understand, analyse and apply the knowledge of artificial
                intelligence in CPS to provide more intelligent physical systems
                and involve more and more end users who are still isolated.
                Artificial intelligence (AI) can provide the capability of any
                physical system to apply human-like intelligence to the
                perceived information in order to achieve its goal. The growing
                area of CPS with AI can provide the smart machines and networked
                physical systems to perform tasks in remote and dangerous areas.
                Currently, the intelligent cyber-physical systems are gaining
                momentum at an unprecedented pace to combine AI and CPS for many
                real-time applications. Still, this domain is facing many
                challenges and gaps and lagging behind in implementation in the
                real world, which needs improvements and more attention. This
                conference aims to collect the latest developments and original
                contributions in all related technologies of AI and CPS and
                their applications. This conference is an effort to bring
                together the leading researchers, academicians and industry
                experts to share their ideas, recent developments, upcoming
                challenges and directions in the area of intelligent CPS. We
                encourage the experienced and young researchers worldwide to
                submit the papers with new ideas, theories, analytical studies,
                methods and applications of AI and CPS. This conference would be
                of immense benefit to academicians, young researchers, industry
                persons, students and others who are working in this area.
              </p>
              <br />
              <p>
                Authors are invited to submit original, previously unpublished
                research papers describing particular challenges or experiences
                or proposing novel solutions relevant to the scope of the
                conference. Papers must present original and unpublished work
                and should not be currently under review by any other conference
                or journal. Papers should be written in English and formatted
                according to the Springer Smart Innovation, Systems and
                Technologies one-column page format. Papers must have a length
                of 8-10 pages in Smart Innovation, Systems and Technologies
                format. For more detailed guidelines, please visit the official
                Springer Guidelines website.
              </p>
              <br />
              <strong>
                <h5 style={{ fontWeight: 700 }}>List of Tracks:</h5>
              </strong>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Track 1: Cyber Physical Systems Architecture
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>Integrated design methods for CPS</li>
                      <li>HW/SW co-design for CPS</li>
                      <li>Simulation and emulation of CPS</li>
                      <li>Integrated tool chains for CPS</li>
                      <li>Scalable CPS Architectures</li>
                      <li>
                        Composability of software, hardware and physical
                        components
                      </li>
                      <li>
                        Analysis of cyber-physical systems with multiple
                        temporal and spatial scales
                      </li>
                      <li>High-confidence and security in CPS</li>
                      <li>Real-time systems</li>
                      <li>Low power consumption</li>
                      <li>System-level design methodology</li>
                      <li>Embedded systems design</li>
                      <li>Mobile computing and devices</li>
                      <li>Internet of Things architecture</li>
                      <li>IoT interactions</li>
                      <li>Real-time applications of IoT</li>
                      <li>Industrial IoT</li>
                      <li>Industry Standards in CPS</li>
                      <li>Industry 4.0</li>
                      <li>Intelligent agents</li>
                      <li>Industrial Automation</li>
                      <li>Cloud computing in CPS</li>
                      <li>Intelligence and control of CPS</li>
                      <li>Deep learning in CPS</li>
                      <li>Cyber-physical multimedia systems</li>
                      <li>Integration of physical and virtual artifact</li>
                      <li>Information architecture design</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Track 2: Threats, Security and Privacy for Cyber Physical
                    Systems
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>Foundations of data security and privacy in CPSs</li>
                      <li>Vulnerability analysis and assessments for CPSs</li>
                      <li>Attacks and vulnerabilities detection in WSNs</li>
                      <li>Risk assessments and identification strategies</li>
                      <li>Human aspects in CPSs security and privacy</li>
                      <li>Attack pattern detection and prediction</li>
                      <li>Internet of Things (IoT) security threats</li>
                      <li>Industrial Control Systems threats</li>
                      <li>CPS resilience</li>
                      <li>Architecture and frameworks for securing CPSs</li>
                      <li>Authentication and access control in CPSs</li>
                      <li>Secure IoT Communication using blockchain</li>
                      <li>Socio-technical defenses for security and privacy</li>
                      <li>Smart IDS and IPS designed for different CPSs</li>
                      <li>Cyber security and anonymity</li>
                      <li>CPS applications security</li>
                      <li>Access control and authorization</li>
                      <li>Attacks and defenses</li>
                      <li>Security and privacy in CPS</li>
                      <li>Attacks prevention and control in CPS</li>
                      <li>Tampering detection and protection in IoT</li>
                      <li>Security threats assessment</li>
                      <li>Risk assessment and management</li>
                      <li>Security management and development</li>
                      <li>Cyber-attacks detection and prevention</li>
                      <li>Embedded systems security</li>
                      <li>
                        Intrusion detection and prevention in software and
                        hardware
                      </li>
                      <li>Networks and systems security</li>
                      <li>Secure information flow</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Track 3: Medical Cyber Physical Systems and Health
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        Interoperability and scalability of systems and
                        platforms
                      </li>
                      <li>IT standards and profiles for interoperability</li>
                      <li>Software and devices for healthcare</li>
                      <li>
                        Programming paradigms and tools for health applications
                      </li>
                      <li>
                        Human-computer interaction and usability in healthcare
                      </li>
                      <li>
                        Technologies for dynamic data integration (ontologies,
                        nosql, rdf, sparql, etc.)
                      </li>
                      <li>Cross-computational methods</li>
                      <li>Medical cyber physical systems</li>
                      <li>Mobile health and sensor applications</li>
                      <li>Internet of things for healthcare</li>
                      <li>RFID and sensor-enabled healthcare technologies</li>
                      <li>
                        Intelligent technologies for healthcare (smart homes,
                        cloud-based, etc.)
                      </li>
                      <li>
                        Computational drug discovery; on/in-body medical sensors
                        communications
                      </li>
                      <li>Ubiquitous health applications</li>
                      <li>Health portals and big data visualization</li>
                      <li>Food control and recommendation systems</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Track 4: Networks and Communication in CPS
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>Sensors networks and communication</li>
                      <li>Interconnected systems</li>
                      <li>Communication in edge computing</li>
                      <li>Network systems</li>
                      <li>Wireless sensor networks</li>
                      <li>4G/5G communication in smart devices</li>
                      <li>Energy efficient communication</li>
                      <li>Smart networking</li>
                      <li>Green communication</li>
                      <li>Hyper-connected smart devices</li>
                      <li>Communication networks</li>
                      <li>Object access and networking technology</li>
                      <li>Smart Sensor Networks</li>
                      <li>Networked Dynamical Systems</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <AccordionHeader>
                    Track 5: Technologies and Applications of Cyber Physical
                    Systems
                  </AccordionHeader>
                  <Accordion.Body>
                    <ul>
                      <li>Smart transportation</li>
                      <li>Medical and health care applications</li>
                      <li>Smart city and smart world</li>
                      <li>Environment monitoring</li>
                      <li>Robotics and automation</li>
                      <li>Intelligent robots</li>
                      <li>Automation and control</li>
                      <li>Human-robot interaction</li>
                      <li>Man-machine systems</li>
                      <li>Smart manufacturing systems</li>
                      <li>Smart Transportation systems applications</li>
                      <li>AI and CPS applications in agriculture</li>
                      <li>Oil and gas applications in AI and CPS</li>
                      <li>Internet of Industrial Things (IoIT) applications</li>
                      <li>Smart grid and energy</li>
                      <li>Rehabilitation systems</li>
                      <li>Social-economical systems</li>
                      <li>Military and defense systems</li>
                      <li>Wearable devices</li>
                      <li>Smart devices for physically disabled persons</li>
                      <li>Emerging applications in AI and CPS</li>
                      <li>Education and social aspects</li>
                      <li>Diagnosis systems</li>
                      <li>
                        Mathematical modeling of different CPS Applications
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <strong>
                <h5 className="mt-3" style={{ fontWeight: 700 }}>
                  Review Process
                </h5>
              </strong>
              <p className="p-2">
                ● All submitted papers will be reviewed by at least 2
                independent reviewers. Additional reviewers will be consulted if
                required.
                <br />
                ● All papers will go through a plagiarism checker. Plagiarism
                report must not exceed 20%.
                <br />
                ● All papers must be formatted according to the given template
                (Springer SIST).
                <br />
                ● Paper acceptance will be based on originality, significance,
                technical soundness, and clarity of presentation.
                <br />
                ● Authors must make sure that they submit previously unpublished
                papers to this conference.
                <br />
              </p>
              <strong>
                <h5 style={{ fontWeight: 700 }}>Awards &amp; Participation</h5>
              </strong>
              <p className="p-2">
                ● All accepted papers that are presented will be awarded a
                presentation certificate.
                <br />
                ● The Best Paper certificate will be awarded to the author(s) of
                the best paper. The selection will be based on reviewers'
                comments and recommendations of the session chair.
                <br />
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Call_for_papers;
