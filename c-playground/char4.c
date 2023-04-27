#include <stdio.h>

int main(void) {

    for (;;) {
        int c = getchar();

        if ('a' <= c && c <= 'z') {
            int lc = c - 'a' + 'A';
            // putchar(lc);
            printf("%c=%d\n", lc, lc);
            printf("%c=%d\n", c, c);
            putchar('\n');
        }
    }
}