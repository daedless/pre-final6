/// preload main.js///

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');

    // Keep preloader visible for at least 2 seconds
    setTimeout(() => {
      preloader.style.opacity = '0';
      setTimeout(() => preloader.style.display = 'none', 500); // fade out
    }, 2000); // 2000ms = 2 seconds
  });




//// fade + funtion select for fogot password ///


  const wrapper = document.getElementById('vc-wrapper');
const cards = document.querySelectorAll('.forgot-password .recovery-card');
const continueBtn = document.querySelector('.forgot-password #continue-btn');
let selectedMethod = 'email';

// Trigger wrapper fade+slide on page load
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    if (wrapper) wrapper.classList.add('active');
  }, 500); // slight delay for smoothness
});

// Card selection
cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    selectedMethod = card.dataset.value;
  });
});

// Continue button navigation
if (continueBtn) {
  continueBtn.addEventListener('click', () => {
    switch (selectedMethod) {
      case 'email':
        window.location.href = 'email.html'; // page with OTP form
        break;
      case 'questions':
        window.location.href = 'security-questions.html'; // page with personal questions
        break;
      case 'backup':
        window.location.href = 'backup-code.html'; // page with backup code input
        break;
      default:
        alert('Please select a recovery method.');
    }
  });
}

    /////end of forgot password/////




    ////  ============= main menu togglr ===============///



    const menu = document.getElementById("menu");
const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("closeBtn");

hamburger.addEventListener("click", () => {
  menu.classList.add("show");
  closeBtn.style.display = "block"; // show X button
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("show");
  closeBtn.style.display = "none"; // hide X button
});





//============ Script for heart toggle =============//

const items = document.querySelectorAll('.item');

items.forEach(item => {
  const heart = item.querySelector('.heart');
  heart.addEventListener('click', () => {
    // If already active → unfavorite it
    if (item.classList.contains('active')) {
      item.classList.remove('active');
      heart.textContent = 'favorite_border';
    } else {
      // Otherwise, favorite this one
      item.classList.add('active');
      heart.textContent = 'favorite';
    }
  });
});



    // ============ End of heart toggle ============= //



    // ============ Script for search bar toggle ============= //<script>
  // Replace with your actual header search icon selector

  
// Select the new custom search <img>
// ===== Search Elements =====
const headerSearchIcon = document.querySelector('.header .icon-search');
const searchWrapper = document.getElementById('searchWrapper');
const closeIcon = searchWrapper ? searchWrapper.querySelector('.close-icon') : null;

// ===== Open Search Bar =====
function openSearchBarUnique() {
  if (!searchWrapper) return;

  searchWrapper.classList.toggle('hidden'); // toggle show/hide

  if (!searchWrapper.classList.contains('hidden')) {
    const input = searchWrapper.querySelector('input');
    if (input) input.focus(); // focus input when visible
  }
}

if (headerSearchIcon && searchWrapper) {
  headerSearchIcon.addEventListener('click', openSearchBarUnique);
}

// ===== Close Search Bar (X icon) =====
function closeSearchBarUnique() {
  if (!searchWrapper) return;
  searchWrapper.classList.add('hidden');
}

if (closeIcon) {
  closeIcon.addEventListener('click', closeSearchBarUnique);
}

// ===== Optional: Close with ESC key =====
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape" && searchWrapper && !searchWrapper.classList.contains('hidden')) {
    closeSearchBarUnique();
  }
});







  // ============ End of search bar toggle ============= //


  
