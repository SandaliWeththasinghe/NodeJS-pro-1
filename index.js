const express = require('express');

// Created ROutes
const postRequests = require("./routes/Post/postWithParams");
const getRequests = require("./routes/Get/getWithParams");
const putRequests = require("./routes/Put/putWithParams");
const deleteRequests = require("./routes/Delete/deleteWithParams");
const postWithBody = require("./routes/Post/postWithBody");

const app = express();

// Middelware to get data from client
app.use(express.json());

app.use(postRequests);
app.use(getRequests);
app.use(putRequests);
app.use(deleteRequests);

app.use(postWithBody);

// // Get Requests
// app.get("/se", (req,res) => {
//   return res.json("Get Request");
// });

// // Get with parameter
// app.get("/se/:seNo", (req,res) => {
//   req.params.seNo;
//   return res.json(req.params.seNo);
// });

// // Post Requests
// app.post("/se/:postPara", (req,res) => {
//   const seNum = req.params.postPara;
//   return res.json(seNum);
// });

// // Put Requests
// app.put("/se/:putPara", (req,res) => {
//   const seNum = req.params.putPara;
//   return res.json(seNum);
// });

// // Delete Requests
// app.delete("/se/:deletePara", (req,res) => {
//   const seNum = req.params.deletePara;
//   return res.json(seNum);
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Started at PORT ${PORT}`);
});