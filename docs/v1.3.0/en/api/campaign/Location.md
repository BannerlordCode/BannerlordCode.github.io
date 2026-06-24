<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Location`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Location

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Locations
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Location`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Settlements/Locations/Location.cs`

## Overview

`Location` lives in `TaleWorlds.CampaignSystem.Settlements.Locations` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements.Locations` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StringId` | `public string StringId { get; }` |
| `SpecialItems` | `public List<ItemObject> SpecialItems { get; }` |
| `IsReserved` | `public bool IsReserved { get; }` |
| `LocationsOfPassages` | `public List<Location> LocationsOfPassages { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `DoorName` | `public TextObject DoorName { get; }` |
| `IsIndoor` | `public bool IsIndoor { get; }` |
| `CanBeReserved` | `public bool CanBeReserved { get; }` |
| `IsInitialized` | `public bool IsInitialized { get; }` |
| `CharacterCount` | `public int CharacterCount { get; }` |

## Key Methods

### Initialize
`public void Initialize(Location locationTemplate, LocationComplex ownerComplex)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### CanAIExit
`public bool CanAIExit(LocationCharacter character)`

**Purpose:** Checks whether the current object can `a i exit`.

### CanAIEnter
`public bool CanAIEnter(LocationCharacter character)`

**Purpose:** Checks whether the current object can `a i enter`.

### CanPlayerEnter
`public bool CanPlayerEnter()`

**Purpose:** Checks whether the current object can `player enter`.

### CanPlayerSee
`public bool CanPlayerSee()`

**Purpose:** Checks whether the current object can `player see`.

### ReserveLocation
`public void ReserveLocation(TextObject locationName, TextObject doorName)`

**Purpose:** Handles logic related to `reserve location`.

### RemoveReservation
`public void RemoveReservation()`

**Purpose:** Removes `reservation` from the current collection or state.

### SetOwnerComplex
`public void SetOwnerComplex(LocationComplex locationComplex)`

**Purpose:** Sets the value or state of `owner complex`.

### AddCharacter
`public void AddCharacter(LocationCharacter locationCharacter)`

**Purpose:** Adds `character` to the current collection or state.

### AddLocationCharacters
`public void AddLocationCharacters(CreateLocationCharacterDelegate createDelegate, CultureObject culture, LocationCharacter.CharacterRelations relation, int count)`

**Purpose:** Adds `location characters` to the current collection or state.

### AddLocationCharacter
`public LocationCharacter AddLocationCharacter(CreateLocationCharacterDelegate createDelegate, CultureObject culture, LocationCharacter.CharacterRelations relation)`

**Purpose:** Adds `location character` to the current collection or state.

### AddSpecialItem
`public void AddSpecialItem(ItemObject itemObject)`

**Purpose:** Adds `special item` to the current collection or state.

### GetSceneName
`public string GetSceneName(int upgradeLevel)`

**Purpose:** Gets the current value of `scene name`.

### SetSceneName
`public void SetSceneName(int upgradeLevel, string sceneName)`

**Purpose:** Sets the value or state of `scene name`.

### GetSceneCount
`public int GetSceneCount()`

**Purpose:** Gets the current value of `scene count`.

### RemoveAllHeroCharactersFromPrison
`public void RemoveAllHeroCharactersFromPrison()`

**Purpose:** Removes `all hero characters from prison` from the current collection or state.

### RemoveAllCharacters
`public void RemoveAllCharacters()`

**Purpose:** Removes `all characters` from the current collection or state.

### RemoveAllCharacters
`public void RemoveAllCharacters(Predicate<LocationCharacter> predicate)`

**Purpose:** Removes `all characters` from the current collection or state.

### RemoveLocationCharacter
`public void RemoveLocationCharacter(LocationCharacter locationCharacter)`

**Purpose:** Removes `location character` from the current collection or state.

### RemoveCharacter
`public void RemoveCharacter(Hero hero)`

**Purpose:** Removes `character` from the current collection or state.

### ContainsCharacter
`public bool ContainsCharacter(LocationCharacter locationCharacter)`

**Purpose:** Handles logic related to `contains character`.

### ContainsCharacter
`public bool ContainsCharacter(Hero hero)`

**Purpose:** Handles logic related to `contains character`.

### AddPassageToLocation
`public void AddPassageToLocation(Location passageToLocation)`

**Purpose:** Adds `passage to location` to the current collection or state.

### GetCharacterList
`public IEnumerable<LocationCharacter> GetCharacterList()`

**Purpose:** Gets the current value of `character list`.

### GetPassageToLocation
`public Location GetPassageToLocation(string locationId)`

**Purpose:** Gets the current value of `passage to location`.

### OnAIChangeLocation
`public void OnAIChangeLocation(Location previousLocation)`

**Purpose:** Called when the `a i change location` event is raised.

### GetLocationCharacter
`public LocationCharacter GetLocationCharacter(Hero hero)`

**Purpose:** Gets the current value of `location character`.

### GetLocationCharacter
`public LocationCharacter GetLocationCharacter(IAgentOriginBase agentOrigin)`

**Purpose:** Gets the current value of `location character`.

## Usage Example

```csharp
var value = new Location();
value.Initialize(locationTemplate, ownerComplex);
```

## See Also

- [Complete Class Catalog](../catalog)