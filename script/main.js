/* Data module */
let reviews = [
    {
        pics: "pics/person-1.jpg",
        name: "Susan Smith",
        job: "Web Developer",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },
    {
        pics: "pics/person-2.jpg",
        name: "Anna Johnson",
        job: "Web Designer",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    },
    {
        pics: "pics/person-3.jpg",
        name: "Peter Jones",
        job: "Intern",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."  
    }
];
let i = 0;

/* Functions */

document.getElementById("left").addEventListener("click", () =>{
    leftClick()
})
document.getElementById("right").addEventListener("click", () =>{
    rightClick()
})

function reviewsUI(){
    document.querySelector(".picture").src = reviews[i].pics;
    document.querySelector(".name").innerHTML = reviews[i].name;
    document.querySelector(".job").innerHTML = reviews[i].job;
    document.querySelector(".texts").innerHTML = reviews[i].text;
}

function leftClick(){
    if(i === 0){
        i = reviews.length - 1;
    }else{
        i--
    }
    reviewsUI();
};

function rightClick(){
    if(i < reviews.length - 1){
        i++;
    }else{
        i = 0;
    }
    reviewsUI();
};
