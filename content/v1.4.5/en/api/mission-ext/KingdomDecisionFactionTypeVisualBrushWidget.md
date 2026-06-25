---
title: "KingdomDecisionFactionTypeVisualBrushWidget"
description: "Auto-generated class reference for KingdomDecisionFactionTypeVisualBrushWidget."
---
# KingdomDecisionFactionTypeVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class KingdomDecisionFactionTypeVisualBrushWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom/KingdomDecisionFactionTypeVisualBrushWidget.cs`

## Overview

`KingdomDecisionFactionTypeVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `KingdomDecisionFactionTypeVisualBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `FactionName` | `public string FactionName { get; set; }` |

## Key Methods

### KingdomDecisionFactionTypeVisualBrushWidget
`public class KingdomDecisionFactionTypeVisualBrushWidget(UIContext context)`

**Purpose:** **Purpose:** Executes the KingdomDecisionFactionTypeVisualBrushWidget logic.

```csharp
// Obtain an instance of KingdomDecisionFactionTypeVisualBrushWidget from the subsystem API first
KingdomDecisionFactionTypeVisualBrushWidget kingdomDecisionFactionTypeVisualBrushWidget = ...;
var result = kingdomDecisionFactionTypeVisualBrushWidget.KingdomDecisionFactionTypeVisualBrushWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
KingdomDecisionFactionTypeVisualBrushWidget widget = ...;
```

## See Also

- [Area Index](../)