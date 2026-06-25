---
title: "GatherArmyTupleButtonWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GatherArmyTupleButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GatherArmyTupleButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GatherArmy
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GatherArmyTupleButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GatherArmy/GatherArmyTupleButtonWidget.cs`

## Overview

`GatherArmyTupleButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `GatherArmyTupleButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsInCart` | `public bool IsInCart { get; set; }` |
| `IsEligible` | `public bool IsEligible { get; set; }` |
| `IsTransferDisabled` | `public bool IsTransferDisabled { get; set; }` |

## Usage Example

```csharp
var widget = new GatherArmyTupleButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)