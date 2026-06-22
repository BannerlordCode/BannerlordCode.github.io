<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DuelArenaFlagVisualBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DuelArenaFlagVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DuelArenaFlagVisualBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/DuelArenaFlagVisualBrushWidget.cs`

## Overview

`DuelArenaFlagVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ArenaType` | `public int ArenaType { get; set; }` |

## Usage Example

```csharp
// Typical usage of DuelArenaFlagVisualBrushWidget (Widget)
// 声明/访问一个 DuelArenaFlagVisualBrushWidget
var widget = root.GetChild("duelArenaFlagVisualBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)