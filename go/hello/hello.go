package main

import (
	"fmt"
	"reflect"
)

var pl = fmt.Println

func main() {
	// int, float64, bool, string
	var MaxInt uint64 = 0
	pl(reflect.TypeOf(42))
	pl(reflect.TypeOf(4.2))
	pl(reflect.TypeOf(true))
	pl(reflect.TypeOf("hello"))
	pl(reflect.TypeOf(MaxInt))
}
