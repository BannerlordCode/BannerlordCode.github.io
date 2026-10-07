---
title: "MissionBattleSchedulerClientComponent"
description: "Auto-generated class reference for MissionBattleSchedulerClientComponent."
---
# MissionBattleSchedulerClientComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionBattleSchedulerClientComponent : MissionLobbyComponent`
**Base:** `MissionLobbyComponent`
**File:** `TaleWorlds.MountAndBlade/MissionBattleSchedulerClientComponent.cs`

## Overview

`MissionBattleSchedulerClientComponent` is the **client-side lobby component for matchmaker battles**. It derives from the abstract `MissionLobbyComponent`, i.e. a mission behaviour that owns the multiplayer lobby state machine, not an object attached to an agent. It is never constructed by hand: `MissionLobbyComponent`'s static constructor registers it in a type table with `AddLobbyComponentType(typeof(MissionBattleSchedulerClientComponent), LobbyMissionType.Matchmaker, false)` (`MissionLobbyComponent.cs:49`), and the actual instance is produced reflectively by `MissionLobbyComponent.CreateBehavior()` through `Activator.CreateInstance` keyed on `BannerlordNetwork.LobbyMissionType` and `GameNetwork.IsDedicatedServer` (`MissionLobbyComponent.cs:117`). So it exists only in matchmaker missions; the Custom and Community lobby variants register sibling types at `MissionLobbyComponent.cs:50` and `MissionLobbyComponent.cs:51`. Its whole body is a single `QuitMission` override (`MissionBattleSchedulerClientComponent.cs:10`) — everything else it can do comes from the base class.

## Mental Model

Read this class as "how a matchmaker client politely leaves". `QuitMission` calls `base.QuitMission()` first, which is a no-op in the base (`MissionLobbyComponent.cs:121`), then applies two guards before doing anything: the lobby must not already be in `MultiplayerGameState.Ending`, and `NetworkMain.GameClient` must be logged in *and* sitting in `LobbyClient.State.AtBattle` (`MissionBattleSchedulerClientComponent.cs:13`). Only then does it call `NetworkMain.GameClient.QuitFromMatchmakerGame()` (`MissionBattleSchedulerClientComponent.cs:15`).

Both guards exist because this runs on the client side of a live session. The `Ending` guard prevents a quit request from being re-sent for a match that the server has already torn down — without it a client that quits twice races the server's own `MissionStateChange` message. The `AtBattle` guard is the interesting one: a matchmaker client that is still in the pre-battle lobby (searching, or waiting for a server slot) has no match to leave, and `QuitFromMatchmakerGame` is only meaningful once the client has been placed into a battle. Skip the guard and the call is sent from a lobby that never had a match, which the server treats as a protocol violation rather than a polite goodbye.

The boundary is that this type assumes `NetworkMain.GameClient` is non-null. The guard reads `NetworkMain.GameClient.LoggedIn` first, with no null check, so a mission that runs this path outside a live multiplayer session — a replay, an editor battle, or a singleplayer mission that reuses matchmaker lobby types — dereferences null. `OnEndReplay` is the concrete case: a replay mission creates a client-side network with `GameNetwork.InitializeClientSide(null, 0, -1, -1)` at `ReplayMissionLogic.cs:32`, and if that replay's mission type resolves to Matchmaker this override is reachable with no real game client behind it.

## How to use

**Getting it.** Do not `new` it. Register your own lobby component type for a lobby mission kind with the public `MissionLobbyComponent.AddLobbyComponentType`, or, more usually, subclass it and register the subclass in the same static-constructor slot:

```csharp
public class MyMatchmakerLobbyComponent : MissionBattleSchedulerClientComponent
{
    public override void OnMissionTick(float dt)
    {
        base.OnMissionTick(dt);   // this is where the lobby state machine advances
    }

    public override void SetStateEndingAsServer()
    {
        base.SetStateEndingAsServer();
    }
}
```

Read the live instance from inside any mission behaviour:

```csharp
MissionLobbyComponent lobby = Mission.Current.GetMissionBehavior<MissionLobbyComponent>();
if (lobby != null && lobby.CurrentMultiplayerState == MissionLobbyComponent.MultiplayerGameState.Playing)
{
    lobby.QuitMission();
}
```

**The mistake that turns a quit into a crash.** Calling `QuitMission` from a mission behaviour that also runs in singleplayer, editor or replay mode. The override's first statement after the base call dereferences `NetworkMain.GameClient`, and `base.QuitMission()` does not protect you. Guard with `GameNetwork.IsClient` (`GameNetwork.cs:41`) or an explicit `NetworkMain.GameClient != null` first, or the client-side quit path crashes on a null game client the first time the mission loads outside multiplayer.

## See Also

- [MissionLobbyComponent — the base class, the type table and CreateBehavior](../MissionLobbyComponent)
- [LobbyNetworkComponent — the other multiplayer mission component in this area](../LobbyNetworkComponent)
- [MultiplayerGameNotificationsComponent — what the client shows after leaving](../MultiplayerGameNotificationsComponent)
- [Mission — behaviour lookup and mission lifetime](../../mission/Mission)
- [Area Index](../)

## Key Methods

### QuitMission
`public override void QuitMission()`

**Purpose:** Executes the QuitMission logic.

```csharp
// Obtain an instance of MissionBattleSchedulerClientComponent from the subsystem API first
MissionBattleSchedulerClientComponent missionBattleSchedulerClientComponent = ...;
missionBattleSchedulerClientComponent.QuitMission();
```

## How to use

The single member is the entry point, and the base-class no-op it calls is real, not an oversight:

```csharp
MissionLobbyComponent lobby = Mission.Current.GetMissionBehavior<MissionLobbyComponent>();
if (lobby is MissionBattleSchedulerClientComponent clientLobby && NetworkMain.GameClient != null)
{
    clientLobby.QuitMission();   // base.QuitMission() is empty; this override is the whole behaviour
}
```

Note that `CreateBehavior()` casts with no type check, so a mission whose `BannerlordNetwork.LobbyMissionType` is Matchmaker always gets this exact type unless a mod has replaced the table entry.

## See Also

- [Area Index](../)