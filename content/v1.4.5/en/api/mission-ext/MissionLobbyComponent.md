---
title: "MissionLobbyComponent"
description: "Auto-generated class reference for MissionLobbyComponent."
---
# MissionLobbyComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionLobbyComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionLobbyComponent.cs`

## Overview

`MissionLobbyComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MissionLobbyComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsInWarmup` | `public bool IsInWarmup { get; set; }` |
| `MissionType` | `public MultiplayerGameType MissionType { get; }` |
| `CurrentMultiplayerState` | `public MultiplayerGameState CurrentMultiplayerState { get; }` |

## Key Methods

### AddLobbyComponentType
`public static void AddLobbyComponentType(Type type, LobbyMissionType missionType, bool isSeverComponent)`

**Purpose:** **Purpose:** Adds lobby component type to the current collection or state.

```csharp
// Static call; no instance required
MissionLobbyComponent.AddLobbyComponentType(type, missionType, false);
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** **Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of MissionLobbyComponent from the subsystem API first
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.OnBehaviorInitialize();
```

### CreateBehavior
`public static MissionLobbyComponent CreateBehavior()`

**Purpose:** **Purpose:** Constructs a new behavior entity and returns it to the caller.

```csharp
// Static call; no instance required
MissionLobbyComponent.CreateBehavior();
```

### QuitMission
`public virtual void QuitMission()`

**Purpose:** **Purpose:** Executes the QuitMission logic.

```csharp
// Obtain an instance of MissionLobbyComponent from the subsystem API first
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.QuitMission();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionLobbyComponent from the subsystem API first
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.AfterStart();
```

### EarlyStart
`public override void EarlyStart()`

**Purpose:** **Purpose:** Executes the EarlyStart logic.

```csharp
// Obtain an instance of MissionLobbyComponent from the subsystem API first
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.EarlyStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MissionLobbyComponent from the subsystem API first
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.OnMissionTick(0);
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** **Purpose:** Invoked when the remove behavior event is raised.

```csharp
// Obtain an instance of MissionLobbyComponent from the subsystem API first
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.OnRemoveBehavior();
```

### IsClassAvailable
`public bool IsClassAvailable(FormationClass formationClass)`

**Purpose:** **Purpose:** Determines whether the this instance is in the class available state or condition.

```csharp
// Obtain an instance of MissionLobbyComponent from the subsystem API first
MissionLobbyComponent missionLobbyComponent = ...;
var result = missionLobbyComponent.IsClassAvailable(formationClass);
```

### ChangeClassRestriction
`public void ChangeClassRestriction(FormationClass classToChangeRestriction, bool value)`

**Purpose:** **Purpose:** Executes the ChangeClassRestriction logic.

```csharp
// Obtain an instance of MissionLobbyComponent from the subsystem API first
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.ChangeClassRestriction(classToChangeRestriction, false);
```

### DespawnPlayer
`public void DespawnPlayer(MissionPeer missionPeer)`

**Purpose:** **Purpose:** Executes the DespawnPlayer logic.

```csharp
// Obtain an instance of MissionLobbyComponent from the subsystem API first
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.DespawnPlayer(missionPeer);
```

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**Purpose:** **Purpose:** Invoked when the score hit event is raised.

```csharp
// Obtain an instance of MissionLobbyComponent from the subsystem API first
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.OnScoreHit(affectedAgent, affectorAgent, attackerWeapon, false, false, blow, collisionData, 0, 0, 0);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of MissionLobbyComponent from the subsystem API first
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** **Purpose:** Invoked when the agent build event is raised.

```csharp
// Obtain an instance of MissionLobbyComponent from the subsystem API first
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.OnAgentBuild(agent, banner);
```

### OnClearScene
`public override void OnClearScene()`

**Purpose:** **Purpose:** Invoked when the clear scene event is raised.

```csharp
// Obtain an instance of MissionLobbyComponent from the subsystem API first
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.OnClearScene();
```

### GetSpawnPeriodDurationForPeer
`public static int GetSpawnPeriodDurationForPeer(MissionPeer peer)`

**Purpose:** **Purpose:** Reads and returns the spawn period duration for peer value held by the this instance.

```csharp
// Static call; no instance required
MissionLobbyComponent.GetSpawnPeriodDurationForPeer(peer);
```

### SetStateEndingAsServer
`public virtual void SetStateEndingAsServer()`

**Purpose:** **Purpose:** Assigns a new value to state ending as server and updates the object's internal state.

```csharp
// Obtain an instance of MissionLobbyComponent from the subsystem API first
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.SetStateEndingAsServer();
```

### RequestCultureSelection
`public void RequestCultureSelection()`

**Purpose:** **Purpose:** Executes the RequestCultureSelection logic.

```csharp
// Obtain an instance of MissionLobbyComponent from the subsystem API first
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.RequestCultureSelection();
```

### RequestAdminMessage
`public void RequestAdminMessage(string message, bool isBroadcast)`

**Purpose:** **Purpose:** Executes the RequestAdminMessage logic.

```csharp
// Obtain an instance of MissionLobbyComponent from the subsystem API first
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.RequestAdminMessage("example", false);
```

### RequestTroopSelection
`public void RequestTroopSelection()`

**Purpose:** **Purpose:** Executes the RequestTroopSelection logic.

```csharp
// Obtain an instance of MissionLobbyComponent from the subsystem API first
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.RequestTroopSelection();
```

### OnCultureSelected
`public void OnCultureSelected(BasicCultureObject culture)`

**Purpose:** **Purpose:** Invoked when the culture selected event is raised.

```csharp
// Obtain an instance of MissionLobbyComponent from the subsystem API first
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.OnCultureSelected(culture);
```

### GetRandomFaceSeedForCharacter
`public int GetRandomFaceSeedForCharacter(BasicCharacterObject character, int addition = 0)`

**Purpose:** **Purpose:** Reads and returns the random face seed for character value held by the this instance.

```csharp
// Obtain an instance of MissionLobbyComponent from the subsystem API first
MissionLobbyComponent missionLobbyComponent = ...;
var result = missionLobbyComponent.GetRandomFaceSeedForCharacter(character, 0);
```

### MPHostChangeParam
`public static string MPHostChangeParam(List<string> strings)`

**Purpose:** **Purpose:** Executes the MPHostChangeParam logic.

```csharp
// Static call; no instance required
MissionLobbyComponent.MPHostChangeParam(strings);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MissionLobbyComponent instance = ...;
```

## See Also

- [Area Index](../)