# cook your dish here
// converting input to integer
for _ in range(int(input())):
    bs=int(input())
// formula for calculating gross salary    
    if(bs<1500):
        gs=bs+(0.1*bs)+(0.9*bs)
    else:
        gs=bs+500+(0.98*bs)
    print(gs)
