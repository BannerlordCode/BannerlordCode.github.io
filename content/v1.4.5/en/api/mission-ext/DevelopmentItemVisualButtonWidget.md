---
title: "DevelopmentItemVisualButtonWidget"
description: "Auto-generated class reference for DevelopmentItemVisualButtonWidget."
---
# DevelopmentItemVisualButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DevelopmentItemVisualButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement/DevelopmentItemVisualButtonWidget.cs`

## Overview

`DevelopmentItemVisualButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `DevelopmentItemVisualButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `UseSmallVariant` | `public bool UseSmallVariant { get; set; }` |
| `IsDaily` | `public bool IsDaily { get; set; }` |
| `SpriteCode` | `public string SpriteCode { get; set; }` |
| `DevelopmentFrontVisualWidget` | `public Widget DevelopmentFrontVisualWidget { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
DevelopmentItemVisualButtonWidget widget = ...;
```

## See Also

- [Area Index](../)