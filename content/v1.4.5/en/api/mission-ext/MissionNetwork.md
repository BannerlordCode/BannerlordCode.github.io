---
title: "MissionNetwork"
description: "Mission-level networking behavior base: registers GameNetwork message handlers, joins the UDP handler lifecycle, and cleans up when the Mission removes the behavior."
---

# MissionNetwork

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public abstract class MissionNetwork : MissionLogic, IUdpNetworkHandler`  
**Base:** [`MissionLogic`](../MissionLogic)  
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionNetwork.cs`

## One-line responsibility

It connects a Mission behavior to GameNetwork and the UDP lifecycle so a derived behavior can register, receive, and clean up network state within one Mission.

## Mental model

`MissionNetwork` is a Mission-layer networking behavior base, not a global network service or a message bus that mods instantiate directly. A concrete subclass is added as a [`MissionBehavior`](../../mission/MissionBehavior) to the active [`Mission`](../../mission/Mission). The Mission lifecycle then calls its hooks: `OnBehaviorInitialize` adds the object to `GameNetwork`, `OnAfterMissionCreated` creates the message registration container and invokes `AddRemoveMessageHandlers`, UDP close unregisters messages, and `OnRemoveBehavior` removes the network handler.

The derived behavior describes which messages and connection phases it owns. It should not manually repeat the framework lifecycle callbacks. Their order belongs to the Mission host and determines whether message registration, network callbacks, and cleanup are valid.

## When to use and when not to use

**Use it when:**

- A Mission behavior must receive GameNetwork messages or UDP connection-phase callbacks.
- A server, client, or replay feature needs short-lived network logic scoped to one Mission.
- Existing [`MissionTimer`](../MissionTimer), [`MissionTimeTracker`](../MissionTimeTracker), or Mission-object state needs a networking behavior as its host.

**Do not use it when:**

- Instantiating `MissionNetwork` directly; it is abstract and requires a concrete subclass.
- Storing a Campaign singleton, save object, or cross-Mission network manager.
- Calling `OnAfterMissionCreated`, `OnBehaviorInitialize`, or `OnRemoveBehavior` manually to repair registration.
- Treating a client message as authority to mutate Campaign state; authority and Action/Model boundaries remain above this class.

## Dependencies

- **Host:** [`Mission`](../../mission/Mission) owns and drives the derived behavior; the behavior contract comes from [`MissionLogic`](../MissionLogic) and [`MissionBehavior`](../../mission/MissionBehavior).
- **Network bridge:** `GameNetwork.AddNetworkHandler` and `GameNetwork.RemoveNetworkHandler` manage the UDP handler. Explicit `IUdpNetworkHandler` implementations forward network callbacks to protected virtual hooks.
- **Message registration:** `OnAfterMissionCreated` uses `GameNetwork.NetworkMessageHandlerRegistererContainer`; a subclass registers its handlers through `AddRemoveMessageHandlers`.
- **Concrete consumers:** [`MultiplayerTimerComponent`](../MultiplayerTimerComponent) derives from this base. [`MissionNetworkComponent`](../MissionNetworkComponent) handles the broader Mission message set, while [`MissionLobbyComponent`](../MissionLobbyComponent) and round components consume the resulting state.
- **Time boundary:** [`MissionTime`](../MissionTime) and [`MissionTimer`](../MissionTimer) describe the current Mission only and must not be persisted through `MissionNetwork`.

## Key members and timing

| Member | Purpose, side effect, and timing |
|---|---|
| `OnAfterMissionCreated()` | Creates the message registration container, calls `AddRemoveMessageHandlers`, and registers messages. The Mission calls it; a mod should not call it manually. |
| `OnBehaviorInitialize()` | Runs base initialization and calls `GameNetwork.AddNetworkHandler(this)`. An override must preserve `base`. |
| `OnRemoveBehavior()` | Removes the handler from `GameNetwork` and continues base cleanup when the behavior leaves the Mission. |
| `AddRemoveMessageHandlers(...)` | Protected extension point for adding a subclass's message handlers during Mission setup. Leave it empty when the behavior owns no messages. |
| `OnUdpNetworkHandlerTick()` | Protected UDP tick extension point for behavior-local network work; it must not advance the global Mission clock. |
| `OnUdpNetworkHandlerClose()` | Protected UDP close extension point; the base also unregisters messages, while the subclass releases its short-lived state. |
| `HandleNewClientConnect(...)`, `HandleNewClientAfterSynchronized(...)` | Connection and post-synchronization hooks. Server code must still check authority and the current Mission state. |
| `HandleEarlyPlayerDisconnect(...)`, `HandlePlayerDisconnect(...)` | Disconnect hooks. Do not continue using Agents, Teams, or Mission objects that the host has already removed. |
| `OnPlayerConnectedToServer(...)`, `OnPlayerDisconnectedFromServer(...)` | Derived-class connection notifications; they do not replace message registration and remain bound to the UDP/Mission lifecycle. |

## Real acquisition example

The game's multiplayer Mission creation paths add a concrete `MultiplayerTimerComponent`, rather than instantiating abstract `MissionNetwork`. From a running Mission behavior, the real lookup path is:

```csharp
using TaleWorlds.MountAndBlade;

public sealed class NetworkStateReader : MissionLogic
{
    private MultiplayerTimerComponent _timerComponent;

    public override void OnBehaviorInitialize()
    {
        base.OnBehaviorInitialize();
        _timerComponent = Mission.GetMissionBehavior<MultiplayerTimerComponent>();
    }
}
```

`MultiplayerTimerComponent` receives handler registration, message cleanup, and Mission removal behavior from `MissionNetwork`; callers should use the concrete component's business methods.

## Risks and crash boundaries

1. Omitting `base` from `OnBehaviorInitialize`, `OnAfterMissionCreated`, or `OnRemoveBehavior` can prevent registration or cleanup, causing missing messages, duplicate responses, or state that survives the Mission.
2. Using an Agent, Team, MissionObject, or timer after Mission teardown reaches destroyed objects; disconnect and removal hooks must release short-lived references.
3. Adding the same derived instance twice, or registering the same message twice, can execute business logic multiple times for one packet and duplicate state transitions, events, or Mission termination.
4. `MissionNetwork` provides Mission networking lifecycle, not Campaign persistence. Persistent data belongs in Campaign behavior `SyncData` or SaveSystem contracts, not in a network handler.
5. Receiving a network snapshot does not grant client write authority. A client may update local presentation, while Campaign changes, battle results, and save state must return to the correct server or Action boundary.

## Version note

This page follows the v1.4.5 `MissionNetwork.cs` implementation and its multiplayer Mission call sites. Explicit `IUdpNetworkHandler` forwarding and message unregistration are base-lifecycle facts; recheck registration timing and derived `AddRemoveMessageHandlers` behavior when porting to another version.

## Navigation

- ↑ Parent: [Mission-ext module index](../)
- ↔ Same section: [`MissionLogic`](../MissionLogic) · [`MissionNetworkComponent`](../MissionNetworkComponent) · [`MultiplayerTimerComponent`](../MultiplayerTimerComponent)
- Hosts: [`Mission`](../../mission/Mission) · [`MissionBehavior`](../../mission/MissionBehavior)
- Consumers: [`MissionLobbyComponent`](../MissionLobbyComponent) · [`MultiplayerWarmupComponent`](../MultiplayerWarmupComponent) · [`MultiplayerRoundController`](../MultiplayerRoundController)
- Time: [`MissionTime`](../MissionTime) · [`MissionTimeTracker`](../MissionTimeTracker) · [`MissionTimer`](../MissionTimer)
- 中文/English: [MissionNetwork](../../../../zh/api/mission-ext/MissionNetwork)
