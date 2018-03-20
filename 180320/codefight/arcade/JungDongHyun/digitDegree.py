def digitDegree(n):
    depth = [0]
    sum_digits(n, depth)

    return depth[0]


def sum_digits(n, depth):
    if n < 10:
        return n

    depth[0] += 1

    total = 0

    while n > 0:
        lsb = n % 10
        total += lsb
        n /= 10

    total = sum_digits(total, depth)

    return total

