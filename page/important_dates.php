<div style="background-color:#f5f5f5">
    <div class="banner-main">
        <div class="container">
            <div class="row">
                <div class="about-innar">
                    <div class="col-lg-12">
                        <div class="about-innar-content">
                            <h1>Important Dates</h1>
                            <hr>
                            <div class="important-dates" style="text-align: left; background-color:white">
                                <p>● Call for Paper: <br><span style="color: red;">1 November 2023</span><br>
                                    ● Last date for Paper Submission: <br><span style="color: red;">30 May 2024</span><br>
                                    ● Acceptance Notification: <br><span style="color: red;">30 June 2024</span><br>
                                    ● Late Date for Camera Ready Paper: <br><span style="color: red;">14 July 2024</span><br>
                                    ● Last date of registration: <br><span style="color: red;">14 July 2024</span><br>
                                    ● Conference Dates: <br><span style="color: red;">13-14 September 2024</span><br>
                                </p>
                            </div>
                        </div>
                        <div class="clr"></div>
                    </div>
                </div>
            </div>
        </div>
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




</div>