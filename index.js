const express = require('express');

const app = express();

// Get Requests
app.get("/se", (req,res) => {
  return res.json("Get Request");
});

// Post Requests
app.post("/se", (req,res) => {
  return res.json("Post Request");
});

// Put Requests
app.put("/se", (req,res) => {
  return res.json("Put Request");
});

// Delete Requests
app.delete("/se", (req,res) => {
  return res.json("Delete Request");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Started at PORT ${PORT}`);
});