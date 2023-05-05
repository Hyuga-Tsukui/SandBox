package iteration

const repeatCount = 5

// repeat character
func Repeat(str string, repeatNum int) string {
	var repeated string
	for i := 0; i < repeatNum; i++ {
		repeated += str
	}
	return repeated
}
