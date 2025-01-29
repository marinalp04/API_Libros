let controller;

async function searchBooks(search) {
  try {
    if (controller) {
      controller.abort();
    }
    controller = new AbortController();
    const signal = controller.signal;
    books.innerHTML = "<p>Buscando...</p>";
    const response = await fetch(`https://gutendex.com/books?search=${search}`, { signal });
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("La solicitud fue cancelada");
    } else {
      console.error("Error al buscar libros:", error);
    }
    return null;
  }
}

const input = document.getElementById("search");
const books = document.getElementById("books");

input.addEventListener("input", async (event) => {
  const query = event.target.value.trim();
  if (query === "") {
    showMessage("Ingrese un término de búsqueda");
    return;
  }

  showMessage("Buscando...");

  const response = await searchBooks(query);

  if (response && response.results) {
    books.innerHTML = "";
    response.results.forEach((book) => {
      const bookCard = document.createElement("div");
      bookCard.classList.add("book-card");

      const img = document.createElement("img");
      img.src = book.formats["image/jpeg"] || "https://via.placeholder.com/150";
      img.alt = book.title;

      const title = document.createElement("p");
      title.textContent = book.title;

      bookCard.appendChild(img);
      bookCard.appendChild(title);
      books.appendChild(bookCard);
    });
  }
});

function showMessage(message) {
  books.innerHTML = "";
  const p = document.createElement("p");
  p.textContent = message;
  books.appendChild(p);
}