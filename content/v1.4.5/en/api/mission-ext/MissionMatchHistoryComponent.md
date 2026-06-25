---
title: "MissionMatchHistoryComponent"
description: "Auto-generated class reference for MissionMatchHistoryComponent."
---
# MissionMatchHistoryComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMatchHistoryComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MissionMatchHistoryComponent.cs`

## Overview

`MissionMatchHistoryComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MissionMatchHistoryComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CreateIfConditionsAreMet
`public static MissionMatchHistoryComponent CreateIfConditionsAreMet()`

**Purpose:** Constructs a new if conditions are met entity and returns it to the caller.

```csharp
// Static call; no instance required
MissionMatchHistoryComponent.CreateIfConditionsAreMet();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of MissionMatchHistoryComponent from the subsystem API first
MissionMatchHistoryComponent missionMatchHistoryComponent = ...;
missionMatchHistoryComponent.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionMatchHistoryComponent from the subsystem API first
MissionMatchHistoryComponent missionMatchHistoryComponent = ...;
missionMatchHistoryComponent.AfterStart();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the remove behavior event is raised.

```csharp
// Obtain an instance of MissionMatchHistoryComponent from the subsystem API first
MissionMatchHistoryComponent missionMatchHistoryComponent = ...;
missionMatchHistoryComponent.OnRemoveBehavior();
```

## Usage Example

```csharp
var component = agent.GetComponent<MissionMatchHistoryComponent>();
```

## See Also

- [Area Index](../)