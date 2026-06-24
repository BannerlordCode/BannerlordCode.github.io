<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMultiplayerGameModeFlagDominationClient`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionMultiplayerGameModeFlagDominationClient

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerGameModeFlagDominationClient : MissionMultiplayerGameModeBaseClient, ICommanderInfo, IMissionBehavior`
**Base:** `MissionMultiplayerGameModeBaseClient`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerGameModeFlagDominationClient.cs`

## Overview

`MissionMultiplayerGameModeFlagDominationClient` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsGameModeUsingGold` | `public override bool IsGameModeUsingGold { get; }` |
| `IsGameModeTactical` | `public override bool IsGameModeTactical { get; }` |
| `IsGameModeUsingRoundCountdown` | `public override bool IsGameModeUsingRoundCountdown { get; }` |
| `GameType` | `public override MultiplayerGameType GameType { get; }` |
| `IsGameModeUsingCasualGold` | `public override bool IsGameModeUsingCasualGold { get; }` |
| `AllCapturePoints` | `public IEnumerable<FlagCapturePoint> AllCapturePoints { get; }` |
| `AreMoralesIndependent` | `public bool AreMoralesIndependent { get; }` |

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnPreparationEnded
`public void OnPreparationEnded()`

**Purpose:** Called when the `preparation ended` event is raised.

### GetMissionCameraLockMode
`public override SpectatorCameraTypes GetMissionCameraLockMode(bool lockedToMainPlayer)`

**Purpose:** Gets the current value of `mission camera lock mode`.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `agent removed` event is raised.

### OnClearScene
`public override void OnClearScene()`

**Purpose:** Called when the `clear scene` event is raised.

### GetFlagOwner
`public Team GetFlagOwner(FlagCapturePoint flag)`

**Purpose:** Gets the current value of `flag owner`.

### OnTeamPowerChanged
`public void OnTeamPowerChanged(BattleSideEnum teamSide, float power)`

**Purpose:** Called when the `team power changed` event is raised.

### OnMoraleChanged
`public void OnMoraleChanged(float morale)`

**Purpose:** Called when the `morale changed` event is raised.

### OnGoldAmountChangedForRepresentative
`public override void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative, int goldAmount)`

**Purpose:** Called when the `gold amount changed for representative` event is raised.

### OnNumberOfFlagsChanged
`public void OnNumberOfFlagsChanged()`

**Purpose:** Called when the `number of flags changed` event is raised.

### OnBotsControlledChanged
`public void OnBotsControlledChanged(MissionPeer missionPeer, int botAliveCount, int botTotalCount)`

**Purpose:** Called when the `bots controlled changed` event is raised.

### OnCapturePointOwnerChanged
`public void OnCapturePointOwnerChanged(FlagCapturePoint flagCapturePoint, Team ownerTeam)`

**Purpose:** Called when the `capture point owner changed` event is raised.

### OnRequestForfeitSpawn
`public void OnRequestForfeitSpawn()`

**Purpose:** Called when the `request forfeit spawn` event is raised.

### GetCompassTargets
`public override List<CompassItemUpdateParams> GetCompassTargets()`

**Purpose:** Gets the current value of `compass targets`.

### GetGoldAmount
`public override int GetGoldAmount()`

**Purpose:** Gets the current value of `gold amount`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

## Usage Example

```csharp
var value = new MissionMultiplayerGameModeFlagDominationClient();
value.OnBehaviorInitialize();
```

## See Also

- [Complete Class Catalog](../catalog)