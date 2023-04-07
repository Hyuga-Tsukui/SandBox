#include <stdio.h>

/**
 * 多次元配列
*/
int main(void) {
    enum {ROW=2, COL=3};

    int a[ROW][COL] = {{11,12,13}, {21,22,23}};

    for (int i=0; i<ROW; i++) {
        for (int j=0; j<COL; j++) printf("%d ", a[i][j]);
        puts("");
    }
}