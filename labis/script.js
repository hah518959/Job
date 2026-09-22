let box1 = document.querySelector(".box1");
let main = document.querySelector("main");

main.addEventListener("scroll", () => {
    const endFix = box1.scrollHeight - box1.clientHeight;
});
