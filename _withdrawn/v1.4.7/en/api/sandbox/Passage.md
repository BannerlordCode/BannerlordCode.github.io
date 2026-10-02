---
title: "Passage"
description: "Passage — class in SandBox.Objects.Usables. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# Passage

**Namespace:** `SandBox.Objects.Usables`  
**Module:** `SandBox`  
**Type:** `public class Passage : UsableMachine`  
**Base:** `UsableMachine`  
**Source:** `SandBox/Objects/Usables/Passage.cs`

## Overview

`Passage` is a named type in the SandBox.Objects.Usables namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends UsableMachine, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (4): `ToLocation`, `GetDescriptionText`, `GetActionTextForStandingPoint`, `CreateAIBehaviorObject`.
- **Extension points** (3): `GetDescriptionText`, `GetActionTextForStandingPoint`, `CreateAIBehaviorObject`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CreateAIBehaviorObject` | method (override) | Overrides the base member. Takes no arguments. Returns `UsableMachineAIBase`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `GetActionTextForStandingPoint` | method (override) | Overrides the base member. Takes 1 argument: `UsableMissionObject usableGameObject`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetDescriptionText` | method (override) | Overrides the base member. Takes 1 argument: `WeakGameEntity gameEntity`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `ToLocation` | property | Instance entry point `Location` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
// Passage is read through its properties:
//   ToLocation : Location
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Objects/Usables/Passage.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Location](../../campaign/Location/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [PassageAI](../PassageAI/) — `SandBox.AI`.

Section: [api/sandbox/](../) — the other types in this bucket.
