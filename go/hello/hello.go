package main

import (
	"fmt"
	"reflect"
)

var pl = fmt.Println

func main() {
	pl(number("12+3"))
}

func number(s string) int {

	for i := 0; i < len(s); i++ {
		fmt.Println(reflect.TypeOf(s[i]))
		// fmt.Printf("%c", s[i])
	}
	return 0
}
