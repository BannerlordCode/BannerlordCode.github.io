---
title: "IGameNetworkHandler"
description: "Auto-generated class reference for IGameNetworkHandler."
---
# IGameNetworkHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IGameNetworkHandler`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/IGameNetworkHandler.cs`

## Overview

`IGameNetworkHandler` is the callback contract between `GameNetwork` and whoever owns the multiplayer session above it. Ten void methods, no properties, no base type (`IGameNetworkHandler.cs:6`). It is not a mission behaviour and not reachable from mission code: it lives on the static `GameNetwork` class as the private static field `_handler` (`GameNetwork.cs:1409`), and the only way to install one is the static entry point `GameNetwork.Initialize(IGameNetworkHandler handler)` (`GameNetwork.cs:225`). The handler's lifetime is the network session, not a mission, and it survives across missions.

The contract is installed by calling `GameNetwork.Initialize`, which stores the handler, allocates the virtual-player and peer collections, calls `MBNetwork.Initialize(new NetworkCommunication())`, and then immediately calls `handler.OnInitialize()` before returning (`GameNetwork.cs:234`). Nothing in the managed 1.3.0 tree calls `Initialize(IGameNetworkHandler)` — the three `GameNetwork.Initialize*` call sites in the tree are `InitializeServerSide` (`GameNetwork.cs:393`), `InitializeClientSide` (`GameNetwork.cs:790`) and the replay path (`ReplayMissionLogic.cs:32`), all different overloads. The installation therefore comes from the launcher/native side, which is why a mod that needs these callbacks provides one through the module's network setup rather than by subclassing anything here.

## Mental Model

The ten methods are **not** a clean server/client split, which is the single most important thing to understand before you implement them.

`OnNewPlayerConnect(PlayerConnectionInfo, NetworkCommunicator)` is the **server-only** join hook. Both of its call sites go through `AddNewPlayer*OnServer` first — `HandleNewClientConnect` calls `AddNewPlayerOnServer(...)` and then the handler (`GameNetwork.cs:889`), and the batch form `HandleNewClientsConnect` does the same in a loop over the accepted players (`GameNetwork.cs:901`). It is also the *only* hook that carries a `PlayerConnectionInfo`, the per-player payload. On a client this method is never called at all.

`OnPlayerConnectedToServer(NetworkCommunicator)` fires on **both** sides, from two unrelated places. The server reaches it at the end of `AddNewPlayerOnServer`, after the new peer has been broadcast to everyone (`GameNetwork.cs:621`). The client reaches it in `HandleServerEventCreatePlayer` when a `CreatePlayer` message arrives (`GameNetwork.cs:948`). Written intuitively — "connected *to server* therefore it is the client hook" — this is exactly backwards, and it fires more often than its name suggests.

`OnPlayerDisconnectedFromServer` is likewise not server-only. It sits in `HandleRemovePlayerInternal` behind an early return for the client's own peer (`GameNetwork.cs:316`), so any peer other than your own reaches the handler (`GameNetwork.cs:321`): a server sees every removal, a client sees everyone else's. The truly local event is `OnDisconnectedFromServer`, raised from `HandleDisconnect` (`GameNetwork.cs:361`).

The session and replay hooks are thin pass-throughs: `OnStartMultiplayer` is fired from the private `StartMultiplayer` immediately after `VirtualPlayer.Reset()` (`GameNetwork.cs:264`), `OnEndMultiplayer` from the public `EndMultiplayer` before any component teardown (`GameNetwork.cs:270`), and the replay pair from `StartReplay` / `EndReplay` (`GameNetwork.cs:372`, `GameNetwork.cs:378`).

One asymmetry is genuinely useful: `OnHandleConsoleCommand` is the **only** call site that null-checks the handler first (`GameNetwork.cs:489`). Every other dispatch dereferences `GameNetwork._handler` unconditionally, so a null handler means an immediate `NullReferenceException` on the first network event.

Order is not guaranteed by the type. `OnInitialize()` runs inside `Initialize` before `Initialize` returns; everything else happens later from message processing, and the batch path can fire `OnNewPlayerConnect` several times in a row for one incoming request. If your handler must do work once per session, key it off `OnStartMultiplayer`, not off `OnInitialize`.

## How to use

**Getting it.** Implement the interface and pass the instance to `GameNetwork.Initialize` where the session is being set up. In 1.3.0 there is no `ReplaceHandler` and no property setter — `Initialize` is it, and it is not idempotent: a second call reallocates `VirtualPlayers`, `NetworkPeers` and `DisconnectedNetworkPeers` and invokes `OnInitialize` again, discarding whatever the first handler had accumulated.

```csharp
public class MyNetworkHandler : IGameNetworkHandler
{
    private readonly List<NetworkCommunicator> _peers = new List<NetworkCommunicator>();

    public void OnInitialize()
    {
        // Runs synchronously inside GameNetwork.Initialize, before it returns.
        _peers.Clear();
    }

    public void OnNewPlayerConnect(PlayerConnectionInfo info, NetworkCommunicator peer)
    {
        // SERVER ONLY. The only hook that carries PlayerConnectionInfo.
        _peers.Add(peer);
    }

    public void OnPlayerConnectedToServer(NetworkCommunicator peer)
    {
        // FIRES ON BOTH SIDES: server at GameNetwork.cs:621, client at GameNetwork.cs:948.
        // No PlayerConnectionInfo is available here on either side.
    }

    public void OnPlayerDisconnectedFromServer(NetworkCommunicator peer)
    {
        // Any peer that is not your own: a server sees all, a client sees everyone else.
        _peers.Remove(peer);
    }
    public void OnDisconnectedFromServer()                          { _peers.Clear(); }
    public void OnStartMultiplayer()                                { }
    public void OnEndMultiplayer()                                  { }
    public void OnStartReplay()                                     { }
    public void OnEndReplay()                                       { }
    public void OnHandleConsoleCommand(string command)              { }
}

GameNetwork.Initialize(new MyNetworkHandler());
```

Read peer state from the static lists `GameNetwork` allocates rather than from your own copy, so you see disconnects the batch path applied.

**The mistake that gives you a roster with no names.** Implementing the "join" logic in `OnPlayerConnectedToServer` because it reads like the client-side join hook. It fires on both sides and its only argument is a `NetworkCommunicator` — no user name, no team, no admin flag. The one method that carries `PlayerConnectionInfo` is `OnNewPlayerConnect`, which is server-only (`GameNetwork.cs:889`, `GameNetwork.cs:901`). Put your roster bookkeeping there; a client-side handler that expects player metadata gets none and quietly records anonymous peers.

## How to use

The placeholder snippet previously on this page was doubly broken: its type name carried a doubled `I` prefix that names nothing, and it assigned an ellipsis as if a registry would supply the instance. There is no such registry — `IGameNetworkHandler` is pushed into `GameNetwork`:

```csharp
GameNetwork.Initialize(new MyNetworkHandler());
```

## See Also

- [IMissionSystemHandler — the mission-side callback contract in the same area](../IMissionSystemHandler)
- [IRoundComponent — the multiplayer round-state contract read by the lobby](../IRoundComponent)
- [LobbyNetworkComponent — a mission behaviour on the multiplayer side](../LobbyNetworkComponent)
- [Mission — where the mission-side handler is actually driven](../../mission/Mission)
- [Area Index](../)