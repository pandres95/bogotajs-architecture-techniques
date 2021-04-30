import calculatePrice from '@bogotajs/calculator/calculate-price.js';
import express from 'express';
import { listCart } from '@bogotajs/cart/list-cart.function.js';

const app = express();

app.get('/cart', (req, res) => {
    const cart = listCart();
    const cartWithPrices = cart.map(({ sku, description, qty }) => ({
        sku,
        qty,
        description,
        price: calculatePrice(sku, qty),
    }));

    res.json(cartWithPrices);
});

app.listen(3000);
console.log('Listening to 3000');
