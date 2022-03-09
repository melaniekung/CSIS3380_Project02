// get required elements
var contactlist = document.getElementsByClassName('contact-list');
var pages = document.getElementsByClassName('pagination');
// create contacts array obtained using DOM
const contacts = Array.from(document.getElementsByClassName('contact-item cf'));

function paginate(page) {
    // get html for pages
    let pagehtml = "";

    for (var i = 0; i <= contacts.length % 10; i++) {
        pagehtml += "<li><a onClick='paginate("  + (i + 1) + ")' href='#'>" + (i + 1) + "</a></li>";
    }

    pages[0].innerHTML = pagehtml;

    // start an empty string to collect html to add to contactlist
    let contacthtml = "";

    // iterate through contact list to collect the required html for display
    for (var i = (page * 10) - 10; i <= (page * 10) - 1; i++) {
        contacthtml += (contacts[i]).outerHTML;
    }

    // load html to class element "contact-list"
    contactlist[0].innerHTML = contacthtml;
}