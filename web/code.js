"use strict";

(async () => {
    var lines;
    await $.ajax({
        url: "/tunnel.log",
        data: {
            value: 1
        },
        method: 'GET',
        error: XMLHttpRequest => {
            $("#tunnelurl").html(`Error: Failed Getting tunnel.log. Status: ${XMLHttpRequest.status}, Status Text: ${XMLHttpRequest.statusText}`)
            throw new Error(`Failed Getting tunnel.log. Status: ${XMLHttpRequest.status}, Status Text: ${XMLHttpRequest.statusText}`)
        },
        success: data => {
            lines = data;
        }
    });

    if (lines !== '') {
        lines = lines.match(new RegExp("https://[A-Za-z0-9./\-]*")).toString();
        $("#tunnelurl").html(`Your LocalTunnel URL Is: ${lines} On Port 22023`);
        lines = lines.replace('https://', '');
        $("<hr>").appendTo("#tunnel");
        $("<br>").appendTo("#tunnel");
        $("<a/>", {
            id: 'serverinfo',
            href: `https://thebotlynoob.github.io/Among-Us-Heroku/#${lines}:22023`,
            text: 'Click Here To Get The Server File!',
            target: '_blank'
        }).appendTo("body");
    } else {
        $("#tunnelurl").html(`You Don't Have A LocalTunnel URL... Try Again`);
    }
})();