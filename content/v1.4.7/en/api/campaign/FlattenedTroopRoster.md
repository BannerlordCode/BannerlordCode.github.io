---
title: "FlattenedTroopRoster"
description: "FlattenedTroopRoster — class in TaleWorlds.CampaignSystem.Roster. 15 public members (1 static)."
---

<!-- v147-skeleton -->
# FlattenedTroopRoster

**Namespace:** `TaleWorlds.CampaignSystem.Roster`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class FlattenedTroopRoster : IEnumerable<FlattenedTroopRosterElement>, IEnumerable`  
**Base:** `IEnumerable`  
**Source:** `TaleWorlds.CampaignSystem/Roster/FlattenedTroopRoster.cs`

## Overview

`FlattenedTroopRoster` is a named type in the TaleWorlds.CampaignSystem.Roster namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends IEnumerable, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `FlattenedTroopRoster`.
- **Static entry points** (1): `GenerateUniqueNoFromParty`.
- **Instance members** (13): `Add`, `Add`, `Remove`, `Troops`, `Clear`, `RemoveIf`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GenerateUniqueNoFromParty` | method (static) | Static entry point. Takes 2 arguments: `MobileParty party`, `int troopIndex`. Returns `int`. |
| `Add` | method | Instance entry point. Takes 1 argument: `MBList<TroopRosterElement> roster`. |
| `Add` | method | Instance entry point. Takes 3 arguments: `CharacterObject troop`, `int number`, `int woundedNumber`. |
| `Clear` | method | Instance entry point. Takes no arguments. |
| `FindIndexOfCharacter` | method | Instance entry point. Takes 1 argument: `CharacterObject character`. Returns `UniqueTroopDescriptor`. Read path: prefer it over reaching for the backing store. |
| `GetEnumerator` | method | Instance entry point. Takes no arguments. Returns `IEnumerator<FlattenedTroopRosterElement>`. Read path: prefer it over reaching for the backing store. |
| `OnTroopGainXp` | method | Instance entry point. Takes 2 arguments: `UniqueTroopDescriptor troopSeed`, `int xpGained`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTroopKilled` | method | Instance entry point. Takes 1 argument: `UniqueTroopDescriptor troopSeed`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTroopRouted` | method | Instance entry point. Takes 1 argument: `UniqueTroopDescriptor troopSeed`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTroopWounded` | method | Instance entry point. Takes 1 argument: `UniqueTroopDescriptor troopSeed`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Remove` | method | Instance entry point. Takes 1 argument: `UniqueTroopDescriptor descriptor`. |
| `RemoveIf` | method | Instance entry point. Takes 1 argument: `Predicate<FlattenedTroopRosterElement> match`. Returns `ICollection<FlattenedTroopRosterElement>`. Removes from or clears the collection this type owns. |
| `ResetTroopXP` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `Troops` | property | Instance entry point `IEnumerable<CharacterObject>` property. Read it for current state; a declared setter writes that state in place. |
| `FlattenedTroopRoster` | ctor | Instance entry point. Takes 1 argument: `int count`. Returns ``. |

- Constructed as `public FlattenedTroopRoster(int count = 4)`.

## Usage Example

```csharp
// Static entry points on FlattenedTroopRoster:
FlattenedTroopRoster.GenerateUniqueNoFromParty(party, troopIndex);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/Roster/FlattenedTroopRoster.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [FlattenedTroopRosterElement](../FlattenedTroopRosterElement/) — `TaleWorlds.CampaignSystem.Roster`.
- [TroopRoster](../TroopRoster/) — `TaleWorlds.CampaignSystem.Roster`.
- [RosterTroopState](../RosterTroopState/) — `TaleWorlds.CampaignSystem.Roster`.
- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.

Section: [api/campaign/](../) — the other types in this bucket.
