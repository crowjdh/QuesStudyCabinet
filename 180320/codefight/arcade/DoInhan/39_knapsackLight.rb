def knapsackLight(value1, weight1, value2, weight2, maxW)
    possible_values = [0]
    
    if weight1 <= maxW
        possible_values.push(value1)
    end
    if weight2 <= maxW
        possible_values.push(value2)
    end
    if weight1+weight2 <= maxW
        possible_values.push(value1 + value2)
    end
    
    return possible_values.max
end

