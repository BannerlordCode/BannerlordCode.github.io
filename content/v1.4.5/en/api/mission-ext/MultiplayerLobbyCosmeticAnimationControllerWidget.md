---
title: "MultiplayerLobbyCosmeticAnimationControllerWidget"
description: "Auto-generated class reference for MultiplayerLobbyCosmeticAnimationControllerWidget."
---
# MultiplayerLobbyCosmeticAnimationControllerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyCosmeticAnimationControllerWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby/MultiplayerLobbyCosmeticAnimationControllerWidget.cs`

## Overview

`MultiplayerLobbyCosmeticAnimationControllerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerLobbyCosmeticAnimationControllerWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CosmeticRarity` | `public int CosmeticRarity { get; set; }` |
| `MinAlphaChangeDuration` | `public float MinAlphaChangeDuration { get; set; }` |
| `MaxAlphaChangeDuration` | `public float MaxAlphaChangeDuration { get; set; }` |
| `MinAlphaLowerBound` | `public float MinAlphaLowerBound { get; set; }` |
| `MinAlphaUpperBound` | `public float MinAlphaUpperBound { get; set; }` |
| `MaxAlphaLowerBound` | `public float MaxAlphaLowerBound { get; set; }` |
| `MaxAlphaUpperBound` | `public float MaxAlphaUpperBound { get; set; }` |
| `RarityCommonColor` | `public Color RarityCommonColor { get; set; }` |
| `RarityRareColor` | `public Color RarityRareColor { get; set; }` |
| `RarityUniqueColor` | `public Color RarityUniqueColor { get; set; }` |
| `AnimationPartContainer` | `public BasicContainer AnimationPartContainer { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerLobbyCosmeticAnimationControllerWidget widget = ...;
```

## See Also

- [Area Index](../)