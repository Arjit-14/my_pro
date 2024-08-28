const Venue = () => {
  return (
    <div className="banner-main">
      <div className="container">
        <div className="row">
          <div className="about-innar">
            <div className="col-lg-12">
              <div className="about-innar-content">
                <h1>Venue</h1>
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <p>
                      CHRIST (Deemed to be University) was born out of the
                      educational vision of St Kuriakose Elias Chavara, an
                      educationalist and social reformer of the nineteenth
                      century in South India. He founded the first Catholic
                      indigenous congregation, Carmelites of Mary Immaculate
                      (CMI), in 1831, which administers CHRIST (Deemed to be
                      University). CHRIST was established on 15 July 1969 as an
                      affiliated college, with the Vision of 'Excellence and
                      Service'. It became a preferred educational institution in
                      Bangalore, Delhi-NCR and Lavasa within the short period of
                      inception. One of the first institutions in India to be
                      accredited in 1998 by the NAAC, and subsequently in 2004
                      and 2016, CHRIST (Deemed to be University) has the top
                      grade ‘A’ in the 4-point scale. Today, the University
                      offers many Undergraduate, Postgraduate and PhD Programmes
                      in Humanities, Social Sciences, Science, Commerce,
                      Management, Engineering, Education, Law, and Architecture
                      to over 24000 students from all the states of India and
                      about 60 different countries. In 2019, CHRIST (Deemed to
                      be University) completed 50 glorious years of its
                      existence and sterling contribution to the cause of higher
                      education in India.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <div className="container image-container">
                      <img src="images/banner2.png" width="100%" />
                    </div>
                  </div>
                </div>
                <h1
                  className="mt-2 p-2"
                  style={{
                    fontSize: 24,
                    backgroundColor: "#1651a9",
                    color: "white",
                  }}
                >
                  Highlights of Delhi NCR
                </h1>
                <div className="container">
                  {/* Place 1 (Qutub Minar) */}
                  <div className="row">
                    {/* Place 1 Info (col-md-6) */}
                    <div className="col-md-6 place-info">
                      <h1>Qutub Minar</h1>
                      <p>
                        Qutub Minar is a UNESCO World Heritage Site located in
                        Delhi, India. It is a historic minaret known for its
                        beautiful Mughal architecture. The tower is 73 meters
                        tall and has a rich history dating back to the 12th
                        century. Qutub Minar is one of the most popular tourist
                        attractions in Delhi.
                      </p>
                      <p>
                        Qutub Minar, constructed in 1192 by Qutab-ud-din Aibak,
                        is a towering 73-meter-high minaret built with red
                        sandstone and marble. It is surrounded by several
                        historically significant monuments, including the
                        Quwwat-ul-Islam Mosque and the Iron Pillar of Delhi.
                        Visitors can explore the intricate carvings on the
                        minaret and enjoy panoramic views of Delhi from the top.
                      </p>
                      <p className="website">
                        Official Website:{" "}
                        <a href="https://www.qutubminar.org" target="_blank">
                          www.qutubminar.org
                        </a>
                      </p>
                    </div>
                    {/* Place 1 Image (col-md-6) */}
                    <div className="col-md-6 place-image text-center">
                      <img
                        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/b7/1f/31/qutab-minar.jpg?w=1200&h=1200&s=1"
                        alt="Qutub Minar"
                      />
                    </div>
                  </div>
                  {/* Place 2 (India Gate) */}
                  <div className="row">
                    {/* Place 2 Info (col-md-6) */}
                    <div className="col-md-6 place-info">
                      <h1>India Gate</h1>
                      <p>
                        India Gate is a war memorial and iconic landmark in
                        Delhi, India. It is dedicated to the soldiers who died
                        in World War I. The monument is an important site for
                        both tourists and locals, and it is especially beautiful
                        when illuminated at night.
                      </p>
                      <p>
                        India Gate, originally known as the All India War
                        Memorial, was designed by Sir Edwin Lutyens and
                        completed in 1931. It stands at a height of 42 meters
                        and bears the names of over 13,000 soldiers who lost
                        their lives during World War I. Surrounding the monument
                        is a well-maintained garden where people gather to relax
                        and pay their respects. India Gate is particularly
                        striking when it is illuminated in the evening.
                      </p>
                      <p className="website">
                        Official Website:{" "}
                        <a href="https://www.indiagate.org" target="_blank">
                          www.indiagate.org
                        </a>
                      </p>
                    </div>
                    {/* Place 2 Image (col-md-6) */}
                    <div className="col-md-6 place-image text-center">
                      <img
                        src="images/India Gate.png"
                        alt="India Gate"
                      />
                    </div>
                  </div>
                  {/* Place 3 (Humayun's Tomb) */}
                  <div className="row">
                    {/* Place 3 Info (col-md-6) */}
                    <div className="col-md-6 place-info">
                      <h1>Humayun's Tomb</h1>
                      <p>
                        Humayun's Tomb is another UNESCO World Heritage Site in
                        Delhi, known for its stunning Mughal architecture. It is
                        the tomb of the Mughal Emperor Humayun and is surrounded
                        by beautiful gardens. The tomb's design influenced the
                        architecture of the Taj Mahal.
                      </p>
                      <p>
                        Humayun's Tomb, built in the mid-16th century, is a
                        magnificent example of Mughal architecture. It combines
                        Persian and Indian architectural styles and features a
                        central octagonal tomb with beautiful gardens, water
                        channels, and other structures. The tomb's grandeur and
                        historical significance make it a must-visit attraction
                        in Delhi.
                      </p>
                      <p className="website">
                        Official Website:{" "}
                        <a href="https://www.humayunstomb.org" target="_blank">
                          www.humayunstomb.org
                        </a>
                      </p>
                    </div>
                    {/* Place 3 Image (col-md-6) */}
                    <div className="col-md-6 place-image text-center">
                      <img
                        src="https://whc.unesco.org/uploads/thumbs/site_0232_0005-750-750-20210425155601.jpg"
                        alt="Humayun's Tomb"
                      />
                    </div>
                  </div>
                  {/* Place 4 (Red Fort) */}
                  <div className="row">
                    {/* Place 4 Info (col-md-6) */}
                    <div className="col-md-6 place-info">
                      <h1>Red Fort (Lal Qila)</h1>
                      <p>
                        Red Fort, also known as Lal Qila, is a historic fort and
                        UNESCO World Heritage Site in Delhi. It was the main
                        residence of the Mughal emperors for over 200 years. The
                        fort is an architectural marvel and an important symbol
                        of India's history.
                      </p>
                      <p>
                        Red Fort, constructed by Emperor Shah Jahan in the 17th
                        century, is an impressive example of Mughal
                        architecture. It is known for its red sandstone walls
                        and intricate decorations. The fort includes various
                        halls, courtyards, and pavilions, each with its own
                        historical significance. Every year on India's
                        Independence Day (August 15th), the Prime Minister
                        hoists the national flag at Red Fort.
                      </p>
                      <p className="website">
                        Official Website:{" "}
                        <a href="https://www.redfort.org" target="_blank">
                          www.redfort.org
                        </a>
                      </p>
                    </div>
                    {/* Place 4 Image (col-md-6) */}
                    <div className="col-md-6 place-image text-center">
                      <img
                        src="https://cdn.britannica.com/75/152475-050-DA89FF0A/Red-Fort-Old-Delhi-India.jpg"
                        alt="Red Fort"
                      />
                    </div>
                  </div>
                  {/* Place 5 (Lotus Temple) */}
                  <div className="row">
                    {/* Place 5 Info (col-md-6) */}
                    <div className="col-md-6 place-info">
                      <h1>Lotus Temple</h1>
                      <p>
                        Lotus Temple, also known as the Bahá'í House of Worship,
                        is renowned for its lotus-like architecture. It is a
                        place of worship open to all religions, and its serene
                        surroundings make it a peaceful retreat for visitors.
                      </p>
                      <p>
                        Lotus Temple, completed in 1986, is one of the most
                        unique architectural marvels in Delhi. Its lotus-shaped
                        structure is made of white marble and has won numerous
                        architectural awards. Visitors come here to meditate,
                        pray, or simply enjoy the tranquil environment. The
                        temple has no idols or religious symbols inside and
                        promotes the unity of all religions.
                      </p>
                      <p className="website">
                        Official Website:{" "}
                        <a href="https://www.lotustemple.org" target="_blank">
                          www.lotustemple.org
                        </a>
                      </p>
                    </div>
                    {/* Place 5 Image (col-md-6) */}
                    <div className="col-md-6 place-image text-center">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/f/fc/LotusDelhi.jpg"
                        alt="Lotus Temple"
                      />
                    </div>
                  </div>
                  {/* Place 6 (Akshardham Temple) */}
                  <div className="row">
                    {/* Place 6 Info (col-md-6) */}
                    <div className="col-md-6 place-info">
                      <h1>Akshardham Temple</h1>
                      <p>
                        Akshardham Temple is a grand Hindu temple complex with
                        impressive architecture and exhibitions. It is dedicated
                        to Bhagwan Swaminarayan and showcases India's rich
                        cultural and spiritual heritage.
                      </p>
                      <p>
                        Akshardham Temple, inaugurated in 2005, is known for its
                        stunning architecture, intricate carvings, and spiritual
                        ambience. The temple complex includes the main
                        Akshardham Mandir, Yagnapurush Kund, Sahaj Anand Water
                        Show, and a cultural boat ride. Visitors can explore the
                        temple's exhibitions, which narrate the life and
                        teachings of Bhagwan Swaminarayan and celebrate India's
                        culture and heritage.
                      </p>
                      <p className="website">
                        Official Website:{" "}
                        <a href="https://www.akshardham.org" target="_blank">
                          www.akshardham.org
                        </a>
                      </p>
                    </div>
                    {/* Place 6 Image (col-md-6) */}
                    <div className="col-md-6 place-image text-center">
                      <img
                        src="https://media.easemytrip.com/media/Blog/India/637116640324801740/637116640324801740ptZ4Mc.jpg"
                        alt="Akshardham Temple"
                      />
                    </div>
                  </div>
                  {/* Place 7 (Jama Masjid) */}
                  <div className="row">
                    {/* Place 7 Info (col-md-6) */}
                    <div className="col-md-6 place-info">
                      <h1>Jama Masjid</h1>
                      <p>
                        Jama Masjid is one of the largest mosques in India. It
                        is an architectural marvel built during the Mughal era.
                        Visitors can climb the minaret for a panoramic view of
                        Old Delhi.
                      </p>
                      <p>
                        Jama Masjid, built by Emperor Shah Jahan between 1644
                        and 1656, is an exemplary piece of Mughal architecture.
                        The mosque's grand courtyard can accommodate thousands
                        of worshippers. Visitors can also climb the minaret for
                        breathtaking views of Old Delhi. The mosque is a serene
                        place for prayer and reflection.
                      </p>
                    </div>
                    {/* Place 7 Image (col-md-6) */}
                    <div className="col-md-6 place-image text-center">
                      <img
                        src="https://image.arrivalguides.com/x/09/9f454ebf4c89c543fae74178fbc49f1b.jpg"
                        alt="Jama Masjid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>     
    </div>
  );
};

export default Venue;
