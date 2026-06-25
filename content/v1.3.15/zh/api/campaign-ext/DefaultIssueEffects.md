---
title: "DefaultIssueEffects"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultIssueEffects`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultIssueEffects

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultIssueEffects`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Issues/DefaultIssueEffects.cs`

## 概述

`DefaultIssueEffects` 位于 `TaleWorlds.CampaignSystem.Issues`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Issues` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SettlementLoyalty` | `public static IssueEffect SettlementLoyalty { get; }` |
| `SettlementSecurity` | `public static IssueEffect SettlementSecurity { get; }` |
| `SettlementMilitia` | `public static IssueEffect SettlementMilitia { get; }` |
| `SettlementProsperity` | `public static IssueEffect SettlementProsperity { get; }` |
| `VillageHearth` | `public static IssueEffect VillageHearth { get; }` |
| `SettlementFood` | `public static IssueEffect SettlementFood { get; }` |
| `SettlementTax` | `public static IssueEffect SettlementTax { get; }` |
| `SettlementGarrison` | `public static IssueEffect SettlementGarrison { get; }` |
| `HalfVillageProduction` | `public static IssueEffect HalfVillageProduction { get; }` |
| `IssueOwnerPower` | `public static IssueEffect IssueOwnerPower { get; }` |
| `ClanInfluence` | `public static IssueEffect ClanInfluence { get; }` |

## 使用示例

```csharp
var value = new DefaultIssueEffects();
```

## 参见

- [完整类目录](../catalog)