#include <stdio.h>

int main(void) {

    // 変数のスコープはブロックスコープなので、1つめのxと2つめのxは別物
    {
        int x = 123;
        printf("%d\n", x);
    }

    {
        int x = 456;
        printf("%d\n", x);
    }

    int x = 789;

    // 外側の変数は見える
    {
        printf("outer x=%d\n", x);
    }

    {
        int x = 999;
        printf("inner x=%d\n", x);
    }
    // 外側の変数は内側で変更されない
    printf("outer x=%d\n", x);
}