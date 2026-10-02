---
title: "ItemRoster"
description: "ItemRoster — class in TaleWorlds.CampaignSystem.Roster. 24 public members (2 static)."
---

<!-- v147-skeleton -->
# ItemRoster

**Namespace:** `TaleWorlds.CampaignSystem.Roster`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class ItemRoster : IReadOnlyList<ItemRosterElement>, IEnumerable<ItemRosterElement>, IEnumerable, IReadOnlyCollection<ItemRosterElement>, ISerializableObject`  
**Base:** `IReadOnlyList`  
**Source:** `TaleWorlds.CampaignSystem/Roster/ItemRoster.cs`

## Overview

`ItemRoster` is a named type in the TaleWorlds.CampaignSystem.Roster namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends IReadOnlyList, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `ItemRoster`, `ItemRoster`.
- **Static entry points** (2): `RostersAreIdentical`, `CalculateCachedStatsOnLoad`.
- **Instance members** (20): `Count`, `FindIndexOfItem`, `FindIndex`, `FindIndexFirstAfterXthElement`, `FindIndexOfElement`, `AddToCounts`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CalculateCachedStatsOnLoad` | method (static) | Static entry point. Takes no arguments. |
| `RostersAreIdentical` | method (static) | Static entry point. Takes 2 arguments: `ItemRoster a`, `ItemRoster b`. Returns `bool`. |
| `Add` | method | Instance entry point. Takes 1 argument: `IEnumerable<ItemRosterElement> rosterElementList`. |
| `AddToCounts` | method | Instance entry point. Takes 2 arguments: `ItemObject item`, `int number`. Returns `int`. Adds to the collection or relation this type owns. |
| `Clear` | method | Instance entry point. Takes no arguments. |
| `Count` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `FindIndex` | method | Instance entry point. Takes 1 argument: `Predicate<ItemObject> predicate`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `FindIndexFirstAfterXthElement` | method | Instance entry point. Takes 2 arguments: `Predicate<ItemObject> predicate`, `int x`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `FindIndexOfElement` | method | Instance entry point. Takes 1 argument: `EquipmentElement rosterElement`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `FindIndexOfItem` | method | Instance entry point. Takes 1 argument: `ItemObject item`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetElementCopyAtIndex` | method | Instance entry point. Takes 1 argument: `int index`. Returns `ItemRosterElement`. Read path: prefer it over reaching for the backing store. |
| `GetElementNumber` | method | Instance entry point. Takes 1 argument: `int index`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetElementUnitCost` | method | Instance entry point. Takes 1 argument: `int index`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetEnumerator` | method | Instance entry point. Takes no arguments. Returns `IEnumerator<ItemRosterElement>`. Read path: prefer it over reaching for the backing store. |
| `GetItemAtIndex` | method | Instance entry point. Takes 1 argument: `int index`. Returns `ItemObject`. Read path: prefer it over reaching for the backing store. |
| `GetItemNumber` | method | Instance entry point. Takes 1 argument: `ItemObject item`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `Remove` | method | Instance entry point. Takes 1 argument: `ItemRosterElement itemRosterElement`. |
| `RemoveIf` | method | Instance entry point. Takes 2 arguments: `Func<ItemRosterElement`, `int> match`. Returns `IEnumerable<ItemRosterElement>`. Removes from or clears the collection this type owns. |
| `RosterUpdatedEvent` | property | Instance entry point `ItemRoster.RosterUpdatedEventDelegate` property. Read it for current state; a declared setter writes that state in place. |
| `RosterUpdatedEventDelegate` | method | Instance entry point. Takes 2 arguments: `ItemRosterElement item`, `int count`. Returns `delegate void`. |
| `SelectRandomIndex` | method | Instance entry point. Takes 2 arguments: `Func<ItemRosterElement`, `float> weightFunction`. Returns `int`. |
| `UpdateVersion` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `ItemRoster` | ctor | Instance entry point. Takes no arguments. Returns ``. |
| `ItemRoster` | ctor | Instance entry point. Takes 1 argument: `ItemRoster other`. Returns ``. |

- Constructed as `public ItemRoster()`.
- Constructed as `public ItemRoster(ItemRoster other)`.

## Usage Example

```csharp
// Static entry points on ItemRoster:
ItemRoster.RostersAreIdentical(a, b);
ItemRoster.CalculateCachedStatsOnLoad();
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/Roster/ItemRoster.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/campaign/](../) — the other types in this bucket.
