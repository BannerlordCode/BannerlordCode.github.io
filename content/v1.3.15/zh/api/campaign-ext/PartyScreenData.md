---
title: "PartyScreenData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyScreenData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 获取 `hash code` 的当前值。

### InitializeCopyFrom
`public void InitializeCopyFrom(PartyBase rightParty, PartyBase leftParty)`

**用途 / Purpose:** 初始化 `copy from` 的状态、资源或绑定。

### CopyFromPartyAndRoster
`public void CopyFromPartyAndRoster(TroopRoster rightPartyMemberRoster, TroopRoster rightPartyPrisonerRoster, TroopRoster leftPartyMemberRoster, TroopRoster leftPartyPrisonerRoster, PartyBase rightParty)`

**用途 / Purpose:** 处理 `copy from party and roster` 相关逻辑。

### CopyFromScreenData
`public void CopyFromScreenData(PartyScreenData data)`

**用途 / Purpose:** 处理 `copy from screen data` 相关逻辑。

### BindRostersFrom
`public void BindRostersFrom(TroopRoster rightPartyMemberRoster, TroopRoster rightPartyPrisonerRoster, TroopRoster leftPartyMemberRoster, TroopRoster leftPartyPrisonerRoster, PartyBase rightParty, PartyBase leftParty)`

**用途 / Purpose:** 处理 `bind rosters from` 相关逻辑。

### ResetUsing
`public void ResetUsing(PartyScreenData partyScreenData)`

**用途 / Purpose:** 将 `using` 重置为初始状态。

### IsThereAnyTroopTradeDifferenceBetween
`public bool IsThereAnyTroopTradeDifferenceBetween(PartyScreenData other)`

**用途 / Purpose:** 处理 `is there any troop trade difference between` 相关逻辑。

### GetTroopTradeDifferencesFromTo
`public List<TroopTradeDifference> GetTroopTradeDifferencesFromTo(PartyScreenData toPartyScreenData, PartyScreenLogic.PartyRosterSide side = PartyScreenLogic.PartyRosterSide.None)`

**用途 / Purpose:** 获取 `troop trade differences from to` 的当前值。

### GetEnumerator
`public IEnumerator<ValueTuple<TroopRosterElement, bool>> GetEnumerator()`

**用途 / Purpose:** 获取 `enumerator` 的当前值。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

## 使用示例

```csharp
PartyScreenData example = PartyScreenData.RightParty;
```

## 参见

- [完整类目录](../catalog)