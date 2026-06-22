<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TroopRoster`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TroopRoster

**Namespace:** TaleWorlds.CampaignSystem.Roster
**Module:** TaleWorlds.CampaignSystem
**Type:** public class TroopRoster : ISerializableObject
**Base:** `ISerializableObject`
**File:** `TaleWorlds.CampaignSystem/Roster/TroopRoster.cs`

## Overview

`TroopRoster` holds a roster of troops (regulars + heroes) for a party, garrison, or prisoner list. It exposes counts (`Count`, `TotalManCount`, `TotalRegulars`, `TotalHeroes`), wounded tallies, and member access. Mods read rosters to inspect party composition and mutate them via `Add/RemoveMember`, `Wound/Heal`, and `ToFlattenedRoster` for save/transfer.

## Key Properties

| Name | Signature |
|------|-----------|
| `Count` | `public int Count { get { return this._count; }` |
| `TotalRegulars` | `public int TotalRegulars { get { return this._totalRegulars; }` |
| `TotalWoundedRegulars` | `public int TotalWoundedRegulars { get { return this._totalWoundedRegulars; }` |
| `TotalWoundedHeroes` | `public int TotalWoundedHeroes { get { return this._totalWoundedHeroes; }` |
| `TotalHeroes` | `public int TotalHeroes { get { return this._totalHeroes; }` |
| `TotalWounded` | `public int TotalWounded { get { return this._totalWoundedRegulars + this._totalWoundedHeroes; }` |
| `TotalManCount` | `public int TotalManCount { get { return this._totalRegulars + this._totalHeroes; }` |
| `TotalHealthyCount` | `public int TotalHealthyCount { get { return this._totalRegulars + this._totalHeroes - (this._totalWoundedRegulars + this._totalWoundedHeroes); }` |

## Key Methods

### CreateDummyTroopRoster
```csharp
public static TroopRoster CreateDummyTroopRoster()
```

### GetHashCode
```csharp
public override int GetHashCode()
```

### CalculateCachedStatsOnLoad
```csharp
public static void CalculateCachedStatsOnLoad()
```

### ToFlattenedRoster
```csharp
public FlattenedTroopRoster ToFlattenedRoster()
```

### Add
```csharp
public void Add(TroopRoster troopRoster)
```

### Add
```csharp
public void Add(TroopRosterElement troopRosterElement)
```

### RemoveIf
```csharp
public ICollection<TroopRosterElement> RemoveIf(Predicate<TroopRosterElement> match)
```

### FindIndexOfTroop
```csharp
public int FindIndexOfTroop(CharacterObject character)
```

### RemoveNumberOfNonHeroTroopsRandomly
```csharp
public TroopRoster RemoveNumberOfNonHeroTroopsRandomly(int numberOfMen)
```

### WoundNumberOfNonHeroTroopsRandomly
```csharp
public void WoundNumberOfNonHeroTroopsRandomly(int numberOfMen)
```

### SwapTroopsAtIndices
```csharp
public void SwapTroopsAtIndices(int firstIndex, int secondIndex)
```

### ShiftTroopToIndex
```csharp
public void ShiftTroopToIndex(int troopIndex, int targetIndex)
```

### AddToCountsAtIndex
```csharp
public int AddToCountsAtIndex(int index, int countChange, int woundedCountChange = 0, int xpChange = 0, bool removeDepleted = true)
```

### CheckValidity
```csharp
public void CheckValidity()
```

### AddToCounts
```csharp
public int AddToCounts(CharacterObject character, int count, bool insertAtFront = false, int woundedCount = 0, int xpChange = 0, bool removeDepleted = true, int index = -1)
```

### GetTroopCount
```csharp
public int GetTroopCount(CharacterObject troop)
```

### RemoveZeroCounts
```csharp
public void RemoveZeroCounts()
```

### GetElementCopyAtIndex
```csharp
public TroopRosterElement GetElementCopyAtIndex(int index)
```

### SetElementNumber
```csharp
public void SetElementNumber(int index, int number)
```

### GetElementNumber
```csharp
public int GetElementNumber(int index)
```

### GetElementNumber
```csharp
public int GetElementNumber(CharacterObject character)
```

### SetElementWoundedNumber
```csharp
public void SetElementWoundedNumber(int index, int number)
```

### GetElementWoundedNumber
```csharp
public int GetElementWoundedNumber(int index)
```

### SetElementXp
```csharp
public void SetElementXp(int index, int number)
```

### GetElementXp
```csharp
public int GetElementXp(int index)
```

### GetElementXp
```csharp
public int GetElementXp(CharacterObject character)
```

### GetCharacterAtIndex
```csharp
public CharacterObject GetCharacterAtIndex(int index)
```

### Equals
```csharp
public override bool Equals(object obj)
```

### RostersAreIdentical
```csharp
public static bool RostersAreIdentical(TroopRoster a, TroopRoster b)
```

### Contains
```csharp
public bool Contains(CharacterObject character)
```

## Usage Example

```csharp
// Inspect the player party's roster and wound all wounded heroes back to full
TroopRoster roster = MobileParty.MainParty.MemberRoster;
for (int i = 0; i < roster.Count; i++)
{
    CharacterObject troop = roster.GetCharacterAtIndex(i);
    int wounded = roster.GetElementWoundedNumber(i);
    if (wounded > 0)
        InformationManager.DisplayMessage(new InformationMessage(
            $"{troop.Name}: {roster.GetElementNumber(i)} total, {wounded} wounded"));
}
```

## See Also

- [Complete Class Catalog](../catalog)