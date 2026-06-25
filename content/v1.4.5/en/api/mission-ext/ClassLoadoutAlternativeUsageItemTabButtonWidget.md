---
title: "ClassLoadoutAlternativeUsageItemTabButtonWidget"
description: "Auto-generated class reference for ClassLoadoutAlternativeUsageItemTabButtonWidget."
---
# ClassLoadoutAlternativeUsageItemTabButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClassLoadoutAlternativeUsageItemTabButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout/ClassLoadoutAlternativeUsageItemTabButtonWidget.cs`

## Overview

`ClassLoadoutAlternativeUsageItemTabButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ClassLoadoutAlternativeUsageItemTabButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `UsageType` | `public string UsageType { get; set; }` |
| `IconWidget` | `public BrushWidget IconWidget { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ClassLoadoutAlternativeUsageItemTabButtonWidget widget = ...;
```

## See Also

- [Area Index](../)