---
title: "ClientsideSession"
description: "ClientsideSession — class in TaleWorlds.Network. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# ClientsideSession

**Namespace:** `TaleWorlds.Network`  
**Module:** `TaleWorlds.Network`  
**Type:** `public abstract class ClientsideSession : NetworkSession`  
**Base:** `NetworkSession`  
**Source:** `TaleWorlds.Network/ClientsideSession.cs`

## Overview

`ClientsideSession` is a named type in the TaleWorlds.Network namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends NetworkSession, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ClientsideSession`.
- **Instance members** (6): `SendMessagePeerAlive`, `OnDisconnected`, `Port`, `Connect`, `Process`, `Tick`.
- **Extension points** (2): `Connect`, `Tick`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Tick` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `Connect` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 3 arguments: `string ip`, `int port`, `bool useSessionThread`. |
| `Port` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `Process` | method | Instance entry point. Takes no arguments. |
| `OnDisconnected` | method | Protected — for subclasses only. Takes no arguments. Returns `internal override void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `SendMessagePeerAlive` | method | Protected — for subclasses only. Takes no arguments. |
| `ClientsideSession` | ctor | Protected — for subclasses only. Takes no arguments. Returns ``. |

- Constructed as `protected ClientsideSession()`.

## Usage Example

```csharp
var clientsideSession = new ClientsideSession();
clientsideSession.SendMessagePeerAlive();
// Read current state through clientsideSession.Port.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.Network/ClientsideSession.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Client](../../engine/Client/) — `TaleWorlds.Diamond`.

Section: [api/network/](../) — the other types in this bucket.
