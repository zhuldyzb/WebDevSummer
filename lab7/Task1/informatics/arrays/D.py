n = int(input())
arr = input().split()
count = 0
for i in range(1, n):
    if int(arr[i-1]) < int(arr[i]):
        count+=1
print(count)