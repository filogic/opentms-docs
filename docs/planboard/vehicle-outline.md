---
id: vehicle-outline
title: Vehicle outline
sidebar_label: Vehicle outline
sidebar_position: 3
---

# Vehicle outline

The **Vehicle outline** (sometimes called the *Vehicle planboard*) is a horizontal timeline where you can see what every vehicle in your fleet is doing across time. It is the main view for **assigning transport files to vehicles** and spotting gaps and overlaps.

<figure>

![Vehicle outline timeline — placeholder](./img/03-vehicle-outline.png)

<figcaption>Vehicles on the Y-axis, time on the X-axis. Each colored block is a transport file.</figcaption>
</figure>

## How to read it

- The **Y-axis** lists your vehicles. Each row is one vehicle.
- The **X-axis** is time. The default scale shows 7 days divided into 4-hour blocks from 00:00 to 24:00.
- A **colored block** is a transport file, positioned from its planned start to its planned end time.
- Blocks can overlap when files run in parallel — this is typically a signal that something needs attention.

## The toolbar

| Button / control | What it does |
|---|---|
| **Date range** | Limit the timeline to a period. Default is 7 days starting today. |
| **Vehicles** | Multi-select the vehicles to show. By default, all active vehicles. |
| **Relation groups** | Show only files belonging to a certain customer group. |
| **Search** | Text search — matching files are highlighted. |
| **Hide empty** | Hide vehicles that have no files in the selected period. |
| **Settings** | Change the time scale: start hour, end hour and block size. |
| **Refresh** | Reload the data from the server. |

## Assigning a transport file to a vehicle

The most common action. There are two ways.

### Option A — drag from the Transport files tab

1. Make sure both **Transport files** and **Vehicle outline** tabs are open side by side (see [Layout & tabs](./layout-and-tabs)).
2. In **Transport files**, pick the file you want to assign.
3. **Drag** the row onto the target vehicle row in the timeline, at the time slot where the file should start.
4. Release the mouse. OpenTMS updates the file: it is now assigned to that vehicle at that time.

<figure>

![Dragging a transport file onto a vehicle — placeholder](./img/04-drag-assign.png)

<figcaption>Drag a file from the list onto a vehicle row to assign it.</figcaption>
</figure>

### Option B — move an existing block

1. Find the file block on the timeline.
2. **Drag the block** horizontally to another time.
3. Or **drag it vertically** onto a different vehicle row.
4. Release. The file is rescheduled / reassigned.

:::tip Snap to time slots
Blocks snap to the active time step (typically 15 or 30 minutes). Change the step in **Settings** if you need finer control.
:::

## Actions on a file block

- **Double-click** a block to open the transport file.
- **Right-click** a block to open the context menu with the same actions as in the [Transport files grid](./transport-files#right-click-actions): edit, delete, set flags, print CMR, send to vehicle, etc.

## Changing the time scale

By default the timeline runs from **00:00 to 24:00** in **4-hour blocks**. To change this:

1. Click **Settings** in the toolbar.
2. Set the **start hour**, **end hour** and **time step**.
3. Click **Save**.

Your time-scale preference is stored per user. Use a narrower range (for example 06:00–20:00) to fit more days on screen during busy periods.

## Filtering

| I want to... | How |
|---|---|
| Focus on a subset of vehicles | **Vehicles** filter — tick only the ones you care about |
| Focus on one customer | **Relation groups** filter |
| Find a specific file | **Search** — the match is highlighted on the timeline |
| Hide unused vehicles | Tick **Hide empty** |

All filters combine.

## Saving your view

The vehicle outline remembers your:

- Time scale settings
- Filter state
- Last used date range
- Column / vehicle order

These are stored **per user**, so each planner can have their own preferred view without affecting others.

## Related views

- **Vehicle planboard (Gantt)** — a similar timeline rendered as a traditional Gantt chart. Useful for longer time horizons. Requires the *Vehicle Planboard Gantt app* permission.
- **Map** — see your vehicles plotted on a geographic map instead of a timeline. Useful for quick "where is everybody" checks.
