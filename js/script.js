// contactlist defined to use to change innerHTML
var contactlist = document.getElementsByClassName('contact-list');
// create contacts array obtained using DOM
const contacts = Array.from(document.getElementsByClassName('contact-item cf'));

// function to display corresponding contacts to page
function paginate(page) {
    // start an empty string to collect html to add to contactlist
    let html = "";

    // iterate through contact list to collect the required html for display
    for (var i = (page * 10) - 10; i <= (page * 10) - 1; i++) {
        html += (contacts[i]).outerHTML;
    }

    // load html to class element "contact-list"
    contactlist[0].innerHTML = html;
}