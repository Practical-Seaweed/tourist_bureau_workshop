"use strict";

let categories = ["Adventures", "Arts & Crafts", "Museums", "Wine Tastings", "Other"];

let activities = [
    {
        category: "Adventures",
        id: "A101",
        name: "Valley Hot Air Balloons",
        description: "Enjoy a lovely hot air balloon ride over the valley at sunrise.  Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
        location: "121 S. Main Street",
        price: 265.00
    },
    {
        category: "Adventures",
        id: "A102",
        name: "River Runners: Float Trip",
        description: "A mellow float trip with lovely scenery, great fishing, just a few riffles, and it finishes back at our base. It is a perfect trip for those wishing to take their time, or those on a limited schedule.",
        location: "145 FM 103",
        price: 65.00
    },
    {
        category: "Adventures",
        id: "A103",
        name: "River Runners: Ride the Rapids",
        description: "Experience 3-4 hours of Class II and III whitewater rafting with breathtaking scenery. It is a fun, thrilling, and memorable adventure that everyone from ages 8 and up can enjoy – no experience necessary!",
        location: "145 FM 103",
        price: 145.00
    },
    {
        category: "Arts & Crafts",
        id: "AC101",
        name: "Painting with a Twist : Oils",
        description: "Enjoy 2 hours of creating an oil painting by following along with an experienced artist.  Drinks and snacks are included.",
        location: "1991 Paint Drive",
        price: 40.00
    },
    {
        category: "Arts & Crafts",
        id: "AC102",
        name: "Painting with a Twist : Watercolor",
        description: "Enjoy 2 hours of creating a watercolor painting by following along with an experienced artist.  Drinks and snacks are included.",
        location: "1991 Paint Drive",
        price: 40.00
    },
    {
        category: "Museums",
        id: "M101",
        name: "Braving's Airship Museum",
        description: "Enjoy climbing on and in our collection of small airplanes.  You will find bi-planes, experimental planes and small jets.",
        location: "101 Airfield Drive",
        price: 10.00
    },
    {
        category: "Museums",
        id: "M102",
        name: "Forks and Spoons Museum",
        description: "Enjoy touring our qwerky Forks and Spoons Museum.  It houses the worlds largest collection of, you guessed it, forks and spoons!",
        location: "1056 Lost Knives Court",
        price: 3.00
    },
    {
        category: "Museums",
        id: "M103",
        name: "Steenges Computing Museum",
        description: "Enjoy our the Stengees Computing Museum that illustrates how computing has changed over the last 60 years.",
        location: "103 Technology Way",
        price: 0.00
    },
    {
        category: "Wine Tastings",
        id: "WT-101",
        name: "Hastings Winery Tours and Tastings",
        description: "Hastings Winery is a small, family owned winery in the heart of San Jose, CA. We pride ourselves on producing single vineyard, small-batch, handcrafted premium wines sourced from the finest grapes in our valley.",
        location: "10987 FM 1187",
        price: 12.00
    },
    {
        category: "Wine Tastings",
        id: "WT-102",
        name: "Lone Oak Winery",
        description: "We are a family and friend centered winery that thrives to make each of our guests feel right at home. With a growing wine list of the finest local wines, we offer tours and an incredible experience. We are open for to-go, curbside, and delivery.",
        location: "121 Burleson Court",
        price: 0.00
    },
    {
        category: "Other",
        id: "OTH101",
        name: "Fire Department: Ride Along",
        description: "Spend the day hanging out at one of our local fire stations, visiting with the staff and learning about their jobs.  If they receive a call, you can ride along with them!",
        location: "10 Redline Drive",
        price: 25.00
    },
    {
        category: "Other",
        id: "OTH102",
        name: "Homes For Our Neighbors",
        description: "Yes, you are a visitor!  But what better way to learn about a community than volunteer with the locals to build affordable housing.  Whether it be for an hour or a week, we would love to have you with us!",
        location: "Call (555) 555-5555",
        price: 0.00
    }
];

window.onload = function () {

    //call the function that loads the teams into the dropdown list we created
    initDropdown();

    //grab our button off the page using document.querySelector
    let theForm = document.querySelector("#categoriesForm");
    theForm.addEventListener("submit", displayCategories);

    let activitiesForm = document.querySelector("#activitiesForm");
    activitiesForm.addEventListener("submit", displayActivities);

    let categorySelect = document.querySelector("#categoriesSelect");
    categorySelect.addEventListener("change", updateActivitiesDropdown);

}

function displayActivities(event) {
    event.preventDefault();

    let activityDropdown = document.querySelector("#activitiesSelect");
    let activityPResults = document.querySelector("#activityResults");

    if (activityDropdown.value === "") {
        activityPResults.innerHTML = ""
    } else {
        let selectedActivities = activityDropdown.value;
        activityPResults.innerHTML = `You selected the ${selectedActivities} activity!`
    }
}

function displayCategories(event) {
    //keep the form from reloading the page
    event.preventDefault();

    //get the dropdown from the page
    let theDropdown = document.querySelector("#categoriesSelect");

    //get the paragraph from the page using document.querySelector
    let paragraphResults = document.querySelector("#results");

    //get the index of the selected option in the dropdown
    let selectedIndex = theDropdown.selectedIndex;

 
    if (selectedIndex === 0) {
        paragraphResults.innerHTML = "";
    } else {
        //get the category out of the categories array based on the index from the dropdown
        let selectedCategory = categories[selectedIndex - 1];

        //put the info about the selected category in our paragraph
        paragraphResults.innerHTML = `You selected the ${selectedCategory} category!`;
    }
}

function initDropdown() {
    //get the dropdown from the HTML document and assign it to a variable
    let theDropdown = document.querySelector("#categoriesSelect");
    let activityDropdown = document.querySelector("#activitiesSelect");

    let defaultOption = document.createElement("option");
    let activityDefaultOption = document.createElement("option");

    defaultOption.textContent = "Select an Category";
    activityDefaultOption.textContent = "Select an Activity"

    //set the value of the option to an empty string ("")
    defaultOption.value = "";
    activityDefaultOption.value = "";

    //add this default option to the select
    theDropdown.appendChild(defaultOption);
    activityDropdown.appendChild(activityDefaultOption);

    //get the total number of teams we have for use in the loop
    let numberOfCategories = categories.length;
    let numberOfActivities = activities.length;

    for (let i = 0; i < numberOfActivities; i++) {
        let newActivityOption = document.createElement("option");
        newActivityOption.textContent = activities[i].name;
        newActivityOption.value = activities[i].name;
        activityDropdown.appendChild(newActivityOption);
    }

    //lets start looping over the categories
    for (let i = 0; i < numberOfCategories; i++) {
        //lets create a new option using document.createElement
        let newOption = document.createElement("option");

        //set the textContent for our new option, what the user sees
        newOption.textContent = categories[i];

        //set the value for the option
        newOption.value = categories[i];

        //add this option to the dropdown using appendChild
        theDropdown.appendChild(newOption);
    }
}

// this functions should be triggered when a user selects a category
function updateActivitiesDropdown(event) {

    // this gets us the value of the selected category
    let categorySelect = event.target;
    let selectedCategory = categorySelect.value;

    // this is our select from HTML
    let activityDropdown = document.querySelector("#activitiesSelect");

    activityDropdown.innerHTML = "";

    let defaultOption = document.createElement("option");
    defaultOption.textContent = "Select an Activity";
    defaultOption.value = "";
    activityDropdown.appendChild(defaultOption);

    // this will loop
    activities.forEach(activity => {
        if (activity.category === selectedCategory) {
            let newOption = document.createElement("option");
            newOption.textContent = activity.name;
            newOption.value = activity.name;
            activityDropdown.appendChild(newOption);
        }
    });
}
