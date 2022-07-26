var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter Event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
    e.preventDefault();

    // Get input value
    var item = document.getElementById('item');
    var newItem = item.value;

    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create delete button element
    var deleteButton = document.createElement('button');
    // Add class
    deleteButton.className ='btn btn-danger btn-sm float-right delete';
    // Append the text node
    deleteButton.appendChild(document.createTextNode('X')); 

    // Append button to li
    li.appendChild(deleteButton);

    // Append li to list
    itemList.appendChild(li);

    item.value='';
    item.focus();
}


// Remove Item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Item
function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // get list
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
    
    
}