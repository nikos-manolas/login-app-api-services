const login = (req, res) => {
    const { username, password } = req.body;
    const isUsername = username === 'nikos-manolas';
    const isPassword = password === 'password';
    if (isUsername && isPassword) {
        res.json('success');
    } else {
        res.json('wrong credentials');
    }
}

module.exports = login;