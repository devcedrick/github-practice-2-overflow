document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector(".signup-container");
  document.querySelectorAll(".btn-signup").forEach(signupBtn => {
    signupBtn.addEventListener("click", (e) => {
      e.preventDefault();
      container.classList.add("active");
      document.body.classList.add("no-scroll");
    });
  });
  
  container.addEventListener("click", (e) => {
    if (e.target === container) {
      container.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  });
});

function cancelSignUpForm(e) {
  e.preventDefault();
  const container = document.querySelector(".signup-container");
  container.classList.remove('active');
  document.body.classList.remove('no-scroll');
}