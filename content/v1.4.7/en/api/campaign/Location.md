---
title: "Location"
description: "Location — class in TaleWorlds.CampaignSystem.Settlements.Locations. 35 public members (0 static)."
---

<!-- v147-skeleton -->
# Location

**Namespace:** `TaleWorlds.CampaignSystem.Settlements.Locations`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class Location`  
**Source:** `TaleWorlds.CampaignSystem/Settlements/Locations/Location.cs`

## Overview

`Location` is a named type in the TaleWorlds.CampaignSystem.Settlements.Locations namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `Location`, `Location`.
- **Instance members** (32): `LocationsOfPassages`, `Name`, `DoorName`, `IsIndoor`, `CanBeReserved`, `CharacterCount`, ….
- **Data and constants** (1): `ProsperityMax`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AddCharacter` | method | Instance entry point. Takes 1 argument: `LocationCharacter locationCharacter`. Adds to the collection or relation this type owns. |
| `AddLocationCharacter` | method | Instance entry point. Takes 3 arguments: `CreateLocationCharacterDelegate createDelegate`, `CultureObject culture`, `LocationCharacter.CharacterRelations relation`. Returns `LocationCharacter`. Adds to the collection or relation this type owns. |
| `AddLocationCharacters` | method | Instance entry point. Takes 4 arguments: `CreateLocationCharacterDelegate createDelegate`, `CultureObject culture`, `LocationCharacter.CharacterRelations relation`, `int count`. Adds to the collection or relation this type owns. |
| `AddPassageToLocation` | method | Instance entry point. Takes 1 argument: `Location passageToLocation`. Adds to the collection or relation this type owns. |
| `AddSpecialItem` | method | Instance entry point. Takes 1 argument: `ItemObject itemObject`. Adds to the collection or relation this type owns. |
| `CanAIEnter` | method | Instance entry point. Takes 1 argument: `LocationCharacter character`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanAIExit` | method | Instance entry point. Takes 1 argument: `LocationCharacter character`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanBeReserved` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanPlayerEnter` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanPlayerSee` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CharacterCount` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `ContainsCharacter` | method | Instance entry point. Takes 1 argument: `LocationCharacter locationCharacter`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `DoorName` | property | Instance entry point `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `GetCharacterList` | method | Instance entry point. Takes no arguments. Returns `IEnumerable<LocationCharacter>`. Read path: prefer it over reaching for the backing store. |
| `GetLocationCharacter` | method | Instance entry point. Takes 1 argument: `Hero hero`. Returns `LocationCharacter`. Read path: prefer it over reaching for the backing store. |
| `GetPassageToLocation` | method | Instance entry point. Takes 1 argument: `string locationId`. Returns `Location`. Read path: prefer it over reaching for the backing store. |
| `GetSceneCount` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetSceneName` | method | Instance entry point. Takes 1 argument: `int upgradeLevel`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `Initialize` | method | Instance entry point. Takes 2 arguments: `Location locationTemplate`, `LocationComplex ownerComplex`. |
| `IsIndoor` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `LocationsOfPassages` | property | Instance entry point `List<Location>` property. Read it for current state; a declared setter writes that state in place. |
| `Name` | property | Instance entry point `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `OnAIChangeLocation` | method | Instance entry point. Takes 1 argument: `Location previousLocation`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RemoveAllCharacters` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |

- Constructed as `public Location(string stringId, TextObject name, TextObject doorName, int prosperityMax, bool isIndoor, bool canBeReserved, string playerCanEnter, string playerCanSee, string aiCanExit, string aiCanEnter, string[] sceneNames, LocationComplex locationComplex)`.
- Constructed as `public Location(Location location, LocationComplex locationComplex)`.

11 further public members follow the same patterns.
## Usage Example

```csharp
var location = new Location(stringId, name, doorName, prosperityMax, isIndoor, canBeReserved, playerCanEnter, playerCanSee, aiCanExit, aiCanEnter, sceneNames, locationComplex);
location.Initialize(locationTemplate, ownerComplex);
// Read current state through location.LocationsOfPassages.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/Settlements/Locations/Location.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [LocationComplex](../LocationComplex/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [LocationCharacter](../LocationCharacter/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [CreateLocationCharacterDelegate](../CreateLocationCharacterDelegate/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [CanUseDoor](../CanUseDoor/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.

Section: [api/campaign/](../) — the other types in this bucket.
