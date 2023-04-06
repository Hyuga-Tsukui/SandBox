#include <stdio.h>

int main(void) {
    printf("%-6s %6s %7s\n", "name", "number", "density");
    printf("%-6s %6d %7.2f\n", "gold", 79, 19.32);
    printf("%-6s %6d %7.2f\n", "silver", 47, 10.49);
    printf("%-6s %6d %7.2f\n", "copper", 29, 8.94);
    printf("%-6s %6d %7.2f\n", "iron", 26, 7.87);
}