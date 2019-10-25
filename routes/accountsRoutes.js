const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Account = mongoose.model('accounts');

module.exports = app => {
    app.get('/api/accounts', requireLogin, async (req, res) => {
        const accounts = await Account
            .find({_user: req.user.id});

        res.send(accounts);
    });

    app.post('/api/accounts', requireLogin, async (req, res) => {
        const { accountName, type, amount } = req.body;

        const account = new Account({
            accountName,
            type,
            amount,
            _user: req.user.id,
            dateCreated: Date.now()
        });

        try {
            await account.save();
            const user = await req.user.save();

            res.send(user);
        } catch(err){
            res.status(422).send(err);
        }
    });

    app.post('/api/accounts/edit', requireLogin, async (req, res) => {
        const { accountName, type, amount } = req.body;

        const account = new Account({
            accountName,
            type,
            amount,
            _user: req.user.id,
            dateCreated: Date.now()
        });

        try {
            await account.save();
            const user = await req.user.save();

            res.send(user);
        } catch(err){
            res.status(422).send(err);
        }
    });
};

