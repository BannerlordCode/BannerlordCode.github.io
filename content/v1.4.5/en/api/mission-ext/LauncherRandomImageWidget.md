---
title: "LauncherRandomImageWidget"
description: "Auto-generated class reference for LauncherRandomImageWidget."
---
# LauncherRandomImageWidget

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherRandomImageWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets/LauncherRandomImageWidget.cs`

## Overview

`LauncherRandomImageWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `LauncherRandomImageWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ImageCount` | `public int ImageCount { get; set; }` |
| `ChangeTrigger` | `public bool ChangeTrigger { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
LauncherRandomImageWidget widget = ...;
```

## See Also

- [Area Index](../)