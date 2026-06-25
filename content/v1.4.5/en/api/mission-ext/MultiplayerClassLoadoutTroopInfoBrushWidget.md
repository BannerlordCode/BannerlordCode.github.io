---
title: "MultiplayerClassLoadoutTroopInfoBrushWidget"
description: "Auto-generated class reference for MultiplayerClassLoadoutTroopInfoBrushWidget."
---
# MultiplayerClassLoadoutTroopInfoBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerClassLoadoutTroopInfoBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout/MultiplayerClassLoadoutTroopInfoBrushWidget.cs`

## Overview

`MultiplayerClassLoadoutTroopInfoBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerClassLoadoutTroopInfoBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `DefaultAlpha` | `public float DefaultAlpha { get; set; }` |

## Key Methods

### OnBrushChanged
`public override void OnBrushChanged()`

**Purpose:** **Purpose:** Invoked when the brush changed event is raised.

```csharp
// Obtain an instance of MultiplayerClassLoadoutTroopInfoBrushWidget from the subsystem API first
MultiplayerClassLoadoutTroopInfoBrushWidget multiplayerClassLoadoutTroopInfoBrushWidget = ...;
multiplayerClassLoadoutTroopInfoBrushWidget.OnBrushChanged();
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerClassLoadoutTroopInfoBrushWidget widget = ...;
```

## See Also

- [Area Index](../)