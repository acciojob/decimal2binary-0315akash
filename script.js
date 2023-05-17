function threeSum(arr, target) {
  // Helper function to convert decimal to binary
  function decimalToBinary(decimal) {
    // Check if the input is zero
    if (decimal === 0) {
      return '0';
    }

    let binary = '';

    // Convert decimal to binary
    while (decimal > 0) {
      // Get the remainder when dividing by 2 (either 0 or 1)
      let remainder = decimal % 2;

      // Prepend the remainder to the binary string
      binary = remainder + binary;

      // Update the decimal by dividing it by 2
      decimal = Math.floor(decimal / 2);
    }

    return binary;
  }

  // Call decimalToBinary to convert target to binary
  let binaryTarget = decimalToBinary(target);

  // Rest of the threeSum function implementation...

}

module.exports = threeSum;