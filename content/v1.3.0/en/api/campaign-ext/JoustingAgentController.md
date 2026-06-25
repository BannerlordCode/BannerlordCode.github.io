---
title: "JoustingAgentController"
description: "Auto-generated class reference for JoustingAgentController."
---
# JoustingAgentController

**Namespace:** SandBox.Tournaments.AgentControllers
**Module:** SandBox.Tournaments
**Type:** `public class JoustingAgentController : AgentController`
**Base:** `AgentController`
**File:** `SandBox/Tournaments/AgentControllers/JoustingAgentController.cs`

## Overview

`JoustingAgentController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `JoustingAgentController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `State` | `public JoustingAgentController.JoustingAgentState State { get; set; }` |
| `JoustingMissionController` | `public TournamentJoustingMissionController JoustingMissionController { get; }` |
| `Opponent` | `public Agent Opponent { get; }` |
| `PrepareEquipmentsAfterDismount` | `public bool PrepareEquipmentsAfterDismount { get; }` |

## Key Methods

### OnInitialize
`public override void OnInitialize()`

**Purpose:** Invoked when the `initialize` event is raised.

```csharp
// Obtain an instance of JoustingAgentController from the subsystem API first
JoustingAgentController joustingAgentController = ...;
joustingAgentController.OnInitialize();
```

### UpdateState
`public void UpdateState()`

**Purpose:** Recalculates and stores the latest representation of `state`.

```csharp
// Obtain an instance of JoustingAgentController from the subsystem API first
JoustingAgentController joustingAgentController = ...;
joustingAgentController.UpdateState();
```

### PrepareAgentToSwordDuel
`public void PrepareAgentToSwordDuel()`

**Purpose:** Finishes prerequisite setup for the upcoming `agent to sword duel` operation.

```csharp
// Obtain an instance of JoustingAgentController from the subsystem API first
JoustingAgentController joustingAgentController = ...;
joustingAgentController.PrepareAgentToSwordDuel();
```

### PrepareEquipmentsForSwordDuel
`public void PrepareEquipmentsForSwordDuel()`

**Purpose:** Finishes prerequisite setup for the upcoming `equipments for sword duel` operation.

```csharp
// Obtain an instance of JoustingAgentController from the subsystem API first
JoustingAgentController joustingAgentController = ...;
joustingAgentController.PrepareEquipmentsForSwordDuel();
```

### IsRiding
`public bool IsRiding()`

**Purpose:** Determines whether the current object is in the `riding` state or condition.

```csharp
// Obtain an instance of JoustingAgentController from the subsystem API first
JoustingAgentController joustingAgentController = ...;
var result = joustingAgentController.IsRiding();
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<JoustingAgentController>();
```

## See Also

- [Area Index](../)