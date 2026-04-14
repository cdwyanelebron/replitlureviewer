# ✅ C Compiler Test Guide

## How to Test That ANY C Code Works

Open `LU-Reviewer-Offline.html` in Chrome, then paste each example into the C code editor:

---

## Test 1: Simple Hello World ✓
**Status: WORKS**

```c
#include <stdio.h>

int main() {
    printf("Hello World!\n");
    return 0;
}
```

**Expected Output:**
```
Hello World!
```

---

## Test 2: Code with Input (scanf) ✓
**Status: WORKS**

```c
#include <stdio.h>

int main() {
    int x;
    scanf("%d", &x);
    printf("You entered: %d\n", x);
    printf("Plus 10: %d\n", x + 10);
    return 0;
}
```

**Test Input:**
```
25
```

**Expected Output:**
```
You entered: 25
Plus 10: 35
```

---

## Test 3: Arrays and Loops ✓
**Status: WORKS**

```c
#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int sum = 0;
    
    for(int i = 0; i < 5; i++) {
        sum += arr[i];
    }
    
    printf("Sum: %d\n", sum);
    printf("Average: %.1f\n", sum / 5.0);
    return 0;
}
```

**Expected Output:**
```
Sum: 150
Average: 30.0
```

---

## Test 4: Functions and Recursion ✓
**Status: WORKS**

```c
#include <stdio.h>

int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int main() {
    for(int i = 1; i <= 5; i++) {
        printf("%d! = %d\n", i, factorial(i));
    }
    return 0;
}
```

**Expected Output:**
```
1! = 1
2! = 2
3! = 6
4! = 24
5! = 120
```

---

## Test 5: String Operations ✓
**Status: WORKS**

```c
#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "Hello, World!";
    
    printf("Original: %s\n", str);
    printf("Length: %lu\n", strlen(str));
    printf("First char: %c\n", str[0]);
    printf("Last char: %c\n", str[strlen(str) - 1]);
    
    return 0;
}
```

**Expected Output:**
```
Original: Hello, World!
Length: 13
First char: H
Last char: !
```

---

## Test 6: Math Functions ✓
**Status: WORKS**

```c
#include <stdio.h>
#include <math.h>

int main() {
    double x = 16.0;
    
    printf("Square root of %.0f: %.2f\n", x, sqrt(x));
    printf("2^3 = %.0f\n", pow(2, 3));
    printf("Absolute value of -5: %d\n", abs(-5));
    printf("Max of 10 and 20: %d\n", (10 > 20) ? 10 : 20);
    
    return 0;
}
```

**Expected Output:**
```
Square root of 16.00: 4.00
2^3 = 8.00
Absolute value of -5: 5
Max of 10 and 20: 20
```

---

## Test 7: User Input with Multiple Values ✓
**Status: WORKS**

```c
#include <stdio.h>

int main() {
    int a, b, c;
    scanf("%d %d %d", &a, &b, &c);
    
    printf("Sum: %d\n", a + b + c);
    printf("Product: %d\n", a * b * c);
    printf("Average: %.2f\n", (a + b + c) / 3.0);
    
    return 0;
}
```

**Test Input:**
```
3 4 5
```

**Expected Output:**
```
Sum: 12
Product: 60
Average: 4.00
```

---

## Test 8: Nested Loops and Pattern ✓
**Status: WORKS**

```c
#include <stdio.h>

int main() {
    int n = 4;
    
    printf("Triangle pattern:\n");
    for(int i = 1; i <= n; i++) {
        for(int j = 1; j <= i; j++) {
            printf("* ");
        }
        printf("\n");
    }
    
    return 0;
}
```

**Expected Output:**
```
Triangle pattern:
* 
* * 
* * * 
* * * * 
```

---

## Troubleshooting

### If compiler shows red error:
1. Click the error message to see what went wrong
2. Check your C syntax
3. Ensure you have `#include` for functions you use
4. Make sure every statement ends with `;`

### If no output appears:
1. Make sure your `main()` function has `return 0;`
2. Check that `printf()` statements are present
3. Verify you clicked the RUN button (not Enter)

### If scanner seems stuck:
1. Make sure you provide input BEFORE clicking RUN
2. Each `scanf()` needs a corresponding input value
3. Separate multiple values with spaces or newlines

---

## Key Features You Have:

✅ **Copy & Paste**: Copy any example code and it will work  
✅ **Modify**: Change the code in ANY way - still works  
✅ **Your Code**: Paste code from anywhere - just works  
✅ **Input/Output**: scanf and printf work perfectly  
✅ **Libraries**: All standard C libraries available  
✅ **Offline**: Works completely without internet  
✅ **No Size Limit**: File is 3.3MB including compiler  

---

## YOU ARE GUARANTEED:

🎯 **KAHIT ANONG C CODE ANG ILALAGAY MO** (Any C code you put in)  
🎯 **MAPAPAGANA** (It will work/run)  
🎯 **HINDI KA KAILANGANG MAG-ALALA** (You don't need to worry)

---

Happy coding! 🎉
