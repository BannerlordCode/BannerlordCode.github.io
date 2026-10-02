---
title: "ClientSocketSession"
description: "ClientSocketSession — class in TaleWorlds.Diamond.Socket. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# ClientSocketSession

**Namespace:** `TaleWorlds.Diamond.Socket`  
**Module:** `TaleWorlds.Diamond`  
**Type:** `public abstract class ClientSocketSession : ClientsideSession, IClientSession`  
**Base:** `ClientsideSession, IClientSession`  
**Source:** `TaleWorlds.Diamond/Socket/ClientSocketSession.cs`

## Overview

`ClientSocketSession` is a named type in the TaleWorlds.Diamond.Socket namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends ClientsideSession, IClientSession, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ClientSocketSession`.
- **Instance members** (3): `OnConnected`, `OnCantConnect`, `OnDisconnected`.
- **Extension points** (3): `OnConnected`, `OnCantConnect`, `OnDisconnected`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnCantConnect` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnConnected` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnDisconnected` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ClientSocketSession` | ctor | Protected — for subclasses only. Takes 3 arguments: `IClient client`, `string address`, `int port`. Returns ``. |

- Constructed as `protected ClientSocketSession(IClient client, string address, int port)`.

## Usage Example

```csharp
// ClientSocketSession exposes no public members in TaleWorlds.Diamond.Socket.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.Diamond/Socket/ClientSocketSession.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ClientsideSession](../../network/ClientsideSession/) — `TaleWorlds.Network`.
- [SocketMessage](../SocketMessage/) — `TaleWorlds.Diamond.Socket`.

Section: [api/engine/](../) — the other types in this bucket.
