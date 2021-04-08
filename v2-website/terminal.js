const version = "0.01"



const palettes = [
    ["#001B2E", "#294C60", "#ADB6C4", "#FFEFD3", "#FFC49B"],
    ["#08605F", "#177E89", "#598381", "#8E936D", "#A2AD59"],
    ["#2F1847", "#624763", "#C62E65", "#F9B3D1", "#FAE3E3"],
    ["#472D30", "#723D46", "#E26D5C", "#FFE1A8", "#C9CBA3"],
    ["#133C55", "#386FA4", "#59A5D8", "#84D2F6", "#91E5F6"],
    ["#412234", "#6D466B", "#B49FCC", "#EAD7D7", "#FFFFFF"],
    ["#827081", "#AEA3B0", "#E3D0D8", "#C6D2ED", "#E7E6F7"]
]
const listofpages = "home   blog   demos"




var currentpage = "home"


function print(printContent) {
    i = 0;
    document.getElementsByClassName("terminal-text")[0].innerHTML += printContent.replaceAll(" ", "&nbsp;")
        .replaceAll("\n", "<br>")
        .replaceAll("&actualspace;", " ")
}

function bootsequence() {
    print(" _______  _______          _______  _______\n|       ||       |        |       ||       |\n|   _   ||_     _|        |   _   ||  _____|\n|  | |  |  |   |          |  | |  || |_____ \n|  |_|  |  |   |          |  |_|  ||_____  |\n|       |  |   |   _____  |       | _____| |\n|_______|  |___|  |_____| |_______||_______|\n")
    print("v" + version + "\n\nType \"help\" for a list of commands.\n\n")
}

function colorize(inputText, color) {
    return "<span&actualspace;class=\"text-color-" + color + "\">" + inputText + "</span>"
}

function parse(query) {
    args = query.split(" ");
    switch (args[0]) {
        case "help":
            print("Commands:\n    - help: display this message\n    - ls: list pages\n    - cd [page]: enter page\n    - lscolors: show all colors\n    - screenfetch: get system information\n    - chpalette [0-6]: change color palette\n")
            break;
        case "ls":
            print(listofpages + "\n")
            break;
        case "cd":
            print(listofpages + "\n")
            break;
        case "lscolors":
            print("  " + colorize("████", 1) + "  " + colorize("████", 2) + "  " + colorize("████", 3) + "  " + colorize("████", 4) + "  " + colorize("████", 5) + "\n")
            break;
        case "chpalette":
            currentPalette = palettes[parseInt(args[1])]
            let root = document.documentElement;
            root.style.setProperty('--color-1', currentPalette[0]);
            root.style.setProperty('--color-2', currentPalette[1]);
            root.style.setProperty('--color-3', currentPalette[2]);
            root.style.setProperty('--color-4', currentPalette[3]);
            root.style.setProperty('--color-5', currentPalette[4]);
            break;
        case "screenfetch":
            print("User-Agent: " + window.navigator.userAgent + "\n")
            print("OS: " + window.navigator.platform + "\n")
            print("CPU: " + window.navigator.hardwareConcurrency + " cores\n")
            print("RAM: " + navigator.deviceMemory + " GB\n")
            break;
        default:
            print("Error: Unknown command.\n");
    }
    print("\n");
}

function main() {
    bootsequence()
    document.getElementsByTagName("input")[0].focus()
}


document.getElementsByTagName("input")[0].addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        print("> " + document.getElementsByTagName("input")[0].value + "\n")
        parse(document.getElementsByTagName("input")[0].value)
        document.getElementsByTagName("input")[0].value = "";
    }
})
main()
