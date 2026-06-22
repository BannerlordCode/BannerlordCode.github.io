<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerPerkItemToggleWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerPerkItemToggleWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Perks
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPerkItemToggleWidget : ToggleButtonWidget`
**Base:** `ToggleButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Perks/MultiplayerPerkItemToggleWidget.cs`

## Overview

`MultiplayerPerkItemToggleWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IconType` | `public string IconType { get; set; }` |
| `IconWidget` | `public BrushWidget IconWidget { get; set; }` |
| `IsSelectable` | `public bool IsSelectable { get; set; }` |
| `ContainerPanel` | `public MultiplayerPerkContainerPanelWidget ContainerPanel { get; set; }` |

## Usage Example

```csharp
// Typical usage of MultiplayerPerkItemToggleWidget (Widget)
// 声明/访问一个 MultiplayerPerkItemToggleWidget
var widget = root.GetChild("multiplayerPerkItemToggleWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)