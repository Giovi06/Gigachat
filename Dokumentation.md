# LA1301

Unity 2D Street Fighter

Giovanni Innamorato, Giuliano Martullo, Steven Salie

| Datum    | Version | Zusammenfassung                                                          |
| -------- | ------- | ------------------------------------------------------------------------ |
| 15.11.23 | 0.0.1   | Wir haben uns Informiert was wir machen sollen und haben uns in den Programmiersprachen aufgefrischt.|
| 22.11.23 | 0.0.2   | Wir haben zusammen eine Planung erstellt mit all den Zielen die wir erreichen wollen und wer diese machen soll. |
| 29.11.23 | 0.1     | Wir haben uns gründlich und intensiv an die recherche gesetzt wie man eine Web-Applikation zu erstellen |
| 06.12.23 | 0.1     | Wir haben das Grundgerüst für unsere Webseite verbessert und das Design entschieden.|
| 13.12.23 | 1.0.0   | Einloggen in die Chats funktioniert, das senden von Nachrichten funktioniert und man kann mit mehreren Benutzern zusammen schreiben auf einem Gerät. |

## 1 Informieren

### 1.1 Ihr Projekt

Wir haben in Visual Studio Code eine Applikation erstellt in der man in verschiedenen Räumen zusammen kommunizieren kann.

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ (Funktional oder Qualität) | Beschreibung                                                                                                                            |
| ---- | --------------- | --- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Muss            |  F  |  Als Benutzer möchte ich mich auf der Webseite anmelden können, um Zugang zu den Chaträumen zu erhalten.     |
| 2    | Muss            |  F  |  Als Benutzer möchte ich Nachrichten in den Chaträumen senden können, um mit anderen Benutzern zu kommunizieren.        |
| 3    | Muss            |  F  |  Als Benutzer möchte ich in verschiedenen Chaträumen gleichzeitig schreiben können, um mit mehreren Gruppen gleichzeitig zu interagieren. |
| 4    | Muss            |  F  |  Als Benutzer möchte ich, dass die Webseite ein ansprechendes Design hat, um meine Benutzererfahrung zu verbessern. |
| 5    | Muss            |  F  |  Als Benutzer möchte ich sehen können, wer in den Chaträumen online ist, um zu wissen, mit wem ich gerade kommuniziere         |
| 6    | Muss            |  F  |  Als Benutzer möchte ich, dass die Webseite stabil und zuverlässig funktioniert, um eine unterbrechungsfreie Kommunikation zu gewährleisten.                                |
| 7    | Muss            |  F  |  Als Benutzer möchte ich, dass meine persönlichen Daten sicher sind, um meine Privatsphäre zu schützen.                                      |
| 8    | Muss            |  Q  |  Als Benutzer möchte ich die Möglichkeit haben, private Nachrichten an andere Benutzer zu senden, um vertrauliche Gespräche zu führen.      |

### 1.3 Testfälle

| TC-№ | Ausgangslage                                                          | Eingabe                                                                             | Erwartete Ausgabe                                                                                             |
| ---- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| 1.1  | Das Spiel läuft.                                                      | Der Spieler versucht, den Charakter zu bewegen.                                     | Der Charakter bewegt sich entsprechend der Eingabe des Spielers.                                              |
| 2.1  | Das Spiel befindet sich im Hauptmenü.                                 | Der Spieler klickt auf die Starttaste im Hauptmenü.                                 | Das Spiel startet und die Spielumgebung wird geladen.                                                         |
| 3.1  | Das Spiel läuft und der Spielercharakter hat einen Gesundheitsbalken. | Der Spielercharakter erleidet Schaden.                                              | Der Gesundheitsbalken des Charakters wird aktualisiert, um den verlorenen Gesundheitszustand anzuzeigen.      |
| 4.1  | Das Spiel läuft.                                                      | Der Spieler beobachtet die Bewegungen des Charakters.                               | Der Charakter zeigt flüssige und ansprechende Animationen entsprechend seinen Aktionen.                       |
| 5.1  | Das Spiel läuft und der Spielercharakter kann gegen Gegner kämpfen.   | Der Spielercharakter greift einen Gegner an.                                        | Der Gegner erleidet Schaden, die Healthbar sinkt.                                                             |
| 6.1  | Das Spiel läuft und der Spieler hat das Spiel beendet.                | Der Spieler beendet das Spiel oder erreicht ein Game Over.                          | Die Game Over Scene wird angezeigt, um den Spieler über das Spielende zu informieren.                         |
| 8.1  | Der Spielercharakter kann sich bewegen.                               | Der Spieler versucht, den Charakter ducken zu lassen und sich langsamer zu bewegen. | Der Charakter duckt sich und bewegt sich langsamer, um es dem Spieler zu ermöglichen, Angriffen auszuweichen. |
|      |                                                                       |                                                                                     |                                                                                                               |

## 2 Planen

| AP-№ | Frist    | Zuständig | Beschreibung                                                                                                          | geplante Zeit |
| ---- | -------- | --------- | --------------------------------------------------------------------------------------------------------------------- | ------------- |
| 1.A  | 20.09.23 | Giovanni  | Implementierung des grundlegenden Player-Movements, einschliesslich Bewegung nach links und rechts.                   | 180'          |
| 1.B  | 20.09.23 | Giovanni  | Implementierung von zusätzlichen Bewegungsaktionen wie Springen und Ducken.                                           | 180'          |
| 2.A  | 18.10.23 | Steven    | Erstellung des Hauptmenüs mit Optionen wie "Play", "Options" und "Quit."                                              | 180'          |
| 3.A  | 18.10.23 | Giuliano  | Implementierung der Healthbar, die den Gesundheitszustand des Spielers anzeigt.                                       | 180'          |
| 4.A  | 18.10.23 | Giovanni  | Implementierung von grundlegenden Animationen für den Spielercharakter, einschliesslich Laufen, Springen und Ducken.  | 120'          |
| 5.A  | 1.11.23  | Giovanni  | Implementierung von Grundmechaniken für den Spielerkampf, einschliesslich Angriff und Verteidigung.                   | 240'          |
| 6.A  | 1.11.23  | Steven    | Erstellung der Game Over Scene, die dem Spieler das Spielende anzeigt.                                                | 120'          |
| 7.A  | 1.11.23  | Giuliano  | Hinzufügen von Soundeffekten und Hintergrundmusik, um das Spielerlebnis zu bereichern.                                | 180'          |
| 8.A  | 1.11.23  | Giovanni  | Implementierung der Fähigkeit des Spielers, sich zu ducken und dabei langsamer zu bewegen, um Angriffen auszuweichen. | 180'          |
| 9.A  | 08.11.23 | Alle      | Dokumentation schreiben                                                                                               | 30 '          |
| 9.B  | 08.11.23 | Alle      | Portfolio schreiben                                                                                                   | 90'           |

## 3 Realisieren

| AP-№ | Datum    | Zuständig                  | Geplante Zeit | Tatsächliche Zeit |
| ---- | -------- | -------------------------- | ------------- | ----------------- |
| 1.A  | 20.09.23 | Giovanni                   | 180 Minuten   | 180 Minuten       |
| 1.B  | 20.09.23 | Giovanni                   | 180 Minuten   | 180 Minuten       |
| 9.A  | 20.09.23 | Giovanni                   | 10            | 10                |
| 2.A  | 18.10.23 | Steven                     | 180 Minuten   | 180 Minuten       |
| 3.A  | 18.10.23 | Giuliano                   | 180 Minuten   | 180 Minuten       |
| 4.A  | 18.10.23 | Giovanni                   | 120 Minuten   | 120 Minuten       |
| 9.A  | 18.10.23 | Giuliano                   | 10            | 10                |
| 5.A  | 01.11.23 | Giovanni                   | 240 Minuten   | 240 Minuten       |
| 6.A  | 01.11.23 | Steven                     | 120 Minuten   | 120 Minuten       |
| 7.A  | 01.11.23 | Giuliano                   | 180 Minuten   | 180 Minuten       |
| 8.A  | 01.11.23 | Giovanni                   | 180 Minuten   | 180 Minuten       |
| 9.A  | 01.11.23 | Steven                     | 10            | 10                |
| 9.B  | 08.11.23 | Steven, Giovanni, Giuliano | 90 Minuten    | 90 Minuten        |

## 4 Kontrollieren

### Testprotokoll

| TC-№ | Datum | Resultat | Tester   |
| ---- | ----- | -------- | -------- |
| 1.1  | 08.11 | OK       | Giuliano |
| 2.1  | 08.11 | OK       | Giuliano |
| 3.1  | 08.11 | OK       | Giuliano |
| 4.1  | 08.11 | OK       | Giuliano |
| 5.1  | 08.11 | OK       | Giuliano |
| 6.1  | 08.11 | OK       | Giuliano |
| 8.1  | 08.11 | NOK      | Giuliano |

