---
title: "LandLordCompanyOfTroubleIssue"
description: "LandLordCompanyOfTroubleIssue 的自动生成类参考。"
---
# LandLordCompanyOfTroubleIssue

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LandLordCompanyOfTroubleIssue`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Issues/LandLordCompanyOfTroubleIssueBehavior.cs`

## 概述

`LandLordCompanyOfTroubleIssue` 位于 `TaleWorlds.CampaignSystem.Issues`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Issues` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueAsRumorInSettlement` | `public override TextObject IssueAsRumorInSettlement { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |
| `Title` | `public override TextObject Title { get; }` |

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将「events」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 LandLordCompanyOfTroubleIssue 实例
LandLordCompanyOfTroubleIssue landLordCompanyOfTroubleIssue = ...;
landLordCompanyOfTroubleIssue.RegisterEvents();
```

### company_of_trouble_menu_game_menu_on_init_background
`public static void company_of_trouble_menu_game_menu_on_init_background(MenuCallbackArgs args)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
LandLordCompanyOfTroubleIssue.company_of_trouble_menu_game_menu_on_init_background(args);
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**用途 / Purpose:** 在 「check for issue」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LandLordCompanyOfTroubleIssue 实例
LandLordCompanyOfTroubleIssue landLordCompanyOfTroubleIssue = ...;
landLordCompanyOfTroubleIssue.OnCheckForIssue(hero);
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 将「data」同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 LandLordCompanyOfTroubleIssue 实例
LandLordCompanyOfTroubleIssue landLordCompanyOfTroubleIssue = ...;
landLordCompanyOfTroubleIssue.SyncData(dataStore);
```

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**用途 / Purpose:** 读取并返回当前对象中 「frequency」 的结果。

```csharp
// 先通过子系统 API 拿到 LandLordCompanyOfTroubleIssue 实例
LandLordCompanyOfTroubleIssue landLordCompanyOfTroubleIssue = ...;
var result = landLordCompanyOfTroubleIssue.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**用途 / Purpose:** 创建或发起「stay alive conditions」。

```csharp
// 先通过子系统 API 拿到 LandLordCompanyOfTroubleIssue 实例
LandLordCompanyOfTroubleIssue landLordCompanyOfTroubleIssue = ...;
var result = landLordCompanyOfTroubleIssue.IssueStayAliveConditions();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
LandLordCompanyOfTroubleIssue landLordCompanyOfTroubleIssue = ...;
landLordCompanyOfTroubleIssue.RegisterEvents();
```

## 参见

- [本区域目录](../)