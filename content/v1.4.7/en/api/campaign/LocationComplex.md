---
title: "LocationComplex"
description: "LocationComplex — class in TaleWorlds.CampaignSystem.Settlements.Locations. 27 public members (9 static)."
---

<!-- v147-skeleton -->
# LocationComplex

**Namespace:** `TaleWorlds.CampaignSystem.Settlements.Locations`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class LocationComplex`  
**Source:** `TaleWorlds.CampaignSystem/Settlements/Locations/LocationComplex.cs`

## Overview

`LocationComplex` is a named type in the TaleWorlds.CampaignSystem.Settlements.Locations namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `LocationComplex`, `LocationComplex`.
- **Static entry points** (9): `Current`, `CanAlways`, `CanNever`, `CanIfHero`, `CanIfDay`, `CanIfPriceIsPaid`, ….
- **Instance members** (16): `Initialize`, `AddPassage`, `ChangeLocation`, `GetListOfCharactersInLocation`, `GetListOfCharacters`, `GetListOfLocations`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CanAlways` | method (static) | Static entry point. Takes 2 arguments: `LocationCharacter locationCharacter`, `Location location`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanIfDay` | method (static) | Static entry point. Takes 2 arguments: `LocationCharacter locationCharacter`, `Location location`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanIfGrownUpMaleOrHero` | method (static) | Static entry point. Takes 2 arguments: `LocationCharacter locationCharacter`, `Location location`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanIfHero` | method (static) | Static entry point. Takes 2 arguments: `LocationCharacter locationCharacter`, `Location location`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanIfMaleOrHero` | method (static) | Static entry point. Takes 2 arguments: `LocationCharacter locationCharacter`, `Location location`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanIfPriceIsPaid` | method (static) | Static entry point. Takes 2 arguments: `LocationCharacter locationCharacter`, `Location location`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanIfSettlementAccessModelLetsPlayer` | method (static) | Static entry point. Takes 2 arguments: `LocationCharacter locationCharacter`, `Location location`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanNever` | method (static) | Static entry point. Takes 2 arguments: `LocationCharacter locationCharacter`, `Location location`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Current` | property (static) | Static entry point `LocationComplex` property. Read it for current state; a declared setter writes that state in place. |
| `AddPassage` | method | Instance entry point. Takes 2 arguments: `Location firstLocation`, `Location secondLocation`. Adds to the collection or relation this type owns. |
| `AgentPassageUsageTick` | method | Instance entry point. Takes no arguments. |
| `ChangeLocation` | method | Instance entry point. Takes 3 arguments: `LocationCharacter locationCharacter`, `Location fromLocation`, `Location toLocation`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `ClearTempCharacters` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `FindAll` | method | Instance entry point. Takes 2 arguments: `Func<string`, `bool> predicate`. Returns `IEnumerable<Location>`. Read path: prefer it over reaching for the backing store. |
| `FindCharacter` | method | Instance entry point. Takes 1 argument: `IAgent agent`. Returns `LocationCharacter`. Read path: prefer it over reaching for the backing store. |
| `GetFirstLocationCharacterOfCharacter` | method | Instance entry point. Takes 1 argument: `CharacterObject character`. Returns `LocationCharacter`. Read path: prefer it over reaching for the backing store. |
| `GetListOfCharacters` | method | Instance entry point. Takes no arguments. Returns `IList<LocationCharacter>`. Read path: prefer it over reaching for the backing store. |
| `GetListOfCharactersInLocation` | method | Instance entry point. Takes 1 argument: `string locationName`. Returns `IEnumerable<LocationCharacter>`. Read path: prefer it over reaching for the backing store. |
| `GetListOfLocations` | method | Instance entry point. Takes no arguments. Returns `IEnumerable<Location>`. Read path: prefer it over reaching for the backing store. |
| `GetLocationCharacterOfHero` | method | Instance entry point. Takes 1 argument: `Hero hero`. Returns `LocationCharacter`. Read path: prefer it over reaching for the backing store. |
| `GetLocationOfCharacter` | method | Instance entry point. Takes 1 argument: `LocationCharacter character`. Returns `Location`. Read path: prefer it over reaching for the backing store. |
| `GetLocationWithId` | method | Instance entry point. Takes 1 argument: `string id`. Returns `Location`. Read path: prefer it over reaching for the backing store. |
| `GetScene` | method | Instance entry point. Takes 2 arguments: `string stringId`, `int upgradeLevel`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `Initialize` | method | Instance entry point. Takes 1 argument: `LocationComplexTemplate complexTemplate`. |

- Constructed as `public LocationComplex()`.
- Constructed as `public LocationComplex(LocationComplexTemplate complexTemplate)`.

3 further public members follow the same patterns.
## Usage Example

```csharp
// Static entry points on LocationComplex:
LocationComplex.CanAlways(locationCharacter, location);
LocationComplex.CanNever(locationCharacter, location);
LocationComplex.CanIfHero(locationCharacter, location);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/Settlements/Locations/LocationComplex.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [PlayerEncounter](../PlayerEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.
- [LocationEncounter](../LocationEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.
- [LocationCharacter](../LocationCharacter/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [Location](../Location/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [AgeModel](../../campaign-ext/AgeModel/) — `TaleWorlds.CampaignSystem.ComponentInterfaces`.
- [SettlementAccessModel](../../campaign-ext/SettlementAccessModel/) — `TaleWorlds.CampaignSystem.ComponentInterfaces`.

Section: [api/campaign/](../) — the other types in this bucket.
