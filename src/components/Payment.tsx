import { useState } from "react";

const Payment = () => {
   const [_cardNumber, setCardNumber] = useState<string>("");
   const [_name, setName] = useState<string>("");
   const [_CVV, setCVV] = useState<string>("");
   const [_expiry, setExpiry] = useState<string>("");

   function inputCardNumber(event: React.KeyboardEvent<HTMLInputElement>) {
      const cardNumber = (event.target as HTMLInputElement).value.slice(0, 16).replace(/\D/g, "");
      const cardNumberDisplay = document.querySelectorAll(".card-number-display");

      for (let i = 0; i < cardNumberDisplay.length; i++) {
         if (i < cardNumber.length) {
            cardNumberDisplay[i].textContent = cardNumber[i];
         } else {
            cardNumberDisplay[i].textContent = "_";
         }
      }
      setCardNumber(cardNumber);
   }

   function inputName(event: React.KeyboardEvent<HTMLInputElement>) {
      const name = (event.target as HTMLInputElement).value;
      const cardName = document.getElementById("card-holder-name");

      if (cardName === null) {
         return;
      }

      if (name.length < 1) {
         cardName.innerText = "Your Name Here";
      } else {
         cardName.innerText = name.slice(0, 30);
      }
      setName(name);
   }

   function flipCard() {
      const card = document.getElementById("card");
      if (card === null) {
         return;
      }
      card.style.transform = "rotateY(180deg)";
   }

   function flipBack() {
      const card = document.getElementById("card");
      if (card === null) {
         return;
      }
      card.style.transform = "rotateY(0deg)";
   }

   function inputCVV(event: React.KeyboardEvent<HTMLInputElement>) {
      const CVV = (event.target as HTMLInputElement).value;

      const cvvDisplay = document.getElementById("cvv-display");
      if (cvvDisplay === null) {
         return;
      }
      cvvDisplay.innerText = CVV;
      setCVV(CVV);
   }

   function inputExpiryDate(event: React.FormEvent<HTMLInputElement>) {
      const expiry = (event.target as HTMLInputElement).value;
      const displayValidity = document.getElementById("validity");

      if (displayValidity === null) {
         return;
      }

      if (expiry.length < 1) {
         displayValidity.innerText = "06/28";
         return false;
      }

      const parts = expiry.split("-");
      const year = parts[0].slice(2);
      const month = parts[1];

      //Final formatted string
      const formattedString = `${month}/${year}`;
      displayValidity.innerText = formattedString;
      setExpiry(expiry);
   }

   return (
      <div className="payment-wrapper">
         <div className="credit-card" id="card">
            <div className="card-front">
               <div className="branding">
                  <img src="/chip.png" className="chip-img" />
                  <img src="/visa.png" className="visa-logo" />
               </div>
               <div className="card-number">
                  <div>
                     <span className="card-number-display">_</span>
                     <span className="card-number-display">_</span>
                     <span className="card-number-display">_</span>
                     <span className="card-number-display">_</span>
                  </div>
                  <div>
                     <span className="card-number-display">_</span>
                     <span className="card-number-display">_</span>
                     <span className="card-number-display">_</span>
                     <span className="card-number-display">_</span>
                  </div>
                  <div>
                     <span className="card-number-display">_</span>
                     <span className="card-number-display">_</span>
                     <span className="card-number-display">_</span>
                     <span className="card-number-display">_</span>
                  </div>
                  <div>
                     <span className="card-number-display">_</span>
                     <span className="card-number-display">_</span>
                     <span className="card-number-display">_</span>
                     <span className="card-number-display">_</span>
                  </div>
               </div>
               <div className="details">
                  <div>
                     <span>Card Holder</span>
                     <span id="card-holder-name">Your Name Here</span>
                  </div>
                  <div>
                     <span>Expires</span>
                     <span id="validity">06/28</span>
                  </div>
               </div>
            </div>
            <div className="card-back">
               <div className="black-strip"></div>
               <div className="white-strip">
                  <span>CVV</span>
                  <div id="cvv-display"></div>
               </div>
               <img src="/visa.png" className="visa-logo" />
            </div>
         </div>
         <form>
            <label htmlFor="card-number">Card Number</label>
            <input onKeyUp={(e) => inputCardNumber(e)} type="text" id="card-number" placeholder="1234123412341234" />
            <label htmlFor="card-holder">Card Holder:</label>
            <input onKeyUp={(e) => inputName(e)} type="text" id="card-name-input" placeholder="Your Name" />
            <div className="date-cvv">
               <div>
                  <label htmlFor="validity">Expires On:</label>
                  <input onInput={(e) => inputExpiryDate(e)} type="date" id="validity-input" />
               </div>
               <div>
                  <label htmlFor="cvv">CVV:</label>
                  <input onKeyUp={(e) => inputCVV(e)} onFocus={flipCard} onBlur={flipBack} type="number" id="cvv" placeholder="***" />
               </div>
            </div>
         </form>
      </div>
   );
};
export default Payment;
