
    const questions = document.querySelectorAll(".question h1");
    
    questions.forEach(function(question) {
        question.addEventListener("click", function() {
            const metn = this.nextElementSibling; 

            
            if (metn.style.display === "none") {
                metn.style.display = "block"; 
            } else {
                metn.style.display = "none"; 
            }
        });
    });
;




// const questions = document.querySelectorAll('.question h1');

// questions.forEach((h1) => {
//     h1.addEventListener('click', function() {
//         const p = this.nextElementSibling;


//         if (p.style.height === '0%' || p.style.height === '') {
//             p.style.height = '100%'; 
//         } else {
         
//             p.style.height = '0%'; 
//         }
//     });
// });

