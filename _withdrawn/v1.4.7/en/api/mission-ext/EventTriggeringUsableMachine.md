---
title: "EventTriggeringUsableMachine"
description: "EventTriggeringUsableMachine — class in TaleWorlds.MountAndBlade.Objects.Usables. 9 public members (0 static)."
---

<!-- v147-skeleton -->
# EventTriggeringUsableMachine

**Namespace:** `TaleWorlds.MountAndBlade.Objects.Usables`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class EventTriggeringUsableMachine : UsableMachine`  
**Base:** `UsableMachine`  
**Source:** `TaleWorlds.MountAndBlade/Objects/Usables/EventTriggeringUsableMachine.cs`

## Overview

`EventTriggeringUsableMachine` is a named type in the TaleWorlds.MountAndBlade.Objects.Usables namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends UsableMachine, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (6): `ActionText`, `DescriptionText`, `OnInit`, `OnTick`, `GetActionTextForStandingPoint`, `GetDescriptionText`.
- **Extension points** (2): `GetActionTextForStandingPoint`, `GetDescriptionText`.
- **Data and constants** (3): `ActivatorAgentTags`, `ActionTextId`, `DescriptionTextId`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetActionTextForStandingPoint` | method (override) | Overrides the base member. Takes 1 argument: `UsableMissionObject usableGameObject`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetDescriptionText` | method (override) | Overrides the base member. Takes 1 argument: `WeakGameEntity gameEntity`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `ActionText` | property | Instance entry point `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `DescriptionText` | property | Instance entry point `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `OnInit` | method | Protected — for subclasses only. Takes no arguments. Returns `internal override void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTick` | method | Protected — for subclasses only. Takes 1 argument: `float dt`. Returns `internal override void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ActionTextId` | field | Instance entry point `string` field — direct storage with no validation or notification. |
| `ActivatorAgentTags` | field | Instance entry point `string` field — direct storage with no validation or notification. |
| `DescriptionTextId` | field | Instance entry point `string` field — direct storage with no validation or notification. |

## Usage Example

```csharp
// EventTriggeringUsableMachine is read through its properties:
//   ActionText : TextObject
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade/Objects/Usables/EventTriggeringUsableMachine.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GenericMissionEventScript](../GenericMissionEventScript/) — `TaleWorlds.MountAndBlade.Objects`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.
- [GenericMissionEvent](../GenericMissionEvent/) — `TaleWorlds.MountAndBlade.Objects`.

Section: [api/mission-ext/](../) — the other types in this bucket.
