<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerClassLoadoutTroopSubclassButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerClassLoadoutTroopSubclassButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerClassLoadoutTroopSubclassButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/ClassLoadout/MultiplayerClassLoadoutTroopSubclassButtonWidget.cs`

## Overview

`MultiplayerClassLoadoutTroopSubclassButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `TroopType` | `public string TroopType { get; set; }` |
| `IconBrush` | `public Brush IconBrush { get; set; }` |
| `IconWidget` | `public BrushWidget IconWidget { get; set; }` |
| `PerksNavigationScopeTargeter` | `public NavigationScopeTargeter PerksNavigationScopeTargeter { get; set; }` |

## Key Methods

### SetState
```csharp
public override void SetState(string stateName)
```

## Usage Example

```csharp
// Typical usage of MultiplayerClassLoadoutTroopSubclassButtonWidget (Widget)
// 声明/访问一个 MultiplayerClassLoadoutTroopSubclassButtonWidget
var widget = root.GetChild("multiplayerClassLoadoutTroopSubclassButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)