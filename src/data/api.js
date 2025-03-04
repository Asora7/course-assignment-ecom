export async function fetchProducts() {
    const response = await fetch("https://v2.api.noroff.dev/online-shop");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const result = await response.json();
  
    // The actual products are in result.data
    return result.data;
  }
  