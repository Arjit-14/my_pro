<div style="background-color:#f5f5f5">
    <!--side-right-link-section-->
    <div class='side-right-link'>
        <ul>
            <!--<li> <a class="fa fa-phone" href="javascript:void(0);"> <span>Call </span> </a> </li>-->
            <li> <a class="fa fa-envelope" href="javascript:void(0);"> <span>ijcaci22@scrs.in</span> </a> </li>
            <li> <a class="fa fa-map-marker" href="javascript:void(0);"> <span></span> </a> </li>
        </ul>
    </div>
    <!--side-right-link-section-->
    <div class="banner-main">
        <div class="container">
            <div class="row">
                <!--About-Page-Section-->
                <div class="col-lg-9">
                    <div class="about-innar">
                        <!--<div class="col-lg-4">
            <div class="about-innar-image"> <img src="https://scril.sau.int/ijcaci22/assets/images/about.jpg" alt="" /></div>
          </div>-->

                        <div class="col-lg-12">
                            <div class="about-innar-content">
                                <h1>Contact Us</h1>
                                <hr>
                                <h1 style="padding: 0px; margin-right: 0px; margin-bottom: 5px; margin-left: 0px; font-size: 20px; font-family: Muli, sans-serif; font-weight: 600; line-height: 28px; color: rgb(0, 83, 136);"><span style="padding: 0px; margin: 0px; font-size: 18px;">You can send your queries to the following email ID:&nbsp;</span></h1>

                                <h1><strong>scrs.iccis@gmail.com |&nbsp;ashish.cse@mnit.ac.in</strong><strong>&nbsp;</strong></h1>
                            </div>
                        </div>



                        <div class="clr"></div>
                    </div>
                </div>

                <!--About-Page-Section-->
                <!-- Link-Section -->
                <div class="col-lg-3">
                    <div class="three-innar-2">
                        <nav>
                            <div class="nav-toggle dropdown"><a><a href="#">Navigation</a></a></div>
                            <ul>
                                <li class="dropdown"><a>Committees</a>
                                    <ul>
                                        <li class=8><a href='../committee/advisory-committee.html'>Advisory Committee</a></li>
                                        <li class=2><a href='../committee/general-chair.html'>General Chair</a></li>
                                        <li class=3><a href='../committee/organizing-chair.html'>Organizing Chair</a></li>
                                        <li class=6><a href='../committee/technical-program-committee.html'>Technical Program Committee</a></li>
                                        <li class=5><a href='../committee/publicity-committee.html'>Publicity Chair</a></li>
                                    </ul>
                                </li>


                                <li><a href='important_dates.html'>Important Dates</a></li>
                                <li><a href='previous_icdsa_Conferences.html'>Previous ICCIS Conferences</a></li>
                                <li><a href='registration_fee.html'>Registration Fee</a></li>

                        </nav>
                    </div>
                </div>


                <!-- Link-Section -->

            </div>
        </div>
    </div>
    <!-- Banner-And-Three-Box-Section -->
</div>





<script src="https://www.cvr2022.scrs.in/assets/js/jquery.js" type="text/javascript"></script>
<script type="text/javascript">
    $(document).ready(function() {

        $(".tabs-list li a").click(function(e) {
            e.preventDefault();
        });

        $(".tabs-list li").click(function() {
            var tabid = $(this).find("a").attr("href");
            $(".tabs-list li,.tabs div.tab").removeClass("active"); // removing active class from tab

            $(".tab").hide(); // hiding open tab
            $(tabid).show(); // show tab
            $(this).addClass("active"); //  adding active class to clicked tab

        });

    });
</script>
<style type="text/css">
    <!--
    .mukesh_bullet {
        background: url(https://www.cis2020.scrs.in/kcfinder/upload/images/button1.jpg) no-repeat top left;
    }

    .mukesh table tbody tr td {
        height: auto;
        padding: 10px 10px;
        font-size: 14px;
        color: #444;
        font-family: "Open Sans";
        border: none;
        width: auto !important;
        transition: none !important;
    }
    -->
    ">.tabs{
    width:100%;
    height:auto;
    margin:0
    auto;
    }
    /*
    tab
    list
    item
    */
    .tabs
    .tabs-list
    {
    list-style:none;
    margin:0px;
    padding:0px;
    }
    .tabs
    .tabs-list
    li
    {
    width:150px;
    float:left;
    margin:0px;
    margin-right:2px;
    padding:10px
    90px;
    text-align:
    center;
    background-color:cornflowerblue;
    border-radius:3px;
    }
    .tabs
    .tabs-list
    li:hover
    {
    cursor:pointer;
    }
    .tabs
    .tabs-list
    li
    a
    {
    text-decoration:
    none;
    color:white;
    }
    /*
    Tab
    content
    section
    */
    .tabs
    .tab
    {
    display:none;
    width:96%;
    min-height:250px;
    height:auto;
    border-radius:3px;
    padding:20px
    15px;
    background-color:lavender;
    color:darkslategray;
    clear:both;
    }
    .tabs
    .tab
    h3
    {
    border-bottom:3px
    solid
    cornflowerblue;
    letter-spacing:1px;
    font-weight:normal;
    padding:5px;
    }
    .tabs
    .tab
    p
    {
    line-height:20px;
    letter-spacing:
    1px;
    }
    /*
    When
    active
    state
    */
    .active
    {
    display:block
    !important;
    }
    .tabs
    .tabs-list
    li.active
    {
    background-color:lavender
    !important;
    color:black
    !important;
    }
    .active
    a
    {
    color:black
    !important;
    }
    /*
    media
    query
    */
    @media
    screen
    and
    (max-width:360px)
    {
    .tabs
    {
    margin:0;
    width:96%;
    }
    .tabs
    .tabs-list
    li
    {
    width:80px;
    }
    }
</style>