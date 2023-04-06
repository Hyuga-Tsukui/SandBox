#include <stdio.h>

int main(void) {
    printf("3+2=%d\n", 3 + 2);
    printf("3-2=%d\n", 3 - 2);
    printf("3*2=%d\n", 3 * 2);
    printf("3/2=%d\n", 3 / 2);
    printf("3%%2=%d\n", 3 % 2);

    printf("88*0.9=%g\n", 88 * 0.9);
    printf("88*0.9=%d\n", (int)(88 * 0.9));

    printf("%d\n", (85 + 90 + 95 + 100) / 4);
    printf("%g\n", (85 + 90 + 95 + 100) / 4.0);
    printf("%g\n", (double)(85 + 90 + 95 + 100) / 4);
}