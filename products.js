
  document.addEventListener("DOMContentLoaded", () => {
            const orderItems = [];
            const orderItemsContainer = document.getElementById("order-items");
            const grandTotalElement = document.getElementById("grand-total");

            const updateOrderSummary = () => {
                orderItemsContainer.innerHTML = '';
                let grandTotal = 0;

                orderItems.forEach(item => {
                    const itemTotal = item.quantity * item.price;
                    grandTotal += itemTotal;

                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${item.name}</td>
                        <td>${item.quantity}</td>
                        <td>₱${item.price.toFixed(2)}</td>
                        <td>₱${itemTotal.toFixed(2)}</td>
                    `;
                    orderItemsContainer.appendChild(row);
                });

                grandTotalElement.textContent = `₱${grandTotal.toFixed(2)}`;
            };

            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', (event) => {
                    const productName = event.target.getAttribute('data-name');
                    const productPrice = parseFloat(event.target.getAttribute('data-price'));

                    if (isNaN(productPrice)) {
                        console.error(`Invalid price for product: ${productName}`);
                        return;
                    }

                    const existingItem = orderItems.find(item => item.name === productName);

                    if (existingItem) {
                        existingItem.quantity += 1;
                    } else {
                        orderItems.push({ name: productName, quantity: 1, price: productPrice });
                    }

                    updateOrderSummary();
                });
            });

            window.showReceipt = () => {
                const receiptDiv = document.getElementById('receipt');
                let receiptMessage = "<h2>Receipt</h2><hr>";
                let totalPrice = 0;

                orderItems.forEach(item => {
                    const itemTotal = item.quantity * item.price;
                    receiptMessage += `<p>${item.name} (x${item.quantity}): ₱${item.price.toFixed(2)} each, Total: ₱${itemTotal.toFixed(2)}</p>`;
                    totalPrice += itemTotal;
                });

                receiptMessage += `<hr><p>Total: ₱${totalPrice.toFixed(2)}</p>`;
                receiptDiv.innerHTML = receiptMessage;

                const modal = document.getElementById('receiptModal');
                modal.style.display = "block";

                const closeBtn = document.getElementsByClassName("close")[0];
                closeBtn.onclick = function() {
                    modal.style.display = "none";
                }

                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            };
        });

// Function to add item to favorites
    function addToFavorites(itemName) {
        // Add the item to favorites list
        var favoritesList = document.getElementById("favorites");
        var newItem = document.createElement("li");
        newItem.textContent = itemName;
        favoritesList.appendChild(newItem);
    }

    // Function to show favorite list
    function showFavorites() {
        var modal = document.getElementById("favoritesModal");
        modal.style.display = "block";
    }

    // Function to close the favorites modal
    function closeFavorites() {
        var modal = document.getElementById("favoritesModal");
        modal.style.display = "none";
    }
	 var modal = document.getElementById('receiptModal');

    // Get the button that opens the modal
    var btn = document.getElementById('openModalBtn');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName('close')[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = 'block';
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = 'none';
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
	function showReceipt() {
    // Show the receipt modal
    document.getElementById("receiptModal").style.display = "block";
}

function confirmPayment() {
    // Close the modal
    closeModal();
    // Show an alert to notify the user
    alert("Parcel will be delivered to your location. Please ready your money!");
    // Reload the page
    window.location.reload();
}


function closeModal() {
    // Close the modal
    document.getElementById("receiptModal").style.display = "none";
}
function showReceipt() {
    var modal = document.getElementById("receiptModal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("receiptModal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("receiptModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

  // Function to calculate the total price of items in the cart
function calculateTotal() {
    let total = 0;
    const items = document.querySelectorAll('.cart-item');
    items.forEach(item => {
        const price = parseFloat(item.dataset.price);
        total += price;
    });
    return total;
}
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector('.search input[type="text"]');
    const searchButton = document.querySelector('.search button[type="submit"]');

    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim().toLowerCase(); // Convert to lowercase for case-insensitive comparison
        if (searchTerm !== '') {
            // Redirect to the appropriate page based on the search term
            if (searchTerm.includes('product')) {
                window.location.href = 'products.html?search=' + encodeURIComponent(searchTerm);
            } else if (searchTerm.includes('log in forms')) {
                window.location.href = 'loginForms.html?search=' + encodeURIComponent(searchTerm);
            } else if (searchTerm.includes('contact us')) {
                window.location.href = 'contactus.html?search=' + encodeURIComponent(searchTerm);
            } else {
                window.location.href = 'aboutus.html?search=' + encodeURIComponent(searchTerm);
            }
        } else {
            alert("Please enter a search term.");
        }
    });

    // Optional: Listen for Enter key press to trigger search
    searchInput.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
            searchButton.click();
        }
    });
});
