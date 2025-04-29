/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer:

// it's O(n) because we have to check through all elements in the array one by one until we find the matching id.

*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer:

// it's O(log n) because we are using binary search which cut the search space in half each time, first we check the middle element, if its not match we'll go with the half left or right and repeat this until we find the match


*/

/* 
Which function is more efficient and why?
Answer:

the binary search is definitely more efficient than the linear search, as it cut the search space in half at each step.
for example if we have 1000 items, the linear probably will check through all 1000 items in the worst case, while the binary will only check about log2(1000) = 10 items in the worst case.

*/
