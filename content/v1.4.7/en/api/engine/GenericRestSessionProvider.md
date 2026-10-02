---
title: "GenericRestSessionProvider"
description: "GenericRestSessionProvider — class in TaleWorlds.Diamond.ClientApplication. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# GenericRestSessionProvider

**Namespace:** `TaleWorlds.Diamond.ClientApplication`  
**Module:** `TaleWorlds.Diamond`  
**Type:** `public class GenericRestSessionProvider<T> : IClientSessionProvider<T> where T : Client<T>`  
**Base:** `IClientSessionProvider`  
**Source:** `TaleWorlds.Diamond/ClientApplication/GenericRestSessionProvider.cs`

## Overview

`GenericRestSessionProvider` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

It extends IClientSessionProvider, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GenericRestSessionProvider`.
- **Instance members** (1): `CreateSession`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CreateSession` | method | Instance entry point. Takes 1 argument: `T session`. Returns `IClientSession`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `GenericRestSessionProvider` | ctor | Instance entry point. Takes 2 arguments: `string address`, `IHttpDriver httpDriver`. Returns ``. |

- Constructed as `public GenericRestSessionProvider(string address, IHttpDriver httpDriver)`.

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var genericRestSessionProvider = new GenericRestSessionProvider(address, httpDriver);
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.Diamond/ClientApplication/GenericRestSessionProvider.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Client](../Client/) — `TaleWorlds.Diamond`.
- [IHttpDriver](../../core-extra/IHttpDriver/) — `TaleWorlds.Library.Http`.
- [ClientRestSession](../ClientRestSession/) — `TaleWorlds.Diamond.Rest`.

Section: [api/engine/](../) — the other types in this bucket.
