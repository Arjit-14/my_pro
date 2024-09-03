<?php
error_reporting(E_ALL); // Report all types of errors
ini_set("display_errors", 1);
require("component/header.php");
?>

<?php
if (isset($_GET['page'])) {
    $page = $_GET['page'];
    include("page/$page.php");
} else {
    include("page/home.php");
}
?>


<div class="footer">
    <?php require("component/footer.php"); ?>
</div>


</div>


<!--navigation-section-->


<!--footer-section-->