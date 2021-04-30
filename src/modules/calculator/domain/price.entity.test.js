import { PriceEntity } from "./price.entity.js";

describe('PriceEntity', () => {
    it('For first 5 items, return price * qty', () => {
        console.assert(new PriceEntity({ price: 100, qty: 3 }).calculatePrice() === 300);
    });
});
