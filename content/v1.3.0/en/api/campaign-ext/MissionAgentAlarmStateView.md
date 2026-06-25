---
title: "MissionAgentAlarmStateView"
description: "Auto-generated class reference for MissionAgentAlarmStateView."
---
# MissionAgentAlarmStateView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionAgentAlarmStateView : MissionView`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/MissionAgentAlarmStateView.cs`

## Overview

`MissionAgentAlarmStateView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionAgentAlarmStateView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionAgentAlarmStateView view = ...;
```

## See Also

- [Area Index](../)