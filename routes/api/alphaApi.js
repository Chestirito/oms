const axios = require("axios");
const router = require("express").Router();
const keys = require("./keys/keys");

router.get("/quote", (req, res) => {
  // console.log(req.query.symbol);
  axios
    .get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${req.query.symbol}&apikey=${keys.alpha.api}`)
    .then( Response => {
            // console.log(Response.data);
            res.json(Response.data);
          })
          .catch(err => res.status(422).json(err));
});

router.get("/search", (req, res) => {

  axios
    .get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${req.query.symbol}&apikey=query`, { params :{ apikey:keys.alpha.api }})
    .then( Response => {
      // console.log(Response.data);
      res.json(Response.data);
    })
    .catch(err => res.status(422).json(err));
});

router.get("/exchange", (req, res) => {
  console.log(req.query.currency)
axios
    .get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${req.query.currency}&to_currency=CAD&apikey=J69JAFWB80RP7C03`, { params :{ apikey:keys.alpha.api }})
    .then( Response => {
      
      console.log(Response.data);
      res.json(Response.data);
    })
    .catch(err => res.status(422).json(err));
});

module.exports = router;

