---
title: "AgentLockVisualBrushWidget"
description: "Auto-generated class reference for AgentLockVisualBrushWidget."
---
# AgentLockVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentLockVisualBrushWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission/AgentLockVisualBrushWidget.cs`

## Overview

`AgentLockVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `AgentLockVisualBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Position` | `public Vec2 Position { get; set; }` |
| `LockState` | `public int LockState { get; set; }` |

## Key Methods

### AgentLockVisualBrushWidget
`public class AgentLockVisualBrushWidget(UIContext context)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentLockVisualBrushWidget from the subsystem API first
AgentLockVisualBrushWidget agentLockVisualBrushWidget = ...;
var result = agentLockVisualBrushWidget.AgentLockVisualBrushWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
AgentLockVisualBrushWidget widget = ...;
```

## See Also

- [Area Index](../)