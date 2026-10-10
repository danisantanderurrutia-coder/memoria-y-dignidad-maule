import { useState } from 'react';
import {
  FileText, Globe2, ShieldAlert, BookOpen, ExternalLink,
  MapPin, Landmark, ArrowRight, Info, CheckCircle2, ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface ExhibitionPanel {
  id: string;
  number: string;
  title: { es: string; en: string; de: string };
  subtitle: { es: string; en: string; de: string };
  badge: { es: string; en: string; de: string };
  imageUrl: string;
  imageCaption: { es: string; en: string; de: string };
  leadText: { es: string; en: string; de: string };
  keyFacts: { es: string[]; en: string[]; de: string[] };
  sources: { title: string; url: string; org: string }[];
}

export const EXHIBITION_PANELS: ExhibitionPanel[] = [
  {
    id: 'panel-1-origenes',
    number: '01',
    title: {
      es: 'De Troisdorf a Parral: Orígenes Nazis y la Secta de Schäfer',
      en: 'From Troisdorf to Parral: Nazi Roots & the Schäfer Sect',
      de: 'Von Troisdorf nach Parral: NS-Wurzeln und die Schäfer-Sekte',
    },
    subtitle: {
      es: 'La fuga de Alemania Occidental en 1961 y la fundación del enclave en el fundo El Lavadero',
      en: 'Escape from West Germany in 1961 and the founding of the enclave at Fundo El Lavadero',
      de: 'Flucht aus der BRD 1961 und Gründung der Enklave auf dem Landgut El Lavadero',
    },
    badge: {
      es: '1961–1973 · Orígenes e Infiltración',
      en: '1961–1973 · Origins & Infiltration',
      de: '1961–1973 · Ursprünge & Infiltration',
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Kleine_Zeitung_vom_29._April_1966%2C_Seite_5.jpg',
    imageCaption: {
      es: 'Prensa austríaca (Kleine Zeitung, abril de 1966) documentando la temprana retención de familias por parte de la secta en Parral.',
      en: 'Austrian press (Kleine Zeitung, April 1966) documenting the early illegal retention of families by the sect in Parral.',
      de: 'Österreichische Zeitung (Kleine Zeitung, April 1966) über die frühe Festhaltung von Familienangehörigen in Parral.',
    },
    leadText: {
      es: 'A comienzos de 1961, Paul Schäfer —exsanitario de la Wehrmacht durante la Segunda Guerra Mundial— huyó de la justicia alemana tras órdenes de captura por abusos sexuales a menores. Junto a cientos de adeptos, desembarcó en Chile y adquirió el fundo «El Lavadero» en la precordillera de Parral, creando la «Sociedad Benefactora y Educacional Dignidad». Bajo un manto de devoción cristiana, música coral y supuesta labor social rural, se instauró un régimen totalitario de aislamiento absoluto, trabajo forzado, castigos corporales y separación forzada de familias.',
      en: 'In early 1961, Paul Schäfer—a former Wehrmacht medical orderly during World War II—fled West German prosecution for child sexual abuse. Arriving in Chile with hundreds of followers, he purchased the remote "El Lavadero" estate in the Andean foothills of Parral, registering the "Beneficent and Educational Society Dignity". Behind a facade of Christian piety and free healthcare, Schäfer established a totalitarian compound of slave labor, psychological terror, corporal punishment, and forced separation of children.',
      de: 'Anfang 1961 floh Paul Schäfer – ehemaliger Wehrmachtssanitäter im Zweiten Weltkrieg – vor deutschen Haftbefehlen wegen Kindesmissbrauchs nach Chile. Mit hunderten Anhängern kaufte er das Landgut „El Lavadero“ in den Andenausläufern von Parral und gründete die „Wohltätigkeits- und Bildungsgemeinschaft Würde“. Hinter der Fassade christlicher Frömmigkeit und scheinbarer Entwicklungshilfe errichtete Schäfer ein totalitäres Zwangssystem aus Isolation, Zwangsarbeit, Psychoterror und familialer Trennung.',
    },
    keyFacts: {
      es: [
        'Paul Schäfer huyó de Alemania en 1961 evadiendo órdenes de captura penal emitidas por la fiscalía de Bonn.',
        'El enclave compró más de 17.000 hectáreas en Parral estableciendo alambradas de espino, torres de vigilancia y perros adiestrados.',
        'La comunidad local de Parral fue seducida con un hospital rural gratuito para garantizar el apoyo de hacendados y políticos locales.',
      ],
      en: [
        'Paul Schäfer escaped West German justice in 1961 evading arrest warrants issued by Bonn prosecutors.',
        'The enclave purchased over 17,000 hectares in Parral, installing perimeter barbed wire, watchtowers, and guard dogs.',
        'The surrounding Parral community was courted via a free rural hospital to secure political alliances and tax exemptions.',
      ],
      de: [
        'Paul Schäfer entzog sich 1961 den Haftbefehlen der Bonner Staatsanwaltschaft durch Flucht nach Chile.',
        'Die Enklave erwarb über 17.000 Hektar in Parral und sicherte das Gelände mit Stacheldraht, Wachtürmen und Wachhunden ab.',
        'Die lokale Bevölkerung von Parral wurde durch ein kostenloses Krankenhaus gebunden, um politisches Wohlwollen zu sichern.',
      ],
    },
    sources: [
      { title: 'Deutscher Bundestag Drucksache 18/12943', url: 'https://dserver.bundestag.de/btd/18/129/1812943.pdf', org: 'Deutscher Bundestag' },
      { title: 'Kleine Zeitung (29. April 1966)', url: 'https://commons.wikimedia.org/wiki/File:Kleine_Zeitung_vom_29._April_1966,_Seite_5.jpg', org: 'Pressearchiv' },
    ],
  },
  {
    id: 'panel-2-dina-crimenes',
    number: '02',
    title: {
      es: 'Alianza DINA & Dictadura: Centro Clandestino de Tortura y Armas',
      en: 'DINA & Dictatorship Alliance: Clandestine Torture Center & Arms Hub',
      de: 'DINA-Allianz & Diktatur: Geheimes Folterzentrum und Waffenlager',
    },
    subtitle: {
      es: 'Coordinación criminal entre Manuel Contreras, Paul Schäfer y el cuartel de Parral',
      en: 'Criminal collaboration between Manuel Contreras, Paul Schäfer and the Parral headquarters',
      de: 'Kriminelle Kooperation zwischen Manuel Contreras, Paul Schäfer und der DINA in Parral',
    },
    badge: {
      es: '1973–1990 · Terrorismo de Estado',
      en: '1973–1990 · State Terrorism',
      de: '1973–1990 · Staatsterrorismus',
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Villa_Baviera.jpg',
    imageCaption: {
      es: 'Recinto de Colonia Dignidad en Parral, donde operaron subterráneos de tortura e interrogatorios de la DINA.',
      en: 'Colonia Dignidad compound in Parral, where underground torture facilities and DINA interrogation rooms operated.',
      de: 'Gelände der Colonia Dignidad in Parral, Standort unterirdischer Folterzellen und Verhöreinrichtungen der DINA.',
    },
    leadText: {
      es: 'Tras el golpe de Estado de 1973, Colonia Dignidad puso su infraestructura, telecomunicaciones y personal a disposición de la Dirección de Inteligencia Nacional (DINA). Cientos de prisioneros políticos secuestrados en Santiago, Talca, Linares y Concepción fueron trasladados clandestinamente vendados hasta Parral. En subterráneos acondicionados con aislación acústica, prisioneros sufrieron tormentos sistemáticos mediante corriente eléctrica de alta intensidad, drogas incapacitantes y perros adiestrados.',
      en: 'Following the September 1973 coup d’état, Colonia Dignidad placed its infrastructure, telecommunications, and logistics at the disposal of Pinochet’s secret police (DINA). Hundreds of political prisoners blindfolded and abducted from Santiago, Talca, Linares, and Concepción were transported to Parral. In soundproof underground chambers, detainees endured extreme electrical shock, forced psychiatric drug injections, and interrogations conducted jointly by DINA agents and German colonizers.',
      de: 'Nach dem Militärputsch vom September 1973 stellte die Colonia Dignidad ihre Infrastruktur, Fernmeldetechnik und Logistik der chilenischen Geheimpolizei DINA zur Verfügung. Hunderte politische Gefangene wurden mit verbundenen Augen aus Santiago, Talca, Linares und Concepción nach Parral verschleppt. In schallisolierten Untergeschossen erlitten sie schwerste Elektroschocks, Zwangsmedikation und Misshandlungen durch DINA-Agenten und Führungsmitglieder der Kolonie.',
    },
    keyFacts: {
      es: [
        'Declarada por la Comisión Rettig (1991) y Comisión Valech (2004) como uno de los recintos represivos más brutales del país.',
        'La secta cedió la casona de calle Ignacio Carrera Pinto 262 en Parral como Cuartel DINA (declarado Monumento Histórico en 2022).',
        'Fabricación ilícita de armas bélicas y pruebas con armas químicas (gas sarín con el bioquímico Eugenio Berríos).',
      ],
      en: [
        'Recognized by both Rettig (1991) and Valech (2004) Truth Commissions as one of Chile’s most brutal detention centers.',
        'The sect provided the estate at Ignacio Carrera Pinto 262 in Parral as regional DINA headquarters (declared Historical Monument in 2022).',
        'Clandestine manufacture of automatic military weapons and chemical warfare testing (sarin gas with biochemist Eugenio Berríos).',
      ],
      de: [
        'Von den Wahrheitskommissionen Rettig (1991) und Valech (2004) als einer der berüchtigtsten Folterorte Chiles anerkannt.',
        'Das Anwesen Ignacio Carrera Pinto 262 in Parral diente der DINA als Hauptquartier (2022 zum Nationaldenkmal erklärt).',
        'Illegale Waffenproduktion und Erforschung chemischer Kampfstoffe (Saringas in Kooperation mit DINA-Biochemiker Eugenio Berríos).',
      ],
    },
    sources: [
      { title: 'Informe Rettig (1991) & Valech (2004)', url: 'https://bibliotecadigital.indh.cl/', org: 'INDH Chile' },
      { title: 'Decreto Monumento Histórico Cuartel Parral', url: 'https://www.monumentos.gob.cl', org: 'CMN Chile' },
    ],
  },
  {
    id: 'panel-3-fosas-desaparicion',
    number: '03',
    title: {
      es: 'Fosas del Río Perquilauquén & «Operación Retiro de Televisores»',
      en: 'Perquilauquén River Graves & «Operation TV Removal»',
      de: 'Massengräber am Río Perquilauquén & «Operation Fernseher-Rückzug»',
    },
    subtitle: {
      es: 'Inhumaciones clandestinas, desenterramiento con maquinaria pesada y destrucción de restos óseos',
      en: 'Clandestine burials, exhumation with heavy machinery, and incineration of human remains',
      de: 'Geheime Gräber, Exhumierung mit Baggern und Verbrennung menschlicher Überreste',
    },
    badge: {
      es: '1978 · Ocultamiento y Desaparición',
      en: '1978 · Concealment & Disappearance',
      de: '1978 · Vertuschung & Verschwindenlassen',
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Fosas_en_Colonia_Dignidad_01.JPG',
    imageCaption: {
      es: 'Peritajes judiciales en las fosas clandestinas de Parral ordenados por el Ministro en Visita Jorge Zepeda.',
      en: 'Judicial forensic excavations at the clandestine graves of Parral ordered by Judge Jorge Zepeda.',
      de: 'Gerichtsmedizinische Grabungen an den geheimen Gräbern in Parral unter Leitung von Richter Jorge Zepeda.',
    },
    leadText: {
      es: 'En las quebradas interiores del fundo El Lavadero, decenas de personas detenidas desaparecidas fueron asesinadas e inhumadas en fosas comunes clandestinas. En 1978, tras el hallazgo de los hornos de Lonquén que puso en jaque al régimen militar, la dictadura ordenó la secreta «Operación Retiro de Televisores». Colonos de confianza, empleando retroexcavadoras pesadas, removieron las fosas, quemaron los cadáveres con combustible y fósforo durante días, y arrojaron las cenizas y restos óseos a las corrientes del río Perquilauquén para borrar para siempre la evidencia material del crimen.',
      en: 'In the rugged ravines of the Parral estate, dozens of disappeared political prisoners were executed and buried in mass graves. In late 1978, following the discovery of the Lonquén lime kilns, Pinochet issued the secret directive known as "Operation TV Removal" (Retiro de Televisores). Using heavy earthmoving excavators, senior sect members exhumed the bodies, incinerated them in fire pits with chemical accelerants over several days, and dumped the pulverized ashes and bone fragments into the Perquilauquén River.',
      de: 'In den Schluchten des Landguts El Lavadero wurden Dutzende Verschwundene hingerichtet und in geheimen Massengräbern verscharrt. Ende 1978, nach der Entdeckung der Toten von Lonquén, ordnete die Militärjunta die geheime „Operation Fernseher-Rückzug“ (Operación Retiro de Televisores) an. Mit schweren Baggern der Kolonie wurden die Gräber geöffnet, die Leichen tagelang mit Brandbeschleunigern verbrannt und die Asche in den Fluss Perquilauquén geschüttet, um jede Spur zu vernichten.',
    },
    keyFacts: {
      es: [
        'Causa judicial acreditó el traslado y ejecución de dirigentes de la izquierda chilena y militantes del MIR y MAPU en Parral.',
        'Peritajes del Servicio Médico Legal identificaron más de 30 fosas periciadas y fragmentos óseos calcinados en el predio.',
        'Colonos como Gerhard Mücke confesaron judicialmente la mecánica del desentierro y la quema de restos humanos.',
      ],
      en: [
        'Judicial ruling confirmed the abduction and execution of left-wing leaders and MIR/MAPU militants in Parral.',
        'Forensic analysis by the SML identified over 30 grave sites, projectile fragments, and calcined bones on the property.',
        'Colonists including Gerhard Mücke confessed in court to operating the excavators and incinerating the victims.',
      ],
      de: [
        'Gerichtsurteile belegen die Verschleppung und Hinrichtung führender linker Aktivisten und MIR/MAPU-Mitglieder in Parral.',
        'Die Gerichtsmedizin SML lokalisierte über 30 Grabungsstellen, Projektilhülsen und verkohlte Knochenreste.',
        'Koloniemitglieder wie Gerhard Mücke gestanden vor Gericht die Ausgrabung und systematische Verbrennung der Leichen.',
      ],
    },
    sources: [
      { title: 'Sentencia Rol 2.182-98 (Ministro Jorge Zepeda)', url: 'https://www.pjud.cl', org: 'Poder Judicial de Chile' },
      { title: 'Informe Pericial SML Fosas Colonia Dignidad', url: 'https://www.indh.cl', org: 'SML / PDI' },
    ],
  },
  {
    id: 'panel-4-complicidad-alemana',
    number: '04',
    title: {
      es: 'Complicidad Diplomática, BND y el Reconocimiento Oficial Alemán',
      en: 'Diplomatic Complicity, BND & Germany’s Official Reckoning',
      de: 'Diplomatisches Versagen, BND und die offizielle deutsche Aufarbeitung',
    },
    subtitle: {
      es: 'Décadas de encubrimiento diplomático hasta el histórico mea culpa de Frank-Walter Steinmeier (2016)',
      en: 'Decades of diplomatic cover-up until Frank-Walter Steinmeier’s historic apology in 2016',
      de: 'Jahrzehnte des Wegsehens bis zur historischen Entschuldigung Frank-Walter Steinmeiers (2016)',
    },
    badge: {
      es: '2016–2017 · Responsabilidad Internacional',
      en: '2016–2017 · International Reckoning',
      de: '2016–2017 · Internationale Aufarbeitung',
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Conf%C3%A9rence_Colonia_Dignidad_Unige_22_mai_2025_-_11.jpg',
    imageCaption: {
      es: 'Conferencia europea sobre la memoria y justicia de Colonia Dignidad (Universidad de Ginebra / Europa).',
      en: 'European conference on Colonia Dignidad memory, justice and state accountability (University of Geneva).',
      de: 'Europäische Konferenz zu Colonia Dignidad, Aufarbeitung und staatlicher Verantwortung (Universität Genf).',
    },
    leadText: {
      es: 'Durante casi cuatro décadas, la embajada de la República Federal de Alemania en Santiago y el servicio de inteligencia exterior germano (BND) mantuvieron una actitud de pasividad y complicidad ante los crímenes de Schäfer. Colonos que escaparon heroicamente arriesgando su vida fueron devueltos a la secta por funcionarios consulares. En abril de 2016, el ministro alemán de Asuntos Exteriores Frank-Walter Steinmeier reconoció que diplomáticos alemanes «miraron hacia otro lado» y desclasificó anticipadamente los archivos diplomáticos. En junio de 2017, el Bundestag aprobó por unanimidad una resolución exigiendo memoria, verdad y reparación integral.',
      en: 'For nearly four decades, the West German Embassy in Santiago and the Federal Intelligence Service (BND) maintained an attitude of indifference and complicity toward Schäfer’s atrocities. Runaway members who risked their lives to reach the embassy were handed back to sect leaders. In April 2016, German Foreign Minister Frank-Walter Steinmeier publicly apologized, conceding that German diplomats had "looked the other way" for years, and declassified consular archives. In June 2017, the German Bundestag unanimously demanded truth, victim assistance, and a memorial site.',
      de: 'Über fast vier Jahrzehnte schauten die Botschaft der Bundesrepublik Deutschland in Santiago und der Bundesnachrichtendienst (BND) weg oder kooperierten mit Schäfers Führungsriege. Geflohene Kolonisten, die unter Lebensgefahr Zuflucht in der Botschaft suchten, wurden an die Sekte ausgeliefert. Im April 2016 räumte Bundesaußenminister Frank-Walter Steinmeier ein, die deutsche Diplomatie habe versagt, und gab die Akten vorzeitig frei. Im Juni 2017 beschloss der Deutsche Bundestag interfraktionell und einstimmig die historische Resolution zur Aufarbeitung.',
    },
    keyFacts: {
      es: [
        'Amnistía Internacional denunció en 1977 la existencia del centro de tortura de Parral ante la ONU sin respuesta de la embajada.',
        'En 2016, Alemania desclasificó anticipadamente miles de folios secretos sobre la Colonia Dignidad.',
        'El Bundestag comprometió apoyo financiero para un Centro de Documentación y Sitio de Memoria (Gedenkstätte).',
      ],
      en: [
        'Amnesty International exposed the Parral torture facility to the UN in 1977, met with indifference from Bonn.',
        'In 2016, Germany opened confidential diplomatic archives regarding Colonia Dignidad a decade ahead of schedule.',
        'The Bundestag committed financial and institutional backing for an international Memorial and Documentation Center (Gedenkstätte).',
      ],
      de: [
        'Amnesty International dokumentierte bereits 1977 das Folterzentrum in Parral vor der UNO ohne Konsequenzen aus Bonn.',
        '2016 öffnete das Auswärtige Amt die diplomatischen Akten zehn Jahre vor Ablauf der Regelsperrfrist.',
        'Der Deutsche Bundestag bekräftigte den Auftrag zur Errichtung eines Dokumentations- und Lernortes (Gedenkstätte).',
      ],
    },
    sources: [
      { title: 'Bundestag Beschluss 18/12943 (2017)', url: 'https://dserver.bundestag.de/btd/18/129/1812943.pdf', org: 'Deutscher Bundestag' },
      { title: 'Rede von Bundesaußenminister Frank-Walter Steinmeier (2016)', url: 'https://www.auswaertiges-amt.de', org: 'Auswärtiges Amt' },
    ],
  },
  {
    id: 'panel-5-gedenkstaette-parral',
    number: '05',
    title: {
      es: 'Parral Hoy: El Imperativo Ético de la Gedenkstätte y Sitio de Memoria',
      en: 'Parral Today: The Ethical Imperative of the Gedenkstätte & Memorial',
      de: 'Parral Heute: Der ethische Imperativ der Gedenkstätte und Lernort',
    },
    subtitle: {
      es: 'La lucha contra el turismo negacionista («Villa Baviera») y la demanda de familiares chilenos y alemanes',
      en: 'The fight against negationist tourism ("Villa Baviera") and the demand of Chilean and German families',
      de: 'Der Kampf gegen den geschichtsvergessenen Tourismus („Villa Baviera“) und das Gedenken der Opfer',
    },
    badge: {
      es: 'Presente · Memoria, Verdad y Reparación',
      en: 'Present · Memory, Truth & Reparation',
      de: 'Gegenwart · Erinnerung, Wahrheit & Mahnung',
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Familiares_de_detenidos_desaparecidos_en_Chile.jpg',
    imageCaption: {
      es: 'Familiares de las víctimas de Parral, Talca y Linares marchando con los retratos de los detenidos desaparecidos.',
      en: 'Relatives of victims from Parral, Talca, and Linares marching with portraits of the disappeared.',
      de: 'Angehörige der Opfer aus Parral, Talca und Linares mit Bildern der gewaltsam Verschwundenen.',
    },
    leadText: {
      es: 'Hoy, los terrenos de Parral albergan un hotel y restaurante turístico bajo el nombre «Villa Baviera», lo que constituye para las víctimas y organismos de derechos humanos una afrenta revictimizante y una mercantilización del horror. La Comisión Mixta Chileno-Alemana y las agrupaciones de familiares del Maule exigen la expropiación y afectación prioritaria de las zonas de fosas, el búnker y los sitios de reclusión para erigir un Sitio de Memoria y Centro de Documentación binacional (Gedenkstätte) que eduque a las futuras generaciones sobre los peligros del autoritarismo y la impunidad.',
      en: 'Today, portions of the Parral estate operate as a tourist hotel and restaurant under the brand "Villa Baviera"—an ongoing insult and revictimization for survivors and relatives. The Chilean-German Joint Commission and Maule human rights collectives demand the expropriation of mass grave areas, bunkers, and command centers to establish a binational Memorial and Documentation Center (Gedenkstätte), ensuring that truth and pedagogical memory prevail over commercial exploitation.',
      de: 'Bis heute betreiben Nachfolger auf dem Gelände in Parral ein Hotel und Ausflugslokal unter dem Namen „Villa Baviera“ – für Überlebende und Angehörige eine unerträgliche Verharmlosung und Kommerzialisierung von Verbrechen gegen die Menschlichkeit. Die Deutsch-Chilenische Gemischte Kommission und Opferverbände fordern die Enteignung und Sicherung der Grabungsstellen, des Bunkers und der Haftorte, um eine würdige binationale Gedenkstätte und einen Dokumentationsort nach europäischem Vorbild zu schaffen.',
    },
    keyFacts: {
      es: [
        'Rechazo rotundo de familiares al uso recreativo o gastronómico de un sitio de crímenes de lesa humanidad.',
        'La comuna de Parral es el corazón de la memoria viva y de las movilizaciones anuales de conmemoración.',
        'Propuesta binacional chileno-alemana para un parque de la memoria con acceso público a los archivos judiciales.',
      ],
      en: [
        'Uncompromising condemnation by survivors of commercial tourism on grounds where crimes against humanity occurred.',
        'The municipality of Parral serves as the epicenter of living memory and annual human rights commemorations.',
        'Binational Chilean-German proposal for an open memorial park with unrestricted access to court archives.',
      ],
      de: [
        'Eindeutige Ablehnung jeglicher touristischer Verharmlosung an einem Ort von Verbrechen gegen die Menschlichkeit.',
        'Die Gemeinde Parral ist das lebendige Zentrum der jährlichen Gedenk- und Mahnveranstaltungen.',
        'Deutsch-chilenischer Entwurf für einen öffentlichen Gedenk- und Lernort mit freiem Zugang zu juristischen Archiven.',
      ],
    },
    sources: [
      { title: 'Bericht der Deutsch-Chilenischen Gemischten Kommission', url: 'https://www.auswaertiges-amt.de', org: 'Auswärtiges Amt' },
      { title: 'Agrupación de Familiares del Maule', url: 'https://www.memoriaviva.com', org: 'DDHH Maule' },
    ],
  },
  {
    id: 'panel-6-brigada-regional-sur',
    number: '06',
    title: {
      es: 'Brigada de Inteligencia Regional Sur de la DINA (1974–1977)',
      en: 'DINA Southern Regional Intelligence Brigade (1974–1977)',
      de: 'DINA Regionale Geheimdienstbrigade Süd (1974–1977)',
    },
    subtitle: {
      es: 'La unidad secreta de la DINA, el cuartel de Ignacio Carrera Pinto 262 en Parral y su articulación orgánica con Colonia Dignidad',
      en: 'The clandestine DINA operative unit, the Parral headquarters at Ignacio Carrera Pinto 262, and its coordination with Colonia Dignidad',
      de: 'Die geheime DINA-Operationseinheit, der Stützpunkt in Parral (Ignacio Carrera Pinto 262) und das Terror-Netzwerk mit Colonia Dignidad',
    },
    badge: {
      es: '1974–1977 · Terrorismo de Estado y Represión Regional',
      en: '1974–1977 · State Terrorism & Regional Repression',
      de: '1974–1977 · Staatsterrorismus & Regionale Verfolgung',
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Familiares_de_detenidos_desaparecidos_en_Chile.jpg',
    imageCaption: {
      es: 'Agrupaciones de familiares del Maule frente a los centros de detención y el Cuartel de la Brigada Sur en Parral.',
      en: 'Maule human rights collectives marching outside detention hubs and the Southern Brigade Parral base.',
      de: 'Angehörigeninitiativen aus der Region Maule im Protest vor Haftorten und der DINA-Kaserne in Parral.',
    },
    leadText: {
      es: 'Entre 1974 y 1977, la Dirección de Inteligencia Nacional (DINA) desplegó en las provincias del centro-sur del país la «Brigada de Inteligencia Regional Sur», comandada por el mayor de Ejército Fernando Gómez Segovia (alias «El Padrino»). Su base operativa clandestina funcionó en la casona urbana de calle Ignacio Carrera Pinto N° 262 en Parral, un inmueble de fachada continua cedido formalmente por la Sociedad Benefactora y Educacional Dignidad de Paul Schäfer. Desde este cuartel general y conectados por antenas de radio con los búnkeres de Colonia Dignidad, agentes de la DINA y colonos coordinaron la persecución, interrogatorios bajo tortura y desaparición sistemática de militantes del MIR, Partido Socialista, Partido Comunista y dirigentes campesinos del Maule y Biobío, operando como centro de acopio y antesala del exterminio en el fundo El Lavadero.',
      en: 'Between 1974 and 1977, Pinochet’s secret police (DINA) operated the "Southern Regional Intelligence Brigade" (Brigada de Inteligencia Regional Sur) across south-central Chile, commanded by Army Major Fernando Gómez Segovia (alias "El Padrino"). Its clandestine headquarters was established in the town of Parral at Ignacio Carrera Pinto 262—a property formally owned and made available by Paul Schäfer’s "Beneficent and Educational Society Dignity". Linked via high-frequency radio transmitters directly to Colonia Dignidad’s underground bunkers, DINA agents and sect operatives orchestrated abductions, severe torture, and forced disappearances of leftist dissidents, labor leaders, and peasant activists from Maule, Biobío, and Concepción, using the urban house as a sorting and transit facility before execution in the Andean enclave.',
      de: 'Zwischen 1974 und 1977 unterhielt die chilenische Geheimpolizei DINA im südlichen Zentralchile die „Regionale Geheimdienstbrigade Süd“ (Brigada de Inteligencia Regional Sur), befehligt von Heeresmajor Fernando Gómez Segovia (Deckname „El Padrino“). Ihre geheime Operationsbasis lag mitten im Stadtgebiet von Parral in der Calle Ignacio Carrera Pinto 262 – einer Liegenschaft, die offiziell der „Wohltätigkeits- und Bildungsgemeinschaft Würde“ von Paul Schäfer gehörte und der DINA überlassen wurde. Über Kurzwellenfunk direkt mit den Bunkern der Colonia Dignidad verbunden, koordinierte diese Brigade Festnahmen, grausame Folterungen und das gewaltsame Verschwindenlassen von MIR-, Sozialisten-, Kommunisten- und Bauernführern aus den Regionen Maule und Biobío als Drehscheibe vor der endgültigen Verschleppung in die Enklave.',
    },
    keyFacts: {
      es: [
        'Comandada por Fernando Gómez Segovia («El Padrino»), subordinado directo del director de la DINA Manuel Contreras Sepúlveda.',
        'La casona de Ignacio Carrera Pinto 262 en Parral fue declarada Monumento Histórico Nacional por el Estado chileno en 2022.',
        'Servía de puente operativo directo entre los centros de secuestro del Maule/Biobío y los subterráneos de tortura de Schäfer.',
        'Antenas y equipos de radiocomunicación suministrados y operados por especialistas técnicos alemanes de la secta.',
      ],
      en: [
        'Commanded by Major Fernando Gómez Segovia ("El Padrino"), answering directly to DINA chief Manuel Contreras.',
        'The compound at Ignacio Carrera Pinto 262 in Parral was declared a National Historical Monument by Chile in 2022.',
        'Functioned as the operational pipeline transferring abducted dissidents from Maule/Biobío directly into Schäfer’s compound.',
        'High-frequency radio communications were installed and serviced by German technical specialists from the sect.',
      ],
      de: [
        'Kommandiert von Major Fernando Gómez Segovia („El Padrino“), direkt unterstellt unter DINA-Chef Manuel Contreras.',
        'Das Anwesen Ignacio Carrera Pinto 262 in Parral wurde 2022 vom chilenischen Staat zum Nationalen Historischen Denkmal erklärt.',
        'Fungierte als operative Brücke für die Verschleppung von Gefangenen aus Maule und Biobío in die Folterkeller der Kolonie.',
        'Sende- und Fernmeldetechnik wurde von deutschen Technikern der Sekte eingerichtet und gewartet.',
      ],
    },
    sources: [
      { title: 'Decreto N° 16 Monumento Histórico Cuartel Parral (2022)', url: 'https://www.monumentos.gob.cl', org: 'CMN Chile' },
      { title: 'Causa Rol 2.182-98 (Ministro Jorge Zepeda)', url: 'https://www.pjud.cl', org: 'Poder Judicial de Chile' },
      { title: 'Ficha Cuartel Parral DINA Brigada Sur', url: 'https://www.memoriaviva.com', org: 'Memoria Viva' },
    ],
  },
];

interface Props {
  onIrAlSitioEnMapa?: (sitioId: string) => void;
}

export default function ColoniaDignidadExhibition({ onIrAlSitioEnMapa }: Props) {
  const { lang, setLang } = useLanguage();
  const [activePanelId, setActivePanelId] = useState(EXHIBITION_PANELS[0].id);

  const activePanel = EXHIBITION_PANELS.find((p) => p.id === activePanelId) || EXHIBITION_PANELS[0];

  const tExhibition = {
    es: {
      badge: 'Exposición Especial Internacional · Parral & Colonia Dignidad',
      mainTitle: 'Colonia Dignidad: Enclave Nazi, Dictadura y Memoria Binacional',
      mainSubtitle: 'Dossier documental y paneles curatoriales para presentaciones y conferencias en Alemania y Europa',
      curatedPanels: 'Paneles Curatoriales (1–6)',
      keyEvidence: 'Evidencias y Hechos Comprobados',
      judicialSources: 'Fuentes Oficiales y Archivos de Estado',
      viewSiteOnMap: 'Ver Fosas y Recinto en el Mapa',
      printPanel: 'Imprimir Ficha de Panel',
      parralRoleNotice: 'Relevancia de Parral: Comuna precordillerana del Maule donde operó el enclave de Paul Schäfer, las fosas clandestinas de la DINA y el Cuartel Ignacio Carrera Pinto 262.',
      internationalLangNotice: 'Diseñado para presentación trilingüe (Español / English / Deutsch) ante auditorios académicos, parlamentarios y comités de memoria en Europa.',
    },
    en: {
      badge: 'Special International Exhibition · Parral & Colonia Dignidad',
      mainTitle: 'Colonia Dignidad: Nazi Enclave, Dictatorship & Binational Memory',
      mainSubtitle: 'Curatorial documentary dossier designed for conferences and exhibitions in Germany and Europe',
      curatedPanels: 'Curatorial Panels (1–6)',
      keyEvidence: 'Key Forensic & Historical Evidence',
      judicialSources: 'Official State Archives & Court Rulings',
      viewSiteOnMap: 'View Graves & Compound on Map',
      printPanel: 'Print Panel Document',
      parralRoleNotice: 'Importance of Parral: Maule Andean municipality that housed Schäfer’s enclave, DINA mass graves, and the Ignacio Carrera Pinto 262 secret headquarters.',
      internationalLangNotice: 'Designed for trilingual presentation (Spanish / English / German) before academic, parliamentary, and human rights audiences in Europe.',
    },
    de: {
      badge: 'Sonderausstellung International · Parral & Colonia Dignidad',
      mainTitle: 'Colonia Dignidad: NS-Enklave, Diktatur & Deutsch-Chilenische Verantwortung',
      mainSubtitle: 'Dokumentarisches Dossier und Ausstellungstafeln für Vorträge und Gedenkveranstaltungen in Deutschland und Europa',
      curatedPanels: 'Kuratierte Ausstellungstafeln (1–6)',
      keyEvidence: 'Historische & Forensische Schlüsselfakten',
      judicialSources: 'Offizielle Staatsakten & Gerichtsurteile',
      viewSiteOnMap: 'Ort & Gräber auf der Karte anzeigen',
      printPanel: 'Tafel als PDF / Drucken',
      parralRoleNotice: 'Bedeutung von Parral: Vorkordillerengemeinde der Region Maule, Standort von Schäfers Enklave, DINA-Massengräbern und dem DINA-Quartier Ignacio Carrera Pinto 262.',
      internationalLangNotice: 'Konzipiert für dreisprachige Präsentationen (Spanisch / Englisch / Deutsch) vor wissenschaftlichen, parlamentarischen und zivilgesellschaftlichen Gremien.',
    },
  }[lang];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* Encabezado Superior con Barra de Idiomas Rápida */}
      <div className="rounded-2xl border border-terra-500/30 bg-gradient-to-br from-stone-900 via-zinc-900 to-stone-950 p-6 sm:p-8 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-terra-500/40 bg-terra-500/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-terra-400 uppercase">
            <Globe2 size={14} /> {tExhibition.badge}
          </span>

          {/* Selector de idioma destacado para diplomáticos y expositores */}
          <div className="flex items-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-800/80 p-1 text-xs font-bold shadow-inner">
            <span className="px-2 text-zinc-400">Sprache / Language:</span>
            <button
              onClick={() => setLang('es')}
              className={`rounded px-2.5 py-1 transition ${lang === 'es' ? 'bg-terra-600 text-white shadow' : 'text-zinc-300 hover:text-white'}`}
            >
              ES
            </button>
            <button
              onClick={() => setLang('en')}
              className={`rounded px-2.5 py-1 transition ${lang === 'en' ? 'bg-terra-600 text-white shadow' : 'text-zinc-300 hover:text-white'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('de')}
              className={`rounded px-2.5 py-1 transition ${lang === 'de' ? 'bg-terra-600 text-white shadow' : 'text-zinc-300 hover:text-white'}`}
            >
              DE (Deutsch)
            </button>
          </div>
        </div>

        <h1 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-zinc-50">
          {tExhibition.mainTitle}
        </h1>
        <p className="mt-2 font-serif text-lg text-ocre-400">
          {tExhibition.mainSubtitle}
        </p>

        {/* Destacado Parral & Contexto Europeo */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 text-xs">
          <div className="flex items-start gap-2.5 rounded-lg border border-amber-900/40 bg-amber-950/20 p-3 text-amber-200/90">
            <MapPin size={18} className="mt-0.5 shrink-0 text-amber-400" />
            <span>{tExhibition.parralRoleNotice}</span>
          </div>
          <div className="flex items-start gap-2.5 rounded-lg border border-cyan-900/40 bg-cyan-950/20 p-3 text-cyan-200/90">
            <Info size={18} className="mt-0.5 shrink-0 text-cyan-400" />
            <span>{tExhibition.internationalLangNotice}</span>
          </div>
        </div>
      </div>

      {/* Selector de Paneles Curatoriales */}
      <div className="mt-8">
        <h2 className="font-serif text-lg font-bold text-zinc-200 flex items-center gap-2">
          <BookOpen size={20} className="text-terra-500" /> {tExhibition.curatedPanels}
        </h2>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {EXHIBITION_PANELS.map((p) => {
            const isActive = p.id === activePanelId;
            return (
              <button
                key={p.id}
                onClick={() => setActivePanelId(p.id)}
                className={`flex flex-col text-left rounded-xl p-3 border transition-all ${
                  isActive
                    ? 'border-terra-500 bg-terra-950/30 text-white ring-2 ring-terra-500/50 shadow-md'
                    : 'border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-terra-400' : 'text-zinc-500'}`}>
                    PANEL {p.number}
                  </span>
                  {isActive && <CheckCircle2 size={14} className="text-terra-400" />}
                </div>
                <span className="mt-1 font-serif text-sm font-semibold line-clamp-2 leading-snug">
                  {p.title[lang]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Contenido Detallado del Panel Seleccionado */}
      <article className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-terra-500/20 font-mono text-lg font-black text-terra-400 border border-terra-500/30">
              {activePanel.number}
            </span>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-ocre-400">
                {activePanel.badge[lang]}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-50">
                {activePanel.title[lang]}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {onIrAlSitioEnMapa && (
              <button
                onClick={() =>
                  onIrAlSitioEnMapa(
                    activePanel.id === 'panel-6-brigada-regional-sur'
                      ? 'dina-parral-carrera-pinto'
                      : 'fosas-perquilauquen-parral'
                  )
                }
                className="btn-ghost text-xs py-2 px-3 border border-zinc-700 hover:border-terra-500 text-zinc-300 hover:text-terra-400"
              >
                <MapPin size={14} /> {tExhibition.viewSiteOnMap}
              </button>
            )}
            <button
              onClick={() => window.print()}
              className="btn-ghost text-xs py-2 px-3 border border-zinc-700 hover:border-zinc-500 text-zinc-300"
              title="Print panel"
            >
              <FileText size={14} /> {tExhibition.printPanel}
            </button>
          </div>
        </div>

        <p className="mt-4 font-serif text-lg italic text-zinc-300">
          {activePanel.subtitle[lang]}
        </p>

        {/* Layout de Imagen y Texto Principal */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-zinc-800 bg-black/60 shadow-inner">
              <img
                src={activePanel.imageUrl}
                alt={activePanel.title[lang]}
                className="w-full h-72 sm:h-80 object-cover object-center transition duration-500 hover:scale-105"
              />
              <p className="p-3 text-xs text-zinc-400 bg-zinc-950/80 border-t border-zinc-800/80">
                {activePanel.imageCaption[lang]}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="prose prose-invert max-w-none">
              <p className="font-serif text-base sm:text-lg leading-relaxed text-zinc-200">
                {activePanel.leadText[lang]}
              </p>
            </div>

            {/* Puntos Clave Comprobados */}
            <div className="mt-6 rounded-xl border border-zinc-800/80 bg-zinc-950/60 p-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-terra-400 flex items-center gap-1.5">
                <ShieldAlert size={14} /> {tExhibition.keyEvidence}
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                {activePanel.keyFacts[lang].map((fact, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ChevronRight size={16} className="mt-0.5 shrink-0 text-ocre-400" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Fuentes Oficiales y Documentación */}
        <div className="mt-8 border-t border-zinc-800 pt-5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
            <Landmark size={14} /> {tExhibition.judicialSources}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {activePanel.sources.map((s, idx) => (
              <a
                key={idx}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-800/70 px-3 py-1.5 text-xs text-zinc-300 transition hover:border-terra-500 hover:text-terra-400"
              >
                <ExternalLink size={12} />
                <span className="font-semibold text-zinc-200">{s.org}:</span> {s.title}
              </a>
            ))}
          </div>
        </div>
      </article>

      {/* Bloque Informativo Final: Memoria Binacional */}
      <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 text-center text-xs text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span>
          © Memoria y Dignidad Maule · Dossier de Investigación Colonia Dignidad & Parral · Auswärtiges Amt / Deutscher Bundestag / Poder Judicial de Chile
        </span>
        <button
          onClick={() => {
            const nextIdx = (EXHIBITION_PANELS.findIndex((p) => p.id === activePanelId) + 1) % EXHIBITION_PANELS.length;
            setActivePanelId(EXHIBITION_PANELS[nextIdx].id);
          }}
          className="btn-primary text-xs py-2 px-4 whitespace-nowrap"
        >
          {lang === 'de' ? 'Nächste Tafel' : lang === 'en' ? 'Next Panel' : 'Siguiente Panel'} <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
