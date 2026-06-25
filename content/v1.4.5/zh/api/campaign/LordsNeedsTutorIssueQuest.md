---
title: "LordsNeedsTutorIssueQuest"
description: "LordsNeedsTutorIssueQuest 的自动生成类参考。"
---
# LordsNeedsTutorIssueQuest

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LordsNeedsTutorIssueQuest : QuestBase`
**Base:** `QuestBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/LordsNeedsTutorIssueBehavior.cs`

## 概述

`LordsNeedsTutorIssueQuest` 位于 `TaleWorlds.CampaignSystem.Issues`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Issues` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |

## 主要方法

### OnHeroCanBeSelectedInInventoryInfoIsRequested
`public override void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero can be selected in inventory info is requested 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LordsNeedsTutorIssueQuest 实例
LordsNeedsTutorIssueQuest lordsNeedsTutorIssueQuest = ...;
lordsNeedsTutorIssueQuest.OnHeroCanBeSelectedInInventoryInfoIsRequested(hero, result);
```

### OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested
`public override void OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero can have party role or be governor info is requested 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LordsNeedsTutorIssueQuest 实例
LordsNeedsTutorIssueQuest lordsNeedsTutorIssueQuest = ...;
lordsNeedsTutorIssueQuest.OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(hero, result);
```

### OnHeroCanLeadPartyInfoIsRequested
`public override void OnHeroCanLeadPartyInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero can lead party info is requested 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LordsNeedsTutorIssueQuest 实例
LordsNeedsTutorIssueQuest lordsNeedsTutorIssueQuest = ...;
lordsNeedsTutorIssueQuest.OnHeroCanLeadPartyInfoIsRequested(hero, result);
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero can have campaign issues info is requested 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LordsNeedsTutorIssueQuest 实例
LordsNeedsTutorIssueQuest lordsNeedsTutorIssueQuest = ...;
lordsNeedsTutorIssueQuest.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### OnHeroCanMarryInfoIsRequested
`public override void OnHeroCanMarryInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero can marry info is requested 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LordsNeedsTutorIssueQuest 实例
LordsNeedsTutorIssueQuest lordsNeedsTutorIssueQuest = ...;
lordsNeedsTutorIssueQuest.OnHeroCanMarryInfoIsRequested(hero, result);
```

### OnHeroGainedSkill
`public void OnHeroGainedSkill(Hero hero, SkillObject skill, int change = 1, bool shouldNotify = true)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero gained skill 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LordsNeedsTutorIssueQuest 实例
LordsNeedsTutorIssueQuest lordsNeedsTutorIssueQuest = ...;
lordsNeedsTutorIssueQuest.OnHeroGainedSkill(hero, skill, 0, false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
LordsNeedsTutorIssueQuest lordsNeedsTutorIssueQuest = ...;
lordsNeedsTutorIssueQuest.OnHeroCanBeSelectedInInventoryInfoIsRequested(hero, result);
```

## 参见

- [本区域目录](../)