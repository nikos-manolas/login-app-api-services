const axios = require('axios');

const repositories = async (req, res) => {
    try {
        const { username } = req.params;
        const url = `https://api.github.com/users/${username}/repos`;
        const response = await axios.get(url);
        const repos = response && response.data ? response.data : [];
        res.json(repos);
    } catch (err) {
        console.error(err);
        res.send('error');
    }
}

module.exports = repositories;