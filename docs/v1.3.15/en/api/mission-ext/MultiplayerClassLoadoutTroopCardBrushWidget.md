<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerClassLoadoutTroopCardBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerClassLoadoutTroopCardBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerClassLoadoutTroopCardBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/ClassLoadout/MultiplayerClassLoadoutTroopCardBrushWidget.cs`

## Overview

`MultiplayerClassLoadoutTroopCardBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `CultureID` | `public string CultureID { get; set; }` |
| `Border` | `public BrushWidget Border { get; set; }` |
| `ClassBorder` | `public BrushWidget ClassBorder { get; set; }` |
| `ClassFrame` | `public BrushWidget ClassFrame { get; set; }` |

## Usage Example

```csharp
// Typical usage of MultiplayerClassLoadoutTroopCardBrushWidget (Widget)
// 声明/访问一个 MultiplayerClassLoadoutTroopCardBrushWidget
var widget = root.GetChild("multiplayerClassLoadoutTroopCardBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)