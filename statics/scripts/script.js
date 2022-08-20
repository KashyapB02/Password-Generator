console.log("Hello, JavaScript");

const passwordGeneratorForm = document.getElementById("passwordGeneratorForm");
passwordGeneratorForm.onsubmit = (e) => {
    e.preventDefault();
    e.target.reset();
}