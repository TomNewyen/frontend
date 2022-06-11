const router = require('express').Router();

const KEY = 'sk_test_51L8JC2HJ6G4m4V5BQqgWZRnC2LAx9PAg4MehTMS8T1ERm94h3gCkgrt9HbxdIHUYSoKJDd3xn5jcALw2LrAPhtZN00AH5dpS2B'

const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
    stripe.charges.create({
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd",
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).json(stripeErr);
            } else {
                res.status(200).json(stripeRes);
            }
        }
    );
});

module.exports = router;