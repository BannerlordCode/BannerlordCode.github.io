---
title: "PartyScreenData"
description: "PartyScreenData 的自动生成类参考。"
---
# PartyScreenData

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyScreenData : IEnumerable<ValueTuple<TroopRosterElement, bool>>, IEnumerable`
**Base:** `IEnumerable<ValueTuple<TroopRosterElement`
**File:** `TaleWorlds.CampaignSystem/Party/PartyScreenData.cs`

## 概述

`PartyScreenData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `PartyScreenData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `RightParty` | `public PartyBase RightParty { get; }` |
| `LeftParty` | `public PartyBase LeftParty { get; }` |
| `RightPartyLeaderHero` | `public Hero RightPartyLeaderHero { get; }` |
| `LeftPartyLeaderHero` | `public Hero LeftPartyLeaderHero { get; }` |

## 主要方法

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 PartyScreenData 实例
PartyScreenData partyScreenData = ...;
var result = partyScreenData.GetHashCode();
```

### InitializeCopyFrom
`public void InitializeCopyFrom(PartyBase rightParty, PartyBase leftParty)`

**用途 / Purpose:** 为 copy from 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 PartyScreenData 实例
PartyScreenData partyScreenData = ...;
partyScreenData.InitializeCopyFrom(rightParty, leftParty);
```

### CopyFromPartyAndRoster
`public void CopyFromPartyAndRoster(TroopRoster rightPartyMemberRoster, TroopRoster rightPartyPrisonerRoster, TroopRoster leftPartyMemberRoster, TroopRoster leftPartyPrisonerRoster, PartyBase rightParty)`

**用途 / Purpose:** 把当前对象的from party and roster状态复制到目标对象。

```csharp
// 先通过子系统 API 拿到 PartyScreenData 实例
PartyScreenData partyScreenData = ...;
partyScreenData.CopyFromPartyAndRoster(rightPartyMemberRoster, rightPartyPrisonerRoster, leftPartyMemberRoster, leftPartyPrisonerRoster, rightParty);
```

### CopyFromScreenData
`public void CopyFromScreenData(PartyScreenData data)`

**用途 / Purpose:** 把当前对象的from screen data状态复制到目标对象。

```csharp
// 先通过子系统 API 拿到 PartyScreenData 实例
PartyScreenData partyScreenData = ...;
partyScreenData.CopyFromScreenData(data);
```

### BindRostersFrom
`public void BindRostersFrom(TroopRoster rightPartyMemberRoster, TroopRoster rightPartyPrisonerRoster, TroopRoster leftPartyMemberRoster, TroopRoster leftPartyPrisonerRoster, PartyBase rightParty, PartyBase leftParty)`

**用途 / Purpose:** 调用 BindRostersFrom 对应的操作。

```csharp
// 先通过子系统 API 拿到 PartyScreenData 实例
PartyScreenData partyScreenData = ...;
partyScreenData.BindRostersFrom(rightPartyMemberRoster, rightPartyPrisonerRoster, leftPartyMemberRoster, leftPartyPrisonerRoster, rightParty, leftParty);
```

### ResetUsing
`public void ResetUsing(PartyScreenData partyScreenData)`

**用途 / Purpose:** 将 using 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 PartyScreenData 实例
PartyScreenData partyScreenData = ...;
partyScreenData.ResetUsing(partyScreenData);
```

### IsThereAnyTroopTradeDifferenceBetween
`public bool IsThereAnyTroopTradeDifferenceBetween(PartyScreenData other)`

**用途 / Purpose:** 判断当前对象是否处于 there any troop trade difference between 状态或条件。

```csharp
// 先通过子系统 API 拿到 PartyScreenData 实例
PartyScreenData partyScreenData = ...;
var result = partyScreenData.IsThereAnyTroopTradeDifferenceBetween(other);
```

### GetTroopTradeDifferencesFromTo
`public List<TroopTradeDifference> GetTroopTradeDifferencesFromTo(PartyScreenData toPartyScreenData, PartyScreenLogic.PartyRosterSide side = PartyScreenLogic.PartyRosterSide.None)`

**用途 / Purpose:** 读取并返回当前对象中 troop trade differences from to 的结果。

```csharp
// 先通过子系统 API 拿到 PartyScreenData 实例
PartyScreenData partyScreenData = ...;
var result = partyScreenData.GetTroopTradeDifferencesFromTo(toPartyScreenData, partyScreenLogic.PartyRosterSide.None);
```

### GetEnumerator
`public IEnumerator<ValueTuple<TroopRosterElement, bool>> GetEnumerator()`

**用途 / Purpose:** 读取并返回当前对象中 enumerator 的结果。

```csharp
// 先通过子系统 API 拿到 PartyScreenData 实例
PartyScreenData partyScreenData = ...;
var result = partyScreenData.GetEnumerator();
```

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 PartyScreenData 实例
PartyScreenData partyScreenData = ...;
var result = partyScreenData.Equals(obj);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
PartyScreenData entry = ...;
```

## 参见

- [本区域目录](../)