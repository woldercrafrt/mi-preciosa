function cambiarMensaje() {
    const mensajes = [
        // Mensajes para que se sienta cerca:
        "Aunque estemos lejos, te siento aquí a mi lado. Mi corazón está conectado al tuyo.",
        "Cierro los ojos y puedo sentir tu abrazo. Estás conmigo en cada latido.",
        "La distancia es solo física. En mi mente y en mi corazón, estamos juntos siempre.",
        "No importa cuántos kilómetros nos separen, nuestro amor los acorta en un instante.",
        "Cada noche, miro la misma luna que tú y sé que estamos bajo el mismo cielo, conectados.",
        "En mis sueños, siempre encontramos la manera de estar juntos, abrazados y felices.",
        "Te llevo en mi mente y en mi corazón a donde quiera que vaya, como un amuleto de amor.",
        "Me consuela pensar que, aunque estemos separados, compartimos el mismo aire y el mismo sol.",
        "Tengo tantas ganas de verte que hasta siento que estas al lado mio, como si fuera real.",

        // Mensajes para que sepa que tiene tu apoyo:
        "Confío en ti y en todo lo que haces. Estoy aquí para apoyarte en cada paso que des.",
        "Recuerda que tienes mi apoyo incondicional, en las buenas y en las malas. Siempre contigo.",
        "No importa el desafío, lo enfrentaremos juntos. Tienes mi mano para sostenerte.",
        "Eres fuerte y capaz, y yo estaré aquí para recordártelo cada vez que lo necesites.",
        "Admiro tu fortaleza y estoy aquí para ayudarte a brillar. Cuenta conmigo para todo.",
        "Nunca olvides que eres increíble y que mi apoyo para ti es infinito.",
        "Soy tu fan número uno y siempre estaré en primera fila, aplaudiendo tus logros y apoyándote en tus desafíos.",
        "Cuando sientas que no puedes más, recuerda que mi fuerza también es tuya. Tómala, la necesitas, la mereces.",
        "No tengas miedo de caer, porque yo estaré ahí para ayudarte a levantarte, siempre.",
        "Tus metas son mis metas, y juntos trabajaremos incansablemente hasta alcanzarlas.",
        "Confía en mí, en mi criterio y en mi amor; haré todo lo que esté en mi mano para verte prosperar.",
        "Recuerda que eres una persona increíblemente valiosa y que tienes mi apoyo incondicional para todo.",
        "Si necesitas ayuda, solo pídela, y estaré a tu lado para dártela de la forma que sea.",
        "Creo firmemente en ti, en tu talento y en tu potencial, y te apoyaré hasta que tú también lo hagas.",

        // Mensajes para expresarle tu amor y cariño:
        "Eres lo mejor que me ha pasado. Te amo con todo mi corazón.",
        "Mi corazón late por ti y solo por ti. Eres mi todo.",
        "Eres mi persona favorita, mi refugio, mi hogar. Te amo más de lo que las palabras pueden expresar.",
        "Cada día a tu lado es un regalo que atesoro. Gracias por ser parte de mi vida.",
        "No hay nada que desee más que hacerte feliz. Te amo profundamente.",
        "Tu felicidad es mi felicidad. Haré todo lo que esté en mis manos para verte sonreír.",
        "Tu amor me llena, me inspira y me motiva a ser una mejor persona cada día, te amo.",
        "Eres el sol que ilumina mis días y la luna que vela mis noches. Te amo con locura.",
        "Mi corazón te eligió a ti, y cada día me confirma que fue la mejor decisión que pudo tomar.",
        "Eres mi paz, mi alegría, mi refugio y mi inspiración. Te amo más de lo que las palabras pueden decir.",
        "Amarte es la aventura más emocionante y maravillosa que he vivido. Gracias por compartirla conmigo.",
        "Cada momento que paso contigo se convierte en un recuerdo que atesoro en lo más profundo de mi ser.",
        "Eres la persona más especial del universo y me siento increíblemente afortunado de tenerte en mi vida.",
        "Eres el amor que siempre soñé, pero que nunca creí posible. Te amo con toda mi alma.",
        "Mi amor por ti no tiene límites ni condiciones. Es un amor puro, sincero y eterno.",

        // Frases adicionales:
        "Eres mi sueño hecho realidad.",
        "Contigo todo es mejor.",
        "Te amo, te adoro, te necesito.",
        "Eres mi complemento perfecto.",
        "Gracias por existir y por estar a mi lado.",
        "Eres la luz de mis días.",
        "Siempre estás en mis pensamientos.",
        "Tu risa es mi melodía favorita.",
        "Eres el sueño que nunca quiero despertar.",
        "Contigo, todo es posible.",
        "Eres mi inspiración diaria.",
        "Tu amor me hace más fuerte.",
        "Eres el sol que ilumina mi vida.",
        "Cada momento contigo es un regalo.",
        "Eres mi razón de ser.",
        "Tu amor es mi refugio.",
        "Eres la flor más hermosa en mi jardín.",
        "Contigo, el tiempo vuela.",
        "Eres mi paz en medio de la tormenta.",
        "Tu amor es un viaje sin fin.",
        "Eres el latido de mi corazón."
    ];

    const mensajeEspecial = document.getElementById("mensaje-especial");
    const randomIndex = Math.floor(Math.random() * mensajes.length);
    mensajeEspecial.textContent = mensajes[randomIndex];

    // Probabilidad del 3% de mostrar el botón del cupón
    const probabilidad = Math.random();
    const botonCupon = document.getElementById("boton-cupon");
    if (probabilidad < 0.03) {
        botonCupon.style.display = "block"; // Muestra el botón
    } else {
        botonCupon.style.display = "none"; // Oculta el botón
    }
}

function redirigirCupon() {
    window.location.href = "pagina_cupon.html"; // Cambia esto por la URL de tu cupón
}