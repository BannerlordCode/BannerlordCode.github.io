---
title: "MissionRecentPlayersComponent"
description: "Auto-generated class reference for MissionRecentPlayersComponent."
---
# MissionRecentPlayersComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionRecentPlayersComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MissionRecentPlayersComponent.cs`

## Overview

`MissionRecentPlayersComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MissionRecentPlayersComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionRecentPlayersComponent from the subsystem API first
MissionRecentPlayersComponent missionRecentPlayersComponent = ...;
missionRecentPlayersComponent.AfterStart();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the `remove behavior` event is raised.

```csharp
// Obtain an instance of MissionRecentPlayersComponent from the subsystem API first
MissionRecentPlayersComponent missionRecentPlayersComponent = ...;
missionRecentPlayersComponent.OnRemoveBehavior();
```

## Usage Example

```csharp
var component = agent.GetComponent<MissionRecentPlayersComponent>();
```

## See Also

- [Area Index](../)