import React from 'react';
import Footer from '../Share/Footer';

const Blog = () => {
    return (
        <div className='text-center'>
            <h2 className='font-bold text-accent text-2xl mt-4'> This is blog Section</h2>

            <div class='border-2 border-indigo-600 w-3/4 rounded-md mx-auto my-6 p-4'>
                <h2 className='font-bold mb-2'>Ques-1: How will you improve the performance of a React Application?
                </h2>
                <p>
                    Ans:To optimize React rendering, need to make sure that components receive only necessary props. It will let control the CPU consumption and avoid over-rendering unnecessary features. The solution is to create a functional component that will collect all props and redistribute them to other components. Then it checks the difference between the previous DOM representation and new DOM. Once it has done, the real DOM will update only the things that have actually changed. This makes the application faster, and there is no wastage of memory.

                </p>
            </div>
            <div class='border-2 border-indigo-600 w-3/4 rounded-md mx-auto my-6 p-4'>
                <h2 className='font-bold mb-2'>Ques-2:  What are the different ways to manage a state in a React application?

                </h2>
                <p>
                    Ans:There are four main types of state you need to properly manage in a React apps:<br></br>

                    Local state<br></br>
                    Global state<br></br>
                    Server state<br></br>
                    URL state<br></br>
                    React uses an observable object as the state that observes what changes are made to the state and helps the component behave accordingly. For example, if  update the state of any component like the following the webpage will not re-render itself because React State will not be able to detect the changes made.

                </p>
            </div>
            <div class='border-2 border-indigo-600 w-3/4 rounded-md mx-auto my-6 p-4'>
                <h2 className='font-bold mb-2'>Ques-3:  How does prototypical inheritance work?


                </h2>
                <p>
                    Ans: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.

                </p>
            </div>
            <div class='border-2 border-indigo-600 w-3/4 rounded-md mx-auto my-6 p-4'>
                <h2 className='font-bold mb-2'>Ques-4:   How will I implement a search to find products by name?

                </h2>
                <p>
                    Ans: Use filter if I want to find all items in an array that meet a specific condition. Use find if I want to check if that at least one item meets a specific condition. Use includes if  want to check if an array contains a particular value. Use indexOf if  want to find the index of a particular item in an array.

                </p>
            </div>
            <div class='border-2 border-indigo-600 w-3/4 rounded-md mx-auto my-6 p-4'>
                <h2 className='font-bold mb-2'>Ques-5: What is a unit test? Why should write unit tests?


                </h2>
                <p>
                    Ans: Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.

                </p>
            </div>
            <div class='border-2 border-indigo-600 w-3/4 rounded-md mx-auto my-6 p-4'>
                <h2 className='font-bold mb-2'>Ques-6: Why should write unit tests?


                </h2>
                <p>
                    Ans: One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code. Higher quality individual components create overall system resiliency. Thus, the result is reliable code. Unit tests also change the nature of the debugging process

                </p>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Blog;