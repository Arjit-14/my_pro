import React, { useState } from "react";

const Speakers = () => {
  const [visibleTexts, setVisibleTexts] = useState({});

  const toggleReadMore = (index) => {
    setVisibleTexts((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const speakersData = [
    {
      name: "Prof. Dr. Mario José Diván",
      title:
        "Sr. Solutions Architect and Service Lead, IOTG- Intel, USA & Former Full Professor, UNLPam",
      image: "images/keynote_speakers/ks_1.png",
      link: "https://scholar.google.com/citations?user=EplVzHwAAAAJ&hl",
      bio: "Prof. Mario Diván was born in Santa Rosa (Argentina) on March 10 of 1979. He received an engineering degree in Information Systems from the National Technological University -NTU- (Argentina) in 2003, while he holds a specialty in managerial engineering from the NTU (Argentina) in 2004, a specialty in data mining and knowledge discovery in databases from the University of Buenos Aires (Argentina) in 2007, and a specialty on high-performance and grid computing from the National University of La Plata -NULP- (Argentina) in 2011. He obtained his Ph.D. in Computer Science in 2012 from the NULP (Argentina). His interest areas lie in data science, data stream, stream mining, high-performance computing, big data, Internet-of-Thing, and measurement.",
    },
    {
      name: "Prof. Valentina Emilia Balas",
      title: "Aurel Vlaicu University of Arad, Romania",
      image:
        "https://www.drbalas.ro/s/img/wp-content/uploads/2013/09/Picture1-216x300.jpg.webp",
      link: "https://scholar.google.com/citations?hl=en&user=XaktX0wAAAAJ",
      bio: "Valentina E. Balas is currently Full Professor at Aurel Vlaicu University of Arad, Romania. Author of more than 400 research papers. Research topics: Intelligent Systems, Fuzzy Control, Soft Computing. Editor-in Chief to IJAIP and to IJCSE journals. Member of EUSFLAT, ACM and a SM IEEE, member in TC – SC (IEEE SMCS), SIAM, Joint Secr. FIM India, Tudor Tanasescu Prize from Romanian Academy, 2019, Stefan Odobleja Prize of AOSR, 2023 and AGIR Prize 2023.",
    },
    {
      name: "Dr. Mohammad S Khan",
      title:
        "Director of Network Science and Analysis Lab, Department of Computing, East Tennessee State University, Johnson City, USA",
      image: "images/keynote_speakers/ks_4.jpeg",
      link: "https://scholar.google.com/citations?user=ERBiTbwAAAAJ&hl",
      bio: "Dr. Mohammad S. Khan (SM' 19) is currently an Associate Professor of Computing at East Tennessee State University and the director of Network Science and Analysis Lab (NSAL). He received his M.Sc. and Ph.D. in Computer Science and Computer Engineering from the University of Louisville, Kentucky, USA, in 2011 and 2013, respectively. His primary area of research is in ad-hoc networks, wireless sensor networks, network tomography, connected vehicles, and vehicular social networks. He currently serves as an associate editor of IEEE Access, IET ITS, IET WSS, Springer's Telecommunication Systems and Neural Computing and Applications. He has been on technical program committees of various international conferences and technical reviewer of various international journals in his field. He is a senior member of IEEE.",
    },
    {
      name: "Prof. Ts Dr. Azween Bin Abdullah",
      title:
        "Professor and Dean, Faculty of Applied Science and Technology, Perdana University, Kuala Lumpur, Malaysia",
      image:
        "https://i1.rgstatic.net/ii/profile.image/272192239828997-1441907095189_Q128/Azween-Abdullah-2.jpg",
      link: "https://scholar.google.com/citations?hl=en&user=8qTHZ6cAAAAJ",
      bio: "Azween Abdullah is a professional development alumnus of Stanford University and MIT. His work experience includes more than thirty years as an academic in institutions of higher learning and as director of research and academic affairs at two institutions of higher learning, dean of faculty, vice-president for educational consultancy services, fifteen years in commercial companies as Software Engineer, Systems Analyst and a computer software developer and IT/MIS consultancy and training. Azween Abdullah has several patents and has been actively serving as an expert reviewer and editorial board member for several high-impact technical journals. He served as an adjunct research professor at the Malaysian University of Science and Technology and currently serves as an adjunct professor at SEGi University. He has guided and produced more than twenty post-graduate students. He is a fellow of the British Computer Society and a senior member of IEEE. Azween Abdullah's general research interests are in cyber security and trustworthy computing, formal models of computation, and graph analytics in cyber security. He has been an external consultant with several government and semi-government organizations in Malaysia and Singapore. He has also published over 170 publications in various technical journals and conference proceedings and has given technical talks at several key international conferences, industry summits, and forums.",
    },
    {
      name: "Dr. Danish Nadeem",
      title:
        "Founder & Chief Technology Officer, Maeve Port, PO Box 4503, 3006 AM, Rotterdam, Netherlands",
      image: "images/keynote_speakers/ks_6.jpg",
      link: "https://maeveport.com/website/index.php/about-us/",
      bio: "Danish Nadeem is a seasoned Senior AI Consultant and Data Scientist based in the Netherlands with a strong academic foundation in Computer Science, Cognitive Science and Artificial Intelligence. Following his graduation from Germany, he gained extensive experience in research and development at the German Research Center for Artificial Intelligence before transitioning to the Netherlands. There he held prominent positions in the IT sector, working in EduTech, Financial Services & Insurance, Multimedia & Entertainment and the Health industry. With over 20 years of experience living and working in Europe, Danish has played a pivotal role in numerous IT consultancy projects and has been instrumental in driving digital transformation and data strategies for tech startups and social entrepreneurship initiatives. Danish is a strategic thinker with a knack for translating complex technical concepts into actionable insights for non-technical stakeholders. He is a strong advocate for ethical AI practices and is committed to promoting diversity and inclusion in the tech industry. In addition to his technical skills, Danish is a compelling communicator who often shares his knowledge and experiences at conferences and workshops. With a track record of delivering high-impact solutions, Danish is a trusted advisor for organizations looking to harness the power of AI and data science to drive growth and transformation. He has contributed several research publications in international conference proceedings and journals, showcasing his dedication to advancing the field of AI and Intelligent Systems through rigorous academic research. These publications highlight his deep understanding of cutting-edge technologies and his ability to contribute valuable insights to the scientific community. Danish research contributions further validate his expertise and thought leadership making him a respected expert in the field.",
    },
    {
      name: "Dr. Valliappan Raju",
      title: "Director of Research, Perdana University, Malaysia",
      image: "https://loop.frontiersin.org/images/profile/1394896/203",
      link: "https://scholar.google.com/citations?user=os7_kTkAAAAJ&hl",
      bio: "Professor Valliappan Raju specializes in research methodology and spearheads Research division at Perdana University, Malaysia. In his 20+ years of experience, he has served over 18 years in Higher Education institutions in Botswana, India and Malaysia. He holds visiting positions in the Czech Republic, Thailand and Germany. As per ResearchGate statistics, he has published 256 manuscripts, the majority in FinTech discipline indexed in Scopus, SSCI, EI indexed journals. Under his supervision, 63 candidates have graduated with Ph.D. degrees. Vally was instrumental in developing Ph.D. programs in his prior assignments. He is frequently invited to deliver lectures on research, industry 5.0, digital marketing, crypto banking and entrepreneurship. He actively reviews World Bank Conference Journals (USA). He holds two patents. Vally is the founder/editor of Journal of Reproducible Research. Vally's book 'Fundamentals of Thesis' was well received among the research community. He has secured research grants from public and private institutions worth USD $250,000+ as on 2022. As a passionate researcher his interests remain in Anthropology, research methodology, data analytics and FinTech research.",
    },
    {
      name: "Prof. Robin T. Bye",
      title: "Department of ICT and Natural Sciences, NTNU, Norway",
      image:
        "https://backends.it.ntnu.no/user-profile-service/rest/files/12da8e21-8b3b-3e82-a230-54723157ee08",
      link: "https://scholar.google.com/citations?user=98F1b7YAAAAJ&hl=en",
      bio: "I am professor at the Department of ICT and Natural Sciences, programme director of MSc in Mechatronics and Automation (siv.ing.) and BSc in Automation and Intelligent Systems, and head of the Cyber-Physical Systems Laboratory at NTNU in Ålesund. I participate in NTNU SFI AutoShip, SAFEMATE, and many other projects, including a collaboration with Ålesund Biomechanics Lab. Apart from teaching automation and computer engineering courses at both the bachelor and master level on topics such as artificial intelligence, cybernetics, control systems, and intelligent systems, I also supervise PhD, master, and bachelor students on their thesis topics. My current research interests relate to the interdisciplinary world of cyber-physical systems and how to combine state-of-the-art methods for solving problems related to autonomous systems and biomechatronics, with a focus on autonomous ships and simulators for computer haptic assisted orthopaedic surgery (CHAOS). Virtual prototyping, computational modelling and simulation of human movements, and dynamic resource allocation and operations research, as well as research in teaching and education, are topics I have investigated and are still interested in.",
    },
    {
      name: "Prof. Ottar Laurits Osen",
      title: "Department of ICT and Natural Sciences, NTNU, Norway",
      image:
        "https://backends.it.ntnu.no/user-profile-service/rest/files/377336ef-2f78-3586-93f8-659c049c9a85",
      link: "https://scholar.google.com/citations?hl=en&user=KH3nAwIAAAAJ",
      bio: "Currently a Professor at the study program in Automation in Ålesund. My interests include industrial control systems, intelligent systems, micro-controllers, technical safety (SIL), and pedagogics, specifically problem-based and project-based learning. I teach courses on industrial control systems, instrumentation, cybernetics, intelligent systems (artificial intelligence), simulations, and micro-controllers, and I also mentor B.Sc. and M.Sc. theses. My experience spans automation for vessels and offshore installations, control systems for vessels, production processes, and subsea. I have also developed software for databases and CNC machines. I have participated in large offshore projects such as Snorre A, Troll C, Petrojarl Foinaven, and Heidrun, and I have experience as a project manager and coordinator for a H2020 application.",
    },
    {
      name: "Prof. Vijander Singh",
      title: "Department of ICT and Natural Sciences, NTNU, Norway",
      image:
        "https://backends.it.ntnu.no/user-profile-service/rest/files/6375c1c4-bde5-3ad1-aec4-7b8a5123edd0",
      link: "https://scholar.google.com/citations?user=l2VzMk4AAAAJ&hl=en&oi=sra",
      bio: "", // No bio provided in the original HTML
    },
    {
      name: "Prof. Kacper Pluta",
      title: "ESIEE Paris, Université Gustave Eiffel, France.",
      image: "images/keynote_speakers/kacper.png",
      link: "https://scholar.google.com/citations?user=pjYR0vcAAAAJ",
      bio: "Kacper Pluta obtained his Ph.D. in Computer Science from Université Paris-Est, France in 2017 after defending his dissertation entitled: Rigid Motions on Discrete Spaces. Since September 2023, Kacper is an Enseignant-Chercheur (Associate Professor) at ESIEE Paris, Université Gustave Eiffel, France. Before taking the position at Univeristé Gustave Eiffel, he worked as a research engineer on the H2020 BIM2TWIN Project at Inria, Sophia-Antipolis, France, and after finishing his Ph.D. was a postdoctoral fellow at the Technion – Israel Institute of Technology. Kacper's work spans topics from theoretical discrete geometry to 3D geometry processing applied to architecture and civil engineering. He also participated in studies related to geoengineering with a focus on natural hazards such as landslides, and studies related to medical imaging.",
    },
    {
      name: "Dr. Sumegh Shrikant Tharewal",
      title: "Free University of Bozen-Bolzano, ITALY",
      image:
        "https://i1.rgstatic.net/ii/profile.image/814959470583808-1571312887081_Q128/Sumegh-Tharewal.jpg",
      link: "https://scholar.google.com/citations?user=1dfdWf8AAAAJ&hl=en&oi=sra",
      bio: "Professor Valliappan Raju specializes in research methodology and spearheads Research division at Perdana University, Malaysia. In his 20+ years of experience, he has served over 18 years in Higher Education institutions in Botswana, India and Malaysia. He holds visiting positions in the Czech Republic, Thailand and Germany. As per ResearchGate statistics, he has published 256 manuscripts, the majority in FinTech discipline indexed in Scopus, SSCI, EI indexed journals. Under his supervision, 63 candidates have graduated with Ph.D. degrees. Vally was instrumental in developing Ph.D. programs in his prior assignments. He is frequently invited to deliver lectures on research, industry 5.0, digital marketing, crypto banking and entrepreneurship. He actively reviews World Bank Conference Journals (USA). He holds two patents. Vally is the founder/editor of Journal of Reproducible Research. Vally's book 'Fundamentals of Thesis' was well received among the research community. He has secured research grants from public and private institutions worth USD $250,000+ as on 2022. As a passionate researcher his interests remain in Anthropology, research methodology, data analytics and FinTech research.",
    },
    {
      name: "Dr. Basant Kumar",
      title:
        "Asst. Professor and Program Head Information Security, Chair of Departmental Research Committee at MCBS(Univ of St Louis, USA) Sr member of IEEE,and Professional Ambassador of Oman CERT,Muscat",
      image: "images/keynote_speakers/ks_12.jpg",
      link: "https://scholar.google.com/citations?hl=en&user=Je47p8QAAAAJ",
      bio: "Basant Kumar is an Asst. Professor and Program Head of Information Security, Chair of Departmental Research Committee, the chair of IEEE (Institute of Electrical and Electronics Engineers, USA) and ISACA (Information Systems Audit and Control Association, USA) Student Chapter at Modern College of Business and Science (University of Missouri, St Louis, USA)Sultanate of Oman with high commitment to implementing research culture, to foster effective and efficient action plans with technical acumen, strategic thinking, and planning skills. At present he is a Post Doc Researcher in Cyber Security and a Sr member of IEEE, Professional Ambassador of Oman CERT, Subject Matter Expert of CompTIA, USA, Associate Editor of IEEE Region8, Editor in Chief and Reviewers of International Journals successfully published 35 papers in different Scopus journals and IEEE Conference proceedings. Currently engaged with the British Columbia based Blockchain Technology Research Consultancy Services, Vancouver Canada to provide the expertise to identify and create successful blockchain applications and offer training and teaching seminars, workshops and talks which will provide in-depth knowledge of the blockchain ecosystem in higher education. He is also a recipient of International Academic Excellence Award of Western Sydney University, Australia, Elsevier's Mendeley in 2022 and Best academician of the year 2018 award by GECL in 2018.",
    },
  ];

  return (
    <div className="banner-main">
      <div className="container mt-3">
        <div className="about-innar-content committees">
          <h1>Keynote Speakers</h1>
          <hr />
          {speakersData.map((speaker, index) => (
            <div key={index} className="container m-3">
              <div className="row align-items-center">
                <div className="col-md-2">
                  <img
                    style={{ marginLeft: 30, width: "70%" }}
                    src={speaker.image}
                    alt={speaker.name}
                  />
                </div>
                <div className="col-md-10">
                  <h1>
                    <a
                      style={{ color: "#005388" }}
                      href={speaker.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {speaker.name}
                    </a>
                  </h1>
                  <p>{speaker.title}</p>
                  <br />
                  <p>
                    {visibleTexts[index]
                      ? speaker.bio
                      : `${speaker.bio.slice(0, 150)}...`}
                  </p>
                  <br />
                  <span
                    onClick={() => toggleReadMore(index)}
                    style={{ cursor: "pointer", color: "#005388" }}
                  >
                    {visibleTexts[index] ? "Read Less" : "Read More"}
                  </span>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
