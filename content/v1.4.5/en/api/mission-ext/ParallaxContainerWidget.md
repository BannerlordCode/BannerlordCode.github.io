---
title: "ParallaxContainerWidget"
description: "Auto-generated class reference for ParallaxContainerWidget."
---
# ParallaxContainerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ParallaxContainerWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/ParallaxContainerWidget.cs`

## Overview

`ParallaxContainerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ParallaxContainerWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ParallaxContainerWidget
`public class ParallaxContainerWidget(UIContext context)`

**Purpose:** **Purpose:** Executes the ParallaxContainerWidget logic.

```csharp
// Obtain an instance of ParallaxContainerWidget from the subsystem API first
ParallaxContainerWidget parallaxContainerWidget = ...;
var result = parallaxContainerWidget.ParallaxContainerWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ParallaxContainerWidget widget = ...;
```

## See Also

- [Area Index](../)