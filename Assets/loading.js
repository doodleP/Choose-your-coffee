window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const nextPage = params.get("next") || "index.html";

    setTimeout(() => {
        window.location.href = nextPage;
    }, 3000); 
};
