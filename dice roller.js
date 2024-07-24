function rollDice(){

    const numofDice = document.getElementById("numofDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numofDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);

    console.log(values);
    images.push(`<img src="dice-image/dice${value}.jpg" alt="Dice ${value}">`);

 }

 diceResult.textContent = `dice: ${values.join(', ')}`;
 diceImages.innerHTML = images.join('');
}