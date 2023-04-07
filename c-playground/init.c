#include <stdio.h>


/**
 * 要素数を指定しない初期化
*/
void init1(void) {
    int sales[] = {190, 280, 370, 460, 550};
    for (int i = 0; i < 5; i++) printf("%d ", sales[i]);
    puts("");
}

/**
 * 要素数を指定した初期化
 * 
 * 指定していない要素は0で初期化される
*/
void init2(void) {
    int sales[5] = {190, 280, 370};
    for (int i = 0; i < 5; i++) printf("%d ", sales[i]);
    puts("");
}

/**
 * 添字を指定した初期化
*/
void init3(void) {
    int sales[5] = {[2]=370, 460, 550, [0]=190, 280};
    for (int i = 0; i < 5; i++) printf("%d ", sales[i]);
    puts("");
}

/**
 * 配列の初期化
*/
int main(void) {
    init1();
    init2();
    init3();
}