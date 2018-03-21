/*				A
 *	w1 + w2		A
 *				B
 *	heavier		B
 *				C
 *	lighter		C
 *				D
*/

/*							A
 *	w1 + w2					A
 *							B ~ C
 *	heavier == lighter		B ~ C
 *							D
*/

int knapsackLight(int value1, int weight1, int value2, int weight2, int maxW) {
    if (weight1 + weight2 <= maxW) {
        // A: get both if you have enough room
        return value1 + value2;
    } else if (weight1 > maxW && weight2 > maxW) {
        // D: you can't bring either if your sack is too small
        return 0;
    } else {
        if (weight1 == weight2) {
            return Math.max(value1, value2);
        }
        if (maxW >= weight1 && maxW >= weight2) {
            // B: your bag can hold either one, but not at the same time
            return Math.max(value1, value2);
        } else {
            // C: in between two weights
            return maxW >= weight1 ? value1 : value2;
        }
    }
}

