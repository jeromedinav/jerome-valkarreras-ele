/* Spanish level test — 20 exercises per MCER block */
window.LEVEL_TEST_QUESTIONS = {
  1: [
    { type: 'mc', prompt: { en: 'How do you say "Hello" in Spanish?', es: '¿Cómo se dice "Hello" en español?' }, options: ['Hola', 'Adiós', 'Gracias', 'Por favor'], answer: 0 },
    { type: 'fill', question: 'Me _____ Pedro.', answers: ['llamo'] },
    { type: 'drag', question: 'Yo ___ de España.', words: ['soy', 'estoy', 'vengo', 'salgo'], answers: ['soy'] },
    { type: 'fill', question: '¿Cómo te _____?', answers: ['llamas'] },
    { type: 'drag', question: '¡___ la puerta, por favor!', words: ['Abre', 'Abres', 'Abrir', 'Abran'], answers: ['Abre'] },
    { type: 'order', prompt: { en: 'Put the words in order:', es: 'Ordena las palabras:' }, words: ['vivo', 'Yo', 'en', 'Barcelona'], answer: ['Yo', 'vivo', 'en', 'Barcelona'] },
    { type: 'drag', question: 'Nosotros ___ en Valencia.', words: ['vivimos', 'viven', 'vivo', 'vive'], answers: ['vivimos'] },
    { type: 'fill', question: '_____ despacio, por favor.', answers: ['Habla', 'habla'] },
    { type: 'multi', question: 'Yo ___ español y ___ en Madrid.', answers: ['hablo', 'vivo'] },
    { type: 'mc', prompt: { en: 'Choose "Good morning":', es: 'Elige "Good morning":' }, options: ['Buenos días', 'Buenas noches', 'Hasta luego', 'Buenas tardes'], answer: 0 },
    { type: 'fill', question: 'Nos _____ a las siete.', answers: ['levantamos'] },
    { type: 'drag', question: '¿Dónde ___ el baño?', words: ['está', 'es', 'son', 'hay'], answers: ['está'] },
    { type: 'tf', prompt: { en: '"Gracias" means "Thank you".', es: '"Gracias" significa "Thank you".' }, answer: true },
    { type: 'drag', question: '¡___ las ventanas!', words: ['Abrid', 'Abres', 'Abrir', 'Abre'], answers: ['Abrid'] },
    { type: 'reading', passage: 'Ana tiene veintidós años. Vive en Sevilla con su hermano. Por la mañana trabaja en una cafetería y por la tarde estudia español en la universidad.', question: '¿Dónde trabaja Ana por la mañana?', options: ['En una universidad', 'En una cafetería', 'En un hospital', 'En una librería'], answer: 1 },
    { type: 'match', prompt: { en: 'Match the Spanish word to its English meaning:', es: 'Relaciona la palabra en español con su significado en inglés:' }, pairs: [
      { left: 'Hola', right: 'Hello' },
      { left: 'Adiós', right: 'Goodbye' },
      { left: 'Gracias', right: 'Thank you' },
      { left: 'Por favor', right: 'Please' }
    ] },
    { type: 'fill', question: 'Tengo _____ años. (15)', answers: ['quince'] },
    { type: 'drag', question: 'A mí me ___ el café.', words: ['gusta', 'gustan', 'gusto', 'gustas'], answers: ['gusta'] },
    { type: 'order', prompt: { en: 'Put the words in order:', es: 'Ordena las palabras:' }, words: ['es', '¿Qué', 'hora', '?'], answer: ['¿Qué', 'hora', 'es', '?'] },
    { type: 'drag', question: '___ fumar en esta zona.', words: ['Prohibido', 'Prohibida', 'Prohibidos', 'Prohibidas'], answers: ['Prohibido'] }
  ],
  2: [
    { type: 'fill', question: 'He _____ en Madrid desde hace dos años.', answers: ['vivido'] },
    { type: 'mc', prompt: { en: 'Choose the correct sentence:', es: 'Elige la frase correcta:' }, options: ['Vivo en Madrid desde dos años.', 'He vivido en Madrid dos años.', 'He vivido en Madrid desde hace dos años.', 'Vivo en Madrid hace dos años.'], answer: 2 },
    { type: 'drag', question: '___ llueva, salimos a pasear.', words: ['Aunque', 'Porque', 'Debido', 'Sin'], answers: ['Aunque'] },
    { type: 'fill', question: 'Si _____ más tiempo, viajaría a Sudamérica.', answers: ['tuviera', 'tuviese'] },
    { type: 'mc', question: 'Ojalá vosotros _____ esta noche.', options: ['venís', 'vengáis', 'vendréis', 'vinisteis'], answer: 1 },
    { type: 'drag', question: 'Ayer lo ___ fatal en el examen.', words: ['pasé', 'paso', 'pasa', 'pasaba'], answers: ['pasé'] },
    { type: 'order', prompt: { en: 'Put the words in order:', es: 'Ordena las palabras:' }, words: ['Si', 'tuviera', 'más', 'tiempo', 'viajaría'], answer: ['Si', 'tuviera', 'más', 'tiempo', 'viajaría'] },
    { type: 'fill', question: 'Cuando _____ niño, vivía en el campo.', answers: ['era'] },
    { type: 'drag', question: '___ que llegues, avísame.', words: ['En cuanto', 'Aunque', 'Sin embargo', 'Debido'], answers: ['En cuanto'] },
    { type: 'multi', question: 'Mañana ___ al cine y ___ una película.', answers: ['voy', 'veré'] },
    { type: 'mc', prompt: { en: 'How do you say "despite the rain"?', es: '¿Cómo se dice "despite the rain"?' }, options: ['Debido a la lluvia', 'A pesar de la lluvia', 'Por la lluvia', 'Gracias a la lluvia'], answer: 1 },
    { type: 'drag', question: '¡___ las manos antes de comer!', words: ['Lavaos', 'Laváis', 'Lavad', 'Lavan'], answers: ['Lavaos'] },
    { type: 'fill', question: 'No _____ nada de lo que me contaste.', answers: ['entendí'] },
    { type: 'drag', question: '___ estudiar más, aprobarás el examen.', words: ['Si', 'Aunque', 'Cuando', 'Mientras'], answers: ['Si'] },
    { type: 'reading', passage: 'Carlos quería mudarse a Barcelona, pero el alquiler era muy caro. Finalmente encontró un piso pequeño cerca del metro. Aunque no tenía balcón, estaba contento porque podía ir al trabajo andando.', question: '¿Por qué estaba contento Carlos con el piso?', options: ['Tenía un balcón grande', 'Podía ir al trabajo andando', 'Era muy barato', 'Estaba lejos del metro'], answer: 1 },
    { type: 'match', prompt: { en: 'Match each connector to its meaning:', es: 'Relaciona cada conector con su significado:' }, pairs: [
      { left: 'Aunque', right: 'Although' },
      { left: 'Porque', right: 'Because' },
      { left: 'Sin embargo', right: 'However' },
      { left: 'Además', right: 'Furthermore' }
    ] },
    { type: 'fill', question: '_____ dos años estudiando español.', answers: ['Llevo', 'llevo'] },
    { type: 'drag', question: '___ cocinaba, sonó el teléfono.', words: ['Mientras', 'Aunque', 'Desde', 'Hasta'], answers: ['Mientras'] },
    { type: 'order', prompt: { en: 'Put the words in order:', es: 'Ordena las palabras:' }, words: ['empezado', 'Cuando', 'había', 'llegué', 'ya'], answer: ['Cuando', 'llegué', 'ya', 'había', 'empezado'] },
    { type: 'tf', prompt: { en: '"Hace dos años que vivo aquí" and "Vivo aquí desde hace dos años" can express the same idea.', es: '"Hace dos años que vivo aquí" y "Vivo aquí desde hace dos años" pueden expresar la misma idea.' }, answer: true }
  ],
  3: [
    { type: 'fill', question: 'No es necesario que _____ tan temprano.', answers: ['llegues'] },
    { type: 'mc', prompt: { en: 'Which sentence uses the subjunctive correctly?', es: '¿Qué frase usa correctamente el subjuntivo?' }, options: ['Espero que vienes mañana.', 'Espero que vengas mañana.', 'Espero que vendrás mañana.', 'Espero que venías mañana.'], answer: 1 },
    { type: 'drag', question: 'Aquí ___ español.', words: ['se habla', 'habla', 'es hablado', 'se hablan'], answers: ['se habla'] },
    { type: 'order', prompt: { en: 'Put the words in order:', es: 'Ordena las palabras:' }, words: ['difícil', 'es', 'tan', 'No', 'que', 'sea'], answer: ['No', 'es', 'tan', 'difícil', 'que', 'sea'] },
    { type: 'fill', question: '_____ hubiera sabido, habría llamado antes.', answers: ['Si'] },
    { type: 'drag', question: '___ terminado el informe, salió temprano.', words: ['Una vez que', 'Aunque', 'Sin embargo', 'Porque'], answers: ['Una vez que'] },
    { type: 'multi', question: 'Dudo que ___ la verdad y que ___ sincero.', answers: ['diga', 'sea'] },
    { type: 'mc', question: 'María es _____ inteligente que su hermana.', options: ['más', 'menos', 'tan', 'muy'], answer: 0 },
    { type: 'fill', question: 'Le recomendé que _____ más despacio.', answers: ['hablara', 'hablase'] },
    { type: 'drag', question: '___ no fuera por tu ayuda, no lo habría conseguido.', words: ['Si', 'Aunque', 'Cuando', 'Mientras'], answers: ['Si'] },
    { type: 'order', prompt: { en: 'Put the words in order:', es: 'Ordena las palabras:' }, words: ['hubiera', 'Si', 'antes', 'sabido', 'habría', 'llamado'], answer: ['Si', 'hubiera', 'sabido', 'antes', 'habría', 'llamado'] },
    { type: 'tf', prompt: { en: '"Hubiera sabido" can express regret about the past.', es: '"Hubiera sabido" expresa arrepentimiento sobre el pasado.' }, answer: true },
    { type: 'drag', question: 'Se ___ mucho la contaminación en las ciudades.', words: ['habla', 'hablan', 'dice', 'dicen'], answers: ['habla'] },
    { type: 'fill', question: 'Me pidió que le _____ la dirección por escrito.', answers: ['enviara', 'enviase', 'mandara', 'mandase'] },
    { type: 'reading', passage: 'El gobierno anunció nuevas medidas para reducir las emisiones de carbono. Aunque algunos sectores las consideran demasiado ambiciosas, los expertos insisten en que son imprescindibles si queremos frenar el cambio climático antes de 2030.', question: '¿Qué opinan los expertos sobre las medidas?', options: ['Son innecesarias', 'Son imprescindibles', 'Son demasiado fáciles', 'Solo afectan a un sector'], answer: 1 },
    { type: 'match', prompt: { en: 'Match the expression to its meaning:', es: 'Relaciona la expresión con su significado:' }, pairs: [
      { left: 'A no ser que', right: 'Unless' },
      { left: 'En aras de', right: 'In the interest of' },
      { left: 'Dado que', right: 'Given that' },
      { left: 'Por más que', right: 'No matter how much' }
    ] },
    { type: 'drag', question: 'No saldrá ___ llueva.', words: ['a menos que', 'aunque', 'porque', 'sin embargo'], answers: ['a menos que'] },
    { type: 'multi', question: 'Si lo ___ antes, no lo ___ ahora.', answers: ['hubieras dicho', 'harías'] },
    { type: 'mc', question: 'Es fundamental que el informe _____ antes del viernes.', options: ['está listo', 'esté listo', 'estará listo', 'era listo'], answer: 1 },
    { type: 'drag', question: '___ lo intentes, no lo conseguirás.', words: ['Por mucho que', 'Aunque', 'Sin embargo', 'Debido a'], answers: ['Por mucho que'] }
  ]
};