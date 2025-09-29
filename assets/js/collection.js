// ===== Filter Section Toggle (expand headers) =====
document.querySelectorAll(".filter-header").forEach(header => {
  header.addEventListener("click", () => { 
    header.parentElement.classList.toggle("active"); 
  });
});

// ===== Price Slider =====
const priceSliderFilter = document.getElementById('priceSlider');
const priceValueDisplay = document.getElementById('priceValue');
const filterItems = document.querySelectorAll('.items .item');

function updatePriceSliderGradient() {
  const value = priceSliderFilter.value;
  priceSliderFilter.style.background = `linear-gradient(to right, #133c55 0%, #133c55 ${value}%, #ddd ${value}%, #ddd 100%)`;
}

// ===== Availability Filter =====
const availabilityCheckboxes = document.querySelectorAll('.filter-content input[type="checkbox"]');

function filterItemsCombined() {
  const selectedValues = Array.from(availabilityCheckboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  const maxPrice = parseFloat(priceSliderFilter.value);

  filterItems.forEach(item => {
    const stock = item.dataset.stock; // "in-stock" or "out-stock"
    const price = parseFloat(item.dataset.price);

    let availabilityMatch = (selectedValues.length === 0 || selectedValues.includes(stock));
    let priceMatch = price <= maxPrice;

    if (availabilityMatch && priceMatch) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

priceSliderFilter.addEventListener('input', () => {
  priceValueDisplay.textContent = `$${priceSliderFilter.value}`;
  updatePriceSliderGradient();
  filterItemsCombined();
});

updatePriceSliderGradient();
filterItemsCombined();

availabilityCheckboxes.forEach(cb => {
  cb.addEventListener('change', filterItemsCombined);
});

// ===== Sort Dropdown =====
const sortBtnFilter = document.getElementById('sortBtn');
const sortDropdownFilter = document.getElementById('sortDropdown');

sortBtnFilter.addEventListener('click', (e) => {
  e.stopPropagation();
  sortDropdownFilter.classList.toggle('show');
});

document.addEventListener('click', () => sortDropdownFilter.classList.remove('show'));
sortDropdownFilter.addEventListener('click', e => e.stopPropagation());

function sortFilterItems(criteria) {
  const container = document.querySelector('.items');
  const itemsArray = Array.from(container.children);

  if(criteria === 'price-asc') itemsArray.sort((a,b)=>parseFloat(a.dataset.price)-parseFloat(b.dataset.price));
  else if(criteria === 'price-desc') itemsArray.sort((a,b)=>parseFloat(b.dataset.price)-parseFloat(a.dataset.price));
  else if(criteria === 'name-asc') itemsArray.sort((a,b)=>a.dataset.name.localeCompare(b.dataset.name));
  else if(criteria === 'name-desc') itemsArray.sort((a,b)=>b.dataset.name.localeCompare(a.dataset.name));

  itemsArray.forEach(item => container.appendChild(item));
}

// Sorting event
document.querySelectorAll('.sort-dropdown div').forEach(option => {
  option.addEventListener('click', () => {
    const sort = option.dataset.sort;
    if(sort) sortFilterItems(sort);
    sortDropdownFilter.classList.remove('show');
  });
});

// ===== FILTER Dropdown (same behavior as SORT) =====
const filterBtn = document.getElementById('mobileFilterBtn'); // your filter button
const filtersDropdown = document.getElementById('filtersDropdown'); // <aside class="filters">

filterBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  filtersDropdown.classList.toggle('show');
});

document.addEventListener('click', () => filtersDropdown.classList.remove('show'));
filtersDropdown.addEventListener('click', e => e.stopPropagation());

// ===== Mobile Sort Button (dropdown style) =====
const mobileSortBtn = document.getElementById('mobileSortBtn');
const sortDropdownMobile = document.getElementById('sortDropdown');

mobileSortBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  sortDropdownMobile.classList.toggle('show');
});

document.addEventListener('click', () => sortDropdownMobile.classList.remove('show'));
sortDropdownMobile.addEventListener('click', e => e.stopPropagation());
