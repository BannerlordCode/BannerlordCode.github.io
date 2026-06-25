---
title: "AgentWeaponPassiveUsageVisualBrushWidget"
description: "Auto-generated class reference for AgentWeaponPassiveUsageVisualBrushWidget."
---
# AgentWeaponPassiveUsageVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentWeaponPassiveUsageVisualBrushWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission/AgentWeaponPassiveUsageVisualBrushWidget.cs`

## Overview

`AgentWeaponPassiveUsageVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `AgentWeaponPassiveUsageVisualBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CouchLanceState` | `public int CouchLanceState { get; set; }` |

## Key Methods

### AgentWeaponPassiveUsageVisualBrushWidget
`public class AgentWeaponPassiveUsageVisualBrushWidget(UIContext context)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentWeaponPassiveUsageVisualBrushWidget from the subsystem API first
AgentWeaponPassiveUsageVisualBrushWidget agentWeaponPassiveUsageVisualBrushWidget = ...;
var result = agentWeaponPassiveUsageVisualBrushWidget.AgentWeaponPassiveUsageVisualBrushWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
AgentWeaponPassiveUsageVisualBrushWidget widget = ...;
```

## See Also

- [Area Index](../)