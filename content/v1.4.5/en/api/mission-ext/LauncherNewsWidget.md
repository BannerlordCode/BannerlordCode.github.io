---
title: "LauncherNewsWidget"
description: "Auto-generated class reference for LauncherNewsWidget."
---
# LauncherNewsWidget

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherNewsWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets/LauncherNewsWidget.cs`

## Overview

`LauncherNewsWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `LauncherNewsWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TimeToShowNewsItemInSeconds` | `public float TimeToShowNewsItemInSeconds { get; set; }` |
| `RadioButtonContainer` | `public ListPanel RadioButtonContainer { get; set; }` |
| `TimeLeftFillWidget` | `public Widget TimeLeftFillWidget { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
LauncherNewsWidget widget = ...;
```

## See Also

- [Area Index](../)