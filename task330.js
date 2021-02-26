/*
 * Натуральное число называется совершенным, если оно
 * равно сумме всех своих делителей, за исключением себя самого. Число
 * 6 – совершенное, так как 6 = 1+2+3. Число 8 – не совершенное, так как
 * 8 ≠ 1+2+4.Дано натуральное число n. Получить все совершенные числа,
 * меньшие n.
 */

function getPerfectNumbers(n) {
  const result = [];
  for (let i = 6; i < n; i++) {
    if (isPerfectNumber(i)) {
      result.push(i);
    }
  }
  return result;
}

function isPerfectNumber(num) {
  let sumOfDivisors = 0;
  for (let i = 1, half = Math.floor(num / 2); i <= half; i++) {
    if (num % i === 0) {
      sumOfDivisors += i;
    }
  }
  return num === sumOfDivisors;
}
