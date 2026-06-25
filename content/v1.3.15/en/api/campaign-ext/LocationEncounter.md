---
title: "LocationEncounter"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LocationEncounter`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LocationEncounter

**Namespace:** TaleWorlds.CampaignSystem.Encounters
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LocationEncounter`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Encounters/LocationEncounter.cs`

## Overview

`LocationEncounter` lives in `TaleWorlds.CampaignSystem.Encounters` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Encounters` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Settlement` | `public Settlement Settlement { get; }` |
| `CharactersAccompanyingPlayer` | `public List<AccompanyingCharacter> CharactersAccompanyingPlayer { get; }` |

## Key Methods

### AddAccompanyingCharacter
`public void AddAccompanyingCharacter(LocationCharacter locationCharacter, bool isFollowing = false)`

**Purpose:** Adds `accompanying character` to the current collection or state.

### GetAccompanyingCharacter
`public AccompanyingCharacter GetAccompanyingCharacter(LocationCharacter locationCharacter)`

**Purpose:** Gets the current value of `accompanying character`.

### GetAccompanyingCharacter
`public AccompanyingCharacter GetAccompanyingCharacter(CharacterObject character)`

**Purpose:** Gets the current value of `accompanying character`.

### RemoveAccompanyingCharacter
`public void RemoveAccompanyingCharacter(LocationCharacter locationCharacter)`

**Purpose:** Removes `accompanying character` from the current collection or state.

### RemoveAccompanyingCharacter
`public void RemoveAccompanyingCharacter(Hero hero)`

**Purpose:** Removes `accompanying character` from the current collection or state.

### RemoveAllAccompanyingCharacters
`public void RemoveAllAccompanyingCharacters()`

**Purpose:** Removes `all accompanying characters` from the current collection or state.

### OnCharacterLocationChanged
`public void OnCharacterLocationChanged(LocationCharacter locationCharacter, Location fromLocation, Location toLocation)`

**Purpose:** Called when the `character location changed` event is raised.

### IsWorkshopLocation
`public virtual bool IsWorkshopLocation(Location location)`

**Purpose:** Handles logic related to `is workshop location`.

### IsTavern
`public virtual bool IsTavern(Location location)`

**Purpose:** Handles logic related to `is tavern`.

### CreateAndOpenMissionController
`public virtual IMission CreateAndOpenMissionController(Location nextLocation, Location previousLocation = null, CharacterObject talkToChar = null, string playerSpecialSpawnTag = null)`

**Purpose:** Creates a new `and open mission controller` instance or object.

## Usage Example

```csharp
var value = new LocationEncounter();
value.AddAccompanyingCharacter(locationCharacter, false);
```

## See Also

- [Complete Class Catalog](../catalog)