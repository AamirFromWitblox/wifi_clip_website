const btns = document.querySelectorAll(".btn");
const baseUrl = "http://192.168.4.1";

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const name = e.target.name;

        fetch(`${baseUrl}/${name}`)
    });
});