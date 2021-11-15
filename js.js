let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button =>{
  button.addEventListener('click', (e) =>{
    switch(e.target.innerText){
      case 'c':
           display.innerText ='';
           break;
      case '&larr;':
           
      case '=':
          try {
              display.innerText =eval(display.innerText);
          } catch  {
            display.innerText = 'Error';

          }

        break;
      default:
          display.innerText += e.target.innerText;
    }
  });
});
