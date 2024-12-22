def soluton(n):
    count = 0
    for a in range(1,n+1):
        for b in range(a+1, n+1):
            for c in range(b+1, n+1):
                if (a+b)**2 == c**2:
                    
                    count += 1
    return count

print(soluton(10))