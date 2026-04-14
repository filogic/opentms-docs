---
id: transport-files
title: Transport files
sidebar_label: Transport files
sidebar_position: 2
---

# Transport files

The **Transport files** tab is the main list of all transport files in OpenTMS. A transport file groups everything related to a single job: orders, stops, legs, drivers, vehicles, documents and status.

<figure>

![Transport files grid — placeholder](./img/02-transport-files-grid.png)

<figcaption>The Transport files tab shows one row per file with the most important columns.</figcaption>
</figure>

## The toolbar

At the top of the Transport files tab there is a **preferences panel** that controls the grid below it.

| Button / control | What it does |
|---|---|
| **Search** | Text search across the grid. Type part of a file number, customer, driver, etc. |
| **Refresh** | Reload the data from the server. |
| **Date range** | Limit the grid to files whose planned date falls inside the range. Default is the coming 7 days. |
| **Organization unit** | Filter by branch or legal entity, if your tenant uses organization units. |
| **Flags filter** | Show only files with a specific flag. |
| **Columns** | Show or hide columns, change their order, pin them left or right. |
| **Export** | Export the current grid to Excel. See [Exporting to Excel](#exporting-to-excel). |

## The columns

By default the grid shows these columns (you can change this — see [Customizing columns](#customizing-columns)):

| Column | Meaning |
|---|---|
| **File number** | Unique identifier of the transport file. Click to open the file. |
| **Vehicle** | Vehicle currently assigned to the file. |
| **Drivers** | One or two drivers assigned. |
| **Transport company** | The carrier responsible for executing the file. |
| **Status** | Current status (planned, loading, in transit, delivered, ...). |
| **Load factor** | How full the vehicle is for this file. |
| **ETA** | Estimated time of arrival at the next relevant stop. |
| **FMS status** | Status of the file in the fleet management system, if integrated. |
| **Flags** | Icons for any flags set on the file (urgent, problem, attention, ...). |
| **Email status** | Whether key emails (confirmation, CMR, ...) have been sent. |
| **Remarks** | Free-text remarks. |

## Searching and filtering

- Use the **Search** box in the toolbar for free-text search. It matches on the most common columns (file number, customer, driver, vehicle).
- Use the **column filters** (the funnel icon on a column header) for precise filters: ranges, lists, "contains", etc.
- Use the **date range** to limit the grid to a specific period. Files outside the range are hidden.

Filters combine — so you can search for "ACME" inside "files for next week with the urgent flag on".

## Opening a transport file

Double-click a row to open the file's detail screen, or right-click and choose **Edit**.

## Right-click actions

Right-click any row (or selection) to open the context menu with actions for the selected file(s):

| Action | What it does |
|---|---|
| **Edit** | Open the file. |
| **Delete** | Delete the file (with confirmation). Requires permission. |
| **Set flags** | Set one or more flags on the file (urgent, problem, attention, ...). |
| **Highlight color** | Give the row a background color of your choice, as a personal marker. |
| **Send email** | Open the email dialog pre-filled with the file context. |
| **Archive** | Move the file to the archive. |
| **Print CMR** | Generate and download the CMR document. |
| **Convert vehicle** | Swap the assigned vehicle for another one. |
| **Complete** | Mark the file as completed. |
| **Send to vehicle** | Push the file to the assigned vehicle via FMS integration. |
| **Remove from vehicle** | Detach the file from its current vehicle. |

:::tip Multi-selection
Hold <kbd>Ctrl</kbd> (or <kbd>⌘</kbd> on Mac) to select multiple files and apply an action to all of them at once.
:::

## Flags and highlights

Two different ways to mark files for your own or your team's attention:

- **Flags** are shared across the tenant. When you set the *Urgent* flag, every colleague sees it. Use flags for information relevant to everyone.
- **Highlight colors** are personal. They are stored in your user preferences and only visible to you. Use highlights for your own workflow ("still to call", "waiting for customer").

Set either one via **right-click → Set flags** / **Highlight color**.

## Drag and drop

You can **drag a transport file onto another tab** — most usefully onto the [Vehicle outline](./vehicle-outline) — to assign it to a vehicle. See [Vehicle outline → Assigning a transport file to a vehicle](./vehicle-outline#assigning-a-transport-file-to-a-vehicle).

## Customizing columns

Click the **Columns** button in the toolbar (or drag column headers directly) to:

- **Show or hide** columns by ticking them on or off.
- **Reorder** columns by dragging them.
- **Pin** a column to the left or right so it stays visible while you scroll.
- **Resize** a column by dragging its edge.

Your column setup is saved per user — you only configure it once.

## Exporting to Excel

1. Apply the filters and column selection you want in the export.
2. Click **Export** in the toolbar.
3. OpenTMS starts a **background job** and notifies you when the file is ready.
4. Click the notification (or open **Notifications** in the header) to download the Excel file.

The export contains exactly the rows and columns that were visible in the grid at the moment you clicked Export.

## Real-time updates

The Transport files grid is updated in real time. When a colleague assigns a driver, changes a status or adds a flag, your grid refreshes automatically — you do not need to click **Refresh**.
