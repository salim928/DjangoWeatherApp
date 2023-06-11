// Navbar responsiveness
const toggleBtn = document.querySelector('.app__header-menu');
const toggleBtnIcon = document.querySelector('.app__header-menu i');
const smallscreenMenu = document.querySelector('.app__header-smallscreen_menu');


toggleBtn.onclick =  function(){
    smallscreenMenu.classList.toggle('open');

    const isOpen =  smallscreenMenu.classList.contains('open');
    toggleBtnIcon.classList = isOpen ? "fa fa-times" : "fa fa-bars";
}


// change bgcolor on scroll

function changeBag(){
 var navbar = document.getElementById('navbar');
 var scrollWindow = window.scrollY;
 if(scrollWindow > 30){
    navbar.classList.add('changeBg')
 }
 else{
    navbar.classList.remove('changeBg')
 }
 }

window.addEventListener('scroll', changeBag)

// Aos initialisation
AOS.init({
	duration: 1200,
});



// data for courses
/*const data = document.querySelector('app__coursecard')
const programs = [
    {
      id:1,
      videoUrl : video,
      videoName : "Introduction to Css",
      description: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
      ratings: "(5.0)",
      tutor : avatar,
      price : "$2,984"
    },

    {
      id:2,
      videoUrl : video,
      videoName : "Learn C++ Programming language to mastery",
      description: "C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs",
      ratings: "(5.0)",
      tutor : avatar,
      price : "$2,984"
    },
    {
      id:3,
      videoUrl : video,
      videoName : "Introduction to Css",
      description: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
      ratings: "(5.0)",
      tutor : avatar,
      price : "$2,984"
    },
    {
      id:4,
      videoUrl : video,
      videoName : "Introduction to Css",
      description: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
      ratings: "(5.0)",
      tutor : avatar,
      price : "$2,984"
    },
    {
      id:5,
      videoUrl : video,
      videoName : "Introduction to Css",
      description: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
      ratings: "(5.0)",
      tutor : avatar,
      price : "$2,984"
    },
    {
      id:6,
      videoUrl : video,
      videoName : "Introduction to Css",
      description: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
      ratings: "(5.0)",
      tutor : avatar,
      price : "$2,984"
    },
    {
      id:7,
      videoUrl : video,
      videoName : "Introduction to Css",
      description: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
      ratings: "(5.0)",
      tutor : avatar,
      price : "$2,984"
    },
    {
      id:8,
      videoUrl : video,
      videoName : "Introduction to Css",
      description: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
      ratings: "(5.0)",
      tutor : avatar,
      price : "$2,984"
    },
]

for(i=0; i< programs.length; i++ ){
    data.innerHTML = programs.videoName
}*/