---
title: "ParallaxContainerWidget"
description: "Auto-generated class reference for ParallaxContainerWidget."
---
# ParallaxContainerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ParallaxContainerWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ParallaxContainerWidget.cs`

## Overview

`ParallaxContainerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ParallaxContainerWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ParallaxContainerWidget widget = ...;
```

## See Also

- [Area Index](../)