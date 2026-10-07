---
title: "MissionNetworkComponent"
description: "Auto-generated class reference for MissionNetworkComponent."
---
# MissionNetworkComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class MissionNetworkComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MissionNetworkComponent.cs`

## Overview

`MissionNetworkComponent` is the multiplayer mission's **message router** — 2264 lines, `sealed`, deriving from `MissionNetwork` (`MissionNetworkComponent.cs:16`), of which the great majority is `RegisterBaseHandler<T>` calls. Its `AddRemoveMessageHandlers` override registers the whole protocol; the first `RegisterBaseHandler` in the file is for `CreateFreeMountAgent` (`MissionNetworkComponent.cs:33`) and the last visible ones cover the entire mission-object and siege-machine surface (`MissionNetworkComponent.cs:53` through `MissionNetworkComponent.cs:87`). Every handler is registered inside `if (GameNetwork.IsClientOrReplay)` (`MissionNetworkComponent.cs:31`), so a dedicated server registers nothing and only ever *sends*.

It is a mission behaviour, not an agent component, and the game checks for its presence before doing networked work: `Agent` refuses to build in a session without it (`Agent.cs:983`), `Mission` removes it on teardown when a session is active (`Mission.cs:1113`, `Mission.cs:1115`), and the multiplayer game-mode client caches it at `MissionMultiplayerGameModeBaseClient.cs:136` while the lobby component subscribes to its sync event at `MissionLobbyComponent.cs:136` and unsubscribes at `MissionLobbyComponent.cs:143`.

It exposes exactly two events, both `public event Action`: `OnMyClientSynchronized` (`MissionNetworkComponent.cs:21`) and `OnClientSynchronizedEvent`, which carries the `NetworkCommunicator` (`MissionNetworkComponent.cs:26`).

## Mental Model

`OnMissionTick` does two structurally different jobs and it is worth separating them, because only one is about the network.

The first is a **server-only clock resync on a fixed two-second cadence** (`MissionNetworkComponent.cs:2184`): accumulate `dt`, and when the accumulator passes `2f` subtract `2f` and broadcast `SynchronizeMissionTimeTracker(MissionTime.Now.ToSeconds)` (`MissionNetworkComponent.cs:2187` through `MissionNetworkComponent.cs:2192`). Subtracting rather than zeroing is deliberate — it keeps the phase of the resync instead of drifting it — but it also means one long frame produces a burst of catch-up broadcasts on subsequent frames, which is the intended behaviour for a lagging server.

**The constant that documents this is dead.** `TimerSyncPeriod = 2f` is declared at `MissionNetworkComponent.cs:2259` and referenced exactly once in the whole file — its own declaration. The live comparisons and subtractions use the inline literal `2f` (`MissionNetworkComponent.cs:2187`, `MissionNetworkComponent.cs:2189`). So editing `TimerSyncPeriod` changes nothing at all; the resync period is the two literals.

The second job is per-peer housekeeping, and it runs on **every peer regardless of role** (`MissionNetworkComponent.cs:2195`). Each peer's `MissionRepresentativeBase` is ticked if present (`MissionNetworkComponent.cs:2197` through `MissionNetworkComponent.cs:2200`). Inactivity tracking is narrower: it is gated on being the server, *not* the server peer, and on the `DisableInactivityKick` option being off (`MissionNetworkComponent.cs:2202`), then calls `MissionPeer.TickInactivityStatus()` (`MissionNetworkComponent.cs:2204` through `MissionNetworkComponent.cs:2207`). So a client never runs inactivity tracking locally, and neither does the host's own peer.

`OnClearScene` is the mirror image of the handler registration: guarded on `GameNetwork.IsServerOrRecorder` (`MissionNetworkComponent.cs:2172`), it broadcasts a `ClearMission` with `EventBroadcastFlags.AddToMissionRecord` (`MissionNetworkComponent.cs:2176`, `MissionNetworkComponent.cs:2177`) — recorded into the replay, unlike the timer sync which uses `EventBroadcastFlags.None` (`MissionNetworkComponent.cs:2192`). Scene teardown is worth recording; a clock correction is not.

`OnClientSynchronized(NetworkCommunicator)` is a two-line forwarder with a null guard, and it exists so the lobby can react to *any* peer's synchronisation rather than just its own (`MissionNetworkComponent.cs:2237`, `MissionNetworkComponent.cs:2239`). The lobby's own subscription is to the parameterless `OnMyClientSynchronized` (`MissionLobbyComponent.cs:136`) — two events, two different scopes, and a mod that wants peer-wide reactions needs the one with the argument.

The class is `sealed`, so none of this can be subclassed. To add a protocol message you cannot extend this type; you add your own `MissionNetwork`-derived behaviour with its own `AddRemoveMessageHandlers`, or use `GameNetwork.AddNetworkComponent<T>` for a non-mission component.

## How to use

**Getting it.** Look it up from the live mission, and react to the local client's synchronisation — that is the lobby's own pattern:

```csharp
using TaleWorlds.MountAndBlade;

MissionNetworkComponent net = Mission.Current.GetMissionBehavior<MissionNetworkComponent>();
if (net != null)
{
    net.OnMyClientSynchronized += () => Debug.Print("my client is in sync", false);

    // Peer-wide, with the communicator:
    net.OnClientSynchronizedEvent += peer => Debug.Print("in sync: " + peer.UserName, false);

    // Detach both, or the static network layer keeps the view alive.
    net.OnMyClientSynchronized -= () => { };
}
```

Send a custom message the same way the engine does — server-side broadcast inside an explicit event block, and only if you registered a matching handler on the client side:

```csharp
if (GameNetwork.IsServerOrRecorder)
{
    GameNetwork.BeginBroadcastModuleEvent();
    GameNetwork.WriteMessage(new MyCustomMissionMessage(payload));
    // AddToMissionRecord keeps it in the replay; None does not.
    GameNetwork.EndBroadcastModuleEvent(GameNetwork.EventBroadcastFlags.None, null);
}
```

To extend the protocol, write your own networked behaviour rather than touching this sealed class:

```csharp
public class MyMissionSync : MissionNetwork
{
    protected override void AddRemoveMessageHandlers(
        GameNetwork.NetworkMessageHandlerRegistererContainer registerer)
    {
        if (GameNetwork.IsClientOrReplay)   // same guard the sealed class uses
        {
            registerer.RegisterBaseHandler<MyCustomMissionMessage>(
                new GameNetworkMessage.ServerMessageHandlerDelegate<GameNetworkMessage>(OnMine));
        }
    }

    private void OnMine(GameNetworkMessage msg) { }

    protected override void OnEndMission() { }
}

Mission.Current.AddMissionBehavior(new MyMissionSync());
```

**The mistake that tunes nothing.** Changing `TimerSyncPeriod` to make the mission clock resync more or less often. It is declared and never read (`MissionNetworkComponent.cs:2259`) — the live period is the literal `2f` in the accumulator test and the subtraction (`MissionNetworkComponent.cs:2187`, `MissionNetworkComponent.cs:2189`). Your edit compiles, the constant changes value, and the resync rate is bit-for-bit identical, with no diagnostic anywhere to say so.

## Key Methods

### OnPlayerDisconnectedFromServer
`public override void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)`

**Purpose:** Invoked when the player disconnected from server event is raised.

```csharp
// Obtain an instance of MissionNetworkComponent from the subsystem API first
MissionNetworkComponent missionNetworkComponent = ...;
missionNetworkComponent.OnPlayerDisconnectedFromServer(networkPeer);
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the remove behavior event is raised.

```csharp
// Obtain an instance of MissionNetworkComponent from the subsystem API first
MissionNetworkComponent missionNetworkComponent = ...;
missionNetworkComponent.OnRemoveBehavior();
```

### OnAddTeam
`public override void OnAddTeam(Team team)`

**Purpose:** Invoked when the add team event is raised.

```csharp
// Obtain an instance of MissionNetworkComponent from the subsystem API first
MissionNetworkComponent missionNetworkComponent = ...;
missionNetworkComponent.OnAddTeam(team);
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of MissionNetworkComponent from the subsystem API first
MissionNetworkComponent missionNetworkComponent = ...;
missionNetworkComponent.OnBehaviorInitialize();
```

### OnClearScene
`public override void OnClearScene()`

**Purpose:** Invoked when the clear scene event is raised.

```csharp
// Obtain an instance of MissionNetworkComponent from the subsystem API first
MissionNetworkComponent missionNetworkComponent = ...;
missionNetworkComponent.OnClearScene();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MissionNetworkComponent from the subsystem API first
MissionNetworkComponent missionNetworkComponent = ...;
missionNetworkComponent.OnMissionTick(0);
```

### OnPeerSelectedTeam
`public void OnPeerSelectedTeam(MissionPeer missionPeer)`

**Purpose:** Invoked when the peer selected team event is raised.

```csharp
// Obtain an instance of MissionNetworkComponent from the subsystem API first
MissionNetworkComponent missionNetworkComponent = ...;
missionNetworkComponent.OnPeerSelectedTeam(missionPeer);
```

### OnClientSynchronized
`public void OnClientSynchronized(NetworkCommunicator networkPeer)`

**Purpose:** Invoked when the client synchronized event is raised.

```csharp
// Obtain an instance of MissionNetworkComponent from the subsystem API first
MissionNetworkComponent missionNetworkComponent = ...;
missionNetworkComponent.OnClientSynchronized(networkPeer);
```

## Usage Example

```csharp
The `agent.GetComponent<MissionNetworkComponent>()` line previously on this page could never work: it is a `MissionNetwork`, not an `AgentComponent`, so it cannot satisfy `Agent.GetComponent<T>()`'s `where T : AgentComponent` constraint (`Agent.cs:3107`). It is a mission behaviour, and the presence test the engine itself uses is `Mission.HasMissionBehavior<MissionNetworkComponent>()` (`Agent.cs:2240`):

```csharp
var net = Mission.Current.GetMissionBehavior<MissionNetworkComponent>();
```
```

## See Also

- [LobbyNetworkComponent — the lobby-phase network component, a `UdpNetworkComponent` rather than a behaviour](../LobbyNetworkComponent)
- [MultiplayerGameNotificationsComponent — a sibling `MissionNetwork` with its own sealed-ish message set](../MultiplayerGameNotificationsComponent)
- [MultiplayerMissionAgentVisualSpawnComponent — the other component the game-mode base caches](../MultiplayerMissionAgentVisualSpawnComponent)
- [IGameNetworkHandler — the session-level callback contract above this one](../IGameNetworkHandler)
- [Area Index](../)