---
title: "EventManager"
description: "EventManager — class in TaleWorlds.Library.EventSystem. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# EventManager

**Namespace:** `TaleWorlds.Library.EventSystem`  
**Module:** `TaleWorlds.Library`  
**Type:** `public class EventManager`  
**Source:** `TaleWorlds.Library/EventSystem/EventManager.cs`

## Overview

`EventManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `EventManager`.
- **Instance members** (2): `Clear`, `GetCloneOfEventDictionary`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Clear` | method | Instance entry point. Takes no arguments. |
| `GetCloneOfEventDictionary` | method | Instance entry point. Takes no arguments. Returns `IDictionary<Type, object>`. Read path: prefer it over reaching for the backing store. |
| `EventManager` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public EventManager()`.

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var eventManager = new EventManager();
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.Library/EventSystem/EventManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [DictionaryByType](../DictionaryByType/) — `TaleWorlds.Library.EventSystem`.
- [EventBase](../EventBase/) — `TaleWorlds.Library.EventSystem`.

Section: [api/core-extra/](../) — the other types in this bucket.
