---
id: logging-in
title: Inloggen
sidebar_label: Inloggen
sidebar_position: 2
---

# Inloggen

Om OpenTMS te gebruiken heb je een account nodig binnen de tenant van je organisatie. Heb je nog geen account? Vraag je beheerder om er een voor je aan te maken.

## Stappen

1. Open OpenTMS in je browser via de URL die je van je organisatie hebt gekregen (meestal iets als `https://<jouw-tenant>.opentms.nl`).
2. Vul indien nodig je **tenantnaam** in. Hiermee identificeer je jouw organisatie binnen OpenTMS.
3. Vul je **gebruikersnaam of e-mailadres** en **wachtwoord** in.
4. Klik op **Inloggen**.

<figure>

![Inlogscherm — voorbeeld](./img/01-login.png)

<figcaption>Het OpenTMS-inlogscherm.</figcaption>
</figure>

Na het inloggen kom je terecht op het **Dashboard**.

## Wachtwoord vergeten?

Klik op **Wachtwoord vergeten?** op het inlogscherm en vul je e-mailadres in. OpenTMS stuurt je een herstellink. De link is beperkt geldig — open hem in dezelfde browser om het herstel af te ronden.

## Twee-factor-authenticatie

Als je organisatie twee-factor-authenticatie verplicht stelt, vraagt OpenTMS direct na je wachtwoord om een verificatiecode. Vul de code in uit je authenticator-app (of de code die je per e-mail of SMS hebt ontvangen, afhankelijk van de configuratie).

## Single sign-on (SSO)

Gebruikt je organisatie single sign-on, dan zie je op het inlogscherm een extra knop (bijvoorbeeld **Inloggen met Microsoft**). Klik erop en doorloop de flow van je provider — je hoeft geen apart OpenTMS-wachtwoord in te vullen.

## Uitloggen

Open het [gebruikersmenu](./navigating/user-menu) rechtsboven en klik op **Uitloggen**.

:::warning Openbare computers
Log altijd uit voordat je een gedeelde computer verlaat. OpenTMS-sessies blijven open totdat je uitlogt of de sessie verloopt.
:::
