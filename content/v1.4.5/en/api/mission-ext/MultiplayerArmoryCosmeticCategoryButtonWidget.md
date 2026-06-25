---
title: "MultiplayerArmoryCosmeticCategoryButtonWidget"
description: "Auto-generated class reference for MultiplayerArmoryCosmeticCategoryButtonWidget."
---
# MultiplayerArmoryCosmeticCategoryButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerArmoryCosmeticCategoryButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory/MultiplayerArmoryCosmeticCategoryButtonWidget.cs`

## Overview

`MultiplayerArmoryCosmeticCategoryButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerArmoryCosmeticCategoryButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ClothingCategorySpriteBrush` | `public Brush ClothingCategorySpriteBrush { get; set; }` |
| `TauntCategorySpriteBrush` | `public Brush TauntCategorySpriteBrush { get; set; }` |
| `CosmeticTypeName` | `public string CosmeticTypeName { get; set; }` |
| `CosmeticCategoryName` | `public string CosmeticCategoryName { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerArmoryCosmeticCategoryButtonWidget widget = ...;
```

## See Also

- [Area Index](../)