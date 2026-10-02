---
title: "MissionHint"
description: "MissionHint — class in TaleWorlds.MountAndBlade.Missions.Hints. 3 public members (1 static)."
---

<!-- v147-skeleton -->
# MissionHint

**Namespace:** `TaleWorlds.MountAndBlade.Missions.Hints`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class MissionHint`  
**Source:** `TaleWorlds.MountAndBlade/Missions/Hints/MissionHint.cs`

## Overview

`MissionHint` is a named type in the TaleWorlds.MountAndBlade.Missions.Hints namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MissionHint`.
- **Static entry points** (1): `CreateWithKeyAndAction`.
- **Data and constants** (1): `Description`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CreateWithKeyAndAction` | method (static) | Static entry point. Takes 2 arguments: `TextObject actionText`, `string hotKeyId`. Returns `MissionHint`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `MissionHint` | ctor | Instance entry point. Takes 1 argument: `TextObject description`. Returns ``. |
| `Description` | field | Instance entry point `TextObject` field — direct storage with no validation or notification. |

- Constructed as `public MissionHint(TextObject description)`.

## Usage Example

```csharp
// Static entry points on MissionHint:
MissionHint.CreateWithKeyAndAction(actionText, hotKeyId);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.MountAndBlade/Missions/Hints/MissionHint.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
