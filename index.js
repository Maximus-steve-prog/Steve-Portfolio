$(document).ready(function() {
    // var scale = 1;
    // var increment = 0.0004;
    // var interval = 50; // 16ms = approximately 60fps

    //       setInterval(function() {
    //         scale += increment;
    //         if (scale >= 1.1) {
    //           scale = 1;
    //         }
    //         $('.container').css('background-size', `${scale * 100}% ${scale * 100}%`);
    //       }, interval);

        $('.account-menu').hide();

        // Toggle account menu on button click
        $('.toggle-account-menu').click(function () {
            $('.account-menu').fadeToggle(); // Toggle visibility of the account menu with fade animation
        });


        $(document).click(function (event) {
            if (!$(event.target).closest('.toggle-account-menu, .account-menu, .toggle-menu').length) {
                $('.account-menu').slideUp(500); 
                $('.navbar').removeClass('active');
            }
        });

        $('.toggle-menu').click(()=>{
            $('.navbar').addClass('active')
            $('.navbar').show();
        })

        $('.container').scroll(()=>{
            $('.navbar').removeClass('active')
        })

        $('.download_label').on('click', function(e) {
            e.preventDefault(); // Prevent default action
            
            const imageUrl = $(this).prev('.card_img').attr('src'); // Get the corresponding image source
            const fileName = imageUrl.split('/').pop(); // Extract the file name
            
            // Create a temporary link element
            const link = document.createElement('a');
            link.href = imageUrl; // Set the href to the image URL
            link.download = fileName; // Set the download attribute to the file name
            document.body.appendChild(link); // Append link to the document
            link.click(); // Trigger the download
            document.body.removeChild(link); // Remove the link from the document
        });

 });



 



    // const scrollRevealOption = {
    //   distance: '50px',
    //   duration: 1000,
    //   origin: 'bottom',
    //   viewFactor: 0.25
    // };
    
    // ScrollReveal().reveal('.hero_image img', {
    //   ...scrollRevealOption,
    //   origin: 'right',
    // });
   
    ScrollReveal().reveal('.hero_image_card', {
        duration:1000,
        interval:500,
        delay:500
    });


    


  
    


 let items = document.querySelectorAll('.item');
 let action = document.getElementById('action');
 
 items.forEach(item => {
     item.addEventListener('click', function(e){
         if( this.classList.contains('active') || e.target.classList.contains('fa-chevron-down')){
             return;
         }
         items.forEach(remove_active => {
             remove_active.classList.remove('active');
         });
         this.classList.add('active');
         document.documentElement.style.setProperty('--height-begin', action.offsetHeight + 'px');
         document.documentElement.style.setProperty('--top-begin', action.offsetTop  + 'px');
         document.documentElement.style.setProperty('--height-end', (this.offsetHeight +4) + 'px');
         document.documentElement.style.setProperty('--top-end', (this.offsetTop -4)  + 'px');
         action.classList.remove('runanimation');
         void action.offsetWidth;
         action.classList.add('runanimation');
     },false)
 });
 
 const sections = document.querySelectorAll('section');
 
 function checkSections() {
   sections.forEach((section) => {
     const rect = section.getBoundingClientRect();
     if (rect.top <= 150 && rect.bottom >= 150) {
         section.classList.add('animate');
     } else {
       section.classList.remove('animate');
     }
   });
   requestAnimationFrame(checkSections);
 }
 
 checkSections();



// let nextBackground = 0;


//     setInterval(() => {
//         nextBackground +=1;
//         if(nextBackground ===1) document.querySelector(".container").style.backgroundImage = "linear-gradient(#120d3d52, #080a2343), url('/images/img1.jpg')";
//         if(nextBackground ===2) document.querySelector(".container").style.backgroundImage = "linear-gradient(#120d3d52, #080a2343), url('/images/img2.jpg')";
//         if(nextBackground ===3) {
//             nextBackground = 0 ; document.querySelector(".container").style.backgroundImage = "linear-gradient(#120d3d52, #080a2343), url('/images/bg.jpeg')";
//         }
        
       
//     }, 10000);



