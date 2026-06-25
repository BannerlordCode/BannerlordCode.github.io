---
title: "VictoryComponent"
description: "Auto-generated class reference for VictoryComponent."
---
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

**Purpose:** Verifies whether `timer` holds true for the current object.

```csharp
// Obtain an instance of VictoryComponent from the subsystem API first
VictoryComponent victoryComponent = ...;
var result = victoryComponent.CheckTimer();
```

### ChangeTimerDuration
`public void ChangeTimerDuration(float min, float max)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of VictoryComponent from the subsystem API first
VictoryComponent victoryComponent = ...;
victoryComponent.ChangeTimerDuration(0, 0);
```

## Usage Example

```csharp
var component = agent.GetComponent<VictoryComponent>();
```

## See Also

- [Area Index](../)