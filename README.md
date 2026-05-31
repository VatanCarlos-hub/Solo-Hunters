# 🏆 Solo Hunters

> Live Leaderboard für Bitaxe Solo Miner – vergleich Hashrate und Best Difficulty in Echtzeit.

**🟠 Live Demo:** [solo-hunters.vercel.app](https://solo-hunters.vercel.app)

-----

## Was ist Solo Hunters?

Solo Hunters ist ein öffentliches Leaderboard für Solo Bitcoin Miner. Trag deine BTC-Adresse ein und vergleich dich mit anderen Bitaxe-Besitzern weltweit.

**Wer kommt einem Bitcoin Block am nächsten?** 🎰

-----

## Features

- 🏆 **Best Difficulty Ranking** – wer war am dichtesten an einem Block dran
- ⚡ **Live Hashrate** – aktuelle Mining Power
- 🔥 **Since Boot Stats** – Performance seit letztem Reset
- 📱 **Mobile-First Design** – funktioniert auf jedem Gerät
- 💾 **localStorage** – deine Hunter-Liste bleibt gespeichert
- 🔄 **Auto-Refresh** – Stats aktualisieren alle 60 Sekunden
- 🟠 **AxeOS-Vibe** – Design passend zum Bitaxe Look

-----

## Wie funktioniert’s?

1. Trag einen **Nickname** und eine **BTC-Adresse** ein
1. Klick **TRACK**
1. Solo Hunters holt Live-Stats von [public-pool.io](https://web.public-pool.io)
1. Vergleich dich im Leaderboard

Anonyme Variante – kein Account, keine Anmeldung.

-----

## Tech Stack

- **Frontend:** Single-File HTML + Vanilla JS
- **API Proxy:** Vercel Serverless Function (umgeht CORS)
- **Data Source:** [Public-Pool.io](https://github.com/benjamin-wilson/public-pool) API
- **Hosting:** Vercel
- **Persistenz:** Browser localStorage

-----

## Lokal testen

Einfach `index.html` im Browser öffnen. Für API-Proxy lokal: `vercel dev`.

-----

## Limitations

- Aktuell nur **Public-Pool.io** Miner sichtbar (CKpool & Co. kommen vielleicht später)
- Stats kommen direkt von Public-Pool – wenn deren API down ist, zeigt das Tool “offline”
- BTC-Adressen sind öffentlich auf der Blockchain – Privacy-Hinweis beachten

-----

## Solo Mining Tipps

- **Bitaxe Gamma:** ~1.1 TH/s, perfekt fürs Lottery Mining
- **Stromkosten DE:** ~3-4€/Monat bei 17W
- **Block-Chance pro Jahr:** ~1 zu 16.900 mit 1 TH/s
- **Mehr Bitaxes = mehr Chancen** (aber nie garantiert)

-----

## Roadmap

- [ ] CKpool Integration
- [ ] DACH/Country Filter mit Flag-Picker
- [ ] Twitter Share Cards
- [ ] Block-Found Celebration Alerts
- [ ] Daily Champion Bot
- [ ] Multi-Worker Support pro Adresse

-----

## Mitmachen

Pull Requests willkommen! Issues für Feature-Wünsche und Bugs gerne.

-----

## Credits

- Built by **[@__KimMinJae__](https://x.com/__KimMinJae__)** 🟠
- Data via [Public-Pool](https://github.com/benjamin-wilson/public-pool) by Benjamin Wilson
- Inspired by the Bitaxe & Solo Mining community

-----

## Lizenz

MIT – mach was du willst, aber Credits sind nett. ♥

-----

*Built with ♥ for the Solo Mining community. Stay humble, stack sats, mine solo.* 🟠⛏️
