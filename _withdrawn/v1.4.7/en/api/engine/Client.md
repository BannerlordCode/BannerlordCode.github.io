---
title: "Client"
description: "Client — class in TaleWorlds.Diamond. 16 public members (0 static)."
---

<!-- v147-skeleton -->
# Client

**Namespace:** `TaleWorlds.Diamond`  
**Module:** `TaleWorlds.Diamond`  
**Type:** `public abstract class Client<T> : DiamondClientApplicationObject, IClient where T : Client<T>`  
**Source:** `TaleWorlds.Diamond/Client.cs`

## Overview

`Client` is a named type in the TaleWorlds.Diamond namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `Client`.
- **Instance members** (15): `IsInCriticalState`, `AliveCheckTimeInMiliSeconds`, `Update`, `OnTick`, `SendMessage`, `AccessProvider`, ….
- **Extension points** (5): `AliveCheckTimeInMiliSeconds`, `OnTick`, `OnConnected`, `OnCantConnect`, `OnDisconnected`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AliveCheckTimeInMiliSeconds` | property (virtual) | Virtual — override it to change behaviour for every caller `long` property. Read it for current state; a declared setter writes that state in place. |
| `OnCantConnect` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnConnected` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnDisconnected` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `AccessProvider` | property | Instance entry point `ILoginAccessProvider` property. Read it for current state; a declared setter writes that state in place. |
| `CheckConnection` | method | Instance entry point. Takes no arguments. Returns `Task<bool>`. |
| `HandleMessage` | method | Instance entry point. Takes 1 argument: `Message message`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `IsInCriticalState` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnTick` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Update` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `BeginConnect` | method | Protected — for subclasses only. Takes no arguments. |
| `BeginDisconnect` | method | Protected — for subclasses only. Takes no arguments. |
| `Login` | method | Protected — for subclasses only. Takes 1 argument: `LoginMessage message`. Returns `Task<LoginResult>`. |
| `SendMessage` | method | Protected — for subclasses only. Takes 1 argument: `Message message`. |
| `SetAliveCheckTime` | method | Protected — for subclasses only. Takes 1 argument: `long time`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `Client` | ctor | Protected — for subclasses only. Takes 3 arguments: `DiamondClientApplication diamondClientApplication`, `IClientSessionProvider<T> sessionProvider`, `bool autoReconnect`. Returns ``. |

- Constructed as `protected Client(DiamondClientApplication diamondClientApplication, IClientSessionProvider<T> sessionProvider, bool autoReconnect)`.

## Usage Example

```csharp
// Client is read through its properties:
//   IsInCriticalState : bool
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 5 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.Diamond/Client.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [DiamondClientApplicationObject](../DiamondClientApplicationObject/) — `TaleWorlds.Diamond.ClientApplication`.
- [DiamondClientApplication](../DiamondClientApplication/) — `TaleWorlds.Diamond.ClientApplication`.
- [ConnectionState](../../network/ConnectionState/) — `TaleWorlds.Network`.
- [ClientMessageHandler](../ClientMessageHandler/) — `TaleWorlds.Diamond`.

Section: [api/engine/](../) — the other types in this bucket.
