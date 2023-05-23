const express = require('express');
const path = require('path');
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cors
const cors = require('cors');
app.use(cors());

//router Restful API
app.use("/api/members", require("./routes/api/members"));

const staticHome = path.join(__dirname, 'public');
app.use(express.static(staticHome));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`express server is running on port ${PORT}`);
});