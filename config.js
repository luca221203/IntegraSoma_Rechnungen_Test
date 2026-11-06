/* ============================================================
   Einstellungen für diese Kundin.
   Für eine neue Kundin: diese Datei anpassen, logo.svg und die
   Icons (icon-192.png, icon-512.png, apple-touch-icon.png,
   favicon.png) austauschen. index.html bleibt unverändert.
   ============================================================ */
window.APP_CONFIG = {
  appName:    'IntegraSoma Rechnungen',
  brandName:  'IntegraSoma',
  logo:       'logo.svg',
  /* Bezeichnung vor der Umsatzsteuer-Identifikationsnummer in der Fußzeile */
  ustidLabel: 'USt-IdNr.',
  docTitle:   'HONORARRECHNUNG',
  filePrefix: 'IntegraSoma',
  /* Muss pro Kundin eindeutig sein, sonst teilen sich zwei Apps
     im selben Browser die Daten. Später nie mehr ändern. */
  storageKey: 'integrasoma-rechnungen-v1',

  /* Startwerte, danach in der App unter Einstellungen änderbar */
  settings: {
    name:         'Susanne Kreutz Lamm',
    kontoinhaber: 'Susanne Kreutz',
    strasse:      '76, rue d’Eich',
    ort:          'L - 1460 Luxembourg',
    email:        'S.KreutzLamm@IntegraSoma.lu',
    web:          'www.IntegraSoma.lu',
    tel:          'Tel. 00352 621 642 123',
    ustid:        '',
    bank:         'Spuerkess',
    iban:         'LU33 0019 8255 5538 1000',
    bic:          'BCEELULL',
    mwst:         17,
    zahlungsziel: 14,
    mahnfrist:    7
  },
  leistungen: [
    { name: 'WingWave Coaching', netto: 153.85 }
  ]
};
