

// Given N balls of colour red, white or blue arranged in a line in random order. You have to arrange all the balls such that the balls with the same colours are adjacent with the order of the balls, with the order of the colours being red, white and blue (i.e., all red coloured balls come first then the white coloured balls and then the blue coloured balls). 

// Examples:


// Input: {0, 1, 2, 0, 1, 2}
// Output: {0, 0, 1, 1, 2, 2}

// Input: {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1}
// Output: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2}


function sort012(a,arr_size)
    {
          
        let lo = 0; 
        let hi = arr_size - 1; 
        let mid = 0;
        let temp = 0; 
        // Iterate till all the elements
        // are sorted
        while (mid <= hi)
        {
            // If the element is 0
            if(a[mid] == 0)
            {
                temp = a[lo]; 
                a[lo] = a[mid]; 
                a[mid] = temp; 
                lo++; 
                mid++; 
            }
            // If the element is 1
            else if(a[mid] == 1)
            {
                mid++; 
            }
            // If the element is 2
            else
            {
                temp = a[mid]; 
                a[mid] = a[hi]; 
                a[hi] = temp; 
                hi--;
            }
              
        }
    }

let arr = [0,1,2,0,1,2];
let n = arr.length;

let x = sort012(arr,n);
console.log(x);
