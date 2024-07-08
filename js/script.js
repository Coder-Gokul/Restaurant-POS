 // JavaScript for functionality
 document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const orderCards = document.querySelectorAll('.order-card');
    const filterLinks = document.querySelectorAll('.nav-link');

    // Filter orders based on tab
    filterLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const filter = this.getAttribute('data-filter');
            filterLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');

            orderCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-type') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Search orders based on input
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        orderCards.forEach(card => {
            const orderDetails = card.textContent.toLowerCase();
            if (orderDetails.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});