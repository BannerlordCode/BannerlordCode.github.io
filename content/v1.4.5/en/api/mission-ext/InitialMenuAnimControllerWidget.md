---
title: "InitialMenuAnimControllerWidget"
description: "Auto-generated class reference for InitialMenuAnimControllerWidget."
---
# InitialMenuAnimControllerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InitialMenuAnimControllerWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/InitialMenuAnimControllerWidget.cs`

## Overview

`InitialMenuAnimControllerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `InitialMenuAnimControllerWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsAnimEnabled` | `public bool IsAnimEnabled { get; set; }` |
| `OptionsList` | `public Widget OptionsList { get; set; }` |
| `InitialWaitTime` | `public float InitialWaitTime { get; set; }` |
| `WaitTimeBetweenOptions` | `public float WaitTimeBetweenOptions { get; set; }` |
| `OptionFadeInTime` | `public float OptionFadeInTime { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
InitialMenuAnimControllerWidget widget = ...;
```

## See Also

- [Area Index](../)