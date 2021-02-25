/* Дано натуральное число n.
 * а) Сколько цифр в числе n.
 */
function countNumOfDigits(n) {
  let counter = 0;
  while (n !== 0) {
    n = Math.floor(n / 10);
    counter++;
  }
  return counter;
}
