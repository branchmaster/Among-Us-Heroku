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

    if (lines) {
        lines = lines.match(/tcp:\/\/(.+:[0-9]+) /)[1].toString().replace('tcp://', '');
        $("#tunnelurl").html(`Your LocalTunnel URL Is: ${lines} On Port ${port}`);
        lines = lines.replace('tcp://', '');
        $("<hr>").appendTo("body");
        $("<br>").appendTo("body");
        $("<a/>", {
            id: 'serverinfo',
            href: `https://impostor.github.io/Impostor/#${lines}`,
            text: 'Click Here To Get The Server File!',
            target: '_blank'
        }).appendTo("#serverinfocontainer");
    } else {
        $("#tunnelurl").html(`You Don't Have A LocalTunnel URL... Try Again`);
    }
})();