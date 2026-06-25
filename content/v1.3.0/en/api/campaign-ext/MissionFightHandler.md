---
title: "MissionFightHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionFightHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionFightHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionFightHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MissionFightHandler.cs`

## Overview

`MissionFightHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionFightHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinMissionEndTime` | `public float MinMissionEndTime { get; }` |
| `PlayerSideAgents` | `public ReadOnlyCollection<Agent> PlayerSideAgents { get; }` |
| `OpponentSideAgents` | `public ReadOnlyCollection<Agent> OpponentSideAgents { get; }` |
| `IsPlayerSideWon` | `public bool IsPlayerSideWon { get; }` |

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Handles logic related to `early start`.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Called when the `agent removed` event is raised.

### StartCustomFight
`public void StartCustomFight(List<Agent> playerSideAgents, List<Agent> opponentSideAgents, bool dropWeapons, bool isItemUseDisabled, MissionFightHandler.OnFightEndDelegate onFightEndDelegate, float minimumEndTime = 1E-45f)`

**Purpose:** Handles logic related to `start custom fight`.

### StartFistFight
`public void StartFistFight(Agent opponent, MissionFightHandler.OnFightEndDelegate onFightEndDelegate, float minimumEndTime = 1E-45f)`

**Purpose:** Handles logic related to `start fist fight`.

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

**Purpose:** Called when the `end mission request` event is raised.

### GetAgentToSpectate
`public static Agent GetAgentToSpectate()`

**Purpose:** Gets the current value of `agent to spectate`.

### BeginEndFight
`public void BeginEndFight()`

**Purpose:** Handles logic related to `begin end fight`.

### EndFight
`public void EndFight(bool overrideDuelWonByPlayer = false)`

**Purpose:** Handles logic related to `end fight`.

### IsThereActiveFight
`public bool IsThereActiveFight()`

**Purpose:** Handles logic related to `is there active fight`.

### AddAgentToSide
`public void AddAgentToSide(Agent agent, bool isPlayerSide)`

**Purpose:** Adds `agent to side` to the current collection or state.

### GetDangerSources
`public IEnumerable<Agent> GetDangerSources(Agent ownerAgent)`

**Purpose:** Gets the current value of `danger sources`.

### IsAgentAggressive
`public static bool IsAgentAggressive(Agent agent)`

**Purpose:** Handles logic related to `is agent aggressive`.

### IsAgentJusticeWarrior
`public static bool IsAgentJusticeWarrior(CharacterObject character)`

**Purpose:** Handles logic related to `is agent justice warrior`.

### IsAgentVillian
`public static bool IsAgentVillian(CharacterObject character)`

**Purpose:** Handles logic related to `is agent villian`.

### OnFightEndDelegate
`public delegate void OnFightEndDelegate(bool isPlayerSideWon)`

**Purpose:** Called when the `fight end delegate` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionFightHandler());
```

## See Also

- [Complete Class Catalog](../catalog)