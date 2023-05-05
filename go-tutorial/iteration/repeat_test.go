package iteration

import (
	"fmt"
	"testing"
)

func TestRepeat(t *testing.T) {

	assertCorrectMessage := func(t testing.TB, got, expected string) {
		t.Helper()
		if got != expected {
			t.Errorf("expected %q bat got %q", expected, got)
		}
	}

	t.Run("repeat 2", func(t *testing.T) {
		repeated := Repeat("a", 2)
		expected := "aa"
		assertCorrectMessage(t, expected, repeated)
	})

	t.Run("repeat 0", func(t *testing.T) {
		repeated := Repeat("a", 0)
		expected := ""
		assertCorrectMessage(t, expected, repeated)
	})

	t.Run("repeat 1", func(t *testing.T) {
		repeated := Repeat("a", 1)
		expected := "a"
		assertCorrectMessage(t, expected, repeated)
	})
}

func BenchmarkRepeat(b *testing.B) {
	Repeat("a", b.N)
}

func ExampleRepeat() {
	repeated := Repeat("a", 5)
	fmt.Println(repeated)
	// Output: aaaaa
}
