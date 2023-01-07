const { Router } = require('express');

const router = new Router();

router.get('/', (req, res) => {
    const data = {
        address: '0x0Ee2a6F6aD07cEf7110cb13964C2D803F8Ff4deE',
        website: 'jeqs.com'
    };
    res.json(data);
});  

module.exports = router;