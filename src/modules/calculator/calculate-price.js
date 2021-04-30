import { calculatePriceService } from './application/query/calculate-price.service.js';
import { listPriceBySkuRepository } from "./repositories/list-price-table.repository.js";

export default function calculatePrice (sku, qty) {
    // const action = calculatePriceService(listPriceBySku);
    // const action = calculatePriceService(listPriceBySkuForVE);
    // const action = calculatePriceService(listPriceBySkuCached);
    // const action = calculatePriceService(listPriceBySkuLastYear);
    // const action = calculatePriceService(listPriceBySkuDev);
    const action = calculatePriceService(listPriceBySkuRepository);

    return action({ sku, qty });
}
