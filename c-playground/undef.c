#include <stdio.h>

/**
 * 未定義動作の確認
 */
int main(void) {
    // 0除算のケース
    printf("%d\n", 3/2);
    printf("%d\n", 3/0);
    printf("%g\n", 3.0/2);
    printf("%g\n", 3.0/0);

    printf("%08x\n", 0x1234<<0);
    printf("%08x\n", 0x1234<<16);
    printf("%08x\n", 0x1234<<20);
    printf("%08x\n", 0x1234<<24);
    printf("%08x\n", 0x1234<<28);

    // 整数ビット数を超えるシフト
    printf("%08x\n", 0x1234<<32);
}