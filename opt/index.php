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
  
  <style>@import "https://fonts.googleapis.com/css?family=Ubuntu+Mono:regular,bold&subset=Latin";
    #tunnel{display:flex;
        justify-content:center;}
    #tunnel-url{text-align:center;}
    footer{position:absolute;
        left:0;
        right:0;
        bottom:0;
        width:100%;}
    #serverterminalsaying{text-align:center;}
    #serverterminalcontents{height:100vw;
        width:100vw;}
    body{background-color:black;
        height:100vw;
        color:white;
        font-family:"Ubuntu Mono","times new roman",times,roman,serif;
        text-shadow:0 0 5px #C8C8C8;}</style>
</head>
<body>
<div id="tunnel">
<h3 id="tunnelurl"><?php $lines=preg_split("/\r\n|\n|\r/",file_get_contents("serverurl.txt"));
$linecontents=array();
foreach (range(0,count($lines))as $i){
    if (str_contains($lines[$i], "your url is:")){
        array_push($linecontents,$lines[$i]);
}}
if (!empty($linecontents)){
    $linecontents=strpos($linecontents[count($linecontents)-1],"https://[A-Za-z0-9./-]*");
    echo("Your LocalTunnel URL Is: ". $linecontents ." On Port 22023");}
else{echo("You Don't Have A LocalTunnel URL... Try Again");}?>
<br>
</div>
<div id="serverterminal">
<br>
<p id="serverterminalsaying"><b>Below Is The Imposter Server</b></p>
<hr>
<br>
<p id="serverterminalcontents"><?php function tailCustom($filepath,$lines=1,$adaptive=true){$f=@fopen($filepath,"rb");if($f===false)return false;if(!$adaptive)$buffer=4096;else $buffer=($lines<2?64:($lines<10?512:4096));fseek($f,-1,SEEK_END);if(fread($f,1)!="\n")$lines-=1;$output='';$chunk='';while(ftell($f)>0&&$lines>=0){$seek=min(ftell($f),$buffer);fseek($f,-$seek,SEEK_CUR);$output=($chunk=fread($f,$seek)).$output;fseek($f,-mb_strlen($chunk,'8bit'),SEEK_CUR);$lines-=substr_count($chunk,"\n");}while($lines++<0){$output=substr($output,strpos($output,"\n")+1);}fclose($f);return trim($output);}
echo(tailCustom("server.log"));?></p>
</div>
</body>
</html>
