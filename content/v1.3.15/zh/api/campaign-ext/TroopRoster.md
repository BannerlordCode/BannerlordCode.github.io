---
title: "TroopRoster"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TroopRoster`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TroopRoster

**Namespace:** TaleWorlds.CampaignSystem.Roster
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TroopRoster : ISerializableObject`
**Base:** `ISerializableObject`
**File:** `TaleWorlds.CampaignSystem/Roster/TroopRoster.cs`

## 概述

`TroopRoster` 位于 `TaleWorlds.CampaignSystem.Roster`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Roster` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

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

## 主要方法

### CreateDummyTroopRoster
`public static TroopRoster CreateDummyTroopRoster()`

**用途 / Purpose:** 创建一个 `dummy troop roster` 实例或对象。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### CalculateCachedStatsOnLoad
`public static void CalculateCachedStatsOnLoad()`

**用途 / Purpose:** 处理 `calculate cached stats on load` 相关逻辑。

### ToFlattenedRoster
`public FlattenedTroopRoster ToFlattenedRoster()`

**用途 / Purpose:** 处理 `to flattened roster` 相关逻辑。

### Add
`public void Add(TroopRoster troopRoster)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### Add
`public void Add(TroopRosterElement troopRosterElement)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### RemoveIf
`public ICollection<TroopRosterElement> RemoveIf(Predicate<TroopRosterElement> match)`

**用途 / Purpose:** 从当前集合/状态中移除 `if`。

### FindIndexOfTroop
`public int FindIndexOfTroop(CharacterObject character)`

**用途 / Purpose:** 处理 `find index of troop` 相关逻辑。

### RemoveNumberOfNonHeroTroopsRandomly
`public TroopRoster RemoveNumberOfNonHeroTroopsRandomly(int numberOfMen)`

**用途 / Purpose:** 从当前集合/状态中移除 `number of non hero troops randomly`。

### WoundNumberOfNonHeroTroopsRandomly
`public void WoundNumberOfNonHeroTroopsRandomly(int numberOfMen)`

**用途 / Purpose:** 处理 `wound number of non hero troops randomly` 相关逻辑。

### SwapTroopsAtIndices
`public void SwapTroopsAtIndices(int firstIndex, int secondIndex)`

**用途 / Purpose:** 处理 `swap troops at indices` 相关逻辑。

### ShiftTroopToIndex
`public void ShiftTroopToIndex(int troopIndex, int targetIndex)`

**用途 / Purpose:** 处理 `shift troop to index` 相关逻辑。

### AddToCountsAtIndex
`public int AddToCountsAtIndex(int index, int countChange, int woundedCountChange = 0, int xpChange = 0, bool removeDepleted = true)`

**用途 / Purpose:** 向当前集合/状态中添加 `to counts at index`。

### CheckValidity
`public void CheckValidity()`

**用途 / Purpose:** 处理 `check validity` 相关逻辑。

### AddToCounts
`public int AddToCounts(CharacterObject character, int count, bool insertAtFront = false, int woundedCount = 0, int xpChange = 0, bool removeDepleted = true, int index = -1)`

**用途 / Purpose:** 向当前集合/状态中添加 `to counts`。

### GetTroopCount
`public int GetTroopCount(CharacterObject troop)`

**用途 / Purpose:** 获取 `troop count` 的当前值。

### RemoveZeroCounts
`public void RemoveZeroCounts()`

**用途 / Purpose:** 从当前集合/状态中移除 `zero counts`。

### GetElementCopyAtIndex
`public TroopRosterElement GetElementCopyAtIndex(int index)`

**用途 / Purpose:** 获取 `element copy at index` 的当前值。

### SetElementNumber
`public void SetElementNumber(int index, int number)`

**用途 / Purpose:** 设置 `element number` 的值或状态。

### GetElementNumber
`public int GetElementNumber(int index)`

**用途 / Purpose:** 获取 `element number` 的当前值。

### GetElementNumber
`public int GetElementNumber(CharacterObject character)`

**用途 / Purpose:** 获取 `element number` 的当前值。

### SetElementWoundedNumber
`public void SetElementWoundedNumber(int index, int number)`

**用途 / Purpose:** 设置 `element wounded number` 的值或状态。

### GetElementWoundedNumber
`public int GetElementWoundedNumber(int index)`

**用途 / Purpose:** 获取 `element wounded number` 的当前值。

### SetElementXp
`public void SetElementXp(int index, int number)`

**用途 / Purpose:** 设置 `element xp` 的值或状态。

### GetElementXp
`public int GetElementXp(int index)`

**用途 / Purpose:** 获取 `element xp` 的当前值。

### GetElementXp
`public int GetElementXp(CharacterObject character)`

**用途 / Purpose:** 获取 `element xp` 的当前值。

### GetCharacterAtIndex
`public CharacterObject GetCharacterAtIndex(int index)`

**用途 / Purpose:** 获取 `character at index` 的当前值。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### RostersAreIdentical
`public static bool RostersAreIdentical(TroopRoster a, TroopRoster b)`

**用途 / Purpose:** 处理 `rosters are identical` 相关逻辑。

### Contains
`public bool Contains(CharacterObject character)`

**用途 / Purpose:** 处理 `contains` 相关逻辑。

### ValidateTroopListCache
`public void ValidateTroopListCache()`

**用途 / Purpose:** 处理 `validate troop list cache` 相关逻辑。

### GetTroopRoster
`public MBList<TroopRosterElement> GetTroopRoster()`

**用途 / Purpose:** 获取 `troop roster` 的当前值。

### Clear
`public void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### RemoveTroop
`public void RemoveTroop(CharacterObject troop, int numberToRemove = 1, UniqueTroopDescriptor troopSeed = default(UniqueTroopDescriptor), int xp = 0)`

**用途 / Purpose:** 从当前集合/状态中移除 `troop`。

### WoundTroop
`public void WoundTroop(CharacterObject troop, int numberToWound = 1, UniqueTroopDescriptor troopSeed = default(UniqueTroopDescriptor))`

**用途 / Purpose:** 处理 `wound troop` 相关逻辑。

### Sum
`public int Sum(Func<TroopRosterElement, int> selector)`

**用途 / Purpose:** 处理 `sum` 相关逻辑。

### OnHeroHealthStatusChanged
`public void OnHeroHealthStatusChanged(Hero hero)`

**用途 / Purpose:** 当 `hero health status changed` 事件触发时调用此方法。

### UpdateVersion
`public void UpdateVersion()`

**用途 / Purpose:** 更新 `version` 的状态或数据。

### CloneRosterData
`public TroopRoster CloneRosterData()`

**用途 / Purpose:** 处理 `clone roster data` 相关逻辑。

### AddXpToTroop
`public void AddXpToTroop(CharacterObject troop, int xpAmount)`

**用途 / Purpose:** 向当前集合/状态中添加 `xp to troop`。

### AddXpToTroopAtIndex
`public void AddXpToTroopAtIndex(int index, int xpAmount)`

**用途 / Purpose:** 向当前集合/状态中添加 `xp to troop at index`。

## 使用示例

```csharp
TroopRoster.CreateDummyTroopRoster();
```

## 参见

- [完整类目录](../catalog)