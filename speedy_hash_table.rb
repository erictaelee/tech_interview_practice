Given two arrays, return a new array that contains the intersection of the two arrays. The intersection means the values that are contained in both of the arrays. Do not use the "&", or any built-in intersection methods.

NOTE: You must accomplish this in O(n) time. This is also known as linear time.

Input: [1, 2, 3, 4, 5], [1, 3, 5, 7, 9]
Output: [1, 3, 5]



input
x = [1, 2, 3, 4]
y = [8, 6, 4, 2]
output 
z = [2, 4]

brute force = 4 * 4 = 16 steps 
hash approach = 8 steps

O(N) 

{1 = true, 2 = true, 3 = true, 4 = true}
