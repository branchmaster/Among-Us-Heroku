<?php $url = file_get_contents("tunnel.log");
$url = preg_match('/tcp:\/\/(.+:[0-9]+) /', $url, $matches) ? $matches[1] : '';
if ($url !== '') {
    echo ("Your URL Is: " . $url);
}
else {
    echo ("You Don't Have A URL... Try Again");
}
?>