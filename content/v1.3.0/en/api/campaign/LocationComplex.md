---
title: "LocationComplex"
description: "Auto-generated class reference for LocationComplex."
---
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

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for always.

```csharp
// Static call; no instance required
LocationComplex.CanAlways(locationCharacter, location);
```

### CanNever
`public static bool CanNever(LocationCharacter locationCharacter, Location location)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for never.

```csharp
// Static call; no instance required
LocationComplex.CanNever(locationCharacter, location);
```

### CanIfHero
`public static bool CanIfHero(LocationCharacter locationCharacter, Location location)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for if hero.

```csharp
// Static call; no instance required
LocationComplex.CanIfHero(locationCharacter, location);
```

### CanIfDay
`public static bool CanIfDay(LocationCharacter locationCharacter, Location location)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for if day.

```csharp
// Static call; no instance required
LocationComplex.CanIfDay(locationCharacter, location);
```

### CanIfPriceIsPaid
`public static bool CanIfPriceIsPaid(LocationCharacter locationCharacter, Location location)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for if price is paid.

```csharp
// Static call; no instance required
LocationComplex.CanIfPriceIsPaid(locationCharacter, location);
```

### CanIfGrownUpMaleOrHero
`public static bool CanIfGrownUpMaleOrHero(LocationCharacter locationCharacter, Location location)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for if grown up male or hero.

```csharp
// Static call; no instance required
LocationComplex.CanIfGrownUpMaleOrHero(locationCharacter, location);
```

### CanIfMaleOrHero
`public static bool CanIfMaleOrHero(LocationCharacter locationCharacter, Location location)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for if male or hero.

```csharp
// Static call; no instance required
LocationComplex.CanIfMaleOrHero(locationCharacter, location);
```

### CanIfSettlementAccessModelLetsPlayer
`public static bool CanIfSettlementAccessModelLetsPlayer(LocationCharacter locationCharacter, Location location)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for if settlement access model lets player.

```csharp
// Static call; no instance required
LocationComplex.CanIfSettlementAccessModelLetsPlayer(locationCharacter, location);
```

### Initialize
`public void Initialize(LocationComplexTemplate complexTemplate)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of LocationComplex from the subsystem API first
LocationComplex locationComplex = ...;
locationComplex.Initialize(complexTemplate);
```

### AddPassage
`public void AddPassage(Location firstLocation, Location secondLocation)`

**Purpose:** **Purpose:** Adds passage to the current collection or state.

```csharp
// Obtain an instance of LocationComplex from the subsystem API first
LocationComplex locationComplex = ...;
locationComplex.AddPassage(firstLocation, secondLocation);
```

### ChangeLocation
`public void ChangeLocation(LocationCharacter locationCharacter, Location fromLocation, Location toLocation)`

**Purpose:** **Purpose:** Executes the ChangeLocation logic.

```csharp
// Obtain an instance of LocationComplex from the subsystem API first
LocationComplex locationComplex = ...;
locationComplex.ChangeLocation(locationCharacter, fromLocation, toLocation);
```

### GetListOfCharactersInLocation
`public IEnumerable<LocationCharacter> GetListOfCharactersInLocation(string locationName)`

**Purpose:** **Purpose:** Reads and returns the list of characters in location value held by the this instance.

```csharp
// Obtain an instance of LocationComplex from the subsystem API first
LocationComplex locationComplex = ...;
var result = locationComplex.GetListOfCharactersInLocation("example");
```

### GetListOfCharacters
`public IList<LocationCharacter> GetListOfCharacters()`

**Purpose:** **Purpose:** Reads and returns the list of characters value held by the this instance.

```csharp
// Obtain an instance of LocationComplex from the subsystem API first
LocationComplex locationComplex = ...;
var result = locationComplex.GetListOfCharacters();
```

### GetListOfLocations
`public IEnumerable<Location> GetListOfLocations()`

**Purpose:** **Purpose:** Reads and returns the list of locations value held by the this instance.

```csharp
// Obtain an instance of LocationComplex from the subsystem API first
LocationComplex locationComplex = ...;
var result = locationComplex.GetListOfLocations();
```

### AgentPassageUsageTick
`public void AgentPassageUsageTick()`

**Purpose:** **Purpose:** Executes the AgentPassageUsageTick logic.

```csharp
// Obtain an instance of LocationComplex from the subsystem API first
LocationComplex locationComplex = ...;
locationComplex.AgentPassageUsageTick();
```

### GetLocationOfCharacter
`public Location GetLocationOfCharacter(LocationCharacter character)`

**Purpose:** **Purpose:** Reads and returns the location of character value held by the this instance.

```csharp
// Obtain an instance of LocationComplex from the subsystem API first
LocationComplex locationComplex = ...;
var result = locationComplex.GetLocationOfCharacter(character);
```

### GetLocationOfCharacter
`public Location GetLocationOfCharacter(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the location of character value held by the this instance.

```csharp
// Obtain an instance of LocationComplex from the subsystem API first
LocationComplex locationComplex = ...;
var result = locationComplex.GetLocationOfCharacter(hero);
```

### GetLocationCharacterOfHero
`public LocationCharacter GetLocationCharacterOfHero(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the location character of hero value held by the this instance.

```csharp
// Obtain an instance of LocationComplex from the subsystem API first
LocationComplex locationComplex = ...;
var result = locationComplex.GetLocationCharacterOfHero(hero);
```

### GetFirstLocationCharacterOfCharacter
`public LocationCharacter GetFirstLocationCharacterOfCharacter(CharacterObject character)`

**Purpose:** **Purpose:** Reads and returns the first location character of character value held by the this instance.

```csharp
// Obtain an instance of LocationComplex from the subsystem API first
LocationComplex locationComplex = ...;
var result = locationComplex.GetFirstLocationCharacterOfCharacter(character);
```

### RemoveCharacterIfExists
`public void RemoveCharacterIfExists(Hero hero)`

**Purpose:** **Purpose:** Removes character if exists from the current collection or state.

```csharp
// Obtain an instance of LocationComplex from the subsystem API first
LocationComplex locationComplex = ...;
locationComplex.RemoveCharacterIfExists(hero);
```

### RemoveCharacterIfExists
`public void RemoveCharacterIfExists(LocationCharacter locationCharacter)`

**Purpose:** **Purpose:** Removes character if exists from the current collection or state.

```csharp
// Obtain an instance of LocationComplex from the subsystem API first
LocationComplex locationComplex = ...;
locationComplex.RemoveCharacterIfExists(locationCharacter);
```

### ClearTempCharacters
`public void ClearTempCharacters()`

**Purpose:** **Purpose:** Removes all temp characters from the this instance.

```csharp
// Obtain an instance of LocationComplex from the subsystem API first
LocationComplex locationComplex = ...;
locationComplex.ClearTempCharacters();
```

### GetLocationWithId
`public Location GetLocationWithId(string id)`

**Purpose:** **Purpose:** Reads and returns the location with id value held by the this instance.

```csharp
// Obtain an instance of LocationComplex from the subsystem API first
LocationComplex locationComplex = ...;
var result = locationComplex.GetLocationWithId("example");
```

### GetScene
`public string GetScene(string stringId, int upgradeLevel)`

**Purpose:** **Purpose:** Reads and returns the scene value held by the this instance.

```csharp
// Obtain an instance of LocationComplex from the subsystem API first
LocationComplex locationComplex = ...;
var result = locationComplex.GetScene("example", 0);
```

### FindCharacter
`public LocationCharacter FindCharacter(IAgent agent)`

**Purpose:** **Purpose:** Looks up the matching character in the current collection or scope.

```csharp
// Obtain an instance of LocationComplex from the subsystem API first
LocationComplex locationComplex = ...;
var result = locationComplex.FindCharacter(agent);
```

### FindAll
`public IEnumerable<Location> FindAll(Func<string, bool> predicate)`

**Purpose:** **Purpose:** Looks up the matching all in the current collection or scope.

```csharp
// Obtain an instance of LocationComplex from the subsystem API first
LocationComplex locationComplex = ...;
var result = locationComplex.FindAll(func<string, false);
```

## Usage Example

```csharp
LocationComplex.CanAlways(locationCharacter, location);
```

## See Also

- [Area Index](../)