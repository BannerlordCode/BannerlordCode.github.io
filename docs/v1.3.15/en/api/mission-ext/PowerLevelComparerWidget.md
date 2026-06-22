<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PowerLevelComparerWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PowerLevelComparerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PowerLevelComparerWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/PowerLevelComparerWidget.cs`

## Overview

`PowerLevelComparerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsCenterSeperatorEnabled` | `public bool IsCenterSeperatorEnabled { get; set; }` |
| `CenterSpace` | `public float CenterSpace { get; set; }` |
| `DefenderPower` | `public double DefenderPower { get; set; }` |
| `AttackerPower` | `public double AttackerPower { get; set; }` |
| `InitialAttackerBattlePower` | `public double InitialAttackerBattlePower { get; set; }` |
| `InitialDefenderBattlePower` | `public double InitialDefenderBattlePower { get; set; }` |
| `AttackerPowerWidget` | `public Widget AttackerPowerWidget { get; set; }` |
| `DefenderPowerWidget` | `public Widget DefenderPowerWidget { get; set; }` |
| `PowerListPanel` | `public ListPanel PowerListPanel { get; set; }` |
| `AttackerPowerListPanel` | `public ListPanel AttackerPowerListPanel { get; set; }` |
| `DefenderPowerListPanel` | `public ListPanel DefenderPowerListPanel { get; set; }` |
| `CenterSeperatorWidget` | `public Widget CenterSeperatorWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of PowerLevelComparerWidget (Widget)
// 声明/访问一个 PowerLevelComparerWidget
var widget = root.GetChild("powerLevelComparerWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)