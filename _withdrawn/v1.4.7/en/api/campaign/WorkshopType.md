---
title: "WorkshopType"
description: "WorkshopType — class in TaleWorlds.CampaignSystem.Settlements.Workshops. 22 public members (3 static)."
---

<!-- v147-skeleton -->
# WorkshopType

**Namespace:** `TaleWorlds.CampaignSystem.Settlements.Workshops`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public sealed class WorkshopType : MBObjectBase`  
**Base:** `MBObjectBase`  
**Source:** `TaleWorlds.CampaignSystem/Settlements/Workshops/WorkshopType.cs`

## Overview

`WorkshopType` is a named type in the TaleWorlds.CampaignSystem.Settlements.Workshops namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends MBObjectBase, so the members it does not redeclare are inherited from there. 16 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Static entry points** (3): `Find`, `FindFirst`, `All`.
- **Instance members** (19): `EquipmentCost`, `Frequency`, `Name`, `GetName`, `JobName`, `IsHidden`, ….
- **Extension points** (4): `GetName`, `ToString`, `Initialize`, `Deserialize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `All` | property (static) | Static entry point `MBReadOnlyList<WorkshopType>` property. Read it for current state; a declared setter writes that state in place. |
| `Deserialize` | method (override) | Overrides the base member. Takes 2 arguments: `MBObjectManager objectManager`, `XmlNode node`. |
| `Find` | method (static) | Static entry point. Takes 1 argument: `string idString`. Returns `WorkshopType`. |
| `FindFirst` | method (static) | Static entry point. Takes 2 arguments: `Func<WorkshopType`, `bool> predicate`. Returns `WorkshopType`. Read path: prefer it over reaching for the backing store. |
| `GetName` | method (override) | Overrides the base member. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `Initialize` | method (override) | Overrides the base member. Takes no arguments. |
| `ToString` | method (override) | Overrides the base member. Takes no arguments. Returns `string`. |
| `Description` | property | Instance entry point `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `EquipmentCost` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `Frequency` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `IsHidden` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `JobName` | property | Instance entry point `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `Name` | property | Instance entry point `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `Production` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `Productions` | property | Instance entry point `MBReadOnlyList<WorkshopType.Production>` property. Read it for current state; a declared setter writes that state in place. |
| `PropMeshName1` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `PropMeshName2` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `PropMeshName3List` | property | Instance entry point `List<string>` property. Read it for current state; a declared setter writes that state in place. |
| `PropMeshName4` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `PropMeshName5` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `PropMeshName6` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `SignMeshName` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
// Static entry points on WorkshopType:
WorkshopType.Find(idString);
WorkshopType.FindFirst(theTarget, predicate);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/Settlements/Workshops/WorkshopType.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Attributes](../Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.
- [Workshop](../Workshop/) — `TaleWorlds.CampaignSystem.Settlements.Workshops`.

Section: [api/campaign/](../) — the other types in this bucket.
