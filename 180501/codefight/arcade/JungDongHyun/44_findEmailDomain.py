def findEmailDomain(address):
    start = address.rfind('@') + 1
    return address[start:]
