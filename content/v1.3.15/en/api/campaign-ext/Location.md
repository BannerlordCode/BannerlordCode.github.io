---
title: "Location"
description: "Auto-generated class reference for Location."
---
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

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of Location from the subsystem API first
Location location = ...;
location.Initialize(locationTemplate, ownerComplex);
```

### CanAIExit
`public bool CanAIExit(LocationCharacter character)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for a i exit.

```csharp
// Obtain an instance of Location from the subsystem API first
Location location = ...;
var result = location.CanAIExit(character);
```

### CanAIEnter
`public bool CanAIEnter(LocationCharacter character)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for a i enter.

```csharp
// Obtain an instance of Location from the subsystem API first
Location location = ...;
var result = location.CanAIEnter(character);
```

### CanPlayerEnter
`public bool CanPlayerEnter()`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for player enter.

```csharp
// Obtain an instance of Location from the subsystem API first
Location location = ...;
var result = location.CanPlayerEnter();
```

### CanPlayerSee
`public bool CanPlayerSee()`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for player see.

```csharp
// Obtain an instance of Location from the subsystem API first
Location location = ...;
var result = location.CanPlayerSee();
```

### ReserveLocation
`public void ReserveLocation(TextObject locationName, TextObject doorName)`

**Purpose:** **Purpose:** Executes the ReserveLocation logic.

```csharp
// Obtain an instance of Location from the subsystem API first
Location location = ...;
location.ReserveLocation(locationName, doorName);
```

### RemoveReservation
`public void RemoveReservation()`

**Purpose:** **Purpose:** Removes reservation from the current collection or state.

```csharp
// Obtain an instance of Location from the subsystem API first
Location location = ...;
location.RemoveReservation();
```

### SetOwnerComplex
`public void SetOwnerComplex(LocationComplex locationComplex)`

**Purpose:** **Purpose:** Assigns a new value to owner complex and updates the object's internal state.

```csharp
// Obtain an instance of Location from the subsystem API first
Location location = ...;
location.SetOwnerComplex(locationComplex);
```

### AddCharacter
`public void AddCharacter(LocationCharacter locationCharacter)`

**Purpose:** **Purpose:** Adds character to the current collection or state.

```csharp
// Obtain an instance of Location from the subsystem API first
Location location = ...;
location.AddCharacter(locationCharacter);
```

### AddLocationCharacters
`public void AddLocationCharacters(CreateLocationCharacterDelegate createDelegate, CultureObject culture, LocationCharacter.CharacterRelations relation, int count)`

**Purpose:** **Purpose:** Adds location characters to the current collection or state.

```csharp
// Obtain an instance of Location from the subsystem API first
Location location = ...;
location.AddLocationCharacters(createDelegate, culture, relation, 0);
```

### AddLocationCharacter
`public LocationCharacter AddLocationCharacter(CreateLocationCharacterDelegate createDelegate, CultureObject culture, LocationCharacter.CharacterRelations relation)`

**Purpose:** **Purpose:** Adds location character to the current collection or state.

```csharp
// Obtain an instance of Location from the subsystem API first
Location location = ...;
var result = location.AddLocationCharacter(createDelegate, culture, relation);
```

### AddSpecialItem
`public void AddSpecialItem(ItemObject itemObject)`

**Purpose:** **Purpose:** Adds special item to the current collection or state.

```csharp
// Obtain an instance of Location from the subsystem API first
Location location = ...;
location.AddSpecialItem(itemObject);
```

### GetSceneName
`public string GetSceneName(int upgradeLevel)`

**Purpose:** **Purpose:** Reads and returns the scene name value held by the this instance.

```csharp
// Obtain an instance of Location from the subsystem API first
Location location = ...;
var result = location.GetSceneName(0);
```

### SetSceneName
`public void SetSceneName(int upgradeLevel, string sceneName)`

**Purpose:** **Purpose:** Assigns a new value to scene name and updates the object's internal state.

```csharp
// Obtain an instance of Location from the subsystem API first
Location location = ...;
location.SetSceneName(0, "example");
```

### GetSceneCount
`public int GetSceneCount()`

**Purpose:** **Purpose:** Reads and returns the scene count value held by the this instance.

```csharp
// Obtain an instance of Location from the subsystem API first
Location location = ...;
var result = location.GetSceneCount();
```

### RemoveAllHeroCharactersFromPrison
`public void RemoveAllHeroCharactersFromPrison()`

**Purpose:** **Purpose:** Removes all hero characters from prison from the current collection or state.

```csharp
// Obtain an instance of Location from the subsystem API first
Location location = ...;
location.RemoveAllHeroCharactersFromPrison();
```

### RemoveAllCharacters
`public void RemoveAllCharacters()`

**Purpose:** **Purpose:** Removes all characters from the current collection or state.

```csharp
// Obtain an instance of Location from the subsystem API first
Location location = ...;
location.RemoveAllCharacters();
```

### RemoveAllCharacters
`public void RemoveAllCharacters(Predicate<LocationCharacter> predicate)`

**Purpose:** **Purpose:** Removes all characters from the current collection or state.

```csharp
// Obtain an instance of Location from the subsystem API first
Location location = ...;
location.RemoveAllCharacters(predicate);
```

### RemoveLocationCharacter
`public void RemoveLocationCharacter(LocationCharacter locationCharacter)`

**Purpose:** **Purpose:** Removes location character from the current collection or state.

```csharp
// Obtain an instance of Location from the subsystem API first
Location location = ...;
location.RemoveLocationCharacter(locationCharacter);
```

### RemoveCharacter
`public void RemoveCharacter(Hero hero)`

**Purpose:** **Purpose:** Removes character from the current collection or state.

```csharp
// Obtain an instance of Location from the subsystem API first
Location location = ...;
location.RemoveCharacter(hero);
```

### ContainsCharacter
`public bool ContainsCharacter(LocationCharacter locationCharacter)`

**Purpose:** **Purpose:** Indicates whether the this instance contains character.

```csharp
// Obtain an instance of Location from the subsystem API first
Location location = ...;
var result = location.ContainsCharacter(locationCharacter);
```

### ContainsCharacter
`public bool ContainsCharacter(Hero hero)`

**Purpose:** **Purpose:** Indicates whether the this instance contains character.

```csharp
// Obtain an instance of Location from the subsystem API first
Location location = ...;
var result = location.ContainsCharacter(hero);
```

### AddPassageToLocation
`public void AddPassageToLocation(Location passageToLocation)`

**Purpose:** **Purpose:** Adds passage to location to the current collection or state.

```csharp
// Obtain an instance of Location from the subsystem API first
Location location = ...;
location.AddPassageToLocation(passageToLocation);
```

### GetCharacterList
`public IEnumerable<LocationCharacter> GetCharacterList()`

**Purpose:** **Purpose:** Reads and returns the character list value held by the this instance.

```csharp
// Obtain an instance of Location from the subsystem API first
Location location = ...;
var result = location.GetCharacterList();
```

### GetPassageToLocation
`public Location GetPassageToLocation(string locationId)`

**Purpose:** **Purpose:** Reads and returns the passage to location value held by the this instance.

```csharp
// Obtain an instance of Location from the subsystem API first
Location location = ...;
var result = location.GetPassageToLocation("example");
```

### OnAIChangeLocation
`public void OnAIChangeLocation(Location previousLocation)`

**Purpose:** **Purpose:** Invoked when the a i change location event is raised.

```csharp
// Obtain an instance of Location from the subsystem API first
Location location = ...;
location.OnAIChangeLocation(previousLocation);
```

### GetLocationCharacter
`public LocationCharacter GetLocationCharacter(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the location character value held by the this instance.

```csharp
// Obtain an instance of Location from the subsystem API first
Location location = ...;
var result = location.GetLocationCharacter(hero);
```

### GetLocationCharacter
`public LocationCharacter GetLocationCharacter(IAgentOriginBase agentOrigin)`

**Purpose:** **Purpose:** Reads and returns the location character value held by the this instance.

```csharp
// Obtain an instance of Location from the subsystem API first
Location location = ...;
var result = location.GetLocationCharacter(agentOrigin);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Location location = ...;
location.Initialize(locationTemplate, ownerComplex);
```

## See Also

- [Area Index](../)