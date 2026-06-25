---
title: "GauntletOrderUIHandler"
description: "Auto-generated class reference for GauntletOrderUIHandler."
---
# GauntletOrderUIHandler

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class GauntletOrderUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/GauntletOrderUIHandler.cs`

## Overview

`GauntletOrderUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `GauntletOrderUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDeployment` | `public abstract bool IsDeployment { get; }` |
| `IsSiegeDeployment` | `public abstract bool IsSiegeDeployment { get; }` |
| `IsValidForTick` | `public abstract bool IsValidForTick { get; }` |
| `CursorState` | `public CursorStates CursorState { get; }` |
| `IsOrderMenuActive` | `public bool IsOrderMenuActive { get; }` |
| `IsAnyOrderSetActive` | `public bool IsAnyOrderSetActive { get; }` |
| `IsViewCreated` | `public bool IsViewCreated { get; }` |

## Key Methods

### SelectFormationAtIndex
`public virtual void SelectFormationAtIndex(int index)`

**Purpose:** Executes the SelectFormationAtIndex logic.

```csharp
// Obtain an instance of GauntletOrderUIHandler from the subsystem API first
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
gauntletOrderUIHandler.SelectFormationAtIndex(0);
```

### DeselectFormationAtIndex
`public virtual void DeselectFormationAtIndex(int index)`

**Purpose:** Executes the DeselectFormationAtIndex logic.

```csharp
// Obtain an instance of GauntletOrderUIHandler from the subsystem API first
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
gauntletOrderUIHandler.DeselectFormationAtIndex(0);
```

### OnMissionScreenActivate
`public override void OnMissionScreenActivate()`

**Purpose:** Invoked when the mission screen activate event is raised.

```csharp
// Obtain an instance of GauntletOrderUIHandler from the subsystem API first
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
gauntletOrderUIHandler.OnMissionScreenActivate();
```

### OnMissionScreenDeactivate
`public override void OnMissionScreenDeactivate()`

**Purpose:** Invoked when the mission screen deactivate event is raised.

```csharp
// Obtain an instance of GauntletOrderUIHandler from the subsystem API first
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
gauntletOrderUIHandler.OnMissionScreenDeactivate();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of GauntletOrderUIHandler from the subsystem API first
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
gauntletOrderUIHandler.OnMissionScreenTick(0);
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** Invoked when the agent build event is raised.

```csharp
// Obtain an instance of GauntletOrderUIHandler from the subsystem API first
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
gauntletOrderUIHandler.OnAgentBuild(agent, banner);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of GauntletOrderUIHandler from the subsystem API first
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
gauntletOrderUIHandler.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnEscape
`public override bool OnEscape()`

**Purpose:** Invoked when the escape event is raised.

```csharp
// Obtain an instance of GauntletOrderUIHandler from the subsystem API first
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
var result = gauntletOrderUIHandler.OnEscape();
```

### IsReady
`public override bool IsReady()`

**Purpose:** Determines whether the this instance is in the ready state or condition.

```csharp
// Obtain an instance of GauntletOrderUIHandler from the subsystem API first
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
var result = gauntletOrderUIHandler.IsReady();
```

### OnActivateToggleOrder
`public void OnActivateToggleOrder()`

**Purpose:** Invoked when the activate toggle order event is raised.

```csharp
// Obtain an instance of GauntletOrderUIHandler from the subsystem API first
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
gauntletOrderUIHandler.OnActivateToggleOrder();
```

### OnDeactivateToggleOrder
`public void OnDeactivateToggleOrder()`

**Purpose:** Invoked when the deactivate toggle order event is raised.

```csharp
// Obtain an instance of GauntletOrderUIHandler from the subsystem API first
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
gauntletOrderUIHandler.OnDeactivateToggleOrder();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
GauntletOrderUIHandler instance = ...;
```

## See Also

- [Area Index](../)