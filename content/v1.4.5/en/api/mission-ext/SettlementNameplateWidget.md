---
title: "SettlementNameplateWidget"
description: "Auto-generated class reference for SettlementNameplateWidget."
---
# SettlementNameplateWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SettlementNameplateWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate/SettlementNameplateWidget.cs`

## Overview

`SettlementNameplateWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `SettlementNameplateWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Position` | `public Vec2 Position { get; set; }` |
| `IsVisibleOnMap` | `public bool IsVisibleOnMap { get; set; }` |
| `IsTracked` | `public bool IsTracked { get; set; }` |
| `IsTargetedByTutorial` | `public bool IsTargetedByTutorial { get; set; }` |
| `IsInsideWindow` | `public bool IsInsideWindow { get; set; }` |
| `IsInRange` | `public bool IsInRange { get; set; }` |
| `CanParley` | `public bool CanParley { get; set; }` |
| `HasPort` | `public bool HasPort { get; set; }` |
| `RelationType` | `public int RelationType { get; set; }` |
| `WSign` | `public int WSign { get; set; }` |
| `WPos` | `public float WPos { get; set; }` |
| `DistanceToCamera` | `public float DistanceToCamera { get; set; }` |
| `NameplateItem` | `public SettlementNameplateItemWidget NameplateItem { get; set; }` |
| `NotificationListPanel` | `public ListPanel NotificationListPanel { get; set; }` |
| `EventsListPanel` | `public ListPanel EventsListPanel { get; set; }` |

## Key Methods

### SettlementNameplateWidget
`public class SettlementNameplateWidget(UIContext context)`

**Purpose:** **Purpose:** Assigns a new value to tlement nameplate widget and updates the object's internal state.

```csharp
// Obtain an instance of SettlementNameplateWidget from the subsystem API first
SettlementNameplateWidget settlementNameplateWidget = ...;
var result = settlementNameplateWidget.SettlementNameplateWidget(context);
```

### CompareTo
`public int CompareTo(SettlementNameplateWidget other)`

**Purpose:** **Purpose:** Compares the this instance with the supplied instance for ordering.

```csharp
// Obtain an instance of SettlementNameplateWidget from the subsystem API first
SettlementNameplateWidget settlementNameplateWidget = ...;
var result = settlementNameplateWidget.CompareTo(other);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
SettlementNameplateWidget widget = ...;
```

## See Also

- [Area Index](../)