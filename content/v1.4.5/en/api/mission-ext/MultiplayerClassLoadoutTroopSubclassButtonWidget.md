---
title: "MultiplayerClassLoadoutTroopSubclassButtonWidget"
description: "Auto-generated class reference for MultiplayerClassLoadoutTroopSubclassButtonWidget."
---
# MultiplayerClassLoadoutTroopSubclassButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerClassLoadoutTroopSubclassButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout/MultiplayerClassLoadoutTroopSubclassButtonWidget.cs`

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

**Purpose:** Assigns a new value to `state` and updates the object's internal state.

```csharp
// Obtain an instance of MultiplayerClassLoadoutTroopSubclassButtonWidget from the subsystem API first
MultiplayerClassLoadoutTroopSubclassButtonWidget multiplayerClassLoadoutTroopSubclassButtonWidget = ...;
multiplayerClassLoadoutTroopSubclassButtonWidget.SetState("example");
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerClassLoadoutTroopSubclassButtonWidget widget = ...;
```

## See Also

- [Area Index](../)