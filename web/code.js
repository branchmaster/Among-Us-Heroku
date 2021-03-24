"use strict";
$('#serverinfo').removeClass('hidden');
(async () => {
    var linecontents = [],
        lines;
    await $.ajax({
        url: "/tunnel.log",
        data: {
            value: 1
        },
        method: 'GET',
        error: XMLHttpRequest => {
            $("#tunnelurl").html(`Error: Failed Getting tunnel.log Status: ${XMLHttpRequest.status}, Status Text: ${XMLHttpRequest.statusText}`)
            throw new Error(`Failed Getting tunnel.log Status: ${XMLHttpRequest.status}, Status Text: ${XMLHttpRequest.statusText}`)
        },
        success: data => {
            lines = data.toString().split("\n");
        }
    });

    for (var i = 0; i < lines.length; i++) {
        if (lines[i].includes("your url is:")) {
            linecontents.push(`\n${lines[i]}`);
        }
    }

    if (linecontents.length != 0) {
        lines = lines[lines.length - 1].match(new RegExp("https://[A-Za-z0-9./\-]*")).toString();
        $("#tunnelurl").html(`Your LocalTunnel URL Is: ${lines} On Port 22023`);
        lines = lines.replace('https://', '');
        $("#serverinfo").attr('href', `https://thebotlynoob.github.io/Among-Us-Heroku/#${lines}:22023`);
    } else {
        $("#tunnelurl").html(`You Don't Have A LocalTunnel URL... Try Again`);
    }
})();