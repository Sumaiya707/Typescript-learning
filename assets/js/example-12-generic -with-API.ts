type Users = {
  id: number;
  name: string;
  email: string;
};

type Product = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  userId: number;
  total: number;
  date: string;
  status: "pending" | "shipped" | "delivered";
};

async function get<T>(apiEndpoint: string): Promise<T> {
  const data = await fetch(apiEndpoint);
  return data.json();
}

async function loadData() {
  const users = await get<Users[]>("/api/users");
  const products = await get<Product[]>("/api/products");
  const orders = await get<Order[]>("/api/orders");
}
