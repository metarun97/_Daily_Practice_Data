//  DOM HTML FILE DATA:-
 
 // Javascript Part:-

        /*
        [Windows]
        1. windows in the main container or we can say the global Object and operations related to entire browser window can be a part of window object.
       => For ex the history or to find the url etc.

        2. All the members like objects,methods or properties if they are part of window object then we do not refer the windown object.

        3. Windows has methods,properties and object.ex setTimeout() or setInterval() are the methods,where as Document is the object of the Window and it also has screen object with properties describing the physical display.

        */

        /*
        [DOM] 
        1.Where as the DOM is the child of window object.

        2. Where in the DOM we need to refer the document, if we want to use the document object,methods or properties.

        3. Document is just the object of the global object that is window deals with the document,the HTML elements themselves.
        */

        /*
        [BOM]

        The BOM os the brwser object model which deals browser components aside from the document,like history,location,navigation and screen (as some others that very by browser). OR 
        In simple meaning all the Window operations which comes under BOM are performed using BOM.

        => alert/confirm/prompt are also the part of BOM.
        */

        /* 1. document.documentElement returns the element that is the root element of the document.
          2. document.head
          3. document.body
          4. document.body.childNodes(include tab,enter and whiteSpace)
          5. document.children(without text nodes,only Elements)
          6. document.childNodes.length
        */
        // EXAMPLES:-
 
        // alert(location.href);

        // Example for Visit on a webpage:-

        // if(confirm("You want to visit Google...?")){
        //     location.href = "https://www.google.com/";
        // }


        
// SEARCH HTML FILE DATA:-


          // How to search the elements and the references will see in it.

        // function ChangeContent() {
            // For id:-
            // const headingChange = document.getElementById("heading");
            // headingChange.innerHTML = "Hello Welcome learners."

            // For class:-

            // console.log(document.getElementsByClassName('para'));

            // For tagname:-

            // console.log(document.getElementsByTagName("p"));

            // For byname:-

            //  console.log(document.getElementsByName("gender"));

            // For queryselector & queryselectorall:-

            // Note => queryselector returns the first matching value whereas quaryselectorall() will return all the elements.

            //  document.querySelector("#heading").innerHTML = "Changed!"
            //  document.querySelector(".para").innerHTML = "Para date changed!!"
                //   console.log(document.querySelectorAll(".para"));
        // }

// Difference between getelementbyId & queryselecor:-

        // console.log(document.getElementById("web-id").innerHTML);
        // console.log(document.querySelector("#web-id").innerHTML);
        // console.log(document.querySelector(".web-id").innerHTML);





