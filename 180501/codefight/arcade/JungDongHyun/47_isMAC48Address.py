import re

def isMAC48Address(inputString):
    found = re.match(r'^([A-F0-9]{2}-){5}[A-F0-9]{2}$', inputString)
    return True if found else False
