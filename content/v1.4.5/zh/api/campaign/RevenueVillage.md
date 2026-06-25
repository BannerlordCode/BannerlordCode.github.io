---
title: "RevenueVillage"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RevenueVillage`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# RevenueVillage

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RevenueVillage`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/RevenueFarmingIssueBehavior.cs`

## 概述

`RevenueVillage` 位于 `TaleWorlds.CampaignSystem.Issues`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Issues` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetDone
`public void SetDone()`

**用途 / Purpose:** 设置 `done` 的值或状态。

### SetAdditionalProgress
`public void SetAdditionalProgress(float progress)`

**用途 / Purpose:** 设置 `additional progress` 的值或状态。

### GetIsCompleted
`public bool GetIsCompleted()`

**用途 / Purpose:** 获取 `is completed` 的当前值。

## 使用示例

```csharp
var value = new RevenueVillage();
value.SetDone();
```

## 参见

- [完整类目录](../catalog)