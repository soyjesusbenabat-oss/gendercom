/**
 * Italiano, español e inglés para la web de GENDERCOM 2027 (Turín).
 *
 * El diseño está escrito en italiano. Este archivo lo traduce sin tocarlo: busca cada frase
 * y la sustituye por la del idioma elegido, con un selector en la cabecera. La elección se
 * recuerda en el navegador. Los nombres de personas, universidades y centros no se traducen.
 */
(function () {
  "use strict";

  var DICT = {
    es: {
      // Cabecera y portada
      "Call aperta": "Convocatoria abierta",
      "Invio degli abstract entro il 15 gennaio 2027 · Torino, 9–11 giugno 2027": "Envío de resúmenes hasta el 15 de enero de 2027 · Turín, 9–11 de junio de 2027",
      "Comunicazione e genere · Torino": "Comunicación y género · Turín",
      "Presentazione": "Presentación",
      "Linee tematiche": "Líneas temáticas",
      "Scadenze": "Fechas clave",
      "Partecipa": "Participa",
      "Quote": "Cuotas",
      "Pubblicazione": "Publicación",
      "Organizzazione": "Organización",
      "Sede": "Sede",
      "Invia la tua proposta": "Envía tu propuesta",
      "9–11 Giugno 2027 · Torino": "9–11 de junio de 2027 · Turín",
      "Comunicare le": "Comunicar las",
      "differenze": "diferencias",
      "per costruire l’": "para construir la ",
      "uguaglianza": "igualdad",
      "Linguaggi, rappresentazioni e trasformazioni sociali": "Lenguajes, representaciones y transformaciones sociales",
      "CIRSDe · Università degli Studi di Torino": "CIRSDe · Università degli Studi di Torino",
      "Foto:": "Foto:",
      "Scroll": "Desliza",

      // Presentación
      "Call for contributions": "Convocatoria de propuestas",
      "Comunicare le differenze per costruire l’uguaglianza": "Comunicar las diferencias para construir la igualdad",
      "GenderCom 2027 assume la comunicazione come terreno in cui le differenze si trasformano in disuguaglianze oppure diventano risorse per costruire uguaglianza.":
        "GenderCom 2027 entiende la comunicación como el terreno en el que las diferencias se convierten en desigualdades o bien se vuelven recursos para construir igualdad.",
      "Nominare le differenze": "Nombrar las diferencias",
      "Le differenze diventano operative quando vengono comunicate": "Las diferencias se vuelven operativas cuando se comunican",
      "Le differenze non precedono la loro comunicazione, ma diventano socialmente operative nel momento in cui vengono nominate, classificate, raccontate e messe in scena, e proprio in quel passaggio si decide se funzioneranno come principio di riconoscimento o come dispositivo di discriminazione. Gli studi di genere hanno mostrato a lungo come linguaggi e rappresentazioni partecipino alla produzione delle disuguaglianze, non soltanto al loro riflesso.":
        "Las diferencias no preceden a su comunicación: se vuelven socialmente operativas en el momento en que se nombran, se clasifican, se cuentan y se ponen en escena, y es justo en ese paso donde se decide si funcionarán como principio de reconocimiento o como dispositivo de discriminación. Los estudios de género llevan tiempo mostrando que los lenguajes y las representaciones participan en la producción de las desigualdades, y no solo las reflejan.",
      "Un quadro cambiato": "Un escenario que ha cambiado",
      "Visibilità monetizzabile e vulnerabile": "Visibilidad monetizable y vulnerable",
      "Il quadro, però, è cambiato e la visibilità conquistata dalle soggettività un tempo escluse dal discorso pubblico convive oggi con ambienti mediali che la rendono al tempo stesso monetizzabile e vulnerabile. Al tempo presente non sono più soltanto le battaglie politiche e sociali per la difesa dei diritti a costruire le cornici di senso e gli orientamenti di valore, ma sono sempre più le piattaforme che premiano la polarizzazione, i sistemi di intelligenza artificiale che incorporano e amplificano stereotipi, e le nuove forme di violenza tecnomediata, a mettere in pratica campagne anti-gender che si appropriano del lessico dei diritti in molti casi per svuotarlo di senso.":
        "El escenario, sin embargo, ha cambiado: la visibilidad conquistada por las subjetividades antes excluidas del discurso público convive hoy con entornos mediáticos que la hacen a la vez monetizable y vulnerable. Ya no son solo las luchas políticas y sociales por la defensa de los derechos las que construyen los marcos de sentido y las orientaciones de valor; cada vez pesan más las plataformas que premian la polarización, los sistemas de inteligencia artificial que incorporan y amplifican estereotipos y las nuevas formas de violencia tecnomediada, que ponen en marcha campañas antigénero apropiándose del léxico de los derechos, en muchos casos para vaciarlo de sentido.",
      "Nominare non basta": "Nombrar no basta",
      "Interrogare le condizioni del nominare": "Interrogar las condiciones del nombrar",
      "Nominare le differenze non basta più. Occorre interrogare le condizioni linguistiche, tecnologiche, istituzionali ed economiche entro cui quel modo di nominare produce effetti.":
        "Nombrar las diferencias ya no basta. Hay que interrogar las condiciones lingüísticas, tecnológicas, institucionales y económicas dentro de las cuales ese modo de nombrar produce efectos.",
      "Un invito interdisciplinare": "Una invitación interdisciplinar",
      "Studiose, studiosi e professioniste": "Investigadoras, investigadores y profesionales",
      "Il convegno invita studiose e studiosi di sociologia, scienze della comunicazione, linguistica, scienze politiche, diritto, pedagogia, storia, psicologia, economia e informatica, insieme a professioniste e professionisti dell’informazione, dell’educazione e delle istituzioni, a proporre contributi teorici ed empirici che analizzino questi processi, ne ricostruiscano le genealogie e ne individuino le possibili pratiche di contrasto. Sono particolarmente benvenuti gli approcci comparativi e intersezionali e le prospettive provenienti dall’area euromediterranea e latino-americana e dai paesi orientali spesso assenti nei dibattiti internazionali.":
        "El congreso invita a investigadoras e investigadores de sociología, ciencias de la comunicación, lingüística, ciencias políticas, derecho, pedagogía, historia, psicología, economía e informática, junto a profesionales de la información, la educación y las instituciones, a proponer contribuciones teóricas y empíricas que analicen estos procesos, reconstruyan sus genealogías e identifiquen posibles prácticas para contrarrestarlos. Son especialmente bienvenidos los enfoques comparativos e interseccionales y las perspectivas del área euromediterránea y latinoamericana y de los países orientales, a menudo ausentes en los debates internacionales.",
      "Torino": "Turín",
      "Promosso dal CIRSDe dell’Università di Torino": "Promovido por el CIRSDe de la Università di Torino",
      "Il convegno è promosso dal CIRSDe – Centro Interdisciplinare di Ricerche e Studi delle Donne e di Genere dell’Università di Torino. Partecipano inoltre alla coorganizzazione del convegno la Universidad de Sevilla (Spagna), Sapienza Università di Roma e l’Università degli Studi di Napoli Federico II.":
        "El congreso está promovido por el CIRSDe, Centro Interdisciplinar de Investigaciones y Estudios de las Mujeres y de Género de la Università di Torino. Coorganizan también el congreso la Universidad de Sevilla (España), la Sapienza Università di Roma y la Università degli Studi di Napoli Federico II.",

      // Líneas temáticas
      "Otto linee per le proposte": "Ocho líneas para las propuestas",
      "Le proposte dovranno collocarsi in una delle otto linee seguenti. Linguaggi e rappresentazioni, prospettiva intersezionale e profondità storica attraversano tutte le linee e sono attesi in ciascuna di esse. Gli ambiti indicati orientano, senza esaurirle, le possibili direzioni di ricerca.":
        "Las propuestas deberán situarse en una de las ocho líneas siguientes. Los lenguajes y las representaciones, la perspectiva interseccional y la profundidad histórica atraviesan todas las líneas y se esperan en cada una de ellas. Los ámbitos indicados orientan las posibles direcciones de investigación, sin agotarlas.",
      "Media, giornalismo e industrie culturali": "Medios, periodismo e industrias culturales",
      "Rappresentazioni di genere nell’informazione, nella fiction, nella pubblicità e nello sport; equilibrio di genere nelle redazioni e nelle professioni della comunicazione; sicurezza delle giornaliste e difesa della libertà di informazione; buone pratiche redazionali e professionali.":
        "Representaciones de género en la información, la ficción, la publicidad y el deporte; equilibrio de género en las redacciones y en las profesiones de la comunicación; seguridad de las periodistas y defensa de la libertad de información; buenas prácticas en la redacción y en la profesión.",
      "Informazione e fiction": "Información y ficción",
      "Pubblicità e sport": "Publicidad y deporte",
      "Redazioni": "Redacciones",
      "Sicurezza delle giornaliste": "Seguridad de las periodistas",
      "Piattaforme digitali e intelligenza artificiale": "Plataformas digitales e inteligencia artificial",
      "Bias algoritmici e gender data gap; divari digitali e disuguaglianze nelle discipline STEM; accessibilità, governance e regolazione delle piattaforme; attivismo e femminismi digitali.":
        "Sesgos algorítmicos y brecha de datos de género; brechas digitales y desigualdades en las disciplinas STEM; accesibilidad, gobernanza y regulación de las plataformas; activismo y feminismos digitales.",
      "Bias algoritmici": "Sesgos algorítmicos",
      "Femminismi digitali": "Feminismos digitales",
      "Violenze di genere e loro narrazioni": "Violencias de género y sus relatos",
      "Violenza nelle relazioni intime, femminicidio e violenza estrema; vittimizzazione secondaria nei media e nel discorso pubblico; violenza tecnomediata e image-based sexual abuse; violenza in contesti di guerra e conflitto, anche alla luce dell’evoluzione del quadro normativo.":
        "Violencia en las relaciones íntimas, feminicidio y violencia extrema; victimización secundaria en los medios y en el discurso público; violencia tecnomediada y abuso sexual basado en imágenes; violencia en contextos de guerra y conflicto, también a la luz de la evolución del marco normativo.",
      "Femminicidio": "Feminicidio",
      "Vittimizzazione secondaria": "Victimización secundaria",
      "Violenza tecnomediata": "Violencia tecnomediada",
      "Guerra e conflitto": "Guerra y conflicto",
      "Linguaggi, narrazioni e prospettive disciplinari": "Lenguajes, narrativas y perspectivas disciplinares",
      "Il modo in cui genere e differenze vengono costruiti, rappresentati e negoziati nella lingua, nei testi e nelle pratiche narrative, dalla prospettiva della linguistica, degli studi letterari, della semiotica, della traduzione e delle arti. Stereotipi e discriminazioni veicolati dai discorsi; dibattito sui linguaggi non discriminatori; strategie linguistiche e narrative di contrasto; visibilità delle soggettività marginalizzate.":
        "El modo en que el género y las diferencias se construyen, se representan y se negocian en la lengua, en los textos y en las prácticas narrativas, desde la lingüística, los estudios literarios, la semiótica, la traducción y las artes. Estereotipos y discriminaciones que vehiculan los discursos; debate sobre los lenguajes no discriminatorios; estrategias lingüísticas y narrativas para contrarrestarlos; visibilidad de las subjetividades marginadas.",
      "Linguistica": "Lingüística",
      "Semiotica": "Semiótica",
      "Traduzione e arti": "Traducción y artes",
      "Linguaggi non discriminatori": "Lenguajes no discriminatorios",
      "Educazione e formazione": "Educación y formación",
      "Pedagogie delle differenze e pratiche educative non discriminatorie; curricula scolastici e universitari; media literacy e competenze critiche per gli ambienti digitali; formazione di chi opera nell’informazione, nella giustizia e nella sanità.":
        "Pedagogías de las diferencias y prácticas educativas no discriminatorias; currículos escolares y universitarios; alfabetización mediática y competencias críticas para los entornos digitales; formación de quienes trabajan en la información, la justicia y la sanidad.",
      "Pedagogie delle differenze": "Pedagogías de las diferencias",
      "Curricula": "Currículos",
      "Formazione professionale": "Formación profesional",
      "Lavoro, organizzazioni e cura": "Trabajo, organizaciones y cuidados",
      "Gender gap retributivo e di carriera; segregazione occupazionale, esclusione e mobbing; lavoro di cura e politiche di welfare; genere e salute nei luoghi di lavoro.":
        "Brecha salarial y de carrera; segregación ocupacional, exclusión y acoso laboral; trabajo de cuidados y políticas de bienestar; género y salud en los lugares de trabajo.",
      "Segregazione occupazionale": "Segregación ocupacional",
      "Lavoro di cura": "Trabajo de cuidados",
      "Welfare": "Políticas de bienestar",
      "Potere, politica e sfera pubblica": "Poder, política y esfera pública",
      "Rappresentanza politica, leadership femminile e quote di genere; comunicazione istituzionale e gender mainstreaming; politiche europee per l’uguaglianza; mobilitazioni femministe e mobilitazioni anti-gender, manosphere.":
        "Representación política, liderazgo femenino y cuotas de género; comunicación institucional y transversalidad de género; políticas europeas para la igualdad; movilizaciones feministas y movilizaciones antigénero, manosfera.",
      "Leadership femminile": "Liderazgo femenino",
      "Politiche europee": "Políticas europeas",
      "Corpi, identità e diritti": "Cuerpos, identidades y derechos",
      "Diritti riproduttivi e salute; soggettività LGBTQIA+ e trans; lesbian studies, mascolinità e loro trasformazioni; intersezioni tra genere, razza, classe, disabilità ed età.":
        "Derechos reproductivos y salud; subjetividades LGBTQIA+ y trans; estudios lésbicos, masculinidades y sus transformaciones; intersecciones entre género, raza, clase, discapacidad y edad.",
      "Diritti riproduttivi": "Derechos reproductivos",
      "Mascolinità": "Masculinidades",
      "Intersezionalità": "Interseccionalidad",

      // Calendario
      "Calendario": "Calendario",
      "7 ott 2026": "7 oct 2026",
      "Apertura della call": "Apertura de la convocatoria",
      "15 gen 2027": "15 ene 2027",
      "Invio degli abstract": "Envío de resúmenes",
      "1 mar 2027": "1 mar 2027",
      "Comunicazione degli esiti": "Comunicación de los resultados",
      "31 mar 2027": "31 mar 2027",
      "Conferma della partecipazione": "Confirmación de la participación",
      "20 apr 2027": "20 abr 2027",
      "Scadenza iscrizione anticipata (Early Bird) · 150 €": "Fin de la inscripción anticipada (Early Bird) · 150 €",
      "31 mag 2027": "31 may 2027",
      "Invio dei testi completi": "Envío de los textos completos",
      "9–11 giu 2027": "9–11 jun 2027",
      "Convegno · Torino": "Congreso · Turín",
      "Entro 2027": "Durante 2027",
      "Pubblicazione della monografia del convegno": "Publicación de la monografía del congreso",
      "Iscrizione ordinaria · 220 € dal 21 aprile 2027.": "Inscripción ordinaria · 220 € a partir del 21 de abril de 2027.",

      // Participación
      "Modalità di partecipazione": "Modalidades de participación",
      "Come inviare una proposta": "Cómo enviar una propuesta",
      "Si invitano proposte di comunicazioni individuali e di panel tematici. Ciascuna proposta dovrà indicare la linea tematica di riferimento prioritaria.":
        "Se admiten propuestas de comunicaciones individuales y de paneles temáticos. Cada propuesta deberá indicar su línea temática principal.",
      "Comunicazione individuale": "Comunicación individual",
      "Titolo, abstract e parole chiave": "Título, resumen y palabras clave",
      "Abstract da un minimo di 300 a un massimo di 500 parole, da tre a cinque parole chiave, nomi e afferenze di autrici e autori.":
        "Resumen de entre 300 y 500 palabras, de tres a cinco palabras clave, y nombres y filiación de las autoras y los autores.",
      "Panel tematico": "Panel temático",
      "Da tre a quattro contributi": "De tres a cuatro contribuciones",
      "Una breve presentazione complessiva del panel e gli abstract dei singoli interventi.": "Una breve presentación del panel en conjunto y los resúmenes de cada intervención.",
      "Lingue e valutazione": "Idiomas y evaluación",
      "Italiano, inglese e spagnolo": "Italiano, inglés y español",
      "Abstract entro il 15 gennaio 2027, esclusivamente tramite il modulo del convegno. La selezione è affidata al Comitato scientifico mediante valutazione anonima.":
        "Resúmenes hasta el 15 de enero de 2027, únicamente a través del formulario del congreso. La selección corre a cargo del Comité Científico mediante evaluación anónima.",
      "Dalla proposta al convegno": "De la propuesta al congreso",
      "La proposta si invia attraverso la piattaforma di iscrizione. Completata la valutazione, dalla propria area privata sarà possibile:":
        "La propuesta se envía a través de la plataforma de inscripción. Una vez evaluada, desde el área privada se podrá:",
      "Consultare l’esito della valutazione della proposta": "Consultar el resultado de la evaluación de la propuesta",
      "Verificare l’eventuale accettazione della comunicazione": "Comprobar si la comunicación ha sido aceptada",
      "Completare l’iscrizione": "Completar la inscripción",
      "Effettuare il pagamento della quota corrispondente": "Pagar la cuota correspondiente",
      "Ricevere le indicazioni operative per la partecipazione": "Recibir las indicaciones prácticas para participar",
      "Seguire, ove previsto, la procedura di pubblicazione del contributo": "Seguir, cuando corresponda, el procedimiento de publicación de la contribución",
      "Accedi alla piattaforma": "Acceder a la plataforma",

      // Cuotas
      "Iscrizione": "Inscripción",
      "Quote di partecipazione": "Cuotas de participación",
      "Il convegno prevede diverse modalità di partecipazione, con quote differenziate in funzione della tipologia di iscrizione.":
        "El congreso ofrece distintas modalidades de participación, con cuotas diferenciadas según el tipo de inscripción.",
      "In presenza": "Presencial",
      "Autore / coautore": "Autor/a o coautor/a",
      "Partecipazione in presenza a Torino": "Participación presencial en Turín",
      "Presentazione della comunicazione scientifica": "Presentación de la comunicación científica",
      "Dottorandi": "Doctorandos",
      "Quota ridotta per dottorande e dottorandi": "Cuota reducida para doctorandas y doctorandos",
      "Online": "Online",
      "Partecipazione online": "Participación online",
      "Presentazione online della comunicazione scientifica": "Presentación online de la comunicación científica",
      "Altre modalità": "Otras modalidades",
      "Coautore senza partecipazione in presenza": "Coautor/a sin participación presencial",
      "Uditore": "Oyente",
      "Pubblicazione del contributo (quota aggiuntiva)": "Publicación de la contribución (cuota adicional)",
      "Le quote comprendono esclusivamente la partecipazione al convegno e, nelle modalità previste, la presentazione della comunicazione scientifica. La quota di pubblicazione è aggiuntiva rispetto all’iscrizione; la pubblicazione è subordinata al rispetto delle norme editoriali e al processo di valutazione scientifica.":
        "Las cuotas cubren únicamente la participación en el congreso y, en las modalidades previstas, la presentación de la comunicación científica. La cuota de publicación es adicional a la inscripción; la publicación queda sujeta al cumplimiento de las normas editoriales y al proceso de evaluación científica.",

      // Publicación
      "Diffondi la tua ricerca": "Difunde tu investigación",
      "Il convegno intende realizzare una pubblicazione a partire da una selezione dei contributi presentati, sottoposti a ulteriore revisione. Le norme redazionali per i testi completi saranno comunicate insieme agli esiti della selezione.":
        "El congreso prevé una publicación a partir de una selección de las contribuciones presentadas, sometidas a una revisión adicional. Las normas de redacción de los textos completos se comunicarán junto con los resultados de la selección.",
      "31 maggio 2027": "31 de mayo de 2027",
      "Per gli autori che desiderano sottoporre il proprio contributo per la pubblicazione.": "Para quienes deseen presentar su contribución a publicación.",
      "Entro il 2027": "Durante 2027",
      "Monografia del convegno": "Monografía del congreso",
      "Pubblicazione di una selezione dei contributi dopo ulteriore revisione scientifica.": "Publicación de una selección de las contribuciones tras una revisión científica adicional.",

      // Organización
      "Chi lo rende possibile": "Quién lo hace posible",
      "Comitato direttivo": "Comité de dirección",
      "Comitato scientifico": "Comité científico",
      "Promotori e coorganizzatori": "Promotores y coorganizadores",
      "Università e centri": "Universidades y centros",
      "Centro Interdisciplinare di Ricerche e Studi delle Donne e di Genere": "Centro Interdisciplinar de Investigaciones y Estudios de las Mujeres y de Género",
      "Università degli Studi di Torino · Promotore": "Università degli Studi di Torino · Promotor",
      "Sede del convegno": "Sede del congreso",
      "Coorganizzazione": "Coorganización",
      "Spagna": "España",
      "Italia": "Italia",
      "Stati Uniti": "Estados Unidos",
      "Messico": "México",
      "Brasile": "Brasil",
      "Portogallo": "Portugal",
      "Universidad Complutense de Madrid, Spagna": "Universidad Complutense de Madrid, España",
      "Boston College, Stati Uniti": "Boston College, Estados Unidos",
      "Wellesley College, Stati Uniti": "Wellesley College, Estados Unidos",
      "Sapienza Università di Roma, Italia": "Sapienza Università di Roma, Italia",
      "Universidad Autónoma del Estado de México, Messico": "Universidad Autónoma del Estado de México, México",
      "Università Kore di Enna, Italia": "Università Kore di Enna, Italia",
      "Università degli Studi di Padova, Italia": "Università degli Studi di Padova, Italia",
      "Universidad de Granada, Spagna": "Universidad de Granada, España",
      "Universidad de Deusto, Spagna": "Universidad de Deusto, España",
      "Universidad de Valladolid, Spagna": "Universidad de Valladolid, España",
      "Universidade Federal de Santa Catarina, Brasile": "Universidade Federal de Santa Catarina, Brasil",
      "Universidad de Málaga, Spagna": "Universidad de Málaga, España",
      "Universidad de La Plata, Argentina": "Universidad de La Plata, Argentina",
      "Università degli Studi di Napoli Federico II, Italia": "Università degli Studi di Napoli Federico II, Italia",
      "Università degli Studi di Torino, Italia": "Università degli Studi di Torino, Italia",
      "Universidade de Lisboa, Portogallo": "Universidade de Lisboa, Portugal",
      "Università degli Studi della Campania “Luigi Vanvitelli”": "Università degli Studi della Campania “Luigi Vanvitelli”",

      // Sede y preguntas
      "Sede e contatti": "Sede y contacto",
      "Ci vediamo a Torino": "Nos vemos en Turín",
      "Email": "Correo",
      "Date": "Fechas",
      "9–11 giugno 2027": "9–11 de junio de 2027",
      "Università degli Studi di Torino · Torino, Italia": "Università degli Studi di Torino · Turín, Italia",
      "Torino, Piemonte · Italia": "Turín, Piamonte · Italia",
      "Apri in Google Maps": "Abrir en Google Maps",
      "Posso partecipare online?": "¿Puedo participar online?",
      "Sì. È prevista la partecipazione online con presentazione della comunicazione scientifica, con una quota di 100 €.":
        "Sí. Está prevista la participación online con presentación de la comunicación científica, con una cuota de 100 €.",
      "In quali lingue posso presentare?": "¿En qué idiomas puedo presentar?",
      "Sono accettate proposte in tutte le lingue del convegno: italiano, inglese e spagnolo.": "Se aceptan propuestas en todos los idiomas del congreso: italiano, inglés y español.",
      "La pubblicazione è inclusa nella quota?": "¿La publicación está incluida en la cuota?",
      "No. Chi desidera sottoporre il proprio contributo per la pubblicazione deve corrispondere una quota aggiuntiva di 100 €, subordinata al rispetto delle norme editoriali e alla valutazione scientifica.":
        "No. Quien desee presentar su contribución a publicación debe abonar una cuota adicional de 100 €, sujeta al cumplimiento de las normas editoriales y a la evaluación científica.",
      "Come vengono selezionate le proposte?": "¿Cómo se seleccionan las propuestas?",
      "La selezione è affidata al Comitato scientifico mediante valutazione anonima. Gli esiti saranno comunicati entro il 1° marzo 2027.":
        "La selección corre a cargo del Comité Científico mediante evaluación anónima. Los resultados se comunicarán antes del 1 de marzo de 2027.",
      "Comunicare le differenze per costruire l’uguaglianza. Linguaggi, rappresentazioni e trasformazioni sociali.":
        "Comunicar las diferencias para construir la igualdad. Lenguajes, representaciones y transformaciones sociales.",
      "Navigazione": "Navegación",
      "Contatti": "Contacto",
      "GENDERCOM · CIRSDe – Università degli Studi di Torino · © 2027": "GENDERCOM · CIRSDe – Università degli Studi di Torino · © 2027",
      "Torino · 9–11 giugno 2027": "Turín · 9–11 de junio de 2027",
    },

    en: {
      "Call aperta": "Call open",
      "Invio degli abstract entro il 15 gennaio 2027 · Torino, 9–11 giugno 2027": "Abstracts due 15 January 2027 · Turin, 9–11 June 2027",
      "Comunicazione e genere · Torino": "Communication and gender · Turin",
      "Presentazione": "About",
      "Linee tematiche": "Thematic lines",
      "Scadenze": "Key dates",
      "Partecipa": "Take part",
      "Quote": "Fees",
      "Pubblicazione": "Publication",
      "Organizzazione": "Organisation",
      "Sede": "Venue",
      "Invia la tua proposta": "Submit your proposal",
      "9–11 Giugno 2027 · Torino": "9–11 June 2027 · Turin",
      "Comunicare le": "Communicating",
      "differenze": "differences",
      "per costruire l’": "to build ",
      "uguaglianza": "equality",
      "Linguaggi, rappresentazioni e trasformazioni sociali": "Languages, representations and social change",
      "CIRSDe · Università degli Studi di Torino": "CIRSDe · University of Turin",
      "Foto:": "Photo:",
      "Scroll": "Scroll",

      "Call for contributions": "Call for contributions",
      "Comunicare le differenze per costruire l’uguaglianza": "Communicating differences to build equality",
      "GenderCom 2027 assume la comunicazione come terreno in cui le differenze si trasformano in disuguaglianze oppure diventano risorse per costruire uguaglianza.":
        "GenderCom 2027 takes communication as the ground on which differences turn into inequalities, or become resources for building equality.",
      "Nominare le differenze": "Naming differences",
      "Le differenze diventano operative quando vengono comunicate": "Differences become operative once they are communicated",
      "Le differenze non precedono la loro comunicazione, ma diventano socialmente operative nel momento in cui vengono nominate, classificate, raccontate e messe in scena, e proprio in quel passaggio si decide se funzioneranno come principio di riconoscimento o come dispositivo di discriminazione. Gli studi di genere hanno mostrato a lungo come linguaggi e rappresentazioni partecipino alla produzione delle disuguaglianze, non soltanto al loro riflesso.":
        "Differences do not precede their communication: they become socially operative the moment they are named, classified, narrated and staged, and it is precisely there that it is decided whether they will work as a principle of recognition or as a device of discrimination. Gender studies have long shown that languages and representations take part in producing inequalities, and do not merely reflect them.",
      "Un quadro cambiato": "A changed landscape",
      "Visibilità monetizzabile e vulnerabile": "Visibility that is both monetisable and vulnerable",
      "Il quadro, però, è cambiato e la visibilità conquistata dalle soggettività un tempo escluse dal discorso pubblico convive oggi con ambienti mediali che la rendono al tempo stesso monetizzabile e vulnerabile. Al tempo presente non sono più soltanto le battaglie politiche e sociali per la difesa dei diritti a costruire le cornici di senso e gli orientamenti di valore, ma sono sempre più le piattaforme che premiano la polarizzazione, i sistemi di intelligenza artificiale che incorporano e amplificano stereotipi, e le nuove forme di violenza tecnomediata, a mettere in pratica campagne anti-gender che si appropriano del lessico dei diritti in molti casi per svuotarlo di senso.":
        "The landscape, however, has changed: the visibility won by subjectivities once excluded from public discourse now coexists with media environments that make it both monetisable and vulnerable. Today it is no longer only political and social struggles for rights that build frames of meaning and value orientations; increasingly it is platforms that reward polarisation, artificial intelligence systems that embed and amplify stereotypes, and new forms of technology-mediated violence that carry out anti-gender campaigns, appropriating the language of rights, in many cases to empty it of meaning.",
      "Nominare non basta": "Naming is not enough",
      "Interrogare le condizioni del nominare": "Questioning the conditions of naming",
      "Nominare le differenze non basta più. Occorre interrogare le condizioni linguistiche, tecnologiche, istituzionali ed economiche entro cui quel modo di nominare produce effetti.":
        "Naming differences is no longer enough. We need to question the linguistic, technological, institutional and economic conditions within which that naming takes effect.",
      "Un invito interdisciplinare": "An interdisciplinary invitation",
      "Studiose, studiosi e professioniste": "Researchers and practitioners",
      "Il convegno invita studiose e studiosi di sociologia, scienze della comunicazione, linguistica, scienze politiche, diritto, pedagogia, storia, psicologia, economia e informatica, insieme a professioniste e professionisti dell’informazione, dell’educazione e delle istituzioni, a proporre contributi teorici ed empirici che analizzino questi processi, ne ricostruiscano le genealogie e ne individuino le possibili pratiche di contrasto. Sono particolarmente benvenuti gli approcci comparativi e intersezionali e le prospettive provenienti dall’area euromediterranea e latino-americana e dai paesi orientali spesso assenti nei dibattiti internazionali.":
        "The conference invites researchers in sociology, communication studies, linguistics, political science, law, education, history, psychology, economics and computer science, together with practitioners from the media, education and public institutions, to submit theoretical and empirical contributions that analyse these processes, trace their genealogies and identify ways of countering them. Comparative and intersectional approaches are particularly welcome, as are perspectives from the Euro-Mediterranean and Latin American regions and from Eastern countries, often absent from international debates.",
      "Torino": "Turin",
      "Promosso dal CIRSDe dell’Università di Torino": "Promoted by CIRSDe at the University of Turin",
      "Il convegno è promosso dal CIRSDe – Centro Interdisciplinare di Ricerche e Studi delle Donne e di Genere dell’Università di Torino. Partecipano inoltre alla coorganizzazione del convegno la Universidad de Sevilla (Spagna), Sapienza Università di Roma e l’Università degli Studi di Napoli Federico II.":
        "The conference is promoted by CIRSDe, the Interdisciplinary Centre for Women's and Gender Research and Studies of the University of Turin. It is co-organised with the University of Seville (Spain), Sapienza University of Rome and the University of Naples Federico II.",

      "Otto linee per le proposte": "Eight lines for proposals",
      "Le proposte dovranno collocarsi in una delle otto linee seguenti. Linguaggi e rappresentazioni, prospettiva intersezionale e profondità storica attraversano tutte le linee e sono attesi in ciascuna di esse. Gli ambiti indicati orientano, senza esaurirle, le possibili direzioni di ricerca.":
        "Proposals should fit into one of the eight lines below. Languages and representations, an intersectional perspective and historical depth cut across every line and are expected in each of them. The topics listed point to possible directions of research without exhausting them.",
      "Media, giornalismo e industrie culturali": "Media, journalism and the cultural industries",
      "Rappresentazioni di genere nell’informazione, nella fiction, nella pubblicità e nello sport; equilibrio di genere nelle redazioni e nelle professioni della comunicazione; sicurezza delle giornaliste e difesa della libertà di informazione; buone pratiche redazionali e professionali.":
        "Gender representations in news, fiction, advertising and sport; gender balance in newsrooms and communication professions; the safety of women journalists and the defence of press freedom; good editorial and professional practice.",
      "Informazione e fiction": "News and fiction",
      "Pubblicità e sport": "Advertising and sport",
      "Redazioni": "Newsrooms",
      "Sicurezza delle giornaliste": "Safety of women journalists",
      "Piattaforme digitali e intelligenza artificiale": "Digital platforms and artificial intelligence",
      "Bias algoritmici e gender data gap; divari digitali e disuguaglianze nelle discipline STEM; accessibilità, governance e regolazione delle piattaforme; attivismo e femminismi digitali.":
        "Algorithmic bias and the gender data gap; digital divides and inequalities in STEM; accessibility, governance and platform regulation; digital activism and feminisms.",
      "Bias algoritmici": "Algorithmic bias",
      "Femminismi digitali": "Digital feminisms",
      "Violenze di genere e loro narrazioni": "Gender violence and how it is told",
      "Violenza nelle relazioni intime, femminicidio e violenza estrema; vittimizzazione secondaria nei media e nel discorso pubblico; violenza tecnomediata e image-based sexual abuse; violenza in contesti di guerra e conflitto, anche alla luce dell’evoluzione del quadro normativo.":
        "Intimate partner violence, femicide and extreme violence; secondary victimisation in the media and in public discourse; technology-mediated violence and image-based sexual abuse; violence in war and conflict, also in the light of a changing legal framework.",
      "Femminicidio": "Femicide",
      "Vittimizzazione secondaria": "Secondary victimisation",
      "Violenza tecnomediata": "Technology-mediated violence",
      "Guerra e conflitto": "War and conflict",
      "Linguaggi, narrazioni e prospettive disciplinari": "Languages, narratives and disciplinary perspectives",
      "Il modo in cui genere e differenze vengono costruiti, rappresentati e negoziati nella lingua, nei testi e nelle pratiche narrative, dalla prospettiva della linguistica, degli studi letterari, della semiotica, della traduzione e delle arti. Stereotipi e discriminazioni veicolati dai discorsi; dibattito sui linguaggi non discriminatori; strategie linguistiche e narrative di contrasto; visibilità delle soggettività marginalizzate.":
        "How gender and difference are built, represented and negotiated in language, in texts and in narrative practice, from linguistics, literary studies, semiotics, translation and the arts. Stereotypes and discrimination carried by discourse; the debate on non-discriminatory language; linguistic and narrative strategies of resistance; visibility for marginalised subjectivities.",
      "Linguistica": "Linguistics",
      "Semiotica": "Semiotics",
      "Traduzione e arti": "Translation and the arts",
      "Linguaggi non discriminatori": "Non-discriminatory language",
      "Educazione e formazione": "Education and training",
      "Pedagogie delle differenze e pratiche educative non discriminatorie; curricula scolastici e universitari; media literacy e competenze critiche per gli ambienti digitali; formazione di chi opera nell’informazione, nella giustizia e nella sanità.":
        "Pedagogies of difference and non-discriminatory teaching practice; school and university curricula; media literacy and critical skills for digital environments; training for those working in the media, the justice system and healthcare.",
      "Pedagogie delle differenze": "Pedagogies of difference",
      "Curricula": "Curricula",
      "Formazione professionale": "Professional training",
      "Lavoro, organizzazioni e cura": "Work, organisations and care",
      "Gender gap retributivo e di carriera; segregazione occupazionale, esclusione e mobbing; lavoro di cura e politiche di welfare; genere e salute nei luoghi di lavoro.":
        "Pay and career gaps; occupational segregation, exclusion and workplace harassment; care work and welfare policy; gender and health at work.",
      "Segregazione occupazionale": "Occupational segregation",
      "Lavoro di cura": "Care work",
      "Welfare": "Welfare",
      "Potere, politica e sfera pubblica": "Power, politics and the public sphere",
      "Rappresentanza politica, leadership femminile e quote di genere; comunicazione istituzionale e gender mainstreaming; politiche europee per l’uguaglianza; mobilitazioni femministe e mobilitazioni anti-gender, manosphere.":
        "Political representation, women's leadership and gender quotas; institutional communication and gender mainstreaming; European equality policy; feminist and anti-gender mobilisations, the manosphere.",
      "Leadership femminile": "Women's leadership",
      "Politiche europee": "European policy",
      "Corpi, identità e diritti": "Bodies, identities and rights",
      "Diritti riproduttivi e salute; soggettività LGBTQIA+ e trans; lesbian studies, mascolinità e loro trasformazioni; intersezioni tra genere, razza, classe, disabilità ed età.":
        "Reproductive rights and health; LGBTQIA+ and trans subjectivities; lesbian studies, masculinities and how they are changing; intersections of gender, race, class, disability and age.",
      "Diritti riproduttivi": "Reproductive rights",
      "Mascolinità": "Masculinities",
      "Intersezionalità": "Intersectionality",

      "Calendario": "Calendar",
      "7 ott 2026": "7 Oct 2026",
      "Apertura della call": "Call opens",
      "15 gen 2027": "15 Jan 2027",
      "Invio degli abstract": "Abstract submission",
      "1 mar 2027": "1 Mar 2027",
      "Comunicazione degli esiti": "Decisions announced",
      "31 mar 2027": "31 Mar 2027",
      "Conferma della partecipazione": "Confirmation of attendance",
      "20 apr 2027": "20 Apr 2027",
      "Scadenza iscrizione anticipata (Early Bird) · 150 €": "Early bird registration deadline · €150",
      "31 mag 2027": "31 May 2027",
      "Invio dei testi completi": "Full papers due",
      "9–11 giu 2027": "9–11 Jun 2027",
      "Convegno · Torino": "Conference · Turin",
      "Entro 2027": "During 2027",
      "Pubblicazione della monografia del convegno": "Publication of the conference monograph",
      "Iscrizione ordinaria · 220 € dal 21 aprile 2027.": "Standard registration · €220 from 21 April 2027.",

      "Modalità di partecipazione": "Ways to take part",
      "Come inviare una proposta": "How to submit a proposal",
      "Si invitano proposte di comunicazioni individuali e di panel tematici. Ciascuna proposta dovrà indicare la linea tematica di riferimento prioritaria.":
        "Proposals are invited for individual papers and for thematic panels. Each proposal must state its main thematic line.",
      "Comunicazione individuale": "Individual paper",
      "Titolo, abstract e parole chiave": "Title, abstract and keywords",
      "Abstract da un minimo di 300 a un massimo di 500 parole, da tre a cinque parole chiave, nomi e afferenze di autrici e autori.":
        "An abstract of 300 to 500 words, three to five keywords, and the names and affiliations of the authors.",
      "Panel tematico": "Thematic panel",
      "Da tre a quattro contributi": "Three to four contributions",
      "Una breve presentazione complessiva del panel e gli abstract dei singoli interventi.": "A short overall presentation of the panel and the abstracts of each paper.",
      "Lingue e valutazione": "Languages and review",
      "Italiano, inglese e spagnolo": "Italian, English and Spanish",
      "Abstract entro il 15 gennaio 2027, esclusivamente tramite il modulo del convegno. La selezione è affidata al Comitato scientifico mediante valutazione anonima.":
        "Abstracts by 15 January 2027, only through the conference form. Selection is made by the Scientific Committee through anonymous review.",
      "Dalla proposta al convegno": "From proposal to conference",
      "La proposta si invia attraverso la piattaforma di iscrizione. Completata la valutazione, dalla propria area privata sarà possibile:":
        "Proposals are submitted through the registration platform. Once the review is complete, from your private area you can:",
      "Consultare l’esito della valutazione della proposta": "See the outcome of the review",
      "Verificare l’eventuale accettazione della comunicazione": "Check whether your paper has been accepted",
      "Completare l’iscrizione": "Complete your registration",
      "Effettuare il pagamento della quota corrispondente": "Pay the corresponding fee",
      "Ricevere le indicazioni operative per la partecipazione": "Receive the practical details for taking part",
      "Seguire, ove previsto, la procedura di pubblicazione del contributo": "Follow, where applicable, the publication procedure",
      "Accedi alla piattaforma": "Go to the platform",

      "Iscrizione": "Registration",
      "Quote di partecipazione": "Registration fees",
      "Il convegno prevede diverse modalità di partecipazione, con quote differenziate in funzione della tipologia di iscrizione.":
        "The conference offers several ways to take part, with fees that vary according to the type of registration.",
      "In presenza": "On site",
      "Autore / coautore": "Author / co-author",
      "Partecipazione in presenza a Torino": "On-site participation in Turin",
      "Presentazione della comunicazione scientifica": "Presentation of the paper",
      "Dottorandi": "Doctoral candidates",
      "Quota ridotta per dottorande e dottorandi": "Reduced fee for doctoral candidates",
      "Online": "Online",
      "Partecipazione online": "Online participation",
      "Presentazione online della comunicazione scientifica": "Online presentation of the paper",
      "Altre modalità": "Other options",
      "Coautore senza partecipazione in presenza": "Co-author not attending on site",
      "Uditore": "Listener",
      "Pubblicazione del contributo (quota aggiuntiva)": "Publication of the contribution (additional fee)",
      "Le quote comprendono esclusivamente la partecipazione al convegno e, nelle modalità previste, la presentazione della comunicazione scientifica. La quota di pubblicazione è aggiuntiva rispetto all’iscrizione; la pubblicazione è subordinata al rispetto delle norme editoriali e al processo di valutazione scientifica.":
        "Fees cover only participation in the conference and, where applicable, the presentation of the paper. The publication fee is additional to registration; publication depends on meeting the editorial guidelines and passing scientific review.",

      "Diffondi la tua ricerca": "Share your research",
      "Il convegno intende realizzare una pubblicazione a partire da una selezione dei contributi presentati, sottoposti a ulteriore revisione. Le norme redazionali per i testi completi saranno comunicate insieme agli esiti della selezione.":
        "The conference plans a publication drawing on a selection of the contributions presented, subject to further review. The editorial guidelines for full papers will be announced together with the selection results.",
      "31 maggio 2027": "31 May 2027",
      "Per gli autori che desiderano sottoporre il proprio contributo per la pubblicazione.": "For authors who wish to submit their contribution for publication.",
      "Entro il 2027": "During 2027",
      "Monografia del convegno": "Conference monograph",
      "Pubblicazione di una selezione dei contributi dopo ulteriore revisione scientifica.": "Publication of a selection of contributions after further scientific review.",

      "Chi lo rende possibile": "Who makes it possible",
      "Comitato direttivo": "Steering committee",
      "Comitato scientifico": "Scientific committee",
      "Promotori e coorganizzatori": "Promoters and co-organisers",
      "Università e centri": "Universities and centres",
      "Centro Interdisciplinare di Ricerche e Studi delle Donne e di Genere": "Interdisciplinary Centre for Women's and Gender Research and Studies",
      "Università degli Studi di Torino · Promotore": "University of Turin · Promoter",
      "Sede del convegno": "Conference venue",
      "Coorganizzazione": "Co-organisation",
      "Universidad Complutense de Madrid, Spagna": "Complutense University of Madrid, Spain",
      "Boston College, Stati Uniti": "Boston College, United States",
      "Wellesley College, Stati Uniti": "Wellesley College, United States",
      "Sapienza Università di Roma, Italia": "Sapienza University of Rome, Italy",
      "Universidad Autónoma del Estado de México, Messico": "Autonomous University of the State of Mexico, Mexico",
      "Università Kore di Enna, Italia": "Kore University of Enna, Italy",
      "Università degli Studi di Padova, Italia": "University of Padua, Italy",
      "Universidad de Granada, Spagna": "University of Granada, Spain",
      "Universidad de Deusto, Spagna": "University of Deusto, Spain",
      "Universidad de Valladolid, Spagna": "University of Valladolid, Spain",
      "Universidade Federal de Santa Catarina, Brasile": "Federal University of Santa Catarina, Brazil",
      "Universidad de Málaga, Spagna": "University of Málaga, Spain",
      "Universidad de La Plata, Argentina": "University of La Plata, Argentina",
      "Università degli Studi di Napoli Federico II, Italia": "University of Naples Federico II, Italy",
      "Università degli Studi di Torino, Italia": "University of Turin, Italy",
      "Universidade de Lisboa, Portogallo": "University of Lisbon, Portugal",
      "Università degli Studi di Torino": "University of Turin",
      "Sapienza Università di Roma": "Sapienza University of Rome",
      "Università degli Studi di Napoli Federico II": "University of Naples Federico II",
      "Universidad de Sevilla": "University of Seville",
      "Università degli Studi della Campania “Luigi Vanvitelli”": "University of Campania “Luigi Vanvitelli”",

      "Sede e contatti": "Venue and contact",
      "Ci vediamo a Torino": "See you in Turin",
      "Date": "Dates",
      "9–11 giugno 2027": "9–11 June 2027",
      "Università degli Studi di Torino · Torino, Italia": "University of Turin · Turin, Italy",
      "Torino, Piemonte · Italia": "Turin, Piedmont · Italy",
      "Apri in Google Maps": "Open in Google Maps",
      "Posso partecipare online?": "Can I take part online?",
      "Sì. È prevista la partecipazione online con presentazione della comunicazione scientifica, con una quota di 100 €.":
        "Yes. Online participation with presentation of the paper is available, with a fee of €100.",
      "In quali lingue posso presentare?": "Which languages can I present in?",
      "Sono accettate proposte in tutte le lingue del convegno: italiano, inglese e spagnolo.": "Proposals are accepted in all the conference languages: Italian, English and Spanish.",
      "La pubblicazione è inclusa nella quota?": "Is publication included in the fee?",
      "No. Chi desidera sottoporre il proprio contributo per la pubblicazione deve corrispondere una quota aggiuntiva di 100 €, subordinata al rispetto delle norme editoriali e alla valutazione scientifica.":
        "No. Authors who wish to submit their contribution for publication pay an additional fee of €100, subject to the editorial guidelines and scientific review.",
      "Come vengono selezionate le proposte?": "How are proposals selected?",
      "La selezione è affidata al Comitato scientifico mediante valutazione anonima. Gli esiti saranno comunicati entro il 1° marzo 2027.":
        "Selection is made by the Scientific Committee through anonymous review. Results will be announced by 1 March 2027.",
      "Comunicare le differenze per costruire l’uguaglianza. Linguaggi, rappresentazioni e trasformazioni sociali.":
        "Communicating differences to build equality. Languages, representations and social change.",
      "Navigazione": "Navigation",
      "Contatti": "Contact",
      "GENDERCOM · CIRSDe – Università degli Studi di Torino · © 2027": "GENDERCOM · CIRSDe – University of Turin · © 2027",
      "Torino · 9–11 giugno 2027": "Turin · 9–11 June 2027",
    },
  };

  var TITULOS = {
    it: "GENDERCOM 2027 — Comunicare le differenze per costruire l’uguaglianza · Torino, 9–11 giugno 2027",
    es: "GENDERCOM 2027 — Comunicar las diferencias para construir la igualdad · Turín, 9–11 de junio de 2027",
    en: "GENDERCOM 2027 — Communicating differences to build equality · Turin, 9–11 June 2027",
  };

  var IDIOMAS = ["it", "es", "en"];
  var lang = "it";
  try {
    // Si se llega desde la web de 2026 leyéndola en español o en inglés, se mantiene ese idioma.
    var url = (location.search.match(/[?&]lang=([a-z]{2})/) || [])[1];
    if (url && IDIOMAS.indexOf(url) >= 0) {
      lang = url;
      try { localStorage.setItem("gendercom27_lang", url); } catch (e) {}
    } else {
      var g = localStorage.getItem("gendercom27_lang");
      if (g && IDIOMAS.indexOf(g) >= 0) lang = g;
    }
  } catch (e) {}

  var ORIG = new WeakMap();

  function traducir(nodo, dict) {
    var base = ORIG.get(nodo);
    if (base === undefined) {
      base = nodo.textContent;
      ORIG.set(nodo, base);
    }
    var clave = base.trim();
    if (!clave) return;
    var t = dict ? dict[clave] : null;
    var nuevo = t ? base.replace(clave, t) : base;
    if (nodo.textContent !== nuevo) nodo.textContent = nuevo;
  }

  var aplicando = false;
  function aplicar() {
    if (aplicando) return;
    aplicando = true;
    var dict = DICT[lang] || null;
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var n;
    while ((n = w.nextNode())) {
      var p = n.parentElement;
      if (!p || p.tagName === "SCRIPT" || p.tagName === "STYLE" || p.closest("[data-i18n-selector]")) continue;
      traducir(n, dict);
    }
    document.documentElement.setAttribute("lang", lang);
    document.title = TITULOS[lang] || TITULOS.it;
    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n-selector] button"), function (b) {
      b.classList.toggle("on", b.getAttribute("data-lang") === lang);
    });
    aplicando = false;
  }

  /** Selector de idioma en la cabecera, con el aire del propio diseño. */
  function selector() {
    var cta = document.querySelector(".nav-cta");
    if (!cta || cta.querySelector("[data-i18n-selector]")) return;
    var caja = document.createElement("div");
    caja.setAttribute("data-i18n-selector", "");
    caja.style.cssText = "display:flex;gap:2px;align-items:center;margin-right:14px";
    IDIOMAS.forEach(function (l) {
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("data-lang", l);
      b.textContent = l.toUpperCase();
      b.style.cssText =
        "background:none;border:0;cursor:pointer;font:600 12px/1 inherit;letter-spacing:.12em;padding:7px 7px;transition:opacity .2s,color .25s";
      b.addEventListener("click", function () {
        lang = l;
        try { localStorage.setItem("gendercom27_lang", l); } catch (e) {}
        aplicar();
      });
      caja.appendChild(b);
    });
    cta.insertBefore(caja, cta.firstChild);
    var estilo = document.createElement("style");
    estilo.textContent = "[data-i18n-selector] button{color:#fff;opacity:.68}"
      + "[data-i18n-selector] button:hover{opacity:1}"
      + "[data-i18n-selector] button.on{opacity:1;text-decoration:underline;text-underline-offset:4px}"
      + ".nav.scrolled [data-i18n-selector] button{color:var(--ink,#140f1a)}"
      + ".nav.scrolled [data-i18n-selector] button.on{color:var(--magenta,#C6007E)}";
    document.head.appendChild(estilo);
  }

  // El diseño reconstruye la cabecera al cargar y se lleva por delante los iconos del sitio
  function iconos() {
    if (document.querySelector('link[rel="icon"]')) return;
    [
      ["icon", "favicon-32.png", "32x32"],
      ["icon", "favicon-512.png", "512x512"],
      ["apple-touch-icon", "favicon-180.png", "180x180"],
    ].forEach(function (i) {
      var l = document.createElement("link");
      l.rel = i[0];
      l.type = "image/png";
      l.href = i[1];
      l.sizes = i[2];
      document.head.appendChild(l);
    });
  }

  function arrancar() {
    iconos();
    selector();
    aplicar();
    var pendiente = null;
    new MutationObserver(function () {
      clearTimeout(pendiente);
      pendiente = setTimeout(function () {
        selector();
        aplicar();
      }, 60);
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { setTimeout(arrancar, 300); });
  else setTimeout(arrancar, 300);
})();
