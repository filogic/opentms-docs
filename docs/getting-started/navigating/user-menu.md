---
id: user-menu
title: Your user menu
sidebar_label: User menu
sidebar_position: 3
---

# Your user menu

The **user menu** is in the top-right corner of every screen. It shows your profile picture or initials. Click it to open the menu.

<figure>

![User menu open — placeholder](./img/04-user-menu.png)

<figcaption>The user menu — your account, settings and sign-out are all here.</figcaption>
</figure>

## What's in the menu

| Item | What it does |
|---|---|
| **My profile** | Open your profile page to update name, email, phone and profile picture. |
| **Linked accounts** | Manage accounts linked to yours (used to switch tenant without logging in again). |
| **Change password** | Set a new password. See [below](#change-password). |
| **Login attempts** | View the history of recent sign-ins for your account, including failed attempts. |
| **My settings** | Personal preferences: language, time zone, notification preferences. |
| **Logout** | End your session. See [below](#sign-out). |

## Change password

1. Open the user menu and click **Change password**.
2. Enter your **current password**.
3. Enter and confirm your **new password**. It must meet your organization's password policy (length, complexity).
4. Click **Save**.

You stay signed in. Use the new password the next time you sign in.

## Language

OpenTMS supports multiple interface languages. To change yours:

1. Open the user menu and click **My settings**.
2. Find the **Language** dropdown.
3. Pick your preferred language and click **Save**.
4. The interface refreshes immediately in the new language.

You can also use the **language switcher** in the app bar for the same effect.

## Linked accounts

If you work across multiple tenants (for example, multiple legal entities of the same group), your administrator can **link** them to your main account. Once linked:

1. Open the user menu and click **Linked accounts**.
2. Select the tenant you want to switch to.
3. OpenTMS reloads in the context of the selected tenant — no need to log in again.

## Sign out

Open the user menu and click **Logout**. You are returned to the login screen.

:::warning Public computers
Always sign out before leaving a shared computer. Closing the browser tab does *not* immediately end your OpenTMS session.
:::
