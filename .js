function getZipcodeValue() {
    let zipcodeValue = document.querySelector("#zipcode_input")
    zipcodeValue.addEventListener("keyup", (e) => {
        const inputValue = e.target.value;
      
        if (inputValue.length === 8) {
          getAddress(inputValue);
        }
      });
    console.log(zipcodeValue.value)
    console.log(zipcodeValue.length)
  }
let btnZipcode = document.querySelector("#btn-zipcode")