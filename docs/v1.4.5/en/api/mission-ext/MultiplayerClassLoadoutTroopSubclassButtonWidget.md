<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerClassLoadoutTroopSubclassButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerClassLoadoutTroopSubclassButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerClassLoadoutTroopSubclassButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout/MultiplayerClassLoadoutTroopSubclassButtonWidget.cs`

## Overview

`MultiplayerClassLoadoutTroopSubclassButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerClassLoadoutTroopSubclassButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TroopType` | `public string TroopType { get; set; }` |
| `IconBrush` | `public Brush IconBrush { get; set; }` |
| `IconWidget` | `public BrushWidget IconWidget { get; set; }` |
| `PerksNavigationScopeTargeter` | `public NavigationScopeTargeter PerksNavigationScopeTargeter { get; set; }` |

## Key Methods

### SetState
`public override void SetState(string stateName)`

**Purpose:** Sets the value or state of `state`.

## Usage Example

```csharp
var widget = new MultiplayerClassLoadoutTroopSubclassButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)