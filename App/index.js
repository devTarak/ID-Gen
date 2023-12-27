// Function to generate the ID card
function generateIDCard() {
    // Get values from the form
    var name = document.getElementById("nameInput").value;
    var roll = document.getElementById("rollInput").value;
    var reges = document.getElementById("regesInput").value;
    var shift = document.getElementById("shiftInput").value;
    var session = document.getElementById("sessionInput").value;
    var blood = document.getElementById("bloodInput").value;
    var address = document.getElementById("addressInput").value;
    var district = document.getElementById("districtInput").value;
    var contact = document.getElementById("contactInput").value;
    // Get the selected image file
    var imageInput = document.getElementById("imageInput");
        var imageFile = imageInput.files[0];

    // Update the ID card with the user's information
    document.getElementById("name").innerHTML = name;
    document.getElementById("roll").innerHTML = "Board Roll\u00A0\u00A0\u00A0\u00A0\u00A0: " + roll;
    document.getElementById("reges").innerHTML = "Reg. No\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0: " + reges;
    document.getElementById("shift").innerHTML = "Shift\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0: " + shift;
    document.getElementById("session").innerHTML = "Session\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0: " + session;
    document.getElementById("Blood").innerHTML = "Blood Group\u00A0: " + blood;
    document.getElementById("address").innerHTML = "Address\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0: " + address;
    document.getElementById("Distric").innerHTML = "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0" + district; // Unicode for non-breaking space
    document.getElementById("contact").innerHTML = "Contact No\u00A0\u00A0\u00A0\u00A0: " + contact;

    // Update the ID card with the user's information
    document.getElementById("name").innerText = name;
        // Update the profile image
        if (imageFile) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById("myImage").src = e.target.result;
            };
            reader.readAsDataURL(imageFile);
        }
}
function saveAsPNG() {
    var outputDiv = document.querySelector('.Output');

    // Use dom-to-image to capture the content of the "Output" div
    domtoimage.toPng(outputDiv)
        .then(function (dataURL) {
            // Create a link element and trigger a download of the PNG image
            var link = document.createElement('a');
            link.href = dataURL;
            link.download = 'IDCard.png';
            link.click();
        })
        .catch(function (error) {
            console.error('Error capturing image:', error);
        });
}