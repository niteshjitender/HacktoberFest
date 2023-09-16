//This data contains the data the is being dipslayed as card in the website
// Add your details here
const data = [
    {
        "name": "Jitender Singh Chhapola",
        "occupation": "Full Stack Software Developer",
        "username": "niteshjitender",
        "github": "https://github.com/niteshjitender",
        "location": "India",
        "favouriteQuote": "Improving, Learning, Enjoying.",
        "profilePic": "./userImageData/niteshjitender.jpeg"
    },
    {
        "name": "Suhaas Arun",
        "occupation": "MERN stack developer",
        "username": "Suhaas10",
        "github": "https://github.com/Suhaas10",
        "location": "India",
        "favouriteQuote": "See, you not only have to be a good coder to create system like Linux, you have to be a sneaky bastard too.",
        "profilePic": "./userImageData/suhaasarun.jpeg"
    },
    {
        "name": "Sayam Alvi",
        "occupation": "React Developer",
        "username": "sayamalvi",
        "github": "https://github.com/sayamalvi",
        "location": "India",
        "favouriteQuote": "There are no shortcuts to success. You gotta hustle hard.",
        "profilePic": "./userImageData/sayamalvi.jpeg"
    },
    {
        "name": "Vishesh Rathi",
        "occupation": "Front End Developer",
        "username": "rathi710",
        "github": "https://github.com/rathi710",
        "location": "India",
        "favouriteQuote": "Grind is Eternal",
        "profilePic": "./userImageData/visheshrathi.jpeg"
    },
    {
        "name": "Sainath",
        "occupation": "Front End Developer",
        "username": "sainathd07",
        "github": "https://github.com/sainathd07",
        "location": "India",
        "favouriteQuote": "Always belive in yourself",
        "profilePic": "./userImageData/sainathd07.jpg"
    },  
    {
        "name": "Ansh Rusia",
        "occupation": "Full Stack Developer",
        "username": "anshrusia200",
        "github": "https://github.com/anshrusia200",
        "location": "India",
        "favouriteQuote": "The bad news is time flies. The good news is you're the pilot.",
        "profilePic": "./userImageData/anshrusia200.jpg",
      },

    //Add an object here containing your data
]


//Function to add the userdata
function addElement(userData) {

    //Card div
    const card = document.createElement("div");
    card.classList.add("card");

    //Heading div
    const heading_div = document.createElement("div");
    const childTag1_img = document.createElement("img");
    if (userData.profilePic)
        childTag1_img.src = userData.profilePic
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
    let anchor = document.createElement("a");
    anchor.setAttribute("class","glow")
    anchor.href = userData.github;
    anchor.innerText = userData.username;
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

    //wobble animation for title start
    var el = document.querySelector('#first');
    el.addEventListener('mouseover', function(){
            
        if(!el.classList.contains('animating') && !el.classList.contains('mouseover')){
                
            el.classList.add('animating','mouseover');
            var letters = el.innerText.split('');
                    
            setTimeout(function(){ el.classList.remove('animating'); }, (letters.length + 1) * 50);
                    
            var animationName = el.dataset.animation;
            if(!animationName){ animationName = "jump"; }
                
            el.innerText = '';
                
            letters.forEach(function(letter){
                if(letter == " "){
                    letter = "&nbsp;";
                }
                el.innerHTML += '<span class="letter">'+letter+'</span>';
            });
                    
            var letterElements = el.querySelectorAll('.letter');
            letterElements.forEach(function(letter, i){
                setTimeout(function(){
                    letter.classList.add(animationName);
                }, 50 * i);
            });
                    
        }
            
    });
        
    el.addEventListener('mouseout', function(){				
        el.classList.remove('mouseover');
    });    
    //wobble animation for title end
}

// Adding multiple elements
data.forEach(element => {
    addElement(element);
});
