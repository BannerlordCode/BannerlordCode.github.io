---
title: "MultiplayerTroopTypeIconWidget"
description: "Auto-generated class reference for MultiplayerTroopTypeIconWidget."
---
# MultiplayerTroopTypeIconWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerTroopTypeIconWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerTroopTypeIconWidget.cs`

## Overview

`MultiplayerTroopTypeIconWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerTroopTypeIconWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ScaleFactor` | `public float ScaleFactor { get; set; }` |
| `BackgroundWidget` | `public Widget BackgroundWidget { get; set; }` |
| `ForegroundWidget` | `public Widget ForegroundWidget { get; set; }` |
| `IconSpriteType` | `public string IconSpriteType { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerTroopTypeIconWidget widget = ...;
```

## See Also

- [Area Index](../)