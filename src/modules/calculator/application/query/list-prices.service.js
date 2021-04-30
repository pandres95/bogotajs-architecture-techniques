import { PriceEntity } from "../../domain/price.entity.js";

export function calculatePriceService (listPriceBySku) {
    return ({ sku, qty }) => {
        const price = listPriceBySku({ sku });
        return new PriceEntity({ price, qty }).calculatePrice();
    }
}
