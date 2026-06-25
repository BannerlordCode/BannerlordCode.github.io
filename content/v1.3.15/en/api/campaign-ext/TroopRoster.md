---
title: "TroopRoster"
description: "Auto-generated class reference for TroopRoster."
---
# TroopRoster

**Namespace:** TaleWorlds.CampaignSystem.Roster
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TroopRoster : ISerializableObject`
**Base:** `ISerializableObject`
**File:** `TaleWorlds.CampaignSystem/Roster/TroopRoster.cs`

## Overview

`TroopRoster` lives in `TaleWorlds.CampaignSystem.Roster` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Roster` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Count` | `public int Count { get; }` |
| `VersionNo` | `public int VersionNo { get; }` |
| `TotalRegulars` | `public int TotalRegulars { get; }` |
| `TotalWoundedRegulars` | `public int TotalWoundedRegulars { get; }` |
| `TotalWoundedHeroes` | `public int TotalWoundedHeroes { get; }` |
| `TotalHeroes` | `public int TotalHeroes { get; }` |
| `TotalWounded` | `public int TotalWounded { get; }` |
| `TotalManCount` | `public int TotalManCount { get; }` |
| `TotalHealthyCount` | `public int TotalHealthyCount { get; }` |

## Key Methods

### CreateDummyTroopRoster
`public static TroopRoster CreateDummyTroopRoster()`

**Purpose:** Constructs a new `dummy troop roster` entity and returns it to the caller.

```csharp
// Static call; no instance required
TroopRoster.CreateDummyTroopRoster();
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the current object, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
var result = troopRoster.GetHashCode();
```

### CalculateCachedStatsOnLoad
`public static void CalculateCachedStatsOnLoad()`

**Purpose:** Calculates the current value or result of `cached stats on load`.

```csharp
// Static call; no instance required
TroopRoster.CalculateCachedStatsOnLoad();
```

### ToFlattenedRoster
`public FlattenedTroopRoster ToFlattenedRoster()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
var result = troopRoster.ToFlattenedRoster();
```

### Add
`public void Add(TroopRoster troopRoster)`

**Purpose:** Adds an item to the current collection or state.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
troopRoster.Add(troopRoster);
```

### Add
`public void Add(TroopRosterElement troopRosterElement)`

**Purpose:** Adds an item to the current collection or state.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
troopRoster.Add(troopRosterElement);
```

### RemoveIf
`public ICollection<TroopRosterElement> RemoveIf(Predicate<TroopRosterElement> match)`

**Purpose:** Removes `if` from the current collection or state.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
var result = troopRoster.RemoveIf(match);
```

### FindIndexOfTroop
`public int FindIndexOfTroop(CharacterObject character)`

**Purpose:** Looks up the matching `index of troop` in the current collection or scope.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
var result = troopRoster.FindIndexOfTroop(character);
```

### RemoveNumberOfNonHeroTroopsRandomly
`public TroopRoster RemoveNumberOfNonHeroTroopsRandomly(int numberOfMen)`

**Purpose:** Removes `number of non hero troops randomly` from the current collection or state.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
var result = troopRoster.RemoveNumberOfNonHeroTroopsRandomly(0);
```

### WoundNumberOfNonHeroTroopsRandomly
`public void WoundNumberOfNonHeroTroopsRandomly(int numberOfMen)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
troopRoster.WoundNumberOfNonHeroTroopsRandomly(0);
```

### SwapTroopsAtIndices
`public void SwapTroopsAtIndices(int firstIndex, int secondIndex)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
troopRoster.SwapTroopsAtIndices(0, 0);
```

### ShiftTroopToIndex
`public void ShiftTroopToIndex(int troopIndex, int targetIndex)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
troopRoster.ShiftTroopToIndex(0, 0);
```

### AddToCountsAtIndex
`public int AddToCountsAtIndex(int index, int countChange, int woundedCountChange = 0, int xpChange = 0, bool removeDepleted = true)`

**Purpose:** Adds `to counts at index` to the current collection or state.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
var result = troopRoster.AddToCountsAtIndex(0, 0, 0, 0, false);
```

### CheckValidity
`public void CheckValidity()`

**Purpose:** Verifies whether `validity` holds true for the current object.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
troopRoster.CheckValidity();
```

### AddToCounts
`public int AddToCounts(CharacterObject character, int count, bool insertAtFront = false, int woundedCount = 0, int xpChange = 0, bool removeDepleted = true, int index = -1)`

**Purpose:** Adds `to counts` to the current collection or state.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
var result = troopRoster.AddToCounts(character, 0, false, 0, 0, false, 0);
```

### GetTroopCount
`public int GetTroopCount(CharacterObject troop)`

**Purpose:** Reads and returns the `troop count` value held by the current object.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
var result = troopRoster.GetTroopCount(troop);
```

### RemoveZeroCounts
`public void RemoveZeroCounts()`

**Purpose:** Removes `zero counts` from the current collection or state.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
troopRoster.RemoveZeroCounts();
```

### GetElementCopyAtIndex
`public TroopRosterElement GetElementCopyAtIndex(int index)`

**Purpose:** Reads and returns the `element copy at index` value held by the current object.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
var result = troopRoster.GetElementCopyAtIndex(0);
```

### SetElementNumber
`public void SetElementNumber(int index, int number)`

**Purpose:** Assigns a new value to `element number` and updates the object's internal state.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
troopRoster.SetElementNumber(0, 0);
```

### GetElementNumber
`public int GetElementNumber(int index)`

**Purpose:** Reads and returns the `element number` value held by the current object.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
var result = troopRoster.GetElementNumber(0);
```

### GetElementNumber
`public int GetElementNumber(CharacterObject character)`

**Purpose:** Reads and returns the `element number` value held by the current object.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
var result = troopRoster.GetElementNumber(character);
```

### SetElementWoundedNumber
`public void SetElementWoundedNumber(int index, int number)`

**Purpose:** Assigns a new value to `element wounded number` and updates the object's internal state.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
troopRoster.SetElementWoundedNumber(0, 0);
```

### GetElementWoundedNumber
`public int GetElementWoundedNumber(int index)`

**Purpose:** Reads and returns the `element wounded number` value held by the current object.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
var result = troopRoster.GetElementWoundedNumber(0);
```

### SetElementXp
`public void SetElementXp(int index, int number)`

**Purpose:** Assigns a new value to `element xp` and updates the object's internal state.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
troopRoster.SetElementXp(0, 0);
```

### GetElementXp
`public int GetElementXp(int index)`

**Purpose:** Reads and returns the `element xp` value held by the current object.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
var result = troopRoster.GetElementXp(0);
```

### GetElementXp
`public int GetElementXp(CharacterObject character)`

**Purpose:** Reads and returns the `element xp` value held by the current object.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
var result = troopRoster.GetElementXp(character);
```

### GetCharacterAtIndex
`public CharacterObject GetCharacterAtIndex(int index)`

**Purpose:** Reads and returns the `character at index` value held by the current object.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
var result = troopRoster.GetCharacterAtIndex(0);
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the current object with the supplied instance for equality.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
var result = troopRoster.Equals(obj);
```

### RostersAreIdentical
`public static bool RostersAreIdentical(TroopRoster a, TroopRoster b)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
TroopRoster.RostersAreIdentical(a, b);
```

### Contains
`public bool Contains(CharacterObject character)`

**Purpose:** Indicates whether the current object contains the specified item.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
var result = troopRoster.Contains(character);
```

### ValidateTroopListCache
`public void ValidateTroopListCache()`

**Purpose:** Checks whether `troop list cache` satisfies the required constraints, usually returning a boolean.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
troopRoster.ValidateTroopListCache();
```

### GetTroopRoster
`public MBList<TroopRosterElement> GetTroopRoster()`

**Purpose:** Reads and returns the `troop roster` value held by the current object.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
var result = troopRoster.GetTroopRoster();
```

### Clear
`public void Clear()`

**Purpose:** Removes all content from the current object.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
troopRoster.Clear();
```

### RemoveTroop
`public void RemoveTroop(CharacterObject troop, int numberToRemove = 1, UniqueTroopDescriptor troopSeed = default(UniqueTroopDescriptor), int xp = 0)`

**Purpose:** Removes `troop` from the current collection or state.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
troopRoster.RemoveTroop(troop, 0, default(UniqueTroopDescriptor), 0);
```

### WoundTroop
`public void WoundTroop(CharacterObject troop, int numberToWound = 1, UniqueTroopDescriptor troopSeed = default(UniqueTroopDescriptor))`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
troopRoster.WoundTroop(troop, 0, default(UniqueTroopDescriptor));
```

### Sum
`public int Sum(Func<TroopRosterElement, int> selector)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
var result = troopRoster.Sum(func<TroopRosterElement, 0);
```

### OnHeroHealthStatusChanged
`public void OnHeroHealthStatusChanged(Hero hero)`

**Purpose:** Invoked when the `hero health status changed` event is raised.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
troopRoster.OnHeroHealthStatusChanged(hero);
```

### UpdateVersion
`public void UpdateVersion()`

**Purpose:** Recalculates and stores the latest representation of `version`.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
troopRoster.UpdateVersion();
```

### CloneRosterData
`public TroopRoster CloneRosterData()`

**Purpose:** Duplicates the current object's state and returns a new `roster data` instance.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
var result = troopRoster.CloneRosterData();
```

### AddXpToTroop
`public void AddXpToTroop(CharacterObject troop, int xpAmount)`

**Purpose:** Adds `xp to troop` to the current collection or state.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
troopRoster.AddXpToTroop(troop, 0);
```

### AddXpToTroopAtIndex
`public void AddXpToTroopAtIndex(int index, int xpAmount)`

**Purpose:** Adds `xp to troop at index` to the current collection or state.

```csharp
// Obtain an instance of TroopRoster from the subsystem API first
TroopRoster troopRoster = ...;
troopRoster.AddXpToTroopAtIndex(0, 0);
```

## Usage Example

```csharp
TroopRoster.CreateDummyTroopRoster();
```

## See Also

- [Area Index](../)