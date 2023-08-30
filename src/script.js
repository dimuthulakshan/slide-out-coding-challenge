//Exercise 01
document.addEventListener('DOMContentLoaded', () => {
    const btnSlide = document.getElementById('btn-slide');
    const slideOut = () => {
        let position = 0;
        btnSlide.style.position = 'relative';
        const animationInterval = setInterval(() => {
            position -= 3;
            btnSlide.style.left = position + 'px';
            if (position <= -btnSlide.clientWidth) {
                clearInterval(animationInterval);
                btnSlide.style.display = 'none';
            }
        }, 100);
    }

    btnSlide.addEventListener('click', slideOut);
});

//Exercise 03
document.addEventListener('DOMContentLoaded', () => {
    const originalButton = document.getElementById("btn-replicate");
    // Add an event listener to the original button
    originalButton.addEventListener("click", () => {
        // Create a container to hold the cloned buttons
        const buttonContainer = document.getElementById("btn-container");

        // Loop to create and append 10 clones of the button
        for (let i = 0; i < 10; i++) {
            const clone = originalButton.cloneNode(true);
            // Set the text to the index
            clone.textContent = originalButton.textContent + ' ' + (i + 1);;

            // Add a click event listener
            clone.addEventListener("click", () => {
                console.log("Clicked Button Index: " + (i + 1));
            });

            buttonContainer.appendChild(clone);
        }
    })

});



//Exercise 04
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btn-load-todos").addEventListener("click", async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await response.json();
            const todos = data.slice(0, 10);

            const tbody = document.querySelector("#tbl-todo tbody");
            tbody.innerHTML = "";

            todos.forEach(({ id, title, completed, userId }) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                <td>${userId}</td>
                <td>${id}</td>
                <td>${title}</td>
                <td>${completed ? "Yes" : "No"}</td>
                
            `;
                tbody.appendChild(row);
            });
        } catch (error) {
            console.error("Error loading todos:", error);
        }
    })

});







