<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionSiegeEngineMarkerWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionSiegeEngineMarkerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionSiegeEngineMarkerWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/MissionSiegeEngineMarkerWidget.cs`

## Overview

`MissionSiegeEngineMarkerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `Slider` | `public SliderWidget Slider { get; set; }` |
| `MachineIconParent` | `public BrushWidget MachineIconParent { get; set; }` |
| `EnemyBrush` | `public Brush EnemyBrush { get; set; }` |
| `AllyBrush` | `public Brush AllyBrush { get; set; }` |
| `ScreenPosition` | `public Vec2 ScreenPosition { get; set; }` |
| `IsEnemy` | `public bool IsEnemy { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `EngineType` | `public string EngineType { get; set; }` |
| `MachineTypeIconWidget` | `public Widget MachineTypeIconWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of MissionSiegeEngineMarkerWidget (Widget)
// 声明/访问一个 MissionSiegeEngineMarkerWidget
var widget = root.GetChild("missionSiegeEngineMarkerWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)