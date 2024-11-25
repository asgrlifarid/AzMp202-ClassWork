import { BASE_URL } from "./data.js";

document
  .getElementById("blogForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

 
    const title = document.getElementById("title").value;
    const body = document.getElementById("body").value;
    const author = document.getElementById("author").value;

   
    if (!title || !body || !author) {
      Swal.fire({
        title: "Error!",
        text: "Please fill in all fields.",
        icon: "error",
      });
      return;
    }

    const newBlog = {
      title: title,
      body: body,
      author: author,
    };

    try {
      const response = await fetch(`${BASE_URL}/blogs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBlog),
      });

      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "Blog added successfully!",
          icon: "success",
        });

      
        document.getElementById("blogForm").reset();
        window.location.href = "index.html"; 
      } else {
        throw new Error("Failed to add blog");
      }
    } catch (error) {
      console.error("Error adding blog:", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to add blog!",
        icon: "error",
      });
    }
  });
