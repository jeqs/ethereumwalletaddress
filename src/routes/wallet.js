const ethers = require('ethers');

const { Router } = require('express');
const router = new Router();

router.get('/', (req, res) => {
    const wallet = ethers.Wallet.createRandom();
    const response = {
        privateKey: wallet.privateKey,
        address: wallet.address,
        mnemonic: wallet._mnemonic().phrase,
        etherscan : `https://etherscan.io/address/${wallet.address}`
        
    };
    res.json(response);
});  

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('received');
});  

module.exports = router;