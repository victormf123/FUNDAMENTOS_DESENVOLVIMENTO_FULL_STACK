function getSalary(fullSalary) {
  var baseINSS = fullSalary
  var discountINSS = 
    baseINSS <= 1751.81 
      ? baseINSS * 0.08
      : baseINSS <= 2919.72
      ? baseINSS * 0.09
      : baseINSS <= 5839.45
      ? baseINSS * 0.11
      : 642.34
      
    var baseIRPF = baseINSS - discountINSS

    var discountIRPF =
    baseIRPF < 1903.98
    ? 0.00
    : baseIRPF < 2826.65
    ? baseIRPF * 0.075 - 142.8
    : baseIRPF < 3751.05
    ? baseIRPF < 4664.68
    ? baseIRPF * 0.225 - 636.13
    : baseIRPF * 0.275 - 869.36

    var netSalary = fullSalary - discountINSS - discountIRPF

    return netSalary
}

module.exports = { getSalary }