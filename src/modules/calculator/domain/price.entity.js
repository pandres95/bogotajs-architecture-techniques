export class PriceEntity {
    constructor ({ price, qty }) {
        this.price = price;
        this.qty = qty;
    }

    calculatePrice () {
        if (this.qty >= 1 && this.qty < 5) {
            return this.price * this.qty;
        }
        
        if (this.qty >= 5 && this.qty < 10) {
            return this.price * (5 + .95 * (this.qty - 5));
        }
    }
}
