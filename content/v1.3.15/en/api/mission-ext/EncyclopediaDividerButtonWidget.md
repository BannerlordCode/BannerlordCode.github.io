---
title: "EncyclopediaDividerButtonWidget"
description: "Auto-generated class reference for EncyclopediaDividerButtonWidget."
---
# EncyclopediaDividerButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EncyclopediaDividerButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaDividerButtonWidget.cs`

## Overview

`EncyclopediaDividerButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `EncyclopediaDividerButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ItemListWidget` | `public Widget ItemListWidget { get; set; }` |
| `CollapseIndicator` | `public Widget CollapseIndicator { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
EncyclopediaDividerButtonWidget widget = ...;
```

## See Also

- [Area Index](../)