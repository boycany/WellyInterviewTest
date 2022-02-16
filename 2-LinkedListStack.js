/**
    使用 Linked List 實作 Stack ，實作需包含以下方法。
    push() : 添加新元素。 pop():移除元素並返回被移除的元素。 size():返回所有元素數量。 

    const stack = new Stack() 
    stack.push(1)
    stack.push(2) 
    stack.push(3)
    stack.pop() // 3 
    stack.size() // 2 
 */

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}


class Stack{
    constructor(){
        this.head = null
        this.length = 0
    }
    
    push(value){
        let newNode = new Node(value)
        
        if(!this.head){
            this.head = newNode
        }else{
            let currentNode = this.head
            while(currentNode.next !== null){
                currentNode = currentNode.next
            }
            currentNode.next = newNode
        }
        this.length++    
    }

    pop(){
        if(!this.head){
            return null
        }else if(this.length === 1){
            let oldHead = this.head
            this.head = null
            this.length = 0
            return oldHead.value
        }else{
            let currentNode = this.head
            let i=0
            while(i < this.length - 2){
                currentNode = currentNode.next
                i++
            }
            let oldLastNode = currentNode.next 
            currentNode.next = null
            this.length--
            return oldLastNode.value
        }
    }

    size(){
        return this.length
    }
}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.pop()
stack.size()
