#include <stdio.h>

/**
 * 素数判定
*/
int isPrimeNumber(int n) {
    if (n < 2) return 0;

    for (int i = 2; i < n; i++) {
        if (n % i == 0) return 0;
    }

    return 1;
}

int main(void) {
    printf("%d\n", isPrimeNumber(7));
    printf("%d\n", isPrimeNumber(10009));
    printf("%d\n", isPrimeNumber(12));
}


