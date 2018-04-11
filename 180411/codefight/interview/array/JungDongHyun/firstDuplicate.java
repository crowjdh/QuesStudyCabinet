// int firstDuplicate(int[] input) {
//     int found = -1;

//     boolean[] bucket = new boolean[input.length];

//     for (int i = 0; i < input.length; i++) {
//         int element = input[i];
//         if (bucket[element - 1]) {
//             found = element;
//             break;
//         }
//         bucket[element - 1] = true;
//     }

//     return found;
// }

int firstDuplicate(int[] input) {
    for (int i = 0; i < input.length; i++) {
        int bucket_idx = Math.abs(input[i]) - 1;
        if (input[bucket_idx] < 0) {
            System.out.println(input);
            return bucket_idx + 1;
        } else {
            input[bucket_idx] = -input[bucket_idx];
        }
    }
    return -1;
}

