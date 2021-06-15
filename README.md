# Complex Number Speed Test

I created this repository to test the speed results of doing basic arithmetic on complex numbers using these approaches
- Arrays, ex ```[1,2]``` represents ```1 + 2i```, with external arithmetic functions
- Classes with internal arithmetic methods
- Key-Value Objects, ie: ```{r: 1, i: 2}``` represents ```1 + 2i```, with external arithmetic functions

## Results
Using Arrays or Key-Value Objects are similarly fast. Using classes is usually an order of magnitude slower. It seems that the overhead of initializing classes makes it slow.

### Addition
![Screenshot](/addition.png)

| # of Iterations | Class  | Array | Object |
|-----------------|--------|-------|--------|
| 1000            | 4      | 1     | 1      |
| 10000           | 12     | 3     | 4      |
| 100000          | 40     | 3     | 4      |
| 1000000         | 380    | 43    | 40     |
| 10000000        | 3750   | 404   | 381    |
| 100000000       | 34088  | 3871  | 3875   |
| 1000000000      | 338324 | 38897 | 38569  |

### Mutiplication
![Screenshot](/multiplication.png)

| # of Iterations | Class  | Array | Object |
|-----------------|--------|-------|--------|
| 1000            | 4      | 1     | 1      |
| 10000           | 11     | 3     | 2      |
| 100000          | 36     | 4     | 4      |
| 1000000         | 340    | 39    | 40     |
| 10000000        | 3209   | 388   | 385    |
| 100000000       | 32112  | 3864  | 3804   |
| 1000000000      | 334222 | 37922 | 39695  |

## Getting Started
1. Clone this repository
2. Run ```npm install```
3. Run ```npm start``` to run the speed tests once. Or to run in development mode to rerun the tests when you change a file, run ```npm run dev```