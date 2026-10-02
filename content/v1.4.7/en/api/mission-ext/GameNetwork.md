---
title: "GameNetwork"
description: "GameNetwork — class in TaleWorlds.MountAndBlade. 73 public members (71 static)."
---

<!-- v147-skeleton -->
# GameNetwork

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public static class GameNetwork`  
**Source:** `TaleWorlds.MountAndBlade/GameNetwork.cs`

## Overview

`GameNetwork` is a named type in the TaleWorlds.MountAndBlade namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Static entry points** (70): `IsServer`, `IsServerOrRecorder`, `IsClient`, `IsReplay`, `IsClientOrReplay`, `IsDedicatedServer`, ….
- **Data and constants** (3): `MaxAutomatedBattleIndex`, `MaxPlayerCount`, `ClientPeerIndex`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AddNetworkHandler` | method (static) | Static entry point. Takes 1 argument: `IUdpNetworkHandler handler`. Adds to the collection or relation this type owns. |
| `AddNetworkPeerToDisconnectAsServer` | method (static) | Static entry point. Takes 1 argument: `NetworkCommunicator networkPeer`. Adds to the collection or relation this type owns. |
| `AddNewPlayerOnServer` | method (static) | Static entry point. Takes 3 arguments: `PlayerConnectionInfo playerConnectionInfo`, `bool serverPeer`, `bool isAdmin`. Returns `ICommunicator`. Adds to the collection or relation this type owns. |
| `AddNewPlayersOnServer` | method (static) | Static entry point. Takes 2 arguments: `PlayerConnectionInfo[] playerConnectionInfos`, `bool serverPeer`. Returns `GameNetwork.AddPlayersResult`. Adds to the collection or relation this type owns. |
| `AddRemoveMessageHandlers` | method (static) | Static entry point. Takes 1 argument: `GameNetwork.NetworkMessageHandlerRegisterer.RegisterMode mode`. Adds to the collection or relation this type owns. |
| `BeginBroadcastModuleEvent` | method (static) | Static entry point. Takes no arguments. |
| `BeginModuleEventAsClient` | method (static) | Static entry point. Takes no arguments. |
| `BeginModuleEventAsClientUnreliable` | method (static) | Static entry point. Takes no arguments. |
| `BeginModuleEventAsServer` | method (static) | Static entry point. Takes 1 argument: `NetworkCommunicator communicator`. |
| `BeginModuleEventAsServerUnreliable` | method (static) | Static entry point. Takes 1 argument: `NetworkCommunicator communicator`. |
| `ClearAllPeers` | method (static) | Static entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `ClearReplicationTableStatistics` | method (static) | Static entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `ClientFinishedLoading` | method (static) | Static entry point. Takes 1 argument: `NetworkCommunicator networkPeer`. |
| `DestroyComponent` | method (static) | Static entry point. Takes 1 argument: `UdpNetworkComponent udpNetworkComponent`. |
| `DisconnectedNetworkPeers` | property (static) | Static entry point `List<NetworkCommunicator>` property. Read it for current state; a declared setter writes that state in place. |
| `ElapsedTimeSinceLastUdpPacketArrived` | method (static) | Static entry point. Takes no arguments. Returns `double`. |
| `EndBroadcastModuleEvent` | method (static) | Static entry point. Takes 2 arguments: `GameNetwork.EventBroadcastFlags broadcastFlags`, `NetworkCommunicator targetPlayer`. |
| `EndBroadcastModuleEventUnreliable` | method (static) | Static entry point. Takes 2 arguments: `GameNetwork.EventBroadcastFlags broadcastFlags`, `NetworkCommunicator targetPlayer`. |
| `EndModuleEventAsClient` | method (static) | Static entry point. Takes no arguments. |
| `EndModuleEventAsClientUnreliable` | method (static) | Static entry point. Takes no arguments. |
| `EndModuleEventAsServer` | method (static) | Static entry point. Takes no arguments. |
| `EndModuleEventAsServerUnreliable` | method (static) | Static entry point. Takes no arguments. |
| `EndMultiplayer` | method (static) | Static entry point. Takes no arguments. |
| `EndReplay` | method (static) | Static entry point. Takes no arguments. |

49 further public members follow the same patterns.
## Usage Example

```csharp
// Static entry points on GameNetwork:
GameNetwork.ClearAllPeers();
GameNetwork.FindNetworkPeer(index);
GameNetwork.Initialize(handler);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.MountAndBlade/GameNetwork.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameType](../GameType/) — `TaleWorlds.MountAndBlade.Launcher.Library.UserDatas`.
- [DeletePlayer](../DeletePlayer/) — `TaleWorlds.MountAndBlade.Network.Messages`.
- [GameNetworkMessage](../GameNetworkMessage/) — `TaleWorlds.MountAndBlade.Network.Messages`.
- [CreatePlayer](../CreatePlayer/) — `TaleWorlds.MountAndBlade.Network.Messages`.
- [Client](../../engine/Client/) — `TaleWorlds.Diamond`.

Section: [api/mission-ext/](../) — the other types in this bucket.
