<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerEndOfRoundPanelBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `MultiplayerEndOfRoundPanelBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsShown` | `public bool IsShown { get; set; }` |
| `IsRoundWinner` | `public bool IsRoundWinner { get; set; }` |

## Usage Example

```csharp
var widget = new MultiplayerEndOfRoundPanelBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)