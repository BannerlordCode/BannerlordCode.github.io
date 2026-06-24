<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementNameplateWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementNameplateWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SettlementNameplateWidget : Widget, IComparable<SettlementNameplateWidget>`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/SettlementNameplateWidget.cs`

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

### CompareTo
`public int CompareTo(SettlementNameplateWidget other)`

**Purpose:** Handles logic related to `compare to`.

## Usage Example

```csharp
var widget = new SettlementNameplateWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)