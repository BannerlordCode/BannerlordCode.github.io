<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TroopRoster`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Creates a new `dummy troop roster` instance or object.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### CalculateCachedStatsOnLoad
`public static void CalculateCachedStatsOnLoad()`

**Purpose:** Handles logic related to `calculate cached stats on load`.

### ToFlattenedRoster
`public FlattenedTroopRoster ToFlattenedRoster()`

**Purpose:** Handles logic related to `to flattened roster`.

### Add
`public void Add(TroopRoster troopRoster)`

**Purpose:** Adds `add` to the current collection or state.

### Add
`public void Add(TroopRosterElement troopRosterElement)`

**Purpose:** Adds `add` to the current collection or state.

### RemoveIf
`public ICollection<TroopRosterElement> RemoveIf(Predicate<TroopRosterElement> match)`

**Purpose:** Removes `if` from the current collection or state.

### FindIndexOfTroop
`public int FindIndexOfTroop(CharacterObject character)`

**Purpose:** Handles logic related to `find index of troop`.

### RemoveNumberOfNonHeroTroopsRandomly
`public TroopRoster RemoveNumberOfNonHeroTroopsRandomly(int numberOfMen)`

**Purpose:** Removes `number of non hero troops randomly` from the current collection or state.

### WoundNumberOfNonHeroTroopsRandomly
`public void WoundNumberOfNonHeroTroopsRandomly(int numberOfMen)`

**Purpose:** Handles logic related to `wound number of non hero troops randomly`.

### SwapTroopsAtIndices
`public void SwapTroopsAtIndices(int firstIndex, int secondIndex)`

**Purpose:** Handles logic related to `swap troops at indices`.

### ShiftTroopToIndex
`public void ShiftTroopToIndex(int troopIndex, int targetIndex)`

**Purpose:** Handles logic related to `shift troop to index`.

### AddToCountsAtIndex
`public int AddToCountsAtIndex(int index, int countChange, int woundedCountChange = 0, int xpChange = 0, bool removeDepleted = true)`

**Purpose:** Adds `to counts at index` to the current collection or state.

### CheckValidity
`public void CheckValidity()`

**Purpose:** Handles logic related to `check validity`.

### AddToCounts
`public int AddToCounts(CharacterObject character, int count, bool insertAtFront = false, int woundedCount = 0, int xpChange = 0, bool removeDepleted = true, int index = -1)`

**Purpose:** Adds `to counts` to the current collection or state.

### GetTroopCount
`public int GetTroopCount(CharacterObject troop)`

**Purpose:** Gets the current value of `troop count`.

### RemoveZeroCounts
`public void RemoveZeroCounts()`

**Purpose:** Removes `zero counts` from the current collection or state.

### GetElementCopyAtIndex
`public TroopRosterElement GetElementCopyAtIndex(int index)`

**Purpose:** Gets the current value of `element copy at index`.

### SetElementNumber
`public void SetElementNumber(int index, int number)`

**Purpose:** Sets the value or state of `element number`.

### GetElementNumber
`public int GetElementNumber(int index)`

**Purpose:** Gets the current value of `element number`.

### GetElementNumber
`public int GetElementNumber(CharacterObject character)`

**Purpose:** Gets the current value of `element number`.

### SetElementWoundedNumber
`public void SetElementWoundedNumber(int index, int number)`

**Purpose:** Sets the value or state of `element wounded number`.

### GetElementWoundedNumber
`public int GetElementWoundedNumber(int index)`

**Purpose:** Gets the current value of `element wounded number`.

### SetElementXp
`public void SetElementXp(int index, int number)`

**Purpose:** Sets the value or state of `element xp`.

### GetElementXp
`public int GetElementXp(int index)`

**Purpose:** Gets the current value of `element xp`.

### GetElementXp
`public int GetElementXp(CharacterObject character)`

**Purpose:** Gets the current value of `element xp`.

### GetCharacterAtIndex
`public CharacterObject GetCharacterAtIndex(int index)`

**Purpose:** Gets the current value of `character at index`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### RostersAreIdentical
`public static bool RostersAreIdentical(TroopRoster a, TroopRoster b)`

**Purpose:** Handles logic related to `rosters are identical`.

### Contains
`public bool Contains(CharacterObject character)`

**Purpose:** Handles logic related to `contains`.

### ValidateTroopListCache
`public void ValidateTroopListCache()`

**Purpose:** Handles logic related to `validate troop list cache`.

### GetTroopRoster
`public MBList<TroopRosterElement> GetTroopRoster()`

**Purpose:** Gets the current value of `troop roster`.

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

### RemoveTroop
`public void RemoveTroop(CharacterObject troop, int numberToRemove = 1, UniqueTroopDescriptor troopSeed = default(UniqueTroopDescriptor), int xp = 0)`

**Purpose:** Removes `troop` from the current collection or state.

### WoundTroop
`public void WoundTroop(CharacterObject troop, int numberToWound = 1, UniqueTroopDescriptor troopSeed = default(UniqueTroopDescriptor))`

**Purpose:** Handles logic related to `wound troop`.

### Sum
`public int Sum(Func<TroopRosterElement, int> selector)`

**Purpose:** Handles logic related to `sum`.

### OnHeroHealthStatusChanged
`public void OnHeroHealthStatusChanged(Hero hero)`

**Purpose:** Called when the `hero health status changed` event is raised.

### UpdateVersion
`public void UpdateVersion()`

**Purpose:** Updates the state or data of `version`.

### CloneRosterData
`public TroopRoster CloneRosterData()`

**Purpose:** Handles logic related to `clone roster data`.

### AddXpToTroop
`public void AddXpToTroop(CharacterObject troop, int xpAmount)`

**Purpose:** Adds `xp to troop` to the current collection or state.

### AddXpToTroopAtIndex
`public void AddXpToTroopAtIndex(int index, int xpAmount)`

**Purpose:** Adds `xp to troop at index` to the current collection or state.

## Usage Example

```csharp
TroopRoster.CreateDummyTroopRoster();
```

## See Also

- [Complete Class Catalog](../catalog)