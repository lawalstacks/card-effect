document.addEventListener('mousemove', (mouse)=>{
  const gradientElement = document.getElementById('gradient');
  const cardElement = document.getElementById('card');
  const cardRect = cardElement.getBoundingClientRect();

  const gradientX = mouse.clientX - cardRect.x;
  const gradientY = mouse.clientY - cardRect.y;

  gradientElement.style.transform = `translate(${gradientX}px, ${gradientY}px)`
  if(
    mouse.clientX > cardRect.x &&
    mouse.clientX < cardRect.x + cardRect.width &&
    mouse.clientY > cardRect.y &&
    mouse.clientY < cardRect.y + cardRect.height
  ){
    //keep mouse visibe within card
    gradientElement.classList.add("visible");

    //animate perspective
    const mouseStepsX = 20/ cardRect.width;
    const mouseStepsY = 20 / cardRect.height;

    const cardCenterX = (cardRect.x + cardRect.width)/2;
    const cardCenterY = (cardRect.y + cardRect.height)/2;

    const rotateX = (cardCenterX - mouse.clientX) * mouseStepsX;
    const rotateY = (cardCenterY - mouse.clientY) * mouseStepsY

    cardElement.style.transform = `perspective(50cm) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    
  }else{
    gradientElement.classList.remove("visible");
    cardElement.style.transform = "";
  }
})