<footer class="p-4 mm" style="background-color:#052658">
    <div class="container foot text-light" style="width: 80%;">
        <div class="row">
            <div class="col-md-4">
                <h4 class="m-0" style="font-size: 24px; font-weight:900">CHRIST</h4>
                <p>(Deemed to be University)</p>

                <div class="container p-0">
                    <ul class="list-unstyled">
                        <li>
                            <i class="bi bi-geo-alt"></i>
                            <span style="font-size:14px;">Mariam Nagar, Meerut Road, Delhi NCR<br>Ghaziabad - 201003</span>
                        </li>
                        <li>
                            <i class="bi bi-telephone h5 text-primary"></i>
                            <span style="font-size:14px;">Telephone: 01206666100</span>
                        </li>
                        <li>
                            <i class="bi bi-telephone h5 text-primary"></i>
                            <span style="font-size:14px;">Tel: 1800-123-3212</span>
                        </li>
                        <li>
                            <i class="bi bi-envelope h5 text-primary"></i>
                            <span style="font-size:14px;">Email: <a href="mailto:icscps.ncr@christuniversity.in" style="color:#00f0fc">icscps.ncr@christuniversity.in</a></span>
                        </li>
                        <li>
                            <i class="bi bi-globe h5\ text-primary"></i>
                            <a href="http://www.ncr.christuniversity.in" target="_blank"><span style="font-size:14px;color:#00f0fc"> http://www.ncr.christuniversity.in</span>
                            </a>
                        </li>
                    </ul>

                    <br>
                    <p style="font-size:13px !important;color:white">Copyright © CHRIST (Deemed to be University)</p>
                </div>

            </div>

            <div class="col-md-4">
                <h5 style="font-size: 24px;font-weight:900">Vision</h5>
                <p style="font-size: 14px;">EXCELLENCE AND SERVICE</p>
                <h5 style="font-size: 24px;font-weight:900">Mission</h5>
                <p style="font-size: 14px;">CHRIST (Deemed to be University) is a nurturing ground for an individual's holistic development to make effective contribution to the society in a dynamic environment.
                </p>
            </div>

            <div class="col-md-4">
                <h5 style="font-size: 24px;font-weight:900">Locate Us</h5>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.2144862561236!2d77.4073790755145!3d28.683229881776494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf059aeaf695d%3A0xdc407fcde59a0d0f!2sCHRIST%20(Deemed%20to%20be%20University)%20Delhi%20NCR!5e0!3m2!1sen!2sus!4v1694661695167!5m2!1sen!2sus" height="200" style="border:0;" allowfullscreen="" style="width: 100%;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <button class="my-2 btn btn-primary"><a href="https://ncr.christuniversity.in/how-to-reach-ncr-campus" style="color: white;" target="_blank">How to reach Venue</a></button>
            </div>

            <?php
            $file = 'counter.txt';  // path to text file that stores counts
            $count = strval(file_get_contents($file));  // read the file value

            if (empty($count)) {
                $count = 1785;  // set initial value if file is empty
            }

            $count = intval($count) + 1;  // increment the count
            file_put_contents($file, $count);  // store the new count to file
            ?>

            <div class="visitor-counter">
                Visitor Number: <?php echo $count; ?>
            </div>

        </div>
    </div>
</footer>

<style>
    .foot {
        width: 80% !important;
    }

    @media only screen and (max-width: 600px) {
        .foot {
            width: 100% !important;
        }

        .mm {
            padding: 10px !important;
        }

        .coll {
            margin-left: 15px !important;
            justify-content: flex-start !important;
        }

        .container-date {
            width: 100% !important;
        }
    }
</style>

<style>
    .visitor-counter {
        padding: 10px;
        color: white;
        font-size: 16px;
        text-align: center;
        margin-top: 20px;
        background-color: transparent;
        /* Set background color to transparent */
    }
</style>