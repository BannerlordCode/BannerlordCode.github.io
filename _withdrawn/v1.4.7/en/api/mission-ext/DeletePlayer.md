---
title: "DeletePlayer"
description: "DeletePlayer — class in TaleWorlds.MountAndBlade.Network.Messages. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# DeletePlayer

**Namespace:** `TaleWorlds.MountAndBlade.Network.Messages`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public sealed class DeletePlayer : GameNetworkMessage`  
**Base:** `GameNetworkMessage`  
**Source:** `TaleWorlds.MountAndBlade/Network/Messages/DeletePlayer.cs`

## Overview

`DeletePlayer` is a named type in the TaleWorlds.MountAndBlade.Network.Messages namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends GameNetworkMessage, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `DeletePlayer`, `DeletePlayer`.
- **Instance members** (6): `PlayerIndex`, `AddToDisconnectList`, `OnWrite`, `OnRead`, `OnGetLogFilter`, `OnGetLogFormat`.
- **Extension points** (4): `OnWrite`, `OnRead`, `OnGetLogFilter`, `OnGetLogFormat`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnGetLogFilter` | method (override) | Overrides the base member. Takes no arguments. Returns `MultiplayerMessageFilter`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnGetLogFormat` | method (override) | Overrides the base member. Takes no arguments. Returns `string`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnRead` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnWrite` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `AddToDisconnectList` | property | Instance entry point `bool` property. Adds to the collection or relation this type owns. |
| `PlayerIndex` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `DeletePlayer` | ctor | Instance entry point. Takes 2 arguments: `int playerIndex`, `bool addToDisconnectList`. Returns ``. Removes from or clears the collection this type owns. |
| `DeletePlayer` | ctor | Instance entry point. Takes no arguments. Returns ``. Removes from or clears the collection this type owns. |

- Constructed as `public DeletePlayer(int playerIndex, bool addToDisconnectList)`.
- Constructed as `public DeletePlayer()`.

## Usage Example

```csharp
var deletePlayer = new DeletePlayer(playerIndex, addToDisconnectList);
deletePlayer.OnWrite();
// Read current state through deletePlayer.PlayerIndex.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade/Network/Messages/DeletePlayer.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameNetworkMessage](../GameNetworkMessage/) — `TaleWorlds.MountAndBlade.Network.Messages`.

Section: [api/mission-ext/](../) — the other types in this bucket.
