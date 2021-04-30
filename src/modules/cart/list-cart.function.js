/**
 * 
 * @typedef CartItem
 * @property {Number} sku
 * @property {String} description
 * @property {Number} qty
 */

/**
 * 
 * @returns {CartItem[]}
 */
export function listCart () {
    return [{
        sku: 1,
        description: 'lapiceros',
        qty: 6,
    }];
}
