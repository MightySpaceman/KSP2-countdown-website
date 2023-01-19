const express = require('express');
const app = express();
const moment = require('moment');

app.use('/style.css', express.static('style.css'));
app.use('/ui.js', express.static('ui.js'));

const futureDate = moment("2023-2-25", "YYYY-MM-DD");
const duration = moment.duration(futureDate.diff(moment()));
const daysUntilKSP2 = Math.ceil(duration.asDays());

app.get("/", (req, res) => {
    res.send(`

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <meta name="title" content="Days until KSP 2">
        <meta name="description" content="${daysUntilKSP2} Days Left!">
    
        <title>Days until KSP 2</title>
    
        <link rel="stylesheet" href="./style.css">
        <script defer src="./ui.js"></script>
    </head>
    <body class="animate">
        <div class="main">
            <h2>>Days until KSP 2:<span id="blink">_</span></h2>
            <h1>[ ${daysUntilKSP2} ]</h1>
        </div>
        <footer>
            <a href="https://mstdn.social/@kerbalcountdown">Check out the Mastodon bot</a>
        </footer>
    </body>
    </html>

    `)
});

app.listen(4545, () => {
    console.log("Now listening...");
});