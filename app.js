const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function PageTransitions(){
    // Button click active class

    for(let i =0;i<sectBtn.length;i++){
        sectBtn[i].addEventListener('click', function(){
            let currBtn=document.querySelectorAll('.active-btn');
            currBtn[0].classList.remove('active-btn');
            this.classList.add('active-btn');
        })
    }

    //sections active
   
    for(let i=0;i<allSections.length;i++){
    allSections[i].addEventListener('click',function(e){
        const id=e.target.dataset.id;

        if(id){
            //remove selected from other buttons
            sectBtns.forEach((btn)=>{
                btn.classList.remove('active');
            })

            e.target.classList.add('active');

            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active');

            })

            const element=document.getElementById(id);
            element.classList.add('active');


        }
    })



}

//toggle button

const themeBtn=document.querySelectorAll('.theme-btn');
themeBtn[0].addEventListener('click',()=>{
    let element=document.body;
    element.classList.toggle('light-mode');
});

}



PageTransitions();