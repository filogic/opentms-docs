---
id: app-shell
title: The app shell
sidebar_label: The app shell
sidebar_position: 3
---

# The app shell

After you sign in, every screen in OpenTMS shares the same **app shell**: a header bar at the top, a side menu on the left, and your content in the middle.

<figure>

![App shell with header, side menu and content area — placeholder](./img/02-app-shell.png)

<figcaption>The OpenTMS app shell. ① Header bar  ② Side menu  ③ Content area  ④ App menu launcher</figcaption>
</figure>

## The header bar

The header bar runs across the top of every screen and contains:

| Element | What it does |
|---|---|
| **OpenTMS logo** | Click to return to the Dashboard. |
| **App menu** | Opens the full grid of modules. See [App menu](#the-app-menu). |
| **Search** | Quick search across the current module. |
| **Chat icon** | Opens the in-app chat. A red badge shows unread messages. |
| **Notifications bell** | Shows recent system notifications. See [Notifications](#notifications). |
| **Language switcher** | Change the interface language. |
| **User menu** | Your profile picture or initials. See [User menu](./user-menu). |
| **Tenant indicator** | Shows your current tenant in the format `Tenant\Username`. |

If your account has been **impersonated** by an administrator (for support), a small red icon is shown in the header. Click it to return to your own session.

## The side menu

The side menu on the left contains the navigation items for the **module you are currently in**. The items change when you switch modules — for example, in Planboard the side menu lists planning-related actions, while in Finance it lists invoices and ledger items.

- Click any item to open it.
- Items can be nested up to four levels deep — click a parent to expand it.
- Items you do not have permission for are hidden automatically.

See [Main menu](./main-menu) for more details on how the side menu behaves.

## The content area

The content area in the middle shows the screen you opened. Its layout depends on the module:

- **Dashboards** show widgets and KPIs.
- **List screens** (such as the transport file list) show a data grid with filters at the top.
- **Workspaces** like the Planboard use a **docking layout** of resizable, draggable panels — see [Planboard layout & tabs](../planboard/layout-and-tabs).

## The app menu

The app menu is the central launcher for all modules in OpenTMS. Open it by clicking the **app menu icon** in the header bar (a grid of dots).

<figure>

![App menu showing module tiles — placeholder](./img/03-app-menu.png)

<figcaption>The app menu groups all available modules in three sections.</figcaption>
</figure>

The app menu groups apps into three sections:

| Section | Contains |
|---|---|
| **Standard apps** | The core OpenTMS modules: Dashboard, Planboard, Transport, Finance, Track & Trace, etc. |
| **FiLogic & Friends** | Apps from FiLogic partners that have been enabled for your tenant. |
| **Private apps** | Custom apps built specifically for your organization. |

You can:

- **Search** for an app by name using the search bar at the top of the menu.
- **Reorder** apps by dragging them — your order is saved per user.
- See **recently used** apps highlighted at the top.

Click any tile to open that module. You can have multiple browser tabs open in different modules at the same time.

## Notifications

The bell icon in the header shows the number of unread notifications. Click it to open the notifications panel.

<figure>

![Notifications panel — placeholder](./img/04-notifications.png)

<figcaption>The notifications panel lists recent system messages.</figcaption>
</figure>

From the panel you can:

- **Mark as read** — single notification or all of them at once.
- **Open** — click a notification to jump to the related screen (for example, the transport file it refers to).
- **Open settings** — change which events should generate a notification for you.

The bell is only visible if your account has the **Notifications** permission.

## What's next?

- Learn about the [main menu](./main-menu) and how to use it efficiently.
- Personalize your account in the [user menu](./user-menu).
- Open the [Planboard](../planboard/overview) to start planning.
