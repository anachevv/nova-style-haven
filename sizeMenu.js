document.addEventListener("DOMContentLoaded", function () {
    var sizeMenus = document.querySelectorAll(".size-menu");

    sizeMenus.forEach(function (sizeMenu) {
        var dropdown = sizeMenu.querySelector(".dropdown");
        var sizeMenuSpan = sizeMenu.querySelector("span");

        // Toggle dropdown visibility when clicking on sizeMenu
        sizeMenu.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent event from propagating to document
            dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
        });

        // Close dropdown when clicking outside of it
        document.addEventListener("click", function () {
            dropdown.style.display = "none";
        });

        // Prevent dropdown from closing when clicking inside it
        dropdown.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent event from propagating to sizeMenu
        });

        // Add click event listeners to size options
        var listItems = dropdown.querySelectorAll("li");
        listItems.forEach(function (item) {
            item.addEventListener("click", function () {
                // Change the text of sizeMenuSpan to the selected size
                sizeMenuSpan.textContent = this.textContent;
                // Close dropdown when a size is selected
                dropdown.style.display = "none";

                // Remove the 'selected' class from all items
                listItems.forEach(function (item) {
                    item.classList.remove("selected");
                });

                // Add the 'selected' class to the clicked item
                this.classList.add("selected");
            });
        });
    });
});
