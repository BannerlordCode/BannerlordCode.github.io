---
title: "ProdigalSonIssueQuest"
description: "ProdigalSonIssueQuest 的自动生成类参考。"
---
# ProdigalSonIssueQuest

**Namespace:** SandBox.Issues
**Module:** SandBox.Issues
**Type:** `public class ProdigalSonIssueQuest : QuestBase`
**Base:** `QuestBase`
**File:** `Modules.SandBox/SandBox/SandBox.Issues/ProdigalSonIssueBehavior.cs`

## 概述

`ProdigalSonIssueQuest` 位于 `SandBox.Issues`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Issues` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |

## 主要方法

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 在 「hero can have campaign issues info is requested」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ProdigalSonIssueQuest 实例
ProdigalSonIssueQuest prodigalSonIssueQuest = ...;
prodigalSonIssueQuest.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### OnHeroCanMoveToSettlementInfoIsRequested
`public override void OnHeroCanMoveToSettlementInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 在 「hero can move to settlement info is requested」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ProdigalSonIssueQuest 实例
ProdigalSonIssueQuest prodigalSonIssueQuest = ...;
prodigalSonIssueQuest.OnHeroCanMoveToSettlementInfoIsRequested(hero, result);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ProdigalSonIssueQuest prodigalSonIssueQuest = ...;
prodigalSonIssueQuest.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

## 参见

- [本区域目录](../)