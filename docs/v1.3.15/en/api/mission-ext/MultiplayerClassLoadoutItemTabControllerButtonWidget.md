<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerClassLoadoutItemTabControllerButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerClassLoadoutItemTabControllerButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerClassLoadoutItemTabControllerButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/ClassLoadout/MultiplayerClassLoadoutItemTabControllerButtonWidget.cs`

## Overview

`MultiplayerClassLoadoutItemTabControllerButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ItemTabList` | `public MultiplayerClassLoadoutItemTabListPanel ItemTabList { get; set; }` |
| `CursorWidget` | `public Widget CursorWidget { get; set; }` |
| `AnimationSpeed` | `public float AnimationSpeed { get; set; }` |

## Usage Example

```csharp
// Typical usage of MultiplayerClassLoadoutItemTabControllerButtonWidget (Widget)
// 声明/访问一个 MultiplayerClassLoadoutItemTabControllerButtonWidget
var widget = root.GetChild("multiplayerClassLoadoutItemTabControllerButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)