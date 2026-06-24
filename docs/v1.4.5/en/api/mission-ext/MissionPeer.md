<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionPeer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionPeer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionPeer : PeerComponent`
**Base:** `PeerComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionPeer.cs`

## Overview

`MissionPeer` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `JoinTime` | `public DateTime JoinTime { get; }` |
| `EquipmentUpdatingExpired` | `public bool EquipmentUpdatingExpired { get; }` |
| `TeamInitialPerkInfoReady` | `public bool TeamInitialPerkInfoReady { get; }` |
| `HasSpawnedAgentVisuals` | `public bool HasSpawnedAgentVisuals { get; set; }` |
| `SelectedTroopIndex` | `public int SelectedTroopIndex { get; set; }` |
| `NextSelectedTroopIndex` | `public int NextSelectedTroopIndex { get; set; }` |
| `Representative` | `public MissionRepresentativeBase Representative { get; }` |
| `DisplayedName` | `public string DisplayedName { get; }` |
| `SelectedPerks` | `public MBReadOnlyList<MPPerkObject> SelectedPerks { get; }` |
| `SpawnTimer` | `public Timer SpawnTimer { get; }` |
| `HasSpawnTimerExpired` | `public bool HasSpawnTimerExpired { get; }` |
| `VotedForBan` | `public BasicCultureObject VotedForBan { get; }` |
| `VotedForSelection` | `public BasicCultureObject VotedForSelection { get; }` |
| `WantsToSpawnAsBot` | `public bool WantsToSpawnAsBot { get; }` |
| `SpawnCountThisRound` | `public int SpawnCountThisRound { get; }` |
| `RequestedKickPollCount` | `public int RequestedKickPollCount { get; }` |
| `KillCount` | `public int KillCount { get; set; }` |
| `AssistCount` | `public int AssistCount { get; set; }` |
| `DeathCount` | `public int DeathCount { get; set; }` |
| `Score` | `public int Score { get; set; }` |
| `BotsUnderControlAlive` | `public int BotsUnderControlAlive { get; set; }` |
| `BotsUnderControlTotal` | `public int BotsUnderControlTotal { get; set; }` |
| `IsControlledAgentActive` | `public bool IsControlledAgentActive { get; }` |
| `ControlledAgent` | `public Agent ControlledAgent { get; set; }` |
| `FollowedAgent` | `public Agent FollowedAgent { get; set; }` |
| `Team` | `public Team Team { get; set; }` |
| `Culture` | `public BasicCultureObject Culture { get; set; }` |
| `ControlledFormation` | `public Formation ControlledFormation { get; set; }` |
| `IsAgentAliveForChatting` | `public bool IsAgentAliveForChatting { get; }` |
| `IsMutedFromPlatform` | `public bool IsMutedFromPlatform { get; }` |
| `IsMuted` | `public bool IsMuted { get; }` |
| `IsMutedFromGameOrPlatform` | `public bool IsMutedFromGameOrPlatform { get; }` |

## Key Methods

### OnUpdateEquipmentSetIndexEventDelegate
`public delegate void OnUpdateEquipmentSetIndexEventDelegate(MissionPeer lobbyPeer, int equipmentSetIndex)`

**Purpose:** Called when the `update equipment set index event delegate` event is raised.

### OnPerkUpdateEventDelegate
`public delegate void OnPerkUpdateEventDelegate(MissionPeer peer)`

**Purpose:** Called when the `perk update event delegate` event is raised.

### OnTeamChangedDelegate
`public delegate void OnTeamChangedDelegate(NetworkCommunicator peer, Team previousTeam, Team newTeam)`

**Purpose:** Called when the `team changed delegate` event is raised.

### OnCultureChangedDelegate
`public delegate void OnCultureChangedDelegate(BasicCultureObject newCulture)`

**Purpose:** Called when the `culture changed delegate` event is raised.

### OnPlayerKilledDelegate
`public delegate void OnPlayerKilledDelegate(MissionPeer killerPeer, MissionPeer killedPeer)`

**Purpose:** Called when the `player killed delegate` event is raised.

### SetMutedFromPlatform
`public void SetMutedFromPlatform(bool isMuted)`

**Purpose:** Sets the value or state of `muted from platform`.

### SetMuted
`public void SetMuted(bool isMuted)`

**Purpose:** Sets the value or state of `muted`.

### ResetRequestedKickPollCount
`public void ResetRequestedKickPollCount()`

**Purpose:** Resets `requested kick poll count` to its initial state.

### IncrementRequestedKickPollCount
`public void IncrementRequestedKickPollCount()`

**Purpose:** Handles logic related to `increment requested kick poll count`.

### GetSelectedPerkIndexWithPerkListIndex
`public int GetSelectedPerkIndexWithPerkListIndex(int troopIndex, int perkListIndex)`

**Purpose:** Gets the current value of `selected perk index with perk list index`.

### SelectPerk
`public bool SelectPerk(int perkListIndex, int perkIndex, int enforcedSelectedTroopIndex = -1)`

**Purpose:** Handles logic related to `select perk`.

### HandleVoteChange
`public void HandleVoteChange(CultureVoteTypes voteType, BasicCultureObject culture)`

**Purpose:** Handles the `vote change` event or callback.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### OnInitialize
`public override void OnInitialize()`

**Purpose:** Called when the `initialize` event is raised.

### GetAmountOfAgentVisualsForPeer
`public int GetAmountOfAgentVisualsForPeer()`

**Purpose:** Gets the current value of `amount of agent visuals for peer`.

### GetVisuals
`public PeerVisualsHolder GetVisuals(int visualIndex)`

**Purpose:** Gets the current value of `visuals`.

### ClearVisuals
`public void ClearVisuals(int visualIndex)`

**Purpose:** Handles logic related to `clear visuals`.

### ClearAllVisuals
`public void ClearAllVisuals(bool freeResources = false)`

**Purpose:** Handles logic related to `clear all visuals`.

### OnVisualsSpawned
`public void OnVisualsSpawned(PeerVisualsHolder visualsHolder, int visualIndex)`

**Purpose:** Called when the `visuals spawned` event is raised.

### GetAllAgentVisualsForPeer
`public IEnumerable<IAgentVisual> GetAllAgentVisualsForPeer()`

**Purpose:** Gets the current value of `all agent visuals for peer`.

### GetAgentVisualForPeer
`public IAgentVisual GetAgentVisualForPeer(int visualsIndex)`

**Purpose:** Gets the current value of `agent visual for peer`.

### GetAgentVisualForPeer
`public IAgentVisual GetAgentVisualForPeer(int visualsIndex, out IAgentVisual mountAgentVisuals)`

**Purpose:** Gets the current value of `agent visual for peer`.

### TickInactivityStatus
`public void TickInactivityStatus()`

**Purpose:** Handles logic related to `tick inactivity status`.

### OnKillAnotherPeer
`public void OnKillAnotherPeer(MissionPeer victimPeer)`

**Purpose:** Called when the `kill another peer` event is raised.

### OverrideCultureWithTeamCulture
`public void OverrideCultureWithTeamCulture()`

**Purpose:** Handles logic related to `override culture with team culture`.

### GetNumberOfTimesPeerKilledPeer
`public int GetNumberOfTimesPeerKilledPeer(MissionPeer killedPeer)`

**Purpose:** Gets the current value of `number of times peer killed peer`.

### ResetKillRegistry
`public void ResetKillRegistry()`

**Purpose:** Resets `kill registry` to its initial state.

### RefreshSelectedPerks
`public bool RefreshSelectedPerks()`

**Purpose:** Refreshes the display or cache of `selected perks`.

### OnTeamInitialPerkInfoReceived
`public void OnTeamInitialPerkInfoReceived(int perks)`

**Purpose:** Called when the `team initial perk info received` event is raised.

## Usage Example

```csharp
var value = new MissionPeer();
value.OnUpdateEquipmentSetIndexEventDelegate(lobbyPeer, 0);
```

## See Also

- [Complete Class Catalog](../catalog)