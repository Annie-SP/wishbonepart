
let link = document.getElementsByClassName("pagination__page-link");
let currentValue = 1;

function activeLink(){
    for (l of link){
        l.classList.remove("pagination__page-link--current");
    }

    event.target.classList.add("pagination__page-link--current");
    currentValue = event.target.value;
}

function backBtn(){
    if (currentValue > 1){
        for (l of link){
          l.classList.remove("pagination__page-link--current");
        }
        currentValue--;
        link[currentValue-1].classList.add("pagination__page-link--current");
    }
};

function nextBtn(){
  if (currentValue < 6){
      for (l of link){
        l.classList.remove("pagination__page-link--current");
      }
      currentValue++;
      link[currentValue-1].classList.add("pagination__page-link--current");
  }
};