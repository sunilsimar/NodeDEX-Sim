import express from 'express';

const app = express();
app.use(express.json());

let ETH_BALANCE = 200;
let USDC_BALANCE = 700000;

app.post('/buy-asset',(req,res)=>{
    const quantity = req.body.quantity;
    const updatedEthQuantity = ETH_BALANCE - quantity;
    const updatedUsdcBalance = (ETH_BALANCE * USDC_BALANCE) / updatedEthQuantity;
    const paidAmount = updatedUsdcBalance - USDC_BALANCE;

    ETH_BALANCE = updatedEthQuantity;
    USDC_BALANCE = updatedUsdcBalance;

    res.json({
        message: `You paid ${paidAmount} USDC for ${quantity} ETH`
    })
})

app.post('/sell-asset',(req,res)=>{
    const quantity = req.body.quantity;
    const updatedEthQuantity = ETH_BALANCE + quantity;
    const updatedUsdcBalance = (ETH_BALANCE * USDC_BALANCE) / updatedEthQuantity;
    const gottenUsdc = USDC_BALANCE - updatedUsdcBalance;

    ETH_BALANCE = updatedEthQuantity;
    USDC_BALANCE = updatedUsdcBalance;

    res.json({
        message: `You got ${gottenUsdc} USDC for ${quantity} ETH`
    })
})


app.listen(3000, ()=>{
    console.log('Server started at http://localhost:3000')
})