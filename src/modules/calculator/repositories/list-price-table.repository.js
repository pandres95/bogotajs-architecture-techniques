const pricesTable = {
    1: 200,
    2: 600,
    3: 700,
};

export function listPriceBySkuRepository ({ sku }) {
    return pricesTable[sku];
}
