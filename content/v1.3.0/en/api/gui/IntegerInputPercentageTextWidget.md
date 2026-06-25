---
title: "IntegerInputPercentageTextWidget"
description: "Auto-generated class reference for IntegerInputPercentageTextWidget."
---
# IntegerInputPercentageTextWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class IntegerInputPercentageTextWidget : IntegerInputTextWidget`
**Base:** `IntegerInputTextWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/IntegerInputPercentageTextWidget.cs`

## Overview

`IntegerInputPercentageTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `IntegerInputPercentageTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PercentageText` | `public string PercentageText { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
IntegerInputPercentageTextWidget widget = ...;
```

## See Also

- [Area Index](../)