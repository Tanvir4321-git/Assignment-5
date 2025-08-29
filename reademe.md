1.  What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

answer: We can call any id from html file in Javascript by getElementById and we can call class from htm file in Javascript by getElementByClassName. So difference between getElementById and getElementByClassName is that when we use getElementById we can just call only one html element and it return only one element but when we use getElementByClassName we can call multiple html elements and it return multiple element.


querySelector and querySelectAll both are work by css selector so difference between both of them are that when  we use  querySelector it just can select only one element but querySelectAll select all element match by css selector.

2. How do you create and insert a new element into the DOM?
answer: we can  create a new element by createElement and for insert we use appendChild.

3. What is Event Bubbling and how does it work?
Answer: Even bubbling  is a step of Event propagation where an event start from the target element and go up step by step to it’s parent element until it reach the document.
 
  It works like triggering  first it trigger the child element and than move up to its parent element and  moving up until  it reach the document.

  4. What is Event Delegation in JavaScript? Why is it useful?
  Event Delegation is an easier process for add event listener.  we can use a single event listener in a parent element instead of add multiple event listener to multiple child.
  
   Its useful for multiple purpose like better performance, reduce memory storage, save time , we can handle dynamically etc.

  5.  What is the difference between preventDefault() and stopPropagation() methods?
    preventDefault()  stop the default action of an element.
    stopPropagation() stop the event from going to parent element.





