---
title: "MissionMultiplayerGameModeBase"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMultiplayerGameModeBase`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMultiplayerGameModeBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionMultiplayerGameModeBase : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionMultiplayerGameModeBase.cs`

## Overview

`MissionMultiplayerGameModeBase` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsGameModeHidingAllAgentVisuals` | `public abstract bool IsGameModeHidingAllAgentVisuals { get; }` |
| `IsGameModeUsingOpposingTeams` | `public abstract bool IsGameModeUsingOpposingTeams { get; }` |
| `SpawnComponent` | `public SpawnComponent SpawnComponent { get; }` |

## Key Methods

### GetMissionType
`public abstract MultiplayerGameType GetMissionType()`

**Purpose:** Gets the current value of `mission type`.

### CheckIfOvertime
`public virtual bool CheckIfOvertime()`

**Purpose:** Handles logic related to `check if overtime`.

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### CheckForWarmupEnd
`public virtual bool CheckForWarmupEnd()`

**Purpose:** Handles logic related to `check for warmup end`.

### CheckForRoundEnd
`public virtual bool CheckForRoundEnd()`

**Purpose:** Handles logic related to `check for round end`.

### CheckForMatchEnd
`public virtual bool CheckForMatchEnd()`

**Purpose:** Handles logic related to `check for match end`.

### UseCultureSelection
`public virtual bool UseCultureSelection()`

**Purpose:** Handles logic related to `use culture selection`.

### UseRoundController
`public virtual bool UseRoundController()`

**Purpose:** Handles logic related to `use round controller`.

### GetWinnerTeam
`public virtual Team GetWinnerTeam()`

**Purpose:** Gets the current value of `winner team`.

### OnPeerChangedTeam
`public virtual void OnPeerChangedTeam(NetworkCommunicator peer, Team oldTeam, Team newTeam)`

**Purpose:** Called when the `peer changed team` event is raised.

### OnClearScene
`public override void OnClearScene()`

**Purpose:** Called when the `clear scene` event is raised.

### ClearPeerCounts
`public void ClearPeerCounts()`

**Purpose:** Handles logic related to `clear peer counts`.

### ShouldSpawnVisualsForServer
`public bool ShouldSpawnVisualsForServer(NetworkCommunicator spawningNetworkPeer)`

**Purpose:** Handles logic related to `should spawn visuals for server`.

### HandleAgentVisualSpawning
`public void HandleAgentVisualSpawning(NetworkCommunicator spawningNetworkPeer, AgentBuildData spawningAgentBuildData, int troopCountInFormation = 0, bool useCosmetics = true)`

**Purpose:** Handles the `agent visual spawning` event or callback.

### AllowCustomPlayerBanners
`public virtual bool AllowCustomPlayerBanners()`

**Purpose:** Handles logic related to `allow custom player banners`.

### GetScoreForKill
`public virtual int GetScoreForKill(Agent killedAgent)`

**Purpose:** Gets the current value of `score for kill`.

### GetTroopNumberMultiplierForMissingPlayer
`public virtual float GetTroopNumberMultiplierForMissingPlayer(MissionPeer spawningPeer)`

**Purpose:** Gets the current value of `troop number multiplier for missing player`.

### GetCurrentGoldForPeer
`public int GetCurrentGoldForPeer(MissionPeer peer)`

**Purpose:** Gets the current value of `current gold for peer`.

### ChangeCurrentGoldForPeer
`public void ChangeCurrentGoldForPeer(MissionPeer peer, int newAmount)`

**Purpose:** Handles logic related to `change current gold for peer`.

### CheckIfPlayerCanDespawn
`public virtual bool CheckIfPlayerCanDespawn(MissionPeer missionPeer)`

**Purpose:** Handles logic related to `check if player can despawn`.

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**Purpose:** Called when the `pre mission tick` event is raised.

### GetUsedCosmeticsFromPeer
`public Dictionary<string, string> GetUsedCosmeticsFromPeer(MissionPeer missionPeer, BasicCharacterObject selectedTroopCharacter)`

**Purpose:** Gets the current value of `used cosmetics from peer`.

### AddCosmeticItemsToEquipment
`public void AddCosmeticItemsToEquipment(Equipment equipment, Dictionary<string, string> choosenCosmetics)`

**Purpose:** Adds `cosmetic items to equipment` to the current collection or state.

### IsClassAvailable
`public bool IsClassAvailable(MultiplayerClassDivisions.MPHeroClass heroClass)`

**Purpose:** Handles logic related to `is class available`.

## Usage Example

```csharp
var implementation = new CustomMissionMultiplayerGameModeBase();
```

## See Also

- [Complete Class Catalog](../catalog)