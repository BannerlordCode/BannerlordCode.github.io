---
title: "LocationEncounter"
description: "Auto-generated class reference for LocationEncounter."
---
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

**Purpose:** Adds accompanying character to the current collection or state.

```csharp
// Obtain an instance of LocationEncounter from the subsystem API first
LocationEncounter locationEncounter = ...;
locationEncounter.AddAccompanyingCharacter(locationCharacter, false);
```

### GetAccompanyingCharacter
`public AccompanyingCharacter GetAccompanyingCharacter(LocationCharacter locationCharacter)`

**Purpose:** Reads and returns the accompanying character value held by the this instance.

```csharp
// Obtain an instance of LocationEncounter from the subsystem API first
LocationEncounter locationEncounter = ...;
var result = locationEncounter.GetAccompanyingCharacter(locationCharacter);
```

### GetAccompanyingCharacter
`public AccompanyingCharacter GetAccompanyingCharacter(CharacterObject character)`

**Purpose:** Reads and returns the accompanying character value held by the this instance.

```csharp
// Obtain an instance of LocationEncounter from the subsystem API first
LocationEncounter locationEncounter = ...;
var result = locationEncounter.GetAccompanyingCharacter(character);
```

### RemoveAccompanyingCharacter
`public void RemoveAccompanyingCharacter(LocationCharacter locationCharacter)`

**Purpose:** Removes accompanying character from the current collection or state.

```csharp
// Obtain an instance of LocationEncounter from the subsystem API first
LocationEncounter locationEncounter = ...;
locationEncounter.RemoveAccompanyingCharacter(locationCharacter);
```

### RemoveAccompanyingCharacter
`public void RemoveAccompanyingCharacter(Hero hero)`

**Purpose:** Removes accompanying character from the current collection or state.

```csharp
// Obtain an instance of LocationEncounter from the subsystem API first
LocationEncounter locationEncounter = ...;
locationEncounter.RemoveAccompanyingCharacter(hero);
```

### RemoveAllAccompanyingCharacters
`public void RemoveAllAccompanyingCharacters()`

**Purpose:** Removes all accompanying characters from the current collection or state.

```csharp
// Obtain an instance of LocationEncounter from the subsystem API first
LocationEncounter locationEncounter = ...;
locationEncounter.RemoveAllAccompanyingCharacters();
```

### OnCharacterLocationChanged
`public void OnCharacterLocationChanged(LocationCharacter locationCharacter, Location fromLocation, Location toLocation)`

**Purpose:** Invoked when the character location changed event is raised.

```csharp
// Obtain an instance of LocationEncounter from the subsystem API first
LocationEncounter locationEncounter = ...;
locationEncounter.OnCharacterLocationChanged(locationCharacter, fromLocation, toLocation);
```

### IsWorkshopLocation
`public virtual bool IsWorkshopLocation(Location location)`

**Purpose:** Determines whether the this instance is in the workshop location state or condition.

```csharp
// Obtain an instance of LocationEncounter from the subsystem API first
LocationEncounter locationEncounter = ...;
var result = locationEncounter.IsWorkshopLocation(location);
```

### IsTavern
`public virtual bool IsTavern(Location location)`

**Purpose:** Determines whether the this instance is in the tavern state or condition.

```csharp
// Obtain an instance of LocationEncounter from the subsystem API first
LocationEncounter locationEncounter = ...;
var result = locationEncounter.IsTavern(location);
```

### CreateAndOpenMissionController
`public virtual IMission CreateAndOpenMissionController(Location nextLocation, Location previousLocation = null, CharacterObject talkToChar = null, string playerSpecialSpawnTag = null)`

**Purpose:** Constructs a new and open mission controller entity and returns it to the caller.

```csharp
// Obtain an instance of LocationEncounter from the subsystem API first
LocationEncounter locationEncounter = ...;
var result = locationEncounter.CreateAndOpenMissionController(nextLocation, null, null, "example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LocationEncounter locationEncounter = ...;
locationEncounter.AddAccompanyingCharacter(locationCharacter, false);
```

## See Also

- [Area Index](../)