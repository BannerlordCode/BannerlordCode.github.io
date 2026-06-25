---
title: "ArenaPracticeFightMissionController"
description: "Auto-generated class reference for ArenaPracticeFightMissionController."
---
# ArenaPracticeFightMissionController

**Namespace:** SandBox.Missions.MissionLogics.Arena
**Module:** SandBox.Missions
**Type:** `public class ArenaPracticeFightMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Arena/ArenaPracticeFightMissionController.cs`

## Overview

`ArenaPracticeFightMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `ArenaPracticeFightMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `RemainingOpponentCountFromLastPractice` | `public int RemainingOpponentCountFromLastPractice { get; }` |
| `IsPlayerPracticing` | `public bool IsPlayerPracticing { get; }` |
| `OpponentCountBeatenByPlayer` | `public int OpponentCountBeatenByPlayer { get; }` |
| `IsPlayerSurvived` | `public bool IsPlayerSurvived { get; }` |
| `AfterPractice` | `public bool AfterPractice { get; set; }` |

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of ArenaPracticeFightMissionController from the subsystem API first
ArenaPracticeFightMissionController arenaPracticeFightMissionController = ...;
arenaPracticeFightMissionController.AfterStart();
```

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**Purpose:** Invoked when the score hit event is raised.

```csharp
// Obtain an instance of ArenaPracticeFightMissionController from the subsystem API first
ArenaPracticeFightMissionController arenaPracticeFightMissionController = ...;
arenaPracticeFightMissionController.OnScoreHit(affectedAgent, affectorAgent, attackerWeapon, false, false, blow, collisionData, 0, 0, 0);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of ArenaPracticeFightMissionController from the subsystem API first
ArenaPracticeFightMissionController arenaPracticeFightMissionController = ...;
arenaPracticeFightMissionController.OnMissionTick(0);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of ArenaPracticeFightMissionController from the subsystem API first
ArenaPracticeFightMissionController arenaPracticeFightMissionController = ...;
arenaPracticeFightMissionController.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### MissionEnded
`public override bool MissionEnded(ref MissionResult missionResult)`

**Purpose:** Executes the MissionEnded logic.

```csharp
// Obtain an instance of ArenaPracticeFightMissionController from the subsystem API first
ArenaPracticeFightMissionController arenaPracticeFightMissionController = ...;
var result = arenaPracticeFightMissionController.MissionEnded(missionResult);
```

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

**Purpose:** Invoked when the end mission request event is raised.

```csharp
// Obtain an instance of ArenaPracticeFightMissionController from the subsystem API first
ArenaPracticeFightMissionController arenaPracticeFightMissionController = ...;
var result = arenaPracticeFightMissionController.OnEndMissionRequest(canPlayerLeave);
```

### StartPlayerPractice
`public void StartPlayerPractice()`

**Purpose:** Starts the player practice flow or state machine.

```csharp
// Obtain an instance of ArenaPracticeFightMissionController from the subsystem API first
ArenaPracticeFightMissionController arenaPracticeFightMissionController = ...;
arenaPracticeFightMissionController.StartPlayerPractice();
```

### GetParticipantCharacters
`public static List<CharacterObject> GetParticipantCharacters(Settlement settlement)`

**Purpose:** Reads and returns the participant characters value held by the this instance.

```csharp
// Static call; no instance required
ArenaPracticeFightMissionController.GetParticipantCharacters(settlement);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<ArenaPracticeFightMissionController>();
```

## See Also

- [Area Index](../)