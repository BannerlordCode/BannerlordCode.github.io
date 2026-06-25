---
title: "MultiplayerClassLoadoutItemTabControllerButtonWidget"
description: "Auto-generated class reference for MultiplayerClassLoadoutItemTabControllerButtonWidget."
---
# MultiplayerClassLoadoutItemTabControllerButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerClassLoadoutItemTabControllerButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout/MultiplayerClassLoadoutItemTabControllerButtonWidget.cs`

## Overview

`MultiplayerClassLoadoutItemTabControllerButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerClassLoadoutItemTabControllerButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ItemTabList` | `public MultiplayerClassLoadoutItemTabListPanel ItemTabList { get; set; }` |
| `CursorWidget` | `public Widget CursorWidget { get; set; }` |
| `AnimationSpeed` | `public float AnimationSpeed { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerClassLoadoutItemTabControllerButtonWidget widget = ...;
```

## See Also

- [Area Index](../)