def longestDigitsPrefix(inputString)
    digits = inputString.match(/^\d+/)
    return digits == nil ? '' : digits
end

