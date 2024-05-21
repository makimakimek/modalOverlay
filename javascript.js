function showingOffer() {
    const showOfferButton = document.querySelector('#showOfferButton');
    const acceptOfferButton = document.querySelector('#acceptOfferButton');
    const closeButton = document.querySelector('#closeButton');

    showOfferButton.addEventListener("click", (event) => {
        showOfferButton.style.display = "none";
        document.body.style.backgroundColor = "whitesmoke";

        const offerBox = document.querySelector('#offerBox');
        offerBox.style.display = "block";

        acceptOfferButton.addEventListener("click", (event) => {
            offerBox.style.display = "none";
            document.body.style.backgroundColor = "white";
            
            const offerAccepted = document.querySelector('#offerAccepted');
            offerAccepted.style.display = "block";
        });

        closeButton.addEventListener("click", (event) => {
            offerBox.style.display = "none";
            showOfferButton.style.display = "block";
            document.body.style.backgroundColor = "white";
        });
    });
}

showingOffer();