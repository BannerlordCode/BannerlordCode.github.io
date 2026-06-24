<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PowerLevelComparerWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `PowerLevelComparerWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
var widget = new PowerLevelComparerWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)