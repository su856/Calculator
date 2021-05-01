(function(){

let scr = document.querySelector('.screen');
let buffer='0';
let total=0;
let operation = null;

document.querySelector('.keys').addEventListener('click',function(e){
  presskey(e.target.innerText);
});

function presskey(value)
{
  isNaN(value) ? handleSymbol(value):handleNumber(value);
  screen_print();
}

function screen_print()
{
    scr.innerText = buffer;
}
function handleSymbol(value)
{
  switch(value)
  {
    case 'c':
      {
         buffer='0';
         total=0;
         operation = null;
         break;
      }
    case '<−':
      {
        if(buffer.length==1)
          buffer='0';
        buffer = parseInt(buffer/10);
        break;
      }
    case '=':
      {
        if(operation === null) return;
        calculate_math(operation);
        break;
      }
    default:
      {
        if(value ==='+')
        {
           operation ='+';
           total = parseInt(buffer);
           buffer='0';
        }
        else if(value ==='−')
        {
          operation ='−';
          total = parseInt(buffer);
          buffer='0';
        }
        else if(value ==='×')
        {
           operation ='×';
           total = parseInt(buffer);
           buffer='0';
        }
        else
        {
           operation ='÷';
           total = parseInt(buffer);
           buffer='0';
        }
      }
   }
}
function handleNumber(value)
{
  (buffer === '0')? buffer = value : buffer+=value;
}

function calculate_math(operation)
{
  if(operation === '+')
  {
    total+=parseInt(buffer);
    buffer=total;
  }
  else if(operation === '−')
  {
    total-=parseInt(buffer);
    buffer=total;
  }
  else if(operation === '×')
  {
    total*=parseInt(buffer);
    buffer=total;
  }
  else
  {
    total/=parseInt(buffer);
    buffer=total;
  }
}

})();
