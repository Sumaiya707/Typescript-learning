const orders = new Map<string, number>();
function addOrder(juice: string) {
  const quantity = (orders.get(juice) ?? 0) + 1;
  orders.set(juice, quantity);
}
addOrder("LEMON");
addOrder("COKE");
addOrder("APPLE");
addOrder("MANGO");
addOrder("LILY");

console.log(orders);
