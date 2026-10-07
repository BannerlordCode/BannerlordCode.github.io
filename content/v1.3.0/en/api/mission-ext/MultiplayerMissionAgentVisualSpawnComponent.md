---
title: "MultiplayerMissionAgentVisualSpawnComponent"
description: "Auto-generated class reference for MultiplayerMissionAgentVisualSpawnComponent."
---
# MultiplayerMissionAgentVisualSpawnComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerMissionAgentVisualSpawnComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerMissionAgentVisualSpawnComponent.cs`

## Overview

`MultiplayerMissionAgentVisualSpawnComponent` is the multiplayer "paper doll" system: while a peer is still in the deployment screen it builds a real `IAgentVisual` in the scene and parks it on a spawn point, so every player can see the other players' character models before the battle starts. It derives from `MissionNetwork` (`MultiplayerMissionAgentVisualSpawnComponent.cs:10`), so it is a networked mission behaviour rather than an agent component, and it is cached by the game-mode base at initialisation (`MissionMultiplayerGameModeBase.cs:64`) alongside the notifications component.

It publishes three events, all about the *local* peer: `OnMyAgentVisualSpawned` (`MultiplayerMissionAgentVisualSpawnComponent.cs:15`), `OnMyAgentSpawnedFromVisual` (`MultiplayerMissionAgentVisualSpawnComponent.cs:20`) and `OnMyAgentVisualRemoved` (`MultiplayerMissionAgentVisualSpawnComponent.cs:25`). There is no event for another peer's visuals — every event in this class is `Mine`-guarded — so a mod that wants to react to *anyone's* model appearing has to poll `MissionPeer` instead.

## Mental Model

The whole thing hangs off a lazily-created private helper. `_spawnFrameSelectionHelper` is null until `OnPreMissionTick` sees a non-dedicated server, a live mission and a non-null `GameNetwork.MyPeer` (`MultiplayerMissionAgentVisualSpawnComponent.cs:186`), and only then constructs `VisualSpawnFrameSelectionHelper` (`MultiplayerMissionAgentVisualSpawnComponent.cs:188`). Everything downstream dereferences that field without a null check — `SpawnAgentVisualsForPeer` calls `GetSpawnPointFrameForPlayer` on it directly (`MultiplayerMissionAgentVisualSpawnComponent.cs:42`) — so calling `SpawnAgentVisualsForPeer` on a dedicated server, or before the pre-mission tick, is a `NullReferenceException`.

The helper's constructor hard-codes **exactly six** spawn points, in three parallel arrays, and it discovers them by string tag rather than by configuration: `"sp_visual_" + i`, `"sp_visual_attacker_" + i`, `"sp_visual_defender_" + i` for `i` in `0..5` (`MultiplayerMissionAgentVisualSpawnComponent.cs:201` through `MultiplayerMissionAgentVisualSpawnComponent.cs:217`). A map with a seventh spawn-point tag is ignored; a map missing one leaves a null slot, which then flows into the frame maths. Slot 0 is claimed for the local player in the constructor itself (`MultiplayerMissionAgentVisualSpawnComponent.cs:223`).

`RemoveAgentVisuals` returns the slot to the pool only on a non-dedicated server **and** only for a peer that is not the local one (`MultiplayerMissionAgentVisualSpawnComponent.cs:161`, `MultiplayerMissionAgentVisualSpawnComponent.cs:163`). The `sync` parameter is declared and never read — the call site at `MissionMultiplayerFlagDomination.cs:908` passes `true` and it has no effect whatsoever. So there is no supported way to make visual removal replicate.

`SpawnAgentVisualsForPeer` does the visual-index bookkeeping: index `0` — the main agent — gets a full `ClearAllVisuals(false)` before the per-index clear (`MultiplayerMissionAgentVisualSpawnComponent.cs:35`, `MultiplayerMissionAgentVisualSpawnComponent.cs:37`), and index 0 is also the only index that fires `OnMyAgentVisualSpawned` (`MultiplayerMissionAgentVisualSpawnComponent.cs:146`). The mount is detected by reading a **hard-coded equipment slot**: `equipment[10].Item` (`MultiplayerMissionAgentVisualSpawnComponent.cs:41`). That index is `EquipmentIndex.ExtraWeaponSlot`-adjacent but written as a literal, so re-reading this code and "fixing" it to a named constant is wrong — the 10 is the wire/serialisation index, not the enum ordinal.

The idle animation is perk-driven and bot/human split. For a mount the loop walks `missionPeer.SelectedPerks` and prefers `HeroMountIdleAnimOverride` for a human and `TroopMountIdleAnimOverride` for a bot (`MultiplayerMissionAgentVisualSpawnComponent.cs:58`, `MultiplayerMissionAgentVisualSpawnComponent.cs:63`); the same pair is consulted again for the unmounted body (`MultiplayerMissionAgentVisualSpawnComponent.cs:105`, `MultiplayerMissionAgentVisualSpawnComponent.cs:110`). Two extra branches exist only for `mp_aserai_camel` (`MultiplayerMissionAgentVisualSpawnComponent.cs:71`) and for heroes whose class supplies an idle anim string (`MultiplayerMissionAgentVisualSpawnComponent.cs:78`, `MultiplayerMissionAgentVisualSpawnComponent.cs:122`) — content-specific special cases living in the spawn code.

Finally, `OnMyAgentSpawned()` is a bare event forwarder with a null guard and nothing else (`MultiplayerMissionAgentVisualSpawnComponent.cs:173`, `MultiplayerMissionAgentVisualSpawnComponent.cs:176`) — it exists purely so external code can *signal* that the local agent has been spawned from its visual, converting that state change into the `OnMyAgentSpawnedFromVisual` event.

## How to use

**Getting it.** Look it up from the live mission and react to the local player's events. Let the pre-mission tick run first so the helper exists.

```csharp
using TaleWorlds.MountAndBlade;

MultiplayerMissionAgentVisualSpawnComponent spawner =
    Mission.GetMissionBehavior<MultiplayerMissionAgentVisualSpawnComponent>();
if (spawner != null)
{
    spawner.OnMyAgentVisualSpawned  += () => Debug.Print("my model is on the board", false);
    spawner.OnMyAgentSpawnedFromVisual += () => Debug.Print("control handed over", false);
    spawner.OnMyAgentVisualRemoved  += () => Debug.Print("model taken down", false);
}
```

Inspect what other peers have shown, since there is no event for them:

```csharp
foreach (Agent a in Mission.Current.Agents)
{
    MissionPeer peer = a.GetComponent<MissionPeer>();
    if (peer != null && peer.VisualsIndex >= 0)
    {
        Debug.Print(peer.Name + " visual slot " + peer.VisualsIndex, false);
    }
}
```

**The mistake that crashes the first spawn of a dedicated server or a pre-mission-tick call.** Calling `SpawnAgentVisualsForPeer` before `_spawnFrameSelectionHelper` exists. The helper is created lazily inside `OnPreMissionTick` and only when the server is not dedicated and `GameNetwork.MyPeer` is non-null (`MultiplayerMissionAgentVisualSpawnComponent.cs:186`), and the spawn method then dereferences it with no guard (`MultiplayerMissionAgentVisualSpawnComponent.cs:42`). On a dedicated server the field stays null forever, so the very first call throws `NullReferenceException` — with a stack that points at the spawn helper rather than at the ordering mistake that caused it.

## Key Methods

### SpawnAgentVisualsForPeer
`public void SpawnAgentVisualsForPeer(MissionPeer missionPeer, AgentBuildData buildData, int selectedEquipmentSetIndex = -1, bool isBot = false, int totalTroopCount = 0)`

**Purpose:** Executes the SpawnAgentVisualsForPeer logic.

```csharp
// Obtain an instance of MultiplayerMissionAgentVisualSpawnComponent from the subsystem API first
MultiplayerMissionAgentVisualSpawnComponent multiplayerMissionAgentVisualSpawnComponent = ...;
multiplayerMissionAgentVisualSpawnComponent.SpawnAgentVisualsForPeer(missionPeer, buildData, 0, false, 0);
```

### RemoveAgentVisuals
`public void RemoveAgentVisuals(MissionPeer missionPeer, bool sync = false)`

**Purpose:** Removes agent visuals from the current collection or state.

```csharp
// Obtain an instance of MultiplayerMissionAgentVisualSpawnComponent from the subsystem API first
MultiplayerMissionAgentVisualSpawnComponent multiplayerMissionAgentVisualSpawnComponent = ...;
multiplayerMissionAgentVisualSpawnComponent.RemoveAgentVisuals(missionPeer, false);
```

### OnMyAgentSpawned
`public void OnMyAgentSpawned()`

**Purpose:** Invoked when the my agent spawned event is raised.

```csharp
// Obtain an instance of MultiplayerMissionAgentVisualSpawnComponent from the subsystem API first
MultiplayerMissionAgentVisualSpawnComponent multiplayerMissionAgentVisualSpawnComponent = ...;
multiplayerMissionAgentVisualSpawnComponent.OnMyAgentSpawned();
```

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**Purpose:** Invoked when the pre mission tick event is raised.

```csharp
// Obtain an instance of MultiplayerMissionAgentVisualSpawnComponent from the subsystem API first
MultiplayerMissionAgentVisualSpawnComponent multiplayerMissionAgentVisualSpawnComponent = ...;
multiplayerMissionAgentVisualSpawnComponent.OnPreMissionTick(0);
```

### GetSpawnPointFrameForPlayer
`public MatrixFrame GetSpawnPointFrameForPlayer(VirtualPlayer player, BattleSideEnum side, int agentVisualIndex, int totalTroopCount, bool isMounted = false)`

**Purpose:** Reads and returns the spawn point frame for player value held by the this instance.

```csharp
// Obtain an instance of MultiplayerMissionAgentVisualSpawnComponent from the subsystem API first
MultiplayerMissionAgentVisualSpawnComponent multiplayerMissionAgentVisualSpawnComponent = ...;
var result = multiplayerMissionAgentVisualSpawnComponent.GetSpawnPointFrameForPlayer(player, side, 0, 0, false);
```

### FreeSpawnPointFromPlayer
`public void FreeSpawnPointFromPlayer(VirtualPlayer player)`

**Purpose:** Executes the FreeSpawnPointFromPlayer logic.

```csharp
// Obtain an instance of MultiplayerMissionAgentVisualSpawnComponent from the subsystem API first
MultiplayerMissionAgentVisualSpawnComponent multiplayerMissionAgentVisualSpawnComponent = ...;
multiplayerMissionAgentVisualSpawnComponent.FreeSpawnPointFromPlayer(player);
```

## Usage Example

```csharp
The `agent.GetComponent<MultiplayerMissionAgentVisualSpawnComponent>()` line previously on this page could never work: it is a `MissionNetwork`, not an `AgentComponent`, so it cannot satisfy `Agent.GetComponent<T>()`'s `where T : AgentComponent` constraint (`Agent.cs:3107`). It is a mission behaviour:

```csharp
var spawner = Mission.Current.GetMissionBehavior<MultiplayerMissionAgentVisualSpawnComponent>();
```
```

## See Also

- [MultiplayerGameNotificationsComponent — the sibling component the same game-mode base caches](../MultiplayerGameNotificationsComponent)
- [MissionNetworkComponent — the other large networked mission behaviour](../MissionNetworkComponent)
- [MPPerkHandler — supplies the SelectedPerks whose idle-anim overrides this class reads](../MPPerkHandler)
- [Area Index](../)