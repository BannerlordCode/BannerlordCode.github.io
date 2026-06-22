<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TroopRoster`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TroopRoster

**Namespace:** TaleWorlds.CampaignSystem.Roster
**Module:** TaleWorlds.CampaignSystem
**Type:** public class TroopRoster : ISerializableObject
**Base:** `ISerializableObject`
**File:** `TaleWorlds.CampaignSystem/Roster/TroopRoster.cs`

## 概述

`TroopRoster` 存放队伍/驻军/俘虏的兵力花名册（常兵+英雄）。它暴露计数（`Count`、`TotalManCount`、`TotalRegulars`、`TotalHeroes`）、伤员统计、成员访问。mod 读取花名册检查队伍组成，经 `Add/RemoveMember`、`Wound/Heal`、`ToFlattenedRoster`（存档/转移）修改。

## 主要属性

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

## 主要方法

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

## 使用示例

```csharp
// 检查玩家队伍花名册，报告每种兵的伤员
TroopRoster roster = MobileParty.MainParty.MemberRoster;
for (int i = 0; i < roster.Count; i++)
{
    CharacterObject troop = roster.GetCharacterAtIndex(i);
    int wounded = roster.GetElementWoundedNumber(i);
    if (wounded > 0)
        InformationManager.DisplayMessage(new InformationMessage(
            $"{troop.Name}：共 {roster.GetElementNumber(i)}，伤 {wounded}"));
}
```

## 参见

- [完整类目录](../catalog)