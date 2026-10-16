// Einstellungen der Organisations-App – diese Datei einmal anpassen.
window.HALLER_CONFIG = {
  // Anwendungs-ID (Client-ID) aus der App-Registrierung in Microsoft Entra ID:
  clientId: "ab08e270-4def-4812-b7ed-e2b77886bcb8",
  // Verzeichnis-ID (Mandant) von Elektro A. Haller:
  tenantId: "a1ac1906-a3a1-4bdb-9cf6-18314ec57e3f",
  // SharePoint-Site, auf der die Listen liegen:
  siteHost: "elektrohaller.sharepoint.com",
  sitePath: "/sites/Elektro.a.haller",
  // Namen der Listen (werden beim ersten Start angelegt, falls sie fehlen):
  lists: { config:"Org Einstellungen", people:"Org Personen", bereiche:"Org Bereiche", abteilungen:"Org Abteilungen", stufen:"Org Stufen" },
  // Aktualisierung des gemeinsamen Stands in Sekunden:
  refreshSeconds: 20
};
