function welcome() {

    window.location.href = "contact.html";

}

function bookRoom() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let room = document.getElementById("room").value;
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;
    let guests = document.getElementById("guests").value;
    let message = document.getElementById("message").value;

    if(name=="" || email=="" || phone=="" || checkin=="" || checkout=="" || guests=="")
    {
        alert("Please fill all the details.");
        return false;
    }

    alert(
        "🎉 Booking Successful!\n\n" +
        "Guest Name : " + name +
        "\nRoom Type : " + room +
        "\nGuests : " + guests +
        "\nCheck-in : " + checkin +
        "\nCheck-out : " + checkout +
        "\n\nThank you for choosing Chetan Hotel!"
    );

    // Clear the form
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("room").selectedIndex = 0;
    document.getElementById("checkin").value = "";
    document.getElementById("checkout").value = "";
    document.getElementById("guests").value = "";
    document.getElementById("message").value = "";

    return false;
}
