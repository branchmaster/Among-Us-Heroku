<?php 
$url = file_get_contents("{__DIR__}/tunnel.log");
if ($url !== "") {
    echo ("Your URL Is: $url");
}
else {
    echo ("You Don't Have A URL... Try Again");
}
?>
