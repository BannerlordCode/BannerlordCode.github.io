---
title: "TabToggleWidget"
description: "Auto-generated class reference for TabToggleWidget."
---
# TabToggleWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class TabToggleWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.BaseTypes/TabToggleWidget.cs`

## Overview

`TabToggleWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `TabToggleWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TabControlWidget` | `public TabControl TabControlWidget { get; set; }` |
| `TabName` | `public string TabName { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
TabToggleWidget widget = ...;
```

## See Also

- [Area Index](../)