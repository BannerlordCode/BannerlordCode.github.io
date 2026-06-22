<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerEndOfRoundPanelBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerEndOfRoundPanelBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerEndOfRoundPanelBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerEndOfRoundPanelBrushWidget.cs`

## Overview

`MultiplayerEndOfRoundPanelBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsShown` | `public bool IsShown { get; set; }` |
| `IsRoundWinner` | `public bool IsRoundWinner { get; set; }` |

## Usage Example

```csharp
// Typical usage of MultiplayerEndOfRoundPanelBrushWidget (Widget)
// 声明/访问一个 MultiplayerEndOfRoundPanelBrushWidget
var widget = root.GetChild("multiplayerEndOfRoundPanelBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)