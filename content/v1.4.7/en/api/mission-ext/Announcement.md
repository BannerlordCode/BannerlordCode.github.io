---
title: "Announcement"
description: "Announcement — class in TaleWorlds.MountAndBlade.Diamond. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# Announcement

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`  
**Module:** `TaleWorlds.MountAndBlade.Diamond`  
**Type:** `public class Announcement`  
**Source:** `TaleWorlds.MountAndBlade.Diamond/Announcement.cs`

## Overview

`Announcement` is a named type in the TaleWorlds.MountAndBlade.Diamond namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `Announcement`, `Announcement`.
- **Instance members** (5): `Id`, `BattleId`, `Type`, `Text`, `IsEnabled`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `BattleId` | property | Instance entry point `Guid` property. Read it for current state; a declared setter writes that state in place. |
| `Id` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `IsEnabled` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Text` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `Type` | property | Instance entry point `AnnouncementType` property. Read it for current state; a declared setter writes that state in place. |
| `Announcement` | ctor | Instance entry point. Takes no arguments. Returns ``. |
| `Announcement` | ctor | Instance entry point. Takes 5 arguments: `int id`, `Guid battleId`, `AnnouncementType type`, `string text`, …. Returns ``. |

- Constructed as `public Announcement()`.
- Constructed as `public Announcement(int id, Guid battleId, AnnouncementType type, string text, bool isEnabled)`.

## Usage Example

```csharp
var announcement = new Announcement();
// Read current state through announcement.Id.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.MountAndBlade.Diamond/Announcement.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [AnnouncementType](../AnnouncementType/) — `TaleWorlds.MountAndBlade.Diamond`.

Section: [api/mission-ext/](../) — the other types in this bucket.
