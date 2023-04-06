#include <stdio.h>

int main(void) {
    int radius = 2;
    double pi = 3.14;

    printf("%g\n", radius * radius * pi);

    int price_food = 980;
    int price_drink = 430;
    double discount_rate = 0.3;
    printf("%g\n", (price_food + price_drink) * (1 - discount_rate));
}