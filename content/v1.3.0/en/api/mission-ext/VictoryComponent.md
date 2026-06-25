---
title: "VictoryComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VictoryComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# VictoryComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VictoryComponent : AgentComponent`
**Base:** `AgentComponent`
**File:** `TaleWorlds.MountAndBlade/VictoryComponent.cs`

## Overview

`VictoryComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `VictoryComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CheckTimer
`public bool CheckTimer()`

**Purpose:** Handles logic related to `check timer`.

### ChangeTimerDuration
`public void ChangeTimerDuration(float min, float max)`

**Purpose:** Handles logic related to `change timer duration`.

## Usage Example

```csharp
var component = agent.GetComponent<VictoryComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)