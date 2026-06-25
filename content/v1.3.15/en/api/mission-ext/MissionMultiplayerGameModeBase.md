---
title: "MissionMultiplayerGameModeBase"
description: "Auto-generated class reference for MissionMultiplayerGameModeBase."
---
# MissionMultiplayerGameModeBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionMultiplayerGameModeBase : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerGameModeBase.cs`

## Overview

`MissionMultiplayerGameModeBase` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsGameModeHidingAllAgentVisuals` | `public abstract bool IsGameModeHidingAllAgentVisuals { get; }` |
| `IsGameModeUsingOpposingTeams` | `public abstract bool IsGameModeUsingOpposingTeams { get; }` |
| `IsGameModeAllowChargeDamageOnFriendly` | `public virtual bool IsGameModeAllowChargeDamageOnFriendly { get; }` |
| `SpawnComponent` | `public SpawnComponent SpawnComponent { get; }` |

## Key Methods

### GetMissionType
`public abstract MultiplayerGameType GetMissionType()`

**Purpose:** **Purpose:** Reads and returns the mission type value held by the this instance.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBase from the subsystem API first
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
var result = missionMultiplayerGameModeBase.GetMissionType();
```

### CheckIfOvertime
`public virtual bool CheckIfOvertime()`

**Purpose:** **Purpose:** Verifies whether if overtime holds true for the this instance.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBase from the subsystem API first
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
var result = missionMultiplayerGameModeBase.CheckIfOvertime();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** **Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBase from the subsystem API first
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
missionMultiplayerGameModeBase.OnBehaviorInitialize();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBase from the subsystem API first
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
missionMultiplayerGameModeBase.OnMissionTick(0);
```

### CheckForWarmupEnd
`public virtual bool CheckForWarmupEnd()`

**Purpose:** **Purpose:** Verifies whether for warmup end holds true for the this instance.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBase from the subsystem API first
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
var result = missionMultiplayerGameModeBase.CheckForWarmupEnd();
```

### CheckForRoundEnd
`public virtual bool CheckForRoundEnd()`

**Purpose:** **Purpose:** Verifies whether for round end holds true for the this instance.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBase from the subsystem API first
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
var result = missionMultiplayerGameModeBase.CheckForRoundEnd();
```

### CheckForMatchEnd
`public virtual bool CheckForMatchEnd()`

**Purpose:** **Purpose:** Verifies whether for match end holds true for the this instance.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBase from the subsystem API first
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
var result = missionMultiplayerGameModeBase.CheckForMatchEnd();
```

### UseCultureSelection
`public virtual bool UseCultureSelection()`

**Purpose:** **Purpose:** Executes the UseCultureSelection logic.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBase from the subsystem API first
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
var result = missionMultiplayerGameModeBase.UseCultureSelection();
```

### UseRoundController
`public virtual bool UseRoundController()`

**Purpose:** **Purpose:** Executes the UseRoundController logic.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBase from the subsystem API first
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
var result = missionMultiplayerGameModeBase.UseRoundController();
```

### GetWinnerTeam
`public virtual Team GetWinnerTeam()`

**Purpose:** **Purpose:** Reads and returns the winner team value held by the this instance.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBase from the subsystem API first
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
var result = missionMultiplayerGameModeBase.GetWinnerTeam();
```

### OnPeerChangedTeam
`public virtual void OnPeerChangedTeam(NetworkCommunicator peer, Team oldTeam, Team newTeam)`

**Purpose:** **Purpose:** Invoked when the peer changed team event is raised.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBase from the subsystem API first
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
missionMultiplayerGameModeBase.OnPeerChangedTeam(peer, oldTeam, newTeam);
```

### OnClearScene
`public override void OnClearScene()`

**Purpose:** **Purpose:** Invoked when the clear scene event is raised.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBase from the subsystem API first
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
missionMultiplayerGameModeBase.OnClearScene();
```

### ClearPeerCounts
`public void ClearPeerCounts()`

**Purpose:** **Purpose:** Removes all peer counts from the this instance.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBase from the subsystem API first
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
missionMultiplayerGameModeBase.ClearPeerCounts();
```

### ShouldSpawnVisualsForServer
`public bool ShouldSpawnVisualsForServer(NetworkCommunicator spawningNetworkPeer)`

**Purpose:** **Purpose:** Executes the ShouldSpawnVisualsForServer logic.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBase from the subsystem API first
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
var result = missionMultiplayerGameModeBase.ShouldSpawnVisualsForServer(spawningNetworkPeer);
```

### HandleAgentVisualSpawning
`public void HandleAgentVisualSpawning(NetworkCommunicator spawningNetworkPeer, AgentBuildData spawningAgentBuildData, int troopCountInFormation = 0, bool useCosmetics = true)`

**Purpose:** **Purpose:** Executes the response logic associated with agent visual spawning.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBase from the subsystem API first
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
missionMultiplayerGameModeBase.HandleAgentVisualSpawning(spawningNetworkPeer, spawningAgentBuildData, 0, false);
```

### AllowCustomPlayerBanners
`public virtual bool AllowCustomPlayerBanners()`

**Purpose:** **Purpose:** Permits custom player banners to be enabled or performed on the this instance.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBase from the subsystem API first
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
var result = missionMultiplayerGameModeBase.AllowCustomPlayerBanners();
```

### GetScoreForKill
`public virtual int GetScoreForKill(Agent killedAgent)`

**Purpose:** **Purpose:** Reads and returns the score for kill value held by the this instance.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBase from the subsystem API first
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
var result = missionMultiplayerGameModeBase.GetScoreForKill(killedAgent);
```

### GetTroopNumberMultiplierForMissingPlayer
`public virtual float GetTroopNumberMultiplierForMissingPlayer(MissionPeer spawningPeer)`

**Purpose:** **Purpose:** Reads and returns the troop number multiplier for missing player value held by the this instance.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBase from the subsystem API first
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
var result = missionMultiplayerGameModeBase.GetTroopNumberMultiplierForMissingPlayer(spawningPeer);
```

### GetCurrentGoldForPeer
`public int GetCurrentGoldForPeer(MissionPeer peer)`

**Purpose:** **Purpose:** Reads and returns the current gold for peer value held by the this instance.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBase from the subsystem API first
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
var result = missionMultiplayerGameModeBase.GetCurrentGoldForPeer(peer);
```

### ChangeCurrentGoldForPeer
`public void ChangeCurrentGoldForPeer(MissionPeer peer, int newAmount)`

**Purpose:** **Purpose:** Executes the ChangeCurrentGoldForPeer logic.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBase from the subsystem API first
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
missionMultiplayerGameModeBase.ChangeCurrentGoldForPeer(peer, 0);
```

### CheckIfPlayerCanDespawn
`public virtual bool CheckIfPlayerCanDespawn(MissionPeer missionPeer)`

**Purpose:** **Purpose:** Verifies whether if player can despawn holds true for the this instance.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBase from the subsystem API first
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
var result = missionMultiplayerGameModeBase.CheckIfPlayerCanDespawn(missionPeer);
```

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the pre mission tick event is raised.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBase from the subsystem API first
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
missionMultiplayerGameModeBase.OnPreMissionTick(0);
```

### GetUsedCosmeticsFromPeer
`public Dictionary<string, string> GetUsedCosmeticsFromPeer(MissionPeer missionPeer, BasicCharacterObject selectedTroopCharacter)`

**Purpose:** **Purpose:** Reads and returns the used cosmetics from peer value held by the this instance.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBase from the subsystem API first
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
var result = missionMultiplayerGameModeBase.GetUsedCosmeticsFromPeer(missionPeer, selectedTroopCharacter);
```

### AddCosmeticItemsToEquipment
`public void AddCosmeticItemsToEquipment(Equipment equipment, Dictionary<string, string> choosenCosmetics)`

**Purpose:** **Purpose:** Adds cosmetic items to equipment to the current collection or state.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBase from the subsystem API first
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
missionMultiplayerGameModeBase.AddCosmeticItemsToEquipment(equipment, dictionary<string, "example");
```

### IsClassAvailable
`public bool IsClassAvailable(MultiplayerClassDivisions.MPHeroClass heroClass)`

**Purpose:** **Purpose:** Determines whether the this instance is in the class available state or condition.

```csharp
// Obtain an instance of MissionMultiplayerGameModeBase from the subsystem API first
MissionMultiplayerGameModeBase missionMultiplayerGameModeBase = ...;
var result = missionMultiplayerGameModeBase.IsClassAvailable(heroClass);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MissionMultiplayerGameModeBase instance = ...;
```

## See Also

- [Area Index](../)