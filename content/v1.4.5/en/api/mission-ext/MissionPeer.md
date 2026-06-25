---
title: "MissionPeer"
description: "Auto-generated class reference for MissionPeer."
---
# MissionPeer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionPeer : PeerComponent`
**Base:** `PeerComponent`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionPeer.cs`

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

**Purpose:** **Purpose:** Invoked when the update equipment set index event delegate event is raised.

```csharp
// Obtain an instance of MissionPeer from the subsystem API first
MissionPeer missionPeer = ...;
missionPeer.OnUpdateEquipmentSetIndexEventDelegate(lobbyPeer, 0);
```

### OnPerkUpdateEventDelegate
`public delegate void OnPerkUpdateEventDelegate(MissionPeer peer)`

**Purpose:** **Purpose:** Invoked when the perk update event delegate event is raised.

```csharp
// Obtain an instance of MissionPeer from the subsystem API first
MissionPeer missionPeer = ...;
missionPeer.OnPerkUpdateEventDelegate(peer);
```

### OnTeamChangedDelegate
`public delegate void OnTeamChangedDelegate(NetworkCommunicator peer, Team previousTeam, Team newTeam)`

**Purpose:** **Purpose:** Invoked when the team changed delegate event is raised.

```csharp
// Obtain an instance of MissionPeer from the subsystem API first
MissionPeer missionPeer = ...;
missionPeer.OnTeamChangedDelegate(peer, previousTeam, newTeam);
```

### OnCultureChangedDelegate
`public delegate void OnCultureChangedDelegate(BasicCultureObject newCulture)`

**Purpose:** **Purpose:** Invoked when the culture changed delegate event is raised.

```csharp
// Obtain an instance of MissionPeer from the subsystem API first
MissionPeer missionPeer = ...;
missionPeer.OnCultureChangedDelegate(newCulture);
```

### OnPlayerKilledDelegate
`public delegate void OnPlayerKilledDelegate(MissionPeer killerPeer, MissionPeer killedPeer)`

**Purpose:** **Purpose:** Invoked when the player killed delegate event is raised.

```csharp
// Obtain an instance of MissionPeer from the subsystem API first
MissionPeer missionPeer = ...;
missionPeer.OnPlayerKilledDelegate(killerPeer, killedPeer);
```

### SetMutedFromPlatform
`public void SetMutedFromPlatform(bool isMuted)`

**Purpose:** **Purpose:** Assigns a new value to muted from platform and updates the object's internal state.

```csharp
// Obtain an instance of MissionPeer from the subsystem API first
MissionPeer missionPeer = ...;
missionPeer.SetMutedFromPlatform(false);
```

### SetMuted
`public void SetMuted(bool isMuted)`

**Purpose:** **Purpose:** Assigns a new value to muted and updates the object's internal state.

```csharp
// Obtain an instance of MissionPeer from the subsystem API first
MissionPeer missionPeer = ...;
missionPeer.SetMuted(false);
```

### ResetRequestedKickPollCount
`public void ResetRequestedKickPollCount()`

**Purpose:** **Purpose:** Returns requested kick poll count to its default or initial condition.

```csharp
// Obtain an instance of MissionPeer from the subsystem API first
MissionPeer missionPeer = ...;
missionPeer.ResetRequestedKickPollCount();
```

### IncrementRequestedKickPollCount
`public void IncrementRequestedKickPollCount()`

**Purpose:** **Purpose:** Executes the IncrementRequestedKickPollCount logic.

```csharp
// Obtain an instance of MissionPeer from the subsystem API first
MissionPeer missionPeer = ...;
missionPeer.IncrementRequestedKickPollCount();
```

### GetSelectedPerkIndexWithPerkListIndex
`public int GetSelectedPerkIndexWithPerkListIndex(int troopIndex, int perkListIndex)`

**Purpose:** **Purpose:** Reads and returns the selected perk index with perk list index value held by the this instance.

```csharp
// Obtain an instance of MissionPeer from the subsystem API first
MissionPeer missionPeer = ...;
var result = missionPeer.GetSelectedPerkIndexWithPerkListIndex(0, 0);
```

### SelectPerk
`public bool SelectPerk(int perkListIndex, int perkIndex, int enforcedSelectedTroopIndex = -1)`

**Purpose:** **Purpose:** Executes the SelectPerk logic.

```csharp
// Obtain an instance of MissionPeer from the subsystem API first
MissionPeer missionPeer = ...;
var result = missionPeer.SelectPerk(0, 0, 0);
```

### HandleVoteChange
`public void HandleVoteChange(CultureVoteTypes voteType, BasicCultureObject culture)`

**Purpose:** **Purpose:** Executes the response logic associated with vote change.

```csharp
// Obtain an instance of MissionPeer from the subsystem API first
MissionPeer missionPeer = ...;
missionPeer.HandleVoteChange(voteType, culture);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MissionPeer from the subsystem API first
MissionPeer missionPeer = ...;
missionPeer.OnFinalize();
```

### OnInitialize
`public override void OnInitialize()`

**Purpose:** **Purpose:** Invoked when the initialize event is raised.

```csharp
// Obtain an instance of MissionPeer from the subsystem API first
MissionPeer missionPeer = ...;
missionPeer.OnInitialize();
```

### GetAmountOfAgentVisualsForPeer
`public int GetAmountOfAgentVisualsForPeer()`

**Purpose:** **Purpose:** Reads and returns the amount of agent visuals for peer value held by the this instance.

```csharp
// Obtain an instance of MissionPeer from the subsystem API first
MissionPeer missionPeer = ...;
var result = missionPeer.GetAmountOfAgentVisualsForPeer();
```

### GetVisuals
`public PeerVisualsHolder GetVisuals(int visualIndex)`

**Purpose:** **Purpose:** Reads and returns the visuals value held by the this instance.

```csharp
// Obtain an instance of MissionPeer from the subsystem API first
MissionPeer missionPeer = ...;
var result = missionPeer.GetVisuals(0);
```

### ClearVisuals
`public void ClearVisuals(int visualIndex)`

**Purpose:** **Purpose:** Removes all visuals from the this instance.

```csharp
// Obtain an instance of MissionPeer from the subsystem API first
MissionPeer missionPeer = ...;
missionPeer.ClearVisuals(0);
```

### ClearAllVisuals
`public void ClearAllVisuals(bool freeResources = false)`

**Purpose:** **Purpose:** Removes all all visuals from the this instance.

```csharp
// Obtain an instance of MissionPeer from the subsystem API first
MissionPeer missionPeer = ...;
missionPeer.ClearAllVisuals(false);
```

### OnVisualsSpawned
`public void OnVisualsSpawned(PeerVisualsHolder visualsHolder, int visualIndex)`

**Purpose:** **Purpose:** Invoked when the visuals spawned event is raised.

```csharp
// Obtain an instance of MissionPeer from the subsystem API first
MissionPeer missionPeer = ...;
missionPeer.OnVisualsSpawned(visualsHolder, 0);
```

### GetAllAgentVisualsForPeer
`public IEnumerable<IAgentVisual> GetAllAgentVisualsForPeer()`

**Purpose:** **Purpose:** Reads and returns the all agent visuals for peer value held by the this instance.

```csharp
// Obtain an instance of MissionPeer from the subsystem API first
MissionPeer missionPeer = ...;
var result = missionPeer.GetAllAgentVisualsForPeer();
```

### GetAgentVisualForPeer
`public IAgentVisual GetAgentVisualForPeer(int visualsIndex)`

**Purpose:** **Purpose:** Reads and returns the agent visual for peer value held by the this instance.

```csharp
// Obtain an instance of MissionPeer from the subsystem API first
MissionPeer missionPeer = ...;
var result = missionPeer.GetAgentVisualForPeer(0);
```

### GetAgentVisualForPeer
`public IAgentVisual GetAgentVisualForPeer(int visualsIndex, out IAgentVisual mountAgentVisuals)`

**Purpose:** **Purpose:** Reads and returns the agent visual for peer value held by the this instance.

```csharp
// Obtain an instance of MissionPeer from the subsystem API first
MissionPeer missionPeer = ...;
var result = missionPeer.GetAgentVisualForPeer(0, mountAgentVisuals);
```

### TickInactivityStatus
`public void TickInactivityStatus()`

**Purpose:** **Purpose:** Advances the inactivity status state each frame or update cycle.

```csharp
// Obtain an instance of MissionPeer from the subsystem API first
MissionPeer missionPeer = ...;
missionPeer.TickInactivityStatus();
```

### OnKillAnotherPeer
`public void OnKillAnotherPeer(MissionPeer victimPeer)`

**Purpose:** **Purpose:** Invoked when the kill another peer event is raised.

```csharp
// Obtain an instance of MissionPeer from the subsystem API first
MissionPeer missionPeer = ...;
missionPeer.OnKillAnotherPeer(victimPeer);
```

### OverrideCultureWithTeamCulture
`public void OverrideCultureWithTeamCulture()`

**Purpose:** **Purpose:** Executes the OverrideCultureWithTeamCulture logic.

```csharp
// Obtain an instance of MissionPeer from the subsystem API first
MissionPeer missionPeer = ...;
missionPeer.OverrideCultureWithTeamCulture();
```

### GetNumberOfTimesPeerKilledPeer
`public int GetNumberOfTimesPeerKilledPeer(MissionPeer killedPeer)`

**Purpose:** **Purpose:** Reads and returns the number of times peer killed peer value held by the this instance.

```csharp
// Obtain an instance of MissionPeer from the subsystem API first
MissionPeer missionPeer = ...;
var result = missionPeer.GetNumberOfTimesPeerKilledPeer(killedPeer);
```

### ResetKillRegistry
`public void ResetKillRegistry()`

**Purpose:** **Purpose:** Returns kill registry to its default or initial condition.

```csharp
// Obtain an instance of MissionPeer from the subsystem API first
MissionPeer missionPeer = ...;
missionPeer.ResetKillRegistry();
```

### RefreshSelectedPerks
`public bool RefreshSelectedPerks()`

**Purpose:** **Purpose:** Keeps the display or cache of selected perks in sync with the underlying state.

```csharp
// Obtain an instance of MissionPeer from the subsystem API first
MissionPeer missionPeer = ...;
var result = missionPeer.RefreshSelectedPerks();
```

### OnTeamInitialPerkInfoReceived
`public void OnTeamInitialPerkInfoReceived(int perks)`

**Purpose:** **Purpose:** Invoked when the team initial perk info received event is raised.

```csharp
// Obtain an instance of MissionPeer from the subsystem API first
MissionPeer missionPeer = ...;
missionPeer.OnTeamInitialPerkInfoReceived(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionPeer missionPeer = ...;
missionPeer.OnUpdateEquipmentSetIndexEventDelegate(lobbyPeer, 0);
```

## See Also

- [Area Index](../)