---
title: "StringBasedVisibilityWidget"
description: "Auto-generated class reference for StringBasedVisibilityWidget."
---
# StringBasedVisibilityWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class StringBasedVisibilityWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.GauntletUI.ExtraWidgets/TaleWorlds.GauntletUI.ExtraWidgets/StringBasedVisibilityWidget.cs`

## Overview

`StringBasedVisibilityWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `StringBasedVisibilityWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `WatchType` | `public WatchTypes WatchType { get; set; }` |
| `FirstString` | `public string FirstString { get; set; }` |
| `SecondString` | `public string SecondString { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
StringBasedVisibilityWidget widget = ...;
```

## See Also

- [Area Index](../)