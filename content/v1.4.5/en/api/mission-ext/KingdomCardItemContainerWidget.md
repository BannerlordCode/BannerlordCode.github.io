---
title: "KingdomCardItemContainerWidget"
description: "Auto-generated class reference for KingdomCardItemContainerWidget."
---
# KingdomCardItemContainerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class KingdomCardItemContainerWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom/KingdomCardItemContainerWidget.cs`

## Overview

`KingdomCardItemContainerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `KingdomCardItemContainerWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### KingdomCardItemContainerWidget
`public class KingdomCardItemContainerWidget(UIContext context)`

**Purpose:** Executes the KingdomCardItemContainerWidget logic.

```csharp
// Obtain an instance of KingdomCardItemContainerWidget from the subsystem API first
KingdomCardItemContainerWidget kingdomCardItemContainerWidget = ...;
var result = kingdomCardItemContainerWidget.KingdomCardItemContainerWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
KingdomCardItemContainerWidget widget = ...;
```

## See Also

- [Area Index](../)