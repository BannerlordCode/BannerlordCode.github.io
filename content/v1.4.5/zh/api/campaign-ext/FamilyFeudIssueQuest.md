---
title: "FamilyFeudIssueQuest"
description: "FamilyFeudIssueQuest 的自动生成类参考。"
---
# FamilyFeudIssueQuest

**Namespace:** SandBox.Issues
**Module:** SandBox.Issues
**Type:** `public class FamilyFeudIssueQuest : QuestBase`
**Base:** `QuestBase`
**File:** `Modules.SandBox/SandBox/SandBox.Issues/FamilyFeudIssueBehavior.cs`

## 概述

`FamilyFeudIssueQuest` 位于 `SandBox.Issues`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Issues` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnHeroCanBeSelectedInInventoryInfoIsRequested
`public override void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero can be selected in inventory info is requested 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssueQuest 实例
FamilyFeudIssueQuest familyFeudIssueQuest = ...;
familyFeudIssueQuest.OnHeroCanBeSelectedInInventoryInfoIsRequested(hero, result);
```

### OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested
`public override void OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero can have party role or be governor info is requested 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssueQuest 实例
FamilyFeudIssueQuest familyFeudIssueQuest = ...;
familyFeudIssueQuest.OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(hero, result);
```

### OnHeroCanLeadPartyInfoIsRequested
`public override void OnHeroCanLeadPartyInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero can lead party info is requested 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssueQuest 实例
FamilyFeudIssueQuest familyFeudIssueQuest = ...;
familyFeudIssueQuest.OnHeroCanLeadPartyInfoIsRequested(hero, result);
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero can have campaign issues info is requested 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssueQuest 实例
FamilyFeudIssueQuest familyFeudIssueQuest = ...;
familyFeudIssueQuest.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### OnMissionStarted
`public void OnMissionStarted(IMission iMission)`

**用途 / Purpose:** **用途 / Purpose:** 在 mission started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssueQuest 实例
FamilyFeudIssueQuest familyFeudIssueQuest = ...;
familyFeudIssueQuest.OnMissionStarted(iMission);
```

### OnSettlementLeft
`public void OnSettlementLeft(MobileParty party, Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 在 settlement left 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssueQuest 实例
FamilyFeudIssueQuest familyFeudIssueQuest = ...;
familyFeudIssueQuest.OnSettlementLeft(party, settlement);
```

### OnBeforeMissionOpened
`public void OnBeforeMissionOpened()`

**用途 / Purpose:** **用途 / Purpose:** 在 before mission opened 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssueQuest 实例
FamilyFeudIssueQuest familyFeudIssueQuest = ...;
familyFeudIssueQuest.OnBeforeMissionOpened();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
FamilyFeudIssueQuest familyFeudIssueQuest = ...;
familyFeudIssueQuest.OnHeroCanBeSelectedInInventoryInfoIsRequested(hero, result);
```

## 参见

- [本区域目录](../)