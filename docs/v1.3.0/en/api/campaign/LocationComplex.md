<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LocationComplex`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LocationComplex

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Locations
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LocationComplex`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Settlements/Locations/LocationComplex.cs`

## Overview

`LocationComplex` lives in `TaleWorlds.CampaignSystem.Settlements.Locations` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements.Locations` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static LocationComplex Current { get; }` |

## Key Methods

### CanAlways
`public static bool CanAlways(LocationCharacter locationCharacter, Location location)`

**Purpose:** Checks whether the current object can `always`.

### CanNever
`public static bool CanNever(LocationCharacter locationCharacter, Location location)`

**Purpose:** Checks whether the current object can `never`.

### CanIfHero
`public static bool CanIfHero(LocationCharacter locationCharacter, Location location)`

**Purpose:** Checks whether the current object can `if hero`.

### CanIfDay
`public static bool CanIfDay(LocationCharacter locationCharacter, Location location)`

**Purpose:** Checks whether the current object can `if day`.

### CanIfPriceIsPaid
`public static bool CanIfPriceIsPaid(LocationCharacter locationCharacter, Location location)`

**Purpose:** Checks whether the current object can `if price is paid`.

### CanIfGrownUpMaleOrHero
`public static bool CanIfGrownUpMaleOrHero(LocationCharacter locationCharacter, Location location)`

**Purpose:** Checks whether the current object can `if grown up male or hero`.

### CanIfMaleOrHero
`public static bool CanIfMaleOrHero(LocationCharacter locationCharacter, Location location)`

**Purpose:** Checks whether the current object can `if male or hero`.

### CanIfSettlementAccessModelLetsPlayer
`public static bool CanIfSettlementAccessModelLetsPlayer(LocationCharacter locationCharacter, Location location)`

**Purpose:** Checks whether the current object can `if settlement access model lets player`.

### Initialize
`public void Initialize(LocationComplexTemplate complexTemplate)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### AddPassage
`public void AddPassage(Location firstLocation, Location secondLocation)`

**Purpose:** Adds `passage` to the current collection or state.

### ChangeLocation
`public void ChangeLocation(LocationCharacter locationCharacter, Location fromLocation, Location toLocation)`

**Purpose:** Handles logic related to `change location`.

### GetListOfCharactersInLocation
`public IEnumerable<LocationCharacter> GetListOfCharactersInLocation(string locationName)`

**Purpose:** Gets the current value of `list of characters in location`.

### GetListOfCharacters
`public IList<LocationCharacter> GetListOfCharacters()`

**Purpose:** Gets the current value of `list of characters`.

### GetListOfLocations
`public IEnumerable<Location> GetListOfLocations()`

**Purpose:** Gets the current value of `list of locations`.

### AgentPassageUsageTick
`public void AgentPassageUsageTick()`

**Purpose:** Handles logic related to `agent passage usage tick`.

### GetLocationOfCharacter
`public Location GetLocationOfCharacter(LocationCharacter character)`

**Purpose:** Gets the current value of `location of character`.

### GetLocationOfCharacter
`public Location GetLocationOfCharacter(Hero hero)`

**Purpose:** Gets the current value of `location of character`.

### GetLocationCharacterOfHero
`public LocationCharacter GetLocationCharacterOfHero(Hero hero)`

**Purpose:** Gets the current value of `location character of hero`.

### GetFirstLocationCharacterOfCharacter
`public LocationCharacter GetFirstLocationCharacterOfCharacter(CharacterObject character)`

**Purpose:** Gets the current value of `first location character of character`.

### RemoveCharacterIfExists
`public void RemoveCharacterIfExists(Hero hero)`

**Purpose:** Removes `character if exists` from the current collection or state.

### RemoveCharacterIfExists
`public void RemoveCharacterIfExists(LocationCharacter locationCharacter)`

**Purpose:** Removes `character if exists` from the current collection or state.

### ClearTempCharacters
`public void ClearTempCharacters()`

**Purpose:** Handles logic related to `clear temp characters`.

### GetLocationWithId
`public Location GetLocationWithId(string id)`

**Purpose:** Gets the current value of `location with id`.

### GetScene
`public string GetScene(string stringId, int upgradeLevel)`

**Purpose:** Gets the current value of `scene`.

### FindCharacter
`public LocationCharacter FindCharacter(IAgent agent)`

**Purpose:** Handles logic related to `find character`.

### FindAll
`public IEnumerable<Location> FindAll(Func<string, bool> predicate)`

**Purpose:** Handles logic related to `find all`.

## Usage Example

```csharp
LocationComplex.CanAlways(locationCharacter, location);
```

## See Also

- [Complete Class Catalog](../catalog)