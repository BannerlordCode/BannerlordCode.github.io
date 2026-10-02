---
title: "GenericMissionEvent"
description: "GenericMissionEvent — class in TaleWorlds.MountAndBlade.Objects. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# GenericMissionEvent

**Namespace:** `TaleWorlds.MountAndBlade.Objects`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class GenericMissionEvent : EventBase`  
**Base:** `EventBase`  
**Source:** `TaleWorlds.MountAndBlade/Objects/GenericMissionEvent.cs`

## Overview

`GenericMissionEvent` is a named type in the TaleWorlds.MountAndBlade.Objects namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends EventBase, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GenericMissionEvent`.
- **Data and constants** (2): `EventId`, `Parameter`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GenericMissionEvent` | ctor | Instance entry point. Takes 2 arguments: `string eventId`, `string parameter`. Returns ``. |
| `EventId` | field | Instance entry point `string` field — direct storage with no validation or notification. |
| `Parameter` | field | Instance entry point `string` field — direct storage with no validation or notification. |

- Constructed as `public GenericMissionEvent(string eventId, string parameter)`.

## Usage Example

```csharp
var genericMissionEvent = new GenericMissionEvent(eventId, parameter);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.MountAndBlade/Objects/GenericMissionEvent.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [EventBase](../../core-extra/EventBase/) — `TaleWorlds.Library.EventSystem`.

Section: [api/mission-ext/](../) — the other types in this bucket.
