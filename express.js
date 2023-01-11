const express = require('express');
const app = express();
const PORT = 4119;
const Hebcal = require(`hebcal`);

app.get(`/hebrewdate`, (req, res, next) => {
    console.log(req.query);
    res.send(Hebcal.HDate(new Date(req.query.date)).toString('h'));
});

app.listen(PORT, () => {
    console.log(`server is now running on http://localhost:${PORT}`)
});