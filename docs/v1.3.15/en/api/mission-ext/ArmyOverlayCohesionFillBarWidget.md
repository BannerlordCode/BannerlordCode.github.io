<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArmyOverlayCohesionFillBarWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
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

## Key Properties

| Name | Signature |
|------|-----------|
| `IsCohesionWarningEnabled` | `public bool IsCohesionWarningEnabled { get; set; }` |
| `IsArmyLeader` | `public bool IsArmyLeader { get; set; }` |

## Usage Example

```csharp
// Typical usage of ArmyOverlayCohesionFillBarWidget (Widget)
// 声明/访问一个 ArmyOverlayCohesionFillBarWidget
var widget = root.GetChild("armyOverlayCohesionFillBarWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)