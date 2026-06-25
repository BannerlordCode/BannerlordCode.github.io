---
title: "ResetAnimationOnStopUsageComponent"
description: "Auto-generated class reference for ResetAnimationOnStopUsageComponent."
---
# ResetAnimationOnStopUsageComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ResetAnimationOnStopUsageComponent : UsableMissionObjectComponent`
**Base:** `UsableMissionObjectComponent`
**File:** `TaleWorlds.MountAndBlade/ResetAnimationOnStopUsageComponent.cs`

## Overview

`ResetAnimationOnStopUsageComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `ResetAnimationOnStopUsageComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### UpdateSuccessfulResetAction
`public void UpdateSuccessfulResetAction(ActionIndexCache successfulResetActionCode)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of successful reset action.

```csharp
// Obtain an instance of ResetAnimationOnStopUsageComponent from the subsystem API first
ResetAnimationOnStopUsageComponent resetAnimationOnStopUsageComponent = ...;
resetAnimationOnStopUsageComponent.UpdateSuccessfulResetAction(successfulResetActionCode);
```

## Usage Example

```csharp
var component = agent.GetComponent<ResetAnimationOnStopUsageComponent>();
```

## See Also

- [Area Index](../)