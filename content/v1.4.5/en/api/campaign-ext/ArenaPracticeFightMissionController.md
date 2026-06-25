---
title: "ArenaPracticeFightMissionController"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArenaPracticeFightMissionController`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ArenaPracticeFightMissionController

**Namespace:** SandBox.Missions.MissionLogics.Arena
**Module:** SandBox.Missions
**Type:** `public class ArenaPracticeFightMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Arena/ArenaPracticeFightMissionController.cs`

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

**Purpose:** Handles logic related to `after start`.

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**Purpose:** Called when the `score hit` event is raised.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Called when the `agent removed` event is raised.

### MissionEnded
`public override bool MissionEnded(ref MissionResult missionResult)`

**Purpose:** Handles logic related to `mission ended`.

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

**Purpose:** Called when the `end mission request` event is raised.

### StartPlayerPractice
`public void StartPlayerPractice()`

**Purpose:** Handles logic related to `start player practice`.

### GetParticipantCharacters
`public static List<CharacterObject> GetParticipantCharacters(Settlement settlement)`

**Purpose:** Gets the current value of `participant characters`.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<ArenaPracticeFightMissionController>();
```

## See Also

- [Complete Class Catalog](../catalog)