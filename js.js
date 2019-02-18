window.onload= function(){
	video = document.getElementsByTagName("video")[0];
	rewind=document.getElementById("rewind");
	fastforward=document.getElementById("fastforward");
	result1=document.getElementById("result1");
	starting_time=36.00
	seconds_to_skip=10.00;
	video.currentTime=starting_time;
	timer=document.getElementById("timer");

    var textByLine;
	function getAjaxText() {
	  $.ajax({
	    url: "HisGraceIsSufficientLyric.txt",  
	    success: function(data) {
	       text=data;
	       textByLine = text.split("\n");
	       yourFunction();
	       return true;
	    }
	  });
	}

	function getText(){
		var text=`
			È un onore essere invitato a parlare con voi oggi. Diversi anni fa ho sono stato invitato a parlare alla Conferenza delle donne. Quando lo ho detto a mia moglie, chiese,
			"Su che cosa ti hanno chiesto di parlare?" Ero così felice che [nel risponderle] mi sono confuso dicendo: "Vogliono che parli del cambiare di punti di forza in debolezze".
			Lei ci pensò per un minuto, poi disse: "Bene, hanno trovato l'uomo giusto!" 
			Ha proprio ragione! Potrei parlare per ore di ciò, ma penso che oggi sia meglio tornare al tema originale
			e parlare di come trasformare le debolezze in punti di forza e di come la grazia di Gesù Cristo sia sufficiente: 
			sufficiente a coprirci, sufficiente a trasformarci, e sufficiente per aiutarci per tutto il processo.
			La grazie di Gesù Cristo è sufficiente per coprirci... Un giorno una stundentessa della BYU mi chiese se potessimo parlare, al che risposi: "certamente, come posso aiutarti?"
			Ha detto: "Semplicemente non riesco a capire la grazia". Ho risposto: "Che cosa non capisci?"
			Ha detto: "So che dovrei fare del mio meglio e poi Gesù farà il resto, 
			ma io non riesco nemmeno a fare del mio meglio". Ha poi proseguito elencandomi tutte le cose che avrebbe dovuto fare perché lei è una mormone!!
			che non stava facendo. Ha continuato, "So che devo fare la mia parte 
			e poi Gesù fa la differenza e colma il vuoto che si frappone tra la mia parte e la perfezione. 
			Ma chi riempie il vuoto che si frappone tra dove sono ora e la mia parte? " Ha continuato 
			raccontandomi tutte le cose che non avrebbe dovuto fare... perché era una mormone, ma che stava facendo comunque.
			Alla fine dissi: "Gesù non copre la differenza. Gesù fa la differenza. 
			La grazia non è per colmar delle lacune. La grazia è per colmarci. "
			Vedendo che era ancora confusa, ho preso un pezzo di carta e ho disegnato due punti: uno in alto che rappresenta Dio e uno in basso che rappresenta noi. 
			Allora dissi: "Avanti. Disegna la linea. Quant' è la nostra parte? Quant'è la parte di Cristo? "Andò dritta al centro della pagina e cominciò a disegnare una linea. 
			Poi, considerando ciò di cui stavamo parlando, andò in fondo alla pagina e disegnò una linea appena sopra il punto in basso. Ho detto, "Sbagliato".
			Ha detto: "Sapevo che era più in alto. Perché non l'ho disegnata più alta? Cioè, lo sapevo! "
			Ho detto "No. La verità è che non c'è nessuna linea. Gesù ha riempito l'intero spazio.
			Ha pagato il nostro debito per intero. Non ha pagato tutto tranne alcune monete. Ha pagato tutto. 
			È finito." Lei disse: "Se, certo! Come se non dovessi fare nulla?" "Oh no", dissi, "hai molto da fare,
			ma non è per colmare delle lacune. Tutti risorgeremo. Tutti torneremo alla presenza di Dio. 
			Ciò che resta da determinare con la nostra obbedienza è: con quale tipo di corpo intendiamo risorgere e quanto a nostro agio intendiamo essere alla presenza di Dio
			e per quanto tempo intendiamo rimanerci ". Cristo ci chiede di mostrare fede in Lui, pentirci, fare e mantenere le alleanze,
			ricevere lo Spirito Santo e perseverare sino alla fine. Ascoltandolo, non stiamo pagando le richieste della giustizia, nemmeno la più piccola parte.
			Invece, stiamo mostrando apprezzamento per ciò che Gesù Cristo ha fatto usandolo per vivere una vita come la Sua. 
			La giustizia richiede una perfezione immediata o una punizione quando non siamo all'altezza. Poiché Gesù si è preso la nostra punizione,
			può offrirci la possibilità di raggiungere la perfezione finale  e aiutarci a raggiungere questo obiettivo. 
			Può perdonare ciò che la giustizia non potrebbe mai, e può rivolgersi a noi ora con il suo insieme di requisiti.
			"Allora, qual è la differenza?" Chiese la ragazza. "Che i nostri sforzi siano richiesti  dalla giustizia o da Gesù, 
			sono comunque richiesti". "Vero," dissi, "ma sono richiesti per uno scopo diverso. Soddisfare le esigenze di Cristo è come pagare un mutuo anziché un affitto
			o come fare un deposito in un conto di risparmio invece di pagare il debito. Devi sempre sborsarne ogni mese, 
			ma è per una ragione completamente diversa. " La grazia di Cristo è sufficente per trasformarci.
			L'accordo di Cristo con noi è simile a quello di una madre che offre lezioni di musica per il suo bambino. La mamma paga l'insegnante di pianoforte. Quanti sanno di cosa sto parlando? 
			Poiché la mamma paga il debito per intero, può rivolgersi a suo figlio e chiedergli qualcosa. Che cos'è? Dai tutti assieme! 
			Pratica! Ohh la sapevate questa risposta! Pratica! Pratica! Ora La pratica del bambino paga l'insegnante di pianoforte?
			No. La pratica del bambino ripaga la mamma per aver pagato l'insegnante di pianoforte? No. 
			La pratica è come il bambino mostra apprezzamento per l'incredibile dono della mamma. È il modo in cui sfrutta l'incredibile opportunità che la mamma gli sta offrendo
			per vivere la sua vita ad un livello più alto. La gioia della mamma non si ritrova nel dover essere ripagata, ma nel vedere il suo dono usato 
			vedere il suo bambino migliorare. E per questo continua a chiedere: pratica, pratica, pratica.
			Se il bambino sente che le richieste di fare pratica della mamma sono troppo insistenti ("Cavoli mamma, perché devo esercitarmi?" 
			Nessuno degli altri bambini deve allenarsi! Comunque, sarò comunque un giocatore professionista di baseball! "),
			forse è perché ancora non vede con gli occhi di mamma. Non vede quanto potrebbe essere migliore la sua vita se decidesse di viverla
			su un livello più alto. Allo stesso modo, poiché Gesù ci ha reso giustizia, può ora rivolgersi a noi e dire: 
			"Seguimi" , "Osserva i miei comandamenti". Se consideriamo le Sue esigenze troppo da chiedere 
			("Cavoli, nessuno degli altri cristiani deve pagare la decima!" Nessuno degli altri cristiani deve andare in missione, nessuno di loro deve servire delle chiamate o svolgere il lavoro di tempio!), 
			Forse è perché non vediamo ancora attraverso gli occhi di Cristo. Non abbiamo ancora capito cosa
			sta cercando di fare di noi. L'anziano Bruce C. Hafen ha scritto: "Il grande Mediatore chiede il nostro pentimento
			non perché dobbiamo "ripagarlo" in cambio del suo pagamento alla giustizia, ma perché il pentimento avvia un processo di sviluppo che,
			con l'aiuto del Salvatore, ci conduce lungo il percorso verso un carattere divino. L'anziano Dallin H. Oaks ha detto, "Il peccatore penitente deve 
			soffrire per i suoi peccati, ma questa sofferenza ha uno scopo diverso dalla punizione o dal pagamento. Il suo scopo è il cambiamento.
			Mettiamola nei termini della nostra analogia: il bambino deve praticare il piano,
			ma questa pratica ha uno scopo diverso dalla punizione o dal pagamento. Il suo scopo è il cambiamento.
			Ho amici cristiani nati di nuovo che mi dicono: "Voi mormoni state cercando di guadagnare la via per il paradiso". Io Dico: "No, 
			non ci stiamo guadagnando il paradiso. Stiamo imparando il paradiso. Ci stiamo preparando. Ci stiamo esercitando per questo ".
			Mi chiedono: "Sei stato salvato per grazia?" Rispondo, "Sì. Assolutamente, totalmente, completamente,
			per fortuna, sì! "Poi faccio loro una domanda che forse non hanno pienamente preso in considerazione: 
			"Sei stato cambiato per grazia?" Sono così entusiasti di essere salvati che forse non stanno pensando abbastanza
			a ciò che verrà dopo. Sono così felici che il debito è stato pagato per non aver considerato perché il debito esisteva in primo luogo. 
			I Santi degli Ultimi Giorni sanno non solo da che cosa Gesù ci ha salvato, ma anche il perchè ci ha salvati.
			Come dice il mio amico Brett Sanders, "Una vita influenzata dalla grazia alla fine inizia ad assomigliare
			alla vita di Cristo." Come dice il mio amico Omar Canals, "Mentre molti cristiani considerano la sofferenza di Cristo
			solo come un enorme favore ch'Egli ha fatto per noi, I Santi degli Ultimi Giorni lo riconoscono anche come un enorme investimento che ha fatto in noi ". 
			Come dice Moroni, la grazia non riguarda solo il fatto di essere salvati. Si tratta anche di diventare
			come il Salvatore. Il miracolo dell'Espiazione non è solo che possiamo vivere dopo la morte,
			ma che possiamo vivere più abbondantemente. Il miracolo dell'Espiazione non consiste solo nel fatto che possiamo essere purificati e consolati
			ma che possiamo essere trasformati. Le Scritture chiariscono che nessuna cosa impura può dimorare con Dio, ma, fratelli e sorelle, 
			nessuna cosa cambiata, nemmeno vorrà. Conosco un giovane che è appena uscito di prigione di nuovo. 
			Ogni volta che due strade divergono in un boschetto, prende quella sbagliata, ogni volta. 
			Quando era un adolescente con tutte le cattive abitudini che un adolescente può avere, ho detto a suo padre: "Abbiamo bisogno di portarlo a EFY".
			Ho lavorato con quel programma dal 1985. Conosco il bene che può fare. Suo padre disse: "Non posso permettermelo".
			Dissi: "Non posso permettermelo nemmeno io, ma fai un po tu, metto un po' io, e poi andremo da mia madre, perché è una vera tenerona".
			Finalmente abbiamo portato il bambino a EFY, ma quanto pensi che sia durato? Neanche un giorno. Alla fine del primo giorno chiamò sua madre
			e disse: "Fammi uscire di qui!". Il paradiso non sarà paradiso 
			per coloro che non hanno scelto di essere celesti.
			In passato avevo una mia idea di come sarebbe stato il giudizio finale, ed era più o meno così: Gesù in piedi lì con un blocco per appunti
			e Brad in piedi dall'altra parte della stanza guardando nervosamente Gesù. Gesù controlla il suo blocchetto e dice "Oh, cavoli! 
			Brad. Non ce l'hai fatta... per due punti!!"
			Brad implora Gesù: "Per favore, controlla ancora una volta la domanda aperta! Ci devono essere due punti che puoi spremere da quella risposta!" 
			È così che l'ho sempre visto. Ma più divento grande e più comprendo questo meraviglioso
			piano di redenzione, più mi rendo conto che nel giudizio finale non sarà 
			il peccatore impenitente a chiedere a Gesù: "Lasciami restare, Lasciami restare". No, probabilmente dirà, 
			"Fammi uscire da qui!" Conoscendo il carattere di Cristo, credo che se qualcuno
			dovesse implorare in quell'occasione, probabilmente sarebbe Gesù che supplica il peccatore impenitente:
			"Per favore, scegli di restare. Per favore, usa la mia Espiazione, non
			solo per essere purificato, ma per essere cambiato in modo che tu voglia restare. "
			Il miracolo dell'Espiazione non è solo che possiamo andare a casa, ma che - miracolosamente - possiamo sentirci a casa lì.
			Se Cristo non richiedesse la fede e il pentimento, allora non ci sarebbe alcun desiderio di cambiare. Pensa ai tuoi amici 
			e familiari che hanno scelto di vivere senza fede e senza pentimento. Non vogliono cambiare. Non stanno cercando di abbandonare il peccato e diventare a proprio agio con Dio.
			Piuttosto, stanno cercando di abbandonare Dio e di adattarsi al peccato. Se Gesù non avesse richiesto le alleanze 
			e conferisse il dono dello Spirito Santo, allora non ci sarebbe stato alcun modo per cambiare. Saremmo lasciati per sempre con sola forza di volontà, 
			senza accesso alla Sua forza. Se Gesù non avesse richiesto la perseveranza fino alla fine, non ci sarebbe stata interiorizzazione
			di quei cambiamenti nel tempo. Sarebbero per sempre superficiali   anziché affondare dentro di noi e diventare parte di noi, parte di ciò che siamo.
			In parole povere, se Gesù non avesse richiesto la pratica, non saremmo mai diventati pianisti.
			La grazia di Cristo è sufficente per aiutarci in questo processo.
			"Ma fratello Wilcox, non ti rendi conto di quanto sia difficile praticare? Non sono semplicemente bravo al piano.
			Schiaccio un sacco di note sbagliate. Mi ci vuole tantissimo per riuscire a farlo bene." Ora aspetta. 
			Non è tutto parte del processo di apprendimento? Quando un giovane pianista colpisce una nota sbagliata, non diciamo che non è degno di continuare a praticare.
			Non lo diciamo. Non ci aspettiamo che sia impeccabile. Ci aspettiamo solo che continui a provare. La perfezione potrebbe essere 
			il suo obiettivo finale, ma per ora possiamo accontentarci di progressi nella giusta direzione. Perché questa prospettiva è così facile da vedere 
			nel contesto dell'apprendimento del piano, ma così difficile da vedere nel contesto dell'apprendimento del paradiso?
			Troppi stanno rinunciando alla Chiesa perché sono stanchi di sentirsi costantemente come se stessero fallendo. Hanno provato in passato,
			ma hanno sempre la sensazione di non essere abbastanza bravi. Non capiscono la grazia.
			Ci sono giovani donne che sanno di essere figlie di un Padre Celeste che le ama e lo amano. Poi si diplomano al liceo 
			e i valori che hanno memorizzato sono messi alla prova. Inciampano. 
			Si lasciano andare un po' troppo, e improvvisamente pensano che sia tutto finito. Queste giovani donne non capiscono la grazia.
			Ci sono giovani uomini che crescono per tutta la vita cantando, "Spero che mi chiamino in missione", e poi in realtà crescono di 40 o 50 centimetri
			e si sfaldano completamente. Completamente andati. 
			Oh diventano scout acquila, si diplomano e vanno al college. Poi improvvisamente questi giovani scoprono quanto sia facile non essere 
			affidabili, leali, disponibili, amichevoli, cortesi, gentili, obbedienti, allegri, parsimoniosi, coraggiosi, puliti o riverenti. Si incasinano. 
			Dicono, "Non lo farò mai più", e poi lo rifanno. Dicono, "Non lo farò mai più",
			e poi lo rifanno. Dicono: "Quanto mi sento stupido. 
			Non lo farò mai più. "E poi lo fanno. Il senso di colpa è quasi insopportabile. 
			Non osano parlare con un vescovo. Invece, si nascondono. Dicono: "Non ce la faccio a essere mormone. Ci ho provato,
			e le aspettative sono semplicemente troppo alte." Così si arrendono. Questi giovani non capiscono la grazia.
			Conosco missionari ritornati che tornano a casa e ritornano alle cattive abitudini che pensavano fossero finite.
			Rompono le promesse fatte davanti a Dio, agli angeli e ai testimoni, e sono convinti che ora non c'è speranza per loro.
			Dicono: "Beh, ho fatto il danno. Non serve nemmeno continuare a provarci." Davvero? 
			Questi giovani hanno trascorso intere missioni ad insegnare alle persone di Gesù Cristo e della Sua Espiazione, e ora pensano che non ci sia più speranza per loro? 
			Questi missionari ritornati non capiscono la grazia. Conosco giovani coppie sposate che scoprono dopo la cerimonia di suggellamento è finita
			che il matrimonio richiede aggiustamenti. Le pressioni della vita aumentano e lo stress inizia a prendere il suo pedaggio finanziariamente,
			spiritualmente e anche sessualmente. Gli errori sono fatti. I muri salgono. E molto presto questi mariti e mogli parlano 
			con avvocati divorzisti piuttosto che parlare tra loro. Queste coppie non capiscono la grazia.
			In tutti questi casi non dovrebbero mai esserci solo due opzioni: la perfezione o la rinuncia. Quando impari il pianoforte,
			le uniche opzioni sarebbero esebirsi alla Carnegie Hall o smettere? No. Crescita e sviluppo richiedono tempo.
			L'apprendimento richiede tempo. Quando comprendiamo la grazia, comprendiamo che Dio è longanime, che il cambiamento è un processo e che il
			pentimento è uno schema nelle nostre vite. Quando comprendiamo la grazia, comprendiamo che le benedizioni dell'Espiazione
			di Cristo sono continue e la Sua forza è perfetta nella nostra debolezza. Quando comprendiamo la grazia, possiamo, 
			come dice in Dottrina e Alleanze, "continuare con pazienza finché [noi] siamo perfezionati" .
			Un giovane mi ha scritto la seguente e-mail: "So che Dio ha tutto il potere, e so che mi aiuterà se sarò degno, ma non sono mai abbastanza degno di chiedere il Suo aiuto.
			Voglio la grazia di Cristo, ma mi trovo sempre bloccato nella stessa posizione
			autolesionistica e impossibile: niente lavoro, niente grazia. "
			L'ho risposto e testimoniato con tutto il mio cuore che Cristo non sta aspettando il traguardo una volta che abbiamo fatto "tutto ciò che possiamo fare". 
			Lui è con noi in ogni momento. L'anziano Bruce C. Hafen ha scritto:
			"Il dono di grazia del Salvatore per noi non è necessariamente limitato nel tempo al" dopo "tutto ciò che possiamo fare. Possiamo ricevere la sua grazia prima, durante e dopo
			il tempo in cui spendiamo i nostri sforzi ". Quindi la grazia non è un motore ausiliario che entra
			in azione una volta esaurita la riserva di carburante. Piuttosto, è la nostra fonte di energia costante. Non è la luce alla fine del tunnel,
			ma la luce che ci fa attraversare il tunnel. La grazia non si raggiunge da qualche parte lungo la strada. Si riceve qui e ora. 
			Non è il tocco finale; è il tocco del Finitore. 
			In dodici giorni celebriamo il Pioneer Day. 
			La prima compagnia di Santi entrò nella Valle del Lago Salato il 24 luglio 1847. Il loro viaggio fu difficile e impegnativo; nonostante ciò, cantarono:
			Santi, venite, senza alcun timor, lieto è il cammin. Anche se duro ̑è questo nostro errar,[La grazia è come il tuo dì].
			"La grazia è come il tuo dì", che frase interessante. L'abbiamo cantato tutti centinaia di volte, ma ci siamo
			fermati a considerare cosa significa? "La grazia sarà come il tuo giorno": 
			la grazia sarà come un giorno. Per quanto possa diventare buia la notte, possiamo sempre contare sul sorgere del sole. 
			Per quanto terribili possano sembrare le nostre prove, i nostri peccati e i nostri errori, possiamo sempre avere
			fiducia nella grazia di Gesù Cristo. Per caso ci guadagnamo l'alba? No.
			Dobbiamo essere degni per poter avere la possibilità di ricominciare? No. 
			Dobbiamo solo accettare queste benedizioni e approfittarne. Come ogni giorno nuovo di zecca, la grazia, la forza abilitante
			di Gesù Cristo, è costante. I pionieri fedeli sapevano di non essere soli.
			Il compito davanti a loro non è mai stato tanto grande quanto il potere alle loro spalle.
			Per concludere, mi ripeto dicendo che la grazia di Cristo è sufficiente - sufficiente per coprire il nostro debito,
			sufficiente a trasformarci, e sufficiente per aiutarci per tutto il processo di trasformazione.
			Il Libro di Mormon ci insegna a fare affidamento esclusivamente su "i meriti, la misericordia e la grazia del Santo Messia". 
			Come iniziamo a provarci, non scopriamo, come alcuni cristiani credono, che Cristo non richiede nulla da noi. 
			Piuttosto, scopriamo la ragione per cui Egli richiede così tanto e la forza di fare tutto ciò che Egli chiede. 
			La grazia non è l'assenza delle grandi aspettative di Dio. 
			La grazia è la presenza della potenza di Dio. L'anziano Neal A. Maxwell 
			una volta ha detto quanto segue: Ora vorrei parlare a quelli colpiti dalla falsa insicurezza, 
			i quali, pur operando devotamente nel Regno, hanno sentimenti ricorrenti di fallimento. . . .
			Questo sentimento di inadeguatezza è... normale. In nessun modo la Chiesa può onestamente descrivere dove dobbiamo ancora andare e ciò che dobbiamo ancora fare
			senza creare un senso di immensa distanza. Questo è un vangelo di grandi aspettative,
			ma la grazia di Dio è sufficiente per ciascuno di noi.
			Come l'anziano Maxwell, porto testimonianza che la grazia di Dio è sufficiente. 
			La grazia di Gesù è sufficiente. È abbastanza.
			È tutto ciò di cui abbiamo bisogno.  Oh, giovani, 
			non arrendetevi.
			Continuate a provare. Non cercate scuse o vie di fuga.
			Cerca il Signore e la Sua forza perfetta. Non cercare qualcuno da incolpare.
			Cerca qualcuno che ti aiuti. Cerca Cristo e, 
			come lo farai, ti prometto che sentirai il potere abilitante 
			che chiamiamo la Sua straordinaria grazia. 
			Lascio questa testimonianza e tutto il mio amore, perché vi amo.
			Come Dio può testimoniarvi, amo i giovani di questa chiesa.
			Ho fiducia in voi. Sto tifando per voi. 
			E non sono l'unico. I vostri genitori stanno tifando per voi, i dirigenti stanno tifando per voi e i profeti stanno tifando per voi.
			e Gesù sta SPINGENDO CON te. Dico questo nel nome di Gesù Cristo. 
			Amen.
			Amen.
			Amen.
			Amen.
			Amen.
			Amen.`
		return text;
	}
	
	//getAjaxText();
	text=getText();
	textByLine = text.split("\n");

	
	document.body.onkeyup = function(e){
	    if(e.keyCode == 32){
	        video.paused ? video.play():video.pause();
	    }
	}

	video.onclick = function(e){
		e.preventDefault();
		video.paused ? video.play():video.pause();
	}


	function yourFunction(){
    // do whatever you like here
    	if ((video.currentTime-starting_time)/seconds_to_skip!=0) {
    		result1.innerHTML=textByLine[parseInt((video.currentTime-starting_time)/seconds_to_skip)+1];
    	}
    	else{
    		result1.innerHTML="Introduzione";
    	}
		setTimeout(yourFunction, 100);
	}
	yourFunction();
	
}