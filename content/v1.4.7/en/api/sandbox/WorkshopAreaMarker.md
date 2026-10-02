---
title: "WorkshopAreaMarker"
description: "WorkshopAreaMarker — class in SandBox.Objects.AreaMarkers. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# WorkshopAreaMarker

**Namespace:** `SandBox.Objects.AreaMarkers`  
**Module:** `SandBox`  
**Type:** `public class WorkshopAreaMarker : AreaMarker`  
**Base:** `AreaMarker`  
**Source:** `SandBox/Objects/AreaMarkers/WorkshopAreaMarker.cs`

## Overview

`WorkshopAreaMarker` is a named type in the SandBox.Objects.AreaMarkers namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends AreaMarker, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (5): `Tag`, `GetWorkshop`, `OnEditorTick`, `GetWorkshopType`, `GetName`.
- **Extension points** (3): `Tag`, `OnEditorTick`, `GetName`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetName` | method (override) | Overrides the base member. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `Tag` | property (override) | Overrides the base member `string` property. Read it for current state; a declared setter writes that state in place. |
| `OnEditorTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GetWorkshop` | method | Instance entry point. Takes no arguments. Returns `Workshop`. Read path: prefer it over reaching for the backing store. |
| `GetWorkshopType` | method | Instance entry point. Takes no arguments. Returns `WorkshopType`. Read path: prefer it over reaching for the backing store. |

## Usage Example

```csharp
// WorkshopAreaMarker is read through its properties:
//   Tag : string
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Objects/AreaMarkers/WorkshopAreaMarker.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [AreaMarker](../../mission-ext/AreaMarker/) — `TaleWorlds.MountAndBlade.Objects`.
- [Workshop](../../campaign/Workshop/) — `TaleWorlds.CampaignSystem.Settlements.Workshops`.
- [PlayerEncounter](../../campaign/PlayerEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.
- [LocationEncounter](../../campaign/LocationEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.
- [Town](../../campaign/Town/) — `TaleWorlds.CampaignSystem.Settlements`.
- [WorkshopType](../../campaign/WorkshopType/) — `TaleWorlds.CampaignSystem.Settlements.Workshops`.

Section: [api/sandbox/](../) — the other types in this bucket.
