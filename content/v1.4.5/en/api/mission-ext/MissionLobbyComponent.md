---
title: "MissionLobbyComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionLobbyComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionLobbyComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionLobbyComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionLobbyComponent.cs`

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

**Purpose:** Adds `lobby component type` to the current collection or state.

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### CreateBehavior
`public static MissionLobbyComponent CreateBehavior()`

**Purpose:** Creates a new `behavior` instance or object.

### QuitMission
`public virtual void QuitMission()`

**Purpose:** Handles logic related to `quit mission`.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Handles logic related to `early start`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

### IsClassAvailable
`public bool IsClassAvailable(FormationClass formationClass)`

**Purpose:** Handles logic related to `is class available`.

### ChangeClassRestriction
`public void ChangeClassRestriction(FormationClass classToChangeRestriction, bool value)`

**Purpose:** Handles logic related to `change class restriction`.

### DespawnPlayer
`public void DespawnPlayer(MissionPeer missionPeer)`

**Purpose:** Handles logic related to `despawn player`.

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**Purpose:** Called when the `score hit` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Called when the `agent removed` event is raised.

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** Called when the `agent build` event is raised.

### OnClearScene
`public override void OnClearScene()`

**Purpose:** Called when the `clear scene` event is raised.

### GetSpawnPeriodDurationForPeer
`public static int GetSpawnPeriodDurationForPeer(MissionPeer peer)`

**Purpose:** Gets the current value of `spawn period duration for peer`.

### SetStateEndingAsServer
`public virtual void SetStateEndingAsServer()`

**Purpose:** Sets the value or state of `state ending as server`.

### RequestCultureSelection
`public void RequestCultureSelection()`

**Purpose:** Handles logic related to `request culture selection`.

### RequestAdminMessage
`public void RequestAdminMessage(string message, bool isBroadcast)`

**Purpose:** Handles logic related to `request admin message`.

### RequestTroopSelection
`public void RequestTroopSelection()`

**Purpose:** Handles logic related to `request troop selection`.

### OnCultureSelected
`public void OnCultureSelected(BasicCultureObject culture)`

**Purpose:** Called when the `culture selected` event is raised.

### GetRandomFaceSeedForCharacter
`public int GetRandomFaceSeedForCharacter(BasicCharacterObject character, int addition = 0)`

**Purpose:** Gets the current value of `random face seed for character`.

### MPHostChangeParam
`public static string MPHostChangeParam(List<string> strings)`

**Purpose:** Handles logic related to `m p host change param`.

## Usage Example

```csharp
var implementation = new CustomMissionLobbyComponent();
```

## See Also

- [Complete Class Catalog](../catalog)