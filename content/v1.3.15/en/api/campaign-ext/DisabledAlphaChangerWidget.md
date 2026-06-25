---
title: "DisabledAlphaChangerWidget"
description: "Auto-generated class reference for DisabledAlphaChangerWidget."
---
# DisabledAlphaChangerWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class DisabledAlphaChangerWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/DisabledAlphaChangerWidget.cs`

## Overview

`DisabledAlphaChangerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `DisabledAlphaChangerWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `DisabledAlpha` | `public float DisabledAlpha { get; set; }` |
| `AnimationDuration` | `public float AnimationDuration { get; set; }` |
| `UpdateChildrenAlphas` | `public bool UpdateChildrenAlphas { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
DisabledAlphaChangerWidget widget = ...;
```

## See Also

- [Area Index](../)