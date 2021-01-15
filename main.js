/* ------- Parameters of sliders ------- */

var swiper = new Swiper('.swiper-container', {
    cssMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    loop: true
  });
  
  
 /* Function that use fetch to get all the infos from destinations.json file */

  function getDestination() {
  
  
      fetch("./destinations.json")
      .then(function(response) {
          return response.json()
      })
      .then((response) => {
          
          var result = document.getElementById('result')
          
          response.forEach(element => {
            
              result.innerHTML += `
              
              
           <div class="travel">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" style="background: url(${element.image}) center/cover;"><h6 class="upto">${element.upto}</h6></div>
                  <div class="swiper-slide" style="background: url(${element.image2}) center/cover;"><h6 class="upto">${element.upto}</h6></div>
                  <div class="swiper-slide" style="background: url(${element.image3}) center/cover;"><h6 class="upto">${element.upto}</h6></div>
                </div>
                  <div class="swiper-button-next"></div>
                  <div class="swiper-button-prev"></div>
                  <div class="swiper-pagination"></div>
              </div>
  
  
            <div class="description">      
              <div class="description-left">      
                <div class="info"><h5>${element.country} ⎯⎯⎯</h5><p>${element.place}</p></div>
                <div class="descrip"><div class="label"><p>${element.label}</p></div><div class="rating"><p>${element.rating}</p></div></div>
                <div class="tags"><h4>${element.tags[0].classname}</h4><h5>${element.tags[1].label}</h5></div> 
              </div>
                <div class="enter-arrow"><a href="#"><img class="arrow" src="./assets/enter.png" width="35px" alt=""></a></div>
            </div>
          </div>
         
           `
           // * added the function init_swiper() to initialize my sliders
           init_swiper()
          });
         
      }).catch((err)=>{
          console.log(err)
      })
  }
  
  /* ------- I use this function to initialize my sliders, its not working without it ------- */

  function init_swiper(){
    var swiper = new Swiper('.swiper-container', {
      cssMode: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination'
      },
      mousewheel: true,
      keyboard: true,
      loop: true
    });
  }
      
  
getDestination();