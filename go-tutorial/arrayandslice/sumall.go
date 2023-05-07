package arrayandslice

func SumAll(numbersToSum ...[]int) []int {

	var sums []int

	for _, numbers := range numbersToSum {
		sums = append(sums, Sum(numbers))
	}
	return sums
}

func SumAllTails(numberToSum ...[]int) []int {

	var tails []int

	for _, numbers := range numberToSum {

		if len(numbers) != 0 {
			tails = append(tails, Sum(numbers[1:]))
		} else {
			tails = append(tails, 0)
		}
	}
	return tails
}
