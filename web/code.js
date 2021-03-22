"use strict";

async function getFile(url) {
  var contents;
  await $.get(url, data => {
    contents = data;
  });
  return contents;
}

async function filterLines(url, filter) {
  var linecontents = [],
      lines;
  await getFile(url).then(contents => {
    lines = contents.split("\n");
  });

  for (var i = 0; i < lines.length; i++) {
    if (lines[i].includes(filter)) {
      linecontents.push(`\n${lines[i]}`);
    }
  }

  return linecontents;
}

(async () => {
  var lines = await filterLines("/tunnel.log", "your url is:");

  if (lines.length != 0) {
    lines = lines[lines.length - 1].match(new RegExp("https://[A-Za-z0-9./\-]*")).toString();
    $("#tunnelurl").html(`Your LocalTunnel URL Is: ${lines} On Port 22023`);
    lines = lines.replace('https://', '');
    $('<a>',{
        text: 'This is blah',
        title: 'Blah',
        href: '#',
        click: function(){ BlahFunc( options.rowId );return false;}
    }).appendTo('body');
    document.body.appendChild(document.createElement('a').appendChild(document.createTextNode("Click Here To Download The Server File!")).href = `https://thebotlynoob.github.io/Among-Us-Heroku/#${lines}:22023`);
  } else {
    $("#tunnelurl").html(`You Don't Have A LocalTunnel URL... Try Again`);
  }
})();