/* Дано натуральное число n.
 * б) Чему равна сумма его цифр?
 */

function getSumOfDigits(n) {
  let counter = 0;
  while (n !== 0) {
    counter += n % 10;
    n = Math.floor(n / 10);
  }
  return counter;
}

console.log(getSumOfDigits(123));
