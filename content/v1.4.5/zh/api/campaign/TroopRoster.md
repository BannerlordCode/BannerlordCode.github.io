---
title: "TroopRoster"
description: "TroopRoster 的自动生成类参考。"
---
# TroopRoster

**Namespace:** TaleWorlds.CampaignSystem.Roster
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TroopRoster : ISerializableObject`
**Base:** `ISerializableObject`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Roster/TroopRoster.cs`

## 概述

`TroopRoster` 位于 `TaleWorlds.CampaignSystem.Roster`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Roster` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `VersionNo` | `public int VersionNo { get; }` |

## 主要方法

### CreateDummyTroopRoster
`public static TroopRoster CreateDummyTroopRoster()`

**用途 / Purpose:** 构建一个新的 「dummy troop roster」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
TroopRoster.CreateDummyTroopRoster();
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
var result = troopRoster.GetHashCode();
```

### CalculateCachedStatsOnLoad
`public static void CalculateCachedStatsOnLoad()`

**用途 / Purpose:** 计算「cached stats on load」的当前值或结果。

```csharp
// 静态调用，不需要实例
TroopRoster.CalculateCachedStatsOnLoad();
```

### ToFlattenedRoster
`public FlattenedTroopRoster ToFlattenedRoster()`

**用途 / Purpose:** 处理与 「to flattened roster」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
var result = troopRoster.ToFlattenedRoster();
```

### Add
`public void Add(TroopRoster troopRoster)`

**用途 / Purpose:** 向当前容器或状态添加项。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
troopRoster.Add(troopRoster);
```

### Add
`public void Add(TroopRosterElement troopRosterElement)`

**用途 / Purpose:** 向当前容器或状态添加项。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
troopRoster.Add(troopRosterElement);
```

### RemoveIf
`public ICollection<TroopRosterElement> RemoveIf(Predicate<TroopRosterElement> match)`

**用途 / Purpose:** 从当前容器或状态中移除 「if」。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
var result = troopRoster.RemoveIf(match);
```

### FindIndexOfTroop
`public int FindIndexOfTroop(CharacterObject character)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「index of troop」。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
var result = troopRoster.FindIndexOfTroop(character);
```

### RemoveNumberOfNonHeroTroopsRandomly
`public TroopRoster RemoveNumberOfNonHeroTroopsRandomly(int numberOfMen)`

**用途 / Purpose:** 从当前容器或状态中移除 「number of non hero troops randomly」。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
var result = troopRoster.RemoveNumberOfNonHeroTroopsRandomly(0);
```

### WoundNumberOfNonHeroTroopsRandomly
`public void WoundNumberOfNonHeroTroopsRandomly(int numberOfMen)`

**用途 / Purpose:** 处理与 「wound number of non hero troops randomly」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
troopRoster.WoundNumberOfNonHeroTroopsRandomly(0);
```

### SwapTroopsAtIndices
`public void SwapTroopsAtIndices(int firstIndex, int secondIndex)`

**用途 / Purpose:** 处理与 「swap troops at indices」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
troopRoster.SwapTroopsAtIndices(0, 0);
```

### ShiftTroopToIndex
`public void ShiftTroopToIndex(int troopIndex, int targetIndex)`

**用途 / Purpose:** 处理与 「shift troop to index」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
troopRoster.ShiftTroopToIndex(0, 0);
```

### AddToCountsAtIndex
`public int AddToCountsAtIndex(int index, int countChange, int woundedCountChange = 0, int xpChange = 0, bool removeDepleted = true)`

**用途 / Purpose:** 将 「to counts at index」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
var result = troopRoster.AddToCountsAtIndex(0, 0, 0, 0, false);
```

### CheckValidity
`public void CheckValidity()`

**用途 / Purpose:** 检查「validity」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
troopRoster.CheckValidity();
```

### AddToCounts
`public int AddToCounts(CharacterObject character, int count, bool insertAtFront = false, int woundedCount = 0, int xpChange = 0, bool removeDepleted = true, int index = -1)`

**用途 / Purpose:** 将 「to counts」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
var result = troopRoster.AddToCounts(character, 0, false, 0, 0, false, 0);
```

### GetTroopCount
`public int GetTroopCount(CharacterObject troop)`

**用途 / Purpose:** 读取并返回当前对象中 「troop count」 的结果。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
var result = troopRoster.GetTroopCount(troop);
```

### RemoveZeroCounts
`public void RemoveZeroCounts()`

**用途 / Purpose:** 从当前容器或状态中移除 「zero counts」。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
troopRoster.RemoveZeroCounts();
```

### GetElementCopyAtIndex
`public TroopRosterElement GetElementCopyAtIndex(int index)`

**用途 / Purpose:** 读取并返回当前对象中 「element copy at index」 的结果。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
var result = troopRoster.GetElementCopyAtIndex(0);
```

### SetElementNumber
`public void SetElementNumber(int index, int number)`

**用途 / Purpose:** 为 「element number」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
troopRoster.SetElementNumber(0, 0);
```

### GetElementNumber
`public int GetElementNumber(int index)`

**用途 / Purpose:** 读取并返回当前对象中 「element number」 的结果。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
var result = troopRoster.GetElementNumber(0);
```

### GetElementNumber
`public int GetElementNumber(CharacterObject character)`

**用途 / Purpose:** 读取并返回当前对象中 「element number」 的结果。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
var result = troopRoster.GetElementNumber(character);
```

### SetElementWoundedNumber
`public void SetElementWoundedNumber(int index, int number)`

**用途 / Purpose:** 为 「element wounded number」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
troopRoster.SetElementWoundedNumber(0, 0);
```

### GetElementWoundedNumber
`public int GetElementWoundedNumber(int index)`

**用途 / Purpose:** 读取并返回当前对象中 「element wounded number」 的结果。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
var result = troopRoster.GetElementWoundedNumber(0);
```

### SetElementXp
`public void SetElementXp(int index, int number)`

**用途 / Purpose:** 为 「element xp」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
troopRoster.SetElementXp(0, 0);
```

### GetElementXp
`public int GetElementXp(int index)`

**用途 / Purpose:** 读取并返回当前对象中 「element xp」 的结果。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
var result = troopRoster.GetElementXp(0);
```

### GetElementXp
`public int GetElementXp(CharacterObject character)`

**用途 / Purpose:** 读取并返回当前对象中 「element xp」 的结果。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
var result = troopRoster.GetElementXp(character);
```

### GetCharacterAtIndex
`public CharacterObject GetCharacterAtIndex(int index)`

**用途 / Purpose:** 读取并返回当前对象中 「character at index」 的结果。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
var result = troopRoster.GetCharacterAtIndex(0);
```

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
var result = troopRoster.Equals(obj);
```

### RostersAreIdentical
`public static bool RostersAreIdentical(TroopRoster a, TroopRoster b)`

**用途 / Purpose:** 处理与 「rosters are identical」 相关的逻辑。

```csharp
// 静态调用，不需要实例
TroopRoster.RostersAreIdentical(a, b);
```

### Contains
`public bool Contains(CharacterObject character)`

**用途 / Purpose:** 判断当前对象是否包含指定项。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
var result = troopRoster.Contains(character);
```

### ValidateTroopListCache
`public void ValidateTroopListCache()`

**用途 / Purpose:** 检查「troop list cache」是否满足约束条件，通常返回布尔值。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
troopRoster.ValidateTroopListCache();
```

### GetTroopRoster
`public MBList<TroopRosterElement> GetTroopRoster()`

**用途 / Purpose:** 读取并返回当前对象中 「troop roster」 的结果。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
var result = troopRoster.GetTroopRoster();
```

### Clear
`public void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
troopRoster.Clear();
```

### RemoveTroop
`public void RemoveTroop(CharacterObject troop, int numberToRemove = 1, UniqueTroopDescriptor troopSeed = default(UniqueTroopDescriptor), int xp = 0)`

**用途 / Purpose:** 从当前容器或状态中移除 「troop」。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
troopRoster.RemoveTroop(troop, 0, default(UniqueTroopDescriptor), 0);
```

### WoundTroop
`public void WoundTroop(CharacterObject troop, int numberToWound = 1, UniqueTroopDescriptor troopSeed = default(UniqueTroopDescriptor))`

**用途 / Purpose:** 处理与 「wound troop」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
troopRoster.WoundTroop(troop, 0, default(UniqueTroopDescriptor));
```

### Sum
`public int Sum(Func<TroopRosterElement, int> selector)`

**用途 / Purpose:** 处理与 「sum」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
var result = troopRoster.Sum(func<TroopRosterElement, 0);
```

### OnHeroHealthStatusChanged
`public void OnHeroHealthStatusChanged(Hero hero)`

**用途 / Purpose:** 在 「hero health status changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
troopRoster.OnHeroHealthStatusChanged(hero);
```

### UpdateVersion
`public void UpdateVersion()`

**用途 / Purpose:** 重新计算并更新 「version」 的最新表示。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
troopRoster.UpdateVersion();
```

### CloneRosterData
`public TroopRoster CloneRosterData()`

**用途 / Purpose:** 复制当前对象的状态并返回一个新的「roster data」实例。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
var result = troopRoster.CloneRosterData();
```

### AddXpToTroop
`public void AddXpToTroop(CharacterObject troop, int xpAmount)`

**用途 / Purpose:** 将 「xp to troop」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
troopRoster.AddXpToTroop(troop, 0);
```

### AddXpToTroopAtIndex
`public void AddXpToTroopAtIndex(int index, int xpAmount)`

**用途 / Purpose:** 将 「xp to troop at index」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 TroopRoster 实例
TroopRoster troopRoster = ...;
troopRoster.AddXpToTroopAtIndex(0, 0);
```

## 使用示例

```csharp
TroopRoster.CreateDummyTroopRoster();
```

## 参见

- [本区域目录](../)