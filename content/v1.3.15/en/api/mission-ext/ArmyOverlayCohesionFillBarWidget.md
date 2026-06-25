---
title: "ArmyOverlayCohesionFillBarWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArmyOverlayCohesionFillBarWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ArmyOverlayCohesionFillBarWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Menu.Overlay
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ArmyOverlayCohesionFillBarWidget : FillBarWidget`
**Base:** `FillBarWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Menu/Overlay/ArmyOverlayCohesionFillBarWidget.cs`

## Overview

`ArmyOverlayCohesionFillBarWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ArmyOverlayCohesionFillBarWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsCohesionWarningEnabled` | `public bool IsCohesionWarningEnabled { get; set; }` |
| `IsArmyLeader` | `public bool IsArmyLeader { get; set; }` |

## Usage Example

```csharp
var widget = new ArmyOverlayCohesionFillBarWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)