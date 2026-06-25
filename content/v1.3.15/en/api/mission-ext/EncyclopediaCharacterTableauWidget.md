---
title: "EncyclopediaCharacterTableauWidget"
description: "Auto-generated class reference for EncyclopediaCharacterTableauWidget."
---
# EncyclopediaCharacterTableauWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EncyclopediaCharacterTableauWidget : CharacterTableauWidget`
**Base:** `CharacterTableauWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaCharacterTableauWidget.cs`

## Overview

`EncyclopediaCharacterTableauWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `EncyclopediaCharacterTableauWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDead` | `public bool IsDead { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
EncyclopediaCharacterTableauWidget widget = ...;
```

## See Also

- [Area Index](../)