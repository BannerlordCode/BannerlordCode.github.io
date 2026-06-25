---
title: "LoadingWindowWidget"
description: "Auto-generated class reference for LoadingWindowWidget."
---
# LoadingWindowWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Loading
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LoadingWindowWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Loading/LoadingWindowWidget.cs`

## Overview

`LoadingWindowWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `LoadingWindowWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AnimWidget` | `public Widget AnimWidget { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `ImageName` | `public string ImageName { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
LoadingWindowWidget widget = ...;
```

## See Also

- [Area Index](../)