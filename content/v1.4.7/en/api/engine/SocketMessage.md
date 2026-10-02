---
title: "SocketMessage"
description: "SocketMessage — class in TaleWorlds.Diamond.Socket. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# SocketMessage

**Namespace:** `TaleWorlds.Diamond.Socket`  
**Module:** `TaleWorlds.Diamond`  
**Type:** `public class SocketMessage : MessageContract`  
**Base:** `MessageContract`  
**Source:** `TaleWorlds.Diamond/Socket/SocketMessage.cs`

## Overview

`SocketMessage` is a named type in the TaleWorlds.Diamond.Socket namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends MessageContract, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `SocketMessage`, `SocketMessage`.
- **Instance members** (3): `Message`, `SerializeToNetworkMessage`, `DeserializeFromNetworkMessage`.
- **Extension points** (2): `SerializeToNetworkMessage`, `DeserializeFromNetworkMessage`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `DeserializeFromNetworkMessage` | method (override) | Overrides the base member. Takes 1 argument: `INetworkMessageReader networkMessage`. |
| `SerializeToNetworkMessage` | method (override) | Overrides the base member. Takes 1 argument: `INetworkMessageWriter networkMessage`. |
| `Message` | property | Instance entry point `Message` property. Read it for current state; a declared setter writes that state in place. |
| `SocketMessage` | ctor | Instance entry point. Takes no arguments. Returns ``. |
| `SocketMessage` | ctor | Instance entry point. Takes 1 argument: `Message message`. Returns ``. |

- Constructed as `public SocketMessage()`.
- Constructed as `public SocketMessage(Message message)`.

## Usage Example

```csharp
var socketMessage = new SocketMessage();
socketMessage.SerializeToNetworkMessage(networkMessage);
// Read current state through socketMessage.Message.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.Diamond/Socket/SocketMessage.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/engine/](../) — the other types in this bucket.
