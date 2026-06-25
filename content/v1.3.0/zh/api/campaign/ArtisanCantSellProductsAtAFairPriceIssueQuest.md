---
title: "ArtisanCantSellProductsAtAFairPriceIssueQuest"
description: "ArtisanCantSellProductsAtAFairPriceIssueQuest 的自动生成类参考。"
---
# ArtisanCantSellProductsAtAFairPriceIssueQuest

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArtisanCantSellProductsAtAFairPriceIssueQuest : QuestBase`
**Base:** `QuestBase`
**File:** `TaleWorlds.CampaignSystem/Issues/ArtisanCantSellProductsAtAFairPriceIssueBehavior.cs`

## 概述

`ArtisanCantSellProductsAtAFairPriceIssueQuest` 位于 `TaleWorlds.CampaignSystem.Issues`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Issues` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |
| `Title` | `public override TextObject Title { get; }` |

## 主要方法

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero can have campaign issues info is requested 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ArtisanCantSellProductsAtAFairPriceIssueQuest 实例
ArtisanCantSellProductsAtAFairPriceIssueQuest artisanCantSellProductsAtAFairPriceIssueQuest = ...;
artisanCantSellProductsAtAFairPriceIssueQuest.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### OnFailed
`public override void OnFailed()`

**用途 / Purpose:** **用途 / Purpose:** 在 failed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ArtisanCantSellProductsAtAFairPriceIssueQuest 实例
ArtisanCantSellProductsAtAFairPriceIssueQuest artisanCantSellProductsAtAFairPriceIssueQuest = ...;
artisanCantSellProductsAtAFairPriceIssueQuest.OnFailed();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ArtisanCantSellProductsAtAFairPriceIssueQuest artisanCantSellProductsAtAFairPriceIssueQuest = ...;
artisanCantSellProductsAtAFairPriceIssueQuest.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

## 参见

- [本区域目录](../)