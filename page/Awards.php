<div class="banner-main">
    <div class="container">
        <div class="row">
            <div class="col-lg-9">
                <div class="about-innar">
                    <div class="col-lg-12">
                        <!-- <div class="about-innar-content">
                            <h1>Awards</h1>
                            <hr>
                            <h1 style="padding: 0px; margin-right: 0px; margin-bottom: 5px; margin-left: 0px; font-size: 20px; font-family: Muli, sans-serif; font-weight: 600; line-height: 28px; color: rgb(0, 83, 136);"><span style="padding: 0px; margin: 0px;"><span style="padding: 0px; margin: 0px; color: rgb(155, 89, 182);">1.&nbsp;</span></span><span style="padding: 0px; margin: 0px;"><span style="padding: 0px; margin: 0px; color: rgb(155, 89, 182);">Best&nbsp;Paper (Track&nbsp;Wise)</span></span></h1>

                            <p style="padding: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-family: &quot;Open Sans&quot;; font-size: 13px; color: rgb(38, 38, 38); text-align: justify; line-height: 25px;">&nbsp;</p>

                            <h1 style="padding: 0px; margin-right: 0px; margin-bottom: 5px; margin-left: 0px; font-size: 20px; font-family: Muli, sans-serif; font-weight: 600; line-height: 28px; color: rgb(0, 83, 136);"><span style="padding: 0px; margin: 0px; color: rgb(52, 152, 219);">SCRS best paper awards:</span></h1>

                            <hr style="padding: 0px; margin-top: 10px; margin-bottom: 10px; height: 1px; border-top-color: rgb(238, 238, 238); width: 840px; background: rgb(204, 204, 204); color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px;" />
                            <p style="padding: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-family: &quot;Open Sans&quot;; font-size: 13px; color: rgb(38, 38, 38); text-align: justify; line-height: 25px;">Soft Computing Research Society (SCRS), New Delhi, India will&nbsp;facilitate the awardee with a Gift Voucher for annual&nbsp;SCRS membership equivalent to Rs. 1200 and an appreciation certificate.&nbsp;</p>
                        </div> -->

                        <div class="about-innar-content">
                            <h1>Awards</h1>
                            <hr>
                            <h1><span class="award-1">1.&nbsp;</span><span>Best&nbsp;Paper (Track&nbsp;Wise)</span></h1>
                            <p>&nbsp;</p>
                            <h1><span class="award-scrs">SCRS best paper awards:</span></h1>
                            <hr />
                            <p>Soft Computing Research Society (SCRS), New Delhi, India will&nbsp;facilitate the awardee with a Gift Voucher for annual&nbsp;SCRS membership equivalent to Rs. 1200 and an appreciation certificate.&nbsp;</p>
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
    >.tabs
    {
    width:100%;
    height:auto;
    margin:0
    auto;
    }
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

<style>
    .about-innar-content {
        font-family: "Open Sans", sans-serif;
        color: rgb(38, 38, 38);
        line-height: 25px;
    }

    .about-innar-content h1 {
        padding: 0px;
        margin-right: 0px;
        margin-bottom: 5px;
        margin-left: 0px;
        font-size: 20px;
        font-family: Muli, sans-serif;
        font-weight: 600;
        line-height: 28px;
    }

    .about-innar-content h1 span {
        padding: 0px;
        margin: 0px;
    }

    .about-innar-content hr {
        padding: 0px;
        margin-top: 10px;
        margin-bottom: 10px;
        height: 1px;
        border-top-color: rgb(238, 238, 238);
        width: 840px;
        background: rgb(204, 204, 204);
        color: rgb(51, 51, 51);
    }

    .award-1 {
        color: rgb(155, 89, 182);
    }

    .award-scrs {
        color: rgb(52, 152, 219);
    }
</style>

</div>