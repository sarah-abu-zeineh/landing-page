const twoSum = function(nums, target) {
    const numSet = new Set();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;

        if (numSet.has(complement)) {
            return [nums.indexOf(complement), i];
        }

        numSet.add(num);
    }

    return [];
};
