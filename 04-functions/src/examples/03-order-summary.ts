function getOrderTotal(...prices: number[]): number {
  return prices.reduce((sum, price) => sum + price, 0);
}

console.log(getOrderTotal(1500, 3000, 1200)); // 총합: 5700
console.log(getOrderTotal()); // 0

function addTotal(...nums: number[]): number {
  return nums.reduce((sum, nums) => sum + nums, 0);
}

console.log(addTotal(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));