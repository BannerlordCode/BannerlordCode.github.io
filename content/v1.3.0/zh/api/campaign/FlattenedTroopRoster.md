---
title: "FlattenedTroopRoster"
description: "FlattenedTroopRoster 的自动生成类参考。"
---
# FlattenedTroopRoster

**Namespace:** TaleWorlds.CampaignSystem.Roster
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FlattenedTroopRoster : IEnumerable<FlattenedTroopRosterElement>, IEnumerable`
**Base:** `IEnumerable<FlattenedTroopRosterElement>`
**File:** `TaleWorlds.CampaignSystem/Roster/FlattenedTroopRoster.cs`

## 概述

`FlattenedTroopRoster` 位于 `TaleWorlds.CampaignSystem.Roster`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Roster` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `this` | `public FlattenedTroopRosterElement this { get; set; }` |
| `Troops` | `public IEnumerable<CharacterObject> Troops { get; }` |

## 主要方法

### Add
`public void Add(MBList<TroopRosterElement> roster)`

**用途 / Purpose:** 向当前容器或状态添加项。

```csharp
// 先通过子系统 API 拿到 FlattenedTroopRoster 实例
FlattenedTroopRoster flattenedTroopRoster = ...;
flattenedTroopRoster.Add(roster);
```

### Add
`public void Add(TroopRosterElement troop)`

**用途 / Purpose:** 向当前容器或状态添加项。

```csharp
// 先通过子系统 API 拿到 FlattenedTroopRoster 实例
FlattenedTroopRoster flattenedTroopRoster = ...;
flattenedTroopRoster.Add(troop);
```

### Add
`public void Add(CharacterObject troop, int number, int woundedNumber = 0)`

**用途 / Purpose:** 向当前容器或状态添加项。

```csharp
// 先通过子系统 API 拿到 FlattenedTroopRoster 实例
FlattenedTroopRoster flattenedTroopRoster = ...;
flattenedTroopRoster.Add(troop, 0, 0);
```

### Add
`public UniqueTroopDescriptor Add(CharacterObject troop, bool isWounded = false, int xp = 0)`

**用途 / Purpose:** 向当前容器或状态添加项。

```csharp
// 先通过子系统 API 拿到 FlattenedTroopRoster 实例
FlattenedTroopRoster flattenedTroopRoster = ...;
var result = flattenedTroopRoster.Add(troop, false, 0);
```

### GenerateUniqueNoFromParty
`public static int GenerateUniqueNoFromParty(MobileParty party, int troopIndex)`

**用途 / Purpose:** 生成unique no from party的实例、数据或表示。

```csharp
// 静态调用，不需要实例
FlattenedTroopRoster.GenerateUniqueNoFromParty(party, 0);
```

### Remove
`public void Remove(UniqueTroopDescriptor descriptor)`

**用途 / Purpose:** 从当前容器或状态中移除项。

```csharp
// 先通过子系统 API 拿到 FlattenedTroopRoster 实例
FlattenedTroopRoster flattenedTroopRoster = ...;
flattenedTroopRoster.Remove(descriptor);
```

### Clear
`public void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 FlattenedTroopRoster 实例
FlattenedTroopRoster flattenedTroopRoster = ...;
flattenedTroopRoster.Clear();
```

### RemoveIf
`public ICollection<FlattenedTroopRosterElement> RemoveIf(Predicate<FlattenedTroopRosterElement> match)`

**用途 / Purpose:** 从当前容器或状态中移除 if。

```csharp
// 先通过子系统 API 拿到 FlattenedTroopRoster 实例
FlattenedTroopRoster flattenedTroopRoster = ...;
var result = flattenedTroopRoster.RemoveIf(match);
```

### FindIndexOfCharacter
`public UniqueTroopDescriptor FindIndexOfCharacter(CharacterObject character)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的index of character。

```csharp
// 先通过子系统 API 拿到 FlattenedTroopRoster 实例
FlattenedTroopRoster flattenedTroopRoster = ...;
var result = flattenedTroopRoster.FindIndexOfCharacter(character);
```

### GetEnumerator
`public IEnumerator<FlattenedTroopRosterElement> GetEnumerator()`

**用途 / Purpose:** 读取并返回当前对象中 enumerator 的结果。

```csharp
// 先通过子系统 API 拿到 FlattenedTroopRoster 实例
FlattenedTroopRoster flattenedTroopRoster = ...;
var result = flattenedTroopRoster.GetEnumerator();
```

### OnTroopKilled
`public void OnTroopKilled(UniqueTroopDescriptor troopSeed)`

**用途 / Purpose:** 在 troop killed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FlattenedTroopRoster 实例
FlattenedTroopRoster flattenedTroopRoster = ...;
flattenedTroopRoster.OnTroopKilled(troopSeed);
```

### OnTroopWounded
`public void OnTroopWounded(UniqueTroopDescriptor troopSeed)`

**用途 / Purpose:** 在 troop wounded 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FlattenedTroopRoster 实例
FlattenedTroopRoster flattenedTroopRoster = ...;
flattenedTroopRoster.OnTroopWounded(troopSeed);
```

### OnTroopRouted
`public void OnTroopRouted(UniqueTroopDescriptor troopSeed)`

**用途 / Purpose:** 在 troop routed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FlattenedTroopRoster 实例
FlattenedTroopRoster flattenedTroopRoster = ...;
flattenedTroopRoster.OnTroopRouted(troopSeed);
```

### OnTroopGainXp
`public void OnTroopGainXp(UniqueTroopDescriptor troopSeed, int xpGained)`

**用途 / Purpose:** 在 troop gain xp 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FlattenedTroopRoster 实例
FlattenedTroopRoster flattenedTroopRoster = ...;
flattenedTroopRoster.OnTroopGainXp(troopSeed, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
FlattenedTroopRoster flattenedTroopRoster = ...;
flattenedTroopRoster.Add(roster);
```

## 参见

- [本区域目录](../)