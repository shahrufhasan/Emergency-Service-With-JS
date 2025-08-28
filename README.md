# Emergency-Service-With-JS

## 1. What is the difference between getElementByID, getElemnetsByClassName, and querySelector/ querySelelctorAll?
Answer: The main difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll is with getElementById we can get any value of an id from the HTML file. With getElementsByClass we can get the same classNames are used in the HTMl file. With querySelector we can get first matched css property and querySelectorAll can give us a NodeList  


## 2. How do you create and insert a new element into DOM?
Answer: To create a and element in  DOM we use document.createElement and to insert a new element we use appendChild method.


## 3. What is the Event Bubbling and how does it work?
Answer: Event bubbling is a process where you click something inside a parent div or section then the whole section is triggered because the children divs are inside a parent div. It works in a way like there is a div with few other chid elements like buttons, some subheading or p tags as well, so when you clicked somewhere in that area so in console you can see the whol parent div is clicked. And it goes upto the html head. 


## 4. What is the Event Delegation in JacaScript? Why is it useful?
Answer: Event Delegation is a process where you declare a single parent id and access the children or parent element using parenNode and Children method. It is very useful because you do not have to write a loop to get access to all the elements products of you website. So when you use a loop and you click on some button to get access to that product it will run the loop for each and every product and the website will be slow to load which is not that practical for larger projects. On the other hand event delegation only trigger the exact same class when you click on that particular button or div and gives you the result and the 
works is faster. 


## 5. What is the difference between preventDefault () and stopPropagation () methods?
Answer: The preventDefault () method is used to stop reloading a page when an addEventListener is clicked. This can not stop bubbling. On the other hand  stopPropagation ()  is used to stop bubbling and it does not stop the default reloading.
