<!DOCTYPE html>
<html>
<head>
    <title>Among Us Community Edition Server!</title>

  <link rel="icon" type="image/png" sizes="512x512" href="favicons/android-chrome-512x512.png">
  <link rel="icon" type="image/png" sizes="192x192" href="favicons/android-chrome-192x192.png">
  <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png">
  <link rel="icon" type="image/x-icon" href="favicons/favicon.ico">
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- If I decide I want to go back to JS <script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script> -->
  <link rel="stylesheet" href="style.css">
</head>
<body>
<noscript>JavaScript Is Required</noscript>
<div id="tunnel">
<h3 id="tunnelurl"><?php include("code.php");?></h>
</div>
<hr>
<div id="serverinfocontainer">
    <a id="serverinfo" href="<?php if ($url !== '') {
        echo("https://impostor.github.io/Impostor/#" . $url);
        }
        ?>" target="_blank">
        <?php if ($url !== '') {
            echo("Click Here To Get The Server File!");
        }
        ?>
    </a>
</div>
<!-- If I decide I want to go back to JS <script src="code.js"></script> -->
</body>
</html>