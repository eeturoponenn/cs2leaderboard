const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

app.get('/api/leaderboard/:page', async (req, res) => {
    
   const url = `https://api.steampowered.com/ICSGOServers_730/GetLeaderboardEntries/v1/?lbname=official_leaderboard_premier_season1`;

   try {
      const steamResponse = await axios.get(url);
      res.json(steamResponse.data);
   } catch (error) {
      res.status(500).send('Error fetching from Steam API');
   }
});

app.listen(PORT, () => {
   console.log(`Server running on http://localhost:${PORT}`);
});