const version = "0.01"




const listofpages = "home   blog   demos"





var currentpage = "home"


function print(printContent){
  i = 0;
  document.getElementsByClassName("terminal-text")[0].innerHTML+=printContent.replaceAll(" ","&nbsp;").replaceAll("\n","<br>").replaceAll("&actualspace;"," ")
}

function bootsequence(){
  print(" _______  _______          _______  _______\n|       ||       |        |       ||       |\n|   _   ||_     _|        |   _   ||  _____|\n|  | |  |  |   |          |  | |  || |_____ \n|  |_|  |  |   |          |  |_|  ||_____  |\n|       |  |   |   _____  |       | _____| |\n|_______|  |___|  |_____| |_______||_______|\n")
  print("v"+version+"\n\nType \"help\" for a list of commands.\n\n")
}

function colorize(inputText,color){
  return "<span&actualspace;class=\"text-color-"+color+"\">"+inputText+"</span>"
}

function parse(query){
    args = query.split(" ");
    switch (args[0]){
      case "help":
        print("Commands:\n    - help: display this message\n    - ls: list pages\n    - cd [page]: enter page\n    - lscolors: show all colors\n    - screenfetch: get system information\n")
        break;
      case "ls":
          print(listofpages+"\n")
        break;
      case "cd":
            print(listofpages+"\n")
        break;
      case "lscolors":
            print("  "+colorize("████",1)+"  "+colorize("████",2)+"  "+colorize("████",3)+"  "+colorize("████",4)+"  "+colorize("████",5)+"\n")
        break;
      case "screenfetch":
            print("User-Agent: "+window.navigator.userAgent+"\n")
            print("OS: "+window.navigator.platform+"\n")
            print("CPU: "+window.navigator.hardwareConcurrency+" cores\n")
            print("RAM: "+navigator.deviceMemory+" GB\n")
      break;
      default:
        print("Error: Unknown command.\n");
    }
    print("\n");
}

function main(){
  bootsequence()
}


  document.getElementsByTagName("input")[0].addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    print("> "+document.getElementsByTagName("input")[0].value+"\n")
    parse(document.getElementsByTagName("input")[0].value)
    document.getElementsByTagName("input")[0].value="";
  }
})
main()
