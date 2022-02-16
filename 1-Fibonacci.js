/**
    建立函式 fibonacci 代入參數 position，position 表示的是想要得到 fibonacci sequence 中的第幾個數字的值。

    fibonacci(0) // 0
    fibonacci(1) // 1
    fibonacci(2) // 1
    fibonacci(3) // 2
    fibonacci(4) // 3 
 */


function fibonacci(position){
    if (position === 0 || position === 1){
        return position
    } 

   let first = 0
   let second = 1
   let last = first + second
   
   for(let i = 3; i <= position; i++){
        let temp = last        
        last = last + second
        first = second
        second = temp
   }
   return last
}

fibonacci(0)
fibonacci(1)
fibonacci(2)
fibonacci(3)
fibonacci(4)
