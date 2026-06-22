<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerClassLoadoutTroopInfoBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerClassLoadoutTroopInfoBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerClassLoadoutTroopInfoBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/ClassLoadout/MultiplayerClassLoadoutTroopInfoBrushWidget.cs`

## Overview

`MultiplayerClassLoadoutTroopInfoBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `DefaultAlpha` | `public float DefaultAlpha { get; set; }` |

## Key Methods

### OnBrushChanged
```csharp
public override void OnBrushChanged()
```

## Usage Example

```csharp
// Typical usage of MultiplayerClassLoadoutTroopInfoBrushWidget (Widget)
// 声明/访问一个 MultiplayerClassLoadoutTroopInfoBrushWidget
var widget = root.GetChild("multiplayerClassLoadoutTroopInfoBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)