window.onload = function() {
    // Get next page from URL
    const params = new URLSearchParams(window.location.search);
    const nextPage = params.get("next") || "index.html"; // Default to homepage if missing

    // Redirect after 3s (or however long the animation takes)
    setTimeout(() => {
        window.location.href = nextPage;
    }, 3000); 
};
