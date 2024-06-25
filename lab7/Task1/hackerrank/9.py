n = int(input())
integer_list = map(int, input().split())

tuple_integers = tuple(integer_list)
result = hash(tuple_integers)
print(result)