// Fetch all products
export async function fetchProducts() {
    const response = await fetch("https://v2.api.noroff.dev/online-shop");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const result = await response.json();
    return result.data;  // This will be the array of products
  }
  
  // Fetch a single product by ID
  export async function fetchProductById(id) {
    const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    const result = await response.json();
    return result.data;  // This will be the single product object
  }
  