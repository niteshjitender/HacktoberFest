    //This data contains the data the is being dipslayed as card in the website
    // Add your details here
    const data = [
        {
            "name":"Jitender Singh Chhapola",
            "occupation": "Full Stack Software Developer",
            "username": "niteshjitender",
            "github": "https://github.com/niteshjitender",
            "location": "India",
            "favouriteQuote":"Improving, Learning, Enjoying.",
            "profilePic":"./userImageData/niteshjitender.jpeg"
        },
        {
            "name":"Kshitij Maurya",
            "occupation": "Student",
            "username": "mauryakshitijr",
            "github": "https://github.com/mauryakshitij",
            "location": "India",
            "favouriteQuote":"Stay hungry, Stay foolish.",
            "profilePic":"./userImageData/mauryakshitj.jpeg"
        }
        //Add an object here containing your data
    ]
    

    //Function to add the userdata
    function addElement (userData) {

        //Card div
        const card = document.createElement("div");
        card.classList.add("card");
        
        //Heading div
        const heading_div = document.createElement("div");
        const childTag1_img = document.createElement("img");
        if(userData.profilePic)
            childTag1_img.src=userData.profilePic
        // childTag1_img.setAttribute("alt",userData.username);
        heading_div.appendChild(childTag1_img);
        const childTag2_p = document.createElement("p");
        const name = document.createTextNode(userData.name);
        childTag2_p.appendChild(name);
        heading_div.appendChild(childTag2_p);
        heading_div.classList.add("heading_div");
        card.appendChild(heading_div);

        //Details div
        const details_div = document.createElement("div");
        details_div.classList.add("details_div");
        
        /* Adding list items and its details*/
        const ul = document.createElement("ul");
        var li = document.createElement("li");
        const occupation = document.createTextNode("Occupation: " + userData.occupation);
        li.appendChild(occupation);
        ul.appendChild(li);

        li = document.createElement("li");
        let span = document.createElement("span");
        span.innerText = "Username: ";
        li.appendChild(span);
        let anchor=document.createElement("a");
        anchor.href=userData.github;
        anchor.innerText=userData.username;
        li.appendChild(anchor);
        ul.appendChild(li);

        li = document.createElement("li");
        const location = document.createTextNode("Location: " + userData.location);
        li.appendChild(location);
        ul.appendChild(li);

        li = document.createElement("li");
        const favouriteQuote = document.createTextNode("Favourite Quote: " + userData.favouriteQuote);
        li.appendChild(favouriteQuote);
        ul.appendChild(li);

        //Finally adding the unordered list to the details div
        details_div.appendChild(ul);
        //Adding the detail div to the card div
        card.appendChild(details_div);
        
        /*List ends here*/

        //This is the div from html in which card is added
        const currentDiv = document.getElementById("containerID1");
        currentDiv.appendChild(card);

    }

    // Adding multiple elements
    data.forEach(element => {
        addElement(element);
    });
