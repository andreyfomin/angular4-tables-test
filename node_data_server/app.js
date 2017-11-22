const express = require('express');
const jsonData = require('./data/data');
const jsonServerData = require('./data/server');
const siteAppDetails = require('./data/site-app-details');

const app = express();

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.get('origin'));
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, cache-control, if-modified-since, pragma');

    // intercepts OPTIONS method
    if ('OPTIONS' === req.method) {
        // respond with 200
        res.sendStatus(200);
    }
    else {
        // move on
        next();
    }
});

// http://localhost:9999/assets/data.json
app.get(
    '/assets/data.json',
    function (req, res) {
        setTimeout(
            function () {
                console.log('/assets/data.json');
                res.send(jsonData);
            },
            500);
    });

// http://localhost:9999/assets/site-application-details
app.get(
    '/assets/site-application-details',
    function (req, res) {
        setTimeout(
            function () {
                let filtered = [];
                let start = 0;
                let end = 0;
                const resData = {
                    draw: req.query.draw,
                    recordsTotal: siteAppDetails.SiteApplicantDetails.length,
                    recordsFiltered: siteAppDetails.SiteApplicantDetails.length,
                };

                if (req.query.search.value !== '') {
                    filtered = siteAppDetails.SiteApplicantDetails.filter(
                        o => {
                            return String(o.CertificateNumber).search(req.query.search.value) != -1;
                        }
                    );
                    start = Number(req.query.start);
                    end = Number(req.query.start) + Number(req.query.length);

                    resData.recordsFiltered = filtered.length;
                    resData.data = (end > filtered.length)? filtered.slice(start, filtered.length) : filtered.slice(start, end);
                } else {
                    start = Number(req.query.start);
                    end = Number(req.query.start) + Number(req.query.length);

                    resData.recordsFiltered = siteAppDetails.SiteApplicantDetails.length;;
                    resData.data = siteAppDetails.SiteApplicantDetails.slice(start, end);
                }

                console.log('/assets/site-application-details');
                console.log(req.query);
                res.send(resData);
            },
            500);
    });

// http://localhost:9999/assets/server_processing
app.get(
    '/assets/server_processing',
    function (req, res) {
        setTimeout(
            function () {
                console.log('/assets/server_processing');
                console.log(req.query);
                jsonServerData.draw = req.query.draw;
                res.send(jsonServerData);
            },
            500);
    });

const server = app.listen(9999, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`Node(express) Web Server run at http://${host}:${port}`);
});