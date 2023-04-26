// An array contains both positive and negative numbers in random order. Rearrange the array elements so that all negative numbers appear before all positive numbers.

// Examples : 

// Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
// Output: -12 -13 -5 -7 -3 -6 11 6 5


function shiftall(arr)
{
     let left = 0;
     let right = arr.length-1;
    // Loop to iterate over the
    // array from left to the right
    while (left <= right)
    {
         
        // Condition to check if the left
        // and the right elements are
        // negative
        if (arr[left] < 0 && arr[right] < 0)
            left += 1;
         
        // Condition to check if the left
        // pointer element is positive and
        // the right pointer element is negative
        else if(arr[left] > 0 && arr[right] < 0)
        {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left += 1;
            right -= 1;
        }
         
        // Condition to check if both the
        // elements are positive
        else if (arr[left] > 0 && arr[right] > 0)
            right -= 1;
        else
        {
            left += 1;
            right -= 1;
        }
    }
}