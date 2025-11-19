// Initial cart 
let cart = [
    { name: "Apple", price: 150, quantity: 2 },
    { name: "Banana", price: 20, quantity: 3 },
    { name: "Orange", price: 100, quantity: 1 }
];

// Calculate total
function calculateTotal() 
{
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

// Show Cart
function renderCart() 
{
    let cartBody = document.getElementById("cartBody");
    cartBody.innerHTML = "";

    cart.forEach(item => {
        cartBody.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.quantity}</td>
                <td>${item.price * item.quantity}</td>
            </tr>
        `;
    });

    document.getElementById("totalPrice").textContent = calculateTotal();
}

// Toggle cart visibility
function toggleCart() 
{
    let section = document.getElementById("cartSection");
    section.style.display = (section.style.display === "none") ? "block" : "none";

    if (section.style.display === "block") 
        renderCart();
}

// Clear input fields
function clearInputs() 
{
    document.getElementById("itemName").value = "";
    document.getElementById("itemPrice").value = "";
    document.getElementById("itemQty").value = "";
}

// Show Add Item input
function showAddInputs() 
{
    document.getElementById("inputSection").style.display = "block";

    let btn = document.getElementById("saveBtn");
    btn.textContent = "Save Add";
    btn.onclick = saveAddItem;
}

// Show Update Item input
function showUpdateInputs() 
{
    document.getElementById("inputSection").style.display = "block";

    let btn = document.getElementById("saveBtn");
    btn.textContent = "Save Update";
    btn.onclick = saveUpdateItem;
}

// Save Add
function saveAddItem() 
{
    let name = document.getElementById("itemName").value.trim();
    let price = Number(document.getElementById("itemPrice").value);
    let qty = Number(document.getElementById("itemQty").value);

    if (!name || !price || !qty) 
        return alert("Enter all fields!");

    let existing = cart.find(i => i.name === name);

    if (existing) {
        existing.quantity += qty;
    } 
    else {
        cart.push({ name, price, quantity: qty });
    }

    clearInputs();
    document.getElementById("inputSection").style.display = "none";
}

// Save Update
function saveUpdateItem() 
{
    let name = document.getElementById("itemName").value.trim();
    let price = document.getElementById("itemPrice").value;
    let qty = document.getElementById("itemQty").value;

    let index = cart.findIndex(item => item.name === name);

    if (index === -1) 
        return alert("Item not found!");

    if (qty) 
        cart[index].quantity = Number(qty);
    if (price) 
        cart[index].price = Number(price);

    clearInputs();
    document.getElementById("inputSection").style.display = "none";
}
