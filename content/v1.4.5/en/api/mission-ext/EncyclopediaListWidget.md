---
title: "EncyclopediaListWidget"
description: "Auto-generated class reference for EncyclopediaListWidget."
---
# EncyclopediaListWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EncyclopediaListWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia/EncyclopediaListWidget.cs`

## Overview

`EncyclopediaListWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `EncyclopediaListWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `LastSelectedItemId` | `public string LastSelectedItemId { get; set; }` |
| `ItemList` | `public ListPanel ItemList { get; set; }` |
| `ItemListScroll` | `public ScrollbarWidget ItemListScroll { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
EncyclopediaListWidget widget = ...;
```

## See Also

- [Area Index](../)