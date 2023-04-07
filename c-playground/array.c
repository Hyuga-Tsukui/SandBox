#include <stdio.h>
int main(void) {

    enum { N = 5 };

    int sales[N];

    printf("%p\n", sales);
    for (int i = 0; i < N; i++) printf("%p\n", &sales[i]);
}