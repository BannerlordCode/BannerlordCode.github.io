---
title: "ClientRestSession"
description: "ClientRestSession — class in TaleWorlds.Diamond.Rest. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# ClientRestSession

**Namespace:** `TaleWorlds.Diamond.Rest`  
**Module:** `TaleWorlds.Diamond`  
**Type:** `public class ClientRestSession : IClientSession`  
**Base:** `IClientSession`  
**Source:** `TaleWorlds.Diamond/Rest/ClientRestSession.cs`

## Overview

`ClientRestSession` is a named type in the TaleWorlds.Diamond.Rest namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends IClientSession, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ClientRestSession`.
- **Instance members** (4): `IsConnected`, `Client`, `Connect`, `Disconnect`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Client` | property | Instance entry point `IClient` property. Read it for current state; a declared setter writes that state in place. |
| `Connect` | method | Instance entry point. Takes no arguments. |
| `Disconnect` | method | Instance entry point. Takes no arguments. |
| `IsConnected` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `ClientRestSession` | ctor | Instance entry point. Takes 3 arguments: `IClient client`, `string address`, `IHttpDriver platformNetworkClient`. Returns ``. |

- Constructed as `public ClientRestSession(IClient client, string address, IHttpDriver platformNetworkClient)`.

## Usage Example

```csharp
var clientRestSession = new ClientRestSession(client, address, platformNetworkClient);
clientRestSession.Connect();
// Read current state through clientRestSession.IsConnected.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.Diamond/Rest/ClientRestSession.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Client](../Client/) — `TaleWorlds.Diamond`.
- [IHttpDriver](../../core-extra/IHttpDriver/) — `TaleWorlds.Library.Http`.
- [ClientRestSessionTask](../ClientRestSessionTask/) — `TaleWorlds.Diamond.Rest`.
- [ConnectMessage](../ConnectMessage/) — `TaleWorlds.Diamond.Rest`.
- [DisconnectMessage](../DisconnectMessage/) — `TaleWorlds.Diamond.Rest`.
- [AliveMessage](../AliveMessage/) — `TaleWorlds.Diamond.Rest`.
- [MessageType](../MessageType/) — `TaleWorlds.Diamond.Rest`.

Section: [api/engine/](../) — the other types in this bucket.
