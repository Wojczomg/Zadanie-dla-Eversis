$(()=>{
    const article = `<div class="w3-half w3-container">
    <div class="w3-row">
        <div class="w3-quarter">
            <div class="w3-container w3-right"><img src="./img/linkedin.png"/></div>
            <div class="w3-container w3-right"><img src="./img/facebook.png"/></div>
        </div>
        <div class="w3-threequarter">
            <p><b>Übersteigt die Summe sämtlicher Beteiligungspositionen, </b>die insgesamt mehr als 10% des harten Kernkapitals wird in gesonderten Abschnitten eingegangen. Der gleiche Ansatz ist anzuwenden, wenn das IMM-Modell kein Profil</p> 
        </div>
    </div>
</div>`

    for (let i=0;i<10;i++){
        $('.articles').append(article)
    }
})