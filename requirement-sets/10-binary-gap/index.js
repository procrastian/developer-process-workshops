function solution(N) {
  const binary = N.toString(2);
  const digits = binary.split("");
  let binaryGap = 0;
  let count = 0;
  let isCounting = false;
  for (let i = 0; i < digits.length; i++) {
    const currentDigit = Number(digits[i]);
    if (currentDigit === 1) {
      if (count > binaryGap) {
        binaryGap = count;
      }
      count = 0;
      isCounting = true;
    }
    if (currentDigit === 0) {
      if (isCounting) count++;
    }
  }
  return binaryGap;
}

console.log(solution(1041));
// complexity: O(n)
