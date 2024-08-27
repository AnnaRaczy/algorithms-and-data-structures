class List {
  constructor() {
    this.length = 5
    this.list = new Array(length)
    this.currentLength = 0

  } // initialize empty list
  add(element) {
    if(this.currentLength >= this.length)
      {
        this.length *=2
        let updatedList = new Array(this.length)
        for( i =0; i < this.currentLength; i++) {
          this.list[i]=this.list[i]
        }
        this.list = updatedList
      }
    this.list[this.currentLength] = element;
    this.currentLength++

  } // add element to the end of the list
  insert(element, index) {
    if(index >= 0 && index <this.currentLength && this.currentLength < this.length) {
      for(let i = this.currentLength; i > index; i--) {
        this.list[i] = this.list[i -1]
      }
      this.list[index] = element
      this.currentLength++
    } else {
      console.log('Index out of bounds')
    }
  } // insert element at index
  removeAt(index) {
    if(index >= 0 && index < this.currentLength) {
      for(let i = index; i < this.currentLength -1; i++){
        this.list[i] = this.list[i+1]
      }
      this.list[this.currentLength -1] = undefined 
      this.currentLength--
    }
    else {
      console.log('Index out of bounds')
    }
  } // remove element at index
  get(index) {
    if(index >= 0 && index < this.currentLength) {
      return this.list[index]
    } else {
      console.log('Index out of bounds')
      return undefined
    }
  } // get element at index
  set(element, index) {
     if (index >= 0 && index < this.currentLength) {
      this.list[index] = element
     } else {
      console.log('Index out of bounds');
    }
  } // set element at index
  get size() {
    return this.currentLength
  } // get number of elements
  clear() {
    this.currentLength = 0
  } // remove all elements
  contains(element) {
    for(let i=0; i < this.currentLength; i++) {
      if(this.list[i] === element) {
        return true 
    }
    return false
  } // check if element is in the list
  reverse() {
    let reversedList = new Array(this.currentLength);
    for(let i = 0; i = this.currentLength; i++) {
      reversedList[i] = this.list[this.currentLength - 1 - i];
    }
  } // reverse the list
  [Symbol.iterator]() {} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol
}

// Tasks:
// Implement the List class according to the above interface.
// Optional: Implement tests.
// Optional: Write the time and space complexity of each method.

// Notes:
// You can use the Array constructor to define the array of a specific size.
// Restrict the solution to work on the primitive types.
// Pay attention to edge cases, such as clearing an empty list, removing a non-existent element, modifying an element at a non-existent index, etc.
// Do not use any array functions; instead, create a new array with a different size, and search/count elements using loops.
// Optional: The constructor creates an array of a certain size, eg. 5, and when this size is exceeded, the size is doubled. You may need variables to store the current and maximum array size.
