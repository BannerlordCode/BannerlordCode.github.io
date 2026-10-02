---
title: "TroopRoster"
description: "TroopRoster — class in TaleWorlds.CampaignSystem.Roster. 46 public members (3 static)."
---

<!-- v147-skeleton -->
# TroopRoster

**Namespace:** `TaleWorlds.CampaignSystem.Roster`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class TroopRoster : ISerializableObject`  
**Base:** `ISerializableObject`  
**Source:** `TaleWorlds.CampaignSystem/Roster/TroopRoster.cs`

## Overview

`TroopRoster` is a named type in the TaleWorlds.CampaignSystem.Roster namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends ISerializableObject, so the members it does not redeclare are inherited from there. 8 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `TroopRoster`.
- **Static entry points** (3): `CreateDummyTroopRoster`, `CalculateCachedStatsOnLoad`, `RostersAreIdentical`.
- **Instance members** (42): `Count`, `TotalRegulars`, `TotalWoundedRegulars`, `TotalWoundedHeroes`, `TotalHeroes`, `TotalWounded`, ….
- **Extension points** (2): `GetHashCode`, `Equals`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CalculateCachedStatsOnLoad` | method (static) | Static entry point. Takes no arguments. |
| `CreateDummyTroopRoster` | method (static) | Static entry point. Takes no arguments. Returns `TroopRoster`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `Equals` | method (override) | Overrides the base member. Takes 1 argument: `object obj`. Returns `bool`. |
| `GetHashCode` | method (override) | Overrides the base member. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `RostersAreIdentical` | method (static) | Static entry point. Takes 2 arguments: `TroopRoster a`, `TroopRoster b`. Returns `bool`. |
| `Add` | method | Instance entry point. Takes 1 argument: `TroopRoster troopRoster`. |
| `AddToCounts` | method | Instance entry point. Takes 7 arguments: `CharacterObject character`, `int count`, `bool insertAtFront`, `int woundedCount`, …. Returns `int`. Adds to the collection or relation this type owns. |
| `AddToCountsAtIndex` | method | Instance entry point. Takes 5 arguments: `int index`, `int countChange`, `int woundedCountChange`, `int xpChange`, …. Returns `int`. Adds to the collection or relation this type owns. |
| `AddXpToTroop` | method | Instance entry point. Takes 2 arguments: `CharacterObject troop`, `int xpAmount`. Adds to the collection or relation this type owns. |
| `AddXpToTroopAtIndex` | method | Instance entry point. Takes 2 arguments: `int index`, `int xpAmount`. Adds to the collection or relation this type owns. |
| `Clear` | method | Instance entry point. Takes no arguments. |
| `CloneRosterData` | method | Instance entry point. Takes no arguments. Returns `TroopRoster`. |
| `Contains` | method | Instance entry point. Takes 1 argument: `CharacterObject character`. Returns `bool`. |
| `Count` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `FindIndexOfTroop` | method | Instance entry point. Takes 1 argument: `CharacterObject character`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetCharacterAtIndex` | method | Instance entry point. Takes 1 argument: `int index`. Returns `CharacterObject`. Read path: prefer it over reaching for the backing store. |
| `GetElementCopyAtIndex` | method | Instance entry point. Takes 1 argument: `int index`. Returns `TroopRosterElement`. Read path: prefer it over reaching for the backing store. |
| `GetElementNumber` | method | Instance entry point. Takes 1 argument: `int index`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetElementWoundedNumber` | method | Instance entry point. Takes 1 argument: `int index`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetElementXp` | method | Instance entry point. Takes 1 argument: `int index`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetTroopCount` | method | Instance entry point. Takes 1 argument: `CharacterObject troop`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetTroopRoster` | method | Instance entry point. Takes no arguments. Returns `MBList<TroopRosterElement>`. Read path: prefer it over reaching for the backing store. |
| `OnHeroHealthStatusChanged` | method | Instance entry point. Takes 1 argument: `Hero hero`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RemoveIf` | method | Instance entry point. Takes 1 argument: `Predicate<TroopRosterElement> match`. Returns `ICollection<TroopRosterElement>`. Removes from or clears the collection this type owns. |

- Constructed as `public TroopRoster(PartyBase ownerParty)`.

22 further public members follow the same patterns.
## Usage Example

```csharp
// Static entry points on TroopRoster:
TroopRoster.CreateDummyTroopRoster();
TroopRoster.CalculateCachedStatsOnLoad();
TroopRoster.RostersAreIdentical(a, b);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/Roster/TroopRoster.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [FlattenedTroopRoster](../FlattenedTroopRoster/) — `TaleWorlds.CampaignSystem.Roster`.
- [PlayerEncounter](../PlayerEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.
- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.

Section: [api/campaign/](../) — the other types in this bucket.
