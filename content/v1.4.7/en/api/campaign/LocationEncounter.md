---
title: "LocationEncounter"
description: "LocationEncounter — class in TaleWorlds.CampaignSystem.Encounters. 12 public members (0 static)."
---

<!-- v147-skeleton -->
# LocationEncounter

**Namespace:** `TaleWorlds.CampaignSystem.Encounters`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class LocationEncounter`  
**Source:** `TaleWorlds.CampaignSystem/Encounters/LocationEncounter.cs`

## Overview

`LocationEncounter` is a named type in the TaleWorlds.CampaignSystem.Encounters namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `LocationEncounter`.
- **Instance members** (10): `Settlement`, `CharactersAccompanyingPlayer`, `AddAccompanyingCharacter`, `GetAccompanyingCharacter`, `RemoveAccompanyingCharacter`, `RemoveAllAccompanyingCharacters`, ….
- **Extension points** (3): `IsWorkshopLocation`, `IsTavern`, `CreateAndOpenMissionController`.
- **Data and constants** (1): `IsInsideOfASettlement`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CreateAndOpenMissionController` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 4 arguments: `Location nextLocation`, `Location previousLocation`, `CharacterObject talkToChar`, `string playerSpecialSpawnTag`. Returns `IMission`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `IsTavern` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `Location location`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsWorkshopLocation` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `Location location`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `AddAccompanyingCharacter` | method | Instance entry point. Takes 2 arguments: `LocationCharacter locationCharacter`, `bool isFollowing`. Adds to the collection or relation this type owns. |
| `CharactersAccompanyingPlayer` | property | Instance entry point `List<AccompanyingCharacter>` property. Read it for current state; a declared setter writes that state in place. |
| `GetAccompanyingCharacter` | method | Instance entry point. Takes 1 argument: `LocationCharacter locationCharacter`. Returns `AccompanyingCharacter`. Read path: prefer it over reaching for the backing store. |
| `OnCharacterLocationChanged` | method | Instance entry point. Takes 3 arguments: `LocationCharacter locationCharacter`, `Location fromLocation`, `Location toLocation`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RemoveAccompanyingCharacter` | method | Instance entry point. Takes 1 argument: `LocationCharacter locationCharacter`. Removes from or clears the collection this type owns. |
| `RemoveAllAccompanyingCharacters` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `Settlement` | property | Instance entry point `Settlement` property. Read it for current state; a declared setter writes that state in place. |
| `IsInsideOfASettlement` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `LocationEncounter` | ctor | Protected — for subclasses only. Takes 1 argument: `Settlement settlement`. Returns ``. |

- Constructed as `protected LocationEncounter(Settlement settlement)`.

## Usage Example

```csharp
// LocationEncounter is read through its properties:
//   Settlement : Settlement
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/Encounters/LocationEncounter.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [AccompanyingCharacter](../AccompanyingCharacter/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [LocationCharacter](../LocationCharacter/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [Location](../Location/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.

Section: [api/campaign/](../) — the other types in this bucket.
