"use strict";

function getFile(url) {
  var contents;
  contents = $.get(url)
  return contents;
}

function filterLines(url, filter) {
  var linecontents = [],
      lines;
  lines = getFile(url);
  lines = lines.toString().split("\n")
  console.log(lines)

  for (var i = 0; i < lines.length; i++) {
    if (lines[i].includes(filter)) {
      linecontents.push(`\n${lines[i]}`);
    }
  }

  return linecontents;
}


var lines = filterLines("/tunnel.log", "your url is:")

if (lines.length != 0) {
    lines = lines[lines.length - 1].match(new RegExp("https://[A-Za-z0-9./\-]*")).toString();
    $("#tunnelurl").html(`Your LocalTunnel URL Is: ${lines} On Port 22023`);
    lines = lines.replace('https://', '');
    $("#serverinfo").attr('href', `https://thebotlynoob.github.io/Among-Us-Heroku/#${lines}:22023`).html("Click To Get The Server File!");
} else {
    $("#tunnelurl").html(`You Don't Have A LocalTunnel URL... Try Again`);
}