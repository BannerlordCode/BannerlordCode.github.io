---
title: "CreatePlayer"
description: "CreatePlayer — class in TaleWorlds.MountAndBlade.Network.Messages. 11 public members (0 static)."
---

<!-- v147-skeleton -->
# CreatePlayer

**Namespace:** `TaleWorlds.MountAndBlade.Network.Messages`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public sealed class CreatePlayer : GameNetworkMessage`  
**Base:** `GameNetworkMessage`  
**Source:** `TaleWorlds.MountAndBlade/Network/Messages/CreatePlayer.cs`

## Overview

`CreatePlayer` is a named type in the TaleWorlds.MountAndBlade.Network.Messages namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends GameNetworkMessage, so the members it does not redeclare are inherited from there. 5 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `CreatePlayer`, `CreatePlayer`.
- **Instance members** (9): `PlayerIndex`, `PlayerName`, `DisconnectedPeerIndex`, `IsNonExistingDisconnectedPeer`, `IsReceiverPeer`, `OnWrite`, ….
- **Extension points** (4): `OnWrite`, `OnRead`, `OnGetLogFilter`, `OnGetLogFormat`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnGetLogFilter` | method (override) | Overrides the base member. Takes no arguments. Returns `MultiplayerMessageFilter`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnGetLogFormat` | method (override) | Overrides the base member. Takes no arguments. Returns `string`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnRead` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnWrite` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `DisconnectedPeerIndex` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `IsNonExistingDisconnectedPeer` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsReceiverPeer` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `PlayerIndex` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `PlayerName` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `CreatePlayer` | ctor | Instance entry point. Takes 5 arguments: `int playerIndex`, `string playerName`, `int disconnectedPeerIndex`, `bool isNonExistingDisconnectedPeer`, …. Returns ``. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreatePlayer` | ctor | Instance entry point. Takes no arguments. Returns ``. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |

- Constructed as `public CreatePlayer(int playerIndex, string playerName, int disconnectedPeerIndex, bool isNonExistingDisconnectedPeer = false, bool isReceiverPeer = false)`.
- Constructed as `public CreatePlayer()`.

## Usage Example

```csharp
var createPlayer = new CreatePlayer(playerIndex, playerName, disconnectedPeerIndex, isNonExistingDisconnectedPeer, isReceiverPeer);
createPlayer.OnWrite();
// Read current state through createPlayer.PlayerIndex.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade/Network/Messages/CreatePlayer.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameNetworkMessage](../GameNetworkMessage/) — `TaleWorlds.MountAndBlade.Network.Messages`.

Section: [api/mission-ext/](../) — the other types in this bucket.
