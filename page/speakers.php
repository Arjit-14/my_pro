<div class="banner-main">
    <div class="container mt-3 ">
        <div class="about-innar-content committees">
            <h1>Keynote Speakers</h1>
            <hr>
            <div class="container m-3">
                <div class="row align-items-center">
                    <div class="col-md-2">
                        <img style="margin-left: 30px;width:70%" src="assets/images/ks_1.jpeg">
                    </div>
                    <div class="col-md-10">
                        <h1><a style="color: #005388;" href="https://scholar.google.com/citations?user=ERBiTbwAAAAJ&hl=en" target="_blank">DR. MOHAMMAD S KHAN</a></h1>
                        <p>Director of Network Science and Analysis Lab (NSAL),<br>
                            Department of Computing,<br>
                            East Tennessee State University,<br>
                            Johnson City, TN 37614-1266, USA</p>
                        <br>
                        <p class="read-more" id="readMoreText">
                            Dr. Mohammad S. Khan (SM’ 19) is currently an Associate Professor of Computing at East Tennessee State University and the director of Network Science and Analysis Lab (NSAL). He received his M.Sc. and Ph.D. in Computer Science and Computer Engineering from the University of Louisville, Kentucky, USA, in 2011 and 2013, respectively. His primary area of research is in ad-hoc networks, wireless sensor networks, network tomography, connected vehicles, and vehicular social networks. He currently serves as an associate editor of IEEE Access, IET ITS, IET WSS, Springer’s Telecommunication Systems and Neural Computing and Applications. He has been on technical program committees of various international conferences and technical reviewer of various international journals in his field. He is a senior member of IEEE.
                        </p>
                        <br>
                        <span id="readMoreButton">
                            Read More
                        </span>
                        <script src="assets/js/script.js"></script>
                    </div>
                </div>
            </div>
            <hr>

            <div class="container m-3">
                <div class="row align-items-center">
                    <div class="col-md-2">
                        <img style="margin-left: 30px;width:70%" src="assets/images/ks_2.png">
                    </div>
                    <div class="col-md-10">
                        <h1><a style="color: #005388;" href="https://scholar.google.com/citations?user=EplVzHwAAAAJ&hl=en&oi=ao " target="_blank">PROF. DR. MARIO JOSÉ DIVÁN</a></h1>
                        <p>Sr. Solutions Architect and Service Lead,<br>
                            IOTG- Intel, USA &<br>
                            Former Full Professor, UNLPam.</p>
                        <br>
                        <p class="read-more" id="readMoreText2">
                            Prof. Mario Diván was born in Santa Rosa (Argentina) on March 10 of 1979. He received an engineering degree in Information Systems from the National Technological University -NTU- (Argentina) in 2003, while he holds a specialty in managerial engineering from the NTU (Argentina) in 2004, a specialty in data mining and knowledge discovery in databases from the University of Buenos Aires (Argentina) in 2007, and a specialty on high-performance and grid computing from the National University of La Plata -NULP- (Argentina) in 2011. He obtained his Ph.D. in Computer Science in 2012 from the NULP (Argentina).
                            His interest areas lie in data science, data stream, stream mining, high-performance computing, big data, Internet-of-Thing, and measurement. </p>
                        <br>
                        <span id="readMoreButton2">
                            Read More
                        </span>
                        <script src="assets/js/script.js"></script>
                    </div>
                </div>
            </div>

            <div class="container m-3">
                <p>Keep checking for more updates</p>
            </div>
        </div>
    </div>
</div>

<script>
    const readMoreButton2 = document.getElementById("readMoreButton2");
    const readMoreText2 = document.getElementById("readMoreText2");

    readMoreButton2.addEventListener("click", function() {
        if (readMoreText2.style.display === "none" || readMoreText2.style.display === "") {
            readMoreText2.style.display = "block";
            readMoreButton2.textContent = "Read Less";
        } else {
            readMoreText2.style.display = "none";
            readMoreButton2.textContent = "Read More";
        }
    });
</script>