<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMultiplayerFlagDomination`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMultiplayerFlagDomination

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerFlagDomination : MissionMultiplayerGameModeBase, IAnalyticsFlagInfo, IMissionBehavior`
**Base:** `MissionMultiplayerGameModeBase`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerFlagDomination.cs`

## Overview

`MissionMultiplayerFlagDomination` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsGameModeHidingAllAgentVisuals` | `public override bool IsGameModeHidingAllAgentVisuals { get; }` |
| `IsGameModeUsingOpposingTeams` | `public override bool IsGameModeUsingOpposingTeams { get; }` |
| `AllCapturePoints` | `public MBReadOnlyList<FlagCapturePoint> AllCapturePoints { get; }` |
| `MoraleRounded` | `public float MoraleRounded { get; }` |
| `GameModeUsesSingleSpawning` | `public bool GameModeUsesSingleSpawning { get; }` |

## Key Methods

### UseGold
`public bool UseGold()`

**Purpose:** Handles logic related to `use gold`.

### AllowCustomPlayerBanners
`public override bool AllowCustomPlayerBanners()`

**Purpose:** Handles logic related to `allow custom player banners`.

### UseRoundController
`public override bool UseRoundController()`

**Purpose:** Handles logic related to `use round controller`.

### GetMissionType
`public override MultiplayerGameType GetMissionType()`

**Purpose:** Gets the current value of `mission type`.

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

### OnPeerChangedTeam
`public override void OnPeerChangedTeam(NetworkCommunicator peer, Team oldTeam, Team newTeam)`

**Purpose:** Called when the `peer changed team` event is raised.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### GetTimeUntilBattleSideVictory
`public float GetTimeUntilBattleSideVictory(BattleSideEnum side)`

**Purpose:** Gets the current value of `time until battle side victory`.

### OnClearScene
`public override void OnClearScene()`

**Purpose:** Called when the `clear scene` event is raised.

### CheckIfOvertime
`public override bool CheckIfOvertime()`

**Purpose:** Handles logic related to `check if overtime`.

### CheckForWarmupEnd
`public override bool CheckForWarmupEnd()`

**Purpose:** Handles logic related to `check for warmup end`.

### CheckForRoundEnd
`public override bool CheckForRoundEnd()`

**Purpose:** Handles logic related to `check for round end`.

### UseCultureSelection
`public override bool UseCultureSelection()`

**Purpose:** Handles logic related to `use culture selection`.

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** Called when the `agent build` event is raised.

### ForfeitSpawning
`public void ForfeitSpawning(NetworkCommunicator peer)`

**Purpose:** Handles logic related to `forfeit spawning`.

### SetWinnerTeam
`public static void SetWinnerTeam(int winnerTeamNo)`

**Purpose:** Sets the value or state of `winner team`.

### GetNumberOfAttackersAroundFlag
`public int GetNumberOfAttackersAroundFlag(FlagCapturePoint capturePoint)`

**Purpose:** Gets the current value of `number of attackers around flag`.

### GetFlagOwnerTeam
`public Team GetFlagOwnerTeam(FlagCapturePoint flag)`

**Purpose:** Gets the current value of `flag owner team`.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `agent removed` event is raised.

### GetTroopNumberMultiplierForMissingPlayer
`public override float GetTroopNumberMultiplierForMissingPlayer(MissionPeer spawningPeer)`

**Purpose:** Gets the current value of `troop number multiplier for missing player`.

## Usage Example

```csharp
var value = new MissionMultiplayerFlagDomination();
value.UseGold();
```

## See Also

- [Complete Class Catalog](../catalog)