---
title: "MultiplayerPracticeMissionComponent"
description: "Auto-generated class reference for MultiplayerPracticeMissionComponent."
---
# MultiplayerPracticeMissionComponent

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPracticeMissionComponent : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.Missions/MultiplayerPracticeMissionComponent.cs`

## Overview

`MultiplayerPracticeMissionComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MultiplayerPracticeMissionComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MultiplayerPracticeMissionComponent from the subsystem API first
MultiplayerPracticeMissionComponent multiplayerPracticeMissionComponent = ...;
multiplayerPracticeMissionComponent.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MultiplayerPracticeMissionComponent from the subsystem API first
MultiplayerPracticeMissionComponent multiplayerPracticeMissionComponent = ...;
multiplayerPracticeMissionComponent.OnMissionTick(0);
```

## Usage Example

```csharp
var component = agent.GetComponent<MultiplayerPracticeMissionComponent>();
```

## See Also

- [Area Index](../)