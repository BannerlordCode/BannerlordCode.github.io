---
title: "Workshop"
description: "Workshop — class in TaleWorlds.CampaignSystem.Settlements.Workshops. 17 public members (0 static)."
---

<!-- v147-skeleton -->
# Workshop

**Namespace:** `TaleWorlds.CampaignSystem.Settlements.Workshops`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class Workshop : SettlementArea`  
**Base:** `SettlementArea`  
**Source:** `TaleWorlds.CampaignSystem/Settlements/Workshops/Workshop.cs`

## Overview

`Workshop` is a named type in the TaleWorlds.CampaignSystem.Settlements.Workshops namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends SettlementArea, so the members it does not redeclare are inherited from there. 6 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `Workshop`.
- **Instance members** (16): `Settlement`, `Tag`, `Owner`, `Name`, `ProfitMade`, `Expense`, ….
- **Extension points** (6): `Settlement`, `Tag`, `Owner`, `Name`, `GetHashCode`, `ToString`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetHashCode` | method (override) | Overrides the base member. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `Name` | property (override) | Overrides the base member `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `Owner` | property (override) | Overrides the base member `Hero` property. Read it for current state; a declared setter writes that state in place. |
| `Settlement` | property (override) | Overrides the base member `Settlement` property. Read it for current state; a declared setter writes that state in place. |
| `Tag` | property (override) | Overrides the base member `string` property. Read it for current state; a declared setter writes that state in place. |
| `ToString` | method (override) | Overrides the base member. Takes no arguments. Returns `string`. |
| `ChangeGold` | method | Instance entry point. Takes 1 argument: `int goldChange`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `ChangeOwnerOfWorkshop` | method | Instance entry point. Takes 3 arguments: `Hero newOwner`, `WorkshopType type`, `int capital`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `ChangeWorkshopProduction` | method | Instance entry point. Takes 1 argument: `WorkshopType newWorkshopType`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `Expense` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `GetProductionProgress` | method | Instance entry point. Takes 1 argument: `int index`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `InitializeWorkshop` | method | Instance entry point. Takes 2 arguments: `Hero owner`, `WorkshopType type`. |
| `ProfitMade` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `SetCustomName` | method | Instance entry point. Takes 1 argument: `TextObject customName`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetProgress` | method | Instance entry point. Takes 2 arguments: `int i`, `float value`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `UpdateLastRunTime` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `Workshop` | ctor | Instance entry point. Takes 2 arguments: `Settlement settlement`, `string tag`. Returns ``. |

- Constructed as `public Workshop(Settlement settlement, string tag)`.

## Usage Example

```csharp
var workshop = new Workshop(settlement, tag);
workshop.GetHashCode();
// Read current state through workshop.Settlement.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 6 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/Settlements/Workshops/Workshop.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [WorkshopType](../WorkshopType/) — `TaleWorlds.CampaignSystem.Settlements.Workshops`.

Section: [api/campaign/](../) — the other types in this bucket.
