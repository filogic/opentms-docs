---
id: layout-and-tabs
title: Layout & tabs
sidebar_label: Layout & tabs
sidebar_position: 4
---

# Layout & tabs

The Planboard is built on a **docking layout**: every view (Transport files, Vehicle outline, Map, ...) lives in its own tab that you can **dock, resize, split and drag around** the workspace. This page explains how to customize it.

<figure>

![Planboard with multiple docked tabs — placeholder](./img/05-docking-layout.png)

<figcaption>A typical planner setup: Transport files on the left, Vehicle outline on the right, Map docked below.</figcaption>
</figure>

## The available tabs

OpenTMS ships with the following tabs in the Planboard. Not every tab is visible by default — you can add the ones you need.

| Tab | What it shows |
|---|---|
| **Transport files** | The main list of transport files. See [Transport files](./transport-files). |
| **Vehicle outline** | Horizontal timeline of your fleet. See [Vehicle outline](./vehicle-outline). |
| **Transport orders** | Order-level view (before orders are grouped into files). |
| **Stops** | Individual pickup and delivery stops. |
| **Legs** | Transport legs — the segments between stops. |
| **Legs to schedule** | Freight that has not been planned yet — your work queue. |
| **Map** | Geographic map with vehicles and stops. |
| **Vehicle planboard Gantt** | Gantt-chart alternative to the vehicle outline. |
| **Route42 avg. time per stop** | Route optimization metrics from Route42. |
| **Resources** | Equipment and resource availability (trailers, tail lifts, etc.). |

## Managing tabs

### Adding a tab

1. Click the **+** button in the tab toolbar at the top of the Planboard.
2. Select the tab you want to open from the list.
3. The new tab appears in the workspace. You can then drag it where you want.

### Closing a tab

Click the small **×** on the tab header. Closing a tab does not delete any data — you can re-add it at any time.

### Rearranging tabs

Every tab header can be dragged.

- **Drag a tab next to another tab** to make them share the same panel (they become a tab group).
- **Drag a tab to an edge of another panel** to split the workspace — the new tab takes the top/bottom/left/right half.
- **Drag the edge between panels** to resize them.

<figure>

![Dragging a tab to split the workspace — placeholder](./img/06-split-layout.png)

<figcaption>Drop zones appear while you drag a tab, showing where it will land.</figcaption>
</figure>

### Saving your layout

Your layout is saved **per user**:

1. Click **Save layout** in the Planboard toolbar.
2. OpenTMS stores the current docking state as your personal default.

The next time you open the Planboard, it opens exactly as you left it — same tabs, same sizes, same positions.

:::tip
You can save your layout at any time, as often as you want. A good habit is to tweak your layout once in the morning, then save it so it is ready tomorrow.
:::

### Resetting the layout

If your layout ends up in an unusable state, click **Reset layout** in the toolbar. This throws away your personal layout and reloads the default one. You will have to rebuild your preferred setup afterwards.

## Recommended layouts

There is no "right" layout — it depends on your role. A few starting points:

### Dispatcher — "what's happening now"

- **Vehicle outline** — full height, left half
- **Map** — full height, right half
- **Transport files** — hidden (open via a button when needed)

### Planner — "plan tomorrow"

- **Transport files** — top half
- **Vehicle outline** — bottom half
- **Legs to schedule** — tab grouped with Transport files

### Operations lead — "overview"

- **Transport files** — left half
- **Map** — top-right
- **Vehicle outline** — bottom-right

## Permissions

Some tabs require their own permission in addition to the base **Planboard app** permission:

| Tab | Required permission |
|---|---|
| Vehicle outline | **Vehicle Planboard app** |
| Vehicle planboard Gantt | **Vehicle Planboard Gantt app** |

If a tab you expect is missing from the **+** menu, your account most likely lacks the permission. Contact your administrator.
