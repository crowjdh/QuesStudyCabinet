import re

def longestDigitsPrefix(inputString):
    pattern = re.compile('^\d+')
    match = pattern.match(inputString)
    return match.group(0) if match is not None else ""

