---
title: "MissionNetworkComponent"
description: "The v1.4.5 Mission-level network behavior that registers multiplayer messages, synchronizes agents and MissionObjects, and owns peer join and disconnect cleanup."
---
# MissionNetworkComponent

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public sealed class MissionNetworkComponent : MissionNetwork`  
**Base:** [`MissionNetwork`](../MissionNetwork)  
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionNetworkComponent.cs`

## Overview

`MissionNetworkComponent` is the default multiplayer network behaviour for a running battle. It is a **Mission-level coordinator, not a component attached to an [`Agent`](../../mission/Agent), `GameEntity` or `MissionObject`**, and it is declared `public sealed class MissionNetworkComponent : MissionNetwork` (`MissionNetworkComponent.cs:14`) — **sealed, so it cannot be extended**. The instance is owned by the active [`Mission`](../../mission/Mission); `MissionState` adds it to the default behavior list only when `GameNetwork.IsSessionActive` or `GameNetwork.IsReplay` is true.

Its work splits cleanly in two directions. On a **client or replay** it consumes server messages — `CreateAgent`, `CreateMissionObject`, `RemoveMissionObject`, `SynchronizeMissionObject`, plus team, formation, weapon-state and missile-state messages — so the local Mission mirrors the authoritative state. On a **server** it accepts selected client requests such as `RequestUseObject`, `ApplyOrder` and `ApplySiegeWeaponOrder`, validates and applies them through the server-side systems, then broadcasts the result. The class is 1812 lines and exposes 11 public members, of which the only two `event` members (`MissionNetworkComponent.cs:22` and `:24`) are the entire sanctioned subscription surface.

## One-line responsibility

`MissionNetworkComponent` is the default multiplayer `Mission` behavior that registers the mission's network messages, applies server snapshots on clients, sends the authoritative mission state to new peers, and releases peer, agent, and mission references during disconnect and mission teardown.

## Mental Model

This is a Mission-level network coordinator, not a component attached to an [`Agent`](../../mission/Agent), `GameEntity`, or `MissionObject`. It is a sealed concrete [`MissionNetwork`](../MissionNetwork) behavior owned by the active [`Mission`](../../mission/Mission). `MissionState` adds it to the default behavior list only when `GameNetwork.IsSessionActive` or `GameNetwork.IsReplay` is true. During Mission setup, the base class calls `AddRemoveMessageHandlers`, registers the selected handlers with `GameNetwork`, and later adds the behavior to the UDP handler list.

The class has two different directions of responsibility:

- On a client or replay, it consumes server messages such as `CreateAgent`, `CreateMissionObject`, `RemoveMissionObject`, `SynchronizeMissionObject`, team and formation messages, weapon state, and missile state. These handlers make the local Mission mirror the authoritative state.
- On a server, it accepts selected client requests such as `RequestUseObject`, `ApplyOrder`, `ApplySiegeWeaponOrder`, formation selection, weapon drop, and spawn-as-bot requests. It validates and applies those requests through the server-side mission systems, then broadcasts the resulting state.

The server is therefore the authority. A client-side call to a local Agent, Team, or MissionObject does not become multiplayer truth merely because this behavior exists. A mod should observe the component's synchronization events or use the owning Mission API; it should not call private packet handlers, fabricate the game's internal messages, or invoke `OnClientSynchronized` to pretend that a peer finished loading.

## When to use and when not to use

**Use it when:**

- A multiplayer Mission behavior needs to wait for the local client to receive its initial mission snapshot.
- A system needs to observe synchronization for every peer through `OnClientSynchronizedEvent`.
- You need to understand why a runtime `MissionObject`, Agent, team, formation, spawned weapon, or missile appears on a late-joining client.
- You are debugging Mission teardown, reconnect, or the distinction between a client request and a server broadcast.

**Do not use it when:**

- Looking up an Agent or entity component. The correct lookup is `Mission.GetMissionBehavior<MissionNetworkComponent>()`, not `agent.GetComponent<MissionNetworkComponent>()`.
- Adding an ordinary mission feature. Add a separate [`MissionBehavior`](../../mission/MissionBehavior) or [`MissionLogic`](../MissionLogic) and subscribe to the public synchronization event if it needs a network-ready boundary.
- Making Campaign or save data persistent. This behavior owns the current Mission network lifecycle; Campaign behavior `SyncData` and SaveSystem contracts own persistent state.
- Treating a client request as permission to mutate authoritative state. Send or use the supported game request path and let the server-side mission logic decide the result.
- Keeping references to `Agent`, `MissionPeer`, `Team`, `Formation`, or `MissionObject` after the Mission is ending. This class actively clears those relationships during disconnect and finalization.

## Dependency graph

**Upstream:**

- [`MissionState`](../../campaign-ext/MissionState) creates the default instance for a network session or replay and removes it during Mission finalization.
- [`Mission`](../../mission/Mission) owns the behavior, its `MissionBehaviors`, `MissionObjects`, `AllAgents`, `Teams`, and Mission time tracker.
- [`MissionNetwork`](../MissionNetwork) registers this behavior as a `GameNetwork`/UDP handler and provides the connection lifecycle hooks.
- [`GameNetwork`](../GameNetwork) selects the client, server, recorder, and replay branches and carries the `GameNetworkMessage` traffic.
- [`NetworkCommunicator`](../NetworkCommunicator) and [`MissionPeer`](../MissionPeer) identify peers, their controlled agents, teams, culture, and reconnect state.

**State synchronized or cleaned up by this behavior:**

- [`Agent`](../../mission/Agent), [`Team`](../Team), and [`Formation`](../../mission/Formation) state used by the mission.
- [`MissionObject`](../MissionObject), [`MissionObjectId`](../MissionObjectId), and [`SynchedMissionObject`](../SynchedMissionObject) state.
- Mission time through `SynchronizeMissionTimeTracker`, plus spawned weapons and missiles.

**Downstream consumers:**

- [`MissionLobbyComponent`](../MissionLobbyComponent), [`MissionGauntletTeamSelection`](../MissionGauntletTeamSelection), [`MissionScoreboardComponent`](../MissionScoreboardComponent), and [`MultiplayerTeamSelectComponent`](../MultiplayerTeamSelectComponent) obtain the behavior from the active Mission.
- Those consumers use `OnMyClientSynchronized` to delay UI or player-selection work until the local client snapshot is ready.
- `VoiceChatHandler` and other multiplayer components use `OnClientSynchronizedEvent` for peer-level post-synchronization work.

## Lifecycle and authority boundary

The important order is owned by the Mission and `MissionNetwork` base class:

1. `MissionState.AddDefaultMissionBehaviorsTo` adds `new MissionNetworkComponent()` only for a network session or replay.
2. `MissionNetwork.OnAfterMissionCreated` creates the message registration container, calls this class's `AddRemoveMessageHandlers`, and registers the handlers. The client/replay branch registers server-to-client state messages; the server branch registers client request messages.
3. `OnBehaviorInitialize` calls the base implementation, which invokes `GameNetwork.AddNetworkHandler(this)`, and then obtains the game's `ChatBox` handler.
4. When a new client finishes loading, the early hook creates its `MissionPeer` and preserves components for reconnecting peers. The late hook sends the complete current snapshot: Mission time, teams and relations, formation data, agents, spawned MissionObjects, synchronized MissionObject records, missiles, troop selection, and the `ExistingObjectsEnd` marker.
5. `OnClientSynchronized` is called by the multiplayer network component after a peer's synchronization phase. It raises `OnClientSynchronizedEvent` for that peer and raises `OnMyClientSynchronized` only when `networkPeer.IsMine` is true.
6. On the server or recorder, `OnMissionTick` broadcasts Mission time roughly every two seconds and ticks each peer's mission representative. On the server it also updates inactivity status unless the option is disabled.
7. `OnClearScene` broadcasts `ClearMission` from the server or recorder. `OnAddTeam` broadcasts the team and records it in the Mission record; a client also establishes a spectator team when appropriate.
8. Disconnect hooks remove agent visuals, kill a controlled agent on the server-side player path, clear Agent ownership and `MissionPeer` links, and release a controlled formation's player owner.
9. `OnEndMission` clears `ControlledAgent` on each `MissionPeer` and clears `MissionPeer` from every Agent before allowing the base Mission network teardown. `MissionState` then removes the behavior, which unregisters the network handler through the base class.

## Runtime MissionObject synchronization

The network behavior does not create an arbitrary client-side copy whenever a mod calls a constructor. The authoritative creation path is [`Mission.CreateMissionObjectFromPrefab`](../../mission/Mission): on a server or recorder it instantiates the prefab, runs the pre-script callback, initializes the script components, records the root and child `MissionObjectId` values, broadcasts `CreateMissionObject`, and stores the dynamic-entity information for later peers.

The client handler receives that message, instantiates the same prefab in the current Mission scene, assigns the root and child IDs, and lets the Mission object lifecycle register the resulting scripts. When the server removes a runtime MissionObject, `Mission.OnMissionObjectRemoved` returns its runtime ID, removes its dynamic-entity record, and broadcasts `RemoveMissionObject`; the client handler removes the entity identified by the message's `MissionObjectId`.

This is why `MissionObjectId`, scene registration, and network ownership must be treated together. A client-created object with a locally invented ID is not a synchronized object, and a server-side removal that bypasses the Mission removal path leaves other peers with stale entities.

## Real acquisition and subscription path

The source-backed way to get this behavior is from the active Mission. Multiplayer components do this during their own Mission lifecycle and detach their event handlers when they are removed:

```csharp
public sealed class NetworkReadyMissionLogic : MissionLogic
{
    private MissionNetworkComponent _missionNetwork;

    public override void OnBehaviorInitialize()
    {
        base.OnBehaviorInitialize();
        _missionNetwork = Mission.GetMissionBehavior<MissionNetworkComponent>();

        if (GameNetwork.IsClient && _missionNetwork != null)
        {
            _missionNetwork.OnMyClientSynchronized += OnMyClientSynchronized;
        }
    }

    public override void OnRemoveBehavior()
    {
        if (_missionNetwork != null)
        {
            _missionNetwork.OnMyClientSynchronized -= OnMyClientSynchronized;
        }

        base.OnRemoveBehavior();
    }

    private void OnMyClientSynchronized()
    {
        Mission mission = Mission.Current;
        if (mission == null || mission.MissionEnded)
        {
            return;
        }

        // Read Mission-owned teams, agents, or mission objects here.
    }
}
```

This follows the real `MissionLobbyComponent` and multiplayer UI pattern: acquire through `Mission.GetMissionBehavior<T>()`, subscribe after the behavior exists, and unsubscribe during removal. The event means that the local peer has completed the component's synchronization callback; it is not a general signal that every custom asset or UI view is ready.

For a server-authoritative runtime object, use the Mission API that performs registration and broadcasting rather than constructing a `MissionObject` yourself:

```csharp
public MissionObject SpawnAuthoritativeMissionObject(
    string prefabId,
    MatrixFrame frame)
{
    if (!GameNetwork.IsServerOrRecorder || Mission.Current == null)
    {
        return null;
    }

    return Mission.Current.CreateMissionObjectFromPrefab(
        prefabId,
        frame,
        hasCustomRestOffset: false,
        restOffset: 0f,
        actionAppliedBeforeScriptInitialization: entity =>
            entity.SetVisibilityExcludeParents(true));
}
```

`prefabId` must be a real prefab identifier available to the mission module. The important part of the example is the authority and acquisition path: `Mission.Current` owns creation, assigns IDs, initializes scripts, and emits the network message. Do not call this on a client and expect the local return value to replicate.

## Dependencies

- Base type: [`MissionNetwork`](../MissionNetwork), the Mission-level network behavior this class implements. **`public sealed class MissionNetworkComponent : MissionNetwork`** (`MissionNetworkComponent.cs:14`) — the type is **sealed**, so you cannot extend it; a replacement must be a separate `MissionNetwork` behavior with its own registered protocol.
- Synchronization events to observe rather than drive: `public event Action OnMyClientSynchronized` (`MissionNetworkComponent.cs:22`) and `public event Action<NetworkCommunicator> OnClientSynchronizedEvent` (`MissionNetworkComponent.cs:24`). These are the **only** `event` members on the class, and they are the sanctioned subscription surface.
- Handler registration: `protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)` (`MissionNetworkComponent.cs:26`), called by the base during Mission setup.
- Host and lifecycle: [`Mission`](../../mission/Mission), [`MissionState`](../../campaign-ext/MissionState) — the latter adds this behavior only when `GameNetwork.IsSessionActive` or `GameNetwork.IsReplay` is true.
- Transport: [`GameNetwork`](../GameNetwork) and [`NetworkCommunicator`](../NetworkCommunicator), whose `IsClientOrReplay` / `IsServer` / `IsServerOrRecorder` branches select the client, server and replay paths.
- Synchronized entities: [`Agent`](../../mission/Agent), [`MissionObject`](../MissionObject), [`SynchedMissionObject`](../SynchedMissionObject), and the [`Team`](../Team) / [`Formation`](../../mission/Formation) state that the snapshot carries.
- Consumer behaviours: [`MissionLobbyComponent`](../MissionLobbyComponent), [`MissionScoreboardComponent`](../MissionScoreboardComponent).
- Architecture boundary: [Crash boundaries](../../../architecture/crash-boundary) · [Documentation contract](../../../architecture/doc-contract).

## How to use

**How to obtain it.** Do not construct it and do not subclass it. `MissionNetworkComponent` is **`public sealed`** (`MissionNetworkComponent.cs:14`), so there is no way to extend it, and the instance is owned by the active [`Mission`](../../mission/Mission): `MissionState` adds it to the default behavior list only when `GameNetwork.IsSessionActive` or `GameNetwork.IsReplay` is true. Reach it through the mission's behaviors.

**A typical use.** Subscribe to the synchronization events rather than polling, and read what they hand you:

```csharp
using TaleWorlds.MountAndBlade;

public class LateJoinObserver
{
    private bool _alreadySynchronized;

    // OnClientSynchronizedEvent is the late-join signal
    // (MissionNetworkComponent.cs:24). Both events are one-shot callbacks:
    // a subscriber that attaches after the event has already fired never
    // sees it, which is why _alreadySynchronized guards below.
    public void Attach()
    {
        foreach (MissionNetworkComponent component in FindComponents())
        {
            component.OnClientSynchronizedEvent += OnClientSynchronized;
        }
    }

    public void Detach()
    {
        foreach (MissionNetworkComponent component in FindComponents())
        {
            component.OnClientSynchronizedEvent -= OnClientSynchronized;
        }
    }

    private void OnClientSynchronized(NetworkCommunicator peer)
    {
        _alreadySynchronized = true;
        Debug.Print("peer synchronized: " + peer, 0);
    }

    public bool IsSynchronized
    {
        get
        {
            // Guard against the attach-after-fire race: OnClientSynchronized is
            // one-shot, so a late subscriber must establish its own guard.
            return _alreadySynchronized;
        }
    }
}
```

**What to watch out for.** The trap is treating the synchronization event as "the mission is ready to touch". It is not — a new peer receives a **multi-part snapshot**, and reading it as synchronized at `HandleLateNewClientAfterLoadingFinished` (`MissionNetworkComponent.cs:1658`) is reading it mid-delivery. The second trap is authority: this class is a coordinator, not a mirror you can drive. Calling a local `Agent` or `MissionObject` on a client does not become multiplayer truth because the component exists.

## Key members

### OnMyClientSynchronized

`public event Action OnMyClientSynchronized`

Raised only for the local peer after `OnClientSynchronized` receives a communicator whose `IsMine` flag is true. It is the correct boundary for client-only work such as opening team selection or requesting a culture choice. Multiplayer consumers unsubscribe in their Mission removal/finalization hook; a retained subscription can call UI code after the Mission view is gone.

### OnClientSynchronizedEvent

`public event Action<NetworkCommunicator> OnClientSynchronizedEvent`

Raised for every peer passed to `OnClientSynchronized`, including a remote peer. Use it for peer-level initialization that must distinguish `NetworkCommunicator` instances. `VoiceChatHandler` is a source-backed consumer. It is not a replacement for the lower-level network synchronization protocol and should not be raised manually by a mod.

### AddRemoveMessageHandlers

`protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)` — declared at `MissionNetworkComponent.cs:26`.

Registers the built-in message handlers by authority branch. Client/replay handlers consume server state for Agents, MissionObjects, weapons, siege machines, formations, missiles, and Mission time. Server handlers receive the supported client requests for object use, orders, formation selection, weapon actions, and bot spawning. This method is called by `MissionNetwork.OnAfterMissionCreated`; it is a framework lifecycle hook, not a public extension point on this sealed class.

### OnBehaviorInitialize

`public override void OnBehaviorInitialize()` — declared at `MissionNetworkComponent.cs:1743`.

Calls `MissionNetwork.OnBehaviorInitialize`, which adds the behavior to `GameNetwork`, then caches the global `ChatBox` handler. It runs after the behavior has been attached to the Mission. A derived or replacement network behavior must preserve the base call; callers should never invoke this method to force registration.

### OnPlayerDisconnectedFromServer

`public override void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)` — declared at `MissionNetworkComponent.cs:1624`.

Removes the disconnected peer's spawned Agent visuals through `MultiplayerMissionAgentVisualSpawnComponent` and resets `MissionPeer.HasSpawnedAgentVisuals`. It is a server-side connection lifecycle callback. It does not mean that all references to the peer's Agent or formation are safe to use; the later disconnect hooks perform additional cleanup.

### HandleEarlyNewClientAfterLoadingFinished

`protected override void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` — declared at `MissionNetworkComponent.cs:1634`.

Synchronizes component state from existing and disconnected peers when the peer is not the server peer, adds a `MissionPeer` component, restores the native team for a reconnecting peer when needed, and records `JoinTime`. This establishes the peer identity before the late snapshot is sent.

### HandleLateNewClientAfterLoadingFinished

`protected override void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` — declared at `MissionNetworkComponent.cs:1658`.

For a non-server peer, sends the existing Mission state in a deliberate sequence. The sequence includes `ExistingObjectsBegin`, Mission time, teams, relations, formations, agents, spawned MissionObjects, synchronized MissionObject records, missiles, troop-selection state, native existing-object data, and `ExistingObjectsEnd`. Do not treat the peer as fully synchronized before the network layer calls `OnClientSynchronized`.

### HandleEarlyPlayerDisconnect

`protected override void HandleEarlyPlayerDisconnect(NetworkCommunicator networkPeer)` — declared at `MissionNetworkComponent.cs:1666`.

Removes the peer's Agent visuals and broadcasts `RemoveAgentVisualsForPeer` from the server or recorder. This runs before the later player-disconnect cleanup, so UI or Agent references should not assume the visual entry still exists.

### HandlePlayerDisconnect

`protected override void HandlePlayerDisconnect(NetworkCommunicator networkPeer)` — declared at `MissionNetworkComponent.cs:1687`.

On a server-side player disconnect, kills the controlled Agent using a synthetic lethal `Blow`, clears matching `MissionPeer` and owning-peer links on every Agent, and clears the controlled Formation's `PlayerOwner`. The method keeps gameplay state consistent with the peer leaving; it is not a generic event for mods to call in order to kill an Agent.

### OnRemoveBehavior

`public override void OnRemoveBehavior()` — declared at `MissionNetworkComponent.cs:1682`.

Preserves the base hook. The base `MissionNetwork` implementation removes the behavior from `GameNetwork`, and the UDP handler later unregisters its message registrations. It is the terminal Mission behavior boundary; do not use it as a late opportunity to send new Mission messages.

### OnAddTeam

`public override void OnAddTeam(Team team)` — declared at `MissionNetworkComponent.cs:1726`.

On a server or recorder, broadcasts the team index, side, colors, banner code, and player-role flags and adds the event to the Mission record. On a client, it can establish the spectator team when the team is neither attacker nor defender. A mod that changes team authority should use the game's team or order systems and let this behavior distribute the result.

### OnClearScene

`public override void OnClearScene()` — declared at `MissionNetworkComponent.cs:1749`.

The server or recorder broadcasts `ClearMission` to all peers. It does not reload an arbitrary scene or repopulate MissionObjects for a mod. Scene and Mission lifecycle ownership remains with [`Mission`](../../mission/Mission).

### OnMissionTick

`public override void OnMissionTick(float dt)` — declared at `MissionNetworkComponent.cs:1760`.

On the server or recorder, accumulates `dt` and broadcasts the current Mission time when the two-second synchronization period is reached. It also ticks each peer's `MissionRepresentativeBase`; on the server it updates inactivity state when the inactivity-kick option is enabled. This is a high-frequency Mission hook, not a place to perform expensive global scans or Campaign persistence.

### OnEndMission

`protected override void OnEndMission()` — declared at `MissionNetworkComponent.cs:1783`.

On the server, clears every `MissionPeer.ControlledAgent` and every Agent's `MissionPeer` reference before calling the base cleanup. Accessing those references after Mission end is invalid even if a managed object still appears reachable.

### OnPeerSelectedTeam

`public void OnPeerSelectedTeam(MissionPeer missionPeer)` — declared at `MissionNetworkComponent.cs:1799`.

Sends that peer's Agent visuals after it selects a team. It is called by multiplayer team-selection flow and depends on a valid network peer and selected team. It is not a substitute for selecting a team or a general-purpose resynchronization method.

### OnClientSynchronized

`public void OnClientSynchronized(NetworkCommunicator networkPeer)` — declared at `MissionNetworkComponent.cs:1804`, raising the event with `this.OnClientSynchronizedEvent?.Invoke(networkPeer);` at `MissionNetworkComponent.cs:1806`.

Raises `OnClientSynchronizedEvent` and, for the local peer, `OnMyClientSynchronized`. The multiplayer network component calls it after the peer synchronization protocol. Calling it manually can make UI or voice-chat consumers act before Agents, MissionObjects, and Mission state have actually arrived.

## Examples

The sanctioned integration is observation, not invocation. Read the synchronization events and let the mission own the authority:

```csharp
using TaleWorlds.MountAndBlade;

public class MissionNetworkObserver
{
    private bool _localClientSynchronized;

    public void Attach()
    {
        MissionNetworkComponent component = Find();
        if (component == null)
        {
            Debug.Print("no active session or replay; nothing to observe", 0);
            return;
        }

        // Both are the class's only `event` members
        // (MissionNetworkComponent.cs:22 and :24). There is no subscription
        // surface anywhere else on this type.
        component.OnMyClientSynchronized += OnLocalReady;
        component.OnClientSynchronizedEvent += OnPeerReady;
    }

    public void Detach()
    {
        MissionNetworkComponent component = Find();
        if (component == null)
            return;

        // Unsubscribe in your Mission removal/finalization hook. A retained
        // subscription calls UI code after the Mission view is gone.
        component.OnMyClientSynchronized -= OnLocalReady;
        component.OnClientSynchronizedEvent -= OnPeerReady;
    }

    private void OnLocalReady()
    {
        _localClientSynchronized = true;
        Debug.Print("local peer synchronized; client-only work is safe now", 0);
    }

    private void OnPeerReady(NetworkCommunicator peer)
    {
        Debug.Print("peer synchronized: " + peer, 0);
    }

    public bool LocalIsReady => _localClientSynchronized;
}
```

The negative example, which is what the Risks section is about:

```csharp
using TaleWorlds.MountAndBlade;

public class ForgeryAttempt
{
    public static void PretendAPeerLoaded()
    {
        MissionNetworkComponent component = Find();

        // WRONG. OnClientSynchronized is public (MissionNetworkComponent.cs:1804)
        // so this COMPILES — and it raises OnClientSynchronizedEvent (:1806),
        // so UI and voice-chat consumers act before Agents, MissionObjects and
        // Mission state have arrived. This is the exact forgery the Risks
        // section warns about: compile-time access, runtime desync.
        //
        // component.OnClientSynchronized(null);

        // RIGHT: wait for the event. Nothing else is available to a mod.
    }

    private static MissionNetworkComponent Find() => null;
}
```

## Risks and crash boundaries

- **Wrong host lookup:** `MissionNetworkComponent` is a `MissionBehavior`. `agent.GetComponent<MissionNetworkComponent>()` searches the wrong ownership layer and returns no useful network behavior. Look it up from the active `Mission` and handle a missing behavior when default behaviors were disabled.
- **Authority inversion:** Client-local mutations do not update the server's authoritative Agent, Team, MissionObject, or battle state. A client request must go through the supported request path, and server code must validate the current peer, Mission, object ID, and gameplay phase.
- **Fake or reused IDs:** Runtime MissionObjects are registered with `MissionObjectId` values and dynamic-entity records. Constructing a local object or reusing an ID bypasses the registration and late-join snapshot path, producing missing objects, wrong-object updates, or stale entities on other peers.
- **Late-join ordering:** A new peer receives a multi-part snapshot. Do not read it as synchronized at `HandleLateNewClientAfterLoadingFinished`; wait for the synchronization event. UI code that subscribes after the event can miss the one-shot callback and must establish its own already-synchronized guard if its lifecycle permits that race.
- **Disconnect lifetime:** `HandleEarlyPlayerDisconnect`, `HandlePlayerDisconnect`, `OnPlayerDisconnectedFromServer`, and `OnEndMission` each cover different parts of cleanup. Keeping `Agent`, `MissionPeer`, or `Formation` references across those boundaries can cause use-after-removal behavior or native access failures.
- **Missing base cleanup:** A replacement `MissionNetwork` behavior that omits `base.OnBehaviorInitialize()` or `base.OnRemoveBehavior()` can leave messages unregistered, registered twice, or attached after the Mission ends. `MissionNetworkComponent` itself is sealed, so extending it is not an option.
- **Wrong phase tick:** `OnMissionTick` runs only while the Mission lifecycle is active. It is not safe to use it to mutate Campaign state, drive a UI object after `OnEndMission`, or retain a native entity whose MissionObject has been removed.
- **Replay and recorder branches:** `GameNetwork.IsClientOrReplay`, `GameNetwork.IsServer`, and `GameNetwork.IsServerOrRecorder` select different behavior. Code that assumes every callback has a server peer, or that a replay can accept live client requests, will diverge from the source contract.
- **Message forgery:** The built-in handlers are private and include validation and ownership assumptions. Do not use reflection or hand-written internal messages as a shortcut; write a separate `MissionNetwork` behavior with its own registered protocol when a custom network contract is genuinely required.

## Cross-Version Notes

This page follows the v1.4.5 `MissionNetworkComponent.cs` (1812 lines), plus `MissionNetwork.cs`, `MissionState.cs`, `Mission.cs`, and the multiplayer call sites. The class declaration is `public sealed class MissionNetworkComponent : MissionNetwork` (`MissionNetworkComponent.cs:14`), and the two `event` members sit at `MissionNetworkComponent.cs:22` and `:24` — **verify both line numbers again after any version bump**, because the two events are the only subscription surface and everything a multiplayer mod depends on hangs off them.

The **exact message set** is the most version-sensitive part of this class. The client-side handlers (`CreateAgent`, `CreateMissionObject`, `RemoveMissionObject`, `SynchronizeMissionObject`, team and formation messages, weapon state, missile state) and the server-side accepted requests (`RequestUseObject`, `ApplyOrder`, `ApplySiegeWeaponOrder`, formation selection, weapon drop, spawn-as-bot) are generated against the native protocol and **change together with it**. Recheck both the authority branches (`GameNetwork.IsClientOrReplay`, `IsServer`, `IsServerOrRecorder`) and the Mission finalization path when porting a multiplayer mod to another Bannerlord version.

Because the type is `sealed` (`MissionNetworkComponent.cs:14`), a version that adds a hook cannot be extended — you must write a separate `MissionNetwork` behavior with its own registered protocol, and re-verify the `base.OnBehaviorInitialize()` / `base.OnRemoveBehavior()` pairing noted in Risks. **VERIFIED MEASURED for v1.4.5** (1812 lines, 11 public members, 2 `event` members, 1 `sealed`; every cited line number checked with `sed -n`).

## Version note

This page follows the v1.4.5 `MissionNetworkComponent.cs`, `MissionNetwork.cs`, `MissionState.cs`, `Mission.cs`, and multiplayer call sites. The exact message set and connection hooks are version-sensitive. Recheck both the authority branches and the Mission finalization path when porting a multiplayer mod to another Bannerlord version.

## See also and reciprocal navigation

- ↑ Parent: [Mission-ext module index](../)
- ↔ Same-section network base: [MissionNetwork](../MissionNetwork) · [GameNetwork](../GameNetwork) · [NetworkCommunicator](../NetworkCommunicator)
- Mission host and lifecycle: [Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior) · [MissionLogic](../MissionLogic) · [MissionState](../../campaign-ext/MissionState)
- Mission entities: [Agent](../../mission/Agent) · [Team](../Team) · [Formation](../../mission/Formation) · [MissionObject](../MissionObject) · [MissionObjectId](../MissionObjectId) · [SynchedMissionObject](../SynchedMissionObject)
- Consumers: [MissionLobbyComponent](../MissionLobbyComponent) · [MissionGauntletTeamSelection](../MissionGauntletTeamSelection) · [MissionScoreboardComponent](../MissionScoreboardComponent) · [MultiplayerTeamSelectComponent](../MultiplayerTeamSelectComponent)
- Architecture boundary: [Crash boundaries](../../../architecture/crash-boundary) · [Documentation contract](../../../architecture/doc-contract)
- 中文/English: [MissionNetworkComponent](../../../../zh/api/mission-ext/MissionNetworkComponent)
