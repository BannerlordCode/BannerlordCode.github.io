---
title: "ScoreboardAnimatedTextWidget"
description: "Auto-generated class reference for ScoreboardAnimatedTextWidget."
---
# ScoreboardAnimatedTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScoreboardAnimatedTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ScoreboardAnimatedTextWidget.cs`

## Overview

`ScoreboardAnimatedTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ScoreboardAnimatedTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ValueAsInt` | `public int ValueAsInt { get; set; }` |
| `ShowZero` | `public bool ShowZero { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ScoreboardAnimatedTextWidget widget = ...;
```

## See Also

- [Area Index](../)