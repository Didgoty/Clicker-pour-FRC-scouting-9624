let clicks = 0;
const counter = document.getElementById("counter")
document.addEventListener("keydown", (e) => {
    if (e.code !== "Space") return;
    clicks += 1;
    counter.textContent = clicks;
});
