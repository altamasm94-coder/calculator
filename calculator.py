def calculator(a,b,operation):
    match operation:  
        case 0: exit()
        case 1: return a + b
        case 2: return a - b
        case 3: return a * b
        case 4: return a / b
        case 5: return a ** b
        case 6: return a // b
        case 7: return a % b
        case 8: return a ** (1/b)
        case 9: return a ** (1/a)
        case 10: return b ** (1/b)
        case 11: return b ** (1/a)
        case _: return "Invalid operation"
print ("""
1.addition
2.subtraction
3.multiplication
4.division
5.exponentiation
6.floor division
7.modulo
8.square root of a
9.square root of b
10.cube root of a
11.cube root of b
0.exit
""")
while True:
    try:
        operation = int(input("enter the number :"))
        if operation == 0:
            exit()
    except ValueError as e :
        print (f"invalid input plese select an valid function , {e}")
    try:
            a = float(input("Enter the first number :"))
            b=float(input ("Enter the second number : "))
            if operation == 4 and b == 0:
                raise ZeroDivisionError("the numeber divided by zero will give an error please give an number other than zero ")
            if operation == 8 and a < 0 :
                raise ValueError("the square root of the negative number is not defined in the real number system plese enter a positive number ")
            if operation == 9 and b<0:
                raise ValueError("the square root of the negative number is not defined in the real number system plese enter a positive number ")  
            if operation == 10 and a<0:
                raise ValueError("the cube root of the negative number is not defined in the real number system plese enter a positive number ")
            if operation == 11 and b<0:
                raise ValueError("the cube root of the negative number is not defined in the real number system plese enter a positive number ")
    except ValueError as e:
        print (f"invalid input please enter a valid number not a character, {e}")
        continue  
    except ZeroDivisionError as e:
        print(f"{e}")
        continue    
    else:
            result = calculator(a,b,operation)
            print (f"the answer is : {result}")



