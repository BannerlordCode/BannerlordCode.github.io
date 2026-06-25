---
title: "SnareTheWealthyIssueQuest"
description: "SnareTheWealthyIssueQuest 的自动生成类参考。"
---
# SnareTheWealthyIssueQuest

**Namespace:** SandBox.Issues
**Module:** SandBox.Issues
**Type:** `public class SnareTheWealthyIssueQuest : QuestBase`
**Base:** `QuestBase`
**File:** `SandBox/Issues/SnareTheWealthyIssueBehavior.cs`

## 概述

`SnareTheWealthyIssueQuest` 位于 `SandBox.Issues`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Issues` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |

## 主要方法

### GetMountAndHarnessVisualIdsForQuestCaravan
`public void GetMountAndHarnessVisualIdsForQuestCaravan(CultureObject culture, out string mountStringId, out string harnessStringId)`

**用途 / Purpose:** 读取并返回当前对象中 mount and harness visual ids for quest caravan 的结果。

```csharp
// 先通过子系统 API 拿到 SnareTheWealthyIssueQuest 实例
SnareTheWealthyIssueQuest snareTheWealthyIssueQuest = ...;
snareTheWealthyIssueQuest.GetMountAndHarnessVisualIdsForQuestCaravan(culture, mountStringId, harnessStringId);
```

### OnWarDeclared
`public void OnWarDeclared(IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail reason)`

**用途 / Purpose:** 在 war declared 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SnareTheWealthyIssueQuest 实例
SnareTheWealthyIssueQuest snareTheWealthyIssueQuest = ...;
snareTheWealthyIssueQuest.OnWarDeclared(faction1, faction2, reason);
```

### OnVillageStateChanged
`public void OnVillageStateChanged(Village village, Village.VillageStates oldState, Village.VillageStates newState, MobileParty raiderParty)`

**用途 / Purpose:** 在 village state changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SnareTheWealthyIssueQuest 实例
SnareTheWealthyIssueQuest snareTheWealthyIssueQuest = ...;
snareTheWealthyIssueQuest.OnVillageStateChanged(village, oldState, newState, raiderParty);
```

### OnMapEventEnded
`public void OnMapEventEnded(MapEvent mapEvent)`

**用途 / Purpose:** 在 map event ended 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SnareTheWealthyIssueQuest 实例
SnareTheWealthyIssueQuest snareTheWealthyIssueQuest = ...;
snareTheWealthyIssueQuest.OnMapEventEnded(mapEvent);
```

### OnSettlementEntered
`public void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**用途 / Purpose:** 在 settlement entered 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SnareTheWealthyIssueQuest 实例
SnareTheWealthyIssueQuest snareTheWealthyIssueQuest = ...;
snareTheWealthyIssueQuest.OnSettlementEntered(party, settlement, hero);
```

### OnSettlementLeft
`public void OnSettlementLeft(MobileParty party, Settlement settlement)`

**用途 / Purpose:** 在 settlement left 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SnareTheWealthyIssueQuest 实例
SnareTheWealthyIssueQuest snareTheWealthyIssueQuest = ...;
snareTheWealthyIssueQuest.OnSettlementLeft(party, settlement);
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 在 hero can have campaign issues info is requested 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SnareTheWealthyIssueQuest 实例
SnareTheWealthyIssueQuest snareTheWealthyIssueQuest = ...;
snareTheWealthyIssueQuest.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SnareTheWealthyIssueQuest snareTheWealthyIssueQuest = ...;
snareTheWealthyIssueQuest.GetMountAndHarnessVisualIdsForQuestCaravan(culture, mountStringId, harnessStringId);
```

## 参见

- [本区域目录](../)