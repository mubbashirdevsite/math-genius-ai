let currentPage = "home";

function navigate(page){

    currentPage = page;

    document
    .querySelectorAll(".bottom-nav-btn")
    .forEach(btn => {

        btn.classList.remove("active");

        if(
            btn.dataset.page === page
        ){
            btn.classList.add("active");
        }

    });

    loadPage(page);
}
navigate("quiz");
document
.querySelectorAll("[data-page]")
.forEach(btn => {

    btn.addEventListener(
        "click",
        () => navigate(btn.dataset.page)
    );

});