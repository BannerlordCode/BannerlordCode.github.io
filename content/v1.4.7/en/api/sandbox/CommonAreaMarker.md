---
title: "CommonAreaMarker"
description: "CommonAreaMarker — class in SandBox.Objects.AreaMarkers. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# CommonAreaMarker

**Namespace:** `SandBox.Objects.AreaMarkers`  
**Module:** `SandBox`  
**Type:** `public class CommonAreaMarker : AreaMarker`  
**Base:** `AreaMarker`  
**Source:** `SandBox/Objects/AreaMarkers/CommonAreaMarker.cs`

## Overview

`CommonAreaMarker` is a named type in the SandBox.Objects.AreaMarkers namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends AreaMarker, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (7): `HiddenSpawnFrames`, `Tag`, `OnInit`, `GetUsableMachinesInRange`, `GetAlley`, `GetName`, ….
- **Extension points** (4): `Tag`, `OnInit`, `GetUsableMachinesInRange`, `GetName`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetName` | method (override) | Overrides the base member. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetUsableMachinesInRange` | method (override) | Overrides the base member. Takes 1 argument: `string excludeTag`. Returns `List<UsableMachine>`. Read path: prefer it over reaching for the backing store. |
| `Tag` | property (override) | Overrides the base member `string` property. Read it for current state; a declared setter writes that state in place. |
| `OnInit` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GetAlley` | method | Instance entry point. Takes no arguments. Returns `Alley`. Read path: prefer it over reaching for the backing store. |
| `HiddenSpawnFrames` | property | Instance entry point `List<MatrixFrame>` property. Read it for current state; a declared setter writes that state in place. |
| `Type` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
// CommonAreaMarker is read through its properties:
//   HiddenSpawnFrames : List<MatrixFrame>
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Objects/AreaMarkers/CommonAreaMarker.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [AreaMarker](../../mission-ext/AreaMarker/) — `TaleWorlds.MountAndBlade.Objects`.
- [Alley](../../campaign/Alley/) — `TaleWorlds.CampaignSystem.Settlements`.
- [Passage](../Passage/) — `SandBox.Objects.Usables`.
- [PlayerEncounter](../../campaign/PlayerEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.
- [LocationEncounter](../../campaign/LocationEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.

Section: [api/sandbox/](../) — the other types in this bucket.
