<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderOfBattleScreenWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderOfBattleScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleScreenWidget.cs`

## Overview

`OrderOfBattleScreenWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `AlphaChangeDuration` | `public float AlphaChangeDuration { get; set; }` |
| `AreCameraControlsEnabled` | `public bool AreCameraControlsEnabled { get; set; }` |
| `CameraEnabledAlpha` | `public float CameraEnabledAlpha { get; set; }` |
| `LeftSideFormations` | `public ListPanel LeftSideFormations { get; set; }` |
| `RightSideFormations` | `public ListPanel RightSideFormations { get; set; }` |
| `CaptainPool` | `public ListPanel CaptainPool { get; set; }` |
| `Markers` | `public Widget Markers { get; set; }` |
| `CanToggleHeroSelection` | `public bool CanToggleHeroSelection { get; set; }` |

## Usage Example

```csharp
// Typical usage of OrderOfBattleScreenWidget (Widget)
// 声明/访问一个 OrderOfBattleScreenWidget
var widget = root.GetChild("orderOfBattleScreenWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)