var screen = document.querySelector("#screen");
var btn = document.querySelectorAll(".btn");

for (item of btn) {
  item.addEventListener("click", (e) => {
    btnText = e.target.innerText;
    if(btnText=="÷")
    btnText = "/";
    if(btnText=="×")
    btnText = "*";
    screen.value+=btnText
    
  });
  
    //calculator operations

  function sin(){
    screen.value=Math.sin(screen.value);
  }
  function cos(){
    screen.value=Math.cos(screen.value);
  }
  function tan(){
    screen.value=Math.tan(screen.value);
  }
  function log(){
    screen.value=Math.log(screen.value);
  }
  function pi(){
    screen.value=Math.PI;
  }
  function e(){
    screen.value = 2.718281828459045;
  }
  function root(){
    screen.value=Math.sqrt(screen.value);
  }
    //factorial find operation
  function fact(){
    var num = screen.value;
    var f=1,i;
    for(i=1;i<=num;i++){
        f*=i;
    }
    screen.value = f;
  }
    //Backspace operation
  function backspace(){
    screen.value = screen.value.substr(0,screen.value.length-1);
  }
  
  
  

}
