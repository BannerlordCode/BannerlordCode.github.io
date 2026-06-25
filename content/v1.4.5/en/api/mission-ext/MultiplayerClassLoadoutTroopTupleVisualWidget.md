---
title: "MultiplayerClassLoadoutTroopTupleVisualWidget"
description: "Auto-generated class reference for MultiplayerClassLoadoutTroopTupleVisualWidget."
---
# MultiplayerClassLoadoutTroopTupleVisualWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerClassLoadoutTroopTupleVisualWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout/MultiplayerClassLoadoutTroopTupleVisualWidget.cs`

## Overview

`MultiplayerClassLoadoutTroopTupleVisualWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerClassLoadoutTroopTupleVisualWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `FactionCode` | `public string FactionCode { get; set; }` |
| `TroopTypeCode` | `public string TroopTypeCode { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerClassLoadoutTroopTupleVisualWidget widget = ...;
```

## See Also

- [Area Index](../)