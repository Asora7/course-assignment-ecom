/**
 * Fetches all products from the Noroff API.
 *
 * @async
 * @throws {Error} If the network response is not OK.
 * @returns {Promise<Array<{
*   id: string;
*   title: string;
*   description: string;
*   price: number;
*   discountedPrice: number;
*   image: { url: string; alt?: string };
* }>>} An array of product objects from the API.
*/
export async function fetchProducts() {
 const response = await fetch('https://v2.api.noroff.dev/online-shop');
 if (!response.ok) {
   throw new Error('Failed to fetch products');
 }
 const result = await response.json();
 return result.data;
}

/**
* Fetches a single product by its ID from the Noroff API.
*
* @async
* @param {string} id – The unique ID of the product to retrieve.
* @throws {Error} If the network response is not OK.
* @returns {Promise<{
*   id: string;
*   title: string;
*   description: string;
*   price: number;
*   discountedPrice: number;
*   image: { url: string; alt?: string };
*   reviews?: Array<{ id: string; username: string; description: string }>;
* }>} The product object corresponding to the given ID.
*/
export async function fetchProductById(id) {
 const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
 if (!response.ok) {
   throw new Error('Failed to fetch product');
 }
 const result = await response.json();
 return result.data;
}
